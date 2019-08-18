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
      };var element = document.getElementById("a9401167-6ae5-4d86-9a96-28a29ad611ef");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a9401167-6ae5-4d86-9a96-28a29ad611ef' but no matching script tag was found. ")
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
              var docs_json = {"a4899291-8698-41c6-94d5-a9760ae9fdb7":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a5c1ccc5-6daa-453d-89ef-c699db8a7fba","type":"Circle"},{"attributes":{},"id":"2e7c2636-8da7-4444-853a-ff5a9ad04afb","type":"BasicTicker"},{"attributes":{"plot":{"id":"883994f5-aa38-4dd9-aaa7-ba162715bb83","subtype":"Figure","type":"Plot"}},"id":"746adcb3-1b95-4c03-a460-e7415f6362f0","type":"PanTool"},{"attributes":{"callback":null},"id":"d6c78a6f-61c9-4bc5-852f-b9485bfb7f73","type":"DataRange1d"},{"attributes":{"plot":{"id":"883994f5-aa38-4dd9-aaa7-ba162715bb83","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e7c2636-8da7-4444-853a-ff5a9ad04afb","type":"BasicTicker"}},"id":"111d606a-5a86-4ce6-b020-58a01da427cd","type":"Grid"},{"attributes":{"formatter":{"id":"05c2827a-4695-42f2-9a33-2c7966e888f1","type":"BasicTickFormatter"},"plot":{"id":"883994f5-aa38-4dd9-aaa7-ba162715bb83","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e7c2636-8da7-4444-853a-ff5a9ad04afb","type":"BasicTicker"}},"id":"0b9c014a-380b-4107-9e8a-ac985e6187ab","type":"LinearAxis"},{"attributes":{"below":[{"id":"0b9c014a-380b-4107-9e8a-ac985e6187ab","type":"LinearAxis"}],"left":[{"id":"4d4867e7-832f-4927-921f-e4e75d5f0516","type":"LinearAxis"}],"outline_line_alpha":{"value":0.3},"outline_line_color":{"value":"navy"},"outline_line_width":{"value":7},"plot_height":400,"plot_width":400,"renderers":[{"id":"0b9c014a-380b-4107-9e8a-ac985e6187ab","type":"LinearAxis"},{"id":"111d606a-5a86-4ce6-b020-58a01da427cd","type":"Grid"},{"id":"4d4867e7-832f-4927-921f-e4e75d5f0516","type":"LinearAxis"},{"id":"5c747da1-5f65-4699-bd57-52f16ccd51ce","type":"Grid"},{"id":"21a26923-391f-47c8-a9e3-99ab6bbb54ec","type":"BoxAnnotation"},{"id":"2184b8e4-eee0-4201-b30a-015e186ab7d0","type":"GlyphRenderer"}],"title":{"id":"2e5ef591-9f31-406d-ba5a-08dd24814285","type":"Title"},"tool_events":{"id":"8facc9bf-d611-4740-9bdd-8eb4b7a47b14","type":"ToolEvents"},"toolbar":{"id":"c6b16731-332c-4424-8535-7fee931c2607","type":"Toolbar"},"x_range":{"id":"d6c78a6f-61c9-4bc5-852f-b9485bfb7f73","type":"DataRange1d"},"y_range":{"id":"ec76346d-9ea5-4115-b871-9b5b5f1b49b1","type":"DataRange1d"}},"id":"883994f5-aa38-4dd9-aaa7-ba162715bb83","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"5f0c5696-8b10-4e6f-8b7e-e0bb7e71c0fb","type":"BasicTickFormatter"},"plot":{"id":"883994f5-aa38-4dd9-aaa7-ba162715bb83","subtype":"Figure","type":"Plot"},"ticker":{"id":"c81e3a02-4654-499c-bc72-c6cd17d52741","type":"BasicTicker"}},"id":"4d4867e7-832f-4927-921f-e4e75d5f0516","type":"LinearAxis"},{"attributes":{"data_source":{"id":"49b6a5ac-772a-4835-a227-ff18f5457285","type":"ColumnDataSource"},"glyph":{"id":"31eb46cb-2a5b-4306-b81b-86dff40f9403","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"a5c1ccc5-6daa-453d-89ef-c699db8a7fba","type":"Circle"},"selection_glyph":null},"id":"2184b8e4-eee0-4201-b30a-015e186ab7d0","type":"GlyphRenderer"},{"attributes":{},"id":"c81e3a02-4654-499c-bc72-c6cd17d52741","type":"BasicTicker"},{"attributes":{"overlay":{"id":"21a26923-391f-47c8-a9e3-99ab6bbb54ec","type":"BoxAnnotation"},"plot":{"id":"883994f5-aa38-4dd9-aaa7-ba162715bb83","subtype":"Figure","type":"Plot"}},"id":"9fe21731-4262-421e-9fc9-015cca160740","type":"BoxZoomTool"},{"attributes":{},"id":"8facc9bf-d611-4740-9bdd-8eb4b7a47b14","type":"ToolEvents"},{"attributes":{"plot":{"id":"883994f5-aa38-4dd9-aaa7-ba162715bb83","subtype":"Figure","type":"Plot"}},"id":"69d08f67-8abf-4bc6-8af7-d7caab893c68","type":"SaveTool"},{"attributes":{"plot":{"id":"883994f5-aa38-4dd9-aaa7-ba162715bb83","subtype":"Figure","type":"Plot"}},"id":"487d0b8d-d3aa-4d53-9111-91ec224b08d5","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"21a26923-391f-47c8-a9e3-99ab6bbb54ec","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"746adcb3-1b95-4c03-a460-e7415f6362f0","type":"PanTool"},{"id":"62ce1ab6-e861-4623-98f2-bbda09fa63b8","type":"WheelZoomTool"},{"id":"9fe21731-4262-421e-9fc9-015cca160740","type":"BoxZoomTool"},{"id":"69d08f67-8abf-4bc6-8af7-d7caab893c68","type":"SaveTool"},{"id":"db42f764-63db-484d-925a-24c142c1080a","type":"ResetTool"},{"id":"487d0b8d-d3aa-4d53-9111-91ec224b08d5","type":"HelpTool"}]},"id":"c6b16731-332c-4424-8535-7fee931c2607","type":"Toolbar"},{"attributes":{},"id":"5f0c5696-8b10-4e6f-8b7e-e0bb7e71c0fb","type":"BasicTickFormatter"},{"attributes":{},"id":"05c2827a-4695-42f2-9a33-2c7966e888f1","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"883994f5-aa38-4dd9-aaa7-ba162715bb83","subtype":"Figure","type":"Plot"}},"id":"db42f764-63db-484d-925a-24c142c1080a","type":"ResetTool"},{"attributes":{"plot":{"id":"883994f5-aa38-4dd9-aaa7-ba162715bb83","subtype":"Figure","type":"Plot"}},"id":"62ce1ab6-e861-4623-98f2-bbda09fa63b8","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"ec76346d-9ea5-4115-b871-9b5b5f1b49b1","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"31eb46cb-2a5b-4306-b81b-86dff40f9403","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"883994f5-aa38-4dd9-aaa7-ba162715bb83","subtype":"Figure","type":"Plot"},"ticker":{"id":"c81e3a02-4654-499c-bc72-c6cd17d52741","type":"BasicTicker"}},"id":"5c747da1-5f65-4699-bd57-52f16ccd51ce","type":"Grid"},{"attributes":{"plot":null,"text":null},"id":"2e5ef591-9f31-406d-ba5a-08dd24814285","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"49b6a5ac-772a-4835-a227-ff18f5457285","type":"ColumnDataSource"}],"root_ids":["883994f5-aa38-4dd9-aaa7-ba162715bb83"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"a4899291-8698-41c6-94d5-a9760ae9fdb7","elementid":"a9401167-6ae5-4d86-9a96-28a29ad611ef","modelid":"883994f5-aa38-4dd9-aaa7-ba162715bb83"}];
              
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