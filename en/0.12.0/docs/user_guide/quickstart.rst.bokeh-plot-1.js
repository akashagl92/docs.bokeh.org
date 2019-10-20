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
      };var element = document.getElementById("cd9b27ea-43ae-47ef-a54f-7e14b7c7a73b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cd9b27ea-43ae-47ef-a54f-7e14b7c7a73b' but no matching script tag was found. ")
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
              var docs_json = {"0641cbdf-a24c-4a0f-9785-b61992ad725c":{"roots":{"references":[{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"a6c53a93-dc12-434b-8c3e-dd4f083cf6ca","type":"Line"},{"attributes":{"num_minor_ticks":10},"id":"4bcf9433-ae31-41ba-91f1-1e1dc3fda33a","type":"LogTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e47758ea-ad38-47cd-854a-3de10d01f563","type":"Line"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"e49e416e-7f54-40cd-a4a6-875b9c87634c","type":"Range1d"},{"attributes":{},"id":"4e92cf55-4f50-4a77-b2ae-b83f377a41f6","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4c6b9ebf-f6cb-4b18-9fcf-3e4722ba7dc6","type":"Line"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"2cd60903-828b-4f88-929a-229f6c51d8ab","type":"Circle"},{"attributes":{"plot":{"id":"ac27c793-2d17-4a09-acc3-24e711545c34","subtype":"Figure","type":"Plot"},"ticker":{"id":"f9f5efa9-02f7-4097-b15c-09de0f86aae4","type":"BasicTicker"}},"id":"c8671fcc-848c-4f7f-8978-ed4900ec4564","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"378856e5-0c75-408f-b3bb-da7a540fe1c5","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"8d4c1c7a-ecad-4235-a6d5-1796aa4ab7c6","type":"DataRange1d"},{"attributes":{"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ca37d2ef-63af-4f40-81e1-47e990234d35","type":"Line"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"46e29976-2d52-4562-9450-6cbbe5ab1f48","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"8168f384-fd1f-4fe2-b62b-758b77392f28","type":"Circle"},{"attributes":{"data_source":{"id":"e354cc6e-d69c-4808-91f9-e031a416e254","type":"ColumnDataSource"},"glyph":{"id":"7e6dd120-0b48-4871-8517-0d230e7c30cb","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"fed118a5-5f8a-46bb-8d6c-c2d2c98ed34e","type":"Circle"},"selection_glyph":null},"id":"4969fd33-def2-40dd-ad52-b295e0caa4a5","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"46e29976-2d52-4562-9450-6cbbe5ab1f48","type":"ColumnDataSource"},"glyph":{"id":"ca37d2ef-63af-4f40-81e1-47e990234d35","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"4c6b9ebf-f6cb-4b18-9fcf-3e4722ba7dc6","type":"Line"},"selection_glyph":null},"id":"cd13062f-4ec5-473f-8030-e9fcdeceabb7","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c32ace04-bb29-4511-8303-c23382505ad1","type":"ColumnDataSource"},"glyph":{"id":"5c30fe76-dbb1-47cf-9d76-f9088ef7f93b","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"e47758ea-ad38-47cd-854a-3de10d01f563","type":"Line"},"selection_glyph":null},"id":"1177ee11-4975-4bf8-bd0b-e5c0b59fdb12","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5c30fe76-dbb1-47cf-9d76-f9088ef7f93b","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6822b42c-65df-4023-9916-e69aa56b4b1f","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"ac27c793-2d17-4a09-acc3-24e711545c34","subtype":"Figure","type":"Plot"}},"id":"56942d7d-bff1-4e83-b891-b8fb3e721290","type":"SaveTool"},{"attributes":{"plot":{"id":"ac27c793-2d17-4a09-acc3-24e711545c34","subtype":"Figure","type":"Plot"}},"id":"8b9d428a-da86-4497-9711-a8a3f207289b","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"fed118a5-5f8a-46bb-8d6c-c2d2c98ed34e","type":"Circle"},{"attributes":{"data_source":{"id":"bc4f1d70-5a17-4354-aa70-4a4ffb7f9633","type":"ColumnDataSource"},"glyph":{"id":"58ad1500-edf4-400c-810e-034184d21a2c","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"50c0e0e4-997c-4a00-8b04-552735ab5fb3","type":"Line"},"selection_glyph":null},"id":"ef8587d2-45fa-48bc-9ffe-75e0de5588dd","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]}},"id":"29b8e9d9-9902-4671-8452-fc34dac7e44b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"29b8e9d9-9902-4671-8452-fc34dac7e44b","type":"ColumnDataSource"},"glyph":{"id":"a6c53a93-dc12-434b-8c3e-dd4f083cf6ca","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"927b1c89-646f-4006-8714-bd2f543705c6","type":"Line"},"selection_glyph":null},"id":"1fb9d96d-47df-4a26-bc91-d49d981dae44","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"7e6dd120-0b48-4871-8517-0d230e7c30cb","type":"Circle"},{"attributes":{"plot":{"id":"ac27c793-2d17-4a09-acc3-24e711545c34","subtype":"Figure","type":"Plot"}},"id":"4f5776ec-abfe-499a-9ef4-fdda9f7a584a","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"50c0e0e4-997c-4a00-8b04-552735ab5fb3","type":"Line"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"927b1c89-646f-4006-8714-bd2f543705c6","type":"Line"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8b9d428a-da86-4497-9711-a8a3f207289b","type":"PanTool"},{"id":"ef99faa6-fe95-493a-8390-e152850dea3a","type":"BoxZoomTool"},{"id":"4f5776ec-abfe-499a-9ef4-fdda9f7a584a","type":"ResetTool"},{"id":"56942d7d-bff1-4e83-b891-b8fb3e721290","type":"SaveTool"}]},"id":"a345542c-b28b-448e-bc8d-835ed8cddcce","type":"Toolbar"},{"attributes":{"legends":[["y=x",[{"id":"1177ee11-4975-4bf8-bd0b-e5c0b59fdb12","type":"GlyphRenderer"},{"id":"7013c8be-1d13-425f-91ea-f3c2b827d31e","type":"GlyphRenderer"}]],["y=x^2",[{"id":"1fb9d96d-47df-4a26-bc91-d49d981dae44","type":"GlyphRenderer"}]],["y=10^x",[{"id":"cd13062f-4ec5-473f-8030-e9fcdeceabb7","type":"GlyphRenderer"},{"id":"4969fd33-def2-40dd-ad52-b295e0caa4a5","type":"GlyphRenderer"}]],["y=10^x^2",[{"id":"ef8587d2-45fa-48bc-9ffe-75e0de5588dd","type":"GlyphRenderer"}]]],"plot":{"id":"ac27c793-2d17-4a09-acc3-24e711545c34","subtype":"Figure","type":"Plot"}},"id":"0a694fc8-15ca-46e0-8685-4397f75fd299","type":"Legend"},{"attributes":{},"id":"a664b0b9-9261-4c11-b72b-f503eb3c351e","type":"ToolEvents"},{"attributes":{"plot":null,"text":"log axis example"},"id":"a4579081-f879-424f-b294-25e4536acf6c","type":"Title"},{"attributes":{"ticker":null},"id":"292195f0-621b-45ca-b4a9-39cc98b172a4","type":"LogTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]}},"id":"bc4f1d70-5a17-4354-aa70-4a4ffb7f9633","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"58ad1500-edf4-400c-810e-034184d21a2c","type":"Line"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"e354cc6e-d69c-4808-91f9-e031a416e254","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"1cf56b37-1c14-4df1-ac21-a877edaf8819","type":"LinearAxis"}],"left":[{"id":"2e651383-5171-4941-9df3-57ce85533016","type":"LogAxis"}],"renderers":[{"id":"1cf56b37-1c14-4df1-ac21-a877edaf8819","type":"LinearAxis"},{"id":"c8671fcc-848c-4f7f-8978-ed4900ec4564","type":"Grid"},{"id":"2e651383-5171-4941-9df3-57ce85533016","type":"LogAxis"},{"id":"88be9c78-b243-4372-8a82-02402fe907dd","type":"Grid"},{"id":"6822b42c-65df-4023-9916-e69aa56b4b1f","type":"BoxAnnotation"},{"id":"0a694fc8-15ca-46e0-8685-4397f75fd299","type":"Legend"},{"id":"1177ee11-4975-4bf8-bd0b-e5c0b59fdb12","type":"GlyphRenderer"},{"id":"7013c8be-1d13-425f-91ea-f3c2b827d31e","type":"GlyphRenderer"},{"id":"1fb9d96d-47df-4a26-bc91-d49d981dae44","type":"GlyphRenderer"},{"id":"cd13062f-4ec5-473f-8030-e9fcdeceabb7","type":"GlyphRenderer"},{"id":"4969fd33-def2-40dd-ad52-b295e0caa4a5","type":"GlyphRenderer"},{"id":"ef8587d2-45fa-48bc-9ffe-75e0de5588dd","type":"GlyphRenderer"}],"title":{"id":"a4579081-f879-424f-b294-25e4536acf6c","type":"Title"},"tool_events":{"id":"a664b0b9-9261-4c11-b72b-f503eb3c351e","type":"ToolEvents"},"toolbar":{"id":"a345542c-b28b-448e-bc8d-835ed8cddcce","type":"Toolbar"},"x_range":{"id":"8d4c1c7a-ecad-4235-a6d5-1796aa4ab7c6","type":"DataRange1d"},"y_mapper_type":"log","y_range":{"id":"e49e416e-7f54-40cd-a4a6-875b9c87634c","type":"Range1d"}},"id":"ac27c793-2d17-4a09-acc3-24e711545c34","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"6822b42c-65df-4023-9916-e69aa56b4b1f","type":"BoxAnnotation"},"plot":{"id":"ac27c793-2d17-4a09-acc3-24e711545c34","subtype":"Figure","type":"Plot"}},"id":"ef99faa6-fe95-493a-8390-e152850dea3a","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"ac27c793-2d17-4a09-acc3-24e711545c34","subtype":"Figure","type":"Plot"},"ticker":{"id":"4bcf9433-ae31-41ba-91f1-1e1dc3fda33a","type":"LogTicker"}},"id":"88be9c78-b243-4372-8a82-02402fe907dd","type":"Grid"},{"attributes":{"axis_label":"particles","formatter":{"id":"292195f0-621b-45ca-b4a9-39cc98b172a4","type":"LogTickFormatter"},"plot":{"id":"ac27c793-2d17-4a09-acc3-24e711545c34","subtype":"Figure","type":"Plot"},"ticker":{"id":"4bcf9433-ae31-41ba-91f1-1e1dc3fda33a","type":"LogTicker"}},"id":"2e651383-5171-4941-9df3-57ce85533016","type":"LogAxis"},{"attributes":{"data_source":{"id":"378856e5-0c75-408f-b3bb-da7a540fe1c5","type":"ColumnDataSource"},"glyph":{"id":"2cd60903-828b-4f88-929a-229f6c51d8ab","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"8168f384-fd1f-4fe2-b62b-758b77392f28","type":"Circle"},"selection_glyph":null},"id":"7013c8be-1d13-425f-91ea-f3c2b827d31e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"c32ace04-bb29-4511-8303-c23382505ad1","type":"ColumnDataSource"},{"attributes":{},"id":"f9f5efa9-02f7-4097-b15c-09de0f86aae4","type":"BasicTicker"},{"attributes":{"axis_label":"sections","formatter":{"id":"4e92cf55-4f50-4a77-b2ae-b83f377a41f6","type":"BasicTickFormatter"},"plot":{"id":"ac27c793-2d17-4a09-acc3-24e711545c34","subtype":"Figure","type":"Plot"},"ticker":{"id":"f9f5efa9-02f7-4097-b15c-09de0f86aae4","type":"BasicTicker"}},"id":"1cf56b37-1c14-4df1-ac21-a877edaf8819","type":"LinearAxis"}],"root_ids":["ac27c793-2d17-4a09-acc3-24e711545c34"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"0641cbdf-a24c-4a0f-9785-b61992ad725c","elementid":"cd9b27ea-43ae-47ef-a54f-7e14b7c7a73b","modelid":"ac27c793-2d17-4a09-acc3-24e711545c34"}];
              
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