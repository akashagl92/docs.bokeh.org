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
      };var element = document.getElementById("ca443752-9259-4415-8bb5-0fd62e35e864");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ca443752-9259-4415-8bb5-0fd62e35e864' but no matching script tag was found. ")
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
              var docs_json = {"042dc2ad-395c-4d19-a696-24f2a7de0281":{"roots":{"references":[{"attributes":{"plot":{"id":"7eac8a56-cba6-4e98-bbcc-86c441d71f91","subtype":"Figure","type":"Plot"}},"id":"9d12dbd4-2b53-4285-8954-e5fdda1f1ff5","type":"ResetTool"},{"attributes":{},"id":"1560c57e-a52f-4862-b815-755d092c78af","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"data","value":0.3},"line_color":{"value":"#CAB2D6"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"544de13b-dc07-4eef-9b69-7f46a11df32a","type":"Ellipse"},{"attributes":{"formatter":{"id":"72b6882d-ea10-4892-9147-1b70b1ed083d","type":"BasicTickFormatter"},"plot":{"id":"7eac8a56-cba6-4e98-bbcc-86c441d71f91","subtype":"Figure","type":"Plot"},"ticker":{"id":"b89889fa-5948-45de-95f2-a89c114f5a4a","type":"BasicTicker"}},"id":"16da6afd-df1b-4e2c-9048-f04c00420b58","type":"LinearAxis"},{"attributes":{},"id":"a6446b14-9df1-40a5-8f4b-ef07824b78de","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["width","y","x"],"data":{"width":[0.2,0.3,0.1],"x":[1,2,3],"y":[1,2,3]}},"id":"62fa45ce-c7eb-428e-9127-a57a38e7d80c","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":null},"id":"66562625-8d27-4475-8abe-f33cd36ef1df","type":"Title"},{"attributes":{"below":[{"id":"16da6afd-df1b-4e2c-9048-f04c00420b58","type":"LinearAxis"}],"left":[{"id":"c47b0f0e-3ccb-494c-9723-da830f6f0de5","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"16da6afd-df1b-4e2c-9048-f04c00420b58","type":"LinearAxis"},{"id":"2684191a-287a-49b7-b932-10f4b427daf3","type":"Grid"},{"id":"c47b0f0e-3ccb-494c-9723-da830f6f0de5","type":"LinearAxis"},{"id":"e48ae173-d80b-438e-b72f-e4cb3cbe90de","type":"Grid"},{"id":"ac1aea66-87cb-451b-a721-4db21629509c","type":"BoxAnnotation"},{"id":"7f764813-e3ba-4886-826f-73fe9f63b208","type":"GlyphRenderer"}],"title":{"id":"66562625-8d27-4475-8abe-f33cd36ef1df","type":"Title"},"tool_events":{"id":"a6446b14-9df1-40a5-8f4b-ef07824b78de","type":"ToolEvents"},"toolbar":{"id":"840f3276-72f8-4e20-a6a2-4c62556d1719","type":"Toolbar"},"x_range":{"id":"b34f1db1-c3b8-4a83-a08f-a365fa446944","type":"DataRange1d"},"y_range":{"id":"22f29dac-82fe-4334-af6c-5b81e1aa0a8c","type":"DataRange1d"}},"id":"7eac8a56-cba6-4e98-bbcc-86c441d71f91","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"b34f1db1-c3b8-4a83-a08f-a365fa446944","type":"DataRange1d"},{"attributes":{"formatter":{"id":"1560c57e-a52f-4862-b815-755d092c78af","type":"BasicTickFormatter"},"plot":{"id":"7eac8a56-cba6-4e98-bbcc-86c441d71f91","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf55cbc9-13a2-4602-aa04-9ba6b9168008","type":"BasicTicker"}},"id":"c47b0f0e-3ccb-494c-9723-da830f6f0de5","type":"LinearAxis"},{"attributes":{"plot":{"id":"7eac8a56-cba6-4e98-bbcc-86c441d71f91","subtype":"Figure","type":"Plot"}},"id":"2f4b4884-0cbb-43d6-8183-18bb9f403c62","type":"SaveTool"},{"attributes":{},"id":"b89889fa-5948-45de-95f2-a89c114f5a4a","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"7eac8a56-cba6-4e98-bbcc-86c441d71f91","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf55cbc9-13a2-4602-aa04-9ba6b9168008","type":"BasicTicker"}},"id":"e48ae173-d80b-438e-b72f-e4cb3cbe90de","type":"Grid"},{"attributes":{"plot":{"id":"7eac8a56-cba6-4e98-bbcc-86c441d71f91","subtype":"Figure","type":"Plot"}},"id":"3a7f5404-5cc0-42f2-94e6-34932548a30a","type":"HelpTool"},{"attributes":{"overlay":{"id":"ac1aea66-87cb-451b-a721-4db21629509c","type":"BoxAnnotation"},"plot":{"id":"7eac8a56-cba6-4e98-bbcc-86c441d71f91","subtype":"Figure","type":"Plot"}},"id":"fd381b25-a216-4306-829f-9d3ca154f992","type":"BoxZoomTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.3},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4fb1f091-aa24-4ec2-820c-eabc21727200","type":"Ellipse"},{"attributes":{},"id":"72b6882d-ea10-4892-9147-1b70b1ed083d","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bd9186d5-1940-4aa0-87b3-475578ba8b49","type":"PanTool"},{"id":"3871aea5-c4b2-4221-9b1a-2d9e4bffc08d","type":"WheelZoomTool"},{"id":"fd381b25-a216-4306-829f-9d3ca154f992","type":"BoxZoomTool"},{"id":"2f4b4884-0cbb-43d6-8183-18bb9f403c62","type":"SaveTool"},{"id":"9d12dbd4-2b53-4285-8954-e5fdda1f1ff5","type":"ResetTool"},{"id":"3a7f5404-5cc0-42f2-94e6-34932548a30a","type":"HelpTool"}]},"id":"840f3276-72f8-4e20-a6a2-4c62556d1719","type":"Toolbar"},{"attributes":{},"id":"cf55cbc9-13a2-4602-aa04-9ba6b9168008","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ac1aea66-87cb-451b-a721-4db21629509c","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"7eac8a56-cba6-4e98-bbcc-86c441d71f91","subtype":"Figure","type":"Plot"}},"id":"3871aea5-c4b2-4221-9b1a-2d9e4bffc08d","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"62fa45ce-c7eb-428e-9127-a57a38e7d80c","type":"ColumnDataSource"},"glyph":{"id":"544de13b-dc07-4eef-9b69-7f46a11df32a","type":"Ellipse"},"hover_glyph":null,"nonselection_glyph":{"id":"4fb1f091-aa24-4ec2-820c-eabc21727200","type":"Ellipse"},"selection_glyph":null},"id":"7f764813-e3ba-4886-826f-73fe9f63b208","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7eac8a56-cba6-4e98-bbcc-86c441d71f91","subtype":"Figure","type":"Plot"},"ticker":{"id":"b89889fa-5948-45de-95f2-a89c114f5a4a","type":"BasicTicker"}},"id":"2684191a-287a-49b7-b932-10f4b427daf3","type":"Grid"},{"attributes":{"plot":{"id":"7eac8a56-cba6-4e98-bbcc-86c441d71f91","subtype":"Figure","type":"Plot"}},"id":"bd9186d5-1940-4aa0-87b3-475578ba8b49","type":"PanTool"},{"attributes":{"callback":null},"id":"22f29dac-82fe-4334-af6c-5b81e1aa0a8c","type":"DataRange1d"}],"root_ids":["7eac8a56-cba6-4e98-bbcc-86c441d71f91"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"042dc2ad-395c-4d19-a696-24f2a7de0281","elementid":"ca443752-9259-4415-8bb5-0fd62e35e864","modelid":"7eac8a56-cba6-4e98-bbcc-86c441d71f91"}];
              
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