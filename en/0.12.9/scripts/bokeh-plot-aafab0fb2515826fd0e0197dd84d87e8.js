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
      };var element = document.getElementById("7eae341c-d636-4992-bfbc-3c8332be7374");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7eae341c-d636-4992-bfbc-3c8332be7374' but no matching script tag was found. ")
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
                    var docs_json = {"2489b70a-4b4f-4fb8-bf5d-3c35d4ac12bc":{"roots":{"references":[{"attributes":{"overlay":{"id":"7bfde267-561d-4331-8d9f-b6ab087e7ed1","type":"BoxAnnotation"}},"id":"47b39989-aad7-4daa-9060-958dcd4144f9","type":"BoxZoomTool"},{"attributes":{},"id":"08259afc-0dea-4543-a4cd-6127230b1833","type":"BasicTicker"},{"attributes":{},"id":"c57c1bff-1c5f-40a1-a6b2-ecd8fd03805b","type":"ResetTool"},{"attributes":{"callback":null},"id":"a0144c0d-3ad5-4f73-871e-fa0c24064bf2","type":"DataRange1d"},{"attributes":{},"id":"b4c03c0a-7c3a-41ed-b350-eb779fe35bde","type":"SaveTool"},{"attributes":{},"id":"d2af6f1e-8c5b-4a5b-bf79-ad9924c721a2","type":"HelpTool"},{"attributes":{"below":[{"id":"82e327ac-b394-4153-b94e-6438f2383440","type":"LinearAxis"}],"left":[{"id":"53bd2d13-039f-42e2-932a-e0152a747e63","type":"LinearAxis"}],"renderers":[{"id":"82e327ac-b394-4153-b94e-6438f2383440","type":"LinearAxis"},{"id":"ec22d24e-b4e7-4aba-97b6-4c042be93bd5","type":"Grid"},{"id":"53bd2d13-039f-42e2-932a-e0152a747e63","type":"LinearAxis"},{"id":"1d603939-9816-4d14-9316-b38c0ae95065","type":"Grid"},{"id":"7bfde267-561d-4331-8d9f-b6ab087e7ed1","type":"BoxAnnotation"},{"id":"9c3a24b7-403c-411e-a174-f4358edcaa51","type":"GlyphRenderer"}],"title":{"id":"185712d7-47c1-461f-87ab-9abe2932058d","type":"Title"},"toolbar":{"id":"a4e81bb0-9fa8-4c88-948c-b9cdd3415067","type":"Toolbar"},"x_range":{"id":"b0dc47ba-a684-4952-babf-bd40bba8493c","type":"DataRange1d"},"x_scale":{"id":"8d9822a2-e406-48d9-9418-3d59205ad2c5","type":"LinearScale"},"y_range":{"id":"a0144c0d-3ad5-4f73-871e-fa0c24064bf2","type":"DataRange1d"},"y_scale":{"id":"9f30abde-5f5d-4390-bc0a-cd648c7d1cb8","type":"LinearScale"}},"id":"24f40ace-a9dc-4916-9160-80d668b3eea9","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6adee371-7003-41b3-98d8-0c83c5c242ef","type":"PanTool"},{"id":"b16c7e07-814b-4888-bb3b-6efa1b7344d0","type":"WheelZoomTool"},{"id":"47b39989-aad7-4daa-9060-958dcd4144f9","type":"BoxZoomTool"},{"id":"b4c03c0a-7c3a-41ed-b350-eb779fe35bde","type":"SaveTool"},{"id":"c57c1bff-1c5f-40a1-a6b2-ecd8fd03805b","type":"ResetTool"},{"id":"d2af6f1e-8c5b-4a5b-bf79-ad9924c721a2","type":"HelpTool"}]},"id":"a4e81bb0-9fa8-4c88-948c-b9cdd3415067","type":"Toolbar"},{"attributes":{},"id":"a5988abf-a694-4804-9092-f6541e1cccb3","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"24f40ace-a9dc-4916-9160-80d668b3eea9","subtype":"Figure","type":"Plot"},"ticker":{"id":"08259afc-0dea-4543-a4cd-6127230b1833","type":"BasicTicker"}},"id":"1d603939-9816-4d14-9316-b38c0ae95065","type":"Grid"},{"attributes":{"data_source":{"id":"cad73765-8442-4929-a2b7-fdea6f0f94c3","type":"ColumnDataSource"},"glyph":{"id":"204f3d0a-d889-4db8-9c7e-1a5983dec0b9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"815039db-2939-40d1-b1d9-cb21574679ab","type":"Circle"},"selection_glyph":null,"view":{"id":"54599e3e-6b3e-481d-8049-0938c70d6f06","type":"CDSView"}},"id":"9c3a24b7-403c-411e-a174-f4358edcaa51","type":"GlyphRenderer"},{"attributes":{"source":{"id":"cad73765-8442-4929-a2b7-fdea6f0f94c3","type":"ColumnDataSource"}},"id":"54599e3e-6b3e-481d-8049-0938c70d6f06","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"204f3d0a-d889-4db8-9c7e-1a5983dec0b9","type":"Circle"},{"attributes":{},"id":"b90492da-463d-4f23-8dd4-ac96157d5a55","type":"BasicTicker"},{"attributes":{"callback":null},"id":"b0dc47ba-a684-4952-babf-bd40bba8493c","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"line_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"x":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2P83MzMzMzBJAAAAAAAAAEkCamZmZmZkTQAAAAAAAABBAZmZmZmZmEkAAAAAAAAASQM3MzMzMzBJAZmZmZmZmCkBmZmZmZmYSQDMzMzMzMw9AAAAAAAAADEDNzMzMzMwQQAAAAAAAABBAzczMzMzMEkDNzMzMzMwMQJqZmZmZmRFAAAAAAAAAEkBmZmZmZmYQQAAAAAAAABJAMzMzMzMzD0AzMzMzMzMTQAAAAAAAABBAmpmZmZmZE0DNzMzMzMwSQDMzMzMzMxFAmpmZmZmZEUAzMzMzMzMTQAAAAAAAABRAAAAAAAAAEkAAAAAAAAAMQGZmZmZmZg5AmpmZmZmZDUAzMzMzMzMPQGZmZmZmZhRAAAAAAAAAEkAAAAAAAAASQM3MzMzMzBJAmpmZmZmZEUBmZmZmZmYQQAAAAAAAABBAmpmZmZmZEUBmZmZmZmYSQAAAAAAAABBAZmZmZmZmCkDNzMzMzMwQQM3MzMzMzBBAzczMzMzMEEAzMzMzMzMRQAAAAAAAAAhAZmZmZmZmEEAAAAAAAAAYQGZmZmZmZhRAmpmZmZmZF0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGkAAAAAAAAASQDMzMzMzMxlAMzMzMzMzF0BmZmZmZmYYQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQAAAAAAAABRAZmZmZmZmFEAzMzMzMzMVQAAAAAAAABZAzczMzMzMGkCamZmZmZkbQAAAAAAAABRAzczMzMzMFkCamZmZmZkTQM3MzMzMzBpAmpmZmZmZE0DNzMzMzMwWQAAAAAAAABhAMzMzMzMzE0CamZmZmZkTQGZmZmZmZhZAMzMzMzMzF0BmZmZmZmYYQJqZmZmZmRlAZmZmZmZmFkBmZmZmZmYUQGZmZmZmZhZAZmZmZmZmGEBmZmZmZmYWQAAAAAAAABZAMzMzMzMzE0CamZmZmZkVQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYUQJqZmZmZmRdAzczMzMzMFkDNzMzMzMwUQAAAAAAAABRAzczMzMzMFECamZmZmZkVQGZmZmZmZhRA","dtype":"float64","shape":[150]},"y":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZm5P5qZmZmZmck/mpmZmZmZ2T+amZmZmZnZPzMzMzMzM9M/MzMzMzMz0z8zMzMzMzPTP5qZmZmZmck/mpmZmZmZ2T+amZmZmZnJPwAAAAAAAOA/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnZP5qZmZmZmbk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZm5P5qZmZmZmck/mpmZmZmZyT8zMzMzMzPTPzMzMzMzM9M/mpmZmZmZyT8zMzMzMzPjP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P5qZmZmZmfk/AAAAAAAA8D/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAPA/ZmZmZmZm9j/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAADwPwAAAAAAAPg/mpmZmZmZ8T/NzMzMzMz8P83MzMzMzPQ/AAAAAAAA+D8zMzMzMzPzP83MzMzMzPQ/ZmZmZmZm9j9mZmZmZmb2PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwP5qZmZmZmfE/AAAAAAAA8D8zMzMzMzPzP5qZmZmZmfk/AAAAAAAA+D+amZmZmZn5PwAAAAAAAPg/zczMzMzM9D/NzMzMzMz0P83MzMzMzPQ/MzMzMzMz8z9mZmZmZmb2PzMzMzMzM/M/AAAAAAAA8D/NzMzMzMz0PzMzMzMzM/M/zczMzMzM9D/NzMzMzMz0P5qZmZmZmfE/zczMzMzM9D8AAAAAAAAEQGZmZmZmZv4/zczMzMzMAEDNzMzMzMz8P5qZmZmZmQFAzczMzMzMAEAzMzMzMzP7P83MzMzMzPw/zczMzMzM/D8AAAAAAAAEQAAAAAAAAABAZmZmZmZm/j/NzMzMzMwAQAAAAAAAAABAMzMzMzMzA0BmZmZmZmYCQM3MzMzMzPw/mpmZmZmZAUBmZmZmZmYCQAAAAAAAAPg/ZmZmZmZmAkAAAAAAAAAAQAAAAAAAAABAzczMzMzM/D/NzMzMzMwAQM3MzMzMzPw/zczMzMzM/D/NzMzMzMz8P83MzMzMzABAmpmZmZmZ+T9mZmZmZmb+PwAAAAAAAABAmpmZmZmZAUAAAAAAAAD4P2ZmZmZmZvY/ZmZmZmZmAkAzMzMzMzMDQM3MzMzMzPw/zczMzMzM/D/NzMzMzMwAQDMzMzMzMwNAZmZmZmZmAkBmZmZmZmb+P2ZmZmZmZgJAAAAAAAAABEBmZmZmZmYCQGZmZmZmZv4/AAAAAAAAAEBmZmZmZmYCQM3MzMzMzPw/","dtype":"float64","shape":[150]}}},"id":"cad73765-8442-4929-a2b7-fdea6f0f94c3","type":"ColumnDataSource"},{"attributes":{},"id":"44163cd9-5a2d-43d8-b878-72a61518a190","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Iris Morphology"},"id":"185712d7-47c1-461f-87ab-9abe2932058d","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"815039db-2939-40d1-b1d9-cb21574679ab","type":"Circle"},{"attributes":{},"id":"8d9822a2-e406-48d9-9418-3d59205ad2c5","type":"LinearScale"},{"attributes":{},"id":"6adee371-7003-41b3-98d8-0c83c5c242ef","type":"PanTool"},{"attributes":{"plot":{"id":"24f40ace-a9dc-4916-9160-80d668b3eea9","subtype":"Figure","type":"Plot"},"ticker":{"id":"b90492da-463d-4f23-8dd4-ac96157d5a55","type":"BasicTicker"}},"id":"ec22d24e-b4e7-4aba-97b6-4c042be93bd5","type":"Grid"},{"attributes":{},"id":"9f30abde-5f5d-4390-bc0a-cd648c7d1cb8","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7bfde267-561d-4331-8d9f-b6ab087e7ed1","type":"BoxAnnotation"},{"attributes":{"axis_label":"Petal Length","formatter":{"id":"a5988abf-a694-4804-9092-f6541e1cccb3","type":"BasicTickFormatter"},"plot":{"id":"24f40ace-a9dc-4916-9160-80d668b3eea9","subtype":"Figure","type":"Plot"},"ticker":{"id":"b90492da-463d-4f23-8dd4-ac96157d5a55","type":"BasicTicker"}},"id":"82e327ac-b394-4153-b94e-6438f2383440","type":"LinearAxis"},{"attributes":{},"id":"b16c7e07-814b-4888-bb3b-6efa1b7344d0","type":"WheelZoomTool"},{"attributes":{"axis_label":"Petal Width","formatter":{"id":"44163cd9-5a2d-43d8-b878-72a61518a190","type":"BasicTickFormatter"},"plot":{"id":"24f40ace-a9dc-4916-9160-80d668b3eea9","subtype":"Figure","type":"Plot"},"ticker":{"id":"08259afc-0dea-4543-a4cd-6127230b1833","type":"BasicTicker"}},"id":"53bd2d13-039f-42e2-932a-e0152a747e63","type":"LinearAxis"}],"root_ids":["24f40ace-a9dc-4916-9160-80d668b3eea9"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"2489b70a-4b4f-4fb8-bf5d-3c35d4ac12bc","elementid":"7eae341c-d636-4992-bfbc-3c8332be7374","modelid":"24f40ace-a9dc-4916-9160-80d668b3eea9"}];
                
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
