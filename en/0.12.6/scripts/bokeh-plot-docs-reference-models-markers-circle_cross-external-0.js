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
      };var element = document.getElementById("20e6c54a-1dd0-4ff9-be27-8949144ac498");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '20e6c54a-1dd0-4ff9-be27-8949144ac498' but no matching script tag was found. ")
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
                var docs_json = {"1ddddbde-36a6-4a5f-86e2-f580904a62ef":{"roots":{"references":[{"attributes":{"formatter":{"id":"6caf8ee8-686e-4bef-b9fa-b5795034e193","type":"BasicTickFormatter"},"plot":{"id":"4e296c98-7f8c-436e-ab30-f8adac2f5539","type":"Plot"},"ticker":{"id":"8fe85f9d-44cc-44b9-9a1b-a833caeddb81","type":"BasicTicker"}},"id":"2a854d0a-2b8c-40e3-af67-b6e0baec5386","type":"LinearAxis"},{"attributes":{},"id":"dabb7871-5b91-4004-b1d9-cffa53bd87e0","type":"BasicTickFormatter"},{"attributes":{},"id":"37ac2351-a83b-41d1-89b5-91d2e8254581","type":"ToolEvents"},{"attributes":{"below":[{"id":"54669fd0-a545-4887-9386-888979190cf3","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"2a854d0a-2b8c-40e3-af67-b6e0baec5386","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"44409e1c-312b-4c91-85ff-14a603c181e8","type":"GlyphRenderer"},{"id":"54669fd0-a545-4887-9386-888979190cf3","type":"LinearAxis"},{"id":"2a854d0a-2b8c-40e3-af67-b6e0baec5386","type":"LinearAxis"},{"id":"a30a970a-0fde-432d-a34e-382bf2c5bcb2","type":"Grid"},{"id":"99ade76d-6a45-454f-a99b-1ee57ee9bf43","type":"Grid"}],"title":null,"tool_events":{"id":"37ac2351-a83b-41d1-89b5-91d2e8254581","type":"ToolEvents"},"toolbar":{"id":"200be6b5-5017-458d-b86d-6e783efe9267","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4724478e-b7c9-400c-97c1-014940d88ef8","type":"DataRange1d"},"x_scale":{"id":"ff0fc245-1545-4036-bae9-5360a3fd491c","type":"LinearScale"},"y_range":{"id":"9c76dc42-8b98-4c78-b6b0-fc8952dc196c","type":"DataRange1d"},"y_scale":{"id":"08e90c7c-2503-4e1e-abc4-6b3f91d14848","type":"LinearScale"}},"id":"4e296c98-7f8c-436e-ab30-f8adac2f5539","type":"Plot"},{"attributes":{},"id":"08e90c7c-2503-4e1e-abc4-6b3f91d14848","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"200be6b5-5017-458d-b86d-6e783efe9267","type":"Toolbar"},{"attributes":{"plot":{"id":"4e296c98-7f8c-436e-ab30-f8adac2f5539","type":"Plot"},"ticker":{"id":"30c6a3a2-d010-4ef1-9b4f-b6ada7cec29e","type":"BasicTicker"}},"id":"a30a970a-0fde-432d-a34e-382bf2c5bcb2","type":"Grid"},{"attributes":{"data_source":{"id":"41996c52-a4ed-4baa-90be-4a2df1e96e78","type":"ColumnDataSource"},"glyph":{"id":"2a770a91-5130-4562-859b-f708d85548e9","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null},"id":"44409e1c-312b-4c91-85ff-14a603c181e8","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"4724478e-b7c9-400c-97c1-014940d88ef8","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","sizes","x"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"41996c52-a4ed-4baa-90be-4a2df1e96e78","type":"ColumnDataSource"},{"attributes":{},"id":"ff0fc245-1545-4036-bae9-5360a3fd491c","type":"LinearScale"},{"attributes":{},"id":"30c6a3a2-d010-4ef1-9b4f-b6ada7cec29e","type":"BasicTicker"},{"attributes":{},"id":"6caf8ee8-686e-4bef-b9fa-b5795034e193","type":"BasicTickFormatter"},{"attributes":{},"id":"8fe85f9d-44cc-44b9-9a1b-a833caeddb81","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"4e296c98-7f8c-436e-ab30-f8adac2f5539","type":"Plot"},"ticker":{"id":"8fe85f9d-44cc-44b9-9a1b-a833caeddb81","type":"BasicTicker"}},"id":"99ade76d-6a45-454f-a99b-1ee57ee9bf43","type":"Grid"},{"attributes":{"formatter":{"id":"dabb7871-5b91-4004-b1d9-cffa53bd87e0","type":"BasicTickFormatter"},"plot":{"id":"4e296c98-7f8c-436e-ab30-f8adac2f5539","type":"Plot"},"ticker":{"id":"30c6a3a2-d010-4ef1-9b4f-b6ada7cec29e","type":"BasicTicker"}},"id":"54669fd0-a545-4887-9386-888979190cf3","type":"LinearAxis"},{"attributes":{"callback":null},"id":"9c76dc42-8b98-4c78-b6b0-fc8952dc196c","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fb8072"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2a770a91-5130-4562-859b-f708d85548e9","type":"CircleCross"}],"root_ids":["4e296c98-7f8c-436e-ab30-f8adac2f5539"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"1ddddbde-36a6-4a5f-86e2-f580904a62ef","elementid":"20e6c54a-1dd0-4ff9-be27-8949144ac498","modelid":"4e296c98-7f8c-436e-ab30-f8adac2f5539"}];
                
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
