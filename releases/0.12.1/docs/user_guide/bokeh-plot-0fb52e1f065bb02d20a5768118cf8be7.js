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
      };var element = document.getElementById("e7faa6cd-c119-4656-b0a9-b99e8b0ad41e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e7faa6cd-c119-4656-b0a9-b99e8b0ad41e' but no matching script tag was found. ")
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
              var docs_json = {"2bf60106-2789-4b46-ae59-a141a086df6d":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"1db54cc0-6933-4389-93ef-8b83f80f2622","type":"ColumnDataSource"},{"attributes":{},"id":"4a93e14f-4777-413a-9dbf-90fa6acc05f8","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a38d0e46-bd41-4b23-9592-75a55646d6dd","type":"Circle"},{"attributes":{"plot":{"id":"b160ae66-1ac9-4f80-8372-8d83c3e14e07","subtype":"Figure","type":"Plot"}},"id":"da780297-bd5e-45a9-a334-e73c953106b3","type":"PanTool"},{"attributes":{"plot":{"id":"d6b61832-c824-4902-945f-ec24bda3c329","subtype":"Figure","type":"Plot"}},"id":"f74520d1-773d-4ec6-8b40-3e1076641ed0","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"3bf7e211-dba7-4d6f-adf7-37be46035a9e","type":"DataRange1d"},{"attributes":{"formatter":{"id":"d9fd1e80-3b2c-4ec8-bbc4-bef1a9c669a8","type":"BasicTickFormatter"},"plot":{"id":"83e123c6-1a03-429c-be39-32e6e9ac9b0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"56596099-2b83-46d4-935f-766faa0463cc","type":"BasicTicker"}},"id":"127d63fc-b164-494e-9fab-94f246648d64","type":"LinearAxis"},{"attributes":{"formatter":{"id":"ef77936e-ab0f-4b8c-9e09-6c3cf0e9ca20","type":"BasicTickFormatter"},"plot":{"id":"b160ae66-1ac9-4f80-8372-8d83c3e14e07","subtype":"Figure","type":"Plot"},"ticker":{"id":"71345e58-00ff-474e-9c5b-2715188131b9","type":"BasicTicker"}},"id":"220ee629-f171-4b71-ab1b-efd8213f87e2","type":"LinearAxis"},{"attributes":{"plot":{"id":"b160ae66-1ac9-4f80-8372-8d83c3e14e07","subtype":"Figure","type":"Plot"}},"id":"be77026d-7496-4f80-97f2-17712ffd55d0","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34872e23-d658-4a7f-b6dd-ded032c60b93","type":"Square"},{"attributes":{"formatter":{"id":"03f0a520-72da-4dc8-9f35-0e4650add801","type":"BasicTickFormatter"},"plot":{"id":"d6b61832-c824-4902-945f-ec24bda3c329","subtype":"Figure","type":"Plot"},"ticker":{"id":"e78ac2fc-f790-402f-8f96-d00e71cc6089","type":"BasicTicker"}},"id":"a6e524fe-e6a5-42a0-9c66-ad80d68bf782","type":"LinearAxis"},{"attributes":{"callback":null},"id":"ffbf7a09-f6b4-4a76-8f8d-6e71c1eb9132","type":"DataRange1d"},{"attributes":{"callback":null},"id":"69d8f3b0-75fb-4dda-b64f-38659ab7d944","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c1437142-158c-42f7-82ea-a2ac83ab0d8c","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"83e123c6-1a03-429c-be39-32e6e9ac9b0e","subtype":"Figure","type":"Plot"}},"id":"2c25676b-e8c3-4ea0-b161-e6a3a0870de1","type":"PanTool"},{"attributes":{"below":[{"id":"127d63fc-b164-494e-9fab-94f246648d64","type":"LinearAxis"}],"left":[{"id":"5c8fa108-0897-49f1-833b-14bdae6a01f8","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"127d63fc-b164-494e-9fab-94f246648d64","type":"LinearAxis"},{"id":"59445987-cbb0-49ef-8b6e-105ccc441817","type":"Grid"},{"id":"5c8fa108-0897-49f1-833b-14bdae6a01f8","type":"LinearAxis"},{"id":"d82bd4fc-fbb3-4180-92b9-7a6dcd44c5d0","type":"Grid"},{"id":"f47f379d-effe-413d-b075-e5844a29b466","type":"BoxAnnotation"},{"id":"91323507-fbd5-4ecf-9eca-a18ae2ee7e7b","type":"GlyphRenderer"}],"title":{"id":"7bb10f7d-1c10-470f-b771-3df6d445f54e","type":"Title"},"tool_events":{"id":"595be4c9-51f4-4d0c-861c-4f3aeecfc213","type":"ToolEvents"},"toolbar":{"id":"e4f0594b-d265-415e-b38a-66c73a90ed2a","type":"Toolbar"},"x_range":{"id":"5b15a104-ea5c-4f65-83a9-534d2c8dd39b","type":"DataRange1d"},"y_range":{"id":"69d8f3b0-75fb-4dda-b64f-38659ab7d944","type":"DataRange1d"}},"id":"83e123c6-1a03-429c-be39-32e6e9ac9b0e","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"05c37078-1b08-45ce-a3b0-5a81d79a6937","type":"ColumnDataSource"},"glyph":{"id":"a38d0e46-bd41-4b23-9592-75a55646d6dd","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"5dddf3be-d89f-4b41-8966-f65ad7eef4ab","type":"Circle"},"selection_glyph":null},"id":"86ce3cdf-91bf-4cf3-a501-8bf2ffc0dc83","type":"GlyphRenderer"},{"attributes":{},"id":"1caa54be-52a6-4f52-a7f6-4f52e1781667","type":"BasicTicker"},{"attributes":{"plot":{"id":"83e123c6-1a03-429c-be39-32e6e9ac9b0e","subtype":"Figure","type":"Plot"}},"id":"82b73298-fe5a-4ec8-9cfc-23ab639651c0","type":"SaveTool"},{"attributes":{"children":[{"id":"b160ae66-1ac9-4f80-8372-8d83c3e14e07","subtype":"Figure","type":"Plot"},{"id":"83e123c6-1a03-429c-be39-32e6e9ac9b0e","subtype":"Figure","type":"Plot"},{"id":"d6b61832-c824-4902-945f-ec24bda3c329","subtype":"Figure","type":"Plot"}]},"id":"8159f26b-7998-412f-a765-58a12d59ec68","type":"Column"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b5f52a17-cb8b-43c2-9d41-c10a65c01876","type":"Triangle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7dc8882e-9e4c-4dbc-82bc-d5ea097408e6","type":"Square"},{"attributes":{"plot":{"id":"83e123c6-1a03-429c-be39-32e6e9ac9b0e","subtype":"Figure","type":"Plot"}},"id":"c440fecd-672d-494a-be32-89bf7f1d2ba3","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"39144fb9-23e5-43da-8f0c-052002ce96ae","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"39144fb9-23e5-43da-8f0c-052002ce96ae","type":"BoxAnnotation"},"plot":{"id":"b160ae66-1ac9-4f80-8372-8d83c3e14e07","subtype":"Figure","type":"Plot"}},"id":"c0261d60-79c3-4146-99e9-469c1360479d","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"b160ae66-1ac9-4f80-8372-8d83c3e14e07","subtype":"Figure","type":"Plot"}},"id":"158754c4-1e97-4391-b47b-6a6c9bea2d15","type":"ResetTool"},{"attributes":{"plot":{"id":"d6b61832-c824-4902-945f-ec24bda3c329","subtype":"Figure","type":"Plot"}},"id":"a0813c6f-016c-4e63-85b7-d1aa00a28db9","type":"HelpTool"},{"attributes":{"plot":null,"text":null},"id":"be396831-a56c-416a-92d8-f570b60b9436","type":"Title"},{"attributes":{"formatter":{"id":"4fd07ec7-a33c-4add-9f71-20e5ef541a9e","type":"BasicTickFormatter"},"plot":{"id":"b160ae66-1ac9-4f80-8372-8d83c3e14e07","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ad6b684-bfb0-4ee3-93fd-285531057a44","type":"BasicTicker"}},"id":"9497db01-c9d7-480d-bfb9-3603b87d0c32","type":"LinearAxis"},{"attributes":{},"id":"2ad6b684-bfb0-4ee3-93fd-285531057a44","type":"BasicTicker"},{"attributes":{"plot":{"id":"b160ae66-1ac9-4f80-8372-8d83c3e14e07","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ad6b684-bfb0-4ee3-93fd-285531057a44","type":"BasicTicker"}},"id":"f69a8b2e-9e75-4d19-833f-f8abd7928bc5","type":"Grid"},{"attributes":{"formatter":{"id":"f26974aa-22b1-4236-a25d-29274bb1d5f9","type":"BasicTickFormatter"},"plot":{"id":"83e123c6-1a03-429c-be39-32e6e9ac9b0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"1caa54be-52a6-4f52-a7f6-4f52e1781667","type":"BasicTicker"}},"id":"5c8fa108-0897-49f1-833b-14bdae6a01f8","type":"LinearAxis"},{"attributes":{"plot":{"id":"b160ae66-1ac9-4f80-8372-8d83c3e14e07","subtype":"Figure","type":"Plot"}},"id":"3d47d868-1f62-41be-89b4-748e1ec8f86e","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"d6b61832-c824-4902-945f-ec24bda3c329","subtype":"Figure","type":"Plot"}},"id":"a2235763-d6fa-4975-99f5-e89025a27568","type":"PanTool"},{"attributes":{"callback":null},"id":"5b15a104-ea5c-4f65-83a9-534d2c8dd39b","type":"DataRange1d"},{"attributes":{},"id":"6b97109c-2fdf-4bfd-ad29-bb7cba6d1c4e","type":"BasicTickFormatter"},{"attributes":{},"id":"ef77936e-ab0f-4b8c-9e09-6c3cf0e9ca20","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"9497db01-c9d7-480d-bfb9-3603b87d0c32","type":"LinearAxis"}],"left":[{"id":"220ee629-f171-4b71-ab1b-efd8213f87e2","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"9497db01-c9d7-480d-bfb9-3603b87d0c32","type":"LinearAxis"},{"id":"f69a8b2e-9e75-4d19-833f-f8abd7928bc5","type":"Grid"},{"id":"220ee629-f171-4b71-ab1b-efd8213f87e2","type":"LinearAxis"},{"id":"3a4e2aa8-6f53-4687-ac4d-8d6aa2f551fd","type":"Grid"},{"id":"39144fb9-23e5-43da-8f0c-052002ce96ae","type":"BoxAnnotation"},{"id":"86ce3cdf-91bf-4cf3-a501-8bf2ffc0dc83","type":"GlyphRenderer"}],"title":{"id":"be396831-a56c-416a-92d8-f570b60b9436","type":"Title"},"tool_events":{"id":"a6eb1b28-4b5c-407c-afeb-9a00344a4a12","type":"ToolEvents"},"toolbar":{"id":"2626533c-488a-4d5e-9119-cf17685757c7","type":"Toolbar"},"x_range":{"id":"abdf4ce8-8972-4276-9e05-3ac145b7d6b4","type":"DataRange1d"},"y_range":{"id":"3bf7e211-dba7-4d6f-adf7-37be46035a9e","type":"DataRange1d"}},"id":"b160ae66-1ac9-4f80-8372-8d83c3e14e07","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e7d67ef8-6aff-4804-8796-46faedf4e06c","type":"Triangle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"1f475d5c-dcf7-415f-847a-62b659558bac","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"43c07c1b-e148-4cef-b88d-783ab3ebbb41","type":"DataRange1d"},{"attributes":{},"id":"f01d6f8b-c977-48bc-a89c-90d955bae0a0","type":"ToolEvents"},{"attributes":{"plot":{"id":"83e123c6-1a03-429c-be39-32e6e9ac9b0e","subtype":"Figure","type":"Plot"}},"id":"5348376a-b383-4c87-8bce-4acf249d3026","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"f47f379d-effe-413d-b075-e5844a29b466","type":"BoxAnnotation"},"plot":{"id":"83e123c6-1a03-429c-be39-32e6e9ac9b0e","subtype":"Figure","type":"Plot"}},"id":"35670d3a-99cc-4188-bc8c-982c12631432","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"d6b61832-c824-4902-945f-ec24bda3c329","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a93e14f-4777-413a-9dbf-90fa6acc05f8","type":"BasicTicker"}},"id":"1429f804-3c96-4e8f-9c14-01445bf2ad6a","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5dddf3be-d89f-4b41-8966-f65ad7eef4ab","type":"Circle"},{"attributes":{},"id":"f26974aa-22b1-4236-a25d-29274bb1d5f9","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f47f379d-effe-413d-b075-e5844a29b466","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"6b97109c-2fdf-4bfd-ad29-bb7cba6d1c4e","type":"BasicTickFormatter"},"plot":{"id":"d6b61832-c824-4902-945f-ec24bda3c329","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a93e14f-4777-413a-9dbf-90fa6acc05f8","type":"BasicTicker"}},"id":"f406dba3-8c69-4c5f-9759-8bf2c02a402a","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"83e123c6-1a03-429c-be39-32e6e9ac9b0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"1caa54be-52a6-4f52-a7f6-4f52e1781667","type":"BasicTicker"}},"id":"d82bd4fc-fbb3-4180-92b9-7a6dcd44c5d0","type":"Grid"},{"attributes":{},"id":"03f0a520-72da-4dc8-9f35-0e4650add801","type":"BasicTickFormatter"},{"attributes":{},"id":"e78ac2fc-f790-402f-8f96-d00e71cc6089","type":"BasicTicker"},{"attributes":{},"id":"a6eb1b28-4b5c-407c-afeb-9a00344a4a12","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"05c37078-1b08-45ce-a3b0-5a81d79a6937","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b160ae66-1ac9-4f80-8372-8d83c3e14e07","subtype":"Figure","type":"Plot"}},"id":"0c4d0051-34bb-42e8-b48d-52b68797c025","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"da780297-bd5e-45a9-a334-e73c953106b3","type":"PanTool"},{"id":"3d47d868-1f62-41be-89b4-748e1ec8f86e","type":"WheelZoomTool"},{"id":"c0261d60-79c3-4146-99e9-469c1360479d","type":"BoxZoomTool"},{"id":"be77026d-7496-4f80-97f2-17712ffd55d0","type":"SaveTool"},{"id":"158754c4-1e97-4391-b47b-6a6c9bea2d15","type":"ResetTool"},{"id":"0c4d0051-34bb-42e8-b48d-52b68797c025","type":"HelpTool"}]},"id":"2626533c-488a-4d5e-9119-cf17685757c7","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"b160ae66-1ac9-4f80-8372-8d83c3e14e07","subtype":"Figure","type":"Plot"},"ticker":{"id":"71345e58-00ff-474e-9c5b-2715188131b9","type":"BasicTicker"}},"id":"3a4e2aa8-6f53-4687-ac4d-8d6aa2f551fd","type":"Grid"},{"attributes":{"below":[{"id":"a6e524fe-e6a5-42a0-9c66-ad80d68bf782","type":"LinearAxis"}],"left":[{"id":"f406dba3-8c69-4c5f-9759-8bf2c02a402a","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"a6e524fe-e6a5-42a0-9c66-ad80d68bf782","type":"LinearAxis"},{"id":"4129e47c-ce44-494f-a630-a131e77bc027","type":"Grid"},{"id":"f406dba3-8c69-4c5f-9759-8bf2c02a402a","type":"LinearAxis"},{"id":"1429f804-3c96-4e8f-9c14-01445bf2ad6a","type":"Grid"},{"id":"c1437142-158c-42f7-82ea-a2ac83ab0d8c","type":"BoxAnnotation"},{"id":"cee66628-2a4b-4ba4-9d65-a862d84cd2e5","type":"GlyphRenderer"}],"title":{"id":"ec9965b4-cb43-427b-aa61-42ec9f9678e1","type":"Title"},"tool_events":{"id":"f01d6f8b-c977-48bc-a89c-90d955bae0a0","type":"ToolEvents"},"toolbar":{"id":"69f777f7-335b-4fbc-a747-5653e24f2fc3","type":"Toolbar"},"x_range":{"id":"ffbf7a09-f6b4-4a76-8f8d-6e71c1eb9132","type":"DataRange1d"},"y_range":{"id":"43c07c1b-e148-4cef-b88d-783ab3ebbb41","type":"DataRange1d"}},"id":"d6b61832-c824-4902-945f-ec24bda3c329","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"d6b61832-c824-4902-945f-ec24bda3c329","subtype":"Figure","type":"Plot"}},"id":"c361162d-6ce2-4af2-87fc-9720bc66e242","type":"SaveTool"},{"attributes":{"plot":{"id":"83e123c6-1a03-429c-be39-32e6e9ac9b0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"56596099-2b83-46d4-935f-766faa0463cc","type":"BasicTicker"}},"id":"59445987-cbb0-49ef-8b6e-105ccc441817","type":"Grid"},{"attributes":{"plot":{"id":"83e123c6-1a03-429c-be39-32e6e9ac9b0e","subtype":"Figure","type":"Plot"}},"id":"9fe9966b-53a0-47e8-8430-b449441c2ac9","type":"HelpTool"},{"attributes":{"callback":null},"id":"abdf4ce8-8972-4276-9e05-3ac145b7d6b4","type":"DataRange1d"},{"attributes":{},"id":"4fd07ec7-a33c-4add-9f71-20e5ef541a9e","type":"BasicTickFormatter"},{"attributes":{},"id":"71345e58-00ff-474e-9c5b-2715188131b9","type":"BasicTicker"},{"attributes":{"plot":{"id":"d6b61832-c824-4902-945f-ec24bda3c329","subtype":"Figure","type":"Plot"},"ticker":{"id":"e78ac2fc-f790-402f-8f96-d00e71cc6089","type":"BasicTicker"}},"id":"4129e47c-ce44-494f-a630-a131e77bc027","type":"Grid"},{"attributes":{"data_source":{"id":"1f475d5c-dcf7-415f-847a-62b659558bac","type":"ColumnDataSource"},"glyph":{"id":"e7d67ef8-6aff-4804-8796-46faedf4e06c","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"b5f52a17-cb8b-43c2-9d41-c10a65c01876","type":"Triangle"},"selection_glyph":null},"id":"91323507-fbd5-4ecf-9eca-a18ae2ee7e7b","type":"GlyphRenderer"},{"attributes":{},"id":"56596099-2b83-46d4-935f-766faa0463cc","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1db54cc0-6933-4389-93ef-8b83f80f2622","type":"ColumnDataSource"},"glyph":{"id":"7dc8882e-9e4c-4dbc-82bc-d5ea097408e6","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"34872e23-d658-4a7f-b6dd-ded032c60b93","type":"Square"},"selection_glyph":null},"id":"cee66628-2a4b-4ba4-9d65-a862d84cd2e5","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":null},"id":"ec9965b4-cb43-427b-aa61-42ec9f9678e1","type":"Title"},{"attributes":{},"id":"595be4c9-51f4-4d0c-861c-4f3aeecfc213","type":"ToolEvents"},{"attributes":{"plot":null,"text":null},"id":"7bb10f7d-1c10-470f-b771-3df6d445f54e","type":"Title"},{"attributes":{},"id":"d9fd1e80-3b2c-4ec8-bbc4-bef1a9c669a8","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2c25676b-e8c3-4ea0-b161-e6a3a0870de1","type":"PanTool"},{"id":"5348376a-b383-4c87-8bce-4acf249d3026","type":"WheelZoomTool"},{"id":"35670d3a-99cc-4188-bc8c-982c12631432","type":"BoxZoomTool"},{"id":"82b73298-fe5a-4ec8-9cfc-23ab639651c0","type":"SaveTool"},{"id":"c440fecd-672d-494a-be32-89bf7f1d2ba3","type":"ResetTool"},{"id":"9fe9966b-53a0-47e8-8430-b449441c2ac9","type":"HelpTool"}]},"id":"e4f0594b-d265-415e-b38a-66c73a90ed2a","type":"Toolbar"},{"attributes":{"plot":{"id":"d6b61832-c824-4902-945f-ec24bda3c329","subtype":"Figure","type":"Plot"}},"id":"0940ea1f-f898-451f-8178-9ced9648de9b","type":"ResetTool"},{"attributes":{"overlay":{"id":"c1437142-158c-42f7-82ea-a2ac83ab0d8c","type":"BoxAnnotation"},"plot":{"id":"d6b61832-c824-4902-945f-ec24bda3c329","subtype":"Figure","type":"Plot"}},"id":"6edc6bd1-2919-4cd6-bf5d-3d8101c195ea","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a2235763-d6fa-4975-99f5-e89025a27568","type":"PanTool"},{"id":"f74520d1-773d-4ec6-8b40-3e1076641ed0","type":"WheelZoomTool"},{"id":"6edc6bd1-2919-4cd6-bf5d-3d8101c195ea","type":"BoxZoomTool"},{"id":"c361162d-6ce2-4af2-87fc-9720bc66e242","type":"SaveTool"},{"id":"0940ea1f-f898-451f-8178-9ced9648de9b","type":"ResetTool"},{"id":"a0813c6f-016c-4e63-85b7-d1aa00a28db9","type":"HelpTool"}]},"id":"69f777f7-335b-4fbc-a747-5653e24f2fc3","type":"Toolbar"}],"root_ids":["8159f26b-7998-412f-a765-58a12d59ec68"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"2bf60106-2789-4b46-ae59-a141a086df6d","elementid":"e7faa6cd-c119-4656-b0a9-b99e8b0ad41e","modelid":"8159f26b-7998-412f-a765-58a12d59ec68"}];
              
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