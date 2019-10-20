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
      };var element = document.getElementById("a38ec774-fc67-4542-ad84-6ac708ec12a2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a38ec774-fc67-4542-ad84-6ac708ec12a2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"62585162-5295-4d6a-92cc-744e9c42d155":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMCNsNzTCMv9vxphuacRlvu/qBGWexph+b81wnJPIyz3v8JyTyMs9/S/UCMs9zTC8r/d0wjLPY3wv9QIyz2NsOy/7mmE5Z5G6L8Iyz2NsNzjv0hY7mmE5d6/fBphuacR1r9guacRlnvKv6B7GmG5p7G/oHsaYbmnsT9guacRlnvKP3gaYbmnEdY/SFjuaYTl3j8Iyz2NsNzjP/BphOWeRug/1AjLPY2w7D/c0wjLPY3wP1AjLPc0wvI/wnJPIyz39D80wnJPIyz3P6gRlnsaYfk/GmG5pxGW+z+MsNzTCMv9PwAAAAAAAABA","dtype":"float64","shape":[30]},"y":{"__ndarray__":"AAAAAAAAEEBpbwI4CL0LQG77lpD9xwdAE6S9CeAgBEBTaXajr8cAQF+WgrvYePs/VpM8cSz+9T+EyRpoWh/xP9lxOkDFuOk/HsOHMopq4j+xDTtOB6jYPyT07nfG1M0/XC0TuaBwvj8rDBgpseqlP1onhyRIe3M/WieHJEh7cz8rDBgpseqlP1EtE7mgcL4/JPTud8bUzT+xDTtOB6jYPyHDhzKKauI/2XE6QMW46T+CyRpoWh/xP1aTPHEs/vU/X5aCu9h4+z9RaXajr8cAQBOkvQngIARAbvuWkP3HB0BnbwI4CL0LQAAAAAAAABBA","dtype":"float64","shape":[30]}},"selected":{"id":"28493","type":"Selection"},"selection_policy":{"id":"28494","type":"UnionRenderers"}},"id":"28472","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"28472","type":"ColumnDataSource"},"glyph":{"id":"28475","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"28477","type":"CDSView"}},"id":"28476","type":"GlyphRenderer"},{"attributes":{},"id":"28482","type":"BasicTicker"},{"attributes":{"line_alpha":0.6,"line_color":"#f46d43","line_width":6,"x":{"field":"x"},"y":{"field":"y"}},"id":"28475","type":"Line"},{"attributes":{"callback":null},"id":"28487","type":"DataRange1d"},{"attributes":{},"id":"28493","type":"Selection"},{"attributes":{},"id":"28494","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"28486","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"28484","type":"Toolbar"},{"attributes":{},"id":"28488","type":"LinearScale"},{"attributes":{"plot":{"id":"28473","type":"Plot"},"ticker":{"id":"28480","type":"BasicTicker"}},"id":"28481","type":"Grid"},{"attributes":{"formatter":{"id":"28492","type":"BasicTickFormatter"},"plot":{"id":"28473","type":"Plot"},"ticker":{"id":"28482","type":"BasicTicker"}},"id":"28479","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"28473","type":"Plot"},"ticker":{"id":"28482","type":"BasicTicker"}},"id":"28483","type":"Grid"},{"attributes":{"formatter":{"id":"28490","type":"BasicTickFormatter"},"plot":{"id":"28473","type":"Plot"},"ticker":{"id":"28480","type":"BasicTicker"}},"id":"28478","type":"LinearAxis"},{"attributes":{},"id":"28480","type":"BasicTicker"},{"attributes":{"below":[{"id":"28478","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"28479","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"28476","type":"GlyphRenderer"},{"id":"28478","type":"LinearAxis"},{"id":"28479","type":"LinearAxis"},{"id":"28481","type":"Grid"},{"id":"28483","type":"Grid"}],"title":null,"toolbar":{"id":"28484","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"28487","type":"DataRange1d"},"x_scale":{"id":"28488","type":"LinearScale"},"y_range":{"id":"28486","type":"DataRange1d"},"y_scale":{"id":"28485","type":"LinearScale"}},"id":"28473","type":"Plot"},{"attributes":{},"id":"28492","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"28472","type":"ColumnDataSource"}},"id":"28477","type":"CDSView"},{"attributes":{},"id":"28490","type":"BasicTickFormatter"},{"attributes":{},"id":"28485","type":"LinearScale"}],"root_ids":["28473"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"62585162-5295-4d6a-92cc-744e9c42d155","roots":{"28473":"a38ec774-fc67-4542-ad84-6ac708ec12a2"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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