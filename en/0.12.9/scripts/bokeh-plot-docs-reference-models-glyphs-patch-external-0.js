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
      };var element = document.getElementById("06620ff3-3711-4dc4-a9e1-537f60572011");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '06620ff3-3711-4dc4-a9e1-537f60572011' but no matching script tag was found. ")
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
                    var docs_json = {"d3865bc2-e6fb-43ed-a64a-16f64507036e":{"roots":{"references":[{"attributes":{"source":{"id":"0bb14755-5db9-4396-bac5-a05ed561c50e","type":"ColumnDataSource"}},"id":"6e5ada67-2416-48d9-870b-187f9ba1625a","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"b4007e65-ef8b-47bc-bef2-7c015fbf5241","type":"Toolbar"},{"attributes":{"callback":null},"id":"cec99e21-0fe2-42b0-9577-7b15599a62f9","type":"DataRange1d"},{"attributes":{"formatter":{"id":"447aee7a-ce78-4734-8b2b-7d0e13fa9a61","type":"BasicTickFormatter"},"plot":{"id":"3a97b51e-2d80-4b25-ace3-dd5df533bd0e","type":"Plot"},"ticker":{"id":"8a87a3f1-1010-458a-a42f-240234d2d771","type":"BasicTicker"}},"id":"febbce01-7132-4c69-a705-c5a61f907e64","type":"LinearAxis"},{"attributes":{},"id":"447aee7a-ce78-4734-8b2b-7d0e13fa9a61","type":"BasicTickFormatter"},{"attributes":{},"id":"bfae501d-c0f9-4aa1-b709-fdf50499e245","type":"BasicTicker"},{"attributes":{"plot":{"id":"3a97b51e-2d80-4b25-ace3-dd5df533bd0e","type":"Plot"},"ticker":{"id":"8a87a3f1-1010-458a-a42f-240234d2d771","type":"BasicTicker"}},"id":"31a205db-7d25-42ed-9f26-39353c184911","type":"Grid"},{"attributes":{},"id":"65b5ec2e-1216-4560-843e-1d11f71261aa","type":"LinearScale"},{"attributes":{},"id":"8a87a3f1-1010-458a-a42f-240234d2d771","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMCNsNzTCMv9vxphuacRlvu/qBGWexph+b81wnJPIyz3v8JyTyMs9/S/UCMs9zTC8r/d0wjLPY3wv9QIyz2NsOy/7mmE5Z5G6L8Iyz2NsNzjv0hY7mmE5d6/fBphuacR1r9guacRlnvKv6B7GmG5p7G/oHsaYbmnsT9guacRlnvKP3gaYbmnEdY/SFjuaYTl3j8Iyz2NsNzjP/BphOWeRug/1AjLPY2w7D/c0wjLPY3wP1AjLPc0wvI/wnJPIyz39D80wnJPIyz3P6gRlnsaYfk/GmG5pxGW+z+MsNzTCMv9PwAAAAAAAABAAAAAAAAAAECMsNzTCMv9PxphuacRlvs/qBGWexph+T80wnJPIyz3P8JyTyMs9/Q/UCMs9zTC8j/c0wjLPY3wP9QIyz2NsOw/8GmE5Z5G6D8Iyz2NsNzjP0hY7mmE5d4/eBphuacR1j9guacRlnvKP6B7GmG5p7E/oHsaYbmnsb9guacRlnvKv3waYbmnEda/SFjuaYTl3r8Iyz2NsNzjv+5phOWeRui/1AjLPY2w7L/d0wjLPY3wv1AjLPc0wvK/wnJPIyz39L81wnJPIyz3v6gRlnsaYfm/GmG5pxGW+7+NsNzTCMv9vwAAAAAAAADA","dtype":"float64","shape":[60]},"y":{"__ndarray__":"AAAAAAAAEEBpbwI4CL0LQG77lpD9xwdAE6S9CeAgBEBTaXajr8cAQF+WgrvYePs/VpM8cSz+9T+EyRpoWh/xP9lxOkDFuOk/HsOHMopq4j+xDTtOB6jYPyT07nfG1M0/XC0TuaBwvj8rDBgpseqlP1onhyRIe3M/WieHJEh7cz8rDBgpseqlP1EtE7mgcL4/JPTud8bUzT+xDTtOB6jYPyHDhzKKauI/2XE6QMW46T+CyRpoWh/xP1aTPHEs/vU/X5aCu9h4+z9RaXajr8cAQBOkvQngIARAbvuWkP3HB0BnbwI4CL0LQAAAAAAAABBAZmZmZmZmIECkMMUdEx4eQMqiBv9PlhtAQCORcIM1GUACsmRyrfsWQBVPgQTO6BRAdvrmJuX8EkAktJXZ8jcRQEX4GjnuMw9A3qSc3+NFDEASbrCmxqUJQOVTVo6WUwdAVFaOllNPBUBhdVi//ZgDQAuxtAiVMAJAUQmjchkWAUA1fiP9ikkAQGsfbFDTlf8/pnu152o0/z8cESPA3G7/P+Zv2myUIgBA23M1mqfbAEBulCLop+IBQJ3RoVaVNwNAaCuz5W/aBEDSoVaVN8sGQNk0jGXsCQlAe+RTVo6WC0C8sK1nHXEOQM3MzMzMzBBA","dtype":"float64","shape":[60]}}},"id":"0bb14755-5db9-4396-bac5-a05ed561c50e","type":"ColumnDataSource"},{"attributes":{},"id":"c209a870-65c8-4d84-92de-fe3a71c899a8","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"c209a870-65c8-4d84-92de-fe3a71c899a8","type":"BasicTickFormatter"},"plot":{"id":"3a97b51e-2d80-4b25-ace3-dd5df533bd0e","type":"Plot"},"ticker":{"id":"bfae501d-c0f9-4aa1-b709-fdf50499e245","type":"BasicTicker"}},"id":"034d3ae0-974d-4083-b1be-6e7a477ec203","type":"LinearAxis"},{"attributes":{"below":[{"id":"febbce01-7132-4c69-a705-c5a61f907e64","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"034d3ae0-974d-4083-b1be-6e7a477ec203","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"faa3afb8-0eb4-4ca6-96e9-8e813fcf8de7","type":"GlyphRenderer"},{"id":"febbce01-7132-4c69-a705-c5a61f907e64","type":"LinearAxis"},{"id":"034d3ae0-974d-4083-b1be-6e7a477ec203","type":"LinearAxis"},{"id":"31a205db-7d25-42ed-9f26-39353c184911","type":"Grid"},{"id":"ce77bc7f-0cae-4e97-94e8-8c8a109a4d1c","type":"Grid"}],"title":null,"toolbar":{"id":"b4007e65-ef8b-47bc-bef2-7c015fbf5241","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"cba78d23-70bd-455d-8cde-65af807558c4","type":"DataRange1d"},"x_scale":{"id":"65b5ec2e-1216-4560-843e-1d11f71261aa","type":"LinearScale"},"y_range":{"id":"cec99e21-0fe2-42b0-9577-7b15599a62f9","type":"DataRange1d"},"y_scale":{"id":"8ec139e3-5ed9-49f9-9163-4d43c89c734e","type":"LinearScale"}},"id":"3a97b51e-2d80-4b25-ace3-dd5df533bd0e","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"3a97b51e-2d80-4b25-ace3-dd5df533bd0e","type":"Plot"},"ticker":{"id":"bfae501d-c0f9-4aa1-b709-fdf50499e245","type":"BasicTicker"}},"id":"ce77bc7f-0cae-4e97-94e8-8c8a109a4d1c","type":"Grid"},{"attributes":{"callback":null},"id":"cba78d23-70bd-455d-8cde-65af807558c4","type":"DataRange1d"},{"attributes":{},"id":"8ec139e3-5ed9-49f9-9163-4d43c89c734e","type":"LinearScale"},{"attributes":{"data_source":{"id":"0bb14755-5db9-4396-bac5-a05ed561c50e","type":"ColumnDataSource"},"glyph":{"id":"cad4ced8-dfdf-439c-a854-bf7fb13906e5","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"6e5ada67-2416-48d9-870b-187f9ba1625a","type":"CDSView"}},"id":"faa3afb8-0eb4-4ca6-96e9-8e813fcf8de7","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#a6cee3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cad4ced8-dfdf-439c-a854-bf7fb13906e5","type":"Patch"}],"root_ids":["3a97b51e-2d80-4b25-ace3-dd5df533bd0e"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"d3865bc2-e6fb-43ed-a64a-16f64507036e","elementid":"06620ff3-3711-4dc4-a9e1-537f60572011","modelid":"3a97b51e-2d80-4b25-ace3-dd5df533bd0e"}];
                
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
