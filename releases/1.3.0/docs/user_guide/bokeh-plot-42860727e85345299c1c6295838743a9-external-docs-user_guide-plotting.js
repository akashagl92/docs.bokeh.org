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
      };var element = document.getElementById("709204e9-f973-40ff-829c-ab12cf6c6f1f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '709204e9-f973-40ff-829c-ab12cf6c6f1f' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"77c4b465-9467-41da-8fcf-02addf0bbe91":{"roots":{"references":[{"attributes":{},"id":"28106","type":"Selection"},{"attributes":{},"id":"28085","type":"HelpTool"},{"attributes":{"ticker":{"id":"28071","type":"BasicTicker"}},"id":"28074","type":"Grid"},{"attributes":{},"id":"28083","type":"SaveTool"},{"attributes":{},"id":"28103","type":"BasicTickFormatter"},{"attributes":{},"id":"28068","type":"LinearScale"},{"attributes":{"below":[{"id":"28070","type":"LinearAxis"}],"center":[{"id":"28074","type":"Grid"},{"id":"28079","type":"Grid"}],"left":[{"id":"28075","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28096","type":"GlyphRenderer"}],"title":{"id":"28099","type":"Title"},"toolbar":{"id":"28086","type":"Toolbar"},"x_range":{"id":"28062","type":"DataRange1d"},"x_scale":{"id":"28066","type":"LinearScale"},"y_range":{"id":"28064","type":"DataRange1d"},"y_scale":{"id":"28068","type":"LinearScale"}},"id":"28061","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"28080","type":"PanTool"},{"attributes":{"overlay":{"id":"28104","type":"BoxAnnotation"}},"id":"28082","type":"BoxZoomTool"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"28094","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28080","type":"PanTool"},{"id":"28081","type":"WheelZoomTool"},{"id":"28082","type":"BoxZoomTool"},{"id":"28083","type":"SaveTool"},{"id":"28084","type":"ResetTool"},{"id":"28085","type":"HelpTool"}]},"id":"28086","type":"Toolbar"},{"attributes":{"callback":null},"id":"28064","type":"DataRange1d"},{"attributes":{},"id":"28081","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28104","type":"BoxAnnotation"},{"attributes":{"source":{"id":"28093","type":"ColumnDataSource"}},"id":"28097","type":"CDSView"},{"attributes":{"formatter":{"id":"28101","type":"BasicTickFormatter"},"ticker":{"id":"28071","type":"BasicTicker"}},"id":"28070","type":"LinearAxis"},{"attributes":{},"id":"28071","type":"BasicTicker"},{"attributes":{"text":""},"id":"28099","type":"Title"},{"attributes":{},"id":"28066","type":"LinearScale"},{"attributes":{"formatter":{"id":"28103","type":"BasicTickFormatter"},"ticker":{"id":"28076","type":"BasicTicker"}},"id":"28075","type":"LinearAxis"},{"attributes":{"callback":null},"id":"28062","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"28095","type":"Line"},{"attributes":{},"id":"28076","type":"BasicTicker"},{"attributes":{},"id":"28101","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3,"NaN",4,5],"y":[6,7,2,4,4,5]},"selected":{"id":"28106","type":"Selection"},"selection_policy":{"id":"28105","type":"UnionRenderers"}},"id":"28093","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"28076","type":"BasicTicker"}},"id":"28079","type":"Grid"},{"attributes":{},"id":"28105","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"28093","type":"ColumnDataSource"},"glyph":{"id":"28094","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28095","type":"Line"},"selection_glyph":null,"view":{"id":"28097","type":"CDSView"}},"id":"28096","type":"GlyphRenderer"},{"attributes":{},"id":"28084","type":"ResetTool"}],"root_ids":["28061"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"77c4b465-9467-41da-8fcf-02addf0bbe91","roots":{"28061":"709204e9-f973-40ff-829c-ab12cf6c6f1f"}}];
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