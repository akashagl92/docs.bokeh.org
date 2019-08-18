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
      };var element = document.getElementById("989df044-27c5-4573-9f8d-0f22122d65c8");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '989df044-27c5-4573-9f8d-0f22122d65c8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"79dc29d0-e6fd-4257-b820-6577d158a8fd":{"roots":{"references":[{"attributes":{"end_angle":{"units":"rad","value":4.1},"line_color":{"value":"#beaed4"},"line_width":{"value":3},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"9700","type":"Arc"},{"attributes":{},"id":"9712","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"9707","type":"BasicTicker"}},"id":"9708","type":"Grid"},{"attributes":{},"id":"9717","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"9709","type":"DataRange1d"},{"attributes":{},"id":"9707","type":"BasicTicker"},{"attributes":{"source":{"id":"9697","type":"ColumnDataSource"}},"id":"9702","type":"CDSView"},{"attributes":{},"id":"9715","type":"BasicTickFormatter"},{"attributes":{},"id":"9719","type":"Selection"},{"attributes":{"formatter":{"id":"9717","type":"BasicTickFormatter"},"ticker":{"id":"9705","type":"BasicTicker"}},"id":"9703","type":"LinearAxis"},{"attributes":{},"id":"9710","type":"LinearScale"},{"attributes":{"callback":null,"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"9719","type":"Selection"},"selection_policy":{"id":"9718","type":"UnionRenderers"}},"id":"9697","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"9715","type":"BasicTickFormatter"},"ticker":{"id":"9707","type":"BasicTicker"}},"id":"9704","type":"LinearAxis"},{"attributes":{"callback":null},"id":"9711","type":"DataRange1d"},{"attributes":{"data_source":{"id":"9697","type":"ColumnDataSource"},"glyph":{"id":"9700","type":"Arc"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"9702","type":"CDSView"}},"id":"9701","type":"GlyphRenderer"},{"attributes":{},"id":"9718","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"9705","type":"BasicTicker"}},"id":"9706","type":"Grid"},{"attributes":{},"id":"9705","type":"BasicTicker"},{"attributes":{"below":[{"id":"9703","type":"LinearAxis"}],"center":[{"id":"9706","type":"Grid"},{"id":"9708","type":"Grid"}],"left":[{"id":"9704","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"9701","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"9713","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9709","type":"DataRange1d"},"x_scale":{"id":"9712","type":"LinearScale"},"y_range":{"id":"9711","type":"DataRange1d"},"y_scale":{"id":"9710","type":"LinearScale"}},"id":"9698","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"9713","type":"Toolbar"}],"root_ids":["9698"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"79dc29d0-e6fd-4257-b820-6577d158a8fd","roots":{"9698":"989df044-27c5-4573-9f8d-0f22122d65c8"}}];
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