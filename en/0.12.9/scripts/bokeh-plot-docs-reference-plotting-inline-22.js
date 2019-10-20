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
      };var element = document.getElementById("c8ab4083-8789-46b5-b788-d36ed016a24c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c8ab4083-8789-46b5-b788-d36ed016a24c' but no matching script tag was found. ")
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
                    var docs_json = {"9c9a3af0-4bcf-4e61-9cc5-d70e0a7ce60f":{"roots":{"references":[{"attributes":{"source":{"id":"1b6a7016-2811-4813-b581-264b0838ea01","type":"ColumnDataSource"}},"id":"b2be7bee-cea4-44db-8594-7ce6c10f4913","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"80472d1c-c33d-4f67-b0e2-924e9c288267","type":"Title"},{"attributes":{},"id":"64848f28-ad5e-42b0-bf8f-c93598e8578e","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"1b6a7016-2811-4813-b581-264b0838ea01","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"d5d089fb-d40f-48a7-8fd3-eded9dfe6689","subtype":"Figure","type":"Plot"},"ticker":{"id":"64848f28-ad5e-42b0-bf8f-c93598e8578e","type":"BasicTicker"}},"id":"6683a406-0ae7-47f7-9ae9-6e602f327515","type":"Grid"},{"attributes":{},"id":"427d6d1e-e7b0-44a9-b086-653dd8094199","type":"LinearScale"},{"attributes":{"formatter":{"id":"1e55e66e-0312-4fcb-80c4-a75f2cc2f548","type":"BasicTickFormatter"},"plot":{"id":"d5d089fb-d40f-48a7-8fd3-eded9dfe6689","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf71f9c6-185d-49ca-91ea-1f31961e93b6","type":"BasicTicker"}},"id":"46490f94-6c2a-4278-8c07-10ba43ca0208","type":"LinearAxis"},{"attributes":{"overlay":{"id":"c01d84cb-593a-4880-b6e5-5ded950dfcb7","type":"BoxAnnotation"}},"id":"be0ff81e-46ff-401c-840a-11dfe1bdc077","type":"BoxZoomTool"},{"attributes":{},"id":"4e75231c-0fca-42d4-a212-2eebd36e0de8","type":"LinearScale"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#FDAE6B"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"027c1396-3634-4624-8b97-a3f09961c490","type":"SquareX"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9c9da4c3-568c-496a-9930-698c6d61c602","type":"PanTool"},{"id":"95d5fc44-716f-4775-92e4-63903f8ee9fb","type":"WheelZoomTool"},{"id":"be0ff81e-46ff-401c-840a-11dfe1bdc077","type":"BoxZoomTool"},{"id":"6545832b-1ce1-4dda-a188-7abc24c91218","type":"SaveTool"},{"id":"aa808a12-fa8c-41bf-b794-661efff552fb","type":"ResetTool"},{"id":"d82c37e1-896e-4d7b-885b-f5ea1b513539","type":"HelpTool"}]},"id":"24e47d0a-8637-4ef2-af03-6f35f1c930cf","type":"Toolbar"},{"attributes":{},"id":"95d5fc44-716f-4775-92e4-63903f8ee9fb","type":"WheelZoomTool"},{"attributes":{},"id":"1e55e66e-0312-4fcb-80c4-a75f2cc2f548","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c01d84cb-593a-4880-b6e5-5ded950dfcb7","type":"BoxAnnotation"},{"attributes":{},"id":"6abcd84d-34e1-4d68-b12e-8e4a7c8dce4e","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"f568c628-a3fa-43b6-af87-3f757567e837","type":"DataRange1d"},{"attributes":{},"id":"9c9da4c3-568c-496a-9930-698c6d61c602","type":"PanTool"},{"attributes":{},"id":"cf71f9c6-185d-49ca-91ea-1f31961e93b6","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1b6a7016-2811-4813-b581-264b0838ea01","type":"ColumnDataSource"},"glyph":{"id":"027c1396-3634-4624-8b97-a3f09961c490","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4dbe7fb0-3ad7-4c0c-a547-09ca251b7d7d","type":"SquareX"},"selection_glyph":null,"view":{"id":"b2be7bee-cea4-44db-8594-7ce6c10f4913","type":"CDSView"}},"id":"0f1a439c-2b45-4b03-a033-10d117bf96a1","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"f318acec-2c1c-4147-b56b-e19cf19d63d3","type":"DataRange1d"},{"attributes":{},"id":"6545832b-1ce1-4dda-a188-7abc24c91218","type":"SaveTool"},{"attributes":{},"id":"aa808a12-fa8c-41bf-b794-661efff552fb","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4dbe7fb0-3ad7-4c0c-a547-09ca251b7d7d","type":"SquareX"},{"attributes":{"plot":{"id":"d5d089fb-d40f-48a7-8fd3-eded9dfe6689","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf71f9c6-185d-49ca-91ea-1f31961e93b6","type":"BasicTicker"}},"id":"e87f8b5a-09fc-4628-a282-534cdb0d009f","type":"Grid"},{"attributes":{},"id":"d82c37e1-896e-4d7b-885b-f5ea1b513539","type":"HelpTool"},{"attributes":{"below":[{"id":"46490f94-6c2a-4278-8c07-10ba43ca0208","type":"LinearAxis"}],"left":[{"id":"2add6378-6b2e-43df-baa2-f5bd194c0407","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"46490f94-6c2a-4278-8c07-10ba43ca0208","type":"LinearAxis"},{"id":"e87f8b5a-09fc-4628-a282-534cdb0d009f","type":"Grid"},{"id":"2add6378-6b2e-43df-baa2-f5bd194c0407","type":"LinearAxis"},{"id":"6683a406-0ae7-47f7-9ae9-6e602f327515","type":"Grid"},{"id":"c01d84cb-593a-4880-b6e5-5ded950dfcb7","type":"BoxAnnotation"},{"id":"0f1a439c-2b45-4b03-a033-10d117bf96a1","type":"GlyphRenderer"}],"title":{"id":"80472d1c-c33d-4f67-b0e2-924e9c288267","type":"Title"},"toolbar":{"id":"24e47d0a-8637-4ef2-af03-6f35f1c930cf","type":"Toolbar"},"x_range":{"id":"f318acec-2c1c-4147-b56b-e19cf19d63d3","type":"DataRange1d"},"x_scale":{"id":"4e75231c-0fca-42d4-a212-2eebd36e0de8","type":"LinearScale"},"y_range":{"id":"f568c628-a3fa-43b6-af87-3f757567e837","type":"DataRange1d"},"y_scale":{"id":"427d6d1e-e7b0-44a9-b086-653dd8094199","type":"LinearScale"}},"id":"d5d089fb-d40f-48a7-8fd3-eded9dfe6689","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"6abcd84d-34e1-4d68-b12e-8e4a7c8dce4e","type":"BasicTickFormatter"},"plot":{"id":"d5d089fb-d40f-48a7-8fd3-eded9dfe6689","subtype":"Figure","type":"Plot"},"ticker":{"id":"64848f28-ad5e-42b0-bf8f-c93598e8578e","type":"BasicTicker"}},"id":"2add6378-6b2e-43df-baa2-f5bd194c0407","type":"LinearAxis"}],"root_ids":["d5d089fb-d40f-48a7-8fd3-eded9dfe6689"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"9c9a3af0-4bcf-4e61-9cc5-d70e0a7ce60f","elementid":"c8ab4083-8789-46b5-b788-d36ed016a24c","modelid":"d5d089fb-d40f-48a7-8fd3-eded9dfe6689"}];
                
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
