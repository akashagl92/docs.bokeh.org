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
      };var element = document.getElementById("32230448-0daa-402f-8215-8931f06f9ecb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '32230448-0daa-402f-8215-8931f06f9ecb' but no matching script tag was found. ")
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
              var docs_json = {"74971580-f54c-46da-b952-b9315266ad84":{"roots":{"references":[{"attributes":{"callback":null},"id":"1e7bde11-6e57-4d1b-8617-0a777c318b5d","type":"DataRange1d"},{"attributes":{"data_source":{"id":"2e7393fc-6774-4aef-8a6a-e051796ce68a","type":"ColumnDataSource"},"glyph":{"id":"b9b92120-9ca3-4e14-b74d-f4c9c723e57b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"291708dc-7153-4b09-8146-8fe2d5d29482","type":"Circle"},"selection_glyph":null},"id":"9b9acd24-0e22-483d-aa95-094c76820ac7","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"03687548-e9b2-409a-a3a7-7daf7b6077da","subtype":"Figure","type":"Plot"},"ticker":{"id":"10868cd6-1966-4ca0-aa12-8c69b1192d57","type":"BasicTicker"}},"id":"4eeffe15-a6ac-462d-a4ad-f23b383b95ce","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"63386d8b-ebd3-49b3-b3c4-513f131f5374","type":"PanTool"},{"id":"9bf30054-aaba-4eca-8b93-a0d7d5e3590a","type":"WheelZoomTool"},{"id":"5519e7ed-67af-4a7b-a8d9-6328091fc7e3","type":"BoxZoomTool"},{"id":"16d69a1d-a945-4f9c-8de0-a7d6fa1299e6","type":"SaveTool"},{"id":"2a483e08-8a46-4a57-805c-52950cb24ecf","type":"ResetTool"},{"id":"b5f93a11-5f42-4abb-9e20-928df37613ce","type":"HelpTool"}]},"id":"0f1af6a6-fe90-482d-8008-553a5a3cd3a4","type":"Toolbar"},{"attributes":{},"id":"10868cd6-1966-4ca0-aa12-8c69b1192d57","type":"BasicTicker"},{"attributes":{},"id":"3c1f9aef-abdc-4fba-a1ff-83f6b5aaa28b","type":"ToolEvents"},{"attributes":{"overlay":{"id":"16b9e491-bb1f-47cd-a739-c0e0094f4482","type":"BoxAnnotation"},"plot":{"id":"03687548-e9b2-409a-a3a7-7daf7b6077da","subtype":"Figure","type":"Plot"}},"id":"5519e7ed-67af-4a7b-a8d9-6328091fc7e3","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":null},"id":"2ab5bfd7-d3e4-4c00-9af9-707256f779d4","type":"Title"},{"attributes":{"plot":{"id":"03687548-e9b2-409a-a3a7-7daf7b6077da","subtype":"Figure","type":"Plot"},"ticker":{"id":"ead1ec9d-49ec-4f78-a989-a73e88dd701d","type":"BasicTicker"}},"id":"55583e3a-317d-4ecd-b8ab-225642d6ac49","type":"Grid"},{"attributes":{"callback":null},"id":"bdf932aa-ca23-4dd7-b526-e6259896e4e5","type":"DataRange1d"},{"attributes":{"plot":{"id":"03687548-e9b2-409a-a3a7-7daf7b6077da","subtype":"Figure","type":"Plot"}},"id":"2a483e08-8a46-4a57-805c-52950cb24ecf","type":"ResetTool"},{"attributes":{"formatter":{"id":"3c4d7d51-3b10-47eb-b07e-8f0047e38c22","type":"PrintfTickFormatter"},"plot":{"id":"03687548-e9b2-409a-a3a7-7daf7b6077da","subtype":"Figure","type":"Plot"},"ticker":{"id":"ead1ec9d-49ec-4f78-a989-a73e88dd701d","type":"BasicTicker"}},"id":"667975d7-6424-422b-8eb8-03420a2e70af","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16b9e491-bb1f-47cd-a739-c0e0094f4482","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"667975d7-6424-422b-8eb8-03420a2e70af","type":"LinearAxis"}],"left":[{"id":"7be6a8d2-95d5-4ad2-9380-32a54fbf221b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"667975d7-6424-422b-8eb8-03420a2e70af","type":"LinearAxis"},{"id":"55583e3a-317d-4ecd-b8ab-225642d6ac49","type":"Grid"},{"id":"7be6a8d2-95d5-4ad2-9380-32a54fbf221b","type":"LinearAxis"},{"id":"4eeffe15-a6ac-462d-a4ad-f23b383b95ce","type":"Grid"},{"id":"16b9e491-bb1f-47cd-a739-c0e0094f4482","type":"BoxAnnotation"},{"id":"9b9acd24-0e22-483d-aa95-094c76820ac7","type":"GlyphRenderer"}],"title":{"id":"2ab5bfd7-d3e4-4c00-9af9-707256f779d4","type":"Title"},"tool_events":{"id":"3c1f9aef-abdc-4fba-a1ff-83f6b5aaa28b","type":"ToolEvents"},"toolbar":{"id":"0f1af6a6-fe90-482d-8008-553a5a3cd3a4","type":"Toolbar"},"x_range":{"id":"bdf932aa-ca23-4dd7-b526-e6259896e4e5","type":"DataRange1d"},"y_range":{"id":"1e7bde11-6e57-4d1b-8617-0a777c318b5d","type":"DataRange1d"}},"id":"03687548-e9b2-409a-a3a7-7daf7b6077da","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"291708dc-7153-4b09-8146-8fe2d5d29482","type":"Circle"},{"attributes":{"plot":{"id":"03687548-e9b2-409a-a3a7-7daf7b6077da","subtype":"Figure","type":"Plot"}},"id":"63386d8b-ebd3-49b3-b3c4-513f131f5374","type":"PanTool"},{"attributes":{},"id":"ead1ec9d-49ec-4f78-a989-a73e88dd701d","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b9b92120-9ca3-4e14-b74d-f4c9c723e57b","type":"Circle"},{"attributes":{"format":"%4.1e"},"id":"3c4d7d51-3b10-47eb-b07e-8f0047e38c22","type":"PrintfTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"2e7393fc-6774-4aef-8a6a-e051796ce68a","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"03687548-e9b2-409a-a3a7-7daf7b6077da","subtype":"Figure","type":"Plot"}},"id":"9bf30054-aaba-4eca-8b93-a0d7d5e3590a","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"5d8b4427-30dd-475f-892f-cc29b0484b68","type":"PrintfTickFormatter"},"plot":{"id":"03687548-e9b2-409a-a3a7-7daf7b6077da","subtype":"Figure","type":"Plot"},"ticker":{"id":"10868cd6-1966-4ca0-aa12-8c69b1192d57","type":"BasicTicker"}},"id":"7be6a8d2-95d5-4ad2-9380-32a54fbf221b","type":"LinearAxis"},{"attributes":{"format":"%5.3f mu"},"id":"5d8b4427-30dd-475f-892f-cc29b0484b68","type":"PrintfTickFormatter"},{"attributes":{"plot":{"id":"03687548-e9b2-409a-a3a7-7daf7b6077da","subtype":"Figure","type":"Plot"}},"id":"b5f93a11-5f42-4abb-9e20-928df37613ce","type":"HelpTool"},{"attributes":{"plot":{"id":"03687548-e9b2-409a-a3a7-7daf7b6077da","subtype":"Figure","type":"Plot"}},"id":"16d69a1d-a945-4f9c-8de0-a7d6fa1299e6","type":"SaveTool"}],"root_ids":["03687548-e9b2-409a-a3a7-7daf7b6077da"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"74971580-f54c-46da-b952-b9315266ad84","elementid":"32230448-0daa-402f-8215-8931f06f9ecb","modelid":"03687548-e9b2-409a-a3a7-7daf7b6077da"}];
              
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