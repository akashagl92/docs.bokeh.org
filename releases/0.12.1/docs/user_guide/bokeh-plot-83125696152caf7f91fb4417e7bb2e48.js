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
      };var element = document.getElementById("4774163b-a521-4c50-a8a8-0020aefcfdbe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4774163b-a521-4c50-a8a8-0020aefcfdbe' but no matching script tag was found. ")
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
              var docs_json = {"f3761c11-57b3-477f-a361-959196c95b3e":{"roots":{"references":[{"attributes":{},"id":"83567cd4-bd21-4884-940c-40c9df672597","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"04e3f00a-d6ed-43f5-af1d-6276866c0c0a","subtype":"Figure","type":"Plot"}},"id":"90355f76-de71-4ee6-a6bd-3fcd7937821f","type":"PanTool"},{"attributes":{"plot":{"id":"04e3f00a-d6ed-43f5-af1d-6276866c0c0a","subtype":"Figure","type":"Plot"}},"id":"41efa76a-6866-45e2-ac9a-7cedf0f8a014","type":"ResetTool"},{"attributes":{"plot":{"id":"04e3f00a-d6ed-43f5-af1d-6276866c0c0a","subtype":"Figure","type":"Plot"}},"id":"a099eaf1-f2d4-4f82-be69-6bd1a8c57258","type":"SaveTool"},{"attributes":{"formatter":{"id":"83567cd4-bd21-4884-940c-40c9df672597","type":"BasicTickFormatter"},"plot":{"id":"04e3f00a-d6ed-43f5-af1d-6276866c0c0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"8dde8b6f-90ca-4bd3-8187-42ffec9eff43","type":"BasicTicker"}},"id":"56f60a97-52cd-4fdd-991f-dba60c7138a5","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"421a9387-2c4a-49ef-adc0-26b1594a9686","type":"ColumnDataSource"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"green"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"green"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"af18f4a7-6632-4485-b1aa-c4c558ef80a7","type":"AnnularWedge"},{"attributes":{"plot":{"id":"04e3f00a-d6ed-43f5-af1d-6276866c0c0a","subtype":"Figure","type":"Plot"}},"id":"1f353884-73f1-4bef-ac2b-82e80d344b59","type":"HelpTool"},{"attributes":{"callback":null},"id":"4574747b-65e2-4534-9abb-ff06bb86bf10","type":"DataRange1d"},{"attributes":{},"id":"6167c118-5303-4611-8655-334861d2d20c","type":"BasicTicker"},{"attributes":{"below":[{"id":"34752a08-7c4b-4d49-be6e-378136683840","type":"LinearAxis"}],"left":[{"id":"56f60a97-52cd-4fdd-991f-dba60c7138a5","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"34752a08-7c4b-4d49-be6e-378136683840","type":"LinearAxis"},{"id":"cf98fece-5135-44e7-8d96-ff728814af6c","type":"Grid"},{"id":"56f60a97-52cd-4fdd-991f-dba60c7138a5","type":"LinearAxis"},{"id":"be313967-6b88-476c-b97d-f2a2d9d45512","type":"Grid"},{"id":"2cee001f-f7c6-4d24-bd44-6fcca590fc74","type":"BoxAnnotation"},{"id":"baa0f3a3-de0c-4f82-aa02-79b6cb0af135","type":"GlyphRenderer"}],"title":{"id":"83cafae8-3a69-41b5-8207-8b7607065555","type":"Title"},"tool_events":{"id":"d0670cd5-62a2-49ae-a78c-907067f92500","type":"ToolEvents"},"toolbar":{"id":"306f30c6-2054-47e4-82fa-87666ac9014d","type":"Toolbar"},"x_range":{"id":"4574747b-65e2-4534-9abb-ff06bb86bf10","type":"DataRange1d"},"y_range":{"id":"0e9b8fcf-9b52-4ff9-ab3a-99a9eb618195","type":"DataRange1d"}},"id":"04e3f00a-d6ed-43f5-af1d-6276866c0c0a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"0ca0a942-a31d-4256-8c98-c188666cee90","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"0ca0a942-a31d-4256-8c98-c188666cee90","type":"BasicTickFormatter"},"plot":{"id":"04e3f00a-d6ed-43f5-af1d-6276866c0c0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"6167c118-5303-4611-8655-334861d2d20c","type":"BasicTicker"}},"id":"34752a08-7c4b-4d49-be6e-378136683840","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"90355f76-de71-4ee6-a6bd-3fcd7937821f","type":"PanTool"},{"id":"b1c38981-7230-4bf3-8604-b86a8b9f1ef2","type":"WheelZoomTool"},{"id":"9a1c4864-377d-483b-b074-3e7abb0ca97c","type":"BoxZoomTool"},{"id":"a099eaf1-f2d4-4f82-be69-6bd1a8c57258","type":"SaveTool"},{"id":"41efa76a-6866-45e2-ac9a-7cedf0f8a014","type":"ResetTool"},{"id":"1f353884-73f1-4bef-ac2b-82e80d344b59","type":"HelpTool"}]},"id":"306f30c6-2054-47e4-82fa-87666ac9014d","type":"Toolbar"},{"attributes":{"callback":null},"id":"0e9b8fcf-9b52-4ff9-ab3a-99a9eb618195","type":"DataRange1d"},{"attributes":{"plot":null,"text":null},"id":"83cafae8-3a69-41b5-8207-8b7607065555","type":"Title"},{"attributes":{"plot":{"id":"04e3f00a-d6ed-43f5-af1d-6276866c0c0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"6167c118-5303-4611-8655-334861d2d20c","type":"BasicTicker"}},"id":"cf98fece-5135-44e7-8d96-ff728814af6c","type":"Grid"},{"attributes":{},"id":"8dde8b6f-90ca-4bd3-8187-42ffec9eff43","type":"BasicTicker"},{"attributes":{"data_source":{"id":"421a9387-2c4a-49ef-adc0-26b1594a9686","type":"ColumnDataSource"},"glyph":{"id":"af18f4a7-6632-4485-b1aa-c4c558ef80a7","type":"AnnularWedge"},"hover_glyph":null,"nonselection_glyph":{"id":"96cfe6b9-39aa-4028-9577-2e2ada2ba0fa","type":"AnnularWedge"},"selection_glyph":null},"id":"baa0f3a3-de0c-4f82-aa02-79b6cb0af135","type":"GlyphRenderer"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"96cfe6b9-39aa-4028-9577-2e2ada2ba0fa","type":"AnnularWedge"},{"attributes":{"overlay":{"id":"2cee001f-f7c6-4d24-bd44-6fcca590fc74","type":"BoxAnnotation"},"plot":{"id":"04e3f00a-d6ed-43f5-af1d-6276866c0c0a","subtype":"Figure","type":"Plot"}},"id":"9a1c4864-377d-483b-b074-3e7abb0ca97c","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2cee001f-f7c6-4d24-bd44-6fcca590fc74","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"04e3f00a-d6ed-43f5-af1d-6276866c0c0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"8dde8b6f-90ca-4bd3-8187-42ffec9eff43","type":"BasicTicker"}},"id":"be313967-6b88-476c-b97d-f2a2d9d45512","type":"Grid"},{"attributes":{"plot":{"id":"04e3f00a-d6ed-43f5-af1d-6276866c0c0a","subtype":"Figure","type":"Plot"}},"id":"b1c38981-7230-4bf3-8604-b86a8b9f1ef2","type":"WheelZoomTool"},{"attributes":{},"id":"d0670cd5-62a2-49ae-a78c-907067f92500","type":"ToolEvents"}],"root_ids":["04e3f00a-d6ed-43f5-af1d-6276866c0c0a"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"f3761c11-57b3-477f-a361-959196c95b3e","elementid":"4774163b-a521-4c50-a8a8-0020aefcfdbe","modelid":"04e3f00a-d6ed-43f5-af1d-6276866c0c0a"}];
              
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