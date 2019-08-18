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
      };var element = document.getElementById("ff2bd8cd-f49f-44d8-8c42-461c1cf03ffb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ff2bd8cd-f49f-44d8-8c42-461c1cf03ffb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"24346a74-8ec1-475e-bef8-94e0a3e0fd21":{"roots":{"references":[{"attributes":{},"id":"29388","type":"UnionRenderers"},{"attributes":{},"id":"29379","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"29368","type":"Plot"},"ticker":{"id":"29377","type":"BasicTicker"}},"id":"29378","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#cab2d6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"29370","type":"Rect"},{"attributes":{"callback":null},"id":"29380","type":"DataRange1d"},{"attributes":{"formatter":{"id":"29384","type":"BasicTickFormatter"},"plot":{"id":"29368","type":"Plot"},"ticker":{"id":"29377","type":"BasicTicker"}},"id":"29374","type":"LinearAxis"},{"attributes":{"data_source":{"id":"29367","type":"ColumnDataSource"},"glyph":{"id":"29370","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29372","type":"CDSView"}},"id":"29371","type":"GlyphRenderer"},{"attributes":{},"id":"29389","type":"Selection"},{"attributes":{},"id":"29386","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"29368","type":"Plot"},"ticker":{"id":"29375","type":"BasicTicker"}},"id":"29376","type":"Grid"},{"attributes":{"below":[{"id":"29373","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"29374","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"29371","type":"GlyphRenderer"},{"id":"29373","type":"LinearAxis"},{"id":"29374","type":"LinearAxis"},{"id":"29376","type":"Grid"},{"id":"29378","type":"Grid"}],"title":null,"toolbar":{"id":"29382","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29380","type":"DataRange1d"},"x_scale":{"id":"29379","type":"LinearScale"},"y_range":{"id":"29383","type":"DataRange1d"},"y_scale":{"id":"29381","type":"LinearScale"}},"id":"29368","type":"Plot"},{"attributes":{"formatter":{"id":"29386","type":"BasicTickFormatter"},"plot":{"id":"29368","type":"Plot"},"ticker":{"id":"29375","type":"BasicTicker"}},"id":"29373","type":"LinearAxis"},{"attributes":{},"id":"29381","type":"LinearScale"},{"attributes":{"source":{"id":"29367","type":"ColumnDataSource"}},"id":"29372","type":"CDSView"},{"attributes":{"callback":null,"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"29389","type":"Selection"},"selection_policy":{"id":"29388","type":"UnionRenderers"}},"id":"29367","type":"ColumnDataSource"},{"attributes":{},"id":"29377","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"29382","type":"Toolbar"},{"attributes":{},"id":"29375","type":"BasicTicker"},{"attributes":{"callback":null},"id":"29383","type":"DataRange1d"},{"attributes":{},"id":"29384","type":"BasicTickFormatter"}],"root_ids":["29368"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"24346a74-8ec1-475e-bef8-94e0a3e0fd21","roots":{"29368":"ff2bd8cd-f49f-44d8-8c42-461c1cf03ffb"}}];
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