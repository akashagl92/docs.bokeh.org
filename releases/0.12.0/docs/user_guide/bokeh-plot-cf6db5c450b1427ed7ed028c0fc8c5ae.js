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
      };var element = document.getElementById("10cc170b-4dcc-4b3d-8b86-d6d15e99bab5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '10cc170b-4dcc-4b3d-8b86-d6d15e99bab5' but no matching script tag was found. ")
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
              var docs_json = {"39a91126-b231-4466-b8f0-e879bb69a8b4":{"roots":{"references":[{"attributes":{"plot":null,"text":null},"id":"3ee34752-cc64-43e5-9b5b-bb27a76a17cf","type":"Title"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"99434169-1025-49fd-a070-c1943ae8690a","type":"Segment"},{"attributes":{},"id":"f5aadcc6-c94f-4b3b-89bb-c3717f274a89","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d73cb707-c773-4759-a091-efff8971ace3","subtype":"Figure","type":"Plot"}},"id":"26daabcf-a2f4-4338-ac73-79833941acd3","type":"PanTool"},{"attributes":{},"id":"bfaf90a6-2f36-44c2-aa41-586fa668db5c","type":"ToolEvents"},{"attributes":{"plot":{"id":"d73cb707-c773-4759-a091-efff8971ace3","subtype":"Figure","type":"Plot"},"ticker":{"id":"9a4d3c30-750c-4c5a-8f43-c6ceac02f94b","type":"BasicTicker"}},"id":"d75a35c4-ffe9-43cf-9477-6a17c74c51d7","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"d73cb707-c773-4759-a091-efff8971ace3","subtype":"Figure","type":"Plot"},"ticker":{"id":"2097dc5a-7640-4762-954e-e4e891fcccd6","type":"BasicTicker"}},"id":"fca25e55-9ef0-48b4-8a5e-30d97e36f952","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a92935b8-9da7-4f49-a537-2a81c881fd74","type":"BoxAnnotation"},{"attributes":{},"id":"9a4d3c30-750c-4c5a-8f43-c6ceac02f94b","type":"BasicTicker"},{"attributes":{"plot":{"id":"d73cb707-c773-4759-a091-efff8971ace3","subtype":"Figure","type":"Plot"}},"id":"0f722aaf-3efd-4051-a595-0019157d066f","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y1","y0","x0","x1"],"data":{"x0":[1,2,3],"x1":[1.2,2.4,3.1],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"24d41331-0516-409a-9380-39a6d5e06b0b","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"224890b3-fbc1-4888-a588-7e7b69995d41","type":"Segment"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"26daabcf-a2f4-4338-ac73-79833941acd3","type":"PanTool"},{"id":"c8ce9ce9-f7e8-4af6-802e-1f8d9d263c70","type":"WheelZoomTool"},{"id":"e58cd330-5753-47d8-a10e-90be8f7f55d4","type":"BoxZoomTool"},{"id":"0f722aaf-3efd-4051-a595-0019157d066f","type":"SaveTool"},{"id":"7b8742be-0801-49c2-8ace-239d6cc5b6df","type":"ResetTool"},{"id":"1b4a338c-b0b8-4530-8a8f-7329ab5794f0","type":"HelpTool"}]},"id":"6e166384-4e95-4225-8b4c-a7ef4185a21b","type":"Toolbar"},{"attributes":{},"id":"b0477ffb-10d4-46fe-bc73-0f7366953b5c","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"3281701d-cb4a-4f4a-83bb-8ce44d5f5872","type":"DataRange1d"},{"attributes":{"formatter":{"id":"f5aadcc6-c94f-4b3b-89bb-c3717f274a89","type":"BasicTickFormatter"},"plot":{"id":"d73cb707-c773-4759-a091-efff8971ace3","subtype":"Figure","type":"Plot"},"ticker":{"id":"2097dc5a-7640-4762-954e-e4e891fcccd6","type":"BasicTicker"}},"id":"aeafd964-cb39-461a-9bba-a971b475475f","type":"LinearAxis"},{"attributes":{"plot":{"id":"d73cb707-c773-4759-a091-efff8971ace3","subtype":"Figure","type":"Plot"}},"id":"c8ce9ce9-f7e8-4af6-802e-1f8d9d263c70","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"d73cb707-c773-4759-a091-efff8971ace3","subtype":"Figure","type":"Plot"}},"id":"1b4a338c-b0b8-4530-8a8f-7329ab5794f0","type":"HelpTool"},{"attributes":{"formatter":{"id":"b0477ffb-10d4-46fe-bc73-0f7366953b5c","type":"BasicTickFormatter"},"plot":{"id":"d73cb707-c773-4759-a091-efff8971ace3","subtype":"Figure","type":"Plot"},"ticker":{"id":"9a4d3c30-750c-4c5a-8f43-c6ceac02f94b","type":"BasicTicker"}},"id":"f2dda73c-bf57-4a9d-8c06-a99c42d0a7e7","type":"LinearAxis"},{"attributes":{"data_source":{"id":"24d41331-0516-409a-9380-39a6d5e06b0b","type":"ColumnDataSource"},"glyph":{"id":"224890b3-fbc1-4888-a588-7e7b69995d41","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"99434169-1025-49fd-a070-c1943ae8690a","type":"Segment"},"selection_glyph":null},"id":"de7f9dfb-0b1f-40f7-88bf-62a0983aabee","type":"GlyphRenderer"},{"attributes":{},"id":"2097dc5a-7640-4762-954e-e4e891fcccd6","type":"BasicTicker"},{"attributes":{"plot":{"id":"d73cb707-c773-4759-a091-efff8971ace3","subtype":"Figure","type":"Plot"}},"id":"7b8742be-0801-49c2-8ace-239d6cc5b6df","type":"ResetTool"},{"attributes":{"overlay":{"id":"a92935b8-9da7-4f49-a537-2a81c881fd74","type":"BoxAnnotation"},"plot":{"id":"d73cb707-c773-4759-a091-efff8971ace3","subtype":"Figure","type":"Plot"}},"id":"e58cd330-5753-47d8-a10e-90be8f7f55d4","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"96e1b01e-7fa2-42eb-b332-566d5cca3ad3","type":"DataRange1d"},{"attributes":{"below":[{"id":"f2dda73c-bf57-4a9d-8c06-a99c42d0a7e7","type":"LinearAxis"}],"left":[{"id":"aeafd964-cb39-461a-9bba-a971b475475f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f2dda73c-bf57-4a9d-8c06-a99c42d0a7e7","type":"LinearAxis"},{"id":"d75a35c4-ffe9-43cf-9477-6a17c74c51d7","type":"Grid"},{"id":"aeafd964-cb39-461a-9bba-a971b475475f","type":"LinearAxis"},{"id":"fca25e55-9ef0-48b4-8a5e-30d97e36f952","type":"Grid"},{"id":"a92935b8-9da7-4f49-a537-2a81c881fd74","type":"BoxAnnotation"},{"id":"de7f9dfb-0b1f-40f7-88bf-62a0983aabee","type":"GlyphRenderer"}],"title":{"id":"3ee34752-cc64-43e5-9b5b-bb27a76a17cf","type":"Title"},"tool_events":{"id":"bfaf90a6-2f36-44c2-aa41-586fa668db5c","type":"ToolEvents"},"toolbar":{"id":"6e166384-4e95-4225-8b4c-a7ef4185a21b","type":"Toolbar"},"x_range":{"id":"96e1b01e-7fa2-42eb-b332-566d5cca3ad3","type":"DataRange1d"},"y_range":{"id":"3281701d-cb4a-4f4a-83bb-8ce44d5f5872","type":"DataRange1d"}},"id":"d73cb707-c773-4759-a091-efff8971ace3","subtype":"Figure","type":"Plot"}],"root_ids":["d73cb707-c773-4759-a091-efff8971ace3"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"39a91126-b231-4466-b8f0-e879bb69a8b4","elementid":"10cc170b-4dcc-4b3d-8b86-d6d15e99bab5","modelid":"d73cb707-c773-4759-a091-efff8971ace3"}];
              
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