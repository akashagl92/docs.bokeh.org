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
      };var element = document.getElementById("1ff9a0bf-9784-4308-8598-d6d3a5f95d6d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1ff9a0bf-9784-4308-8598-d6d3a5f95d6d' but no matching script tag was found. ")
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
          MyFormatter: require("custom/my_formatter") };
           }, {}],
           "custom/custom": "\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\nclass CustomView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    @render()\n\n    # Set Backbone listener so that when the Bokeh slider has a change\n    # event, we can process the new data\n    @listenTo(@model.slider, \'change\', () => @render())\n\n  render: () ->\n    # Backbone Views create <div> elements by default, accessible as @$el.\n    # Many Bokeh views ignore this default <div>, and instead do things\n    # like draw to the HTML canvas. In this case though, we change the\n    # contents of the <div>, based on the current slider value.\n    @$el.html(\"<h1>#{ @model.text }: #{ @model.slider.value }</h1>\")\n    @$(\'h1\').css({ \'color\': \'#686d8e\', \'background-color\': \'#2a3153\' })\n\nclass Custom extends LayoutDOM.Model\n\n  # If there is an associated view, this is boilerplate.\n  default_view: CustomView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Custom\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. bokeh.core.properties.String will be\n  # p.String in the JS implementation. Where the JS type system is not yet\n  # as rich, you can use p.Any as a \"wildcard\" property type.\n  @define {\n    text:   [ p.String ]\n    slider: [ p.Any    ]\n  }\n\n# This is boilerplate. Every implementation should export a Model\n# and (when applicable) also a View.\nmodule.exports =\n  Model: Custom\n  View: CustomView\n",
          "custom/my_formatter": "\nTickFormatter = require \"models/formatters/tick_formatter\"\n\nclass MyFormatter extends TickFormatter.Model\n  type: \"MyFormatter\"\n\n  # TickFormatters should implement this method, which accepts a lisst\n  # of numbers (ticks) and returns a list of strings\n  doFormat: (ticks) ->\n    # format the first tick as-is\n    formatted = [\"#{ticks[0]}\"]\n\n    # format the remaining ticks as a difference from the first\n    for i in [1...ticks.length]\n       formatted.push(\"+#{(ticks[i]-ticks[0]).toPrecision(2)}\")\n\n    return formatted\n\nmodule.exports =\n  Model: MyFormatter\n"
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"1b6fb9a1-ce65-467b-91ae-b54768fc4b5d":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c5babb84-af87-410e-acc3-b03c4b0f1a81","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"7908c9c7-690e-47c2-a1a9-dba87c7bbafa","subtype":"Figure","type":"Plot"}},"id":"c48c37f6-21a9-4e5b-b8a5-fb44937be8e1","type":"ResetTool"},{"attributes":{"plot":{"id":"7908c9c7-690e-47c2-a1a9-dba87c7bbafa","subtype":"Figure","type":"Plot"},"ticker":{"id":"2451bd1e-7c87-4788-946e-663e8fb4dc2f","type":"BasicTicker"}},"id":"b210b1ce-26f4-48f8-bb44-d204893dc691","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d1c90eeb-a189-4512-af76-61b1fd218fbf","type":"Circle"},{"attributes":{"data_source":{"id":"8edb7e85-c389-45e2-a3be-9a828615120f","type":"ColumnDataSource"},"glyph":{"id":"cc71b9cd-fa47-4a60-baa8-1a0a86f5efa6","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"d1c90eeb-a189-4512-af76-61b1fd218fbf","type":"Circle"},"selection_glyph":null},"id":"8eaca82f-864d-4c8a-9c60-4255a1c7e6c2","type":"GlyphRenderer"},{"attributes":{},"id":"2451bd1e-7c87-4788-946e-663e8fb4dc2f","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0d0d9369-83d4-4dca-90ce-94b57f63337b","type":"PanTool"},{"id":"44054d43-64ed-428d-9414-6210c472d570","type":"WheelZoomTool"},{"id":"2ecdaf3d-1627-4e2b-b6dc-232b8b945ef2","type":"BoxZoomTool"},{"id":"4b192162-2bcd-4ca6-8255-c798ff8699a9","type":"SaveTool"},{"id":"c48c37f6-21a9-4e5b-b8a5-fb44937be8e1","type":"ResetTool"},{"id":"fa391afd-e05c-480e-bbfb-c92f711fadfc","type":"HelpTool"}]},"id":"7e8ad000-ffc8-4183-b49b-d34bd18b66c0","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cc71b9cd-fa47-4a60-baa8-1a0a86f5efa6","type":"Circle"},{"attributes":{"plot":null,"text":null},"id":"5d0779bf-6592-4816-8d74-d252761ca9b2","type":"Title"},{"attributes":{},"id":"8a803ac2-c169-49d1-a212-614fe05425a6","type":"ToolEvents"},{"attributes":{"plot":{"id":"7908c9c7-690e-47c2-a1a9-dba87c7bbafa","subtype":"Figure","type":"Plot"}},"id":"fa391afd-e05c-480e-bbfb-c92f711fadfc","type":"HelpTool"},{"attributes":{},"id":"181ce259-0f18-4866-93be-499fb03bdfb0","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"7908c9c7-690e-47c2-a1a9-dba87c7bbafa","subtype":"Figure","type":"Plot"}},"id":"0d0d9369-83d4-4dca-90ce-94b57f63337b","type":"PanTool"},{"attributes":{},"id":"db6c96ac-5c1f-43ec-9138-fa0f96558f03","type":"BasicTicker"},{"attributes":{"plot":{"id":"7908c9c7-690e-47c2-a1a9-dba87c7bbafa","subtype":"Figure","type":"Plot"}},"id":"4b192162-2bcd-4ca6-8255-c798ff8699a9","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]}},"id":"8edb7e85-c389-45e2-a3be-9a828615120f","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"486d70ff-7a5b-4274-b94f-d963da6f830c","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"7908c9c7-690e-47c2-a1a9-dba87c7bbafa","subtype":"Figure","type":"Plot"},"ticker":{"id":"db6c96ac-5c1f-43ec-9138-fa0f96558f03","type":"BasicTicker"}},"id":"52532b9e-16e3-43c0-9daf-0466941aa6ba","type":"Grid"},{"attributes":{"formatter":{"id":"181ce259-0f18-4866-93be-499fb03bdfb0","type":"BasicTickFormatter"},"plot":{"id":"7908c9c7-690e-47c2-a1a9-dba87c7bbafa","subtype":"Figure","type":"Plot"},"ticker":{"id":"db6c96ac-5c1f-43ec-9138-fa0f96558f03","type":"BasicTicker"}},"id":"6915d7dc-8048-48d9-b6f8-1b19c5913e25","type":"LinearAxis"},{"attributes":{"plot":{"id":"7908c9c7-690e-47c2-a1a9-dba87c7bbafa","subtype":"Figure","type":"Plot"}},"id":"44054d43-64ed-428d-9414-6210c472d570","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"788319bb-beb1-4024-a99a-e423615951c9","type":"LinearAxis"}],"left":[{"id":"6915d7dc-8048-48d9-b6f8-1b19c5913e25","type":"LinearAxis"}],"renderers":[{"id":"788319bb-beb1-4024-a99a-e423615951c9","type":"LinearAxis"},{"id":"b210b1ce-26f4-48f8-bb44-d204893dc691","type":"Grid"},{"id":"6915d7dc-8048-48d9-b6f8-1b19c5913e25","type":"LinearAxis"},{"id":"52532b9e-16e3-43c0-9daf-0466941aa6ba","type":"Grid"},{"id":"c5babb84-af87-410e-acc3-b03c4b0f1a81","type":"BoxAnnotation"},{"id":"8eaca82f-864d-4c8a-9c60-4255a1c7e6c2","type":"GlyphRenderer"}],"title":{"id":"5d0779bf-6592-4816-8d74-d252761ca9b2","type":"Title"},"tool_events":{"id":"8a803ac2-c169-49d1-a212-614fe05425a6","type":"ToolEvents"},"toolbar":{"id":"7e8ad000-ffc8-4183-b49b-d34bd18b66c0","type":"Toolbar"},"x_range":{"id":"486d70ff-7a5b-4274-b94f-d963da6f830c","type":"DataRange1d"},"y_range":{"id":"01471354-f6c0-4c41-8640-37f7b6964d49","type":"DataRange1d"}},"id":"7908c9c7-690e-47c2-a1a9-dba87c7bbafa","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"c5babb84-af87-410e-acc3-b03c4b0f1a81","type":"BoxAnnotation"},"plot":{"id":"7908c9c7-690e-47c2-a1a9-dba87c7bbafa","subtype":"Figure","type":"Plot"}},"id":"2ecdaf3d-1627-4e2b-b6dc-232b8b945ef2","type":"BoxZoomTool"},{"attributes":{},"id":"c93bc669-6bda-466d-aabf-db53dec24c49","type":"MyFormatter"},{"attributes":{"formatter":{"id":"c93bc669-6bda-466d-aabf-db53dec24c49","type":"MyFormatter"},"plot":{"id":"7908c9c7-690e-47c2-a1a9-dba87c7bbafa","subtype":"Figure","type":"Plot"},"ticker":{"id":"2451bd1e-7c87-4788-946e-663e8fb4dc2f","type":"BasicTicker"}},"id":"788319bb-beb1-4024-a99a-e423615951c9","type":"LinearAxis"},{"attributes":{"callback":null},"id":"01471354-f6c0-4c41-8640-37f7b6964d49","type":"DataRange1d"}],"root_ids":["7908c9c7-690e-47c2-a1a9-dba87c7bbafa"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"1b6fb9a1-ce65-467b-91ae-b54768fc4b5d","elementid":"1ff9a0bf-9784-4308-8598-d6d3a5f95d6d","modelid":"7908c9c7-690e-47c2-a1a9-dba87c7bbafa"}];
              
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