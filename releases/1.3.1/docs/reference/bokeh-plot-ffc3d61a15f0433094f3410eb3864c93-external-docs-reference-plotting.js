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
      };var element = document.getElementById("c779467e-aedd-4c08-8fb3-f331191c2e69");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c779467e-aedd-4c08-8fb3-f331191c2e69' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js"];
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
                    
                  var docs_json = '{"c69b16bd-26db-4bd1-a75d-019589aae484":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#E6550D"},"line_color":{"value":"#E6550D"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"15082","type":"Cross"},{"attributes":{"source":{"id":"15081","type":"ColumnDataSource"}},"id":"15085","type":"CDSView"},{"attributes":{},"id":"15054","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"15093","type":"Selection"},"selection_policy":{"id":"15094","type":"UnionRenderers"}},"id":"15081","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15068","type":"PanTool"},{"id":"15069","type":"WheelZoomTool"},{"id":"15070","type":"BoxZoomTool"},{"id":"15071","type":"SaveTool"},{"id":"15072","type":"ResetTool"},{"id":"15073","type":"HelpTool"}]},"id":"15074","type":"Toolbar"},{"attributes":{"formatter":{"id":"15090","type":"BasicTickFormatter"},"ticker":{"id":"15059","type":"BasicTicker"}},"id":"15058","type":"LinearAxis"},{"attributes":{"text":""},"id":"15087","type":"Title"},{"attributes":{},"id":"15068","type":"PanTool"},{"attributes":{},"id":"15088","type":"BasicTickFormatter"},{"attributes":{},"id":"15069","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"15092","type":"BoxAnnotation"}},"id":"15070","type":"BoxZoomTool"},{"attributes":{},"id":"15071","type":"SaveTool"},{"attributes":{},"id":"15059","type":"BasicTicker"},{"attributes":{},"id":"15090","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"15059","type":"BasicTicker"}},"id":"15062","type":"Grid"},{"attributes":{"below":[{"id":"15058","type":"LinearAxis"}],"center":[{"id":"15062","type":"Grid"},{"id":"15067","type":"Grid"}],"left":[{"id":"15063","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15084","type":"GlyphRenderer"}],"title":{"id":"15087","type":"Title"},"toolbar":{"id":"15074","type":"Toolbar"},"x_range":{"id":"15050","type":"DataRange1d"},"x_scale":{"id":"15054","type":"LinearScale"},"y_range":{"id":"15052","type":"DataRange1d"},"y_scale":{"id":"15056","type":"LinearScale"}},"id":"15049","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15092","type":"BoxAnnotation"},{"attributes":{},"id":"15072","type":"ResetTool"},{"attributes":{"formatter":{"id":"15088","type":"BasicTickFormatter"},"ticker":{"id":"15064","type":"BasicTicker"}},"id":"15063","type":"LinearAxis"},{"attributes":{},"id":"15093","type":"Selection"},{"attributes":{},"id":"15073","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"15083","type":"Cross"},{"attributes":{},"id":"15064","type":"BasicTicker"},{"attributes":{"callback":null},"id":"15050","type":"DataRange1d"},{"attributes":{},"id":"15094","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"15064","type":"BasicTicker"}},"id":"15067","type":"Grid"},{"attributes":{},"id":"15056","type":"LinearScale"},{"attributes":{"data_source":{"id":"15081","type":"ColumnDataSource"},"glyph":{"id":"15082","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15083","type":"Cross"},"selection_glyph":null,"view":{"id":"15085","type":"CDSView"}},"id":"15084","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"15052","type":"DataRange1d"}],"root_ids":["15049"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"c69b16bd-26db-4bd1-a75d-019589aae484","roots":{"15049":"c779467e-aedd-4c08-8fb3-f331191c2e69"}}];
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