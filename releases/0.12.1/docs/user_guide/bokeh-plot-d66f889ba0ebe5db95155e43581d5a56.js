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
      };var element = document.getElementById("15f463ff-e74f-4bd1-93e1-d87c4081c349");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '15f463ff-e74f-4bd1-93e1-d87c4081c349' but no matching script tag was found. ")
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
              var docs_json = {"a0a42faf-a90e-499f-9ea0-7c15609a158a":{"roots":{"references":[{"attributes":{"callback":null},"id":"e5319a71-8de3-40d4-8183-01f25b666dce","type":"DataRange1d"},{"attributes":{"callback":null},"id":"6eb29ac4-3242-4a4c-a463-a887e06056df","type":"DataRange1d"},{"attributes":{"data_source":{"id":"5d6bd4a5-54c3-4f61-ad21-80fc8c9f8ffa","type":"ColumnDataSource"},"glyph":{"id":"626d1c3c-d681-43cd-a85b-8145c9810cc6","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"d58992f0-9ada-4be4-971c-52b84848dcb0","type":"Circle"},"selection_glyph":null},"id":"fc57e85d-8911-4a51-9a03-0e4a6aeba7c9","type":"GlyphRenderer"},{"attributes":{},"id":"2b97e772-f7d0-43e7-a48b-6cac9df4c93d","type":"BasicTicker"},{"attributes":{"below":[{"id":"a5c25b06-8d07-44c6-84cd-65c51aeb90ef","type":"LinearAxis"}],"left":[{"id":"9264f364-929a-43fc-9534-6539be5437f5","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a5c25b06-8d07-44c6-84cd-65c51aeb90ef","type":"LinearAxis"},{"id":"f2d8e3d8-b9df-4c87-b379-134c0c8cb412","type":"Grid"},{"id":"9264f364-929a-43fc-9534-6539be5437f5","type":"LinearAxis"},{"id":"c136fb57-8839-4def-a3e4-14038220d3d3","type":"Grid"},{"id":"fc57e85d-8911-4a51-9a03-0e4a6aeba7c9","type":"GlyphRenderer"}],"title":{"id":"d6a572c6-52ab-4fd2-8ebd-788d972d448f","type":"Title"},"tool_events":{"id":"9f75954b-97f9-40e9-99bb-27fbea8706e0","type":"ToolEvents"},"toolbar":{"id":"62004870-b864-4d27-802e-2ac823386ac9","type":"Toolbar"},"x_range":{"id":"e5319a71-8de3-40d4-8183-01f25b666dce","type":"DataRange1d"},"y_range":{"id":"6eb29ac4-3242-4a4c-a463-a887e06056df","type":"DataRange1d"}},"id":"6ff6d3b4-23e5-4d8e-88a5-23431ade9b4a","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"46a265a7-e7f4-4bd1-942b-ab6e2385a3ec","type":"BasicTickFormatter"},"plot":{"id":"6ff6d3b4-23e5-4d8e-88a5-23431ade9b4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b97e772-f7d0-43e7-a48b-6cac9df4c93d","type":"BasicTicker"}},"id":"a5c25b06-8d07-44c6-84cd-65c51aeb90ef","type":"LinearAxis"},{"attributes":{},"id":"9f75954b-97f9-40e9-99bb-27fbea8706e0","type":"ToolEvents"},{"attributes":{"formatter":{"id":"3eb43c9b-765e-4d82-bd38-87d7965b0d55","type":"BasicTickFormatter"},"plot":{"id":"6ff6d3b4-23e5-4d8e-88a5-23431ade9b4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"860caafd-4755-438f-bd31-0f1baf1dc736","type":"BasicTicker"}},"id":"9264f364-929a-43fc-9534-6539be5437f5","type":"LinearAxis"},{"attributes":{},"id":"3eb43c9b-765e-4d82-bd38-87d7965b0d55","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0f31aa91-b0b3-4194-bc7c-4c8ad338bebd","type":"HoverTool"}]},"id":"62004870-b864-4d27-802e-2ac823386ac9","type":"Toolbar"},{"attributes":{"callback":null,"plot":{"id":"6ff6d3b4-23e5-4d8e-88a5-23431ade9b4a","subtype":"Figure","type":"Plot"},"tooltips":"\n        <div>\n            <div>\n                <img\n                    src=\"@imgs\" height=\"42\" alt=\"@imgs\" width=\"42\"\n                    style=\"float: left; margin: 0px 15px 15px 0px;\"\n                    border=\"2\"\n                ></img>\n            </div>\n            <div>\n                <span style=\"font-size: 17px; font-weight: bold;\">@desc</span>\n                <span style=\"font-size: 15px; color: #966;\">[$index]</span>\n            </div>\n            <div>\n                <span style=\"font-size: 15px;\">Location</span>\n                <span style=\"font-size: 10px; color: #696;\">($x, $y)</span>\n            </div>\n        </div>\n        "},"id":"0f31aa91-b0b3-4194-bc7c-4c8ad338bebd","type":"HoverTool"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"d6a572c6-52ab-4fd2-8ebd-788d972d448f","type":"Title"},{"attributes":{"callback":null,"column_names":["imgs","y","desc","x"],"data":{"desc":["A","b","C","d","E"],"imgs":["http://bokeh.pydata.org/static/snake.jpg","http://bokeh.pydata.org/static/snake2.png","http://bokeh.pydata.org/static/snake3D.png","http://bokeh.pydata.org/static/snake4_TheRevenge.png","http://bokeh.pydata.org/static/snakebite.jpg"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"5d6bd4a5-54c3-4f61-ad21-80fc8c9f8ffa","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"626d1c3c-d681-43cd-a85b-8145c9810cc6","type":"Circle"},{"attributes":{"plot":{"id":"6ff6d3b4-23e5-4d8e-88a5-23431ade9b4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b97e772-f7d0-43e7-a48b-6cac9df4c93d","type":"BasicTicker"}},"id":"f2d8e3d8-b9df-4c87-b379-134c0c8cb412","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"d58992f0-9ada-4be4-971c-52b84848dcb0","type":"Circle"},{"attributes":{},"id":"46a265a7-e7f4-4bd1-942b-ab6e2385a3ec","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"6ff6d3b4-23e5-4d8e-88a5-23431ade9b4a","subtype":"Figure","type":"Plot"},"ticker":{"id":"860caafd-4755-438f-bd31-0f1baf1dc736","type":"BasicTicker"}},"id":"c136fb57-8839-4def-a3e4-14038220d3d3","type":"Grid"},{"attributes":{},"id":"860caafd-4755-438f-bd31-0f1baf1dc736","type":"BasicTicker"}],"root_ids":["6ff6d3b4-23e5-4d8e-88a5-23431ade9b4a"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"a0a42faf-a90e-499f-9ea0-7c15609a158a","elementid":"15f463ff-e74f-4bd1-93e1-d87c4081c349","modelid":"6ff6d3b4-23e5-4d8e-88a5-23431ade9b4a"}];
              
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