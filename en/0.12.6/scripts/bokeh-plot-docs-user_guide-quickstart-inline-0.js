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
      };var element = document.getElementById("09b86733-4c5d-44a7-ab17-01ec4710e103");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '09b86733-4c5d-44a7-ab17-01ec4710e103' but no matching script tag was found. ")
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
                var docs_json = {"ea533c54-8b13-4dd9-ad30-e5816fc09e18":{"roots":{"references":[{"attributes":{},"id":"1a556eb9-b263-472e-92ea-245d80b367a0","type":"LinearScale"},{"attributes":{"data_source":{"id":"ac12d9b2-3e43-4d97-84c1-278b03f66fe8","type":"ColumnDataSource"},"glyph":{"id":"bc6950f8-a463-4cca-be9a-65180d11df56","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a752fa9f-f474-43d6-b460-d8d127ccc0d9","type":"Line"},"selection_glyph":null},"id":"70531b46-6f80-4b91-9ee3-f09dc54caa65","type":"GlyphRenderer"},{"attributes":{},"id":"7ab10d75-d337-4c4e-8f91-8a155d953689","type":"ToolEvents"},{"attributes":{"overlay":{"id":"4b90dd4f-8047-449d-910d-91d429e4a889","type":"BoxAnnotation"},"plot":{"id":"adce800f-8a2e-4495-bbc2-52ac58af2ecb","subtype":"Figure","type":"Plot"}},"id":"4c3658b3-1558-4ad5-aa14-5f3222b29e03","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"simple line example"},"id":"ea81b9ef-a43a-4fd5-998f-fd896257bdf3","type":"Title"},{"attributes":{"axis_label":"x","formatter":{"id":"0b152f49-17b5-4d6d-b535-3e92c773fecf","type":"BasicTickFormatter"},"plot":{"id":"adce800f-8a2e-4495-bbc2-52ac58af2ecb","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2890d7c-4753-422a-a678-f3f3fc237ff9","type":"BasicTicker"}},"id":"777e3246-f4e3-4c72-9d9d-3b0296a1ffbc","type":"LinearAxis"},{"attributes":{"plot":{"id":"adce800f-8a2e-4495-bbc2-52ac58af2ecb","subtype":"Figure","type":"Plot"}},"id":"e87586c8-e4cc-4653-9c01-82edfd96b2d7","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"adce800f-8a2e-4495-bbc2-52ac58af2ecb","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a37e044-8360-442c-b5c1-27b410b56afd","type":"BasicTicker"}},"id":"0c58bb5e-5c6f-418f-826d-39472fd5609e","type":"Grid"},{"attributes":{"plot":{"id":"adce800f-8a2e-4495-bbc2-52ac58af2ecb","subtype":"Figure","type":"Plot"}},"id":"62d6add2-dd1e-4927-96dd-b28946a74d66","type":"ResetTool"},{"attributes":{},"id":"b9d04af6-9025-447c-af58-c89a1f3faeeb","type":"LinearScale"},{"attributes":{},"id":"0169a4fc-3ca2-41d4-8b54-1c345ad9006b","type":"BasicTickFormatter"},{"attributes":{},"id":"8a37e044-8360-442c-b5c1-27b410b56afd","type":"BasicTicker"},{"attributes":{},"id":"e2890d7c-4753-422a-a678-f3f3fc237ff9","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"bc6950f8-a463-4cca-be9a-65180d11df56","type":"Line"},{"attributes":{"plot":{"id":"adce800f-8a2e-4495-bbc2-52ac58af2ecb","subtype":"Figure","type":"Plot"}},"id":"7e3b15f2-0743-41cc-b3c6-046ea4f9d669","type":"SaveTool"},{"attributes":{"label":{"value":"Temp."},"renderers":[{"id":"70531b46-6f80-4b91-9ee3-f09dc54caa65","type":"GlyphRenderer"}]},"id":"4ac86465-f7f1-4d0d-bec2-6a4ac12ef476","type":"LegendItem"},{"attributes":{},"id":"0b152f49-17b5-4d6d-b535-3e92c773fecf","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"ac12d9b2-3e43-4d97-84c1-278b03f66fe8","type":"ColumnDataSource"},{"attributes":{"axis_label":"y","formatter":{"id":"0169a4fc-3ca2-41d4-8b54-1c345ad9006b","type":"BasicTickFormatter"},"plot":{"id":"adce800f-8a2e-4495-bbc2-52ac58af2ecb","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a37e044-8360-442c-b5c1-27b410b56afd","type":"BasicTicker"}},"id":"59e8bceb-7783-4dd9-96c6-829c2183e5b3","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"a752fa9f-f474-43d6-b460-d8d127ccc0d9","type":"Line"},{"attributes":{"callback":null},"id":"2711e7b7-bdc2-4ce8-baa9-606eee2bcca0","type":"DataRange1d"},{"attributes":{"callback":null},"id":"3960ae06-566c-48e6-bd86-cc4ce2e0208a","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d3e6c009-011a-4a68-a3a3-3695b372094f","type":"PanTool"},{"id":"2a063f22-4194-4c7d-98e7-0c12b4ed1ed6","type":"WheelZoomTool"},{"id":"4c3658b3-1558-4ad5-aa14-5f3222b29e03","type":"BoxZoomTool"},{"id":"7e3b15f2-0743-41cc-b3c6-046ea4f9d669","type":"SaveTool"},{"id":"62d6add2-dd1e-4927-96dd-b28946a74d66","type":"ResetTool"},{"id":"e87586c8-e4cc-4653-9c01-82edfd96b2d7","type":"HelpTool"}]},"id":"104bd723-614c-4297-8951-18805f80874b","type":"Toolbar"},{"attributes":{"items":[{"id":"4ac86465-f7f1-4d0d-bec2-6a4ac12ef476","type":"LegendItem"}],"plot":{"id":"adce800f-8a2e-4495-bbc2-52ac58af2ecb","subtype":"Figure","type":"Plot"}},"id":"b195c697-469d-44dd-9c8e-ed0d60d60bb2","type":"Legend"},{"attributes":{"plot":{"id":"adce800f-8a2e-4495-bbc2-52ac58af2ecb","subtype":"Figure","type":"Plot"}},"id":"2a063f22-4194-4c7d-98e7-0c12b4ed1ed6","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4b90dd4f-8047-449d-910d-91d429e4a889","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"777e3246-f4e3-4c72-9d9d-3b0296a1ffbc","type":"LinearAxis"}],"left":[{"id":"59e8bceb-7783-4dd9-96c6-829c2183e5b3","type":"LinearAxis"}],"renderers":[{"id":"777e3246-f4e3-4c72-9d9d-3b0296a1ffbc","type":"LinearAxis"},{"id":"d9154bb7-da27-4ff9-9204-bfb48f9ea352","type":"Grid"},{"id":"59e8bceb-7783-4dd9-96c6-829c2183e5b3","type":"LinearAxis"},{"id":"0c58bb5e-5c6f-418f-826d-39472fd5609e","type":"Grid"},{"id":"4b90dd4f-8047-449d-910d-91d429e4a889","type":"BoxAnnotation"},{"id":"b195c697-469d-44dd-9c8e-ed0d60d60bb2","type":"Legend"},{"id":"70531b46-6f80-4b91-9ee3-f09dc54caa65","type":"GlyphRenderer"}],"title":{"id":"ea81b9ef-a43a-4fd5-998f-fd896257bdf3","type":"Title"},"tool_events":{"id":"7ab10d75-d337-4c4e-8f91-8a155d953689","type":"ToolEvents"},"toolbar":{"id":"104bd723-614c-4297-8951-18805f80874b","type":"Toolbar"},"x_range":{"id":"3960ae06-566c-48e6-bd86-cc4ce2e0208a","type":"DataRange1d"},"x_scale":{"id":"b9d04af6-9025-447c-af58-c89a1f3faeeb","type":"LinearScale"},"y_range":{"id":"2711e7b7-bdc2-4ce8-baa9-606eee2bcca0","type":"DataRange1d"},"y_scale":{"id":"1a556eb9-b263-472e-92ea-245d80b367a0","type":"LinearScale"}},"id":"adce800f-8a2e-4495-bbc2-52ac58af2ecb","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"adce800f-8a2e-4495-bbc2-52ac58af2ecb","subtype":"Figure","type":"Plot"}},"id":"d3e6c009-011a-4a68-a3a3-3695b372094f","type":"PanTool"},{"attributes":{"plot":{"id":"adce800f-8a2e-4495-bbc2-52ac58af2ecb","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2890d7c-4753-422a-a678-f3f3fc237ff9","type":"BasicTicker"}},"id":"d9154bb7-da27-4ff9-9204-bfb48f9ea352","type":"Grid"}],"root_ids":["adce800f-8a2e-4495-bbc2-52ac58af2ecb"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"ea533c54-8b13-4dd9-ad30-e5816fc09e18","elementid":"09b86733-4c5d-44a7-ab17-01ec4710e103","modelid":"adce800f-8a2e-4495-bbc2-52ac58af2ecb"}];
                
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
