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
      };var element = document.getElementById("3cc4d8bc-131f-46ce-9746-965d5db2b79a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3cc4d8bc-131f-46ce-9746-965d5db2b79a' but no matching script tag was found. ")
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
              var docs_json = {"4efdb0c9-a88c-4e4a-a832-4dbfdeb6dfdc":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a4202f52-e3dc-49eb-9471-5c5f841e2d0e","type":"Circle"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"4fd8e4e6-c62e-4d4d-a3b8-485a26476644","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"76a72741-f014-402e-9be5-e3a26df2c168","type":"BasicTickFormatter"},"plot":{"id":"04c20c45-8f0b-48e6-8326-7a4062d06be6","subtype":"Figure","type":"Plot"},"ticker":{"id":"88f0f365-05ae-4dea-a07e-e173ab70e230","type":"BasicTicker"}},"id":"c0275fb9-24ba-44a0-95c7-14d0a92efd70","type":"LinearAxis"},{"attributes":{"overlay":{"id":"dbb714c5-cc3e-457b-ad8c-ec1054c02280","type":"BoxAnnotation"},"plot":{"id":"04c20c45-8f0b-48e6-8326-7a4062d06be6","subtype":"Figure","type":"Plot"}},"id":"3573eae4-ab01-403d-b131-c8475432c8d8","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"04c20c45-8f0b-48e6-8326-7a4062d06be6","subtype":"Figure","type":"Plot"}},"id":"8366ce2b-7e91-49f0-b3ea-7d324dc46ffc","type":"HelpTool"},{"attributes":{"plot":{"id":"04c20c45-8f0b-48e6-8326-7a4062d06be6","subtype":"Figure","type":"Plot"}},"id":"a3e00e32-ff9b-4a50-b19f-0b557bd6fd94","type":"WheelZoomTool"},{"attributes":{},"id":"3132f254-d098-4279-8a66-99b7c3499b39","type":"ToolEvents"},{"attributes":{"plot":{"id":"04c20c45-8f0b-48e6-8326-7a4062d06be6","subtype":"Figure","type":"Plot"}},"id":"250dad1f-0450-425b-95f0-922f1978aa2b","type":"SaveTool"},{"attributes":{"plot":{"id":"04c20c45-8f0b-48e6-8326-7a4062d06be6","subtype":"Figure","type":"Plot"}},"id":"3a44f85e-b803-417e-addf-81f5c467d225","type":"ResetTool"},{"attributes":{"below":[{"id":"c0275fb9-24ba-44a0-95c7-14d0a92efd70","type":"LinearAxis"}],"left":[{"id":"55caba7f-43d9-48eb-b8be-78abbd30a2f1","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c0275fb9-24ba-44a0-95c7-14d0a92efd70","type":"LinearAxis"},{"id":"7d206351-7ee8-4274-b27e-eaf0ffc4ea88","type":"Grid"},{"id":"55caba7f-43d9-48eb-b8be-78abbd30a2f1","type":"LinearAxis"},{"id":"2b928686-f96e-4b4a-87bb-21b05b618125","type":"Grid"},{"id":"dbb714c5-cc3e-457b-ad8c-ec1054c02280","type":"BoxAnnotation"},{"id":"aef9ecb6-a888-4a29-9456-6ecb59ff0f0d","type":"GlyphRenderer"}],"title":{"id":"bbeab2cc-ade4-4c97-8f0b-c83c10ff6aa5","type":"Title"},"tool_events":{"id":"3132f254-d098-4279-8a66-99b7c3499b39","type":"ToolEvents"},"toolbar":{"id":"0739b410-9814-4d2d-9e78-9fd4901ffb22","type":"Toolbar"},"x_range":{"id":"68f08dd4-eee4-4691-b6f5-36f72decdd8f","type":"Range1d"},"y_range":{"id":"455b9f0d-ce9b-4a74-b6a8-c57ca6790ac9","type":"Range1d"}},"id":"04c20c45-8f0b-48e6-8326-7a4062d06be6","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"0cbf527f-910b-4524-a2c8-610a009f92d1","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"04c20c45-8f0b-48e6-8326-7a4062d06be6","subtype":"Figure","type":"Plot"},"ticker":{"id":"0cbf527f-910b-4524-a2c8-610a009f92d1","type":"BasicTicker"}},"id":"2b928686-f96e-4b4a-87bb-21b05b618125","type":"Grid"},{"attributes":{"plot":{"id":"04c20c45-8f0b-48e6-8326-7a4062d06be6","subtype":"Figure","type":"Plot"}},"id":"862fd8d8-7ebe-48e8-94b3-e34b35d279a7","type":"PanTool"},{"attributes":{"plot":null,"text":null},"id":"bbeab2cc-ade4-4c97-8f0b-c83c10ff6aa5","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"48d718af-babd-4c42-bf45-31190466b87b","type":"Circle"},{"attributes":{"data_source":{"id":"4fd8e4e6-c62e-4d4d-a3b8-485a26476644","type":"ColumnDataSource"},"glyph":{"id":"a4202f52-e3dc-49eb-9471-5c5f841e2d0e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"48d718af-babd-4c42-bf45-31190466b87b","type":"Circle"},"selection_glyph":null},"id":"aef9ecb6-a888-4a29-9456-6ecb59ff0f0d","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"dbb714c5-cc3e-457b-ad8c-ec1054c02280","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"862fd8d8-7ebe-48e8-94b3-e34b35d279a7","type":"PanTool"},{"id":"a3e00e32-ff9b-4a50-b19f-0b557bd6fd94","type":"WheelZoomTool"},{"id":"3573eae4-ab01-403d-b131-c8475432c8d8","type":"BoxZoomTool"},{"id":"250dad1f-0450-425b-95f0-922f1978aa2b","type":"SaveTool"},{"id":"3a44f85e-b803-417e-addf-81f5c467d225","type":"ResetTool"},{"id":"8366ce2b-7e91-49f0-b3ea-7d324dc46ffc","type":"HelpTool"}]},"id":"0739b410-9814-4d2d-9e78-9fd4901ffb22","type":"Toolbar"},{"attributes":{},"id":"7e6b49bc-1109-4c6c-930d-1f900af68881","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":15},"id":"455b9f0d-ce9b-4a74-b6a8-c57ca6790ac9","type":"Range1d"},{"attributes":{"formatter":{"id":"7e6b49bc-1109-4c6c-930d-1f900af68881","type":"BasicTickFormatter"},"plot":{"id":"04c20c45-8f0b-48e6-8326-7a4062d06be6","subtype":"Figure","type":"Plot"},"ticker":{"id":"0cbf527f-910b-4524-a2c8-610a009f92d1","type":"BasicTicker"}},"id":"55caba7f-43d9-48eb-b8be-78abbd30a2f1","type":"LinearAxis"},{"attributes":{"plot":{"id":"04c20c45-8f0b-48e6-8326-7a4062d06be6","subtype":"Figure","type":"Plot"},"ticker":{"id":"88f0f365-05ae-4dea-a07e-e173ab70e230","type":"BasicTicker"}},"id":"7d206351-7ee8-4274-b27e-eaf0ffc4ea88","type":"Grid"},{"attributes":{},"id":"76a72741-f014-402e-9be5-e3a26df2c168","type":"BasicTickFormatter"},{"attributes":{},"id":"88f0f365-05ae-4dea-a07e-e173ab70e230","type":"BasicTicker"},{"attributes":{"callback":null,"end":20},"id":"68f08dd4-eee4-4691-b6f5-36f72decdd8f","type":"Range1d"}],"root_ids":["04c20c45-8f0b-48e6-8326-7a4062d06be6"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"4efdb0c9-a88c-4e4a-a832-4dbfdeb6dfdc","elementid":"3cc4d8bc-131f-46ce-9746-965d5db2b79a","modelid":"04c20c45-8f0b-48e6-8326-7a4062d06be6"}];
              
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