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
      };var element = document.getElementById("4df2ac63-b1df-4861-8143-1c10d627fedb");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '4df2ac63-b1df-4861-8143-1c10d627fedb' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
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
                    
                  var docs_json = '{"163ded75-b28a-42e2-978c-c94d00b4b541":{"roots":{"references":[{"attributes":{},"id":"13740","type":"BasicTicker"},{"attributes":{"below":[{"id":"13736","type":"LinearAxis"}],"center":[{"id":"13739","type":"Grid"},{"id":"13741","type":"Grid"}],"left":[{"id":"13737","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"13734","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"13745","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"13746","type":"DataRange1d"},"x_scale":{"id":"13744","type":"LinearScale"},"y_range":{"id":"13743","type":"DataRange1d"},"y_scale":{"id":"13742","type":"LinearScale"}},"id":"13731","type":"Plot"},{"attributes":{},"id":"13751","type":"Selection"},{"attributes":{},"id":"13748","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"13730","type":"ColumnDataSource"}},"id":"13735","type":"CDSView"},{"attributes":{},"id":"13750","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"13743","type":"DataRange1d"},{"attributes":{},"id":"13738","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"13740","type":"BasicTicker"}},"id":"13741","type":"Grid"},{"attributes":{"ticker":{"id":"13738","type":"BasicTicker"}},"id":"13739","type":"Grid"},{"attributes":{},"id":"13744","type":"LinearScale"},{"attributes":{"callback":null},"id":"13746","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"13733","type":"SquareX"},{"attributes":{},"id":"13752","type":"UnionRenderers"},{"attributes":{},"id":"13742","type":"LinearScale"},{"attributes":{"data_source":{"id":"13730","type":"ColumnDataSource"},"glyph":{"id":"13733","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"13735","type":"CDSView"}},"id":"13734","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"13748","type":"BasicTickFormatter"},"ticker":{"id":"13740","type":"BasicTicker"}},"id":"13737","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"13745","type":"Toolbar"},{"attributes":{"formatter":{"id":"13750","type":"BasicTickFormatter"},"ticker":{"id":"13738","type":"BasicTicker"}},"id":"13736","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"13751","type":"Selection"},"selection_policy":{"id":"13752","type":"UnionRenderers"}},"id":"13730","type":"ColumnDataSource"}],"root_ids":["13731"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"163ded75-b28a-42e2-978c-c94d00b4b541","roots":{"13731":"4df2ac63-b1df-4861-8143-1c10d627fedb"}}];
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
        
        
        }
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