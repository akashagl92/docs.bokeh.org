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
      };var element = document.getElementById("fd007a0a-9ade-49e2-beaf-2914c63834c9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fd007a0a-9ade-49e2-beaf-2914c63834c9' but no matching script tag was found. ")
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
              var docs_json = {"65a7e4b1-b4cc-40cf-9891-20903c2c2414":{"roots":{"references":[{"attributes":{"callback":null},"id":"74fdd24d-51da-4e6e-b531-d9b27f5db66c","type":"DataRange1d"},{"attributes":{},"id":"b3a74811-c6ea-4093-a1b3-10dc2293740a","type":"ToolEvents"},{"attributes":{},"id":"e8b89805-801b-4278-918b-eeae27a3ea92","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"fafd33ad-a250-4811-bfe2-3a4df2f6f1e8","type":"BasicTickFormatter"},"plot":{"id":"310a1ab2-ce6a-4714-ae4f-103fcfe81e53","subtype":"Figure","type":"Plot"},"ticker":{"id":"1730a3bf-69b7-4930-a9ee-b7dad328254e","type":"BasicTicker"}},"id":"cde04381-a14b-4f5b-87ea-9f05ffae24f2","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"85d02040-3718-4e6e-b5a3-f5ad98a7238f","type":"Rect"},{"attributes":{},"id":"d8361d11-ff76-42d3-9024-8f47b708226b","type":"BasicTicker"},{"attributes":{"callback":null},"id":"4bf1113f-a840-40ea-afee-73fe3022e8ae","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"438dfd77-bbd5-4f2e-8a4b-11f2847f5bda","type":"Rect"},{"attributes":{"overlay":{"id":"fa6d935d-86c1-48d7-a1da-b6b419326b98","type":"BoxAnnotation"},"plot":{"id":"310a1ab2-ce6a-4714-ae4f-103fcfe81e53","subtype":"Figure","type":"Plot"}},"id":"b6b1ade7-5621-48cc-8213-a97868975106","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"310a1ab2-ce6a-4714-ae4f-103fcfe81e53","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8361d11-ff76-42d3-9024-8f47b708226b","type":"BasicTicker"}},"id":"68e8aab7-7c32-4f79-bfae-0e74a9b1fb61","type":"Grid"},{"attributes":{"formatter":{"id":"e8b89805-801b-4278-918b-eeae27a3ea92","type":"BasicTickFormatter"},"plot":{"id":"310a1ab2-ce6a-4714-ae4f-103fcfe81e53","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8361d11-ff76-42d3-9024-8f47b708226b","type":"BasicTicker"}},"id":"49ab4ec1-23e5-4ea4-8d87-3616b9c31f3e","type":"LinearAxis"},{"attributes":{"plot":{"id":"310a1ab2-ce6a-4714-ae4f-103fcfe81e53","subtype":"Figure","type":"Plot"}},"id":"ca2e7c4c-cf4c-4843-b71e-2935af223b92","type":"PanTool"},{"attributes":{"plot":{"id":"310a1ab2-ce6a-4714-ae4f-103fcfe81e53","subtype":"Figure","type":"Plot"}},"id":"027f9838-bd02-4238-a2c7-6115f43680b1","type":"SaveTool"},{"attributes":{},"id":"fafd33ad-a250-4811-bfe2-3a4df2f6f1e8","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fa6d935d-86c1-48d7-a1da-b6b419326b98","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"9b7e62c5-f5e8-4c0c-b0c5-1aefe73b680f","type":"ColumnDataSource"},{"attributes":{},"id":"1730a3bf-69b7-4930-a9ee-b7dad328254e","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ca2e7c4c-cf4c-4843-b71e-2935af223b92","type":"PanTool"},{"id":"b87ae061-4fa8-4fa9-9af1-f5113466866b","type":"WheelZoomTool"},{"id":"b6b1ade7-5621-48cc-8213-a97868975106","type":"BoxZoomTool"},{"id":"027f9838-bd02-4238-a2c7-6115f43680b1","type":"SaveTool"},{"id":"7f2f445c-0141-43e1-b44f-ca0b8d1b6268","type":"ResetTool"},{"id":"6914fca3-d5bb-466d-b4e0-241709fbf087","type":"HelpTool"}]},"id":"7ffab0b0-515e-4b75-ab23-4ea2baf15569","type":"Toolbar"},{"attributes":{"plot":{"id":"310a1ab2-ce6a-4714-ae4f-103fcfe81e53","subtype":"Figure","type":"Plot"}},"id":"7f2f445c-0141-43e1-b44f-ca0b8d1b6268","type":"ResetTool"},{"attributes":{"plot":null,"text":null},"id":"ea94dbe2-b855-43e1-b12e-6e5afb2490d8","type":"Title"},{"attributes":{"plot":{"id":"310a1ab2-ce6a-4714-ae4f-103fcfe81e53","subtype":"Figure","type":"Plot"},"ticker":{"id":"1730a3bf-69b7-4930-a9ee-b7dad328254e","type":"BasicTicker"}},"id":"43e42a40-8a52-42da-b2bc-5af6ec4a2c6b","type":"Grid"},{"attributes":{"plot":{"id":"310a1ab2-ce6a-4714-ae4f-103fcfe81e53","subtype":"Figure","type":"Plot"}},"id":"b87ae061-4fa8-4fa9-9af1-f5113466866b","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"310a1ab2-ce6a-4714-ae4f-103fcfe81e53","subtype":"Figure","type":"Plot"}},"id":"6914fca3-d5bb-466d-b4e0-241709fbf087","type":"HelpTool"},{"attributes":{"below":[{"id":"cde04381-a14b-4f5b-87ea-9f05ffae24f2","type":"LinearAxis"}],"left":[{"id":"49ab4ec1-23e5-4ea4-8d87-3616b9c31f3e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"cde04381-a14b-4f5b-87ea-9f05ffae24f2","type":"LinearAxis"},{"id":"43e42a40-8a52-42da-b2bc-5af6ec4a2c6b","type":"Grid"},{"id":"49ab4ec1-23e5-4ea4-8d87-3616b9c31f3e","type":"LinearAxis"},{"id":"68e8aab7-7c32-4f79-bfae-0e74a9b1fb61","type":"Grid"},{"id":"fa6d935d-86c1-48d7-a1da-b6b419326b98","type":"BoxAnnotation"},{"id":"f40b9d92-ccb4-4326-b6b4-6dbf92ba9fde","type":"GlyphRenderer"}],"title":{"id":"ea94dbe2-b855-43e1-b12e-6e5afb2490d8","type":"Title"},"tool_events":{"id":"b3a74811-c6ea-4093-a1b3-10dc2293740a","type":"ToolEvents"},"toolbar":{"id":"7ffab0b0-515e-4b75-ab23-4ea2baf15569","type":"Toolbar"},"x_range":{"id":"4bf1113f-a840-40ea-afee-73fe3022e8ae","type":"DataRange1d"},"y_range":{"id":"74fdd24d-51da-4e6e-b531-d9b27f5db66c","type":"DataRange1d"}},"id":"310a1ab2-ce6a-4714-ae4f-103fcfe81e53","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"9b7e62c5-f5e8-4c0c-b0c5-1aefe73b680f","type":"ColumnDataSource"},"glyph":{"id":"438dfd77-bbd5-4f2e-8a4b-11f2847f5bda","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"85d02040-3718-4e6e-b5a3-f5ad98a7238f","type":"Rect"},"selection_glyph":null},"id":"f40b9d92-ccb4-4326-b6b4-6dbf92ba9fde","type":"GlyphRenderer"}],"root_ids":["310a1ab2-ce6a-4714-ae4f-103fcfe81e53"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"65a7e4b1-b4cc-40cf-9891-20903c2c2414","elementid":"fd007a0a-9ade-49e2-beaf-2914c63834c9","modelid":"310a1ab2-ce6a-4714-ae4f-103fcfe81e53"}];
              
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