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
      };var element = document.getElementById("cc21c2ce-dda1-412a-95f4-8d1e7aa6ec63");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cc21c2ce-dda1-412a-95f4-8d1e7aa6ec63' but no matching script tag was found. ")
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
              var docs_json = {"8ac2fa8d-c4ba-4cb2-b26c-a8e295ea37a8":{"roots":{"references":[{"attributes":{"below":[{"id":"a26191a6-227e-4c7e-9d58-b4b610daa035","type":"LinearAxis"}],"left":[{"id":"bc47d370-70af-4528-8e1a-cf167ae467c1","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a26191a6-227e-4c7e-9d58-b4b610daa035","type":"LinearAxis"},{"id":"bd445d2e-c2e3-4020-9550-82a9c0dd7557","type":"Grid"},{"id":"bc47d370-70af-4528-8e1a-cf167ae467c1","type":"LinearAxis"},{"id":"9415787e-3829-4660-80c3-3c1b12a9f4e8","type":"Grid"},{"id":"4ad9fdd4-af43-4099-be06-7e43a0381348","type":"BoxAnnotation"},{"id":"9712f364-e90c-4de0-a640-5ec69e0f91ca","type":"GlyphRenderer"}],"title":{"id":"4c331674-eab5-4673-beec-a6b7f4ff5356","type":"Title"},"tool_events":{"id":"877812a5-b03e-4b94-a70d-374d71cfefed","type":"ToolEvents"},"toolbar":{"id":"ac083d49-506d-4a00-8864-b57a74c05db6","type":"Toolbar"},"x_range":{"id":"d5fa8f05-155b-480f-947d-4bfabb2e96a9","type":"DataRange1d"},"y_range":{"id":"adfd6328-b60c-4109-847d-55f4d0fc4961","type":"DataRange1d"}},"id":"6a7ceee7-fcff-4adf-a1e8-d0f53e28e9d4","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"d98deb91-68ab-4618-aa33-d07b92d88cfb","type":"BasicTickFormatter"},"plot":{"id":"6a7ceee7-fcff-4adf-a1e8-d0f53e28e9d4","subtype":"Figure","type":"Plot"},"ticker":{"id":"1bc1c640-a500-4044-b2c4-00c2cdc9dde9","type":"FixedTicker"}},"id":"a26191a6-227e-4c7e-9d58-b4b610daa035","type":"LinearAxis"},{"attributes":{"plot":{"id":"6a7ceee7-fcff-4adf-a1e8-d0f53e28e9d4","subtype":"Figure","type":"Plot"}},"id":"0520830c-ec58-4f40-96dc-7c815bfb11c6","type":"SaveTool"},{"attributes":{},"id":"d98deb91-68ab-4618-aa33-d07b92d88cfb","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"6a7ceee7-fcff-4adf-a1e8-d0f53e28e9d4","subtype":"Figure","type":"Plot"}},"id":"d4ba0204-d34e-41d5-94a6-a91fbf40c97a","type":"HelpTool"},{"attributes":{"data_source":{"id":"4b51a0c4-80d3-43e1-a88c-61a521b78ce4","type":"ColumnDataSource"},"glyph":{"id":"214ba305-7742-48d6-98f5-903ffa49ab37","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"93d1400d-ac04-49e0-9ece-ce9e3d926ad2","type":"Circle"},"selection_glyph":null},"id":"9712f364-e90c-4de0-a640-5ec69e0f91ca","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"d5fa8f05-155b-480f-947d-4bfabb2e96a9","type":"DataRange1d"},{"attributes":{"callback":null},"id":"adfd6328-b60c-4109-847d-55f4d0fc4961","type":"DataRange1d"},{"attributes":{"plot":{"id":"6a7ceee7-fcff-4adf-a1e8-d0f53e28e9d4","subtype":"Figure","type":"Plot"}},"id":"c1d8b8b3-1dc7-4e2d-8a90-ef750042c136","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"6a7ceee7-fcff-4adf-a1e8-d0f53e28e9d4","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce7530f4-acb3-4ac2-bdb4-e94f410a0b69","type":"BasicTicker"}},"id":"9415787e-3829-4660-80c3-3c1b12a9f4e8","type":"Grid"},{"attributes":{},"id":"ce7530f4-acb3-4ac2-bdb4-e94f410a0b69","type":"BasicTicker"},{"attributes":{"plot":null,"text":null},"id":"4c331674-eab5-4673-beec-a6b7f4ff5356","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"4b51a0c4-80d3-43e1-a88c-61a521b78ce4","type":"ColumnDataSource"},{"attributes":{},"id":"877812a5-b03e-4b94-a70d-374d71cfefed","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4ad9fdd4-af43-4099-be06-7e43a0381348","type":"BoxAnnotation"},{"attributes":{},"id":"77784e61-c322-43da-b924-0c02734d6c0a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"14bcfbd1-a8cb-4c7a-ba4f-8b42ed1edaac","type":"BasicTickFormatter"},"plot":{"id":"6a7ceee7-fcff-4adf-a1e8-d0f53e28e9d4","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce7530f4-acb3-4ac2-bdb4-e94f410a0b69","type":"BasicTicker"}},"id":"bc47d370-70af-4528-8e1a-cf167ae467c1","type":"LinearAxis"},{"attributes":{"plot":{"id":"6a7ceee7-fcff-4adf-a1e8-d0f53e28e9d4","subtype":"Figure","type":"Plot"},"ticker":{"id":"77784e61-c322-43da-b924-0c02734d6c0a","type":"BasicTicker"}},"id":"bd445d2e-c2e3-4020-9550-82a9c0dd7557","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"93d1400d-ac04-49e0-9ece-ce9e3d926ad2","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"214ba305-7742-48d6-98f5-903ffa49ab37","type":"Circle"},{"attributes":{"ticks":[2,3.5,4]},"id":"1bc1c640-a500-4044-b2c4-00c2cdc9dde9","type":"FixedTicker"},{"attributes":{},"id":"14bcfbd1-a8cb-4c7a-ba4f-8b42ed1edaac","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"66039806-ff1b-4dfe-ae2b-fb25db539e68","type":"PanTool"},{"id":"ca4f8522-c365-45b9-ab84-43aff2accaa9","type":"WheelZoomTool"},{"id":"57ea02cc-9c4d-4acd-89b8-b0a4e376eea9","type":"BoxZoomTool"},{"id":"0520830c-ec58-4f40-96dc-7c815bfb11c6","type":"SaveTool"},{"id":"c1d8b8b3-1dc7-4e2d-8a90-ef750042c136","type":"ResetTool"},{"id":"d4ba0204-d34e-41d5-94a6-a91fbf40c97a","type":"HelpTool"}]},"id":"ac083d49-506d-4a00-8864-b57a74c05db6","type":"Toolbar"},{"attributes":{"overlay":{"id":"4ad9fdd4-af43-4099-be06-7e43a0381348","type":"BoxAnnotation"},"plot":{"id":"6a7ceee7-fcff-4adf-a1e8-d0f53e28e9d4","subtype":"Figure","type":"Plot"}},"id":"57ea02cc-9c4d-4acd-89b8-b0a4e376eea9","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"6a7ceee7-fcff-4adf-a1e8-d0f53e28e9d4","subtype":"Figure","type":"Plot"}},"id":"66039806-ff1b-4dfe-ae2b-fb25db539e68","type":"PanTool"},{"attributes":{"plot":{"id":"6a7ceee7-fcff-4adf-a1e8-d0f53e28e9d4","subtype":"Figure","type":"Plot"}},"id":"ca4f8522-c365-45b9-ab84-43aff2accaa9","type":"WheelZoomTool"}],"root_ids":["6a7ceee7-fcff-4adf-a1e8-d0f53e28e9d4"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"8ac2fa8d-c4ba-4cb2-b26c-a8e295ea37a8","elementid":"cc21c2ce-dda1-412a-95f4-8d1e7aa6ec63","modelid":"6a7ceee7-fcff-4adf-a1e8-d0f53e28e9d4"}];
              
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