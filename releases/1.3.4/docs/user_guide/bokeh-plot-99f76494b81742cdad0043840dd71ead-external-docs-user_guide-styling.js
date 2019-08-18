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
      };var element = document.getElementById("5ef113f0-ebed-4618-9fc7-971fa3f21e0c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5ef113f0-ebed-4618-9fc7-971fa3f21e0c' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.4.min.js"];
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
                    
                  var docs_json = '{"51d2c454-3448-4f78-bb69-1129949902b4":{"roots":{"references":[{"attributes":{"data_source":{"id":"33207","type":"ColumnDataSource"},"glyph":{"id":"33208","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33209","type":"Circle"},"selection_glyph":null,"view":{"id":"33211","type":"CDSView"}},"id":"33210","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"33185","type":"BasicTicker"}},"id":"33188","type":"Grid"},{"attributes":{},"id":"33217","type":"BasicTickFormatter"},{"attributes":{},"id":"33199","type":"HelpTool"},{"attributes":{},"id":"33194","type":"PanTool"},{"attributes":{"formatter":{"id":"33217","type":"BasicTickFormatter"},"ticker":{"id":"33185","type":"BasicTicker"}},"id":"33184","type":"LinearAxis"},{"attributes":{},"id":"33218","type":"Selection"},{"attributes":{"overlay":{"id":"33220","type":"BoxAnnotation"}},"id":"33196","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"33215","type":"BasicTickFormatter"},"ticker":{"id":"33190","type":"BasicTicker"}},"id":"33189","type":"LinearAxis"},{"attributes":{"callback":null},"id":"33178","type":"DataRange1d"},{"attributes":{},"id":"33215","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"33208","type":"Circle"},{"attributes":{},"id":"33198","type":"ResetTool"},{"attributes":{},"id":"33180","type":"LinearScale"},{"attributes":{},"id":"33185","type":"BasicTicker"},{"attributes":{"callback":null},"id":"33176","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"33190","type":"BasicTicker"}},"id":"33193","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33194","type":"PanTool"},{"id":"33195","type":"WheelZoomTool"},{"id":"33196","type":"BoxZoomTool"},{"id":"33197","type":"SaveTool"},{"id":"33198","type":"ResetTool"},{"id":"33199","type":"HelpTool"}]},"id":"33200","type":"Toolbar"},{"attributes":{"source":{"id":"33207","type":"ColumnDataSource"}},"id":"33211","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"33209","type":"Circle"},{"attributes":{},"id":"33182","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33220","type":"BoxAnnotation"},{"attributes":{"text":""},"id":"33213","type":"Title"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"33218","type":"Selection"},"selection_policy":{"id":"33219","type":"UnionRenderers"}},"id":"33207","type":"ColumnDataSource"},{"attributes":{},"id":"33195","type":"WheelZoomTool"},{"attributes":{},"id":"33197","type":"SaveTool"},{"attributes":{},"id":"33219","type":"UnionRenderers"},{"attributes":{"below":[{"id":"33184","type":"LinearAxis"}],"border_fill_color":{"value":"whitesmoke"},"center":[{"id":"33188","type":"Grid"},{"id":"33193","type":"Grid"}],"left":[{"id":"33189","type":"LinearAxis"}],"min_border_left":80,"plot_height":400,"plot_width":400,"renderers":[{"id":"33210","type":"GlyphRenderer"}],"title":{"id":"33213","type":"Title"},"toolbar":{"id":"33200","type":"Toolbar"},"x_range":{"id":"33176","type":"DataRange1d"},"x_scale":{"id":"33180","type":"LinearScale"},"y_range":{"id":"33178","type":"DataRange1d"},"y_scale":{"id":"33182","type":"LinearScale"}},"id":"33175","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33190","type":"BasicTicker"}],"root_ids":["33175"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"51d2c454-3448-4f78-bb69-1129949902b4","roots":{"33175":"5ef113f0-ebed-4618-9fc7-971fa3f21e0c"}}];
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
        
        
        }
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