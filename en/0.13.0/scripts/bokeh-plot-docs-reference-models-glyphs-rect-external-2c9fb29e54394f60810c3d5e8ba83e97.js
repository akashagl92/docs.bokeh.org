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
      };var element = document.getElementById("d0a5dd4d-91c1-48bf-92ea-f4c200e5b9c8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd0a5dd4d-91c1-48bf-92ea-f4c200e5b9c8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"be0d771c-37fe-4960-a2ce-3868135279f9":{"roots":{"references":[{"attributes":{"data_source":{"id":"d9755656-1dcd-4d8d-b3a2-4ce517fb6013","type":"ColumnDataSource"},"glyph":{"id":"f54c5ca4-60b4-4085-8ad6-c231ebfa79f6","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"536ad19e-68bc-4acf-978a-f5655f342661","type":"CDSView"}},"id":"9078020a-788b-4d90-ab14-b49467e5eee0","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"0774693b-2f8f-4675-8241-433f4d6b4bdf","type":"Plot"},"ticker":{"id":"001e43ba-6f26-476e-b624-fa1c132decc6","type":"BasicTicker"}},"id":"ead7fa42-4433-4061-ad14-ec4a53b77cac","type":"Grid"},{"attributes":{"formatter":{"id":"e281fcf6-b924-48d5-bea2-cb18ed749aa3","type":"BasicTickFormatter"},"plot":{"id":"0774693b-2f8f-4675-8241-433f4d6b4bdf","type":"Plot"},"ticker":{"id":"001e43ba-6f26-476e-b624-fa1c132decc6","type":"BasicTicker"}},"id":"927eb7f6-f3bf-488a-b83c-b716a8a0a4a3","type":"LinearAxis"},{"attributes":{"source":{"id":"d9755656-1dcd-4d8d-b3a2-4ce517fb6013","type":"ColumnDataSource"}},"id":"536ad19e-68bc-4acf-978a-f5655f342661","type":"CDSView"},{"attributes":{},"id":"001e43ba-6f26-476e-b624-fa1c132decc6","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"0774693b-2f8f-4675-8241-433f4d6b4bdf","type":"Plot"},"ticker":{"id":"124c4d21-4b21-4c15-a23d-52a39ed0a4df","type":"BasicTicker"}},"id":"8be397c9-c98d-42eb-b52a-e630deebc974","type":"Grid"},{"attributes":{},"id":"f9213bb9-33c1-4859-94d9-d4a93135be52","type":"Selection"},{"attributes":{},"id":"c687c60b-9949-454c-b8ad-3f46625aed50","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"889906de-ec1e-4d60-9e6d-61d1bb8ce3e1","type":"Toolbar"},{"attributes":{"callback":null,"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"f9213bb9-33c1-4859-94d9-d4a93135be52","type":"Selection"},"selection_policy":{"id":"c687c60b-9949-454c-b8ad-3f46625aed50","type":"UnionRenderers"}},"id":"d9755656-1dcd-4d8d-b3a2-4ce517fb6013","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"d196b3ab-68dc-4770-81b0-bf24f3f3c85c","type":"DataRange1d"},{"attributes":{},"id":"230d6077-1230-43fb-81da-7266eccb5fc0","type":"LinearScale"},{"attributes":{},"id":"4da70063-5f14-439b-8ac1-c50d47bb4f52","type":"LinearScale"},{"attributes":{},"id":"124c4d21-4b21-4c15-a23d-52a39ed0a4df","type":"BasicTicker"},{"attributes":{"callback":null},"id":"426a6c93-5efd-4815-a0a4-d51b5890f265","type":"DataRange1d"},{"attributes":{"below":[{"id":"927eb7f6-f3bf-488a-b83c-b716a8a0a4a3","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"60edcf90-8e48-4dd2-bcfa-8615b342b792","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"9078020a-788b-4d90-ab14-b49467e5eee0","type":"GlyphRenderer"},{"id":"927eb7f6-f3bf-488a-b83c-b716a8a0a4a3","type":"LinearAxis"},{"id":"60edcf90-8e48-4dd2-bcfa-8615b342b792","type":"LinearAxis"},{"id":"ead7fa42-4433-4061-ad14-ec4a53b77cac","type":"Grid"},{"id":"8be397c9-c98d-42eb-b52a-e630deebc974","type":"Grid"}],"title":null,"toolbar":{"id":"889906de-ec1e-4d60-9e6d-61d1bb8ce3e1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"426a6c93-5efd-4815-a0a4-d51b5890f265","type":"DataRange1d"},"x_scale":{"id":"230d6077-1230-43fb-81da-7266eccb5fc0","type":"LinearScale"},"y_range":{"id":"d196b3ab-68dc-4770-81b0-bf24f3f3c85c","type":"DataRange1d"},"y_scale":{"id":"4da70063-5f14-439b-8ac1-c50d47bb4f52","type":"LinearScale"}},"id":"0774693b-2f8f-4675-8241-433f4d6b4bdf","type":"Plot"},{"attributes":{},"id":"e281fcf6-b924-48d5-bea2-cb18ed749aa3","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"20794923-60a4-4619-a3c0-3a5c90461e6d","type":"BasicTickFormatter"},"plot":{"id":"0774693b-2f8f-4675-8241-433f4d6b4bdf","type":"Plot"},"ticker":{"id":"124c4d21-4b21-4c15-a23d-52a39ed0a4df","type":"BasicTicker"}},"id":"60edcf90-8e48-4dd2-bcfa-8615b342b792","type":"LinearAxis"},{"attributes":{},"id":"20794923-60a4-4619-a3c0-3a5c90461e6d","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#cab2d6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f54c5ca4-60b4-4085-8ad6-c231ebfa79f6","type":"Rect"}],"root_ids":["0774693b-2f8f-4675-8241-433f4d6b4bdf"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"be0d771c-37fe-4960-a2ce-3868135279f9","roots":{"0774693b-2f8f-4675-8241-433f4d6b4bdf":"d0a5dd4d-91c1-48bf-92ea-f4c200e5b9c8"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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