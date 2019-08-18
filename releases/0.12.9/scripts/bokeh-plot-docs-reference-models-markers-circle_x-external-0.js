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
      };var element = document.getElementById("daa04178-85ca-43af-a835-daf2e871da39");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'daa04178-85ca-43af-a835-daf2e871da39' but no matching script tag was found. ")
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
                    var docs_json = {"9520c08c-c29d-4c52-ba7e-44ef8aa4d72a":{"roots":{"references":[{"attributes":{"formatter":{"id":"6172678c-404d-4702-9c20-af198c64b86c","type":"BasicTickFormatter"},"plot":{"id":"362f657c-359d-4ff8-9cc0-e8595a13856a","type":"Plot"},"ticker":{"id":"43f5cdec-637c-4155-a479-d41694be7b19","type":"BasicTicker"}},"id":"f470fe79-8341-49ac-86c9-41da8d19d6a1","type":"LinearAxis"},{"attributes":{"callback":null},"id":"222d7a0c-9baa-41a7-a7cc-7b24eead0466","type":"DataRange1d"},{"attributes":{"source":{"id":"28212d5c-52d3-4db8-836d-29286015daff","type":"ColumnDataSource"}},"id":"a77d916e-e50d-4f26-8979-cef3a1d6e637","type":"CDSView"},{"attributes":{"below":[{"id":"f470fe79-8341-49ac-86c9-41da8d19d6a1","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"f2977e76-5fc6-4b6c-bb91-684dba84bafb","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"b232823a-4bae-4422-897e-083ef49a246c","type":"GlyphRenderer"},{"id":"f470fe79-8341-49ac-86c9-41da8d19d6a1","type":"LinearAxis"},{"id":"f2977e76-5fc6-4b6c-bb91-684dba84bafb","type":"LinearAxis"},{"id":"1150eb54-bd21-4046-8772-70068f231523","type":"Grid"},{"id":"22adc988-ea4c-4eef-bf5d-03adbb984dd6","type":"Grid"}],"title":null,"toolbar":{"id":"9497faa7-5337-4812-b6fa-3eeded6959b1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"03d0d78f-14c6-4245-bd50-4d9414a17b4d","type":"DataRange1d"},"x_scale":{"id":"9c641cb3-c4b3-4abe-925b-dfd2e7e386c1","type":"LinearScale"},"y_range":{"id":"222d7a0c-9baa-41a7-a7cc-7b24eead0466","type":"DataRange1d"},"y_scale":{"id":"0612b3bd-a132-4dfe-9d03-758e2521c431","type":"LinearScale"}},"id":"362f657c-359d-4ff8-9cc0-e8595a13856a","type":"Plot"},{"attributes":{"formatter":{"id":"ae871334-2387-4a54-9d1c-cd82a5e95712","type":"BasicTickFormatter"},"plot":{"id":"362f657c-359d-4ff8-9cc0-e8595a13856a","type":"Plot"},"ticker":{"id":"397703ab-7a7e-4df5-b110-ddcac30fe8dc","type":"BasicTicker"}},"id":"f2977e76-5fc6-4b6c-bb91-684dba84bafb","type":"LinearAxis"},{"attributes":{},"id":"397703ab-7a7e-4df5-b110-ddcac30fe8dc","type":"BasicTicker"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#dd1c77"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c052f517-db34-4075-91d8-2b80e2955ad7","type":"CircleX"},{"attributes":{},"id":"9c641cb3-c4b3-4abe-925b-dfd2e7e386c1","type":"LinearScale"},{"attributes":{"callback":null},"id":"03d0d78f-14c6-4245-bd50-4d9414a17b4d","type":"DataRange1d"},{"attributes":{},"id":"6172678c-404d-4702-9c20-af198c64b86c","type":"BasicTickFormatter"},{"attributes":{},"id":"ae871334-2387-4a54-9d1c-cd82a5e95712","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"28212d5c-52d3-4db8-836d-29286015daff","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"28212d5c-52d3-4db8-836d-29286015daff","type":"ColumnDataSource"},"glyph":{"id":"c052f517-db34-4075-91d8-2b80e2955ad7","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"a77d916e-e50d-4f26-8979-cef3a1d6e637","type":"CDSView"}},"id":"b232823a-4bae-4422-897e-083ef49a246c","type":"GlyphRenderer"},{"attributes":{},"id":"0612b3bd-a132-4dfe-9d03-758e2521c431","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"9497faa7-5337-4812-b6fa-3eeded6959b1","type":"Toolbar"},{"attributes":{},"id":"43f5cdec-637c-4155-a479-d41694be7b19","type":"BasicTicker"},{"attributes":{"plot":{"id":"362f657c-359d-4ff8-9cc0-e8595a13856a","type":"Plot"},"ticker":{"id":"43f5cdec-637c-4155-a479-d41694be7b19","type":"BasicTicker"}},"id":"1150eb54-bd21-4046-8772-70068f231523","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"362f657c-359d-4ff8-9cc0-e8595a13856a","type":"Plot"},"ticker":{"id":"397703ab-7a7e-4df5-b110-ddcac30fe8dc","type":"BasicTicker"}},"id":"22adc988-ea4c-4eef-bf5d-03adbb984dd6","type":"Grid"}],"root_ids":["362f657c-359d-4ff8-9cc0-e8595a13856a"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"9520c08c-c29d-4c52-ba7e-44ef8aa4d72a","elementid":"daa04178-85ca-43af-a835-daf2e871da39","modelid":"362f657c-359d-4ff8-9cc0-e8595a13856a"}];
                
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
