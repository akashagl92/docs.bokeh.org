(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("3167fa09-d163-4aec-9966-5018e7fc77b9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3167fa09-d163-4aec-9966-5018e7fc77b9' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"69add046-c66d-4577-bc6a-1f598f39bb3d":{"roots":{"references":[{"attributes":{"callback":null},"id":"11506","type":"DataRange1d"},{"attributes":{"source":{"id":"11493","type":"ColumnDataSource"}},"id":"11498","type":"CDSView"},{"attributes":{},"id":"11510","type":"BasicTickFormatter"},{"attributes":{},"id":"11512","type":"BasicTickFormatter"},{"attributes":{},"id":"11515","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"11501","type":"BasicTicker"}},"id":"11502","type":"Grid"},{"attributes":{},"id":"11508","type":"LinearScale"},{"attributes":{"formatter":{"id":"11512","type":"BasicTickFormatter"},"ticker":{"id":"11501","type":"BasicTicker"}},"id":"11499","type":"LinearAxis"},{"attributes":{},"id":"11503","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"11503","type":"BasicTicker"}},"id":"11504","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"11505","type":"Toolbar"},{"attributes":{},"id":"11501","type":"BasicTicker"},{"attributes":{"formatter":{"id":"11510","type":"BasicTickFormatter"},"ticker":{"id":"11503","type":"BasicTicker"}},"id":"11500","type":"LinearAxis"},{"attributes":{"cx":{"field":"xp01"},"cy":{"field":"yp01"},"line_color":{"value":"#4daf4a"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"11496","type":"Quadratic"},{"attributes":{"below":[{"id":"11499","type":"LinearAxis"}],"center":[{"id":"11502","type":"Grid"},{"id":"11504","type":"Grid"}],"left":[{"id":"11500","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"11497","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"11505","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"11509","type":"DataRange1d"},"x_scale":{"id":"11507","type":"LinearScale"},"y_range":{"id":"11506","type":"DataRange1d"},"y_scale":{"id":"11508","type":"LinearScale"}},"id":"11494","type":"Plot"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}},"selected":{"id":"11514","type":"Selection"},"selection_policy":{"id":"11515","type":"UnionRenderers"}},"id":"11493","type":"ColumnDataSource"},{"attributes":{},"id":"11514","type":"Selection"},{"attributes":{"callback":null},"id":"11509","type":"DataRange1d"},{"attributes":{},"id":"11507","type":"LinearScale"},{"attributes":{"data_source":{"id":"11493","type":"ColumnDataSource"},"glyph":{"id":"11496","type":"Quadratic"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"11498","type":"CDSView"}},"id":"11497","type":"GlyphRenderer"}],"root_ids":["11494"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"69add046-c66d-4577-bc6a-1f598f39bb3d","roots":{"11494":"3167fa09-d163-4aec-9966-5018e7fc77b9"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();