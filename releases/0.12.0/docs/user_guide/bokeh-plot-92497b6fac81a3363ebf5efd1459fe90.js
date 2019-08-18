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
      };var element = document.getElementById("66bd33b6-c947-4e03-8f9b-54a2039b481e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '66bd33b6-c947-4e03-8f9b-54a2039b481e' but no matching script tag was found. ")
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
              var docs_json = {"6645595c-303e-4c76-982c-80d1d193af4f":{"roots":{"references":[{"attributes":{"callback":null},"id":"14b8af18-04a1-451b-be15-dfec986b566c","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"79dd8cf4-6c58-4805-b03b-9b96c0ab1dfd","type":"BoxAnnotation"},{"attributes":{"format":"0.0%"},"id":"95091127-5b34-417d-9872-c3040ac319d0","type":"NumeralTickFormatter"},{"attributes":{},"id":"8b5f553d-63c5-422d-8c62-1ae05ab45aa1","type":"BasicTicker"},{"attributes":{"plot":{"id":"d1eead4d-991c-4506-8511-babf9598c791","subtype":"Figure","type":"Plot"}},"id":"1e8ea516-4890-4a49-9efc-76eb5455d1f2","type":"PanTool"},{"attributes":{"below":[{"id":"dc77fb24-becd-46ab-8c5a-0cfd09dcc133","type":"LinearAxis"}],"left":[{"id":"a399c5ca-9cf4-47e5-9fb3-5dbeadaba8cd","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"dc77fb24-becd-46ab-8c5a-0cfd09dcc133","type":"LinearAxis"},{"id":"688d9e23-ddac-4c8c-9265-9de26c36b69e","type":"Grid"},{"id":"a399c5ca-9cf4-47e5-9fb3-5dbeadaba8cd","type":"LinearAxis"},{"id":"169c0a45-6238-4106-9401-c25ebedaffae","type":"Grid"},{"id":"79dd8cf4-6c58-4805-b03b-9b96c0ab1dfd","type":"BoxAnnotation"},{"id":"e2fa1f44-bc6e-4b80-91c0-eebf9f505652","type":"GlyphRenderer"}],"title":{"id":"cea105aa-eab5-4bd4-b6f2-7a08340d7c57","type":"Title"},"tool_events":{"id":"0f56bbbc-11fe-4c87-b3f9-17508cbd3df2","type":"ToolEvents"},"toolbar":{"id":"e6644808-a082-4cd1-af1b-857adaef3949","type":"Toolbar"},"x_range":{"id":"0a3a9971-023d-4916-b8a3-c480e035100f","type":"DataRange1d"},"y_range":{"id":"14b8af18-04a1-451b-be15-dfec986b566c","type":"DataRange1d"}},"id":"d1eead4d-991c-4506-8511-babf9598c791","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"d1eead4d-991c-4506-8511-babf9598c791","subtype":"Figure","type":"Plot"}},"id":"d6269102-4255-4a93-8c34-b4255b768d07","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"39425d6e-d95a-4e84-8bad-2a2bed1168ac","type":"Circle"},{"attributes":{"plot":{"id":"d1eead4d-991c-4506-8511-babf9598c791","subtype":"Figure","type":"Plot"}},"id":"341751ee-4b3c-4d04-ad1c-77f71f625201","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"8f085f37-5306-4ad1-ae01-348d8ba85b0d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"8f085f37-5306-4ad1-ae01-348d8ba85b0d","type":"ColumnDataSource"},"glyph":{"id":"376713f3-f0ed-47e5-9a1f-b8027333586f","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"39425d6e-d95a-4e84-8bad-2a2bed1168ac","type":"Circle"},"selection_glyph":null},"id":"e2fa1f44-bc6e-4b80-91c0-eebf9f505652","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"376713f3-f0ed-47e5-9a1f-b8027333586f","type":"Circle"},{"attributes":{"formatter":{"id":"d54b3a9b-b46e-4267-80cd-9bc8684fe1c7","type":"NumeralTickFormatter"},"plot":{"id":"d1eead4d-991c-4506-8511-babf9598c791","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b5f553d-63c5-422d-8c62-1ae05ab45aa1","type":"BasicTicker"}},"id":"a399c5ca-9cf4-47e5-9fb3-5dbeadaba8cd","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1e8ea516-4890-4a49-9efc-76eb5455d1f2","type":"PanTool"},{"id":"d6269102-4255-4a93-8c34-b4255b768d07","type":"WheelZoomTool"},{"id":"a43d9d9f-d4f0-44a8-91f9-fe71e43de97a","type":"BoxZoomTool"},{"id":"341751ee-4b3c-4d04-ad1c-77f71f625201","type":"SaveTool"},{"id":"f3cc2873-ae18-4590-b608-89bc20381810","type":"ResetTool"},{"id":"a59df24a-8eda-426a-8aed-75d7fa78ba12","type":"HelpTool"}]},"id":"e6644808-a082-4cd1-af1b-857adaef3949","type":"Toolbar"},{"attributes":{"overlay":{"id":"79dd8cf4-6c58-4805-b03b-9b96c0ab1dfd","type":"BoxAnnotation"},"plot":{"id":"d1eead4d-991c-4506-8511-babf9598c791","subtype":"Figure","type":"Plot"}},"id":"a43d9d9f-d4f0-44a8-91f9-fe71e43de97a","type":"BoxZoomTool"},{"attributes":{},"id":"2d0f97a9-d235-45eb-a562-fa28311f8fc8","type":"BasicTicker"},{"attributes":{"plot":null,"text":null},"id":"cea105aa-eab5-4bd4-b6f2-7a08340d7c57","type":"Title"},{"attributes":{},"id":"0f56bbbc-11fe-4c87-b3f9-17508cbd3df2","type":"ToolEvents"},{"attributes":{"plot":{"id":"d1eead4d-991c-4506-8511-babf9598c791","subtype":"Figure","type":"Plot"}},"id":"a59df24a-8eda-426a-8aed-75d7fa78ba12","type":"HelpTool"},{"attributes":{"plot":{"id":"d1eead4d-991c-4506-8511-babf9598c791","subtype":"Figure","type":"Plot"}},"id":"f3cc2873-ae18-4590-b608-89bc20381810","type":"ResetTool"},{"attributes":{"formatter":{"id":"95091127-5b34-417d-9872-c3040ac319d0","type":"NumeralTickFormatter"},"plot":{"id":"d1eead4d-991c-4506-8511-babf9598c791","subtype":"Figure","type":"Plot"},"ticker":{"id":"2d0f97a9-d235-45eb-a562-fa28311f8fc8","type":"BasicTicker"}},"id":"dc77fb24-becd-46ab-8c5a-0cfd09dcc133","type":"LinearAxis"},{"attributes":{"format":"$0.00"},"id":"d54b3a9b-b46e-4267-80cd-9bc8684fe1c7","type":"NumeralTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"d1eead4d-991c-4506-8511-babf9598c791","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b5f553d-63c5-422d-8c62-1ae05ab45aa1","type":"BasicTicker"}},"id":"169c0a45-6238-4106-9401-c25ebedaffae","type":"Grid"},{"attributes":{"callback":null},"id":"0a3a9971-023d-4916-b8a3-c480e035100f","type":"DataRange1d"},{"attributes":{"plot":{"id":"d1eead4d-991c-4506-8511-babf9598c791","subtype":"Figure","type":"Plot"},"ticker":{"id":"2d0f97a9-d235-45eb-a562-fa28311f8fc8","type":"BasicTicker"}},"id":"688d9e23-ddac-4c8c-9265-9de26c36b69e","type":"Grid"}],"root_ids":["d1eead4d-991c-4506-8511-babf9598c791"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"6645595c-303e-4c76-982c-80d1d193af4f","elementid":"66bd33b6-c947-4e03-8f9b-54a2039b481e","modelid":"d1eead4d-991c-4506-8511-babf9598c791"}];
              
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