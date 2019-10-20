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
      };var element = document.getElementById("d4f6f5c1-2214-46bd-8738-5a6bcb14f8e0");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd4f6f5c1-2214-46bd-8738-5a6bcb14f8e0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9005a61a-5623-4d54-96bd-a68c84173c88":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"11099","type":"Selection"},"selection_policy":{"id":"11100","type":"UnionRenderers"}},"id":"11078","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"11094","type":"DataRange1d"},{"attributes":{},"id":"11086","type":"BasicTicker"},{"attributes":{"formatter":{"id":"11096","type":"BasicTickFormatter"},"ticker":{"id":"11088","type":"BasicTicker"}},"id":"11085","type":"LinearAxis"},{"attributes":{},"id":"11092","type":"LinearScale"},{"attributes":{"formatter":{"id":"11098","type":"BasicTickFormatter"},"ticker":{"id":"11086","type":"BasicTicker"}},"id":"11084","type":"LinearAxis"},{"attributes":{},"id":"11098","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"11091","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"11088","type":"BasicTicker"}},"id":"11089","type":"Grid"},{"attributes":{"data_source":{"id":"11078","type":"ColumnDataSource"},"glyph":{"id":"11081","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"11083","type":"CDSView"}},"id":"11082","type":"GlyphRenderer"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1d91d0"},"height":{"units":"data","value":0.6},"width":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"11081","type":"Oval"},{"attributes":{},"id":"11096","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"11078","type":"ColumnDataSource"}},"id":"11083","type":"CDSView"},{"attributes":{"below":[{"id":"11084","type":"LinearAxis"}],"center":[{"id":"11087","type":"Grid"},{"id":"11089","type":"Grid"}],"left":[{"id":"11085","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"11082","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"11093","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"11094","type":"DataRange1d"},"x_scale":{"id":"11092","type":"LinearScale"},"y_range":{"id":"11091","type":"DataRange1d"},"y_scale":{"id":"11090","type":"LinearScale"}},"id":"11079","type":"Plot"},{"attributes":{},"id":"11100","type":"UnionRenderers"},{"attributes":{},"id":"11090","type":"LinearScale"},{"attributes":{},"id":"11088","type":"BasicTicker"},{"attributes":{"ticker":{"id":"11086","type":"BasicTicker"}},"id":"11087","type":"Grid"},{"attributes":{},"id":"11099","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"11093","type":"Toolbar"}],"root_ids":["11079"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"9005a61a-5623-4d54-96bd-a68c84173c88","roots":{"11079":"d4f6f5c1-2214-46bd-8738-5a6bcb14f8e0"}}];
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