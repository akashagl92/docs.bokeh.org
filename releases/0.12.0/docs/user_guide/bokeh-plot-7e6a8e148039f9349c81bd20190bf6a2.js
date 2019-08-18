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
      };var element = document.getElementById("6a28da8b-38d5-49dd-8374-3cdea289140e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6a28da8b-38d5-49dd-8374-3cdea289140e' but no matching script tag was found. ")
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
              var docs_json = {"af82ebbb-f1f0-46f5-92bc-dd88f075631e":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0d1de9a9-aded-48e7-a835-b4e1f1ae689d","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"931308ae-41f9-4824-af0b-5f9820166eb8","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"78cea33e-a335-49db-a0d6-e75341338836","type":"DataRange1d"},{"attributes":{"plot":{"id":"0d529a8a-5a38-428e-9abf-35d01fd3ec34","subtype":"Figure","type":"Plot"}},"id":"e73e420f-8c5f-4534-877a-9ae5d42792d9","type":"ResetTool"},{"attributes":{"plot":{"id":"0d529a8a-5a38-428e-9abf-35d01fd3ec34","subtype":"Figure","type":"Plot"}},"id":"7196cda7-9d77-4d20-bb0b-4167115a8c04","type":"SaveTool"},{"attributes":{"overlay":{"id":"0d1de9a9-aded-48e7-a835-b4e1f1ae689d","type":"BoxAnnotation"},"plot":{"id":"0d529a8a-5a38-428e-9abf-35d01fd3ec34","subtype":"Figure","type":"Plot"}},"id":"56b3724b-80d8-4697-bbd5-53f2b668a933","type":"BoxZoomTool"},{"attributes":{},"id":"905ae599-7b43-47cb-b143-11ef39732cd6","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"dcb724c4-3d70-442d-94a2-373815a534a6","type":"Circle"},{"attributes":{},"id":"722fb7aa-0762-44f7-9a19-69cf8ebf8d4b","type":"ToolEvents"},{"attributes":{},"id":"33beee69-82b1-403b-a236-618d612e130a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0d529a8a-5a38-428e-9abf-35d01fd3ec34","subtype":"Figure","type":"Plot"}},"id":"cda9918e-a08f-4630-ae34-08420090e958","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"9399c70f-faee-434b-8668-2337f6bd97fe","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"0d529a8a-5a38-428e-9abf-35d01fd3ec34","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0e33be3-54a5-4322-a3a8-4d637b953277","type":"BasicTicker"}},"id":"8d0aae21-9135-4688-b5f4-71310819a5b2","type":"Grid"},{"attributes":{},"id":"e1f25ee6-fe83-4c83-a7da-1ea943aeb7c8","type":"BasicTicker"},{"attributes":{"below":[{"id":"383e9768-b4c9-4bba-96f0-36b738286b14","type":"LinearAxis"}],"border_fill_color":{"value":"whitesmoke"},"left":[{"id":"7eb040ce-3458-41e4-b9cd-460a0c32cceb","type":"LinearAxis"}],"min_border_left":80,"plot_height":400,"plot_width":400,"renderers":[{"id":"383e9768-b4c9-4bba-96f0-36b738286b14","type":"LinearAxis"},{"id":"6bd85928-3992-4b7d-93a3-a1ae982b3a57","type":"Grid"},{"id":"7eb040ce-3458-41e4-b9cd-460a0c32cceb","type":"LinearAxis"},{"id":"8d0aae21-9135-4688-b5f4-71310819a5b2","type":"Grid"},{"id":"0d1de9a9-aded-48e7-a835-b4e1f1ae689d","type":"BoxAnnotation"},{"id":"a8388f1e-9dfa-4029-a65e-c00f4ad4ee11","type":"GlyphRenderer"}],"title":{"id":"799b995f-ab92-47ee-ab6c-59b8714a9b1c","type":"Title"},"tool_events":{"id":"722fb7aa-0762-44f7-9a19-69cf8ebf8d4b","type":"ToolEvents"},"toolbar":{"id":"5d9321bc-abcc-4688-b50c-699bf00632df","type":"Toolbar"},"x_range":{"id":"9399c70f-faee-434b-8668-2337f6bd97fe","type":"DataRange1d"},"y_range":{"id":"78cea33e-a335-49db-a0d6-e75341338836","type":"DataRange1d"}},"id":"0d529a8a-5a38-428e-9abf-35d01fd3ec34","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"905ae599-7b43-47cb-b143-11ef39732cd6","type":"BasicTickFormatter"},"plot":{"id":"0d529a8a-5a38-428e-9abf-35d01fd3ec34","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1f25ee6-fe83-4c83-a7da-1ea943aeb7c8","type":"BasicTicker"}},"id":"383e9768-b4c9-4bba-96f0-36b738286b14","type":"LinearAxis"},{"attributes":{"formatter":{"id":"33beee69-82b1-403b-a236-618d612e130a","type":"BasicTickFormatter"},"plot":{"id":"0d529a8a-5a38-428e-9abf-35d01fd3ec34","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0e33be3-54a5-4322-a3a8-4d637b953277","type":"BasicTicker"}},"id":"7eb040ce-3458-41e4-b9cd-460a0c32cceb","type":"LinearAxis"},{"attributes":{"plot":{"id":"0d529a8a-5a38-428e-9abf-35d01fd3ec34","subtype":"Figure","type":"Plot"}},"id":"38fc305d-e7a4-47a6-b6ac-376b4bfbc7d3","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"38c91c21-a5d4-48fd-a189-9b56898c8d72","type":"Circle"},{"attributes":{"plot":{"id":"0d529a8a-5a38-428e-9abf-35d01fd3ec34","subtype":"Figure","type":"Plot"}},"id":"709ebe95-9326-4e6b-86bf-d0636987fbce","type":"HelpTool"},{"attributes":{},"id":"f0e33be3-54a5-4322-a3a8-4d637b953277","type":"BasicTicker"},{"attributes":{"plot":null,"text":null},"id":"799b995f-ab92-47ee-ab6c-59b8714a9b1c","type":"Title"},{"attributes":{"data_source":{"id":"931308ae-41f9-4824-af0b-5f9820166eb8","type":"ColumnDataSource"},"glyph":{"id":"38c91c21-a5d4-48fd-a189-9b56898c8d72","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"dcb724c4-3d70-442d-94a2-373815a534a6","type":"Circle"},"selection_glyph":null},"id":"a8388f1e-9dfa-4029-a65e-c00f4ad4ee11","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"38fc305d-e7a4-47a6-b6ac-376b4bfbc7d3","type":"PanTool"},{"id":"cda9918e-a08f-4630-ae34-08420090e958","type":"WheelZoomTool"},{"id":"56b3724b-80d8-4697-bbd5-53f2b668a933","type":"BoxZoomTool"},{"id":"7196cda7-9d77-4d20-bb0b-4167115a8c04","type":"SaveTool"},{"id":"e73e420f-8c5f-4534-877a-9ae5d42792d9","type":"ResetTool"},{"id":"709ebe95-9326-4e6b-86bf-d0636987fbce","type":"HelpTool"}]},"id":"5d9321bc-abcc-4688-b50c-699bf00632df","type":"Toolbar"},{"attributes":{"plot":{"id":"0d529a8a-5a38-428e-9abf-35d01fd3ec34","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1f25ee6-fe83-4c83-a7da-1ea943aeb7c8","type":"BasicTicker"}},"id":"6bd85928-3992-4b7d-93a3-a1ae982b3a57","type":"Grid"}],"root_ids":["0d529a8a-5a38-428e-9abf-35d01fd3ec34"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"af82ebbb-f1f0-46f5-92bc-dd88f075631e","elementid":"6a28da8b-38d5-49dd-8374-3cdea289140e","modelid":"0d529a8a-5a38-428e-9abf-35d01fd3ec34"}];
              
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