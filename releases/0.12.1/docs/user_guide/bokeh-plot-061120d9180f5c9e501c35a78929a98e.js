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
      };var element = document.getElementById("37e24ded-161a-4cf8-bfd8-5f4edf1ac859");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '37e24ded-161a-4cf8-bfd8-5f4edf1ac859' but no matching script tag was found. ")
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
              var docs_json = {"88552ac3-29db-4179-b9bf-3d83e438329a":{"roots":{"references":[{"attributes":{"overlay":{"id":"69088f8c-10a6-44b9-a9c1-9f4559c71d68","type":"BoxAnnotation"},"plot":{"id":"66fcc23f-9e6f-42f5-8ce5-95d31187dafd","subtype":"Figure","type":"Plot"}},"id":"f729f10b-4912-4f5d-8a13-4e4f716e8478","type":"BoxZoomTool"},{"attributes":{},"id":"e0fc5a8b-8094-49fd-8a97-c5fa42c587e4","type":"ToolEvents"},{"attributes":{"plot":null,"text":null},"id":"50ea9acc-b689-4ea2-bbd2-3dc7ffa1929a","type":"Title"},{"attributes":{"callback":null},"id":"cae01647-0415-4d21-8763-63cb3b168078","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"69088f8c-10a6-44b9-a9c1-9f4559c71d68","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"6723fb87-c471-48b2-9b98-2b9fa04335f0","type":"DataRange1d"},{"attributes":{"plot":{"id":"66fcc23f-9e6f-42f5-8ce5-95d31187dafd","subtype":"Figure","type":"Plot"}},"id":"b1bdf0ba-4345-4187-a1fa-45ef58c5b713","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"e7cb38dc-70a8-4343-b8a2-7af1cf8f6f86","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"855fb7b6-0b2a-493c-bd1e-a7bf64d01291","type":"Circle"},{"attributes":{"data_source":{"id":"e7cb38dc-70a8-4343-b8a2-7af1cf8f6f86","type":"ColumnDataSource"},"glyph":{"id":"1b3d68f2-7494-4616-b202-d8ddb092355b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"855fb7b6-0b2a-493c-bd1e-a7bf64d01291","type":"Circle"},"selection_glyph":null},"id":"8ae63961-afcf-4a51-b010-78672b27b13a","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f729f10b-4912-4f5d-8a13-4e4f716e8478","type":"BoxZoomTool"},{"id":"a5fb2761-9619-4ce3-b114-1502a4f52ff2","type":"BoxSelectTool"},{"id":"6243ed36-4cc0-42cf-baad-c9b89cc898b8","type":"CrosshairTool"},{"id":"1b97d8a3-936c-4e09-98fa-026c03fdb8d8","type":"ResizeTool"},{"id":"b1bdf0ba-4345-4187-a1fa-45ef58c5b713","type":"ResetTool"}]},"id":"26398967-2a32-425c-8e60-a078821f1055","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"66fcc23f-9e6f-42f5-8ce5-95d31187dafd","subtype":"Figure","type":"Plot"},"ticker":{"id":"1989f896-14b2-4ea7-bb76-dd3124477870","type":"BasicTicker"}},"id":"c4c9eff4-0433-45b0-8764-71b909f8ba7a","type":"Grid"},{"attributes":{"formatter":{"id":"8481dd20-3a18-42b2-af5c-2d0707084144","type":"BasicTickFormatter"},"plot":{"id":"66fcc23f-9e6f-42f5-8ce5-95d31187dafd","subtype":"Figure","type":"Plot"},"ticker":{"id":"99d65118-8e84-4fff-a186-ef0f87ad1d0c","type":"BasicTicker"}},"id":"69a1bda3-9b5d-4e90-8365-562421a34f6c","type":"LinearAxis"},{"attributes":{},"id":"1d8475a7-120e-449b-8c5c-92bc01f2f64a","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"69a1bda3-9b5d-4e90-8365-562421a34f6c","type":"LinearAxis"}],"left":[{"id":"b3e76d82-9344-4b41-9b97-50779d105e2e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"69a1bda3-9b5d-4e90-8365-562421a34f6c","type":"LinearAxis"},{"id":"e72868ad-f28b-4bb8-bbb6-e00bb354140c","type":"Grid"},{"id":"b3e76d82-9344-4b41-9b97-50779d105e2e","type":"LinearAxis"},{"id":"c4c9eff4-0433-45b0-8764-71b909f8ba7a","type":"Grid"},{"id":"69088f8c-10a6-44b9-a9c1-9f4559c71d68","type":"BoxAnnotation"},{"id":"710543dc-cd0a-4756-8e41-dc6d3fed413c","type":"BoxAnnotation"},{"id":"8ae63961-afcf-4a51-b010-78672b27b13a","type":"GlyphRenderer"}],"title":{"id":"50ea9acc-b689-4ea2-bbd2-3dc7ffa1929a","type":"Title"},"tool_events":{"id":"e0fc5a8b-8094-49fd-8a97-c5fa42c587e4","type":"ToolEvents"},"toolbar":{"id":"26398967-2a32-425c-8e60-a078821f1055","type":"Toolbar"},"x_range":{"id":"6723fb87-c471-48b2-9b98-2b9fa04335f0","type":"DataRange1d"},"y_range":{"id":"cae01647-0415-4d21-8763-63cb3b168078","type":"DataRange1d"}},"id":"66fcc23f-9e6f-42f5-8ce5-95d31187dafd","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"66fcc23f-9e6f-42f5-8ce5-95d31187dafd","subtype":"Figure","type":"Plot"}},"id":"1b97d8a3-936c-4e09-98fa-026c03fdb8d8","type":"ResizeTool"},{"attributes":{"formatter":{"id":"1d8475a7-120e-449b-8c5c-92bc01f2f64a","type":"BasicTickFormatter"},"plot":{"id":"66fcc23f-9e6f-42f5-8ce5-95d31187dafd","subtype":"Figure","type":"Plot"},"ticker":{"id":"1989f896-14b2-4ea7-bb76-dd3124477870","type":"BasicTicker"}},"id":"b3e76d82-9344-4b41-9b97-50779d105e2e","type":"LinearAxis"},{"attributes":{"plot":{"id":"66fcc23f-9e6f-42f5-8ce5-95d31187dafd","subtype":"Figure","type":"Plot"}},"id":"6243ed36-4cc0-42cf-baad-c9b89cc898b8","type":"CrosshairTool"},{"attributes":{},"id":"1989f896-14b2-4ea7-bb76-dd3124477870","type":"BasicTicker"},{"attributes":{},"id":"8481dd20-3a18-42b2-af5c-2d0707084144","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b3d68f2-7494-4616-b202-d8ddb092355b","type":"Circle"},{"attributes":{},"id":"99d65118-8e84-4fff-a186-ef0f87ad1d0c","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"710543dc-cd0a-4756-8e41-dc6d3fed413c","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"66fcc23f-9e6f-42f5-8ce5-95d31187dafd","subtype":"Figure","type":"Plot"},"ticker":{"id":"99d65118-8e84-4fff-a186-ef0f87ad1d0c","type":"BasicTicker"}},"id":"e72868ad-f28b-4bb8-bbb6-e00bb354140c","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"710543dc-cd0a-4756-8e41-dc6d3fed413c","type":"BoxAnnotation"},"plot":{"id":"66fcc23f-9e6f-42f5-8ce5-95d31187dafd","subtype":"Figure","type":"Plot"},"renderers":[{"id":"8ae63961-afcf-4a51-b010-78672b27b13a","type":"GlyphRenderer"}]},"id":"a5fb2761-9619-4ce3-b114-1502a4f52ff2","type":"BoxSelectTool"}],"root_ids":["66fcc23f-9e6f-42f5-8ce5-95d31187dafd"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"88552ac3-29db-4179-b9bf-3d83e438329a","elementid":"37e24ded-161a-4cf8-bfd8-5f4edf1ac859","modelid":"66fcc23f-9e6f-42f5-8ce5-95d31187dafd"}];
              
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