(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("09d73721-baba-4624-a88b-7d72408364f1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '09d73721-baba-4624-a88b-7d72408364f1' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"78e4ca53-35a8-4a1b-a92c-f6ceab6839d9":{"roots":{"references":[{"attributes":{"formatter":{"id":"1399e7ee-9f35-4a6e-a6d3-4c7d9f0398b4","type":"BasicTickFormatter"},"plot":{"id":"e738dfb9-225d-4cbe-8b31-4fd9a9985c44","type":"Plot"},"ticker":{"id":"4ccb725b-82bf-4ba1-b0b3-00bdae7caefc","type":"BasicTicker"}},"id":"c6e04fbd-f2e2-45a4-bcb3-226f86c42711","type":"LinearAxis"},{"attributes":{},"id":"1399e7ee-9f35-4a6e-a6d3-4c7d9f0398b4","type":"BasicTickFormatter"},{"attributes":{},"id":"4ccb725b-82bf-4ba1-b0b3-00bdae7caefc","type":"BasicTicker"},{"attributes":{"data_source":{"id":"c5b4cbac-109e-455a-8adc-c4eb7bb1a5dd","type":"ColumnDataSource"},"glyph":{"id":"e6ca55c4-deef-4ffb-bb28-2d274448783a","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"18fbc2a2-d185-492c-bb1c-71e783404fff","type":"CDSView"}},"id":"036e17ee-ec5a-4d57-83a2-f913ccc20fce","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"deb32871-8f4c-4cbe-aab3-b2193483ef2e","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"c6e04fbd-f2e2-45a4-bcb3-226f86c42711","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"036e17ee-ec5a-4d57-83a2-f913ccc20fce","type":"GlyphRenderer"},{"id":"deb32871-8f4c-4cbe-aab3-b2193483ef2e","type":"LinearAxis"},{"id":"c6e04fbd-f2e2-45a4-bcb3-226f86c42711","type":"LinearAxis"},{"id":"9bb0c101-cc23-4082-a802-cd793e468420","type":"Grid"},{"id":"74bb858a-0a78-4980-9743-dbf54c75a4ab","type":"Grid"}],"title":null,"toolbar":{"id":"13deb771-6119-4eb9-9ab3-66bf92611f5d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1bd5fc5b-79a5-45c9-b2da-86d59fa59e31","type":"DataRange1d"},"x_scale":{"id":"d2b31622-4b32-4d19-bb56-e18fb1497f9b","type":"LinearScale"},"y_range":{"id":"1d58cb60-cec7-4aa6-940c-888c93cd2a34","type":"DataRange1d"},"y_scale":{"id":"d0b4773b-9f9a-4ed7-abb3-9f8ef8e90e66","type":"LinearScale"}},"id":"e738dfb9-225d-4cbe-8b31-4fd9a9985c44","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"c5b4cbac-109e-455a-8adc-c4eb7bb1a5dd","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"e738dfb9-225d-4cbe-8b31-4fd9a9985c44","type":"Plot"},"ticker":{"id":"4ccb725b-82bf-4ba1-b0b3-00bdae7caefc","type":"BasicTicker"}},"id":"74bb858a-0a78-4980-9743-dbf54c75a4ab","type":"Grid"},{"attributes":{},"id":"d0b4773b-9f9a-4ed7-abb3-9f8ef8e90e66","type":"LinearScale"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fb8072"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e6ca55c4-deef-4ffb-bb28-2d274448783a","type":"CircleCross"},{"attributes":{},"id":"7dd37bdd-4d75-4009-aa98-f6cf3b2675b6","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"1d58cb60-cec7-4aa6-940c-888c93cd2a34","type":"DataRange1d"},{"attributes":{},"id":"d2b31622-4b32-4d19-bb56-e18fb1497f9b","type":"LinearScale"},{"attributes":{"source":{"id":"c5b4cbac-109e-455a-8adc-c4eb7bb1a5dd","type":"ColumnDataSource"}},"id":"18fbc2a2-d185-492c-bb1c-71e783404fff","type":"CDSView"},{"attributes":{},"id":"a92f6749-4d4d-416f-ae6d-f165f7cda5d8","type":"BasicTicker"},{"attributes":{"plot":{"id":"e738dfb9-225d-4cbe-8b31-4fd9a9985c44","type":"Plot"},"ticker":{"id":"a92f6749-4d4d-416f-ae6d-f165f7cda5d8","type":"BasicTicker"}},"id":"9bb0c101-cc23-4082-a802-cd793e468420","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"13deb771-6119-4eb9-9ab3-66bf92611f5d","type":"Toolbar"},{"attributes":{"callback":null},"id":"1bd5fc5b-79a5-45c9-b2da-86d59fa59e31","type":"DataRange1d"},{"attributes":{"formatter":{"id":"7dd37bdd-4d75-4009-aa98-f6cf3b2675b6","type":"BasicTickFormatter"},"plot":{"id":"e738dfb9-225d-4cbe-8b31-4fd9a9985c44","type":"Plot"},"ticker":{"id":"a92f6749-4d4d-416f-ae6d-f165f7cda5d8","type":"BasicTicker"}},"id":"deb32871-8f4c-4cbe-aab3-b2193483ef2e","type":"LinearAxis"}],"root_ids":["e738dfb9-225d-4cbe-8b31-4fd9a9985c44"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"78e4ca53-35a8-4a1b-a92c-f6ceab6839d9","elementid":"09d73721-baba-4624-a88b-7d72408364f1","modelid":"e738dfb9-225d-4cbe-8b31-4fd9a9985c44"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
