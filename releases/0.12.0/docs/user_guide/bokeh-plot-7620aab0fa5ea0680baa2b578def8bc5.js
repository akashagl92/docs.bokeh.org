document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("dc4120bc-38f5-46bd-941d-96108ef5994f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dc4120bc-38f5-46bd-941d-96108ef5994f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
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
          MyFormatter: require("custom/my_formatter"),
          Surface3d: require("custom/surface3d") };
           }, {}],
           "custom/custom": "\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\nclass CustomView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    @render()\n\n    # Set Backbone listener so that when the Bokeh slider has a change\n    # event, we can process the new data\n    @listenTo(@model.slider, \'change\', () => @render())\n\n  render: () ->\n    # Backbone Views create <div> elements by default, accessible as @$el.\n    # Many Bokeh views ignore this default <div>, and instead do things\n    # like draw to the HTML canvas. In this case though, we change the\n    # contents of the <div>, based on the current slider value.\n    @$el.html(\"<h1>#{ @model.text }: #{ @model.slider.value }</h1>\")\n    @$(\'h1\').css({ \'color\': \'#686d8e\', \'background-color\': \'#2a3153\' })\n\nclass Custom extends LayoutDOM.Model\n\n  # If there is an associated view, this is boilerplate.\n  default_view: CustomView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Custom\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. bokeh.core.properties.String will be\n  # p.String in the JS implementation. Where the JS type system is not yet\n  # as rich, you can use p.Any as a \"wildcard\" property type.\n  @define {\n    text:   [ p.String ]\n    slider: [ p.Any    ]\n  }\n\n# This is boilerplate. Every implementation should export a Model\n# and (when applicable) also a View.\nmodule.exports =\n  Model: Custom\n  View: CustomView\n",
          "custom/draw_tool": "\np = require \"core/properties\"\nGestureTool = require \"models/tools/gestures/gesture_tool\"\n\nclass DrawToolView extends GestureTool.View\n\n  # this is executed when the pan/drag event starts\n  _pan_start: (e) ->\n    @model.source.data = {x: [], y: []}\n\n  # this is executed on subsequent mouse/touch moves\n  _pan: (e) ->\n    frame = @plot_model.frame\n    canvas = @plot_view.canvas\n\n    vx = canvas.sx_to_vx(e.bokeh.sx)\n    vy = canvas.sy_to_vy(e.bokeh.sy)\n    if not frame.contains(vx, vy)\n      return null\n\n    x = frame.get(\'x_mappers\').default.map_from_target(vx)\n    y = frame.get(\'y_mappers\').default.map_from_target(vy)\n\n    @model.source.data.x.push(x)\n    @model.source.data.y.push(y)\n    @model.source.trigger(\'change\')\n\n  # this is executed then the pan/drag ends\n  _pan_end: (e) -> return null\n\nclass DrawTool extends GestureTool.Model\n  default_view: DrawToolView\n  type: \"DrawTool\"\n\n  tool_name: \"Drag Span\"\n  icon: \"bk-tool-icon-lasso-select\"\n  event_type: \"pan\"\n  default_order: 12\n\n  @define { source: [ p.Instance ] }\n\nmodule.exports =\n  Model: DrawTool\n  View: DrawToolView\n",
          "custom/my_formatter": "\nTickFormatter = require \"models/formatters/tick_formatter\"\n\nclass MyFormatter extends TickFormatter.Model\n  type: \"MyFormatter\"\n\n  # TickFormatters should implement this method, which accepts a lisst\n  # of numbers (ticks) and returns a list of strings\n  doFormat: (ticks) ->\n    # format the first tick as-is\n    formatted = [\"#{ticks[0]}\"]\n\n    # format the remaining ticks as a difference from the first\n    for i in [1...ticks.length]\n       formatted.push(\"+#{(ticks[i]-ticks[0]).toPrecision(2)}\")\n\n    return formatted\n\nmodule.exports =\n  Model: MyFormatter\n",
          "custom/surface3d": "\n# This file contains the JavaScript (CoffeeScript) implementation\n# for a Bokeh custom extension. The \"surface3d.py\" contains the\n# python counterpart.\n#\n# This custom model wraps one part of the third-party vis.js library:\n#\n#     http://visjs.org/index.html\n#\n# Making it easy to hook up python data analytics tools (NumPy, SciPy,\n# Pandas, etc.) to web presentations using the Bokeh server.\n\n# These \"require\" lines are similar to python \"import\" statements\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\n# This defines some default options for the Graph3d feature of vis.js\n# See: http://visjs.org/graph3d_examples.html for more details.\nOPTIONS =\n  width:  \'600px\'\n  height: \'600px\'\n  style: \'surface\'\n  showPerspective: true\n  showGrid: true\n  keepAspectRatio: true\n  verticalRatio: 1.0\n  legendLabel: \'stuff\'\n  cameraPosition:\n    horizontal: -0.35\n    vertical: 0.22\n    distance: 1.8\n\n# To create custom model extensions that will render on to the HTML canvas\n# or into the DOM, we must create a View subclass for the model. Currently\n# Bokeh models and views are based on BackBone. More information about\n# using Backbone can be found here:\n#\n#     http://backbonejs.org/\n#\n# In this case we will subclass from the existing BokehJS ``LayoutDOM.View``,\n# corresponding to our\nclass Surface3dView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    url = \"https://cdnjs.cloudflare.com/ajax/libs/vis/4.16.1/vis.min.js\"\n    $.getScript(url).done(@_init)\n\n  # NOTE: we have to use the \"fat arrow\" => here so that \"this\" is bound correctly\n  _init: () =>\n    # Create a new Graph3s using the vis.js API. This assumes the vis.js has\n    # already been loaded (e.g. in a custom app template). In the future Bokeh\n    # models will be able to specify and load external scripts automatically.\n    #\n    # Backbone Views create <div> elements by default, accessible as @$el. Many\n    # Bokeh views ignore this default <div>, and instead do things like draw\n    # to the HTML canvas. In this case though, we use the <div> to attach a\n    # Graph3d to the DOM.\n    @_graph = new vis.Graph3d(@$el[0], @get_data(), OPTIONS)\n\n    # Set Backbone listener so that when the Bokeh data source has a change\n    # event, we can process the new data\n    @listenTo(@model.data_source, \'change\', () =>\n        @_graph.setData(@get_data())\n    )\n\n  # This is the callback executed when the Bokeh data has an change. Its basic\n  # function is to adapt the Bokeh data source to the vis.js DataSet format.\n  get_data: () ->\n    data = new vis.DataSet()\n    source = @model.data_source\n    for i in [0...source.get_length()]\n      data.add({\n        x:     source.get_column(@model.x)[i]\n        y:     source.get_column(@model.y)[i]\n        z:     source.get_column(@model.z)[i]\n        style: source.get_column(@model.color)[i]\n      })\n    return data\n\n# We must also create a corresponding JavaScript Backbone model sublcass to\n# correspond to the python Bokeh model subclass. In this case, since we want\n# an element that can position itself in the DOM according to a Bokeh layout,\n# we subclass from ``LayoutDOM.model``\nclass Surface3d extends LayoutDOM.Model\n\n  # This is usually boilerplate. In some cases there may not be a view.\n  default_view: Surface3dView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Surface3d\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. ``bokeh.core.properties.String`` will be\n  # ``p.String`` in the JS implementatin. Where the JS type system is not yet\n  # as rich, you can use ``p.Any`` as a \"wildcard\" property type.\n  @define {\n    x:           [ p.String           ]\n    y:           [ p.String           ]\n    z:           [ p.String           ]\n    color:       [ p.String           ]\n    data_source: [ p.Instance         ]\n  }\n\n# This is boilerplate. Every implementation should \"export\" a ``Model``\n# and (when applicable) also a ``View``.\nmodule.exports =\n  Model: Surface3d\n  View: Surface3dView\n"
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"e5df6bed-65fe-4c9d-b556-49977575e490":{"roots":{"references":[{"attributes":{},"id":"9e9efdd3-56e5-4aae-b9ea-8da1f6cf72fd","type":"ToolEvents"},{"attributes":{"plot":{"id":"88f373f7-7a1c-4c87-be06-c5e1f69d2914","subtype":"Figure","type":"Plot"},"ticker":{"id":"28619b35-883b-43b6-b1bc-065a9e4115d8","type":"BasicTicker"}},"id":"573ab2d6-e28c-4bdf-ae2e-a765e88ac2ff","type":"Grid"},{"attributes":{"formatter":{"id":"c77ca805-817c-4cad-b87a-f4f9456b1dfd","type":"BasicTickFormatter"},"plot":{"id":"88f373f7-7a1c-4c87-be06-c5e1f69d2914","subtype":"Figure","type":"Plot"},"ticker":{"id":"c48eeb57-8d9b-43d6-8d8b-4d6f0a2114f1","type":"BasicTicker"}},"id":"4bf8aefd-74ac-46a7-9394-6e09a442c70c","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"88f373f7-7a1c-4c87-be06-c5e1f69d2914","subtype":"Figure","type":"Plot"},"ticker":{"id":"c48eeb57-8d9b-43d6-8d8b-4d6f0a2114f1","type":"BasicTicker"}},"id":"26e17442-3de0-49cd-a148-2f1811566d58","type":"Grid"},{"attributes":{"data_source":{"id":"61d0d128-beb4-4117-93d9-8a1b2f133b64","type":"ColumnDataSource"},"glyph":{"id":"214d54be-77c7-486d-b57f-c2b7f99fd5aa","type":"Patches"},"hover_glyph":null,"nonselection_glyph":{"id":"78f2f8a1-76c6-4270-9c27-65c8f6eac363","type":"Patches"},"selection_glyph":null},"id":"58f667d6-5af2-4577-a1c4-aafcbceb76da","type":"GlyphRenderer"},{"attributes":{},"id":"c77ca805-817c-4cad-b87a-f4f9456b1dfd","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"78f2f8a1-76c6-4270-9c27-65c8f6eac363","type":"Patches"},{"attributes":{"plot":{"id":"88f373f7-7a1c-4c87-be06-c5e1f69d2914","subtype":"Figure","type":"Plot"}},"id":"9c36e7c2-851f-454f-865a-7b29a0ac6980","type":"HelpTool"},{"attributes":{"overlay":{"id":"c606c8e6-efd1-4df0-bba6-3a3d82f291eb","type":"BoxAnnotation"},"plot":{"id":"88f373f7-7a1c-4c87-be06-c5e1f69d2914","subtype":"Figure","type":"Plot"}},"id":"0da9e50e-6425-4dfc-a7a9-c060de9d5d07","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":null},"id":"7b752ec2-a871-4457-a2be-831e4a5590de","type":"Title"},{"attributes":{"plot":{"id":"88f373f7-7a1c-4c87-be06-c5e1f69d2914","subtype":"Figure","type":"Plot"}},"id":"fcea6356-764e-43e9-84bc-c6671d19c36d","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ffa0b464-7ee4-4656-adce-cfe4ed9ef8e2","type":"PanTool"},{"id":"6a0dc2d4-0161-4185-a767-63b77fc1b223","type":"WheelZoomTool"},{"id":"0da9e50e-6425-4dfc-a7a9-c060de9d5d07","type":"BoxZoomTool"},{"id":"fcea6356-764e-43e9-84bc-c6671d19c36d","type":"SaveTool"},{"id":"5e8cb9c0-16b3-47fe-aac5-4c37febb87ee","type":"ResetTool"},{"id":"9c36e7c2-851f-454f-865a-7b29a0ac6980","type":"HelpTool"}]},"id":"428d8794-a3a5-4ef4-a616-bb93ef511da6","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["ys","xs","line_color","line_alpha","fill_alpha","fill_color"],"data":{"fill_alpha":[0.8,0.3],"fill_color":["firebrick","navy"],"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]}},"id":"61d0d128-beb4-4117-93d9-8a1b2f133b64","type":"ColumnDataSource"},{"attributes":{},"id":"28619b35-883b-43b6-b1bc-065a9e4115d8","type":"BasicTicker"},{"attributes":{"below":[{"id":"dc3cf7b8-268c-4f70-9018-9dee1f9f4488","type":"LinearAxis"}],"left":[{"id":"4bf8aefd-74ac-46a7-9394-6e09a442c70c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"dc3cf7b8-268c-4f70-9018-9dee1f9f4488","type":"LinearAxis"},{"id":"573ab2d6-e28c-4bdf-ae2e-a765e88ac2ff","type":"Grid"},{"id":"4bf8aefd-74ac-46a7-9394-6e09a442c70c","type":"LinearAxis"},{"id":"26e17442-3de0-49cd-a148-2f1811566d58","type":"Grid"},{"id":"c606c8e6-efd1-4df0-bba6-3a3d82f291eb","type":"BoxAnnotation"},{"id":"58f667d6-5af2-4577-a1c4-aafcbceb76da","type":"GlyphRenderer"}],"title":{"id":"7b752ec2-a871-4457-a2be-831e4a5590de","type":"Title"},"tool_events":{"id":"9e9efdd3-56e5-4aae-b9ea-8da1f6cf72fd","type":"ToolEvents"},"toolbar":{"id":"428d8794-a3a5-4ef4-a616-bb93ef511da6","type":"Toolbar"},"x_range":{"id":"7891080d-6fda-4c4b-9381-1e1247285f73","type":"DataRange1d"},"y_range":{"id":"09ede3df-ec15-4833-bb28-3b09a675d92a","type":"DataRange1d"}},"id":"88f373f7-7a1c-4c87-be06-c5e1f69d2914","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"7318eeef-4c0d-4906-8d55-71c7d6b5c707","type":"BasicTickFormatter"},"plot":{"id":"88f373f7-7a1c-4c87-be06-c5e1f69d2914","subtype":"Figure","type":"Plot"},"ticker":{"id":"28619b35-883b-43b6-b1bc-065a9e4115d8","type":"BasicTicker"}},"id":"dc3cf7b8-268c-4f70-9018-9dee1f9f4488","type":"LinearAxis"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"fill_color"},"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"214d54be-77c7-486d-b57f-c2b7f99fd5aa","type":"Patches"},{"attributes":{"callback":null},"id":"7891080d-6fda-4c4b-9381-1e1247285f73","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c606c8e6-efd1-4df0-bba6-3a3d82f291eb","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"88f373f7-7a1c-4c87-be06-c5e1f69d2914","subtype":"Figure","type":"Plot"}},"id":"ffa0b464-7ee4-4656-adce-cfe4ed9ef8e2","type":"PanTool"},{"attributes":{"plot":{"id":"88f373f7-7a1c-4c87-be06-c5e1f69d2914","subtype":"Figure","type":"Plot"}},"id":"6a0dc2d4-0161-4185-a767-63b77fc1b223","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"09ede3df-ec15-4833-bb28-3b09a675d92a","type":"DataRange1d"},{"attributes":{},"id":"7318eeef-4c0d-4906-8d55-71c7d6b5c707","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"88f373f7-7a1c-4c87-be06-c5e1f69d2914","subtype":"Figure","type":"Plot"}},"id":"5e8cb9c0-16b3-47fe-aac5-4c37febb87ee","type":"ResetTool"},{"attributes":{},"id":"c48eeb57-8d9b-43d6-8d8b-4d6f0a2114f1","type":"BasicTicker"}],"root_ids":["88f373f7-7a1c-4c87-be06-c5e1f69d2914"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"e5df6bed-65fe-4c9d-b556-49977575e490","elementid":"dc4120bc-38f5-46bd-941d-96108ef5994f","modelid":"88f373f7-7a1c-4c87-be06-c5e1f69d2914"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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