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
      };var element = document.getElementById("3874611b-edc8-40ae-ad5e-4fba27ef0b4e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3874611b-edc8-40ae-ad5e-4fba27ef0b4e' but no matching script tag was found. ")
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
                  var docs_json = {"6ec83000-88dd-456d-b49b-fe9bc6ac9383":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"7f9534c8-b52f-4387-b8d3-17c13ad6addc","subtype":"Figure","type":"Plot"},"ticker":{"id":"9bea9fbe-bfcd-4e91-9a0e-6dab251c10e8","type":"BasicTicker"}},"id":"2b99018d-2fc9-4194-8757-b7c58d2df088","type":"Grid"},{"attributes":{},"id":"c9f72095-1e94-4b64-900c-06822fa992fa","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"7f9534c8-b52f-4387-b8d3-17c13ad6addc","subtype":"Figure","type":"Plot"}},"id":"01c915d4-0136-43b0-a417-7b5dc93939ae","type":"HelpTool"},{"attributes":{"formatter":{"id":"c9f72095-1e94-4b64-900c-06822fa992fa","type":"BasicTickFormatter"},"plot":{"id":"7f9534c8-b52f-4387-b8d3-17c13ad6addc","subtype":"Figure","type":"Plot"},"ticker":{"id":"9bea9fbe-bfcd-4e91-9a0e-6dab251c10e8","type":"BasicTicker"}},"id":"c2e19dc5-b0ad-4aa7-abe3-d4b71363f78b","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"470dcb5a-31b0-4266-b320-1fd943d6aec1","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1d764767-6bf7-416b-ab86-48c34b60d4f1","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"7f9534c8-b52f-4387-b8d3-17c13ad6addc","subtype":"Figure","type":"Plot"}},"id":"fef404bb-82b8-40f1-9cf6-73e4812a903b","type":"ResetTool"},{"attributes":{"callback":null},"id":"88909615-1757-4235-92a3-a14d6167475d","type":"DataRange1d"},{"attributes":{"formatter":{"id":"3efbb0b9-7864-4a9c-97ae-a3772f0dc3e4","type":"BasicTickFormatter"},"plot":{"id":"7f9534c8-b52f-4387-b8d3-17c13ad6addc","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b5df5b4-fff5-42b3-a546-4c9b07c23caf","type":"BasicTicker"}},"id":"c6e58f28-7a1b-464b-b37b-a37aa08a59bd","type":"LinearAxis"},{"attributes":{"plot":{"id":"7f9534c8-b52f-4387-b8d3-17c13ad6addc","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b5df5b4-fff5-42b3-a546-4c9b07c23caf","type":"BasicTicker"}},"id":"9b8df666-29fa-46cf-9978-3785d1eddca1","type":"Grid"},{"attributes":{},"id":"3efbb0b9-7864-4a9c-97ae-a3772f0dc3e4","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"5900e580-f8b2-4086-baa2-a1dcef4f43b7","type":"ColumnDataSource"},"glyph":{"id":"e77ce85c-026a-449f-95b8-7734f2a4cd39","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"939cb519-d87f-4c4e-9864-f1ca40e89f15","type":"Circle"},"selection_glyph":null},"id":"366f0c9f-fa39-47f4-b158-0b2532fa6748","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7f9534c8-b52f-4387-b8d3-17c13ad6addc","subtype":"Figure","type":"Plot"}},"id":"d3191a55-32d7-497c-8170-d80010d0dadc","type":"SaveTool"},{"attributes":{},"id":"9b5df5b4-fff5-42b3-a546-4c9b07c23caf","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1b6ab582-fb1e-4e2c-add0-da44cced3b6e","type":"PanTool"},{"id":"adce63a4-312b-4617-b300-8dde189a7519","type":"WheelZoomTool"},{"id":"b1464bb5-8dcc-4009-85a0-44de3596e3e1","type":"BoxZoomTool"},{"id":"d3191a55-32d7-497c-8170-d80010d0dadc","type":"SaveTool"},{"id":"fef404bb-82b8-40f1-9cf6-73e4812a903b","type":"ResetTool"},{"id":"01c915d4-0136-43b0-a417-7b5dc93939ae","type":"HelpTool"}]},"id":"0c08ec3f-60f4-4c50-b0c4-bd113aee8194","type":"Toolbar"},{"attributes":{},"id":"9bea9fbe-bfcd-4e91-9a0e-6dab251c10e8","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"939cb519-d87f-4c4e-9864-f1ca40e89f15","type":"Circle"},{"attributes":{"overlay":{"id":"1d764767-6bf7-416b-ab86-48c34b60d4f1","type":"BoxAnnotation"},"plot":{"id":"7f9534c8-b52f-4387-b8d3-17c13ad6addc","subtype":"Figure","type":"Plot"}},"id":"b1464bb5-8dcc-4009-85a0-44de3596e3e1","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"7f9534c8-b52f-4387-b8d3-17c13ad6addc","subtype":"Figure","type":"Plot"}},"id":"adce63a4-312b-4617-b300-8dde189a7519","type":"WheelZoomTool"},{"attributes":{},"id":"52addf0d-01f2-465c-87e2-f4e5027a8666","type":"ToolEvents"},{"attributes":{"callback":null},"id":"548cd6ca-3fd1-4b19-8232-9595288fcb8d","type":"DataRange1d"},{"attributes":{"below":[{"id":"c6e58f28-7a1b-464b-b37b-a37aa08a59bd","type":"LinearAxis"}],"border_fill_color":{"value":"whitesmoke"},"left":[{"id":"c2e19dc5-b0ad-4aa7-abe3-d4b71363f78b","type":"LinearAxis"}],"min_border_left":80,"plot_height":400,"plot_width":400,"renderers":[{"id":"c6e58f28-7a1b-464b-b37b-a37aa08a59bd","type":"LinearAxis"},{"id":"9b8df666-29fa-46cf-9978-3785d1eddca1","type":"Grid"},{"id":"c2e19dc5-b0ad-4aa7-abe3-d4b71363f78b","type":"LinearAxis"},{"id":"2b99018d-2fc9-4194-8757-b7c58d2df088","type":"Grid"},{"id":"1d764767-6bf7-416b-ab86-48c34b60d4f1","type":"BoxAnnotation"},{"id":"366f0c9f-fa39-47f4-b158-0b2532fa6748","type":"GlyphRenderer"}],"title":{"id":"470dcb5a-31b0-4266-b320-1fd943d6aec1","type":"Title"},"tool_events":{"id":"52addf0d-01f2-465c-87e2-f4e5027a8666","type":"ToolEvents"},"toolbar":{"id":"0c08ec3f-60f4-4c50-b0c4-bd113aee8194","type":"Toolbar"},"x_range":{"id":"88909615-1757-4235-92a3-a14d6167475d","type":"DataRange1d"},"y_range":{"id":"548cd6ca-3fd1-4b19-8232-9595288fcb8d","type":"DataRange1d"}},"id":"7f9534c8-b52f-4387-b8d3-17c13ad6addc","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e77ce85c-026a-449f-95b8-7734f2a4cd39","type":"Circle"},{"attributes":{"plot":{"id":"7f9534c8-b52f-4387-b8d3-17c13ad6addc","subtype":"Figure","type":"Plot"}},"id":"1b6ab582-fb1e-4e2c-add0-da44cced3b6e","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"5900e580-f8b2-4086-baa2-a1dcef4f43b7","type":"ColumnDataSource"}],"root_ids":["7f9534c8-b52f-4387-b8d3-17c13ad6addc"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"6ec83000-88dd-456d-b49b-fe9bc6ac9383","elementid":"3874611b-edc8-40ae-ad5e-4fba27ef0b4e","modelid":"7f9534c8-b52f-4387-b8d3-17c13ad6addc"}];
                  
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