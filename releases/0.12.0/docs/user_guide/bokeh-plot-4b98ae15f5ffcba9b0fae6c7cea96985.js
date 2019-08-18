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
      };var element = document.getElementById("7bd00eb8-0d92-456a-92af-8bbaeaaf7ed2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7bd00eb8-0d92-456a-92af-8bbaeaaf7ed2' but no matching script tag was found. ")
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
              var docs_json = {"c9bde797-726f-48b6-a2e3-5ed69e5a2092":{"roots":{"references":[{"attributes":{"plot":{"id":"3f342ccc-3365-4d12-9aaf-2940a85d632b","subtype":"Figure","type":"Plot"}},"id":"1d6e121b-4ea6-4913-b9e0-85564034c303","type":"SaveTool"},{"attributes":{"formatter":{"id":"a8d9f3f6-9842-4139-986d-7f31c5616387","type":"BasicTickFormatter"},"plot":{"id":"3f342ccc-3365-4d12-9aaf-2940a85d632b","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ac857e2-736b-4c4f-ab72-93d4f1b3d18f","type":"BasicTicker"}},"id":"865aeb2e-7826-44f9-ba8f-ba1560049fa7","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"3f342ccc-3365-4d12-9aaf-2940a85d632b","subtype":"Figure","type":"Plot"},"ticker":{"id":"80d3fe24-155e-4f0b-a71e-49ac21906f79","type":"BasicTicker"}},"id":"1ffcc06b-2d65-4395-a755-0e46a747343d","type":"Grid"},{"attributes":{},"id":"5ac857e2-736b-4c4f-ab72-93d4f1b3d18f","type":"BasicTicker"},{"attributes":{"plot":{"id":"3f342ccc-3365-4d12-9aaf-2940a85d632b","subtype":"Figure","type":"Plot"}},"id":"b33047d5-89fc-434c-8c2c-f9c6b228c42a","type":"HelpTool"},{"attributes":{"formatter":{"id":"8f0000c1-9e58-4801-9d71-0ecec72d7230","type":"BasicTickFormatter"},"plot":{"id":"3f342ccc-3365-4d12-9aaf-2940a85d632b","subtype":"Figure","type":"Plot"},"ticker":{"id":"80d3fe24-155e-4f0b-a71e-49ac21906f79","type":"BasicTicker"}},"id":"3d4fac10-8f50-4449-890f-6ec956fe8ba2","type":"LinearAxis"},{"attributes":{},"id":"0234e064-a11b-4ee4-b4f6-2d6f27799f2f","type":"ToolEvents"},{"attributes":{},"id":"a8d9f3f6-9842-4139-986d-7f31c5616387","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"05914c89-30b6-4399-a5b3-ef6d9767b83a","type":"DataRange1d"},{"attributes":{"plot":{"id":"3f342ccc-3365-4d12-9aaf-2940a85d632b","subtype":"Figure","type":"Plot"}},"id":"de06588e-47eb-45f7-aa56-5c359ad07379","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b6d9cf27-70f0-46c5-936d-3cabe0b31651","type":"PanTool"},{"id":"de06588e-47eb-45f7-aa56-5c359ad07379","type":"WheelZoomTool"},{"id":"780233e1-33c4-4f41-b537-eb2c99379c97","type":"BoxZoomTool"},{"id":"1d6e121b-4ea6-4913-b9e0-85564034c303","type":"SaveTool"},{"id":"3cbb7add-2f2f-45f0-98cd-513423dc7959","type":"ResetTool"},{"id":"b33047d5-89fc-434c-8c2c-f9c6b228c42a","type":"HelpTool"}]},"id":"935c9021-46af-4706-9fd2-e8a942dfe2ce","type":"Toolbar"},{"attributes":{},"id":"80d3fe24-155e-4f0b-a71e-49ac21906f79","type":"BasicTicker"},{"attributes":{},"id":"8f0000c1-9e58-4801-9d71-0ecec72d7230","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3f342ccc-3365-4d12-9aaf-2940a85d632b","subtype":"Figure","type":"Plot"}},"id":"3cbb7add-2f2f-45f0-98cd-513423dc7959","type":"ResetTool"},{"attributes":{"overlay":{"id":"c170ecfc-7eb8-46c2-b2a7-d1710dd3cfd1","type":"BoxAnnotation"},"plot":{"id":"3f342ccc-3365-4d12-9aaf-2940a85d632b","subtype":"Figure","type":"Plot"}},"id":"780233e1-33c4-4f41-b537-eb2c99379c97","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"865aeb2e-7826-44f9-ba8f-ba1560049fa7","type":"LinearAxis"}],"left":[{"id":"3d4fac10-8f50-4449-890f-6ec956fe8ba2","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"865aeb2e-7826-44f9-ba8f-ba1560049fa7","type":"LinearAxis"},{"id":"2e437352-1bd7-4509-b545-5c2b963453e8","type":"Grid"},{"id":"3d4fac10-8f50-4449-890f-6ec956fe8ba2","type":"LinearAxis"},{"id":"1ffcc06b-2d65-4395-a755-0e46a747343d","type":"Grid"},{"id":"c170ecfc-7eb8-46c2-b2a7-d1710dd3cfd1","type":"BoxAnnotation"},{"id":"ac83007c-c179-4e2f-add7-29820a7be685","type":"GlyphRenderer"}],"title":{"id":"76ced98d-169c-4513-9e70-61430dd76c88","type":"Title"},"tool_events":{"id":"0234e064-a11b-4ee4-b4f6-2d6f27799f2f","type":"ToolEvents"},"toolbar":{"id":"935c9021-46af-4706-9fd2-e8a942dfe2ce","type":"Toolbar"},"x_range":{"id":"05914c89-30b6-4399-a5b3-ef6d9767b83a","type":"DataRange1d"},"y_range":{"id":"aaf135e2-a1fa-4aad-b3c5-2411d41b17ff","type":"DataRange1d"}},"id":"3f342ccc-3365-4d12-9aaf-2940a85d632b","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"aaf135e2-a1fa-4aad-b3c5-2411d41b17ff","type":"DataRange1d"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.6},"line_color":{"value":"firebrick"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"29318137-0f65-4678-aab9-296b7979450a","type":"Wedge"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"9fa80c7c-7160-4bc9-b34d-b0cdc2dc6146","type":"Wedge"},{"attributes":{"data_source":{"id":"d7ca5b46-a1ef-4a44-ad86-f60979012309","type":"ColumnDataSource"},"glyph":{"id":"29318137-0f65-4678-aab9-296b7979450a","type":"Wedge"},"hover_glyph":null,"nonselection_glyph":{"id":"9fa80c7c-7160-4bc9-b34d-b0cdc2dc6146","type":"Wedge"},"selection_glyph":null},"id":"ac83007c-c179-4e2f-add7-29820a7be685","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c170ecfc-7eb8-46c2-b2a7-d1710dd3cfd1","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"3f342ccc-3365-4d12-9aaf-2940a85d632b","subtype":"Figure","type":"Plot"}},"id":"b6d9cf27-70f0-46c5-936d-3cabe0b31651","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"d7ca5b46-a1ef-4a44-ad86-f60979012309","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":null},"id":"76ced98d-169c-4513-9e70-61430dd76c88","type":"Title"},{"attributes":{"plot":{"id":"3f342ccc-3365-4d12-9aaf-2940a85d632b","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ac857e2-736b-4c4f-ab72-93d4f1b3d18f","type":"BasicTicker"}},"id":"2e437352-1bd7-4509-b545-5c2b963453e8","type":"Grid"}],"root_ids":["3f342ccc-3365-4d12-9aaf-2940a85d632b"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"c9bde797-726f-48b6-a2e3-5ed69e5a2092","elementid":"7bd00eb8-0d92-456a-92af-8bbaeaaf7ed2","modelid":"3f342ccc-3365-4d12-9aaf-2940a85d632b"}];
              
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