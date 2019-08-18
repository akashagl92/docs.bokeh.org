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
      };var element = document.getElementById("fd0c52de-a4eb-48be-9d78-6b76647297ec");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fd0c52de-a4eb-48be-9d78-6b76647297ec' but no matching script tag was found. ")
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
              var docs_json = {"4c928d8a-004a-4114-8ba3-b76b78b79cc1":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"e7703505-5e8d-4f79-ab56-c09d2a36762a","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8de075c-d3c0-43bf-99cf-8adc33e25e6f","type":"BasicTicker"}},"id":"94e3a4ea-5638-4eab-bbc4-d8a3bae83b49","type":"Grid"},{"attributes":{},"id":"8dce80e9-3fd7-4736-a7ec-fdf65b6921b5","type":"BasicTickFormatter"},{"attributes":{},"id":"35834c42-125a-4031-9adb-bb20ddd6c9c0","type":"BasicTicker"},{"attributes":{"formatter":{"id":"8dce80e9-3fd7-4736-a7ec-fdf65b6921b5","type":"BasicTickFormatter"},"plot":{"id":"e7703505-5e8d-4f79-ab56-c09d2a36762a","subtype":"Figure","type":"Plot"},"ticker":{"id":"35834c42-125a-4031-9adb-bb20ddd6c9c0","type":"BasicTicker"},"visible":false},"id":"117ae627-4173-480c-98fd-335f6d88dea8","type":"LinearAxis"},{"attributes":{"plot":{"id":"e7703505-5e8d-4f79-ab56-c09d2a36762a","subtype":"Figure","type":"Plot"}},"id":"ac5ca466-6dd4-453e-9e2a-9d49d534c870","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":20000000,"start":-20000000},"id":"af4d5f67-794f-4c05-ba8f-958af4fc25f8","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2bd1bca0-2f01-47a5-b68e-36e437d650c1","type":"PanTool"},{"id":"ac5ca466-6dd4-453e-9e2a-9d49d534c870","type":"WheelZoomTool"}]},"id":"5fb9ef73-e01b-4296-bfd1-e0b584a34eb4","type":"Toolbar"},{"attributes":{"plot":{"id":"e7703505-5e8d-4f79-ab56-c09d2a36762a","subtype":"Figure","type":"Plot"}},"id":"2bd1bca0-2f01-47a5-b68e-36e437d650c1","type":"PanTool"},{"attributes":{},"id":"12839380-145b-4fb3-8d80-73f8fc9a4653","type":"ToolEvents"},{"attributes":{},"id":"bbf97c07-c67a-46ab-b1c9-d7b45b3c4c56","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e7703505-5e8d-4f79-ab56-c09d2a36762a","subtype":"Figure","type":"Plot"},"ticker":{"id":"35834c42-125a-4031-9adb-bb20ddd6c9c0","type":"BasicTicker"}},"id":"0bc80ccd-ed6e-45b4-ab3f-69abab1cbaee","type":"Grid"},{"attributes":{"tile_source":{"id":"db96351e-68e7-4cd5-b062-559b76e24914","type":"WMTSTileSource"}},"id":"5e6976f1-5dd8-42a5-845c-49c9d42eb0e7","type":"TileRenderer"},{"attributes":{"below":[{"id":"117ae627-4173-480c-98fd-335f6d88dea8","type":"LinearAxis"}],"left":[{"id":"c03bf4f0-520d-4ae9-804a-e57eb95e4c2b","type":"LinearAxis"}],"renderers":[{"id":"117ae627-4173-480c-98fd-335f6d88dea8","type":"LinearAxis"},{"id":"0bc80ccd-ed6e-45b4-ab3f-69abab1cbaee","type":"Grid"},{"id":"c03bf4f0-520d-4ae9-804a-e57eb95e4c2b","type":"LinearAxis"},{"id":"94e3a4ea-5638-4eab-bbc4-d8a3bae83b49","type":"Grid"},{"id":"5e6976f1-5dd8-42a5-845c-49c9d42eb0e7","type":"TileRenderer"}],"title":{"id":"73594300-fbff-43ef-91b1-34841367e9e6","type":"Title"},"tool_events":{"id":"12839380-145b-4fb3-8d80-73f8fc9a4653","type":"ToolEvents"},"toolbar":{"id":"5fb9ef73-e01b-4296-bfd1-e0b584a34eb4","type":"Toolbar"},"x_range":{"id":"619f896d-8f71-4c6a-b990-68a80c9c5578","type":"Range1d"},"y_range":{"id":"af4d5f67-794f-4c05-ba8f-958af4fc25f8","type":"Range1d"}},"id":"e7703505-5e8d-4f79-ab56-c09d2a36762a","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":null},"id":"73594300-fbff-43ef-91b1-34841367e9e6","type":"Title"},{"attributes":{"attribution":"Map tiles by <a href=\"http://stamen.com\">Stamen Design</a>, under <a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a>.Data by <a href=\"http://openstreetmap.org\">OpenStreetMap</a>, under <a href=\"http://www.openstreetmap.org/copyright\">ODbL</a>","url":"http://tile.stamen.com/toner/{Z}/{X}/{Y}.png"},"id":"db96351e-68e7-4cd5-b062-559b76e24914","type":"WMTSTileSource"},{"attributes":{"callback":null,"end":20000000,"start":-20000000},"id":"619f896d-8f71-4c6a-b990-68a80c9c5578","type":"Range1d"},{"attributes":{},"id":"a8de075c-d3c0-43bf-99cf-8adc33e25e6f","type":"BasicTicker"},{"attributes":{"formatter":{"id":"bbf97c07-c67a-46ab-b1c9-d7b45b3c4c56","type":"BasicTickFormatter"},"plot":{"id":"e7703505-5e8d-4f79-ab56-c09d2a36762a","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8de075c-d3c0-43bf-99cf-8adc33e25e6f","type":"BasicTicker"},"visible":false},"id":"c03bf4f0-520d-4ae9-804a-e57eb95e4c2b","type":"LinearAxis"}],"root_ids":["e7703505-5e8d-4f79-ab56-c09d2a36762a"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"4c928d8a-004a-4114-8ba3-b76b78b79cc1","elementid":"fd0c52de-a4eb-48be-9d78-6b76647297ec","modelid":"e7703505-5e8d-4f79-ab56-c09d2a36762a"}];
              
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