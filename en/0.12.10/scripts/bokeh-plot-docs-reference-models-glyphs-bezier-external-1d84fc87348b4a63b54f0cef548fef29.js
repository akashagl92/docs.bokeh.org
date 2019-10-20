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
      };var element = document.getElementById("655e01e3-fbcb-4473-9472-d47ba9ac1c66");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '655e01e3-fbcb-4473-9472-d47ba9ac1c66' but no matching script tag was found. ")
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
                    var docs_json = {"65c7aa1c-9323-4618-ba29-fef8e09ebff8":{"roots":{"references":[{"attributes":{},"id":"405713f3-082d-45ee-b993-3c34127d1e28","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"405713f3-082d-45ee-b993-3c34127d1e28","type":"BasicTickFormatter"},"plot":{"id":"35fcea1d-ce7c-4629-a853-7fd41083ea20","type":"Plot"},"ticker":{"id":"f0df65a6-eee7-4855-b7cf-66d809699fa2","type":"BasicTicker"}},"id":"e0225ad4-341f-4184-8b4b-06de8430652d","type":"LinearAxis"},{"attributes":{"below":[{"id":"87f6008a-d3a3-4399-bc38-bd7a8160cfcf","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"e0225ad4-341f-4184-8b4b-06de8430652d","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"ea2e4b42-ae1f-46bd-9070-6e872edb18a5","type":"GlyphRenderer"},{"id":"87f6008a-d3a3-4399-bc38-bd7a8160cfcf","type":"LinearAxis"},{"id":"e0225ad4-341f-4184-8b4b-06de8430652d","type":"LinearAxis"},{"id":"5622700f-4839-435d-8c92-c9f78690e696","type":"Grid"},{"id":"83d64a72-d430-4556-abcd-cd90e748bf8d","type":"Grid"}],"title":null,"toolbar":{"id":"ee5c3e3b-6990-4f77-9689-9b40883ba5a0","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"234a038e-be43-4fe5-8548-46f71173d61c","type":"DataRange1d"},"x_scale":{"id":"dfe3a94e-7405-4e3f-ac77-bc6452482b18","type":"LinearScale"},"y_range":{"id":"b40120c5-cd65-47f9-9886-233756202ba5","type":"DataRange1d"},"y_scale":{"id":"5e5fc750-72fe-4349-a9e1-c3491fd60d79","type":"LinearScale"}},"id":"35fcea1d-ce7c-4629-a853-7fd41083ea20","type":"Plot"},{"attributes":{},"id":"5e5fc750-72fe-4349-a9e1-c3491fd60d79","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y","xp02","xp01","xm01","yp01","ym01"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xm01":{"__ndarray__":"zczMzMzMAMCamZmZmZn5v5qZmZmZmfG/MzMzMzMz47+amZmZmZm5v5qZmZmZmdk/zczMzMzM7D9mZmZmZmb2P2ZmZmZmZv4/","dtype":"float64","shape":[9]},"xp01":{"__ndarray__":"ZmZmZmZm/r9mZmZmZmb2v83MzMzMzOy/mpmZmZmZ2b+amZmZmZm5PzMzMzMzM+M/mpmZmZmZ8T+amZmZmZn5P83MzMzMzABA","dtype":"float64","shape":[9]},"xp02":{"__ndarray__":"mpmZmZmZ+b+amZmZmZnxvzMzMzMzM+O/mJmZmZmZub+amZmZmZnZP83MzMzMzOw/ZmZmZmZm9j9mZmZmZmb+PzMzMzMzMwNA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"ym01":{"__ndarray__":"ZmZmZmZmDkBmZmZmZmYAQJqZmZmZmek/mJmZmZmZqT+amZmZmZnJv5iZmZmZmak/mpmZmZmZ6T9mZmZmZmYAQGZmZmZmZg5A","dtype":"float64","shape":[9]},"yp01":{"__ndarray__":"zczMzMzMEECamZmZmZkDQDMzMzMzM/M/zczMzMzM3D+amZmZmZnJP83MzMzMzNw/MzMzMzMz8z+amZmZmZkDQM3MzMzMzBBA","dtype":"float64","shape":[9]}}},"id":"63a3a62d-41b4-44a0-bf25-f96f2f0ba7b4","type":"ColumnDataSource"},{"attributes":{},"id":"9f8be277-efdd-42b1-874a-c08ca5c12db7","type":"BasicTicker"},{"attributes":{"plot":{"id":"35fcea1d-ce7c-4629-a853-7fd41083ea20","type":"Plot"},"ticker":{"id":"9f8be277-efdd-42b1-874a-c08ca5c12db7","type":"BasicTicker"}},"id":"5622700f-4839-435d-8c92-c9f78690e696","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ee5c3e3b-6990-4f77-9689-9b40883ba5a0","type":"Toolbar"},{"attributes":{},"id":"aa8790df-1721-4a0d-a50a-dd57cce9e72c","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"234a038e-be43-4fe5-8548-46f71173d61c","type":"DataRange1d"},{"attributes":{},"id":"dfe3a94e-7405-4e3f-ac77-bc6452482b18","type":"LinearScale"},{"attributes":{"data_source":{"id":"63a3a62d-41b4-44a0-bf25-f96f2f0ba7b4","type":"ColumnDataSource"},"glyph":{"id":"7497ac20-e896-4e07-8483-91a831e00909","type":"Bezier"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"18542fa4-4272-42ff-aadf-9d680abeca35","type":"CDSView"}},"id":"ea2e4b42-ae1f-46bd-9070-6e872edb18a5","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"35fcea1d-ce7c-4629-a853-7fd41083ea20","type":"Plot"},"ticker":{"id":"f0df65a6-eee7-4855-b7cf-66d809699fa2","type":"BasicTicker"}},"id":"83d64a72-d430-4556-abcd-cd90e748bf8d","type":"Grid"},{"attributes":{"callback":null},"id":"b40120c5-cd65-47f9-9886-233756202ba5","type":"DataRange1d"},{"attributes":{"formatter":{"id":"aa8790df-1721-4a0d-a50a-dd57cce9e72c","type":"BasicTickFormatter"},"plot":{"id":"35fcea1d-ce7c-4629-a853-7fd41083ea20","type":"Plot"},"ticker":{"id":"9f8be277-efdd-42b1-874a-c08ca5c12db7","type":"BasicTicker"}},"id":"87f6008a-d3a3-4399-bc38-bd7a8160cfcf","type":"LinearAxis"},{"attributes":{"source":{"id":"63a3a62d-41b4-44a0-bf25-f96f2f0ba7b4","type":"ColumnDataSource"}},"id":"18542fa4-4272-42ff-aadf-9d680abeca35","type":"CDSView"},{"attributes":{},"id":"f0df65a6-eee7-4855-b7cf-66d809699fa2","type":"BasicTicker"},{"attributes":{"cx0":{"field":"xp01"},"cx1":{"field":"xm01"},"cy0":{"field":"yp01"},"cy1":{"field":"ym01"},"line_color":{"value":"#D95F02"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"7497ac20-e896-4e07-8483-91a831e00909","type":"Bezier"}],"root_ids":["35fcea1d-ce7c-4629-a853-7fd41083ea20"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"65c7aa1c-9323-4618-ba29-fef8e09ebff8","elementid":"655e01e3-fbcb-4473-9472-d47ba9ac1c66","modelid":"35fcea1d-ce7c-4629-a853-7fd41083ea20"}];
                
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
