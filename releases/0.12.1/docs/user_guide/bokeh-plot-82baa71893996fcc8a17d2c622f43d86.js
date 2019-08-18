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
      };var element = document.getElementById("d979a077-faf1-4d5b-af95-1584472ca6f0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd979a077-faf1-4d5b-af95-1584472ca6f0' but no matching script tag was found. ")
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
              var docs_json = {"ee0364de-da1c-4c7e-89dd-707f64005482":{"roots":{"references":[{"attributes":{"plot":{"id":"d2dbf87d-0e66-4ebf-9a2e-9c7ba84a8f04","subtype":"Figure","type":"Plot"}},"id":"319d0d72-4fbe-450d-8c83-55239d4f5f7f","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"ef33741d-5a0f-4318-9427-2d19521bd36a","type":"Square"},{"attributes":{"plot":{"id":"d2dbf87d-0e66-4ebf-9a2e-9c7ba84a8f04","subtype":"Figure","type":"Plot"}},"id":"923e7075-348a-4481-af46-84c4efeda394","type":"SaveTool"},{"attributes":{"plot":{"id":"d2dbf87d-0e66-4ebf-9a2e-9c7ba84a8f04","subtype":"Figure","type":"Plot"}},"id":"518bde0e-897d-44a9-b9ef-b8a719ef35fb","type":"PanTool"},{"attributes":{},"id":"25f7e2fa-e3ac-4424-ac95-903ef7cba62e","type":"BasicTicker"},{"attributes":{"formatter":{"id":"50a450d5-ea86-4bfd-9671-7797985bbaec","type":"BasicTickFormatter"},"plot":{"id":"d2dbf87d-0e66-4ebf-9a2e-9c7ba84a8f04","subtype":"Figure","type":"Plot"},"ticker":{"id":"6911d109-38c2-4e7b-b9ff-c8dd37573d31","type":"BasicTicker"}},"id":"74ff6137-01ed-49d3-ba2f-8d007aab259c","type":"LinearAxis"},{"attributes":{"plot":{"id":"d2dbf87d-0e66-4ebf-9a2e-9c7ba84a8f04","subtype":"Figure","type":"Plot"}},"id":"ac1d5348-9bdc-4709-8c74-5b1041106034","type":"ResetTool"},{"attributes":{"callback":null},"id":"57278e5e-bf85-4896-97ab-f4ab01fd4f94","type":"DataRange1d"},{"attributes":{"below":[{"id":"74ff6137-01ed-49d3-ba2f-8d007aab259c","type":"LinearAxis"}],"left":[{"id":"611d5f97-cfc1-40b6-ac5f-af5c64a03491","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"74ff6137-01ed-49d3-ba2f-8d007aab259c","type":"LinearAxis"},{"id":"47a78f08-e3fb-4cf8-bd50-e35d218e8e3a","type":"Grid"},{"id":"611d5f97-cfc1-40b6-ac5f-af5c64a03491","type":"LinearAxis"},{"id":"ef11cc58-498c-497b-9584-b2c130f7d782","type":"Grid"},{"id":"23859308-007f-4938-b99d-2e8655dd8fff","type":"BoxAnnotation"},{"id":"651b1d17-b3d7-48fc-810e-ce336c010676","type":"GlyphRenderer"}],"title":{"id":"c62946cb-d439-4726-ade0-6929950ee153","type":"Title"},"tool_events":{"id":"950c702d-a2ee-4150-8930-50fd62cef75a","type":"ToolEvents"},"toolbar":{"id":"85fc9178-e754-4567-9933-92c1cab2890d","type":"Toolbar"},"x_range":{"id":"57278e5e-bf85-4896-97ab-f4ab01fd4f94","type":"DataRange1d"},"y_range":{"id":"63e1312e-d029-402c-b8b8-3b6df3223e7a","type":"DataRange1d"}},"id":"d2dbf87d-0e66-4ebf-9a2e-9c7ba84a8f04","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":null},"id":"c62946cb-d439-4726-ade0-6929950ee153","type":"Title"},{"attributes":{"overlay":{"id":"23859308-007f-4938-b99d-2e8655dd8fff","type":"BoxAnnotation"},"plot":{"id":"d2dbf87d-0e66-4ebf-9a2e-9c7ba84a8f04","subtype":"Figure","type":"Plot"}},"id":"b9f269a8-7b5c-4228-bffa-ab0dbce041d4","type":"BoxZoomTool"},{"attributes":{},"id":"50a450d5-ea86-4bfd-9671-7797985bbaec","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"bfdc937d-e901-4d45-818c-63a92ec5e426","type":"ColumnDataSource"},"glyph":{"id":"62152e12-7170-4143-adac-33285a1562d9","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"ef33741d-5a0f-4318-9427-2d19521bd36a","type":"Square"},"selection_glyph":null},"id":"651b1d17-b3d7-48fc-810e-ce336c010676","type":"GlyphRenderer"},{"attributes":{},"id":"3a8d43fa-9f22-45de-b4da-be203966ef10","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"518bde0e-897d-44a9-b9ef-b8a719ef35fb","type":"PanTool"},{"id":"f4b32a80-8208-49a1-83b6-ff2dc9c67347","type":"WheelZoomTool"},{"id":"b9f269a8-7b5c-4228-bffa-ab0dbce041d4","type":"BoxZoomTool"},{"id":"923e7075-348a-4481-af46-84c4efeda394","type":"SaveTool"},{"id":"ac1d5348-9bdc-4709-8c74-5b1041106034","type":"ResetTool"},{"id":"319d0d72-4fbe-450d-8c83-55239d4f5f7f","type":"HelpTool"}]},"id":"85fc9178-e754-4567-9933-92c1cab2890d","type":"Toolbar"},{"attributes":{},"id":"6911d109-38c2-4e7b-b9ff-c8dd37573d31","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"d2dbf87d-0e66-4ebf-9a2e-9c7ba84a8f04","subtype":"Figure","type":"Plot"},"ticker":{"id":"25f7e2fa-e3ac-4424-ac95-903ef7cba62e","type":"BasicTicker"}},"id":"ef11cc58-498c-497b-9584-b2c130f7d782","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"62152e12-7170-4143-adac-33285a1562d9","type":"Square"},{"attributes":{},"id":"950c702d-a2ee-4150-8930-50fd62cef75a","type":"ToolEvents"},{"attributes":{"formatter":{"id":"3a8d43fa-9f22-45de-b4da-be203966ef10","type":"BasicTickFormatter"},"plot":{"id":"d2dbf87d-0e66-4ebf-9a2e-9c7ba84a8f04","subtype":"Figure","type":"Plot"},"ticker":{"id":"25f7e2fa-e3ac-4424-ac95-903ef7cba62e","type":"BasicTicker"}},"id":"611d5f97-cfc1-40b6-ac5f-af5c64a03491","type":"LinearAxis"},{"attributes":{"plot":{"id":"d2dbf87d-0e66-4ebf-9a2e-9c7ba84a8f04","subtype":"Figure","type":"Plot"},"ticker":{"id":"6911d109-38c2-4e7b-b9ff-c8dd37573d31","type":"BasicTicker"}},"id":"47a78f08-e3fb-4cf8-bd50-e35d218e8e3a","type":"Grid"},{"attributes":{"plot":{"id":"d2dbf87d-0e66-4ebf-9a2e-9c7ba84a8f04","subtype":"Figure","type":"Plot"}},"id":"f4b32a80-8208-49a1-83b6-ff2dc9c67347","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"bfdc937d-e901-4d45-818c-63a92ec5e426","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"23859308-007f-4938-b99d-2e8655dd8fff","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"63e1312e-d029-402c-b8b8-3b6df3223e7a","type":"DataRange1d"}],"root_ids":["d2dbf87d-0e66-4ebf-9a2e-9c7ba84a8f04"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"ee0364de-da1c-4c7e-89dd-707f64005482","elementid":"d979a077-faf1-4d5b-af95-1584472ca6f0","modelid":"d2dbf87d-0e66-4ebf-9a2e-9c7ba84a8f04"}];
              
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