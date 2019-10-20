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
      };var element = document.getElementById("48a8e412-7af7-41a8-a2b4-ce7b0f0dd3f6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '48a8e412-7af7-41a8-a2b4-ce7b0f0dd3f6' but no matching script tag was found. ")
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
                    var docs_json = {"10f64dac-98da-41d0-8fb8-cad4983ecc21":{"roots":{"references":[{"attributes":{"source":{"id":"2677ed56-2506-42b9-9182-7cf5105d09e3","type":"ColumnDataSource"}},"id":"28807d50-f4ca-4c65-af22-f86db9f17b8b","type":"CDSView"},{"attributes":{"plot":{"id":"4ca47eea-af57-42c9-a547-6bb1b6be46ff","type":"Plot"},"ticker":{"id":"76c38473-004f-45cb-b09c-e2d746b2078b","type":"BasicTicker"}},"id":"37f4fef9-7529-4d84-b3f8-b5868a169381","type":"Grid"},{"attributes":{},"id":"ac79a794-4b6c-4ce4-8ed8-c4f8bdd761ad","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"ac79a794-4b6c-4ce4-8ed8-c4f8bdd761ad","type":"BasicTickFormatter"},"plot":{"id":"4ca47eea-af57-42c9-a547-6bb1b6be46ff","type":"Plot"},"ticker":{"id":"6cd5d7f9-b087-415d-9233-651a886fd99c","type":"BasicTicker"}},"id":"4eebf554-68b0-4143-b25c-4c836a0be7d6","type":"LinearAxis"},{"attributes":{},"id":"4744989a-723d-43d2-a3c1-e860c473889c","type":"LinearScale"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fdae6b"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2f8355a0-45be-42f3-98f5-8682b2fd6265","type":"X"},{"attributes":{"callback":null},"id":"1b3a43de-0efb-4800-a964-46c0b69de4a2","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"4ca47eea-af57-42c9-a547-6bb1b6be46ff","type":"Plot"},"ticker":{"id":"6cd5d7f9-b087-415d-9233-651a886fd99c","type":"BasicTicker"}},"id":"d6020027-a0c9-4552-b2f7-ddc0e7c293f2","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"2677ed56-2506-42b9-9182-7cf5105d09e3","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"9bbe4564-3dfc-4926-b830-aed98ab43786","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"4eebf554-68b0-4143-b25c-4c836a0be7d6","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e37e4dbc-daff-41e6-8e59-28ff16c93542","type":"GlyphRenderer"},{"id":"9bbe4564-3dfc-4926-b830-aed98ab43786","type":"LinearAxis"},{"id":"4eebf554-68b0-4143-b25c-4c836a0be7d6","type":"LinearAxis"},{"id":"37f4fef9-7529-4d84-b3f8-b5868a169381","type":"Grid"},{"id":"d6020027-a0c9-4552-b2f7-ddc0e7c293f2","type":"Grid"}],"title":null,"toolbar":{"id":"c8ce8ea2-2912-4a3b-9647-3dbbcf4c0ca7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ef8b463f-be2f-47b1-a885-920085817828","type":"DataRange1d"},"x_scale":{"id":"567a2b17-36cb-4103-8534-246145a2af8d","type":"LinearScale"},"y_range":{"id":"1b3a43de-0efb-4800-a964-46c0b69de4a2","type":"DataRange1d"},"y_scale":{"id":"4744989a-723d-43d2-a3c1-e860c473889c","type":"LinearScale"}},"id":"4ca47eea-af57-42c9-a547-6bb1b6be46ff","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c8ce8ea2-2912-4a3b-9647-3dbbcf4c0ca7","type":"Toolbar"},{"attributes":{},"id":"6cd5d7f9-b087-415d-9233-651a886fd99c","type":"BasicTicker"},{"attributes":{},"id":"a07bc428-4979-4e35-a4ca-2633b51982ae","type":"BasicTickFormatter"},{"attributes":{},"id":"76c38473-004f-45cb-b09c-e2d746b2078b","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2677ed56-2506-42b9-9182-7cf5105d09e3","type":"ColumnDataSource"},"glyph":{"id":"2f8355a0-45be-42f3-98f5-8682b2fd6265","type":"X"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"28807d50-f4ca-4c65-af22-f86db9f17b8b","type":"CDSView"}},"id":"e37e4dbc-daff-41e6-8e59-28ff16c93542","type":"GlyphRenderer"},{"attributes":{},"id":"567a2b17-36cb-4103-8534-246145a2af8d","type":"LinearScale"},{"attributes":{"callback":null},"id":"ef8b463f-be2f-47b1-a885-920085817828","type":"DataRange1d"},{"attributes":{"formatter":{"id":"a07bc428-4979-4e35-a4ca-2633b51982ae","type":"BasicTickFormatter"},"plot":{"id":"4ca47eea-af57-42c9-a547-6bb1b6be46ff","type":"Plot"},"ticker":{"id":"76c38473-004f-45cb-b09c-e2d746b2078b","type":"BasicTicker"}},"id":"9bbe4564-3dfc-4926-b830-aed98ab43786","type":"LinearAxis"}],"root_ids":["4ca47eea-af57-42c9-a547-6bb1b6be46ff"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"10f64dac-98da-41d0-8fb8-cad4983ecc21","elementid":"48a8e412-7af7-41a8-a2b4-ce7b0f0dd3f6","modelid":"4ca47eea-af57-42c9-a547-6bb1b6be46ff"}];
                
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
