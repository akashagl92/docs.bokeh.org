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
      };var element = document.getElementById("43971963-c2f8-4142-9c4a-00ed20d7b0ee");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '43971963-c2f8-4142-9c4a-00ed20d7b0ee' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"f84fe01b-9147-4bb4-85b9-e371ad86ce2c":{"roots":{"references":[{"attributes":{},"id":"370ce58d-eb60-49c1-bf17-fb1449b48f82","type":"BasicTickFormatter"},{"attributes":{},"id":"a2127047-adb0-4323-939e-1a19ae4f49bd","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"f7da98ff-4a95-4128-8e11-c6584045f278","type":"ColumnDataSource"}},"id":"71fef77b-26ac-4406-8ed6-d59d5ce51d95","type":"CDSView"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#dd1c77"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c39b3b41-ee1c-4894-944a-8af65f4d59e5","type":"CircleX"},{"attributes":{},"id":"dc37aca4-2efb-4e7a-b29c-86eef77b0d59","type":"LinearScale"},{"attributes":{},"id":"74b5c750-694b-4c50-88f1-d512656fe764","type":"LinearScale"},{"attributes":{"plot":{"id":"e9e95534-6a0a-4e8b-a274-18f8629d047e","type":"Plot"},"ticker":{"id":"72079922-7060-402d-aa74-5b2529f54d1f","type":"BasicTicker"}},"id":"ca56eb4c-0420-456d-ae85-5c4b4d51d884","type":"Grid"},{"attributes":{"below":[{"id":"7f597b6c-7b19-409c-822a-b5a7f9189c8c","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"90aa5478-594a-46ac-a9ba-23ff26d7a163","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"10b010f0-75ae-4691-8a48-4db3b4ae01c5","type":"GlyphRenderer"},{"id":"7f597b6c-7b19-409c-822a-b5a7f9189c8c","type":"LinearAxis"},{"id":"90aa5478-594a-46ac-a9ba-23ff26d7a163","type":"LinearAxis"},{"id":"ca56eb4c-0420-456d-ae85-5c4b4d51d884","type":"Grid"},{"id":"c50a9cb0-4c5e-403a-b156-d7ecebe014c8","type":"Grid"}],"title":null,"toolbar":{"id":"77d0166d-f7e7-4074-835c-2de500c9c9b2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f321644b-7420-44db-ac25-2ef4e007b6e1","type":"DataRange1d"},"x_scale":{"id":"dc37aca4-2efb-4e7a-b29c-86eef77b0d59","type":"LinearScale"},"y_range":{"id":"a077353b-2674-473c-b9cc-91657e56f87c","type":"DataRange1d"},"y_scale":{"id":"74b5c750-694b-4c50-88f1-d512656fe764","type":"LinearScale"}},"id":"e9e95534-6a0a-4e8b-a274-18f8629d047e","type":"Plot"},{"attributes":{"formatter":{"id":"a2127047-adb0-4323-939e-1a19ae4f49bd","type":"BasicTickFormatter"},"plot":{"id":"e9e95534-6a0a-4e8b-a274-18f8629d047e","type":"Plot"},"ticker":{"id":"72079922-7060-402d-aa74-5b2529f54d1f","type":"BasicTicker"}},"id":"7f597b6c-7b19-409c-822a-b5a7f9189c8c","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"77d0166d-f7e7-4074-835c-2de500c9c9b2","type":"Toolbar"},{"attributes":{"callback":null},"id":"f321644b-7420-44db-ac25-2ef4e007b6e1","type":"DataRange1d"},{"attributes":{},"id":"9ec3ec66-2454-4e45-b30d-6c015cc9a683","type":"BasicTicker"},{"attributes":{"formatter":{"id":"370ce58d-eb60-49c1-bf17-fb1449b48f82","type":"BasicTickFormatter"},"plot":{"id":"e9e95534-6a0a-4e8b-a274-18f8629d047e","type":"Plot"},"ticker":{"id":"9ec3ec66-2454-4e45-b30d-6c015cc9a683","type":"BasicTicker"}},"id":"90aa5478-594a-46ac-a9ba-23ff26d7a163","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"f7da98ff-4a95-4128-8e11-c6584045f278","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f7da98ff-4a95-4128-8e11-c6584045f278","type":"ColumnDataSource"},"glyph":{"id":"c39b3b41-ee1c-4894-944a-8af65f4d59e5","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"71fef77b-26ac-4406-8ed6-d59d5ce51d95","type":"CDSView"}},"id":"10b010f0-75ae-4691-8a48-4db3b4ae01c5","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"e9e95534-6a0a-4e8b-a274-18f8629d047e","type":"Plot"},"ticker":{"id":"9ec3ec66-2454-4e45-b30d-6c015cc9a683","type":"BasicTicker"}},"id":"c50a9cb0-4c5e-403a-b156-d7ecebe014c8","type":"Grid"},{"attributes":{},"id":"72079922-7060-402d-aa74-5b2529f54d1f","type":"BasicTicker"},{"attributes":{"callback":null},"id":"a077353b-2674-473c-b9cc-91657e56f87c","type":"DataRange1d"}],"root_ids":["e9e95534-6a0a-4e8b-a274-18f8629d047e"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"f84fe01b-9147-4bb4-85b9-e371ad86ce2c","elementid":"43971963-c2f8-4142-9c4a-00ed20d7b0ee","modelid":"e9e95534-6a0a-4e8b-a274-18f8629d047e"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
