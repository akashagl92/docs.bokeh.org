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
      };var element = document.getElementById("221ee134-f404-4bc8-b83d-ba42a39eeb70");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '221ee134-f404-4bc8-b83d-ba42a39eeb70' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0e76ffc6-99b2-4e63-bd8a-f51abdc286c8":{"roots":{"references":[{"attributes":{"plot":{"id":"dee7db52-bbf2-482b-ae0d-dcc3cedc1eb5","type":"Plot"},"ticker":{"id":"ca61156b-feaa-43ad-b007-95db5d2ad4d2","type":"BasicTicker"}},"id":"5b669f60-e8a6-4c5b-8346-73d6dc25796c","type":"Grid"},{"attributes":{},"id":"053bb396-a1ad-4f1f-a701-bdcc81694f6e","type":"BasicTickFormatter"},{"attributes":{},"id":"978ed653-7315-45dd-bfd1-b90376ba9982","type":"LinearScale"},{"attributes":{},"id":"a1a24eec-2dcb-45ae-abde-ba24302a9f56","type":"BasicTickFormatter"},{"attributes":{},"id":"089218db-0129-4fd7-92bc-08e749d9d9c9","type":"Selection"},{"attributes":{"formatter":{"id":"a1a24eec-2dcb-45ae-abde-ba24302a9f56","type":"BasicTickFormatter"},"plot":{"id":"dee7db52-bbf2-482b-ae0d-dcc3cedc1eb5","type":"Plot"},"ticker":{"id":"ca61156b-feaa-43ad-b007-95db5d2ad4d2","type":"BasicTicker"}},"id":"512123ac-2e76-42a9-87ec-02c07bc59fb7","type":"LinearAxis"},{"attributes":{},"id":"ca61156b-feaa-43ad-b007-95db5d2ad4d2","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#99d594"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"05c603ee-e8af-4d0f-915c-713755b3b36f","type":"Triangle"},{"attributes":{"data_source":{"id":"d606cc1d-9e8a-4303-abe8-bbcaebabd412","type":"ColumnDataSource"},"glyph":{"id":"05c603ee-e8af-4d0f-915c-713755b3b36f","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"b41e2108-ba77-4349-ad66-05f793d982d5","type":"CDSView"}},"id":"aa25b48f-f4cd-4dae-9869-a7d88ebfe3b0","type":"GlyphRenderer"},{"attributes":{},"id":"c65fc890-e694-4609-8176-9db4bbf5ef00","type":"BasicTicker"},{"attributes":{},"id":"240d0b5d-ec6c-429b-8e92-83ba9a50700b","type":"LinearScale"},{"attributes":{"formatter":{"id":"053bb396-a1ad-4f1f-a701-bdcc81694f6e","type":"BasicTickFormatter"},"plot":{"id":"dee7db52-bbf2-482b-ae0d-dcc3cedc1eb5","type":"Plot"},"ticker":{"id":"c65fc890-e694-4609-8176-9db4bbf5ef00","type":"BasicTicker"}},"id":"8d6ddf19-9c03-4912-bf3a-145343d8614c","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"5957db1b-530a-4bb6-a30d-7331713c45ba","type":"Toolbar"},{"attributes":{"source":{"id":"d606cc1d-9e8a-4303-abe8-bbcaebabd412","type":"ColumnDataSource"}},"id":"b41e2108-ba77-4349-ad66-05f793d982d5","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"dee7db52-bbf2-482b-ae0d-dcc3cedc1eb5","type":"Plot"},"ticker":{"id":"c65fc890-e694-4609-8176-9db4bbf5ef00","type":"BasicTicker"}},"id":"9aa201d2-8cfe-4369-b882-89461e79b48b","type":"Grid"},{"attributes":{"callback":null},"id":"11ee0903-c37b-47fd-86c9-f70f77efcbfd","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"089218db-0129-4fd7-92bc-08e749d9d9c9","type":"Selection"},"selection_policy":{"id":"49e0d11b-c154-419a-96e2-03edac9123da","type":"UnionRenderers"}},"id":"d606cc1d-9e8a-4303-abe8-bbcaebabd412","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"d9a3e5ca-4d11-4348-bc39-0e85b747b65e","type":"DataRange1d"},{"attributes":{},"id":"49e0d11b-c154-419a-96e2-03edac9123da","type":"UnionRenderers"},{"attributes":{"below":[{"id":"512123ac-2e76-42a9-87ec-02c07bc59fb7","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"8d6ddf19-9c03-4912-bf3a-145343d8614c","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"aa25b48f-f4cd-4dae-9869-a7d88ebfe3b0","type":"GlyphRenderer"},{"id":"512123ac-2e76-42a9-87ec-02c07bc59fb7","type":"LinearAxis"},{"id":"8d6ddf19-9c03-4912-bf3a-145343d8614c","type":"LinearAxis"},{"id":"5b669f60-e8a6-4c5b-8346-73d6dc25796c","type":"Grid"},{"id":"9aa201d2-8cfe-4369-b882-89461e79b48b","type":"Grid"}],"title":null,"toolbar":{"id":"5957db1b-530a-4bb6-a30d-7331713c45ba","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d9a3e5ca-4d11-4348-bc39-0e85b747b65e","type":"DataRange1d"},"x_scale":{"id":"240d0b5d-ec6c-429b-8e92-83ba9a50700b","type":"LinearScale"},"y_range":{"id":"11ee0903-c37b-47fd-86c9-f70f77efcbfd","type":"DataRange1d"},"y_scale":{"id":"978ed653-7315-45dd-bfd1-b90376ba9982","type":"LinearScale"}},"id":"dee7db52-bbf2-482b-ae0d-dcc3cedc1eb5","type":"Plot"}],"root_ids":["dee7db52-bbf2-482b-ae0d-dcc3cedc1eb5"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"0e76ffc6-99b2-4e63-bd8a-f51abdc286c8","roots":{"dee7db52-bbf2-482b-ae0d-dcc3cedc1eb5":"221ee134-f404-4bc8-b83d-ba42a39eeb70"}}];
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