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
      };var element = document.getElementById("5d6f7f50-7e56-4866-80de-cbced4ad2afb");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5d6f7f50-7e56-4866-80de-cbced4ad2afb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"42cf8a06-e09e-447f-ae8d-5a5d47fbbe3d":{"roots":{"references":[{"attributes":{"overlay":{"id":"30534","type":"BoxAnnotation"}},"id":"30510","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"30521","type":"ColumnDataSource"},"glyph":{"id":"30522","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30523","type":"Circle"},"selection_glyph":null,"view":{"id":"30525","type":"CDSView"}},"id":"30524","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"30523","type":"Circle"},{"attributes":{},"id":"30497","type":"CategoricalScale"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"30493","type":"FactorRange"},{"attributes":{"callback":null},"id":"30491","type":"DataRange1d"},{"attributes":{"text":""},"id":"30526","type":"Title"},{"attributes":{"formatter":{"id":"30530","type":"BasicTickFormatter"},"ticker":{"id":"30500","type":"BasicTicker"}},"id":"30499","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30508","type":"PanTool"},{"id":"30509","type":"WheelZoomTool"},{"id":"30510","type":"BoxZoomTool"},{"id":"30511","type":"SaveTool"},{"id":"30512","type":"ResetTool"},{"id":"30513","type":"HelpTool"}]},"id":"30514","type":"Toolbar"},{"attributes":{},"id":"30513","type":"HelpTool"},{"attributes":{},"id":"30532","type":"Selection"},{"attributes":{},"id":"30500","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"30505","type":"CategoricalTicker"}},"id":"30507","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30534","type":"BoxAnnotation"},{"attributes":{},"id":"30533","type":"UnionRenderers"},{"attributes":{},"id":"30509","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"30499","type":"LinearAxis"}],"center":[{"id":"30503","type":"Grid"},{"id":"30507","type":"Grid"}],"left":[{"id":"30504","type":"CategoricalAxis"}],"renderers":[{"id":"30524","type":"GlyphRenderer"}],"title":{"id":"30526","type":"Title"},"toolbar":{"id":"30514","type":"Toolbar"},"x_range":{"id":"30491","type":"DataRange1d"},"x_scale":{"id":"30495","type":"LinearScale"},"y_range":{"id":"30493","type":"FactorRange"},"y_scale":{"id":"30497","type":"CategoricalScale"}},"id":"30490","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]},"selected":{"id":"30532","type":"Selection"},"selection_policy":{"id":"30533","type":"UnionRenderers"}},"id":"30521","type":"ColumnDataSource"},{"attributes":{"ticker":{"id":"30500","type":"BasicTicker"}},"id":"30503","type":"Grid"},{"attributes":{},"id":"30528","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"30528","type":"CategoricalTickFormatter"},"ticker":{"id":"30505","type":"CategoricalTicker"}},"id":"30504","type":"CategoricalAxis"},{"attributes":{},"id":"30495","type":"LinearScale"},{"attributes":{},"id":"30508","type":"PanTool"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"30522","type":"Circle"},{"attributes":{"source":{"id":"30521","type":"ColumnDataSource"}},"id":"30525","type":"CDSView"},{"attributes":{},"id":"30505","type":"CategoricalTicker"},{"attributes":{},"id":"30530","type":"BasicTickFormatter"},{"attributes":{},"id":"30511","type":"SaveTool"},{"attributes":{},"id":"30512","type":"ResetTool"}],"root_ids":["30490"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"42cf8a06-e09e-447f-ae8d-5a5d47fbbe3d","roots":{"30490":"5d6f7f50-7e56-4866-80de-cbced4ad2afb"}}];
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