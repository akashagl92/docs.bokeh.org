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
      };var element = document.getElementById("6707271a-cb27-44ff-873c-4956d975c36f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6707271a-cb27-44ff-873c-4956d975c36f' but no matching script tag was found. ")
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
                    var docs_json = {"5a8f0c1d-a3b8-490d-b482-514d42de44cf":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"cbd4be65-12e8-48f2-913b-94e894a08c1b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"a7652c10-3a0a-42fc-83e8-826ff227a391","type":"Plot"},"ticker":{"id":"1b06acdc-d1f7-4501-b365-11a7a087d23d","type":"BasicTicker"}},"id":"58d040c8-d8d0-4110-9364-3afdf532bf19","type":"Grid"},{"attributes":{"callback":null},"id":"284fb012-0441-4c9e-9e53-1973428574c9","type":"DataRange1d"},{"attributes":{"source":{"id":"cbd4be65-12e8-48f2-913b-94e894a08c1b","type":"ColumnDataSource"}},"id":"0ab58bfb-3a90-4e03-8957-db471bc4b9ea","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"a7652c10-3a0a-42fc-83e8-826ff227a391","type":"Plot"},"ticker":{"id":"275d652b-1d6f-4d45-abb1-f47872224979","type":"BasicTicker"}},"id":"2a30b080-39b1-43a0-b327-b56c7e505775","type":"Grid"},{"attributes":{"formatter":{"id":"176ba97d-4b5a-4ecb-8184-00a710439a28","type":"BasicTickFormatter"},"plot":{"id":"a7652c10-3a0a-42fc-83e8-826ff227a391","type":"Plot"},"ticker":{"id":"1b06acdc-d1f7-4501-b365-11a7a087d23d","type":"BasicTicker"}},"id":"8d2a95c9-884b-455f-8180-ca4678b68c3b","type":"LinearAxis"},{"attributes":{},"id":"1b06acdc-d1f7-4501-b365-11a7a087d23d","type":"BasicTicker"},{"attributes":{"callback":null},"id":"b1861554-1576-4ea0-bdf2-45701925e9cd","type":"DataRange1d"},{"attributes":{},"id":"275d652b-1d6f-4d45-abb1-f47872224979","type":"BasicTicker"},{"attributes":{},"id":"176ba97d-4b5a-4ecb-8184-00a710439a28","type":"BasicTickFormatter"},{"attributes":{},"id":"71c93bf1-f500-40f5-9fd7-8b77a69ab15a","type":"LinearScale"},{"attributes":{"below":[{"id":"8d2a95c9-884b-455f-8180-ca4678b68c3b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"f5a34935-eace-4660-9e52-a334ebfd665e","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"56aee222-fac3-4fd7-90ea-ce687d44ca54","type":"GlyphRenderer"},{"id":"8d2a95c9-884b-455f-8180-ca4678b68c3b","type":"LinearAxis"},{"id":"f5a34935-eace-4660-9e52-a334ebfd665e","type":"LinearAxis"},{"id":"58d040c8-d8d0-4110-9364-3afdf532bf19","type":"Grid"},{"id":"2a30b080-39b1-43a0-b327-b56c7e505775","type":"Grid"}],"title":null,"toolbar":{"id":"5a0ebae3-925b-41ee-8e03-7ce0b11c4730","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b1861554-1576-4ea0-bdf2-45701925e9cd","type":"DataRange1d"},"x_scale":{"id":"399bba20-4b28-44da-a001-407c2eaa00e7","type":"LinearScale"},"y_range":{"id":"284fb012-0441-4c9e-9e53-1973428574c9","type":"DataRange1d"},"y_scale":{"id":"71c93bf1-f500-40f5-9fd7-8b77a69ab15a","type":"LinearScale"}},"id":"a7652c10-3a0a-42fc-83e8-826ff227a391","type":"Plot"},{"attributes":{"data_source":{"id":"cbd4be65-12e8-48f2-913b-94e894a08c1b","type":"ColumnDataSource"},"glyph":{"id":"48ae1dac-a108-4778-817b-8eda19539ed6","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"0ab58bfb-3a90-4e03-8957-db471bc4b9ea","type":"CDSView"}},"id":"56aee222-fac3-4fd7-90ea-ce687d44ca54","type":"GlyphRenderer"},{"attributes":{},"id":"f2d91977-4f31-4f86-b46d-2da915fe7765","type":"BasicTickFormatter"},{"attributes":{},"id":"399bba20-4b28-44da-a001-407c2eaa00e7","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5a0ebae3-925b-41ee-8e03-7ce0b11c4730","type":"Toolbar"},{"attributes":{"formatter":{"id":"f2d91977-4f31-4f86-b46d-2da915fe7765","type":"BasicTickFormatter"},"plot":{"id":"a7652c10-3a0a-42fc-83e8-826ff227a391","type":"Plot"},"ticker":{"id":"275d652b-1d6f-4d45-abb1-f47872224979","type":"BasicTicker"}},"id":"f5a34935-eace-4660-9e52-a334ebfd665e","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#1c9099"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"48ae1dac-a108-4778-817b-8eda19539ed6","type":"Diamond"}],"root_ids":["a7652c10-3a0a-42fc-83e8-826ff227a391"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"5a8f0c1d-a3b8-490d-b482-514d42de44cf","elementid":"6707271a-cb27-44ff-873c-4956d975c36f","modelid":"a7652c10-3a0a-42fc-83e8-826ff227a391"}];
                
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
