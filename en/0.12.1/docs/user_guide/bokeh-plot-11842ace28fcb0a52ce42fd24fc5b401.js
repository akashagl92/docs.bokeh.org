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
      };var element = document.getElementById("0db9d63f-5945-4712-a607-cc1c6111d8a2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0db9d63f-5945-4712-a607-cc1c6111d8a2' but no matching script tag was found. ")
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
              var docs_json = {"49a6fe7f-dac0-4442-8b89-92ee19c1c9a1":{"roots":{"references":[{"attributes":{"overlay":{"id":"b7ea3306-d4aa-49f1-bc21-47f85fc604b5","type":"BoxAnnotation"},"plot":{"id":"db035633-f3b7-4154-90db-faf48a7b61b2","subtype":"Figure","type":"Plot"}},"id":"4181a4af-b7a2-4f10-b47b-1d707118729e","type":"BoxZoomTool"},{"attributes":{},"id":"d6f36cae-5096-4d49-a99c-fb0218526d1d","type":"BasicTicker"},{"attributes":{"plot":{"id":"db035633-f3b7-4154-90db-faf48a7b61b2","subtype":"Figure","type":"Plot"}},"id":"ff1aebc9-5a6c-4209-b9c0-9e5c2205a100","type":"SaveTool"},{"attributes":{"plot":{"id":"db035633-f3b7-4154-90db-faf48a7b61b2","subtype":"Figure","type":"Plot"},"ticker":{"id":"d6f36cae-5096-4d49-a99c-fb0218526d1d","type":"BasicTicker"}},"id":"e8bd8540-e50d-4b85-b4b4-bcda754057d6","type":"Grid"},{"attributes":{"formatter":{"id":"0b215fb9-90bc-4e8d-a406-fb04b8922043","type":"BasicTickFormatter"},"plot":{"id":"db035633-f3b7-4154-90db-faf48a7b61b2","subtype":"Figure","type":"Plot"},"ticker":{"id":"852ffedd-9f07-4830-b21c-1ec398fc14d0","type":"BasicTicker"}},"id":"4b353ee3-ca39-4f65-a333-5c54bc2f0b65","type":"LinearAxis"},{"attributes":{"plot":{"id":"db035633-f3b7-4154-90db-faf48a7b61b2","subtype":"Figure","type":"Plot"}},"id":"89302c55-21d0-4626-bdf9-ce2c328d2fe3","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["ys","xs","line_color","line_alpha"],"data":{"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]}},"id":"d8b84d67-64b7-4d0d-b642-8c53ee132378","type":"ColumnDataSource"},{"attributes":{},"id":"671d8ee0-450c-4f9b-b504-9c3a04db17da","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cbe67604-3944-412a-8585-56c7ed70020c","type":"PanTool"},{"id":"bf0c1a94-ced5-44d0-8d77-94f55946b126","type":"WheelZoomTool"},{"id":"4181a4af-b7a2-4f10-b47b-1d707118729e","type":"BoxZoomTool"},{"id":"ff1aebc9-5a6c-4209-b9c0-9e5c2205a100","type":"SaveTool"},{"id":"0977d27e-a738-4a5e-aaa0-5c4fd4e0440b","type":"ResetTool"},{"id":"89302c55-21d0-4626-bdf9-ce2c328d2fe3","type":"HelpTool"}]},"id":"d3dfb919-05c8-47d7-8adb-a2ea7c5e8808","type":"Toolbar"},{"attributes":{"data_source":{"id":"d8b84d67-64b7-4d0d-b642-8c53ee132378","type":"ColumnDataSource"},"glyph":{"id":"be1839b8-588b-4a99-9a5b-d9219a6f50b0","type":"MultiLine"},"hover_glyph":null,"nonselection_glyph":{"id":"23d03fd5-533b-40eb-adaf-8cbc4e5b0c5e","type":"MultiLine"},"selection_glyph":null},"id":"8120ea56-4205-4c8c-9323-dd01841a6153","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"db035633-f3b7-4154-90db-faf48a7b61b2","subtype":"Figure","type":"Plot"}},"id":"0977d27e-a738-4a5e-aaa0-5c4fd4e0440b","type":"ResetTool"},{"attributes":{"callback":null},"id":"84ae3f27-f2eb-4a51-8ab2-236ec8462a4e","type":"DataRange1d"},{"attributes":{"below":[{"id":"9ec65516-9b7c-46b4-9b0b-fbc18ecd4253","type":"LinearAxis"}],"left":[{"id":"4b353ee3-ca39-4f65-a333-5c54bc2f0b65","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9ec65516-9b7c-46b4-9b0b-fbc18ecd4253","type":"LinearAxis"},{"id":"e8bd8540-e50d-4b85-b4b4-bcda754057d6","type":"Grid"},{"id":"4b353ee3-ca39-4f65-a333-5c54bc2f0b65","type":"LinearAxis"},{"id":"ff8081d7-385a-4904-b0cf-0f7bb6d5c55a","type":"Grid"},{"id":"b7ea3306-d4aa-49f1-bc21-47f85fc604b5","type":"BoxAnnotation"},{"id":"8120ea56-4205-4c8c-9323-dd01841a6153","type":"GlyphRenderer"}],"title":{"id":"42ab8f44-b1ae-4af1-85a6-453691467f04","type":"Title"},"tool_events":{"id":"56dd4be4-2de5-42e8-a31c-3930467ecb50","type":"ToolEvents"},"toolbar":{"id":"d3dfb919-05c8-47d7-8adb-a2ea7c5e8808","type":"Toolbar"},"x_range":{"id":"84ae3f27-f2eb-4a51-8ab2-236ec8462a4e","type":"DataRange1d"},"y_range":{"id":"ae9d8ea0-1c3f-454b-8838-d46c7227f76b","type":"DataRange1d"}},"id":"db035633-f3b7-4154-90db-faf48a7b61b2","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b7ea3306-d4aa-49f1-bc21-47f85fc604b5","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"671d8ee0-450c-4f9b-b504-9c3a04db17da","type":"BasicTickFormatter"},"plot":{"id":"db035633-f3b7-4154-90db-faf48a7b61b2","subtype":"Figure","type":"Plot"},"ticker":{"id":"d6f36cae-5096-4d49-a99c-fb0218526d1d","type":"BasicTicker"}},"id":"9ec65516-9b7c-46b4-9b0b-fbc18ecd4253","type":"LinearAxis"},{"attributes":{},"id":"852ffedd-9f07-4830-b21c-1ec398fc14d0","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"db035633-f3b7-4154-90db-faf48a7b61b2","subtype":"Figure","type":"Plot"},"ticker":{"id":"852ffedd-9f07-4830-b21c-1ec398fc14d0","type":"BasicTicker"}},"id":"ff8081d7-385a-4904-b0cf-0f7bb6d5c55a","type":"Grid"},{"attributes":{"callback":null},"id":"ae9d8ea0-1c3f-454b-8838-d46c7227f76b","type":"DataRange1d"},{"attributes":{"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"be1839b8-588b-4a99-9a5b-d9219a6f50b0","type":"MultiLine"},{"attributes":{"plot":{"id":"db035633-f3b7-4154-90db-faf48a7b61b2","subtype":"Figure","type":"Plot"}},"id":"cbe67604-3944-412a-8585-56c7ed70020c","type":"PanTool"},{"attributes":{"plot":{"id":"db035633-f3b7-4154-90db-faf48a7b61b2","subtype":"Figure","type":"Plot"}},"id":"bf0c1a94-ced5-44d0-8d77-94f55946b126","type":"WheelZoomTool"},{"attributes":{},"id":"56dd4be4-2de5-42e8-a31c-3930467ecb50","type":"ToolEvents"},{"attributes":{"plot":null,"text":null},"id":"42ab8f44-b1ae-4af1-85a6-453691467f04","type":"Title"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"23d03fd5-533b-40eb-adaf-8cbc4e5b0c5e","type":"MultiLine"},{"attributes":{},"id":"0b215fb9-90bc-4e8d-a406-fb04b8922043","type":"BasicTickFormatter"}],"root_ids":["db035633-f3b7-4154-90db-faf48a7b61b2"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"49a6fe7f-dac0-4442-8b89-92ee19c1c9a1","elementid":"0db9d63f-5945-4712-a607-cc1c6111d8a2","modelid":"db035633-f3b7-4154-90db-faf48a7b61b2"}];
              
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