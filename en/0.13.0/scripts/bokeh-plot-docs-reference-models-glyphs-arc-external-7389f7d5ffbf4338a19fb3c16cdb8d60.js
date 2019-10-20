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
      };var element = document.getElementById("90b2c654-a261-49b4-a882-8903c15af29d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '90b2c654-a261-49b4-a882-8903c15af29d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"353d75ca-a09f-41f1-940b-c6864a9388c8":{"roots":{"references":[{"attributes":{},"id":"69b80929-a116-4ddd-84a5-d9646348ff97","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"45aa6a0c-0a26-4dd2-9932-2e586e2592dd","type":"Plot"},"ticker":{"id":"2dfeb2b0-45a8-46c2-bdf2-3e1c356c9fc6","type":"BasicTicker"}},"id":"5e6f2de5-ef98-44dd-b9a6-6c2f16dda480","type":"Grid"},{"attributes":{"callback":null},"id":"ef2242c9-a04f-4c1e-92ef-6f3d623e6c09","type":"DataRange1d"},{"attributes":{"below":[{"id":"fe78ea7a-036e-40e5-8c16-8ab38de31846","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"d17d39a3-d904-45e6-8d00-4a37108b4eb8","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"2addc8db-1e81-4836-a573-7763f5fe8495","type":"GlyphRenderer"},{"id":"fe78ea7a-036e-40e5-8c16-8ab38de31846","type":"LinearAxis"},{"id":"d17d39a3-d904-45e6-8d00-4a37108b4eb8","type":"LinearAxis"},{"id":"08c7f217-19df-44c2-ad3c-3c1e5b0beb3c","type":"Grid"},{"id":"5e6f2de5-ef98-44dd-b9a6-6c2f16dda480","type":"Grid"}],"title":null,"toolbar":{"id":"01dd91ce-8a17-4c46-9348-92b474c0cf46","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ef2242c9-a04f-4c1e-92ef-6f3d623e6c09","type":"DataRange1d"},"x_scale":{"id":"c32a4a61-1a41-41a5-8d84-26289966c111","type":"LinearScale"},"y_range":{"id":"f050cf13-5701-44e2-8278-e16890b1da80","type":"DataRange1d"},"y_scale":{"id":"eb6f8661-cce9-496d-a1df-bf67c36bb686","type":"LinearScale"}},"id":"45aa6a0c-0a26-4dd2-9932-2e586e2592dd","type":"Plot"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"line_color":{"value":"#beaed4"},"line_width":{"value":3},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"91450943-e868-4211-90ad-5c1b340b0bc6","type":"Arc"},{"attributes":{},"id":"c90220a9-7d4e-4b30-884e-6f5340826f71","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"bd9070b7-3a6b-42d8-aaca-309f89655bfe","type":"Selection"},"selection_policy":{"id":"c90220a9-7d4e-4b30-884e-6f5340826f71","type":"UnionRenderers"}},"id":"ea240cd5-b8f3-44d6-afab-9f3501a1f925","type":"ColumnDataSource"},{"attributes":{"source":{"id":"ea240cd5-b8f3-44d6-afab-9f3501a1f925","type":"ColumnDataSource"}},"id":"405ffd6d-1bae-4988-a76c-87b58d282233","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"01dd91ce-8a17-4c46-9348-92b474c0cf46","type":"Toolbar"},{"attributes":{"callback":null},"id":"f050cf13-5701-44e2-8278-e16890b1da80","type":"DataRange1d"},{"attributes":{},"id":"bd9070b7-3a6b-42d8-aaca-309f89655bfe","type":"Selection"},{"attributes":{},"id":"2a03c736-45e9-4922-8bb8-140162fe272a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"45aa6a0c-0a26-4dd2-9932-2e586e2592dd","type":"Plot"},"ticker":{"id":"037fb6a7-7cf2-4f8c-a646-813d5bbf8b36","type":"BasicTicker"}},"id":"08c7f217-19df-44c2-ad3c-3c1e5b0beb3c","type":"Grid"},{"attributes":{},"id":"eb6f8661-cce9-496d-a1df-bf67c36bb686","type":"LinearScale"},{"attributes":{},"id":"c32a4a61-1a41-41a5-8d84-26289966c111","type":"LinearScale"},{"attributes":{"formatter":{"id":"2a03c736-45e9-4922-8bb8-140162fe272a","type":"BasicTickFormatter"},"plot":{"id":"45aa6a0c-0a26-4dd2-9932-2e586e2592dd","type":"Plot"},"ticker":{"id":"037fb6a7-7cf2-4f8c-a646-813d5bbf8b36","type":"BasicTicker"}},"id":"fe78ea7a-036e-40e5-8c16-8ab38de31846","type":"LinearAxis"},{"attributes":{"formatter":{"id":"69b80929-a116-4ddd-84a5-d9646348ff97","type":"BasicTickFormatter"},"plot":{"id":"45aa6a0c-0a26-4dd2-9932-2e586e2592dd","type":"Plot"},"ticker":{"id":"2dfeb2b0-45a8-46c2-bdf2-3e1c356c9fc6","type":"BasicTicker"}},"id":"d17d39a3-d904-45e6-8d00-4a37108b4eb8","type":"LinearAxis"},{"attributes":{},"id":"2dfeb2b0-45a8-46c2-bdf2-3e1c356c9fc6","type":"BasicTicker"},{"attributes":{},"id":"037fb6a7-7cf2-4f8c-a646-813d5bbf8b36","type":"BasicTicker"},{"attributes":{"data_source":{"id":"ea240cd5-b8f3-44d6-afab-9f3501a1f925","type":"ColumnDataSource"},"glyph":{"id":"91450943-e868-4211-90ad-5c1b340b0bc6","type":"Arc"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"405ffd6d-1bae-4988-a76c-87b58d282233","type":"CDSView"}},"id":"2addc8db-1e81-4836-a573-7763f5fe8495","type":"GlyphRenderer"}],"root_ids":["45aa6a0c-0a26-4dd2-9932-2e586e2592dd"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"353d75ca-a09f-41f1-940b-c6864a9388c8","roots":{"45aa6a0c-0a26-4dd2-9932-2e586e2592dd":"90b2c654-a261-49b4-a882-8903c15af29d"}}];
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