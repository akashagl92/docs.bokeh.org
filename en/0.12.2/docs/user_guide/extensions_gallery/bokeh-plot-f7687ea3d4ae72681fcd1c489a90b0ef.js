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
      };var element = document.getElementById("bd3150a2-e38a-48d7-b20c-21cf1e720881");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bd3150a2-e38a-48d7-b20c-21cf1e720881' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js'];
    
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
          LatexLabel: require("custom/latex_label"),
          MyFormatter: require("custom/my_formatter") };
           }, {}],
           "custom/custom": "\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\nclass CustomView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    @render()\n\n    # Set Backbone listener so that when the Bokeh slider has a change\n    # event, we can process the new data\n    @listenTo(@model.slider, \'change\', () => @render())\n\n  render: () ->\n    # Backbone Views create <div> elements by default, accessible as @$el.\n    # Many Bokeh views ignore this default <div>, and instead do things\n    # like draw to the HTML canvas. In this case though, we change the\n    # contents of the <div>, based on the current slider value.\n    @$el.html(\"<h1>#{ @model.text }: #{ @model.slider.value }</h1>\")\n    @$(\'h1\').css({ \'color\': \'#686d8e\', \'background-color\': \'#2a3153\' })\n\nclass Custom extends LayoutDOM.Model\n\n  # If there is an associated view, this is boilerplate.\n  default_view: CustomView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Custom\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. bokeh.core.properties.String will be\n  # p.String in the JS implementation. Where the JS type system is not yet\n  # as rich, you can use p.Any as a \"wildcard\" property type.\n  @define {\n    text:   [ p.String ]\n    slider: [ p.Any    ]\n  }\n\n# This is boilerplate. Every implementation should export a Model\n# and (when applicable) also a View.\nmodule.exports =\n  Model: Custom\n  View: CustomView\n",
          "custom/latex_label": "\nLabel = require \"models/annotations/label\"\n\nclass LatexLabelView extends Label.View\n  render: () ->\n\n    #--- Start of copied section from ``Label.render`` implementation\n\n    ctx = @plot_view.canvas_view.ctx\n\n    # Here because AngleSpec does units tranform and label doesn\'t support specs\n    switch @mget(\'angle_units\')\n      when \"rad\" then angle = -1 * @mget(\'angle\')\n      when \"deg\" then angle = -1 * @mget(\'angle\') * Math.PI/180.0\n\n    if @mget(\'x_units\') == \"data\"\n      vx = @xmapper.map_to_target(@mget(\'x\'))\n    else\n      vx = @mget(\'x\')\n    sx = @canvas.vx_to_sx(vx)\n\n    if @mget(\'y_units\') == \"data\"\n      vy = @ymapper.map_to_target(@mget(\'y\'))\n    else\n      vy = @mget(\'y\')\n    sy = @canvas.vy_to_sy(vy)\n\n    if @model.panel?\n      panel_offset = @_get_panel_offset()\n      sx += panel_offset.x\n      sy += panel_offset.y\n\n    #--- End of copied section from ``Label.render`` implementation\n\n    # ``katex`` is loaded into the global window at runtime\n    # katex.renderToString returns a html ``span`` element\n    latex = katex.renderToString(@mget(\'text\'), {displayMode: true})\n\n    # Must render as superpositioned div (not on canvas) so that KaTex\n    # css can properly style the text\n    @_css_text(ctx, latex, sx + @mget(\'x_offset\'), sy - @mget(\'y_offset\'), angle)\n\nclass LatexLabel extends Label.Model\n  type: \'LatexLabel\'\n  default_view: LatexLabelView\n\nmodule.exports =\n  Model: LatexLabel\n  View: LatexLabelView\n",
          "custom/my_formatter": "\nTickFormatter = require \"models/formatters/tick_formatter\"\n\nclass MyFormatter extends TickFormatter.Model\n  type: \"MyFormatter\"\n\n  # TickFormatters should implement this method, which accepts a lisst\n  # of numbers (ticks) and returns a list of strings\n  doFormat: (ticks) ->\n    # format the first tick as-is\n    formatted = [\"#{ticks[0]}\"]\n\n    # format the remaining ticks as a difference from the first\n    for i in [1...ticks.length]\n       formatted.push(\"+#{(ticks[i]-ticks[0]).toPrecision(2)}\")\n\n    return formatted\n\nmodule.exports =\n  Model: MyFormatter\n"
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"439dda84-1bb9-49b5-bab9-35fb4d60c385":{"roots":{"references":[{"attributes":{"plot":{"id":"d7af1feb-9cf0-495a-874b-cd8dcfc29ce7","subtype":"Figure","type":"Plot"}},"id":"a3e4126b-2472-4113-bfb5-227a938fdb33","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"df634276-12a2-4665-ba06-fb835b415aa0","type":"Circle"},{"attributes":{"formatter":{"id":"cd8c37af-6351-486b-b6cf-08e815ada46b","type":"BasicTickFormatter"},"plot":{"id":"d7af1feb-9cf0-495a-874b-cd8dcfc29ce7","subtype":"Figure","type":"Plot"},"ticker":{"id":"1a1dea09-25e4-49c4-a093-8b5f93d75186","type":"BasicTicker"}},"id":"5bd184bc-773b-4ae3-814f-9126a9687110","type":"LinearAxis"},{"attributes":{},"id":"ad88e89a-6da4-43e1-87dd-eb3db70f3b60","type":"BasicTicker"},{"attributes":{"data_source":{"id":"d81654a2-31a8-45a1-bf43-200cc90a9b75","type":"ColumnDataSource"},"glyph":{"id":"df634276-12a2-4665-ba06-fb835b415aa0","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"6291e72e-86ec-4e3b-9152-63be04cb5ebe","type":"Circle"},"selection_glyph":null},"id":"f2163bea-3e0c-4164-bd30-58a20c57bce7","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6291e72e-86ec-4e3b-9152-63be04cb5ebe","type":"Circle"},{"attributes":{"below":[{"id":"0180f99b-2bab-42a3-8cb4-6aba96cf3087","type":"LinearAxis"}],"left":[{"id":"5bd184bc-773b-4ae3-814f-9126a9687110","type":"LinearAxis"}],"renderers":[{"id":"0180f99b-2bab-42a3-8cb4-6aba96cf3087","type":"LinearAxis"},{"id":"73b15b80-f8c9-4ea7-8b50-6ae7af0de3ce","type":"Grid"},{"id":"5bd184bc-773b-4ae3-814f-9126a9687110","type":"LinearAxis"},{"id":"88b07cb7-624a-4ac5-bf80-1746c9b302a8","type":"Grid"},{"id":"130917ca-308d-4091-a5c3-5dbf3eee3379","type":"BoxAnnotation"},{"id":"f2163bea-3e0c-4164-bd30-58a20c57bce7","type":"GlyphRenderer"}],"title":{"id":"8bd112f9-54ca-4246-834e-fbddc4132d50","type":"Title"},"tool_events":{"id":"d906c5bd-1dc6-4716-a4f0-d66a56bf503d","type":"ToolEvents"},"toolbar":{"id":"d0783ced-abf4-4e1d-bdd7-f42c4722a6bf","type":"Toolbar"},"x_range":{"id":"32b72bce-586e-471f-bd4b-7a878ff77f19","type":"DataRange1d"},"y_range":{"id":"b5dff45a-e985-4681-906d-2134da17b1c5","type":"DataRange1d"}},"id":"d7af1feb-9cf0-495a-874b-cd8dcfc29ce7","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"130917ca-308d-4091-a5c3-5dbf3eee3379","type":"BoxAnnotation"},"plot":{"id":"d7af1feb-9cf0-495a-874b-cd8dcfc29ce7","subtype":"Figure","type":"Plot"}},"id":"9e420c17-70fd-4ce6-b5b9-6f66dda2118f","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"d7af1feb-9cf0-495a-874b-cd8dcfc29ce7","subtype":"Figure","type":"Plot"},"ticker":{"id":"1a1dea09-25e4-49c4-a093-8b5f93d75186","type":"BasicTicker"}},"id":"88b07cb7-624a-4ac5-bf80-1746c9b302a8","type":"Grid"},{"attributes":{"callback":null},"id":"32b72bce-586e-471f-bd4b-7a878ff77f19","type":"DataRange1d"},{"attributes":{},"id":"1a1dea09-25e4-49c4-a093-8b5f93d75186","type":"BasicTicker"},{"attributes":{"callback":null},"id":"b5dff45a-e985-4681-906d-2134da17b1c5","type":"DataRange1d"},{"attributes":{"plot":{"id":"d7af1feb-9cf0-495a-874b-cd8dcfc29ce7","subtype":"Figure","type":"Plot"}},"id":"df6cf833-8484-4fd6-931a-d471a3962fc0","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"d7af1feb-9cf0-495a-874b-cd8dcfc29ce7","subtype":"Figure","type":"Plot"}},"id":"ed4de9a3-6c25-4d82-80f3-9d04e3d6f5bf","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"130917ca-308d-4091-a5c3-5dbf3eee3379","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,6],"y":[5,7,3,2,4]}},"id":"d81654a2-31a8-45a1-bf43-200cc90a9b75","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d7af1feb-9cf0-495a-874b-cd8dcfc29ce7","subtype":"Figure","type":"Plot"}},"id":"17e3f3d1-4b4f-476c-9d6d-c6f9f9047ef6","type":"PanTool"},{"attributes":{"plot":{"id":"d7af1feb-9cf0-495a-874b-cd8dcfc29ce7","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad88e89a-6da4-43e1-87dd-eb3db70f3b60","type":"BasicTicker"}},"id":"73b15b80-f8c9-4ea7-8b50-6ae7af0de3ce","type":"Grid"},{"attributes":{"formatter":{"id":"ad62784f-f4d2-47a8-b3cd-3e229095b5ec","type":"MyFormatter"},"plot":{"id":"d7af1feb-9cf0-495a-874b-cd8dcfc29ce7","subtype":"Figure","type":"Plot"},"ticker":{"id":"ad88e89a-6da4-43e1-87dd-eb3db70f3b60","type":"BasicTicker"}},"id":"0180f99b-2bab-42a3-8cb4-6aba96cf3087","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"8bd112f9-54ca-4246-834e-fbddc4132d50","type":"Title"},{"attributes":{"plot":{"id":"d7af1feb-9cf0-495a-874b-cd8dcfc29ce7","subtype":"Figure","type":"Plot"}},"id":"4ee454a5-e96f-454b-be2e-f2bbc3f21556","type":"SaveTool"},{"attributes":{},"id":"ad62784f-f4d2-47a8-b3cd-3e229095b5ec","type":"MyFormatter"},{"attributes":{},"id":"d906c5bd-1dc6-4716-a4f0-d66a56bf503d","type":"ToolEvents"},{"attributes":{},"id":"cd8c37af-6351-486b-b6cf-08e815ada46b","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"17e3f3d1-4b4f-476c-9d6d-c6f9f9047ef6","type":"PanTool"},{"id":"df6cf833-8484-4fd6-931a-d471a3962fc0","type":"WheelZoomTool"},{"id":"9e420c17-70fd-4ce6-b5b9-6f66dda2118f","type":"BoxZoomTool"},{"id":"4ee454a5-e96f-454b-be2e-f2bbc3f21556","type":"SaveTool"},{"id":"ed4de9a3-6c25-4d82-80f3-9d04e3d6f5bf","type":"ResetTool"},{"id":"a3e4126b-2472-4113-bfb5-227a938fdb33","type":"HelpTool"}]},"id":"d0783ced-abf4-4e1d-bdd7-f42c4722a6bf","type":"Toolbar"}],"root_ids":["d7af1feb-9cf0-495a-874b-cd8dcfc29ce7"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"439dda84-1bb9-49b5-bab9-35fb4d60c385","elementid":"bd3150a2-e38a-48d7-b20c-21cf1e720881","modelid":"d7af1feb-9cf0-495a-874b-cd8dcfc29ce7"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
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