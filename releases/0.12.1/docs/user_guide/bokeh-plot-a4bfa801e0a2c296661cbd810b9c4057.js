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
      };var element = document.getElementById("2f117023-60ea-45c6-9492-c24250c98dd1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2f117023-60ea-45c6-9492-c24250c98dd1' but no matching script tag was found. ")
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
              var docs_json = {"a8fcceae-6c51-407d-b51d-dec0ec3782f8":{"roots":{"references":[{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"074a66ea-024e-425c-8283-3ec3cde4de9a","type":"Arc"},{"attributes":{"formatter":{"id":"bdb4d4a3-3e85-4e80-a366-ddbc121ac0df","type":"BasicTickFormatter"},"plot":{"id":"f6996370-065d-4d86-bff5-d15d74ce1f58","subtype":"Figure","type":"Plot"},"ticker":{"id":"cfe2baf9-164e-41ba-b1ec-36033d82c1e6","type":"BasicTicker"}},"id":"5006f112-6f5e-4bd6-9435-bcbcb2394fbe","type":"LinearAxis"},{"attributes":{"plot":{"id":"f6996370-065d-4d86-bff5-d15d74ce1f58","subtype":"Figure","type":"Plot"}},"id":"69148a36-d978-4d18-9e0d-dd7127213776","type":"PanTool"},{"attributes":{"overlay":{"id":"b81bf6e2-db8c-44e5-9a2e-0fb65162f4b7","type":"BoxAnnotation"},"plot":{"id":"f6996370-065d-4d86-bff5-d15d74ce1f58","subtype":"Figure","type":"Plot"}},"id":"3e0157a3-eeb3-441e-8fc6-72e43865b851","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"f6996370-065d-4d86-bff5-d15d74ce1f58","subtype":"Figure","type":"Plot"}},"id":"ec932261-ddd0-492f-97cd-066f2e97fbca","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"f6996370-065d-4d86-bff5-d15d74ce1f58","subtype":"Figure","type":"Plot"},"ticker":{"id":"537f17e3-fb6a-4fec-8dbc-26ad760a1ee1","type":"BasicTicker"}},"id":"2f1893f3-239e-42e3-bcfc-d34a642cafd7","type":"Grid"},{"attributes":{"data_source":{"id":"31881036-19f7-44ee-878f-2ecfdae847a2","type":"ColumnDataSource"},"glyph":{"id":"823c9d52-d9a5-4b9b-a14c-7ec3b99665b3","type":"Arc"},"hover_glyph":null,"nonselection_glyph":{"id":"074a66ea-024e-425c-8283-3ec3cde4de9a","type":"Arc"},"selection_glyph":null},"id":"cd920dd3-f0b1-43eb-967e-e36cf493aeb3","type":"GlyphRenderer"},{"attributes":{},"id":"9cd0dec7-3748-4f6c-8df0-222ffce006e3","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"9c96c5b6-55c1-41bb-8f75-d175959801ad","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b81bf6e2-db8c-44e5-9a2e-0fb65162f4b7","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"dd2b1aab-57c8-4e28-9a8a-2c4e5b2acdcd","type":"DataRange1d"},{"attributes":{"plot":{"id":"f6996370-065d-4d86-bff5-d15d74ce1f58","subtype":"Figure","type":"Plot"}},"id":"bec67728-6e6a-471e-909c-eaba9a8aa137","type":"WheelZoomTool"},{"attributes":{},"id":"bdb4d4a3-3e85-4e80-a366-ddbc121ac0df","type":"BasicTickFormatter"},{"attributes":{},"id":"537f17e3-fb6a-4fec-8dbc-26ad760a1ee1","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9cd0dec7-3748-4f6c-8df0-222ffce006e3","type":"BasicTickFormatter"},"plot":{"id":"f6996370-065d-4d86-bff5-d15d74ce1f58","subtype":"Figure","type":"Plot"},"ticker":{"id":"537f17e3-fb6a-4fec-8dbc-26ad760a1ee1","type":"BasicTicker"}},"id":"5a6cc880-bebb-4c6b-8704-f431f1d91796","type":"LinearAxis"},{"attributes":{},"id":"7872ffb7-ba94-4016-9f7e-bd5fd10b00d1","type":"ToolEvents"},{"attributes":{"callback":null},"id":"93fa0a52-a542-4962-a7d9-c9d442c5d69e","type":"DataRange1d"},{"attributes":{"below":[{"id":"5006f112-6f5e-4bd6-9435-bcbcb2394fbe","type":"LinearAxis"}],"left":[{"id":"5a6cc880-bebb-4c6b-8704-f431f1d91796","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"5006f112-6f5e-4bd6-9435-bcbcb2394fbe","type":"LinearAxis"},{"id":"998dd2c0-9fc4-478f-98a3-df552c7d2813","type":"Grid"},{"id":"5a6cc880-bebb-4c6b-8704-f431f1d91796","type":"LinearAxis"},{"id":"2f1893f3-239e-42e3-bcfc-d34a642cafd7","type":"Grid"},{"id":"b81bf6e2-db8c-44e5-9a2e-0fb65162f4b7","type":"BoxAnnotation"},{"id":"cd920dd3-f0b1-43eb-967e-e36cf493aeb3","type":"GlyphRenderer"}],"title":{"id":"9c96c5b6-55c1-41bb-8f75-d175959801ad","type":"Title"},"tool_events":{"id":"7872ffb7-ba94-4016-9f7e-bd5fd10b00d1","type":"ToolEvents"},"toolbar":{"id":"6714bc70-afef-4e8d-857d-e964b03bac49","type":"Toolbar"},"x_range":{"id":"93fa0a52-a542-4962-a7d9-c9d442c5d69e","type":"DataRange1d"},"y_range":{"id":"dd2b1aab-57c8-4e28-9a8a-2c4e5b2acdcd","type":"DataRange1d"}},"id":"f6996370-065d-4d86-bff5-d15d74ce1f58","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"f6996370-065d-4d86-bff5-d15d74ce1f58","subtype":"Figure","type":"Plot"}},"id":"3c7d0115-796d-467d-b557-697bc56b7ba3","type":"HelpTool"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_color":{"value":"navy"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"823c9d52-d9a5-4b9b-a14c-7ec3b99665b3","type":"Arc"},{"attributes":{"plot":{"id":"f6996370-065d-4d86-bff5-d15d74ce1f58","subtype":"Figure","type":"Plot"},"ticker":{"id":"cfe2baf9-164e-41ba-b1ec-36033d82c1e6","type":"BasicTicker"}},"id":"998dd2c0-9fc4-478f-98a3-df552c7d2813","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"69148a36-d978-4d18-9e0d-dd7127213776","type":"PanTool"},{"id":"bec67728-6e6a-471e-909c-eaba9a8aa137","type":"WheelZoomTool"},{"id":"3e0157a3-eeb3-441e-8fc6-72e43865b851","type":"BoxZoomTool"},{"id":"ec932261-ddd0-492f-97cd-066f2e97fbca","type":"SaveTool"},{"id":"0f2bb3aa-b903-4570-9a9f-d94bcefdafc1","type":"ResetTool"},{"id":"3c7d0115-796d-467d-b557-697bc56b7ba3","type":"HelpTool"}]},"id":"6714bc70-afef-4e8d-857d-e964b03bac49","type":"Toolbar"},{"attributes":{"plot":{"id":"f6996370-065d-4d86-bff5-d15d74ce1f58","subtype":"Figure","type":"Plot"}},"id":"0f2bb3aa-b903-4570-9a9f-d94bcefdafc1","type":"ResetTool"},{"attributes":{},"id":"cfe2baf9-164e-41ba-b1ec-36033d82c1e6","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"31881036-19f7-44ee-878f-2ecfdae847a2","type":"ColumnDataSource"}],"root_ids":["f6996370-065d-4d86-bff5-d15d74ce1f58"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"a8fcceae-6c51-407d-b51d-dec0ec3782f8","elementid":"2f117023-60ea-45c6-9492-c24250c98dd1","modelid":"f6996370-065d-4d86-bff5-d15d74ce1f58"}];
              
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