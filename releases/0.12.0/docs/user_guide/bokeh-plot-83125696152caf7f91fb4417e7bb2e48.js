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
      };var element = document.getElementById("5f4fb480-71ba-49f9-a6b5-493988e6591e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5f4fb480-71ba-49f9-a6b5-493988e6591e' but no matching script tag was found. ")
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
              var docs_json = {"b8635b3c-a89b-4ee8-81b2-5ce3576ab5e6":{"roots":{"references":[{"attributes":{"plot":null,"text":null},"id":"08bb1578-160a-4128-80ca-c10b654b2ceb","type":"Title"},{"attributes":{"formatter":{"id":"4870b346-079a-408c-ab05-4c869fdbc586","type":"BasicTickFormatter"},"plot":{"id":"918bf4c2-2dcf-4a6c-8276-dba184594fd1","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbcbaf31-ca52-4f92-9b86-5f0319af1892","type":"BasicTicker"}},"id":"656cf407-e314-4df4-912d-40a5bcfa0ec8","type":"LinearAxis"},{"attributes":{"data_source":{"id":"0534693a-b7d5-4efc-9d18-4c80ffd5a4a5","type":"ColumnDataSource"},"glyph":{"id":"4fac010d-26e0-4c70-a67e-badfe82e0d9e","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":{"id":"a4ed58e3-99c0-4e03-b844-7e993a8024cc","type":"AnnularWedge"},"selection_glyph":null},"id":"7617ab12-ac32-4e4e-9a58-75c2bc926526","type":"GlyphRenderer"},{"attributes":{},"id":"4870b346-079a-408c-ab05-4c869fdbc586","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0fdefe14-c265-464f-bd77-562283614691","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1c6e42a8-1d57-4b0d-8eb9-2888f0f3b66f","type":"PanTool"},{"id":"dcf9df87-aeba-44dd-98af-8555cd74f7c9","type":"WheelZoomTool"},{"id":"2cc6b71a-c443-4ddb-bcad-ef1aef80b65e","type":"BoxZoomTool"},{"id":"dc2d2878-d3a2-4d27-bb88-9e3cf74a62d8","type":"SaveTool"},{"id":"9125e467-5db4-4954-95d7-6282519eb4da","type":"ResetTool"},{"id":"e9b62469-cfe1-41e0-b441-c7723ffe2127","type":"HelpTool"}]},"id":"3ea78d8e-823c-4d29-88f4-a6e449282f3f","type":"Toolbar"},{"attributes":{"plot":{"id":"918bf4c2-2dcf-4a6c-8276-dba184594fd1","subtype":"Figure","type":"Plot"}},"id":"1c6e42a8-1d57-4b0d-8eb9-2888f0f3b66f","type":"PanTool"},{"attributes":{"callback":null},"id":"03c86f05-f984-456b-ac68-24037d7efc51","type":"DataRange1d"},{"attributes":{"callback":null},"id":"8b45ebd1-cbc9-4293-b992-11ce300ea054","type":"DataRange1d"},{"attributes":{"plot":{"id":"918bf4c2-2dcf-4a6c-8276-dba184594fd1","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbcbaf31-ca52-4f92-9b86-5f0319af1892","type":"BasicTicker"}},"id":"70b6a3da-b8cf-4526-a2d6-3354a0889155","type":"Grid"},{"attributes":{},"id":"b13929e9-c16a-498f-917c-c9f5fa859019","type":"ToolEvents"},{"attributes":{"overlay":{"id":"0fdefe14-c265-464f-bd77-562283614691","type":"BoxAnnotation"},"plot":{"id":"918bf4c2-2dcf-4a6c-8276-dba184594fd1","subtype":"Figure","type":"Plot"}},"id":"2cc6b71a-c443-4ddb-bcad-ef1aef80b65e","type":"BoxZoomTool"},{"attributes":{},"id":"f6b91eb2-e0bb-4498-b76c-9c3cccb7603c","type":"BasicTickFormatter"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"a4ed58e3-99c0-4e03-b844-7e993a8024cc","type":"AnnularWedge"},{"attributes":{"plot":{"id":"918bf4c2-2dcf-4a6c-8276-dba184594fd1","subtype":"Figure","type":"Plot"}},"id":"9125e467-5db4-4954-95d7-6282519eb4da","type":"ResetTool"},{"attributes":{},"id":"bbcbaf31-ca52-4f92-9b86-5f0319af1892","type":"BasicTicker"},{"attributes":{"plot":{"id":"918bf4c2-2dcf-4a6c-8276-dba184594fd1","subtype":"Figure","type":"Plot"}},"id":"dc2d2878-d3a2-4d27-bb88-9e3cf74a62d8","type":"SaveTool"},{"attributes":{"formatter":{"id":"f6b91eb2-e0bb-4498-b76c-9c3cccb7603c","type":"BasicTickFormatter"},"plot":{"id":"918bf4c2-2dcf-4a6c-8276-dba184594fd1","subtype":"Figure","type":"Plot"},"ticker":{"id":"c5bb39a0-0910-4a6d-a040-31b97832301a","type":"BasicTicker"}},"id":"549fd824-9a14-452b-af35-c2fecd3b8e81","type":"LinearAxis"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"green"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"green"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"4fac010d-26e0-4c70-a67e-badfe82e0d9e","type":"AnnularWedge"},{"attributes":{"plot":{"id":"918bf4c2-2dcf-4a6c-8276-dba184594fd1","subtype":"Figure","type":"Plot"}},"id":"e9b62469-cfe1-41e0-b441-c7723ffe2127","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"918bf4c2-2dcf-4a6c-8276-dba184594fd1","subtype":"Figure","type":"Plot"},"ticker":{"id":"c5bb39a0-0910-4a6d-a040-31b97832301a","type":"BasicTicker"}},"id":"9d541f1f-97fc-461a-baad-5993b528b3d6","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"0534693a-b7d5-4efc-9d18-4c80ffd5a4a5","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"656cf407-e314-4df4-912d-40a5bcfa0ec8","type":"LinearAxis"}],"left":[{"id":"549fd824-9a14-452b-af35-c2fecd3b8e81","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"656cf407-e314-4df4-912d-40a5bcfa0ec8","type":"LinearAxis"},{"id":"70b6a3da-b8cf-4526-a2d6-3354a0889155","type":"Grid"},{"id":"549fd824-9a14-452b-af35-c2fecd3b8e81","type":"LinearAxis"},{"id":"9d541f1f-97fc-461a-baad-5993b528b3d6","type":"Grid"},{"id":"0fdefe14-c265-464f-bd77-562283614691","type":"BoxAnnotation"},{"id":"7617ab12-ac32-4e4e-9a58-75c2bc926526","type":"GlyphRenderer"}],"title":{"id":"08bb1578-160a-4128-80ca-c10b654b2ceb","type":"Title"},"tool_events":{"id":"b13929e9-c16a-498f-917c-c9f5fa859019","type":"ToolEvents"},"toolbar":{"id":"3ea78d8e-823c-4d29-88f4-a6e449282f3f","type":"Toolbar"},"x_range":{"id":"8b45ebd1-cbc9-4293-b992-11ce300ea054","type":"DataRange1d"},"y_range":{"id":"03c86f05-f984-456b-ac68-24037d7efc51","type":"DataRange1d"}},"id":"918bf4c2-2dcf-4a6c-8276-dba184594fd1","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"918bf4c2-2dcf-4a6c-8276-dba184594fd1","subtype":"Figure","type":"Plot"}},"id":"dcf9df87-aeba-44dd-98af-8555cd74f7c9","type":"WheelZoomTool"},{"attributes":{},"id":"c5bb39a0-0910-4a6d-a040-31b97832301a","type":"BasicTicker"}],"root_ids":["918bf4c2-2dcf-4a6c-8276-dba184594fd1"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"b8635b3c-a89b-4ee8-81b2-5ce3576ab5e6","elementid":"5f4fb480-71ba-49f9-a6b5-493988e6591e","modelid":"918bf4c2-2dcf-4a6c-8276-dba184594fd1"}];
              
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