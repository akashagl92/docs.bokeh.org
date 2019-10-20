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
      };var element = document.getElementById("473508fb-be34-4577-b499-6f353365568c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '473508fb-be34-4577-b499-6f353365568c' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"6624c847-9c86-4daa-8576-8a2ecbbe775c":{"roots":{"references":[{"attributes":{"below":[{"id":"27629","type":"LinearAxis"}],"center":[{"id":"27633","type":"Grid"},{"id":"27638","type":"Grid"}],"left":[{"id":"27634","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"27655","type":"GlyphRenderer"}],"title":{"id":"27657","type":"Title"},"toolbar":{"id":"27645","type":"Toolbar"},"x_range":{"id":"27621","type":"DataRange1d"},"x_scale":{"id":"27625","type":"LinearScale"},"y_range":{"id":"27623","type":"DataRange1d"},"y_scale":{"id":"27627","type":"LinearScale"}},"id":"27620","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"27654","type":"Circle"},{"attributes":{"overlay":{"id":"27665","type":"BoxAnnotation"}},"id":"27641","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"27630","type":"BasicTicker"}},"id":"27633","type":"Grid"},{"attributes":{"source":{"id":"27652","type":"ColumnDataSource"}},"id":"27656","type":"CDSView"},{"attributes":{"formatter":{"id":"27659","type":"BasicTickFormatter"},"ticker":{"id":"27635","type":"BasicTicker"}},"id":"27634","type":"LinearAxis"},{"attributes":{},"id":"27642","type":"SaveTool"},{"attributes":{"formatter":{"id":"27661","type":"BasicTickFormatter"},"ticker":{"id":"27630","type":"BasicTicker"}},"id":"27629","type":"LinearAxis"},{"attributes":{},"id":"27627","type":"LinearScale"},{"attributes":{},"id":"27661","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"27653","type":"Circle"},{"attributes":{},"id":"27664","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27639","type":"PanTool"},{"id":"27640","type":"WheelZoomTool"},{"id":"27641","type":"BoxZoomTool"},{"id":"27642","type":"SaveTool"},{"id":"27643","type":"ResetTool"},{"id":"27644","type":"HelpTool"}]},"id":"27645","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"27635","type":"BasicTicker"}},"id":"27638","type":"Grid"},{"attributes":{},"id":"27630","type":"BasicTicker"},{"attributes":{},"id":"27663","type":"Selection"},{"attributes":{"text":""},"id":"27657","type":"Title"},{"attributes":{},"id":"27640","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"27623","type":"DataRange1d"},{"attributes":{},"id":"27635","type":"BasicTicker"},{"attributes":{"callback":null},"id":"27621","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27665","type":"BoxAnnotation"},{"attributes":{},"id":"27659","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"27663","type":"Selection"},"selection_policy":{"id":"27664","type":"UnionRenderers"}},"id":"27652","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"27652","type":"ColumnDataSource"},"glyph":{"id":"27653","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27654","type":"Circle"},"selection_glyph":null,"view":{"id":"27656","type":"CDSView"}},"id":"27655","type":"GlyphRenderer"},{"attributes":{},"id":"27643","type":"ResetTool"},{"attributes":{},"id":"27639","type":"PanTool"},{"attributes":{},"id":"27625","type":"LinearScale"},{"attributes":{},"id":"27644","type":"HelpTool"}],"root_ids":["27620"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"6624c847-9c86-4daa-8576-8a2ecbbe775c","roots":{"27620":"473508fb-be34-4577-b499-6f353365568c"}}];
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