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
      };var element = document.getElementById("2024c6e0-5863-4ddd-971a-5b48bceff21a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2024c6e0-5863-4ddd-971a-5b48bceff21a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"90c2e637-962f-4366-818a-adbe6027ecdd":{"roots":{"references":[{"attributes":{"data_source":{"id":"28668","type":"ColumnDataSource"},"glyph":{"id":"28671","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"28673","type":"CDSView"}},"id":"28672","type":"GlyphRenderer"},{"attributes":{},"id":"28676","type":"BasicTicker"},{"attributes":{},"id":"28687","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"28681","type":"Toolbar"},{"attributes":{"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"28671","type":"MultiPolygons"},{"attributes":{},"id":"28682","type":"LinearScale"},{"attributes":{"callback":null},"id":"28683","type":"DataRange1d"},{"attributes":{},"id":"28690","type":"UnionRenderers"},{"attributes":{},"id":"28684","type":"LinearScale"},{"attributes":{"plot":{"id":"28669","type":"Plot"},"ticker":{"id":"28676","type":"BasicTicker"}},"id":"28677","type":"Grid"},{"attributes":{"callback":null,"data":{"xs":[[[[1,1,2,2]]],[[[1,1,3],[1.5,1.5,2]]],[[[2,2,4,4],[2.5,2.5,3],[3.5,3,3]],[[3.5,3.5,4]]]],"ys":[[[[4,3,3,4]]],[[[1,3,1],[1.5,2,1.5]]],[[[2,4,4,2],[3,3.5,3.5],[2.5,2.5,3]],[[1,1.5,1.5]]]]},"selected":{"id":"28689","type":"Selection"},"selection_policy":{"id":"28690","type":"UnionRenderers"}},"id":"28668","type":"ColumnDataSource"},{"attributes":{},"id":"28689","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"28669","type":"Plot"},"ticker":{"id":"28678","type":"BasicTicker"}},"id":"28679","type":"Grid"},{"attributes":{"formatter":{"id":"28687","type":"BasicTickFormatter"},"plot":{"id":"28669","type":"Plot"},"ticker":{"id":"28676","type":"BasicTicker"}},"id":"28674","type":"LinearAxis"},{"attributes":{"below":[{"id":"28674","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"28675","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"28672","type":"GlyphRenderer"},{"id":"28674","type":"LinearAxis"},{"id":"28675","type":"LinearAxis"},{"id":"28677","type":"Grid"},{"id":"28679","type":"Grid"}],"title":null,"toolbar":{"id":"28681","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"28683","type":"DataRange1d"},"x_scale":{"id":"28682","type":"LinearScale"},"y_range":{"id":"28680","type":"DataRange1d"},"y_scale":{"id":"28684","type":"LinearScale"}},"id":"28669","type":"Plot"},{"attributes":{},"id":"28678","type":"BasicTicker"},{"attributes":{"source":{"id":"28668","type":"ColumnDataSource"}},"id":"28673","type":"CDSView"},{"attributes":{"formatter":{"id":"28685","type":"BasicTickFormatter"},"plot":{"id":"28669","type":"Plot"},"ticker":{"id":"28678","type":"BasicTicker"}},"id":"28675","type":"LinearAxis"},{"attributes":{},"id":"28685","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"28680","type":"DataRange1d"}],"root_ids":["28669"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"90c2e637-962f-4366-818a-adbe6027ecdd","roots":{"28669":"2024c6e0-5863-4ddd-971a-5b48bceff21a"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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