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
      };var element = document.getElementById("874ad8ae-51e0-42f7-82d7-4b71d451d4e0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '874ad8ae-51e0-42f7-82d7-4b71d451d4e0' but no matching script tag was found. ")
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
              var docs_json = {"495e6cb4-c97f-4313-8a35-d5b8eaaaa802":{"roots":{"references":[{"attributes":{"formatter":{"id":"e448c1b0-3d1d-4e04-80e0-9f276bc90358","type":"BasicTickFormatter"},"plot":{"id":"5fb06151-be41-4b5a-b768-4ef35069451e","subtype":"Figure","type":"Plot"},"ticker":{"id":"03914bec-7bc6-4a6f-a0f6-aa7ee7451295","type":"BasicTicker"}},"id":"d7717923-e276-42b4-917a-1bafa10d0ee8","type":"LinearAxis"},{"attributes":{"data_source":{"id":"3732fa53-8f1a-4221-9028-1448e1a944ef","type":"ColumnDataSource"},"glyph":{"id":"bb2f2791-9f9a-4d31-81f1-65bd1a6175a7","type":"Circle"},"hover_glyph":{"id":"0dbfa9f0-ac34-4f0b-bdb8-b923fb4fedac","type":"Circle"},"nonselection_glyph":{"id":"e3e07c74-c3fa-4083-b705-2d63b21ffd13","type":"Circle"},"selection_glyph":null},"id":"cabbffc6-efe1-4ec2-bac2-3c8687ffa631","type":"GlyphRenderer"},{"attributes":{"args":{"circle":{"id":"3732fa53-8f1a-4221-9028-1448e1a944ef","type":"ColumnDataSource"},"segment":{"id":"b7602ac8-f1e0-47a6-a70f-ff5e8a70cf38","type":"ColumnDataSource"}},"code":"\nvar links = {0: [1, 2], 1: [0, 3, 4], 2: [0, 5], 3: [1, 4], 4: [1, 3], 5: [2, 3, 4]};\nvar data = {'x0': [], 'y0': [], 'x1': [], 'y1': []};\nvar cdata = circle.get('data');\nvar indices = cb_data.index['1d'].indices;\nfor (i=0; i < indices.length; i++) {\n    ind0 = indices[i]\n    for (j=0; j < links[ind0].length; j++) {\n        ind1 = links[ind0][j];\n        data['x0'].push(cdata.x[ind0]);\n        data['y0'].push(cdata.y[ind0]);\n        data['x1'].push(cdata.x[ind1]);\n        data['y1'].push(cdata.y[ind1]);\n    }\n}\nsegment.set('data', data);\n"},"id":"c3519cb3-e962-4f4a-96ce-b77a252fe62b","type":"CustomJS"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"olive"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"b9fe720c-fe0e-4b11-b91f-7740c4147c9b","type":"Segment"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"2556aadf-5665-4167-84ce-94e828bcb460","type":"Segment"},{"attributes":{"callback":null,"column_names":["y1","y0","x0","x1"],"data":{"x0":[],"x1":[],"y0":[],"y1":[]}},"id":"b7602ac8-f1e0-47a6-a70f-ff5e8a70cf38","type":"ColumnDataSource"},{"attributes":{},"id":"03914bec-7bc6-4a6f-a0f6-aa7ee7451295","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"0dbfa9f0-ac34-4f0b-bdb8-b923fb4fedac","type":"Circle"},{"attributes":{"callback":null},"id":"93df6bea-c7f9-44c7-a3ea-4b02649eb5e3","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"5fb06151-be41-4b5a-b768-4ef35069451e","subtype":"Figure","type":"Plot"},"ticker":{"id":"03914bec-7bc6-4a6f-a0f6-aa7ee7451295","type":"BasicTicker"}},"id":"4cb3488e-eb1c-4691-a6bd-425475fa8b31","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[2,3,5,6,8,7],"y":[6,4,3,8,7,5]}},"id":"3732fa53-8f1a-4221-9028-1448e1a944ef","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b7602ac8-f1e0-47a6-a70f-ff5e8a70cf38","type":"ColumnDataSource"},"glyph":{"id":"b9fe720c-fe0e-4b11-b91f-7740c4147c9b","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"2556aadf-5665-4167-84ce-94e828bcb460","type":"Segment"},"selection_glyph":null},"id":"a73e3400-7c36-443a-8efb-7796c7a4b167","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"a3bc9006-87e8-4bbf-a7c9-30c0ec2d50af","type":"LinearAxis"}],"left":[{"id":"d7717923-e276-42b4-917a-1bafa10d0ee8","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a3bc9006-87e8-4bbf-a7c9-30c0ec2d50af","type":"LinearAxis"},{"id":"0ebecf97-e442-4ea0-a293-ca6d6fdf2a72","type":"Grid"},{"id":"d7717923-e276-42b4-917a-1bafa10d0ee8","type":"LinearAxis"},{"id":"4cb3488e-eb1c-4691-a6bd-425475fa8b31","type":"Grid"},{"id":"a73e3400-7c36-443a-8efb-7796c7a4b167","type":"GlyphRenderer"},{"id":"cabbffc6-efe1-4ec2-bac2-3c8687ffa631","type":"GlyphRenderer"}],"title":{"id":"8e172bf8-90d6-43f3-88af-f09ea5d1ec94","type":"Title"},"tool_events":{"id":"58ef517c-10cb-4615-b776-c77c32e7f525","type":"ToolEvents"},"toolbar":{"id":"a9f7d5ae-121a-462b-9cab-a9477b9c824a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"85f39251-9cb3-4dc0-a4b3-ddf8110d7941","type":"DataRange1d"},"y_range":{"id":"93df6bea-c7f9-44c7-a3ea-4b02649eb5e3","type":"DataRange1d"}},"id":"5fb06151-be41-4b5a-b768-4ef35069451e","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Hover over points"},"id":"8e172bf8-90d6-43f3-88af-f09ea5d1ec94","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7618ef6d-45a5-4fda-b948-2534fa97f974","type":"HoverTool"}]},"id":"a9f7d5ae-121a-462b-9cab-a9477b9c824a","type":"Toolbar"},{"attributes":{"callback":null},"id":"85f39251-9cb3-4dc0-a4b3-ddf8110d7941","type":"DataRange1d"},{"attributes":{"formatter":{"id":"2f2b39c3-bf17-47e1-80b4-11dbb0682e57","type":"BasicTickFormatter"},"plot":{"id":"5fb06151-be41-4b5a-b768-4ef35069451e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ca812aad-f541-438c-9f8f-a12d4a72b36c","type":"BasicTicker"}},"id":"a3bc9006-87e8-4bbf-a7c9-30c0ec2d50af","type":"LinearAxis"},{"attributes":{},"id":"ca812aad-f541-438c-9f8f-a12d4a72b36c","type":"BasicTicker"},{"attributes":{},"id":"2f2b39c3-bf17-47e1-80b4-11dbb0682e57","type":"BasicTickFormatter"},{"attributes":{},"id":"e448c1b0-3d1d-4e04-80e0-9f276bc90358","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"olive"},"line_alpha":{"value":0.4},"line_color":{"value":"olive"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"bb2f2791-9f9a-4d31-81f1-65bd1a6175a7","type":"Circle"},{"attributes":{"callback":{"id":"c3519cb3-e962-4f4a-96ce-b77a252fe62b","type":"CustomJS"},"plot":{"id":"5fb06151-be41-4b5a-b768-4ef35069451e","subtype":"Figure","type":"Plot"},"renderers":[{"id":"cabbffc6-efe1-4ec2-bac2-3c8687ffa631","type":"GlyphRenderer"}],"tooltips":null},"id":"7618ef6d-45a5-4fda-b948-2534fa97f974","type":"HoverTool"},{"attributes":{"plot":{"id":"5fb06151-be41-4b5a-b768-4ef35069451e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ca812aad-f541-438c-9f8f-a12d4a72b36c","type":"BasicTicker"}},"id":"0ebecf97-e442-4ea0-a293-ca6d6fdf2a72","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"e3e07c74-c3fa-4083-b705-2d63b21ffd13","type":"Circle"},{"attributes":{},"id":"58ef517c-10cb-4615-b776-c77c32e7f525","type":"ToolEvents"}],"root_ids":["5fb06151-be41-4b5a-b768-4ef35069451e"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"495e6cb4-c97f-4313-8a35-d5b8eaaaa802","elementid":"874ad8ae-51e0-42f7-82d7-4b71d451d4e0","modelid":"5fb06151-be41-4b5a-b768-4ef35069451e"}];
              
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