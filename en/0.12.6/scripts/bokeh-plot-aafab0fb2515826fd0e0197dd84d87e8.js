(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("4d00ee22-a568-40b5-a79f-db793054e65e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4d00ee22-a568-40b5-a79f-db793054e65e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"e2fcf564-6abf-4654-9cf2-49582af740ae":{"roots":{"references":[{"attributes":{"axis_label":"Petal Width","formatter":{"id":"9735236e-513a-4bc9-87fa-2b6dbc835099","type":"BasicTickFormatter"},"plot":{"id":"286386a8-de9f-4884-b49b-b07b1551f02b","subtype":"Figure","type":"Plot"},"ticker":{"id":"4cc11540-7a35-4447-afef-e87545660fe8","type":"BasicTicker"}},"id":"d1bf9f8d-978b-42d2-9b6f-44877f39fa22","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"43386da1-2c7e-4953-8538-194ee50a5f5f","type":"PanTool"},{"id":"e4806829-95ef-4b4a-a23a-1cf23f778dfd","type":"WheelZoomTool"},{"id":"ae675a79-fe61-4bad-b548-b824af025356","type":"BoxZoomTool"},{"id":"797bf3ca-abb0-4bbb-bed6-78915adef30a","type":"SaveTool"},{"id":"05388445-d683-40d0-b043-74c706a73d30","type":"ResetTool"},{"id":"b0d2fcac-8727-404e-a9f1-b0ac847e4d9e","type":"HelpTool"}]},"id":"08039d44-c7d7-4464-96ee-f3e7cc2841be","type":"Toolbar"},{"attributes":{"plot":{"id":"286386a8-de9f-4884-b49b-b07b1551f02b","subtype":"Figure","type":"Plot"}},"id":"43386da1-2c7e-4953-8538-194ee50a5f5f","type":"PanTool"},{"attributes":{"data_source":{"id":"39cb1184-49bd-4023-b21e-5c023ffecff2","type":"ColumnDataSource"},"glyph":{"id":"3719f645-351c-45de-8e33-edb4213e827e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e3c3a980-67e7-42bc-9dcb-eac55b8750ca","type":"Circle"},"selection_glyph":null},"id":"4e386893-b01a-4d81-b824-cbe456c94a29","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","fill_color","line_color"],"data":{"fill_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"line_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"x":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2P83MzMzMzBJAAAAAAAAAEkCamZmZmZkTQAAAAAAAABBAZmZmZmZmEkAAAAAAAAASQM3MzMzMzBJAZmZmZmZmCkBmZmZmZmYSQDMzMzMzMw9AAAAAAAAADEDNzMzMzMwQQAAAAAAAABBAzczMzMzMEkDNzMzMzMwMQJqZmZmZmRFAAAAAAAAAEkBmZmZmZmYQQAAAAAAAABJAMzMzMzMzD0AzMzMzMzMTQAAAAAAAABBAmpmZmZmZE0DNzMzMzMwSQDMzMzMzMxFAmpmZmZmZEUAzMzMzMzMTQAAAAAAAABRAAAAAAAAAEkAAAAAAAAAMQGZmZmZmZg5AmpmZmZmZDUAzMzMzMzMPQGZmZmZmZhRAAAAAAAAAEkAAAAAAAAASQM3MzMzMzBJAmpmZmZmZEUBmZmZmZmYQQAAAAAAAABBAmpmZmZmZEUBmZmZmZmYSQAAAAAAAABBAZmZmZmZmCkDNzMzMzMwQQM3MzMzMzBBAzczMzMzMEEAzMzMzMzMRQAAAAAAAAAhAZmZmZmZmEEAAAAAAAAAYQGZmZmZmZhRAmpmZmZmZF0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGkAAAAAAAAASQDMzMzMzMxlAMzMzMzMzF0BmZmZmZmYYQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQAAAAAAAABRAZmZmZmZmFEAzMzMzMzMVQAAAAAAAABZAzczMzMzMGkCamZmZmZkbQAAAAAAAABRAzczMzMzMFkCamZmZmZkTQM3MzMzMzBpAmpmZmZmZE0DNzMzMzMwWQAAAAAAAABhAMzMzMzMzE0CamZmZmZkTQGZmZmZmZhZAMzMzMzMzF0BmZmZmZmYYQJqZmZmZmRlAZmZmZmZmFkBmZmZmZmYUQGZmZmZmZhZAZmZmZmZmGEBmZmZmZmYWQAAAAAAAABZAMzMzMzMzE0CamZmZmZkVQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYUQJqZmZmZmRdAzczMzMzMFkDNzMzMzMwUQAAAAAAAABRAzczMzMzMFECamZmZmZkVQGZmZmZmZhRA","dtype":"float64","shape":[150]},"y":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZm5P5qZmZmZmck/mpmZmZmZ2T+amZmZmZnZPzMzMzMzM9M/MzMzMzMz0z8zMzMzMzPTP5qZmZmZmck/mpmZmZmZ2T+amZmZmZnJPwAAAAAAAOA/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnZP5qZmZmZmbk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZm5P5qZmZmZmck/mpmZmZmZyT8zMzMzMzPTPzMzMzMzM9M/mpmZmZmZyT8zMzMzMzPjP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P5qZmZmZmfk/AAAAAAAA8D/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAPA/ZmZmZmZm9j/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAADwPwAAAAAAAPg/mpmZmZmZ8T/NzMzMzMz8P83MzMzMzPQ/AAAAAAAA+D8zMzMzMzPzP83MzMzMzPQ/ZmZmZmZm9j9mZmZmZmb2PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwP5qZmZmZmfE/AAAAAAAA8D8zMzMzMzPzP5qZmZmZmfk/AAAAAAAA+D+amZmZmZn5PwAAAAAAAPg/zczMzMzM9D/NzMzMzMz0P83MzMzMzPQ/MzMzMzMz8z9mZmZmZmb2PzMzMzMzM/M/AAAAAAAA8D/NzMzMzMz0PzMzMzMzM/M/zczMzMzM9D/NzMzMzMz0P5qZmZmZmfE/zczMzMzM9D8AAAAAAAAEQGZmZmZmZv4/zczMzMzMAEDNzMzMzMz8P5qZmZmZmQFAzczMzMzMAEAzMzMzMzP7P83MzMzMzPw/zczMzMzM/D8AAAAAAAAEQAAAAAAAAABAZmZmZmZm/j/NzMzMzMwAQAAAAAAAAABAMzMzMzMzA0BmZmZmZmYCQM3MzMzMzPw/mpmZmZmZAUBmZmZmZmYCQAAAAAAAAPg/ZmZmZmZmAkAAAAAAAAAAQAAAAAAAAABAzczMzMzM/D/NzMzMzMwAQM3MzMzMzPw/zczMzMzM/D/NzMzMzMz8P83MzMzMzABAmpmZmZmZ+T9mZmZmZmb+PwAAAAAAAABAmpmZmZmZAUAAAAAAAAD4P2ZmZmZmZvY/ZmZmZmZmAkAzMzMzMzMDQM3MzMzMzPw/zczMzMzM/D/NzMzMzMwAQDMzMzMzMwNAZmZmZmZmAkBmZmZmZmb+P2ZmZmZmZgJAAAAAAAAABEBmZmZmZmYCQGZmZmZmZv4/AAAAAAAAAEBmZmZmZmYCQM3MzMzMzPw/","dtype":"float64","shape":[150]}}},"id":"39cb1184-49bd-4023-b21e-5c023ffecff2","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"286386a8-de9f-4884-b49b-b07b1551f02b","subtype":"Figure","type":"Plot"},"ticker":{"id":"cca2a563-cfd5-4235-8796-67128b549d46","type":"BasicTicker"}},"id":"32eb0e74-31b8-4aa1-8cc9-8eeabe223b65","type":"Grid"},{"attributes":{"callback":null},"id":"4a52660b-4a30-40d4-9e0a-5bc4d8dd82a2","type":"DataRange1d"},{"attributes":{"plot":{"id":"286386a8-de9f-4884-b49b-b07b1551f02b","subtype":"Figure","type":"Plot"}},"id":"e4806829-95ef-4b4a-a23a-1cf23f778dfd","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":"Iris Morphology"},"id":"d64c77f9-b0bb-4bf3-8fd4-ee50000cd485","type":"Title"},{"attributes":{},"id":"4cc11540-7a35-4447-afef-e87545660fe8","type":"BasicTicker"},{"attributes":{},"id":"a3a50091-2cbe-4cce-b6e0-a749841cb8db","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"286386a8-de9f-4884-b49b-b07b1551f02b","subtype":"Figure","type":"Plot"},"ticker":{"id":"4cc11540-7a35-4447-afef-e87545660fe8","type":"BasicTicker"}},"id":"39345482-5d63-4898-9327-c8dc5feb7c60","type":"Grid"},{"attributes":{"below":[{"id":"edd53e99-acaf-406d-a2c5-5511d4b4ee8d","type":"LinearAxis"}],"left":[{"id":"d1bf9f8d-978b-42d2-9b6f-44877f39fa22","type":"LinearAxis"}],"renderers":[{"id":"edd53e99-acaf-406d-a2c5-5511d4b4ee8d","type":"LinearAxis"},{"id":"32eb0e74-31b8-4aa1-8cc9-8eeabe223b65","type":"Grid"},{"id":"d1bf9f8d-978b-42d2-9b6f-44877f39fa22","type":"LinearAxis"},{"id":"39345482-5d63-4898-9327-c8dc5feb7c60","type":"Grid"},{"id":"74e52848-ea36-4465-95f6-1b0c7deacce6","type":"BoxAnnotation"},{"id":"4e386893-b01a-4d81-b824-cbe456c94a29","type":"GlyphRenderer"}],"title":{"id":"d64c77f9-b0bb-4bf3-8fd4-ee50000cd485","type":"Title"},"tool_events":{"id":"a275cc7b-a682-431c-9945-c375ddf0930a","type":"ToolEvents"},"toolbar":{"id":"08039d44-c7d7-4464-96ee-f3e7cc2841be","type":"Toolbar"},"x_range":{"id":"59e9501e-767b-4709-b0ce-abacd095a876","type":"DataRange1d"},"x_scale":{"id":"a3a50091-2cbe-4cce-b6e0-a749841cb8db","type":"LinearScale"},"y_range":{"id":"4a52660b-4a30-40d4-9e0a-5bc4d8dd82a2","type":"DataRange1d"},"y_scale":{"id":"ce693923-6a6f-45c7-ab78-c11b7bf08174","type":"LinearScale"}},"id":"286386a8-de9f-4884-b49b-b07b1551f02b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a275cc7b-a682-431c-9945-c375ddf0930a","type":"ToolEvents"},{"attributes":{},"id":"9735236e-513a-4bc9-87fa-2b6dbc835099","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"286386a8-de9f-4884-b49b-b07b1551f02b","subtype":"Figure","type":"Plot"}},"id":"05388445-d683-40d0-b043-74c706a73d30","type":"ResetTool"},{"attributes":{"plot":{"id":"286386a8-de9f-4884-b49b-b07b1551f02b","subtype":"Figure","type":"Plot"}},"id":"797bf3ca-abb0-4bbb-bed6-78915adef30a","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3719f645-351c-45de-8e33-edb4213e827e","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74e52848-ea36-4465-95f6-1b0c7deacce6","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"74e52848-ea36-4465-95f6-1b0c7deacce6","type":"BoxAnnotation"},"plot":{"id":"286386a8-de9f-4884-b49b-b07b1551f02b","subtype":"Figure","type":"Plot"}},"id":"ae675a79-fe61-4bad-b548-b824af025356","type":"BoxZoomTool"},{"attributes":{"axis_label":"Petal Length","formatter":{"id":"be85556c-168c-41a1-8b4a-6390bbc99a7f","type":"BasicTickFormatter"},"plot":{"id":"286386a8-de9f-4884-b49b-b07b1551f02b","subtype":"Figure","type":"Plot"},"ticker":{"id":"cca2a563-cfd5-4235-8796-67128b549d46","type":"BasicTicker"}},"id":"edd53e99-acaf-406d-a2c5-5511d4b4ee8d","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e3c3a980-67e7-42bc-9dcb-eac55b8750ca","type":"Circle"},{"attributes":{"callback":null},"id":"59e9501e-767b-4709-b0ce-abacd095a876","type":"DataRange1d"},{"attributes":{"plot":{"id":"286386a8-de9f-4884-b49b-b07b1551f02b","subtype":"Figure","type":"Plot"}},"id":"b0d2fcac-8727-404e-a9f1-b0ac847e4d9e","type":"HelpTool"},{"attributes":{},"id":"cca2a563-cfd5-4235-8796-67128b549d46","type":"BasicTicker"},{"attributes":{},"id":"be85556c-168c-41a1-8b4a-6390bbc99a7f","type":"BasicTickFormatter"},{"attributes":{},"id":"ce693923-6a6f-45c7-ab78-c11b7bf08174","type":"LinearScale"}],"root_ids":["286386a8-de9f-4884-b49b-b07b1551f02b"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"e2fcf564-6abf-4654-9cf2-49582af740ae","elementid":"4d00ee22-a568-40b5-a79f-db793054e65e","modelid":"286386a8-de9f-4884-b49b-b07b1551f02b"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
