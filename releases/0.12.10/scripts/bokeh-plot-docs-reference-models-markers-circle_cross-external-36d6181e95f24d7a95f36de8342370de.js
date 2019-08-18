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
      };var element = document.getElementById("e60e8336-b5b4-4419-99d9-3a2e4eb4b959");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e60e8336-b5b4-4419-99d9-3a2e4eb4b959' but no matching script tag was found. ")
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
                    var docs_json = {"7231a591-6158-4a52-9dea-bbdf70eefdfd":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"07f28549-57f9-472d-a1c5-68e3a9807b92","type":"Plot"},"ticker":{"id":"a6db5cf2-799d-4964-bd02-80ef4b645ec1","type":"BasicTicker"}},"id":"fcd4f0fd-2e63-46a6-b061-ad939297fcb7","type":"Grid"},{"attributes":{},"id":"efb05a37-6631-40b8-af95-1b2925eb0c07","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"f4304bb7-50b8-4241-8f8d-d21ae5829406","type":"BasicTickFormatter"},"plot":{"id":"07f28549-57f9-472d-a1c5-68e3a9807b92","type":"Plot"},"ticker":{"id":"0eaa3e2b-3fec-4de9-8f7b-1ffa8993e079","type":"BasicTicker"}},"id":"e2f66e24-7049-4e99-83e8-7ce9714900fe","type":"LinearAxis"},{"attributes":{},"id":"0eaa3e2b-3fec-4de9-8f7b-1ffa8993e079","type":"BasicTicker"},{"attributes":{},"id":"941188a9-8f08-4c39-9fb3-d0e9871fb12f","type":"LinearScale"},{"attributes":{},"id":"a6db5cf2-799d-4964-bd02-80ef4b645ec1","type":"BasicTicker"},{"attributes":{"source":{"id":"2a1f8749-a63d-44bc-a8da-ab82c5d98d14","type":"ColumnDataSource"}},"id":"f17bc761-2e08-46d3-bd9a-5c60b0d7715b","type":"CDSView"},{"attributes":{},"id":"199ec59f-9816-4562-8d02-2c47f522c726","type":"LinearScale"},{"attributes":{"data_source":{"id":"2a1f8749-a63d-44bc-a8da-ab82c5d98d14","type":"ColumnDataSource"},"glyph":{"id":"dea56942-dbf3-4394-a748-a709f4ce572c","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"f17bc761-2e08-46d3-bd9a-5c60b0d7715b","type":"CDSView"}},"id":"f74d02cd-75f9-4670-9a92-aefe8c32417d","type":"GlyphRenderer"},{"attributes":{},"id":"f4304bb7-50b8-4241-8f8d-d21ae5829406","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fb8072"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dea56942-dbf3-4394-a748-a709f4ce572c","type":"CircleCross"},{"attributes":{"callback":null},"id":"cb4dcac6-1110-4b38-9b70-3c5d7f8f5d51","type":"DataRange1d"},{"attributes":{"callback":null},"id":"f24af4c4-9f95-4452-9823-82c24ad135a7","type":"DataRange1d"},{"attributes":{"below":[{"id":"e2f66e24-7049-4e99-83e8-7ce9714900fe","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"8cb387a9-0c11-4f93-af06-bdeecff26e25","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"f74d02cd-75f9-4670-9a92-aefe8c32417d","type":"GlyphRenderer"},{"id":"e2f66e24-7049-4e99-83e8-7ce9714900fe","type":"LinearAxis"},{"id":"8cb387a9-0c11-4f93-af06-bdeecff26e25","type":"LinearAxis"},{"id":"3d11bb5c-07f2-488e-866f-7785f6d17fe3","type":"Grid"},{"id":"fcd4f0fd-2e63-46a6-b061-ad939297fcb7","type":"Grid"}],"title":null,"toolbar":{"id":"c43e7749-ef34-488a-a09e-98b0967289b2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"cb4dcac6-1110-4b38-9b70-3c5d7f8f5d51","type":"DataRange1d"},"x_scale":{"id":"941188a9-8f08-4c39-9fb3-d0e9871fb12f","type":"LinearScale"},"y_range":{"id":"f24af4c4-9f95-4452-9823-82c24ad135a7","type":"DataRange1d"},"y_scale":{"id":"199ec59f-9816-4562-8d02-2c47f522c726","type":"LinearScale"}},"id":"07f28549-57f9-472d-a1c5-68e3a9807b92","type":"Plot"},{"attributes":{"plot":{"id":"07f28549-57f9-472d-a1c5-68e3a9807b92","type":"Plot"},"ticker":{"id":"0eaa3e2b-3fec-4de9-8f7b-1ffa8993e079","type":"BasicTicker"}},"id":"3d11bb5c-07f2-488e-866f-7785f6d17fe3","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"2a1f8749-a63d-44bc-a8da-ab82c5d98d14","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c43e7749-ef34-488a-a09e-98b0967289b2","type":"Toolbar"},{"attributes":{"formatter":{"id":"efb05a37-6631-40b8-af95-1b2925eb0c07","type":"BasicTickFormatter"},"plot":{"id":"07f28549-57f9-472d-a1c5-68e3a9807b92","type":"Plot"},"ticker":{"id":"a6db5cf2-799d-4964-bd02-80ef4b645ec1","type":"BasicTicker"}},"id":"8cb387a9-0c11-4f93-af06-bdeecff26e25","type":"LinearAxis"}],"root_ids":["07f28549-57f9-472d-a1c5-68e3a9807b92"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"7231a591-6158-4a52-9dea-bbdf70eefdfd","elementid":"e60e8336-b5b4-4419-99d9-3a2e4eb4b959","modelid":"07f28549-57f9-472d-a1c5-68e3a9807b92"}];
                
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
