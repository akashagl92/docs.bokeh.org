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
      };var element = document.getElementById("31360973-a798-46f2-b291-f0045ba84ced");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '31360973-a798-46f2-b291-f0045ba84ced' but no matching script tag was found. ")
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
          MyFormatter: require("custom/my_formatter") };
           }, {}],
           "custom/custom": "\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\nclass CustomView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    @render()\n\n    # Set Backbone listener so that when the Bokeh slider has a change\n    # event, we can process the new data\n    @listenTo(@model.slider, \'change\', () => @render())\n\n  render: () ->\n    # Backbone Views create <div> elements by default, accessible as @$el.\n    # Many Bokeh views ignore this default <div>, and instead do things\n    # like draw to the HTML canvas. In this case though, we change the\n    # contents of the <div>, based on the current slider value.\n    @$el.html(\"<h1>#{ @model.text }: #{ @model.slider.value }</h1>\")\n    @$(\'h1\').css({ \'color\': \'#686d8e\', \'background-color\': \'#2a3153\' })\n\nclass Custom extends LayoutDOM.Model\n\n  # If there is an associated view, this is boilerplate.\n  default_view: CustomView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Custom\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. bokeh.core.properties.String will be\n  # p.String in the JS implementation. Where the JS type system is not yet\n  # as rich, you can use p.Any as a \"wildcard\" property type.\n  @define {\n    text:   [ p.String ]\n    slider: [ p.Any    ]\n  }\n\n# This is boilerplate. Every implementation should export a Model\n# and (when applicable) also a View.\nmodule.exports =\n  Model: Custom\n  View: CustomView\n",
          "custom/draw_tool": "\np = require \"core/properties\"\nGestureTool = require \"models/tools/gestures/gesture_tool\"\n\nclass DrawToolView extends GestureTool.View\n\n  # this is executed when the pan/drag event starts\n  _pan_start: (e) ->\n    @model.source.data = {x: [], y: []}\n\n  # this is executed on subsequent mouse/touch moves\n  _pan: (e) ->\n    frame = @plot_model.frame\n    canvas = @plot_view.canvas\n\n    vx = canvas.sx_to_vx(e.bokeh.sx)\n    vy = canvas.sy_to_vy(e.bokeh.sy)\n    if not frame.contains(vx, vy)\n      return null\n\n    x = frame.get(\'x_mappers\').default.map_from_target(vx)\n    y = frame.get(\'y_mappers\').default.map_from_target(vy)\n\n    @model.source.data.x.push(x)\n    @model.source.data.y.push(y)\n    @model.source.trigger(\'change\')\n\n  # this is executed then the pan/drag ends\n  _pan_end: (e) -> return null\n\nclass DrawTool extends GestureTool.Model\n  default_view: DrawToolView\n  type: \"DrawTool\"\n\n  tool_name: \"Drag Span\"\n  icon: \"bk-tool-icon-lasso-select\"\n  event_type: \"pan\"\n  default_order: 12\n\n  @define { source: [ p.Instance ] }\n\nmodule.exports =\n  Model: DrawTool\n  View: DrawToolView\n",
          "custom/my_formatter": "\nTickFormatter = require \"models/formatters/tick_formatter\"\n\nclass MyFormatter extends TickFormatter.Model\n  type: \"MyFormatter\"\n\n  # TickFormatters should implement this method, which accepts a lisst\n  # of numbers (ticks) and returns a list of strings\n  doFormat: (ticks) ->\n    # format the first tick as-is\n    formatted = [\"#{ticks[0]}\"]\n\n    # format the remaining ticks as a difference from the first\n    for i in [1...ticks.length]\n       formatted.push(\"+#{(ticks[i]-ticks[0]).toPrecision(2)}\")\n\n    return formatted\n\nmodule.exports =\n  Model: MyFormatter\n"
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"81644b5a-e5e1-42ef-be84-2a6408254a42":{"roots":{"references":[{"attributes":{},"id":"f5c96cd0-a087-45bb-90f9-0227e7aed392","type":"ToolEvents"},{"attributes":{"plot":{"id":"58a7fee4-cbe3-4c81-b03b-fcfc01698b72","subtype":"Figure","type":"Plot"},"source":{"id":"260bc3dd-5bea-4a11-bef1-ea876221627e","type":"ColumnDataSource"}},"id":"170f3696-de0d-42a0-acdf-1b4e02aca234","type":"DrawTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[],"y":[]}},"id":"260bc3dd-5bea-4a11-bef1-ea876221627e","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee121c0f-8914-43d2-8247-286d9d8c0f64","type":"Line"},{"attributes":{"formatter":{"id":"31a5fcb2-c34e-4607-ae48-4aaa508e7703","type":"BasicTickFormatter"},"plot":{"id":"58a7fee4-cbe3-4c81-b03b-fcfc01698b72","subtype":"Figure","type":"Plot"},"ticker":{"id":"67d68f0d-90ad-4495-b841-3237341c3f3e","type":"BasicTicker"}},"id":"d669f13e-f31f-4140-a432-71eb325f71a1","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Drag to draw on the plot"},"id":"f053037b-0f3a-4713-8af2-30ddc734b708","type":"Title"},{"attributes":{"callback":null,"end":10},"id":"9e2ee826-f46b-4a68-b556-5ecb394d6a94","type":"Range1d"},{"attributes":{"data_source":{"id":"260bc3dd-5bea-4a11-bef1-ea876221627e","type":"ColumnDataSource"},"glyph":{"id":"dfffa00b-3f0b-49a8-a87d-87790d4f614c","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"ee121c0f-8914-43d2-8247-286d9d8c0f64","type":"Line"},"selection_glyph":null},"id":"a4a80f7a-49a7-4988-92dd-0dbfb8e5a978","type":"GlyphRenderer"},{"attributes":{},"id":"67d68f0d-90ad-4495-b841-3237341c3f3e","type":"BasicTicker"},{"attributes":{},"id":"e4bdcc94-4ada-4847-8714-c9c050cb4c46","type":"BasicTicker"},{"attributes":{"below":[{"id":"d669f13e-f31f-4140-a432-71eb325f71a1","type":"LinearAxis"}],"left":[{"id":"933bc4ef-fd65-47df-a2bc-fee4e86e94c7","type":"LinearAxis"}],"renderers":[{"id":"d669f13e-f31f-4140-a432-71eb325f71a1","type":"LinearAxis"},{"id":"f7363cf7-edfe-496a-8240-2b06099b54d0","type":"Grid"},{"id":"933bc4ef-fd65-47df-a2bc-fee4e86e94c7","type":"LinearAxis"},{"id":"ecff2db0-f21b-473c-b75d-8ede3c7a892f","type":"Grid"},{"id":"a4a80f7a-49a7-4988-92dd-0dbfb8e5a978","type":"GlyphRenderer"}],"title":{"id":"f053037b-0f3a-4713-8af2-30ddc734b708","type":"Title"},"tool_events":{"id":"f5c96cd0-a087-45bb-90f9-0227e7aed392","type":"ToolEvents"},"toolbar":{"id":"f1837e38-7f11-48bf-b0d9-0c695b6b9f5c","type":"Toolbar"},"x_range":{"id":"0b23782e-5030-48cc-81f5-4f88bfe1b54e","type":"Range1d"},"y_range":{"id":"9e2ee826-f46b-4a68-b556-5ecb394d6a94","type":"Range1d"}},"id":"58a7fee4-cbe3-4c81-b03b-fcfc01698b72","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"58a7fee4-cbe3-4c81-b03b-fcfc01698b72","subtype":"Figure","type":"Plot"},"ticker":{"id":"67d68f0d-90ad-4495-b841-3237341c3f3e","type":"BasicTicker"}},"id":"f7363cf7-edfe-496a-8240-2b06099b54d0","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"170f3696-de0d-42a0-acdf-1b4e02aca234","type":"DrawTool"}]},"id":"f1837e38-7f11-48bf-b0d9-0c695b6b9f5c","type":"Toolbar"},{"attributes":{},"id":"27d849e9-32f1-43c7-b733-dd7ab04e9f39","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"27d849e9-32f1-43c7-b733-dd7ab04e9f39","type":"BasicTickFormatter"},"plot":{"id":"58a7fee4-cbe3-4c81-b03b-fcfc01698b72","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4bdcc94-4ada-4847-8714-c9c050cb4c46","type":"BasicTicker"}},"id":"933bc4ef-fd65-47df-a2bc-fee4e86e94c7","type":"LinearAxis"},{"attributes":{},"id":"31a5fcb2-c34e-4607-ae48-4aaa508e7703","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":10},"id":"0b23782e-5030-48cc-81f5-4f88bfe1b54e","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"58a7fee4-cbe3-4c81-b03b-fcfc01698b72","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4bdcc94-4ada-4847-8714-c9c050cb4c46","type":"BasicTicker"}},"id":"ecff2db0-f21b-473c-b75d-8ede3c7a892f","type":"Grid"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dfffa00b-3f0b-49a8-a87d-87790d4f614c","type":"Line"}],"root_ids":["58a7fee4-cbe3-4c81-b03b-fcfc01698b72"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"81644b5a-e5e1-42ef-be84-2a6408254a42","elementid":"31360973-a798-46f2-b291-f0045ba84ced","modelid":"58a7fee4-cbe3-4c81-b03b-fcfc01698b72"}];
              
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