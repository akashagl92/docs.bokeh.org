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
      };var element = document.getElementById("35afc945-1b2a-4451-970c-a8aeba5d848c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '35afc945-1b2a-4451-970c-a8aeba5d848c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e21b6682-2c4b-4982-ade0-22a3981d9a47":{"roots":{"references":[{"attributes":{"plot":{"id":"30469","type":"Plot"},"ticker":{"id":"30476","type":"BasicTicker"}},"id":"30477","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"30469","type":"Plot"},"ticker":{"id":"30478","type":"BasicTicker"}},"id":"30479","type":"Grid"},{"attributes":{"callback":null},"id":"30480","type":"DataRange1d"},{"attributes":{},"id":"30482","type":"LinearScale"},{"attributes":{"below":[{"id":"30474","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"30475","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"30472","type":"GlyphRenderer"},{"id":"30474","type":"LinearAxis"},{"id":"30475","type":"LinearAxis"},{"id":"30477","type":"Grid"},{"id":"30479","type":"Grid"}],"title":null,"toolbar":{"id":"30481","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"30483","type":"DataRange1d"},"x_scale":{"id":"30482","type":"LinearScale"},"y_range":{"id":"30480","type":"DataRange1d"},"y_scale":{"id":"30484","type":"LinearScale"}},"id":"30469","type":"Plot"},{"attributes":{"callback":null},"id":"30483","type":"DataRange1d"},{"attributes":{},"id":"30487","type":"BasicTickFormatter"},{"attributes":{},"id":"30484","type":"LinearScale"},{"attributes":{"data_source":{"id":"30468","type":"ColumnDataSource"},"glyph":{"id":"30471","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"30473","type":"CDSView"}},"id":"30472","type":"GlyphRenderer"},{"attributes":{},"id":"30490","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"30487","type":"BasicTickFormatter"},"plot":{"id":"30469","type":"Plot"},"ticker":{"id":"30476","type":"BasicTicker"}},"id":"30474","type":"LinearAxis"},{"attributes":{},"id":"30478","type":"BasicTicker"},{"attributes":{"formatter":{"id":"30485","type":"BasicTickFormatter"},"plot":{"id":"30469","type":"Plot"},"ticker":{"id":"30478","type":"BasicTicker"}},"id":"30475","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"30481","type":"Toolbar"},{"attributes":{},"id":"30489","type":"Selection"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"30489","type":"Selection"},"selection_policy":{"id":"30490","type":"UnionRenderers"}},"id":"30468","type":"ColumnDataSource"},{"attributes":{},"id":"30485","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"30468","type":"ColumnDataSource"}},"id":"30473","type":"CDSView"},{"attributes":{},"id":"30476","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#e6550d"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"30471","type":"Cross"}],"root_ids":["30469"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"e21b6682-2c4b-4982-ade0-22a3981d9a47","roots":{"30469":"35afc945-1b2a-4451-970c-a8aeba5d848c"}}];
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