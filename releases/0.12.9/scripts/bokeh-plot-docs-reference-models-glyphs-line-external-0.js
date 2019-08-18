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
      };var element = document.getElementById("dfe7c119-dd2f-471c-90ec-cff002f8b5e5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dfe7c119-dd2f-471c-90ec-cff002f8b5e5' but no matching script tag was found. ")
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
                    var docs_json = {"bf967b15-fb3f-40b8-a98b-6aec7905e51c":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"fef278b2-fbda-4b75-b99c-d3c925c11c1a","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"331514d2-d256-493b-9908-036b33714a05","type":"Plot"},"ticker":{"id":"06ed7d39-d2a7-47d6-8cc2-8f828772db17","type":"BasicTicker"}},"id":"7c3581e9-ad11-4718-9c9c-343db843cf3c","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMCNsNzTCMv9vxphuacRlvu/qBGWexph+b81wnJPIyz3v8JyTyMs9/S/UCMs9zTC8r/d0wjLPY3wv9QIyz2NsOy/7mmE5Z5G6L8Iyz2NsNzjv0hY7mmE5d6/fBphuacR1r9guacRlnvKv6B7GmG5p7G/oHsaYbmnsT9guacRlnvKP3gaYbmnEdY/SFjuaYTl3j8Iyz2NsNzjP/BphOWeRug/1AjLPY2w7D/c0wjLPY3wP1AjLPc0wvI/wnJPIyz39D80wnJPIyz3P6gRlnsaYfk/GmG5pxGW+z+MsNzTCMv9PwAAAAAAAABA","dtype":"float64","shape":[30]},"y":{"__ndarray__":"AAAAAAAAEEBpbwI4CL0LQG77lpD9xwdAE6S9CeAgBEBTaXajr8cAQF+WgrvYePs/VpM8cSz+9T+EyRpoWh/xP9lxOkDFuOk/HsOHMopq4j+xDTtOB6jYPyT07nfG1M0/XC0TuaBwvj8rDBgpseqlP1onhyRIe3M/WieHJEh7cz8rDBgpseqlP1EtE7mgcL4/JPTud8bUzT+xDTtOB6jYPyHDhzKKauI/2XE6QMW46T+CyRpoWh/xP1aTPHEs/vU/X5aCu9h4+z9RaXajr8cAQBOkvQngIARAbvuWkP3HB0BnbwI4CL0LQAAAAAAAABBA","dtype":"float64","shape":[30]}}},"id":"4b18c858-4f67-4ec9-89c0-2d3c5d1b0e6c","type":"ColumnDataSource"},{"attributes":{},"id":"7f173ff9-1658-4b79-b5c5-a44284659fac","type":"BasicTicker"},{"attributes":{},"id":"250834b7-23c3-4ede-a8c8-05397c0d10ad","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"250834b7-23c3-4ede-a8c8-05397c0d10ad","type":"BasicTickFormatter"},"plot":{"id":"331514d2-d256-493b-9908-036b33714a05","type":"Plot"},"ticker":{"id":"7f173ff9-1658-4b79-b5c5-a44284659fac","type":"BasicTicker"}},"id":"84d810fd-3b8a-4cff-8811-9673935cdecb","type":"LinearAxis"},{"attributes":{"below":[{"id":"84d810fd-3b8a-4cff-8811-9673935cdecb","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"68d52b2c-c0ae-40e4-a299-b8064a6b62f5","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"4c2037c5-b339-44be-9f9f-560d0de66ae5","type":"GlyphRenderer"},{"id":"84d810fd-3b8a-4cff-8811-9673935cdecb","type":"LinearAxis"},{"id":"68d52b2c-c0ae-40e4-a299-b8064a6b62f5","type":"LinearAxis"},{"id":"709376ed-d981-4b61-9d6d-d7bdcf5aa524","type":"Grid"},{"id":"7c3581e9-ad11-4718-9c9c-343db843cf3c","type":"Grid"}],"title":null,"toolbar":{"id":"fef278b2-fbda-4b75-b99c-d3c925c11c1a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0d7a887f-c523-4e53-b975-5c2552afc826","type":"DataRange1d"},"x_scale":{"id":"c3db46bd-baff-491e-b3fa-83d343a258c3","type":"LinearScale"},"y_range":{"id":"9b6df728-1198-48c1-a4c5-b10744046517","type":"DataRange1d"},"y_scale":{"id":"63b6c25a-6cfa-41ee-8962-f943d757531a","type":"LinearScale"}},"id":"331514d2-d256-493b-9908-036b33714a05","type":"Plot"},{"attributes":{"source":{"id":"4b18c858-4f67-4ec9-89c0-2d3c5d1b0e6c","type":"ColumnDataSource"}},"id":"f65c007f-0aa8-425b-91b7-1f6231988979","type":"CDSView"},{"attributes":{"plot":{"id":"331514d2-d256-493b-9908-036b33714a05","type":"Plot"},"ticker":{"id":"7f173ff9-1658-4b79-b5c5-a44284659fac","type":"BasicTicker"}},"id":"709376ed-d981-4b61-9d6d-d7bdcf5aa524","type":"Grid"},{"attributes":{},"id":"ea40d6a1-d60a-459b-89b7-5f97c4127d34","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#F46D43"},"line_width":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"5bbb3bab-1d0b-42c7-ba73-6fc8ce0254b9","type":"Line"},{"attributes":{"data_source":{"id":"4b18c858-4f67-4ec9-89c0-2d3c5d1b0e6c","type":"ColumnDataSource"},"glyph":{"id":"5bbb3bab-1d0b-42c7-ba73-6fc8ce0254b9","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"f65c007f-0aa8-425b-91b7-1f6231988979","type":"CDSView"}},"id":"4c2037c5-b339-44be-9f9f-560d0de66ae5","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"ea40d6a1-d60a-459b-89b7-5f97c4127d34","type":"BasicTickFormatter"},"plot":{"id":"331514d2-d256-493b-9908-036b33714a05","type":"Plot"},"ticker":{"id":"06ed7d39-d2a7-47d6-8cc2-8f828772db17","type":"BasicTicker"}},"id":"68d52b2c-c0ae-40e4-a299-b8064a6b62f5","type":"LinearAxis"},{"attributes":{},"id":"c3db46bd-baff-491e-b3fa-83d343a258c3","type":"LinearScale"},{"attributes":{"callback":null},"id":"9b6df728-1198-48c1-a4c5-b10744046517","type":"DataRange1d"},{"attributes":{},"id":"06ed7d39-d2a7-47d6-8cc2-8f828772db17","type":"BasicTicker"},{"attributes":{},"id":"63b6c25a-6cfa-41ee-8962-f943d757531a","type":"LinearScale"},{"attributes":{"callback":null},"id":"0d7a887f-c523-4e53-b975-5c2552afc826","type":"DataRange1d"}],"root_ids":["331514d2-d256-493b-9908-036b33714a05"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"bf967b15-fb3f-40b8-a98b-6aec7905e51c","elementid":"dfe7c119-dd2f-471c-90ec-cff002f8b5e5","modelid":"331514d2-d256-493b-9908-036b33714a05"}];
                
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
