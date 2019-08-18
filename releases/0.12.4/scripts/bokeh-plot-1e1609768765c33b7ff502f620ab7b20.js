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
      };var element = document.getElementById("cd357445-9bd7-4ae7-8057-0efb14c081e6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cd357445-9bd7-4ae7-8057-0efb14c081e6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"0aab3925-de42-40c3-b3b3-51615c28bae0":{"roots":{"references":[{"attributes":{},"id":"8cd36769-32de-4e0b-9bfb-928975e4e4ab","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"322ea1b4-ddc3-41e1-8f54-9991b8b7b254","type":"ColumnDataSource"},"glyph":{"id":"04117920-1f7a-456e-8205-40fa5e85791b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"322472d5-0a7f-4d12-af7e-6f21a7bba469","type":"Circle"},"selection_glyph":null},"id":"96496a03-ee97-453c-9f59-3b38ab258fea","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"ec8adbd8-2b1b-412c-8c2f-1b9730855834","subtype":"Figure","type":"Plot"}},"id":"84e0bb3a-90fc-4ccb-926a-012a16fc8988","type":"SaveTool"},{"attributes":{"callback":null},"id":"16b8810f-5fa4-4844-a351-ef8014b10225","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"ec8adbd8-2b1b-412c-8c2f-1b9730855834","subtype":"Figure","type":"Plot"},"ticker":{"id":"9da8b017-c536-4039-b4fe-5d9a8a796524","type":"BasicTicker"}},"id":"0df9f749-ffb8-41a6-9f2a-22c8e791b0f4","type":"Grid"},{"attributes":{"formatter":{"id":"8cd36769-32de-4e0b-9bfb-928975e4e4ab","type":"BasicTickFormatter"},"plot":{"id":"ec8adbd8-2b1b-412c-8c2f-1b9730855834","subtype":"Figure","type":"Plot"},"ticker":{"id":"0d9300f3-79f0-4ffb-8667-abf29148bd83","type":"BasicTicker"}},"id":"e03a9cfc-e2d0-4a5c-b913-f422c0406790","type":"LinearAxis"},{"attributes":{"formatter":{"id":"a72df002-a0e5-42e0-afc9-688792d2ccdf","type":"BasicTickFormatter"},"plot":{"id":"ec8adbd8-2b1b-412c-8c2f-1b9730855834","subtype":"Figure","type":"Plot"},"ticker":{"id":"9da8b017-c536-4039-b4fe-5d9a8a796524","type":"BasicTicker"}},"id":"7ea0e5b3-fc96-4613-8298-3734e8abe771","type":"LinearAxis"},{"attributes":{},"id":"1c9202ea-0fdb-488c-8154-51e09dce5cff","type":"ToolEvents"},{"attributes":{},"id":"9da8b017-c536-4039-b4fe-5d9a8a796524","type":"BasicTicker"},{"attributes":{"callback":null},"id":"20a1a04a-440b-41e3-b22f-dec4559f0732","type":"DataRange1d"},{"attributes":{"plot":{"id":"ec8adbd8-2b1b-412c-8c2f-1b9730855834","subtype":"Figure","type":"Plot"}},"id":"62cddd63-0299-42ad-b720-7940a6b2d63b","type":"PanTool"},{"attributes":{},"id":"a72df002-a0e5-42e0-afc9-688792d2ccdf","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"e03a9cfc-e2d0-4a5c-b913-f422c0406790","type":"LinearAxis"}],"left":[{"id":"7ea0e5b3-fc96-4613-8298-3734e8abe771","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e03a9cfc-e2d0-4a5c-b913-f422c0406790","type":"LinearAxis"},{"id":"4edf3424-f05d-4d27-af31-be38465e491d","type":"Grid"},{"id":"7ea0e5b3-fc96-4613-8298-3734e8abe771","type":"LinearAxis"},{"id":"0df9f749-ffb8-41a6-9f2a-22c8e791b0f4","type":"Grid"},{"id":"96496a03-ee97-453c-9f59-3b38ab258fea","type":"GlyphRenderer"}],"title":{"id":"cdc94193-656d-47f7-a05a-727acf6731c6","type":"Title"},"tool_events":{"id":"1c9202ea-0fdb-488c-8154-51e09dce5cff","type":"ToolEvents"},"toolbar":{"id":"24f1284e-1d87-43c8-838e-1ae91797a26c","type":"Toolbar"},"x_range":{"id":"16b8810f-5fa4-4844-a351-ef8014b10225","type":"DataRange1d"},"y_range":{"id":"20a1a04a-440b-41e3-b22f-dec4559f0732","type":"DataRange1d"}},"id":"ec8adbd8-2b1b-412c-8c2f-1b9730855834","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"ec8adbd8-2b1b-412c-8c2f-1b9730855834","subtype":"Figure","type":"Plot"},"ticker":{"id":"0d9300f3-79f0-4ffb-8667-abf29148bd83","type":"BasicTicker"}},"id":"4edf3424-f05d-4d27-af31-be38465e491d","type":"Grid"},{"attributes":{"plot":{"id":"ec8adbd8-2b1b-412c-8c2f-1b9730855834","subtype":"Figure","type":"Plot"}},"id":"326052a1-d935-40ac-80a3-aff5baa2e52d","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2.5,3,2],"y":[2,3,1,1.5]}},"id":"322ea1b4-ddc3-41e1-8f54-9991b8b7b254","type":"ColumnDataSource"},{"attributes":{},"id":"0d9300f3-79f0-4ffb-8667-abf29148bd83","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"322472d5-0a7f-4d12-af7e-6f21a7bba469","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"04117920-1f7a-456e-8205-40fa5e85791b","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"62cddd63-0299-42ad-b720-7940a6b2d63b","type":"PanTool"},{"id":"326052a1-d935-40ac-80a3-aff5baa2e52d","type":"ResetTool"},{"id":"84e0bb3a-90fc-4ccb-926a-012a16fc8988","type":"SaveTool"}]},"id":"24f1284e-1d87-43c8-838e-1ae91797a26c","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"cdc94193-656d-47f7-a05a-727acf6731c6","type":"Title"}],"root_ids":["ec8adbd8-2b1b-412c-8c2f-1b9730855834"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"0aab3925-de42-40c3-b3b3-51615c28bae0","elementid":"cd357445-9bd7-4ae7-8057-0efb14c081e6","modelid":"ec8adbd8-2b1b-412c-8c2f-1b9730855834"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
