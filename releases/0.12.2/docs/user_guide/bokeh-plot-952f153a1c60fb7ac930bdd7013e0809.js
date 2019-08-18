document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("2813b126-1753-4c07-b511-367c8d36e58c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2813b126-1753-4c07-b511-367c8d36e58c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
          (function outer(modules, cache, entry) {
            if (typeof Bokeh !== "undefined") {
              for (var name in modules) {
                var module = modules[name];
          
                if (typeof(module) === "string") {
                  try {
                    coffee = Bokeh.require("coffee-script")
                  } catch (e) {
                    throw new Error("Compiler requested but failed to import. Make sure bokeh-compiler(-min).js was included.")
                  }
          
                  function compile(code) {
                    var body = coffee.compile(code, {bare: true, shiftLine: true});
                    return new Function("require", "module", "exports", body);
                  }
          
                  modules[name] = [compile(module), {}];
                }
              }
          
              for (var name in modules) {
                Bokeh.require.modules[name] = modules[name];
              }
          
              for (var i = 0; i < entry.length; i++) {
                Bokeh.Models.register_locations(Bokeh.require(entry[i]));
              }
            } else {
              throw new Error("Cannot find Bokeh. You have to load it prior to loading plugins.");
            }
          })({
           "custom/main":[function(require,module,exports){
             module.exports = { Custom: require("custom/custom"),
          DrawTool: require("custom/draw_tool"),
          LatexLabel: require("custom/latex_label"),
          MyFormatter: require("custom/my_formatter"),
          Surface3d: require("custom/surface3d") };
           }, {}],
           "custom/custom": "\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\nclass CustomView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    @render()\n\n    # Set Backbone listener so that when the Bokeh slider has a change\n    # event, we can process the new data\n    @listenTo(@model.slider, \'change\', () => @render())\n\n  render: () ->\n    # Backbone Views create <div> elements by default, accessible as @$el.\n    # Many Bokeh views ignore this default <div>, and instead do things\n    # like draw to the HTML canvas. In this case though, we change the\n    # contents of the <div>, based on the current slider value.\n    @$el.html(\"<h1>#{ @model.text }: #{ @model.slider.value }</h1>\")\n    @$(\'h1\').css({ \'color\': \'#686d8e\', \'background-color\': \'#2a3153\' })\n\nclass Custom extends LayoutDOM.Model\n\n  # If there is an associated view, this is boilerplate.\n  default_view: CustomView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Custom\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. bokeh.core.properties.String will be\n  # p.String in the JS implementation. Where the JS type system is not yet\n  # as rich, you can use p.Any as a \"wildcard\" property type.\n  @define {\n    text:   [ p.String ]\n    slider: [ p.Any    ]\n  }\n\n# This is boilerplate. Every implementation should export a Model\n# and (when applicable) also a View.\nmodule.exports =\n  Model: Custom\n  View: CustomView\n",
          "custom/draw_tool": "\np = require \"core/properties\"\nGestureTool = require \"models/tools/gestures/gesture_tool\"\n\nclass DrawToolView extends GestureTool.View\n\n  # this is executed when the pan/drag event starts\n  _pan_start: (e) ->\n    @model.source.data = {x: [], y: []}\n\n  # this is executed on subsequent mouse/touch moves\n  _pan: (e) ->\n    frame = @plot_model.frame\n    canvas = @plot_view.canvas\n\n    vx = canvas.sx_to_vx(e.bokeh.sx)\n    vy = canvas.sy_to_vy(e.bokeh.sy)\n    if not frame.contains(vx, vy)\n      return null\n\n    x = frame.get(\'x_mappers\').default.map_from_target(vx)\n    y = frame.get(\'y_mappers\').default.map_from_target(vy)\n\n    @model.source.data.x.push(x)\n    @model.source.data.y.push(y)\n    @model.source.trigger(\'change\')\n\n  # this is executed then the pan/drag ends\n  _pan_end: (e) -> return null\n\nclass DrawTool extends GestureTool.Model\n  default_view: DrawToolView\n  type: \"DrawTool\"\n\n  tool_name: \"Drag Span\"\n  icon: \"bk-tool-icon-lasso-select\"\n  event_type: \"pan\"\n  default_order: 12\n\n  @define { source: [ p.Instance ] }\n\nmodule.exports =\n  Model: DrawTool\n  View: DrawToolView\n",
          "custom/latex_label": "\nLabel = require \"models/annotations/label\"\n\nclass LatexLabelView extends Label.View\n  render: () ->\n\n    #--- Start of copied section from ``Label.render`` implementation\n\n    ctx = @plot_view.canvas_view.ctx\n\n    # Here because AngleSpec does units tranform and label doesn\'t support specs\n    switch @mget(\'angle_units\')\n      when \"rad\" then angle = -1 * @mget(\'angle\')\n      when \"deg\" then angle = -1 * @mget(\'angle\') * Math.PI/180.0\n\n    if @mget(\'x_units\') == \"data\"\n      vx = @xmapper.map_to_target(@mget(\'x\'))\n    else\n      vx = @mget(\'x\')\n    sx = @canvas.vx_to_sx(vx)\n\n    if @mget(\'y_units\') == \"data\"\n      vy = @ymapper.map_to_target(@mget(\'y\'))\n    else\n      vy = @mget(\'y\')\n    sy = @canvas.vy_to_sy(vy)\n\n    if @model.panel?\n      panel_offset = @_get_panel_offset()\n      sx += panel_offset.x\n      sy += panel_offset.y\n\n    #--- End of copied section from ``Label.render`` implementation\n\n    # ``katex`` is loaded into the global window at runtime\n    # katex.renderToString returns a html ``span`` element\n    latex = katex.renderToString(@mget(\'text\'), {displayMode: true})\n\n    # Must render as superpositioned div (not on canvas) so that KaTex\n    # css can properly style the text\n    @_css_text(ctx, latex, sx + @mget(\'x_offset\'), sy - @mget(\'y_offset\'), angle)\n\nclass LatexLabel extends Label.Model\n  type: \'LatexLabel\'\n  default_view: LatexLabelView\n\nmodule.exports =\n  Model: LatexLabel\n  View: LatexLabelView\n",
          "custom/my_formatter": "\nTickFormatter = require \"models/formatters/tick_formatter\"\n\nclass MyFormatter extends TickFormatter.Model\n  type: \"MyFormatter\"\n\n  # TickFormatters should implement this method, which accepts a lisst\n  # of numbers (ticks) and returns a list of strings\n  doFormat: (ticks) ->\n    # format the first tick as-is\n    formatted = [\"#{ticks[0]}\"]\n\n    # format the remaining ticks as a difference from the first\n    for i in [1...ticks.length]\n       formatted.push(\"+#{(ticks[i]-ticks[0]).toPrecision(2)}\")\n\n    return formatted\n\nmodule.exports =\n  Model: MyFormatter\n",
          "custom/surface3d": "\n# This file contains the JavaScript (CoffeeScript) implementation\n# for a Bokeh custom extension. The \"surface3d.py\" contains the\n# python counterpart.\n#\n# This custom model wraps one part of the third-party vis.js library:\n#\n#     http://visjs.org/index.html\n#\n# Making it easy to hook up python data analytics tools (NumPy, SciPy,\n# Pandas, etc.) to web presentations using the Bokeh server.\n\n# These \"require\" lines are similar to python \"import\" statements\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\n# This defines some default options for the Graph3d feature of vis.js\n# See: http://visjs.org/graph3d_examples.html for more details.\nOPTIONS =\n  width:  \'600px\'\n  height: \'600px\'\n  style: \'surface\'\n  showPerspective: true\n  showGrid: true\n  keepAspectRatio: true\n  verticalRatio: 1.0\n  legendLabel: \'stuff\'\n  cameraPosition:\n    horizontal: -0.35\n    vertical: 0.22\n    distance: 1.8\n\n# To create custom model extensions that will render on to the HTML canvas\n# or into the DOM, we must create a View subclass for the model. Currently\n# Bokeh models and views are based on BackBone. More information about\n# using Backbone can be found here:\n#\n#     http://backbonejs.org/\n#\n# In this case we will subclass from the existing BokehJS ``LayoutDOM.View``,\n# corresponding to our\nclass Surface3dView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    url = \"https://cdnjs.cloudflare.com/ajax/libs/vis/4.16.1/vis.min.js\"\n    $.getScript(url).done(@_init)\n\n  # NOTE: we have to use the \"fat arrow\" => here so that \"this\" is bound correctly\n  _init: () =>\n    # Create a new Graph3s using the vis.js API. This assumes the vis.js has\n    # already been loaded (e.g. in a custom app template). In the future Bokeh\n    # models will be able to specify and load external scripts automatically.\n    #\n    # Backbone Views create <div> elements by default, accessible as @$el. Many\n    # Bokeh views ignore this default <div>, and instead do things like draw\n    # to the HTML canvas. In this case though, we use the <div> to attach a\n    # Graph3d to the DOM.\n    @_graph = new vis.Graph3d(@$el[0], @get_data(), OPTIONS)\n\n    # Set Backbone listener so that when the Bokeh data source has a change\n    # event, we can process the new data\n    @listenTo(@model.data_source, \'change\', () =>\n        @_graph.setData(@get_data())\n    )\n\n  # This is the callback executed when the Bokeh data has an change. Its basic\n  # function is to adapt the Bokeh data source to the vis.js DataSet format.\n  get_data: () ->\n    data = new vis.DataSet()\n    source = @model.data_source\n    for i in [0...source.get_length()]\n      data.add({\n        x:     source.get_column(@model.x)[i]\n        y:     source.get_column(@model.y)[i]\n        z:     source.get_column(@model.z)[i]\n        style: source.get_column(@model.color)[i]\n      })\n    return data\n\n# We must also create a corresponding JavaScript Backbone model sublcass to\n# correspond to the python Bokeh model subclass. In this case, since we want\n# an element that can position itself in the DOM according to a Bokeh layout,\n# we subclass from ``LayoutDOM.model``\nclass Surface3d extends LayoutDOM.Model\n\n  # This is usually boilerplate. In some cases there may not be a view.\n  default_view: Surface3dView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Surface3d\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. ``bokeh.core.properties.String`` will be\n  # ``p.String`` in the JS implementatin. Where the JS type system is not yet\n  # as rich, you can use ``p.Any`` as a \"wildcard\" property type.\n  @define {\n    x:           [ p.String           ]\n    y:           [ p.String           ]\n    z:           [ p.String           ]\n    color:       [ p.String           ]\n    data_source: [ p.Instance         ]\n  }\n\n# This is boilerplate. Every implementation should \"export\" a ``Model``\n# and (when applicable) also a ``View``.\nmodule.exports =\n  Model: Surface3d\n  View: Surface3dView\n"
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"b6a063fc-a57a-4a07-923d-840068d237b5":{"roots":{"references":[{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"d03ccd48-0baf-4874-aa38-429db787b57a","type":"Circle"},{"attributes":{"plot":{"id":"26565fb9-9896-4d42-abec-71cf0342002f","subtype":"Figure","type":"Plot"}},"id":"0f11ade1-c04b-47d4-b261-741118d5883a","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"d6115bba-1841-4b7d-b6c1-a9116ed87a7d","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"63edcbb3-7f04-467e-b1b2-3633ca3c269e","type":"BoxAnnotation"},"plot":{"id":"26565fb9-9896-4d42-abec-71cf0342002f","subtype":"Figure","type":"Plot"}},"id":"ab518f94-aed9-4093-97a8-2c890aaffd17","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"ed6482e1-9b3f-4e6c-834e-75df26f81ad6","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"63edcbb3-7f04-467e-b1b2-3633ca3c269e","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"7d66687c-4415-47cf-8fc5-3da76d98bb2c","type":"DataRange1d"},{"attributes":{},"id":"7de5ccd7-dad7-4696-8d78-3fd96ac1bb5b","type":"BasicTickFormatter"},{"attributes":{},"id":"95b94442-376b-4b8f-9a0d-983abea60b25","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"26565fb9-9896-4d42-abec-71cf0342002f","subtype":"Figure","type":"Plot"}},"id":"d1b7bdff-8a1a-41c5-9128-1c978f7ae911","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"188f5f04-2fcf-4248-ba2b-cd7566c4aded","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"26565fb9-9896-4d42-abec-71cf0342002f","subtype":"Figure","type":"Plot"},"ticker":{"id":"5648798b-4e21-4bc5-ae0d-3424a6d50d72","type":"BasicTicker"}},"id":"1f211ce3-9d20-46e3-aea8-db7b96c7ead4","type":"Grid"},{"attributes":{"plot":null,"text":null},"id":"5425b609-03df-44e4-a680-0b8626661996","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"7e7f2715-e441-4497-a236-5d52835a45da","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4de97534-b78d-4de7-ba66-0b1e99727771","type":"PanTool"},{"id":"d1b7bdff-8a1a-41c5-9128-1c978f7ae911","type":"WheelZoomTool"},{"id":"ab518f94-aed9-4093-97a8-2c890aaffd17","type":"BoxZoomTool"},{"id":"0f11ade1-c04b-47d4-b261-741118d5883a","type":"SaveTool"},{"id":"82e4e8ca-37f9-4101-a561-c3ea9a434361","type":"ResetTool"},{"id":"cc5c44ab-f38e-4df1-9b4b-9bcc2abdc8cc","type":"HelpTool"}]},"id":"bc66e3e7-bdac-45ab-bcca-c8c2162b77f6","type":"Toolbar"},{"attributes":{"plot":{"id":"26565fb9-9896-4d42-abec-71cf0342002f","subtype":"Figure","type":"Plot"},"ticker":{"id":"23db655f-aea5-4f5c-a94f-438572669944","type":"BasicTicker"}},"id":"3d96b985-8db9-4800-841e-ffd66c168812","type":"Grid"},{"attributes":{"formatter":{"id":"95b94442-376b-4b8f-9a0d-983abea60b25","type":"BasicTickFormatter"},"plot":{"id":"26565fb9-9896-4d42-abec-71cf0342002f","subtype":"Figure","type":"Plot"},"ticker":{"id":"5648798b-4e21-4bc5-ae0d-3424a6d50d72","type":"BasicTicker"}},"id":"75bbe013-247f-4fdf-a669-5967c074d4e6","type":"LinearAxis"},{"attributes":{"plot":{"id":"26565fb9-9896-4d42-abec-71cf0342002f","subtype":"Figure","type":"Plot"}},"id":"82e4e8ca-37f9-4101-a561-c3ea9a434361","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f57938bc-3502-4d86-978b-17ba4c59be3e","type":"Line"},{"attributes":{"plot":{"id":"26565fb9-9896-4d42-abec-71cf0342002f","subtype":"Figure","type":"Plot"}},"id":"cc5c44ab-f38e-4df1-9b4b-9bcc2abdc8cc","type":"HelpTool"},{"attributes":{"data_source":{"id":"d6115bba-1841-4b7d-b6c1-a9116ed87a7d","type":"ColumnDataSource"},"glyph":{"id":"d03ccd48-0baf-4874-aa38-429db787b57a","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"7e7f2715-e441-4497-a236-5d52835a45da","type":"Circle"},"selection_glyph":null},"id":"7aba8f9f-964a-47eb-92c7-e3c7390a35ea","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1edb8a3d-03dc-4398-8e56-ba3e10c63b47","type":"Line"},{"attributes":{"plot":{"id":"26565fb9-9896-4d42-abec-71cf0342002f","subtype":"Figure","type":"Plot"}},"id":"4de97534-b78d-4de7-ba66-0b1e99727771","type":"PanTool"},{"attributes":{"below":[{"id":"0ef72192-3fde-4efa-8aca-6b987779e417","type":"LinearAxis"}],"left":[{"id":"75bbe013-247f-4fdf-a669-5967c074d4e6","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0ef72192-3fde-4efa-8aca-6b987779e417","type":"LinearAxis"},{"id":"3d96b985-8db9-4800-841e-ffd66c168812","type":"Grid"},{"id":"75bbe013-247f-4fdf-a669-5967c074d4e6","type":"LinearAxis"},{"id":"1f211ce3-9d20-46e3-aea8-db7b96c7ead4","type":"Grid"},{"id":"63edcbb3-7f04-467e-b1b2-3633ca3c269e","type":"BoxAnnotation"},{"id":"1e34b26f-dfe2-48cc-8687-78af10d5cf83","type":"GlyphRenderer"},{"id":"7aba8f9f-964a-47eb-92c7-e3c7390a35ea","type":"GlyphRenderer"}],"title":{"id":"5425b609-03df-44e4-a680-0b8626661996","type":"Title"},"tool_events":{"id":"76765cc6-4727-4f37-9b42-0eb82bc1f0e1","type":"ToolEvents"},"toolbar":{"id":"bc66e3e7-bdac-45ab-bcca-c8c2162b77f6","type":"Toolbar"},"x_range":{"id":"7d66687c-4415-47cf-8fc5-3da76d98bb2c","type":"DataRange1d"},"y_range":{"id":"188f5f04-2fcf-4248-ba2b-cd7566c4aded","type":"DataRange1d"}},"id":"26565fb9-9896-4d42-abec-71cf0342002f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"76765cc6-4727-4f37-9b42-0eb82bc1f0e1","type":"ToolEvents"},{"attributes":{},"id":"23db655f-aea5-4f5c-a94f-438572669944","type":"BasicTicker"},{"attributes":{"data_source":{"id":"ed6482e1-9b3f-4e6c-834e-75df26f81ad6","type":"ColumnDataSource"},"glyph":{"id":"1edb8a3d-03dc-4398-8e56-ba3e10c63b47","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"f57938bc-3502-4d86-978b-17ba4c59be3e","type":"Line"},"selection_glyph":null},"id":"1e34b26f-dfe2-48cc-8687-78af10d5cf83","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"7de5ccd7-dad7-4696-8d78-3fd96ac1bb5b","type":"BasicTickFormatter"},"plot":{"id":"26565fb9-9896-4d42-abec-71cf0342002f","subtype":"Figure","type":"Plot"},"ticker":{"id":"23db655f-aea5-4f5c-a94f-438572669944","type":"BasicTicker"}},"id":"0ef72192-3fde-4efa-8aca-6b987779e417","type":"LinearAxis"},{"attributes":{},"id":"5648798b-4e21-4bc5-ae0d-3424a6d50d72","type":"BasicTicker"}],"root_ids":["26565fb9-9896-4d42-abec-71cf0342002f"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"b6a063fc-a57a-4a07-923d-840068d237b5","elementid":"2813b126-1753-4c07-b511-367c8d36e58c","modelid":"26565fb9-9896-4d42-abec-71cf0342002f"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});