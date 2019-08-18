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
      };var element = document.getElementById("95d23932-c551-451f-87e8-9c076533163d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '95d23932-c551-451f-87e8-9c076533163d' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js"];
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
                    
                  var docs_json = '{"433da53d-ff70-4e8a-af75-6d9e1cac82b9":{"roots":{"references":[{"attributes":{"below":[{"id":"11393","type":"LinearAxis"}],"center":[{"id":"11396","type":"Grid"},{"id":"11398","type":"Grid"}],"left":[{"id":"11394","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"11391","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"11403","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"11402","type":"DataRange1d"},"x_scale":{"id":"11401","type":"LinearScale"},"y_range":{"id":"11400","type":"DataRange1d"},"y_scale":{"id":"11399","type":"LinearScale"}},"id":"11388","type":"Plot"},{"attributes":{},"id":"11409","type":"Selection"},{"attributes":{},"id":"11397","type":"BasicTicker"},{"attributes":{"callback":null},"id":"11402","type":"DataRange1d"},{"attributes":{},"id":"11401","type":"LinearScale"},{"attributes":{},"id":"11404","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]},"left":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"right":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"top":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"11409","type":"Selection"},"selection_policy":{"id":"11408","type":"UnionRenderers"}},"id":"11387","type":"ColumnDataSource"},{"attributes":{},"id":"11399","type":"LinearScale"},{"attributes":{},"id":"11395","type":"BasicTicker"},{"attributes":{"source":{"id":"11387","type":"ColumnDataSource"}},"id":"11392","type":"CDSView"},{"attributes":{"formatter":{"id":"11406","type":"BasicTickFormatter"},"ticker":{"id":"11397","type":"BasicTicker"}},"id":"11394","type":"LinearAxis"},{"attributes":{"callback":null},"id":"11400","type":"DataRange1d"},{"attributes":{},"id":"11408","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"11397","type":"BasicTicker"}},"id":"11398","type":"Grid"},{"attributes":{},"id":"11406","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"11395","type":"BasicTicker"}},"id":"11396","type":"Grid"},{"attributes":{"data_source":{"id":"11387","type":"ColumnDataSource"},"glyph":{"id":"11390","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"11392","type":"CDSView"}},"id":"11391","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"11404","type":"BasicTickFormatter"},"ticker":{"id":"11395","type":"BasicTicker"}},"id":"11393","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"11403","type":"Toolbar"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#b3de69"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"11390","type":"Quad"}],"root_ids":["11388"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"433da53d-ff70-4e8a-af75-6d9e1cac82b9","roots":{"11388":"95d23932-c551-451f-87e8-9c076533163d"}}];
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