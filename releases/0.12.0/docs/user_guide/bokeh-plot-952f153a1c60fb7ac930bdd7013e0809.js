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
      };var element = document.getElementById("b51f230a-c021-4bab-90a7-1dae03aeee4d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b51f230a-c021-4bab-90a7-1dae03aeee4d' but no matching script tag was found. ")
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
              var docs_json = {"25bac5fd-1c82-427e-9c2b-0e65a223f5db":{"roots":{"references":[{"attributes":{"overlay":{"id":"7f8dee35-6e17-439f-b8fb-2eb8e06886ca","type":"BoxAnnotation"},"plot":{"id":"362d0993-32ce-4fbf-9efe-c9b249d676ca","subtype":"Figure","type":"Plot"}},"id":"571b3f94-dcb5-49a3-88a1-60b3cc840d49","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"53d49c19-7f04-4cdb-8772-56ea481691e0","type":"DataRange1d"},{"attributes":{"plot":{"id":"362d0993-32ce-4fbf-9efe-c9b249d676ca","subtype":"Figure","type":"Plot"}},"id":"f3581e83-fd66-4f52-91d1-dee1abc3e9ec","type":"HelpTool"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"e65ad157-0c7a-441b-a0de-cab7b0c4afd0","type":"Circle"},{"attributes":{"plot":{"id":"362d0993-32ce-4fbf-9efe-c9b249d676ca","subtype":"Figure","type":"Plot"}},"id":"08f2ad9e-a2bb-4681-8c35-09d8115586ef","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"2bac641f-7bb5-4198-adf6-eb0573848941","type":"Circle"},{"attributes":{"plot":{"id":"362d0993-32ce-4fbf-9efe-c9b249d676ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"6ef5d0e2-2ee9-4fca-857e-17692d30cba5","type":"BasicTicker"}},"id":"82a4975c-8532-4fd9-bc42-ea14807f06ef","type":"Grid"},{"attributes":{"plot":{"id":"362d0993-32ce-4fbf-9efe-c9b249d676ca","subtype":"Figure","type":"Plot"}},"id":"4a83bad6-edf6-42e6-b17a-835e32133b04","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"362d0993-32ce-4fbf-9efe-c9b249d676ca","subtype":"Figure","type":"Plot"}},"id":"5fc5add3-34ec-438a-bd17-5a7ef038c5e2","type":"ResetTool"},{"attributes":{},"id":"6f027894-2998-4dc3-83fe-df15656d0d35","type":"BasicTickFormatter"},{"attributes":{},"id":"6ef5d0e2-2ee9-4fca-857e-17692d30cba5","type":"BasicTicker"},{"attributes":{"formatter":{"id":"6f027894-2998-4dc3-83fe-df15656d0d35","type":"BasicTickFormatter"},"plot":{"id":"362d0993-32ce-4fbf-9efe-c9b249d676ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"6ef5d0e2-2ee9-4fca-857e-17692d30cba5","type":"BasicTicker"}},"id":"33f36c95-14ce-42f9-9cdc-5c4d51b3dd4d","type":"LinearAxis"},{"attributes":{"plot":{"id":"362d0993-32ce-4fbf-9efe-c9b249d676ca","subtype":"Figure","type":"Plot"}},"id":"d00cf291-2c24-4736-9773-ccc9914cf9cc","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7f8dee35-6e17-439f-b8fb-2eb8e06886ca","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"33f36c95-14ce-42f9-9cdc-5c4d51b3dd4d","type":"LinearAxis"}],"left":[{"id":"d191faf5-9cb5-4b24-ae21-5733015019af","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"33f36c95-14ce-42f9-9cdc-5c4d51b3dd4d","type":"LinearAxis"},{"id":"82a4975c-8532-4fd9-bc42-ea14807f06ef","type":"Grid"},{"id":"d191faf5-9cb5-4b24-ae21-5733015019af","type":"LinearAxis"},{"id":"fc2b25b4-bc71-4c54-8579-6995a82c99cc","type":"Grid"},{"id":"7f8dee35-6e17-439f-b8fb-2eb8e06886ca","type":"BoxAnnotation"},{"id":"2df783d7-9ece-474a-acb4-961a7d8a489a","type":"GlyphRenderer"},{"id":"3c025357-8853-4cdb-873a-78a6a4229fc5","type":"GlyphRenderer"}],"title":{"id":"f0f8b2d2-fc6f-4eae-a6be-42642f00ad98","type":"Title"},"tool_events":{"id":"05406a6f-8afa-435b-aa32-f3148e4ffbe1","type":"ToolEvents"},"toolbar":{"id":"c9374bf9-a64d-48e9-98ec-08f52ba7660c","type":"Toolbar"},"x_range":{"id":"2dd98a93-7951-4fcf-8cd9-849b0b360a55","type":"DataRange1d"},"y_range":{"id":"53d49c19-7f04-4cdb-8772-56ea481691e0","type":"DataRange1d"}},"id":"362d0993-32ce-4fbf-9efe-c9b249d676ca","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"7d2ffd74-0e7a-48ed-a3bb-d6e1da356c0f","type":"ColumnDataSource"},"glyph":{"id":"e65ad157-0c7a-441b-a0de-cab7b0c4afd0","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"2bac641f-7bb5-4198-adf6-eb0573848941","type":"Circle"},"selection_glyph":null},"id":"3c025357-8853-4cdb-873a-78a6a4229fc5","type":"GlyphRenderer"},{"attributes":{},"id":"05406a6f-8afa-435b-aa32-f3148e4ffbe1","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"7d2ffd74-0e7a-48ed-a3bb-d6e1da356c0f","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"bb08c13a-0ee7-4503-8d9c-5ec5157f3386","type":"Line"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"08f2ad9e-a2bb-4681-8c35-09d8115586ef","type":"PanTool"},{"id":"4a83bad6-edf6-42e6-b17a-835e32133b04","type":"WheelZoomTool"},{"id":"571b3f94-dcb5-49a3-88a1-60b3cc840d49","type":"BoxZoomTool"},{"id":"d00cf291-2c24-4736-9773-ccc9914cf9cc","type":"SaveTool"},{"id":"5fc5add3-34ec-438a-bd17-5a7ef038c5e2","type":"ResetTool"},{"id":"f3581e83-fd66-4f52-91d1-dee1abc3e9ec","type":"HelpTool"}]},"id":"c9374bf9-a64d-48e9-98ec-08f52ba7660c","type":"Toolbar"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"06e3922e-2c82-47bb-be8b-dd0f282346ef","type":"Line"},{"attributes":{"callback":null},"id":"2dd98a93-7951-4fcf-8cd9-849b0b360a55","type":"DataRange1d"},{"attributes":{},"id":"7904b7ea-6d5b-43be-9809-07c7dd650c9a","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"362d0993-32ce-4fbf-9efe-c9b249d676ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"4b8502ca-ea05-481f-97be-5bfc32c4dff5","type":"BasicTicker"}},"id":"fc2b25b4-bc71-4c54-8579-6995a82c99cc","type":"Grid"},{"attributes":{"plot":null,"text":null},"id":"f0f8b2d2-fc6f-4eae-a6be-42642f00ad98","type":"Title"},{"attributes":{"data_source":{"id":"32a5ded5-28d4-4ceb-83e1-05b79c6f7d28","type":"ColumnDataSource"},"glyph":{"id":"06e3922e-2c82-47bb-be8b-dd0f282346ef","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"bb08c13a-0ee7-4503-8d9c-5ec5157f3386","type":"Line"},"selection_glyph":null},"id":"2df783d7-9ece-474a-acb4-961a7d8a489a","type":"GlyphRenderer"},{"attributes":{},"id":"4b8502ca-ea05-481f-97be-5bfc32c4dff5","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"32a5ded5-28d4-4ceb-83e1-05b79c6f7d28","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"7904b7ea-6d5b-43be-9809-07c7dd650c9a","type":"BasicTickFormatter"},"plot":{"id":"362d0993-32ce-4fbf-9efe-c9b249d676ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"4b8502ca-ea05-481f-97be-5bfc32c4dff5","type":"BasicTicker"}},"id":"d191faf5-9cb5-4b24-ae21-5733015019af","type":"LinearAxis"}],"root_ids":["362d0993-32ce-4fbf-9efe-c9b249d676ca"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"25bac5fd-1c82-427e-9c2b-0e65a223f5db","elementid":"b51f230a-c021-4bab-90a7-1dae03aeee4d","modelid":"362d0993-32ce-4fbf-9efe-c9b249d676ca"}];
              
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