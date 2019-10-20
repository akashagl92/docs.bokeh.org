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
      };var element = document.getElementById("4c60a088-f12a-4c35-ab04-f47a225f1fac");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4c60a088-f12a-4c35-ab04-f47a225f1fac' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"4b2f80a2-8ab7-4fb6-be5f-fbe95be24393":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#fb9a99"},"line_color":{"value":"white"},"q":{"field":"q"},"r":{"field":"r"}},"id":"28243","type":"HexTile"},{"attributes":{"callback":null},"id":"28254","type":"DataRange1d"},{"attributes":{"data_source":{"id":"28240","type":"ColumnDataSource"},"glyph":{"id":"28243","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"28245","type":"CDSView"}},"id":"28244","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"28260","type":"BasicTickFormatter"},"plot":{"id":"28241","type":"Plot"},"ticker":{"id":"28250","type":"BasicTicker"}},"id":"28247","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"q":[0,0,-1,-1,1,1,0],"r":[0,-1,0,1,-1,0,1]},"selected":{"id":"28261","type":"Selection"},"selection_policy":{"id":"28262","type":"UnionRenderers"}},"id":"28240","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"28258","type":"BasicTickFormatter"},"plot":{"id":"28241","type":"Plot"},"ticker":{"id":"28248","type":"BasicTicker"}},"id":"28246","type":"LinearAxis"},{"attributes":{},"id":"28248","type":"BasicTicker"},{"attributes":{},"id":"28261","type":"Selection"},{"attributes":{},"id":"28262","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"28252","type":"Toolbar"},{"attributes":{"source":{"id":"28240","type":"ColumnDataSource"}},"id":"28245","type":"CDSView"},{"attributes":{},"id":"28260","type":"BasicTickFormatter"},{"attributes":{},"id":"28256","type":"LinearScale"},{"attributes":{"callback":null},"id":"28255","type":"DataRange1d"},{"attributes":{"plot":{"id":"28241","type":"Plot"},"ticker":{"id":"28248","type":"BasicTicker"}},"id":"28249","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"28241","type":"Plot"},"ticker":{"id":"28250","type":"BasicTicker"}},"id":"28251","type":"Grid"},{"attributes":{"below":[{"id":"28246","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"28247","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"28244","type":"GlyphRenderer"},{"id":"28246","type":"LinearAxis"},{"id":"28247","type":"LinearAxis"},{"id":"28249","type":"Grid"},{"id":"28251","type":"Grid"}],"title":null,"toolbar":{"id":"28252","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"28255","type":"DataRange1d"},"x_scale":{"id":"28256","type":"LinearScale"},"y_range":{"id":"28254","type":"DataRange1d"},"y_scale":{"id":"28253","type":"LinearScale"}},"id":"28241","type":"Plot"},{"attributes":{},"id":"28250","type":"BasicTicker"},{"attributes":{},"id":"28253","type":"LinearScale"},{"attributes":{},"id":"28258","type":"BasicTickFormatter"}],"root_ids":["28241"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"4b2f80a2-8ab7-4fb6-be5f-fbe95be24393","roots":{"28241":"4c60a088-f12a-4c35-ab04-f47a225f1fac"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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