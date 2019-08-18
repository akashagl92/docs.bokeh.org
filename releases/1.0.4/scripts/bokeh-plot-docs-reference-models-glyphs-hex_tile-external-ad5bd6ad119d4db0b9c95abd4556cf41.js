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
      };var element = document.getElementById("9e364270-411d-44c8-a44e-e1baf267cf60");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9e364270-411d-44c8-a44e-e1baf267cf60' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"82382a62-32e0-496f-8854-4c8109ba2147":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"28251","type":"Plot"},"ticker":{"id":"28260","type":"BasicTicker"}},"id":"28261","type":"Grid"},{"attributes":{},"id":"28260","type":"BasicTicker"},{"attributes":{"formatter":{"id":"28269","type":"BasicTickFormatter"},"plot":{"id":"28251","type":"Plot"},"ticker":{"id":"28258","type":"BasicTicker"}},"id":"28256","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"q":[0,0,-1,-1,1,1,0],"r":[0,-1,0,1,-1,0,1]},"selected":{"id":"28272","type":"Selection"},"selection_policy":{"id":"28271","type":"UnionRenderers"}},"id":"28250","type":"ColumnDataSource"},{"attributes":{},"id":"28258","type":"BasicTicker"},{"attributes":{"callback":null},"id":"28266","type":"DataRange1d"},{"attributes":{"data_source":{"id":"28250","type":"ColumnDataSource"},"glyph":{"id":"28253","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"28255","type":"CDSView"}},"id":"28254","type":"GlyphRenderer"},{"attributes":{},"id":"28271","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"28265","type":"Toolbar"},{"attributes":{"source":{"id":"28250","type":"ColumnDataSource"}},"id":"28255","type":"CDSView"},{"attributes":{"callback":null},"id":"28263","type":"DataRange1d"},{"attributes":{},"id":"28264","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#fb9a99"},"line_color":{"value":"white"},"q":{"field":"q"},"r":{"field":"r"}},"id":"28253","type":"HexTile"},{"attributes":{},"id":"28267","type":"BasicTickFormatter"},{"attributes":{},"id":"28272","type":"Selection"},{"attributes":{"plot":{"id":"28251","type":"Plot"},"ticker":{"id":"28258","type":"BasicTicker"}},"id":"28259","type":"Grid"},{"attributes":{},"id":"28269","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"28256","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"28257","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"28254","type":"GlyphRenderer"},{"id":"28256","type":"LinearAxis"},{"id":"28257","type":"LinearAxis"},{"id":"28259","type":"Grid"},{"id":"28261","type":"Grid"}],"title":null,"toolbar":{"id":"28265","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"28263","type":"DataRange1d"},"x_scale":{"id":"28262","type":"LinearScale"},"y_range":{"id":"28266","type":"DataRange1d"},"y_scale":{"id":"28264","type":"LinearScale"}},"id":"28251","type":"Plot"},{"attributes":{"formatter":{"id":"28267","type":"BasicTickFormatter"},"plot":{"id":"28251","type":"Plot"},"ticker":{"id":"28260","type":"BasicTicker"}},"id":"28257","type":"LinearAxis"},{"attributes":{},"id":"28262","type":"LinearScale"}],"root_ids":["28251"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"82382a62-32e0-496f-8854-4c8109ba2147","roots":{"28251":"9e364270-411d-44c8-a44e-e1baf267cf60"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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