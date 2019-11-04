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
      };var element = document.getElementById("efbdf2ac-6fa4-4dc3-bb24-fd33308a0d08");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'efbdf2ac-6fa4-4dc3-bb24-fd33308a0d08' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"29a80128-bf06-4541-995f-d203f1733a19":{"roots":{"references":[{"attributes":{},"id":"11736","type":"LinearScale"},{"attributes":{},"id":"11742","type":"UnionRenderers"},{"attributes":{},"id":"11743","type":"Selection"},{"attributes":{"callback":null},"id":"11733","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"11743","type":"Selection"},"selection_policy":{"id":"11742","type":"UnionRenderers"}},"id":"11721","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"11737","type":"Toolbar"},{"attributes":{},"id":"11739","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"11735","type":"DataRange1d"},{"attributes":{},"id":"11734","type":"LinearScale"},{"attributes":{},"id":"11731","type":"BasicTicker"},{"attributes":{"formatter":{"id":"11739","type":"BasicTickFormatter"},"ticker":{"id":"11731","type":"BasicTicker"}},"id":"11728","type":"LinearAxis"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#b3de69"},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"11724","type":"Wedge"},{"attributes":{"data_source":{"id":"11721","type":"ColumnDataSource"},"glyph":{"id":"11724","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"11726","type":"CDSView"}},"id":"11725","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"11741","type":"BasicTickFormatter"},"ticker":{"id":"11729","type":"BasicTicker"}},"id":"11727","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"11731","type":"BasicTicker"}},"id":"11732","type":"Grid"},{"attributes":{"ticker":{"id":"11729","type":"BasicTicker"}},"id":"11730","type":"Grid"},{"attributes":{"source":{"id":"11721","type":"ColumnDataSource"}},"id":"11726","type":"CDSView"},{"attributes":{},"id":"11729","type":"BasicTicker"},{"attributes":{},"id":"11741","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"11727","type":"LinearAxis"}],"center":[{"id":"11730","type":"Grid"},{"id":"11732","type":"Grid"}],"left":[{"id":"11728","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"11725","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"11737","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"11733","type":"DataRange1d"},"x_scale":{"id":"11736","type":"LinearScale"},"y_range":{"id":"11735","type":"DataRange1d"},"y_scale":{"id":"11734","type":"LinearScale"}},"id":"11722","type":"Plot"}],"root_ids":["11722"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"29a80128-bf06-4541-995f-d203f1733a19","roots":{"11722":"efbdf2ac-6fa4-4dc3-bb24-fd33308a0d08"}}];
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