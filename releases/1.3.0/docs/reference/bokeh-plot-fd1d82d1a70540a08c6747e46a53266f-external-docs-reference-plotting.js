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
      };var element = document.getElementById("badefea4-915c-4c58-80dd-26f0008c02fc");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'badefea4-915c-4c58-80dd-26f0008c02fc' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8ccc703d-3cc6-4820-bda7-ae149ee9c74d":{"roots":{"references":[{"attributes":{"formatter":{"id":"15088","type":"BasicTickFormatter"},"ticker":{"id":"15058","type":"BasicTicker"}},"id":"15057","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"15063","type":"BasicTicker"}},"id":"15066","type":"Grid"},{"attributes":{},"id":"15068","type":"WheelZoomTool"},{"attributes":{},"id":"15055","type":"LinearScale"},{"attributes":{"text":""},"id":"15086","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"15082","type":"Cross"},{"attributes":{"overlay":{"id":"15091","type":"BoxAnnotation"}},"id":"15069","type":"BoxZoomTool"},{"attributes":{},"id":"15088","type":"BasicTickFormatter"},{"attributes":{},"id":"15053","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#E6550D"},"line_color":{"value":"#E6550D"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"15081","type":"Cross"},{"attributes":{"callback":null},"id":"15051","type":"DataRange1d"},{"attributes":{},"id":"15090","type":"BasicTickFormatter"},{"attributes":{},"id":"15072","type":"HelpTool"},{"attributes":{},"id":"15070","type":"SaveTool"},{"attributes":{"callback":null},"id":"15049","type":"DataRange1d"},{"attributes":{},"id":"15067","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15091","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"15093","type":"Selection"},"selection_policy":{"id":"15092","type":"UnionRenderers"}},"id":"15080","type":"ColumnDataSource"},{"attributes":{},"id":"15071","type":"ResetTool"},{"attributes":{},"id":"15093","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15067","type":"PanTool"},{"id":"15068","type":"WheelZoomTool"},{"id":"15069","type":"BoxZoomTool"},{"id":"15070","type":"SaveTool"},{"id":"15071","type":"ResetTool"},{"id":"15072","type":"HelpTool"}]},"id":"15073","type":"Toolbar"},{"attributes":{"data_source":{"id":"15080","type":"ColumnDataSource"},"glyph":{"id":"15081","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15082","type":"Cross"},"selection_glyph":null,"view":{"id":"15084","type":"CDSView"}},"id":"15083","type":"GlyphRenderer"},{"attributes":{},"id":"15092","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"15058","type":"BasicTicker"}},"id":"15061","type":"Grid"},{"attributes":{"formatter":{"id":"15090","type":"BasicTickFormatter"},"ticker":{"id":"15063","type":"BasicTicker"}},"id":"15062","type":"LinearAxis"},{"attributes":{},"id":"15058","type":"BasicTicker"},{"attributes":{"source":{"id":"15080","type":"ColumnDataSource"}},"id":"15084","type":"CDSView"},{"attributes":{"below":[{"id":"15057","type":"LinearAxis"}],"center":[{"id":"15061","type":"Grid"},{"id":"15066","type":"Grid"}],"left":[{"id":"15062","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15083","type":"GlyphRenderer"}],"title":{"id":"15086","type":"Title"},"toolbar":{"id":"15073","type":"Toolbar"},"x_range":{"id":"15049","type":"DataRange1d"},"x_scale":{"id":"15053","type":"LinearScale"},"y_range":{"id":"15051","type":"DataRange1d"},"y_scale":{"id":"15055","type":"LinearScale"}},"id":"15048","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15063","type":"BasicTicker"}],"root_ids":["15048"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"8ccc703d-3cc6-4820-bda7-ae149ee9c74d","roots":{"15048":"badefea4-915c-4c58-80dd-26f0008c02fc"}}];
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