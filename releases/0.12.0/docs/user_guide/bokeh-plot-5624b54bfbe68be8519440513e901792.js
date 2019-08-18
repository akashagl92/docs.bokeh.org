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
      };var element = document.getElementById("1348a6ce-9fec-480d-9be2-a2f812830da3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1348a6ce-9fec-480d-9be2-a2f812830da3' but no matching script tag was found. ")
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
              var docs_json = {"35421ae9-a76f-4e9f-8909-f1c397ca5cdc":{"roots":{"references":[{"attributes":{},"id":"4eb2a382-1c68-4c3c-bd97-d7c0f26ec10f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"4eb2a382-1c68-4c3c-bd97-d7c0f26ec10f","type":"BasicTickFormatter"},"plot":{"id":"e0c069d0-e2d0-4b8e-b37a-44f810663804","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e925cc1-90a8-464b-9d4f-7bdad0ec7016","type":"BasicTicker"}},"id":"8869c8df-cdac-4153-9b2e-980999f0c749","type":"LinearAxis"},{"attributes":{"plot":{"id":"e0c069d0-e2d0-4b8e-b37a-44f810663804","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e925cc1-90a8-464b-9d4f-7bdad0ec7016","type":"BasicTicker"}},"id":"04f502f9-ec42-4959-991b-5f22f4d25ae4","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7bdeae1a-5716-4aa8-af54-84ce4fcb8bcb","type":"Circle"},{"attributes":{"plot":{"id":"e0c069d0-e2d0-4b8e-b37a-44f810663804","subtype":"Figure","type":"Plot"}},"id":"3e2329c0-ffe4-4338-8b35-c13b87d5d69d","type":"WheelZoomTool"},{"attributes":{},"id":"2e925cc1-90a8-464b-9d4f-7bdad0ec7016","type":"BasicTicker"},{"attributes":{"plot":null,"text":null},"id":"4efa3ff6-c03c-43e2-97f7-c22750589f92","type":"Title"},{"attributes":{"data_source":{"id":"6df75ab8-c0a1-4bde-8766-2bdd83dbd85d","type":"ColumnDataSource"},"glyph":{"id":"0b044dba-b7eb-4bb6-8e46-ec73015ae3af","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"7bdeae1a-5716-4aa8-af54-84ce4fcb8bcb","type":"Circle"},"selection_glyph":null},"id":"4e0e9bb6-d81a-4e09-a061-c76b89fa94c0","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"d3b80479-1290-4d72-b1cd-33f67858ce97","type":"BasicTickFormatter"},"plot":{"id":"e0c069d0-e2d0-4b8e-b37a-44f810663804","subtype":"Figure","type":"Plot"},"ticker":{"id":"c032cbe4-1746-4bb6-82d4-6d7ba5b31d1d","type":"BasicTicker"}},"id":"7f43f14f-3b1a-4378-8be0-1e0d14674968","type":"LinearAxis"},{"attributes":{},"id":"d3b80479-1290-4d72-b1cd-33f67858ce97","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"8869c8df-cdac-4153-9b2e-980999f0c749","type":"LinearAxis"}],"left":[{"id":"7f43f14f-3b1a-4378-8be0-1e0d14674968","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8869c8df-cdac-4153-9b2e-980999f0c749","type":"LinearAxis"},{"id":"04f502f9-ec42-4959-991b-5f22f4d25ae4","type":"Grid"},{"id":"7f43f14f-3b1a-4378-8be0-1e0d14674968","type":"LinearAxis"},{"id":"bd6eba70-0ee4-43e1-83c7-066cc5be8fba","type":"Grid"},{"id":"2637b746-2b4d-460d-a156-c06912cdcada","type":"BoxAnnotation"},{"id":"4e0e9bb6-d81a-4e09-a061-c76b89fa94c0","type":"GlyphRenderer"}],"title":{"id":"4efa3ff6-c03c-43e2-97f7-c22750589f92","type":"Title"},"tool_events":{"id":"3554f7e9-3d71-4519-a4bf-385d5ba6de8c","type":"ToolEvents"},"toolbar":{"id":"1fc38ad9-8a89-4cfe-b3c9-4503da94fae6","type":"Toolbar"},"x_range":{"id":"0990ca3f-96d4-4a55-8f3a-ac5d377f1fec","type":"DataRange1d"},"y_range":{"id":"44cec5d1-d964-4f58-a8ae-28d04b53f0b3","type":"DataRange1d"}},"id":"e0c069d0-e2d0-4b8e-b37a-44f810663804","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"e0c069d0-e2d0-4b8e-b37a-44f810663804","subtype":"Figure","type":"Plot"}},"id":"47f10bb8-fbba-41ac-bef9-f2dc859de8a8","type":"ResetTool"},{"attributes":{"plot":{"id":"e0c069d0-e2d0-4b8e-b37a-44f810663804","subtype":"Figure","type":"Plot"}},"id":"4acf459a-8580-4c9b-8791-ac49f4e5f932","type":"PanTool"},{"attributes":{"plot":{"id":"e0c069d0-e2d0-4b8e-b37a-44f810663804","subtype":"Figure","type":"Plot"}},"id":"195fac94-3c64-40c5-bc2f-8e853dd8c76e","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"e0c069d0-e2d0-4b8e-b37a-44f810663804","subtype":"Figure","type":"Plot"},"ticker":{"id":"c032cbe4-1746-4bb6-82d4-6d7ba5b31d1d","type":"BasicTicker"}},"id":"bd6eba70-0ee4-43e1-83c7-066cc5be8fba","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b044dba-b7eb-4bb6-8e46-ec73015ae3af","type":"Circle"},{"attributes":{"plot":{"id":"e0c069d0-e2d0-4b8e-b37a-44f810663804","subtype":"Figure","type":"Plot"}},"id":"8ee34b7e-51f1-4c8c-91e6-de76c8356050","type":"SaveTool"},{"attributes":{},"id":"c032cbe4-1746-4bb6-82d4-6d7ba5b31d1d","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"6df75ab8-c0a1-4bde-8766-2bdd83dbd85d","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4acf459a-8580-4c9b-8791-ac49f4e5f932","type":"PanTool"},{"id":"3e2329c0-ffe4-4338-8b35-c13b87d5d69d","type":"WheelZoomTool"},{"id":"250c7d83-d568-436d-a911-b78a6bef446c","type":"BoxZoomTool"},{"id":"8ee34b7e-51f1-4c8c-91e6-de76c8356050","type":"SaveTool"},{"id":"47f10bb8-fbba-41ac-bef9-f2dc859de8a8","type":"ResetTool"},{"id":"195fac94-3c64-40c5-bc2f-8e853dd8c76e","type":"HelpTool"}]},"id":"1fc38ad9-8a89-4cfe-b3c9-4503da94fae6","type":"Toolbar"},{"attributes":{"callback":null},"id":"44cec5d1-d964-4f58-a8ae-28d04b53f0b3","type":"DataRange1d"},{"attributes":{"overlay":{"id":"2637b746-2b4d-460d-a156-c06912cdcada","type":"BoxAnnotation"},"plot":{"id":"e0c069d0-e2d0-4b8e-b37a-44f810663804","subtype":"Figure","type":"Plot"}},"id":"250c7d83-d568-436d-a911-b78a6bef446c","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2637b746-2b4d-460d-a156-c06912cdcada","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"0990ca3f-96d4-4a55-8f3a-ac5d377f1fec","type":"DataRange1d"},{"attributes":{},"id":"3554f7e9-3d71-4519-a4bf-385d5ba6de8c","type":"ToolEvents"}],"root_ids":["e0c069d0-e2d0-4b8e-b37a-44f810663804"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"35421ae9-a76f-4e9f-8909-f1c397ca5cdc","elementid":"1348a6ce-9fec-480d-9be2-a2f812830da3","modelid":"e0c069d0-e2d0-4b8e-b37a-44f810663804"}];
              
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