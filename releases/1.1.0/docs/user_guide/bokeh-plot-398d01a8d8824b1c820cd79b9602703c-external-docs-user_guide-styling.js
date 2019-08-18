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
      };var element = document.getElementById("3a69dc4f-72be-4261-b0ff-11ea6f56305c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3a69dc4f-72be-4261-b0ff-11ea6f56305c' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
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
                    
                  var docs_json = '{"4e76a064-4972-4c0a-b164-3d01c5030eef":{"roots":{"references":[{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"32699","type":"Line"},{"attributes":{"callback":null},"id":"32669","type":"DataRange1d"},{"attributes":{"data_source":{"id":"32698","type":"ColumnDataSource"},"glyph":{"id":"32699","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32700","type":"Line"},"selection_glyph":null,"view":{"id":"32702","type":"CDSView"}},"id":"32701","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"32708","type":"BasicTickFormatter"},"ticker":{"id":"32676","type":"BasicTicker"}},"id":"32675","type":"LinearAxis"},{"attributes":{},"id":"32706","type":"BasicTickFormatter"},{"attributes":{},"id":"32685","type":"PanTool"},{"attributes":{},"id":"32676","type":"BasicTicker"},{"attributes":{},"id":"32708","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"32667","type":"DataRange1d"},{"attributes":{},"id":"32688","type":"SaveTool"},{"attributes":{"ticker":{"id":"32676","type":"BasicTicker"}},"id":"32679","type":"Grid"},{"attributes":{},"id":"32709","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"32711","type":"BoxAnnotation"}},"id":"32687","type":"BoxZoomTool"},{"attributes":{"text":"Toolbar Autohide"},"id":"32665","type":"Title"},{"attributes":{},"id":"32710","type":"Selection"},{"attributes":{},"id":"32689","type":"ResetTool"},{"attributes":{},"id":"32686","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"32706","type":"BasicTickFormatter"},"ticker":{"id":"32681","type":"BasicTicker"}},"id":"32680","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32711","type":"BoxAnnotation"},{"attributes":{},"id":"32690","type":"HelpTool"},{"attributes":{},"id":"32681","type":"BasicTicker"},{"attributes":{},"id":"32671","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","autohide":true,"tools":[{"id":"32685","type":"PanTool"},{"id":"32686","type":"WheelZoomTool"},{"id":"32687","type":"BoxZoomTool"},{"id":"32688","type":"SaveTool"},{"id":"32689","type":"ResetTool"},{"id":"32690","type":"HelpTool"}]},"id":"32691","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"32681","type":"BasicTicker"}},"id":"32684","type":"Grid"},{"attributes":{},"id":"32673","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"32710","type":"Selection"},"selection_policy":{"id":"32709","type":"UnionRenderers"}},"id":"32698","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"32700","type":"Line"},{"attributes":{"below":[{"id":"32675","type":"LinearAxis"}],"center":[{"id":"32679","type":"Grid"},{"id":"32684","type":"Grid"}],"left":[{"id":"32680","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"32701","type":"GlyphRenderer"}],"title":{"id":"32665","type":"Title"},"toolbar":{"id":"32691","type":"Toolbar"},"x_range":{"id":"32667","type":"DataRange1d"},"x_scale":{"id":"32671","type":"LinearScale"},"y_range":{"id":"32669","type":"DataRange1d"},"y_scale":{"id":"32673","type":"LinearScale"}},"id":"32664","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"32698","type":"ColumnDataSource"}},"id":"32702","type":"CDSView"}],"root_ids":["32664"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"4e76a064-4972-4c0a-b164-3d01c5030eef","roots":{"32664":"3a69dc4f-72be-4261-b0ff-11ea6f56305c"}}];
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