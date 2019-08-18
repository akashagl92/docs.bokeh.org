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
      };var element = document.getElementById("f0e162c2-5829-4a10-9d4d-ed75abe3b417");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f0e162c2-5829-4a10-9d4d-ed75abe3b417' but no matching script tag was found. ")
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
              var docs_json = {"806e3cc5-a99a-4c51-a1d8-d477990e25aa":{"roots":{"references":[{"attributes":{"callback":null,"plot":{"id":"ced07308-965f-4678-bc0d-1d7d01de98b8","subtype":"Figure","type":"Plot"}},"id":"7e9a002e-e083-4468-ad23-92ab2d8db449","type":"TapTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7e9a002e-e083-4468-ad23-92ab2d8db449","type":"TapTool"}]},"id":"e534ade9-345b-4bdb-8891-fc4b2dd71a12","type":"Toolbar"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":null}},"id":"3d39f736-2892-40f1-8395-cab2a823f298","type":"Circle"},{"attributes":{},"id":"a512b937-71a8-49cb-a275-a5a55f9f7b7d","type":"BasicTickFormatter"},{"attributes":{},"id":"e184967c-835c-491c-8d44-7cba41226fc9","type":"BasicTicker"},{"attributes":{"plot":{"id":"ced07308-965f-4678-bc0d-1d7d01de98b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"e184967c-835c-491c-8d44-7cba41226fc9","type":"BasicTicker"}},"id":"1d0c68db-4c65-471c-9dd0-8be7657e555f","type":"Grid"},{"attributes":{},"id":"585b81b4-e2d3-4c0c-a66d-7b6b1f82f99f","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"ced07308-965f-4678-bc0d-1d7d01de98b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"481903e8-acfc-4758-b6eb-1ecf9479e2fb","type":"BasicTicker"}},"id":"00da3d48-c015-4ba8-b59e-cc68a20fbf88","type":"Grid"},{"attributes":{},"id":"14587620-a742-48a5-b86b-c895685aeb55","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"495a7bbf-b630-4055-9a38-d14cc75944ea","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Select a circle"},"id":"41bebe9a-7200-424a-a1a2-73f1d80f2241","type":"Title"},{"attributes":{"data_source":{"id":"7d1279fe-5806-43bd-807b-afe88641f1d8","type":"ColumnDataSource"},"glyph":{"id":"e8bc2efa-06a9-424c-8745-aad306283ad9","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"931fb79d-2e80-48c3-b28c-ba333595491d","type":"Circle"},"selection_glyph":{"id":"3d39f736-2892-40f1-8395-cab2a823f298","type":"Circle"}},"id":"2e0eea78-5dc1-4964-8cef-3f58d64ef9f0","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"205b26dd-191e-4249-be8c-17cffb1a6b68","type":"DataRange1d"},{"attributes":{"below":[{"id":"905a931c-6ba8-4f28-80ba-d098aca842ed","type":"LinearAxis"}],"left":[{"id":"d835e75e-728b-4e27-9f5d-27681fbab735","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"905a931c-6ba8-4f28-80ba-d098aca842ed","type":"LinearAxis"},{"id":"1d0c68db-4c65-471c-9dd0-8be7657e555f","type":"Grid"},{"id":"d835e75e-728b-4e27-9f5d-27681fbab735","type":"LinearAxis"},{"id":"00da3d48-c015-4ba8-b59e-cc68a20fbf88","type":"Grid"},{"id":"2e0eea78-5dc1-4964-8cef-3f58d64ef9f0","type":"GlyphRenderer"}],"title":{"id":"41bebe9a-7200-424a-a1a2-73f1d80f2241","type":"Title"},"tool_events":{"id":"585b81b4-e2d3-4c0c-a66d-7b6b1f82f99f","type":"ToolEvents"},"toolbar":{"id":"e534ade9-345b-4bdb-8891-fc4b2dd71a12","type":"Toolbar"},"x_range":{"id":"205b26dd-191e-4249-be8c-17cffb1a6b68","type":"DataRange1d"},"y_range":{"id":"495a7bbf-b630-4055-9a38-d14cc75944ea","type":"DataRange1d"}},"id":"ced07308-965f-4678-bc0d-1d7d01de98b8","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"481903e8-acfc-4758-b6eb-1ecf9479e2fb","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a512b937-71a8-49cb-a275-a5a55f9f7b7d","type":"BasicTickFormatter"},"plot":{"id":"ced07308-965f-4678-bc0d-1d7d01de98b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"e184967c-835c-491c-8d44-7cba41226fc9","type":"BasicTicker"}},"id":"905a931c-6ba8-4f28-80ba-d098aca842ed","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"}},"id":"931fb79d-2e80-48c3-b28c-ba333595491d","type":"Circle"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"7d1279fe-5806-43bd-807b-afe88641f1d8","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"14587620-a742-48a5-b86b-c895685aeb55","type":"BasicTickFormatter"},"plot":{"id":"ced07308-965f-4678-bc0d-1d7d01de98b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"481903e8-acfc-4758-b6eb-1ecf9479e2fb","type":"BasicTicker"}},"id":"d835e75e-728b-4e27-9f5d-27681fbab735","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"e8bc2efa-06a9-424c-8745-aad306283ad9","type":"Circle"}],"root_ids":["ced07308-965f-4678-bc0d-1d7d01de98b8"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"806e3cc5-a99a-4c51-a1d8-d477990e25aa","elementid":"f0e162c2-5829-4a10-9d4d-ed75abe3b417","modelid":"ced07308-965f-4678-bc0d-1d7d01de98b8"}];
              
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