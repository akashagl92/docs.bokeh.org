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
      };var element = document.getElementById("19f5d1aa-5b39-4c55-9a26-78403766f1a6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '19f5d1aa-5b39-4c55-9a26-78403766f1a6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"49d1eb62-c357-4536-8208-1be48c35cfa3":{"roots":{"references":[{"attributes":{},"id":"28149","type":"BasicTicker"},{"attributes":{"source":{"id":"28141","type":"ColumnDataSource"}},"id":"28146","type":"CDSView"},{"attributes":{},"id":"28161","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"28159","type":"BasicTickFormatter"},"plot":{"id":"28142","type":"Plot"},"ticker":{"id":"28149","type":"BasicTicker"}},"id":"28147","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"28153","type":"Toolbar"},{"attributes":{"plot":{"id":"28142","type":"Plot"},"ticker":{"id":"28149","type":"BasicTicker"}},"id":"28150","type":"Grid"},{"attributes":{},"id":"28159","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#b3de69"},"height":{"value":0.5},"right":{"field":"right"},"y":{"field":"y"}},"id":"28144","type":"HBar"},{"attributes":{"below":[{"id":"28147","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"28148","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"28145","type":"GlyphRenderer"},{"id":"28147","type":"LinearAxis"},{"id":"28148","type":"LinearAxis"},{"id":"28150","type":"Grid"},{"id":"28152","type":"Grid"}],"title":null,"toolbar":{"id":"28153","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"28156","type":"DataRange1d"},"x_scale":{"id":"28154","type":"LinearScale"},"y_range":{"id":"28155","type":"DataRange1d"},"y_scale":{"id":"28157","type":"LinearScale"}},"id":"28142","type":"Plot"},{"attributes":{},"id":"28154","type":"LinearScale"},{"attributes":{"formatter":{"id":"28161","type":"BasicTickFormatter"},"plot":{"id":"28142","type":"Plot"},"ticker":{"id":"28151","type":"BasicTicker"}},"id":"28148","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"28142","type":"Plot"},"ticker":{"id":"28151","type":"BasicTicker"}},"id":"28152","type":"Grid"},{"attributes":{},"id":"28151","type":"BasicTicker"},{"attributes":{},"id":"28163","type":"Selection"},{"attributes":{"callback":null},"id":"28155","type":"DataRange1d"},{"attributes":{},"id":"28162","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"28141","type":"ColumnDataSource"},"glyph":{"id":"28144","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"28146","type":"CDSView"}},"id":"28145","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"28156","type":"DataRange1d"},{"attributes":{},"id":"28157","type":"LinearScale"},{"attributes":{"callback":null,"data":{"right":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}},"selected":{"id":"28163","type":"Selection"},"selection_policy":{"id":"28162","type":"UnionRenderers"}},"id":"28141","type":"ColumnDataSource"}],"root_ids":["28142"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"49d1eb62-c357-4536-8208-1be48c35cfa3","roots":{"28142":"19f5d1aa-5b39-4c55-9a26-78403766f1a6"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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