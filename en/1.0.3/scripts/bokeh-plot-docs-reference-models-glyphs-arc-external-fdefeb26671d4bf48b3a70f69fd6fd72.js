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
      };var element = document.getElementById("23317408-42b7-4ce8-902d-a7ae90143b5c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '23317408-42b7-4ce8-902d-a7ae90143b5c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"84cfcb57-37be-42d3-a4ad-378ced88549d":{"roots":{"references":[{"attributes":{},"id":"27857","type":"LinearScale"},{"attributes":{"callback":null},"id":"27856","type":"DataRange1d"},{"attributes":{"plot":{"id":"27842","type":"Plot"},"ticker":{"id":"27849","type":"BasicTicker"}},"id":"27850","type":"Grid"},{"attributes":{},"id":"27855","type":"LinearScale"},{"attributes":{"data_source":{"id":"27841","type":"ColumnDataSource"},"glyph":{"id":"27844","type":"Arc"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"27846","type":"CDSView"}},"id":"27845","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"27847","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"27848","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"27845","type":"GlyphRenderer"},{"id":"27847","type":"LinearAxis"},{"id":"27848","type":"LinearAxis"},{"id":"27850","type":"Grid"},{"id":"27852","type":"Grid"}],"title":null,"toolbar":{"id":"27854","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27856","type":"DataRange1d"},"x_scale":{"id":"27855","type":"LinearScale"},"y_range":{"id":"27853","type":"DataRange1d"},"y_scale":{"id":"27857","type":"LinearScale"}},"id":"27842","type":"Plot"},{"attributes":{},"id":"27849","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"27854","type":"Toolbar"},{"attributes":{"formatter":{"id":"27858","type":"BasicTickFormatter"},"plot":{"id":"27842","type":"Plot"},"ticker":{"id":"27851","type":"BasicTicker"}},"id":"27848","type":"LinearAxis"},{"attributes":{},"id":"27860","type":"BasicTickFormatter"},{"attributes":{},"id":"27863","type":"UnionRenderers"},{"attributes":{},"id":"27862","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"27842","type":"Plot"},"ticker":{"id":"27851","type":"BasicTicker"}},"id":"27852","type":"Grid"},{"attributes":{},"id":"27851","type":"BasicTicker"},{"attributes":{},"id":"27858","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"27860","type":"BasicTickFormatter"},"plot":{"id":"27842","type":"Plot"},"ticker":{"id":"27849","type":"BasicTicker"}},"id":"27847","type":"LinearAxis"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"line_color":{"value":"#beaed4"},"line_width":{"value":3},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"27844","type":"Arc"},{"attributes":{"callback":null,"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"27862","type":"Selection"},"selection_policy":{"id":"27863","type":"UnionRenderers"}},"id":"27841","type":"ColumnDataSource"},{"attributes":{"source":{"id":"27841","type":"ColumnDataSource"}},"id":"27846","type":"CDSView"},{"attributes":{"callback":null},"id":"27853","type":"DataRange1d"}],"root_ids":["27842"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"84cfcb57-37be-42d3-a4ad-378ced88549d","roots":{"27842":"23317408-42b7-4ce8-902d-a7ae90143b5c"}}];
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