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
      };var element = document.getElementById("ac335d59-dca4-4ce9-80a8-3a183c3e65e8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ac335d59-dca4-4ce9-80a8-3a183c3e65e8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9020cdee-9557-43d0-83fe-1c0c53dd2440":{"roots":{"references":[{"attributes":{},"id":"0a86c0e6-c225-42a6-9d1a-1b08f36bd3bb","type":"LinearScale"},{"attributes":{"callback":null},"id":"fd94eb75-de07-4e98-8dee-aff38f168a05","type":"DataRange1d"},{"attributes":{"plot":{"id":"e5d449da-0379-4b47-91c4-b82bce5395bb","type":"Plot"},"ticker":{"id":"42c75b2f-9a23-499e-a929-5123401855ba","type":"BasicTicker"}},"id":"934c10ac-0160-4fa4-91aa-1cb59974f286","type":"Grid"},{"attributes":{},"id":"0dab9a02-72b7-4b2c-bedf-5e2d8d477dfc","type":"BasicTickFormatter"},{"attributes":{},"id":"e08d3f3b-c559-4285-9e5b-31f6c64a2df2","type":"UnionRenderers"},{"attributes":{},"id":"9c0cbd98-9d52-4e50-8b51-79eb923bc73f","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"e5d449da-0379-4b47-91c4-b82bce5395bb","type":"Plot"},"ticker":{"id":"f8358256-dd7a-4fa7-8f75-2d63097bcf97","type":"BasicTicker"}},"id":"ef95047b-f2e9-4751-b089-81c64c4876e4","type":"Grid"},{"attributes":{},"id":"0745e43a-df18-4f6e-b3e3-c12ead67f875","type":"LinearScale"},{"attributes":{"source":{"id":"874bf2b3-af5c-4082-aced-cdea2876b811","type":"ColumnDataSource"}},"id":"8770f0ab-1111-4e37-a84b-8e7e7a0e9663","type":"CDSView"},{"attributes":{"below":[{"id":"7dac8123-7653-40fb-ac8e-34770e2d9c47","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"61bf1531-74e0-4b8b-98bb-2a14d26dbcb3","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"bd20bdd4-5687-4e09-936b-f2d17ac36643","type":"GlyphRenderer"},{"id":"7dac8123-7653-40fb-ac8e-34770e2d9c47","type":"LinearAxis"},{"id":"61bf1531-74e0-4b8b-98bb-2a14d26dbcb3","type":"LinearAxis"},{"id":"934c10ac-0160-4fa4-91aa-1cb59974f286","type":"Grid"},{"id":"ef95047b-f2e9-4751-b089-81c64c4876e4","type":"Grid"}],"title":null,"toolbar":{"id":"d3361921-38e0-4853-8292-e63127a2d4eb","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"07fbb2b0-9cc4-4752-857e-54b3b5f8f9f9","type":"DataRange1d"},"x_scale":{"id":"0a86c0e6-c225-42a6-9d1a-1b08f36bd3bb","type":"LinearScale"},"y_range":{"id":"fd94eb75-de07-4e98-8dee-aff38f168a05","type":"DataRange1d"},"y_scale":{"id":"0745e43a-df18-4f6e-b3e3-c12ead67f875","type":"LinearScale"}},"id":"e5d449da-0379-4b47-91c4-b82bce5395bb","type":"Plot"},{"attributes":{},"id":"f8358256-dd7a-4fa7-8f75-2d63097bcf97","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#74add1"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6a19cb63-5e46-4567-b3d1-d24c11c3130b","type":"Square"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"9c0cbd98-9d52-4e50-8b51-79eb923bc73f","type":"Selection"},"selection_policy":{"id":"e08d3f3b-c559-4285-9e5b-31f6c64a2df2","type":"UnionRenderers"}},"id":"874bf2b3-af5c-4082-aced-cdea2876b811","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"07fbb2b0-9cc4-4752-857e-54b3b5f8f9f9","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"d3361921-38e0-4853-8292-e63127a2d4eb","type":"Toolbar"},{"attributes":{"formatter":{"id":"9d8a5b09-4b59-4e30-862b-a495bbe11793","type":"BasicTickFormatter"},"plot":{"id":"e5d449da-0379-4b47-91c4-b82bce5395bb","type":"Plot"},"ticker":{"id":"f8358256-dd7a-4fa7-8f75-2d63097bcf97","type":"BasicTicker"}},"id":"61bf1531-74e0-4b8b-98bb-2a14d26dbcb3","type":"LinearAxis"},{"attributes":{},"id":"42c75b2f-9a23-499e-a929-5123401855ba","type":"BasicTicker"},{"attributes":{"formatter":{"id":"0dab9a02-72b7-4b2c-bedf-5e2d8d477dfc","type":"BasicTickFormatter"},"plot":{"id":"e5d449da-0379-4b47-91c4-b82bce5395bb","type":"Plot"},"ticker":{"id":"42c75b2f-9a23-499e-a929-5123401855ba","type":"BasicTicker"}},"id":"7dac8123-7653-40fb-ac8e-34770e2d9c47","type":"LinearAxis"},{"attributes":{},"id":"9d8a5b09-4b59-4e30-862b-a495bbe11793","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"874bf2b3-af5c-4082-aced-cdea2876b811","type":"ColumnDataSource"},"glyph":{"id":"6a19cb63-5e46-4567-b3d1-d24c11c3130b","type":"Square"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"8770f0ab-1111-4e37-a84b-8e7e7a0e9663","type":"CDSView"}},"id":"bd20bdd4-5687-4e09-936b-f2d17ac36643","type":"GlyphRenderer"}],"root_ids":["e5d449da-0379-4b47-91c4-b82bce5395bb"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"9020cdee-9557-43d0-83fe-1c0c53dd2440","roots":{"e5d449da-0379-4b47-91c4-b82bce5395bb":"ac335d59-dca4-4ce9-80a8-3a183c3e65e8"}}];
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