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
      };var element = document.getElementById("ac673f2a-5ff1-4ed5-9b8a-d64ad27fb0e7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ac673f2a-5ff1-4ed5-9b8a-d64ad27fb0e7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"3a9ac3ef-3425-471b-a44d-7388f4a0af82":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"62e0b7a4-29fe-41dd-9b22-cf4eeefe6fe6","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"62e0b7a4-29fe-41dd-9b22-cf4eeefe6fe6","type":"ColumnDataSource"},"glyph":{"id":"b87979f4-42b8-4363-962b-e680522ad001","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"67ccf07a-ec43-4cac-9295-f4ca5a7f5f36","type":"CDSView"}},"id":"7f997c91-605a-432f-898a-552a8a32076c","type":"GlyphRenderer"},{"attributes":{},"id":"91fb2b56-696c-4312-a335-ae1fed226ef5","type":"BasicTickFormatter"},{"attributes":{},"id":"f69e94ed-1e49-46f5-993d-d23f6f58a649","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"837b8085-452a-4e3d-873e-c7e3ce6a395e","type":"Toolbar"},{"attributes":{"callback":null},"id":"ba4ea8d1-be94-425f-8e9d-d87c5a7610f4","type":"DataRange1d"},{"attributes":{},"id":"43a45da9-e634-475b-b1dd-eaf52519b24a","type":"LinearScale"},{"attributes":{"below":[{"id":"7c8b656b-f5e0-42ee-9ef8-9cb23f19d495","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"eec1f437-ebbd-431a-aa44-339e839760b3","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"7f997c91-605a-432f-898a-552a8a32076c","type":"GlyphRenderer"},{"id":"7c8b656b-f5e0-42ee-9ef8-9cb23f19d495","type":"LinearAxis"},{"id":"eec1f437-ebbd-431a-aa44-339e839760b3","type":"LinearAxis"},{"id":"7165d010-0779-4a8b-926e-b78e7d5c8137","type":"Grid"},{"id":"496b39bd-2f56-4945-adc2-a7845ca8a311","type":"Grid"}],"title":null,"toolbar":{"id":"837b8085-452a-4e3d-873e-c7e3ce6a395e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a5657f72-099e-44d1-a0a7-ddecdcab9177","type":"DataRange1d"},"x_scale":{"id":"43a45da9-e634-475b-b1dd-eaf52519b24a","type":"LinearScale"},"y_range":{"id":"ba4ea8d1-be94-425f-8e9d-d87c5a7610f4","type":"DataRange1d"},"y_scale":{"id":"da4f01c2-2811-47a2-b7fa-67810cd716cb","type":"LinearScale"}},"id":"a0ce61f8-aee1-42a8-808b-c2711955f809","type":"Plot"},{"attributes":{"plot":{"id":"a0ce61f8-aee1-42a8-808b-c2711955f809","type":"Plot"},"ticker":{"id":"c8dcaad9-e3ec-4868-817b-393bf0f914ab","type":"BasicTicker"}},"id":"7165d010-0779-4a8b-926e-b78e7d5c8137","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"a0ce61f8-aee1-42a8-808b-c2711955f809","type":"Plot"},"ticker":{"id":"e38ca177-1ca0-4cc3-bd77-a4c882b5a9ed","type":"BasicTicker"}},"id":"496b39bd-2f56-4945-adc2-a7845ca8a311","type":"Grid"},{"attributes":{"formatter":{"id":"f69e94ed-1e49-46f5-993d-d23f6f58a649","type":"BasicTickFormatter"},"plot":{"id":"a0ce61f8-aee1-42a8-808b-c2711955f809","type":"Plot"},"ticker":{"id":"e38ca177-1ca0-4cc3-bd77-a4c882b5a9ed","type":"BasicTicker"}},"id":"eec1f437-ebbd-431a-aa44-339e839760b3","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b87979f4-42b8-4363-962b-e680522ad001","type":"SquareX"},{"attributes":{"callback":null},"id":"a5657f72-099e-44d1-a0a7-ddecdcab9177","type":"DataRange1d"},{"attributes":{},"id":"e38ca177-1ca0-4cc3-bd77-a4c882b5a9ed","type":"BasicTicker"},{"attributes":{"source":{"id":"62e0b7a4-29fe-41dd-9b22-cf4eeefe6fe6","type":"ColumnDataSource"}},"id":"67ccf07a-ec43-4cac-9295-f4ca5a7f5f36","type":"CDSView"},{"attributes":{"formatter":{"id":"91fb2b56-696c-4312-a335-ae1fed226ef5","type":"BasicTickFormatter"},"plot":{"id":"a0ce61f8-aee1-42a8-808b-c2711955f809","type":"Plot"},"ticker":{"id":"c8dcaad9-e3ec-4868-817b-393bf0f914ab","type":"BasicTicker"}},"id":"7c8b656b-f5e0-42ee-9ef8-9cb23f19d495","type":"LinearAxis"},{"attributes":{},"id":"da4f01c2-2811-47a2-b7fa-67810cd716cb","type":"LinearScale"},{"attributes":{},"id":"c8dcaad9-e3ec-4868-817b-393bf0f914ab","type":"BasicTicker"}],"root_ids":["a0ce61f8-aee1-42a8-808b-c2711955f809"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"3a9ac3ef-3425-471b-a44d-7388f4a0af82","elementid":"ac673f2a-5ff1-4ed5-9b8a-d64ad27fb0e7","modelid":"a0ce61f8-aee1-42a8-808b-c2711955f809"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
