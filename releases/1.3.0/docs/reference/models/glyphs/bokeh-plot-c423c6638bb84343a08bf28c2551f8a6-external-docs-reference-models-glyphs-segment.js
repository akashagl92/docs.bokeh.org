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
      };var element = document.getElementById("b5e052f1-54ee-4db5-8eab-e2a86634e735");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b5e052f1-54ee-4db5-8eab-e2a86634e735' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
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
                    
                  var docs_json = '{"f59cbda6-655e-4206-b318-286393f0305d":{"roots":{"references":[{"attributes":{},"id":"11813","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"11803","type":"BasicTicker"}},"id":"11804","type":"Grid"},{"attributes":{"formatter":{"id":"11811","type":"BasicTickFormatter"},"ticker":{"id":"11801","type":"BasicTicker"}},"id":"11799","type":"LinearAxis"},{"attributes":{"data_source":{"id":"11793","type":"ColumnDataSource"},"glyph":{"id":"11796","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"11798","type":"CDSView"}},"id":"11797","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"11807","type":"DataRange1d"},{"attributes":{},"id":"11806","type":"LinearScale"},{"attributes":{"source":{"id":"11793","type":"ColumnDataSource"}},"id":"11798","type":"CDSView"},{"attributes":{"callback":null},"id":"11809","type":"DataRange1d"},{"attributes":{"ticker":{"id":"11801","type":"BasicTicker"}},"id":"11802","type":"Grid"},{"attributes":{"below":[{"id":"11799","type":"LinearAxis"}],"center":[{"id":"11802","type":"Grid"},{"id":"11804","type":"Grid"}],"left":[{"id":"11800","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"11797","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"11805","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"11807","type":"DataRange1d"},"x_scale":{"id":"11806","type":"LinearScale"},"y_range":{"id":"11809","type":"DataRange1d"},"y_scale":{"id":"11808","type":"LinearScale"}},"id":"11794","type":"Plot"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"xm01":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"ym01":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]}},"selected":{"id":"11815","type":"Selection"},"selection_policy":{"id":"11814","type":"UnionRenderers"}},"id":"11793","type":"ColumnDataSource"},{"attributes":{},"id":"11815","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"11805","type":"Toolbar"},{"attributes":{},"id":"11803","type":"BasicTicker"},{"attributes":{"formatter":{"id":"11813","type":"BasicTickFormatter"},"ticker":{"id":"11803","type":"BasicTicker"}},"id":"11800","type":"LinearAxis"},{"attributes":{},"id":"11811","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#f4a582"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xm01"},"y0":{"field":"y"},"y1":{"field":"ym01"}},"id":"11796","type":"Segment"},{"attributes":{},"id":"11801","type":"BasicTicker"},{"attributes":{},"id":"11814","type":"UnionRenderers"},{"attributes":{},"id":"11808","type":"LinearScale"}],"root_ids":["11794"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"f59cbda6-655e-4206-b318-286393f0305d","roots":{"11794":"b5e052f1-54ee-4db5-8eab-e2a86634e735"}}];
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