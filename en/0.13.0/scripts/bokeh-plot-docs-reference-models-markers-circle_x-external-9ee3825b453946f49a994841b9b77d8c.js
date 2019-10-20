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
      };var element = document.getElementById("b31e3d7e-17ef-4785-9a2d-b988128231dc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b31e3d7e-17ef-4785-9a2d-b988128231dc' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ca191a90-9eab-497a-9408-402d7d153a01":{"roots":{"references":[{"attributes":{},"id":"aad3886e-8cae-4b9f-b659-02dd9bb817fd","type":"BasicTicker"},{"attributes":{"callback":null},"id":"ca58a27b-f0b6-4fba-85de-e2a95c843347","type":"DataRange1d"},{"attributes":{"formatter":{"id":"1e2dab33-9898-48f1-b49b-653201c54433","type":"BasicTickFormatter"},"plot":{"id":"d0b2a37d-88e9-49dd-9b71-003453afdba8","type":"Plot"},"ticker":{"id":"74b69a5c-9548-468b-abe7-e67ef9796fdb","type":"BasicTicker"}},"id":"229ccf69-fb80-40a3-b48d-064bd3baab2d","type":"LinearAxis"},{"attributes":{},"id":"cfb6b530-920a-482c-9334-0dfb304b20c6","type":"Selection"},{"attributes":{},"id":"74b69a5c-9548-468b-abe7-e67ef9796fdb","type":"BasicTicker"},{"attributes":{},"id":"83a2f5e1-7b95-4fd8-98c3-d49d39167e5a","type":"UnionRenderers"},{"attributes":{"plot":{"id":"d0b2a37d-88e9-49dd-9b71-003453afdba8","type":"Plot"},"ticker":{"id":"aad3886e-8cae-4b9f-b659-02dd9bb817fd","type":"BasicTicker"}},"id":"40581e3f-2059-432a-8b45-c17db02e6363","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"ef7f4036-0cf0-4ac2-aba1-a49769ccd2cc","type":"Toolbar"},{"attributes":{},"id":"37a1ecfd-2d7a-430b-89b5-d2c7cd8b8214","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"d0b2a37d-88e9-49dd-9b71-003453afdba8","type":"Plot"},"ticker":{"id":"74b69a5c-9548-468b-abe7-e67ef9796fdb","type":"BasicTicker"}},"id":"1b214ba2-ab8d-409f-a923-45538e60c32a","type":"Grid"},{"attributes":{"formatter":{"id":"0801e058-1820-4494-803f-1bfc3ef69105","type":"BasicTickFormatter"},"plot":{"id":"d0b2a37d-88e9-49dd-9b71-003453afdba8","type":"Plot"},"ticker":{"id":"aad3886e-8cae-4b9f-b659-02dd9bb817fd","type":"BasicTicker"}},"id":"1a74b6b6-5d88-48ee-a20b-ecec7c694d6d","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1bd50323-0e41-4d79-ab42-02e77a240e24","type":"ColumnDataSource"},"glyph":{"id":"950fe170-380e-4de0-ad8a-875a548a1c28","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"5dc6022a-e8c5-445b-b1a1-fdf0db68462d","type":"CDSView"}},"id":"fc07fcaf-ce98-4721-ae3c-c7504ab7647f","type":"GlyphRenderer"},{"attributes":{},"id":"0801e058-1820-4494-803f-1bfc3ef69105","type":"BasicTickFormatter"},{"attributes":{},"id":"43faea8f-da93-44c8-a9c6-8b3149ee4170","type":"LinearScale"},{"attributes":{},"id":"1e2dab33-9898-48f1-b49b-653201c54433","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"1a74b6b6-5d88-48ee-a20b-ecec7c694d6d","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"229ccf69-fb80-40a3-b48d-064bd3baab2d","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"fc07fcaf-ce98-4721-ae3c-c7504ab7647f","type":"GlyphRenderer"},{"id":"1a74b6b6-5d88-48ee-a20b-ecec7c694d6d","type":"LinearAxis"},{"id":"229ccf69-fb80-40a3-b48d-064bd3baab2d","type":"LinearAxis"},{"id":"40581e3f-2059-432a-8b45-c17db02e6363","type":"Grid"},{"id":"1b214ba2-ab8d-409f-a923-45538e60c32a","type":"Grid"}],"title":null,"toolbar":{"id":"ef7f4036-0cf0-4ac2-aba1-a49769ccd2cc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"570b2ce2-7ea0-415e-8016-5eb156af5195","type":"DataRange1d"},"x_scale":{"id":"43faea8f-da93-44c8-a9c6-8b3149ee4170","type":"LinearScale"},"y_range":{"id":"ca58a27b-f0b6-4fba-85de-e2a95c843347","type":"DataRange1d"},"y_scale":{"id":"37a1ecfd-2d7a-430b-89b5-d2c7cd8b8214","type":"LinearScale"}},"id":"d0b2a37d-88e9-49dd-9b71-003453afdba8","type":"Plot"},{"attributes":{"callback":null},"id":"570b2ce2-7ea0-415e-8016-5eb156af5195","type":"DataRange1d"},{"attributes":{"source":{"id":"1bd50323-0e41-4d79-ab42-02e77a240e24","type":"ColumnDataSource"}},"id":"5dc6022a-e8c5-445b-b1a1-fdf0db68462d","type":"CDSView"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"cfb6b530-920a-482c-9334-0dfb304b20c6","type":"Selection"},"selection_policy":{"id":"83a2f5e1-7b95-4fd8-98c3-d49d39167e5a","type":"UnionRenderers"}},"id":"1bd50323-0e41-4d79-ab42-02e77a240e24","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#dd1c77"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"950fe170-380e-4de0-ad8a-875a548a1c28","type":"CircleX"}],"root_ids":["d0b2a37d-88e9-49dd-9b71-003453afdba8"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"ca191a90-9eab-497a-9408-402d7d153a01","roots":{"d0b2a37d-88e9-49dd-9b71-003453afdba8":"b31e3d7e-17ef-4785-9a2d-b988128231dc"}}];
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