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
      };var element = document.getElementById("ee6ef533-4c1b-41a2-81c6-dfbde42af929");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ee6ef533-4c1b-41a2-81c6-dfbde42af929' but no matching script tag was found. ")
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
              var docs_json = {"d6be4942-bea3-4f01-9248-cda20bba7b6f":{"roots":{"references":[{"attributes":{"plot":null,"text":null},"id":"2287b766-81f7-4fb3-b9e6-f1b1f4dde127","type":"Title"},{"attributes":{"children":[{"id":"8e25b70c-86fb-4522-8443-8b9f02182e27","type":"ToolbarBox"},{"id":"20f9267f-9f0e-4e68-8646-688432a1d607","type":"Column"}]},"id":"64ed53fc-41d7-480b-907d-d40e64ff5496","type":"Column"},{"attributes":{"dimension":1,"plot":{"id":"f5e733ea-0d6f-4f7c-a153-345da56f9f13","subtype":"Figure","type":"Plot"},"ticker":{"id":"80569bbe-375f-4a47-afc3-73214448ed15","type":"BasicTicker"}},"id":"6336419a-7ca8-47e5-93e7-1c221da8c2ed","type":"Grid"},{"attributes":{"plot":{"id":"f5e733ea-0d6f-4f7c-a153-345da56f9f13","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ab6377c-16cf-48b2-b3be-eb8c773c02cb","type":"BasicTicker"}},"id":"c6b0e6be-d904-4768-a369-fcfb8d5257b5","type":"Grid"},{"attributes":{},"id":"c82f858b-8639-422f-b31c-aaa641393aff","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"50d2a6a5-6a18-4f5f-ae4f-177eff52d38b","type":"BoxSelectTool"},{"id":"2c9181c0-7166-4a85-ac93-c244926d8b25","type":"LassoSelectTool"},{"id":"1f30df67-855d-4bec-9d81-07fc031c15b0","type":"HelpTool"}]},"id":"a9f32811-cda7-4015-b4bb-fdfc02046960","type":"Toolbar"},{"attributes":{},"id":"3895069c-0795-43cd-8c6c-df0771e79961","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"ae4b4b1f-7644-405e-a76a-d5dac5cad24a","type":"LinearAxis"}],"left":[{"id":"b25f3e7d-c0b7-4e19-a141-30b66f4f081e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ae4b4b1f-7644-405e-a76a-d5dac5cad24a","type":"LinearAxis"},{"id":"babaa217-a466-4d42-82f0-262d72da7684","type":"Grid"},{"id":"b25f3e7d-c0b7-4e19-a141-30b66f4f081e","type":"LinearAxis"},{"id":"3ff685ec-0306-4dd5-a6c0-06f0fbbfd413","type":"Grid"},{"id":"9a015f5f-682c-4b87-b075-dcf4adc7cc0a","type":"BoxAnnotation"},{"id":"a20a8770-6b00-4ac1-bf1b-a8686e61f7b5","type":"PolyAnnotation"},{"id":"a764bb05-bcef-4c08-9f07-3533f2e93ebf","type":"GlyphRenderer"}],"title":{"id":"b74eb08a-b524-44bd-8f9a-59fa56656bb3","type":"Title"},"tool_events":{"id":"86193397-5d3a-41ae-8e81-e4cc8e1d2864","type":"ToolEvents"},"toolbar":{"id":"a9f32811-cda7-4015-b4bb-fdfc02046960","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"70e9b02d-d99f-47de-8c09-7a09aea4f4b2","type":"DataRange1d"},"y_range":{"id":"9d951c0c-13ca-444d-a645-5d94ca9bd9d6","type":"DataRange1d"}},"id":"8922a627-cc78-4006-adb7-601321b2307b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4e8b008b-012a-4113-b8d0-0b82411b517f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"3895069c-0795-43cd-8c6c-df0771e79961","type":"BasicTickFormatter"},"plot":{"id":"f5e733ea-0d6f-4f7c-a153-345da56f9f13","subtype":"Figure","type":"Plot"},"ticker":{"id":"80569bbe-375f-4a47-afc3-73214448ed15","type":"BasicTicker"}},"id":"a75d4ba2-f0e5-4682-882f-45e1539e3912","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y1","y0","x"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"e9654334-4308-486c-b743-b2e7870f46a4","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d16891d6-02f4-4bac-aafe-3f2496a95f15","type":"BoxSelectTool"},{"id":"ed5ba891-e3e6-4115-b2aa-afc1cf4dfb49","type":"LassoSelectTool"},{"id":"4575354c-800d-421c-bc83-6d2b119d7348","type":"HelpTool"}]},"id":"8c5938a8-235b-425b-9cd9-4b7d2a05aedb","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"c8a03d71-09ae-4494-8877-b4c1d7c8fdf9","type":"Circle"},{"attributes":{},"id":"8ab6377c-16cf-48b2-b3be-eb8c773c02cb","type":"BasicTicker"},{"attributes":{"callback":null},"id":"2d813cb9-80b6-43cd-b660-cc5e85d2b48b","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"a20a8770-6b00-4ac1-bf1b-a8686e61f7b5","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"b34ab55e-c270-43e2-9073-504533e13463","type":"Circle"},{"attributes":{"data_source":{"id":"e9654334-4308-486c-b743-b2e7870f46a4","type":"ColumnDataSource"},"glyph":{"id":"3edb2e4d-4666-4bbb-ac55-4068d9a68187","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"c8a03d71-09ae-4494-8877-b4c1d7c8fdf9","type":"Circle"},"selection_glyph":null},"id":"a764bb05-bcef-4c08-9f07-3533f2e93ebf","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"93479389-dd50-4899-bb8b-fb27fe5e4c9c","type":"PolyAnnotation"},"plot":{"id":"f5e733ea-0d6f-4f7c-a153-345da56f9f13","subtype":"Figure","type":"Plot"}},"id":"ed5ba891-e3e6-4115-b2aa-afc1cf4dfb49","type":"LassoSelectTool"},{"attributes":{},"id":"86193397-5d3a-41ae-8e81-e4cc8e1d2864","type":"ToolEvents"},{"attributes":{"callback":null,"overlay":{"id":"c600411a-eede-409c-8ba1-1379884c2047","type":"BoxAnnotation"},"plot":{"id":"f5e733ea-0d6f-4f7c-a153-345da56f9f13","subtype":"Figure","type":"Plot"},"renderers":[{"id":"815b5c73-c973-4477-9b4c-56568706292a","type":"GlyphRenderer"}]},"id":"d16891d6-02f4-4bac-aafe-3f2496a95f15","type":"BoxSelectTool"},{"attributes":{"children":[{"id":"2bce94b0-ebad-45cc-b62b-c9e7bca27ad3","type":"Row"}]},"id":"20f9267f-9f0e-4e68-8646-688432a1d607","type":"Column"},{"attributes":{},"id":"d5439b87-5edc-474d-9037-9750be968c79","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9a015f5f-682c-4b87-b075-dcf4adc7cc0a","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"3edb2e4d-4666-4bbb-ac55-4068d9a68187","type":"Circle"},{"attributes":{"plot":{"id":"8922a627-cc78-4006-adb7-601321b2307b","subtype":"Figure","type":"Plot"}},"id":"1f30df67-855d-4bec-9d81-07fc031c15b0","type":"HelpTool"},{"attributes":{"callback":null},"id":"70e9b02d-d99f-47de-8c09-7a09aea4f4b2","type":"DataRange1d"},{"attributes":{"plot":{"id":"f5e733ea-0d6f-4f7c-a153-345da56f9f13","subtype":"Figure","type":"Plot"}},"id":"4575354c-800d-421c-bc83-6d2b119d7348","type":"HelpTool"},{"attributes":{"formatter":{"id":"d5439b87-5edc-474d-9037-9750be968c79","type":"BasicTickFormatter"},"plot":{"id":"8922a627-cc78-4006-adb7-601321b2307b","subtype":"Figure","type":"Plot"},"ticker":{"id":"928646e0-29e6-4835-8922-bb26c00b572f","type":"BasicTicker"}},"id":"ae4b4b1f-7644-405e-a76a-d5dac5cad24a","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"8922a627-cc78-4006-adb7-601321b2307b","subtype":"Figure","type":"Plot"},"ticker":{"id":"5beed210-c5ae-4215-a501-56105a06f424","type":"BasicTicker"}},"id":"3ff685ec-0306-4dd5-a6c0-06f0fbbfd413","type":"Grid"},{"attributes":{},"id":"928646e0-29e6-4835-8922-bb26c00b572f","type":"BasicTicker"},{"attributes":{},"id":"80569bbe-375f-4a47-afc3-73214448ed15","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"a20a8770-6b00-4ac1-bf1b-a8686e61f7b5","type":"PolyAnnotation"},"plot":{"id":"8922a627-cc78-4006-adb7-601321b2307b","subtype":"Figure","type":"Plot"}},"id":"2c9181c0-7166-4a85-ac93-c244926d8b25","type":"LassoSelectTool"},{"attributes":{"plot":{"id":"8922a627-cc78-4006-adb7-601321b2307b","subtype":"Figure","type":"Plot"},"ticker":{"id":"928646e0-29e6-4835-8922-bb26c00b572f","type":"BasicTicker"}},"id":"babaa217-a466-4d42-82f0-262d72da7684","type":"Grid"},{"attributes":{},"id":"e1563fbd-dbd4-4b41-8f99-3cb249d7ac9f","type":"BasicTickFormatter"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"50d2a6a5-6a18-4f5f-ae4f-177eff52d38b","type":"BoxSelectTool"},{"id":"2c9181c0-7166-4a85-ac93-c244926d8b25","type":"LassoSelectTool"},{"id":"1f30df67-855d-4bec-9d81-07fc031c15b0","type":"HelpTool"},{"id":"d16891d6-02f4-4bac-aafe-3f2496a95f15","type":"BoxSelectTool"},{"id":"ed5ba891-e3e6-4115-b2aa-afc1cf4dfb49","type":"LassoSelectTool"},{"id":"4575354c-800d-421c-bc83-6d2b119d7348","type":"HelpTool"}]},"id":"8e25b70c-86fb-4522-8443-8b9f02182e27","type":"ToolbarBox"},{"attributes":{"formatter":{"id":"e1563fbd-dbd4-4b41-8f99-3cb249d7ac9f","type":"BasicTickFormatter"},"plot":{"id":"f5e733ea-0d6f-4f7c-a153-345da56f9f13","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ab6377c-16cf-48b2-b3be-eb8c773c02cb","type":"BasicTicker"}},"id":"b195c826-c837-4da2-bf4c-a59808d7cf7e","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c600411a-eede-409c-8ba1-1379884c2047","type":"BoxAnnotation"},{"attributes":{},"id":"5beed210-c5ae-4215-a501-56105a06f424","type":"BasicTicker"},{"attributes":{"children":[{"id":"8922a627-cc78-4006-adb7-601321b2307b","subtype":"Figure","type":"Plot"},{"id":"f5e733ea-0d6f-4f7c-a153-345da56f9f13","subtype":"Figure","type":"Plot"}]},"id":"2bce94b0-ebad-45cc-b62b-c9e7bca27ad3","type":"Row"},{"attributes":{"plot":null,"text":null},"id":"b74eb08a-b524-44bd-8f9a-59fa56656bb3","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"4c413b12-e8c4-479d-9ea8-3cb80c97ec4a","type":"Circle"},{"attributes":{"callback":null},"id":"60dee267-d75f-44a1-9872-0463b8b33643","type":"DataRange1d"},{"attributes":{"formatter":{"id":"4e8b008b-012a-4113-b8d0-0b82411b517f","type":"BasicTickFormatter"},"plot":{"id":"8922a627-cc78-4006-adb7-601321b2307b","subtype":"Figure","type":"Plot"},"ticker":{"id":"5beed210-c5ae-4215-a501-56105a06f424","type":"BasicTicker"}},"id":"b25f3e7d-c0b7-4e19-a141-30b66f4f081e","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"93479389-dd50-4899-bb8b-fb27fe5e4c9c","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"b195c826-c837-4da2-bf4c-a59808d7cf7e","type":"LinearAxis"}],"left":[{"id":"a75d4ba2-f0e5-4682-882f-45e1539e3912","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b195c826-c837-4da2-bf4c-a59808d7cf7e","type":"LinearAxis"},{"id":"c6b0e6be-d904-4768-a369-fcfb8d5257b5","type":"Grid"},{"id":"a75d4ba2-f0e5-4682-882f-45e1539e3912","type":"LinearAxis"},{"id":"6336419a-7ca8-47e5-93e7-1c221da8c2ed","type":"Grid"},{"id":"c600411a-eede-409c-8ba1-1379884c2047","type":"BoxAnnotation"},{"id":"93479389-dd50-4899-bb8b-fb27fe5e4c9c","type":"PolyAnnotation"},{"id":"815b5c73-c973-4477-9b4c-56568706292a","type":"GlyphRenderer"}],"title":{"id":"2287b766-81f7-4fb3-b9e6-f1b1f4dde127","type":"Title"},"tool_events":{"id":"c82f858b-8639-422f-b31c-aaa641393aff","type":"ToolEvents"},"toolbar":{"id":"8c5938a8-235b-425b-9cd9-4b7d2a05aedb","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"60dee267-d75f-44a1-9872-0463b8b33643","type":"DataRange1d"},"y_range":{"id":"2d813cb9-80b6-43cd-b660-cc5e85d2b48b","type":"DataRange1d"}},"id":"f5e733ea-0d6f-4f7c-a153-345da56f9f13","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"9d951c0c-13ca-444d-a645-5d94ca9bd9d6","type":"DataRange1d"},{"attributes":{"data_source":{"id":"e9654334-4308-486c-b743-b2e7870f46a4","type":"ColumnDataSource"},"glyph":{"id":"b34ab55e-c270-43e2-9073-504533e13463","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"4c413b12-e8c4-479d-9ea8-3cb80c97ec4a","type":"Circle"},"selection_glyph":null},"id":"815b5c73-c973-4477-9b4c-56568706292a","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"9a015f5f-682c-4b87-b075-dcf4adc7cc0a","type":"BoxAnnotation"},"plot":{"id":"8922a627-cc78-4006-adb7-601321b2307b","subtype":"Figure","type":"Plot"},"renderers":[{"id":"a764bb05-bcef-4c08-9f07-3533f2e93ebf","type":"GlyphRenderer"}]},"id":"50d2a6a5-6a18-4f5f-ae4f-177eff52d38b","type":"BoxSelectTool"}],"root_ids":["64ed53fc-41d7-480b-907d-d40e64ff5496"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"d6be4942-bea3-4f01-9248-cda20bba7b6f","elementid":"ee6ef533-4c1b-41a2-81c6-dfbde42af929","modelid":"64ed53fc-41d7-480b-907d-d40e64ff5496"}];
              
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