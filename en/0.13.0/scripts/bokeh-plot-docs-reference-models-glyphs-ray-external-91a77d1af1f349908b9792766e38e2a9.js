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
      };var element = document.getElementById("6a10a16a-c9ba-40c1-a2ef-0fa8c9c9fca7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6a10a16a-c9ba-40c1-a2ef-0fa8c9c9fca7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6bba1ad8-b083-446b-b147-09695a19cd0c":{"roots":{"references":[{"attributes":{"below":[{"id":"3b6e86ac-8398-416c-8c89-ac462423caf9","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"1163a8db-cb9e-4572-8568-6bfbdac3639c","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"74387826-da6f-4670-9bda-802e351994dc","type":"GlyphRenderer"},{"id":"3b6e86ac-8398-416c-8c89-ac462423caf9","type":"LinearAxis"},{"id":"1163a8db-cb9e-4572-8568-6bfbdac3639c","type":"LinearAxis"},{"id":"dab91c27-8caa-4e55-aaf6-ec0dac2d1a2d","type":"Grid"},{"id":"db860d4d-a640-4f5b-b9eb-dd966af0035a","type":"Grid"}],"title":null,"toolbar":{"id":"9a87f64c-0c65-4072-94cc-4d676516ec0d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1329921d-204a-4a13-b34b-b6c41c3e626e","type":"DataRange1d"},"x_scale":{"id":"85d630e4-c537-4e87-b505-2e7df4ef29ba","type":"LinearScale"},"y_range":{"id":"b3a175c5-8a51-4210-95f5-65519ab3cb60","type":"DataRange1d"},"y_scale":{"id":"7305905a-a209-438b-b00a-9ca3a9dfea80","type":"LinearScale"}},"id":"65c22634-cb76-4333-a7f5-1e14726d35d3","type":"Plot"},{"attributes":{"source":{"id":"78715349-79cf-46ca-af93-fa51c74d8585","type":"ColumnDataSource"}},"id":"774939f8-ac71-44a1-9765-f03f631e26c3","type":"CDSView"},{"attributes":{"callback":null},"id":"1329921d-204a-4a13-b34b-b6c41c3e626e","type":"DataRange1d"},{"attributes":{},"id":"60b8c605-cc6d-482f-b528-86f2996e681f","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"65c22634-cb76-4333-a7f5-1e14726d35d3","type":"Plot"},"ticker":{"id":"99b3743f-9a8e-4304-82d5-2c5949547284","type":"BasicTicker"}},"id":"db860d4d-a640-4f5b-b9eb-dd966af0035a","type":"Grid"},{"attributes":{"formatter":{"id":"0655116a-3804-4f1e-a0cf-4ac871173570","type":"BasicTickFormatter"},"plot":{"id":"65c22634-cb76-4333-a7f5-1e14726d35d3","type":"Plot"},"ticker":{"id":"f040e226-73c7-4704-8b03-7afd0ed7e19d","type":"BasicTicker"}},"id":"3b6e86ac-8398-416c-8c89-ac462423caf9","type":"LinearAxis"},{"attributes":{},"id":"f040e226-73c7-4704-8b03-7afd0ed7e19d","type":"BasicTicker"},{"attributes":{},"id":"99b3743f-9a8e-4304-82d5-2c5949547284","type":"BasicTicker"},{"attributes":{"callback":null},"id":"b3a175c5-8a51-4210-95f5-65519ab3cb60","type":"DataRange1d"},{"attributes":{"plot":{"id":"65c22634-cb76-4333-a7f5-1e14726d35d3","type":"Plot"},"ticker":{"id":"f040e226-73c7-4704-8b03-7afd0ed7e19d","type":"BasicTicker"}},"id":"dab91c27-8caa-4e55-aaf6-ec0dac2d1a2d","type":"Grid"},{"attributes":{"data_source":{"id":"78715349-79cf-46ca-af93-fa51c74d8585","type":"ColumnDataSource"},"glyph":{"id":"264c924c-ecfd-48aa-9cea-2d93d2ab827a","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"774939f8-ac71-44a1-9765-f03f631e26c3","type":"CDSView"}},"id":"74387826-da6f-4670-9bda-802e351994dc","type":"GlyphRenderer"},{"attributes":{},"id":"85d630e4-c537-4e87-b505-2e7df4ef29ba","type":"LinearScale"},{"attributes":{"formatter":{"id":"12f4b607-8b3e-4084-be9e-f48fc51f3dfc","type":"BasicTickFormatter"},"plot":{"id":"65c22634-cb76-4333-a7f5-1e14726d35d3","type":"Plot"},"ticker":{"id":"99b3743f-9a8e-4304-82d5-2c5949547284","type":"BasicTicker"}},"id":"1163a8db-cb9e-4572-8568-6bfbdac3639c","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":-2.0},"length":{"field":"l","units":"data"},"line_color":{"value":"#fb8072"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"264c924c-ecfd-48aa-9cea-2d93d2ab827a","type":"Ray"},{"attributes":{},"id":"12f4b607-8b3e-4084-be9e-f48fc51f3dfc","type":"BasicTickFormatter"},{"attributes":{},"id":"7305905a-a209-438b-b00a-9ca3a9dfea80","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"9a87f64c-0c65-4072-94cc-4d676516ec0d","type":"Toolbar"},{"attributes":{},"id":"0655116a-3804-4f1e-a0cf-4ac871173570","type":"BasicTickFormatter"},{"attributes":{},"id":"89cff0e5-24f1-4432-ab0a-7f0dbc192a3a","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"l":{"__ndarray__":"AAAAAAAALkAAAAAAAIAxQAAAAAAAADRAAAAAAACANkAAAAAAAAA5QAAAAAAAgDtAAAAAAAAAPkAAAAAAAEBAQAAAAAAAgEFA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"60b8c605-cc6d-482f-b528-86f2996e681f","type":"Selection"},"selection_policy":{"id":"89cff0e5-24f1-4432-ab0a-7f0dbc192a3a","type":"UnionRenderers"}},"id":"78715349-79cf-46ca-af93-fa51c74d8585","type":"ColumnDataSource"}],"root_ids":["65c22634-cb76-4333-a7f5-1e14726d35d3"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"6bba1ad8-b083-446b-b147-09695a19cd0c","roots":{"65c22634-cb76-4333-a7f5-1e14726d35d3":"6a10a16a-c9ba-40c1-a2ef-0fa8c9c9fca7"}}];
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