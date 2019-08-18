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
      };var element = document.getElementById("c9fb6a7a-3793-4802-be7f-b68724c819a6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c9fb6a7a-3793-4802-be7f-b68724c819a6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"5f67c29e-323a-40a1-8ff6-3ea1d7da40c7":{"roots":{"references":[{"attributes":{"below":[{"id":"28046","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"28047","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"28044","type":"GlyphRenderer"},{"id":"28046","type":"LinearAxis"},{"id":"28047","type":"LinearAxis"},{"id":"28049","type":"Grid"},{"id":"28051","type":"Grid"}],"title":null,"toolbar":{"id":"28052","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"28055","type":"DataRange1d"},"x_scale":{"id":"28053","type":"LinearScale"},"y_range":{"id":"28054","type":"DataRange1d"},"y_scale":{"id":"28056","type":"LinearScale"}},"id":"28041","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"28052","type":"Toolbar"},{"attributes":{"callback":null},"id":"28055","type":"DataRange1d"},{"attributes":{"formatter":{"id":"28058","type":"BasicTickFormatter"},"plot":{"id":"28041","type":"Plot"},"ticker":{"id":"28048","type":"BasicTicker"}},"id":"28046","type":"LinearAxis"},{"attributes":{},"id":"28053","type":"LinearScale"},{"attributes":{"formatter":{"id":"28060","type":"BasicTickFormatter"},"plot":{"id":"28041","type":"Plot"},"ticker":{"id":"28050","type":"BasicTicker"}},"id":"28047","type":"LinearAxis"},{"attributes":{},"id":"28060","type":"BasicTickFormatter"},{"attributes":{},"id":"28062","type":"Selection"},{"attributes":{},"id":"28058","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"28041","type":"Plot"},"ticker":{"id":"28048","type":"BasicTicker"}},"id":"28049","type":"Grid"},{"attributes":{},"id":"28050","type":"BasicTicker"},{"attributes":{},"id":"28061","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"28041","type":"Plot"},"ticker":{"id":"28050","type":"BasicTicker"}},"id":"28051","type":"Grid"},{"attributes":{},"id":"28048","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#cab2d6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"28043","type":"Ellipse"},{"attributes":{},"id":"28056","type":"LinearScale"},{"attributes":{"callback":null,"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"28062","type":"Selection"},"selection_policy":{"id":"28061","type":"UnionRenderers"}},"id":"28040","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"28040","type":"ColumnDataSource"},"glyph":{"id":"28043","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"28045","type":"CDSView"}},"id":"28044","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"28054","type":"DataRange1d"},{"attributes":{"source":{"id":"28040","type":"ColumnDataSource"}},"id":"28045","type":"CDSView"}],"root_ids":["28041"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"5f67c29e-323a-40a1-8ff6-3ea1d7da40c7","roots":{"28041":"c9fb6a7a-3793-4802-be7f-b68724c819a6"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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