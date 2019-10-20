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
      };var element = document.getElementById("d3900540-41a4-455a-b40a-260d632f7fc5");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd3900540-41a4-455a-b40a-260d632f7fc5' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"1ae90075-516a-4ec5-b98a-ef455ffefcdf":{"roots":{"references":[{"attributes":{"below":[{"id":"12101","type":"LinearAxis"}],"center":[{"id":"12104","type":"Grid"},{"id":"12106","type":"Grid"}],"left":[{"id":"12102","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"12099","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"12111","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"12110","type":"DataRange1d"},"x_scale":{"id":"12109","type":"LinearScale"},"y_range":{"id":"12108","type":"DataRange1d"},"y_scale":{"id":"12107","type":"LinearScale"}},"id":"12096","type":"Plot"},{"attributes":{},"id":"12112","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"12095","type":"ColumnDataSource"},"glyph":{"id":"12098","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"12100","type":"CDSView"}},"id":"12099","type":"GlyphRenderer"},{"attributes":{},"id":"12107","type":"LinearScale"},{"attributes":{"ticker":{"id":"12103","type":"BasicTicker"}},"id":"12104","type":"Grid"},{"attributes":{},"id":"12116","type":"UnionRenderers"},{"attributes":{},"id":"12103","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"12105","type":"BasicTicker"}},"id":"12106","type":"Grid"},{"attributes":{},"id":"12114","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"12111","type":"Toolbar"},{"attributes":{"formatter":{"id":"12114","type":"BasicTickFormatter"},"ticker":{"id":"12105","type":"BasicTicker"}},"id":"12102","type":"LinearAxis"},{"attributes":{},"id":"12117","type":"Selection"},{"attributes":{"callback":null},"id":"12108","type":"DataRange1d"},{"attributes":{"fill_color":"#f46d43","x":{"field":"x"},"y1":{"field":"y1"},"y2":{"field":"y2"}},"id":"12098","type":"VArea"},{"attributes":{"source":{"id":"12095","type":"ColumnDataSource"}},"id":"12100","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMCw3NMIyz39v2G5pxGWe/q/EpZ7GmG597/Cck8jLPf0v3JPIyz3NPK/RljuaYTl7r+oEZZ7GmHpvwjLPY2w3OO/0AjLPY2w3L+UexphuafRv2C5pxGWe7q/oHsaYbmnsT9QWO5phOXOP2C5pxGWe9o/UCMs9zTC4j/waYTlnkboP5Cw3NMIy+0/mHsaYbmn8T/mnkZY7mn0PzbCck8jLPc/huWeRlju+T/UCMs9jbD8PyQs9zTCcv8/uqcRlnsaAUBiuacRlnsCQArLPY2w3ANAstzTCMs9BUBY7mmE5Z4GQAAAAAAAAAhA","dtype":"float64","shape":[30]},"y1":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","dtype":"float64","shape":[30]},"y2":{"__ndarray__":"AAAAAAAAGEAiEHNWxKMaQOr5c2unCh1AVr0CP6k0H0A0rY/o5JAgQJDo5JAEaSFAvhCBmLMiIkC/JWT/8b0iQJInjsW/OiNAORb/6hyZI0Cy8bZvCdkjQP25tVOF+iNAG2/7lpD9I0AMEYg5K+IjQM+fWztVqCNAZRt2nA5QI0DOg9dcV9kiQAnZf3wvRCJAFxtv+5aQIUD4SaXZjb4gQFbLRC4onB9AYtzMZ1N+HUAUx+JfnSMbQGqLhhYGjBhAZSm4i423FUAFoXe/M6YSQJTkiWPxrw5AajpAxbiZB0CWQxKkvQkAQAAAAAAAAPA/","dtype":"float64","shape":[30]}},"selected":{"id":"12117","type":"Selection"},"selection_policy":{"id":"12116","type":"UnionRenderers"}},"id":"12095","type":"ColumnDataSource"},{"attributes":{},"id":"12105","type":"BasicTicker"},{"attributes":{"callback":null},"id":"12110","type":"DataRange1d"},{"attributes":{},"id":"12109","type":"LinearScale"},{"attributes":{"formatter":{"id":"12112","type":"BasicTickFormatter"},"ticker":{"id":"12103","type":"BasicTicker"}},"id":"12101","type":"LinearAxis"}],"root_ids":["12096"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"1ae90075-516a-4ec5-b98a-ef455ffefcdf","roots":{"12096":"d3900540-41a4-455a-b40a-260d632f7fc5"}}];
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