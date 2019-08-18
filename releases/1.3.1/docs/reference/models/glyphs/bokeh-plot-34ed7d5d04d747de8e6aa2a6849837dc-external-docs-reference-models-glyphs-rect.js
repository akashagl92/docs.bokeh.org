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
      };var element = document.getElementById("8012283b-c580-450a-8a8e-e88d85eaf607");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8012283b-c580-450a-8a8e-e88d85eaf607' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"54518c8f-f101-499d-9243-4ae2838f1143":{"roots":{"references":[{"attributes":{"below":[{"id":"11697","type":"LinearAxis"}],"center":[{"id":"11700","type":"Grid"},{"id":"11702","type":"Grid"}],"left":[{"id":"11698","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"11695","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"11703","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"11707","type":"DataRange1d"},"x_scale":{"id":"11705","type":"LinearScale"},"y_range":{"id":"11704","type":"DataRange1d"},"y_scale":{"id":"11706","type":"LinearScale"}},"id":"11692","type":"Plot"},{"attributes":{},"id":"11706","type":"LinearScale"},{"attributes":{"formatter":{"id":"11708","type":"BasicTickFormatter"},"ticker":{"id":"11701","type":"BasicTicker"}},"id":"11698","type":"LinearAxis"},{"attributes":{},"id":"11708","type":"BasicTickFormatter"},{"attributes":{},"id":"11701","type":"BasicTicker"},{"attributes":{},"id":"11699","type":"BasicTicker"},{"attributes":{"ticker":{"id":"11699","type":"BasicTicker"}},"id":"11700","type":"Grid"},{"attributes":{},"id":"11713","type":"UnionRenderers"},{"attributes":{},"id":"11705","type":"LinearScale"},{"attributes":{"callback":null},"id":"11704","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"11703","type":"Toolbar"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#cab2d6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"11694","type":"Rect"},{"attributes":{"callback":null},"id":"11707","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"11712","type":"Selection"},"selection_policy":{"id":"11713","type":"UnionRenderers"}},"id":"11691","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"11701","type":"BasicTicker"}},"id":"11702","type":"Grid"},{"attributes":{"source":{"id":"11691","type":"ColumnDataSource"}},"id":"11696","type":"CDSView"},{"attributes":{},"id":"11710","type":"BasicTickFormatter"},{"attributes":{},"id":"11712","type":"Selection"},{"attributes":{"data_source":{"id":"11691","type":"ColumnDataSource"},"glyph":{"id":"11694","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"11696","type":"CDSView"}},"id":"11695","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"11710","type":"BasicTickFormatter"},"ticker":{"id":"11699","type":"BasicTicker"}},"id":"11697","type":"LinearAxis"}],"root_ids":["11692"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"54518c8f-f101-499d-9243-4ae2838f1143","roots":{"11692":"8012283b-c580-450a-8a8e-e88d85eaf607"}}];
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