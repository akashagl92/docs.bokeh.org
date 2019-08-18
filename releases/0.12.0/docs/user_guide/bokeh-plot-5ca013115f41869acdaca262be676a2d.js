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
      };var element = document.getElementById("57b84c64-67c3-4df6-829f-f5a07d9f238b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '57b84c64-67c3-4df6-829f-f5a07d9f238b' but no matching script tag was found. ")
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
              var docs_json = {"d89c8127-cd20-4f3d-9593-d0c9c436bd53":{"roots":{"references":[{"attributes":{"data_source":{"id":"927bc0e5-5a8e-432c-97dd-498c198898df","type":"ColumnDataSource"},"glyph":{"id":"80895548-6398-4b70-8a59-7954fc0bbfbe","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"b914c6e9-3ab6-4eca-964a-bee64f77c76f","type":"Circle"},"selection_glyph":null},"id":"35dd601c-46af-45ee-9456-d0f696bbc217","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"c6b94681-d2fa-417a-a53f-cf8568bce794","type":"LinearAxis"}],"left":[{"id":"ff86c83d-e7e1-4a1a-b792-b7c51051bb76","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c6b94681-d2fa-417a-a53f-cf8568bce794","type":"LinearAxis"},{"id":"2fe44da7-4557-4822-a06b-5645267535d4","type":"Grid"},{"id":"ff86c83d-e7e1-4a1a-b792-b7c51051bb76","type":"LinearAxis"},{"id":"f7de717f-6a0f-432c-b995-a62753f8384b","type":"Grid"},{"id":"58b8313f-d9e1-4580-ad59-4338f9231313","type":"BoxAnnotation"},{"id":"35dd601c-46af-45ee-9456-d0f696bbc217","type":"GlyphRenderer"}],"title":{"id":"6ef8c034-580d-4ec9-8975-d199e334ee2d","type":"Title"},"tool_events":{"id":"a3a63c82-f498-4f66-8211-ea9d5f74df02","type":"ToolEvents"},"toolbar":{"id":"9d87f032-7511-4e54-b7fb-d65e369f43b0","type":"Toolbar"},"x_range":{"id":"05df36f2-6827-499d-b482-93f7f2f7d6be","type":"DataRange1d"},"y_range":{"id":"c49ff957-e4f0-4cc8-9833-cf41693e84ae","type":"DataRange1d"}},"id":"fcf6a74a-a236-40f1-bf5e-5118c720fe87","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"05df36f2-6827-499d-b482-93f7f2f7d6be","type":"DataRange1d"},{"attributes":{"plot":{"id":"fcf6a74a-a236-40f1-bf5e-5118c720fe87","subtype":"Figure","type":"Plot"}},"id":"c809160f-06f6-4afb-a9d1-d927e724c3f9","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"58b8313f-d9e1-4580-ad59-4338f9231313","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"fcf6a74a-a236-40f1-bf5e-5118c720fe87","subtype":"Figure","type":"Plot"}},"id":"74833547-05b1-4393-82ea-ba16b81d3661","type":"PanTool"},{"attributes":{"plot":null,"text":null},"id":"6ef8c034-580d-4ec9-8975-d199e334ee2d","type":"Title"},{"attributes":{},"id":"a3a63c82-f498-4f66-8211-ea9d5f74df02","type":"ToolEvents"},{"attributes":{},"id":"4a7073e4-01e3-4298-8eef-081aa9c5c46a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"02eb2991-504c-4b7a-af23-9f9062e9bb33","type":"BasicTickFormatter"},"plot":{"id":"fcf6a74a-a236-40f1-bf5e-5118c720fe87","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a7073e4-01e3-4298-8eef-081aa9c5c46a","type":"BasicTicker"}},"id":"ff86c83d-e7e1-4a1a-b792-b7c51051bb76","type":"LinearAxis"},{"attributes":{},"id":"d724d1c2-26df-4954-a7d3-560fa859d910","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"80895548-6398-4b70-8a59-7954fc0bbfbe","type":"Circle"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"927bc0e5-5a8e-432c-97dd-498c198898df","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"58b8313f-d9e1-4580-ad59-4338f9231313","type":"BoxAnnotation"},"plot":{"id":"fcf6a74a-a236-40f1-bf5e-5118c720fe87","subtype":"Figure","type":"Plot"}},"id":"3a81b17a-fe99-4bad-a28a-ea866f357acb","type":"BoxZoomTool"},{"attributes":{},"id":"7b3a0404-56c1-4472-8531-9dadc9dfa330","type":"BasicTicker"},{"attributes":{"bounds":[2,4],"plot":{"id":"fcf6a74a-a236-40f1-bf5e-5118c720fe87","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b3a0404-56c1-4472-8531-9dadc9dfa330","type":"BasicTicker"}},"id":"2fe44da7-4557-4822-a06b-5645267535d4","type":"Grid"},{"attributes":{"callback":null},"id":"c49ff957-e4f0-4cc8-9833-cf41693e84ae","type":"DataRange1d"},{"attributes":{"plot":{"id":"fcf6a74a-a236-40f1-bf5e-5118c720fe87","subtype":"Figure","type":"Plot"}},"id":"7f562dde-f8a0-439b-8c17-f1ad8e785be0","type":"SaveTool"},{"attributes":{},"id":"02eb2991-504c-4b7a-af23-9f9062e9bb33","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"d724d1c2-26df-4954-a7d3-560fa859d910","type":"BasicTickFormatter"},"plot":{"id":"fcf6a74a-a236-40f1-bf5e-5118c720fe87","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b3a0404-56c1-4472-8531-9dadc9dfa330","type":"BasicTicker"}},"id":"c6b94681-d2fa-417a-a53f-cf8568bce794","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"74833547-05b1-4393-82ea-ba16b81d3661","type":"PanTool"},{"id":"c809160f-06f6-4afb-a9d1-d927e724c3f9","type":"WheelZoomTool"},{"id":"3a81b17a-fe99-4bad-a28a-ea866f357acb","type":"BoxZoomTool"},{"id":"7f562dde-f8a0-439b-8c17-f1ad8e785be0","type":"SaveTool"},{"id":"ca34cbbc-c2a1-48b4-9f0d-3d7d268c3a23","type":"ResetTool"},{"id":"5f891b43-b145-4b33-b295-b369b06efedc","type":"HelpTool"}]},"id":"9d87f032-7511-4e54-b7fb-d65e369f43b0","type":"Toolbar"},{"attributes":{"plot":{"id":"fcf6a74a-a236-40f1-bf5e-5118c720fe87","subtype":"Figure","type":"Plot"}},"id":"5f891b43-b145-4b33-b295-b369b06efedc","type":"HelpTool"},{"attributes":{"plot":{"id":"fcf6a74a-a236-40f1-bf5e-5118c720fe87","subtype":"Figure","type":"Plot"}},"id":"ca34cbbc-c2a1-48b4-9f0d-3d7d268c3a23","type":"ResetTool"},{"attributes":{"bounds":[2,4],"dimension":1,"plot":{"id":"fcf6a74a-a236-40f1-bf5e-5118c720fe87","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a7073e4-01e3-4298-8eef-081aa9c5c46a","type":"BasicTicker"}},"id":"f7de717f-6a0f-432c-b995-a62753f8384b","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b914c6e9-3ab6-4eca-964a-bee64f77c76f","type":"Circle"}],"root_ids":["fcf6a74a-a236-40f1-bf5e-5118c720fe87"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"d89c8127-cd20-4f3d-9593-d0c9c436bd53","elementid":"57b84c64-67c3-4df6-829f-f5a07d9f238b","modelid":"fcf6a74a-a236-40f1-bf5e-5118c720fe87"}];
              
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