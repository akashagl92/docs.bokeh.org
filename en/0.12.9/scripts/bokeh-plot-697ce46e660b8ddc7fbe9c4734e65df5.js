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
      };var element = document.getElementById("d8deb78f-b487-4e17-bfe3-7024dc390f38");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd8deb78f-b487-4e17-bfe3-7024dc390f38' but no matching script tag was found. ")
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
                    var docs_json = {"2632f942-d680-4471-99b7-e2a67f0b8929":{"roots":{"references":[{"attributes":{},"id":"ed1d5070-8a58-474a-8ebd-3c503da4dc8b","type":"BasicTickFormatter"},{"attributes":{},"id":"a7429236-ff60-4b9c-90f3-0dbb43e1794b","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"3ade504d-0115-456e-b4b1-7f5e6f4749f2","type":"BoxAnnotation"}},"id":"53b39fba-fffa-438e-a741-49dda9033f13","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"3512a5ef-6e24-43eb-a40a-877a337d9f9b","type":"Patch"},{"attributes":{},"id":"929101ab-8b7b-4187-be9e-71675963670a","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3ade504d-0115-456e-b4b1-7f5e6f4749f2","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"9bd47712-a68a-4119-abe2-fd4b70f9d1fa","type":"Patch"},{"attributes":{"formatter":{"id":"ed1d5070-8a58-474a-8ebd-3c503da4dc8b","type":"BasicTickFormatter"},"plot":{"id":"18ea17c7-aafb-48ae-b6b5-35833b5a769e","subtype":"Figure","type":"Plot"},"ticker":{"id":"1dbb129b-8689-4791-a4ab-eccffe31d201","type":"BasicTicker"}},"id":"d1375d7e-ea2a-4914-8143-80a0b7c5c9f4","type":"LinearAxis"},{"attributes":{"below":[{"id":"d1375d7e-ea2a-4914-8143-80a0b7c5c9f4","type":"LinearAxis"}],"left":[{"id":"b6dd0bf9-05ae-4b79-bfe5-7ee7bf65df5d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d1375d7e-ea2a-4914-8143-80a0b7c5c9f4","type":"LinearAxis"},{"id":"b0ead23b-0c69-4d57-865c-170a5c4cbc9f","type":"Grid"},{"id":"b6dd0bf9-05ae-4b79-bfe5-7ee7bf65df5d","type":"LinearAxis"},{"id":"7685c296-f801-4d08-bb5d-899a7dd45b89","type":"Grid"},{"id":"3ade504d-0115-456e-b4b1-7f5e6f4749f2","type":"BoxAnnotation"},{"id":"658480bd-404c-4b7c-abe3-c4afa3ed5630","type":"GlyphRenderer"}],"title":{"id":"d28db494-8a55-408e-a7da-d6e753d03606","type":"Title"},"toolbar":{"id":"f8d52174-3660-4d99-9833-4ce528a0b080","type":"Toolbar"},"x_range":{"id":"2ddd35ac-1c67-4356-acfb-7be19c9f11d1","type":"DataRange1d"},"x_scale":{"id":"b8f2fb13-385f-46aa-8219-4a3b52f85c5d","type":"LinearScale"},"y_range":{"id":"65ed8213-f9cb-4860-996e-4e5b7335d2a3","type":"DataRange1d"},"y_scale":{"id":"c4bcba2c-b395-4660-9404-2f6caa598c4d","type":"LinearScale"}},"id":"18ea17c7-aafb-48ae-b6b5-35833b5a769e","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"d28db494-8a55-408e-a7da-d6e753d03606","type":"Title"},{"attributes":{},"id":"0c0050fa-addf-4fcb-8626-0c178725b908","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"497f4271-341a-42d5-bd7b-efafdba25a13","type":"PanTool"},{"id":"a7429236-ff60-4b9c-90f3-0dbb43e1794b","type":"WheelZoomTool"},{"id":"53b39fba-fffa-438e-a741-49dda9033f13","type":"BoxZoomTool"},{"id":"610fc94a-9a19-4f68-af74-59697eaf5c3c","type":"SaveTool"},{"id":"a1f3d6aa-e0d1-4bf6-a6da-0b14f8dac104","type":"ResetTool"},{"id":"0c0050fa-addf-4fcb-8626-0c178725b908","type":"HelpTool"}]},"id":"f8d52174-3660-4d99-9833-4ce528a0b080","type":"Toolbar"},{"attributes":{},"id":"497f4271-341a-42d5-bd7b-efafdba25a13","type":"PanTool"},{"attributes":{"callback":null},"id":"2ddd35ac-1c67-4356-acfb-7be19c9f11d1","type":"DataRange1d"},{"attributes":{},"id":"a1f3d6aa-e0d1-4bf6-a6da-0b14f8dac104","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,"NaN",4,5,6],"y":[6,7,5,"NaN",7,3,6]}},"id":"4b40a36b-d65e-4327-bfbb-4e5b8c4d133e","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4b40a36b-d65e-4327-bfbb-4e5b8c4d133e","type":"ColumnDataSource"}},"id":"5656ca99-76f4-4220-8b62-20f52d8da01e","type":"CDSView"},{"attributes":{"callback":null},"id":"65ed8213-f9cb-4860-996e-4e5b7335d2a3","type":"DataRange1d"},{"attributes":{},"id":"c4bcba2c-b395-4660-9404-2f6caa598c4d","type":"LinearScale"},{"attributes":{"plot":{"id":"18ea17c7-aafb-48ae-b6b5-35833b5a769e","subtype":"Figure","type":"Plot"},"ticker":{"id":"1dbb129b-8689-4791-a4ab-eccffe31d201","type":"BasicTicker"}},"id":"b0ead23b-0c69-4d57-865c-170a5c4cbc9f","type":"Grid"},{"attributes":{"formatter":{"id":"ed5bd327-6846-4a8b-9088-4295f678c32b","type":"BasicTickFormatter"},"plot":{"id":"18ea17c7-aafb-48ae-b6b5-35833b5a769e","subtype":"Figure","type":"Plot"},"ticker":{"id":"929101ab-8b7b-4187-be9e-71675963670a","type":"BasicTicker"}},"id":"b6dd0bf9-05ae-4b79-bfe5-7ee7bf65df5d","type":"LinearAxis"},{"attributes":{},"id":"1dbb129b-8689-4791-a4ab-eccffe31d201","type":"BasicTicker"},{"attributes":{},"id":"ed5bd327-6846-4a8b-9088-4295f678c32b","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"4b40a36b-d65e-4327-bfbb-4e5b8c4d133e","type":"ColumnDataSource"},"glyph":{"id":"9bd47712-a68a-4119-abe2-fd4b70f9d1fa","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3512a5ef-6e24-43eb-a40a-877a337d9f9b","type":"Patch"},"selection_glyph":null,"view":{"id":"5656ca99-76f4-4220-8b62-20f52d8da01e","type":"CDSView"}},"id":"658480bd-404c-4b7c-abe3-c4afa3ed5630","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"18ea17c7-aafb-48ae-b6b5-35833b5a769e","subtype":"Figure","type":"Plot"},"ticker":{"id":"929101ab-8b7b-4187-be9e-71675963670a","type":"BasicTicker"}},"id":"7685c296-f801-4d08-bb5d-899a7dd45b89","type":"Grid"},{"attributes":{},"id":"b8f2fb13-385f-46aa-8219-4a3b52f85c5d","type":"LinearScale"},{"attributes":{},"id":"610fc94a-9a19-4f68-af74-59697eaf5c3c","type":"SaveTool"}],"root_ids":["18ea17c7-aafb-48ae-b6b5-35833b5a769e"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"2632f942-d680-4471-99b7-e2a67f0b8929","elementid":"d8deb78f-b487-4e17-bfe3-7024dc390f38","modelid":"18ea17c7-aafb-48ae-b6b5-35833b5a769e"}];
                
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
