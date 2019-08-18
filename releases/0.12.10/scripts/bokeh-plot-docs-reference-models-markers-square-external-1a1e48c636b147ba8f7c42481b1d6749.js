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
      };var element = document.getElementById("75affd55-86cf-4c22-a418-8028ffb32f12");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '75affd55-86cf-4c22-a418-8028ffb32f12' but no matching script tag was found. ")
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
                    var docs_json = {"c506231f-af85-4d4a-b886-94f0a0ccb120":{"roots":{"references":[{"attributes":{"callback":null},"id":"cab46a21-6050-4a2a-916b-d8d9b6753ef7","type":"DataRange1d"},{"attributes":{},"id":"421efe9f-db3c-4044-af11-de91e70b28d7","type":"LinearScale"},{"attributes":{},"id":"0e02d7d2-247c-40ad-a517-537112686363","type":"LinearScale"},{"attributes":{"callback":null},"id":"297f570a-529c-4d93-9c09-366b7d76b70e","type":"DataRange1d"},{"attributes":{"plot":{"id":"d40eb742-1696-4551-8037-420a28be2a2f","type":"Plot"},"ticker":{"id":"d19184b1-f8fd-450c-b5a0-98f6f0b6f2be","type":"BasicTicker"}},"id":"553a6a46-6baa-4681-b594-87a96b6c8f80","type":"Grid"},{"attributes":{"formatter":{"id":"97122eb5-e163-460c-9f15-8c1364006033","type":"BasicTickFormatter"},"plot":{"id":"d40eb742-1696-4551-8037-420a28be2a2f","type":"Plot"},"ticker":{"id":"d19184b1-f8fd-450c-b5a0-98f6f0b6f2be","type":"BasicTicker"}},"id":"bc8455bb-b765-4b80-aecf-fe7a4a05d203","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#74add1"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1645c37c-af00-4c8f-a4b6-16b16d2b9e70","type":"Square"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"4fa95c30-6f04-4f48-9f1b-262ab658531e","type":"ColumnDataSource"},{"attributes":{"source":{"id":"4fa95c30-6f04-4f48-9f1b-262ab658531e","type":"ColumnDataSource"}},"id":"427d15a5-2798-4c98-b589-36a9c4b33a10","type":"CDSView"},{"attributes":{"below":[{"id":"bc8455bb-b765-4b80-aecf-fe7a4a05d203","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"b664a6b0-24a4-4300-829c-4ef2fba27572","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"1da876aa-6e0a-4709-beda-0318fc5d9d43","type":"GlyphRenderer"},{"id":"bc8455bb-b765-4b80-aecf-fe7a4a05d203","type":"LinearAxis"},{"id":"b664a6b0-24a4-4300-829c-4ef2fba27572","type":"LinearAxis"},{"id":"553a6a46-6baa-4681-b594-87a96b6c8f80","type":"Grid"},{"id":"2c27a5ef-2ae2-4bed-afd9-bab22f1b8021","type":"Grid"}],"title":null,"toolbar":{"id":"4f62434d-6892-4007-ba1a-b730619a14b3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"cab46a21-6050-4a2a-916b-d8d9b6753ef7","type":"DataRange1d"},"x_scale":{"id":"0e02d7d2-247c-40ad-a517-537112686363","type":"LinearScale"},"y_range":{"id":"297f570a-529c-4d93-9c09-366b7d76b70e","type":"DataRange1d"},"y_scale":{"id":"421efe9f-db3c-4044-af11-de91e70b28d7","type":"LinearScale"}},"id":"d40eb742-1696-4551-8037-420a28be2a2f","type":"Plot"},{"attributes":{},"id":"97122eb5-e163-460c-9f15-8c1364006033","type":"BasicTickFormatter"},{"attributes":{},"id":"d19184b1-f8fd-450c-b5a0-98f6f0b6f2be","type":"BasicTicker"},{"attributes":{"data_source":{"id":"4fa95c30-6f04-4f48-9f1b-262ab658531e","type":"ColumnDataSource"},"glyph":{"id":"1645c37c-af00-4c8f-a4b6-16b16d2b9e70","type":"Square"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"427d15a5-2798-4c98-b589-36a9c4b33a10","type":"CDSView"}},"id":"1da876aa-6e0a-4709-beda-0318fc5d9d43","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"d314916a-e8a4-46f5-aae4-3719b07c02ea","type":"BasicTickFormatter"},"plot":{"id":"d40eb742-1696-4551-8037-420a28be2a2f","type":"Plot"},"ticker":{"id":"3b6d8447-8f38-4283-8776-f5e138462240","type":"BasicTicker"}},"id":"b664a6b0-24a4-4300-829c-4ef2fba27572","type":"LinearAxis"},{"attributes":{},"id":"d314916a-e8a4-46f5-aae4-3719b07c02ea","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"d40eb742-1696-4551-8037-420a28be2a2f","type":"Plot"},"ticker":{"id":"3b6d8447-8f38-4283-8776-f5e138462240","type":"BasicTicker"}},"id":"2c27a5ef-2ae2-4bed-afd9-bab22f1b8021","type":"Grid"},{"attributes":{},"id":"3b6d8447-8f38-4283-8776-f5e138462240","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4f62434d-6892-4007-ba1a-b730619a14b3","type":"Toolbar"}],"root_ids":["d40eb742-1696-4551-8037-420a28be2a2f"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"c506231f-af85-4d4a-b886-94f0a0ccb120","elementid":"75affd55-86cf-4c22-a418-8028ffb32f12","modelid":"d40eb742-1696-4551-8037-420a28be2a2f"}];
                
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
