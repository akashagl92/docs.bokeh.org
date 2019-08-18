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
      };var element = document.getElementById("aa525327-e7aa-46e4-8ab3-444a830c1d37");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aa525327-e7aa-46e4-8ab3-444a830c1d37' but no matching script tag was found. ")
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
              var docs_json = {"be0241d9-7bd2-477e-b8dc-1829dd5dead4":{"roots":{"references":[{"attributes":{"formatter":{"id":"c9861d8f-7f98-4c40-bbd1-84fcb174ea0d","type":"BasicTickFormatter"},"plot":{"id":"b0b23c4d-9641-4fd7-88e5-75cb5ca8f71d","subtype":"Figure","type":"Plot"},"ticker":{"id":"402aaa9e-0eee-4340-bc95-029121ea4917","type":"BasicTicker"}},"id":"0c727e11-8783-4f12-80d1-71963bdf2462","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"de7de22a-b8c0-48e6-a7d9-9d28361aafd7","type":"Title"},{"attributes":{},"id":"c9861d8f-7f98-4c40-bbd1-84fcb174ea0d","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"0c727e11-8783-4f12-80d1-71963bdf2462","type":"LinearAxis"}],"left":[{"id":"7f82d320-50de-46b8-8aa2-56c2632603e4","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0c727e11-8783-4f12-80d1-71963bdf2462","type":"LinearAxis"},{"id":"24a0f69c-9713-471e-a7b9-0482309baea2","type":"Grid"},{"id":"7f82d320-50de-46b8-8aa2-56c2632603e4","type":"LinearAxis"},{"id":"67115f11-4cf5-41b6-a6f7-e0a7283899b1","type":"Grid"},{"id":"62497300-34a5-4322-8798-f9d579d5d05f","type":"BoxAnnotation"},{"id":"5dad5780-3dd0-48f2-b9a8-10d2f29130c1","type":"GlyphRenderer"}],"title":{"id":"de7de22a-b8c0-48e6-a7d9-9d28361aafd7","type":"Title"},"tool_events":{"id":"eeb70993-6c23-40b9-93ed-a4e0c295533a","type":"ToolEvents"},"toolbar":{"id":"9ba1c50f-c20c-410b-b7a4-c6f88e54fd3d","type":"Toolbar"},"x_range":{"id":"4ca674cb-8c59-4423-85ca-ab5145a6af09","type":"DataRange1d"},"y_range":{"id":"b5183ae4-0364-46a4-8e2b-6dc5168ab66f","type":"DataRange1d"}},"id":"b0b23c4d-9641-4fd7-88e5-75cb5ca8f71d","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"b0b23c4d-9641-4fd7-88e5-75cb5ca8f71d","subtype":"Figure","type":"Plot"}},"id":"9f31aeec-d555-412f-a6f4-738f8e0a0cbd","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"b0b23c4d-9641-4fd7-88e5-75cb5ca8f71d","subtype":"Figure","type":"Plot"},"ticker":{"id":"6fb76146-5a17-4b55-9fec-e504192acc5f","type":"BasicTicker"}},"id":"67115f11-4cf5-41b6-a6f7-e0a7283899b1","type":"Grid"},{"attributes":{"plot":{"id":"b0b23c4d-9641-4fd7-88e5-75cb5ca8f71d","subtype":"Figure","type":"Plot"}},"id":"e224923c-63ea-412a-bc54-077abb1df7ac","type":"SaveTool"},{"attributes":{"plot":{"id":"b0b23c4d-9641-4fd7-88e5-75cb5ca8f71d","subtype":"Figure","type":"Plot"}},"id":"ca348048-0dca-446c-a75d-233a94d608cc","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["angle","y","x"],"data":{"angle":[30,45,60],"x":[1,2,3],"y":[1,2,3]}},"id":"99c3b719-5f8d-45ff-b578-87b41927ac8b","type":"ColumnDataSource"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"4f8dcf90-f62f-414e-a1bf-efa878b43709","type":"Ray"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"62497300-34a5-4322-8798-f9d579d5d05f","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"4ca674cb-8c59-4423-85ca-ab5145a6af09","type":"DataRange1d"},{"attributes":{},"id":"eeb70993-6c23-40b9-93ed-a4e0c295533a","type":"ToolEvents"},{"attributes":{"formatter":{"id":"40b287ae-4bac-4294-a109-ce7568bb88da","type":"BasicTickFormatter"},"plot":{"id":"b0b23c4d-9641-4fd7-88e5-75cb5ca8f71d","subtype":"Figure","type":"Plot"},"ticker":{"id":"6fb76146-5a17-4b55-9fec-e504192acc5f","type":"BasicTicker"}},"id":"7f82d320-50de-46b8-8aa2-56c2632603e4","type":"LinearAxis"},{"attributes":{},"id":"402aaa9e-0eee-4340-bc95-029121ea4917","type":"BasicTicker"},{"attributes":{"data_source":{"id":"99c3b719-5f8d-45ff-b578-87b41927ac8b","type":"ColumnDataSource"},"glyph":{"id":"4f8dcf90-f62f-414e-a1bf-efa878b43709","type":"Ray"},"hover_glyph":null,"nonselection_glyph":{"id":"367aba0b-0263-4e69-be1d-d6cdbd2a3533","type":"Ray"},"selection_glyph":null},"id":"5dad5780-3dd0-48f2-b9a8-10d2f29130c1","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"b5183ae4-0364-46a4-8e2b-6dc5168ab66f","type":"DataRange1d"},{"attributes":{"plot":{"id":"b0b23c4d-9641-4fd7-88e5-75cb5ca8f71d","subtype":"Figure","type":"Plot"},"ticker":{"id":"402aaa9e-0eee-4340-bc95-029121ea4917","type":"BasicTicker"}},"id":"24a0f69c-9713-471e-a7b9-0482309baea2","type":"Grid"},{"attributes":{"plot":{"id":"b0b23c4d-9641-4fd7-88e5-75cb5ca8f71d","subtype":"Figure","type":"Plot"}},"id":"fcec3912-0066-4203-88cf-8274a8b6e868","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"42b5bfa8-0dcd-4178-bd0d-49dd76dddf46","type":"PanTool"},{"id":"fcec3912-0066-4203-88cf-8274a8b6e868","type":"WheelZoomTool"},{"id":"31fb681a-cd94-4159-8e2b-6392ab5011f6","type":"BoxZoomTool"},{"id":"e224923c-63ea-412a-bc54-077abb1df7ac","type":"SaveTool"},{"id":"ca348048-0dca-446c-a75d-233a94d608cc","type":"ResetTool"},{"id":"9f31aeec-d555-412f-a6f4-738f8e0a0cbd","type":"HelpTool"}]},"id":"9ba1c50f-c20c-410b-b7a4-c6f88e54fd3d","type":"Toolbar"},{"attributes":{},"id":"40b287ae-4bac-4294-a109-ce7568bb88da","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"62497300-34a5-4322-8798-f9d579d5d05f","type":"BoxAnnotation"},"plot":{"id":"b0b23c4d-9641-4fd7-88e5-75cb5ca8f71d","subtype":"Figure","type":"Plot"}},"id":"31fb681a-cd94-4159-8e2b-6392ab5011f6","type":"BoxZoomTool"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"367aba0b-0263-4e69-be1d-d6cdbd2a3533","type":"Ray"},{"attributes":{},"id":"6fb76146-5a17-4b55-9fec-e504192acc5f","type":"BasicTicker"},{"attributes":{"plot":{"id":"b0b23c4d-9641-4fd7-88e5-75cb5ca8f71d","subtype":"Figure","type":"Plot"}},"id":"42b5bfa8-0dcd-4178-bd0d-49dd76dddf46","type":"PanTool"}],"root_ids":["b0b23c4d-9641-4fd7-88e5-75cb5ca8f71d"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"be0241d9-7bd2-477e-b8dc-1829dd5dead4","elementid":"aa525327-e7aa-46e4-8ab3-444a830c1d37","modelid":"b0b23c4d-9641-4fd7-88e5-75cb5ca8f71d"}];
              
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