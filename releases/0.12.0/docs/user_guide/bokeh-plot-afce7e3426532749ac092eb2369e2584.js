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
      };var element = document.getElementById("6fb142ab-720e-4c91-8ed6-770d66272c43");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6fb142ab-720e-4c91-8ed6-770d66272c43' but no matching script tag was found. ")
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
              var docs_json = {"d5bae608-4792-4ac1-b4d3-ed615b847a03":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f12efd86-b9dc-40c9-ac07-519ca2208012","type":"PanTool"},{"id":"bb27db12-4036-4228-aaa1-7f6ac84020f1","type":"WheelZoomTool"},{"id":"a57ea4e7-9875-4695-bacc-826d0503c243","type":"BoxZoomTool"},{"id":"e15f0ba8-6a25-4b37-a246-db49cdb7f0e3","type":"SaveTool"},{"id":"29eacd24-1b14-40e8-97a1-840102e6abf5","type":"ResetTool"},{"id":"d7e393c6-5a37-4763-9882-74d771103f05","type":"HelpTool"}]},"id":"cc4f7c2f-f461-482e-a011-435d8240e993","type":"Toolbar"},{"attributes":{"plot":{"id":"bdeb5b53-7529-41be-aad6-c35300d1057b","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1691c68-f3bf-42b2-8c7c-3e6f66dd60fc","type":"BasicTicker"}},"id":"92b26a62-9276-460a-b1aa-a927e6f8d6bf","type":"Grid"},{"attributes":{"formatter":{"id":"9227b64e-efc4-4c5f-95fd-fb4590424581","type":"BasicTickFormatter"},"plot":{"id":"bdeb5b53-7529-41be-aad6-c35300d1057b","subtype":"Figure","type":"Plot"},"ticker":{"id":"bf3b604d-7b85-4f44-9631-e6a8efe5ee1e","type":"BasicTicker"}},"id":"891bd709-76e9-455c-b082-6b29a1dca283","type":"LinearAxis"},{"attributes":{"callback":null},"id":"bd5d713b-b39c-465f-ae12-3c6f84ee4d61","type":"DataRange1d"},{"attributes":{},"id":"bf3b604d-7b85-4f44-9631-e6a8efe5ee1e","type":"BasicTicker"},{"attributes":{"below":[{"id":"0163826c-a113-4a87-8cb0-9c00babd68ac","type":"LinearAxis"}],"left":[{"id":"891bd709-76e9-455c-b082-6b29a1dca283","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0163826c-a113-4a87-8cb0-9c00babd68ac","type":"LinearAxis"},{"id":"92b26a62-9276-460a-b1aa-a927e6f8d6bf","type":"Grid"},{"id":"891bd709-76e9-455c-b082-6b29a1dca283","type":"LinearAxis"},{"id":"e2dd4c6a-01ba-41a3-9de9-47bb46f59bac","type":"Grid"},{"id":"f2c93126-37c6-4227-96bc-df8100c1b581","type":"BoxAnnotation"},{"id":"6e2a5665-0306-49a7-b78f-7457de6688d4","type":"GlyphRenderer"}],"title":{"id":"50b0aeea-a713-4af1-b5dc-f0beec434eb8","type":"Title"},"tool_events":{"id":"54561bc7-c271-42ed-ae49-a8a777053ac2","type":"ToolEvents"},"toolbar":{"id":"cc4f7c2f-f461-482e-a011-435d8240e993","type":"Toolbar"},"x_range":{"id":"5634cd8c-3c86-4951-8f9b-ddf898342b5c","type":"DataRange1d"},"y_range":{"id":"bd5d713b-b39c-465f-ae12-3c6f84ee4d61","type":"DataRange1d"}},"id":"bdeb5b53-7529-41be-aad6-c35300d1057b","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"bdeb5b53-7529-41be-aad6-c35300d1057b","subtype":"Figure","type":"Plot"}},"id":"29eacd24-1b14-40e8-97a1-840102e6abf5","type":"ResetTool"},{"attributes":{"plot":null,"text":null},"id":"50b0aeea-a713-4af1-b5dc-f0beec434eb8","type":"Title"},{"attributes":{},"id":"9227b64e-efc4-4c5f-95fd-fb4590424581","type":"BasicTickFormatter"},{"attributes":{},"id":"54561bc7-c271-42ed-ae49-a8a777053ac2","type":"ToolEvents"},{"attributes":{"callback":null},"id":"5634cd8c-3c86-4951-8f9b-ddf898342b5c","type":"DataRange1d"},{"attributes":{"formatter":{"id":"95da0c82-9847-4551-a29b-4241479b225f","type":"BasicTickFormatter"},"plot":{"id":"bdeb5b53-7529-41be-aad6-c35300d1057b","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1691c68-f3bf-42b2-8c7c-3e6f66dd60fc","type":"BasicTicker"}},"id":"0163826c-a113-4a87-8cb0-9c00babd68ac","type":"LinearAxis"},{"attributes":{},"id":"95da0c82-9847-4551-a29b-4241479b225f","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc5a61e2-d74b-47e3-be88-3914b8f55588","type":"Patch"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"2e5f17a6-7859-4a65-967d-f201d7ef9551","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"bdeb5b53-7529-41be-aad6-c35300d1057b","subtype":"Figure","type":"Plot"}},"id":"d7e393c6-5a37-4763-9882-74d771103f05","type":"HelpTool"},{"attributes":{"plot":{"id":"bdeb5b53-7529-41be-aad6-c35300d1057b","subtype":"Figure","type":"Plot"}},"id":"f12efd86-b9dc-40c9-ac07-519ca2208012","type":"PanTool"},{"attributes":{"plot":{"id":"bdeb5b53-7529-41be-aad6-c35300d1057b","subtype":"Figure","type":"Plot"}},"id":"e15f0ba8-6a25-4b37-a246-db49cdb7f0e3","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"38b825bb-c737-4437-a06d-1fc3076d6b7b","type":"Patch"},{"attributes":{},"id":"f1691c68-f3bf-42b2-8c7c-3e6f66dd60fc","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2e5f17a6-7859-4a65-967d-f201d7ef9551","type":"ColumnDataSource"},"glyph":{"id":"38b825bb-c737-4437-a06d-1fc3076d6b7b","type":"Patch"},"hover_glyph":null,"nonselection_glyph":{"id":"dc5a61e2-d74b-47e3-be88-3914b8f55588","type":"Patch"},"selection_glyph":null},"id":"6e2a5665-0306-49a7-b78f-7457de6688d4","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"bdeb5b53-7529-41be-aad6-c35300d1057b","subtype":"Figure","type":"Plot"}},"id":"bb27db12-4036-4228-aaa1-7f6ac84020f1","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"bdeb5b53-7529-41be-aad6-c35300d1057b","subtype":"Figure","type":"Plot"},"ticker":{"id":"bf3b604d-7b85-4f44-9631-e6a8efe5ee1e","type":"BasicTicker"}},"id":"e2dd4c6a-01ba-41a3-9de9-47bb46f59bac","type":"Grid"},{"attributes":{"overlay":{"id":"f2c93126-37c6-4227-96bc-df8100c1b581","type":"BoxAnnotation"},"plot":{"id":"bdeb5b53-7529-41be-aad6-c35300d1057b","subtype":"Figure","type":"Plot"}},"id":"a57ea4e7-9875-4695-bacc-826d0503c243","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f2c93126-37c6-4227-96bc-df8100c1b581","type":"BoxAnnotation"}],"root_ids":["bdeb5b53-7529-41be-aad6-c35300d1057b"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"d5bae608-4792-4ac1-b4d3-ed615b847a03","elementid":"6fb142ab-720e-4c91-8ed6-770d66272c43","modelid":"bdeb5b53-7529-41be-aad6-c35300d1057b"}];
              
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