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
      };var element = document.getElementById("a0d1729f-9ae0-4143-811b-078bfadbfaa8");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a0d1729f-9ae0-4143-811b-078bfadbfaa8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"257cc040-8cda-4549-bd22-4a8382bae8fe":{"roots":{"references":[{"attributes":{},"id":"14652","type":"PanTool"},{"attributes":{"below":[{"id":"14642","type":"LinearAxis"}],"center":[{"id":"14646","type":"Grid"},{"id":"14651","type":"Grid"}],"left":[{"id":"14647","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"14668","type":"GlyphRenderer"}],"title":{"id":"14671","type":"Title"},"toolbar":{"id":"14658","type":"Toolbar"},"x_range":{"id":"14634","type":"DataRange1d"},"x_scale":{"id":"14638","type":"LinearScale"},"y_range":{"id":"14636","type":"DataRange1d"},"y_scale":{"id":"14640","type":"LinearScale"}},"id":"14633","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14675","type":"BasicTickFormatter"},{"attributes":{},"id":"14653","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"14676","type":"BoxAnnotation"}},"id":"14654","type":"BoxZoomTool"},{"attributes":{},"id":"14655","type":"SaveTool"},{"attributes":{},"id":"14643","type":"BasicTicker"},{"attributes":{"text":""},"id":"14671","type":"Title"},{"attributes":{},"id":"14678","type":"Selection"},{"attributes":{"ticker":{"id":"14643","type":"BasicTicker"}},"id":"14646","type":"Grid"},{"attributes":{},"id":"14656","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14676","type":"BoxAnnotation"},{"attributes":{},"id":"14677","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"14675","type":"BasicTickFormatter"},"ticker":{"id":"14648","type":"BasicTicker"}},"id":"14647","type":"LinearAxis"},{"attributes":{},"id":"14657","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.2},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"14667","type":"Annulus"},{"attributes":{},"id":"14648","type":"BasicTicker"},{"attributes":{"callback":null},"id":"14634","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14652","type":"PanTool"},{"id":"14653","type":"WheelZoomTool"},{"id":"14654","type":"BoxZoomTool"},{"id":"14655","type":"SaveTool"},{"id":"14656","type":"ResetTool"},{"id":"14657","type":"HelpTool"}]},"id":"14658","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"14648","type":"BasicTicker"}},"id":"14651","type":"Grid"},{"attributes":{},"id":"14640","type":"LinearScale"},{"attributes":{"source":{"id":"14665","type":"ColumnDataSource"}},"id":"14669","type":"CDSView"},{"attributes":{"callback":null},"id":"14636","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#7FC97F"},"inner_radius":{"units":"data","value":0.2},"line_color":{"value":"#7FC97F"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"14666","type":"Annulus"},{"attributes":{},"id":"14638","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"14678","type":"Selection"},"selection_policy":{"id":"14677","type":"UnionRenderers"}},"id":"14665","type":"ColumnDataSource"},{"attributes":{},"id":"14673","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"14665","type":"ColumnDataSource"},"glyph":{"id":"14666","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14667","type":"Annulus"},"selection_glyph":null,"view":{"id":"14669","type":"CDSView"}},"id":"14668","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"14673","type":"BasicTickFormatter"},"ticker":{"id":"14643","type":"BasicTicker"}},"id":"14642","type":"LinearAxis"}],"root_ids":["14633"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"257cc040-8cda-4549-bd22-4a8382bae8fe","roots":{"14633":"a0d1729f-9ae0-4143-811b-078bfadbfaa8"}}];
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