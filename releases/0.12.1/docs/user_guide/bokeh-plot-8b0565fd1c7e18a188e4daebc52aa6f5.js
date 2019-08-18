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
      };var element = document.getElementById("4b860047-70d0-4eac-a11f-ce814d194a91");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4b860047-70d0-4eac-a11f-ce814d194a91' but no matching script tag was found. ")
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
              var docs_json = {"61612edb-78e1-4efc-9fca-eeb4830bd275":{"roots":{"references":[{"attributes":{"formatter":{"id":"b8280bdb-8383-4c39-b004-c38192d47e30","type":"BasicTickFormatter"},"plot":{"id":"99db1bfb-4be7-4b2b-876c-ff1a55008344","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf25af5a-1261-433d-b237-71b3b925323d","type":"BasicTicker"}},"id":"969b12b2-e011-47bc-b7a3-d59a7f88f9f3","type":"LinearAxis"},{"attributes":{"plot":{"id":"99db1bfb-4be7-4b2b-876c-ff1a55008344","subtype":"Figure","type":"Plot"}},"id":"bad54236-c826-4a75-ab4d-a9a6a0c7eb4f","type":"HelpTool"},{"attributes":{},"id":"69544e00-4c9d-4826-b625-aa0fc119a33a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"99db1bfb-4be7-4b2b-876c-ff1a55008344","subtype":"Figure","type":"Plot"}},"id":"244985be-0baf-4f86-a62e-4ec5c4314cee","type":"SaveTool"},{"attributes":{"plot":{"id":"99db1bfb-4be7-4b2b-876c-ff1a55008344","subtype":"Figure","type":"Plot"}},"id":"8f09f630-d362-4dec-b478-35fa5349d16b","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"99db1bfb-4be7-4b2b-876c-ff1a55008344","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e2ae9b9-6a1d-45fa-926d-ab6ae40f969f","type":"BasicTicker"}},"id":"22376d3b-2140-45fb-9647-9434ced0319c","type":"Grid"},{"attributes":{"callback":null},"id":"c666a066-aba4-4f67-8dc9-d5729ecd4844","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"301d3ea6-8c82-4853-96f5-5a63696d3871","type":"ColumnDataSource"},{"attributes":{},"id":"b8280bdb-8383-4c39-b004-c38192d47e30","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"83acaf9e-9d62-4be6-80d3-f6ab8b0e0943","type":"BoxAnnotation"},"plot":{"id":"99db1bfb-4be7-4b2b-876c-ff1a55008344","subtype":"Figure","type":"Plot"}},"id":"ce970f60-008f-4e2e-8e81-ccd426b6136a","type":"BoxZoomTool"},{"attributes":{},"id":"871fe30f-e7d8-4558-9f68-eca2a9a20e18","type":"ToolEvents"},{"attributes":{"plot":{"id":"99db1bfb-4be7-4b2b-876c-ff1a55008344","subtype":"Figure","type":"Plot"}},"id":"188e3ad3-ca0a-490a-b1a4-b6f3d902682a","type":"ResetTool"},{"attributes":{},"id":"cf25af5a-1261-433d-b237-71b3b925323d","type":"BasicTicker"},{"attributes":{"below":[{"id":"969b12b2-e011-47bc-b7a3-d59a7f88f9f3","type":"LinearAxis"}],"left":[{"id":"34932e30-c208-4086-9c19-75557641750d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"969b12b2-e011-47bc-b7a3-d59a7f88f9f3","type":"LinearAxis"},{"id":"0c53c799-adf6-49a9-8caf-62ad36b721ac","type":"Grid"},{"id":"34932e30-c208-4086-9c19-75557641750d","type":"LinearAxis"},{"id":"22376d3b-2140-45fb-9647-9434ced0319c","type":"Grid"},{"id":"83acaf9e-9d62-4be6-80d3-f6ab8b0e0943","type":"BoxAnnotation"},{"id":"f850ab0f-cc45-4d56-88be-7cd50acefb1d","type":"GlyphRenderer"}],"title":{"id":"0c837e63-888e-4df0-a656-363312f709cf","type":"Title"},"tool_events":{"id":"871fe30f-e7d8-4558-9f68-eca2a9a20e18","type":"ToolEvents"},"toolbar":{"id":"d4c32120-57e6-4d10-95ea-164bbe3669ef","type":"Toolbar"},"x_range":{"id":"c666a066-aba4-4f67-8dc9-d5729ecd4844","type":"DataRange1d"},"y_range":{"id":"9419c4c4-c938-421d-9788-8f183ef264b6","type":"DataRange1d"}},"id":"99db1bfb-4be7-4b2b-876c-ff1a55008344","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"211ae74a-13e9-4746-bf08-fc9cb406f937","type":"PanTool"},{"id":"8f09f630-d362-4dec-b478-35fa5349d16b","type":"WheelZoomTool"},{"id":"ce970f60-008f-4e2e-8e81-ccd426b6136a","type":"BoxZoomTool"},{"id":"244985be-0baf-4f86-a62e-4ec5c4314cee","type":"SaveTool"},{"id":"188e3ad3-ca0a-490a-b1a4-b6f3d902682a","type":"ResetTool"},{"id":"bad54236-c826-4a75-ab4d-a9a6a0c7eb4f","type":"HelpTool"}]},"id":"d4c32120-57e6-4d10-95ea-164bbe3669ef","type":"Toolbar"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"224d08df-eec0-4ccb-bac9-0c48340b2a07","type":"Rect"},{"attributes":{"plot":null,"text":null},"id":"0c837e63-888e-4df0-a656-363312f709cf","type":"Title"},{"attributes":{"callback":null},"id":"9419c4c4-c938-421d-9788-8f183ef264b6","type":"DataRange1d"},{"attributes":{"formatter":{"id":"69544e00-4c9d-4826-b625-aa0fc119a33a","type":"BasicTickFormatter"},"plot":{"id":"99db1bfb-4be7-4b2b-876c-ff1a55008344","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e2ae9b9-6a1d-45fa-926d-ab6ae40f969f","type":"BasicTicker"}},"id":"34932e30-c208-4086-9c19-75557641750d","type":"LinearAxis"},{"attributes":{"plot":{"id":"99db1bfb-4be7-4b2b-876c-ff1a55008344","subtype":"Figure","type":"Plot"}},"id":"211ae74a-13e9-4746-bf08-fc9cb406f937","type":"PanTool"},{"attributes":{"plot":{"id":"99db1bfb-4be7-4b2b-876c-ff1a55008344","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf25af5a-1261-433d-b237-71b3b925323d","type":"BasicTicker"}},"id":"0c53c799-adf6-49a9-8caf-62ad36b721ac","type":"Grid"},{"attributes":{},"id":"0e2ae9b9-6a1d-45fa-926d-ab6ae40f969f","type":"BasicTicker"},{"attributes":{"data_source":{"id":"301d3ea6-8c82-4853-96f5-5a63696d3871","type":"ColumnDataSource"},"glyph":{"id":"17b63537-807f-4fc4-aefc-e36a3d5aa17b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"224d08df-eec0-4ccb-bac9-0c48340b2a07","type":"Rect"},"selection_glyph":null},"id":"f850ab0f-cc45-4d56-88be-7cd50acefb1d","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"83acaf9e-9d62-4be6-80d3-f6ab8b0e0943","type":"BoxAnnotation"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"17b63537-807f-4fc4-aefc-e36a3d5aa17b","type":"Rect"}],"root_ids":["99db1bfb-4be7-4b2b-876c-ff1a55008344"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"61612edb-78e1-4efc-9fca-eeb4830bd275","elementid":"4b860047-70d0-4eac-a11f-ce814d194a91","modelid":"99db1bfb-4be7-4b2b-876c-ff1a55008344"}];
              
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