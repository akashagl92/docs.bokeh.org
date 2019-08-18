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
      };var element = document.getElementById("66f7be03-2aaf-4add-ac3e-178dd5194796");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '66f7be03-2aaf-4add-ac3e-178dd5194796' but no matching script tag was found. ")
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
                    var docs_json = {"cd185912-a674-4db6-9a8e-fdf91f7e2e3d":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#F46D43"},"line_width":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68139507-1869-4da3-8693-3ffa5b03c61b","type":"Line"},{"attributes":{"formatter":{"id":"79ecb7a7-4c17-4f19-af18-e865d49b6645","type":"BasicTickFormatter"},"plot":{"id":"0f7b45d8-7c7d-4534-b829-ce4df10c1fde","type":"Plot"},"ticker":{"id":"a4bba479-6da1-474a-bf7c-3b25063bf96a","type":"BasicTicker"}},"id":"e589b0c1-89c3-4fd0-bc79-260537be6cb0","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMCNsNzTCMv9vxphuacRlvu/qBGWexph+b81wnJPIyz3v8JyTyMs9/S/UCMs9zTC8r/d0wjLPY3wv9QIyz2NsOy/7mmE5Z5G6L8Iyz2NsNzjv0hY7mmE5d6/fBphuacR1r9guacRlnvKv6B7GmG5p7G/oHsaYbmnsT9guacRlnvKP3gaYbmnEdY/SFjuaYTl3j8Iyz2NsNzjP/BphOWeRug/1AjLPY2w7D/c0wjLPY3wP1AjLPc0wvI/wnJPIyz39D80wnJPIyz3P6gRlnsaYfk/GmG5pxGW+z+MsNzTCMv9PwAAAAAAAABA","dtype":"float64","shape":[30]},"y":{"__ndarray__":"AAAAAAAAEEBpbwI4CL0LQG77lpD9xwdAE6S9CeAgBEBTaXajr8cAQF+WgrvYePs/VpM8cSz+9T+EyRpoWh/xP9lxOkDFuOk/HsOHMopq4j+xDTtOB6jYPyT07nfG1M0/XC0TuaBwvj8rDBgpseqlP1onhyRIe3M/WieHJEh7cz8rDBgpseqlP1EtE7mgcL4/JPTud8bUzT+xDTtOB6jYPyHDhzKKauI/2XE6QMW46T+CyRpoWh/xP1aTPHEs/vU/X5aCu9h4+z9RaXajr8cAQBOkvQngIARAbvuWkP3HB0BnbwI4CL0LQAAAAAAAABBA","dtype":"float64","shape":[30]}}},"id":"a8aaeedf-8044-4045-a070-5f4dd2864a4d","type":"ColumnDataSource"},{"attributes":{},"id":"96858c23-477b-4408-b20d-13786a1dca30","type":"BasicTicker"},{"attributes":{},"id":"9d7fa1fc-3e5b-46b3-b821-b59d747434f5","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"351d0c0d-1014-45f2-b3d5-98e9d97a547f","type":"Toolbar"},{"attributes":{},"id":"8515bb1c-4356-4544-905b-82e69192d9ac","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"0f7b45d8-7c7d-4534-b829-ce4df10c1fde","type":"Plot"},"ticker":{"id":"a4bba479-6da1-474a-bf7c-3b25063bf96a","type":"BasicTicker"}},"id":"59746116-9214-4d40-ab80-39fdc5c48ad9","type":"Grid"},{"attributes":{"source":{"id":"a8aaeedf-8044-4045-a070-5f4dd2864a4d","type":"ColumnDataSource"}},"id":"ee9ecb75-6fd3-415c-8065-30d3c15a9fd7","type":"CDSView"},{"attributes":{"plot":{"id":"0f7b45d8-7c7d-4534-b829-ce4df10c1fde","type":"Plot"},"ticker":{"id":"96858c23-477b-4408-b20d-13786a1dca30","type":"BasicTicker"}},"id":"fe8a8214-d477-4759-8d27-7ffc8240d5c3","type":"Grid"},{"attributes":{},"id":"79ecb7a7-4c17-4f19-af18-e865d49b6645","type":"BasicTickFormatter"},{"attributes":{},"id":"a4bba479-6da1-474a-bf7c-3b25063bf96a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"0ac3785f-f428-4578-a1e2-333198f54f6b","type":"BasicTickFormatter"},"plot":{"id":"0f7b45d8-7c7d-4534-b829-ce4df10c1fde","type":"Plot"},"ticker":{"id":"96858c23-477b-4408-b20d-13786a1dca30","type":"BasicTicker"}},"id":"587e82b9-43d7-4a1e-b3ff-eb65a10ad554","type":"LinearAxis"},{"attributes":{"callback":null},"id":"058965a6-74bf-4a99-9678-1d35be7443d3","type":"DataRange1d"},{"attributes":{"below":[{"id":"587e82b9-43d7-4a1e-b3ff-eb65a10ad554","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"e589b0c1-89c3-4fd0-bc79-260537be6cb0","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"11aeb049-6528-4eff-93bb-6d324b9f629e","type":"GlyphRenderer"},{"id":"587e82b9-43d7-4a1e-b3ff-eb65a10ad554","type":"LinearAxis"},{"id":"e589b0c1-89c3-4fd0-bc79-260537be6cb0","type":"LinearAxis"},{"id":"fe8a8214-d477-4759-8d27-7ffc8240d5c3","type":"Grid"},{"id":"59746116-9214-4d40-ab80-39fdc5c48ad9","type":"Grid"}],"title":null,"toolbar":{"id":"351d0c0d-1014-45f2-b3d5-98e9d97a547f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7ee1e8a8-67a2-476c-a489-fe29d3cc50ae","type":"DataRange1d"},"x_scale":{"id":"9d7fa1fc-3e5b-46b3-b821-b59d747434f5","type":"LinearScale"},"y_range":{"id":"058965a6-74bf-4a99-9678-1d35be7443d3","type":"DataRange1d"},"y_scale":{"id":"8515bb1c-4356-4544-905b-82e69192d9ac","type":"LinearScale"}},"id":"0f7b45d8-7c7d-4534-b829-ce4df10c1fde","type":"Plot"},{"attributes":{},"id":"0ac3785f-f428-4578-a1e2-333198f54f6b","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"7ee1e8a8-67a2-476c-a489-fe29d3cc50ae","type":"DataRange1d"},{"attributes":{"data_source":{"id":"a8aaeedf-8044-4045-a070-5f4dd2864a4d","type":"ColumnDataSource"},"glyph":{"id":"68139507-1869-4da3-8693-3ffa5b03c61b","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"ee9ecb75-6fd3-415c-8065-30d3c15a9fd7","type":"CDSView"}},"id":"11aeb049-6528-4eff-93bb-6d324b9f629e","type":"GlyphRenderer"}],"root_ids":["0f7b45d8-7c7d-4534-b829-ce4df10c1fde"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"cd185912-a674-4db6-9a8e-fdf91f7e2e3d","elementid":"66f7be03-2aaf-4add-ac3e-178dd5194796","modelid":"0f7b45d8-7c7d-4534-b829-ce4df10c1fde"}];
                
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
