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
      };var element = document.getElementById("b333a778-25b0-4454-9756-621e90b39398");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b333a778-25b0-4454-9756-621e90b39398' but no matching script tag was found. ")
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
              var docs_json = {"2de5fdbc-de19-466f-bea8-24df312bca6b":{"roots":{"references":[{"attributes":{"plot":{"id":"ec9d0b10-05d1-4b5a-9184-d3e627b35503","subtype":"Figure","type":"Plot"}},"id":"e40f584d-7d54-4fc7-afe5-9de1a69ff8ed","type":"PanTool"},{"attributes":{"plot":{"id":"7beba9e0-8b85-4a74-b3e1-cf617fb8b5b5","subtype":"Figure","type":"Plot"}},"id":"787c564f-b566-4c9d-9a17-eedcb8d9d0d0","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7a5b726c-f300-43b5-b680-312e1d5a894e","type":"Circle"},{"attributes":{"below":[{"id":"50d08918-c9d7-439b-b596-4429ff6e30a2","type":"LinearAxis"}],"left":[{"id":"6ca251d5-034d-45b4-945c-60954e14edfc","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"50d08918-c9d7-439b-b596-4429ff6e30a2","type":"LinearAxis"},{"id":"531653ab-3346-4841-a1d6-96f81afcdae2","type":"Grid"},{"id":"6ca251d5-034d-45b4-945c-60954e14edfc","type":"LinearAxis"},{"id":"d48ebd87-9e46-462e-8bef-4c9f2e2967f7","type":"Grid"},{"id":"af01082c-6195-401f-a48f-1380b2cfd45e","type":"BoxAnnotation"},{"id":"ab5fba21-a648-4ec1-a8f5-283998a600fe","type":"GlyphRenderer"}],"title":{"id":"cf4fcad7-39a4-4f76-acac-affb4c28b00f","type":"Title"},"tool_events":{"id":"3ca76aad-87a2-4785-9cf5-c3f5a8a687d5","type":"ToolEvents"},"toolbar":{"id":"8d26faf9-8c50-4eba-9576-6ec0866d8cf4","type":"Toolbar"},"x_range":{"id":"0ee4fab5-7ff3-45f5-bacd-9a6257bff3b3","type":"DataRange1d"},"y_range":{"id":"16fad6ca-2102-446d-a8a2-9bd0ab7852c5","type":"DataRange1d"}},"id":"ec9d0b10-05d1-4b5a-9184-d3e627b35503","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"8f8a9b00-289b-4164-9bb9-3e397a68d672","type":"Line"},{"attributes":{"plot":{"id":"ec9d0b10-05d1-4b5a-9184-d3e627b35503","subtype":"Figure","type":"Plot"}},"id":"7e3f59b8-b0a9-4804-98b9-c0959d6f78c9","type":"ResetTool"},{"attributes":{},"id":"3ca76aad-87a2-4785-9cf5-c3f5a8a687d5","type":"ToolEvents"},{"attributes":{"formatter":{"id":"51b5155a-792e-4cc9-a3d4-096fc2a8034a","type":"BasicTickFormatter"},"plot":{"id":"ec9d0b10-05d1-4b5a-9184-d3e627b35503","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2589818-135b-4d8b-bb33-7ad74f52b361","type":"BasicTicker"}},"id":"50d08918-c9d7-439b-b596-4429ff6e30a2","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4ed113db-dc14-43a9-95bd-d6ba3de1ced4","type":"PanTool"},{"id":"33b792da-f8c9-4806-8de6-55d7cdb12315","type":"WheelZoomTool"},{"id":"0bcc05d7-cb1a-4509-95c6-f61ede00d58c","type":"BoxZoomTool"},{"id":"787c564f-b566-4c9d-9a17-eedcb8d9d0d0","type":"SaveTool"},{"id":"d199b68c-b478-4407-9eb3-584a4f03a059","type":"ResetTool"},{"id":"e36f255f-4ed8-4ec8-9d10-bb91a456c202","type":"HelpTool"}]},"id":"bf56a9a9-25f0-402e-b91b-4a3fdfd3c443","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"af01082c-6195-401f-a48f-1380b2cfd45e","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"9d2e184d-0c1c-4d4b-9eab-6909122ac46c","type":"ColumnDataSource"},{"attributes":{"child":{"id":"7beba9e0-8b85-4a74-b3e1-cf617fb8b5b5","subtype":"Figure","type":"Plot"},"title":"line"},"id":"6809bdec-6f81-45aa-8736-34539c4ebb2c","type":"Panel"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"cc52b906-6107-4d29-a833-0b8f0647cec0","type":"Circle"},{"attributes":{"below":[{"id":"f099c6f0-c456-494c-84fe-dacc89a69aac","type":"LinearAxis"}],"left":[{"id":"3833deb2-6e2d-4501-9b95-416899eeca81","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f099c6f0-c456-494c-84fe-dacc89a69aac","type":"LinearAxis"},{"id":"10a66096-e7c4-4418-8516-2916b42c2be8","type":"Grid"},{"id":"3833deb2-6e2d-4501-9b95-416899eeca81","type":"LinearAxis"},{"id":"6c264943-8c33-4675-a3b7-0b9c595283b8","type":"Grid"},{"id":"c4b04f0a-0fe5-4180-84d6-f8063b736f98","type":"BoxAnnotation"},{"id":"0d4b421e-00f1-4e09-ba8e-3eae8e978878","type":"GlyphRenderer"}],"title":{"id":"1a2b745b-e18a-4a8c-81c6-c94218e8d3b8","type":"Title"},"tool_events":{"id":"76dd02ac-ffde-490e-9847-61b519da2bac","type":"ToolEvents"},"toolbar":{"id":"bf56a9a9-25f0-402e-b91b-4a3fdfd3c443","type":"Toolbar"},"x_range":{"id":"52511957-05ab-4530-bbb3-ee0698926c90","type":"DataRange1d"},"y_range":{"id":"03c8a9ab-0d3a-4b4a-922d-b5d7e54fa7d4","type":"DataRange1d"}},"id":"7beba9e0-8b85-4a74-b3e1-cf617fb8b5b5","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b4aaedb4-cc02-4513-9c5f-6ca3e18d24b1","type":"BasicTicker"},{"attributes":{"formatter":{"id":"040c404d-660e-4263-939f-861285158ccd","type":"BasicTickFormatter"},"plot":{"id":"7beba9e0-8b85-4a74-b3e1-cf617fb8b5b5","subtype":"Figure","type":"Plot"},"ticker":{"id":"02bf3ca5-2627-45cf-b2e1-342447d8296d","type":"BasicTicker"}},"id":"3833deb2-6e2d-4501-9b95-416899eeca81","type":"LinearAxis"},{"attributes":{"callback":null},"id":"03c8a9ab-0d3a-4b4a-922d-b5d7e54fa7d4","type":"DataRange1d"},{"attributes":{"plot":{"id":"7beba9e0-8b85-4a74-b3e1-cf617fb8b5b5","subtype":"Figure","type":"Plot"}},"id":"4ed113db-dc14-43a9-95bd-d6ba3de1ced4","type":"PanTool"},{"attributes":{},"id":"39a5bda2-30e7-4f9c-ac40-bf64bf0fe3e1","type":"BasicTicker"},{"attributes":{"overlay":{"id":"c4b04f0a-0fe5-4180-84d6-f8063b736f98","type":"BoxAnnotation"},"plot":{"id":"7beba9e0-8b85-4a74-b3e1-cf617fb8b5b5","subtype":"Figure","type":"Plot"}},"id":"0bcc05d7-cb1a-4509-95c6-f61ede00d58c","type":"BoxZoomTool"},{"attributes":{},"id":"f2589818-135b-4d8b-bb33-7ad74f52b361","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e40f584d-7d54-4fc7-afe5-9de1a69ff8ed","type":"PanTool"},{"id":"3512cf36-f07a-42c0-8a53-26b1e565fdd5","type":"WheelZoomTool"},{"id":"7a70235d-f210-407c-8d83-edbd90e6855f","type":"BoxZoomTool"},{"id":"f09d528e-0f04-420d-b646-5bc79c65d785","type":"SaveTool"},{"id":"7e3f59b8-b0a9-4804-98b9-c0959d6f78c9","type":"ResetTool"},{"id":"b4a70976-a51d-4393-b497-6e73f8648edc","type":"HelpTool"}]},"id":"8d26faf9-8c50-4eba-9576-6ec0866d8cf4","type":"Toolbar"},{"attributes":{"callback":null,"tabs":[{"id":"2f1f872e-eeb4-4626-ba25-5d69509ed392","type":"Panel"},{"id":"6809bdec-6f81-45aa-8736-34539c4ebb2c","type":"Panel"}]},"id":"ba737dbe-9426-40d6-808b-00f47cfb4ef2","type":"Tabs"},{"attributes":{"plot":{"id":"ec9d0b10-05d1-4b5a-9184-d3e627b35503","subtype":"Figure","type":"Plot"}},"id":"3512cf36-f07a-42c0-8a53-26b1e565fdd5","type":"WheelZoomTool"},{"attributes":{},"id":"83fc71da-b313-41d2-858b-d9f9a6c4c18d","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"0ee4fab5-7ff3-45f5-bacd-9a6257bff3b3","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"8672b775-95cf-45ff-ae84-1860f81a7e2f","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c4b04f0a-0fe5-4180-84d6-f8063b736f98","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"ec9d0b10-05d1-4b5a-9184-d3e627b35503","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2589818-135b-4d8b-bb33-7ad74f52b361","type":"BasicTicker"}},"id":"531653ab-3346-4841-a1d6-96f81afcdae2","type":"Grid"},{"attributes":{"overlay":{"id":"af01082c-6195-401f-a48f-1380b2cfd45e","type":"BoxAnnotation"},"plot":{"id":"ec9d0b10-05d1-4b5a-9184-d3e627b35503","subtype":"Figure","type":"Plot"}},"id":"7a70235d-f210-407c-8d83-edbd90e6855f","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"7beba9e0-8b85-4a74-b3e1-cf617fb8b5b5","subtype":"Figure","type":"Plot"}},"id":"d199b68c-b478-4407-9eb3-584a4f03a059","type":"ResetTool"},{"attributes":{"formatter":{"id":"aab05e07-ac5d-419b-a93c-5e4a297a19c9","type":"BasicTickFormatter"},"plot":{"id":"ec9d0b10-05d1-4b5a-9184-d3e627b35503","subtype":"Figure","type":"Plot"},"ticker":{"id":"39a5bda2-30e7-4f9c-ac40-bf64bf0fe3e1","type":"BasicTicker"}},"id":"6ca251d5-034d-45b4-945c-60954e14edfc","type":"LinearAxis"},{"attributes":{"plot":{"id":"7beba9e0-8b85-4a74-b3e1-cf617fb8b5b5","subtype":"Figure","type":"Plot"},"ticker":{"id":"b4aaedb4-cc02-4513-9c5f-6ca3e18d24b1","type":"BasicTicker"}},"id":"10a66096-e7c4-4418-8516-2916b42c2be8","type":"Grid"},{"attributes":{"plot":null,"text":null},"id":"cf4fcad7-39a4-4f76-acac-affb4c28b00f","type":"Title"},{"attributes":{"plot":{"id":"7beba9e0-8b85-4a74-b3e1-cf617fb8b5b5","subtype":"Figure","type":"Plot"}},"id":"e36f255f-4ed8-4ec8-9d10-bb91a456c202","type":"HelpTool"},{"attributes":{},"id":"02bf3ca5-2627-45cf-b2e1-342447d8296d","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8672b775-95cf-45ff-ae84-1860f81a7e2f","type":"ColumnDataSource"},"glyph":{"id":"10086d70-0a54-468c-ad6d-b0feead79e25","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"8f8a9b00-289b-4164-9bb9-3e397a68d672","type":"Line"},"selection_glyph":null},"id":"0d4b421e-00f1-4e09-ba8e-3eae8e978878","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7beba9e0-8b85-4a74-b3e1-cf617fb8b5b5","subtype":"Figure","type":"Plot"}},"id":"33b792da-f8c9-4806-8de6-55d7cdb12315","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"ec9d0b10-05d1-4b5a-9184-d3e627b35503","subtype":"Figure","type":"Plot"}},"id":"b4a70976-a51d-4393-b497-6e73f8648edc","type":"HelpTool"},{"attributes":{},"id":"aab05e07-ac5d-419b-a93c-5e4a297a19c9","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"7beba9e0-8b85-4a74-b3e1-cf617fb8b5b5","subtype":"Figure","type":"Plot"},"ticker":{"id":"02bf3ca5-2627-45cf-b2e1-342447d8296d","type":"BasicTicker"}},"id":"6c264943-8c33-4675-a3b7-0b9c595283b8","type":"Grid"},{"attributes":{},"id":"51b5155a-792e-4cc9-a3d4-096fc2a8034a","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"ec9d0b10-05d1-4b5a-9184-d3e627b35503","subtype":"Figure","type":"Plot"},"ticker":{"id":"39a5bda2-30e7-4f9c-ac40-bf64bf0fe3e1","type":"BasicTicker"}},"id":"d48ebd87-9e46-462e-8bef-4c9f2e2967f7","type":"Grid"},{"attributes":{"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"10086d70-0a54-468c-ad6d-b0feead79e25","type":"Line"},{"attributes":{"callback":null},"id":"52511957-05ab-4530-bbb3-ee0698926c90","type":"DataRange1d"},{"attributes":{"formatter":{"id":"83fc71da-b313-41d2-858b-d9f9a6c4c18d","type":"BasicTickFormatter"},"plot":{"id":"7beba9e0-8b85-4a74-b3e1-cf617fb8b5b5","subtype":"Figure","type":"Plot"},"ticker":{"id":"b4aaedb4-cc02-4513-9c5f-6ca3e18d24b1","type":"BasicTicker"}},"id":"f099c6f0-c456-494c-84fe-dacc89a69aac","type":"LinearAxis"},{"attributes":{"plot":{"id":"ec9d0b10-05d1-4b5a-9184-d3e627b35503","subtype":"Figure","type":"Plot"}},"id":"f09d528e-0f04-420d-b646-5bc79c65d785","type":"SaveTool"},{"attributes":{},"id":"040c404d-660e-4263-939f-861285158ccd","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"16fad6ca-2102-446d-a8a2-9bd0ab7852c5","type":"DataRange1d"},{"attributes":{"plot":null,"text":null},"id":"1a2b745b-e18a-4a8c-81c6-c94218e8d3b8","type":"Title"},{"attributes":{},"id":"76dd02ac-ffde-490e-9847-61b519da2bac","type":"ToolEvents"},{"attributes":{"child":{"id":"ec9d0b10-05d1-4b5a-9184-d3e627b35503","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"2f1f872e-eeb4-4626-ba25-5d69509ed392","type":"Panel"},{"attributes":{"data_source":{"id":"9d2e184d-0c1c-4d4b-9eab-6909122ac46c","type":"ColumnDataSource"},"glyph":{"id":"7a5b726c-f300-43b5-b680-312e1d5a894e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"cc52b906-6107-4d29-a833-0b8f0647cec0","type":"Circle"},"selection_glyph":null},"id":"ab5fba21-a648-4ec1-a8f5-283998a600fe","type":"GlyphRenderer"}],"root_ids":["ba737dbe-9426-40d6-808b-00f47cfb4ef2"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"2de5fdbc-de19-466f-bea8-24df312bca6b","elementid":"b333a778-25b0-4454-9756-621e90b39398","modelid":"ba737dbe-9426-40d6-808b-00f47cfb4ef2"}];
              
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