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
      };var element = document.getElementById("f89e6b8c-5ebf-45b4-acdc-58ba2cea0319");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f89e6b8c-5ebf-45b4-acdc-58ba2cea0319' but no matching script tag was found. ")
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
              var docs_json = {"001e0d14-3404-43d7-b375-428af4edc82a":{"roots":{"references":[{"attributes":{"data_source":{"id":"725dbbd6-c899-4d3d-9c86-89b42edcfbef","type":"ColumnDataSource"},"glyph":{"id":"e2dc78c3-3a0a-4c9c-b5d5-b00be8e378f1","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"e007fd8e-ddda-4efe-8628-0904ac6e457a","type":"Line"},"selection_glyph":null},"id":"738d6bcd-9753-49f6-805b-55b20b169df1","type":"GlyphRenderer"},{"attributes":{},"id":"f95a9dc6-26bd-466f-a812-32cbdb623547","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"f95a9dc6-26bd-466f-a812-32cbdb623547","type":"BasicTickFormatter"},"plot":{"id":"e380ce1b-926f-49e1-934f-80ae5961ae08","subtype":"Figure","type":"Plot"},"ticker":{"id":"2843ee71-4eb9-4fa5-9f98-948cf020a712","type":"BasicTicker"}},"id":"d743c062-9d5f-4557-8e92-dc2cfe2133cb","type":"LinearAxis"},{"attributes":{"plot":{"id":"e380ce1b-926f-49e1-934f-80ae5961ae08","subtype":"Figure","type":"Plot"}},"id":"4c7f23bb-9423-44ab-908f-c373cb3a3cdd","type":"PanTool"},{"attributes":{"plot":{"id":"e380ce1b-926f-49e1-934f-80ae5961ae08","subtype":"Figure","type":"Plot"}},"id":"fc473f04-6ce8-4f9a-a01e-0e8efdf84dc9","type":"HelpTool"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"e2dc78c3-3a0a-4c9c-b5d5-b00be8e378f1","type":"Line"},{"attributes":{"children":[{"id":"58498a40-ef42-4724-9788-612f6d45449e","type":"Slider"}]},"id":"a5a5afe6-9bff-4974-868c-8b9e15ee954c","type":"WidgetBox"},{"attributes":{},"id":"34c5c0d6-2d6c-4e90-89e8-53f83693ebd2","type":"BasicTickFormatter"},{"attributes":{"callback":{"id":"117be944-f7d0-407e-ab6c-e611df6f065c","type":"CustomJS"},"end":4,"start":0.1,"title":"power","value":1},"id":"58498a40-ef42-4724-9788-612f6d45449e","type":"Slider"},{"attributes":{"children":[{"id":"a5a5afe6-9bff-4974-868c-8b9e15ee954c","type":"WidgetBox"},{"id":"e380ce1b-926f-49e1-934f-80ae5961ae08","subtype":"Figure","type":"Plot"}]},"id":"d3738a8d-1c5f-40d4-a8c1-2adc08a0d0fb","type":"Column"},{"attributes":{"plot":{"id":"e380ce1b-926f-49e1-934f-80ae5961ae08","subtype":"Figure","type":"Plot"}},"id":"082acc8d-431e-4a00-87da-24b92514e2a6","type":"ResetTool"},{"attributes":{"plot":{"id":"e380ce1b-926f-49e1-934f-80ae5961ae08","subtype":"Figure","type":"Plot"}},"id":"7de40fbc-ac3e-4fe2-9b19-23c3c42d4c35","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b5c47000-9633-4f13-8280-4a7b0c68ce69","type":"BoxAnnotation"},{"attributes":{"args":{"source":{"id":"725dbbd6-c899-4d3d-9c86-89b42edcfbef","type":"ColumnDataSource"}},"code":"\n        var data = source.get('data');\n        var f = cb_obj.get('value')\n        x = data['x']\n        y = data['y']\n        for (i = 0; i < x.length; i++) {\n            y[i] = Math.pow(x[i], f)\n        }\n        source.trigger('change');\n    "},"id":"117be944-f7d0-407e-ab6c-e611df6f065c","type":"CustomJS"},{"attributes":{},"id":"490598d6-0f47-4b50-b111-ef4a6649d5bf","type":"ToolEvents"},{"attributes":{"overlay":{"id":"b5c47000-9633-4f13-8280-4a7b0c68ce69","type":"BoxAnnotation"},"plot":{"id":"e380ce1b-926f-49e1-934f-80ae5961ae08","subtype":"Figure","type":"Plot"}},"id":"bbc18dee-902b-49a5-8b91-bb73ca67a4df","type":"BoxZoomTool"},{"attributes":{},"id":"a89e1ce1-a1ff-42b1-a495-7eb8c9852cf0","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"e007fd8e-ddda-4efe-8628-0904ac6e457a","type":"Line"},{"attributes":{"callback":null},"id":"314dcda0-7bf1-4eaa-b2e8-03b01195f9c1","type":"DataRange1d"},{"attributes":{"plot":{"id":"e380ce1b-926f-49e1-934f-80ae5961ae08","subtype":"Figure","type":"Plot"}},"id":"46918041-ea15-42c7-83af-921bdb6fca0f","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"e380ce1b-926f-49e1-934f-80ae5961ae08","subtype":"Figure","type":"Plot"},"ticker":{"id":"2843ee71-4eb9-4fa5-9f98-948cf020a712","type":"BasicTicker"}},"id":"aaef1ccf-d3cc-49ef-821d-e272ea4e6f50","type":"Grid"},{"attributes":{"callback":null},"id":"8ba9f414-e496-4a69-8012-855e827fd2cb","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"e380ce1b-926f-49e1-934f-80ae5961ae08","subtype":"Figure","type":"Plot"},"ticker":{"id":"a89e1ce1-a1ff-42b1-a495-7eb8c9852cf0","type":"BasicTicker"}},"id":"fb83d558-6758-46d2-b96d-bd622bde5202","type":"Grid"},{"attributes":{},"id":"2843ee71-4eb9-4fa5-9f98-948cf020a712","type":"BasicTicker"},{"attributes":{"plot":null,"text":null},"id":"44cac7d8-a1b5-4bc0-873e-d82b2e2d3100","type":"Title"},{"attributes":{"below":[{"id":"d743c062-9d5f-4557-8e92-dc2cfe2133cb","type":"LinearAxis"}],"left":[{"id":"535dfcb9-ce0c-4719-924b-66b525f377fb","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d743c062-9d5f-4557-8e92-dc2cfe2133cb","type":"LinearAxis"},{"id":"aaef1ccf-d3cc-49ef-821d-e272ea4e6f50","type":"Grid"},{"id":"535dfcb9-ce0c-4719-924b-66b525f377fb","type":"LinearAxis"},{"id":"fb83d558-6758-46d2-b96d-bd622bde5202","type":"Grid"},{"id":"b5c47000-9633-4f13-8280-4a7b0c68ce69","type":"BoxAnnotation"},{"id":"738d6bcd-9753-49f6-805b-55b20b169df1","type":"GlyphRenderer"}],"title":{"id":"44cac7d8-a1b5-4bc0-873e-d82b2e2d3100","type":"Title"},"tool_events":{"id":"490598d6-0f47-4b50-b111-ef4a6649d5bf","type":"ToolEvents"},"toolbar":{"id":"da2448fd-1a20-4615-bc60-112ab27676ea","type":"Toolbar"},"x_range":{"id":"314dcda0-7bf1-4eaa-b2e8-03b01195f9c1","type":"DataRange1d"},"y_range":{"id":"8ba9f414-e496-4a69-8012-855e827fd2cb","type":"DataRange1d"}},"id":"e380ce1b-926f-49e1-934f-80ae5961ae08","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"34c5c0d6-2d6c-4e90-89e8-53f83693ebd2","type":"BasicTickFormatter"},"plot":{"id":"e380ce1b-926f-49e1-934f-80ae5961ae08","subtype":"Figure","type":"Plot"},"ticker":{"id":"a89e1ce1-a1ff-42b1-a495-7eb8c9852cf0","type":"BasicTicker"}},"id":"535dfcb9-ce0c-4719-924b-66b525f377fb","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"725dbbd6-c899-4d3d-9c86-89b42edcfbef","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4c7f23bb-9423-44ab-908f-c373cb3a3cdd","type":"PanTool"},{"id":"46918041-ea15-42c7-83af-921bdb6fca0f","type":"WheelZoomTool"},{"id":"bbc18dee-902b-49a5-8b91-bb73ca67a4df","type":"BoxZoomTool"},{"id":"7de40fbc-ac3e-4fe2-9b19-23c3c42d4c35","type":"SaveTool"},{"id":"082acc8d-431e-4a00-87da-24b92514e2a6","type":"ResetTool"},{"id":"fc473f04-6ce8-4f9a-a01e-0e8efdf84dc9","type":"HelpTool"}]},"id":"da2448fd-1a20-4615-bc60-112ab27676ea","type":"Toolbar"}],"root_ids":["d3738a8d-1c5f-40d4-a8c1-2adc08a0d0fb"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"001e0d14-3404-43d7-b375-428af4edc82a","elementid":"f89e6b8c-5ebf-45b4-acdc-58ba2cea0319","modelid":"d3738a8d-1c5f-40d4-a8c1-2adc08a0d0fb"}];
              
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