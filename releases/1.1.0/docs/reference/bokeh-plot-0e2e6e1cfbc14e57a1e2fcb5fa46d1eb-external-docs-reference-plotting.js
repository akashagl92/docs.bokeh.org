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
      };var element = document.getElementById("f26cc166-5f99-4fd9-8780-d92f5b10da2b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f26cc166-5f99-4fd9-8780-d92f5b10da2b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"081828ea-ce64-4983-9d65-613e5037ce18":{"roots":{"references":[{"attributes":{},"id":"16036","type":"BasicTickFormatter"},{"attributes":{},"id":"16016","type":"WheelZoomTool"},{"attributes":{},"id":"16020","type":"HelpTool"},{"attributes":{},"id":"16006","type":"BasicTicker"},{"attributes":{},"id":"16038","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"16041","type":"BoxAnnotation"}},"id":"16017","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"16006","type":"BasicTicker"}},"id":"16009","type":"Grid"},{"attributes":{"below":[{"id":"16005","type":"LinearAxis"}],"center":[{"id":"16009","type":"Grid"},{"id":"16014","type":"Grid"}],"left":[{"id":"16010","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16031","type":"GlyphRenderer"}],"title":{"id":"16034","type":"Title"},"toolbar":{"id":"16021","type":"Toolbar"},"x_range":{"id":"15997","type":"DataRange1d"},"x_scale":{"id":"16001","type":"LinearScale"},"y_range":{"id":"15999","type":"DataRange1d"},"y_scale":{"id":"16003","type":"LinearScale"}},"id":"15996","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"16018","type":"SaveTool"},{"attributes":{},"id":"16039","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"16036","type":"BasicTickFormatter"},"ticker":{"id":"16011","type":"BasicTicker"}},"id":"16010","type":"LinearAxis"},{"attributes":{},"id":"16040","type":"Selection"},{"attributes":{},"id":"16019","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"16030","type":"Segment"},{"attributes":{},"id":"16011","type":"BasicTicker"},{"attributes":{"callback":null},"id":"15997","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16015","type":"PanTool"},{"id":"16016","type":"WheelZoomTool"},{"id":"16017","type":"BoxZoomTool"},{"id":"16018","type":"SaveTool"},{"id":"16019","type":"ResetTool"},{"id":"16020","type":"HelpTool"}]},"id":"16021","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16041","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"16011","type":"BasicTicker"}},"id":"16014","type":"Grid"},{"attributes":{},"id":"16003","type":"LinearScale"},{"attributes":{"callback":null},"id":"15999","type":"DataRange1d"},{"attributes":{"source":{"id":"16028","type":"ColumnDataSource"}},"id":"16032","type":"CDSView"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"16029","type":"Segment"},{"attributes":{},"id":"16001","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x0":[1,2,3],"x1":[1,2,3],"y0":[1,2,3],"y1":[1.2,2.5,3.7]},"selected":{"id":"16040","type":"Selection"},"selection_policy":{"id":"16039","type":"UnionRenderers"}},"id":"16028","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"16028","type":"ColumnDataSource"},"glyph":{"id":"16029","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16030","type":"Segment"},"selection_glyph":null,"view":{"id":"16032","type":"CDSView"}},"id":"16031","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"16038","type":"BasicTickFormatter"},"ticker":{"id":"16006","type":"BasicTicker"}},"id":"16005","type":"LinearAxis"},{"attributes":{"text":""},"id":"16034","type":"Title"},{"attributes":{},"id":"16015","type":"PanTool"}],"root_ids":["15996"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"081828ea-ce64-4983-9d65-613e5037ce18","roots":{"15996":"f26cc166-5f99-4fd9-8780-d92f5b10da2b"}}];
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