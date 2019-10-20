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
      };var element = document.getElementById("7ae55448-e0b0-4cfe-8486-b9a85de1a880");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '7ae55448-e0b0-4cfe-8486-b9a85de1a880' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
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
                    
                  var docs_json = '{"54c6b83e-317f-4cd4-8088-756e50f9b400":{"roots":{"references":[{"attributes":{},"id":"15006","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"14981","type":"BasicTicker"}},"id":"14984","type":"Grid"},{"attributes":{},"id":"14989","type":"ResetTool"},{"attributes":{},"id":"15008","type":"BasicTickFormatter"},{"attributes":{},"id":"14973","type":"LinearScale"},{"attributes":{},"id":"14976","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15011","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"14976","type":"BasicTicker"}},"id":"14979","type":"Grid"},{"attributes":{},"id":"14981","type":"BasicTicker"},{"attributes":{"data_source":{"id":"14998","type":"ColumnDataSource"},"glyph":{"id":"14999","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15000","type":"CircleX"},"selection_glyph":null,"view":{"id":"15002","type":"CDSView"}},"id":"15001","type":"GlyphRenderer"},{"attributes":{},"id":"15009","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"15009","type":"Selection"},"selection_policy":{"id":"15010","type":"UnionRenderers"}},"id":"14998","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"15004","type":"Title"},{"attributes":{"formatter":{"id":"15008","type":"BasicTickFormatter"},"ticker":{"id":"14976","type":"BasicTicker"}},"id":"14975","type":"LinearAxis"},{"attributes":{"callback":null},"id":"14969","type":"DataRange1d"},{"attributes":{},"id":"14971","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#DD1C77"},"line_color":{"value":"#DD1C77"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"14999","type":"CircleX"},{"attributes":{},"id":"15010","type":"UnionRenderers"},{"attributes":{},"id":"14986","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"14975","type":"LinearAxis"}],"center":[{"id":"14979","type":"Grid"},{"id":"14984","type":"Grid"}],"left":[{"id":"14980","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15001","type":"GlyphRenderer"}],"title":{"id":"15004","type":"Title"},"toolbar":{"id":"14991","type":"Toolbar"},"x_range":{"id":"14967","type":"DataRange1d"},"x_scale":{"id":"14971","type":"LinearScale"},"y_range":{"id":"14969","type":"DataRange1d"},"y_scale":{"id":"14973","type":"LinearScale"}},"id":"14966","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"14967","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"15000","type":"CircleX"},{"attributes":{},"id":"14990","type":"HelpTool"},{"attributes":{},"id":"14985","type":"PanTool"},{"attributes":{},"id":"14988","type":"SaveTool"},{"attributes":{"source":{"id":"14998","type":"ColumnDataSource"}},"id":"15002","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14985","type":"PanTool"},{"id":"14986","type":"WheelZoomTool"},{"id":"14987","type":"BoxZoomTool"},{"id":"14988","type":"SaveTool"},{"id":"14989","type":"ResetTool"},{"id":"14990","type":"HelpTool"}]},"id":"14991","type":"Toolbar"},{"attributes":{"formatter":{"id":"15006","type":"BasicTickFormatter"},"ticker":{"id":"14981","type":"BasicTicker"}},"id":"14980","type":"LinearAxis"},{"attributes":{"overlay":{"id":"15011","type":"BoxAnnotation"}},"id":"14987","type":"BoxZoomTool"}],"root_ids":["14966"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"54c6b83e-317f-4cd4-8088-756e50f9b400","roots":{"14966":"7ae55448-e0b0-4cfe-8486-b9a85de1a880"}}];
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