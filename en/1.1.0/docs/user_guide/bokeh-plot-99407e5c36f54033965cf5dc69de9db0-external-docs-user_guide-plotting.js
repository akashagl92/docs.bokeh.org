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
      };var element = document.getElementById("6d5cb5ae-ad42-455b-9220-171b2e415dd2");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6d5cb5ae-ad42-455b-9220-171b2e415dd2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8b0e73cd-ced7-4070-94bb-f850f03a687d":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"29628","type":"Circle"},{"attributes":{"formatter":{"id":"29634","type":"LogTickFormatter"},"ticker":{"id":"29604","type":"LogTicker"}},"id":"29603","type":"LogAxis"},{"attributes":{"source":{"id":"29626","type":"ColumnDataSource"}},"id":"29630","type":"CDSView"},{"attributes":{"overlay":{"id":"29641","type":"BoxAnnotation"}},"id":"29610","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"29636","type":"BasicTickFormatter"},"ticker":{"id":"29599","type":"BasicTicker"}},"id":"29598","type":"LinearAxis"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"29622","type":"Line"},{"attributes":{"callback":null},"id":"29592","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"29638","type":"Selection"},"selection_policy":{"id":"29637","type":"UnionRenderers"}},"id":"29621","type":"ColumnDataSource"},{"attributes":{},"id":"29640","type":"Selection"},{"attributes":{},"id":"29608","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29608","type":"PanTool"},{"id":"29609","type":"WheelZoomTool"},{"id":"29610","type":"BoxZoomTool"},{"id":"29611","type":"SaveTool"},{"id":"29612","type":"ResetTool"},{"id":"29613","type":"HelpTool"}]},"id":"29614","type":"Toolbar"},{"attributes":{"data_source":{"id":"29626","type":"ColumnDataSource"},"glyph":{"id":"29627","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29628","type":"Circle"},"selection_glyph":null,"view":{"id":"29630","type":"CDSView"}},"id":"29629","type":"GlyphRenderer"},{"attributes":{"num_minor_ticks":10},"id":"29604","type":"LogTicker"},{"attributes":{"ticker":null},"id":"29634","type":"LogTickFormatter"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"29627","type":"Circle"},{"attributes":{},"id":"29599","type":"BasicTicker"},{"attributes":{"text":""},"id":"29632","type":"Title"},{"attributes":{},"id":"29612","type":"ResetTool"},{"attributes":{"callback":null},"id":"29590","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"29623","type":"Line"},{"attributes":{},"id":"29637","type":"UnionRenderers"},{"attributes":{},"id":"29594","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"29640","type":"Selection"},"selection_policy":{"id":"29639","type":"UnionRenderers"}},"id":"29626","type":"ColumnDataSource"},{"attributes":{},"id":"29611","type":"SaveTool"},{"attributes":{"below":[{"id":"29598","type":"LinearAxis"}],"center":[{"id":"29602","type":"Grid"},{"id":"29607","type":"Grid"}],"left":[{"id":"29603","type":"LogAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29624","type":"GlyphRenderer"},{"id":"29629","type":"GlyphRenderer"}],"title":{"id":"29632","type":"Title"},"toolbar":{"id":"29614","type":"Toolbar"},"x_range":{"id":"29590","type":"DataRange1d"},"x_scale":{"id":"29594","type":"LinearScale"},"y_range":{"id":"29592","type":"DataRange1d"},"y_scale":{"id":"29596","type":"LogScale"}},"id":"29589","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"29613","type":"HelpTool"},{"attributes":{},"id":"29639","type":"UnionRenderers"},{"attributes":{},"id":"29638","type":"Selection"},{"attributes":{},"id":"29609","type":"WheelZoomTool"},{"attributes":{},"id":"29596","type":"LogScale"},{"attributes":{},"id":"29636","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"29621","type":"ColumnDataSource"}},"id":"29625","type":"CDSView"},{"attributes":{"ticker":{"id":"29599","type":"BasicTicker"}},"id":"29602","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29641","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"29621","type":"ColumnDataSource"},"glyph":{"id":"29622","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29623","type":"Line"},"selection_glyph":null,"view":{"id":"29625","type":"CDSView"}},"id":"29624","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"29604","type":"LogTicker"}},"id":"29607","type":"Grid"}],"root_ids":["29589"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"8b0e73cd-ced7-4070-94bb-f850f03a687d","roots":{"29589":"6d5cb5ae-ad42-455b-9220-171b2e415dd2"}}];
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