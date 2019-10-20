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
      };var element = document.getElementById("900fdbf7-5d65-4987-8e57-de9efb4c3ee0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '900fdbf7-5d65-4987-8e57-de9efb4c3ee0' but no matching script tag was found. ")
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
              var docs_json = {"07c02079-caef-46ff-b7f2-0f74325a0c89":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1244195e-f3ca-46e1-8303-e372f0129aca","type":"Circle"},{"attributes":{"plot":{"id":"832f1ea4-3bbc-4ddb-8a7d-38956a378cf3","subtype":"Figure","type":"Plot"}},"id":"07ea4529-9dad-4b52-9338-534a009736ea","type":"PanTool"},{"attributes":{"formatter":{"id":"3ed40d60-47fb-4613-9ac2-0e89f522dd0d","type":"BasicTickFormatter"},"plot":{"id":"832f1ea4-3bbc-4ddb-8a7d-38956a378cf3","subtype":"Figure","type":"Plot"},"ticker":{"id":"b3684c4e-3e39-45d7-8abb-8703fb065bb3","type":"BasicTicker"}},"id":"a09d15f1-61f2-4d5f-b4a3-405c8fc84345","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"a7c20316-0d2f-4b62-a865-614556020e54","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":null},"id":"58f25390-6486-4721-9d7e-a58e4f4b5403","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d2869aec-d9bf-4a4c-8f56-c04a8a7281a3","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"832f1ea4-3bbc-4ddb-8a7d-38956a378cf3","subtype":"Figure","type":"Plot"}},"id":"3004d3a5-d809-40e9-a6fd-90dd38494a77","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"33ccb56d-cd11-4829-9573-a811e5ef9491","type":"BasicTickFormatter"},"plot":{"id":"832f1ea4-3bbc-4ddb-8a7d-38956a378cf3","subtype":"Figure","type":"Plot"},"ticker":{"id":"28eb36d9-1fe0-49a4-a9ef-5b9064a45f51","type":"BasicTicker"}},"id":"21c4fdb2-a3c4-4bff-a5b1-3c145954bbce","type":"LinearAxis"},{"attributes":{"plot":{"id":"832f1ea4-3bbc-4ddb-8a7d-38956a378cf3","subtype":"Figure","type":"Plot"},"ticker":{"id":"28eb36d9-1fe0-49a4-a9ef-5b9064a45f51","type":"BasicTicker"}},"id":"10d5a991-8b4b-4924-8b9a-0eac429bbc17","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"07ea4529-9dad-4b52-9338-534a009736ea","type":"PanTool"},{"id":"3004d3a5-d809-40e9-a6fd-90dd38494a77","type":"WheelZoomTool"},{"id":"bad097ec-6da7-4b36-9b97-12e2bb05f584","type":"BoxZoomTool"},{"id":"5553faa3-4f81-469e-a848-22bde2d88d78","type":"SaveTool"},{"id":"d1c63ab4-fe99-410b-bd59-02e6f739a405","type":"ResetTool"},{"id":"52f118b0-7c22-49d5-a8f1-72d699a03582","type":"HelpTool"}]},"id":"71a8476b-0ce4-4c64-ba95-21a3ebfb9e4f","type":"Toolbar"},{"attributes":{"plot":{"id":"832f1ea4-3bbc-4ddb-8a7d-38956a378cf3","subtype":"Figure","type":"Plot"}},"id":"d1c63ab4-fe99-410b-bd59-02e6f739a405","type":"ResetTool"},{"attributes":{},"id":"2b849f90-1163-4e50-b550-03605fde7176","type":"ToolEvents"},{"attributes":{"plot":{"id":"832f1ea4-3bbc-4ddb-8a7d-38956a378cf3","subtype":"Figure","type":"Plot"}},"id":"5553faa3-4f81-469e-a848-22bde2d88d78","type":"SaveTool"},{"attributes":{},"id":"33ccb56d-cd11-4829-9573-a811e5ef9491","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"96158ef8-9545-49e4-82d9-0cce781b3341","type":"Circle"},{"attributes":{"overlay":{"id":"d2869aec-d9bf-4a4c-8f56-c04a8a7281a3","type":"BoxAnnotation"},"plot":{"id":"832f1ea4-3bbc-4ddb-8a7d-38956a378cf3","subtype":"Figure","type":"Plot"}},"id":"bad097ec-6da7-4b36-9b97-12e2bb05f584","type":"BoxZoomTool"},{"attributes":{},"id":"b3684c4e-3e39-45d7-8abb-8703fb065bb3","type":"BasicTicker"},{"attributes":{"data_source":{"id":"a7c20316-0d2f-4b62-a865-614556020e54","type":"ColumnDataSource"},"glyph":{"id":"1244195e-f3ca-46e1-8303-e372f0129aca","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"96158ef8-9545-49e4-82d9-0cce781b3341","type":"Circle"},"selection_glyph":null},"id":"c9e15ecb-e09c-4407-8d0e-b79ef4d42852","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"832f1ea4-3bbc-4ddb-8a7d-38956a378cf3","subtype":"Figure","type":"Plot"}},"id":"52f118b0-7c22-49d5-a8f1-72d699a03582","type":"HelpTool"},{"attributes":{},"id":"28eb36d9-1fe0-49a4-a9ef-5b9064a45f51","type":"BasicTicker"},{"attributes":{"callback":null},"id":"e3797729-22f6-4093-9c8b-93871a3029f4","type":"DataRange1d"},{"attributes":{"below":[{"id":"21c4fdb2-a3c4-4bff-a5b1-3c145954bbce","type":"LinearAxis"}],"left":[{"id":"a09d15f1-61f2-4d5f-b4a3-405c8fc84345","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"21c4fdb2-a3c4-4bff-a5b1-3c145954bbce","type":"LinearAxis"},{"id":"10d5a991-8b4b-4924-8b9a-0eac429bbc17","type":"Grid"},{"id":"a09d15f1-61f2-4d5f-b4a3-405c8fc84345","type":"LinearAxis"},{"id":"2bc99622-2712-4975-96cf-8f241dea8c74","type":"Grid"},{"id":"d2869aec-d9bf-4a4c-8f56-c04a8a7281a3","type":"BoxAnnotation"},{"id":"c9e15ecb-e09c-4407-8d0e-b79ef4d42852","type":"GlyphRenderer"}],"title":{"id":"58f25390-6486-4721-9d7e-a58e4f4b5403","type":"Title"},"tool_events":{"id":"2b849f90-1163-4e50-b550-03605fde7176","type":"ToolEvents"},"toolbar":{"id":"71a8476b-0ce4-4c64-ba95-21a3ebfb9e4f","type":"Toolbar"},"toolbar_location":"below","toolbar_sticky":false,"x_range":{"id":"e3797729-22f6-4093-9c8b-93871a3029f4","type":"DataRange1d"},"y_range":{"id":"4db35c86-52eb-47f5-9db6-99370216501b","type":"DataRange1d"}},"id":"832f1ea4-3bbc-4ddb-8a7d-38956a378cf3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3ed40d60-47fb-4613-9ac2-0e89f522dd0d","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"4db35c86-52eb-47f5-9db6-99370216501b","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"832f1ea4-3bbc-4ddb-8a7d-38956a378cf3","subtype":"Figure","type":"Plot"},"ticker":{"id":"b3684c4e-3e39-45d7-8abb-8703fb065bb3","type":"BasicTicker"}},"id":"2bc99622-2712-4975-96cf-8f241dea8c74","type":"Grid"}],"root_ids":["832f1ea4-3bbc-4ddb-8a7d-38956a378cf3"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"07c02079-caef-46ff-b7f2-0f74325a0c89","elementid":"900fdbf7-5d65-4987-8e57-de9efb4c3ee0","modelid":"832f1ea4-3bbc-4ddb-8a7d-38956a378cf3"}];
              
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