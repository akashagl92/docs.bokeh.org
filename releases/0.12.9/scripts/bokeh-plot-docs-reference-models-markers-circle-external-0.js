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
      };var element = document.getElementById("2cf60786-f38d-4458-b246-39b09bd5e1e4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2cf60786-f38d-4458-b246-39b09bd5e1e4' but no matching script tag was found. ")
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
                    var docs_json = {"c808602b-f9fb-4e10-aeb4-c2dbf45af950":{"roots":{"references":[{"attributes":{"callback":null},"id":"9d6230d9-47a6-4e27-a913-7c7da45166af","type":"DataRange1d"},{"attributes":{"data_source":{"id":"73fc55c2-090b-4ab0-a8d8-e7fb57255401","type":"ColumnDataSource"},"glyph":{"id":"853b5a27-b2d2-40ee-b8ee-a3c21fd71575","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"cbd07cd0-b310-472e-86a3-3022dcc96ded","type":"CDSView"}},"id":"72370826-e404-47a0-8539-48c83ea0886d","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"e517a375-9c48-4873-a025-e71d44c8032c","type":"BasicTickFormatter"},"plot":{"id":"96359be0-23a4-4c0a-a558-c8a889b6868f","type":"Plot"},"ticker":{"id":"9792b011-c619-498c-9499-5aa688fd407c","type":"BasicTicker"}},"id":"6a339d11-f8ab-4635-aff7-e2cc124d7380","type":"LinearAxis"},{"attributes":{},"id":"38901163-4993-4440-b900-37f6f76d8f8a","type":"LinearScale"},{"attributes":{},"id":"88807c8c-822f-4e38-bccb-2277a78678af","type":"LinearScale"},{"attributes":{"source":{"id":"73fc55c2-090b-4ab0-a8d8-e7fb57255401","type":"ColumnDataSource"}},"id":"cbd07cd0-b310-472e-86a3-3022dcc96ded","type":"CDSView"},{"attributes":{"below":[{"id":"6a339d11-f8ab-4635-aff7-e2cc124d7380","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"91372a98-9e19-4c10-a585-3189f5e69b93","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"72370826-e404-47a0-8539-48c83ea0886d","type":"GlyphRenderer"},{"id":"6a339d11-f8ab-4635-aff7-e2cc124d7380","type":"LinearAxis"},{"id":"91372a98-9e19-4c10-a585-3189f5e69b93","type":"LinearAxis"},{"id":"b7d7cc25-752e-419f-96eb-5453c9ad63ca","type":"Grid"},{"id":"e5f850b4-5df6-475e-869e-3417d1a47928","type":"Grid"}],"title":null,"toolbar":{"id":"d94e5536-c5af-48a8-a2e5-917fff2e0230","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9d6230d9-47a6-4e27-a913-7c7da45166af","type":"DataRange1d"},"x_scale":{"id":"88807c8c-822f-4e38-bccb-2277a78678af","type":"LinearScale"},"y_range":{"id":"ffef35d3-211c-4d17-8c72-7106fe64cb52","type":"DataRange1d"},"y_scale":{"id":"38901163-4993-4440-b900-37f6f76d8f8a","type":"LinearScale"}},"id":"96359be0-23a4-4c0a-a558-c8a889b6868f","type":"Plot"},{"attributes":{"plot":{"id":"96359be0-23a4-4c0a-a558-c8a889b6868f","type":"Plot"},"ticker":{"id":"9792b011-c619-498c-9499-5aa688fd407c","type":"BasicTicker"}},"id":"b7d7cc25-752e-419f-96eb-5453c9ad63ca","type":"Grid"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#3288Bd"},"line_width":{"value":3},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"853b5a27-b2d2-40ee-b8ee-a3c21fd71575","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d94e5536-c5af-48a8-a2e5-917fff2e0230","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"96359be0-23a4-4c0a-a558-c8a889b6868f","type":"Plot"},"ticker":{"id":"32772f82-b7dd-4d2d-9095-a504d813665b","type":"BasicTicker"}},"id":"e5f850b4-5df6-475e-869e-3417d1a47928","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"73fc55c2-090b-4ab0-a8d8-e7fb57255401","type":"ColumnDataSource"},{"attributes":{},"id":"9792b011-c619-498c-9499-5aa688fd407c","type":"BasicTicker"},{"attributes":{},"id":"a047032d-e6ec-4057-a611-e3d944622c35","type":"BasicTickFormatter"},{"attributes":{},"id":"32772f82-b7dd-4d2d-9095-a504d813665b","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a047032d-e6ec-4057-a611-e3d944622c35","type":"BasicTickFormatter"},"plot":{"id":"96359be0-23a4-4c0a-a558-c8a889b6868f","type":"Plot"},"ticker":{"id":"32772f82-b7dd-4d2d-9095-a504d813665b","type":"BasicTicker"}},"id":"91372a98-9e19-4c10-a585-3189f5e69b93","type":"LinearAxis"},{"attributes":{},"id":"e517a375-9c48-4873-a025-e71d44c8032c","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"ffef35d3-211c-4d17-8c72-7106fe64cb52","type":"DataRange1d"}],"root_ids":["96359be0-23a4-4c0a-a558-c8a889b6868f"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"c808602b-f9fb-4e10-aeb4-c2dbf45af950","elementid":"2cf60786-f38d-4458-b246-39b09bd5e1e4","modelid":"96359be0-23a4-4c0a-a558-c8a889b6868f"}];
                
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
