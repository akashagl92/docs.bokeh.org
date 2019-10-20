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
      };var element = document.getElementById("3991375c-1a8b-4407-b1ec-e2be868bf07d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3991375c-1a8b-4407-b1ec-e2be868bf07d' but no matching script tag was found. ")
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
                    var docs_json = {"cfa170e0-5318-4221-b278-93aa3ce7c0a8":{"roots":{"references":[{"attributes":{"callback":null},"id":"14548cec-db1a-4073-8a4f-82ab20cd721f","type":"DataRange1d"},{"attributes":{},"id":"a3b78b3c-6088-447c-b1d8-f72b76f4a77b","type":"LinearScale"},{"attributes":{},"id":"5f153f55-e645-40ca-ad68-7c1a6da5f218","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"ac72a9f3-03c1-4528-a7fd-929ccce8f1d2","type":"Plot"},"ticker":{"id":"c33caf69-b68e-425d-a16e-ed11db543031","type":"BasicTicker"}},"id":"fa8e7398-dd23-4730-bfbf-96b45296f2dc","type":"Grid"},{"attributes":{"callback":null},"id":"8240999c-c54a-420a-a599-8eb0de570158","type":"DataRange1d"},{"attributes":{"formatter":{"id":"87d3fe50-b4d2-498d-9eb7-8623f18c2374","type":"BasicTickFormatter"},"plot":{"id":"ac72a9f3-03c1-4528-a7fd-929ccce8f1d2","type":"Plot"},"ticker":{"id":"c33caf69-b68e-425d-a16e-ed11db543031","type":"BasicTicker"}},"id":"58508c75-4a36-4e31-8410-4a837439185e","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}}},"id":"5bb8e16a-b61f-43b5-b95d-a776d1467105","type":"ColumnDataSource"},{"attributes":{"source":{"id":"5bb8e16a-b61f-43b5-b95d-a776d1467105","type":"ColumnDataSource"}},"id":"6fa1d845-44f1-4983-b6e9-a7ec88b622bc","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"05f153ac-ac8f-49e2-b385-6744ede2b9a0","type":"Toolbar"},{"attributes":{"below":[{"id":"06c806d6-6e7b-4a7f-903d-d0a38f9f1ffd","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"58508c75-4a36-4e31-8410-4a837439185e","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"7fc57b9a-67b8-4888-ae5e-34c048a2964d","type":"GlyphRenderer"},{"id":"06c806d6-6e7b-4a7f-903d-d0a38f9f1ffd","type":"LinearAxis"},{"id":"58508c75-4a36-4e31-8410-4a837439185e","type":"LinearAxis"},{"id":"58e062c4-d28e-4247-ad00-a6934b8655c0","type":"Grid"},{"id":"fa8e7398-dd23-4730-bfbf-96b45296f2dc","type":"Grid"}],"title":null,"toolbar":{"id":"05f153ac-ac8f-49e2-b385-6744ede2b9a0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"14548cec-db1a-4073-8a4f-82ab20cd721f","type":"DataRange1d"},"x_scale":{"id":"ad1ac98b-a408-4a9b-9fee-f42c5b86cb62","type":"LinearScale"},"y_range":{"id":"8240999c-c54a-420a-a599-8eb0de570158","type":"DataRange1d"},"y_scale":{"id":"a3b78b3c-6088-447c-b1d8-f72b76f4a77b","type":"LinearScale"}},"id":"ac72a9f3-03c1-4528-a7fd-929ccce8f1d2","type":"Plot"},{"attributes":{"plot":{"id":"ac72a9f3-03c1-4528-a7fd-929ccce8f1d2","type":"Plot"},"ticker":{"id":"d71e72f6-1be2-4393-9fdf-1ca372d3d22a","type":"BasicTicker"}},"id":"58e062c4-d28e-4247-ad00-a6934b8655c0","type":"Grid"},{"attributes":{},"id":"87d3fe50-b4d2-498d-9eb7-8623f18c2374","type":"BasicTickFormatter"},{"attributes":{},"id":"c33caf69-b68e-425d-a16e-ed11db543031","type":"BasicTicker"},{"attributes":{"formatter":{"id":"5f153f55-e645-40ca-ad68-7c1a6da5f218","type":"BasicTickFormatter"},"plot":{"id":"ac72a9f3-03c1-4528-a7fd-929ccce8f1d2","type":"Plot"},"ticker":{"id":"d71e72f6-1be2-4393-9fdf-1ca372d3d22a","type":"BasicTicker"}},"id":"06c806d6-6e7b-4a7f-903d-d0a38f9f1ffd","type":"LinearAxis"},{"attributes":{"data_source":{"id":"5bb8e16a-b61f-43b5-b95d-a776d1467105","type":"ColumnDataSource"},"glyph":{"id":"8188e3e0-33c9-4b80-9e86-a942b88dc1b5","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"6fa1d845-44f1-4983-b6e9-a7ec88b622bc","type":"CDSView"}},"id":"7fc57b9a-67b8-4888-ae5e-34c048a2964d","type":"GlyphRenderer"},{"attributes":{},"id":"d71e72f6-1be2-4393-9fdf-1ca372d3d22a","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#b3de69"},"height":{"value":0.5},"right":{"field":"right"},"y":{"field":"y"}},"id":"8188e3e0-33c9-4b80-9e86-a942b88dc1b5","type":"HBar"},{"attributes":{},"id":"ad1ac98b-a408-4a9b-9fee-f42c5b86cb62","type":"LinearScale"}],"root_ids":["ac72a9f3-03c1-4528-a7fd-929ccce8f1d2"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"cfa170e0-5318-4221-b278-93aa3ce7c0a8","elementid":"3991375c-1a8b-4407-b1ec-e2be868bf07d","modelid":"ac72a9f3-03c1-4528-a7fd-929ccce8f1d2"}];
                
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
