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
      };var element = document.getElementById("08fd3f78-ebdf-4654-8808-aef59e48e21b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '08fd3f78-ebdf-4654-8808-aef59e48e21b' but no matching script tag was found. ")
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
              var docs_json = {"572cab74-b095-4570-bbbd-379abf95ee84":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"92ed73b7-e178-447f-aaf6-b365f0e6aa28","type":"BoxAnnotation"},{"attributes":{},"id":"d0ef6fb2-485a-4db4-8c6b-237ea74d3714","type":"BasicTicker"},{"attributes":{"plot":{"id":"c9b0047f-550a-4324-90c5-3ddbc4333a52","subtype":"Figure","type":"Plot"}},"id":"b6e0a0b7-27b7-45b4-8b1f-272a846fd524","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d6f57a9f-4c61-49ae-b5c4-f35ce0060c2a","type":"Circle"},{"attributes":{"below":[{"id":"00b5e1c7-c169-4539-9b83-b37abd864cae","type":"LinearAxis"}],"left":[{"id":"9c69f5b9-bd6c-4004-a35e-7a2667c55ee9","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"00b5e1c7-c169-4539-9b83-b37abd864cae","type":"LinearAxis"},{"id":"241b3e18-dd8f-4a37-ae74-60bb369432ad","type":"Grid"},{"id":"9c69f5b9-bd6c-4004-a35e-7a2667c55ee9","type":"LinearAxis"},{"id":"88b18575-55ed-4ead-a629-5cd8cd85d5ef","type":"Grid"},{"id":"92ed73b7-e178-447f-aaf6-b365f0e6aa28","type":"BoxAnnotation"},{"id":"63476d27-a435-4f4a-bf2d-38d7cc8bae0c","type":"GlyphRenderer"}],"title":{"id":"137842fe-0c68-4da8-a36d-d7b17568dd59","type":"Title"},"tool_events":{"id":"4ea1bcfb-0a81-4627-8512-c0fa8ea4d642","type":"ToolEvents"},"toolbar":{"id":"6a220bb9-b954-4b7c-aa06-50c3b76cfdb1","type":"Toolbar"},"toolbar_location":"below","x_range":{"id":"fde48e54-82c6-44ef-8776-0a136d101fee","type":"DataRange1d"},"y_range":{"id":"6f73dfe7-a26d-4d49-a82a-f008902fa583","type":"DataRange1d"}},"id":"c9b0047f-550a-4324-90c5-3ddbc4333a52","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"c9b0047f-550a-4324-90c5-3ddbc4333a52","subtype":"Figure","type":"Plot"}},"id":"4a8cdf86-f754-4899-8709-c8499a9071e9","type":"HelpTool"},{"attributes":{},"id":"d75dd0d6-87b5-4792-91bc-63e871ddf113","type":"BasicTicker"},{"attributes":{"plot":{"id":"c9b0047f-550a-4324-90c5-3ddbc4333a52","subtype":"Figure","type":"Plot"}},"id":"8a93614f-03e0-4239-9730-a5ebf7b150bb","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b93894cb-8937-4d82-93cd-19e9a6def2c6","type":"PanTool"},{"id":"b6e0a0b7-27b7-45b4-8b1f-272a846fd524","type":"WheelZoomTool"},{"id":"5711dc1b-d5eb-4cca-9c0b-d22f515b97b7","type":"BoxZoomTool"},{"id":"8a93614f-03e0-4239-9730-a5ebf7b150bb","type":"SaveTool"},{"id":"421bfe3a-0493-4def-b660-28fb216ddf2d","type":"ResetTool"},{"id":"4a8cdf86-f754-4899-8709-c8499a9071e9","type":"HelpTool"}]},"id":"6a220bb9-b954-4b7c-aa06-50c3b76cfdb1","type":"Toolbar"},{"attributes":{"callback":null},"id":"fde48e54-82c6-44ef-8776-0a136d101fee","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9c33e970-3c09-451a-b77b-037d3e153e7a","type":"Circle"},{"attributes":{"plot":{"id":"c9b0047f-550a-4324-90c5-3ddbc4333a52","subtype":"Figure","type":"Plot"}},"id":"b93894cb-8937-4d82-93cd-19e9a6def2c6","type":"PanTool"},{"attributes":{},"id":"e3fccecf-51be-4d89-9b3c-390252662dfe","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"e3fccecf-51be-4d89-9b3c-390252662dfe","type":"BasicTickFormatter"},"plot":{"id":"c9b0047f-550a-4324-90c5-3ddbc4333a52","subtype":"Figure","type":"Plot"},"ticker":{"id":"d75dd0d6-87b5-4792-91bc-63e871ddf113","type":"BasicTicker"}},"id":"00b5e1c7-c169-4539-9b83-b37abd864cae","type":"LinearAxis"},{"attributes":{},"id":"4ea1bcfb-0a81-4627-8512-c0fa8ea4d642","type":"ToolEvents"},{"attributes":{"overlay":{"id":"92ed73b7-e178-447f-aaf6-b365f0e6aa28","type":"BoxAnnotation"},"plot":{"id":"c9b0047f-550a-4324-90c5-3ddbc4333a52","subtype":"Figure","type":"Plot"}},"id":"5711dc1b-d5eb-4cca-9c0b-d22f515b97b7","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"c9b0047f-550a-4324-90c5-3ddbc4333a52","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0ef6fb2-485a-4db4-8c6b-237ea74d3714","type":"BasicTicker"}},"id":"88b18575-55ed-4ead-a629-5cd8cd85d5ef","type":"Grid"},{"attributes":{},"id":"dc8bff61-2c92-4780-acb2-aac216846048","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"6f73dfe7-a26d-4d49-a82a-f008902fa583","type":"DataRange1d"},{"attributes":{"plot":{"id":"c9b0047f-550a-4324-90c5-3ddbc4333a52","subtype":"Figure","type":"Plot"}},"id":"421bfe3a-0493-4def-b660-28fb216ddf2d","type":"ResetTool"},{"attributes":{"formatter":{"id":"dc8bff61-2c92-4780-acb2-aac216846048","type":"BasicTickFormatter"},"plot":{"id":"c9b0047f-550a-4324-90c5-3ddbc4333a52","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0ef6fb2-485a-4db4-8c6b-237ea74d3714","type":"BasicTicker"}},"id":"9c69f5b9-bd6c-4004-a35e-7a2667c55ee9","type":"LinearAxis"},{"attributes":{"plot":{"id":"c9b0047f-550a-4324-90c5-3ddbc4333a52","subtype":"Figure","type":"Plot"},"ticker":{"id":"d75dd0d6-87b5-4792-91bc-63e871ddf113","type":"BasicTicker"}},"id":"241b3e18-dd8f-4a37-ae74-60bb369432ad","type":"Grid"},{"attributes":{"data_source":{"id":"b5b5f2dc-25fe-4b1b-a520-f5d6a8d5111a","type":"ColumnDataSource"},"glyph":{"id":"9c33e970-3c09-451a-b77b-037d3e153e7a","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"d6f57a9f-4c61-49ae-b5c4-f35ce0060c2a","type":"Circle"},"selection_glyph":null},"id":"63476d27-a435-4f4a-bf2d-38d7cc8bae0c","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":null},"id":"137842fe-0c68-4da8-a36d-d7b17568dd59","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"b5b5f2dc-25fe-4b1b-a520-f5d6a8d5111a","type":"ColumnDataSource"}],"root_ids":["c9b0047f-550a-4324-90c5-3ddbc4333a52"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"572cab74-b095-4570-bbbd-379abf95ee84","elementid":"08fd3f78-ebdf-4654-8808-aef59e48e21b","modelid":"c9b0047f-550a-4324-90c5-3ddbc4333a52"}];
              
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