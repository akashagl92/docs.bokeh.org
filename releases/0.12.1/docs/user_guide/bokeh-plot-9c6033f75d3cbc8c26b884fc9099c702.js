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
      };var element = document.getElementById("cf4e9300-1d9e-4da0-81d9-f714bd5ba4e1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cf4e9300-1d9e-4da0-81d9-f714bd5ba4e1' but no matching script tag was found. ")
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
              var docs_json = {"6227e16f-4679-48bf-9925-9e5b3ba5843b":{"roots":{"references":[{"attributes":{},"id":"f141ea00-fa10-4bbc-8467-fe5fda3103e8","type":"BasicTicker"},{"attributes":{"plot":{"id":"245db863-fe69-439f-82df-1e130d6d6fa3","subtype":"Figure","type":"Plot"}},"id":"ee21485b-41f3-4a01-aa16-17cdfed93e9a","type":"PanTool"},{"attributes":{},"id":"2586115d-6d0b-43d3-a711-9caae11ece68","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"245db863-fe69-439f-82df-1e130d6d6fa3","subtype":"Figure","type":"Plot"},"ticker":{"id":"359215b9-13ef-4c87-a783-a548b2f39cfe","type":"BasicTicker"}},"id":"3fe34a9c-ca7c-4078-b1dc-55ab70da143d","type":"Grid"},{"attributes":{"plot":{"id":"245db863-fe69-439f-82df-1e130d6d6fa3","subtype":"Figure","type":"Plot"}},"id":"efd115c1-04cb-4774-9843-9921f8c009f2","type":"SaveTool"},{"attributes":{"callback":null},"id":"196cf226-f174-414f-b19f-157af0d7579c","type":"DataRange1d"},{"attributes":{"plot":{"id":"245db863-fe69-439f-82df-1e130d6d6fa3","subtype":"Figure","type":"Plot"}},"id":"ab7fad83-f964-4110-8d2e-93d008996937","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"31d7d884-be02-49cf-b9bf-1fced4d26744","type":"Patch"},{"attributes":{"plot":{"id":"245db863-fe69-439f-82df-1e130d6d6fa3","subtype":"Figure","type":"Plot"}},"id":"090d17ab-ec11-4621-92d7-5912b0451649","type":"HelpTool"},{"attributes":{"plot":{"id":"245db863-fe69-439f-82df-1e130d6d6fa3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f141ea00-fa10-4bbc-8467-fe5fda3103e8","type":"BasicTicker"}},"id":"3a826254-3a81-483e-ab66-981179d560b6","type":"Grid"},{"attributes":{"overlay":{"id":"1d95abab-9ea7-4e62-9e7e-59c58fcf08f5","type":"BoxAnnotation"},"plot":{"id":"245db863-fe69-439f-82df-1e130d6d6fa3","subtype":"Figure","type":"Plot"}},"id":"618d31b8-69a6-4da6-98ed-a025f780e6f6","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"1cb94ce7-d40c-41a1-a333-f0ce0ca44d21","type":"BasicTickFormatter"},"plot":{"id":"245db863-fe69-439f-82df-1e130d6d6fa3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f141ea00-fa10-4bbc-8467-fe5fda3103e8","type":"BasicTicker"}},"id":"f28f375c-d4e8-4ce3-8c44-9c50cc12e276","type":"LinearAxis"},{"attributes":{"formatter":{"id":"e6e6e2e2-82ea-4513-810b-c5428f477483","type":"BasicTickFormatter"},"plot":{"id":"245db863-fe69-439f-82df-1e130d6d6fa3","subtype":"Figure","type":"Plot"},"ticker":{"id":"359215b9-13ef-4c87-a783-a548b2f39cfe","type":"BasicTicker"}},"id":"e2758fe8-dd53-43b9-946e-738e81507d7e","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1.0,2.0,3.0,"NaN",4.0,5.0,6.0],"y":[6.0,7.0,5.0,"NaN",7.0,3.0,6.0]}},"id":"98ac3fe8-4444-48c8-9027-44d2bc779ba7","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ee21485b-41f3-4a01-aa16-17cdfed93e9a","type":"PanTool"},{"id":"594d622a-9ac8-4cba-a3ce-d988b1019fc9","type":"WheelZoomTool"},{"id":"618d31b8-69a6-4da6-98ed-a025f780e6f6","type":"BoxZoomTool"},{"id":"efd115c1-04cb-4774-9843-9921f8c009f2","type":"SaveTool"},{"id":"ab7fad83-f964-4110-8d2e-93d008996937","type":"ResetTool"},{"id":"090d17ab-ec11-4621-92d7-5912b0451649","type":"HelpTool"}]},"id":"a86a1ecd-26e8-4add-b076-286e2ae01592","type":"Toolbar"},{"attributes":{},"id":"e6e6e2e2-82ea-4513-810b-c5428f477483","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"245db863-fe69-439f-82df-1e130d6d6fa3","subtype":"Figure","type":"Plot"}},"id":"594d622a-9ac8-4cba-a3ce-d988b1019fc9","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"f28f375c-d4e8-4ce3-8c44-9c50cc12e276","type":"LinearAxis"}],"left":[{"id":"e2758fe8-dd53-43b9-946e-738e81507d7e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f28f375c-d4e8-4ce3-8c44-9c50cc12e276","type":"LinearAxis"},{"id":"3a826254-3a81-483e-ab66-981179d560b6","type":"Grid"},{"id":"e2758fe8-dd53-43b9-946e-738e81507d7e","type":"LinearAxis"},{"id":"3fe34a9c-ca7c-4078-b1dc-55ab70da143d","type":"Grid"},{"id":"1d95abab-9ea7-4e62-9e7e-59c58fcf08f5","type":"BoxAnnotation"},{"id":"8615ee53-660a-41c3-bb3d-9a59c583e680","type":"GlyphRenderer"}],"title":{"id":"7225299e-3654-499c-821d-4a79994ef92e","type":"Title"},"tool_events":{"id":"2586115d-6d0b-43d3-a711-9caae11ece68","type":"ToolEvents"},"toolbar":{"id":"a86a1ecd-26e8-4add-b076-286e2ae01592","type":"Toolbar"},"x_range":{"id":"b1fffb29-d1db-4249-9b7b-f673bcb11614","type":"DataRange1d"},"y_range":{"id":"196cf226-f174-414f-b19f-157af0d7579c","type":"DataRange1d"}},"id":"245db863-fe69-439f-82df-1e130d6d6fa3","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"b1fffb29-d1db-4249-9b7b-f673bcb11614","type":"DataRange1d"},{"attributes":{},"id":"359215b9-13ef-4c87-a783-a548b2f39cfe","type":"BasicTicker"},{"attributes":{},"id":"1cb94ce7-d40c-41a1-a333-f0ce0ca44d21","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1d95abab-9ea7-4e62-9e7e-59c58fcf08f5","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"98ac3fe8-4444-48c8-9027-44d2bc779ba7","type":"ColumnDataSource"},"glyph":{"id":"31d7d884-be02-49cf-b9bf-1fced4d26744","type":"Patch"},"hover_glyph":null,"nonselection_glyph":{"id":"4c0e631d-a856-433f-b957-e889ead035ac","type":"Patch"},"selection_glyph":null},"id":"8615ee53-660a-41c3-bb3d-9a59c583e680","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":null},"id":"7225299e-3654-499c-821d-4a79994ef92e","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"4c0e631d-a856-433f-b957-e889ead035ac","type":"Patch"}],"root_ids":["245db863-fe69-439f-82df-1e130d6d6fa3"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"6227e16f-4679-48bf-9925-9e5b3ba5843b","elementid":"cf4e9300-1d9e-4da0-81d9-f714bd5ba4e1","modelid":"245db863-fe69-439f-82df-1e130d6d6fa3"}];
              
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