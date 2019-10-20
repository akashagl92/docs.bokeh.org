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
      };var element = document.getElementById("20258ba2-3b14-4675-83d7-1db7bf26c62c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '20258ba2-3b14-4675-83d7-1db7bf26c62c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"d86757bf-28e1-452e-861e-fff69ce10208":{"roots":{"references":[{"attributes":{"callback":null},"id":"a61805d9-b310-4a18-b935-b277565bae7b","type":"DataRange1d"},{"attributes":{},"id":"d39e703f-cd84-44ea-962c-fcbb47fa9e58","type":"LinearScale"},{"attributes":{},"id":"98f4d173-b09f-4baa-9de0-fb6f8c1bd857","type":"BasicTicker"},{"attributes":{},"id":"0a68c709-28af-4da2-ba25-fa9b82c9e18a","type":"BasicTicker"},{"attributes":{"callback":null},"id":"5ab1150b-adfb-4dbf-aa75-a5624fbe1463","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"f34e2531-3ea4-43a1-abad-18ea535160c6","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"ca57e01d-fb95-4f60-8b29-b1ccf71bfb08","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"8765da43-3130-4195-b68f-0bbf6d63025b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"43f23eac-989e-4377-ad00-91e3bb345ce9","type":"GlyphRenderer"},{"id":"ca57e01d-fb95-4f60-8b29-b1ccf71bfb08","type":"LinearAxis"},{"id":"8765da43-3130-4195-b68f-0bbf6d63025b","type":"LinearAxis"},{"id":"dec62001-5785-40d2-b961-cdd195dd1cec","type":"Grid"},{"id":"dbf04539-1b79-499e-9f18-ba088dbdb40c","type":"Grid"}],"title":null,"toolbar":{"id":"0fbf3fe5-62ad-4f1a-b38d-e6513f85ac27","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5ab1150b-adfb-4dbf-aa75-a5624fbe1463","type":"DataRange1d"},"x_scale":{"id":"d39e703f-cd84-44ea-962c-fcbb47fa9e58","type":"LinearScale"},"y_range":{"id":"a61805d9-b310-4a18-b935-b277565bae7b","type":"DataRange1d"},"y_scale":{"id":"b167f242-301f-4df1-bb9e-2089733209c7","type":"LinearScale"}},"id":"7e2eaae3-86e0-4815-a835-a8767c7df488","type":"Plot"},{"attributes":{},"id":"b167f242-301f-4df1-bb9e-2089733209c7","type":"LinearScale"},{"attributes":{"data_source":{"id":"f34e2531-3ea4-43a1-abad-18ea535160c6","type":"ColumnDataSource"},"glyph":{"id":"95b36931-1148-4085-83ac-da396c70354b","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"479eebbf-0e6d-4315-a8a9-6df204f4a960","type":"CDSView"}},"id":"43f23eac-989e-4377-ad00-91e3bb345ce9","type":"GlyphRenderer"},{"attributes":{},"id":"f8bcddec-4da5-4e00-8d64-3f69044365a2","type":"BasicTickFormatter"},{"attributes":{},"id":"c3347757-f16f-4760-9f61-c3932b70a169","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"c3347757-f16f-4760-9f61-c3932b70a169","type":"BasicTickFormatter"},"plot":{"id":"7e2eaae3-86e0-4815-a835-a8767c7df488","type":"Plot"},"ticker":{"id":"98f4d173-b09f-4baa-9de0-fb6f8c1bd857","type":"BasicTicker"}},"id":"ca57e01d-fb95-4f60-8b29-b1ccf71bfb08","type":"LinearAxis"},{"attributes":{"plot":{"id":"7e2eaae3-86e0-4815-a835-a8767c7df488","type":"Plot"},"ticker":{"id":"98f4d173-b09f-4baa-9de0-fb6f8c1bd857","type":"BasicTicker"}},"id":"dec62001-5785-40d2-b961-cdd195dd1cec","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"0fbf3fe5-62ad-4f1a-b38d-e6513f85ac27","type":"Toolbar"},{"attributes":{"formatter":{"id":"f8bcddec-4da5-4e00-8d64-3f69044365a2","type":"BasicTickFormatter"},"plot":{"id":"7e2eaae3-86e0-4815-a835-a8767c7df488","type":"Plot"},"ticker":{"id":"0a68c709-28af-4da2-ba25-fa9b82c9e18a","type":"BasicTicker"}},"id":"8765da43-3130-4195-b68f-0bbf6d63025b","type":"LinearAxis"},{"attributes":{"source":{"id":"f34e2531-3ea4-43a1-abad-18ea535160c6","type":"ColumnDataSource"}},"id":"479eebbf-0e6d-4315-a8a9-6df204f4a960","type":"CDSView"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7fc97f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"95b36931-1148-4085-83ac-da396c70354b","type":"SquareCross"},{"attributes":{"dimension":1,"plot":{"id":"7e2eaae3-86e0-4815-a835-a8767c7df488","type":"Plot"},"ticker":{"id":"0a68c709-28af-4da2-ba25-fa9b82c9e18a","type":"BasicTicker"}},"id":"dbf04539-1b79-499e-9f18-ba088dbdb40c","type":"Grid"}],"root_ids":["7e2eaae3-86e0-4815-a835-a8767c7df488"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"d86757bf-28e1-452e-861e-fff69ce10208","elementid":"20258ba2-3b14-4675-83d7-1db7bf26c62c","modelid":"7e2eaae3-86e0-4815-a835-a8767c7df488"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
