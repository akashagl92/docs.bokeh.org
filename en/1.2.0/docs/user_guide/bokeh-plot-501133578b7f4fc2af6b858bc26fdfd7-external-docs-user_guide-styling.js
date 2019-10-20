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
      };var element = document.getElementById("a31691a4-821b-4691-9442-afb9c9f2f107");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a31691a4-821b-4691-9442-afb9c9f2f107' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"40b6b5a2-63c0-4a14-adde-fd6232fd0f3f":{"roots":{"references":[{"attributes":{},"id":"33711","type":"Selection"},{"attributes":{},"id":"33688","type":"BasicTicker"},{"attributes":{"text":"Select and Zoom"},"id":"33672","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"33715","type":"PolyAnnotation"},{"attributes":{},"id":"33709","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"33674","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"33711","type":"Selection"},"selection_policy":{"id":"33712","type":"UnionRenderers"}},"id":"33701","type":"ColumnDataSource"},{"attributes":{},"id":"33707","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"33676","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"33713","type":"BoxAnnotation"}},"id":"33692","type":"BoxSelectTool"},{"attributes":{"source":{"id":"33701","type":"ColumnDataSource"}},"id":"33705","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"33688","type":"BasicTicker"}},"id":"33691","type":"Grid"},{"attributes":{},"id":"33678","type":"LinearScale"},{"attributes":{"overlay":{"id":"33714","type":"BoxAnnotation"}},"id":"33693","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33692","type":"BoxSelectTool"},{"id":"33693","type":"BoxZoomTool"},{"id":"33694","type":"LassoSelectTool"},{"id":"33695","type":"ResetTool"}]},"id":"33696","type":"Toolbar"},{"attributes":{"data_source":{"id":"33701","type":"ColumnDataSource"},"glyph":{"id":"33702","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33703","type":"Circle"},"selection_glyph":null,"view":{"id":"33705","type":"CDSView"}},"id":"33704","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"33703","type":"Circle"},{"attributes":{},"id":"33680","type":"LinearScale"},{"attributes":{"formatter":{"id":"33709","type":"BasicTickFormatter"},"ticker":{"id":"33683","type":"BasicTicker"}},"id":"33682","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"33702","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33714","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"33715","type":"PolyAnnotation"}},"id":"33694","type":"LassoSelectTool"},{"attributes":{"ticker":{"id":"33683","type":"BasicTicker"}},"id":"33686","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33713","type":"BoxAnnotation"},{"attributes":{},"id":"33695","type":"ResetTool"},{"attributes":{"formatter":{"id":"33707","type":"BasicTickFormatter"},"ticker":{"id":"33688","type":"BasicTicker"}},"id":"33687","type":"LinearAxis"},{"attributes":{"below":[{"id":"33682","type":"LinearAxis"}],"center":[{"id":"33686","type":"Grid"},{"id":"33691","type":"Grid"}],"left":[{"id":"33687","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"33704","type":"GlyphRenderer"}],"title":{"id":"33672","type":"Title"},"toolbar":{"id":"33696","type":"Toolbar"},"x_range":{"id":"33674","type":"DataRange1d"},"x_scale":{"id":"33678","type":"LinearScale"},"y_range":{"id":"33676","type":"DataRange1d"},"y_scale":{"id":"33680","type":"LinearScale"}},"id":"33671","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33712","type":"UnionRenderers"},{"attributes":{},"id":"33683","type":"BasicTicker"}],"root_ids":["33671"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"40b6b5a2-63c0-4a14-adde-fd6232fd0f3f","roots":{"33671":"a31691a4-821b-4691-9442-afb9c9f2f107"}}];
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