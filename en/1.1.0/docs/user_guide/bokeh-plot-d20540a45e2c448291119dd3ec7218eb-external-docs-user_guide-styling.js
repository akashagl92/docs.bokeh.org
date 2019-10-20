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
      };var element = document.getElementById("f2508889-12d3-4118-b3de-425ed4d53f73");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f2508889-12d3-4118-b3de-425ed4d53f73' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"328aa1d4-dc76-4772-b184-c37033b304ae":{"roots":{"references":[{"attributes":{"data_source":{"id":"30865","type":"ColumnDataSource"},"glyph":{"id":"30901","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30902","type":"Circle"},"selection_glyph":null,"view":{"id":"30904","type":"CDSView"}},"id":"30903","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"30878","type":"BasicTicker"}},"id":"30881","type":"Grid"},{"attributes":{},"id":"30887","type":"PanTool"},{"attributes":{},"id":"30878","type":"BasicTicker"},{"attributes":{},"id":"30888","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"30910","type":"BasicTickFormatter"},"ticker":{"id":"30878","type":"BasicTicker"}},"id":"30877","type":"LinearAxis"},{"attributes":{"overlay":{"id":"30915","type":"BoxAnnotation"}},"id":"30889","type":"BoxZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"30883","type":"BasicTicker"}},"id":"30886","type":"Grid"},{"attributes":{},"id":"30890","type":"SaveTool"},{"attributes":{},"id":"30908","type":"BasicTickFormatter"},{"attributes":{},"id":"30873","type":"LinearScale"},{"attributes":{"high":10,"low":1,"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"30864","type":"LinearColorMapper"},{"attributes":{},"id":"30891","type":"ResetTool"},{"attributes":{},"id":"30875","type":"LinearScale"},{"attributes":{"callback":null},"id":"30871","type":"DataRange1d"},{"attributes":{},"id":"30892","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5,7,8,9,10],"y":[1,2,3,4,5,7,8,9,10]},"selected":{"id":"30914","type":"Selection"},"selection_policy":{"id":"30913","type":"UnionRenderers"}},"id":"30865","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"30869","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30887","type":"PanTool"},{"id":"30888","type":"WheelZoomTool"},{"id":"30889","type":"BoxZoomTool"},{"id":"30890","type":"SaveTool"},{"id":"30891","type":"ResetTool"},{"id":"30892","type":"HelpTool"}]},"id":"30893","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30915","type":"BoxAnnotation"},{"attributes":{"source":{"id":"30865","type":"ColumnDataSource"}},"id":"30904","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":12},"x":{"field":"x"},"y":{"field":"y"}},"id":"30902","type":"Circle"},{"attributes":{"text":"Linear Color Map Based on Y"},"id":"30867","type":"Title"},{"attributes":{"color_mapper":{"id":"30864","type":"LinearColorMapper"},"formatter":{"id":"30912","type":"BasicTickFormatter"},"location":[0,0],"ticker":{"id":"30911","type":"BasicTicker"},"width":8},"id":"30905","type":"ColorBar"},{"attributes":{},"id":"30914","type":"Selection"},{"attributes":{"below":[{"id":"30877","type":"LinearAxis"}],"center":[{"id":"30881","type":"Grid"},{"id":"30886","type":"Grid"}],"left":[{"id":"30882","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"30903","type":"GlyphRenderer"}],"right":[{"id":"30905","type":"ColorBar"}],"title":{"id":"30867","type":"Title"},"toolbar":{"id":"30893","type":"Toolbar"},"x_range":{"id":"30869","type":"DataRange1d"},"x_scale":{"id":"30873","type":"LinearScale"},"y_range":{"id":"30871","type":"DataRange1d"},"y_scale":{"id":"30875","type":"LinearScale"}},"id":"30866","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"30913","type":"UnionRenderers"},{"attributes":{},"id":"30910","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"30908","type":"BasicTickFormatter"},"ticker":{"id":"30883","type":"BasicTicker"}},"id":"30882","type":"LinearAxis"},{"attributes":{},"id":"30911","type":"BasicTicker"},{"attributes":{},"id":"30883","type":"BasicTicker"},{"attributes":{},"id":"30912","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"y","transform":{"id":"30864","type":"LinearColorMapper"}},"line_color":{"field":"y","transform":{"id":"30864","type":"LinearColorMapper"}},"size":{"units":"screen","value":12},"x":{"field":"x"},"y":{"field":"y"}},"id":"30901","type":"Circle"}],"root_ids":["30866"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"328aa1d4-dc76-4772-b184-c37033b304ae","roots":{"30866":"f2508889-12d3-4118-b3de-425ed4d53f73"}}];
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