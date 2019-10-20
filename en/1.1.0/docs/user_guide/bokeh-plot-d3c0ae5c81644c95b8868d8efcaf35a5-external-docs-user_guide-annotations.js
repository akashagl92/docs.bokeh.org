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
      };var element = document.getElementById("f4a796af-9993-4454-9cc4-39c0de7f84c1");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f4a796af-9993-4454-9cc4-39c0de7f84c1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0220b5e9-b4cf-4022-8271-4cec708d7622":{"roots":{"references":[{"attributes":{},"id":"18432","type":"BasicTickFormatter"},{"attributes":{},"id":"18406","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"y":{"__ndarray__":"xzzLMRpUIkDSB840hRkiQNzmSCisczBAt0mi/PhdMEAaaZJngn8xQHCcbxAwdjBAqasZpyoeOUDUYivj9wE6QEzXQXjlhjxA1XjulvR7NUCur27gjvI6QEOcLEP810BApBwRVC8LQkBwdjTNUERCQJ+gPS12GkRAVwrEmOUDQ0Dn5qjIhc5CQFtF5l+9VENAqkX6zfg4SECra6YcGfJHQA==","dtype":"float64","shape":[20]}},"selected":{"id":"18436","type":"Selection"},"selection_policy":{"id":"18435","type":"UnionRenderers"}},"id":"18423","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18410","type":"PanTool"},{"id":"18411","type":"WheelZoomTool"},{"id":"18412","type":"BoxZoomTool"},{"id":"18413","type":"SaveTool"},{"id":"18414","type":"ResetTool"},{"id":"18415","type":"HelpTool"}]},"id":"18416","type":"Toolbar"},{"attributes":{"ticker":{"id":"18401","type":"BasicTicker"}},"id":"18404","type":"Grid"},{"attributes":{"source":{"id":"18423","type":"ColumnDataSource"}},"id":"18427","type":"CDSView"},{"attributes":{},"id":"18434","type":"BasicTickFormatter"},{"attributes":{},"id":"18413","type":"SaveTool"},{"attributes":{"gradient":2,"line_color":{"value":"orange"},"line_dash":[6],"line_width":{"value":3.5},"y_intercept":10},"id":"18428","type":"Slope"},{"attributes":{},"id":"18410","type":"PanTool"},{"attributes":{},"id":"18415","type":"HelpTool"},{"attributes":{},"id":"18435","type":"UnionRenderers"},{"attributes":{},"id":"18436","type":"Selection"},{"attributes":{"overlay":{"id":"18437","type":"BoxAnnotation"}},"id":"18412","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"18392","type":"DataRange1d"},{"attributes":{"axis_label":"y","formatter":{"id":"18432","type":"BasicTickFormatter"},"ticker":{"id":"18406","type":"BasicTicker"}},"id":"18405","type":"LinearAxis"},{"attributes":{"axis_label":"x","formatter":{"id":"18434","type":"BasicTickFormatter"},"ticker":{"id":"18401","type":"BasicTicker"}},"id":"18400","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"18406","type":"BasicTicker"}},"id":"18409","type":"Grid"},{"attributes":{"callback":null,"end":53.28960220520354},"id":"18394","type":"Range1d"},{"attributes":{},"id":"18411","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18437","type":"BoxAnnotation"},{"attributes":{"text":""},"id":"18430","type":"Title"},{"attributes":{},"id":"18401","type":"BasicTicker"},{"attributes":{},"id":"18414","type":"ResetTool"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"18424","type":"Circle"},{"attributes":{},"id":"18398","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"18425","type":"Circle"},{"attributes":{},"id":"18396","type":"LinearScale"},{"attributes":{"data_source":{"id":"18423","type":"ColumnDataSource"},"glyph":{"id":"18424","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18425","type":"Circle"},"selection_glyph":null,"view":{"id":"18427","type":"CDSView"}},"id":"18426","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"18400","type":"LinearAxis"}],"center":[{"id":"18404","type":"Grid"},{"id":"18409","type":"Grid"},{"id":"18428","type":"Slope"}],"left":[{"id":"18405","type":"LinearAxis"}],"plot_height":450,"plot_width":450,"renderers":[{"id":"18426","type":"GlyphRenderer"}],"title":{"id":"18430","type":"Title"},"toolbar":{"id":"18416","type":"Toolbar"},"x_range":{"id":"18392","type":"DataRange1d"},"x_scale":{"id":"18396","type":"LinearScale"},"y_range":{"id":"18394","type":"Range1d"},"y_scale":{"id":"18398","type":"LinearScale"}},"id":"18391","subtype":"Figure","type":"Plot"}],"root_ids":["18391"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"0220b5e9-b4cf-4022-8271-4cec708d7622","roots":{"18391":"f4a796af-9993-4454-9cc4-39c0de7f84c1"}}];
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