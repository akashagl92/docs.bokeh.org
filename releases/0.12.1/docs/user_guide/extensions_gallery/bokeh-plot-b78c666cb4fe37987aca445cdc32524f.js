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
      };var element = document.getElementById("850e5a81-1a1a-41b9-84fc-c514e4c5e31d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '850e5a81-1a1a-41b9-84fc-c514e4c5e31d' but no matching script tag was found. ")
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
          MyFormatter: require("custom/my_formatter") };
           }, {}],
           "custom/custom": "\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\nclass CustomView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    @render()\n\n    # Set Backbone listener so that when the Bokeh slider has a change\n    # event, we can process the new data\n    @listenTo(@model.slider, \'change\', () => @render())\n\n  render: () ->\n    # Backbone Views create <div> elements by default, accessible as @$el.\n    # Many Bokeh views ignore this default <div>, and instead do things\n    # like draw to the HTML canvas. In this case though, we change the\n    # contents of the <div>, based on the current slider value.\n    @$el.html(\"<h1>#{ @model.text }: #{ @model.slider.value }</h1>\")\n    @$(\'h1\').css({ \'color\': \'#686d8e\', \'background-color\': \'#2a3153\' })\n\nclass Custom extends LayoutDOM.Model\n\n  # If there is an associated view, this is boilerplate.\n  default_view: CustomView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Custom\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. bokeh.core.properties.String will be\n  # p.String in the JS implementation. Where the JS type system is not yet\n  # as rich, you can use p.Any as a \"wildcard\" property type.\n  @define {\n    text:   [ p.String ]\n    slider: [ p.Any    ]\n  }\n\n# This is boilerplate. Every implementation should export a Model\n# and (when applicable) also a View.\nmodule.exports =\n  Model: Custom\n  View: CustomView\n",
          "custom/draw_tool": "\np = require \"core/properties\"\nGestureTool = require \"models/tools/gestures/gesture_tool\"\n\nclass DrawToolView extends GestureTool.View\n\n  # this is executed when the pan/drag event starts\n  _pan_start: (e) ->\n    @model.source.data = {x: [], y: []}\n\n  # this is executed on subsequent mouse/touch moves\n  _pan: (e) ->\n    frame = @plot_model.frame\n    canvas = @plot_view.canvas\n\n    vx = canvas.sx_to_vx(e.bokeh.sx)\n    vy = canvas.sy_to_vy(e.bokeh.sy)\n    if not frame.contains(vx, vy)\n      return null\n\n    x = frame.get(\'x_mappers\').default.map_from_target(vx)\n    y = frame.get(\'y_mappers\').default.map_from_target(vy)\n\n    @model.source.data.x.push(x)\n    @model.source.data.y.push(y)\n    @model.source.trigger(\'change\')\n\n  # this is executed then the pan/drag ends\n  _pan_end: (e) -> return null\n\nclass DrawTool extends GestureTool.Model\n  default_view: DrawToolView\n  type: \"DrawTool\"\n\n  tool_name: \"Drag Span\"\n  icon: \"bk-tool-icon-lasso-select\"\n  event_type: \"pan\"\n  default_order: 12\n\n  @define { source: [ p.Instance ] }\n\nmodule.exports =\n  Model: DrawTool\n  View: DrawToolView\n",
          "custom/my_formatter": "\nTickFormatter = require \"models/formatters/tick_formatter\"\n\nclass MyFormatter extends TickFormatter.Model\n  type: \"MyFormatter\"\n\n  # TickFormatters should implement this method, which accepts a lisst\n  # of numbers (ticks) and returns a list of strings\n  doFormat: (ticks) ->\n    # format the first tick as-is\n    formatted = [\"#{ticks[0]}\"]\n\n    # format the remaining ticks as a difference from the first\n    for i in [1...ticks.length]\n       formatted.push(\"+#{(ticks[i]-ticks[0]).toPrecision(2)}\")\n\n    return formatted\n\nmodule.exports =\n  Model: MyFormatter\n"
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"ecac9d68-6a74-4165-978e-f2f0998d6683":{"roots":{"references":[{"attributes":{"formatter":{"id":"8d1574bd-eaec-45ab-9b7b-b245b47f678c","type":"BasicTickFormatter"},"plot":{"id":"0b3a1c3e-36a6-4bd2-b660-358819c85175","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ca69d46-a867-43e7-939e-86743c203727","type":"BasicTicker"}},"id":"37b376f8-c335-44fc-8379-c62cf44d3941","type":"LinearAxis"},{"attributes":{"formatter":{"id":"f685993c-df73-451c-a4b6-0751bb369e4b","type":"BasicTickFormatter"},"plot":{"id":"0b3a1c3e-36a6-4bd2-b660-358819c85175","subtype":"Figure","type":"Plot"},"ticker":{"id":"0bf71913-c0e4-4877-bcfa-08fb5f5930f8","type":"BasicTicker"}},"id":"83c57230-42c9-4e92-ba9f-3337d65cc320","type":"LinearAxis"},{"attributes":{},"id":"0bf71913-c0e4-4877-bcfa-08fb5f5930f8","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ac250427-7954-45e7-b463-03ada5452f55","type":"Line"},{"attributes":{"plot":{"id":"0b3a1c3e-36a6-4bd2-b660-358819c85175","subtype":"Figure","type":"Plot"},"source":{"id":"ec7a6885-d6f1-40e3-8f36-9e40772b9fe7","type":"ColumnDataSource"}},"id":"77acd5c5-af11-4b41-8315-59f8d8cf9dcb","type":"DrawTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[],"y":[]}},"id":"ec7a6885-d6f1-40e3-8f36-9e40772b9fe7","type":"ColumnDataSource"},{"attributes":{},"id":"1ca69d46-a867-43e7-939e-86743c203727","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"77acd5c5-af11-4b41-8315-59f8d8cf9dcb","type":"DrawTool"}]},"id":"550b7572-dc41-4218-a21e-baa60cf39c7d","type":"Toolbar"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9693e5bc-6c13-438c-8097-9fd709d2a0de","type":"Line"},{"attributes":{},"id":"97d647ed-24f5-468d-bcdb-2a3248123cfc","type":"ToolEvents"},{"attributes":{"plot":null,"text":"Drag to draw on the plot"},"id":"ebb9ed2f-980f-4cf5-bb05-53be2a30fe05","type":"Title"},{"attributes":{"data_source":{"id":"ec7a6885-d6f1-40e3-8f36-9e40772b9fe7","type":"ColumnDataSource"},"glyph":{"id":"9693e5bc-6c13-438c-8097-9fd709d2a0de","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"ac250427-7954-45e7-b463-03ada5452f55","type":"Line"},"selection_glyph":null},"id":"5ca6c8e4-01ba-431a-9cdc-62d72cf6f020","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":10},"id":"d952830a-8faf-43ab-8761-f95dec115e8a","type":"Range1d"},{"attributes":{"plot":{"id":"0b3a1c3e-36a6-4bd2-b660-358819c85175","subtype":"Figure","type":"Plot"},"ticker":{"id":"0bf71913-c0e4-4877-bcfa-08fb5f5930f8","type":"BasicTicker"}},"id":"c85f4788-cf00-4ff0-811d-5d3458c8cbd2","type":"Grid"},{"attributes":{"callback":null,"end":10},"id":"5d20c229-0738-473e-a31b-aacaff5bc55d","type":"Range1d"},{"attributes":{},"id":"8d1574bd-eaec-45ab-9b7b-b245b47f678c","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"83c57230-42c9-4e92-ba9f-3337d65cc320","type":"LinearAxis"}],"left":[{"id":"37b376f8-c335-44fc-8379-c62cf44d3941","type":"LinearAxis"}],"renderers":[{"id":"83c57230-42c9-4e92-ba9f-3337d65cc320","type":"LinearAxis"},{"id":"c85f4788-cf00-4ff0-811d-5d3458c8cbd2","type":"Grid"},{"id":"37b376f8-c335-44fc-8379-c62cf44d3941","type":"LinearAxis"},{"id":"64a59889-5a29-47ae-a1ac-0229fa345793","type":"Grid"},{"id":"5ca6c8e4-01ba-431a-9cdc-62d72cf6f020","type":"GlyphRenderer"}],"title":{"id":"ebb9ed2f-980f-4cf5-bb05-53be2a30fe05","type":"Title"},"tool_events":{"id":"97d647ed-24f5-468d-bcdb-2a3248123cfc","type":"ToolEvents"},"toolbar":{"id":"550b7572-dc41-4218-a21e-baa60cf39c7d","type":"Toolbar"},"x_range":{"id":"d952830a-8faf-43ab-8761-f95dec115e8a","type":"Range1d"},"y_range":{"id":"5d20c229-0738-473e-a31b-aacaff5bc55d","type":"Range1d"}},"id":"0b3a1c3e-36a6-4bd2-b660-358819c85175","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"0b3a1c3e-36a6-4bd2-b660-358819c85175","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ca69d46-a867-43e7-939e-86743c203727","type":"BasicTicker"}},"id":"64a59889-5a29-47ae-a1ac-0229fa345793","type":"Grid"},{"attributes":{},"id":"f685993c-df73-451c-a4b6-0751bb369e4b","type":"BasicTickFormatter"}],"root_ids":["0b3a1c3e-36a6-4bd2-b660-358819c85175"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"ecac9d68-6a74-4165-978e-f2f0998d6683","elementid":"850e5a81-1a1a-41b9-84fc-c514e4c5e31d","modelid":"0b3a1c3e-36a6-4bd2-b660-358819c85175"}];
              
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