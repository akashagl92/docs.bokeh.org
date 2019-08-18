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
      };var element = document.getElementById("f1a87f4e-db56-44ec-9024-25529343c8b2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f1a87f4e-db56-44ec-9024-25529343c8b2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"178641f8-f639-4045-a992-5d12ad42ce46":{"roots":{"references":[{"attributes":{},"id":"5fb2bbbb-a226-44bc-861f-4c048fce5d1d","type":"UnionRenderers"},{"attributes":{"plot":{"id":"8b3d236c-5e78-4491-b670-2dc5e8f38e29","type":"Plot"},"ticker":{"id":"46b6e125-1d61-4e97-9ab3-6c40ea14452e","type":"BasicTicker"}},"id":"cb0c7cd2-a601-4951-9715-f7a77bdee55d","type":"Grid"},{"attributes":{"fill_color":{"value":"#fb9a99"},"line_color":{"value":"white"},"q":{"field":"q"},"r":{"field":"r"}},"id":"01cdcd42-2585-479e-997d-7ae9db7e00dd","type":"HexTile"},{"attributes":{"callback":null,"data":{"q":[0,0,-1,-1,1,1,0],"r":[0,-1,0,1,-1,0,1]},"selected":{"id":"b6793707-c3c3-4477-a1ba-c329cf3e278d","type":"Selection"},"selection_policy":{"id":"5fb2bbbb-a226-44bc-861f-4c048fce5d1d","type":"UnionRenderers"}},"id":"9a4e65ee-9fad-4b8d-ab52-3ae6f4acbc9c","type":"ColumnDataSource"},{"attributes":{},"id":"de816a8a-4ada-45d9-9898-cf3fe55ba2a4","type":"BasicTickFormatter"},{"attributes":{},"id":"fbcefaf5-7bf4-4c75-a85d-74ec38066074","type":"LinearScale"},{"attributes":{},"id":"46b6e125-1d61-4e97-9ab3-6c40ea14452e","type":"BasicTicker"},{"attributes":{},"id":"1745eb52-79c4-486e-8c23-51af4aafdd84","type":"LinearScale"},{"attributes":{},"id":"68745262-9bfd-49e9-ac53-fbe217c87857","type":"BasicTicker"},{"attributes":{},"id":"b6793707-c3c3-4477-a1ba-c329cf3e278d","type":"Selection"},{"attributes":{"callback":null},"id":"8a6cc084-c4ac-4c03-b326-f0149cc3645f","type":"DataRange1d"},{"attributes":{"below":[{"id":"d22d28ef-9f64-4ee6-aa66-ddbab7768456","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"fe24bb11-34cf-42d5-8e74-9c8f4ade429b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"1a022ebf-f76d-4a6a-a484-9099e8c4adaf","type":"GlyphRenderer"},{"id":"d22d28ef-9f64-4ee6-aa66-ddbab7768456","type":"LinearAxis"},{"id":"fe24bb11-34cf-42d5-8e74-9c8f4ade429b","type":"LinearAxis"},{"id":"cb0c7cd2-a601-4951-9715-f7a77bdee55d","type":"Grid"},{"id":"73e52148-d257-4307-8cb1-08fa7090e4f8","type":"Grid"}],"title":null,"toolbar":{"id":"4b2931f6-8875-4714-9b22-e71e54f0b46d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"59bcf53e-99b8-4f38-82b6-0a16eef23e03","type":"DataRange1d"},"x_scale":{"id":"fbcefaf5-7bf4-4c75-a85d-74ec38066074","type":"LinearScale"},"y_range":{"id":"8a6cc084-c4ac-4c03-b326-f0149cc3645f","type":"DataRange1d"},"y_scale":{"id":"1745eb52-79c4-486e-8c23-51af4aafdd84","type":"LinearScale"}},"id":"8b3d236c-5e78-4491-b670-2dc5e8f38e29","type":"Plot"},{"attributes":{"formatter":{"id":"de816a8a-4ada-45d9-9898-cf3fe55ba2a4","type":"BasicTickFormatter"},"plot":{"id":"8b3d236c-5e78-4491-b670-2dc5e8f38e29","type":"Plot"},"ticker":{"id":"46b6e125-1d61-4e97-9ab3-6c40ea14452e","type":"BasicTicker"}},"id":"d22d28ef-9f64-4ee6-aa66-ddbab7768456","type":"LinearAxis"},{"attributes":{"formatter":{"id":"966f17d0-ff18-4952-aadf-a338d4ec4cf8","type":"BasicTickFormatter"},"plot":{"id":"8b3d236c-5e78-4491-b670-2dc5e8f38e29","type":"Plot"},"ticker":{"id":"68745262-9bfd-49e9-ac53-fbe217c87857","type":"BasicTicker"}},"id":"fe24bb11-34cf-42d5-8e74-9c8f4ade429b","type":"LinearAxis"},{"attributes":{"source":{"id":"9a4e65ee-9fad-4b8d-ab52-3ae6f4acbc9c","type":"ColumnDataSource"}},"id":"7b6ea53f-48bc-41b5-b9bf-e9d612b1e1b2","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"8b3d236c-5e78-4491-b670-2dc5e8f38e29","type":"Plot"},"ticker":{"id":"68745262-9bfd-49e9-ac53-fbe217c87857","type":"BasicTicker"}},"id":"73e52148-d257-4307-8cb1-08fa7090e4f8","type":"Grid"},{"attributes":{},"id":"966f17d0-ff18-4952-aadf-a338d4ec4cf8","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"4b2931f6-8875-4714-9b22-e71e54f0b46d","type":"Toolbar"},{"attributes":{"callback":null},"id":"59bcf53e-99b8-4f38-82b6-0a16eef23e03","type":"DataRange1d"},{"attributes":{"data_source":{"id":"9a4e65ee-9fad-4b8d-ab52-3ae6f4acbc9c","type":"ColumnDataSource"},"glyph":{"id":"01cdcd42-2585-479e-997d-7ae9db7e00dd","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"7b6ea53f-48bc-41b5-b9bf-e9d612b1e1b2","type":"CDSView"}},"id":"1a022ebf-f76d-4a6a-a484-9099e8c4adaf","type":"GlyphRenderer"}],"root_ids":["8b3d236c-5e78-4491-b670-2dc5e8f38e29"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"178641f8-f639-4045-a992-5d12ad42ce46","roots":{"8b3d236c-5e78-4491-b670-2dc5e8f38e29":"f1a87f4e-db56-44ec-9024-25529343c8b2"}}];
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