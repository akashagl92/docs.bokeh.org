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
      };var element = document.getElementById("0d8b0884-b987-4e90-98e8-bf5e195e73fd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0d8b0884-b987-4e90-98e8-bf5e195e73fd' but no matching script tag was found. ")
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
              var docs_json = {"1de83bd6-a3f1-43d3-8301-be2406cd9d69":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"6c4711dd-c40d-404b-9565-07c3cdc1ad67","subtype":"Figure","type":"Plot"},"ticker":{"id":"3da04b9d-6b9c-4d98-acdd-c22db2a41c20","type":"BasicTicker"}},"id":"616f45b4-7930-4783-8e83-c6ee6f4ec7fb","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2a1dcbdf-00e4-4280-9fbf-e1a8afabb35f","type":"PanTool"},{"id":"593c2ad4-3c10-4581-846f-65151e62dea1","type":"WheelZoomTool"},{"id":"f0eb2748-6525-445e-b4e5-07e801fdaa8d","type":"BoxZoomTool"},{"id":"4d25b584-e133-443f-9b2c-93a9d7b2fafc","type":"SaveTool"},{"id":"43308ef0-1e1a-4a7a-94bd-077a159ba6b4","type":"ResetTool"},{"id":"1c90fd4d-fe5d-4903-acae-c695866b9920","type":"HelpTool"}]},"id":"6c02ee3d-9150-403e-94b9-7f29d18a2a45","type":"Toolbar"},{"attributes":{},"id":"157b087f-325a-47d1-b4fb-d118cda67ba9","type":"ToolEvents"},{"attributes":{"plot":{"id":"6c4711dd-c40d-404b-9565-07c3cdc1ad67","subtype":"Figure","type":"Plot"}},"id":"43308ef0-1e1a-4a7a-94bd-077a159ba6b4","type":"ResetTool"},{"attributes":{"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"afd564b6-32fc-48f2-8033-03d9c86c5194","type":"MultiLine"},{"attributes":{"callback":null},"id":"af98be8c-f0a3-404b-9b5b-34116a827d1b","type":"DataRange1d"},{"attributes":{"plot":{"id":"6c4711dd-c40d-404b-9565-07c3cdc1ad67","subtype":"Figure","type":"Plot"},"ticker":{"id":"c9b5c169-fe48-4a30-8325-8799a64f26c6","type":"BasicTicker"}},"id":"91cda970-c923-4070-8120-e65d48462895","type":"Grid"},{"attributes":{"formatter":{"id":"393afc58-d70b-487a-988e-0ef089507f67","type":"BasicTickFormatter"},"plot":{"id":"6c4711dd-c40d-404b-9565-07c3cdc1ad67","subtype":"Figure","type":"Plot"},"ticker":{"id":"3da04b9d-6b9c-4d98-acdd-c22db2a41c20","type":"BasicTicker"}},"id":"36012117-e263-4d1e-91c8-ddc67d39ca45","type":"LinearAxis"},{"attributes":{},"id":"3da04b9d-6b9c-4d98-acdd-c22db2a41c20","type":"BasicTicker"},{"attributes":{"plot":{"id":"6c4711dd-c40d-404b-9565-07c3cdc1ad67","subtype":"Figure","type":"Plot"}},"id":"4d25b584-e133-443f-9b2c-93a9d7b2fafc","type":"SaveTool"},{"attributes":{"callback":null},"id":"1c39d19a-0b5e-44e8-a393-b3259f30de2a","type":"DataRange1d"},{"attributes":{},"id":"d77e89bc-a740-42c1-acab-cd9e9ee1382b","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"d100926b-ec0e-46b4-ba2b-3e7101d05f36","type":"Title"},{"attributes":{"below":[{"id":"28638e25-ee49-45ee-9af4-a4d688c2de26","type":"LinearAxis"}],"left":[{"id":"36012117-e263-4d1e-91c8-ddc67d39ca45","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28638e25-ee49-45ee-9af4-a4d688c2de26","type":"LinearAxis"},{"id":"91cda970-c923-4070-8120-e65d48462895","type":"Grid"},{"id":"36012117-e263-4d1e-91c8-ddc67d39ca45","type":"LinearAxis"},{"id":"616f45b4-7930-4783-8e83-c6ee6f4ec7fb","type":"Grid"},{"id":"bbbf4919-b655-4883-bfb8-b4b24b557b44","type":"BoxAnnotation"},{"id":"041fc6be-5b2d-4a83-a706-5f4bcab895cf","type":"GlyphRenderer"}],"title":{"id":"d100926b-ec0e-46b4-ba2b-3e7101d05f36","type":"Title"},"tool_events":{"id":"157b087f-325a-47d1-b4fb-d118cda67ba9","type":"ToolEvents"},"toolbar":{"id":"6c02ee3d-9150-403e-94b9-7f29d18a2a45","type":"Toolbar"},"x_range":{"id":"1c39d19a-0b5e-44e8-a393-b3259f30de2a","type":"DataRange1d"},"y_range":{"id":"af98be8c-f0a3-404b-9b5b-34116a827d1b","type":"DataRange1d"}},"id":"6c4711dd-c40d-404b-9565-07c3cdc1ad67","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"4700397e-6bcc-4288-9b7a-a6ae87edbcfc","type":"MultiLine"},{"attributes":{},"id":"c9b5c169-fe48-4a30-8325-8799a64f26c6","type":"BasicTicker"},{"attributes":{"plot":{"id":"6c4711dd-c40d-404b-9565-07c3cdc1ad67","subtype":"Figure","type":"Plot"}},"id":"2a1dcbdf-00e4-4280-9fbf-e1a8afabb35f","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bbbf4919-b655-4883-bfb8-b4b24b557b44","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"bbbf4919-b655-4883-bfb8-b4b24b557b44","type":"BoxAnnotation"},"plot":{"id":"6c4711dd-c40d-404b-9565-07c3cdc1ad67","subtype":"Figure","type":"Plot"}},"id":"f0eb2748-6525-445e-b4e5-07e801fdaa8d","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"d77e89bc-a740-42c1-acab-cd9e9ee1382b","type":"BasicTickFormatter"},"plot":{"id":"6c4711dd-c40d-404b-9565-07c3cdc1ad67","subtype":"Figure","type":"Plot"},"ticker":{"id":"c9b5c169-fe48-4a30-8325-8799a64f26c6","type":"BasicTicker"}},"id":"28638e25-ee49-45ee-9af4-a4d688c2de26","type":"LinearAxis"},{"attributes":{"plot":{"id":"6c4711dd-c40d-404b-9565-07c3cdc1ad67","subtype":"Figure","type":"Plot"}},"id":"593c2ad4-3c10-4581-846f-65151e62dea1","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"142a8aca-079e-47f3-bc97-0e8e4616926d","type":"ColumnDataSource"},"glyph":{"id":"afd564b6-32fc-48f2-8033-03d9c86c5194","type":"MultiLine"},"hover_glyph":null,"nonselection_glyph":{"id":"4700397e-6bcc-4288-9b7a-a6ae87edbcfc","type":"MultiLine"},"selection_glyph":null},"id":"041fc6be-5b2d-4a83-a706-5f4bcab895cf","type":"GlyphRenderer"},{"attributes":{},"id":"393afc58-d70b-487a-988e-0ef089507f67","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"6c4711dd-c40d-404b-9565-07c3cdc1ad67","subtype":"Figure","type":"Plot"}},"id":"1c90fd4d-fe5d-4903-acae-c695866b9920","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["ys","xs","line_color","line_alpha"],"data":{"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]}},"id":"142a8aca-079e-47f3-bc97-0e8e4616926d","type":"ColumnDataSource"}],"root_ids":["6c4711dd-c40d-404b-9565-07c3cdc1ad67"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"1de83bd6-a3f1-43d3-8301-be2406cd9d69","elementid":"0d8b0884-b987-4e90-98e8-bf5e195e73fd","modelid":"6c4711dd-c40d-404b-9565-07c3cdc1ad67"}];
              
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