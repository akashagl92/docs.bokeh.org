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
      };var element = document.getElementById("2e41e0d4-4e2a-4b7b-b728-2f26fb5aaa2c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2e41e0d4-4e2a-4b7b-b728-2f26fb5aaa2c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9ec3e677-904e-4366-b9e2-7855b077782f":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"27950","type":"Toolbar"},{"attributes":{},"id":"27959","type":"UnionRenderers"},{"attributes":{},"id":"27960","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"27939","type":"Plot"},"ticker":{"id":"27948","type":"BasicTicker"}},"id":"27949","type":"Grid"},{"attributes":{},"id":"27951","type":"LinearScale"},{"attributes":{},"id":"27954","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xm01":{"__ndarray__":"zczMzMzMAMCamZmZmZn5v5qZmZmZmfG/MzMzMzMz47+amZmZmZm5v5qZmZmZmdk/zczMzMzM7D9mZmZmZmb2P2ZmZmZmZv4/","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"ym01":{"__ndarray__":"ZmZmZmZmDkBmZmZmZmYAQJqZmZmZmek/mJmZmZmZqT+amZmZmZnJv5iZmZmZmak/mpmZmZmZ6T9mZmZmZmYAQGZmZmZmZg5A","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}},"selected":{"id":"27960","type":"Selection"},"selection_policy":{"id":"27959","type":"UnionRenderers"}},"id":"27938","type":"ColumnDataSource"},{"attributes":{"cx0":{"field":"xp01"},"cx1":{"field":"xm01"},"cy0":{"field":"yp01"},"cy1":{"field":"ym01"},"line_color":{"value":"#d95f02"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"27941","type":"Bezier"},{"attributes":{},"id":"27958","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"27956","type":"BasicTickFormatter"},"plot":{"id":"27939","type":"Plot"},"ticker":{"id":"27946","type":"BasicTicker"}},"id":"27944","type":"LinearAxis"},{"attributes":{},"id":"27948","type":"BasicTicker"},{"attributes":{"callback":null},"id":"27952","type":"DataRange1d"},{"attributes":{},"id":"27956","type":"BasicTickFormatter"},{"attributes":{},"id":"27946","type":"BasicTicker"},{"attributes":{"source":{"id":"27938","type":"ColumnDataSource"}},"id":"27943","type":"CDSView"},{"attributes":{"below":[{"id":"27944","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"27945","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"27942","type":"GlyphRenderer"},{"id":"27944","type":"LinearAxis"},{"id":"27945","type":"LinearAxis"},{"id":"27947","type":"Grid"},{"id":"27949","type":"Grid"}],"title":null,"toolbar":{"id":"27950","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27953","type":"DataRange1d"},"x_scale":{"id":"27951","type":"LinearScale"},"y_range":{"id":"27952","type":"DataRange1d"},"y_scale":{"id":"27954","type":"LinearScale"}},"id":"27939","type":"Plot"},{"attributes":{"plot":{"id":"27939","type":"Plot"},"ticker":{"id":"27946","type":"BasicTicker"}},"id":"27947","type":"Grid"},{"attributes":{"callback":null},"id":"27953","type":"DataRange1d"},{"attributes":{"formatter":{"id":"27958","type":"BasicTickFormatter"},"plot":{"id":"27939","type":"Plot"},"ticker":{"id":"27948","type":"BasicTicker"}},"id":"27945","type":"LinearAxis"},{"attributes":{"data_source":{"id":"27938","type":"ColumnDataSource"},"glyph":{"id":"27941","type":"Bezier"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"27943","type":"CDSView"}},"id":"27942","type":"GlyphRenderer"}],"root_ids":["27939"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"9ec3e677-904e-4366-b9e2-7855b077782f","roots":{"27939":"2e41e0d4-4e2a-4b7b-b728-2f26fb5aaa2c"}}];
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