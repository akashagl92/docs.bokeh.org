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
      };var element = document.getElementById("2f40779c-fba4-4796-8808-8fdf17de3d6d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2f40779c-fba4-4796-8808-8fdf17de3d6d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
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
              var docs_json = {"39e16aa0-c7a9-4a7c-9b5e-1d5c146d56ca":{"roots":{"references":[{"attributes":{"plot":{"id":"e3c33774-3692-4b0f-a74b-fa6f8218da23","subtype":"Figure","type":"Plot"}},"id":"3f0d311b-584a-40ab-96e5-4631a31bac8f","type":"ResetTool"},{"attributes":{},"id":"de7b5c95-6055-45f2-b553-b577fdcb740e","type":"BasicTicker"},{"attributes":{"plot":null,"text":"simple line example"},"id":"48a32c36-1524-4c5b-9270-c5d04983c1d1","type":"Title"},{"attributes":{"plot":{"id":"e3c33774-3692-4b0f-a74b-fa6f8218da23","subtype":"Figure","type":"Plot"}},"id":"1740b8cd-6e84-4956-9919-6b4767da7bf7","type":"PanTool"},{"attributes":{"plot":{"id":"e3c33774-3692-4b0f-a74b-fa6f8218da23","subtype":"Figure","type":"Plot"},"ticker":{"id":"de7b5c95-6055-45f2-b553-b577fdcb740e","type":"BasicTicker"}},"id":"c56d8f3e-d9c0-46ef-a6b3-66555ad153ff","type":"Grid"},{"attributes":{"plot":{"id":"e3c33774-3692-4b0f-a74b-fa6f8218da23","subtype":"Figure","type":"Plot"}},"id":"6d241c69-18b3-46b9-a89a-4ed283d1d314","type":"HelpTool"},{"attributes":{"callback":null},"id":"a8240f40-0f1a-4472-bc49-de602b1eabe0","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1740b8cd-6e84-4956-9919-6b4767da7bf7","type":"PanTool"},{"id":"bf2d1d39-430d-4abd-a403-d9286d3700a7","type":"WheelZoomTool"},{"id":"88ee748d-a159-41a8-854d-804ea1b5d43f","type":"BoxZoomTool"},{"id":"bfbccf21-60a7-41af-97ed-95cd86737d5b","type":"SaveTool"},{"id":"3f0d311b-584a-40ab-96e5-4631a31bac8f","type":"ResetTool"},{"id":"6d241c69-18b3-46b9-a89a-4ed283d1d314","type":"HelpTool"}]},"id":"01c9b81a-fad7-4814-8992-77644ecf225a","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"e3c33774-3692-4b0f-a74b-fa6f8218da23","subtype":"Figure","type":"Plot"},"ticker":{"id":"bfb9f95f-d388-46e0-bb03-dfb23f0c90f8","type":"BasicTicker"}},"id":"6cbf2d86-1f3f-4360-9095-74e5a1037ae0","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1b67ca49-dc2a-40f2-bc6f-74d0a1565ef1","type":"BoxAnnotation"},{"attributes":{"axis_label":"x","formatter":{"id":"f4882da7-2dfa-4d1c-ba54-f144610c0497","type":"BasicTickFormatter"},"plot":{"id":"e3c33774-3692-4b0f-a74b-fa6f8218da23","subtype":"Figure","type":"Plot"},"ticker":{"id":"de7b5c95-6055-45f2-b553-b577fdcb740e","type":"BasicTicker"}},"id":"ad8b22e8-3e96-4a76-8099-cdf07ea3ef3e","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"70f75ae9-6b5f-4739-bfe8-e0c5d8d26d74","type":"Line"},{"attributes":{},"id":"f4882da7-2dfa-4d1c-ba54-f144610c0497","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"e90d0c4e-48f0-4682-ad17-6f04dfab0753","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"e90d0c4e-48f0-4682-ad17-6f04dfab0753","type":"ColumnDataSource"},"glyph":{"id":"9843976e-cc03-4f2e-9e5b-6fe977459587","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"70f75ae9-6b5f-4739-bfe8-e0c5d8d26d74","type":"Line"},"selection_glyph":null},"id":"cd53594a-c225-4a05-8a30-40475d42f021","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"1b67ca49-dc2a-40f2-bc6f-74d0a1565ef1","type":"BoxAnnotation"},"plot":{"id":"e3c33774-3692-4b0f-a74b-fa6f8218da23","subtype":"Figure","type":"Plot"}},"id":"88ee748d-a159-41a8-854d-804ea1b5d43f","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"e3c33774-3692-4b0f-a74b-fa6f8218da23","subtype":"Figure","type":"Plot"}},"id":"bf2d1d39-430d-4abd-a403-d9286d3700a7","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"ad8b22e8-3e96-4a76-8099-cdf07ea3ef3e","type":"LinearAxis"}],"left":[{"id":"ca71e97d-aa2a-41a6-9e07-71d8099e7fac","type":"LinearAxis"}],"renderers":[{"id":"ad8b22e8-3e96-4a76-8099-cdf07ea3ef3e","type":"LinearAxis"},{"id":"c56d8f3e-d9c0-46ef-a6b3-66555ad153ff","type":"Grid"},{"id":"ca71e97d-aa2a-41a6-9e07-71d8099e7fac","type":"LinearAxis"},{"id":"6cbf2d86-1f3f-4360-9095-74e5a1037ae0","type":"Grid"},{"id":"1b67ca49-dc2a-40f2-bc6f-74d0a1565ef1","type":"BoxAnnotation"},{"id":"d4e4a523-4cc5-413e-935a-0399903a63d4","type":"Legend"},{"id":"cd53594a-c225-4a05-8a30-40475d42f021","type":"GlyphRenderer"}],"title":{"id":"48a32c36-1524-4c5b-9270-c5d04983c1d1","type":"Title"},"tool_events":{"id":"b2270c58-1348-42ab-93e6-3c9c418f2043","type":"ToolEvents"},"toolbar":{"id":"01c9b81a-fad7-4814-8992-77644ecf225a","type":"Toolbar"},"x_range":{"id":"a8240f40-0f1a-4472-bc49-de602b1eabe0","type":"DataRange1d"},"y_range":{"id":"2819f027-6fba-40f3-815b-d8f5f1168b98","type":"DataRange1d"}},"id":"e3c33774-3692-4b0f-a74b-fa6f8218da23","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b2270c58-1348-42ab-93e6-3c9c418f2043","type":"ToolEvents"},{"attributes":{"legends":[["Temp.",[{"id":"cd53594a-c225-4a05-8a30-40475d42f021","type":"GlyphRenderer"}]]],"plot":{"id":"e3c33774-3692-4b0f-a74b-fa6f8218da23","subtype":"Figure","type":"Plot"}},"id":"d4e4a523-4cc5-413e-935a-0399903a63d4","type":"Legend"},{"attributes":{"axis_label":"y","formatter":{"id":"d422d182-7603-479e-90a7-6dc583240da0","type":"BasicTickFormatter"},"plot":{"id":"e3c33774-3692-4b0f-a74b-fa6f8218da23","subtype":"Figure","type":"Plot"},"ticker":{"id":"bfb9f95f-d388-46e0-bb03-dfb23f0c90f8","type":"BasicTicker"}},"id":"ca71e97d-aa2a-41a6-9e07-71d8099e7fac","type":"LinearAxis"},{"attributes":{"callback":null},"id":"2819f027-6fba-40f3-815b-d8f5f1168b98","type":"DataRange1d"},{"attributes":{"plot":{"id":"e3c33774-3692-4b0f-a74b-fa6f8218da23","subtype":"Figure","type":"Plot"}},"id":"bfbccf21-60a7-41af-97ed-95cd86737d5b","type":"SaveTool"},{"attributes":{},"id":"bfb9f95f-d388-46e0-bb03-dfb23f0c90f8","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"9843976e-cc03-4f2e-9e5b-6fe977459587","type":"Line"},{"attributes":{},"id":"d422d182-7603-479e-90a7-6dc583240da0","type":"BasicTickFormatter"}],"root_ids":["e3c33774-3692-4b0f-a74b-fa6f8218da23"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"39e16aa0-c7a9-4a7c-9b5e-1d5c146d56ca","elementid":"2f40779c-fba4-4796-8808-8fdf17de3d6d","modelid":"e3c33774-3692-4b0f-a74b-fa6f8218da23"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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