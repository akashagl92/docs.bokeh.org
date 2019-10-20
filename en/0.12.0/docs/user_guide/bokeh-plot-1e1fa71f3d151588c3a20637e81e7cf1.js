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
      };var element = document.getElementById("5fc44b41-bac5-4640-aca0-c154956afc87");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5fc44b41-bac5-4640-aca0-c154956afc87' but no matching script tag was found. ")
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
              var docs_json = {"c164abb5-f1a9-4004-97cf-b2ebdc80e9c0":{"roots":{"references":[{"attributes":{},"id":"a476c8e8-4c5c-400d-a466-8533b165d031","type":"BasicTicker"},{"attributes":{"plot":null,"text":null},"id":"74d24c9d-93d0-4d16-9ab9-5d22319ef596","type":"Title"},{"attributes":{},"id":"1dfceca0-d353-4432-a557-08db90ed5c36","type":"BasicTickFormatter"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"0c25759e-4cb7-4154-98bc-0b6fd98bb8b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"7d707913-1171-45f9-a80e-9c3a518be714","type":"BasicTicker"}},"id":"a3401d01-8bed-4823-8270-924d58e7a3b4","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0ab605e3-f60c-4046-b565-f57f54bc729a","type":"PanTool"},{"id":"97071052-35a2-4679-8b52-9adce3c4dbbf","type":"WheelZoomTool"},{"id":"66c08a77-8b25-4398-8934-f0ea70454bbb","type":"BoxZoomTool"},{"id":"768ff48a-8070-4e41-bfdb-c81fa45c6497","type":"SaveTool"},{"id":"1e4a3cae-2a0a-4769-ab14-7b624170f41f","type":"ResetTool"},{"id":"7b807a9e-81f5-473a-bcc2-0240123875fc","type":"HelpTool"}]},"id":"fb686f61-7d35-4c92-8346-7e769c1c6783","type":"Toolbar"},{"attributes":{"plot":{"id":"0c25759e-4cb7-4154-98bc-0b6fd98bb8b4","subtype":"Figure","type":"Plot"}},"id":"768ff48a-8070-4e41-bfdb-c81fa45c6497","type":"SaveTool"},{"attributes":{"band_fill_alpha":{"value":0.1},"band_fill_color":{"value":"navy"},"dimension":1,"plot":{"id":"0c25759e-4cb7-4154-98bc-0b6fd98bb8b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"a476c8e8-4c5c-400d-a466-8533b165d031","type":"BasicTicker"}},"id":"ef44bc4f-76f7-4e85-8d82-c4e10fa214c1","type":"Grid"},{"attributes":{"data_source":{"id":"fc4f62f3-0c83-4313-ab29-ca75455620e0","type":"ColumnDataSource"},"glyph":{"id":"f2c30c64-5f3c-43e5-8179-07304ace9b95","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"ad0c606c-1d3a-4f26-89fc-91fb465e62fc","type":"Circle"},"selection_glyph":null},"id":"eb0f5094-256e-49e6-8697-5daea40a1ae3","type":"GlyphRenderer"},{"attributes":{},"id":"7d707913-1171-45f9-a80e-9c3a518be714","type":"BasicTicker"},{"attributes":{},"id":"3b4a90ad-47ce-4217-a31a-ff7ce3ee78dd","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"7e9fa9a6-5ef2-4d90-997a-f0dea1097877","type":"BoxAnnotation"},"plot":{"id":"0c25759e-4cb7-4154-98bc-0b6fd98bb8b4","subtype":"Figure","type":"Plot"}},"id":"66c08a77-8b25-4398-8934-f0ea70454bbb","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"c05a350e-c36a-4b6c-a198-bbe69d1c6d80","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ad0c606c-1d3a-4f26-89fc-91fb465e62fc","type":"Circle"},{"attributes":{"below":[{"id":"3ea285ea-a3fa-4b13-8bcb-00bf5de2ea2b","type":"LinearAxis"}],"left":[{"id":"99354b1e-fbb7-48d2-abbd-68dd9fcd8cd8","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3ea285ea-a3fa-4b13-8bcb-00bf5de2ea2b","type":"LinearAxis"},{"id":"a3401d01-8bed-4823-8270-924d58e7a3b4","type":"Grid"},{"id":"99354b1e-fbb7-48d2-abbd-68dd9fcd8cd8","type":"LinearAxis"},{"id":"ef44bc4f-76f7-4e85-8d82-c4e10fa214c1","type":"Grid"},{"id":"7e9fa9a6-5ef2-4d90-997a-f0dea1097877","type":"BoxAnnotation"},{"id":"eb0f5094-256e-49e6-8697-5daea40a1ae3","type":"GlyphRenderer"}],"title":{"id":"74d24c9d-93d0-4d16-9ab9-5d22319ef596","type":"Title"},"tool_events":{"id":"0adf59d1-9eb7-4fe4-9ee6-2a40992ab510","type":"ToolEvents"},"toolbar":{"id":"fb686f61-7d35-4c92-8346-7e769c1c6783","type":"Toolbar"},"x_range":{"id":"c05a350e-c36a-4b6c-a198-bbe69d1c6d80","type":"DataRange1d"},"y_range":{"id":"6ebf9ee1-96d5-47ca-b3e4-1e73f2dc8bb0","type":"DataRange1d"}},"id":"0c25759e-4cb7-4154-98bc-0b6fd98bb8b4","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"0c25759e-4cb7-4154-98bc-0b6fd98bb8b4","subtype":"Figure","type":"Plot"}},"id":"97071052-35a2-4679-8b52-9adce3c4dbbf","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"3b4a90ad-47ce-4217-a31a-ff7ce3ee78dd","type":"BasicTickFormatter"},"plot":{"id":"0c25759e-4cb7-4154-98bc-0b6fd98bb8b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"a476c8e8-4c5c-400d-a466-8533b165d031","type":"BasicTicker"}},"id":"99354b1e-fbb7-48d2-abbd-68dd9fcd8cd8","type":"LinearAxis"},{"attributes":{"formatter":{"id":"1dfceca0-d353-4432-a557-08db90ed5c36","type":"BasicTickFormatter"},"plot":{"id":"0c25759e-4cb7-4154-98bc-0b6fd98bb8b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"7d707913-1171-45f9-a80e-9c3a518be714","type":"BasicTicker"}},"id":"3ea285ea-a3fa-4b13-8bcb-00bf5de2ea2b","type":"LinearAxis"},{"attributes":{"plot":{"id":"0c25759e-4cb7-4154-98bc-0b6fd98bb8b4","subtype":"Figure","type":"Plot"}},"id":"1e4a3cae-2a0a-4769-ab14-7b624170f41f","type":"ResetTool"},{"attributes":{"plot":{"id":"0c25759e-4cb7-4154-98bc-0b6fd98bb8b4","subtype":"Figure","type":"Plot"}},"id":"7b807a9e-81f5-473a-bcc2-0240123875fc","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"fc4f62f3-0c83-4313-ab29-ca75455620e0","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"6ebf9ee1-96d5-47ca-b3e4-1e73f2dc8bb0","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f2c30c64-5f3c-43e5-8179-07304ace9b95","type":"Circle"},{"attributes":{},"id":"0adf59d1-9eb7-4fe4-9ee6-2a40992ab510","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7e9fa9a6-5ef2-4d90-997a-f0dea1097877","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"0c25759e-4cb7-4154-98bc-0b6fd98bb8b4","subtype":"Figure","type":"Plot"}},"id":"0ab605e3-f60c-4046-b565-f57f54bc729a","type":"PanTool"}],"root_ids":["0c25759e-4cb7-4154-98bc-0b6fd98bb8b4"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"c164abb5-f1a9-4004-97cf-b2ebdc80e9c0","elementid":"5fc44b41-bac5-4640-aca0-c154956afc87","modelid":"0c25759e-4cb7-4154-98bc-0b6fd98bb8b4"}];
              
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