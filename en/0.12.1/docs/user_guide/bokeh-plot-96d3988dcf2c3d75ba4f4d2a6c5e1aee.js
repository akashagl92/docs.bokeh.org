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
      };var element = document.getElementById("b7c6a7d6-64f2-494f-942b-d023d39f0299");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b7c6a7d6-64f2-494f-942b-d023d39f0299' but no matching script tag was found. ")
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
              var docs_json = {"1f8ec1fe-1b7f-414f-9ba5-b30ece3e67c9":{"roots":{"references":[{"attributes":{"data_source":{"id":"6b8e1e11-5a6a-447b-a5aa-703c1ded2bd8","type":"ColumnDataSource"},"glyph":{"id":"52a2fcf8-2157-482c-bbf3-86d0b1c6e54f","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"86a53271-332b-4d8c-afc4-c7414816f341","type":"Circle"},"selection_glyph":null},"id":"aed73a41-9e9c-47cd-9a76-4a1b5cf20713","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f6de69e3-7e97-4914-970b-1ef78ff202dc","type":"PanTool"},{"id":"0034eb3f-9c90-4853-97bb-4993e8974b8f","type":"WheelZoomTool"},{"id":"e2a21b11-fd7f-4361-a696-5aaa85543e77","type":"BoxZoomTool"},{"id":"ea6d280e-ac5d-4ae1-acc7-e39487423fb3","type":"SaveTool"},{"id":"12f0a8e1-ed6b-4dc1-9f77-9550876cbfff","type":"ResetTool"},{"id":"fa790e98-1c46-4583-87b5-801536329208","type":"HelpTool"}]},"id":"028d1d74-a65e-4795-9ec1-e2c4abf61e98","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"86a53271-332b-4d8c-afc4-c7414816f341","type":"Circle"},{"attributes":{},"id":"7772f429-c0b2-4d11-812b-fe0f7fa0780b","type":"BasicTicker"},{"attributes":{"plot":{"id":"1b4d6d93-9c50-4217-91f7-376115e9f466","subtype":"Figure","type":"Plot"}},"id":"ea6d280e-ac5d-4ae1-acc7-e39487423fb3","type":"SaveTool"},{"attributes":{"overlay":{"id":"dd3a79e3-9955-4811-992e-abf06be8bb96","type":"BoxAnnotation"},"plot":{"id":"1b4d6d93-9c50-4217-91f7-376115e9f466","subtype":"Figure","type":"Plot"}},"id":"e2a21b11-fd7f-4361-a696-5aaa85543e77","type":"BoxZoomTool"},{"attributes":{},"id":"ee844d71-d8ed-4e27-a40a-910b4997f92f","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"1b4d6d93-9c50-4217-91f7-376115e9f466","subtype":"Figure","type":"Plot"},"ticker":{"id":"861c981d-2dc4-49ab-a84e-448d6f90bb36","type":"BasicTicker"}},"id":"f103558f-70bb-48ba-ac91-4e6c8b71d316","type":"Grid"},{"attributes":{"bounds":[2,4],"formatter":{"id":"a931036e-fb02-4970-bf3c-6129537e9a74","type":"BasicTickFormatter"},"plot":{"id":"1b4d6d93-9c50-4217-91f7-376115e9f466","subtype":"Figure","type":"Plot"},"ticker":{"id":"861c981d-2dc4-49ab-a84e-448d6f90bb36","type":"BasicTicker"}},"id":"0c21a65c-4766-4d2e-86e0-c2829806dbbc","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"1b4d6d93-9c50-4217-91f7-376115e9f466","subtype":"Figure","type":"Plot"},"ticker":{"id":"7772f429-c0b2-4d11-812b-fe0f7fa0780b","type":"BasicTicker"}},"id":"f943f48d-0425-4ed0-a996-8548187c0932","type":"Grid"},{"attributes":{},"id":"a931036e-fb02-4970-bf3c-6129537e9a74","type":"BasicTickFormatter"},{"attributes":{},"id":"861c981d-2dc4-49ab-a84e-448d6f90bb36","type":"BasicTicker"},{"attributes":{"plot":{"id":"1b4d6d93-9c50-4217-91f7-376115e9f466","subtype":"Figure","type":"Plot"}},"id":"12f0a8e1-ed6b-4dc1-9f77-9550876cbfff","type":"ResetTool"},{"attributes":{"callback":null},"id":"71d9433d-6471-4abd-8ff5-00bd8bc11ce1","type":"DataRange1d"},{"attributes":{"callback":null},"id":"acc30ba3-ee63-4a43-abc6-b36a92b355e4","type":"DataRange1d"},{"attributes":{"below":[{"id":"0c21a65c-4766-4d2e-86e0-c2829806dbbc","type":"LinearAxis"}],"left":[{"id":"9f320c17-7575-4000-935b-f84527f501a1","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0c21a65c-4766-4d2e-86e0-c2829806dbbc","type":"LinearAxis"},{"id":"f103558f-70bb-48ba-ac91-4e6c8b71d316","type":"Grid"},{"id":"9f320c17-7575-4000-935b-f84527f501a1","type":"LinearAxis"},{"id":"f943f48d-0425-4ed0-a996-8548187c0932","type":"Grid"},{"id":"dd3a79e3-9955-4811-992e-abf06be8bb96","type":"BoxAnnotation"},{"id":"aed73a41-9e9c-47cd-9a76-4a1b5cf20713","type":"GlyphRenderer"}],"title":{"id":"8ae5dc22-fed8-4d16-ac32-78b66e41d99b","type":"Title"},"tool_events":{"id":"4bbb2e0b-b2e5-4259-aa07-64ddd27e4734","type":"ToolEvents"},"toolbar":{"id":"028d1d74-a65e-4795-9ec1-e2c4abf61e98","type":"Toolbar"},"x_range":{"id":"71d9433d-6471-4abd-8ff5-00bd8bc11ce1","type":"DataRange1d"},"y_range":{"id":"acc30ba3-ee63-4a43-abc6-b36a92b355e4","type":"DataRange1d"}},"id":"1b4d6d93-9c50-4217-91f7-376115e9f466","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"1b4d6d93-9c50-4217-91f7-376115e9f466","subtype":"Figure","type":"Plot"}},"id":"fa790e98-1c46-4583-87b5-801536329208","type":"HelpTool"},{"attributes":{},"id":"4bbb2e0b-b2e5-4259-aa07-64ddd27e4734","type":"ToolEvents"},{"attributes":{"plot":null,"text":null},"id":"8ae5dc22-fed8-4d16-ac32-78b66e41d99b","type":"Title"},{"attributes":{"plot":{"id":"1b4d6d93-9c50-4217-91f7-376115e9f466","subtype":"Figure","type":"Plot"}},"id":"f6de69e3-7e97-4914-970b-1ef78ff202dc","type":"PanTool"},{"attributes":{"plot":{"id":"1b4d6d93-9c50-4217-91f7-376115e9f466","subtype":"Figure","type":"Plot"}},"id":"0034eb3f-9c90-4853-97bb-4993e8974b8f","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"6b8e1e11-5a6a-447b-a5aa-703c1ded2bd8","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"ee844d71-d8ed-4e27-a40a-910b4997f92f","type":"BasicTickFormatter"},"plot":{"id":"1b4d6d93-9c50-4217-91f7-376115e9f466","subtype":"Figure","type":"Plot"},"ticker":{"id":"7772f429-c0b2-4d11-812b-fe0f7fa0780b","type":"BasicTicker"}},"id":"9f320c17-7575-4000-935b-f84527f501a1","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"52a2fcf8-2157-482c-bbf3-86d0b1c6e54f","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"dd3a79e3-9955-4811-992e-abf06be8bb96","type":"BoxAnnotation"}],"root_ids":["1b4d6d93-9c50-4217-91f7-376115e9f466"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"1f8ec1fe-1b7f-414f-9ba5-b30ece3e67c9","elementid":"b7c6a7d6-64f2-494f-942b-d023d39f0299","modelid":"1b4d6d93-9c50-4217-91f7-376115e9f466"}];
              
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