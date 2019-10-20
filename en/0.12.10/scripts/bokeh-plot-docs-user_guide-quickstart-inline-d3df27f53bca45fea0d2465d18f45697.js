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
      };var element = document.getElementById("d766858f-7e51-4f44-a704-40456216d560");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd766858f-7e51-4f44-a704-40456216d560' but no matching script tag was found. ")
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
                    var docs_json = {"8b07d2c5-aedc-4e3b-84ba-ab4b9132c5e6":{"roots":{"references":[{"attributes":{},"id":"4b8de8ad-91da-4604-9f8b-4f45a5304b77","type":"BasicTickFormatter"},{"attributes":{"axis_label":"x","formatter":{"id":"d59fa5d4-5ad5-47f8-aafc-213f17e546c0","type":"BasicTickFormatter"},"plot":{"id":"c2fb514e-06ea-4f5e-844e-2977f65915ed","subtype":"Figure","type":"Plot"},"ticker":{"id":"bda4d670-977d-43ad-8b11-0f4322c7d37f","type":"BasicTicker"}},"id":"3508d21d-3ec9-47ca-88c7-2e726f616e71","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ba0ec718-d4fb-4e37-aa12-aa2b91be7f0a","type":"Line"},{"attributes":{"axis_label":"y","formatter":{"id":"4b8de8ad-91da-4604-9f8b-4f45a5304b77","type":"BasicTickFormatter"},"plot":{"id":"c2fb514e-06ea-4f5e-844e-2977f65915ed","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e861300-7e3c-4ddb-ad2c-dfb210d2a0ac","type":"BasicTicker"}},"id":"bad5144c-d25d-4702-a43f-219d672cbc4f","type":"LinearAxis"},{"attributes":{},"id":"bda4d670-977d-43ad-8b11-0f4322c7d37f","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e123ceaa-7960-4ba8-97e7-1b2197590ee1","type":"BoxAnnotation"},{"attributes":{},"id":"55e8d41d-ac4d-4fd7-8cad-12eb056dfb02","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ced34a13-fbeb-4de6-8c5a-53a92056b96a","type":"Line"},{"attributes":{},"id":"291c6c82-65b9-42c6-b850-9d8c9a54b902","type":"LinearScale"},{"attributes":{},"id":"f20a06ed-5615-4186-a708-b4228917fd40","type":"HelpTool"},{"attributes":{"items":[{"id":"6b6390b2-e840-4d25-bb3a-85e70bec9adb","type":"LegendItem"}],"plot":{"id":"c2fb514e-06ea-4f5e-844e-2977f65915ed","subtype":"Figure","type":"Plot"}},"id":"b3511983-d12b-4f5f-911f-d71dc33d683e","type":"Legend"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"92c825ba-3a1e-4232-99cb-9d05b9d3992d","type":"ColumnDataSource"},{"attributes":{},"id":"e857dd0c-d064-4118-aea0-118c227de8fc","type":"PanTool"},{"attributes":{},"id":"757b97a9-56b1-4c41-be77-67a1e3328cbd","type":"ResetTool"},{"attributes":{"below":[{"id":"3508d21d-3ec9-47ca-88c7-2e726f616e71","type":"LinearAxis"}],"left":[{"id":"bad5144c-d25d-4702-a43f-219d672cbc4f","type":"LinearAxis"}],"renderers":[{"id":"3508d21d-3ec9-47ca-88c7-2e726f616e71","type":"LinearAxis"},{"id":"62f9e8a5-b694-485f-a61f-bb6f1bf1d128","type":"Grid"},{"id":"bad5144c-d25d-4702-a43f-219d672cbc4f","type":"LinearAxis"},{"id":"6f338950-ad12-436a-a4c7-5ef70ba699e7","type":"Grid"},{"id":"e123ceaa-7960-4ba8-97e7-1b2197590ee1","type":"BoxAnnotation"},{"id":"b3511983-d12b-4f5f-911f-d71dc33d683e","type":"Legend"},{"id":"9f76d69e-2315-468e-8c10-714271142d7b","type":"GlyphRenderer"}],"title":{"id":"e2031f0c-dfd0-4679-9036-8c836c026bdc","type":"Title"},"toolbar":{"id":"f0f3128c-0c83-4760-bbe7-6fa5cb58ede3","type":"Toolbar"},"x_range":{"id":"b71b714c-e1cd-4fa0-a8bf-b9bef2fa5bf7","type":"DataRange1d"},"x_scale":{"id":"291c6c82-65b9-42c6-b850-9d8c9a54b902","type":"LinearScale"},"y_range":{"id":"2fd83376-f069-4a49-8224-cf83792d62db","type":"DataRange1d"},"y_scale":{"id":"c1fc0bc9-af9b-45b7-ae82-f6d69edac565","type":"LinearScale"}},"id":"c2fb514e-06ea-4f5e-844e-2977f65915ed","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d548fe17-6d98-45a2-b302-94fb92186797","type":"SaveTool"},{"attributes":{"plot":null,"text":"simple line example"},"id":"e2031f0c-dfd0-4679-9036-8c836c026bdc","type":"Title"},{"attributes":{"data_source":{"id":"92c825ba-3a1e-4232-99cb-9d05b9d3992d","type":"ColumnDataSource"},"glyph":{"id":"ba0ec718-d4fb-4e37-aa12-aa2b91be7f0a","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ced34a13-fbeb-4de6-8c5a-53a92056b96a","type":"Line"},"selection_glyph":null,"view":{"id":"0cf561cd-fe7e-4acb-8c30-1cf7ca97569b","type":"CDSView"}},"id":"9f76d69e-2315-468e-8c10-714271142d7b","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"2fd83376-f069-4a49-8224-cf83792d62db","type":"DataRange1d"},{"attributes":{"plot":{"id":"c2fb514e-06ea-4f5e-844e-2977f65915ed","subtype":"Figure","type":"Plot"},"ticker":{"id":"bda4d670-977d-43ad-8b11-0f4322c7d37f","type":"BasicTicker"}},"id":"62f9e8a5-b694-485f-a61f-bb6f1bf1d128","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"c2fb514e-06ea-4f5e-844e-2977f65915ed","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e861300-7e3c-4ddb-ad2c-dfb210d2a0ac","type":"BasicTicker"}},"id":"6f338950-ad12-436a-a4c7-5ef70ba699e7","type":"Grid"},{"attributes":{},"id":"d59fa5d4-5ad5-47f8-aafc-213f17e546c0","type":"BasicTickFormatter"},{"attributes":{},"id":"c1fc0bc9-af9b-45b7-ae82-f6d69edac565","type":"LinearScale"},{"attributes":{"label":{"value":"Temp."},"renderers":[{"id":"9f76d69e-2315-468e-8c10-714271142d7b","type":"GlyphRenderer"}]},"id":"6b6390b2-e840-4d25-bb3a-85e70bec9adb","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e857dd0c-d064-4118-aea0-118c227de8fc","type":"PanTool"},{"id":"55e8d41d-ac4d-4fd7-8cad-12eb056dfb02","type":"WheelZoomTool"},{"id":"49d5e021-34f8-4629-bca9-35ebd2760291","type":"BoxZoomTool"},{"id":"d548fe17-6d98-45a2-b302-94fb92186797","type":"SaveTool"},{"id":"757b97a9-56b1-4c41-be77-67a1e3328cbd","type":"ResetTool"},{"id":"f20a06ed-5615-4186-a708-b4228917fd40","type":"HelpTool"}]},"id":"f0f3128c-0c83-4760-bbe7-6fa5cb58ede3","type":"Toolbar"},{"attributes":{},"id":"9e861300-7e3c-4ddb-ad2c-dfb210d2a0ac","type":"BasicTicker"},{"attributes":{"source":{"id":"92c825ba-3a1e-4232-99cb-9d05b9d3992d","type":"ColumnDataSource"}},"id":"0cf561cd-fe7e-4acb-8c30-1cf7ca97569b","type":"CDSView"},{"attributes":{"callback":null},"id":"b71b714c-e1cd-4fa0-a8bf-b9bef2fa5bf7","type":"DataRange1d"},{"attributes":{"overlay":{"id":"e123ceaa-7960-4ba8-97e7-1b2197590ee1","type":"BoxAnnotation"}},"id":"49d5e021-34f8-4629-bca9-35ebd2760291","type":"BoxZoomTool"}],"root_ids":["c2fb514e-06ea-4f5e-844e-2977f65915ed"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"8b07d2c5-aedc-4e3b-84ba-ab4b9132c5e6","elementid":"d766858f-7e51-4f44-a704-40456216d560","modelid":"c2fb514e-06ea-4f5e-844e-2977f65915ed"}];
                
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
