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
      };var element = document.getElementById("f81f8210-4ef2-4c55-a618-e0508a4befe3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f81f8210-4ef2-4c55-a618-e0508a4befe3' but no matching script tag was found. ")
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
                    var docs_json = {"0612c1cc-9ddf-477c-8a82-466b257c19e0":{"roots":{"references":[{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"98363728-fa2e-4bc0-9385-9021246699e1","type":"SquareX"},{"attributes":{},"id":"cf552a17-1273-445f-984c-515e0f67f98f","type":"LinearScale"},{"attributes":{"source":{"id":"c671b17f-0a8f-4505-951e-4e55f7da613e","type":"ColumnDataSource"}},"id":"779957d2-1dd1-42db-83bf-01d3124741b2","type":"CDSView"},{"attributes":{"formatter":{"id":"febd4582-caf3-4809-a110-90a747f80374","type":"BasicTickFormatter"},"plot":{"id":"47d92248-fc1d-448c-ba8d-5975ccff0308","type":"Plot"},"ticker":{"id":"3a60d67a-f05f-4a59-b83b-994c5f321dd4","type":"BasicTicker"}},"id":"580c5320-1687-4917-89da-1af08b3e4682","type":"LinearAxis"},{"attributes":{},"id":"febd4582-caf3-4809-a110-90a747f80374","type":"BasicTickFormatter"},{"attributes":{},"id":"8f0dbda6-036e-446c-be74-296224ebc2c4","type":"BasicTicker"},{"attributes":{},"id":"45a4c60b-3f61-4cf0-ac3c-9816f20d5106","type":"LinearScale"},{"attributes":{"below":[{"id":"d702e9ee-1676-4c77-88ab-435fd35ef979","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"580c5320-1687-4917-89da-1af08b3e4682","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e1824006-0c0f-46b5-a66d-a37037c616eb","type":"GlyphRenderer"},{"id":"d702e9ee-1676-4c77-88ab-435fd35ef979","type":"LinearAxis"},{"id":"580c5320-1687-4917-89da-1af08b3e4682","type":"LinearAxis"},{"id":"c53f9264-b048-41d1-8931-1405d6e96f98","type":"Grid"},{"id":"3e8f577c-60ea-488c-ac3a-a240141fe764","type":"Grid"}],"title":null,"toolbar":{"id":"0c36a88f-abdf-4ef0-9877-683deeba4ba0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"41929935-69b0-44d4-88fb-ca15f44bad72","type":"DataRange1d"},"x_scale":{"id":"45a4c60b-3f61-4cf0-ac3c-9816f20d5106","type":"LinearScale"},"y_range":{"id":"b9efa177-b65e-4e2b-aa46-a07ce801bd82","type":"DataRange1d"},"y_scale":{"id":"cf552a17-1273-445f-984c-515e0f67f98f","type":"LinearScale"}},"id":"47d92248-fc1d-448c-ba8d-5975ccff0308","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"0c36a88f-abdf-4ef0-9877-683deeba4ba0","type":"Toolbar"},{"attributes":{"formatter":{"id":"e8c932cc-cbce-481b-b979-0c3f3b054c1a","type":"BasicTickFormatter"},"plot":{"id":"47d92248-fc1d-448c-ba8d-5975ccff0308","type":"Plot"},"ticker":{"id":"8f0dbda6-036e-446c-be74-296224ebc2c4","type":"BasicTicker"}},"id":"d702e9ee-1676-4c77-88ab-435fd35ef979","type":"LinearAxis"},{"attributes":{"data_source":{"id":"c671b17f-0a8f-4505-951e-4e55f7da613e","type":"ColumnDataSource"},"glyph":{"id":"98363728-fa2e-4bc0-9385-9021246699e1","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"779957d2-1dd1-42db-83bf-01d3124741b2","type":"CDSView"}},"id":"e1824006-0c0f-46b5-a66d-a37037c616eb","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"b9efa177-b65e-4e2b-aa46-a07ce801bd82","type":"DataRange1d"},{"attributes":{"plot":{"id":"47d92248-fc1d-448c-ba8d-5975ccff0308","type":"Plot"},"ticker":{"id":"8f0dbda6-036e-446c-be74-296224ebc2c4","type":"BasicTicker"}},"id":"c53f9264-b048-41d1-8931-1405d6e96f98","type":"Grid"},{"attributes":{"callback":null},"id":"41929935-69b0-44d4-88fb-ca15f44bad72","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"47d92248-fc1d-448c-ba8d-5975ccff0308","type":"Plot"},"ticker":{"id":"3a60d67a-f05f-4a59-b83b-994c5f321dd4","type":"BasicTicker"}},"id":"3e8f577c-60ea-488c-ac3a-a240141fe764","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"c671b17f-0a8f-4505-951e-4e55f7da613e","type":"ColumnDataSource"},{"attributes":{},"id":"3a60d67a-f05f-4a59-b83b-994c5f321dd4","type":"BasicTicker"},{"attributes":{},"id":"e8c932cc-cbce-481b-b979-0c3f3b054c1a","type":"BasicTickFormatter"}],"root_ids":["47d92248-fc1d-448c-ba8d-5975ccff0308"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"0612c1cc-9ddf-477c-8a82-466b257c19e0","elementid":"f81f8210-4ef2-4c55-a618-e0508a4befe3","modelid":"47d92248-fc1d-448c-ba8d-5975ccff0308"}];
                
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
