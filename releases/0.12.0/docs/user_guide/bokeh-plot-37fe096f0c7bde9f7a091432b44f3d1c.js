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
      };var element = document.getElementById("93fd59ba-7fcc-4443-aed2-47bbab3a588c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '93fd59ba-7fcc-4443-aed2-47bbab3a588c' but no matching script tag was found. ")
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
              var docs_json = {"d9827420-d608-4aa6-b6f6-559071e111be":{"roots":{"references":[{"attributes":{"plot":{"id":"be563579-40a8-4571-a394-f0a723c7a865","subtype":"Figure","type":"Plot"}},"id":"aa9071b2-44f8-4594-ba80-f291a2c33511","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"0e9615d0-9791-472e-8c28-80d551fcbdda","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"53932753-df05-45fe-b3be-d8e0f5fb460f","type":"BasicTickFormatter"},"plot":{"id":"be563579-40a8-4571-a394-f0a723c7a865","subtype":"Figure","type":"Plot"},"ticker":{"id":"297bc85c-5135-4a68-9121-429cff42c042","type":"BasicTicker"}},"id":"7115aa94-8fde-49f5-bf22-0531fa974687","type":"LinearAxis"},{"attributes":{"callback":null},"id":"9287be61-4f66-4b0c-b014-fa250a64ddc9","type":"DataRange1d"},{"attributes":{},"id":"9ca1be67-7cb9-46ff-b2f3-9141add466da","type":"BasicTicker"},{"attributes":{},"id":"ae6a556f-ea1a-45c2-a0c6-0d1cb2e7aa29","type":"BasicTickFormatter"},{"attributes":{},"id":"2eaa594d-940e-4ded-8529-4f4efc30bfa0","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"99882508-a99d-444c-ae35-281be5f99aff","type":"ColumnDataSource"},{"attributes":{},"id":"554cd013-546f-4776-990d-186af25bd4dd","type":"ToolEvents"},{"attributes":{"callback":null},"id":"fef810d2-fc07-4b05-8c85-35d14de8ae76","type":"DataRange1d"},{"attributes":{"below":[{"id":"f1897c83-64d2-47bc-8024-b7ce50f67d72","type":"LinearAxis"}],"left":[{"id":"7115aa94-8fde-49f5-bf22-0531fa974687","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f1897c83-64d2-47bc-8024-b7ce50f67d72","type":"LinearAxis"},{"id":"176d160c-9196-43db-aca6-98109d96594c","type":"Grid"},{"id":"7115aa94-8fde-49f5-bf22-0531fa974687","type":"LinearAxis"},{"id":"dcc1d3ad-7fa1-41f5-8ed3-58843481bbaf","type":"Grid"},{"id":"3ac46c17-8a34-41cd-8e9e-280460c64e4d","type":"BoxAnnotation"},{"id":"18e95e5e-6c97-490d-9bcc-d8b1497caa98","type":"GlyphRenderer"}],"title":{"id":"0d4b8825-009e-41c4-938a-4efd0906d834","type":"Title"},"tool_events":{"id":"87c5bd50-ac52-4464-90dd-78805b864bc5","type":"ToolEvents"},"toolbar":{"id":"88d37373-07d2-4078-884d-d98f17293d3b","type":"Toolbar"},"x_range":{"id":"f9363be4-b217-420b-a0de-462345d42f53","type":"DataRange1d"},"y_range":{"id":"9287be61-4f66-4b0c-b014-fa250a64ddc9","type":"DataRange1d"}},"id":"be563579-40a8-4571-a394-f0a723c7a865","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"ae6a556f-ea1a-45c2-a0c6-0d1cb2e7aa29","type":"BasicTickFormatter"},"plot":{"id":"be563579-40a8-4571-a394-f0a723c7a865","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe1e7340-c1b4-4cbe-84ae-2fecd5b00674","type":"BasicTicker"}},"id":"f1897c83-64d2-47bc-8024-b7ce50f67d72","type":"LinearAxis"},{"attributes":{"plot":{"id":"be563579-40a8-4571-a394-f0a723c7a865","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe1e7340-c1b4-4cbe-84ae-2fecd5b00674","type":"BasicTicker"}},"id":"176d160c-9196-43db-aca6-98109d96594c","type":"Grid"},{"attributes":{"plot":{"id":"f6e67a8f-d23c-4c5c-b511-79d33dcf6720","subtype":"Figure","type":"Plot"},"ticker":{"id":"2eaa594d-940e-4ded-8529-4f4efc30bfa0","type":"BasicTicker"}},"id":"f3359abd-c80e-4d4f-a8ff-b9538188710a","type":"Grid"},{"attributes":{"overlay":{"id":"3ac46c17-8a34-41cd-8e9e-280460c64e4d","type":"BoxAnnotation"},"plot":{"id":"be563579-40a8-4571-a394-f0a723c7a865","subtype":"Figure","type":"Plot"}},"id":"dff70e9f-f295-4b9b-bd27-726f01816035","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3ac46c17-8a34-41cd-8e9e-280460c64e4d","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"b7d71316-e550-468f-a891-8875f07dbf71","type":"Circle"},{"attributes":{"callback":null,"tabs":[{"id":"363e6ee0-9d47-48b2-b215-4c8a6db9b008","type":"Panel"},{"id":"35e62fce-4600-4af6-adc0-c7fd7e44e93f","type":"Panel"}]},"id":"c8046f89-604a-4570-87ac-e9376c28eb26","type":"Tabs"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"68cdf8bd-e96d-4753-83d0-81b0d7d2f19f","type":"PanTool"},{"id":"2acda616-c07f-468a-a8c0-8b18b34b4938","type":"WheelZoomTool"},{"id":"c9979b5f-2bfc-48b1-aade-f9c80e33bb5f","type":"BoxZoomTool"},{"id":"4c3b20dd-7a9a-4eb0-8ead-7327c026585f","type":"SaveTool"},{"id":"e6b14cf2-9a38-4d59-9305-0f62262364f0","type":"ResetTool"},{"id":"ecac87c3-6737-4c56-ac4c-3ea0a6868d77","type":"HelpTool"}]},"id":"7b091680-e234-449c-8c80-d8278b1e97fb","type":"Toolbar"},{"attributes":{"callback":null},"id":"f9363be4-b217-420b-a0de-462345d42f53","type":"DataRange1d"},{"attributes":{},"id":"53932753-df05-45fe-b3be-d8e0f5fb460f","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"99882508-a99d-444c-ae35-281be5f99aff","type":"ColumnDataSource"},"glyph":{"id":"b7d71316-e550-468f-a891-8875f07dbf71","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"eda9bdbc-535e-4a8f-9810-5e9ac596d97d","type":"Circle"},"selection_glyph":null},"id":"18e95e5e-6c97-490d-9bcc-d8b1497caa98","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"f6e67a8f-d23c-4c5c-b511-79d33dcf6720","subtype":"Figure","type":"Plot"}},"id":"e6b14cf2-9a38-4d59-9305-0f62262364f0","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"eda9bdbc-535e-4a8f-9810-5e9ac596d97d","type":"Circle"},{"attributes":{"callback":null},"id":"1f41a714-9fb4-4064-b5f5-5524d6a6eda3","type":"DataRange1d"},{"attributes":{"plot":{"id":"be563579-40a8-4571-a394-f0a723c7a865","subtype":"Figure","type":"Plot"}},"id":"398823d3-5551-4e19-b866-4ceed1db58da","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"f6e67a8f-d23c-4c5c-b511-79d33dcf6720","subtype":"Figure","type":"Plot"}},"id":"ecac87c3-6737-4c56-ac4c-3ea0a6868d77","type":"HelpTool"},{"attributes":{},"id":"87c5bd50-ac52-4464-90dd-78805b864bc5","type":"ToolEvents"},{"attributes":{"formatter":{"id":"99a8637f-b9af-4dde-a674-7069d801d2d2","type":"BasicTickFormatter"},"plot":{"id":"f6e67a8f-d23c-4c5c-b511-79d33dcf6720","subtype":"Figure","type":"Plot"},"ticker":{"id":"2eaa594d-940e-4ded-8529-4f4efc30bfa0","type":"BasicTicker"}},"id":"e43941bb-e259-4777-8ee6-d00acf505119","type":"LinearAxis"},{"attributes":{"plot":{"id":"f6e67a8f-d23c-4c5c-b511-79d33dcf6720","subtype":"Figure","type":"Plot"}},"id":"68cdf8bd-e96d-4753-83d0-81b0d7d2f19f","type":"PanTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"c945fe3a-c601-4080-922e-4e769dc1d5bb","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4501289a-251a-4285-9288-ed53b12c3a82","type":"BoxAnnotation"},{"attributes":{},"id":"fe1e7340-c1b4-4cbe-84ae-2fecd5b00674","type":"BasicTicker"},{"attributes":{},"id":"99a8637f-b9af-4dde-a674-7069d801d2d2","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"be563579-40a8-4571-a394-f0a723c7a865","subtype":"Figure","type":"Plot"}},"id":"6227c01c-a19f-4780-b648-6681425594b2","type":"PanTool"},{"attributes":{"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"cf3eafec-1001-40cb-aeda-8b2c283fd638","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"f6e67a8f-d23c-4c5c-b511-79d33dcf6720","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ca1be67-7cb9-46ff-b2f3-9141add466da","type":"BasicTicker"}},"id":"8afc9f04-8b93-45b2-bcf8-f5a1475fef98","type":"Grid"},{"attributes":{"plot":{"id":"be563579-40a8-4571-a394-f0a723c7a865","subtype":"Figure","type":"Plot"}},"id":"276cec17-55ec-4ee9-ab42-046911e7ce74","type":"HelpTool"},{"attributes":{"below":[{"id":"e43941bb-e259-4777-8ee6-d00acf505119","type":"LinearAxis"}],"left":[{"id":"08d0f33f-e20b-459e-9ee6-30a9816c86cc","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e43941bb-e259-4777-8ee6-d00acf505119","type":"LinearAxis"},{"id":"f3359abd-c80e-4d4f-a8ff-b9538188710a","type":"Grid"},{"id":"08d0f33f-e20b-459e-9ee6-30a9816c86cc","type":"LinearAxis"},{"id":"8afc9f04-8b93-45b2-bcf8-f5a1475fef98","type":"Grid"},{"id":"4501289a-251a-4285-9288-ed53b12c3a82","type":"BoxAnnotation"},{"id":"b9f5f182-646a-430a-9989-f39127112095","type":"GlyphRenderer"}],"title":{"id":"709fca4c-52b7-4854-ac61-e7df376cec79","type":"Title"},"tool_events":{"id":"554cd013-546f-4776-990d-186af25bd4dd","type":"ToolEvents"},"toolbar":{"id":"7b091680-e234-449c-8c80-d8278b1e97fb","type":"Toolbar"},"x_range":{"id":"fef810d2-fc07-4b05-8c85-35d14de8ae76","type":"DataRange1d"},"y_range":{"id":"1f41a714-9fb4-4064-b5f5-5524d6a6eda3","type":"DataRange1d"}},"id":"f6e67a8f-d23c-4c5c-b511-79d33dcf6720","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6227c01c-a19f-4780-b648-6681425594b2","type":"PanTool"},{"id":"398823d3-5551-4e19-b866-4ceed1db58da","type":"WheelZoomTool"},{"id":"dff70e9f-f295-4b9b-bd27-726f01816035","type":"BoxZoomTool"},{"id":"aa9071b2-44f8-4594-ba80-f291a2c33511","type":"SaveTool"},{"id":"362759cb-684e-4956-9061-8d7ffb787062","type":"ResetTool"},{"id":"276cec17-55ec-4ee9-ab42-046911e7ce74","type":"HelpTool"}]},"id":"88d37373-07d2-4078-884d-d98f17293d3b","type":"Toolbar"},{"attributes":{"overlay":{"id":"4501289a-251a-4285-9288-ed53b12c3a82","type":"BoxAnnotation"},"plot":{"id":"f6e67a8f-d23c-4c5c-b511-79d33dcf6720","subtype":"Figure","type":"Plot"}},"id":"c9979b5f-2bfc-48b1-aade-f9c80e33bb5f","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"be563579-40a8-4571-a394-f0a723c7a865","subtype":"Figure","type":"Plot"},"ticker":{"id":"297bc85c-5135-4a68-9121-429cff42c042","type":"BasicTicker"}},"id":"dcc1d3ad-7fa1-41f5-8ed3-58843481bbaf","type":"Grid"},{"attributes":{"plot":{"id":"f6e67a8f-d23c-4c5c-b511-79d33dcf6720","subtype":"Figure","type":"Plot"}},"id":"4c3b20dd-7a9a-4eb0-8ead-7327c026585f","type":"SaveTool"},{"attributes":{"plot":{"id":"f6e67a8f-d23c-4c5c-b511-79d33dcf6720","subtype":"Figure","type":"Plot"}},"id":"2acda616-c07f-468a-a8c0-8b18b34b4938","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":null},"id":"709fca4c-52b7-4854-ac61-e7df376cec79","type":"Title"},{"attributes":{"formatter":{"id":"dedf11a6-5c29-4c5b-aa9e-955fbcc28481","type":"BasicTickFormatter"},"plot":{"id":"f6e67a8f-d23c-4c5c-b511-79d33dcf6720","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ca1be67-7cb9-46ff-b2f3-9141add466da","type":"BasicTicker"}},"id":"08d0f33f-e20b-459e-9ee6-30a9816c86cc","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"0d4b8825-009e-41c4-938a-4efd0906d834","type":"Title"},{"attributes":{"child":{"id":"f6e67a8f-d23c-4c5c-b511-79d33dcf6720","subtype":"Figure","type":"Plot"},"title":"line"},"id":"35e62fce-4600-4af6-adc0-c7fd7e44e93f","type":"Panel"},{"attributes":{},"id":"dedf11a6-5c29-4c5b-aa9e-955fbcc28481","type":"BasicTickFormatter"},{"attributes":{"child":{"id":"be563579-40a8-4571-a394-f0a723c7a865","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"363e6ee0-9d47-48b2-b215-4c8a6db9b008","type":"Panel"},{"attributes":{"plot":{"id":"be563579-40a8-4571-a394-f0a723c7a865","subtype":"Figure","type":"Plot"}},"id":"362759cb-684e-4956-9061-8d7ffb787062","type":"ResetTool"},{"attributes":{},"id":"297bc85c-5135-4a68-9121-429cff42c042","type":"BasicTicker"},{"attributes":{"data_source":{"id":"0e9615d0-9791-472e-8c28-80d551fcbdda","type":"ColumnDataSource"},"glyph":{"id":"cf3eafec-1001-40cb-aeda-8b2c283fd638","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"c945fe3a-c601-4080-922e-4e769dc1d5bb","type":"Line"},"selection_glyph":null},"id":"b9f5f182-646a-430a-9989-f39127112095","type":"GlyphRenderer"}],"root_ids":["c8046f89-604a-4570-87ac-e9376c28eb26"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"d9827420-d608-4aa6-b6f6-559071e111be","elementid":"93fd59ba-7fcc-4443-aed2-47bbab3a588c","modelid":"c8046f89-604a-4570-87ac-e9376c28eb26"}];
              
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