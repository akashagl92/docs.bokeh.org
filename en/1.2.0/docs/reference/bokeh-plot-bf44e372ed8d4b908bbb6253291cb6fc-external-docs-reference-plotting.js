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
      };var element = document.getElementById("e21c392e-5586-4671-80de-3f2bd5752aa0");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e21c392e-5586-4671-80de-3f2bd5752aa0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"81060974-0872-40b5-9dd1-b70f187d4b9b":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14632","type":"PanTool"},{"id":"14633","type":"WheelZoomTool"},{"id":"14634","type":"BoxZoomTool"},{"id":"14635","type":"SaveTool"},{"id":"14636","type":"ResetTool"},{"id":"14637","type":"HelpTool"}]},"id":"14638","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"14628","type":"BasicTicker"}},"id":"14631","type":"Grid"},{"attributes":{"fill_color":{"value":"#7FC97F"},"inner_radius":{"units":"data","value":0.2},"line_color":{"value":"#7FC97F"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"14646","type":"Annulus"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.2},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"14647","type":"Annulus"},{"attributes":{},"id":"14654","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"14654","type":"BasicTickFormatter"},"ticker":{"id":"14623","type":"BasicTicker"}},"id":"14622","type":"LinearAxis"},{"attributes":{},"id":"14618","type":"LinearScale"},{"attributes":{"below":[{"id":"14622","type":"LinearAxis"}],"center":[{"id":"14626","type":"Grid"},{"id":"14631","type":"Grid"}],"left":[{"id":"14627","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"14648","type":"GlyphRenderer"}],"title":{"id":"14650","type":"Title"},"toolbar":{"id":"14638","type":"Toolbar"},"x_range":{"id":"14614","type":"DataRange1d"},"x_scale":{"id":"14618","type":"LinearScale"},"y_range":{"id":"14616","type":"DataRange1d"},"y_scale":{"id":"14620","type":"LinearScale"}},"id":"14613","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"14645","type":"ColumnDataSource"},"glyph":{"id":"14646","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14647","type":"Annulus"},"selection_glyph":null,"view":{"id":"14649","type":"CDSView"}},"id":"14648","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"14656","type":"Selection"},"selection_policy":{"id":"14657","type":"UnionRenderers"}},"id":"14645","type":"ColumnDataSource"},{"attributes":{},"id":"14620","type":"LinearScale"},{"attributes":{"source":{"id":"14645","type":"ColumnDataSource"}},"id":"14649","type":"CDSView"},{"attributes":{},"id":"14632","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14658","type":"BoxAnnotation"},{"attributes":{},"id":"14623","type":"BasicTicker"},{"attributes":{"text":""},"id":"14650","type":"Title"},{"attributes":{"callback":null},"id":"14616","type":"DataRange1d"},{"attributes":{},"id":"14633","type":"WheelZoomTool"},{"attributes":{},"id":"14657","type":"UnionRenderers"},{"attributes":{},"id":"14635","type":"SaveTool"},{"attributes":{"overlay":{"id":"14658","type":"BoxAnnotation"}},"id":"14634","type":"BoxZoomTool"},{"attributes":{},"id":"14652","type":"BasicTickFormatter"},{"attributes":{},"id":"14636","type":"ResetTool"},{"attributes":{"ticker":{"id":"14623","type":"BasicTicker"}},"id":"14626","type":"Grid"},{"attributes":{},"id":"14656","type":"Selection"},{"attributes":{"formatter":{"id":"14652","type":"BasicTickFormatter"},"ticker":{"id":"14628","type":"BasicTicker"}},"id":"14627","type":"LinearAxis"},{"attributes":{},"id":"14637","type":"HelpTool"},{"attributes":{"callback":null},"id":"14614","type":"DataRange1d"},{"attributes":{},"id":"14628","type":"BasicTicker"}],"root_ids":["14613"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"81060974-0872-40b5-9dd1-b70f187d4b9b","roots":{"14613":"e21c392e-5586-4671-80de-3f2bd5752aa0"}}];
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