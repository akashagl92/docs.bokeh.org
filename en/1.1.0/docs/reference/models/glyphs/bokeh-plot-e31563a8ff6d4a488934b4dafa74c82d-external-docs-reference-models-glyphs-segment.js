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
      };var element = document.getElementById("466c3bcf-8d77-46b2-b8f3-dbc1422005ea");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '466c3bcf-8d77-46b2-b8f3-dbc1422005ea' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2e80f25b-ce74-42d5-959e-38ebd71e4f90":{"roots":{"references":[{"attributes":{"below":[{"id":"11325","type":"LinearAxis"}],"center":[{"id":"11328","type":"Grid"},{"id":"11330","type":"Grid"}],"left":[{"id":"11326","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"11323","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"11335","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"11331","type":"DataRange1d"},"x_scale":{"id":"11334","type":"LinearScale"},"y_range":{"id":"11333","type":"DataRange1d"},"y_scale":{"id":"11332","type":"LinearScale"}},"id":"11320","type":"Plot"},{"attributes":{"data_source":{"id":"11319","type":"ColumnDataSource"},"glyph":{"id":"11322","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"11324","type":"CDSView"}},"id":"11323","type":"GlyphRenderer"},{"attributes":{},"id":"11337","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"11339","type":"BasicTickFormatter"},"ticker":{"id":"11327","type":"BasicTicker"}},"id":"11325","type":"LinearAxis"},{"attributes":{},"id":"11339","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"11333","type":"DataRange1d"},{"attributes":{"formatter":{"id":"11337","type":"BasicTickFormatter"},"ticker":{"id":"11329","type":"BasicTicker"}},"id":"11326","type":"LinearAxis"},{"attributes":{},"id":"11334","type":"LinearScale"},{"attributes":{},"id":"11329","type":"BasicTicker"},{"attributes":{"callback":null},"id":"11331","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"11335","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xm01":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"ym01":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]}},"selected":{"id":"11341","type":"Selection"},"selection_policy":{"id":"11340","type":"UnionRenderers"}},"id":"11319","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"11329","type":"BasicTicker"}},"id":"11330","type":"Grid"},{"attributes":{},"id":"11341","type":"Selection"},{"attributes":{"ticker":{"id":"11327","type":"BasicTicker"}},"id":"11328","type":"Grid"},{"attributes":{"source":{"id":"11319","type":"ColumnDataSource"}},"id":"11324","type":"CDSView"},{"attributes":{"line_color":{"value":"#f4a582"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xm01"},"y0":{"field":"y"},"y1":{"field":"ym01"}},"id":"11322","type":"Segment"},{"attributes":{},"id":"11340","type":"UnionRenderers"},{"attributes":{},"id":"11327","type":"BasicTicker"},{"attributes":{},"id":"11332","type":"LinearScale"}],"root_ids":["11320"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"2e80f25b-ce74-42d5-959e-38ebd71e4f90","roots":{"11320":"466c3bcf-8d77-46b2-b8f3-dbc1422005ea"}}];
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