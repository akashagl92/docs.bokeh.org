(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("b44089b9-66b0-4a2d-bc92-ac69f5d70ad8");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b44089b9-66b0-4a2d-bc92-ac69f5d70ad8' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"0cffc20b-9122-4586-a7c9-addf6742134f":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"10348","type":"Toolbar"},{"attributes":{},"id":"10345","type":"LinearScale"},{"attributes":{},"id":"10342","type":"BasicTicker"},{"attributes":{"below":[{"id":"10338","type":"LinearAxis"}],"center":[{"id":"10341","type":"Grid"},{"id":"10343","type":"Grid"}],"left":[{"id":"10339","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"10336","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"10348","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"10344","type":"DataRange1d"},"x_scale":{"id":"10347","type":"LinearScale"},"y_range":{"id":"10346","type":"DataRange1d"},"y_scale":{"id":"10345","type":"LinearScale"}},"id":"10333","type":"Plot"},{"attributes":{},"id":"10352","type":"BasicTickFormatter"},{"attributes":{},"id":"10350","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"10350","type":"BasicTickFormatter"},"ticker":{"id":"10342","type":"BasicTicker"}},"id":"10339","type":"LinearAxis"},{"attributes":{"formatter":{"id":"10352","type":"BasicTickFormatter"},"ticker":{"id":"10340","type":"BasicTicker"}},"id":"10338","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMCNsNzTCMv9vxphuacRlvu/qBGWexph+b81wnJPIyz3v8JyTyMs9/S/UCMs9zTC8r/d0wjLPY3wv9QIyz2NsOy/7mmE5Z5G6L8Iyz2NsNzjv0hY7mmE5d6/fBphuacR1r9guacRlnvKv6B7GmG5p7G/oHsaYbmnsT9guacRlnvKP3gaYbmnEdY/SFjuaYTl3j8Iyz2NsNzjP/BphOWeRug/1AjLPY2w7D/c0wjLPY3wP1AjLPc0wvI/wnJPIyz39D80wnJPIyz3P6gRlnsaYfk/GmG5pxGW+z+MsNzTCMv9PwAAAAAAAABA","dtype":"float64","shape":[30]},"y":{"__ndarray__":"AAAAAAAAEEBpbwI4CL0LQG77lpD9xwdAE6S9CeAgBEBTaXajr8cAQF+WgrvYePs/VpM8cSz+9T+EyRpoWh/xP9lxOkDFuOk/HsOHMopq4j+xDTtOB6jYPyT07nfG1M0/XC0TuaBwvj8rDBgpseqlP1onhyRIe3M/WieHJEh7cz8rDBgpseqlP1EtE7mgcL4/JPTud8bUzT+xDTtOB6jYPyHDhzKKauI/2XE6QMW46T+CyRpoWh/xP1aTPHEs/vU/X5aCu9h4+z9RaXajr8cAQBOkvQngIARAbvuWkP3HB0BnbwI4CL0LQAAAAAAAABBA","dtype":"float64","shape":[30]}},"selected":{"id":"10354","type":"Selection"},"selection_policy":{"id":"10353","type":"UnionRenderers"}},"id":"10332","type":"ColumnDataSource"},{"attributes":{"ticker":{"id":"10340","type":"BasicTicker"}},"id":"10341","type":"Grid"},{"attributes":{"source":{"id":"10332","type":"ColumnDataSource"}},"id":"10337","type":"CDSView"},{"attributes":{"line_alpha":0.6,"line_color":"#f46d43","line_width":6,"x":{"field":"x"},"y":{"field":"y"}},"id":"10335","type":"Line"},{"attributes":{},"id":"10340","type":"BasicTicker"},{"attributes":{"callback":null},"id":"10344","type":"DataRange1d"},{"attributes":{},"id":"10347","type":"LinearScale"},{"attributes":{"data_source":{"id":"10332","type":"ColumnDataSource"},"glyph":{"id":"10335","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"10337","type":"CDSView"}},"id":"10336","type":"GlyphRenderer"},{"attributes":{},"id":"10353","type":"UnionRenderers"},{"attributes":{},"id":"10354","type":"Selection"},{"attributes":{"callback":null},"id":"10346","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"10342","type":"BasicTicker"}},"id":"10343","type":"Grid"}],"root_ids":["10333"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"0cffc20b-9122-4586-a7c9-addf6742134f","roots":{"10333":"b44089b9-66b0-4a2d-bc92-ac69f5d70ad8"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();