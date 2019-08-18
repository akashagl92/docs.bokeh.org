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
      };var element = document.getElementById("75d25e6f-a462-49fa-a6c4-09843c341d82");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '75d25e6f-a462-49fa-a6c4-09843c341d82' but no matching script tag was found. ")
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
              var docs_json = {"cebcae3e-d722-4586-9800-9cca88d9251d":{"roots":{"references":[{"attributes":{"plot":{"id":"cd15973b-9524-4434-91ac-8595080bb6ee","subtype":"Figure","type":"Plot"}},"id":"9793f9f3-caf4-4170-b9d9-7f7d3020fdd8","type":"HelpTool"},{"attributes":{"callback":null},"id":"56e4f356-7a64-4fb8-8a26-10edbf30071a","type":"DataRange1d"},{"attributes":{"formatter":{"id":"f6630301-0014-4027-8d22-83d648a643e7","type":"BasicTickFormatter"},"plot":{"id":"cd15973b-9524-4434-91ac-8595080bb6ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"7fce3493-039c-4e2f-8c11-2106bc7b6263","type":"BasicTicker"}},"id":"239ea9bb-1eec-4f56-b5ac-a27f064ce4ae","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["top","left","right","bottom"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"0c3a340e-2531-42ef-b8a1-2e71e0df019a","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bb64605b-109d-40c6-9ab1-fbd5dadb4af1","type":"BoxAnnotation"},{"attributes":{},"id":"f6630301-0014-4027-8d22-83d648a643e7","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"0c3a340e-2531-42ef-b8a1-2e71e0df019a","type":"ColumnDataSource"},"glyph":{"id":"1672afc6-91c4-4c7e-8643-27c8af475524","type":"Quad"},"hover_glyph":null,"nonselection_glyph":{"id":"0648ad11-de7e-4a10-8d11-ee903c3964b9","type":"Quad"},"selection_glyph":null},"id":"4631e444-681b-4af2-add7-7832e53d87eb","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"cd15973b-9524-4434-91ac-8595080bb6ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"838f337d-bc74-4f94-b9dc-b75a3ad825db","type":"BasicTicker"}},"id":"af70483d-9588-499f-a49a-caaeced48fc2","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"cd15973b-9524-4434-91ac-8595080bb6ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"7fce3493-039c-4e2f-8c11-2106bc7b6263","type":"BasicTicker"}},"id":"a7c28115-c017-4188-b996-52f2aab30294","type":"Grid"},{"attributes":{"plot":{"id":"cd15973b-9524-4434-91ac-8595080bb6ee","subtype":"Figure","type":"Plot"}},"id":"024ae19c-7806-4516-83d9-af44932350fa","type":"PanTool"},{"attributes":{},"id":"7fce3493-039c-4e2f-8c11-2106bc7b6263","type":"BasicTicker"},{"attributes":{"overlay":{"id":"bb64605b-109d-40c6-9ab1-fbd5dadb4af1","type":"BoxAnnotation"},"plot":{"id":"cd15973b-9524-4434-91ac-8595080bb6ee","subtype":"Figure","type":"Plot"}},"id":"1ff86aab-cf69-43bd-8ee6-57b043e333f9","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"cd15973b-9524-4434-91ac-8595080bb6ee","subtype":"Figure","type":"Plot"}},"id":"dce48fa6-1068-40e8-aaa4-cd696dfcf223","type":"SaveTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"0648ad11-de7e-4a10-8d11-ee903c3964b9","type":"Quad"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"024ae19c-7806-4516-83d9-af44932350fa","type":"PanTool"},{"id":"15dd0ef7-9a95-4417-90ac-634e0d1c5bbf","type":"WheelZoomTool"},{"id":"1ff86aab-cf69-43bd-8ee6-57b043e333f9","type":"BoxZoomTool"},{"id":"dce48fa6-1068-40e8-aaa4-cd696dfcf223","type":"SaveTool"},{"id":"4f7e2114-cd40-4ffd-af19-20f0ade5e88b","type":"ResetTool"},{"id":"9793f9f3-caf4-4170-b9d9-7f7d3020fdd8","type":"HelpTool"}]},"id":"8df80688-8500-4b62-b69f-4119cdd65642","type":"Toolbar"},{"attributes":{},"id":"af79cf0a-ef3e-4cd4-8b8b-d7c6d2594a4d","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"66697845-c5c1-4b95-96da-277b4ffafee7","type":"LinearAxis"}],"left":[{"id":"239ea9bb-1eec-4f56-b5ac-a27f064ce4ae","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"66697845-c5c1-4b95-96da-277b4ffafee7","type":"LinearAxis"},{"id":"af70483d-9588-499f-a49a-caaeced48fc2","type":"Grid"},{"id":"239ea9bb-1eec-4f56-b5ac-a27f064ce4ae","type":"LinearAxis"},{"id":"a7c28115-c017-4188-b996-52f2aab30294","type":"Grid"},{"id":"bb64605b-109d-40c6-9ab1-fbd5dadb4af1","type":"BoxAnnotation"},{"id":"4631e444-681b-4af2-add7-7832e53d87eb","type":"GlyphRenderer"}],"title":{"id":"3cc29bc5-2c59-4db7-9663-d00767895393","type":"Title"},"tool_events":{"id":"ab9e698f-4854-40ec-b754-fe4e235cc2d8","type":"ToolEvents"},"toolbar":{"id":"8df80688-8500-4b62-b69f-4119cdd65642","type":"Toolbar"},"x_range":{"id":"0396e57e-f834-4665-a5f3-295adbb04f01","type":"DataRange1d"},"y_range":{"id":"56e4f356-7a64-4fb8-8a26-10edbf30071a","type":"DataRange1d"}},"id":"cd15973b-9524-4434-91ac-8595080bb6ee","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"838f337d-bc74-4f94-b9dc-b75a3ad825db","type":"BasicTicker"},{"attributes":{"formatter":{"id":"af79cf0a-ef3e-4cd4-8b8b-d7c6d2594a4d","type":"BasicTickFormatter"},"plot":{"id":"cd15973b-9524-4434-91ac-8595080bb6ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"838f337d-bc74-4f94-b9dc-b75a3ad825db","type":"BasicTicker"}},"id":"66697845-c5c1-4b95-96da-277b4ffafee7","type":"LinearAxis"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"1672afc6-91c4-4c7e-8643-27c8af475524","type":"Quad"},{"attributes":{"plot":{"id":"cd15973b-9524-4434-91ac-8595080bb6ee","subtype":"Figure","type":"Plot"}},"id":"4f7e2114-cd40-4ffd-af19-20f0ade5e88b","type":"ResetTool"},{"attributes":{"callback":null},"id":"0396e57e-f834-4665-a5f3-295adbb04f01","type":"DataRange1d"},{"attributes":{"plot":{"id":"cd15973b-9524-4434-91ac-8595080bb6ee","subtype":"Figure","type":"Plot"}},"id":"15dd0ef7-9a95-4417-90ac-634e0d1c5bbf","type":"WheelZoomTool"},{"attributes":{},"id":"ab9e698f-4854-40ec-b754-fe4e235cc2d8","type":"ToolEvents"},{"attributes":{"plot":null,"text":null},"id":"3cc29bc5-2c59-4db7-9663-d00767895393","type":"Title"}],"root_ids":["cd15973b-9524-4434-91ac-8595080bb6ee"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"cebcae3e-d722-4586-9800-9cca88d9251d","elementid":"75d25e6f-a462-49fa-a6c4-09843c341d82","modelid":"cd15973b-9524-4434-91ac-8595080bb6ee"}];
              
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