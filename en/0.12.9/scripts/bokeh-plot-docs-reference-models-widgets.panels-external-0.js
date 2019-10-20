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
      };var element = document.getElementById("6ae80b81-d11e-461c-8c6e-e63cf2d9077a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6ae80b81-d11e-461c-8c6e-e63cf2d9077a' but no matching script tag was found. ")
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
                    var docs_json = {"8e4c0e7b-b2ed-470e-b4c0-bd722d217f4e":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"509c3df7-1235-4a0e-8a0d-66061118dd1f","type":"Title"},{"attributes":{},"id":"cdd3b41a-ea14-43f1-bb53-f2c5003c5a27","type":"SaveTool"},{"attributes":{"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"b25c9197-0b2b-4d2c-806a-51c0f6b70104","type":"Line"},{"attributes":{},"id":"b2b62e27-db55-41c9-a337-0ed1a7c63d25","type":"PanTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"6c0be30d-64e5-4754-9b6f-b010ce392e04","type":"Line"},{"attributes":{},"id":"2c97abd2-c1fb-44d1-8d9f-5435d7ef5591","type":"ResetTool"},{"attributes":{"plot":{"id":"bce1d30b-7511-4ecf-9881-058a6ef98745","subtype":"Figure","type":"Plot"},"ticker":{"id":"b85047b6-c0a5-42aa-b76d-b8d10844cb92","type":"BasicTicker"}},"id":"d78008a7-7d98-40eb-95e7-a4b121734497","type":"Grid"},{"attributes":{"source":{"id":"fdb5c735-8747-4c30-b74c-de14181a2add","type":"ColumnDataSource"}},"id":"430dce87-8bd1-420e-8436-79ce8f6ae659","type":"CDSView"},{"attributes":{},"id":"6d22ae56-b406-46f6-84a1-a389e679f193","type":"BasicTicker"},{"attributes":{"below":[{"id":"ec3488d2-3112-45ef-a423-d793a0a7f7ff","type":"LinearAxis"}],"left":[{"id":"a26f7727-66de-469e-9e52-ee09fb7096ba","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ec3488d2-3112-45ef-a423-d793a0a7f7ff","type":"LinearAxis"},{"id":"d78008a7-7d98-40eb-95e7-a4b121734497","type":"Grid"},{"id":"a26f7727-66de-469e-9e52-ee09fb7096ba","type":"LinearAxis"},{"id":"e4d946e9-0b4c-46fe-b782-4188635e3c8c","type":"Grid"},{"id":"26113690-cdf5-4eed-96b0-b27846ba428b","type":"BoxAnnotation"},{"id":"d2950ba9-1d9c-417b-a3a2-25a2986dedf3","type":"GlyphRenderer"}],"title":{"id":"0266ce54-b1e7-4b63-83d0-309b29c81f4d","type":"Title"},"toolbar":{"id":"98b82a21-78bb-4172-893a-d6e8b5617de1","type":"Toolbar"},"x_range":{"id":"9d1209f8-6dc6-4714-8b4a-3b79ef87df14","type":"DataRange1d"},"x_scale":{"id":"a0e5128d-6dac-4d05-8a18-4829feee2525","type":"LinearScale"},"y_range":{"id":"fa4e44df-5e32-4dae-a932-3533e05f6826","type":"DataRange1d"},"y_scale":{"id":"be086bbf-5903-47c5-8a70-34adf73087e6","type":"LinearScale"}},"id":"bce1d30b-7511-4ecf-9881-058a6ef98745","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"fa4e44df-5e32-4dae-a932-3533e05f6826","type":"DataRange1d"},{"attributes":{"data_source":{"id":"fdb5c735-8747-4c30-b74c-de14181a2add","type":"ColumnDataSource"},"glyph":{"id":"b25c9197-0b2b-4d2c-806a-51c0f6b70104","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6c0be30d-64e5-4754-9b6f-b010ce392e04","type":"Line"},"selection_glyph":null,"view":{"id":"430dce87-8bd1-420e-8436-79ce8f6ae659","type":"CDSView"}},"id":"59f463d3-b49d-4e17-82d2-87ab0e3934db","type":"GlyphRenderer"},{"attributes":{},"id":"d1958320-4e9d-485f-bebb-6fc3f28e79a9","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b2b62e27-db55-41c9-a337-0ed1a7c63d25","type":"PanTool"},{"id":"25f04b2a-6b7e-41fc-8630-1f83f88e27f7","type":"WheelZoomTool"},{"id":"a1f23ba1-d905-4ee9-862b-220d9d561da0","type":"BoxZoomTool"},{"id":"cdd3b41a-ea14-43f1-bb53-f2c5003c5a27","type":"SaveTool"},{"id":"2c97abd2-c1fb-44d1-8d9f-5435d7ef5591","type":"ResetTool"},{"id":"f3a59354-6954-4870-b763-1c1237458c3c","type":"HelpTool"}]},"id":"512a0330-ecac-489f-be3c-7d08aa741a50","type":"Toolbar"},{"attributes":{"formatter":{"id":"189cea1b-46fc-42b6-adc7-7ab68d2ad70e","type":"BasicTickFormatter"},"plot":{"id":"5228b844-d454-41ae-8f2f-837a1eab1925","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b04a0e1-d883-4e7f-824b-c6a1163783c8","type":"BasicTicker"}},"id":"3e2004d9-4134-4fbd-8733-e04e0eea754a","type":"LinearAxis"},{"attributes":{},"id":"9b04a0e1-d883-4e7f-824b-c6a1163783c8","type":"BasicTicker"},{"attributes":{},"id":"189cea1b-46fc-42b6-adc7-7ab68d2ad70e","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"bce1d30b-7511-4ecf-9881-058a6ef98745","subtype":"Figure","type":"Plot"},"ticker":{"id":"6c99d6a2-2fe3-4692-9e33-ee37cfd87ef0","type":"BasicTicker"}},"id":"e4d946e9-0b4c-46fe-b782-4188635e3c8c","type":"Grid"},{"attributes":{},"id":"cebefba7-220d-4c0e-9d67-16b839a1f698","type":"WheelZoomTool"},{"attributes":{"callback":null,"tabs":[{"id":"a9d339ae-fe12-4e8a-ba27-08fc2dd7b4ce","type":"Panel"},{"id":"fd597f66-eedf-42d3-a35e-4b44d20776fe","type":"Panel"}]},"id":"c5c58d44-ed9a-4ea9-aea1-5f18afc2dcfd","type":"Tabs"},{"attributes":{},"id":"b85047b6-c0a5-42aa-b76d-b8d10844cb92","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"5228b844-d454-41ae-8f2f-837a1eab1925","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d22ae56-b406-46f6-84a1-a389e679f193","type":"BasicTicker"}},"id":"d19f6ca0-ff5e-4f85-b5ba-660f7aea1a3d","type":"Grid"},{"attributes":{},"id":"a0e5128d-6dac-4d05-8a18-4829feee2525","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"d6893763-b2e5-4d46-9f86-4b8296df86f2","type":"Circle"},{"attributes":{"plot":{"id":"5228b844-d454-41ae-8f2f-837a1eab1925","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b04a0e1-d883-4e7f-824b-c6a1163783c8","type":"BasicTicker"}},"id":"3ca64ce9-57c6-4a65-bd50-efa34b074890","type":"Grid"},{"attributes":{"child":{"id":"5228b844-d454-41ae-8f2f-837a1eab1925","subtype":"Figure","type":"Plot"},"title":"line"},"id":"fd597f66-eedf-42d3-a35e-4b44d20776fe","type":"Panel"},{"attributes":{},"id":"6fe0e712-6613-4322-8de0-7b50db7ec9e2","type":"LinearScale"},{"attributes":{"formatter":{"id":"f04e7737-b0f2-469a-a9cc-91b261189d46","type":"BasicTickFormatter"},"plot":{"id":"5228b844-d454-41ae-8f2f-837a1eab1925","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d22ae56-b406-46f6-84a1-a389e679f193","type":"BasicTicker"}},"id":"d98ce51c-3084-433b-ad51-377b00662ee9","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"03b320c9-081e-4f4c-bae8-6bb36456c3eb","type":"PanTool"},{"id":"cebefba7-220d-4c0e-9d67-16b839a1f698","type":"WheelZoomTool"},{"id":"8b2269cf-80e6-4de6-83c1-9980c5a8e6d1","type":"BoxZoomTool"},{"id":"ff9e30bc-c497-4958-845c-4ce4a6d82b4c","type":"SaveTool"},{"id":"6101e4f0-4d52-46bd-8782-ae6d36089d70","type":"ResetTool"},{"id":"b1633c64-efac-4c2d-819e-9ec2a21a7fe3","type":"HelpTool"}]},"id":"98b82a21-78bb-4172-893a-d6e8b5617de1","type":"Toolbar"},{"attributes":{"data_source":{"id":"c2544dc7-6284-4ad5-bdb8-a1a00fa349a4","type":"ColumnDataSource"},"glyph":{"id":"4d6f5b93-59d4-47d9-bcaa-1e7ad9025db3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d6893763-b2e5-4d46-9f86-4b8296df86f2","type":"Circle"},"selection_glyph":null,"view":{"id":"3d400b4f-813d-4593-a9e9-9f8857c5b29d","type":"CDSView"}},"id":"d2950ba9-1d9c-417b-a3a2-25a2986dedf3","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"f987c3ec-ae92-4bb7-a095-63d615c34a36","type":"DataRange1d"},{"attributes":{},"id":"b1633c64-efac-4c2d-819e-9ec2a21a7fe3","type":"HelpTool"},{"attributes":{"callback":null},"id":"9d1209f8-6dc6-4714-8b4a-3b79ef87df14","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"4d6f5b93-59d4-47d9-bcaa-1e7ad9025db3","type":"Circle"},{"attributes":{"formatter":{"id":"51214649-5692-440a-951d-7dfcbdd7d425","type":"BasicTickFormatter"},"plot":{"id":"bce1d30b-7511-4ecf-9881-058a6ef98745","subtype":"Figure","type":"Plot"},"ticker":{"id":"6c99d6a2-2fe3-4692-9e33-ee37cfd87ef0","type":"BasicTicker"}},"id":"a26f7727-66de-469e-9e52-ee09fb7096ba","type":"LinearAxis"},{"attributes":{"child":{"id":"bce1d30b-7511-4ecf-9881-058a6ef98745","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"a9d339ae-fe12-4e8a-ba27-08fc2dd7b4ce","type":"Panel"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"c2544dc7-6284-4ad5-bdb8-a1a00fa349a4","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"fdb5c735-8747-4c30-b74c-de14181a2add","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"f22dcc18-6b86-40a8-a713-eee943deecc5","type":"DataRange1d"},{"attributes":{},"id":"ff9e30bc-c497-4958-845c-4ce4a6d82b4c","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26113690-cdf5-4eed-96b0-b27846ba428b","type":"BoxAnnotation"},{"attributes":{},"id":"03b320c9-081e-4f4c-bae8-6bb36456c3eb","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"101469cd-083f-4174-9696-16602c228541","type":"BoxAnnotation"},{"attributes":{},"id":"be086bbf-5903-47c5-8a70-34adf73087e6","type":"LinearScale"},{"attributes":{"source":{"id":"c2544dc7-6284-4ad5-bdb8-a1a00fa349a4","type":"ColumnDataSource"}},"id":"3d400b4f-813d-4593-a9e9-9f8857c5b29d","type":"CDSView"},{"attributes":{},"id":"f04e7737-b0f2-469a-a9cc-91b261189d46","type":"BasicTickFormatter"},{"attributes":{},"id":"6c99d6a2-2fe3-4692-9e33-ee37cfd87ef0","type":"BasicTicker"},{"attributes":{},"id":"a33b9aa7-ea07-4593-8719-b08806a26989","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"3e2004d9-4134-4fbd-8733-e04e0eea754a","type":"LinearAxis"}],"left":[{"id":"d98ce51c-3084-433b-ad51-377b00662ee9","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3e2004d9-4134-4fbd-8733-e04e0eea754a","type":"LinearAxis"},{"id":"3ca64ce9-57c6-4a65-bd50-efa34b074890","type":"Grid"},{"id":"d98ce51c-3084-433b-ad51-377b00662ee9","type":"LinearAxis"},{"id":"d19f6ca0-ff5e-4f85-b5ba-660f7aea1a3d","type":"Grid"},{"id":"101469cd-083f-4174-9696-16602c228541","type":"BoxAnnotation"},{"id":"59f463d3-b49d-4e17-82d2-87ab0e3934db","type":"GlyphRenderer"}],"title":{"id":"509c3df7-1235-4a0e-8a0d-66061118dd1f","type":"Title"},"toolbar":{"id":"512a0330-ecac-489f-be3c-7d08aa741a50","type":"Toolbar"},"x_range":{"id":"f987c3ec-ae92-4bb7-a095-63d615c34a36","type":"DataRange1d"},"x_scale":{"id":"6fe0e712-6613-4322-8de0-7b50db7ec9e2","type":"LinearScale"},"y_range":{"id":"f22dcc18-6b86-40a8-a713-eee943deecc5","type":"DataRange1d"},"y_scale":{"id":"d1958320-4e9d-485f-bebb-6fc3f28e79a9","type":"LinearScale"}},"id":"5228b844-d454-41ae-8f2f-837a1eab1925","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6101e4f0-4d52-46bd-8782-ae6d36089d70","type":"ResetTool"},{"attributes":{},"id":"25f04b2a-6b7e-41fc-8630-1f83f88e27f7","type":"WheelZoomTool"},{"attributes":{},"id":"f3a59354-6954-4870-b763-1c1237458c3c","type":"HelpTool"},{"attributes":{},"id":"51214649-5692-440a-951d-7dfcbdd7d425","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"0266ce54-b1e7-4b63-83d0-309b29c81f4d","type":"Title"},{"attributes":{"overlay":{"id":"101469cd-083f-4174-9696-16602c228541","type":"BoxAnnotation"}},"id":"a1f23ba1-d905-4ee9-862b-220d9d561da0","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"a33b9aa7-ea07-4593-8719-b08806a26989","type":"BasicTickFormatter"},"plot":{"id":"bce1d30b-7511-4ecf-9881-058a6ef98745","subtype":"Figure","type":"Plot"},"ticker":{"id":"b85047b6-c0a5-42aa-b76d-b8d10844cb92","type":"BasicTicker"}},"id":"ec3488d2-3112-45ef-a423-d793a0a7f7ff","type":"LinearAxis"},{"attributes":{"overlay":{"id":"26113690-cdf5-4eed-96b0-b27846ba428b","type":"BoxAnnotation"}},"id":"8b2269cf-80e6-4de6-83c1-9980c5a8e6d1","type":"BoxZoomTool"}],"root_ids":["c5c58d44-ed9a-4ea9-aea1-5f18afc2dcfd"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"8e4c0e7b-b2ed-470e-b4c0-bd722d217f4e","elementid":"6ae80b81-d11e-461c-8c6e-e63cf2d9077a","modelid":"c5c58d44-ed9a-4ea9-aea1-5f18afc2dcfd"}];
                
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
