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
      };var element = document.getElementById("009d4c6f-afba-4264-89eb-9388b16eed53");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '009d4c6f-afba-4264-89eb-9388b16eed53' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6de08be0-0839-4d62-9315-bf73d3881a95":{"roots":{"references":[{"attributes":{"callback":null},"id":"14184","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14200","type":"PanTool"},{"id":"14201","type":"WheelZoomTool"},{"id":"14202","type":"BoxZoomTool"},{"id":"14203","type":"SaveTool"},{"id":"14204","type":"ResetTool"},{"id":"14205","type":"HelpTool"}]},"id":"14206","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"14214","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"14215","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"14225","type":"Selection"},"selection_policy":{"id":"14224","type":"UnionRenderers"}},"id":"14213","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"14221","type":"BasicTickFormatter"},"ticker":{"id":"14196","type":"BasicTicker"}},"id":"14195","type":"LinearAxis"},{"attributes":{},"id":"14188","type":"LinearScale"},{"attributes":{"data_source":{"id":"14213","type":"ColumnDataSource"},"glyph":{"id":"14214","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14215","type":"Circle"},"selection_glyph":null,"view":{"id":"14217","type":"CDSView"}},"id":"14216","type":"GlyphRenderer"},{"attributes":{"source":{"id":"14213","type":"ColumnDataSource"}},"id":"14217","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"14196","type":"BasicTicker"}},"id":"14199","type":"Grid"},{"attributes":{"ticker":{"id":"14191","type":"BasicTicker"}},"id":"14194","type":"Grid"},{"attributes":{},"id":"14224","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14226","type":"BoxAnnotation"},{"attributes":{},"id":"14223","type":"BasicTickFormatter"},{"attributes":{},"id":"14225","type":"Selection"},{"attributes":{},"id":"14191","type":"BasicTicker"},{"attributes":{},"id":"14196","type":"BasicTicker"},{"attributes":{"overlay":{"id":"14226","type":"BoxAnnotation"}},"id":"14202","type":"BoxZoomTool"},{"attributes":{},"id":"14204","type":"ResetTool"},{"attributes":{"callback":null},"id":"14182","type":"DataRange1d"},{"attributes":{},"id":"14201","type":"WheelZoomTool"},{"attributes":{},"id":"14221","type":"BasicTickFormatter"},{"attributes":{},"id":"14200","type":"PanTool"},{"attributes":{"text":""},"id":"14219","type":"Title"},{"attributes":{"formatter":{"id":"14223","type":"BasicTickFormatter"},"ticker":{"id":"14191","type":"BasicTicker"}},"id":"14190","type":"LinearAxis"},{"attributes":{},"id":"14205","type":"HelpTool"},{"attributes":{},"id":"14186","type":"LinearScale"},{"attributes":{},"id":"14203","type":"SaveTool"},{"attributes":{"below":[{"id":"14190","type":"LinearAxis"}],"center":[{"id":"14194","type":"Grid"},{"id":"14199","type":"Grid"}],"left":[{"id":"14195","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"14216","type":"GlyphRenderer"}],"title":{"id":"14219","type":"Title"},"toolbar":{"id":"14206","type":"Toolbar"},"x_range":{"id":"14182","type":"DataRange1d"},"x_scale":{"id":"14186","type":"LinearScale"},"y_range":{"id":"14184","type":"DataRange1d"},"y_scale":{"id":"14188","type":"LinearScale"}},"id":"14181","subtype":"Figure","type":"Plot"}],"root_ids":["14181"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"6de08be0-0839-4d62-9315-bf73d3881a95","roots":{"14181":"009d4c6f-afba-4264-89eb-9388b16eed53"}}];
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