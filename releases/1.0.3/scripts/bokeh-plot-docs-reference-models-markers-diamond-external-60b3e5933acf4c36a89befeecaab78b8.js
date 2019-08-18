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
      };var element = document.getElementById("a8da123e-e6c8-47b3-af6b-89d7e77b630d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a8da123e-e6c8-47b3-af6b-89d7e77b630d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"c371ca28-e22f-4d38-a1ed-3ee7799a8e5e":{"roots":{"references":[{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#1c9099"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"30671","type":"Diamond"},{"attributes":{"dimension":1,"plot":{"id":"30669","type":"Plot"},"ticker":{"id":"30678","type":"BasicTicker"}},"id":"30679","type":"Grid"},{"attributes":{"data_source":{"id":"30668","type":"ColumnDataSource"},"glyph":{"id":"30671","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"30673","type":"CDSView"}},"id":"30672","type":"GlyphRenderer"},{"attributes":{},"id":"30676","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"30681","type":"Toolbar"},{"attributes":{"source":{"id":"30668","type":"ColumnDataSource"}},"id":"30673","type":"CDSView"},{"attributes":{"formatter":{"id":"30687","type":"BasicTickFormatter"},"plot":{"id":"30669","type":"Plot"},"ticker":{"id":"30676","type":"BasicTicker"}},"id":"30674","type":"LinearAxis"},{"attributes":{},"id":"30678","type":"BasicTicker"},{"attributes":{},"id":"30684","type":"LinearScale"},{"attributes":{},"id":"30690","type":"UnionRenderers"},{"attributes":{"plot":{"id":"30669","type":"Plot"},"ticker":{"id":"30676","type":"BasicTicker"}},"id":"30677","type":"Grid"},{"attributes":{},"id":"30682","type":"LinearScale"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"30689","type":"Selection"},"selection_policy":{"id":"30690","type":"UnionRenderers"}},"id":"30668","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"30680","type":"DataRange1d"},{"attributes":{},"id":"30685","type":"BasicTickFormatter"},{"attributes":{},"id":"30687","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"30674","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"30675","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"30672","type":"GlyphRenderer"},{"id":"30674","type":"LinearAxis"},{"id":"30675","type":"LinearAxis"},{"id":"30677","type":"Grid"},{"id":"30679","type":"Grid"}],"title":null,"toolbar":{"id":"30681","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"30683","type":"DataRange1d"},"x_scale":{"id":"30682","type":"LinearScale"},"y_range":{"id":"30680","type":"DataRange1d"},"y_scale":{"id":"30684","type":"LinearScale"}},"id":"30669","type":"Plot"},{"attributes":{"callback":null},"id":"30683","type":"DataRange1d"},{"attributes":{"formatter":{"id":"30685","type":"BasicTickFormatter"},"plot":{"id":"30669","type":"Plot"},"ticker":{"id":"30678","type":"BasicTicker"}},"id":"30675","type":"LinearAxis"},{"attributes":{},"id":"30689","type":"Selection"}],"root_ids":["30669"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"c371ca28-e22f-4d38-a1ed-3ee7799a8e5e","roots":{"30669":"a8da123e-e6c8-47b3-af6b-89d7e77b630d"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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