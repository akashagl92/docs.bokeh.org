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
      };var element = document.getElementById("57207af9-70c9-4dd9-94e0-4a3d9c946acf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '57207af9-70c9-4dd9-94e0-4a3d9c946acf' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ee8f13ef-97e6-49f8-8558-606bf6bec935":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"27949","type":"Toolbar"},{"attributes":{},"id":"27958","type":"Selection"},{"attributes":{"below":[{"id":"27943","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"27944","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"27941","type":"GlyphRenderer"},{"id":"27943","type":"LinearAxis"},{"id":"27944","type":"LinearAxis"},{"id":"27946","type":"Grid"},{"id":"27948","type":"Grid"}],"title":null,"toolbar":{"id":"27949","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27952","type":"DataRange1d"},"x_scale":{"id":"27953","type":"LinearScale"},"y_range":{"id":"27951","type":"DataRange1d"},"y_scale":{"id":"27950","type":"LinearScale"}},"id":"27938","type":"Plot"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xm01":{"__ndarray__":"zczMzMzMAMCamZmZmZn5v5qZmZmZmfG/MzMzMzMz47+amZmZmZm5v5qZmZmZmdk/zczMzMzM7D9mZmZmZmb2P2ZmZmZmZv4/","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"ym01":{"__ndarray__":"ZmZmZmZmDkBmZmZmZmYAQJqZmZmZmek/mJmZmZmZqT+amZmZmZnJv5iZmZmZmak/mpmZmZmZ6T9mZmZmZmYAQGZmZmZmZg5A","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}},"selected":{"id":"27958","type":"Selection"},"selection_policy":{"id":"27959","type":"UnionRenderers"}},"id":"27937","type":"ColumnDataSource"},{"attributes":{"cx0":{"field":"xp01"},"cx1":{"field":"xm01"},"cy0":{"field":"yp01"},"cy1":{"field":"ym01"},"line_color":{"value":"#d95f02"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"27940","type":"Bezier"},{"attributes":{},"id":"27955","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"27951","type":"DataRange1d"},{"attributes":{},"id":"27959","type":"UnionRenderers"},{"attributes":{},"id":"27953","type":"LinearScale"},{"attributes":{"data_source":{"id":"27937","type":"ColumnDataSource"},"glyph":{"id":"27940","type":"Bezier"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"27942","type":"CDSView"}},"id":"27941","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"27938","type":"Plot"},"ticker":{"id":"27947","type":"BasicTicker"}},"id":"27948","type":"Grid"},{"attributes":{"plot":{"id":"27938","type":"Plot"},"ticker":{"id":"27945","type":"BasicTicker"}},"id":"27946","type":"Grid"},{"attributes":{},"id":"27947","type":"BasicTicker"},{"attributes":{"formatter":{"id":"27955","type":"BasicTickFormatter"},"plot":{"id":"27938","type":"Plot"},"ticker":{"id":"27945","type":"BasicTicker"}},"id":"27943","type":"LinearAxis"},{"attributes":{"formatter":{"id":"27957","type":"BasicTickFormatter"},"plot":{"id":"27938","type":"Plot"},"ticker":{"id":"27947","type":"BasicTicker"}},"id":"27944","type":"LinearAxis"},{"attributes":{"source":{"id":"27937","type":"ColumnDataSource"}},"id":"27942","type":"CDSView"},{"attributes":{},"id":"27950","type":"LinearScale"},{"attributes":{},"id":"27945","type":"BasicTicker"},{"attributes":{},"id":"27957","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"27952","type":"DataRange1d"}],"root_ids":["27938"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"ee8f13ef-97e6-49f8-8558-606bf6bec935","roots":{"27938":"57207af9-70c9-4dd9-94e0-4a3d9c946acf"}}];
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