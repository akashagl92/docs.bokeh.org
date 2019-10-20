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
      };var element = document.getElementById("a325fc72-94bd-45c5-9d61-8f30eec58438");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a325fc72-94bd-45c5-9d61-8f30eec58438' but no matching script tag was found. ")
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
              var docs_json = {"a42230ed-8802-4460-bb94-b57044e4e79c":{"roots":{"references":[{"attributes":{"callback":null},"id":"a8b8f4e7-cf57-4543-88fe-56a6327797ec","type":"DataRange1d"},{"attributes":{},"id":"a0ec4dd1-3250-4fd6-9791-dc5b87cac40a","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"2ad5afc9-7e0a-485f-9369-d267bd03f8dd","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5b0cf7a6-d70c-44f7-aa3d-80d0fcfcb421","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"739a69a4-3db5-4e3d-8dd1-691d00ed19ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0ec4dd1-3250-4fd6-9791-dc5b87cac40a","type":"BasicTicker"}},"id":"a7990c4b-1593-477b-bea8-3867f2052d37","type":"Grid"},{"attributes":{},"id":"3d16ffc2-4dd7-4929-a8bb-7e65eed7f65a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"4da45b6d-9600-4fa3-a404-292c2a5c904b","type":"NumeralTickFormatter"},"plot":{"id":"739a69a4-3db5-4e3d-8dd1-691d00ed19ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d16ffc2-4dd7-4929-a8bb-7e65eed7f65a","type":"BasicTicker"}},"id":"5a72562b-c672-43a3-b5ae-03e8c63dd5d6","type":"LinearAxis"},{"attributes":{"format":"$0.00"},"id":"4e221549-008d-4266-ac51-c718584d96a8","type":"NumeralTickFormatter"},{"attributes":{"callback":null},"id":"c5e7560d-2c08-479c-ab9f-063ed2e1b341","type":"DataRange1d"},{"attributes":{"below":[{"id":"5a72562b-c672-43a3-b5ae-03e8c63dd5d6","type":"LinearAxis"}],"left":[{"id":"d0c90803-994d-4a18-9eec-6e5a7f2a9228","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"5a72562b-c672-43a3-b5ae-03e8c63dd5d6","type":"LinearAxis"},{"id":"1da7450e-57a7-4825-9078-2b133ea419d0","type":"Grid"},{"id":"d0c90803-994d-4a18-9eec-6e5a7f2a9228","type":"LinearAxis"},{"id":"a7990c4b-1593-477b-bea8-3867f2052d37","type":"Grid"},{"id":"0f9d3797-3684-4c61-a84f-bafc9614b509","type":"BoxAnnotation"},{"id":"44b67580-6ba1-4d2e-97a5-b5c1fe594e60","type":"GlyphRenderer"}],"title":{"id":"34626e44-900c-4799-94b5-c6b7d26b25b9","type":"Title"},"tool_events":{"id":"517456e3-bd6b-482d-9eb1-95267131fe4c","type":"ToolEvents"},"toolbar":{"id":"1ab0a3a2-ffae-4dcf-bd1a-a40b6f3c972d","type":"Toolbar"},"x_range":{"id":"a8b8f4e7-cf57-4543-88fe-56a6327797ec","type":"DataRange1d"},"y_range":{"id":"c5e7560d-2c08-479c-ab9f-063ed2e1b341","type":"DataRange1d"}},"id":"739a69a4-3db5-4e3d-8dd1-691d00ed19ab","subtype":"Figure","type":"Plot"},{"attributes":{"format":"0.0%"},"id":"4da45b6d-9600-4fa3-a404-292c2a5c904b","type":"NumeralTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c7152936-e640-4a29-a9a6-9c968eec71ee","type":"PanTool"},{"id":"90cba775-4a86-48f8-b913-f717e70dc379","type":"WheelZoomTool"},{"id":"c0ecace4-602e-4525-ae90-48b7b58db3df","type":"BoxZoomTool"},{"id":"feaf195f-81e4-467f-b504-ab9ff3540f07","type":"SaveTool"},{"id":"d7b0d781-d54e-4db7-9861-ca022b1b2d97","type":"ResetTool"},{"id":"727d19bb-5530-4872-98be-2f7caec10c7c","type":"HelpTool"}]},"id":"1ab0a3a2-ffae-4dcf-bd1a-a40b6f3c972d","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0668b630-7b05-4831-8963-be47895d418a","type":"Circle"},{"attributes":{"formatter":{"id":"4e221549-008d-4266-ac51-c718584d96a8","type":"NumeralTickFormatter"},"plot":{"id":"739a69a4-3db5-4e3d-8dd1-691d00ed19ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"a0ec4dd1-3250-4fd6-9791-dc5b87cac40a","type":"BasicTicker"}},"id":"d0c90803-994d-4a18-9eec-6e5a7f2a9228","type":"LinearAxis"},{"attributes":{"plot":{"id":"739a69a4-3db5-4e3d-8dd1-691d00ed19ab","subtype":"Figure","type":"Plot"}},"id":"90cba775-4a86-48f8-b913-f717e70dc379","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0f9d3797-3684-4c61-a84f-bafc9614b509","type":"BoxAnnotation"},{"attributes":{},"id":"517456e3-bd6b-482d-9eb1-95267131fe4c","type":"ToolEvents"},{"attributes":{"data_source":{"id":"2ad5afc9-7e0a-485f-9369-d267bd03f8dd","type":"ColumnDataSource"},"glyph":{"id":"0668b630-7b05-4831-8963-be47895d418a","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"5b0cf7a6-d70c-44f7-aa3d-80d0fcfcb421","type":"Circle"},"selection_glyph":null},"id":"44b67580-6ba1-4d2e-97a5-b5c1fe594e60","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"739a69a4-3db5-4e3d-8dd1-691d00ed19ab","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d16ffc2-4dd7-4929-a8bb-7e65eed7f65a","type":"BasicTicker"}},"id":"1da7450e-57a7-4825-9078-2b133ea419d0","type":"Grid"},{"attributes":{"plot":null,"text":null},"id":"34626e44-900c-4799-94b5-c6b7d26b25b9","type":"Title"},{"attributes":{"plot":{"id":"739a69a4-3db5-4e3d-8dd1-691d00ed19ab","subtype":"Figure","type":"Plot"}},"id":"727d19bb-5530-4872-98be-2f7caec10c7c","type":"HelpTool"},{"attributes":{"plot":{"id":"739a69a4-3db5-4e3d-8dd1-691d00ed19ab","subtype":"Figure","type":"Plot"}},"id":"feaf195f-81e4-467f-b504-ab9ff3540f07","type":"SaveTool"},{"attributes":{"plot":{"id":"739a69a4-3db5-4e3d-8dd1-691d00ed19ab","subtype":"Figure","type":"Plot"}},"id":"c7152936-e640-4a29-a9a6-9c968eec71ee","type":"PanTool"},{"attributes":{"overlay":{"id":"0f9d3797-3684-4c61-a84f-bafc9614b509","type":"BoxAnnotation"},"plot":{"id":"739a69a4-3db5-4e3d-8dd1-691d00ed19ab","subtype":"Figure","type":"Plot"}},"id":"c0ecace4-602e-4525-ae90-48b7b58db3df","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"739a69a4-3db5-4e3d-8dd1-691d00ed19ab","subtype":"Figure","type":"Plot"}},"id":"d7b0d781-d54e-4db7-9861-ca022b1b2d97","type":"ResetTool"}],"root_ids":["739a69a4-3db5-4e3d-8dd1-691d00ed19ab"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"a42230ed-8802-4460-bb94-b57044e4e79c","elementid":"a325fc72-94bd-45c5-9d61-8f30eec58438","modelid":"739a69a4-3db5-4e3d-8dd1-691d00ed19ab"}];
              
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