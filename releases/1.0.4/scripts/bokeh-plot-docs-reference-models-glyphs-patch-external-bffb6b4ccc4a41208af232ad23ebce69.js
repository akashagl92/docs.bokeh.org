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
      };var element = document.getElementById("61de38d7-06c5-4283-af0a-06bca8ee22e2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '61de38d7-06c5-4283-af0a-06bca8ee22e2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"c81799d4-9bac-48aa-9da0-bcae06968794":{"roots":{"references":[{"attributes":{},"id":"28885","type":"LinearScale"},{"attributes":{"data_source":{"id":"28873","type":"ColumnDataSource"},"glyph":{"id":"28876","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"28878","type":"CDSView"}},"id":"28877","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"28874","type":"Plot"},"ticker":{"id":"28881","type":"BasicTicker"}},"id":"28882","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"28888","type":"Toolbar"},{"attributes":{},"id":"28892","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"28889","type":"DataRange1d"},{"attributes":{},"id":"28890","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"28874","type":"Plot"},"ticker":{"id":"28883","type":"BasicTicker"}},"id":"28884","type":"Grid"},{"attributes":{},"id":"28881","type":"BasicTicker"},{"attributes":{"formatter":{"id":"28892","type":"BasicTickFormatter"},"plot":{"id":"28874","type":"Plot"},"ticker":{"id":"28881","type":"BasicTicker"}},"id":"28879","type":"LinearAxis"},{"attributes":{"formatter":{"id":"28890","type":"BasicTickFormatter"},"plot":{"id":"28874","type":"Plot"},"ticker":{"id":"28883","type":"BasicTicker"}},"id":"28880","type":"LinearAxis"},{"attributes":{"source":{"id":"28873","type":"ColumnDataSource"}},"id":"28878","type":"CDSView"},{"attributes":{"fill_color":"#a6cee3","x":{"field":"x"},"y":{"field":"y"}},"id":"28876","type":"Patch"},{"attributes":{"below":[{"id":"28879","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"28880","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"28877","type":"GlyphRenderer"},{"id":"28879","type":"LinearAxis"},{"id":"28880","type":"LinearAxis"},{"id":"28882","type":"Grid"},{"id":"28884","type":"Grid"}],"title":null,"toolbar":{"id":"28888","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"28886","type":"DataRange1d"},"x_scale":{"id":"28885","type":"LinearScale"},"y_range":{"id":"28889","type":"DataRange1d"},"y_scale":{"id":"28887","type":"LinearScale"}},"id":"28874","type":"Plot"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMCNsNzTCMv9vxphuacRlvu/qBGWexph+b81wnJPIyz3v8JyTyMs9/S/UCMs9zTC8r/d0wjLPY3wv9QIyz2NsOy/7mmE5Z5G6L8Iyz2NsNzjv0hY7mmE5d6/fBphuacR1r9guacRlnvKv6B7GmG5p7G/oHsaYbmnsT9guacRlnvKP3gaYbmnEdY/SFjuaYTl3j8Iyz2NsNzjP/BphOWeRug/1AjLPY2w7D/c0wjLPY3wP1AjLPc0wvI/wnJPIyz39D80wnJPIyz3P6gRlnsaYfk/GmG5pxGW+z+MsNzTCMv9PwAAAAAAAABAAAAAAAAAAECMsNzTCMv9PxphuacRlvs/qBGWexph+T80wnJPIyz3P8JyTyMs9/Q/UCMs9zTC8j/c0wjLPY3wP9QIyz2NsOw/8GmE5Z5G6D8Iyz2NsNzjP0hY7mmE5d4/eBphuacR1j9guacRlnvKP6B7GmG5p7E/oHsaYbmnsb9guacRlnvKv3waYbmnEda/SFjuaYTl3r8Iyz2NsNzjv+5phOWeRui/1AjLPY2w7L/d0wjLPY3wv1AjLPc0wvK/wnJPIyz39L81wnJPIyz3v6gRlnsaYfm/GmG5pxGW+7+NsNzTCMv9vwAAAAAAAADA","dtype":"float64","shape":[60]},"y":{"__ndarray__":"AAAAAAAAEEBpbwI4CL0LQG77lpD9xwdAE6S9CeAgBEBTaXajr8cAQF+WgrvYePs/VpM8cSz+9T+EyRpoWh/xP9lxOkDFuOk/HsOHMopq4j+xDTtOB6jYPyT07nfG1M0/XC0TuaBwvj8rDBgpseqlP1onhyRIe3M/WieHJEh7cz8rDBgpseqlP1EtE7mgcL4/JPTud8bUzT+xDTtOB6jYPyHDhzKKauI/2XE6QMW46T+CyRpoWh/xP1aTPHEs/vU/X5aCu9h4+z9RaXajr8cAQBOkvQngIARAbvuWkP3HB0BnbwI4CL0LQAAAAAAAABBAZmZmZmZmIECkMMUdEx4eQMqiBv9PlhtAQCORcIM1GUACsmRyrfsWQBVPgQTO6BRAdvrmJuX8EkAktJXZ8jcRQEX4GjnuMw9A3qSc3+NFDEASbrCmxqUJQOVTVo6WUwdAVFaOllNPBUBhdVi//ZgDQAuxtAiVMAJAUQmjchkWAUA1fiP9ikkAQGsfbFDTlf8/pnu152o0/z8cESPA3G7/P+Zv2myUIgBA23M1mqfbAEBulCLop+IBQJ3RoVaVNwNAaCuz5W/aBEDSoVaVN8sGQNk0jGXsCQlAe+RTVo6WC0C8sK1nHXEOQM3MzMzMzBBA","dtype":"float64","shape":[60]}},"selected":{"id":"28895","type":"Selection"},"selection_policy":{"id":"28894","type":"UnionRenderers"}},"id":"28873","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"28886","type":"DataRange1d"},{"attributes":{},"id":"28883","type":"BasicTicker"},{"attributes":{},"id":"28895","type":"Selection"},{"attributes":{},"id":"28887","type":"LinearScale"},{"attributes":{},"id":"28894","type":"UnionRenderers"}],"root_ids":["28874"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"c81799d4-9bac-48aa-9da0-bcae06968794","roots":{"28874":"61de38d7-06c5-4283-af0a-06bca8ee22e2"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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