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
      };var element = document.getElementById("c64c7b2b-884a-4738-a56c-3b712bfe9241");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c64c7b2b-884a-4738-a56c-3b712bfe9241' but no matching script tag was found. ")
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
              var docs_json = {"a749083f-a53b-4570-928b-4b9a09dfc2c7":{"roots":{"references":[{"attributes":{"plot":{"id":"0fcc8395-e450-469f-8a0d-6774767e25df","subtype":"Figure","type":"Plot"}},"id":"51fb8b3e-1f50-4ee7-8bba-12c15b0c00e6","type":"HelpTool"},{"attributes":{"below":[{"id":"4148a4e9-ca21-452c-9395-42d77cb1d902","type":"LinearAxis"}],"left":[{"id":"a6b53b21-2dff-435a-877b-cd465dc8671f","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"4148a4e9-ca21-452c-9395-42d77cb1d902","type":"LinearAxis"},{"id":"736a3aad-de96-43c5-a364-ada49ef111c1","type":"Grid"},{"id":"a6b53b21-2dff-435a-877b-cd465dc8671f","type":"LinearAxis"},{"id":"6ccb320a-d528-47bb-adb2-f7d5127bf245","type":"Grid"},{"id":"53983cb5-1400-4dc9-8582-327afaa72426","type":"BoxAnnotation"},{"id":"a4b2195d-60fe-4fd9-a938-4b7aefd65831","type":"GlyphRenderer"}],"title":{"id":"330945c9-c0d7-4d51-bf83-dd20a5db4672","type":"Title"},"tool_events":{"id":"cb2e42fa-d97d-47f4-9c6d-470a330079f2","type":"ToolEvents"},"toolbar":{"id":"4728b7af-1fe0-4ea7-acb7-ab0c6dd31bd2","type":"Toolbar"},"x_range":{"id":"bd088796-09b7-4352-bcde-8b08959af140","type":"DataRange1d"},"y_range":{"id":"20128d9c-3721-43ee-bb06-abf32fbf8fee","type":"DataRange1d"}},"id":"0fcc8395-e450-469f-8a0d-6774767e25df","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"20128d9c-3721-43ee-bb06-abf32fbf8fee","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"11e9eb9f-0d09-4445-8049-e2b44c73f763","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2e481e97-db99-44be-81e3-35f2a66f2c9a","type":"PanTool"},{"id":"871505a0-1021-429d-9401-d8166e2bfd3d","type":"WheelZoomTool"},{"id":"7bebdb02-d05f-4d16-97fc-d965479c9fdf","type":"BoxZoomTool"},{"id":"81c9a76b-33f9-4fef-aebb-5cf435a79497","type":"SaveTool"},{"id":"d2103520-7ead-47aa-9291-d9745820a1c1","type":"ResetTool"},{"id":"51fb8b3e-1f50-4ee7-8bba-12c15b0c00e6","type":"HelpTool"}]},"id":"4728b7af-1fe0-4ea7-acb7-ab0c6dd31bd2","type":"Toolbar"},{"attributes":{},"id":"e1ca9f35-1a02-4cc9-a408-fc9e88fe9218","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"0fcc8395-e450-469f-8a0d-6774767e25df","subtype":"Figure","type":"Plot"},"ticker":{"id":"5f04a93f-cf0c-4a5c-96c4-1dbad506439d","type":"BasicTicker"}},"id":"6ccb320a-d528-47bb-adb2-f7d5127bf245","type":"Grid"},{"attributes":{"plot":{"id":"0fcc8395-e450-469f-8a0d-6774767e25df","subtype":"Figure","type":"Plot"}},"id":"d2103520-7ead-47aa-9291-d9745820a1c1","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"669cb25c-0575-4d83-aadd-2ab3062a3556","type":"Circle"},{"attributes":{"plot":{"id":"0fcc8395-e450-469f-8a0d-6774767e25df","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1ca9f35-1a02-4cc9-a408-fc9e88fe9218","type":"BasicTicker"}},"id":"736a3aad-de96-43c5-a364-ada49ef111c1","type":"Grid"},{"attributes":{"plot":{"id":"0fcc8395-e450-469f-8a0d-6774767e25df","subtype":"Figure","type":"Plot"}},"id":"81c9a76b-33f9-4fef-aebb-5cf435a79497","type":"SaveTool"},{"attributes":{"data_source":{"id":"e1f96942-8404-42d1-a2a6-669604b94f12","type":"ColumnDataSource"},"glyph":{"id":"669cb25c-0575-4d83-aadd-2ab3062a3556","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"11e9eb9f-0d09-4445-8049-e2b44c73f763","type":"Circle"},"selection_glyph":null},"id":"a4b2195d-60fe-4fd9-a938-4b7aefd65831","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"001f75e9-3f10-439b-af9a-faba509e66f6","type":"BasicTickFormatter"},"plot":{"id":"0fcc8395-e450-469f-8a0d-6774767e25df","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1ca9f35-1a02-4cc9-a408-fc9e88fe9218","type":"BasicTicker"}},"id":"4148a4e9-ca21-452c-9395-42d77cb1d902","type":"LinearAxis"},{"attributes":{"plot":{"id":"0fcc8395-e450-469f-8a0d-6774767e25df","subtype":"Figure","type":"Plot"}},"id":"871505a0-1021-429d-9401-d8166e2bfd3d","type":"WheelZoomTool"},{"attributes":{},"id":"cb2e42fa-d97d-47f4-9c6d-470a330079f2","type":"ToolEvents"},{"attributes":{"formatter":{"id":"37eb4ffa-6584-4486-b661-43af6ff01295","type":"FuncTickFormatter"},"plot":{"id":"0fcc8395-e450-469f-8a0d-6774767e25df","subtype":"Figure","type":"Plot"},"ticker":{"id":"5f04a93f-cf0c-4a5c-96c4-1dbad506439d","type":"BasicTicker"}},"id":"a6b53b21-2dff-435a-877b-cd465dc8671f","type":"LinearAxis"},{"attributes":{"overlay":{"id":"53983cb5-1400-4dc9-8582-327afaa72426","type":"BoxAnnotation"},"plot":{"id":"0fcc8395-e450-469f-8a0d-6774767e25df","subtype":"Figure","type":"Plot"}},"id":"7bebdb02-d05f-4d16-97fc-d965479c9fdf","type":"BoxZoomTool"},{"attributes":{},"id":"5f04a93f-cf0c-4a5c-96c4-1dbad506439d","type":"BasicTicker"},{"attributes":{"plot":{"id":"0fcc8395-e450-469f-8a0d-6774767e25df","subtype":"Figure","type":"Plot"}},"id":"2e481e97-db99-44be-81e3-35f2a66f2c9a","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,2,4,6,8,10],"y":[6,2,4,10,8,0]}},"id":"e1f96942-8404-42d1-a2a6-669604b94f12","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"bd088796-09b7-4352-bcde-8b08959af140","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"53983cb5-1400-4dc9-8582-327afaa72426","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":null},"id":"330945c9-c0d7-4d51-bf83-dd20a5db4672","type":"Title"},{"attributes":{"code":"\n    function (tick) {\n        return Math.floor(tick) + \" + \" + (tick % 1).toFixed(2)\n    };\n"},"id":"37eb4ffa-6584-4486-b661-43af6ff01295","type":"FuncTickFormatter"},{"attributes":{},"id":"001f75e9-3f10-439b-af9a-faba509e66f6","type":"BasicTickFormatter"}],"root_ids":["0fcc8395-e450-469f-8a0d-6774767e25df"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"a749083f-a53b-4570-928b-4b9a09dfc2c7","elementid":"c64c7b2b-884a-4738-a56c-3b712bfe9241","modelid":"0fcc8395-e450-469f-8a0d-6774767e25df"}];
              
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