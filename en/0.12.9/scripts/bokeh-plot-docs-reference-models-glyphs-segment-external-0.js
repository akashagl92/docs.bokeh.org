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
      };var element = document.getElementById("a6c4cfb5-9bc0-434f-bad9-9655b219e3d1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a6c4cfb5-9bc0-434f-bad9-9655b219e3d1' but no matching script tag was found. ")
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
                    var docs_json = {"692adf3c-666e-4b49-bfea-d30ad7ac523b":{"roots":{"references":[{"attributes":{"below":[{"id":"1dffb4d2-e34c-4fe5-b5b9-f36d55638874","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"626beb84-c5d8-4f8e-bf04-0438c67a5caf","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"fbc7ce0f-12bd-4c75-84ec-515decae273a","type":"GlyphRenderer"},{"id":"1dffb4d2-e34c-4fe5-b5b9-f36d55638874","type":"LinearAxis"},{"id":"626beb84-c5d8-4f8e-bf04-0438c67a5caf","type":"LinearAxis"},{"id":"2a2db5ec-7643-4f98-b802-6ef171f05edd","type":"Grid"},{"id":"51b391ba-dee2-4f82-a62c-6bdc8a7a0f60","type":"Grid"}],"title":null,"toolbar":{"id":"27c8c6a5-c938-48e1-8fae-8bc380d406e8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a855cde4-495a-4872-9ca1-597a6315cb49","type":"DataRange1d"},"x_scale":{"id":"6c7efd7d-7c55-450c-a4fd-15a688105c4b","type":"LinearScale"},"y_range":{"id":"84709161-a3b8-45d5-bcea-fe1553cadf91","type":"DataRange1d"},"y_scale":{"id":"850f4d34-ddd1-40d4-b0f6-544c97d621ea","type":"LinearScale"}},"id":"9000913d-7e55-4cba-8f4d-198e5010ef08","type":"Plot"},{"attributes":{"callback":null},"id":"84709161-a3b8-45d5-bcea-fe1553cadf91","type":"DataRange1d"},{"attributes":{"callback":null},"id":"a855cde4-495a-4872-9ca1-597a6315cb49","type":"DataRange1d"},{"attributes":{},"id":"cd673f99-0e1c-4797-9a91-05f8bd484600","type":"BasicTickFormatter"},{"attributes":{},"id":"6c7efd7d-7c55-450c-a4fd-15a688105c4b","type":"LinearScale"},{"attributes":{"formatter":{"id":"cd673f99-0e1c-4797-9a91-05f8bd484600","type":"BasicTickFormatter"},"plot":{"id":"9000913d-7e55-4cba-8f4d-198e5010ef08","type":"Plot"},"ticker":{"id":"244f6021-5eab-4ba1-8968-3a6c9f985fe2","type":"BasicTicker"}},"id":"626beb84-c5d8-4f8e-bf04-0438c67a5caf","type":"LinearAxis"},{"attributes":{},"id":"b749264e-6627-4ad9-a0f3-6fd96ecefc9b","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"27c8c6a5-c938-48e1-8fae-8bc380d406e8","type":"Toolbar"},{"attributes":{"plot":{"id":"9000913d-7e55-4cba-8f4d-198e5010ef08","type":"Plot"},"ticker":{"id":"b749264e-6627-4ad9-a0f3-6fd96ecefc9b","type":"BasicTicker"}},"id":"2a2db5ec-7643-4f98-b802-6ef171f05edd","type":"Grid"},{"attributes":{"data_source":{"id":"cdef9a71-4e1b-4b8b-ab9a-aa1df062d451","type":"ColumnDataSource"},"glyph":{"id":"8c75292c-5de7-424b-a106-806dbf4dea3c","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"fb1d488f-ac13-4a2f-b854-60cfee55d0dd","type":"CDSView"}},"id":"fbc7ce0f-12bd-4c75-84ec-515decae273a","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#f4a582"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xm01"},"y0":{"field":"y"},"y1":{"field":"ym01"}},"id":"8c75292c-5de7-424b-a106-806dbf4dea3c","type":"Segment"},{"attributes":{"source":{"id":"cdef9a71-4e1b-4b8b-ab9a-aa1df062d451","type":"ColumnDataSource"}},"id":"fb1d488f-ac13-4a2f-b854-60cfee55d0dd","type":"CDSView"},{"attributes":{},"id":"850f4d34-ddd1-40d4-b0f6-544c97d621ea","type":"LinearScale"},{"attributes":{},"id":"c3472715-4a34-4618-bb04-21222fec14fc","type":"BasicTickFormatter"},{"attributes":{},"id":"244f6021-5eab-4ba1-8968-3a6c9f985fe2","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","xm01","ym01"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xm01":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"ym01":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]}}},"id":"cdef9a71-4e1b-4b8b-ab9a-aa1df062d451","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"9000913d-7e55-4cba-8f4d-198e5010ef08","type":"Plot"},"ticker":{"id":"244f6021-5eab-4ba1-8968-3a6c9f985fe2","type":"BasicTicker"}},"id":"51b391ba-dee2-4f82-a62c-6bdc8a7a0f60","type":"Grid"},{"attributes":{"formatter":{"id":"c3472715-4a34-4618-bb04-21222fec14fc","type":"BasicTickFormatter"},"plot":{"id":"9000913d-7e55-4cba-8f4d-198e5010ef08","type":"Plot"},"ticker":{"id":"b749264e-6627-4ad9-a0f3-6fd96ecefc9b","type":"BasicTicker"}},"id":"1dffb4d2-e34c-4fe5-b5b9-f36d55638874","type":"LinearAxis"}],"root_ids":["9000913d-7e55-4cba-8f4d-198e5010ef08"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"692adf3c-666e-4b49-bfea-d30ad7ac523b","elementid":"a6c4cfb5-9bc0-434f-bad9-9655b219e3d1","modelid":"9000913d-7e55-4cba-8f4d-198e5010ef08"}];
                
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
