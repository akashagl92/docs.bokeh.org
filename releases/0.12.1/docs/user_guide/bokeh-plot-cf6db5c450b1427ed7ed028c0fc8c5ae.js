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
      };var element = document.getElementById("442b17ef-9907-4c99-a6f8-776e50bace18");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '442b17ef-9907-4c99-a6f8-776e50bace18' but no matching script tag was found. ")
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
              var docs_json = {"84f60dbb-3977-4b2b-a49d-106b069e6784":{"roots":{"references":[{"attributes":{"plot":{"id":"c1183c03-4a83-4aa4-a8f2-a75736166048","subtype":"Figure","type":"Plot"}},"id":"14f03d80-0338-425d-8885-eb2730d899a3","type":"SaveTool"},{"attributes":{"data_source":{"id":"5b9bcfb2-b739-409d-bf46-3d302c8e3856","type":"ColumnDataSource"},"glyph":{"id":"93291486-e5cf-43d8-955a-c4fb8bc635c5","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"6865868c-404d-4e15-9cc7-6cb6a757fc36","type":"Segment"},"selection_glyph":null},"id":"e111731d-2081-48a5-9d2a-dec8cd31cec7","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y1","y0","x0","x1"],"data":{"x0":[1,2,3],"x1":[1.2,2.4,3.1],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"5b9bcfb2-b739-409d-bf46-3d302c8e3856","type":"ColumnDataSource"},{"attributes":{},"id":"7874fefa-63fb-48d2-aa4a-82e324f9c933","type":"BasicTicker"},{"attributes":{},"id":"666dead4-3184-4f46-8309-e8908b749930","type":"ToolEvents"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"93291486-e5cf-43d8-955a-c4fb8bc635c5","type":"Segment"},{"attributes":{"plot":{"id":"c1183c03-4a83-4aa4-a8f2-a75736166048","subtype":"Figure","type":"Plot"},"ticker":{"id":"ead08833-20cc-4e73-b126-2edf6c1faae8","type":"BasicTicker"}},"id":"61e7be98-937f-4119-ba4d-254d676fe7ff","type":"Grid"},{"attributes":{"formatter":{"id":"d75c0868-a388-4b12-b892-753f9356a350","type":"BasicTickFormatter"},"plot":{"id":"c1183c03-4a83-4aa4-a8f2-a75736166048","subtype":"Figure","type":"Plot"},"ticker":{"id":"7874fefa-63fb-48d2-aa4a-82e324f9c933","type":"BasicTicker"}},"id":"6170cef7-5fd0-4506-9481-34eb6bd3622d","type":"LinearAxis"},{"attributes":{},"id":"f13eac52-ed2e-4035-bc0f-7104bdfc8434","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1ce552f1-6a3f-4df3-88a8-d481a5abeda5","type":"PanTool"},{"id":"e62db885-f231-4193-8a96-730956ee4184","type":"WheelZoomTool"},{"id":"ae72d892-75b8-4e58-b7d0-f7df8427359f","type":"BoxZoomTool"},{"id":"14f03d80-0338-425d-8885-eb2730d899a3","type":"SaveTool"},{"id":"10d12a3e-9035-482b-9fdb-5acf034a6302","type":"ResetTool"},{"id":"5fef4a90-0289-4cb5-80f7-c8e86ffdcaa6","type":"HelpTool"}]},"id":"b8e0ee09-a087-43eb-a359-4b37f68a8d52","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"6865868c-404d-4e15-9cc7-6cb6a757fc36","type":"Segment"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"43e2cad0-18f8-4c4b-88e2-1096b9375d73","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"c1183c03-4a83-4aa4-a8f2-a75736166048","subtype":"Figure","type":"Plot"}},"id":"e62db885-f231-4193-8a96-730956ee4184","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"c1183c03-4a83-4aa4-a8f2-a75736166048","subtype":"Figure","type":"Plot"}},"id":"5fef4a90-0289-4cb5-80f7-c8e86ffdcaa6","type":"HelpTool"},{"attributes":{"formatter":{"id":"f13eac52-ed2e-4035-bc0f-7104bdfc8434","type":"BasicTickFormatter"},"plot":{"id":"c1183c03-4a83-4aa4-a8f2-a75736166048","subtype":"Figure","type":"Plot"},"ticker":{"id":"ead08833-20cc-4e73-b126-2edf6c1faae8","type":"BasicTicker"}},"id":"318c861b-de05-4ccb-b03f-0e3e1b896f40","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"c1183c03-4a83-4aa4-a8f2-a75736166048","subtype":"Figure","type":"Plot"},"ticker":{"id":"7874fefa-63fb-48d2-aa4a-82e324f9c933","type":"BasicTicker"}},"id":"cc044aee-ccfd-417a-8860-8268ef5e47ef","type":"Grid"},{"attributes":{"overlay":{"id":"43e2cad0-18f8-4c4b-88e2-1096b9375d73","type":"BoxAnnotation"},"plot":{"id":"c1183c03-4a83-4aa4-a8f2-a75736166048","subtype":"Figure","type":"Plot"}},"id":"ae72d892-75b8-4e58-b7d0-f7df8427359f","type":"BoxZoomTool"},{"attributes":{},"id":"d75c0868-a388-4b12-b892-753f9356a350","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"3d806ca0-48b9-440a-b399-0b54a41020bd","type":"DataRange1d"},{"attributes":{},"id":"ead08833-20cc-4e73-b126-2edf6c1faae8","type":"BasicTicker"},{"attributes":{"callback":null},"id":"271caaec-31e1-4ff9-b493-218f67bdfab2","type":"DataRange1d"},{"attributes":{"plot":{"id":"c1183c03-4a83-4aa4-a8f2-a75736166048","subtype":"Figure","type":"Plot"}},"id":"10d12a3e-9035-482b-9fdb-5acf034a6302","type":"ResetTool"},{"attributes":{"below":[{"id":"318c861b-de05-4ccb-b03f-0e3e1b896f40","type":"LinearAxis"}],"left":[{"id":"6170cef7-5fd0-4506-9481-34eb6bd3622d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"318c861b-de05-4ccb-b03f-0e3e1b896f40","type":"LinearAxis"},{"id":"61e7be98-937f-4119-ba4d-254d676fe7ff","type":"Grid"},{"id":"6170cef7-5fd0-4506-9481-34eb6bd3622d","type":"LinearAxis"},{"id":"cc044aee-ccfd-417a-8860-8268ef5e47ef","type":"Grid"},{"id":"43e2cad0-18f8-4c4b-88e2-1096b9375d73","type":"BoxAnnotation"},{"id":"e111731d-2081-48a5-9d2a-dec8cd31cec7","type":"GlyphRenderer"}],"title":{"id":"0ac51805-9cf4-4ff7-a4f4-fbfbd8a34ec7","type":"Title"},"tool_events":{"id":"666dead4-3184-4f46-8309-e8908b749930","type":"ToolEvents"},"toolbar":{"id":"b8e0ee09-a087-43eb-a359-4b37f68a8d52","type":"Toolbar"},"x_range":{"id":"271caaec-31e1-4ff9-b493-218f67bdfab2","type":"DataRange1d"},"y_range":{"id":"3d806ca0-48b9-440a-b399-0b54a41020bd","type":"DataRange1d"}},"id":"c1183c03-4a83-4aa4-a8f2-a75736166048","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":null},"id":"0ac51805-9cf4-4ff7-a4f4-fbfbd8a34ec7","type":"Title"},{"attributes":{"plot":{"id":"c1183c03-4a83-4aa4-a8f2-a75736166048","subtype":"Figure","type":"Plot"}},"id":"1ce552f1-6a3f-4df3-88a8-d481a5abeda5","type":"PanTool"}],"root_ids":["c1183c03-4a83-4aa4-a8f2-a75736166048"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"84f60dbb-3977-4b2b-a49d-106b069e6784","elementid":"442b17ef-9907-4c99-a6f8-776e50bace18","modelid":"c1183c03-4a83-4aa4-a8f2-a75736166048"}];
              
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