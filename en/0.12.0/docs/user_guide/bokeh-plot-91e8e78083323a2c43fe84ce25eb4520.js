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
      };var element = document.getElementById("08f52a33-f430-4e3c-8eb8-0f66cc95254a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '08f52a33-f430-4e3c-8eb8-0f66cc95254a' but no matching script tag was found. ")
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
              var docs_json = {"f1aed80d-9605-4fc5-89f4-cef130fa1521":{"roots":{"references":[{"attributes":{},"id":"8e13aa1b-472a-4d4d-baf4-cd1e5999cd8b","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"8e13aa1b-472a-4d4d-baf4-cd1e5999cd8b","type":"BasicTickFormatter"},"plot":{"id":"96341244-ee07-4490-b22c-46f0895c0cf5","subtype":"Figure","type":"Plot"},"ticker":{"id":"c1593be7-a09b-48f7-a0da-856e2ebadc44","type":"BasicTicker"}},"id":"3b469ae3-bcc2-4391-b5cc-a0380921d2c7","type":"LinearAxis"},{"attributes":{"plot":{"id":"96341244-ee07-4490-b22c-46f0895c0cf5","subtype":"Figure","type":"Plot"}},"id":"b0b07a1c-1581-4742-9511-cf57d96792d3","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":20},"id":"42ea6a12-8b6b-4cd3-80c1-e719fab39719","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f88103f8-d83b-4c65-8957-0eaa6605c60a","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"96341244-ee07-4490-b22c-46f0895c0cf5","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e3ccb47-1035-45ee-9552-8549b8ff4d5c","type":"BasicTicker"}},"id":"46981bc3-fe03-4fc8-9c8d-d1080d36a9b8","type":"Grid"},{"attributes":{"formatter":{"id":"7347d7dd-fca7-4583-bf33-ab8d38669d57","type":"BasicTickFormatter"},"plot":{"id":"96341244-ee07-4490-b22c-46f0895c0cf5","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e3ccb47-1035-45ee-9552-8549b8ff4d5c","type":"BasicTicker"}},"id":"9eef7b64-a805-4fd6-b424-e1efa6116491","type":"LinearAxis"},{"attributes":{"below":[{"id":"3b469ae3-bcc2-4391-b5cc-a0380921d2c7","type":"LinearAxis"}],"left":[{"id":"9eef7b64-a805-4fd6-b424-e1efa6116491","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3b469ae3-bcc2-4391-b5cc-a0380921d2c7","type":"LinearAxis"},{"id":"46866c68-69dc-4126-a5e3-ad511c7da4dc","type":"Grid"},{"id":"9eef7b64-a805-4fd6-b424-e1efa6116491","type":"LinearAxis"},{"id":"46981bc3-fe03-4fc8-9c8d-d1080d36a9b8","type":"Grid"},{"id":"f88103f8-d83b-4c65-8957-0eaa6605c60a","type":"BoxAnnotation"},{"id":"e5ab5f2c-fa89-4561-9199-20d51e983b5b","type":"GlyphRenderer"}],"title":{"id":"953e142c-5163-49a6-a5b4-df4a793fe5d3","type":"Title"},"tool_events":{"id":"7205fe5b-810e-41d8-920d-b13db3590b0a","type":"ToolEvents"},"toolbar":{"id":"11b5045f-c9a2-45e7-953f-d6db90693b1e","type":"Toolbar"},"x_range":{"id":"42ea6a12-8b6b-4cd3-80c1-e719fab39719","type":"Range1d"},"y_range":{"id":"1596444f-6929-4554-953d-8568c192d982","type":"Range1d"}},"id":"96341244-ee07-4490-b22c-46f0895c0cf5","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"96341244-ee07-4490-b22c-46f0895c0cf5","subtype":"Figure","type":"Plot"},"ticker":{"id":"c1593be7-a09b-48f7-a0da-856e2ebadc44","type":"BasicTicker"}},"id":"46866c68-69dc-4126-a5e3-ad511c7da4dc","type":"Grid"},{"attributes":{"plot":{"id":"96341244-ee07-4490-b22c-46f0895c0cf5","subtype":"Figure","type":"Plot"}},"id":"56a58dd4-d5ec-4441-96f5-e2fe58d9133c","type":"HelpTool"},{"attributes":{"data_source":{"id":"036f6f71-d000-4869-8a52-4b9f612679da","type":"ColumnDataSource"},"glyph":{"id":"9a3a1a04-3aec-401f-89ec-4c2f0474b185","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"ce21bcf3-560b-477c-8d86-dce3aadc2935","type":"Circle"},"selection_glyph":null},"id":"e5ab5f2c-fa89-4561-9199-20d51e983b5b","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":null},"id":"953e142c-5163-49a6-a5b4-df4a793fe5d3","type":"Title"},{"attributes":{"callback":null,"end":15},"id":"1596444f-6929-4554-953d-8568c192d982","type":"Range1d"},{"attributes":{"overlay":{"id":"f88103f8-d83b-4c65-8957-0eaa6605c60a","type":"BoxAnnotation"},"plot":{"id":"96341244-ee07-4490-b22c-46f0895c0cf5","subtype":"Figure","type":"Plot"}},"id":"b8233bc7-6cc7-4d1d-b39f-7eeb35ad2088","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9a3a1a04-3aec-401f-89ec-4c2f0474b185","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4d20c5e2-0e81-4008-b127-8d2b77845253","type":"PanTool"},{"id":"b0b07a1c-1581-4742-9511-cf57d96792d3","type":"WheelZoomTool"},{"id":"b8233bc7-6cc7-4d1d-b39f-7eeb35ad2088","type":"BoxZoomTool"},{"id":"65d0eee3-790b-4722-b347-16e8a5a828b0","type":"SaveTool"},{"id":"b00518ad-90d4-4de8-bb7c-aff6787fa011","type":"ResetTool"},{"id":"56a58dd4-d5ec-4441-96f5-e2fe58d9133c","type":"HelpTool"}]},"id":"11b5045f-c9a2-45e7-953f-d6db90693b1e","type":"Toolbar"},{"attributes":{},"id":"4e3ccb47-1035-45ee-9552-8549b8ff4d5c","type":"BasicTicker"},{"attributes":{},"id":"7347d7dd-fca7-4583-bf33-ab8d38669d57","type":"BasicTickFormatter"},{"attributes":{},"id":"c1593be7-a09b-48f7-a0da-856e2ebadc44","type":"BasicTicker"},{"attributes":{"plot":{"id":"96341244-ee07-4490-b22c-46f0895c0cf5","subtype":"Figure","type":"Plot"}},"id":"65d0eee3-790b-4722-b347-16e8a5a828b0","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ce21bcf3-560b-477c-8d86-dce3aadc2935","type":"Circle"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"036f6f71-d000-4869-8a52-4b9f612679da","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"96341244-ee07-4490-b22c-46f0895c0cf5","subtype":"Figure","type":"Plot"}},"id":"4d20c5e2-0e81-4008-b127-8d2b77845253","type":"PanTool"},{"attributes":{"plot":{"id":"96341244-ee07-4490-b22c-46f0895c0cf5","subtype":"Figure","type":"Plot"}},"id":"b00518ad-90d4-4de8-bb7c-aff6787fa011","type":"ResetTool"},{"attributes":{},"id":"7205fe5b-810e-41d8-920d-b13db3590b0a","type":"ToolEvents"}],"root_ids":["96341244-ee07-4490-b22c-46f0895c0cf5"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"f1aed80d-9605-4fc5-89f4-cef130fa1521","elementid":"08f52a33-f430-4e3c-8eb8-0f66cc95254a","modelid":"96341244-ee07-4490-b22c-46f0895c0cf5"}];
              
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