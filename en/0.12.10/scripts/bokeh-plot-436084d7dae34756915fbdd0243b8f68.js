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
      };var element = document.getElementById("7418998d-e9b0-4061-97a9-f6b4e68a811c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7418998d-e9b0-4061-97a9-f6b4e68a811c' but no matching script tag was found. ")
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
                    var docs_json = {"87cd06b5-1a09-403e-9c56-5afabb549c34":{"roots":{"references":[{"attributes":{"data_source":{"id":"47d0506d-719f-4f48-91e7-0f84646b2049","type":"ColumnDataSource"},"glyph":{"id":"b2d2b86e-ab3a-4c89-90e3-2535627e6e06","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0a04f3c5-30c7-4075-9682-8f8e3f6b63a9","type":"Circle"},"selection_glyph":null,"view":{"id":"9ee24777-f5be-4d3e-b05f-cc602f9a6a9d","type":"CDSView"}},"id":"182c45d8-f8d0-4abc-a450-7a3616687f0e","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"fbaabdc5-c690-447c-986a-d990c873726a","type":"DataRange1d"},{"attributes":{},"id":"daf77af3-f236-4087-9ee6-28cfccc42f02","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"68da5bec-8b39-41a3-ad43-95d687a30958","type":"DataRange1d"},{"attributes":{},"id":"1662a214-724a-46a2-8e21-16a93b51f515","type":"SaveTool"},{"attributes":{"source":{"id":"47d0506d-719f-4f48-91e7-0f84646b2049","type":"ColumnDataSource"}},"id":"9ee24777-f5be-4d3e-b05f-cc602f9a6a9d","type":"CDSView"},{"attributes":{},"id":"948b9764-8aa2-4019-b29f-3afef5e11aa1","type":"LinearScale"},{"attributes":{},"id":"2aead2ec-0981-4269-8e5f-fe3262836650","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"034e1c81-eb90-47d9-914b-18fc8203834c","subtype":"Figure","type":"Plot"},"ticker":{"id":"18d49ed3-7071-4b1c-b956-082de6c8ad75","type":"BasicTicker"}},"id":"2f123ce9-a6b6-423b-8e36-c47bb3556b74","type":"Grid"},{"attributes":{},"id":"7fa1ee7f-11e7-42e2-9fb3-5564ec7bed1b","type":"ResetTool"},{"attributes":{"below":[{"id":"bcb6b850-e871-44b4-be26-e2c1af7a2a89","type":"LinearAxis"}],"left":[{"id":"16a1e1d2-e1dd-4fa9-b988-db5c7c638fa6","type":"LinearAxis"}],"renderers":[{"id":"bcb6b850-e871-44b4-be26-e2c1af7a2a89","type":"LinearAxis"},{"id":"d0a4ca37-3e3b-4b87-8dac-8155dbe2f775","type":"Grid"},{"id":"16a1e1d2-e1dd-4fa9-b988-db5c7c638fa6","type":"LinearAxis"},{"id":"2f123ce9-a6b6-423b-8e36-c47bb3556b74","type":"Grid"},{"id":"7a8015dd-f7a6-40eb-9d31-6a81efe06e70","type":"BoxAnnotation"},{"id":"182c45d8-f8d0-4abc-a450-7a3616687f0e","type":"GlyphRenderer"}],"title":{"id":"a1ce959f-491f-4e45-8328-54a1e67463f3","type":"Title"},"toolbar":{"id":"9d2863aa-8479-485c-9a4c-f940029b3b2b","type":"Toolbar"},"x_range":{"id":"fbaabdc5-c690-447c-986a-d990c873726a","type":"DataRange1d"},"x_scale":{"id":"948b9764-8aa2-4019-b29f-3afef5e11aa1","type":"LinearScale"},"y_range":{"id":"68da5bec-8b39-41a3-ad43-95d687a30958","type":"DataRange1d"},"y_scale":{"id":"5fbc9b5d-043d-4cc4-8a50-e7f403284a59","type":"LinearScale"}},"id":"034e1c81-eb90-47d9-914b-18fc8203834c","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7a8015dd-f7a6-40eb-9d31-6a81efe06e70","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"7a8015dd-f7a6-40eb-9d31-6a81efe06e70","type":"BoxAnnotation"}},"id":"680ea63e-3a3e-49cf-9db1-690fed5be077","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b2d2b86e-ab3a-4c89-90e3-2535627e6e06","type":"Circle"},{"attributes":{},"id":"5fbc9b5d-043d-4cc4-8a50-e7f403284a59","type":"LinearScale"},{"attributes":{},"id":"18d49ed3-7071-4b1c-b956-082de6c8ad75","type":"BasicTicker"},{"attributes":{"plot":{"id":"034e1c81-eb90-47d9-914b-18fc8203834c","subtype":"Figure","type":"Plot"},"ticker":{"id":"7665864b-4b36-4f29-87ec-dcfad9e8ae7a","type":"BasicTicker"}},"id":"d0a4ca37-3e3b-4b87-8dac-8155dbe2f775","type":"Grid"},{"attributes":{"plot":null,"text":"Iris Morphology"},"id":"a1ce959f-491f-4e45-8328-54a1e67463f3","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0a04f3c5-30c7-4075-9682-8f8e3f6b63a9","type":"Circle"},{"attributes":{"axis_label":"Petal Width","formatter":{"id":"d33208ae-1df7-48ac-8b81-8c199e6c1a71","type":"BasicTickFormatter"},"plot":{"id":"034e1c81-eb90-47d9-914b-18fc8203834c","subtype":"Figure","type":"Plot"},"ticker":{"id":"18d49ed3-7071-4b1c-b956-082de6c8ad75","type":"BasicTicker"}},"id":"16a1e1d2-e1dd-4fa9-b988-db5c7c638fa6","type":"LinearAxis"},{"attributes":{},"id":"92f97496-e803-429b-8a72-4555035c9980","type":"BasicTickFormatter"},{"attributes":{},"id":"0edc426b-de68-4b4d-a705-c3c9bf4f5b3a","type":"PanTool"},{"attributes":{"axis_label":"Petal Length","formatter":{"id":"92f97496-e803-429b-8a72-4555035c9980","type":"BasicTickFormatter"},"plot":{"id":"034e1c81-eb90-47d9-914b-18fc8203834c","subtype":"Figure","type":"Plot"},"ticker":{"id":"7665864b-4b36-4f29-87ec-dcfad9e8ae7a","type":"BasicTicker"}},"id":"bcb6b850-e871-44b4-be26-e2c1af7a2a89","type":"LinearAxis"},{"attributes":{},"id":"d33208ae-1df7-48ac-8b81-8c199e6c1a71","type":"BasicTickFormatter"},{"attributes":{},"id":"7665864b-4b36-4f29-87ec-dcfad9e8ae7a","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"line_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"x":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2P83MzMzMzBJAAAAAAAAAEkCamZmZmZkTQAAAAAAAABBAZmZmZmZmEkAAAAAAAAASQM3MzMzMzBJAZmZmZmZmCkBmZmZmZmYSQDMzMzMzMw9AAAAAAAAADEDNzMzMzMwQQAAAAAAAABBAzczMzMzMEkDNzMzMzMwMQJqZmZmZmRFAAAAAAAAAEkBmZmZmZmYQQAAAAAAAABJAMzMzMzMzD0AzMzMzMzMTQAAAAAAAABBAmpmZmZmZE0DNzMzMzMwSQDMzMzMzMxFAmpmZmZmZEUAzMzMzMzMTQAAAAAAAABRAAAAAAAAAEkAAAAAAAAAMQGZmZmZmZg5AmpmZmZmZDUAzMzMzMzMPQGZmZmZmZhRAAAAAAAAAEkAAAAAAAAASQM3MzMzMzBJAmpmZmZmZEUBmZmZmZmYQQAAAAAAAABBAmpmZmZmZEUBmZmZmZmYSQAAAAAAAABBAZmZmZmZmCkDNzMzMzMwQQM3MzMzMzBBAzczMzMzMEEAzMzMzMzMRQAAAAAAAAAhAZmZmZmZmEEAAAAAAAAAYQGZmZmZmZhRAmpmZmZmZF0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGkAAAAAAAAASQDMzMzMzMxlAMzMzMzMzF0BmZmZmZmYYQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQAAAAAAAABRAZmZmZmZmFEAzMzMzMzMVQAAAAAAAABZAzczMzMzMGkCamZmZmZkbQAAAAAAAABRAzczMzMzMFkCamZmZmZkTQM3MzMzMzBpAmpmZmZmZE0DNzMzMzMwWQAAAAAAAABhAMzMzMzMzE0CamZmZmZkTQGZmZmZmZhZAMzMzMzMzF0BmZmZmZmYYQJqZmZmZmRlAZmZmZmZmFkBmZmZmZmYUQGZmZmZmZhZAZmZmZmZmGEBmZmZmZmYWQAAAAAAAABZAMzMzMzMzE0CamZmZmZkVQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYUQJqZmZmZmRdAzczMzMzMFkDNzMzMzMwUQAAAAAAAABRAzczMzMzMFECamZmZmZkVQGZmZmZmZhRA","dtype":"float64","shape":[150]},"y":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZm5P5qZmZmZmck/mpmZmZmZ2T+amZmZmZnZPzMzMzMzM9M/MzMzMzMz0z8zMzMzMzPTP5qZmZmZmck/mpmZmZmZ2T+amZmZmZnJPwAAAAAAAOA/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnZP5qZmZmZmbk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZm5P5qZmZmZmck/mpmZmZmZyT8zMzMzMzPTPzMzMzMzM9M/mpmZmZmZyT8zMzMzMzPjP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P5qZmZmZmfk/AAAAAAAA8D/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAPA/ZmZmZmZm9j/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAADwPwAAAAAAAPg/mpmZmZmZ8T/NzMzMzMz8P83MzMzMzPQ/AAAAAAAA+D8zMzMzMzPzP83MzMzMzPQ/ZmZmZmZm9j9mZmZmZmb2PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwP5qZmZmZmfE/AAAAAAAA8D8zMzMzMzPzP5qZmZmZmfk/AAAAAAAA+D+amZmZmZn5PwAAAAAAAPg/zczMzMzM9D/NzMzMzMz0P83MzMzMzPQ/MzMzMzMz8z9mZmZmZmb2PzMzMzMzM/M/AAAAAAAA8D/NzMzMzMz0PzMzMzMzM/M/zczMzMzM9D/NzMzMzMz0P5qZmZmZmfE/zczMzMzM9D8AAAAAAAAEQGZmZmZmZv4/zczMzMzMAEDNzMzMzMz8P5qZmZmZmQFAzczMzMzMAEAzMzMzMzP7P83MzMzMzPw/zczMzMzM/D8AAAAAAAAEQAAAAAAAAABAZmZmZmZm/j/NzMzMzMwAQAAAAAAAAABAMzMzMzMzA0BmZmZmZmYCQM3MzMzMzPw/mpmZmZmZAUBmZmZmZmYCQAAAAAAAAPg/ZmZmZmZmAkAAAAAAAAAAQAAAAAAAAABAzczMzMzM/D/NzMzMzMwAQM3MzMzMzPw/zczMzMzM/D/NzMzMzMz8P83MzMzMzABAmpmZmZmZ+T9mZmZmZmb+PwAAAAAAAABAmpmZmZmZAUAAAAAAAAD4P2ZmZmZmZvY/ZmZmZmZmAkAzMzMzMzMDQM3MzMzMzPw/zczMzMzM/D/NzMzMzMwAQDMzMzMzMwNAZmZmZmZmAkBmZmZmZmb+P2ZmZmZmZgJAAAAAAAAABEBmZmZmZmYCQGZmZmZmZv4/AAAAAAAAAEBmZmZmZmYCQM3MzMzMzPw/","dtype":"float64","shape":[150]}}},"id":"47d0506d-719f-4f48-91e7-0f84646b2049","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0edc426b-de68-4b4d-a705-c3c9bf4f5b3a","type":"PanTool"},{"id":"daf77af3-f236-4087-9ee6-28cfccc42f02","type":"WheelZoomTool"},{"id":"680ea63e-3a3e-49cf-9db1-690fed5be077","type":"BoxZoomTool"},{"id":"1662a214-724a-46a2-8e21-16a93b51f515","type":"SaveTool"},{"id":"7fa1ee7f-11e7-42e2-9fb3-5564ec7bed1b","type":"ResetTool"},{"id":"2aead2ec-0981-4269-8e5f-fe3262836650","type":"HelpTool"}]},"id":"9d2863aa-8479-485c-9a4c-f940029b3b2b","type":"Toolbar"}],"root_ids":["034e1c81-eb90-47d9-914b-18fc8203834c"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"87cd06b5-1a09-403e-9c56-5afabb549c34","elementid":"7418998d-e9b0-4061-97a9-f6b4e68a811c","modelid":"034e1c81-eb90-47d9-914b-18fc8203834c"}];
                
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
