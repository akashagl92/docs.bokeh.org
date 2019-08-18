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
      };var element = document.getElementById("2cdaf1f8-e74b-42cd-9552-1616e0f5f84f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2cdaf1f8-e74b-42cd-9552-1616e0f5f84f' but no matching script tag was found. ")
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
              var docs_json = {"ee994c7b-5567-46f4-b1db-2d43e32dbd30":{"roots":{"references":[{"attributes":{"plot":{"id":"96b99d6f-4835-4551-88e5-9d3cdc826660","subtype":"Figure","type":"Plot"}},"id":"a5184609-b5d9-49e8-a413-d451185599ab","type":"SaveTool"},{"attributes":{"children":[{"id":"00ca9951-1697-4988-a6ac-5c03ae302122","type":"Slider"}]},"id":"2e824293-3b12-46ea-bb94-7d0e9fbfcf32","type":"WidgetBox"},{"attributes":{"data_source":{"id":"e928d7f0-d00c-4ce6-afab-24570ee2fd79","type":"ColumnDataSource"},"glyph":{"id":"202ed472-70c7-4858-9d63-3954234e281b","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"3514bcda-a24b-49ff-aff8-ade1b74e63cb","type":"Line"},"selection_glyph":null},"id":"f1883244-e940-4621-a493-2341adbc8469","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7ab6593f-6184-4ad6-9d2f-3ef8b57c1269","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":null},"id":"89e37e3e-4218-48d8-bac3-ea7f75c43e5e","type":"Title"},{"attributes":{"formatter":{"id":"9d8b38c8-3cf0-4495-a8b6-bc3acdd9a784","type":"BasicTickFormatter"},"plot":{"id":"96b99d6f-4835-4551-88e5-9d3cdc826660","subtype":"Figure","type":"Plot"},"ticker":{"id":"bc2dc0d2-dd16-440c-b500-02bcb4b70549","type":"BasicTicker"}},"id":"ee57bf7c-e4cc-4a7c-a695-a5a68105d25f","type":"LinearAxis"},{"attributes":{},"id":"9d8b38c8-3cf0-4495-a8b6-bc3acdd9a784","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"beb6c643-169e-45c9-882e-00e8ba40618c","type":"DataRange1d"},{"attributes":{},"id":"0d128bdb-d7f2-410a-952e-aa21e2d37c62","type":"ToolEvents"},{"attributes":{"plot":{"id":"96b99d6f-4835-4551-88e5-9d3cdc826660","subtype":"Figure","type":"Plot"}},"id":"684bc30d-cef9-4cfe-91bb-cc2f41104244","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"61fd0f92-4d52-4627-946f-b49389ee36a5","type":"BasicTickFormatter"},"plot":{"id":"96b99d6f-4835-4551-88e5-9d3cdc826660","subtype":"Figure","type":"Plot"},"ticker":{"id":"392f2c7c-68a1-457f-bf1a-04bd1049287b","type":"BasicTicker"}},"id":"9158d4af-18b9-4d45-964e-51ec5fd77d5f","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"3514bcda-a24b-49ff-aff8-ade1b74e63cb","type":"Line"},{"attributes":{},"id":"bc2dc0d2-dd16-440c-b500-02bcb4b70549","type":"BasicTicker"},{"attributes":{"children":[{"id":"2e824293-3b12-46ea-bb94-7d0e9fbfcf32","type":"WidgetBox"},{"id":"96b99d6f-4835-4551-88e5-9d3cdc826660","subtype":"Figure","type":"Plot"}]},"id":"5c2b8a83-2c95-4b06-9f91-c9b17e05555d","type":"Column"},{"attributes":{"callback":null},"id":"ddd7b867-a34b-4e83-bf30-84dc5a4cc2c8","type":"DataRange1d"},{"attributes":{"plot":{"id":"96b99d6f-4835-4551-88e5-9d3cdc826660","subtype":"Figure","type":"Plot"},"ticker":{"id":"bc2dc0d2-dd16-440c-b500-02bcb4b70549","type":"BasicTicker"}},"id":"8f10fa45-157b-4af5-8019-5c8738cbb6f2","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"49c8891a-a22e-4fe9-9c37-e9d3f0c592fb","type":"PanTool"},{"id":"684bc30d-cef9-4cfe-91bb-cc2f41104244","type":"WheelZoomTool"},{"id":"fedb058a-a71e-41ce-86c6-1e635b10185e","type":"BoxZoomTool"},{"id":"a5184609-b5d9-49e8-a413-d451185599ab","type":"SaveTool"},{"id":"2736a5ad-c246-406e-a658-70f965dcee73","type":"ResetTool"},{"id":"03cc7a29-dcc0-43fa-b252-ac4dd570eb66","type":"HelpTool"}]},"id":"38ee6fba-24ce-4c0b-ac33-c5e969ffd76d","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"96b99d6f-4835-4551-88e5-9d3cdc826660","subtype":"Figure","type":"Plot"},"ticker":{"id":"392f2c7c-68a1-457f-bf1a-04bd1049287b","type":"BasicTicker"}},"id":"725def55-16c9-4446-8276-03c6856d026f","type":"Grid"},{"attributes":{},"id":"61fd0f92-4d52-4627-946f-b49389ee36a5","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"7ab6593f-6184-4ad6-9d2f-3ef8b57c1269","type":"BoxAnnotation"},"plot":{"id":"96b99d6f-4835-4551-88e5-9d3cdc826660","subtype":"Figure","type":"Plot"}},"id":"fedb058a-a71e-41ce-86c6-1e635b10185e","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"e928d7f0-d00c-4ce6-afab-24570ee2fd79","type":"ColumnDataSource"},{"attributes":{"callback":{"id":"a976a039-354b-4548-8e1b-fe294f75b361","type":"CustomJS"},"end":4,"start":0.1,"title":"power","value":1},"id":"00ca9951-1697-4988-a6ac-5c03ae302122","type":"Slider"},{"attributes":{"below":[{"id":"ee57bf7c-e4cc-4a7c-a695-a5a68105d25f","type":"LinearAxis"}],"left":[{"id":"9158d4af-18b9-4d45-964e-51ec5fd77d5f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ee57bf7c-e4cc-4a7c-a695-a5a68105d25f","type":"LinearAxis"},{"id":"8f10fa45-157b-4af5-8019-5c8738cbb6f2","type":"Grid"},{"id":"9158d4af-18b9-4d45-964e-51ec5fd77d5f","type":"LinearAxis"},{"id":"725def55-16c9-4446-8276-03c6856d026f","type":"Grid"},{"id":"7ab6593f-6184-4ad6-9d2f-3ef8b57c1269","type":"BoxAnnotation"},{"id":"f1883244-e940-4621-a493-2341adbc8469","type":"GlyphRenderer"}],"title":{"id":"89e37e3e-4218-48d8-bac3-ea7f75c43e5e","type":"Title"},"tool_events":{"id":"0d128bdb-d7f2-410a-952e-aa21e2d37c62","type":"ToolEvents"},"toolbar":{"id":"38ee6fba-24ce-4c0b-ac33-c5e969ffd76d","type":"Toolbar"},"x_range":{"id":"ddd7b867-a34b-4e83-bf30-84dc5a4cc2c8","type":"DataRange1d"},"y_range":{"id":"beb6c643-169e-45c9-882e-00e8ba40618c","type":"DataRange1d"}},"id":"96b99d6f-4835-4551-88e5-9d3cdc826660","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"392f2c7c-68a1-457f-bf1a-04bd1049287b","type":"BasicTicker"},{"attributes":{"args":{"source":{"id":"e928d7f0-d00c-4ce6-afab-24570ee2fd79","type":"ColumnDataSource"}},"code":"\n        var data = source.get('data');\n        var f = cb_obj.get('value')\n        x = data['x']\n        y = data['y']\n        for (i = 0; i < x.length; i++) {\n            y[i] = Math.pow(x[i], f)\n        }\n        source.trigger('change');\n    "},"id":"a976a039-354b-4548-8e1b-fe294f75b361","type":"CustomJS"},{"attributes":{"plot":{"id":"96b99d6f-4835-4551-88e5-9d3cdc826660","subtype":"Figure","type":"Plot"}},"id":"03cc7a29-dcc0-43fa-b252-ac4dd570eb66","type":"HelpTool"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"202ed472-70c7-4858-9d63-3954234e281b","type":"Line"},{"attributes":{"plot":{"id":"96b99d6f-4835-4551-88e5-9d3cdc826660","subtype":"Figure","type":"Plot"}},"id":"2736a5ad-c246-406e-a658-70f965dcee73","type":"ResetTool"},{"attributes":{"plot":{"id":"96b99d6f-4835-4551-88e5-9d3cdc826660","subtype":"Figure","type":"Plot"}},"id":"49c8891a-a22e-4fe9-9c37-e9d3f0c592fb","type":"PanTool"}],"root_ids":["5c2b8a83-2c95-4b06-9f91-c9b17e05555d"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"ee994c7b-5567-46f4-b1db-2d43e32dbd30","elementid":"2cdaf1f8-e74b-42cd-9552-1616e0f5f84f","modelid":"5c2b8a83-2c95-4b06-9f91-c9b17e05555d"}];
              
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