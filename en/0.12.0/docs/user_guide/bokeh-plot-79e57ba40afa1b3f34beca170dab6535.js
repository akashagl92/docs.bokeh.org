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
      };var element = document.getElementById("83876245-d0eb-4910-a41a-07034a21b2ef");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '83876245-d0eb-4910-a41a-07034a21b2ef' but no matching script tag was found. ")
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
              var docs_json = {"397e2bff-b25d-4fb8-811f-0afa64395b3b":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4436fb40-0536-4a55-a170-ac3064d4d135","type":"PanTool"},{"id":"50b67fcd-b1da-44f7-a7d3-858d22d11f55","type":"WheelZoomTool"},{"id":"7356c68c-c335-4c4a-8b1a-36b3b3e0f580","type":"BoxZoomTool"},{"id":"873ab659-3d73-4c1d-8ebe-b9fa2ad77d33","type":"SaveTool"},{"id":"53df9577-e1b1-428b-897b-f0b45bd80708","type":"ResetTool"},{"id":"df360acf-2406-4c5c-aaf9-0a8442004c0a","type":"HelpTool"}]},"id":"4ec0e0bf-357c-4617-987e-67763ef35208","type":"Toolbar"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"8d0d15b6-8f4f-4199-ab33-4cff53c3332d","type":"Ray"},{"attributes":{"dimension":1,"plot":{"id":"bb41dcaf-56e1-476e-bba9-86ab355b56ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"a81fa7b7-b0a8-4516-85f5-0555d84af8c8","type":"BasicTicker"}},"id":"1d38b71d-2bab-4a54-93d8-1665a172ca13","type":"Grid"},{"attributes":{"plot":{"id":"bb41dcaf-56e1-476e-bba9-86ab355b56ef","subtype":"Figure","type":"Plot"}},"id":"53df9577-e1b1-428b-897b-f0b45bd80708","type":"ResetTool"},{"attributes":{"plot":{"id":"bb41dcaf-56e1-476e-bba9-86ab355b56ef","subtype":"Figure","type":"Plot"}},"id":"df360acf-2406-4c5c-aaf9-0a8442004c0a","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["angle","y","x"],"data":{"angle":[30,45,60],"x":[1,2,3],"y":[1,2,3]}},"id":"ec76367d-9981-4836-a056-ff052df485a4","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"bb41dcaf-56e1-476e-bba9-86ab355b56ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e60f38a-46fa-4b8b-a451-37daa9336d14","type":"BasicTicker"}},"id":"3bcad473-2059-4fef-9dd9-89f0f88e67b6","type":"Grid"},{"attributes":{},"id":"3e60f38a-46fa-4b8b-a451-37daa9336d14","type":"BasicTicker"},{"attributes":{"overlay":{"id":"e1ca6ac6-13ce-4076-9390-fa55f56857e6","type":"BoxAnnotation"},"plot":{"id":"bb41dcaf-56e1-476e-bba9-86ab355b56ef","subtype":"Figure","type":"Plot"}},"id":"7356c68c-c335-4c4a-8b1a-36b3b3e0f580","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"bb41dcaf-56e1-476e-bba9-86ab355b56ef","subtype":"Figure","type":"Plot"}},"id":"50b67fcd-b1da-44f7-a7d3-858d22d11f55","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"b2dd4323-beea-4690-be03-608644c2f219","type":"BasicTickFormatter"},"plot":{"id":"bb41dcaf-56e1-476e-bba9-86ab355b56ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e60f38a-46fa-4b8b-a451-37daa9336d14","type":"BasicTicker"}},"id":"9e520a42-720a-483f-accb-497839581405","type":"LinearAxis"},{"attributes":{},"id":"a81fa7b7-b0a8-4516-85f5-0555d84af8c8","type":"BasicTicker"},{"attributes":{"callback":null},"id":"9e123785-ac22-471c-b41b-fa087c25be86","type":"DataRange1d"},{"attributes":{"formatter":{"id":"a9472a46-32ad-4c3d-9d07-c4fff6524884","type":"BasicTickFormatter"},"plot":{"id":"bb41dcaf-56e1-476e-bba9-86ab355b56ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"a81fa7b7-b0a8-4516-85f5-0555d84af8c8","type":"BasicTicker"}},"id":"200e83e9-d0bc-4e30-937f-d8c767740fdb","type":"LinearAxis"},{"attributes":{"below":[{"id":"9e520a42-720a-483f-accb-497839581405","type":"LinearAxis"}],"left":[{"id":"200e83e9-d0bc-4e30-937f-d8c767740fdb","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9e520a42-720a-483f-accb-497839581405","type":"LinearAxis"},{"id":"3bcad473-2059-4fef-9dd9-89f0f88e67b6","type":"Grid"},{"id":"200e83e9-d0bc-4e30-937f-d8c767740fdb","type":"LinearAxis"},{"id":"1d38b71d-2bab-4a54-93d8-1665a172ca13","type":"Grid"},{"id":"e1ca6ac6-13ce-4076-9390-fa55f56857e6","type":"BoxAnnotation"},{"id":"b697c8e9-03c4-4782-a2b6-71a3c3a9bc91","type":"GlyphRenderer"}],"title":{"id":"a0d465c5-fffe-4c98-b523-1cfd94ffb879","type":"Title"},"tool_events":{"id":"d6fe4a09-1e9d-41c1-ae03-2a7a5c733695","type":"ToolEvents"},"toolbar":{"id":"4ec0e0bf-357c-4617-987e-67763ef35208","type":"Toolbar"},"x_range":{"id":"9e123785-ac22-471c-b41b-fa087c25be86","type":"DataRange1d"},"y_range":{"id":"2e3b9533-3fa6-422a-9965-f1160c835a22","type":"DataRange1d"}},"id":"bb41dcaf-56e1-476e-bba9-86ab355b56ef","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e1ca6ac6-13ce-4076-9390-fa55f56857e6","type":"BoxAnnotation"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"dd473073-8add-4dc1-a920-70acc37686d0","type":"Ray"},{"attributes":{"callback":null},"id":"2e3b9533-3fa6-422a-9965-f1160c835a22","type":"DataRange1d"},{"attributes":{"plot":null,"text":null},"id":"a0d465c5-fffe-4c98-b523-1cfd94ffb879","type":"Title"},{"attributes":{"plot":{"id":"bb41dcaf-56e1-476e-bba9-86ab355b56ef","subtype":"Figure","type":"Plot"}},"id":"4436fb40-0536-4a55-a170-ac3064d4d135","type":"PanTool"},{"attributes":{"plot":{"id":"bb41dcaf-56e1-476e-bba9-86ab355b56ef","subtype":"Figure","type":"Plot"}},"id":"873ab659-3d73-4c1d-8ebe-b9fa2ad77d33","type":"SaveTool"},{"attributes":{},"id":"d6fe4a09-1e9d-41c1-ae03-2a7a5c733695","type":"ToolEvents"},{"attributes":{},"id":"b2dd4323-beea-4690-be03-608644c2f219","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"ec76367d-9981-4836-a056-ff052df485a4","type":"ColumnDataSource"},"glyph":{"id":"dd473073-8add-4dc1-a920-70acc37686d0","type":"Ray"},"hover_glyph":null,"nonselection_glyph":{"id":"8d0d15b6-8f4f-4199-ab33-4cff53c3332d","type":"Ray"},"selection_glyph":null},"id":"b697c8e9-03c4-4782-a2b6-71a3c3a9bc91","type":"GlyphRenderer"},{"attributes":{},"id":"a9472a46-32ad-4c3d-9d07-c4fff6524884","type":"BasicTickFormatter"}],"root_ids":["bb41dcaf-56e1-476e-bba9-86ab355b56ef"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"397e2bff-b25d-4fb8-811f-0afa64395b3b","elementid":"83876245-d0eb-4910-a41a-07034a21b2ef","modelid":"bb41dcaf-56e1-476e-bba9-86ab355b56ef"}];
              
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