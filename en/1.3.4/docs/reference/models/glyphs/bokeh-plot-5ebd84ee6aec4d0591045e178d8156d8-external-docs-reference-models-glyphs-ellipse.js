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
      };var element = document.getElementById("56959a9b-5178-4fd6-984f-dec13c60601d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '56959a9b-5178-4fd6-984f-dec13c60601d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f4275165-2511-4888-989a-a8854575bdb2":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"10260","type":"Toolbar"},{"attributes":{"callback":null,"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"10266","type":"Selection"},"selection_policy":{"id":"10267","type":"UnionRenderers"}},"id":"10245","type":"ColumnDataSource"},{"attributes":{},"id":"10257","type":"LinearScale"},{"attributes":{"formatter":{"id":"10263","type":"BasicTickFormatter"},"ticker":{"id":"10255","type":"BasicTicker"}},"id":"10252","type":"LinearAxis"},{"attributes":{},"id":"10263","type":"BasicTickFormatter"},{"attributes":{},"id":"10266","type":"Selection"},{"attributes":{},"id":"10265","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"10245","type":"ColumnDataSource"}},"id":"10250","type":"CDSView"},{"attributes":{},"id":"10255","type":"BasicTicker"},{"attributes":{},"id":"10253","type":"BasicTicker"},{"attributes":{},"id":"10259","type":"LinearScale"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#cab2d6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"10248","type":"Ellipse"},{"attributes":{},"id":"10267","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"10253","type":"BasicTicker"}},"id":"10254","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"10255","type":"BasicTicker"}},"id":"10256","type":"Grid"},{"attributes":{"data_source":{"id":"10245","type":"ColumnDataSource"},"glyph":{"id":"10248","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"10250","type":"CDSView"}},"id":"10249","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"10251","type":"LinearAxis"}],"center":[{"id":"10254","type":"Grid"},{"id":"10256","type":"Grid"}],"left":[{"id":"10252","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"10249","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"10260","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"10261","type":"DataRange1d"},"x_scale":{"id":"10259","type":"LinearScale"},"y_range":{"id":"10258","type":"DataRange1d"},"y_scale":{"id":"10257","type":"LinearScale"}},"id":"10246","type":"Plot"},{"attributes":{"callback":null},"id":"10258","type":"DataRange1d"},{"attributes":{"formatter":{"id":"10265","type":"BasicTickFormatter"},"ticker":{"id":"10253","type":"BasicTicker"}},"id":"10251","type":"LinearAxis"},{"attributes":{"callback":null},"id":"10261","type":"DataRange1d"}],"root_ids":["10246"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"f4275165-2511-4888-989a-a8854575bdb2","roots":{"10246":"56959a9b-5178-4fd6-984f-dec13c60601d"}}];
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