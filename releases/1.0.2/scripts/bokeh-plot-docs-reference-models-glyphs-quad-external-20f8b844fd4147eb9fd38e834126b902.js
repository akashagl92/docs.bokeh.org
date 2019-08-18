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
      };var element = document.getElementById("e1d9d46d-279c-4c02-9b87-ff3e9d82fe30");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e1d9d46d-279c-4c02-9b87-ff3e9d82fe30' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a2798d6f-1e34-4aa3-b18f-0a3e6493e932":{"roots":{"references":[{"attributes":{"formatter":{"id":"29078","type":"BasicTickFormatter"},"plot":{"id":"29061","type":"Plot"},"ticker":{"id":"29068","type":"BasicTicker"}},"id":"29066","type":"LinearAxis"},{"attributes":{},"id":"29070","type":"BasicTicker"},{"attributes":{"callback":null},"id":"29075","type":"DataRange1d"},{"attributes":{},"id":"29073","type":"LinearScale"},{"attributes":{"formatter":{"id":"29080","type":"BasicTickFormatter"},"plot":{"id":"29061","type":"Plot"},"ticker":{"id":"29070","type":"BasicTicker"}},"id":"29067","type":"LinearAxis"},{"attributes":{},"id":"29080","type":"BasicTickFormatter"},{"attributes":{},"id":"29082","type":"Selection"},{"attributes":{"plot":{"id":"29061","type":"Plot"},"ticker":{"id":"29068","type":"BasicTicker"}},"id":"29069","type":"Grid"},{"attributes":{},"id":"29076","type":"LinearScale"},{"attributes":{"source":{"id":"29060","type":"ColumnDataSource"}},"id":"29065","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"29072","type":"Toolbar"},{"attributes":{},"id":"29078","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"29074","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"29061","type":"Plot"},"ticker":{"id":"29070","type":"BasicTicker"}},"id":"29071","type":"Grid"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]},"left":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"right":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"top":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"29082","type":"Selection"},"selection_policy":{"id":"29081","type":"UnionRenderers"}},"id":"29060","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#b3de69"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"29063","type":"Quad"},{"attributes":{},"id":"29081","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"29060","type":"ColumnDataSource"},"glyph":{"id":"29063","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29065","type":"CDSView"}},"id":"29064","type":"GlyphRenderer"},{"attributes":{},"id":"29068","type":"BasicTicker"},{"attributes":{"below":[{"id":"29066","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"29067","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"29064","type":"GlyphRenderer"},{"id":"29066","type":"LinearAxis"},{"id":"29067","type":"LinearAxis"},{"id":"29069","type":"Grid"},{"id":"29071","type":"Grid"}],"title":null,"toolbar":{"id":"29072","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29075","type":"DataRange1d"},"x_scale":{"id":"29073","type":"LinearScale"},"y_range":{"id":"29074","type":"DataRange1d"},"y_scale":{"id":"29076","type":"LinearScale"}},"id":"29061","type":"Plot"}],"root_ids":["29061"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"a2798d6f-1e34-4aa3-b18f-0a3e6493e932","roots":{"29061":"e1d9d46d-279c-4c02-9b87-ff3e9d82fe30"}}];
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