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
      };var element = document.getElementById("e0d1e215-2e40-4fa7-a670-1eb9b1e35dd6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e0d1e215-2e40-4fa7-a670-1eb9b1e35dd6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"58b11836-7353-443c-a733-1a9e91c40895":{"roots":{"references":[{"attributes":{},"id":"08bbe4d6-0914-41eb-b871-7f47497a42ea","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"8ce744dc-c6c8-4e2d-9e05-3cb9834ec9b1","type":"Plot"},"ticker":{"id":"2917818d-77a7-44c8-aaa8-c1f53ad75ff0","type":"BasicTicker"}},"id":"de8663ae-c87f-4175-809a-851242e4c997","type":"Grid"},{"attributes":{"line_alpha":0.6,"line_color":"#f46d43","line_width":6,"x":{"field":"x"},"y":{"field":"y"}},"id":"e3abed85-7286-4e59-8129-afd38924e83b","type":"Line"},{"attributes":{"formatter":{"id":"af086d31-6bbb-4a20-aede-05fc4f96fa5b","type":"BasicTickFormatter"},"plot":{"id":"8ce744dc-c6c8-4e2d-9e05-3cb9834ec9b1","type":"Plot"},"ticker":{"id":"0b1b4193-fd68-49f5-9c6e-ef55037bb2ee","type":"BasicTicker"}},"id":"02693b64-1f46-45dd-a1c9-0fe447e7eda7","type":"LinearAxis"},{"attributes":{"callback":null},"id":"2d28af76-2dfc-40b8-9514-0c66fd975583","type":"DataRange1d"},{"attributes":{},"id":"1256d5ae-c7ce-460b-a45f-85d6a03d3242","type":"Selection"},{"attributes":{"plot":{"id":"8ce744dc-c6c8-4e2d-9e05-3cb9834ec9b1","type":"Plot"},"ticker":{"id":"0b1b4193-fd68-49f5-9c6e-ef55037bb2ee","type":"BasicTicker"}},"id":"c6444a6f-7ec8-490b-a18d-05717a6c5023","type":"Grid"},{"attributes":{"callback":null},"id":"1ff074d8-75e9-4f40-aba2-2384092d2259","type":"DataRange1d"},{"attributes":{},"id":"e5b9ca9c-608d-4f87-b688-07afd82beb37","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"4d11d795-27d5-422a-a124-381023c301ef","type":"Toolbar"},{"attributes":{},"id":"89422a82-a720-4095-b897-721ed0682679","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"e5b9ca9c-608d-4f87-b688-07afd82beb37","type":"BasicTickFormatter"},"plot":{"id":"8ce744dc-c6c8-4e2d-9e05-3cb9834ec9b1","type":"Plot"},"ticker":{"id":"2917818d-77a7-44c8-aaa8-c1f53ad75ff0","type":"BasicTicker"}},"id":"1c784a93-9ea9-493d-9740-2b3a4cd0c77b","type":"LinearAxis"},{"attributes":{"data_source":{"id":"a32e084c-91ea-4afa-9207-f1b250cd0684","type":"ColumnDataSource"},"glyph":{"id":"e3abed85-7286-4e59-8129-afd38924e83b","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"02bfcd82-03bc-479a-ae08-8e9d1cd62906","type":"CDSView"}},"id":"51a49dfd-9525-4080-9c23-2b8d04320548","type":"GlyphRenderer"},{"attributes":{},"id":"0b1b4193-fd68-49f5-9c6e-ef55037bb2ee","type":"BasicTicker"},{"attributes":{},"id":"2917818d-77a7-44c8-aaa8-c1f53ad75ff0","type":"BasicTicker"},{"attributes":{"below":[{"id":"02693b64-1f46-45dd-a1c9-0fe447e7eda7","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"1c784a93-9ea9-493d-9740-2b3a4cd0c77b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"51a49dfd-9525-4080-9c23-2b8d04320548","type":"GlyphRenderer"},{"id":"02693b64-1f46-45dd-a1c9-0fe447e7eda7","type":"LinearAxis"},{"id":"1c784a93-9ea9-493d-9740-2b3a4cd0c77b","type":"LinearAxis"},{"id":"c6444a6f-7ec8-490b-a18d-05717a6c5023","type":"Grid"},{"id":"de8663ae-c87f-4175-809a-851242e4c997","type":"Grid"}],"title":null,"toolbar":{"id":"4d11d795-27d5-422a-a124-381023c301ef","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2d28af76-2dfc-40b8-9514-0c66fd975583","type":"DataRange1d"},"x_scale":{"id":"08bbe4d6-0914-41eb-b871-7f47497a42ea","type":"LinearScale"},"y_range":{"id":"1ff074d8-75e9-4f40-aba2-2384092d2259","type":"DataRange1d"},"y_scale":{"id":"5056380c-589d-4bac-9907-ee333c00a6bc","type":"LinearScale"}},"id":"8ce744dc-c6c8-4e2d-9e05-3cb9834ec9b1","type":"Plot"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMCNsNzTCMv9vxphuacRlvu/qBGWexph+b81wnJPIyz3v8JyTyMs9/S/UCMs9zTC8r/d0wjLPY3wv9QIyz2NsOy/7mmE5Z5G6L8Iyz2NsNzjv0hY7mmE5d6/fBphuacR1r9guacRlnvKv6B7GmG5p7G/oHsaYbmnsT9guacRlnvKP3gaYbmnEdY/SFjuaYTl3j8Iyz2NsNzjP/BphOWeRug/1AjLPY2w7D/c0wjLPY3wP1AjLPc0wvI/wnJPIyz39D80wnJPIyz3P6gRlnsaYfk/GmG5pxGW+z+MsNzTCMv9PwAAAAAAAABA","dtype":"float64","shape":[30]},"y":{"__ndarray__":"AAAAAAAAEEBpbwI4CL0LQG77lpD9xwdAE6S9CeAgBEBTaXajr8cAQF+WgrvYePs/VpM8cSz+9T+EyRpoWh/xP9lxOkDFuOk/HsOHMopq4j+xDTtOB6jYPyT07nfG1M0/XC0TuaBwvj8rDBgpseqlP1onhyRIe3M/WieHJEh7cz8rDBgpseqlP1EtE7mgcL4/JPTud8bUzT+xDTtOB6jYPyHDhzKKauI/2XE6QMW46T+CyRpoWh/xP1aTPHEs/vU/X5aCu9h4+z9RaXajr8cAQBOkvQngIARAbvuWkP3HB0BnbwI4CL0LQAAAAAAAABBA","dtype":"float64","shape":[30]}},"selected":{"id":"1256d5ae-c7ce-460b-a45f-85d6a03d3242","type":"Selection"},"selection_policy":{"id":"89422a82-a720-4095-b897-721ed0682679","type":"UnionRenderers"}},"id":"a32e084c-91ea-4afa-9207-f1b250cd0684","type":"ColumnDataSource"},{"attributes":{},"id":"af086d31-6bbb-4a20-aede-05fc4f96fa5b","type":"BasicTickFormatter"},{"attributes":{},"id":"5056380c-589d-4bac-9907-ee333c00a6bc","type":"LinearScale"},{"attributes":{"source":{"id":"a32e084c-91ea-4afa-9207-f1b250cd0684","type":"ColumnDataSource"}},"id":"02bfcd82-03bc-479a-ae08-8e9d1cd62906","type":"CDSView"}],"root_ids":["8ce744dc-c6c8-4e2d-9e05-3cb9834ec9b1"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"58b11836-7353-443c-a733-1a9e91c40895","roots":{"8ce744dc-c6c8-4e2d-9e05-3cb9834ec9b1":"e0d1e215-2e40-4fa7-a670-1eb9b1e35dd6"}}];
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