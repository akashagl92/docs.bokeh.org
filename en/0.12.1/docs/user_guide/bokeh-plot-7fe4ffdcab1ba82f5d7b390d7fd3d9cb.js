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
      };var element = document.getElementById("fe14e70b-b9a8-4597-b7a6-ea1ef981c166");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fe14e70b-b9a8-4597-b7a6-ea1ef981c166' but no matching script tag was found. ")
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
              var docs_json = {"8e0f5251-27fe-47e1-b5e7-fd158a733a10":{"roots":{"references":[{"attributes":{"plot":{"id":"b8e2ed57-cfbb-4b27-affe-4aa45dfce7d8","subtype":"Figure","type":"Plot"}},"id":"839cefd8-191c-4f8a-a4f7-bf8e1f7f3278","type":"PanTool"},{"attributes":{},"id":"443630f0-6040-4081-a1b0-800aaf9b2eef","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"4aa67ca4-948d-4372-955f-c0cc2cba8bce","type":"Line"},{"attributes":{"formatter":{"id":"366db331-e493-4f2e-b92a-e89c0c88f691","type":"BasicTickFormatter"},"plot":{"id":"b8e2ed57-cfbb-4b27-affe-4aa45dfce7d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"545d5e42-4f69-4351-a3f1-3042b56adf3b","type":"BasicTicker"}},"id":"ec5988ba-d2d6-4041-aa4a-0e723a30b857","type":"LinearAxis"},{"attributes":{"below":[{"id":"8f9fba9d-f64a-49b8-9d9d-7ca630347472","type":"LinearAxis"}],"left":[{"id":"ec5988ba-d2d6-4041-aa4a-0e723a30b857","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8f9fba9d-f64a-49b8-9d9d-7ca630347472","type":"LinearAxis"},{"id":"5e4fa761-fd81-40e7-b03e-d53ab8acc3c8","type":"Grid"},{"id":"ec5988ba-d2d6-4041-aa4a-0e723a30b857","type":"LinearAxis"},{"id":"4da6e74c-181b-4641-b1a0-c6af701f4911","type":"Grid"},{"id":"481854bf-7d83-49d9-8865-03bec9ad25fd","type":"BoxAnnotation"},{"id":"3d684f1b-6d51-407b-8a87-3cc367039c8f","type":"GlyphRenderer"}],"title":{"id":"78178f28-2c7a-4080-ad12-732549789737","type":"Title"},"tool_events":{"id":"adcd0b83-38b7-45fb-a0b1-76115a18ba99","type":"ToolEvents"},"toolbar":{"id":"a353bf56-6736-4b98-af50-07be2e55e28c","type":"Toolbar"},"x_range":{"id":"e47a9981-438f-4de7-9a82-0e8d258e0b85","type":"DataRange1d"},"y_range":{"id":"f7c7195f-939d-40be-a595-0b0dc2377e0f","type":"DataRange1d"}},"id":"b8e2ed57-cfbb-4b27-affe-4aa45dfce7d8","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"e86fdfe3-ebce-4cc3-8170-e6e72379e94c","type":"ColumnDataSource"},"glyph":{"id":"3d6b1c58-0839-4d03-a8d2-12aaa8b11467","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"4aa67ca4-948d-4372-955f-c0cc2cba8bce","type":"Line"},"selection_glyph":null},"id":"3d684f1b-6d51-407b-8a87-3cc367039c8f","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"481854bf-7d83-49d9-8865-03bec9ad25fd","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"b8e2ed57-cfbb-4b27-affe-4aa45dfce7d8","subtype":"Figure","type":"Plot"}},"id":"bbbcd04c-c397-4555-88df-cd7eded6074b","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":null},"id":"78178f28-2c7a-4080-ad12-732549789737","type":"Title"},{"attributes":{"plot":{"id":"b8e2ed57-cfbb-4b27-affe-4aa45dfce7d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"443630f0-6040-4081-a1b0-800aaf9b2eef","type":"BasicTicker"}},"id":"5e4fa761-fd81-40e7-b03e-d53ab8acc3c8","type":"Grid"},{"attributes":{"callback":null},"id":"f7c7195f-939d-40be-a595-0b0dc2377e0f","type":"DataRange1d"},{"attributes":{"formatter":{"id":"44824cf5-0234-4c8a-88fc-d5a5df9d62cc","type":"BasicTickFormatter"},"plot":{"id":"b8e2ed57-cfbb-4b27-affe-4aa45dfce7d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"443630f0-6040-4081-a1b0-800aaf9b2eef","type":"BasicTicker"}},"id":"8f9fba9d-f64a-49b8-9d9d-7ca630347472","type":"LinearAxis"},{"attributes":{"plot":{"id":"b8e2ed57-cfbb-4b27-affe-4aa45dfce7d8","subtype":"Figure","type":"Plot"}},"id":"79f050c7-366f-47ee-8d88-d17747d1406b","type":"ResetTool"},{"attributes":{"plot":{"id":"b8e2ed57-cfbb-4b27-affe-4aa45dfce7d8","subtype":"Figure","type":"Plot"}},"id":"66c69bdd-ce85-4fbe-8ee2-2c71cddaa10d","type":"HelpTool"},{"attributes":{"plot":{"id":"b8e2ed57-cfbb-4b27-affe-4aa45dfce7d8","subtype":"Figure","type":"Plot"}},"id":"46b8db33-fa9b-41ea-8ee2-01b780f08389","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"b8e2ed57-cfbb-4b27-affe-4aa45dfce7d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"545d5e42-4f69-4351-a3f1-3042b56adf3b","type":"BasicTicker"}},"id":"4da6e74c-181b-4641-b1a0-c6af701f4911","type":"Grid"},{"attributes":{},"id":"adcd0b83-38b7-45fb-a0b1-76115a18ba99","type":"ToolEvents"},{"attributes":{"callback":null},"id":"e47a9981-438f-4de7-9a82-0e8d258e0b85","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"3d6b1c58-0839-4d03-a8d2-12aaa8b11467","type":"Line"},{"attributes":{},"id":"366db331-e493-4f2e-b92a-e89c0c88f691","type":"BasicTickFormatter"},{"attributes":{},"id":"545d5e42-4f69-4351-a3f1-3042b56adf3b","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1.0,2.0,3.0,"NaN",4.0,5.0],"y":[6,7,2,4,4,5]}},"id":"e86fdfe3-ebce-4cc3-8170-e6e72379e94c","type":"ColumnDataSource"},{"attributes":{},"id":"44824cf5-0234-4c8a-88fc-d5a5df9d62cc","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"481854bf-7d83-49d9-8865-03bec9ad25fd","type":"BoxAnnotation"},"plot":{"id":"b8e2ed57-cfbb-4b27-affe-4aa45dfce7d8","subtype":"Figure","type":"Plot"}},"id":"667db0f8-23fb-4a1f-a25f-d3c2e13df73a","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"839cefd8-191c-4f8a-a4f7-bf8e1f7f3278","type":"PanTool"},{"id":"bbbcd04c-c397-4555-88df-cd7eded6074b","type":"WheelZoomTool"},{"id":"667db0f8-23fb-4a1f-a25f-d3c2e13df73a","type":"BoxZoomTool"},{"id":"46b8db33-fa9b-41ea-8ee2-01b780f08389","type":"SaveTool"},{"id":"79f050c7-366f-47ee-8d88-d17747d1406b","type":"ResetTool"},{"id":"66c69bdd-ce85-4fbe-8ee2-2c71cddaa10d","type":"HelpTool"}]},"id":"a353bf56-6736-4b98-af50-07be2e55e28c","type":"Toolbar"}],"root_ids":["b8e2ed57-cfbb-4b27-affe-4aa45dfce7d8"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"8e0f5251-27fe-47e1-b5e7-fd158a733a10","elementid":"fe14e70b-b9a8-4597-b7a6-ea1ef981c166","modelid":"b8e2ed57-cfbb-4b27-affe-4aa45dfce7d8"}];
              
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