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
      };var element = document.getElementById("4435888d-a633-48a0-a8bc-2993a7476243");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4435888d-a633-48a0-a8bc-2993a7476243' but no matching script tag was found. ")
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
              var docs_json = {"13167f95-e46f-4503-bed5-c0baff178c5a":{"roots":{"references":[{"attributes":{"plot":{"id":"2fe54c04-5b5d-4407-bdb9-e317148736c4","subtype":"Figure","type":"Plot"}},"id":"20404dfc-4609-461e-bf63-97e4fa4fb705","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"ca8a29fa-9b27-41d2-a5d2-e8a3a2fcf65a","type":"BoxAnnotation"},"plot":{"id":"2fe54c04-5b5d-4407-bdb9-e317148736c4","subtype":"Figure","type":"Plot"}},"id":"46ea375b-a0a7-457e-a6e9-e648950122eb","type":"BoxZoomTool"},{"attributes":{},"id":"3aaa0bce-96d2-455e-bbef-8501e97b68c2","type":"BasicTicker"},{"attributes":{"plot":{"id":"2fe54c04-5b5d-4407-bdb9-e317148736c4","subtype":"Figure","type":"Plot"}},"id":"9d0e1c84-30b2-43ab-83c9-16b411d38135","type":"SaveTool"},{"attributes":{"formatter":{"id":"26ec78a5-9009-4775-b9d1-2d5bc307dee3","type":"BasicTickFormatter"},"plot":{"id":"2fe54c04-5b5d-4407-bdb9-e317148736c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"3aaa0bce-96d2-455e-bbef-8501e97b68c2","type":"BasicTicker"}},"id":"893311a8-d260-47af-ac4a-7821d04f5d25","type":"LinearAxis"},{"attributes":{"below":[{"id":"97b016cb-49fe-4eb9-a239-cc1cf9072491","type":"LinearAxis"}],"left":[{"id":"893311a8-d260-47af-ac4a-7821d04f5d25","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"97b016cb-49fe-4eb9-a239-cc1cf9072491","type":"LinearAxis"},{"id":"cc2c94c8-0b8f-4951-92bf-dd22b15f4861","type":"Grid"},{"id":"893311a8-d260-47af-ac4a-7821d04f5d25","type":"LinearAxis"},{"id":"ce4cedf2-9991-4881-a804-54e7124d6198","type":"Grid"},{"id":"ca8a29fa-9b27-41d2-a5d2-e8a3a2fcf65a","type":"BoxAnnotation"},{"id":"876fcd76-734b-46f7-9ded-a7a9812fe1d1","type":"GlyphRenderer"}],"title":{"id":"d85dcb7d-2983-4349-bf91-27b70b985002","type":"Title"},"tool_events":{"id":"e6407d24-0a0e-43df-a88a-146d83a961b0","type":"ToolEvents"},"toolbar":{"id":"b5375068-b41d-4fdd-8604-960ea8308fdb","type":"Toolbar"},"x_range":{"id":"c17c4882-4e5d-43cd-b391-352cd7f53f27","type":"DataRange1d"},"y_range":{"id":"24b5af1d-75c4-4fa8-b67b-ff87c9cddd42","type":"DataRange1d"}},"id":"2fe54c04-5b5d-4407-bdb9-e317148736c4","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"56d8e5b6-df75-4b84-b901-83160cad8b73","type":"BasicTickFormatter"},"plot":{"id":"2fe54c04-5b5d-4407-bdb9-e317148736c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"740c1c41-0795-4ae2-90f8-f8bf9da32175","type":"BasicTicker"}},"id":"97b016cb-49fe-4eb9-a239-cc1cf9072491","type":"LinearAxis"},{"attributes":{"plot":{"id":"2fe54c04-5b5d-4407-bdb9-e317148736c4","subtype":"Figure","type":"Plot"}},"id":"48c289b8-29d4-4c1d-ae3b-e3c7782a4347","type":"ResetTool"},{"attributes":{},"id":"56d8e5b6-df75-4b84-b901-83160cad8b73","type":"BasicTickFormatter"},{"attributes":{},"id":"e6407d24-0a0e-43df-a88a-146d83a961b0","type":"ToolEvents"},{"attributes":{"callback":null},"id":"24b5af1d-75c4-4fa8-b67b-ff87c9cddd42","type":"DataRange1d"},{"attributes":{"data_source":{"id":"27e36b5e-abf7-4182-b525-c9aa319b987a","type":"ColumnDataSource"},"glyph":{"id":"1a57ea28-abdd-49ff-9f6b-027d3d13f5af","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"897609c4-67a3-4d71-93a2-e778a974c1b3","type":"Circle"},"selection_glyph":null},"id":"876fcd76-734b-46f7-9ded-a7a9812fe1d1","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ca8a29fa-9b27-41d2-a5d2-e8a3a2fcf65a","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"2fe54c04-5b5d-4407-bdb9-e317148736c4","subtype":"Figure","type":"Plot"}},"id":"17ea7087-c623-4588-97ab-a8bbc2a01a34","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"897609c4-67a3-4d71-93a2-e778a974c1b3","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1a57ea28-abdd-49ff-9f6b-027d3d13f5af","type":"Circle"},{"attributes":{},"id":"740c1c41-0795-4ae2-90f8-f8bf9da32175","type":"BasicTicker"},{"attributes":{"plot":{"id":"2fe54c04-5b5d-4407-bdb9-e317148736c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"740c1c41-0795-4ae2-90f8-f8bf9da32175","type":"BasicTicker"}},"id":"cc2c94c8-0b8f-4951-92bf-dd22b15f4861","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"27e36b5e-abf7-4182-b525-c9aa319b987a","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8dea1992-b1e7-42cd-a67e-c8219b521223","type":"PanTool"},{"id":"20404dfc-4609-461e-bf63-97e4fa4fb705","type":"WheelZoomTool"},{"id":"46ea375b-a0a7-457e-a6e9-e648950122eb","type":"BoxZoomTool"},{"id":"9d0e1c84-30b2-43ab-83c9-16b411d38135","type":"SaveTool"},{"id":"48c289b8-29d4-4c1d-ae3b-e3c7782a4347","type":"ResetTool"},{"id":"17ea7087-c623-4588-97ab-a8bbc2a01a34","type":"HelpTool"}]},"id":"b5375068-b41d-4fdd-8604-960ea8308fdb","type":"Toolbar"},{"attributes":{},"id":"26ec78a5-9009-4775-b9d1-2d5bc307dee3","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"2fe54c04-5b5d-4407-bdb9-e317148736c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"3aaa0bce-96d2-455e-bbef-8501e97b68c2","type":"BasicTicker"}},"id":"ce4cedf2-9991-4881-a804-54e7124d6198","type":"Grid"},{"attributes":{"plot":null,"text":"Basic Title"},"id":"d85dcb7d-2983-4349-bf91-27b70b985002","type":"Title"},{"attributes":{"callback":null},"id":"c17c4882-4e5d-43cd-b391-352cd7f53f27","type":"DataRange1d"},{"attributes":{"plot":{"id":"2fe54c04-5b5d-4407-bdb9-e317148736c4","subtype":"Figure","type":"Plot"}},"id":"8dea1992-b1e7-42cd-a67e-c8219b521223","type":"PanTool"}],"root_ids":["2fe54c04-5b5d-4407-bdb9-e317148736c4"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"13167f95-e46f-4503-bed5-c0baff178c5a","elementid":"4435888d-a633-48a0-a8bc-2993a7476243","modelid":"2fe54c04-5b5d-4407-bdb9-e317148736c4"}];
              
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