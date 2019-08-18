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
      };var element = document.getElementById("23708cd6-7d26-4dcd-b66c-ca941176e0f1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '23708cd6-7d26-4dcd-b66c-ca941176e0f1' but no matching script tag was found. ")
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
                var docs_json = {"4ed153b8-21fe-4efc-90bd-c702897edc52":{"roots":{"references":[{"attributes":{"plot":{"id":"c8bca3cc-aaa0-4370-a1b6-f2c1356aedb9","subtype":"Figure","type":"Plot"}},"id":"9978810c-20ad-46b5-b6cc-f43916a4b5a7","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"c8bca3cc-aaa0-4370-a1b6-f2c1356aedb9","subtype":"Figure","type":"Plot"}},"id":"544a4924-0ab7-48ad-a657-3c1c3ea28a71","type":"ResetTool"},{"attributes":{},"id":"92d679e9-078d-4f4d-9583-f8a23c28114b","type":"LinearScale"},{"attributes":{},"id":"04b2c1bb-ead0-4409-ac19-14e6eda38a46","type":"BasicTicker"},{"attributes":{},"id":"1bbf0035-9ddd-443c-928d-47cf2a9f8555","type":"ToolEvents"},{"attributes":{},"id":"7421ef45-14e7-4905-9b92-0ffe36c88a9d","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"80874da1-0866-4c5e-9dc2-b501ed5c3916","type":"DataRange1d"},{"attributes":{"formatter":{"id":"26428e14-89ff-4e07-a155-eeae3e70eaf6","type":"BasicTickFormatter"},"plot":{"id":"c8bca3cc-aaa0-4370-a1b6-f2c1356aedb9","subtype":"Figure","type":"Plot"},"ticker":{"id":"04b2c1bb-ead0-4409-ac19-14e6eda38a46","type":"BasicTicker"}},"id":"41db45dc-e858-4d9d-a450-caf5bf7d50ca","type":"LinearAxis"},{"attributes":{"plot":{"id":"c8bca3cc-aaa0-4370-a1b6-f2c1356aedb9","subtype":"Figure","type":"Plot"},"ticker":{"id":"9881a977-b0d2-48fb-940c-6808d2d446ec","type":"BasicTicker"}},"id":"0e6b1cc0-d68f-497f-b45e-2e1576d86d53","type":"Grid"},{"attributes":{},"id":"290d42ff-4205-452b-954b-44a51d38ffcd","type":"LinearScale"},{"attributes":{"fill_color":{"value":"navy"},"height":{"value":0.5},"line_color":{"value":"navy"},"right":{"field":"right"},"y":{"field":"y"}},"id":"f41acd4b-35b9-4973-bb28-381097cfbd61","type":"HBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6c072325-545f-4465-9b80-2b5e4ee92529","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cf206e71-e834-4caf-874d-15872805ede3","type":"PanTool"},{"id":"9978810c-20ad-46b5-b6cc-f43916a4b5a7","type":"WheelZoomTool"},{"id":"6d802d44-2571-4b55-9128-ce76be880ee7","type":"BoxZoomTool"},{"id":"9c001444-d91d-4358-9bcf-de157cf66e78","type":"SaveTool"},{"id":"544a4924-0ab7-48ad-a657-3c1c3ea28a71","type":"ResetTool"},{"id":"d0ccdb75-fbe7-4691-a266-230c05a81f0e","type":"HelpTool"}]},"id":"43528559-285a-48d0-ab1c-3930ca489380","type":"Toolbar"},{"attributes":{"below":[{"id":"742735fa-6379-4ff7-a7b4-d9a3e1994b08","type":"LinearAxis"}],"left":[{"id":"41db45dc-e858-4d9d-a450-caf5bf7d50ca","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"742735fa-6379-4ff7-a7b4-d9a3e1994b08","type":"LinearAxis"},{"id":"0e6b1cc0-d68f-497f-b45e-2e1576d86d53","type":"Grid"},{"id":"41db45dc-e858-4d9d-a450-caf5bf7d50ca","type":"LinearAxis"},{"id":"5780e058-4f4b-4b47-a164-2ef4b3144620","type":"Grid"},{"id":"6c072325-545f-4465-9b80-2b5e4ee92529","type":"BoxAnnotation"},{"id":"13544925-83a4-4c6c-8249-1af0cd9425e3","type":"GlyphRenderer"}],"title":{"id":"ca104b5a-e046-4573-97e3-80147879e25f","type":"Title"},"tool_events":{"id":"1bbf0035-9ddd-443c-928d-47cf2a9f8555","type":"ToolEvents"},"toolbar":{"id":"43528559-285a-48d0-ab1c-3930ca489380","type":"Toolbar"},"x_range":{"id":"80874da1-0866-4c5e-9dc2-b501ed5c3916","type":"DataRange1d"},"x_scale":{"id":"92d679e9-078d-4f4d-9583-f8a23c28114b","type":"LinearScale"},"y_range":{"id":"66df1ed2-925f-4fc8-90b0-997ea76849f7","type":"DataRange1d"},"y_scale":{"id":"290d42ff-4205-452b-954b-44a51d38ffcd","type":"LinearScale"}},"id":"c8bca3cc-aaa0-4370-a1b6-f2c1356aedb9","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9881a977-b0d2-48fb-940c-6808d2d446ec","type":"BasicTicker"},{"attributes":{},"id":"26428e14-89ff-4e07-a155-eeae3e70eaf6","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"c8bca3cc-aaa0-4370-a1b6-f2c1356aedb9","subtype":"Figure","type":"Plot"},"ticker":{"id":"04b2c1bb-ead0-4409-ac19-14e6eda38a46","type":"BasicTicker"}},"id":"5780e058-4f4b-4b47-a164-2ef4b3144620","type":"Grid"},{"attributes":{"plot":{"id":"c8bca3cc-aaa0-4370-a1b6-f2c1356aedb9","subtype":"Figure","type":"Plot"}},"id":"d0ccdb75-fbe7-4691-a266-230c05a81f0e","type":"HelpTool"},{"attributes":{"formatter":{"id":"7421ef45-14e7-4905-9b92-0ffe36c88a9d","type":"BasicTickFormatter"},"plot":{"id":"c8bca3cc-aaa0-4370-a1b6-f2c1356aedb9","subtype":"Figure","type":"Plot"},"ticker":{"id":"9881a977-b0d2-48fb-940c-6808d2d446ec","type":"BasicTicker"}},"id":"742735fa-6379-4ff7-a7b4-d9a3e1994b08","type":"LinearAxis"},{"attributes":{"data_source":{"id":"6b1550c4-31db-4b31-ab80-83854ebe2fa0","type":"ColumnDataSource"},"glyph":{"id":"f41acd4b-35b9-4973-bb28-381097cfbd61","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ae7acd65-2e0f-401b-b19c-6cec9f70d7eb","type":"HBar"},"selection_glyph":null},"id":"13544925-83a4-4c6c-8249-1af0cd9425e3","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"ae7acd65-2e0f-401b-b19c-6cec9f70d7eb","type":"HBar"},{"attributes":{"callback":null},"id":"66df1ed2-925f-4fc8-90b0-997ea76849f7","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"ca104b5a-e046-4573-97e3-80147879e25f","type":"Title"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":[1.2,2.5,3.7],"y":[1,2,3]}},"id":"6b1550c4-31db-4b31-ab80-83854ebe2fa0","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c8bca3cc-aaa0-4370-a1b6-f2c1356aedb9","subtype":"Figure","type":"Plot"}},"id":"9c001444-d91d-4358-9bcf-de157cf66e78","type":"SaveTool"},{"attributes":{"plot":{"id":"c8bca3cc-aaa0-4370-a1b6-f2c1356aedb9","subtype":"Figure","type":"Plot"}},"id":"cf206e71-e834-4caf-874d-15872805ede3","type":"PanTool"},{"attributes":{"overlay":{"id":"6c072325-545f-4465-9b80-2b5e4ee92529","type":"BoxAnnotation"},"plot":{"id":"c8bca3cc-aaa0-4370-a1b6-f2c1356aedb9","subtype":"Figure","type":"Plot"}},"id":"6d802d44-2571-4b55-9128-ce76be880ee7","type":"BoxZoomTool"}],"root_ids":["c8bca3cc-aaa0-4370-a1b6-f2c1356aedb9"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"4ed153b8-21fe-4efc-90bd-c702897edc52","elementid":"23708cd6-7d26-4dcd-b66c-ca941176e0f1","modelid":"c8bca3cc-aaa0-4370-a1b6-f2c1356aedb9"}];
                
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
