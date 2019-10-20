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
      };var element = document.getElementById("14eb322b-2285-40ee-ad6d-d9d2d0485487");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '14eb322b-2285-40ee-ad6d-d9d2d0485487' but no matching script tag was found. ")
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
                var docs_json = {"f9eae167-77b0-4378-9cee-5dfa8aacb24c":{"roots":{"references":[{"attributes":{"callback":null},"id":"e440e9f6-514d-4424-918a-c33658d5378c","type":"DataRange1d"},{"attributes":{},"id":"6b6b69e5-fb50-4d29-a416-e516dcf9ebf9","type":"BasicTicker"},{"attributes":{"plot":{"id":"1b5aff23-a28b-431d-9a84-04b4fca756f2","type":"Plot"},"ticker":{"id":"2d651ec5-b44f-4309-a073-1a7bb3fccbcb","type":"BasicTicker"}},"id":"20340b5b-41ab-4d42-80a1-2e8eedb2e969","type":"Grid"},{"attributes":{"formatter":{"id":"61fea66b-8e94-4c3f-96fd-75928b39efcd","type":"BasicTickFormatter"},"plot":{"id":"1b5aff23-a28b-431d-9a84-04b4fca756f2","type":"Plot"},"ticker":{"id":"2d651ec5-b44f-4309-a073-1a7bb3fccbcb","type":"BasicTicker"}},"id":"a9131738-1266-40a7-a46a-e38239a4a758","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"1b5aff23-a28b-431d-9a84-04b4fca756f2","type":"Plot"},"ticker":{"id":"6b6b69e5-fb50-4d29-a416-e516dcf9ebf9","type":"BasicTicker"}},"id":"04aaaff3-a3f7-47fc-b83f-9ec2f6e87912","type":"Grid"},{"attributes":{"fill_color":{"value":"#7fc97f"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"8f8583a2-b3ba-410e-9513-445d608c7c1c","type":"Annulus"},{"attributes":{"callback":null},"id":"50c16d69-135a-4bf6-852f-b970bc2f43d4","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"3123028f-fc80-48e8-af7b-576c47086bfa","type":"Toolbar"},{"attributes":{},"id":"7f8fe030-8c70-43bc-9cd0-89fe8bf4cd8e","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"be3004ed-85cd-448b-bd38-12404f3b3134","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"a9131738-1266-40a7-a46a-e38239a4a758","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"87eb749a-0af4-463e-b080-abce2251e14e","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"7f84d280-b201-4119-8866-8c52d11d30d9","type":"GlyphRenderer"},{"id":"a9131738-1266-40a7-a46a-e38239a4a758","type":"LinearAxis"},{"id":"87eb749a-0af4-463e-b080-abce2251e14e","type":"LinearAxis"},{"id":"20340b5b-41ab-4d42-80a1-2e8eedb2e969","type":"Grid"},{"id":"04aaaff3-a3f7-47fc-b83f-9ec2f6e87912","type":"Grid"}],"title":null,"tool_events":{"id":"7f8fe030-8c70-43bc-9cd0-89fe8bf4cd8e","type":"ToolEvents"},"toolbar":{"id":"3123028f-fc80-48e8-af7b-576c47086bfa","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"50c16d69-135a-4bf6-852f-b970bc2f43d4","type":"DataRange1d"},"y_range":{"id":"e440e9f6-514d-4424-918a-c33658d5378c","type":"DataRange1d"}},"id":"1b5aff23-a28b-431d-9a84-04b4fca756f2","type":"Plot"},{"attributes":{},"id":"61fea66b-8e94-4c3f-96fd-75928b39efcd","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"3d8dc6ce-146d-4ff5-8ce1-e8cc482f3959","type":"BasicTickFormatter"},"plot":{"id":"1b5aff23-a28b-431d-9a84-04b4fca756f2","type":"Plot"},"ticker":{"id":"6b6b69e5-fb50-4d29-a416-e516dcf9ebf9","type":"BasicTicker"}},"id":"87eb749a-0af4-463e-b080-abce2251e14e","type":"LinearAxis"},{"attributes":{"data_source":{"id":"be3004ed-85cd-448b-bd38-12404f3b3134","type":"ColumnDataSource"},"glyph":{"id":"8f8583a2-b3ba-410e-9513-445d608c7c1c","type":"Annulus"},"hover_glyph":null,"muted_glyph":null},"id":"7f84d280-b201-4119-8866-8c52d11d30d9","type":"GlyphRenderer"},{"attributes":{},"id":"2d651ec5-b44f-4309-a073-1a7bb3fccbcb","type":"BasicTicker"},{"attributes":{},"id":"3d8dc6ce-146d-4ff5-8ce1-e8cc482f3959","type":"BasicTickFormatter"}],"root_ids":["1b5aff23-a28b-431d-9a84-04b4fca756f2"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"f9eae167-77b0-4378-9cee-5dfa8aacb24c","elementid":"14eb322b-2285-40ee-ad6d-d9d2d0485487","modelid":"1b5aff23-a28b-431d-9a84-04b4fca756f2"}];
                
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
