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
      };var element = document.getElementById("3065f2a6-a648-4af0-aa02-4ed400992199");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3065f2a6-a648-4af0-aa02-4ed400992199' but no matching script tag was found. ")
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
              var docs_json = {"36ae2729-61df-425e-97ca-88d8bbb909c0":{"roots":{"references":[{"attributes":{"callback":null},"id":"0e966ad7-23cd-4d8f-981a-b532c7a4ca7e","type":"DataRange1d"},{"attributes":{"plot":{"id":"5d8a7d03-a8f8-4b6a-8308-469ad02972dc","subtype":"Figure","type":"Plot"}},"id":"5f73d039-9753-4ef9-9f0a-3febb0a251ae","type":"ResetTool"},{"attributes":{"plot":{"id":"5d8a7d03-a8f8-4b6a-8308-469ad02972dc","subtype":"Figure","type":"Plot"}},"id":"fcfd4f23-9d71-4673-a8fc-d0d2c70f8121","type":"HelpTool"},{"attributes":{},"id":"1925e777-2909-4eb2-b0f0-3fac07526dbe","type":"ToolEvents"},{"attributes":{},"id":"84d6fe31-5533-4cfe-ac1a-930bf9fb3fbb","type":"BasicTicker"},{"attributes":{"plot":{"id":"5d8a7d03-a8f8-4b6a-8308-469ad02972dc","subtype":"Figure","type":"Plot"}},"id":"b9c8e06c-1fa2-4dcb-a8e2-d6dbe18dd659","type":"SaveTool"},{"attributes":{"formatter":{"id":"c53ae512-7c72-4384-8141-f479327a7a50","type":"BasicTickFormatter"},"plot":{"id":"5d8a7d03-a8f8-4b6a-8308-469ad02972dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"84d6fe31-5533-4cfe-ac1a-930bf9fb3fbb","type":"BasicTicker"}},"id":"de3834ea-26d8-4df2-a97a-864056b2de50","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"2097f0e7-7bc3-4116-a98d-98dab06556c5","type":"Title"},{"attributes":{"overlay":{"id":"891474c4-554e-46af-8688-80af3b3d2fa0","type":"BoxAnnotation"},"plot":{"id":"5d8a7d03-a8f8-4b6a-8308-469ad02972dc","subtype":"Figure","type":"Plot"}},"id":"974d5244-eb87-480d-bcf2-b67ca7104e80","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"38d73638-13e7-4df5-8158-59c491cd9746","type":"ColumnDataSource"},"glyph":{"id":"c06b4ad4-1f47-4a56-b205-483a7a20b6ef","type":"Annulus"},"hover_glyph":null,"nonselection_glyph":{"id":"88609b4f-af93-4bc6-bf1c-d742dc2a7ac9","type":"Annulus"},"selection_glyph":null},"id":"99b129a9-10d0-4ca4-bcdd-f9e2b50da7eb","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"5d8a7d03-a8f8-4b6a-8308-469ad02972dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3267f4c-39a2-457b-a856-93d6258b8c21","type":"BasicTicker"}},"id":"9b50c986-58b0-4f7c-8808-27af56677073","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"891474c4-554e-46af-8688-80af3b3d2fa0","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"orange"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"orange"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"c06b4ad4-1f47-4a56-b205-483a7a20b6ef","type":"Annulus"},{"attributes":{"formatter":{"id":"d9c83bca-9fd7-4a1a-94cc-575ff7de74da","type":"BasicTickFormatter"},"plot":{"id":"5d8a7d03-a8f8-4b6a-8308-469ad02972dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3267f4c-39a2-457b-a856-93d6258b8c21","type":"BasicTicker"}},"id":"04219620-aeae-46f4-a098-d0084bb742e6","type":"LinearAxis"},{"attributes":{"plot":{"id":"5d8a7d03-a8f8-4b6a-8308-469ad02972dc","subtype":"Figure","type":"Plot"}},"id":"3596e914-4e7f-4b27-b4e9-3145b47951b5","type":"WheelZoomTool"},{"attributes":{},"id":"d9c83bca-9fd7-4a1a-94cc-575ff7de74da","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"54b32c1b-c825-4f60-8695-5f27870847e2","type":"DataRange1d"},{"attributes":{"plot":{"id":"5d8a7d03-a8f8-4b6a-8308-469ad02972dc","subtype":"Figure","type":"Plot"}},"id":"c85fee65-ee2f-4c98-87a8-5974c03692d8","type":"PanTool"},{"attributes":{},"id":"e3267f4c-39a2-457b-a856-93d6258b8c21","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c85fee65-ee2f-4c98-87a8-5974c03692d8","type":"PanTool"},{"id":"3596e914-4e7f-4b27-b4e9-3145b47951b5","type":"WheelZoomTool"},{"id":"974d5244-eb87-480d-bcf2-b67ca7104e80","type":"BoxZoomTool"},{"id":"b9c8e06c-1fa2-4dcb-a8e2-d6dbe18dd659","type":"SaveTool"},{"id":"5f73d039-9753-4ef9-9f0a-3febb0a251ae","type":"ResetTool"},{"id":"fcfd4f23-9d71-4673-a8fc-d0d2c70f8121","type":"HelpTool"}]},"id":"1a1be45a-9c44-4dbc-818f-46aba7f6955f","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"5d8a7d03-a8f8-4b6a-8308-469ad02972dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"84d6fe31-5533-4cfe-ac1a-930bf9fb3fbb","type":"BasicTicker"}},"id":"88bac318-b139-46ef-bb2b-b6d74dde9925","type":"Grid"},{"attributes":{},"id":"c53ae512-7c72-4384-8141-f479327a7a50","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"04219620-aeae-46f4-a098-d0084bb742e6","type":"LinearAxis"}],"left":[{"id":"de3834ea-26d8-4df2-a97a-864056b2de50","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"04219620-aeae-46f4-a098-d0084bb742e6","type":"LinearAxis"},{"id":"9b50c986-58b0-4f7c-8808-27af56677073","type":"Grid"},{"id":"de3834ea-26d8-4df2-a97a-864056b2de50","type":"LinearAxis"},{"id":"88bac318-b139-46ef-bb2b-b6d74dde9925","type":"Grid"},{"id":"891474c4-554e-46af-8688-80af3b3d2fa0","type":"BoxAnnotation"},{"id":"99b129a9-10d0-4ca4-bcdd-f9e2b50da7eb","type":"GlyphRenderer"}],"title":{"id":"2097f0e7-7bc3-4116-a98d-98dab06556c5","type":"Title"},"tool_events":{"id":"1925e777-2909-4eb2-b0f0-3fac07526dbe","type":"ToolEvents"},"toolbar":{"id":"1a1be45a-9c44-4dbc-818f-46aba7f6955f","type":"Toolbar"},"x_range":{"id":"0e966ad7-23cd-4d8f-981a-b532c7a4ca7e","type":"DataRange1d"},"y_range":{"id":"54b32c1b-c825-4f60-8695-5f27870847e2","type":"DataRange1d"}},"id":"5d8a7d03-a8f8-4b6a-8308-469ad02972dc","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"38d73638-13e7-4df5-8158-59c491cd9746","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"88609b4f-af93-4bc6-bf1c-d742dc2a7ac9","type":"Annulus"}],"root_ids":["5d8a7d03-a8f8-4b6a-8308-469ad02972dc"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"36ae2729-61df-425e-97ca-88d8bbb909c0","elementid":"3065f2a6-a648-4af0-aa02-4ed400992199","modelid":"5d8a7d03-a8f8-4b6a-8308-469ad02972dc"}];
              
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