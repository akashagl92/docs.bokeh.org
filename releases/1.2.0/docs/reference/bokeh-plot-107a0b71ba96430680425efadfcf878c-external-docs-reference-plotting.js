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
      };var element = document.getElementById("48bec0b6-63fa-44ff-961e-90de18f1200f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '48bec0b6-63fa-44ff-961e-90de18f1200f' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js"];
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
                    
                  var docs_json = '{"a6a6815a-bb43-4ecc-9eee-a26053504ec5":{"roots":{"references":[{"attributes":{},"id":"15316","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"15280","type":"DataRange1d"},{"attributes":{},"id":"15297","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"15318","type":"BasicTickFormatter"},"ticker":{"id":"15287","type":"BasicTicker"}},"id":"15286","type":"LinearAxis"},{"attributes":{"callback":null},"id":"15278","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"15311","type":"DiamondCross"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15296","type":"PanTool"},{"id":"15297","type":"WheelZoomTool"},{"id":"15298","type":"BoxZoomTool"},{"id":"15299","type":"SaveTool"},{"id":"15300","type":"ResetTool"},{"id":"15301","type":"HelpTool"}]},"id":"15302","type":"Toolbar"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"15310","type":"DiamondCross"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"15320","type":"Selection"},"selection_policy":{"id":"15321","type":"UnionRenderers"}},"id":"15309","type":"ColumnDataSource"},{"attributes":{},"id":"15300","type":"ResetTool"},{"attributes":{"formatter":{"id":"15316","type":"BasicTickFormatter"},"ticker":{"id":"15292","type":"BasicTicker"}},"id":"15291","type":"LinearAxis"},{"attributes":{"below":[{"id":"15286","type":"LinearAxis"}],"center":[{"id":"15290","type":"Grid"},{"id":"15295","type":"Grid"}],"left":[{"id":"15291","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15312","type":"GlyphRenderer"}],"title":{"id":"15314","type":"Title"},"toolbar":{"id":"15302","type":"Toolbar"},"x_range":{"id":"15278","type":"DataRange1d"},"x_scale":{"id":"15282","type":"LinearScale"},"y_range":{"id":"15280","type":"DataRange1d"},"y_scale":{"id":"15284","type":"LinearScale"}},"id":"15277","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15296","type":"PanTool"},{"attributes":{},"id":"15292","type":"BasicTicker"},{"attributes":{},"id":"15299","type":"SaveTool"},{"attributes":{"text":""},"id":"15314","type":"Title"},{"attributes":{"overlay":{"id":"15322","type":"BoxAnnotation"}},"id":"15298","type":"BoxZoomTool"},{"attributes":{},"id":"15287","type":"BasicTicker"},{"attributes":{},"id":"15318","type":"BasicTickFormatter"},{"attributes":{},"id":"15282","type":"LinearScale"},{"attributes":{},"id":"15321","type":"UnionRenderers"},{"attributes":{},"id":"15284","type":"LinearScale"},{"attributes":{},"id":"15301","type":"HelpTool"},{"attributes":{},"id":"15320","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15322","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"15309","type":"ColumnDataSource"},"glyph":{"id":"15310","type":"DiamondCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15311","type":"DiamondCross"},"selection_glyph":null,"view":{"id":"15313","type":"CDSView"}},"id":"15312","type":"GlyphRenderer"},{"attributes":{"source":{"id":"15309","type":"ColumnDataSource"}},"id":"15313","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"15292","type":"BasicTicker"}},"id":"15295","type":"Grid"},{"attributes":{"ticker":{"id":"15287","type":"BasicTicker"}},"id":"15290","type":"Grid"}],"root_ids":["15277"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"a6a6815a-bb43-4ecc-9eee-a26053504ec5","roots":{"15277":"48bec0b6-63fa-44ff-961e-90de18f1200f"}}];
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