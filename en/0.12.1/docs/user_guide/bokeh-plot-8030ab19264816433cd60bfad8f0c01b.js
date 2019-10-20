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
      };var element = document.getElementById("d28f29d0-24dd-4c34-aba9-11ea218b1523");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd28f29d0-24dd-4c34-aba9-11ea218b1523' but no matching script tag was found. ")
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
              var docs_json = {"ca1787ba-877e-4600-9296-cdb53827ff33":{"roots":{"references":[{"attributes":{"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6252fd6c-784e-48ec-b366-06fdb06e4515","type":"Line"},{"attributes":{"callback":null},"id":"bd3c8b72-a0db-40b1-a447-435d28688c4c","type":"DataRange1d"},{"attributes":{},"id":"36e889d5-8123-4bfa-b9fb-dafdb21826a0","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,1]}},"id":"aa603bfc-62e0-46e2-977b-fa64f2d77e8a","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"fcb645a5-373f-4a8c-95dd-2ba7f156637c","subtype":"Figure","type":"Plot"},"ticker":{"id":"a02abd10-cd54-49d7-b8e1-3dd2b99ea712","type":"BasicTicker"}},"id":"0f978787-e93e-429a-9d97-31907869e703","type":"Grid"},{"attributes":{},"id":"e760132c-b89b-4f93-a60b-6277fc7a5a40","type":"ToolEvents"},{"attributes":{"line_color":{"value":"pink"},"x":{"field":"x"},"y":{"field":"y"}},"id":"499ce361-ed05-41ed-8808-420a035a2057","type":"Line"},{"attributes":{"data_source":{"id":"aa603bfc-62e0-46e2-977b-fa64f2d77e8a","type":"ColumnDataSource"},"glyph":{"id":"6252fd6c-784e-48ec-b366-06fdb06e4515","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"626c26bd-c5e4-4ce6-976a-30e8a0ef222f","type":"Line"},"selection_glyph":null},"id":"3ffdade4-7ce0-4b79-bcc7-d0bebc225054","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"46adf11d-3bf6-498c-9d00-dbf32c0b246f","type":"LinearAxis"}],"left":[{"id":"8560d1ad-5f10-41d3-b4ca-349ff957cc60","type":"LinearAxis"}],"plot_height":200,"plot_width":500,"renderers":[{"id":"46adf11d-3bf6-498c-9d00-dbf32c0b246f","type":"LinearAxis"},{"id":"938e9b8a-82a7-4e79-a8a6-04e6e513f444","type":"Grid"},{"id":"8560d1ad-5f10-41d3-b4ca-349ff957cc60","type":"LinearAxis"},{"id":"0f978787-e93e-429a-9d97-31907869e703","type":"Grid"},{"id":"3ffdade4-7ce0-4b79-bcc7-d0bebc225054","type":"GlyphRenderer"},{"id":"a0eef37c-72ee-438c-b725-638571f9bff5","type":"GlyphRenderer"}],"title":{"id":"f9d59dc1-de06-4677-b274-0ffba35039fa","type":"Title"},"tool_events":{"id":"e760132c-b89b-4f93-a60b-6277fc7a5a40","type":"ToolEvents"},"toolbar":{"id":"87716a1e-d983-483d-9a54-4e1843cd05b8","type":"Toolbar"},"x_range":{"id":"bd3c8b72-a0db-40b1-a447-435d28688c4c","type":"DataRange1d"},"y_range":{"id":"b8afd71e-7d8b-4126-a6b6-ddc90a347674","type":"DataRange1d"}},"id":"fcb645a5-373f-4a8c-95dd-2ba7f156637c","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9620d5dc-c30b-4653-b64b-43671f328c16","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"87716a1e-d983-483d-9a54-4e1843cd05b8","type":"Toolbar"},{"attributes":{},"id":"60132c53-207a-4e0b-8bc5-aee1df7db73a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"36e889d5-8123-4bfa-b9fb-dafdb21826a0","type":"BasicTickFormatter"},"plot":{"id":"fcb645a5-373f-4a8c-95dd-2ba7f156637c","subtype":"Figure","type":"Plot"},"ticker":{"id":"60132c53-207a-4e0b-8bc5-aee1df7db73a","type":"BasicTicker"},"visible":false},"id":"46adf11d-3bf6-498c-9d00-dbf32c0b246f","type":"LinearAxis"},{"attributes":{"plot":{"id":"fcb645a5-373f-4a8c-95dd-2ba7f156637c","subtype":"Figure","type":"Plot"},"ticker":{"id":"60132c53-207a-4e0b-8bc5-aee1df7db73a","type":"BasicTicker"},"visible":false},"id":"938e9b8a-82a7-4e79-a8a6-04e6e513f444","type":"Grid"},{"attributes":{"callback":null},"id":"b8afd71e-7d8b-4126-a6b6-ddc90a347674","type":"DataRange1d"},{"attributes":{"formatter":{"id":"9620d5dc-c30b-4653-b64b-43671f328c16","type":"BasicTickFormatter"},"plot":{"id":"fcb645a5-373f-4a8c-95dd-2ba7f156637c","subtype":"Figure","type":"Plot"},"ticker":{"id":"a02abd10-cd54-49d7-b8e1-3dd2b99ea712","type":"BasicTicker"}},"id":"8560d1ad-5f10-41d3-b4ca-349ff957cc60","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"af0fdb5e-7c95-414f-badf-61e88fa47ca5","type":"Line"},{"attributes":{"data_source":{"id":"95677b8c-6130-4e8b-973d-bd3e3c87e4f7","type":"ColumnDataSource"},"glyph":{"id":"499ce361-ed05-41ed-8808-420a035a2057","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"af0fdb5e-7c95-414f-badf-61e88fa47ca5","type":"Line"},"selection_glyph":null,"visible":false},"id":"a0eef37c-72ee-438c-b725-638571f9bff5","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[2,1,2]}},"id":"95677b8c-6130-4e8b-973d-bd3e3c87e4f7","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":null},"id":"f9d59dc1-de06-4677-b274-0ffba35039fa","type":"Title"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"626c26bd-c5e4-4ce6-976a-30e8a0ef222f","type":"Line"},{"attributes":{},"id":"a02abd10-cd54-49d7-b8e1-3dd2b99ea712","type":"BasicTicker"}],"root_ids":["fcb645a5-373f-4a8c-95dd-2ba7f156637c"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"ca1787ba-877e-4600-9296-cdb53827ff33","elementid":"d28f29d0-24dd-4c34-aba9-11ea218b1523","modelid":"fcb645a5-373f-4a8c-95dd-2ba7f156637c"}];
              
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