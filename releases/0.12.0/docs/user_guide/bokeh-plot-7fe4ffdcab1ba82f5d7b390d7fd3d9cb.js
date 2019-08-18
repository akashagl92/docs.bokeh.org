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
      };var element = document.getElementById("bf77e8c5-5079-40b6-ac7a-4e38023041b5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bf77e8c5-5079-40b6-ac7a-4e38023041b5' but no matching script tag was found. ")
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
              var docs_json = {"d0a5a0cb-f426-44cb-b4f3-54d75871ce67":{"roots":{"references":[{"attributes":{"formatter":{"id":"6c226eee-f41a-4a4f-8671-d1add465f83b","type":"BasicTickFormatter"},"plot":{"id":"81ad8cba-2266-40c8-a1ee-5aeccf722ed5","subtype":"Figure","type":"Plot"},"ticker":{"id":"21f18d3c-a068-4ce1-96d8-256263d4aaa1","type":"BasicTicker"}},"id":"f37e8c20-441e-45be-b962-024b78b21974","type":"LinearAxis"},{"attributes":{"plot":{"id":"81ad8cba-2266-40c8-a1ee-5aeccf722ed5","subtype":"Figure","type":"Plot"}},"id":"e10d106b-f5ed-4cd1-8336-1fec935e76f5","type":"WheelZoomTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"abb05eef-0750-4c17-b172-94547b45b5ff","type":"Line"},{"attributes":{},"id":"6c226eee-f41a-4a4f-8671-d1add465f83b","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"da9c02e0-7f55-44e9-b9d7-c3ea2a535dcd","type":"ColumnDataSource"},"glyph":{"id":"abb05eef-0750-4c17-b172-94547b45b5ff","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"bf17f363-72ac-4db1-9f49-13943fb9d5dc","type":"Line"},"selection_glyph":null},"id":"f8dfd482-1fe0-4580-8560-2d3e3712bdb3","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"b545d693-17af-42e2-ac9d-e8771de3688d","type":"BoxAnnotation"},"plot":{"id":"81ad8cba-2266-40c8-a1ee-5aeccf722ed5","subtype":"Figure","type":"Plot"}},"id":"08104ba2-a1a6-4bea-95cf-fe85c83c70c4","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6e34070e-0dc6-4ed3-9f3f-544eb43f8add","type":"PanTool"},{"id":"e10d106b-f5ed-4cd1-8336-1fec935e76f5","type":"WheelZoomTool"},{"id":"08104ba2-a1a6-4bea-95cf-fe85c83c70c4","type":"BoxZoomTool"},{"id":"a8ced54d-ced9-4b93-8409-240096d04c37","type":"SaveTool"},{"id":"7a7f49eb-b276-4315-91a2-de9b3384fbd2","type":"ResetTool"},{"id":"b0b1e037-a46e-4b03-8367-0b4fbf41a74c","type":"HelpTool"}]},"id":"7370e8c3-856c-40b0-8fce-1f705b2d0947","type":"Toolbar"},{"attributes":{},"id":"21f18d3c-a068-4ce1-96d8-256263d4aaa1","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"81ad8cba-2266-40c8-a1ee-5aeccf722ed5","subtype":"Figure","type":"Plot"},"ticker":{"id":"63062491-5a8e-4b17-9f69-bd6123e2c313","type":"BasicTicker"}},"id":"5437d35d-96ac-4b5c-ba8e-fde59e32539e","type":"Grid"},{"attributes":{"callback":null},"id":"002e5cdc-052d-4ebe-a488-4d3850b9e1ac","type":"DataRange1d"},{"attributes":{"plot":{"id":"81ad8cba-2266-40c8-a1ee-5aeccf722ed5","subtype":"Figure","type":"Plot"},"ticker":{"id":"21f18d3c-a068-4ce1-96d8-256263d4aaa1","type":"BasicTicker"}},"id":"bb0fe4a9-0192-4f6e-91b9-d069bf8377e4","type":"Grid"},{"attributes":{"plot":{"id":"81ad8cba-2266-40c8-a1ee-5aeccf722ed5","subtype":"Figure","type":"Plot"}},"id":"b0b1e037-a46e-4b03-8367-0b4fbf41a74c","type":"HelpTool"},{"attributes":{"plot":{"id":"81ad8cba-2266-40c8-a1ee-5aeccf722ed5","subtype":"Figure","type":"Plot"}},"id":"6e34070e-0dc6-4ed3-9f3f-544eb43f8add","type":"PanTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"bf17f363-72ac-4db1-9f49-13943fb9d5dc","type":"Line"},{"attributes":{},"id":"8fc496ae-a87c-4015-b22b-5f5031b50062","type":"ToolEvents"},{"attributes":{"plot":{"id":"81ad8cba-2266-40c8-a1ee-5aeccf722ed5","subtype":"Figure","type":"Plot"}},"id":"7a7f49eb-b276-4315-91a2-de9b3384fbd2","type":"ResetTool"},{"attributes":{"plot":{"id":"81ad8cba-2266-40c8-a1ee-5aeccf722ed5","subtype":"Figure","type":"Plot"}},"id":"a8ced54d-ced9-4b93-8409-240096d04c37","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b545d693-17af-42e2-ac9d-e8771de3688d","type":"BoxAnnotation"},{"attributes":{},"id":"ea878b01-22fd-4f99-9980-93b62da681dd","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"d12d7ba6-9aeb-4dc4-8619-776d2b031125","type":"DataRange1d"},{"attributes":{"plot":null,"text":null},"id":"88db8be0-23f0-46b3-9805-a71904c1a8c8","type":"Title"},{"attributes":{},"id":"63062491-5a8e-4b17-9f69-bd6123e2c313","type":"BasicTicker"},{"attributes":{"formatter":{"id":"ea878b01-22fd-4f99-9980-93b62da681dd","type":"BasicTickFormatter"},"plot":{"id":"81ad8cba-2266-40c8-a1ee-5aeccf722ed5","subtype":"Figure","type":"Plot"},"ticker":{"id":"63062491-5a8e-4b17-9f69-bd6123e2c313","type":"BasicTicker"}},"id":"0d1ff158-b15c-404e-9a5f-a3da666613b8","type":"LinearAxis"},{"attributes":{"below":[{"id":"f37e8c20-441e-45be-b962-024b78b21974","type":"LinearAxis"}],"left":[{"id":"0d1ff158-b15c-404e-9a5f-a3da666613b8","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f37e8c20-441e-45be-b962-024b78b21974","type":"LinearAxis"},{"id":"bb0fe4a9-0192-4f6e-91b9-d069bf8377e4","type":"Grid"},{"id":"0d1ff158-b15c-404e-9a5f-a3da666613b8","type":"LinearAxis"},{"id":"5437d35d-96ac-4b5c-ba8e-fde59e32539e","type":"Grid"},{"id":"b545d693-17af-42e2-ac9d-e8771de3688d","type":"BoxAnnotation"},{"id":"f8dfd482-1fe0-4580-8560-2d3e3712bdb3","type":"GlyphRenderer"}],"title":{"id":"88db8be0-23f0-46b3-9805-a71904c1a8c8","type":"Title"},"tool_events":{"id":"8fc496ae-a87c-4015-b22b-5f5031b50062","type":"ToolEvents"},"toolbar":{"id":"7370e8c3-856c-40b0-8fce-1f705b2d0947","type":"Toolbar"},"x_range":{"id":"002e5cdc-052d-4ebe-a488-4d3850b9e1ac","type":"DataRange1d"},"y_range":{"id":"d12d7ba6-9aeb-4dc4-8619-776d2b031125","type":"DataRange1d"}},"id":"81ad8cba-2266-40c8-a1ee-5aeccf722ed5","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1.0,2.0,3.0,"NaN",4.0,5.0],"y":[6,7,2,4,4,5]}},"id":"da9c02e0-7f55-44e9-b9d7-c3ea2a535dcd","type":"ColumnDataSource"}],"root_ids":["81ad8cba-2266-40c8-a1ee-5aeccf722ed5"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"d0a5a0cb-f426-44cb-b4f3-54d75871ce67","elementid":"bf77e8c5-5079-40b6-ac7a-4e38023041b5","modelid":"81ad8cba-2266-40c8-a1ee-5aeccf722ed5"}];
              
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