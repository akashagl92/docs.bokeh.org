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
      };var element = document.getElementById("7ce19e45-a707-446c-a1ee-e3a54d0b3dc3");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '7ce19e45-a707-446c-a1ee-e3a54d0b3dc3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9cb69e87-0e7b-4f62-83af-a9b1535e2bf8":{"roots":{"references":[{"attributes":{"dimension":1,"ticker":{"id":"27284","type":"BasicTicker"}},"id":"27287","type":"Grid"},{"attributes":{"text":""},"id":"27307","type":"Title"},{"attributes":{"below":[{"id":"27278","type":"LinearAxis"}],"center":[{"id":"27282","type":"Grid"},{"id":"27287","type":"Grid"}],"left":[{"id":"27283","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"27304","type":"GlyphRenderer"}],"title":{"id":"27307","type":"Title"},"toolbar":{"id":"27294","type":"Toolbar"},"x_range":{"id":"27270","type":"DataRange1d"},"x_scale":{"id":"27274","type":"LinearScale"},"y_range":{"id":"27272","type":"DataRange1d"},"y_scale":{"id":"27276","type":"LinearScale"}},"id":"27269","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27274","type":"LinearScale"},{"attributes":{},"id":"27309","type":"BasicTickFormatter"},{"attributes":{},"id":"27291","type":"SaveTool"},{"attributes":{},"id":"27311","type":"BasicTickFormatter"},{"attributes":{},"id":"27279","type":"BasicTicker"},{"attributes":{"formatter":{"id":"27311","type":"BasicTickFormatter"},"ticker":{"id":"27279","type":"BasicTicker"}},"id":"27278","type":"LinearAxis"},{"attributes":{},"id":"27289","type":"WheelZoomTool"},{"attributes":{},"id":"27312","type":"UnionRenderers"},{"attributes":{},"id":"27288","type":"PanTool"},{"attributes":{},"id":"27313","type":"Selection"},{"attributes":{"data_source":{"id":"27301","type":"ColumnDataSource"},"glyph":{"id":"27302","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27303","type":"Line"},"selection_glyph":null,"view":{"id":"27305","type":"CDSView"}},"id":"27304","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"27302","type":"Line"},{"attributes":{"callback":null,"data":{"x":[1,2,3,"NaN",4,5],"y":[6,7,2,4,4,5]},"selected":{"id":"27313","type":"Selection"},"selection_policy":{"id":"27312","type":"UnionRenderers"}},"id":"27301","type":"ColumnDataSource"},{"attributes":{},"id":"27276","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27314","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"27314","type":"BoxAnnotation"}},"id":"27290","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"27279","type":"BasicTicker"}},"id":"27282","type":"Grid"},{"attributes":{},"id":"27292","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27288","type":"PanTool"},{"id":"27289","type":"WheelZoomTool"},{"id":"27290","type":"BoxZoomTool"},{"id":"27291","type":"SaveTool"},{"id":"27292","type":"ResetTool"},{"id":"27293","type":"HelpTool"}]},"id":"27294","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"27303","type":"Line"},{"attributes":{},"id":"27293","type":"HelpTool"},{"attributes":{},"id":"27284","type":"BasicTicker"},{"attributes":{"callback":null},"id":"27272","type":"DataRange1d"},{"attributes":{"formatter":{"id":"27309","type":"BasicTickFormatter"},"ticker":{"id":"27284","type":"BasicTicker"}},"id":"27283","type":"LinearAxis"},{"attributes":{"source":{"id":"27301","type":"ColumnDataSource"}},"id":"27305","type":"CDSView"},{"attributes":{"callback":null},"id":"27270","type":"DataRange1d"}],"root_ids":["27269"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"9cb69e87-0e7b-4f62-83af-a9b1535e2bf8","roots":{"27269":"7ce19e45-a707-446c-a1ee-e3a54d0b3dc3"}}];
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