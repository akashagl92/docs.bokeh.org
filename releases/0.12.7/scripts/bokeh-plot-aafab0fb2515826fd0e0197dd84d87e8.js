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
      };var element = document.getElementById("f4ed0402-8c74-4ba5-becf-4d02cdfd0629");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f4ed0402-8c74-4ba5-becf-4d02cdfd0629' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"25124f84-f504-437c-b45f-fb2e2299dfd4":{"roots":{"references":[{"attributes":{"axis_label":"Petal Length","formatter":{"id":"a1bb808d-0399-4523-b168-33319b43c7a1","type":"BasicTickFormatter"},"plot":{"id":"50f970d3-20e8-4d3f-a848-00f2a4500782","subtype":"Figure","type":"Plot"},"ticker":{"id":"1d5f098d-17ab-4837-8105-7ea6dbe3f1c1","type":"BasicTicker"}},"id":"501806b6-037e-4bbf-aecf-f5c070b5977f","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Iris Morphology"},"id":"2c843077-959e-4186-84ca-a7de82319523","type":"Title"},{"attributes":{},"id":"a1bb808d-0399-4523-b168-33319b43c7a1","type":"BasicTickFormatter"},{"attributes":{},"id":"7520432f-6594-417a-82df-6da312e3f7a8","type":"BasicTicker"},{"attributes":{},"id":"f3f88518-e2ef-4874-8a8b-82112e368c6e","type":"LinearScale"},{"attributes":{},"id":"1d5f098d-17ab-4837-8105-7ea6dbe3f1c1","type":"BasicTicker"},{"attributes":{"axis_label":"Petal Width","formatter":{"id":"1b9e803f-adcf-4b7f-81c8-ced602fb9cb4","type":"BasicTickFormatter"},"plot":{"id":"50f970d3-20e8-4d3f-a848-00f2a4500782","subtype":"Figure","type":"Plot"},"ticker":{"id":"7520432f-6594-417a-82df-6da312e3f7a8","type":"BasicTicker"}},"id":"0d883570-549c-44eb-9ca2-d28ca20c756a","type":"LinearAxis"},{"attributes":{"callback":null},"id":"9ab4b497-505b-47ca-865d-7ce3a2f3e056","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3506918a-94c2-4079-a95a-7c3ea288156f","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"line_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"x":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2P83MzMzMzBJAAAAAAAAAEkCamZmZmZkTQAAAAAAAABBAZmZmZmZmEkAAAAAAAAASQM3MzMzMzBJAZmZmZmZmCkBmZmZmZmYSQDMzMzMzMw9AAAAAAAAADEDNzMzMzMwQQAAAAAAAABBAzczMzMzMEkDNzMzMzMwMQJqZmZmZmRFAAAAAAAAAEkBmZmZmZmYQQAAAAAAAABJAMzMzMzMzD0AzMzMzMzMTQAAAAAAAABBAmpmZmZmZE0DNzMzMzMwSQDMzMzMzMxFAmpmZmZmZEUAzMzMzMzMTQAAAAAAAABRAAAAAAAAAEkAAAAAAAAAMQGZmZmZmZg5AmpmZmZmZDUAzMzMzMzMPQGZmZmZmZhRAAAAAAAAAEkAAAAAAAAASQM3MzMzMzBJAmpmZmZmZEUBmZmZmZmYQQAAAAAAAABBAmpmZmZmZEUBmZmZmZmYSQAAAAAAAABBAZmZmZmZmCkDNzMzMzMwQQM3MzMzMzBBAzczMzMzMEEAzMzMzMzMRQAAAAAAAAAhAZmZmZmZmEEAAAAAAAAAYQGZmZmZmZhRAmpmZmZmZF0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGkAAAAAAAAASQDMzMzMzMxlAMzMzMzMzF0BmZmZmZmYYQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQAAAAAAAABRAZmZmZmZmFEAzMzMzMzMVQAAAAAAAABZAzczMzMzMGkCamZmZmZkbQAAAAAAAABRAzczMzMzMFkCamZmZmZkTQM3MzMzMzBpAmpmZmZmZE0DNzMzMzMwWQAAAAAAAABhAMzMzMzMzE0CamZmZmZkTQGZmZmZmZhZAMzMzMzMzF0BmZmZmZmYYQJqZmZmZmRlAZmZmZmZmFkBmZmZmZmYUQGZmZmZmZhZAZmZmZmZmGEBmZmZmZmYWQAAAAAAAABZAMzMzMzMzE0CamZmZmZkVQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYUQJqZmZmZmRdAzczMzMzMFkDNzMzMzMwUQAAAAAAAABRAzczMzMzMFECamZmZmZkVQGZmZmZmZhRA","dtype":"float64","shape":[150]},"y":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZm5P5qZmZmZmck/mpmZmZmZ2T+amZmZmZnZPzMzMzMzM9M/MzMzMzMz0z8zMzMzMzPTP5qZmZmZmck/mpmZmZmZ2T+amZmZmZnJPwAAAAAAAOA/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnZP5qZmZmZmbk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZm5P5qZmZmZmck/mpmZmZmZyT8zMzMzMzPTPzMzMzMzM9M/mpmZmZmZyT8zMzMzMzPjP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P5qZmZmZmfk/AAAAAAAA8D/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAPA/ZmZmZmZm9j/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAADwPwAAAAAAAPg/mpmZmZmZ8T/NzMzMzMz8P83MzMzMzPQ/AAAAAAAA+D8zMzMzMzPzP83MzMzMzPQ/ZmZmZmZm9j9mZmZmZmb2PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwP5qZmZmZmfE/AAAAAAAA8D8zMzMzMzPzP5qZmZmZmfk/AAAAAAAA+D+amZmZmZn5PwAAAAAAAPg/zczMzMzM9D/NzMzMzMz0P83MzMzMzPQ/MzMzMzMz8z9mZmZmZmb2PzMzMzMzM/M/AAAAAAAA8D/NzMzMzMz0PzMzMzMzM/M/zczMzMzM9D/NzMzMzMz0P5qZmZmZmfE/zczMzMzM9D8AAAAAAAAEQGZmZmZmZv4/zczMzMzMAEDNzMzMzMz8P5qZmZmZmQFAzczMzMzMAEAzMzMzMzP7P83MzMzMzPw/zczMzMzM/D8AAAAAAAAEQAAAAAAAAABAZmZmZmZm/j/NzMzMzMwAQAAAAAAAAABAMzMzMzMzA0BmZmZmZmYCQM3MzMzMzPw/mpmZmZmZAUBmZmZmZmYCQAAAAAAAAPg/ZmZmZmZmAkAAAAAAAAAAQAAAAAAAAABAzczMzMzM/D/NzMzMzMwAQM3MzMzMzPw/zczMzMzM/D/NzMzMzMz8P83MzMzMzABAmpmZmZmZ+T9mZmZmZmb+PwAAAAAAAABAmpmZmZmZAUAAAAAAAAD4P2ZmZmZmZvY/ZmZmZmZmAkAzMzMzMzMDQM3MzMzMzPw/zczMzMzM/D/NzMzMzMwAQDMzMzMzMwNAZmZmZmZmAkBmZmZmZmb+P2ZmZmZmZgJAAAAAAAAABEBmZmZmZmYCQGZmZmZmZv4/AAAAAAAAAEBmZmZmZmYCQM3MzMzMzPw/","dtype":"float64","shape":[150]}}},"id":"2b7a9bbd-b55a-4ccf-812c-761dae332eed","type":"ColumnDataSource"},{"attributes":{},"id":"19aed3c6-ebea-4998-a7b4-1d7cceff25b2","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"40a0eb20-de69-4da8-ac4f-6a4f7b066188","type":"PanTool"},{"id":"88a8d668-5149-4c71-907c-8ae5cdbd3b47","type":"WheelZoomTool"},{"id":"e788dd07-15f8-41c3-b458-95e971b3d56e","type":"BoxZoomTool"},{"id":"d9d46db6-2640-4b10-8de6-69379c42bc96","type":"SaveTool"},{"id":"73bba184-05fa-424f-b48a-bea513f57d70","type":"ResetTool"},{"id":"19aed3c6-ebea-4998-a7b4-1d7cceff25b2","type":"HelpTool"}]},"id":"b07434ba-a4d0-4d77-906e-1d0f5cd3d3cf","type":"Toolbar"},{"attributes":{},"id":"1b9e803f-adcf-4b7f-81c8-ced602fb9cb4","type":"BasicTickFormatter"},{"attributes":{},"id":"88a8d668-5149-4c71-907c-8ae5cdbd3b47","type":"WheelZoomTool"},{"attributes":{},"id":"73bba184-05fa-424f-b48a-bea513f57d70","type":"ResetTool"},{"attributes":{"overlay":{"id":"9b45fe4d-dbce-47d7-9065-138afd0563aa","type":"BoxAnnotation"}},"id":"e788dd07-15f8-41c3-b458-95e971b3d56e","type":"BoxZoomTool"},{"attributes":{},"id":"d9d46db6-2640-4b10-8de6-69379c42bc96","type":"SaveTool"},{"attributes":{"callback":null},"id":"6f27dbd4-a755-4af4-bec7-50b5bf383924","type":"DataRange1d"},{"attributes":{"source":{"id":"2b7a9bbd-b55a-4ccf-812c-761dae332eed","type":"ColumnDataSource"}},"id":"372bcb92-769b-47ad-aeb9-48fce46e4420","type":"CDSView"},{"attributes":{},"id":"40a0eb20-de69-4da8-ac4f-6a4f7b066188","type":"PanTool"},{"attributes":{"data_source":{"id":"2b7a9bbd-b55a-4ccf-812c-761dae332eed","type":"ColumnDataSource"},"glyph":{"id":"34cb2464-a28c-46b7-a6ff-a33ab5d1cd7c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3506918a-94c2-4079-a95a-7c3ea288156f","type":"Circle"},"selection_glyph":null,"view":{"id":"372bcb92-769b-47ad-aeb9-48fce46e4420","type":"CDSView"}},"id":"cc652611-7b19-4224-9ca3-4af2dff0fbcc","type":"GlyphRenderer"},{"attributes":{},"id":"9aff35e7-225a-4909-a41f-f25c4137ed66","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9b45fe4d-dbce-47d7-9065-138afd0563aa","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"501806b6-037e-4bbf-aecf-f5c070b5977f","type":"LinearAxis"}],"left":[{"id":"0d883570-549c-44eb-9ca2-d28ca20c756a","type":"LinearAxis"}],"renderers":[{"id":"501806b6-037e-4bbf-aecf-f5c070b5977f","type":"LinearAxis"},{"id":"3198e05f-f316-4852-b884-a8019ec6c42b","type":"Grid"},{"id":"0d883570-549c-44eb-9ca2-d28ca20c756a","type":"LinearAxis"},{"id":"663a892e-810c-4ad5-b44b-722ef5ea973f","type":"Grid"},{"id":"9b45fe4d-dbce-47d7-9065-138afd0563aa","type":"BoxAnnotation"},{"id":"cc652611-7b19-4224-9ca3-4af2dff0fbcc","type":"GlyphRenderer"}],"title":{"id":"2c843077-959e-4186-84ca-a7de82319523","type":"Title"},"toolbar":{"id":"b07434ba-a4d0-4d77-906e-1d0f5cd3d3cf","type":"Toolbar"},"x_range":{"id":"9ab4b497-505b-47ca-865d-7ce3a2f3e056","type":"DataRange1d"},"x_scale":{"id":"f3f88518-e2ef-4874-8a8b-82112e368c6e","type":"LinearScale"},"y_range":{"id":"6f27dbd4-a755-4af4-bec7-50b5bf383924","type":"DataRange1d"},"y_scale":{"id":"9aff35e7-225a-4909-a41f-f25c4137ed66","type":"LinearScale"}},"id":"50f970d3-20e8-4d3f-a848-00f2a4500782","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34cb2464-a28c-46b7-a6ff-a33ab5d1cd7c","type":"Circle"},{"attributes":{"plot":{"id":"50f970d3-20e8-4d3f-a848-00f2a4500782","subtype":"Figure","type":"Plot"},"ticker":{"id":"1d5f098d-17ab-4837-8105-7ea6dbe3f1c1","type":"BasicTicker"}},"id":"3198e05f-f316-4852-b884-a8019ec6c42b","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"50f970d3-20e8-4d3f-a848-00f2a4500782","subtype":"Figure","type":"Plot"},"ticker":{"id":"7520432f-6594-417a-82df-6da312e3f7a8","type":"BasicTicker"}},"id":"663a892e-810c-4ad5-b44b-722ef5ea973f","type":"Grid"}],"root_ids":["50f970d3-20e8-4d3f-a848-00f2a4500782"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"25124f84-f504-437c-b45f-fb2e2299dfd4","elementid":"f4ed0402-8c74-4ba5-becf-4d02cdfd0629","modelid":"50f970d3-20e8-4d3f-a848-00f2a4500782"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
