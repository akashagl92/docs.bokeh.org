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
      };var element = document.getElementById("e0a91a58-dde0-4e4e-89e4-35571423e94e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e0a91a58-dde0-4e4e-89e4-35571423e94e' but no matching script tag was found. ")
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
                    var docs_json = {"b405ebfa-e3d9-4a3b-b331-96c6b80dba65":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"34307a36-ad63-426e-9845-18b11c6780d9","type":"ColumnDataSource"},{"attributes":{},"id":"225556d2-e2d3-4862-b256-0ddaeb53d68c","type":"LinearScale"},{"attributes":{"source":{"id":"34307a36-ad63-426e-9845-18b11c6780d9","type":"ColumnDataSource"}},"id":"3abff9cd-1846-4feb-9e2a-d8fe26a5be0d","type":"CDSView"},{"attributes":{"data_source":{"id":"34307a36-ad63-426e-9845-18b11c6780d9","type":"ColumnDataSource"},"glyph":{"id":"ddb592dd-5753-49f5-b48f-bac529ee92a6","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"3abff9cd-1846-4feb-9e2a-d8fe26a5be0d","type":"CDSView"}},"id":"8261b69f-ba4c-465e-8024-8c6c603b7142","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"7aaaaf0f-2f1e-4587-a273-f94b3898c65d","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"40629654-5578-496b-9419-e2a14406ee58","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"8261b69f-ba4c-465e-8024-8c6c603b7142","type":"GlyphRenderer"},{"id":"7aaaaf0f-2f1e-4587-a273-f94b3898c65d","type":"LinearAxis"},{"id":"40629654-5578-496b-9419-e2a14406ee58","type":"LinearAxis"},{"id":"a92ef52b-bd5f-4f1a-975b-afe8d7ec1af7","type":"Grid"},{"id":"49d2b1e5-6aa8-4723-821e-588aa603244d","type":"Grid"}],"title":null,"toolbar":{"id":"e9dbb43e-e50a-4c40-9533-a03f35f78092","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"fd50cc4d-3e66-46b6-ad29-3126d0f26296","type":"DataRange1d"},"x_scale":{"id":"6673f0f8-a54d-4e05-9a39-a2279731532f","type":"LinearScale"},"y_range":{"id":"36d8ca55-64b1-438d-9735-44e09d2d42df","type":"DataRange1d"},"y_scale":{"id":"225556d2-e2d3-4862-b256-0ddaeb53d68c","type":"LinearScale"}},"id":"cf8284ad-c9eb-4ed0-b002-e564580c0eea","type":"Plot"},{"attributes":{},"id":"8360e1df-ee56-4ae8-bfa9-6c56d08fe61a","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#de2d26"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ddb592dd-5753-49f5-b48f-bac529ee92a6","type":"InvertedTriangle"},{"attributes":{"formatter":{"id":"468969ee-5e57-4a5d-b765-72912d928cc4","type":"BasicTickFormatter"},"plot":{"id":"cf8284ad-c9eb-4ed0-b002-e564580c0eea","type":"Plot"},"ticker":{"id":"064dc310-0619-4a41-aa2c-fa4c039509d9","type":"BasicTicker"}},"id":"40629654-5578-496b-9419-e2a14406ee58","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"cf8284ad-c9eb-4ed0-b002-e564580c0eea","type":"Plot"},"ticker":{"id":"064dc310-0619-4a41-aa2c-fa4c039509d9","type":"BasicTicker"}},"id":"49d2b1e5-6aa8-4723-821e-588aa603244d","type":"Grid"},{"attributes":{"callback":null},"id":"fd50cc4d-3e66-46b6-ad29-3126d0f26296","type":"DataRange1d"},{"attributes":{},"id":"6673f0f8-a54d-4e05-9a39-a2279731532f","type":"LinearScale"},{"attributes":{},"id":"53d8bf76-c563-41d1-a11b-14a82c7430d9","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"cf8284ad-c9eb-4ed0-b002-e564580c0eea","type":"Plot"},"ticker":{"id":"8360e1df-ee56-4ae8-bfa9-6c56d08fe61a","type":"BasicTicker"}},"id":"a92ef52b-bd5f-4f1a-975b-afe8d7ec1af7","type":"Grid"},{"attributes":{"formatter":{"id":"53d8bf76-c563-41d1-a11b-14a82c7430d9","type":"BasicTickFormatter"},"plot":{"id":"cf8284ad-c9eb-4ed0-b002-e564580c0eea","type":"Plot"},"ticker":{"id":"8360e1df-ee56-4ae8-bfa9-6c56d08fe61a","type":"BasicTicker"}},"id":"7aaaaf0f-2f1e-4587-a273-f94b3898c65d","type":"LinearAxis"},{"attributes":{"callback":null},"id":"36d8ca55-64b1-438d-9735-44e09d2d42df","type":"DataRange1d"},{"attributes":{},"id":"064dc310-0619-4a41-aa2c-fa4c039509d9","type":"BasicTicker"},{"attributes":{},"id":"468969ee-5e57-4a5d-b765-72912d928cc4","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"e9dbb43e-e50a-4c40-9533-a03f35f78092","type":"Toolbar"}],"root_ids":["cf8284ad-c9eb-4ed0-b002-e564580c0eea"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"b405ebfa-e3d9-4a3b-b331-96c6b80dba65","elementid":"e0a91a58-dde0-4e4e-89e4-35571423e94e","modelid":"cf8284ad-c9eb-4ed0-b002-e564580c0eea"}];
                
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
