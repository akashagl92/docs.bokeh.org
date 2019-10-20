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
      };var element = document.getElementById("ede66bac-5bf7-47d5-ae88-e8802907d8c7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ede66bac-5bf7-47d5-ae88-e8802907d8c7' but no matching script tag was found. ")
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
              var docs_json = {"2524e77b-abf8-490e-a5c8-577ad669eb32":{"roots":{"references":[{"attributes":{"plot":{"id":"0a9738c3-855d-4216-aaa6-08ebf0b98e63","subtype":"Figure","type":"Plot"},"ticker":{"id":"db00eae2-df33-4654-9aaa-09c2e633541a","type":"BasicTicker"}},"id":"2a93bc45-9e46-4cbd-905b-03e073565306","type":"Grid"},{"attributes":{},"id":"7316bbf4-4fc5-4d30-ac09-2d2aaf6cbdb6","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["top","left","right","bottom"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"598a9de0-b29c-48eb-a4d8-b8870753241f","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"eb96b55f-2e75-452c-bfe6-9d1f50fed4c1","type":"Quad"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9d34880e-0029-4f4e-82e3-2c4df6a77fff","type":"PanTool"},{"id":"34d0c7a2-af9b-449e-9d0f-701bb422d6cd","type":"WheelZoomTool"},{"id":"2d93ae85-ee20-417d-a7a0-562df54937cd","type":"BoxZoomTool"},{"id":"9891d1a6-9b1e-4ed7-aebe-b73450370013","type":"SaveTool"},{"id":"e3f8f2a0-9f3e-4aca-b4e3-e98f8227afe0","type":"ResetTool"},{"id":"f74ce45b-1fc9-4db0-b5af-1623c36b1b1a","type":"HelpTool"}]},"id":"e8ea21a5-fb62-47d0-8644-d09e2eedf598","type":"Toolbar"},{"attributes":{"plot":{"id":"0a9738c3-855d-4216-aaa6-08ebf0b98e63","subtype":"Figure","type":"Plot"}},"id":"9891d1a6-9b1e-4ed7-aebe-b73450370013","type":"SaveTool"},{"attributes":{},"id":"feba1414-c1e7-4877-a218-830a192f4d59","type":"BasicTicker"},{"attributes":{},"id":"db00eae2-df33-4654-9aaa-09c2e633541a","type":"BasicTicker"},{"attributes":{"plot":{"id":"0a9738c3-855d-4216-aaa6-08ebf0b98e63","subtype":"Figure","type":"Plot"}},"id":"9d34880e-0029-4f4e-82e3-2c4df6a77fff","type":"PanTool"},{"attributes":{"formatter":{"id":"bf21bcc1-4c07-424b-b2ac-c878a19dd2af","type":"BasicTickFormatter"},"plot":{"id":"0a9738c3-855d-4216-aaa6-08ebf0b98e63","subtype":"Figure","type":"Plot"},"ticker":{"id":"feba1414-c1e7-4877-a218-830a192f4d59","type":"BasicTicker"}},"id":"deade4ac-f7b9-44db-84da-c26001760dc0","type":"LinearAxis"},{"attributes":{"formatter":{"id":"7316bbf4-4fc5-4d30-ac09-2d2aaf6cbdb6","type":"BasicTickFormatter"},"plot":{"id":"0a9738c3-855d-4216-aaa6-08ebf0b98e63","subtype":"Figure","type":"Plot"},"ticker":{"id":"db00eae2-df33-4654-9aaa-09c2e633541a","type":"BasicTicker"}},"id":"7ce876ba-aa0b-4959-8c11-552a40ba592a","type":"LinearAxis"},{"attributes":{"callback":null},"id":"299302d1-6066-4b38-bb1b-c327fdabaabb","type":"DataRange1d"},{"attributes":{},"id":"ef6391ee-761e-4f74-a122-577298a075fd","type":"ToolEvents"},{"attributes":{"callback":null},"id":"b6c0eb9d-173b-4e33-943f-ded8cb4ba9e5","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7d8e57d6-7cf6-42d3-a6d8-289fef7a970c","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"7d8e57d6-7cf6-42d3-a6d8-289fef7a970c","type":"BoxAnnotation"},"plot":{"id":"0a9738c3-855d-4216-aaa6-08ebf0b98e63","subtype":"Figure","type":"Plot"}},"id":"2d93ae85-ee20-417d-a7a0-562df54937cd","type":"BoxZoomTool"},{"attributes":{},"id":"bf21bcc1-4c07-424b-b2ac-c878a19dd2af","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"0a9738c3-855d-4216-aaa6-08ebf0b98e63","subtype":"Figure","type":"Plot"},"ticker":{"id":"feba1414-c1e7-4877-a218-830a192f4d59","type":"BasicTicker"}},"id":"99f22059-b51a-4f67-8030-9e19249ce016","type":"Grid"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"cc56e4b1-6590-43ab-b694-99ce0575f270","type":"Quad"},{"attributes":{"data_source":{"id":"598a9de0-b29c-48eb-a4d8-b8870753241f","type":"ColumnDataSource"},"glyph":{"id":"eb96b55f-2e75-452c-bfe6-9d1f50fed4c1","type":"Quad"},"hover_glyph":null,"nonselection_glyph":{"id":"cc56e4b1-6590-43ab-b694-99ce0575f270","type":"Quad"},"selection_glyph":null},"id":"69328222-e236-4e16-a0f0-7a8acca32984","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"0a9738c3-855d-4216-aaa6-08ebf0b98e63","subtype":"Figure","type":"Plot"}},"id":"e3f8f2a0-9f3e-4aca-b4e3-e98f8227afe0","type":"ResetTool"},{"attributes":{"below":[{"id":"7ce876ba-aa0b-4959-8c11-552a40ba592a","type":"LinearAxis"}],"left":[{"id":"deade4ac-f7b9-44db-84da-c26001760dc0","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"7ce876ba-aa0b-4959-8c11-552a40ba592a","type":"LinearAxis"},{"id":"2a93bc45-9e46-4cbd-905b-03e073565306","type":"Grid"},{"id":"deade4ac-f7b9-44db-84da-c26001760dc0","type":"LinearAxis"},{"id":"99f22059-b51a-4f67-8030-9e19249ce016","type":"Grid"},{"id":"7d8e57d6-7cf6-42d3-a6d8-289fef7a970c","type":"BoxAnnotation"},{"id":"69328222-e236-4e16-a0f0-7a8acca32984","type":"GlyphRenderer"}],"title":{"id":"d4d10bb7-89b7-436c-a71b-c9098e8b45f9","type":"Title"},"tool_events":{"id":"ef6391ee-761e-4f74-a122-577298a075fd","type":"ToolEvents"},"toolbar":{"id":"e8ea21a5-fb62-47d0-8644-d09e2eedf598","type":"Toolbar"},"x_range":{"id":"299302d1-6066-4b38-bb1b-c327fdabaabb","type":"DataRange1d"},"y_range":{"id":"b6c0eb9d-173b-4e33-943f-ded8cb4ba9e5","type":"DataRange1d"}},"id":"0a9738c3-855d-4216-aaa6-08ebf0b98e63","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"0a9738c3-855d-4216-aaa6-08ebf0b98e63","subtype":"Figure","type":"Plot"}},"id":"f74ce45b-1fc9-4db0-b5af-1623c36b1b1a","type":"HelpTool"},{"attributes":{"plot":null,"text":null},"id":"d4d10bb7-89b7-436c-a71b-c9098e8b45f9","type":"Title"},{"attributes":{"plot":{"id":"0a9738c3-855d-4216-aaa6-08ebf0b98e63","subtype":"Figure","type":"Plot"}},"id":"34d0c7a2-af9b-449e-9d0f-701bb422d6cd","type":"WheelZoomTool"}],"root_ids":["0a9738c3-855d-4216-aaa6-08ebf0b98e63"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"2524e77b-abf8-490e-a5c8-577ad669eb32","elementid":"ede66bac-5bf7-47d5-ae88-e8802907d8c7","modelid":"0a9738c3-855d-4216-aaa6-08ebf0b98e63"}];
              
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