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
      };var element = document.getElementById("68ccfbc5-a406-43ff-b5d7-12b981e5d8e8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '68ccfbc5-a406-43ff-b5d7-12b981e5d8e8' but no matching script tag was found. ")
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
              var docs_json = {"2850fbea-7107-4d5d-9c85-b5a1c2579e73":{"roots":{"references":[{"attributes":{},"id":"e1c1e044-94f8-4c31-a17e-53a981e202c2","type":"ToolEvents"},{"attributes":{"plot":{"id":"c56a70a9-d2a4-42d0-82ab-3fa585badcfd","subtype":"Figure","type":"Plot"}},"id":"055c282a-4656-496f-aa6a-c54906ed45da","type":"WheelZoomTool"},{"attributes":{"axis_label":"y","formatter":{"id":"6faec395-7c17-4ef6-a01a-17228ff55139","type":"BasicTickFormatter"},"plot":{"id":"c56a70a9-d2a4-42d0-82ab-3fa585badcfd","subtype":"Figure","type":"Plot"},"ticker":{"id":"091ca30b-abc9-4267-9117-a547376b1c86","type":"BasicTicker"}},"id":"c72788c1-7e9a-4b94-9293-6675c9872db4","type":"LinearAxis"},{"attributes":{"overlay":{"id":"4025730a-0dcd-449c-a323-7353087a272b","type":"BoxAnnotation"},"plot":{"id":"c56a70a9-d2a4-42d0-82ab-3fa585badcfd","subtype":"Figure","type":"Plot"}},"id":"3441ed84-b1ff-4e68-b416-937456f35868","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"c56a70a9-d2a4-42d0-82ab-3fa585badcfd","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f4cf590-74cb-4188-8733-f0e4818f508e","type":"BasicTicker"}},"id":"d740dba7-619e-4fd6-920f-b5de6e95be8d","type":"Grid"},{"attributes":{"legends":[["Temp.",[{"id":"7f1b541e-e1eb-475f-a523-e31d6b089de4","type":"GlyphRenderer"}]]],"plot":{"id":"c56a70a9-d2a4-42d0-82ab-3fa585badcfd","subtype":"Figure","type":"Plot"}},"id":"9215df16-6458-4aaf-b464-e234d90fad9b","type":"Legend"},{"attributes":{"plot":{"id":"c56a70a9-d2a4-42d0-82ab-3fa585badcfd","subtype":"Figure","type":"Plot"}},"id":"89f14b5b-5f1b-4e77-8bfe-13b5e6868527","type":"HelpTool"},{"attributes":{"below":[{"id":"d08cf329-366d-451a-9cf7-737d399cd219","type":"LinearAxis"}],"left":[{"id":"c72788c1-7e9a-4b94-9293-6675c9872db4","type":"LinearAxis"}],"renderers":[{"id":"d08cf329-366d-451a-9cf7-737d399cd219","type":"LinearAxis"},{"id":"d740dba7-619e-4fd6-920f-b5de6e95be8d","type":"Grid"},{"id":"c72788c1-7e9a-4b94-9293-6675c9872db4","type":"LinearAxis"},{"id":"eb107cd2-7b86-4881-88a1-8f54b7166d50","type":"Grid"},{"id":"4025730a-0dcd-449c-a323-7353087a272b","type":"BoxAnnotation"},{"id":"9215df16-6458-4aaf-b464-e234d90fad9b","type":"Legend"},{"id":"7f1b541e-e1eb-475f-a523-e31d6b089de4","type":"GlyphRenderer"}],"title":{"id":"c395eb2d-b03e-4245-abe2-82cbbc04fcc2","type":"Title"},"tool_events":{"id":"e1c1e044-94f8-4c31-a17e-53a981e202c2","type":"ToolEvents"},"toolbar":{"id":"d807459e-209e-40e9-9038-c3e2db822378","type":"Toolbar"},"x_range":{"id":"2e645a80-7604-45e9-888c-25331acb71d2","type":"DataRange1d"},"y_range":{"id":"b51651f1-47b4-4978-a41b-f3ffc113cf39","type":"DataRange1d"}},"id":"c56a70a9-d2a4-42d0-82ab-3fa585badcfd","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"simple line example"},"id":"c395eb2d-b03e-4245-abe2-82cbbc04fcc2","type":"Title"},{"attributes":{},"id":"6faec395-7c17-4ef6-a01a-17228ff55139","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"00b30217-e007-4077-adf7-3508aa7bddd6","type":"PanTool"},{"id":"055c282a-4656-496f-aa6a-c54906ed45da","type":"WheelZoomTool"},{"id":"3441ed84-b1ff-4e68-b416-937456f35868","type":"BoxZoomTool"},{"id":"b0da3c84-a5ec-4102-9422-f7c5f8770e4d","type":"SaveTool"},{"id":"caf6f30c-6adb-4997-a314-7cd52fa31a66","type":"ResetTool"},{"id":"89f14b5b-5f1b-4e77-8bfe-13b5e6868527","type":"HelpTool"}]},"id":"d807459e-209e-40e9-9038-c3e2db822378","type":"Toolbar"},{"attributes":{"plot":{"id":"c56a70a9-d2a4-42d0-82ab-3fa585badcfd","subtype":"Figure","type":"Plot"}},"id":"caf6f30c-6adb-4997-a314-7cd52fa31a66","type":"ResetTool"},{"attributes":{},"id":"091ca30b-abc9-4267-9117-a547376b1c86","type":"BasicTicker"},{"attributes":{},"id":"3f4cf590-74cb-4188-8733-f0e4818f508e","type":"BasicTicker"},{"attributes":{"axis_label":"x","formatter":{"id":"ac3a7fa6-8244-45c6-bfef-70578b89d1fa","type":"BasicTickFormatter"},"plot":{"id":"c56a70a9-d2a4-42d0-82ab-3fa585badcfd","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f4cf590-74cb-4188-8733-f0e4818f508e","type":"BasicTicker"}},"id":"d08cf329-366d-451a-9cf7-737d399cd219","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"e71bea72-0ca2-49ba-b322-45cce04c099c","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"c56a70a9-d2a4-42d0-82ab-3fa585badcfd","subtype":"Figure","type":"Plot"},"ticker":{"id":"091ca30b-abc9-4267-9117-a547376b1c86","type":"BasicTicker"}},"id":"eb107cd2-7b86-4881-88a1-8f54b7166d50","type":"Grid"},{"attributes":{},"id":"ac3a7fa6-8244-45c6-bfef-70578b89d1fa","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"19724c61-efcf-4dd8-aadb-73cb8ac420b5","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"2e645a80-7604-45e9-888c-25331acb71d2","type":"DataRange1d"},{"attributes":{"plot":{"id":"c56a70a9-d2a4-42d0-82ab-3fa585badcfd","subtype":"Figure","type":"Plot"}},"id":"00b30217-e007-4077-adf7-3508aa7bddd6","type":"PanTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"4d95c1f3-a61e-4fdc-be19-1bbc42ab481e","type":"Line"},{"attributes":{"data_source":{"id":"19724c61-efcf-4dd8-aadb-73cb8ac420b5","type":"ColumnDataSource"},"glyph":{"id":"4d95c1f3-a61e-4fdc-be19-1bbc42ab481e","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"e71bea72-0ca2-49ba-b322-45cce04c099c","type":"Line"},"selection_glyph":null},"id":"7f1b541e-e1eb-475f-a523-e31d6b089de4","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4025730a-0dcd-449c-a323-7353087a272b","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"b51651f1-47b4-4978-a41b-f3ffc113cf39","type":"DataRange1d"},{"attributes":{"plot":{"id":"c56a70a9-d2a4-42d0-82ab-3fa585badcfd","subtype":"Figure","type":"Plot"}},"id":"b0da3c84-a5ec-4102-9422-f7c5f8770e4d","type":"SaveTool"}],"root_ids":["c56a70a9-d2a4-42d0-82ab-3fa585badcfd"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"2850fbea-7107-4d5d-9c85-b5a1c2579e73","elementid":"68ccfbc5-a406-43ff-b5d7-12b981e5d8e8","modelid":"c56a70a9-d2a4-42d0-82ab-3fa585badcfd"}];
              
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