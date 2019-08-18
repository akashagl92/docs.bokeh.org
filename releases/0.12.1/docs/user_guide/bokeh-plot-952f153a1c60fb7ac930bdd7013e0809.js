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
      };var element = document.getElementById("423cacfb-ee99-4eed-8322-7b1789982584");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '423cacfb-ee99-4eed-8322-7b1789982584' but no matching script tag was found. ")
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
              var docs_json = {"86ed0adc-af92-47fe-9cd7-b652c75fd604":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"d8f0bd95-6b52-4fcd-bc64-2d52894dc695","type":"ColumnDataSource"},{"attributes":{},"id":"c707e278-5c28-4bc5-88be-eb527f89e86b","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"aafd19c2-cf03-40c6-94db-dafe8bf58e85","type":"Circle"},{"attributes":{"plot":null,"text":null},"id":"68f85ef1-6866-4de6-bead-f86726c2d8a2","type":"Title"},{"attributes":{"callback":null},"id":"189d4753-5f7d-45ad-a9de-802ade61703a","type":"DataRange1d"},{"attributes":{},"id":"3cf17b50-52de-4dca-877e-fc2649fb5e62","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"d8f0bd95-6b52-4fcd-bc64-2d52894dc695","type":"ColumnDataSource"},"glyph":{"id":"aafd19c2-cf03-40c6-94db-dafe8bf58e85","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"f63e1b8b-f45c-4a54-b6c9-5eca0e2e6fff","type":"Circle"},"selection_glyph":null},"id":"848d6854-0166-4f0d-a3d7-0464e1f39004","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"efb95553-7d98-484e-a7f7-7492cf96bed5","type":"Line"},{"attributes":{"overlay":{"id":"1949272c-0504-419a-b381-cac7eb6b6bc4","type":"BoxAnnotation"},"plot":{"id":"076e58b1-78e3-4926-adab-28f4123cdf0b","subtype":"Figure","type":"Plot"}},"id":"a154a738-54fe-4e7b-bd5e-6a4a4d9d77b9","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"f63e1b8b-f45c-4a54-b6c9-5eca0e2e6fff","type":"Circle"},{"attributes":{},"id":"51362207-b74e-432e-9957-a4f08edb6224","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"4df1e6be-c99c-487c-8963-be6f1f438942","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"076e58b1-78e3-4926-adab-28f4123cdf0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"51362207-b74e-432e-9957-a4f08edb6224","type":"BasicTicker"}},"id":"8b2322ee-4eac-4019-9486-471e6188cab4","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"076e58b1-78e3-4926-adab-28f4123cdf0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"413a7b44-54c0-4306-a58b-9e3009ce7d20","type":"BasicTicker"}},"id":"27be3f0a-a912-4c6a-86e8-04a8565f248c","type":"Grid"},{"attributes":{"plot":{"id":"076e58b1-78e3-4926-adab-28f4123cdf0b","subtype":"Figure","type":"Plot"}},"id":"e5de8da5-ca2a-466c-8bcd-ea1cf8727b8a","type":"PanTool"},{"attributes":{"plot":{"id":"076e58b1-78e3-4926-adab-28f4123cdf0b","subtype":"Figure","type":"Plot"}},"id":"4b95bd7d-e9b9-4c82-bd0e-632500e9db7d","type":"SaveTool"},{"attributes":{"plot":{"id":"076e58b1-78e3-4926-adab-28f4123cdf0b","subtype":"Figure","type":"Plot"}},"id":"43a7d904-cc10-4d3d-b57e-92b677c769ca","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e5de8da5-ca2a-466c-8bcd-ea1cf8727b8a","type":"PanTool"},{"id":"43a7d904-cc10-4d3d-b57e-92b677c769ca","type":"WheelZoomTool"},{"id":"a154a738-54fe-4e7b-bd5e-6a4a4d9d77b9","type":"BoxZoomTool"},{"id":"4b95bd7d-e9b9-4c82-bd0e-632500e9db7d","type":"SaveTool"},{"id":"fa9a484a-cbbd-4a6a-aca2-adb305fb7ecc","type":"ResetTool"},{"id":"77bebd4a-5132-4d91-8e78-c9fc86960b5b","type":"HelpTool"}]},"id":"277ce447-29a9-4f33-a9e6-aedee5c6e00d","type":"Toolbar"},{"attributes":{"callback":null},"id":"175ccb01-dc75-4520-a82d-f49635cf558f","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ebe560e7-a2b3-4104-832d-b6088c136a02","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1949272c-0504-419a-b381-cac7eb6b6bc4","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"458aa3a5-a2d0-4f54-bd26-659cb0ebddbe","type":"LinearAxis"}],"left":[{"id":"ef0c4a5f-d047-4ab2-a204-afa5f82fd8b5","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"458aa3a5-a2d0-4f54-bd26-659cb0ebddbe","type":"LinearAxis"},{"id":"8b2322ee-4eac-4019-9486-471e6188cab4","type":"Grid"},{"id":"ef0c4a5f-d047-4ab2-a204-afa5f82fd8b5","type":"LinearAxis"},{"id":"27be3f0a-a912-4c6a-86e8-04a8565f248c","type":"Grid"},{"id":"1949272c-0504-419a-b381-cac7eb6b6bc4","type":"BoxAnnotation"},{"id":"523d49a8-ba75-4842-9fc9-42a0dc57f321","type":"GlyphRenderer"},{"id":"848d6854-0166-4f0d-a3d7-0464e1f39004","type":"GlyphRenderer"}],"title":{"id":"68f85ef1-6866-4de6-bead-f86726c2d8a2","type":"Title"},"tool_events":{"id":"c707e278-5c28-4bc5-88be-eb527f89e86b","type":"ToolEvents"},"toolbar":{"id":"277ce447-29a9-4f33-a9e6-aedee5c6e00d","type":"Toolbar"},"x_range":{"id":"189d4753-5f7d-45ad-a9de-802ade61703a","type":"DataRange1d"},"y_range":{"id":"175ccb01-dc75-4520-a82d-f49635cf558f","type":"DataRange1d"}},"id":"076e58b1-78e3-4926-adab-28f4123cdf0b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"413a7b44-54c0-4306-a58b-9e3009ce7d20","type":"BasicTicker"},{"attributes":{"formatter":{"id":"fda66fc9-e406-46bf-9c28-eaf9d448adc3","type":"BasicTickFormatter"},"plot":{"id":"076e58b1-78e3-4926-adab-28f4123cdf0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"413a7b44-54c0-4306-a58b-9e3009ce7d20","type":"BasicTicker"}},"id":"ef0c4a5f-d047-4ab2-a204-afa5f82fd8b5","type":"LinearAxis"},{"attributes":{"data_source":{"id":"4df1e6be-c99c-487c-8963-be6f1f438942","type":"ColumnDataSource"},"glyph":{"id":"ebe560e7-a2b3-4104-832d-b6088c136a02","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"efb95553-7d98-484e-a7f7-7492cf96bed5","type":"Line"},"selection_glyph":null},"id":"523d49a8-ba75-4842-9fc9-42a0dc57f321","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"3cf17b50-52de-4dca-877e-fc2649fb5e62","type":"BasicTickFormatter"},"plot":{"id":"076e58b1-78e3-4926-adab-28f4123cdf0b","subtype":"Figure","type":"Plot"},"ticker":{"id":"51362207-b74e-432e-9957-a4f08edb6224","type":"BasicTicker"}},"id":"458aa3a5-a2d0-4f54-bd26-659cb0ebddbe","type":"LinearAxis"},{"attributes":{"plot":{"id":"076e58b1-78e3-4926-adab-28f4123cdf0b","subtype":"Figure","type":"Plot"}},"id":"fa9a484a-cbbd-4a6a-aca2-adb305fb7ecc","type":"ResetTool"},{"attributes":{},"id":"fda66fc9-e406-46bf-9c28-eaf9d448adc3","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"076e58b1-78e3-4926-adab-28f4123cdf0b","subtype":"Figure","type":"Plot"}},"id":"77bebd4a-5132-4d91-8e78-c9fc86960b5b","type":"HelpTool"}],"root_ids":["076e58b1-78e3-4926-adab-28f4123cdf0b"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"86ed0adc-af92-47fe-9cd7-b652c75fd604","elementid":"423cacfb-ee99-4eed-8322-7b1789982584","modelid":"076e58b1-78e3-4926-adab-28f4123cdf0b"}];
              
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