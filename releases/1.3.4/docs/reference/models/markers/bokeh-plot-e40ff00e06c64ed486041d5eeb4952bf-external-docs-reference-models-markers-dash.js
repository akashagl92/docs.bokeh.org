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
      };var element = document.getElementById("3ba7db92-1123-4131-adca-5b5f95262cd8");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3ba7db92-1123-4131-adca-5b5f95262cd8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e99bd52c-a5f3-4871-bf68-722517f44042":{"roots":{"references":[{"attributes":{"formatter":{"id":"13048","type":"BasicTickFormatter"},"ticker":{"id":"13040","type":"BasicTicker"}},"id":"13037","type":"LinearAxis"},{"attributes":{"below":[{"id":"13036","type":"LinearAxis"}],"center":[{"id":"13039","type":"Grid"},{"id":"13041","type":"Grid"}],"left":[{"id":"13037","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"13034","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"13045","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"13046","type":"DataRange1d"},"x_scale":{"id":"13044","type":"LinearScale"},"y_range":{"id":"13043","type":"DataRange1d"},"y_scale":{"id":"13042","type":"LinearScale"}},"id":"13031","type":"Plot"},{"attributes":{},"id":"13044","type":"LinearScale"},{"attributes":{"callback":null},"id":"13046","type":"DataRange1d"},{"attributes":{"ticker":{"id":"13038","type":"BasicTicker"}},"id":"13039","type":"Grid"},{"attributes":{"data_source":{"id":"13030","type":"ColumnDataSource"},"glyph":{"id":"13033","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"13035","type":"CDSView"}},"id":"13034","type":"GlyphRenderer"},{"attributes":{},"id":"13042","type":"LinearScale"},{"attributes":{},"id":"13052","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"13043","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"13051","type":"Selection"},"selection_policy":{"id":"13052","type":"UnionRenderers"}},"id":"13030","type":"ColumnDataSource"},{"attributes":{},"id":"13051","type":"Selection"},{"attributes":{},"id":"13038","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#3288bd"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"13033","type":"Dash"},{"attributes":{},"id":"13050","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"13045","type":"Toolbar"},{"attributes":{"formatter":{"id":"13050","type":"BasicTickFormatter"},"ticker":{"id":"13038","type":"BasicTicker"}},"id":"13036","type":"LinearAxis"},{"attributes":{},"id":"13048","type":"BasicTickFormatter"},{"attributes":{},"id":"13040","type":"BasicTicker"},{"attributes":{"source":{"id":"13030","type":"ColumnDataSource"}},"id":"13035","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"13040","type":"BasicTicker"}},"id":"13041","type":"Grid"}],"root_ids":["13031"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"e99bd52c-a5f3-4871-bf68-722517f44042","roots":{"13031":"3ba7db92-1123-4131-adca-5b5f95262cd8"}}];
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