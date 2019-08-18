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
      };var element = document.getElementById("c2a07a52-d77d-4868-b588-dd423f254fb9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c2a07a52-d77d-4868-b588-dd423f254fb9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"e85cb7d4-9045-479a-99b6-41eaed21f40d":{"roots":{"references":[{"attributes":{},"id":"28162","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"28160","type":"BasicTickFormatter"},"plot":{"id":"28141","type":"Plot"},"ticker":{"id":"28150","type":"BasicTicker"}},"id":"28147","type":"LinearAxis"},{"attributes":{},"id":"28158","type":"BasicTickFormatter"},{"attributes":{},"id":"28160","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"28140","type":"ColumnDataSource"}},"id":"28145","type":"CDSView"},{"attributes":{"plot":{"id":"28141","type":"Plot"},"ticker":{"id":"28148","type":"BasicTicker"}},"id":"28149","type":"Grid"},{"attributes":{"callback":null,"data":{"right":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}},"selected":{"id":"28161","type":"Selection"},"selection_policy":{"id":"28162","type":"UnionRenderers"}},"id":"28140","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"28158","type":"BasicTickFormatter"},"plot":{"id":"28141","type":"Plot"},"ticker":{"id":"28148","type":"BasicTicker"}},"id":"28146","type":"LinearAxis"},{"attributes":{},"id":"28154","type":"LinearScale"},{"attributes":{"callback":null},"id":"28152","type":"DataRange1d"},{"attributes":{},"id":"28155","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#b3de69"},"height":{"value":0.5},"right":{"field":"right"},"y":{"field":"y"}},"id":"28143","type":"HBar"},{"attributes":{},"id":"28161","type":"Selection"},{"attributes":{"callback":null},"id":"28156","type":"DataRange1d"},{"attributes":{},"id":"28150","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"28141","type":"Plot"},"ticker":{"id":"28150","type":"BasicTicker"}},"id":"28151","type":"Grid"},{"attributes":{},"id":"28148","type":"BasicTicker"},{"attributes":{"below":[{"id":"28146","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"28147","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"28144","type":"GlyphRenderer"},{"id":"28146","type":"LinearAxis"},{"id":"28147","type":"LinearAxis"},{"id":"28149","type":"Grid"},{"id":"28151","type":"Grid"}],"title":null,"toolbar":{"id":"28153","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"28156","type":"DataRange1d"},"x_scale":{"id":"28155","type":"LinearScale"},"y_range":{"id":"28152","type":"DataRange1d"},"y_scale":{"id":"28154","type":"LinearScale"}},"id":"28141","type":"Plot"},{"attributes":{"data_source":{"id":"28140","type":"ColumnDataSource"},"glyph":{"id":"28143","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"28145","type":"CDSView"}},"id":"28144","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"28153","type":"Toolbar"}],"root_ids":["28141"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"e85cb7d4-9045-479a-99b6-41eaed21f40d","roots":{"28141":"c2a07a52-d77d-4868-b588-dd423f254fb9"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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