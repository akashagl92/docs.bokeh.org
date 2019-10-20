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
      };var element = document.getElementById("1d924a41-66ce-481a-896c-5a54ac6644fb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1d924a41-66ce-481a-896c-5a54ac6644fb' but no matching script tag was found. ")
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
              var docs_json = {"50361e74-3f62-4606-a35e-3dffebc3a289":{"roots":{"references":[{"attributes":{"plot":{"id":"2a69bebe-05c3-4dbe-8ccb-de37e4441955","subtype":"Figure","type":"Plot"}},"id":"e0344803-1455-4d23-bc51-03a1928a7954","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"2a69bebe-05c3-4dbe-8ccb-de37e4441955","subtype":"Figure","type":"Plot"},"ticker":{"id":"41154aa0-aa2c-4d7c-89b4-7718122fe7ac","type":"BasicTicker"}},"id":"92f2de3c-cd9f-4a6c-a857-808827294d15","type":"Grid"},{"attributes":{},"id":"a189e2fc-7f64-479d-a070-9fa54f0e81bf","type":"ToolEvents"},{"attributes":{},"id":"41154aa0-aa2c-4d7c-89b4-7718122fe7ac","type":"BasicTicker"},{"attributes":{"plot":{"id":"2a69bebe-05c3-4dbe-8ccb-de37e4441955","subtype":"Figure","type":"Plot"}},"id":"5d9c939b-7291-4ce5-9083-5b32cd3f1c18","type":"PanTool"},{"attributes":{"plot":{"id":"2a69bebe-05c3-4dbe-8ccb-de37e4441955","subtype":"Figure","type":"Plot"}},"id":"29de1318-577a-476a-aea7-841b25187111","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["width","y","x"],"data":{"width":[0.2,0.3,0.1],"x":[1,2,3],"y":[1,2,3]}},"id":"4d76aada-898a-4298-a38d-4db66066a4cf","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"0a06f82b-51cf-4558-a5dd-9ba960e5d30c","type":"DataRange1d"},{"attributes":{"data_source":{"id":"4d76aada-898a-4298-a38d-4db66066a4cf","type":"ColumnDataSource"},"glyph":{"id":"354e89a1-153f-4d13-9c8b-180060609d1c","type":"Ellipse"},"hover_glyph":null,"nonselection_glyph":{"id":"44899df9-3236-4d2a-aa73-3f658ffee1a8","type":"Ellipse"},"selection_glyph":null},"id":"143553f4-1aab-45b6-99b7-f810d523dbc9","type":"GlyphRenderer"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.3},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"44899df9-3236-4d2a-aa73-3f658ffee1a8","type":"Ellipse"},{"attributes":{"dimension":1,"plot":{"id":"2a69bebe-05c3-4dbe-8ccb-de37e4441955","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8b3c438-56f3-4c8c-81aa-e27a29ac3fc5","type":"BasicTicker"}},"id":"77eea688-bf94-4879-83f9-b2f0df3cb7b1","type":"Grid"},{"attributes":{"plot":null,"text":null},"id":"5eb1dbfd-efd1-40b1-9698-010258a412da","type":"Title"},{"attributes":{"callback":null},"id":"3299e058-4cdd-4143-a8fc-97ee84682b3d","type":"DataRange1d"},{"attributes":{},"id":"a8b3c438-56f3-4c8c-81aa-e27a29ac3fc5","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"de64e552-663d-4a58-8cd4-e0c8dbafa7ba","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"2a69bebe-05c3-4dbe-8ccb-de37e4441955","subtype":"Figure","type":"Plot"}},"id":"817e4cfd-d040-404b-bb89-fcc3678f63bd","type":"HelpTool"},{"attributes":{"overlay":{"id":"de64e552-663d-4a58-8cd4-e0c8dbafa7ba","type":"BoxAnnotation"},"plot":{"id":"2a69bebe-05c3-4dbe-8ccb-de37e4441955","subtype":"Figure","type":"Plot"}},"id":"e00f25da-4b28-4e3c-8fcc-ffc9e8bf01e3","type":"BoxZoomTool"},{"attributes":{},"id":"c3727bf9-e687-4fad-8aec-22a233ac0b6d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"2a69bebe-05c3-4dbe-8ccb-de37e4441955","subtype":"Figure","type":"Plot"}},"id":"7745a824-78f5-44b5-aa01-cd06429b3435","type":"ResetTool"},{"attributes":{"formatter":{"id":"7d09aeaf-f7e2-4825-b5cd-732c28271f16","type":"BasicTickFormatter"},"plot":{"id":"2a69bebe-05c3-4dbe-8ccb-de37e4441955","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8b3c438-56f3-4c8c-81aa-e27a29ac3fc5","type":"BasicTicker"}},"id":"d15719e6-7502-466c-b1a3-e3e7a330bb8c","type":"LinearAxis"},{"attributes":{"formatter":{"id":"c3727bf9-e687-4fad-8aec-22a233ac0b6d","type":"BasicTickFormatter"},"plot":{"id":"2a69bebe-05c3-4dbe-8ccb-de37e4441955","subtype":"Figure","type":"Plot"},"ticker":{"id":"41154aa0-aa2c-4d7c-89b4-7718122fe7ac","type":"BasicTicker"}},"id":"3fd81cac-a377-43c2-ab9a-19b5c2f3718b","type":"LinearAxis"},{"attributes":{"below":[{"id":"3fd81cac-a377-43c2-ab9a-19b5c2f3718b","type":"LinearAxis"}],"left":[{"id":"d15719e6-7502-466c-b1a3-e3e7a330bb8c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3fd81cac-a377-43c2-ab9a-19b5c2f3718b","type":"LinearAxis"},{"id":"92f2de3c-cd9f-4a6c-a857-808827294d15","type":"Grid"},{"id":"d15719e6-7502-466c-b1a3-e3e7a330bb8c","type":"LinearAxis"},{"id":"77eea688-bf94-4879-83f9-b2f0df3cb7b1","type":"Grid"},{"id":"de64e552-663d-4a58-8cd4-e0c8dbafa7ba","type":"BoxAnnotation"},{"id":"143553f4-1aab-45b6-99b7-f810d523dbc9","type":"GlyphRenderer"}],"title":{"id":"5eb1dbfd-efd1-40b1-9698-010258a412da","type":"Title"},"tool_events":{"id":"a189e2fc-7f64-479d-a070-9fa54f0e81bf","type":"ToolEvents"},"toolbar":{"id":"f80d54e3-0d05-42f3-91fd-ae79004c0868","type":"Toolbar"},"x_range":{"id":"0a06f82b-51cf-4558-a5dd-9ba960e5d30c","type":"DataRange1d"},"y_range":{"id":"3299e058-4cdd-4143-a8fc-97ee84682b3d","type":"DataRange1d"}},"id":"2a69bebe-05c3-4dbe-8ccb-de37e4441955","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7d09aeaf-f7e2-4825-b5cd-732c28271f16","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5d9c939b-7291-4ce5-9083-5b32cd3f1c18","type":"PanTool"},{"id":"e0344803-1455-4d23-bc51-03a1928a7954","type":"WheelZoomTool"},{"id":"e00f25da-4b28-4e3c-8fcc-ffc9e8bf01e3","type":"BoxZoomTool"},{"id":"29de1318-577a-476a-aea7-841b25187111","type":"SaveTool"},{"id":"7745a824-78f5-44b5-aa01-cd06429b3435","type":"ResetTool"},{"id":"817e4cfd-d040-404b-bb89-fcc3678f63bd","type":"HelpTool"}]},"id":"f80d54e3-0d05-42f3-91fd-ae79004c0868","type":"Toolbar"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"data","value":0.3},"line_color":{"value":"#CAB2D6"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"354e89a1-153f-4d13-9c8b-180060609d1c","type":"Ellipse"}],"root_ids":["2a69bebe-05c3-4dbe-8ccb-de37e4441955"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"50361e74-3f62-4606-a35e-3dffebc3a289","elementid":"1d924a41-66ce-481a-896c-5a54ac6644fb","modelid":"2a69bebe-05c3-4dbe-8ccb-de37e4441955"}];
              
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