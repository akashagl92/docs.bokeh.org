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
      };var element = document.getElementById("f99425f4-bbca-4399-bd0e-6fbe6bf0f3bd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f99425f4-bbca-4399-bd0e-6fbe6bf0f3bd' but no matching script tag was found. ")
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
              var docs_json = {"8b952326-fbbf-4e18-8e6a-5bcafacda084":{"roots":{"references":[{"attributes":{"data_source":{"id":"3c271b46-4235-484b-bd73-21358b9a289d","type":"ColumnDataSource"},"glyph":{"id":"bb13000d-7d61-4929-a03e-fac8dbb69c9c","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"5299c7f1-a2e7-49a2-b668-94136bee1a7e","type":"Circle"},"selection_glyph":null},"id":"f11a9ad4-0e34-46ce-b093-c12207250e58","type":"GlyphRenderer"},{"attributes":{"band_fill_alpha":{"value":0.1},"band_fill_color":{"value":"navy"},"dimension":1,"plot":{"id":"fc8acfcc-8c3b-4f5e-9643-5397cfb5d7bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4f2f35a-312f-4abe-b845-75fa7bed9eeb","type":"BasicTicker"}},"id":"f7ce1d56-463a-40fe-83f9-ea0518fe47c5","type":"Grid"},{"attributes":{"formatter":{"id":"2223e1c1-dcff-4617-981e-91321f7cfe69","type":"BasicTickFormatter"},"plot":{"id":"fc8acfcc-8c3b-4f5e-9643-5397cfb5d7bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4f2f35a-312f-4abe-b845-75fa7bed9eeb","type":"BasicTicker"}},"id":"a20f365b-ccec-4735-97ab-c117bcd01f0c","type":"LinearAxis"},{"attributes":{"plot":{"id":"fc8acfcc-8c3b-4f5e-9643-5397cfb5d7bb","subtype":"Figure","type":"Plot"}},"id":"d56251e3-c72f-4fa9-80c2-3030bd8c01de","type":"ResetTool"},{"attributes":{"plot":{"id":"fc8acfcc-8c3b-4f5e-9643-5397cfb5d7bb","subtype":"Figure","type":"Plot"}},"id":"9d3eeb75-1958-42d2-8824-d56992e08840","type":"HelpTool"},{"attributes":{"plot":{"id":"fc8acfcc-8c3b-4f5e-9643-5397cfb5d7bb","subtype":"Figure","type":"Plot"}},"id":"8ff706e2-70e2-4db5-9138-e1392cb7162e","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5299c7f1-a2e7-49a2-b668-94136bee1a7e","type":"Circle"},{"attributes":{"callback":null},"id":"513ff663-8323-4053-8d06-68d96475c09d","type":"DataRange1d"},{"attributes":{},"id":"ebae1b36-0b4c-4bd5-a015-bc13d19e39fd","type":"BasicTicker"},{"attributes":{"overlay":{"id":"b31b249b-3201-481c-afd7-6c3657f91511","type":"BoxAnnotation"},"plot":{"id":"fc8acfcc-8c3b-4f5e-9643-5397cfb5d7bb","subtype":"Figure","type":"Plot"}},"id":"fc2a4108-98db-4926-a9a2-4f169e0d8fde","type":"BoxZoomTool"},{"attributes":{},"id":"0e8110f1-0c0d-4c74-b06a-000c2c5f86ba","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"11d3366d-f4cf-419c-99b6-06bb0bb1a9cf","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c17ef54d-c28a-4778-b42f-6239102804cd","type":"PanTool"},{"id":"8ff706e2-70e2-4db5-9138-e1392cb7162e","type":"WheelZoomTool"},{"id":"fc2a4108-98db-4926-a9a2-4f169e0d8fde","type":"BoxZoomTool"},{"id":"84a5a497-1537-4715-89cf-8885ea598c42","type":"SaveTool"},{"id":"d56251e3-c72f-4fa9-80c2-3030bd8c01de","type":"ResetTool"},{"id":"9d3eeb75-1958-42d2-8824-d56992e08840","type":"HelpTool"}]},"id":"804d9331-6636-405e-9327-3d1fe280b2eb","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"3c271b46-4235-484b-bd73-21358b9a289d","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"bb13000d-7d61-4929-a03e-fac8dbb69c9c","type":"Circle"},{"attributes":{},"id":"3682c240-13ef-4dfc-9bb2-152c49b1b5ac","type":"ToolEvents"},{"attributes":{"plot":null,"text":null},"id":"ac94ab5b-b647-4b25-8841-44e004b6f12d","type":"Title"},{"attributes":{"plot":{"id":"fc8acfcc-8c3b-4f5e-9643-5397cfb5d7bb","subtype":"Figure","type":"Plot"}},"id":"c17ef54d-c28a-4778-b42f-6239102804cd","type":"PanTool"},{"attributes":{"formatter":{"id":"0e8110f1-0c0d-4c74-b06a-000c2c5f86ba","type":"BasicTickFormatter"},"plot":{"id":"fc8acfcc-8c3b-4f5e-9643-5397cfb5d7bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"ebae1b36-0b4c-4bd5-a015-bc13d19e39fd","type":"BasicTicker"}},"id":"8b371478-16a9-46d3-a49e-806da71e0e70","type":"LinearAxis"},{"attributes":{"plot":{"id":"fc8acfcc-8c3b-4f5e-9643-5397cfb5d7bb","subtype":"Figure","type":"Plot"}},"id":"84a5a497-1537-4715-89cf-8885ea598c42","type":"SaveTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"fc8acfcc-8c3b-4f5e-9643-5397cfb5d7bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"ebae1b36-0b4c-4bd5-a015-bc13d19e39fd","type":"BasicTicker"}},"id":"772b896e-e1f8-4e1f-8075-ede811a5cafa","type":"Grid"},{"attributes":{},"id":"2223e1c1-dcff-4617-981e-91321f7cfe69","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b31b249b-3201-481c-afd7-6c3657f91511","type":"BoxAnnotation"},{"attributes":{},"id":"e4f2f35a-312f-4abe-b845-75fa7bed9eeb","type":"BasicTicker"},{"attributes":{"below":[{"id":"8b371478-16a9-46d3-a49e-806da71e0e70","type":"LinearAxis"}],"left":[{"id":"a20f365b-ccec-4735-97ab-c117bcd01f0c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8b371478-16a9-46d3-a49e-806da71e0e70","type":"LinearAxis"},{"id":"772b896e-e1f8-4e1f-8075-ede811a5cafa","type":"Grid"},{"id":"a20f365b-ccec-4735-97ab-c117bcd01f0c","type":"LinearAxis"},{"id":"f7ce1d56-463a-40fe-83f9-ea0518fe47c5","type":"Grid"},{"id":"b31b249b-3201-481c-afd7-6c3657f91511","type":"BoxAnnotation"},{"id":"f11a9ad4-0e34-46ce-b093-c12207250e58","type":"GlyphRenderer"}],"title":{"id":"ac94ab5b-b647-4b25-8841-44e004b6f12d","type":"Title"},"tool_events":{"id":"3682c240-13ef-4dfc-9bb2-152c49b1b5ac","type":"ToolEvents"},"toolbar":{"id":"804d9331-6636-405e-9327-3d1fe280b2eb","type":"Toolbar"},"x_range":{"id":"11d3366d-f4cf-419c-99b6-06bb0bb1a9cf","type":"DataRange1d"},"y_range":{"id":"513ff663-8323-4053-8d06-68d96475c09d","type":"DataRange1d"}},"id":"fc8acfcc-8c3b-4f5e-9643-5397cfb5d7bb","subtype":"Figure","type":"Plot"}],"root_ids":["fc8acfcc-8c3b-4f5e-9643-5397cfb5d7bb"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"8b952326-fbbf-4e18-8e6a-5bcafacda084","elementid":"f99425f4-bbca-4399-bd0e-6fbe6bf0f3bd","modelid":"fc8acfcc-8c3b-4f5e-9643-5397cfb5d7bb"}];
              
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