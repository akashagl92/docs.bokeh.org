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
      };var element = document.getElementById("139e34d1-e06f-4f45-ac88-7867ca61b185");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '139e34d1-e06f-4f45-ac88-7867ca61b185' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"9f8b5db5-04a0-4e24-98bd-31524c2530d6":{"roots":{"references":[{"attributes":{"plot":{"id":"29862","type":"Plot"},"ticker":{"id":"29869","type":"BasicTicker"}},"id":"29870","type":"Grid"},{"attributes":{},"id":"29874","type":"LinearScale"},{"attributes":{"below":[{"id":"29867","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"29868","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"29865","type":"GlyphRenderer"},{"id":"29867","type":"LinearAxis"},{"id":"29868","type":"LinearAxis"},{"id":"29870","type":"Grid"},{"id":"29872","type":"Grid"}],"title":null,"toolbar":{"id":"29873","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29876","type":"DataRange1d"},"x_scale":{"id":"29877","type":"LinearScale"},"y_range":{"id":"29875","type":"DataRange1d"},"y_scale":{"id":"29874","type":"LinearScale"}},"id":"29862","type":"Plot"},{"attributes":{"source":{"id":"29861","type":"ColumnDataSource"}},"id":"29866","type":"CDSView"},{"attributes":{},"id":"29869","type":"BasicTicker"},{"attributes":{"callback":null},"id":"29876","type":"DataRange1d"},{"attributes":{"callback":null},"id":"29875","type":"DataRange1d"},{"attributes":{},"id":"29882","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"29862","type":"Plot"},"ticker":{"id":"29871","type":"BasicTicker"}},"id":"29872","type":"Grid"},{"attributes":{},"id":"29877","type":"LinearScale"},{"attributes":{},"id":"29883","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"29879","type":"BasicTickFormatter"},"plot":{"id":"29862","type":"Plot"},"ticker":{"id":"29869","type":"BasicTicker"}},"id":"29867","type":"LinearAxis"},{"attributes":{},"id":"29871","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"29882","type":"Selection"},"selection_policy":{"id":"29883","type":"UnionRenderers"}},"id":"29861","type":"ColumnDataSource"},{"attributes":{},"id":"29881","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"29873","type":"Toolbar"},{"attributes":{"data_source":{"id":"29861","type":"ColumnDataSource"},"glyph":{"id":"29864","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29866","type":"CDSView"}},"id":"29865","type":"GlyphRenderer"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#b3de69"},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"29864","type":"Wedge"},{"attributes":{},"id":"29879","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"29881","type":"BasicTickFormatter"},"plot":{"id":"29862","type":"Plot"},"ticker":{"id":"29871","type":"BasicTicker"}},"id":"29868","type":"LinearAxis"}],"root_ids":["29862"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"9f8b5db5-04a0-4e24-98bd-31524c2530d6","roots":{"29862":"139e34d1-e06f-4f45-ac88-7867ca61b185"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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