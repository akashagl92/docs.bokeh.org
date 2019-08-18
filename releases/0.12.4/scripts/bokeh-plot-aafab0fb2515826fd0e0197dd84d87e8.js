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
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
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
      };var element = document.getElementById("0fd5b030-cabe-492b-ad69-f98c1edb1ce1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0fd5b030-cabe-492b-ad69-f98c1edb1ce1' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"a5b35360-ab6e-4bac-9956-897aef3c0ccf":{"roots":{"references":[{"attributes":{},"id":"d354394a-7741-417a-a483-1aaf6f9a2c3d","type":"BasicTickFormatter"},{"attributes":{},"id":"8ce00b93-c0d3-4f87-beb3-f83f6a797666","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"eaf4781e-6acc-4d90-91d1-55cdcc164a73","type":"BoxAnnotation"},"plot":{"id":"1012b035-1c15-4676-85e2-cf91fa235462","subtype":"Figure","type":"Plot"}},"id":"a80187bf-62ec-4a5b-bf81-3b4119a5de34","type":"BoxZoomTool"},{"attributes":{},"id":"9f56ba7d-7354-4a87-827d-fdbae8d5ce7a","type":"BasicTicker"},{"attributes":{"plot":{"id":"1012b035-1c15-4676-85e2-cf91fa235462","subtype":"Figure","type":"Plot"}},"id":"2001ffd6-fea1-4790-ac5c-23c660e48846","type":"ResetTool"},{"attributes":{"plot":{"id":"1012b035-1c15-4676-85e2-cf91fa235462","subtype":"Figure","type":"Plot"}},"id":"c666d7ac-3e43-4e76-917e-23d8f3cf601e","type":"PanTool"},{"attributes":{},"id":"66e5e325-3017-487e-9a4d-fddea97c7422","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"1012b035-1c15-4676-85e2-cf91fa235462","subtype":"Figure","type":"Plot"},"ticker":{"id":"66e5e325-3017-487e-9a4d-fddea97c7422","type":"BasicTicker"}},"id":"0e18dca7-c6d8-45bf-b22f-65909827a844","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c666d7ac-3e43-4e76-917e-23d8f3cf601e","type":"PanTool"},{"id":"8dd86b5d-d0d3-4660-922a-00eac36d152b","type":"WheelZoomTool"},{"id":"a80187bf-62ec-4a5b-bf81-3b4119a5de34","type":"BoxZoomTool"},{"id":"7e6f6320-c2b0-467c-a947-e720c10890b6","type":"SaveTool"},{"id":"2001ffd6-fea1-4790-ac5c-23c660e48846","type":"ResetTool"},{"id":"6f5cadb5-ab86-41fe-9091-c37228bb1bcc","type":"HelpTool"}]},"id":"91c83222-ede4-49df-ac80-9f92bbd1af8a","type":"Toolbar"},{"attributes":{"callback":null},"id":"8ede53ef-8107-43bf-b2c9-a8aa82f8de01","type":"DataRange1d"},{"attributes":{"data_source":{"id":"2f86b771-3d99-40f5-ab27-987ff1faaf9f","type":"ColumnDataSource"},"glyph":{"id":"a594151b-e38e-4d45-bc82-295e93a5f48e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"317feb5b-26a5-433c-9046-de37870fdead","type":"Circle"},"selection_glyph":null},"id":"ecca6629-15c0-40c6-9e50-e2c6aa7a8597","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"eaf4781e-6acc-4d90-91d1-55cdcc164a73","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"1d8c6e1c-e4b1-4fc2-8853-14dffcab9895","type":"DataRange1d"},{"attributes":{"below":[{"id":"23d27d74-6795-4123-969a-07dd6e086971","type":"LinearAxis"}],"left":[{"id":"ba139d03-b556-4441-8cd2-6466fc5013c7","type":"LinearAxis"}],"renderers":[{"id":"23d27d74-6795-4123-969a-07dd6e086971","type":"LinearAxis"},{"id":"2e9914ad-020b-4060-bc04-d66f785a33bd","type":"Grid"},{"id":"ba139d03-b556-4441-8cd2-6466fc5013c7","type":"LinearAxis"},{"id":"0e18dca7-c6d8-45bf-b22f-65909827a844","type":"Grid"},{"id":"eaf4781e-6acc-4d90-91d1-55cdcc164a73","type":"BoxAnnotation"},{"id":"ecca6629-15c0-40c6-9e50-e2c6aa7a8597","type":"GlyphRenderer"}],"title":{"id":"9199af03-e572-4bf5-b768-460a6883c25d","type":"Title"},"tool_events":{"id":"b52c87c2-3cee-406b-92c8-ae7a51f273b7","type":"ToolEvents"},"toolbar":{"id":"91c83222-ede4-49df-ac80-9f92bbd1af8a","type":"Toolbar"},"x_range":{"id":"8ede53ef-8107-43bf-b2c9-a8aa82f8de01","type":"DataRange1d"},"y_range":{"id":"1d8c6e1c-e4b1-4fc2-8853-14dffcab9895","type":"DataRange1d"}},"id":"1012b035-1c15-4676-85e2-cf91fa235462","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Petal Length","formatter":{"id":"d354394a-7741-417a-a483-1aaf6f9a2c3d","type":"BasicTickFormatter"},"plot":{"id":"1012b035-1c15-4676-85e2-cf91fa235462","subtype":"Figure","type":"Plot"},"ticker":{"id":"9f56ba7d-7354-4a87-827d-fdbae8d5ce7a","type":"BasicTicker"}},"id":"23d27d74-6795-4123-969a-07dd6e086971","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y","line_color","fill_color"],"data":{"fill_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"line_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"x":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2P83MzMzMzBJAAAAAAAAAEkCamZmZmZkTQAAAAAAAABBAZmZmZmZmEkAAAAAAAAASQM3MzMzMzBJAZmZmZmZmCkBmZmZmZmYSQDMzMzMzMw9AAAAAAAAADEDNzMzMzMwQQAAAAAAAABBAzczMzMzMEkDNzMzMzMwMQJqZmZmZmRFAAAAAAAAAEkBmZmZmZmYQQAAAAAAAABJAMzMzMzMzD0AzMzMzMzMTQAAAAAAAABBAmpmZmZmZE0DNzMzMzMwSQDMzMzMzMxFAmpmZmZmZEUAzMzMzMzMTQAAAAAAAABRAAAAAAAAAEkAAAAAAAAAMQGZmZmZmZg5AmpmZmZmZDUAzMzMzMzMPQGZmZmZmZhRAAAAAAAAAEkAAAAAAAAASQM3MzMzMzBJAmpmZmZmZEUBmZmZmZmYQQAAAAAAAABBAmpmZmZmZEUBmZmZmZmYSQAAAAAAAABBAZmZmZmZmCkDNzMzMzMwQQM3MzMzMzBBAzczMzMzMEEAzMzMzMzMRQAAAAAAAAAhAZmZmZmZmEEAAAAAAAAAYQGZmZmZmZhRAmpmZmZmZF0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGkAAAAAAAAASQDMzMzMzMxlAMzMzMzMzF0BmZmZmZmYYQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQAAAAAAAABRAZmZmZmZmFEAzMzMzMzMVQAAAAAAAABZAzczMzMzMGkCamZmZmZkbQAAAAAAAABRAzczMzMzMFkCamZmZmZkTQM3MzMzMzBpAmpmZmZmZE0DNzMzMzMwWQAAAAAAAABhAMzMzMzMzE0CamZmZmZkTQGZmZmZmZhZAMzMzMzMzF0BmZmZmZmYYQJqZmZmZmRlAZmZmZmZmFkBmZmZmZmYUQGZmZmZmZhZAZmZmZmZmGEBmZmZmZmYWQAAAAAAAABZAMzMzMzMzE0CamZmZmZkVQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYUQJqZmZmZmRdAzczMzMzMFkDNzMzMzMwUQAAAAAAAABRAzczMzMzMFECamZmZmZkVQGZmZmZmZhRA","dtype":"float64","shape":[150]},"y":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZm5P5qZmZmZmck/mpmZmZmZ2T+amZmZmZnZPzMzMzMzM9M/MzMzMzMz0z8zMzMzMzPTP5qZmZmZmck/mpmZmZmZ2T+amZmZmZnJPwAAAAAAAOA/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnZP5qZmZmZmbk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZm5P5qZmZmZmck/mpmZmZmZyT8zMzMzMzPTPzMzMzMzM9M/mpmZmZmZyT8zMzMzMzPjP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P5qZmZmZmfk/AAAAAAAA8D/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAPA/ZmZmZmZm9j/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAADwPwAAAAAAAPg/mpmZmZmZ8T/NzMzMzMz8P83MzMzMzPQ/AAAAAAAA+D8zMzMzMzPzP83MzMzMzPQ/ZmZmZmZm9j9mZmZmZmb2PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwP5qZmZmZmfE/AAAAAAAA8D8zMzMzMzPzP5qZmZmZmfk/AAAAAAAA+D+amZmZmZn5PwAAAAAAAPg/zczMzMzM9D/NzMzMzMz0P83MzMzMzPQ/MzMzMzMz8z9mZmZmZmb2PzMzMzMzM/M/AAAAAAAA8D/NzMzMzMz0PzMzMzMzM/M/zczMzMzM9D/NzMzMzMz0P5qZmZmZmfE/zczMzMzM9D8AAAAAAAAEQGZmZmZmZv4/zczMzMzMAEDNzMzMzMz8P5qZmZmZmQFAzczMzMzMAEAzMzMzMzP7P83MzMzMzPw/zczMzMzM/D8AAAAAAAAEQAAAAAAAAABAZmZmZmZm/j/NzMzMzMwAQAAAAAAAAABAMzMzMzMzA0BmZmZmZmYCQM3MzMzMzPw/mpmZmZmZAUBmZmZmZmYCQAAAAAAAAPg/ZmZmZmZmAkAAAAAAAAAAQAAAAAAAAABAzczMzMzM/D/NzMzMzMwAQM3MzMzMzPw/zczMzMzM/D/NzMzMzMz8P83MzMzMzABAmpmZmZmZ+T9mZmZmZmb+PwAAAAAAAABAmpmZmZmZAUAAAAAAAAD4P2ZmZmZmZvY/ZmZmZmZmAkAzMzMzMzMDQM3MzMzMzPw/zczMzMzM/D/NzMzMzMwAQDMzMzMzMwNAZmZmZmZmAkBmZmZmZmb+P2ZmZmZmZgJAAAAAAAAABEBmZmZmZmYCQGZmZmZmZv4/AAAAAAAAAEBmZmZmZmYCQM3MzMzMzPw/","dtype":"float64","shape":[150]}}},"id":"2f86b771-3d99-40f5-ab27-987ff1faaf9f","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"1012b035-1c15-4676-85e2-cf91fa235462","subtype":"Figure","type":"Plot"}},"id":"6f5cadb5-ab86-41fe-9091-c37228bb1bcc","type":"HelpTool"},{"attributes":{"axis_label":"Petal Width","formatter":{"id":"8ce00b93-c0d3-4f87-beb3-f83f6a797666","type":"BasicTickFormatter"},"plot":{"id":"1012b035-1c15-4676-85e2-cf91fa235462","subtype":"Figure","type":"Plot"},"ticker":{"id":"66e5e325-3017-487e-9a4d-fddea97c7422","type":"BasicTicker"}},"id":"ba139d03-b556-4441-8cd2-6466fc5013c7","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a594151b-e38e-4d45-bc82-295e93a5f48e","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"317feb5b-26a5-433c-9046-de37870fdead","type":"Circle"},{"attributes":{"plot":{"id":"1012b035-1c15-4676-85e2-cf91fa235462","subtype":"Figure","type":"Plot"},"ticker":{"id":"9f56ba7d-7354-4a87-827d-fdbae8d5ce7a","type":"BasicTicker"}},"id":"2e9914ad-020b-4060-bc04-d66f785a33bd","type":"Grid"},{"attributes":{"plot":null,"text":"Iris Morphology"},"id":"9199af03-e572-4bf5-b768-460a6883c25d","type":"Title"},{"attributes":{},"id":"b52c87c2-3cee-406b-92c8-ae7a51f273b7","type":"ToolEvents"},{"attributes":{"plot":{"id":"1012b035-1c15-4676-85e2-cf91fa235462","subtype":"Figure","type":"Plot"}},"id":"7e6f6320-c2b0-467c-a947-e720c10890b6","type":"SaveTool"},{"attributes":{"plot":{"id":"1012b035-1c15-4676-85e2-cf91fa235462","subtype":"Figure","type":"Plot"}},"id":"8dd86b5d-d0d3-4660-922a-00eac36d152b","type":"WheelZoomTool"}],"root_ids":["1012b035-1c15-4676-85e2-cf91fa235462"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"a5b35360-ab6e-4bac-9956-897aef3c0ccf","elementid":"0fd5b030-cabe-492b-ad69-f98c1edb1ce1","modelid":"1012b035-1c15-4676-85e2-cf91fa235462"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
