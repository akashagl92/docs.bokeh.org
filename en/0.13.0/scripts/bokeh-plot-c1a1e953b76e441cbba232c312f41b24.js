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
      };var element = document.getElementById("41a689de-71c3-44ac-bcb8-f3bba58f979b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '41a689de-71c3-44ac-bcb8-f3bba58f979b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"287df2bb-9011-4578-8f15-b13699f1ffb8":{"roots":{"references":[{"attributes":{},"id":"2d35d541-8b1c-441f-85dd-e05b32adcb00","type":"Selection"},{"attributes":{"below":[{"id":"31faac6d-a9c3-4a98-b04c-9fbd2af25f57","type":"LinearAxis"}],"left":[{"id":"5bb47918-f4f8-4f0c-929d-3229ef457ad0","type":"LinearAxis"}],"renderers":[{"id":"31faac6d-a9c3-4a98-b04c-9fbd2af25f57","type":"LinearAxis"},{"id":"dad158f5-1cfa-4d0e-906f-43d3b094d1db","type":"Grid"},{"id":"5bb47918-f4f8-4f0c-929d-3229ef457ad0","type":"LinearAxis"},{"id":"00cefff1-a8ff-4c85-b399-9a548b892712","type":"Grid"},{"id":"2c9b6c4e-255d-41c3-9034-0fac03228752","type":"BoxAnnotation"},{"id":"5a2f6682-a08d-4e47-8204-1867e0983c5c","type":"GlyphRenderer"}],"title":{"id":"a3df4a59-0a94-4968-a3da-5a75dd3b7172","type":"Title"},"toolbar":{"id":"e5cc2572-589a-427c-b182-d1dde78f8103","type":"Toolbar"},"x_range":{"id":"ddd9e200-da7f-4cf2-ba49-2f4d00a23f3f","type":"DataRange1d"},"x_scale":{"id":"76c36635-a2e1-4f61-a6d0-f1ee6ec21125","type":"LinearScale"},"y_range":{"id":"6893396e-25c2-42bd-9256-5a44fff4df9d","type":"DataRange1d"},"y_scale":{"id":"5977b8b5-f8ca-45ba-b492-c129a7348b77","type":"LinearScale"}},"id":"b8fef1e2-02d2-4b1a-99f2-c2ecd369760f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1177a841-628e-4b34-80d0-19a445501f3f","type":"ResetTool"},{"attributes":{},"id":"b7c3dd72-b63f-47cc-8613-609e055778dc","type":"HelpTool"},{"attributes":{"data_source":{"id":"99f15e81-05bc-4704-9fe3-8e602f478360","type":"ColumnDataSource"},"glyph":{"id":"6755449b-d1e6-4c6c-83e2-b7fcf03c91c3","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c0c0c2d0-d1c0-4101-9e7a-d5b4f3716621","type":"Circle"},"selection_glyph":null,"view":{"id":"69525a5c-6785-40d4-9c44-e672ad551478","type":"CDSView"}},"id":"5a2f6682-a08d-4e47-8204-1867e0983c5c","type":"GlyphRenderer"},{"attributes":{},"id":"c6316cb8-9f64-4546-b2f6-b5bca1873ddf","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"6893396e-25c2-42bd-9256-5a44fff4df9d","type":"DataRange1d"},{"attributes":{},"id":"18310479-c22c-4904-9544-73fc36513cc7","type":"BasicTickFormatter"},{"attributes":{},"id":"ed1e6252-56a6-4ddd-8dee-53e108daec04","type":"SaveTool"},{"attributes":{"callback":null},"id":"ddd9e200-da7f-4cf2-ba49-2f4d00a23f3f","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c0c0c2d0-d1c0-4101-9e7a-d5b4f3716621","type":"Circle"},{"attributes":{"axis_label":"Petal Length","formatter":{"id":"18310479-c22c-4904-9544-73fc36513cc7","type":"BasicTickFormatter"},"plot":{"id":"b8fef1e2-02d2-4b1a-99f2-c2ecd369760f","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8f98b37-34df-4ad7-86b2-bd15e441989e","type":"BasicTicker"}},"id":"31faac6d-a9c3-4a98-b04c-9fbd2af25f57","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"9eb1a0cc-03c0-4d24-bdf9-5feada94f6e9","type":"PanTool"},{"id":"ba3a63d6-b2e5-4902-b51f-93705f097af7","type":"WheelZoomTool"},{"id":"816f4113-ae31-44c6-8e5e-d97927cde214","type":"BoxZoomTool"},{"id":"ed1e6252-56a6-4ddd-8dee-53e108daec04","type":"SaveTool"},{"id":"1177a841-628e-4b34-80d0-19a445501f3f","type":"ResetTool"},{"id":"b7c3dd72-b63f-47cc-8613-609e055778dc","type":"HelpTool"}]},"id":"e5cc2572-589a-427c-b182-d1dde78f8103","type":"Toolbar"},{"attributes":{},"id":"76c36635-a2e1-4f61-a6d0-f1ee6ec21125","type":"LinearScale"},{"attributes":{"overlay":{"id":"2c9b6c4e-255d-41c3-9034-0fac03228752","type":"BoxAnnotation"}},"id":"816f4113-ae31-44c6-8e5e-d97927cde214","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2c9b6c4e-255d-41c3-9034-0fac03228752","type":"BoxAnnotation"},{"attributes":{},"id":"9eb1a0cc-03c0-4d24-bdf9-5feada94f6e9","type":"PanTool"},{"attributes":{},"id":"1606932a-d9cd-41e6-b9a8-e2857ad4436d","type":"BasicTicker"},{"attributes":{"source":{"id":"99f15e81-05bc-4704-9fe3-8e602f478360","type":"ColumnDataSource"}},"id":"69525a5c-6785-40d4-9c44-e672ad551478","type":"CDSView"},{"attributes":{"plot":null,"text":"Iris Morphology"},"id":"a3df4a59-0a94-4968-a3da-5a75dd3b7172","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"b8fef1e2-02d2-4b1a-99f2-c2ecd369760f","subtype":"Figure","type":"Plot"},"ticker":{"id":"1606932a-d9cd-41e6-b9a8-e2857ad4436d","type":"BasicTicker"}},"id":"00cefff1-a8ff-4c85-b399-9a548b892712","type":"Grid"},{"attributes":{},"id":"5977b8b5-f8ca-45ba-b492-c129a7348b77","type":"LinearScale"},{"attributes":{"plot":{"id":"b8fef1e2-02d2-4b1a-99f2-c2ecd369760f","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8f98b37-34df-4ad7-86b2-bd15e441989e","type":"BasicTicker"}},"id":"dad158f5-1cfa-4d0e-906f-43d3b094d1db","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6755449b-d1e6-4c6c-83e2-b7fcf03c91c3","type":"Circle"},{"attributes":{"axis_label":"Petal Width","formatter":{"id":"c6316cb8-9f64-4546-b2f6-b5bca1873ddf","type":"BasicTickFormatter"},"plot":{"id":"b8fef1e2-02d2-4b1a-99f2-c2ecd369760f","subtype":"Figure","type":"Plot"},"ticker":{"id":"1606932a-d9cd-41e6-b9a8-e2857ad4436d","type":"BasicTicker"}},"id":"5bb47918-f4f8-4f0c-929d-3229ef457ad0","type":"LinearAxis"},{"attributes":{},"id":"ba3a63d6-b2e5-4902-b51f-93705f097af7","type":"WheelZoomTool"},{"attributes":{},"id":"d8f98b37-34df-4ad7-86b2-bd15e441989e","type":"BasicTicker"},{"attributes":{},"id":"12732232-8ea3-4959-9060-3fcc3a3e0b65","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"fill_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"line_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"x":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2P83MzMzMzBJAAAAAAAAAEkCamZmZmZkTQAAAAAAAABBAZmZmZmZmEkAAAAAAAAASQM3MzMzMzBJAZmZmZmZmCkBmZmZmZmYSQDMzMzMzMw9AAAAAAAAADEDNzMzMzMwQQAAAAAAAABBAzczMzMzMEkDNzMzMzMwMQJqZmZmZmRFAAAAAAAAAEkBmZmZmZmYQQAAAAAAAABJAMzMzMzMzD0AzMzMzMzMTQAAAAAAAABBAmpmZmZmZE0DNzMzMzMwSQDMzMzMzMxFAmpmZmZmZEUAzMzMzMzMTQAAAAAAAABRAAAAAAAAAEkAAAAAAAAAMQGZmZmZmZg5AmpmZmZmZDUAzMzMzMzMPQGZmZmZmZhRAAAAAAAAAEkAAAAAAAAASQM3MzMzMzBJAmpmZmZmZEUBmZmZmZmYQQAAAAAAAABBAmpmZmZmZEUBmZmZmZmYSQAAAAAAAABBAZmZmZmZmCkDNzMzMzMwQQM3MzMzMzBBAzczMzMzMEEAzMzMzMzMRQAAAAAAAAAhAZmZmZmZmEEAAAAAAAAAYQGZmZmZmZhRAmpmZmZmZF0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGkAAAAAAAAASQDMzMzMzMxlAMzMzMzMzF0BmZmZmZmYYQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQAAAAAAAABRAZmZmZmZmFEAzMzMzMzMVQAAAAAAAABZAzczMzMzMGkCamZmZmZkbQAAAAAAAABRAzczMzMzMFkCamZmZmZkTQM3MzMzMzBpAmpmZmZmZE0DNzMzMzMwWQAAAAAAAABhAMzMzMzMzE0CamZmZmZkTQGZmZmZmZhZAMzMzMzMzF0BmZmZmZmYYQJqZmZmZmRlAZmZmZmZmFkBmZmZmZmYUQGZmZmZmZhZAZmZmZmZmGEBmZmZmZmYWQAAAAAAAABZAMzMzMzMzE0CamZmZmZkVQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYUQJqZmZmZmRdAzczMzMzMFkDNzMzMzMwUQAAAAAAAABRAzczMzMzMFECamZmZmZkVQGZmZmZmZhRA","dtype":"float64","shape":[150]},"y":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZm5P5qZmZmZmck/mpmZmZmZ2T+amZmZmZnZPzMzMzMzM9M/MzMzMzMz0z8zMzMzMzPTP5qZmZmZmck/mpmZmZmZ2T+amZmZmZnJPwAAAAAAAOA/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnZP5qZmZmZmbk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZm5P5qZmZmZmck/mpmZmZmZyT8zMzMzMzPTPzMzMzMzM9M/mpmZmZmZyT8zMzMzMzPjP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P5qZmZmZmfk/AAAAAAAA8D/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAPA/ZmZmZmZm9j/NzMzMzMz0P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAADwPwAAAAAAAPg/mpmZmZmZ8T/NzMzMzMz8P83MzMzMzPQ/AAAAAAAA+D8zMzMzMzPzP83MzMzMzPQ/ZmZmZmZm9j9mZmZmZmb2PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwP5qZmZmZmfE/AAAAAAAA8D8zMzMzMzPzP5qZmZmZmfk/AAAAAAAA+D+amZmZmZn5PwAAAAAAAPg/zczMzMzM9D/NzMzMzMz0P83MzMzMzPQ/MzMzMzMz8z9mZmZmZmb2PzMzMzMzM/M/AAAAAAAA8D/NzMzMzMz0PzMzMzMzM/M/zczMzMzM9D/NzMzMzMz0P5qZmZmZmfE/zczMzMzM9D8AAAAAAAAEQGZmZmZmZv4/zczMzMzMAEDNzMzMzMz8P5qZmZmZmQFAzczMzMzMAEAzMzMzMzP7P83MzMzMzPw/zczMzMzM/D8AAAAAAAAEQAAAAAAAAABAZmZmZmZm/j/NzMzMzMwAQAAAAAAAAABAMzMzMzMzA0BmZmZmZmYCQM3MzMzMzPw/mpmZmZmZAUBmZmZmZmYCQAAAAAAAAPg/ZmZmZmZmAkAAAAAAAAAAQAAAAAAAAABAzczMzMzM/D/NzMzMzMwAQM3MzMzMzPw/zczMzMzM/D/NzMzMzMz8P83MzMzMzABAmpmZmZmZ+T9mZmZmZmb+PwAAAAAAAABAmpmZmZmZAUAAAAAAAAD4P2ZmZmZmZvY/ZmZmZmZmAkAzMzMzMzMDQM3MzMzMzPw/zczMzMzM/D/NzMzMzMwAQDMzMzMzMwNAZmZmZmZmAkBmZmZmZmb+P2ZmZmZmZgJAAAAAAAAABEBmZmZmZmYCQGZmZmZmZv4/AAAAAAAAAEBmZmZmZmYCQM3MzMzMzPw/","dtype":"float64","shape":[150]}},"selected":{"id":"2d35d541-8b1c-441f-85dd-e05b32adcb00","type":"Selection"},"selection_policy":{"id":"12732232-8ea3-4959-9060-3fcc3a3e0b65","type":"UnionRenderers"}},"id":"99f15e81-05bc-4704-9fe3-8e602f478360","type":"ColumnDataSource"}],"root_ids":["b8fef1e2-02d2-4b1a-99f2-c2ecd369760f"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"287df2bb-9011-4578-8f15-b13699f1ffb8","roots":{"b8fef1e2-02d2-4b1a-99f2-c2ecd369760f":"41a689de-71c3-44ac-bcb8-f3bba58f979b"}}];
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