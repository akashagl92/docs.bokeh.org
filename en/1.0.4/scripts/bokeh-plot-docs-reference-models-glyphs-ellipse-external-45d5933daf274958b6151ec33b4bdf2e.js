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
      };var element = document.getElementById("fefc1447-9a14-4d5b-ae06-29d1567ecec6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fefc1447-9a14-4d5b-ae06-29d1567ecec6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"fa62f7f7-cbfd-4a94-aa19-ea9954757508":{"roots":{"references":[{"attributes":{"callback":null},"id":"28065","type":"DataRange1d"},{"attributes":{},"id":"28066","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#cab2d6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"28052","type":"Ellipse"},{"attributes":{"dimension":1,"plot":{"id":"28050","type":"Plot"},"ticker":{"id":"28059","type":"BasicTicker"}},"id":"28060","type":"Grid"},{"attributes":{"source":{"id":"28049","type":"ColumnDataSource"}},"id":"28054","type":"CDSView"},{"attributes":{"plot":{"id":"28050","type":"Plot"},"ticker":{"id":"28057","type":"BasicTicker"}},"id":"28058","type":"Grid"},{"attributes":{},"id":"28059","type":"BasicTicker"},{"attributes":{"data_source":{"id":"28049","type":"ColumnDataSource"},"glyph":{"id":"28052","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"28054","type":"CDSView"}},"id":"28053","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"28071","type":"Selection"},"selection_policy":{"id":"28070","type":"UnionRenderers"}},"id":"28049","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"28066","type":"BasicTickFormatter"},"plot":{"id":"28050","type":"Plot"},"ticker":{"id":"28059","type":"BasicTicker"}},"id":"28056","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"28064","type":"Toolbar"},{"attributes":{"callback":null},"id":"28062","type":"DataRange1d"},{"attributes":{},"id":"28071","type":"Selection"},{"attributes":{},"id":"28068","type":"BasicTickFormatter"},{"attributes":{},"id":"28063","type":"LinearScale"},{"attributes":{"below":[{"id":"28055","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"28056","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"28053","type":"GlyphRenderer"},{"id":"28055","type":"LinearAxis"},{"id":"28056","type":"LinearAxis"},{"id":"28058","type":"Grid"},{"id":"28060","type":"Grid"}],"title":null,"toolbar":{"id":"28064","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"28062","type":"DataRange1d"},"x_scale":{"id":"28061","type":"LinearScale"},"y_range":{"id":"28065","type":"DataRange1d"},"y_scale":{"id":"28063","type":"LinearScale"}},"id":"28050","type":"Plot"},{"attributes":{"formatter":{"id":"28068","type":"BasicTickFormatter"},"plot":{"id":"28050","type":"Plot"},"ticker":{"id":"28057","type":"BasicTicker"}},"id":"28055","type":"LinearAxis"},{"attributes":{},"id":"28070","type":"UnionRenderers"},{"attributes":{},"id":"28061","type":"LinearScale"},{"attributes":{},"id":"28057","type":"BasicTicker"}],"root_ids":["28050"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"fa62f7f7-cbfd-4a94-aa19-ea9954757508","roots":{"28050":"fefc1447-9a14-4d5b-ae06-29d1567ecec6"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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