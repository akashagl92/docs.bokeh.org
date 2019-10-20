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
      };var element = document.getElementById("28a8c4ef-243b-4619-84c0-04551ad4d4b0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '28a8c4ef-243b-4619-84c0-04551ad4d4b0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a62835ec-4298-427d-a42c-d31913135eda":{"roots":{"references":[{"attributes":{},"id":"5940d466-575c-4c10-99f2-6c1ae1064f23","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"0a587858-8428-4cbf-baf6-87400d99b078","type":"Title"},{"attributes":{"formatter":{"id":"09abaa49-59c2-4241-9f6e-4bf43eee2b30","type":"BasicTickFormatter"},"plot":{"id":"99e2d489-a33c-4ce6-8988-8fcc1acc3350","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2bb5b17-223a-468b-8817-e912d7408ba5","type":"BasicTicker"}},"id":"b7d528f2-a633-4248-bde1-853d14516f65","type":"LinearAxis"},{"attributes":{"plot":{"id":"99e2d489-a33c-4ce6-8988-8fcc1acc3350","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2bb5b17-223a-468b-8817-e912d7408ba5","type":"BasicTicker"}},"id":"007bd0d4-fcae-43cf-bf6a-cc9ae4d10891","type":"Grid"},{"attributes":{},"id":"07fd2f5b-7fa3-45ae-b519-adb69fb144cc","type":"Selection"},{"attributes":{},"id":"af4f0e12-8e92-4ca7-b64e-4dbd6f21e5ea","type":"ResetTool"},{"attributes":{},"id":"09abaa49-59c2-4241-9f6e-4bf43eee2b30","type":"BasicTickFormatter"},{"attributes":{},"id":"2cb6510b-3344-4b44-95f3-29a4fdf5cc57","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"db350bf8-9126-49fd-91a7-8e7b7c9e7054","type":"BoxAnnotation"},{"attributes":{},"id":"b51b60a7-cfcf-4153-bb6e-cda179cc3b53","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"b51b60a7-cfcf-4153-bb6e-cda179cc3b53","type":"BasicTickFormatter"},"plot":{"id":"99e2d489-a33c-4ce6-8988-8fcc1acc3350","subtype":"Figure","type":"Plot"},"ticker":{"id":"fa9d86fe-a353-40e2-962d-62ef2d629cc0","type":"BasicTicker"}},"id":"52d93621-225c-44f1-addc-9090d879a2bc","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"27934a8b-6567-4862-a46f-f94e311d2326","type":"Segment"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"5aeace4d-18bd-420c-ba30-fd0988e9b9fd","type":"Segment"},{"attributes":{},"id":"709d06ba-01e3-4504-a330-49742b06c52d","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"b49d7c63-902b-4cde-a3f7-c993039cb62c","type":"ColumnDataSource"},"glyph":{"id":"5aeace4d-18bd-420c-ba30-fd0988e9b9fd","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27934a8b-6567-4862-a46f-f94e311d2326","type":"Segment"},"selection_glyph":null,"view":{"id":"7300be47-413c-476b-a994-8bb94837587c","type":"CDSView"}},"id":"1d378406-ad96-43e6-85f7-30e11f04d03e","type":"GlyphRenderer"},{"attributes":{},"id":"385fd419-7625-4e2e-891a-b764127ff795","type":"HelpTool"},{"attributes":{"source":{"id":"b49d7c63-902b-4cde-a3f7-c993039cb62c","type":"ColumnDataSource"}},"id":"7300be47-413c-476b-a994-8bb94837587c","type":"CDSView"},{"attributes":{"callback":null,"data":{"x0":[1,2,3],"x1":[1,2,3],"y0":[1,2,3],"y1":[1.2,2.5,3.7]},"selected":{"id":"07fd2f5b-7fa3-45ae-b519-adb69fb144cc","type":"Selection"},"selection_policy":{"id":"709d06ba-01e3-4504-a330-49742b06c52d","type":"UnionRenderers"}},"id":"b49d7c63-902b-4cde-a3f7-c993039cb62c","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"99e2d489-a33c-4ce6-8988-8fcc1acc3350","subtype":"Figure","type":"Plot"},"ticker":{"id":"fa9d86fe-a353-40e2-962d-62ef2d629cc0","type":"BasicTicker"}},"id":"4cb6f1e7-1cbf-40d3-a949-63e4bd8ff9e8","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"69cc9efa-18a5-4b2e-9be1-0937f6672b1d","type":"PanTool"},{"id":"5940d466-575c-4c10-99f2-6c1ae1064f23","type":"WheelZoomTool"},{"id":"17145d1e-f7c8-4032-818e-bb9153cf87d1","type":"BoxZoomTool"},{"id":"2cb6510b-3344-4b44-95f3-29a4fdf5cc57","type":"SaveTool"},{"id":"af4f0e12-8e92-4ca7-b64e-4dbd6f21e5ea","type":"ResetTool"},{"id":"385fd419-7625-4e2e-891a-b764127ff795","type":"HelpTool"}]},"id":"e410de1c-2876-4241-9f51-f84d1e433aa4","type":"Toolbar"},{"attributes":{"below":[{"id":"b7d528f2-a633-4248-bde1-853d14516f65","type":"LinearAxis"}],"left":[{"id":"52d93621-225c-44f1-addc-9090d879a2bc","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b7d528f2-a633-4248-bde1-853d14516f65","type":"LinearAxis"},{"id":"007bd0d4-fcae-43cf-bf6a-cc9ae4d10891","type":"Grid"},{"id":"52d93621-225c-44f1-addc-9090d879a2bc","type":"LinearAxis"},{"id":"4cb6f1e7-1cbf-40d3-a949-63e4bd8ff9e8","type":"Grid"},{"id":"db350bf8-9126-49fd-91a7-8e7b7c9e7054","type":"BoxAnnotation"},{"id":"1d378406-ad96-43e6-85f7-30e11f04d03e","type":"GlyphRenderer"}],"title":{"id":"0a587858-8428-4cbf-baf6-87400d99b078","type":"Title"},"toolbar":{"id":"e410de1c-2876-4241-9f51-f84d1e433aa4","type":"Toolbar"},"x_range":{"id":"50fa7e03-22f3-487a-9adb-664abedacd6d","type":"DataRange1d"},"x_scale":{"id":"e30bec63-03d4-4698-a994-fcb8122d188c","type":"LinearScale"},"y_range":{"id":"1f2499d3-cf87-422c-af5b-4b2e08ffdd18","type":"DataRange1d"},"y_scale":{"id":"fc7bd780-1631-4d2c-8478-c19688976bcb","type":"LinearScale"}},"id":"99e2d489-a33c-4ce6-8988-8fcc1acc3350","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"fa9d86fe-a353-40e2-962d-62ef2d629cc0","type":"BasicTicker"},{"attributes":{"overlay":{"id":"db350bf8-9126-49fd-91a7-8e7b7c9e7054","type":"BoxAnnotation"}},"id":"17145d1e-f7c8-4032-818e-bb9153cf87d1","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"1f2499d3-cf87-422c-af5b-4b2e08ffdd18","type":"DataRange1d"},{"attributes":{},"id":"fc7bd780-1631-4d2c-8478-c19688976bcb","type":"LinearScale"},{"attributes":{"callback":null},"id":"50fa7e03-22f3-487a-9adb-664abedacd6d","type":"DataRange1d"},{"attributes":{},"id":"69cc9efa-18a5-4b2e-9be1-0937f6672b1d","type":"PanTool"},{"attributes":{},"id":"c2bb5b17-223a-468b-8817-e912d7408ba5","type":"BasicTicker"},{"attributes":{},"id":"e30bec63-03d4-4698-a994-fcb8122d188c","type":"LinearScale"}],"root_ids":["99e2d489-a33c-4ce6-8988-8fcc1acc3350"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"a62835ec-4298-427d-a42c-d31913135eda","roots":{"99e2d489-a33c-4ce6-8988-8fcc1acc3350":"28a8c4ef-243b-4619-84c0-04551ad4d4b0"}}];
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