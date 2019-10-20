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
      };var element = document.getElementById("bbcabd45-dfed-45d3-80fa-7db6e805f9e1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bbcabd45-dfed-45d3-80fa-7db6e805f9e1' but no matching script tag was found. ")
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
              var docs_json = {"f1150590-61a4-4cee-a3ed-490fb85bdc61":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[2,3,5,6,8,7],"y":[6,4,3,8,7,5]}},"id":"53cd56d1-c49e-4ce9-864a-1796dbfaadcb","type":"ColumnDataSource"},{"attributes":{"callback":{"id":"23b1fd40-3565-4cf4-a1d2-d0a54df57cce","type":"CustomJS"},"plot":{"id":"205ce84d-8da2-46ef-9847-6217143b379f","subtype":"Figure","type":"Plot"},"renderers":[{"id":"43d343e5-f53c-48d6-a442-9ee398c2aa29","type":"GlyphRenderer"}],"tooltips":null},"id":"2bc4f559-9802-49b1-b873-45fddb2b6273","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"97a53fe5-8eba-48d8-998f-ac5aa35ede7d","type":"Circle"},{"attributes":{"data_source":{"id":"53cd56d1-c49e-4ce9-864a-1796dbfaadcb","type":"ColumnDataSource"},"glyph":{"id":"26298b48-a6dc-4e37-b28d-f53e5ff13da5","type":"Circle"},"hover_glyph":{"id":"9f102a2c-3a85-4a64-b3b3-fc80805a9118","type":"Circle"},"nonselection_glyph":{"id":"97a53fe5-8eba-48d8-998f-ac5aa35ede7d","type":"Circle"},"selection_glyph":null},"id":"43d343e5-f53c-48d6-a442-9ee398c2aa29","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"olive"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"00aa3216-f9a0-49fc-8bd4-2a0e97a21b04","type":"Segment"},{"attributes":{},"id":"f3c27a8f-1681-4623-bc2b-e67837199fb6","type":"BasicTickFormatter"},{"attributes":{},"id":"f0de01d8-f97d-46a1-8922-6e099fff0099","type":"BasicTicker"},{"attributes":{},"id":"388bb823-d23b-4aae-8db8-6b52ecf35797","type":"ToolEvents"},{"attributes":{"formatter":{"id":"f3c27a8f-1681-4623-bc2b-e67837199fb6","type":"BasicTickFormatter"},"plot":{"id":"205ce84d-8da2-46ef-9847-6217143b379f","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0de01d8-f97d-46a1-8922-6e099fff0099","type":"BasicTicker"}},"id":"a16e10b2-5495-414d-8782-dc6938de2e6d","type":"LinearAxis"},{"attributes":{"args":{"circle":{"id":"53cd56d1-c49e-4ce9-864a-1796dbfaadcb","type":"ColumnDataSource"},"segment":{"id":"7de5d20b-4227-4dab-b69d-f150277c97f1","type":"ColumnDataSource"}},"code":"\nvar links = {0: [1, 2], 1: [0, 3, 4], 2: [0, 5], 3: [1, 4], 4: [1, 3], 5: [2, 3, 4]};\nvar data = {'x0': [], 'y0': [], 'x1': [], 'y1': []};\nvar cdata = circle.get('data');\nvar indices = cb_data.index['1d'].indices;\nfor (i=0; i < indices.length; i++) {\n    ind0 = indices[i]\n    for (j=0; j < links[ind0].length; j++) {\n        ind1 = links[ind0][j];\n        data['x0'].push(cdata.x[ind0]);\n        data['y0'].push(cdata.y[ind0]);\n        data['x1'].push(cdata.x[ind1]);\n        data['y1'].push(cdata.y[ind1]);\n    }\n}\nsegment.set('data', data);\n"},"id":"23b1fd40-3565-4cf4-a1d2-d0a54df57cce","type":"CustomJS"},{"attributes":{},"id":"fef94306-4530-4f61-9bc0-04e3a4283070","type":"BasicTickFormatter"},{"attributes":{},"id":"abf27039-1b83-44e8-8d9c-36e219b0b5cb","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f75fb58b-cf1c-445e-a423-3729ce6de08e","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Hover over points"},"id":"8b0ad242-2326-46a3-ac8f-d1f33bf3dc6f","type":"Title"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"olive"},"line_alpha":{"value":0.4},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"26298b48-a6dc-4e37-b28d-f53e5ff13da5","type":"Circle"},{"attributes":{"below":[{"id":"fa9313f9-ad1c-4dec-9f5f-bdbcb68fb3e5","type":"LinearAxis"}],"left":[{"id":"a16e10b2-5495-414d-8782-dc6938de2e6d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"fa9313f9-ad1c-4dec-9f5f-bdbcb68fb3e5","type":"LinearAxis"},{"id":"46066cf3-1a41-4d8f-99f6-2a55e7832361","type":"Grid"},{"id":"a16e10b2-5495-414d-8782-dc6938de2e6d","type":"LinearAxis"},{"id":"d4ff18d3-c3ed-4b3a-a5a3-69b3ba8b4f92","type":"Grid"},{"id":"6722b068-7514-4c89-aea4-11d40275d0a8","type":"GlyphRenderer"},{"id":"43d343e5-f53c-48d6-a442-9ee398c2aa29","type":"GlyphRenderer"}],"title":{"id":"8b0ad242-2326-46a3-ac8f-d1f33bf3dc6f","type":"Title"},"tool_events":{"id":"388bb823-d23b-4aae-8db8-6b52ecf35797","type":"ToolEvents"},"toolbar":{"id":"4a81ab3e-7129-42ac-b647-e48ec72be1b2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b61baa11-8829-4ddd-9c63-ce2277e8316a","type":"DataRange1d"},"y_range":{"id":"f75fb58b-cf1c-445e-a423-3729ce6de08e","type":"DataRange1d"}},"id":"205ce84d-8da2-46ef-9847-6217143b379f","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"205ce84d-8da2-46ef-9847-6217143b379f","subtype":"Figure","type":"Plot"},"ticker":{"id":"abf27039-1b83-44e8-8d9c-36e219b0b5cb","type":"BasicTicker"}},"id":"46066cf3-1a41-4d8f-99f6-2a55e7832361","type":"Grid"},{"attributes":{"callback":null,"column_names":["y1","y0","x0","x1"],"data":{"x0":[],"x1":[],"y0":[],"y1":[]}},"id":"7de5d20b-4227-4dab-b69d-f150277c97f1","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"fef94306-4530-4f61-9bc0-04e3a4283070","type":"BasicTickFormatter"},"plot":{"id":"205ce84d-8da2-46ef-9847-6217143b379f","subtype":"Figure","type":"Plot"},"ticker":{"id":"abf27039-1b83-44e8-8d9c-36e219b0b5cb","type":"BasicTicker"}},"id":"fa9313f9-ad1c-4dec-9f5f-bdbcb68fb3e5","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2bc4f559-9802-49b1-b873-45fddb2b6273","type":"HoverTool"}]},"id":"4a81ab3e-7129-42ac-b647-e48ec72be1b2","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"205ce84d-8da2-46ef-9847-6217143b379f","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0de01d8-f97d-46a1-8922-6e099fff0099","type":"BasicTicker"}},"id":"d4ff18d3-c3ed-4b3a-a5a3-69b3ba8b4f92","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"211bcd30-b9cf-4f41-999b-7fd0d1cc2150","type":"Segment"},{"attributes":{"callback":null},"id":"b61baa11-8829-4ddd-9c63-ce2277e8316a","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"9f102a2c-3a85-4a64-b3b3-fc80805a9118","type":"Circle"},{"attributes":{"data_source":{"id":"7de5d20b-4227-4dab-b69d-f150277c97f1","type":"ColumnDataSource"},"glyph":{"id":"00aa3216-f9a0-49fc-8bd4-2a0e97a21b04","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"211bcd30-b9cf-4f41-999b-7fd0d1cc2150","type":"Segment"},"selection_glyph":null},"id":"6722b068-7514-4c89-aea4-11d40275d0a8","type":"GlyphRenderer"}],"root_ids":["205ce84d-8da2-46ef-9847-6217143b379f"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"f1150590-61a4-4cee-a3ed-490fb85bdc61","elementid":"bbcabd45-dfed-45d3-80fa-7db6e805f9e1","modelid":"205ce84d-8da2-46ef-9847-6217143b379f"}];
              
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