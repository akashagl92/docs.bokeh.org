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
      };var element = document.getElementById("5fc770a0-cc86-44d4-98a0-1a38df10afb5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5fc770a0-cc86-44d4-98a0-1a38df10afb5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3cfdd254-03e2-46ca-a2b1-3a7c0fcd892e":{"roots":{"references":[{"attributes":{},"id":"55b4d917-849f-4542-9b57-6356ce57b019","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"7988623f-2157-46cc-a188-3717eb11529d","type":"Toolbar"},{"attributes":{"callback":null},"id":"a8c52074-f996-4c32-a2f5-0e71c9ca9f54","type":"DataRange1d"},{"attributes":{},"id":"036e461b-7caf-4119-8ae5-8b71727dd129","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"036e461b-7caf-4119-8ae5-8b71727dd129","type":"Selection"},"selection_policy":{"id":"0a285566-3c30-481c-8b6d-00b1cf7d53b8","type":"UnionRenderers"}},"id":"efbc0bd1-481f-4845-835a-e103e4b0fdd8","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"124da49c-a77a-4554-a1ef-515024ae9b4f","type":"Plot"},"ticker":{"id":"8920b32f-85c8-4c02-bc04-c5c4e1464245","type":"BasicTicker"}},"id":"53e9eecd-fbdd-41fa-acec-24a49c8a7e3e","type":"Grid"},{"attributes":{},"id":"8920b32f-85c8-4c02-bc04-c5c4e1464245","type":"BasicTicker"},{"attributes":{},"id":"2e5bc051-d9ae-45d2-8baf-ff6b041ab107","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#7fc97f"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"c471e227-649f-4a0b-a3e4-451d7c5a40bd","type":"Annulus"},{"attributes":{"below":[{"id":"bdcec324-66cb-489f-8c93-90bc07011b54","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"4b646c1a-8101-4f1f-aed4-9ecaaa79b358","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a23330aa-1172-4f70-8413-77b06ea9fd29","type":"GlyphRenderer"},{"id":"bdcec324-66cb-489f-8c93-90bc07011b54","type":"LinearAxis"},{"id":"4b646c1a-8101-4f1f-aed4-9ecaaa79b358","type":"LinearAxis"},{"id":"53e9eecd-fbdd-41fa-acec-24a49c8a7e3e","type":"Grid"},{"id":"9f5fc0e3-2a3b-45e2-99a0-384a44815d75","type":"Grid"}],"title":null,"toolbar":{"id":"7988623f-2157-46cc-a188-3717eb11529d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a8c52074-f996-4c32-a2f5-0e71c9ca9f54","type":"DataRange1d"},"x_scale":{"id":"55b4d917-849f-4542-9b57-6356ce57b019","type":"LinearScale"},"y_range":{"id":"1e5ebdbc-f225-4449-baf2-900455b1a86a","type":"DataRange1d"},"y_scale":{"id":"f6473c11-1d00-4937-88cd-c98c046bffff","type":"LinearScale"}},"id":"124da49c-a77a-4554-a1ef-515024ae9b4f","type":"Plot"},{"attributes":{},"id":"f6473c11-1d00-4937-88cd-c98c046bffff","type":"LinearScale"},{"attributes":{"source":{"id":"efbc0bd1-481f-4845-835a-e103e4b0fdd8","type":"ColumnDataSource"}},"id":"c245e912-897f-4569-a918-7099db64c6a5","type":"CDSView"},{"attributes":{"formatter":{"id":"04e9c02a-9501-4130-8a49-4b28312b3a16","type":"BasicTickFormatter"},"plot":{"id":"124da49c-a77a-4554-a1ef-515024ae9b4f","type":"Plot"},"ticker":{"id":"8920b32f-85c8-4c02-bc04-c5c4e1464245","type":"BasicTicker"}},"id":"bdcec324-66cb-489f-8c93-90bc07011b54","type":"LinearAxis"},{"attributes":{},"id":"7b999a85-47af-4867-a164-f5bd5bc0b3eb","type":"BasicTicker"},{"attributes":{"callback":null},"id":"1e5ebdbc-f225-4449-baf2-900455b1a86a","type":"DataRange1d"},{"attributes":{},"id":"0a285566-3c30-481c-8b6d-00b1cf7d53b8","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"2e5bc051-d9ae-45d2-8baf-ff6b041ab107","type":"BasicTickFormatter"},"plot":{"id":"124da49c-a77a-4554-a1ef-515024ae9b4f","type":"Plot"},"ticker":{"id":"7b999a85-47af-4867-a164-f5bd5bc0b3eb","type":"BasicTicker"}},"id":"4b646c1a-8101-4f1f-aed4-9ecaaa79b358","type":"LinearAxis"},{"attributes":{"data_source":{"id":"efbc0bd1-481f-4845-835a-e103e4b0fdd8","type":"ColumnDataSource"},"glyph":{"id":"c471e227-649f-4a0b-a3e4-451d7c5a40bd","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"c245e912-897f-4569-a918-7099db64c6a5","type":"CDSView"}},"id":"a23330aa-1172-4f70-8413-77b06ea9fd29","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"124da49c-a77a-4554-a1ef-515024ae9b4f","type":"Plot"},"ticker":{"id":"7b999a85-47af-4867-a164-f5bd5bc0b3eb","type":"BasicTicker"}},"id":"9f5fc0e3-2a3b-45e2-99a0-384a44815d75","type":"Grid"},{"attributes":{},"id":"04e9c02a-9501-4130-8a49-4b28312b3a16","type":"BasicTickFormatter"}],"root_ids":["124da49c-a77a-4554-a1ef-515024ae9b4f"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"3cfdd254-03e2-46ca-a2b1-3a7c0fcd892e","roots":{"124da49c-a77a-4554-a1ef-515024ae9b4f":"5fc770a0-cc86-44d4-98a0-1a38df10afb5"}}];
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