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
      };var element = document.getElementById("81cbce50-fee6-497a-bbf8-d579533b19ac");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '81cbce50-fee6-497a-bbf8-d579533b19ac' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3132983c-460e-4958-978b-984378aeab4e":{"roots":{"references":[{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]},"left":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"right":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"top":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"29084","type":"Selection"},"selection_policy":{"id":"29085","type":"UnionRenderers"}},"id":"29063","type":"ColumnDataSource"},{"attributes":{},"id":"29084","type":"Selection"},{"attributes":{},"id":"29085","type":"UnionRenderers"},{"attributes":{"source":{"id":"29063","type":"ColumnDataSource"}},"id":"29068","type":"CDSView"},{"attributes":{},"id":"29071","type":"BasicTicker"},{"attributes":{"data_source":{"id":"29063","type":"ColumnDataSource"},"glyph":{"id":"29066","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29068","type":"CDSView"}},"id":"29067","type":"GlyphRenderer"},{"attributes":{},"id":"29079","type":"LinearScale"},{"attributes":{},"id":"29077","type":"LinearScale"},{"attributes":{"plot":{"id":"29064","type":"Plot"},"ticker":{"id":"29071","type":"BasicTicker"}},"id":"29072","type":"Grid"},{"attributes":{"formatter":{"id":"29080","type":"BasicTickFormatter"},"plot":{"id":"29064","type":"Plot"},"ticker":{"id":"29073","type":"BasicTicker"}},"id":"29070","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"29064","type":"Plot"},"ticker":{"id":"29073","type":"BasicTicker"}},"id":"29074","type":"Grid"},{"attributes":{},"id":"29080","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"29082","type":"BasicTickFormatter"},"plot":{"id":"29064","type":"Plot"},"ticker":{"id":"29071","type":"BasicTicker"}},"id":"29069","type":"LinearAxis"},{"attributes":{"below":[{"id":"29069","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"29070","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"29067","type":"GlyphRenderer"},{"id":"29069","type":"LinearAxis"},{"id":"29070","type":"LinearAxis"},{"id":"29072","type":"Grid"},{"id":"29074","type":"Grid"}],"title":null,"toolbar":{"id":"29076","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29078","type":"DataRange1d"},"x_scale":{"id":"29077","type":"LinearScale"},"y_range":{"id":"29075","type":"DataRange1d"},"y_scale":{"id":"29079","type":"LinearScale"}},"id":"29064","type":"Plot"},{"attributes":{},"id":"29073","type":"BasicTicker"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#b3de69"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"29066","type":"Quad"},{"attributes":{"callback":null},"id":"29078","type":"DataRange1d"},{"attributes":{},"id":"29082","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"29076","type":"Toolbar"},{"attributes":{"callback":null},"id":"29075","type":"DataRange1d"}],"root_ids":["29064"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"3132983c-460e-4958-978b-984378aeab4e","roots":{"29064":"81cbce50-fee6-497a-bbf8-d579533b19ac"}}];
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