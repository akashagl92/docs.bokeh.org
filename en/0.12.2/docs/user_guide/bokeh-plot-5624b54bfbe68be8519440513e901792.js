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
      };var element = document.getElementById("18c49316-ef79-4b48-87f0-30e2ef5e1944");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '18c49316-ef79-4b48-87f0-30e2ef5e1944' but no matching script tag was found. ")
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
                  var docs_json = {"8e05b94e-aa37-46f2-8550-457957fa4e46":{"roots":{"references":[{"attributes":{"callback":null},"id":"9b27cc6b-aa9c-4410-b07d-b1c68fd55b44","type":"DataRange1d"},{"attributes":{"formatter":{"id":"d35f0172-6ab3-4ac2-b66d-54a7e18bdf67","type":"BasicTickFormatter"},"plot":{"id":"b3514d20-5bd8-4eaa-8e0a-ebd2c6c9a0bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc184a49-4619-4620-9dc7-774598afef64","type":"BasicTicker"}},"id":"66b65834-d05c-41f7-8f39-7e369d112702","type":"LinearAxis"},{"attributes":{},"id":"02570ea3-72f2-4af0-879c-dd8e2f9363f0","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"10b59443-6021-46e9-bd32-57bb32b62295","type":"PanTool"},{"id":"24a9c001-442f-4f04-81b0-b12071f2ad9d","type":"WheelZoomTool"},{"id":"6740bec8-a3f1-46d5-9a46-1e805c77191f","type":"BoxZoomTool"},{"id":"688527eb-dad8-466a-ac5a-7381bb62a6b5","type":"SaveTool"},{"id":"25415731-68c4-4303-8caf-8816e237e109","type":"ResetTool"},{"id":"88a36841-86c3-4a7c-b4ad-c2a40caebdc3","type":"HelpTool"}]},"id":"676049b5-e78f-44c2-af0e-90c75da80727","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74ee1043-3835-4bac-8d07-0baea7d4fa67","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"02570ea3-72f2-4af0-879c-dd8e2f9363f0","type":"BasicTickFormatter"},"plot":{"id":"b3514d20-5bd8-4eaa-8e0a-ebd2c6c9a0bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"1af79564-5557-44fe-9e8f-86ec833eb062","type":"BasicTicker"}},"id":"ec6ef3dc-88b4-4ab2-b2a4-9d16b6d49130","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"ec5c6e13-5160-4b0b-896c-0cd55be046fc","type":"Title"},{"attributes":{},"id":"1af79564-5557-44fe-9e8f-86ec833eb062","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"b3514d20-5bd8-4eaa-8e0a-ebd2c6c9a0bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"1af79564-5557-44fe-9e8f-86ec833eb062","type":"BasicTicker"}},"id":"521cff75-4c67-49e8-9d64-7f6ef832a63c","type":"Grid"},{"attributes":{"callback":null},"id":"f36ae132-7491-45c9-87f4-a7e38c1c703e","type":"DataRange1d"},{"attributes":{},"id":"cc184a49-4619-4620-9dc7-774598afef64","type":"BasicTicker"},{"attributes":{"below":[{"id":"66b65834-d05c-41f7-8f39-7e369d112702","type":"LinearAxis"}],"left":[{"id":"ec6ef3dc-88b4-4ab2-b2a4-9d16b6d49130","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"66b65834-d05c-41f7-8f39-7e369d112702","type":"LinearAxis"},{"id":"f051fa59-a251-4fe9-a218-b4964ceb6266","type":"Grid"},{"id":"ec6ef3dc-88b4-4ab2-b2a4-9d16b6d49130","type":"LinearAxis"},{"id":"521cff75-4c67-49e8-9d64-7f6ef832a63c","type":"Grid"},{"id":"74ee1043-3835-4bac-8d07-0baea7d4fa67","type":"BoxAnnotation"},{"id":"53559ca2-ace5-4158-897f-1ae8708d2f7d","type":"GlyphRenderer"}],"title":{"id":"ec5c6e13-5160-4b0b-896c-0cd55be046fc","type":"Title"},"tool_events":{"id":"374ba4a5-afba-4969-a0fd-76a1922dd0ab","type":"ToolEvents"},"toolbar":{"id":"676049b5-e78f-44c2-af0e-90c75da80727","type":"Toolbar"},"x_range":{"id":"f36ae132-7491-45c9-87f4-a7e38c1c703e","type":"DataRange1d"},"y_range":{"id":"9b27cc6b-aa9c-4410-b07d-b1c68fd55b44","type":"DataRange1d"}},"id":"b3514d20-5bd8-4eaa-8e0a-ebd2c6c9a0bd","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"39a6cd7b-cda2-45f8-9197-ada52060c9b3","type":"Circle"},{"attributes":{"data_source":{"id":"733d69ec-c943-4e16-a752-2bac2d7225f7","type":"ColumnDataSource"},"glyph":{"id":"39a6cd7b-cda2-45f8-9197-ada52060c9b3","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"3d4cd690-6d55-4757-a845-d1a0bae952b6","type":"Circle"},"selection_glyph":null},"id":"53559ca2-ace5-4158-897f-1ae8708d2f7d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b3514d20-5bd8-4eaa-8e0a-ebd2c6c9a0bd","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc184a49-4619-4620-9dc7-774598afef64","type":"BasicTicker"}},"id":"f051fa59-a251-4fe9-a218-b4964ceb6266","type":"Grid"},{"attributes":{"plot":{"id":"b3514d20-5bd8-4eaa-8e0a-ebd2c6c9a0bd","subtype":"Figure","type":"Plot"}},"id":"24a9c001-442f-4f04-81b0-b12071f2ad9d","type":"WheelZoomTool"},{"attributes":{},"id":"374ba4a5-afba-4969-a0fd-76a1922dd0ab","type":"ToolEvents"},{"attributes":{"plot":{"id":"b3514d20-5bd8-4eaa-8e0a-ebd2c6c9a0bd","subtype":"Figure","type":"Plot"}},"id":"88a36841-86c3-4a7c-b4ad-c2a40caebdc3","type":"HelpTool"},{"attributes":{"plot":{"id":"b3514d20-5bd8-4eaa-8e0a-ebd2c6c9a0bd","subtype":"Figure","type":"Plot"}},"id":"10b59443-6021-46e9-bd32-57bb32b62295","type":"PanTool"},{"attributes":{"plot":{"id":"b3514d20-5bd8-4eaa-8e0a-ebd2c6c9a0bd","subtype":"Figure","type":"Plot"}},"id":"688527eb-dad8-466a-ac5a-7381bb62a6b5","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3d4cd690-6d55-4757-a845-d1a0bae952b6","type":"Circle"},{"attributes":{"plot":{"id":"b3514d20-5bd8-4eaa-8e0a-ebd2c6c9a0bd","subtype":"Figure","type":"Plot"}},"id":"25415731-68c4-4303-8caf-8816e237e109","type":"ResetTool"},{"attributes":{},"id":"d35f0172-6ab3-4ac2-b66d-54a7e18bdf67","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"74ee1043-3835-4bac-8d07-0baea7d4fa67","type":"BoxAnnotation"},"plot":{"id":"b3514d20-5bd8-4eaa-8e0a-ebd2c6c9a0bd","subtype":"Figure","type":"Plot"}},"id":"6740bec8-a3f1-46d5-9a46-1e805c77191f","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"733d69ec-c943-4e16-a752-2bac2d7225f7","type":"ColumnDataSource"}],"root_ids":["b3514d20-5bd8-4eaa-8e0a-ebd2c6c9a0bd"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"8e05b94e-aa37-46f2-8550-457957fa4e46","elementid":"18c49316-ef79-4b48-87f0-30e2ef5e1944","modelid":"b3514d20-5bd8-4eaa-8e0a-ebd2c6c9a0bd"}];
                  
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