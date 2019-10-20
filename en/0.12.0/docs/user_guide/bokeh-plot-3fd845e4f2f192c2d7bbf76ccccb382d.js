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
      };var element = document.getElementById("b4d4fa6c-ccc9-41db-bdde-f30875ba7908");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b4d4fa6c-ccc9-41db-bdde-f30875ba7908' but no matching script tag was found. ")
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
              var docs_json = {"b5760c14-e1de-4406-b8bd-595c8a149e19":{"roots":{"references":[{"attributes":{"below":[{"id":"f1d4c8aa-1ca4-412d-9a72-a32a80c61b8f","type":"LinearAxis"}],"left":[{"id":"7c19b829-9405-4fc4-b452-e9c13494cd1b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f1d4c8aa-1ca4-412d-9a72-a32a80c61b8f","type":"LinearAxis"},{"id":"648d849b-de02-499a-81d9-862262d50c00","type":"Grid"},{"id":"7c19b829-9405-4fc4-b452-e9c13494cd1b","type":"LinearAxis"},{"id":"fe002e94-718e-457d-a567-a96ca67508d4","type":"Grid"},{"id":"783f2313-fd41-4c11-b208-8e6d1ea7d728","type":"BoxAnnotation"},{"id":"fbfb5afb-e335-4796-a405-0070ef819215","type":"GlyphRenderer"}],"title":{"id":"b4a93481-14e0-4d64-ae3a-3a17d9757ffa","type":"Title"},"tool_events":{"id":"66af266d-bc07-4e8b-abbc-f729d0e533ac","type":"ToolEvents"},"toolbar":{"id":"26813d3a-d326-4ccc-87df-5d7c1993209a","type":"Toolbar"},"x_range":{"id":"98c6be4d-3849-4062-9c52-447a7448df6f","type":"DataRange1d"},"y_range":{"id":"15163061-87cb-4c66-95a4-ea7c99f9ad30","type":"DataRange1d"}},"id":"23616218-0c88-4af3-b563-5a497876c778","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f4fec89f-eb57-4d62-ae38-232e68eddd8c","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3fbe7d97-359d-4800-8774-e84c37419fba","type":"Circle"},{"attributes":{"axis_label":"Pressure","formatter":{"id":"f4fec89f-eb57-4d62-ae38-232e68eddd8c","type":"BasicTickFormatter"},"major_label_orientation":"vertical","major_label_text_color":{"value":"orange"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"23616218-0c88-4af3-b563-5a497876c778","subtype":"Figure","type":"Plot"},"ticker":{"id":"4520a2b0-1b64-4b9f-ae74-50c4c4b2acfc","type":"BasicTicker"}},"id":"7c19b829-9405-4fc4-b452-e9c13494cd1b","type":"LinearAxis"},{"attributes":{"callback":null},"id":"15163061-87cb-4c66-95a4-ea7c99f9ad30","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"807d74aa-c027-4b6b-aa5b-467a9cd5eb5b","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"783f2313-fd41-4c11-b208-8e6d1ea7d728","type":"BoxAnnotation"},"plot":{"id":"23616218-0c88-4af3-b563-5a497876c778","subtype":"Figure","type":"Plot"}},"id":"825a584f-3730-43a5-9f44-77ff6291b847","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"783f2313-fd41-4c11-b208-8e6d1ea7d728","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"08a4b185-6d1e-420f-b42f-e2b14517f780","type":"Circle"},{"attributes":{"plot":{"id":"23616218-0c88-4af3-b563-5a497876c778","subtype":"Figure","type":"Plot"}},"id":"d6096439-2d29-4af1-ac8f-5c1d245ae579","type":"HelpTool"},{"attributes":{"plot":{"id":"23616218-0c88-4af3-b563-5a497876c778","subtype":"Figure","type":"Plot"}},"id":"d366b3bb-684c-4e40-a441-344437819600","type":"SaveTool"},{"attributes":{"axis_label":"Temp","axis_line_color":{"value":"red"},"axis_line_width":{"value":3},"formatter":{"id":"43b9eec3-fe70-4465-ad15-f1c3737f5c87","type":"BasicTickFormatter"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"23616218-0c88-4af3-b563-5a497876c778","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1f0b7a0-9f1f-4145-85f0-baea5a306aed","type":"BasicTicker"}},"id":"f1d4c8aa-1ca4-412d-9a72-a32a80c61b8f","type":"LinearAxis"},{"attributes":{},"id":"43b9eec3-fe70-4465-ad15-f1c3737f5c87","type":"BasicTickFormatter"},{"attributes":{},"id":"66af266d-bc07-4e8b-abbc-f729d0e533ac","type":"ToolEvents"},{"attributes":{"plot":{"id":"23616218-0c88-4af3-b563-5a497876c778","subtype":"Figure","type":"Plot"}},"id":"12b7154e-8e2e-4e0f-976d-41ee21061f98","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"23616218-0c88-4af3-b563-5a497876c778","subtype":"Figure","type":"Plot"},"ticker":{"id":"4520a2b0-1b64-4b9f-ae74-50c4c4b2acfc","type":"BasicTicker"}},"id":"fe002e94-718e-457d-a567-a96ca67508d4","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cbee28ca-c3a9-4671-abc8-5a653ce83774","type":"PanTool"},{"id":"12b7154e-8e2e-4e0f-976d-41ee21061f98","type":"WheelZoomTool"},{"id":"825a584f-3730-43a5-9f44-77ff6291b847","type":"BoxZoomTool"},{"id":"d366b3bb-684c-4e40-a441-344437819600","type":"SaveTool"},{"id":"dbdd6720-3eac-4167-906e-baabdc437ba5","type":"ResetTool"},{"id":"d6096439-2d29-4af1-ac8f-5c1d245ae579","type":"HelpTool"}]},"id":"26813d3a-d326-4ccc-87df-5d7c1993209a","type":"Toolbar"},{"attributes":{},"id":"4520a2b0-1b64-4b9f-ae74-50c4c4b2acfc","type":"BasicTicker"},{"attributes":{"plot":null,"text":null},"id":"b4a93481-14e0-4d64-ae3a-3a17d9757ffa","type":"Title"},{"attributes":{"callback":null},"id":"98c6be4d-3849-4062-9c52-447a7448df6f","type":"DataRange1d"},{"attributes":{"plot":{"id":"23616218-0c88-4af3-b563-5a497876c778","subtype":"Figure","type":"Plot"}},"id":"cbee28ca-c3a9-4671-abc8-5a653ce83774","type":"PanTool"},{"attributes":{"data_source":{"id":"807d74aa-c027-4b6b-aa5b-467a9cd5eb5b","type":"ColumnDataSource"},"glyph":{"id":"3fbe7d97-359d-4800-8774-e84c37419fba","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"08a4b185-6d1e-420f-b42f-e2b14517f780","type":"Circle"},"selection_glyph":null},"id":"fbfb5afb-e335-4796-a405-0070ef819215","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"23616218-0c88-4af3-b563-5a497876c778","subtype":"Figure","type":"Plot"}},"id":"dbdd6720-3eac-4167-906e-baabdc437ba5","type":"ResetTool"},{"attributes":{"plot":{"id":"23616218-0c88-4af3-b563-5a497876c778","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1f0b7a0-9f1f-4145-85f0-baea5a306aed","type":"BasicTicker"}},"id":"648d849b-de02-499a-81d9-862262d50c00","type":"Grid"},{"attributes":{},"id":"f1f0b7a0-9f1f-4145-85f0-baea5a306aed","type":"BasicTicker"}],"root_ids":["23616218-0c88-4af3-b563-5a497876c778"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"b5760c14-e1de-4406-b8bd-595c8a149e19","elementid":"b4d4fa6c-ccc9-41db-bdde-f30875ba7908","modelid":"23616218-0c88-4af3-b563-5a497876c778"}];
              
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