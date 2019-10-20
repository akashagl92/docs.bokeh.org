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
      };var element = document.getElementById("80cf2e2c-c0fc-4e2d-a1c5-127445bd204f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '80cf2e2c-c0fc-4e2d-a1c5-127445bd204f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9e7237f3-bf7c-473e-bfee-f71f68c2aa11":{"roots":{"references":[{"attributes":{"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"27985","type":"MultiLine"},{"attributes":{"overlay":{"id":"27997","type":"BoxAnnotation"}},"id":"27973","type":"BoxZoomTool"},{"attributes":{},"id":"27957","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"27967","type":"BasicTicker"}},"id":"27970","type":"Grid"},{"attributes":{"callback":null,"data":{"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]},"selected":{"id":"27995","type":"Selection"},"selection_policy":{"id":"27996","type":"UnionRenderers"}},"id":"27984","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27971","type":"PanTool"},{"id":"27972","type":"WheelZoomTool"},{"id":"27973","type":"BoxZoomTool"},{"id":"27974","type":"SaveTool"},{"id":"27975","type":"ResetTool"},{"id":"27976","type":"HelpTool"}]},"id":"27977","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"27986","type":"MultiLine"},{"attributes":{},"id":"27959","type":"LinearScale"},{"attributes":{},"id":"27996","type":"UnionRenderers"},{"attributes":{},"id":"27971","type":"PanTool"},{"attributes":{},"id":"27976","type":"HelpTool"},{"attributes":{"formatter":{"id":"27991","type":"BasicTickFormatter"},"ticker":{"id":"27967","type":"BasicTicker"}},"id":"27966","type":"LinearAxis"},{"attributes":{},"id":"27993","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"27955","type":"DataRange1d"},{"attributes":{"text":""},"id":"27989","type":"Title"},{"attributes":{},"id":"27991","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"27962","type":"BasicTicker"}},"id":"27965","type":"Grid"},{"attributes":{},"id":"27972","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"27961","type":"LinearAxis"}],"center":[{"id":"27965","type":"Grid"},{"id":"27970","type":"Grid"}],"left":[{"id":"27966","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"27987","type":"GlyphRenderer"}],"title":{"id":"27989","type":"Title"},"toolbar":{"id":"27977","type":"Toolbar"},"x_range":{"id":"27953","type":"DataRange1d"},"x_scale":{"id":"27957","type":"LinearScale"},"y_range":{"id":"27955","type":"DataRange1d"},"y_scale":{"id":"27959","type":"LinearScale"}},"id":"27952","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27995","type":"Selection"},{"attributes":{},"id":"27962","type":"BasicTicker"},{"attributes":{},"id":"27975","type":"ResetTool"},{"attributes":{"formatter":{"id":"27993","type":"BasicTickFormatter"},"ticker":{"id":"27962","type":"BasicTicker"}},"id":"27961","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27997","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"27984","type":"ColumnDataSource"},"glyph":{"id":"27985","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27986","type":"MultiLine"},"selection_glyph":null,"view":{"id":"27988","type":"CDSView"}},"id":"27987","type":"GlyphRenderer"},{"attributes":{"source":{"id":"27984","type":"ColumnDataSource"}},"id":"27988","type":"CDSView"},{"attributes":{"callback":null},"id":"27953","type":"DataRange1d"},{"attributes":{},"id":"27967","type":"BasicTicker"},{"attributes":{},"id":"27974","type":"SaveTool"}],"root_ids":["27952"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"9e7237f3-bf7c-473e-bfee-f71f68c2aa11","roots":{"27952":"80cf2e2c-c0fc-4e2d-a1c5-127445bd204f"}}];
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