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
      };var element = document.getElementById("8318df24-2fe7-476b-8d2f-4935e8e1f6b6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8318df24-2fe7-476b-8d2f-4935e8e1f6b6' but no matching script tag was found. ")
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
          MyFormatter: require("custom/my_formatter") };
           }, {}],
           "custom/custom": "\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\nclass CustomView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    @render()\n\n    # Set Backbone listener so that when the Bokeh slider has a change\n    # event, we can process the new data\n    @listenTo(@model.slider, \'change\', () => @render())\n\n  render: () ->\n    # Backbone Views create <div> elements by default, accessible as @$el.\n    # Many Bokeh views ignore this default <div>, and instead do things\n    # like draw to the HTML canvas. In this case though, we change the\n    # contents of the <div>, based on the current slider value.\n    @$el.html(\"<h1>#{ @model.text }: #{ @model.slider.value }</h1>\")\n    @$(\'h1\').css({ \'color\': \'#686d8e\', \'background-color\': \'#2a3153\' })\n\nclass Custom extends LayoutDOM.Model\n\n  # If there is an associated view, this is boilerplate.\n  default_view: CustomView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Custom\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. bokeh.core.properties.String will be\n  # p.String in the JS implementation. Where the JS type system is not yet\n  # as rich, you can use p.Any as a \"wildcard\" property type.\n  @define {\n    text:   [ p.String ]\n    slider: [ p.Any    ]\n  }\n\n# This is boilerplate. Every implementation should export a Model\n# and (when applicable) also a View.\nmodule.exports =\n  Model: Custom\n  View: CustomView\n",
          "custom/my_formatter": "\nTickFormatter = require \"models/formatters/tick_formatter\"\n\nclass MyFormatter extends TickFormatter.Model\n  type: \"MyFormatter\"\n\n  # TickFormatters should implement this method, which accepts a lisst\n  # of numbers (ticks) and returns a list of strings\n  doFormat: (ticks) ->\n    # format the first tick as-is\n    formatted = [\"#{ticks[0]}\"]\n\n    # format the remaining ticks as a difference from the first\n    for i in [1...ticks.length]\n       formatted.push(\"+#{(ticks[i]-ticks[0]).toPrecision(2)}\")\n\n    return formatted\n\nmodule.exports =\n  Model: MyFormatter\n"
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"9296ece8-054b-44f8-98a4-0da3b4741609":{"roots":{"references":[{"attributes":{"plot":{"id":"5ab839be-8399-4a1e-9c03-3f248c520525","subtype":"Figure","type":"Plot"}},"id":"fc79d49d-6059-4f1a-8752-9ba5f94550fd","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]}},"id":"279547f5-e43d-433a-95c2-d646aae822e4","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"36988684-fc0a-4213-a285-c5bd328e4e43","type":"MyFormatter"},"plot":{"id":"5ab839be-8399-4a1e-9c03-3f248c520525","subtype":"Figure","type":"Plot"},"ticker":{"id":"b28e3eba-2222-4226-8b65-7a6cb4198ded","type":"BasicTicker"}},"id":"31decd35-15d3-4d7d-a2d8-ae7a2898e3fb","type":"LinearAxis"},{"attributes":{},"id":"1b6f232e-c334-4163-8e32-0cb2716130da","type":"BasicTickFormatter"},{"attributes":{},"id":"b28e3eba-2222-4226-8b65-7a6cb4198ded","type":"BasicTicker"},{"attributes":{"plot":{"id":"5ab839be-8399-4a1e-9c03-3f248c520525","subtype":"Figure","type":"Plot"}},"id":"01577270-454b-4912-a95e-5d0515a30ab5","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":null},"id":"24e58c64-fd56-4dbb-86a4-f3b5da1deea5","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d2b0d0b9-3c37-4a08-a3dc-e1a8524585bb","type":"Circle"},{"attributes":{"plot":{"id":"5ab839be-8399-4a1e-9c03-3f248c520525","subtype":"Figure","type":"Plot"}},"id":"0a7acc0e-7f01-4895-b516-dda8aa63dfff","type":"ResetTool"},{"attributes":{"callback":null},"id":"65dfd063-a1ba-4e43-af28-16dad340cb09","type":"DataRange1d"},{"attributes":{"plot":{"id":"5ab839be-8399-4a1e-9c03-3f248c520525","subtype":"Figure","type":"Plot"}},"id":"c4e01308-c90c-47c6-9fae-2f7df4e79975","type":"HelpTool"},{"attributes":{},"id":"c897a4b5-f663-417a-9045-cf4214f20779","type":"ToolEvents"},{"attributes":{"formatter":{"id":"1b6f232e-c334-4163-8e32-0cb2716130da","type":"BasicTickFormatter"},"plot":{"id":"5ab839be-8399-4a1e-9c03-3f248c520525","subtype":"Figure","type":"Plot"},"ticker":{"id":"cbbc23cc-e8a4-4e80-ab20-928612a94675","type":"BasicTicker"}},"id":"2aca4c5e-028d-4587-9ffe-acac488b1970","type":"LinearAxis"},{"attributes":{"overlay":{"id":"02a59287-c4d9-4348-ba38-00cf166c32d7","type":"BoxAnnotation"},"plot":{"id":"5ab839be-8399-4a1e-9c03-3f248c520525","subtype":"Figure","type":"Plot"}},"id":"7e3ab6b6-ea85-4e63-be6c-649c6ef0cc3a","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"5ab839be-8399-4a1e-9c03-3f248c520525","subtype":"Figure","type":"Plot"},"ticker":{"id":"b28e3eba-2222-4226-8b65-7a6cb4198ded","type":"BasicTicker"}},"id":"97cb3791-0043-4af5-b807-bf74225b5ec5","type":"Grid"},{"attributes":{"below":[{"id":"31decd35-15d3-4d7d-a2d8-ae7a2898e3fb","type":"LinearAxis"}],"left":[{"id":"2aca4c5e-028d-4587-9ffe-acac488b1970","type":"LinearAxis"}],"renderers":[{"id":"31decd35-15d3-4d7d-a2d8-ae7a2898e3fb","type":"LinearAxis"},{"id":"97cb3791-0043-4af5-b807-bf74225b5ec5","type":"Grid"},{"id":"2aca4c5e-028d-4587-9ffe-acac488b1970","type":"LinearAxis"},{"id":"dccbccd1-9bf5-4fb8-a941-22a8e91d0311","type":"Grid"},{"id":"02a59287-c4d9-4348-ba38-00cf166c32d7","type":"BoxAnnotation"},{"id":"391df9d9-e939-4a85-a36f-4fe53cb7adf9","type":"GlyphRenderer"}],"title":{"id":"24e58c64-fd56-4dbb-86a4-f3b5da1deea5","type":"Title"},"tool_events":{"id":"c897a4b5-f663-417a-9045-cf4214f20779","type":"ToolEvents"},"toolbar":{"id":"667c5569-d501-4891-a2ea-263a5811b89d","type":"Toolbar"},"x_range":{"id":"65dfd063-a1ba-4e43-af28-16dad340cb09","type":"DataRange1d"},"y_range":{"id":"3b78b84a-7e0f-4b99-b463-a480ace01424","type":"DataRange1d"}},"id":"5ab839be-8399-4a1e-9c03-3f248c520525","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cb3ebac6-c030-4d7a-9e9a-36f4bfb3666d","type":"Circle"},{"attributes":{"callback":null},"id":"3b78b84a-7e0f-4b99-b463-a480ace01424","type":"DataRange1d"},{"attributes":{"data_source":{"id":"279547f5-e43d-433a-95c2-d646aae822e4","type":"ColumnDataSource"},"glyph":{"id":"cb3ebac6-c030-4d7a-9e9a-36f4bfb3666d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"d2b0d0b9-3c37-4a08-a3dc-e1a8524585bb","type":"Circle"},"selection_glyph":null},"id":"391df9d9-e939-4a85-a36f-4fe53cb7adf9","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fc79d49d-6059-4f1a-8752-9ba5f94550fd","type":"PanTool"},{"id":"01577270-454b-4912-a95e-5d0515a30ab5","type":"WheelZoomTool"},{"id":"7e3ab6b6-ea85-4e63-be6c-649c6ef0cc3a","type":"BoxZoomTool"},{"id":"756170ea-9ed0-46a1-9c24-cbfe54d9be5a","type":"SaveTool"},{"id":"0a7acc0e-7f01-4895-b516-dda8aa63dfff","type":"ResetTool"},{"id":"c4e01308-c90c-47c6-9fae-2f7df4e79975","type":"HelpTool"}]},"id":"667c5569-d501-4891-a2ea-263a5811b89d","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"02a59287-c4d9-4348-ba38-00cf166c32d7","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"5ab839be-8399-4a1e-9c03-3f248c520525","subtype":"Figure","type":"Plot"}},"id":"756170ea-9ed0-46a1-9c24-cbfe54d9be5a","type":"SaveTool"},{"attributes":{},"id":"36988684-fc0a-4213-a285-c5bd328e4e43","type":"MyFormatter"},{"attributes":{},"id":"cbbc23cc-e8a4-4e80-ab20-928612a94675","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"5ab839be-8399-4a1e-9c03-3f248c520525","subtype":"Figure","type":"Plot"},"ticker":{"id":"cbbc23cc-e8a4-4e80-ab20-928612a94675","type":"BasicTicker"}},"id":"dccbccd1-9bf5-4fb8-a941-22a8e91d0311","type":"Grid"}],"root_ids":["5ab839be-8399-4a1e-9c03-3f248c520525"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"9296ece8-054b-44f8-98a4-0da3b4741609","elementid":"8318df24-2fe7-476b-8d2f-4935e8e1f6b6","modelid":"5ab839be-8399-4a1e-9c03-3f248c520525"}];
              
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