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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("3baaad46-29e0-4eff-af13-d415b0a9e732");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3baaad46-29e0-4eff-af13-d415b0a9e732' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"114eadf1-cac7-4f3f-8bd3-3e249cf157cc":{"roots":{"references":[{"attributes":{"below":[{"id":"49b558c2-07a8-4ad7-8bcc-bd1f6c1d56ee","type":"LinearAxis"}],"left":[{"id":"1e3da7df-300f-46db-be49-1d61410664d0","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"49b558c2-07a8-4ad7-8bcc-bd1f6c1d56ee","type":"LinearAxis"},{"id":"e79341f2-5f9a-422e-9595-5d77d4431971","type":"Grid"},{"id":"1e3da7df-300f-46db-be49-1d61410664d0","type":"LinearAxis"},{"id":"f9d81a9e-5ae4-49bf-81c0-303a4d7e3434","type":"Grid"},{"id":"2e67e28e-aa79-46f9-aa63-a6eaf2cb293d","type":"BoxAnnotation"},{"id":"0f568d3b-5efc-4d02-a692-d48f55f99483","type":"GlyphRenderer"}],"title":{"id":"b37e1b0f-3fac-46e8-a275-e04210f37d59","type":"Title"},"tool_events":{"id":"c2c0622d-26c8-47bf-bc18-43007d59ee4a","type":"ToolEvents"},"toolbar":{"id":"6549e07e-f4db-41a3-8711-f85e997cf014","type":"Toolbar"},"x_range":{"id":"c2b82146-fdc3-4585-b8b0-337b40ec1af4","type":"DataRange1d"},"x_scale":{"id":"2e1f5148-f05f-48eb-8c19-7e05145be72e","type":"LinearScale"},"y_range":{"id":"e54ed662-bd6b-47ab-9363-91073ae5c3be","type":"DataRange1d"},"y_scale":{"id":"f1573bd8-924b-4b73-b72c-2c316d9625f6","type":"LinearScale"}},"id":"755c3651-71fb-460b-959f-498d85c89028","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2e1f5148-f05f-48eb-8c19-7e05145be72e","type":"LinearScale"},{"attributes":{"plot":{"id":"755c3651-71fb-460b-959f-498d85c89028","subtype":"Figure","type":"Plot"}},"id":"c7d4ea69-b037-44a4-9c39-54b2cfcb12b8","type":"SaveTool"},{"attributes":{},"id":"1e89d75e-74b0-4ee9-a6cc-76c3dcb22ab7","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"911150a9-b0d6-484d-be5b-3481fb60c20b","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#DD1C77"},"line_color":{"value":"#DD1C77"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"4333c9dc-042d-435f-85a7-d455a1da1f79","type":"CircleX"},{"attributes":{"plot":{"id":"755c3651-71fb-460b-959f-498d85c89028","subtype":"Figure","type":"Plot"}},"id":"6ee64c63-706f-477c-8212-e0ea40ec5475","type":"PanTool"},{"attributes":{"callback":null},"id":"c2b82146-fdc3-4585-b8b0-337b40ec1af4","type":"DataRange1d"},{"attributes":{"data_source":{"id":"911150a9-b0d6-484d-be5b-3481fb60c20b","type":"ColumnDataSource"},"glyph":{"id":"4333c9dc-042d-435f-85a7-d455a1da1f79","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"da3a5a2d-d418-4e11-960e-12aec8ab9fdd","type":"CircleX"},"selection_glyph":null},"id":"0f568d3b-5efc-4d02-a692-d48f55f99483","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"755c3651-71fb-460b-959f-498d85c89028","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e89d75e-74b0-4ee9-a6cc-76c3dcb22ab7","type":"BasicTicker"}},"id":"f9d81a9e-5ae4-49bf-81c0-303a4d7e3434","type":"Grid"},{"attributes":{"formatter":{"id":"6651611c-ed4d-4041-8a3d-aa4c52ca96cc","type":"BasicTickFormatter"},"plot":{"id":"755c3651-71fb-460b-959f-498d85c89028","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e89d75e-74b0-4ee9-a6cc-76c3dcb22ab7","type":"BasicTicker"}},"id":"1e3da7df-300f-46db-be49-1d61410664d0","type":"LinearAxis"},{"attributes":{},"id":"5f998c63-77f2-42af-97d4-684e9552f9ec","type":"BasicTicker"},{"attributes":{"plot":{"id":"755c3651-71fb-460b-959f-498d85c89028","subtype":"Figure","type":"Plot"},"ticker":{"id":"5f998c63-77f2-42af-97d4-684e9552f9ec","type":"BasicTicker"}},"id":"e79341f2-5f9a-422e-9595-5d77d4431971","type":"Grid"},{"attributes":{},"id":"f1573bd8-924b-4b73-b72c-2c316d9625f6","type":"LinearScale"},{"attributes":{},"id":"c2c0622d-26c8-47bf-bc18-43007d59ee4a","type":"ToolEvents"},{"attributes":{"callback":null},"id":"e54ed662-bd6b-47ab-9363-91073ae5c3be","type":"DataRange1d"},{"attributes":{"overlay":{"id":"2e67e28e-aa79-46f9-aa63-a6eaf2cb293d","type":"BoxAnnotation"},"plot":{"id":"755c3651-71fb-460b-959f-498d85c89028","subtype":"Figure","type":"Plot"}},"id":"522b227e-79f8-4d7b-98ab-13a40838338f","type":"BoxZoomTool"},{"attributes":{},"id":"6651611c-ed4d-4041-8a3d-aa4c52ca96cc","type":"BasicTickFormatter"},{"attributes":{},"id":"2eb1d8f8-2cb4-4be5-800d-8630cc2cadd4","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"755c3651-71fb-460b-959f-498d85c89028","subtype":"Figure","type":"Plot"}},"id":"166ebc8b-f707-4f45-b317-b6bcebaad667","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"b37e1b0f-3fac-46e8-a275-e04210f37d59","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"da3a5a2d-d418-4e11-960e-12aec8ab9fdd","type":"CircleX"},{"attributes":{"plot":{"id":"755c3651-71fb-460b-959f-498d85c89028","subtype":"Figure","type":"Plot"}},"id":"327e1808-9acb-488d-a142-54a57cfae76c","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6ee64c63-706f-477c-8212-e0ea40ec5475","type":"PanTool"},{"id":"3de1ffc2-e154-409e-8d35-34b5c002080b","type":"WheelZoomTool"},{"id":"522b227e-79f8-4d7b-98ab-13a40838338f","type":"BoxZoomTool"},{"id":"c7d4ea69-b037-44a4-9c39-54b2cfcb12b8","type":"SaveTool"},{"id":"327e1808-9acb-488d-a142-54a57cfae76c","type":"ResetTool"},{"id":"166ebc8b-f707-4f45-b317-b6bcebaad667","type":"HelpTool"}]},"id":"6549e07e-f4db-41a3-8711-f85e997cf014","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2e67e28e-aa79-46f9-aa63-a6eaf2cb293d","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"755c3651-71fb-460b-959f-498d85c89028","subtype":"Figure","type":"Plot"}},"id":"3de1ffc2-e154-409e-8d35-34b5c002080b","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"2eb1d8f8-2cb4-4be5-800d-8630cc2cadd4","type":"BasicTickFormatter"},"plot":{"id":"755c3651-71fb-460b-959f-498d85c89028","subtype":"Figure","type":"Plot"},"ticker":{"id":"5f998c63-77f2-42af-97d4-684e9552f9ec","type":"BasicTicker"}},"id":"49b558c2-07a8-4ad7-8bcc-bd1f6c1d56ee","type":"LinearAxis"}],"root_ids":["755c3651-71fb-460b-959f-498d85c89028"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"114eadf1-cac7-4f3f-8bd3-3e249cf157cc","elementid":"3baaad46-29e0-4eff-af13-d415b0a9e732","modelid":"755c3651-71fb-460b-959f-498d85c89028"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
