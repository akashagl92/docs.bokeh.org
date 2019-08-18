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
      };var element = document.getElementById("70ffbd24-058d-497b-a155-0bb97ebfafe0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '70ffbd24-058d-497b-a155-0bb97ebfafe0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"1a0ad639-7c11-4860-bfa0-857602553a64":{"roots":{"references":[{"attributes":{},"id":"072f852f-d42e-4e89-a683-dedc95e1b201","type":"BasicTicker"},{"attributes":{"callback":null},"id":"7808c27d-2e06-4e20-941f-1e19c1592738","type":"DataRange1d"},{"attributes":{"plot":{"id":"d544209c-df8b-4ae3-bf33-ccc5c92657fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"660465dd-be65-4ddc-8437-84dc8474d434","type":"BasicTicker"}},"id":"ab6c3fb7-b9bc-48ea-8b09-b3b363e0ebde","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96e2a130-8918-4dd7-8975-7e04675fe21f","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"d544209c-df8b-4ae3-bf33-ccc5c92657fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"072f852f-d42e-4e89-a683-dedc95e1b201","type":"BasicTicker"}},"id":"996f8f99-5792-4db1-9ccc-04e02295b108","type":"Grid"},{"attributes":{"plot":{"id":"d544209c-df8b-4ae3-bf33-ccc5c92657fe","subtype":"Figure","type":"Plot"}},"id":"eb5e529f-7ef7-49f7-b9ff-9b3928c4f625","type":"ResetTool"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1e9a5624-d635-4755-b9e4-c2d7394eb00f","type":"Ray"},{"attributes":{"below":[{"id":"036a47fd-2471-4f42-928c-244e6011fd81","type":"LinearAxis"}],"left":[{"id":"aeb84f5f-7fa1-4781-a2d9-4f6dddefb097","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"036a47fd-2471-4f42-928c-244e6011fd81","type":"LinearAxis"},{"id":"ab6c3fb7-b9bc-48ea-8b09-b3b363e0ebde","type":"Grid"},{"id":"aeb84f5f-7fa1-4781-a2d9-4f6dddefb097","type":"LinearAxis"},{"id":"996f8f99-5792-4db1-9ccc-04e02295b108","type":"Grid"},{"id":"96e2a130-8918-4dd7-8975-7e04675fe21f","type":"BoxAnnotation"},{"id":"ce97639c-57a8-4ffa-9aab-b7cb237b408b","type":"GlyphRenderer"}],"title":{"id":"dab3d014-35ef-4f6f-ba82-c05f5e58e8c4","type":"Title"},"tool_events":{"id":"3131a215-cdf5-48ed-917a-79ac327671af","type":"ToolEvents"},"toolbar":{"id":"1d939751-47e2-4109-bbb7-aeb46994d0a6","type":"Toolbar"},"x_range":{"id":"7808c27d-2e06-4e20-941f-1e19c1592738","type":"DataRange1d"},"y_range":{"id":"e6055aa3-c235-468b-b72b-7250b577915e","type":"DataRange1d"}},"id":"d544209c-df8b-4ae3-bf33-ccc5c92657fe","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"d544209c-df8b-4ae3-bf33-ccc5c92657fe","subtype":"Figure","type":"Plot"}},"id":"f14e3b84-d329-404e-afb1-697e2692d969","type":"PanTool"},{"attributes":{"plot":{"id":"d544209c-df8b-4ae3-bf33-ccc5c92657fe","subtype":"Figure","type":"Plot"}},"id":"f1aab3ab-171d-48ee-8b91-9630ceecec27","type":"HelpTool"},{"attributes":{"callback":null},"id":"e6055aa3-c235-468b-b72b-7250b577915e","type":"DataRange1d"},{"attributes":{"data_source":{"id":"12c463af-9dc0-4e78-9e24-a5bbd370a555","type":"ColumnDataSource"},"glyph":{"id":"de3a4eae-f6d9-4282-b1fc-b9a637ea9306","type":"Ray"},"hover_glyph":null,"nonselection_glyph":{"id":"1e9a5624-d635-4755-b9e4-c2d7394eb00f","type":"Ray"},"selection_glyph":null},"id":"ce97639c-57a8-4ffa-9aab-b7cb237b408b","type":"GlyphRenderer"},{"attributes":{},"id":"9e455c38-696b-4a3e-bcf4-87108c47ee5c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"12c463af-9dc0-4e78-9e24-a5bbd370a555","type":"ColumnDataSource"},{"attributes":{},"id":"c01a55ab-3017-4f71-8f88-9e7bde1a38bb","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d544209c-df8b-4ae3-bf33-ccc5c92657fe","subtype":"Figure","type":"Plot"}},"id":"69e85e17-06c5-450c-8e78-76b2957f9135","type":"SaveTool"},{"attributes":{},"id":"660465dd-be65-4ddc-8437-84dc8474d434","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"de3a4eae-f6d9-4282-b1fc-b9a637ea9306","type":"Ray"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f14e3b84-d329-404e-afb1-697e2692d969","type":"PanTool"},{"id":"880af2ac-d6e7-4a3b-8e6c-f661b3f186cb","type":"WheelZoomTool"},{"id":"283abfba-376a-41d7-ad8c-1831ad18e970","type":"BoxZoomTool"},{"id":"69e85e17-06c5-450c-8e78-76b2957f9135","type":"SaveTool"},{"id":"eb5e529f-7ef7-49f7-b9ff-9b3928c4f625","type":"ResetTool"},{"id":"f1aab3ab-171d-48ee-8b91-9630ceecec27","type":"HelpTool"}]},"id":"1d939751-47e2-4109-bbb7-aeb46994d0a6","type":"Toolbar"},{"attributes":{},"id":"3131a215-cdf5-48ed-917a-79ac327671af","type":"ToolEvents"},{"attributes":{"plot":{"id":"d544209c-df8b-4ae3-bf33-ccc5c92657fe","subtype":"Figure","type":"Plot"}},"id":"880af2ac-d6e7-4a3b-8e6c-f661b3f186cb","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"96e2a130-8918-4dd7-8975-7e04675fe21f","type":"BoxAnnotation"},"plot":{"id":"d544209c-df8b-4ae3-bf33-ccc5c92657fe","subtype":"Figure","type":"Plot"}},"id":"283abfba-376a-41d7-ad8c-1831ad18e970","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":null},"id":"dab3d014-35ef-4f6f-ba82-c05f5e58e8c4","type":"Title"},{"attributes":{"formatter":{"id":"9e455c38-696b-4a3e-bcf4-87108c47ee5c","type":"BasicTickFormatter"},"plot":{"id":"d544209c-df8b-4ae3-bf33-ccc5c92657fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"072f852f-d42e-4e89-a683-dedc95e1b201","type":"BasicTicker"}},"id":"aeb84f5f-7fa1-4781-a2d9-4f6dddefb097","type":"LinearAxis"},{"attributes":{"formatter":{"id":"c01a55ab-3017-4f71-8f88-9e7bde1a38bb","type":"BasicTickFormatter"},"plot":{"id":"d544209c-df8b-4ae3-bf33-ccc5c92657fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"660465dd-be65-4ddc-8437-84dc8474d434","type":"BasicTicker"}},"id":"036a47fd-2471-4f42-928c-244e6011fd81","type":"LinearAxis"}],"root_ids":["d544209c-df8b-4ae3-bf33-ccc5c92657fe"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"1a0ad639-7c11-4860-bfa0-857602553a64","elementid":"70ffbd24-058d-497b-a155-0bb97ebfafe0","modelid":"d544209c-df8b-4ae3-bf33-ccc5c92657fe"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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