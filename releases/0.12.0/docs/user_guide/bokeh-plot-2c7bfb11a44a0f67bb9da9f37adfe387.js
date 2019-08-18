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
      };var element = document.getElementById("cfe5c0ce-429b-4c68-85fe-6fcf06c4904e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cfe5c0ce-429b-4c68-85fe-6fcf06c4904e' but no matching script tag was found. ")
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
              var docs_json = {"de0ff795-b51b-4d45-8bcf-aabf3f877ac5":{"roots":{"references":[{"attributes":{"plot":{"id":"500dae32-a51a-444d-aaee-8bb72560eb03","subtype":"Figure","type":"Plot"},"ticker":{"id":"f96fa604-11cf-4adf-a466-bbb2292c46b6","type":"BasicTicker"}},"id":"b712adfb-97e4-4dcc-8f0b-93d18bb48307","type":"Grid"},{"attributes":{"formatter":{"id":"42b14864-7868-4d52-9282-ab5ca5ed87b1","type":"PrintfTickFormatter"},"plot":{"id":"500dae32-a51a-444d-aaee-8bb72560eb03","subtype":"Figure","type":"Plot"},"ticker":{"id":"f96fa604-11cf-4adf-a466-bbb2292c46b6","type":"BasicTicker"}},"id":"76a6d4e3-00fd-436c-b6da-e4c116b9de84","type":"LinearAxis"},{"attributes":{},"id":"314aa1d7-cc59-48b8-853c-d82c52b510b6","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"29e26398-5c83-4cdf-b5bb-8428947f0264","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":null},"id":"6880aaed-a315-4e34-b45b-117e269aa735","type":"Title"},{"attributes":{},"id":"cf6e0c99-c900-44fc-b22e-79877ba8df1b","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"fda66ecf-ea46-414c-8572-8e981603a815","type":"Circle"},{"attributes":{"below":[{"id":"76a6d4e3-00fd-436c-b6da-e4c116b9de84","type":"LinearAxis"}],"left":[{"id":"475bd348-7927-47b5-be14-c061d222cf3d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"76a6d4e3-00fd-436c-b6da-e4c116b9de84","type":"LinearAxis"},{"id":"b712adfb-97e4-4dcc-8f0b-93d18bb48307","type":"Grid"},{"id":"475bd348-7927-47b5-be14-c061d222cf3d","type":"LinearAxis"},{"id":"4e9aa1a6-8edc-4266-a64c-4ea7a6890e74","type":"Grid"},{"id":"1d15478c-e78c-4826-bad7-422c4f383d53","type":"BoxAnnotation"},{"id":"2d16d1b8-8269-422b-b512-440319e4c950","type":"GlyphRenderer"}],"title":{"id":"6880aaed-a315-4e34-b45b-117e269aa735","type":"Title"},"tool_events":{"id":"314aa1d7-cc59-48b8-853c-d82c52b510b6","type":"ToolEvents"},"toolbar":{"id":"d7e73c5a-7fe1-4b6a-95cc-7da09d1a4177","type":"Toolbar"},"x_range":{"id":"f6eb6505-095e-4e53-a562-516c8e2692e5","type":"DataRange1d"},"y_range":{"id":"ac2fdc67-8ba4-43ae-873b-e9a7fb2deaa7","type":"DataRange1d"}},"id":"500dae32-a51a-444d-aaee-8bb72560eb03","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"500dae32-a51a-444d-aaee-8bb72560eb03","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf6e0c99-c900-44fc-b22e-79877ba8df1b","type":"BasicTicker"}},"id":"4e9aa1a6-8edc-4266-a64c-4ea7a6890e74","type":"Grid"},{"attributes":{"formatter":{"id":"034d9f96-662f-4a22-a031-e8a3e5af4f77","type":"PrintfTickFormatter"},"plot":{"id":"500dae32-a51a-444d-aaee-8bb72560eb03","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf6e0c99-c900-44fc-b22e-79877ba8df1b","type":"BasicTicker"}},"id":"475bd348-7927-47b5-be14-c061d222cf3d","type":"LinearAxis"},{"attributes":{"plot":{"id":"500dae32-a51a-444d-aaee-8bb72560eb03","subtype":"Figure","type":"Plot"}},"id":"642b7a1c-9997-4ba2-8786-60f15548bdaf","type":"PanTool"},{"attributes":{"callback":null},"id":"ac2fdc67-8ba4-43ae-873b-e9a7fb2deaa7","type":"DataRange1d"},{"attributes":{"data_source":{"id":"29e26398-5c83-4cdf-b5bb-8428947f0264","type":"ColumnDataSource"},"glyph":{"id":"fda66ecf-ea46-414c-8572-8e981603a815","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"30b81b4d-5f26-4cde-ac18-3f1b340eb94e","type":"Circle"},"selection_glyph":null},"id":"2d16d1b8-8269-422b-b512-440319e4c950","type":"GlyphRenderer"},{"attributes":{"format":"%4.1e"},"id":"42b14864-7868-4d52-9282-ab5ca5ed87b1","type":"PrintfTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"642b7a1c-9997-4ba2-8786-60f15548bdaf","type":"PanTool"},{"id":"b7c6d58c-ae48-462a-821b-156446cabeec","type":"WheelZoomTool"},{"id":"0be8576d-f10a-4886-9c02-4a86fd9df051","type":"BoxZoomTool"},{"id":"a7ab619f-285b-4c1c-a28d-e8dd9cd6e89c","type":"SaveTool"},{"id":"d7cc8547-bf00-4fb6-a840-8ba3169dfafb","type":"ResetTool"},{"id":"233e9aa6-f325-491b-83a7-ecd26c7740cb","type":"HelpTool"}]},"id":"d7e73c5a-7fe1-4b6a-95cc-7da09d1a4177","type":"Toolbar"},{"attributes":{},"id":"f96fa604-11cf-4adf-a466-bbb2292c46b6","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1d15478c-e78c-4826-bad7-422c4f383d53","type":"BoxAnnotation"},{"attributes":{"format":"%5.3f mu"},"id":"034d9f96-662f-4a22-a031-e8a3e5af4f77","type":"PrintfTickFormatter"},{"attributes":{"plot":{"id":"500dae32-a51a-444d-aaee-8bb72560eb03","subtype":"Figure","type":"Plot"}},"id":"a7ab619f-285b-4c1c-a28d-e8dd9cd6e89c","type":"SaveTool"},{"attributes":{"plot":{"id":"500dae32-a51a-444d-aaee-8bb72560eb03","subtype":"Figure","type":"Plot"}},"id":"b7c6d58c-ae48-462a-821b-156446cabeec","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1d15478c-e78c-4826-bad7-422c4f383d53","type":"BoxAnnotation"},"plot":{"id":"500dae32-a51a-444d-aaee-8bb72560eb03","subtype":"Figure","type":"Plot"}},"id":"0be8576d-f10a-4886-9c02-4a86fd9df051","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"30b81b4d-5f26-4cde-ac18-3f1b340eb94e","type":"Circle"},{"attributes":{"plot":{"id":"500dae32-a51a-444d-aaee-8bb72560eb03","subtype":"Figure","type":"Plot"}},"id":"d7cc8547-bf00-4fb6-a840-8ba3169dfafb","type":"ResetTool"},{"attributes":{"plot":{"id":"500dae32-a51a-444d-aaee-8bb72560eb03","subtype":"Figure","type":"Plot"}},"id":"233e9aa6-f325-491b-83a7-ecd26c7740cb","type":"HelpTool"},{"attributes":{"callback":null},"id":"f6eb6505-095e-4e53-a562-516c8e2692e5","type":"DataRange1d"}],"root_ids":["500dae32-a51a-444d-aaee-8bb72560eb03"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"de0ff795-b51b-4d45-8bcf-aabf3f877ac5","elementid":"cfe5c0ce-429b-4c68-85fe-6fcf06c4904e","modelid":"500dae32-a51a-444d-aaee-8bb72560eb03"}];
              
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