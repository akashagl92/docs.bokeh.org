(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
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
      };var element = document.getElementById("fc26bb84-2564-4225-9283-ba790e576db1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fc26bb84-2564-4225-9283-ba790e576db1' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"42ea6faf-9643-4988-88dd-2fe0013a9c57":{"roots":{"references":[{"attributes":{},"id":"60333ec7-4b70-48e1-9fe8-24be08a607a4","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2cba17c0-6ca4-4775-8553-7651e37b0a40","type":"Circle"},{"attributes":{},"id":"8fdf5b7e-4065-4eae-b5c5-a5a0e57e4045","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"088f26ca-9b94-450a-8054-a802597b9db3","subtype":"Figure","type":"Plot"}},"id":"918d5574-4971-4aa0-ab2f-ca3214f95938","type":"HelpTool"},{"attributes":{"plot":{"id":"088f26ca-9b94-450a-8054-a802597b9db3","subtype":"Figure","type":"Plot"}},"id":"8f467d2c-ebab-4771-867a-173a4756c20f","type":"SaveTool"},{"attributes":{"below":[{"id":"873fd718-0271-4bc5-bce4-d28ef884da7f","type":"LinearAxis"}],"left":[{"id":"4cf2d14a-0584-4b73-b97b-b8c2653fbd72","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"873fd718-0271-4bc5-bce4-d28ef884da7f","type":"LinearAxis"},{"id":"bd4268f7-fde7-4d5d-9b04-62babf75eb12","type":"Grid"},{"id":"4cf2d14a-0584-4b73-b97b-b8c2653fbd72","type":"LinearAxis"},{"id":"8e20daac-9f92-4355-aa06-35323f2959f1","type":"Grid"},{"id":"576053f4-fd88-41c5-9ef0-c941dcdd2aa6","type":"BoxAnnotation"},{"id":"51e9e3e8-d5db-4bd7-9a4e-6b1919910bc5","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"60333ec7-4b70-48e1-9fe8-24be08a607a4","type":"ToolEvents"},"toolbar":{"id":"df415ff3-6fdd-4573-bec3-76ca1f3f2dee","type":"Toolbar"},"toolbar_location":"below","x_range":{"id":"6d3cc6ae-901d-48d6-95c2-b8ff77333a58","type":"DataRange1d"},"y_range":{"id":"ec77cb84-8086-4f12-9e22-0e75a395cf55","type":"DataRange1d"}},"id":"088f26ca-9b94-450a-8054-a802597b9db3","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"576053f4-fd88-41c5-9ef0-c941dcdd2aa6","type":"BoxAnnotation"},"plot":{"id":"088f26ca-9b94-450a-8054-a802597b9db3","subtype":"Figure","type":"Plot"}},"id":"aa2fd3bb-7081-4e8f-9e46-5a339c6f7567","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"ec77cb84-8086-4f12-9e22-0e75a395cf55","type":"DataRange1d"},{"attributes":{},"id":"2f44171d-00a3-431c-8337-3a77e89f2682","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"088f26ca-9b94-450a-8054-a802597b9db3","subtype":"Figure","type":"Plot"}},"id":"19addb44-93b5-4df1-a287-1e6f4f02f9b4","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"088f26ca-9b94-450a-8054-a802597b9db3","subtype":"Figure","type":"Plot"},"ticker":{"id":"394477e0-4841-45a7-83f3-34664ec035f0","type":"BasicTicker"}},"id":"bd4268f7-fde7-4d5d-9b04-62babf75eb12","type":"Grid"},{"attributes":{},"id":"7a00cedf-7de7-4234-9110-bdbecf8be6b5","type":"BasicTicker"},{"attributes":{"data_source":{"id":"aa3dacb7-57ea-4294-9fcd-d4bfbc53a4b7","type":"ColumnDataSource"},"glyph":{"id":"2cba17c0-6ca4-4775-8553-7651e37b0a40","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4ef72d20-12c8-4868-8abc-ca74d3bca1e8","type":"Circle"},"selection_glyph":null},"id":"51e9e3e8-d5db-4bd7-9a4e-6b1919910bc5","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"576053f4-fd88-41c5-9ef0-c941dcdd2aa6","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"6d3cc6ae-901d-48d6-95c2-b8ff77333a58","type":"DataRange1d"},{"attributes":{"formatter":{"id":"8fdf5b7e-4065-4eae-b5c5-a5a0e57e4045","type":"BasicTickFormatter"},"plot":{"id":"088f26ca-9b94-450a-8054-a802597b9db3","subtype":"Figure","type":"Plot"},"ticker":{"id":"394477e0-4841-45a7-83f3-34664ec035f0","type":"BasicTicker"}},"id":"873fd718-0271-4bc5-bce4-d28ef884da7f","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b5b7cb37-f8f2-4888-8ba1-887a090079b0","type":"PanTool"},{"id":"19addb44-93b5-4df1-a287-1e6f4f02f9b4","type":"WheelZoomTool"},{"id":"aa2fd3bb-7081-4e8f-9e46-5a339c6f7567","type":"BoxZoomTool"},{"id":"8f467d2c-ebab-4771-867a-173a4756c20f","type":"SaveTool"},{"id":"23983dcd-adf2-4d01-8bfc-a429193d5bd3","type":"ResetTool"},{"id":"918d5574-4971-4aa0-ab2f-ca3214f95938","type":"HelpTool"}]},"id":"df415ff3-6fdd-4573-bec3-76ca1f3f2dee","type":"Toolbar"},{"attributes":{"plot":{"id":"088f26ca-9b94-450a-8054-a802597b9db3","subtype":"Figure","type":"Plot"}},"id":"23983dcd-adf2-4d01-8bfc-a429193d5bd3","type":"ResetTool"},{"attributes":{"plot":{"id":"088f26ca-9b94-450a-8054-a802597b9db3","subtype":"Figure","type":"Plot"}},"id":"b5b7cb37-f8f2-4888-8ba1-887a090079b0","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4ef72d20-12c8-4868-8abc-ca74d3bca1e8","type":"Circle"},{"attributes":{},"id":"394477e0-4841-45a7-83f3-34664ec035f0","type":"BasicTicker"},{"attributes":{"formatter":{"id":"2f44171d-00a3-431c-8337-3a77e89f2682","type":"BasicTickFormatter"},"plot":{"id":"088f26ca-9b94-450a-8054-a802597b9db3","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a00cedf-7de7-4234-9110-bdbecf8be6b5","type":"BasicTicker"}},"id":"4cf2d14a-0584-4b73-b97b-b8c2653fbd72","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"aa3dacb7-57ea-4294-9fcd-d4bfbc53a4b7","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"088f26ca-9b94-450a-8054-a802597b9db3","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a00cedf-7de7-4234-9110-bdbecf8be6b5","type":"BasicTicker"}},"id":"8e20daac-9f92-4355-aa06-35323f2959f1","type":"Grid"}],"root_ids":["088f26ca-9b94-450a-8054-a802597b9db3"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"42ea6faf-9643-4988-88dd-2fe0013a9c57","elementid":"fc26bb84-2564-4225-9283-ba790e576db1","modelid":"088f26ca-9b94-450a-8054-a802597b9db3"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
