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
      };var element = document.getElementById("7e46164b-25c1-40f0-9975-1a51db7de47d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7e46164b-25c1-40f0-9975-1a51db7de47d' but no matching script tag was found. ")
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
              var docs_json = {"d577e9a1-3bfd-4100-aa2b-cd4118ea5e43":{"roots":{"references":[{"attributes":{"callback":null},"id":"daa9a4fb-56b9-4d06-9033-1c2489e436a0","type":"DataRange1d"},{"attributes":{"line_color":{"value":"firebrick"},"line_width":{"value":4},"plot":null},"id":"01ea6915-5eeb-49fd-8131-208b36871d62","type":"OpenHead"},{"attributes":{"formatter":{"id":"4f26da01-f4a5-4939-80b9-653ce28970d5","type":"BasicTickFormatter"},"plot":{"id":"aa9da22a-05bd-4dc9-992d-d0b73cf1ed66","subtype":"Figure","type":"Plot"},"ticker":{"id":"4026037c-2935-4374-af69-25b36932e05c","type":"BasicTicker"}},"id":"f799dec2-c6bc-4327-8a82-312b1c1d3d78","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","line_color","fill_color"],"data":{"fill_color":["navy","yellow","red"],"line_color":["navy","yellow","red"],"x":[0.0,1.0,0.5],"y":[0.0,0.0,0.7]}},"id":"6340e74c-7a0d-422d-9183-8a3f8c87a6b3","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"aa9da22a-05bd-4dc9-992d-d0b73cf1ed66","subtype":"Figure","type":"Plot"}},"id":"6e6116b6-8fae-4fa1-80d9-3540fb0d30fe","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":null},"id":"2695ea90-1cd9-414a-849a-5c0d1a0557d3","type":"Title"},{"attributes":{"plot":null,"size":35},"id":"16526706-d2de-4d0a-a08a-546511887fff","type":"VeeHead"},{"attributes":{},"id":"4026037c-2935-4374-af69-25b36932e05c","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"72813bbe-415a-4f7c-8b22-4482b4e70e04","type":"PanTool"},{"id":"6e6116b6-8fae-4fa1-80d9-3540fb0d30fe","type":"WheelZoomTool"},{"id":"081f8773-67cf-406d-b0ed-0fca2c4bbb6c","type":"BoxZoomTool"},{"id":"9dedb019-104c-411b-b583-38a722891d85","type":"SaveTool"},{"id":"e687007f-924b-4cb9-a0bc-f0121a3547e7","type":"ResetTool"},{"id":"6defec60-0353-4b49-b496-f59d4cce50a5","type":"HelpTool"}]},"id":"6ca7e427-556f-4b07-bee4-d10f6e6c282b","type":"Toolbar"},{"attributes":{},"id":"4f26da01-f4a5-4939-80b9-653ce28970d5","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"38d2fe95-7937-4c43-90c8-047bbb49f4e1","type":"BoxAnnotation"},"plot":{"id":"aa9da22a-05bd-4dc9-992d-d0b73cf1ed66","subtype":"Figure","type":"Plot"}},"id":"081f8773-67cf-406d-b0ed-0fca2c4bbb6c","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"38d2fe95-7937-4c43-90c8-047bbb49f4e1","type":"BoxAnnotation"},{"attributes":{},"id":"5674b74b-2f45-40bc-aaf6-126968c337c9","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d34a0644-f139-414a-ad72-ceca940f03c0","type":"BasicTickFormatter"},"plot":{"id":"aa9da22a-05bd-4dc9-992d-d0b73cf1ed66","subtype":"Figure","type":"Plot"},"ticker":{"id":"5674b74b-2f45-40bc-aaf6-126968c337c9","type":"BasicTicker"}},"id":"eafb3ce2-e533-4b89-a0e1-1e161267775b","type":"LinearAxis"},{"attributes":{"end":{"id":"16526706-d2de-4d0a-a08a-546511887fff","type":"VeeHead"},"line_color":{"value":"red"},"plot":{"id":"aa9da22a-05bd-4dc9-992d-d0b73cf1ed66","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0},"x_start":{"value":0.5},"y_end":{"value":0},"y_start":{"value":0.7}},"id":"77cd4490-9e38-4858-bdb2-3be6177b63b2","type":"Arrow"},{"attributes":{"end":{"id":"d9c88da5-cf7a-436b-b611-6fa498e3dec7","type":"NormalHead"},"plot":{"id":"aa9da22a-05bd-4dc9-992d-d0b73cf1ed66","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.5},"x_start":{"value":1},"y_end":{"value":0.7},"y_start":{"value":0}},"id":"33b5592c-c79e-416c-b1c2-b3151e32fa8f","type":"Arrow"},{"attributes":{"plot":{"id":"aa9da22a-05bd-4dc9-992d-d0b73cf1ed66","subtype":"Figure","type":"Plot"}},"id":"9dedb019-104c-411b-b583-38a722891d85","type":"SaveTool"},{"attributes":{"callback":null},"id":"a4bd9093-c509-4f8d-9f33-ccdf7e7d3cec","type":"DataRange1d"},{"attributes":{"plot":{"id":"aa9da22a-05bd-4dc9-992d-d0b73cf1ed66","subtype":"Figure","type":"Plot"}},"id":"6defec60-0353-4b49-b496-f59d4cce50a5","type":"HelpTool"},{"attributes":{"below":[{"id":"eafb3ce2-e533-4b89-a0e1-1e161267775b","type":"LinearAxis"}],"left":[{"id":"f799dec2-c6bc-4327-8a82-312b1c1d3d78","type":"LinearAxis"}],"renderers":[{"id":"eafb3ce2-e533-4b89-a0e1-1e161267775b","type":"LinearAxis"},{"id":"c60296af-3c65-48f7-b303-c23965a10a41","type":"Grid"},{"id":"f799dec2-c6bc-4327-8a82-312b1c1d3d78","type":"LinearAxis"},{"id":"ce075daa-f805-4324-b7a4-4ac81ab5ecca","type":"Grid"},{"id":"38d2fe95-7937-4c43-90c8-047bbb49f4e1","type":"BoxAnnotation"},{"id":"17510adb-3b90-4e14-a7c9-2f12de162297","type":"GlyphRenderer"},{"id":"47a584a0-af7e-4b19-a477-3a75f4c85723","type":"Arrow"},{"id":"33b5592c-c79e-416c-b1c2-b3151e32fa8f","type":"Arrow"},{"id":"77cd4490-9e38-4858-bdb2-3be6177b63b2","type":"Arrow"}],"title":{"id":"2695ea90-1cd9-414a-849a-5c0d1a0557d3","type":"Title"},"tool_events":{"id":"fdbec829-3f64-4ce4-b62e-68553c14cb5d","type":"ToolEvents"},"toolbar":{"id":"6ca7e427-556f-4b07-bee4-d10f6e6c282b","type":"Toolbar"},"x_range":{"id":"a4bd9093-c509-4f8d-9f33-ccdf7e7d3cec","type":"DataRange1d"},"y_range":{"id":"daa9a4fb-56b9-4d06-9033-1c2489e436a0","type":"DataRange1d"}},"id":"aa9da22a-05bd-4dc9-992d-d0b73cf1ed66","subtype":"Figure","type":"Plot"},{"attributes":{"end":{"id":"01ea6915-5eeb-49fd-8131-208b36871d62","type":"OpenHead"},"plot":{"id":"aa9da22a-05bd-4dc9-992d-d0b73cf1ed66","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":1},"x_start":{"value":0},"y_end":{"value":0},"y_start":{"value":0}},"id":"47a584a0-af7e-4b19-a477-3a75f4c85723","type":"Arrow"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"b82e9af5-cb9f-43fc-8500-0b72e2732f51","type":"Circle"},{"attributes":{},"id":"fdbec829-3f64-4ce4-b62e-68553c14cb5d","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"aa9da22a-05bd-4dc9-992d-d0b73cf1ed66","subtype":"Figure","type":"Plot"},"ticker":{"id":"4026037c-2935-4374-af69-25b36932e05c","type":"BasicTicker"}},"id":"ce075daa-f805-4324-b7a4-4ac81ab5ecca","type":"Grid"},{"attributes":{"plot":{"id":"aa9da22a-05bd-4dc9-992d-d0b73cf1ed66","subtype":"Figure","type":"Plot"}},"id":"72813bbe-415a-4f7c-8b22-4482b4e70e04","type":"PanTool"},{"attributes":{"fill_color":{"value":"orange"},"plot":null},"id":"d9c88da5-cf7a-436b-b611-6fa498e3dec7","type":"NormalHead"},{"attributes":{},"id":"d34a0644-f139-414a-ad72-ceca940f03c0","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"b29d615b-3953-423e-bcd9-5342071d5eb2","type":"Circle"},{"attributes":{"data_source":{"id":"6340e74c-7a0d-422d-9183-8a3f8c87a6b3","type":"ColumnDataSource"},"glyph":{"id":"b82e9af5-cb9f-43fc-8500-0b72e2732f51","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"b29d615b-3953-423e-bcd9-5342071d5eb2","type":"Circle"},"selection_glyph":null},"id":"17510adb-3b90-4e14-a7c9-2f12de162297","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"aa9da22a-05bd-4dc9-992d-d0b73cf1ed66","subtype":"Figure","type":"Plot"}},"id":"e687007f-924b-4cb9-a0bc-f0121a3547e7","type":"ResetTool"},{"attributes":{"plot":{"id":"aa9da22a-05bd-4dc9-992d-d0b73cf1ed66","subtype":"Figure","type":"Plot"},"ticker":{"id":"5674b74b-2f45-40bc-aaf6-126968c337c9","type":"BasicTicker"}},"id":"c60296af-3c65-48f7-b303-c23965a10a41","type":"Grid"}],"root_ids":["aa9da22a-05bd-4dc9-992d-d0b73cf1ed66"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"d577e9a1-3bfd-4100-aa2b-cd4118ea5e43","elementid":"7e46164b-25c1-40f0-9975-1a51db7de47d","modelid":"aa9da22a-05bd-4dc9-992d-d0b73cf1ed66"}];
              
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