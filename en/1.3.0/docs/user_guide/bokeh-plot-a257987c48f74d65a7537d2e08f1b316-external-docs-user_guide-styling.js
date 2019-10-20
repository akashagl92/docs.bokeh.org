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
      };var element = document.getElementById("a5d845a8-2dc0-4877-97d5-81593d8704d3");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a5d845a8-2dc0-4877-97d5-81593d8704d3' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"ed0044ce-fa4c-44b6-9351-1d0c4dcd8f2b":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33737","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"33738","type":"BoxAnnotation"}},"id":"33719","type":"BoxZoomTool"},{"attributes":{},"id":"33740","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"33729","type":"Circle"},{"attributes":{"formatter":{"id":"33736","type":"BasicTickFormatter"},"ticker":{"id":"33714","type":"BasicTicker"}},"id":"33713","type":"LinearAxis"},{"attributes":{"formatter":{"id":"33734","type":"BasicTickFormatter"},"ticker":{"id":"33709","type":"BasicTicker"}},"id":"33708","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33738","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"33739","type":"PolyAnnotation"}},"id":"33720","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"33739","type":"PolyAnnotation"},{"attributes":{"ticker":{"id":"33709","type":"BasicTicker"}},"id":"33712","type":"Grid"},{"attributes":{},"id":"33721","type":"ResetTool"},{"attributes":{"below":[{"id":"33708","type":"LinearAxis"}],"center":[{"id":"33712","type":"Grid"},{"id":"33717","type":"Grid"}],"left":[{"id":"33713","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"33730","type":"GlyphRenderer"}],"title":{"id":"33698","type":"Title"},"toolbar":{"id":"33722","type":"Toolbar"},"x_range":{"id":"33700","type":"DataRange1d"},"x_scale":{"id":"33704","type":"LinearScale"},"y_range":{"id":"33702","type":"DataRange1d"},"y_scale":{"id":"33706","type":"LinearScale"}},"id":"33697","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33718","type":"BoxSelectTool"},{"id":"33719","type":"BoxZoomTool"},{"id":"33720","type":"LassoSelectTool"},{"id":"33721","type":"ResetTool"}]},"id":"33722","type":"Toolbar"},{"attributes":{},"id":"33709","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"33728","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"33737","type":"BoxAnnotation"}},"id":"33718","type":"BoxSelectTool"},{"attributes":{"text":"Select and Zoom"},"id":"33698","type":"Title"},{"attributes":{"data_source":{"id":"33727","type":"ColumnDataSource"},"glyph":{"id":"33728","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33729","type":"Circle"},"selection_glyph":null,"view":{"id":"33731","type":"CDSView"}},"id":"33730","type":"GlyphRenderer"},{"attributes":{},"id":"33741","type":"Selection"},{"attributes":{},"id":"33714","type":"BasicTicker"},{"attributes":{"callback":null},"id":"33700","type":"DataRange1d"},{"attributes":{},"id":"33736","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"33741","type":"Selection"},"selection_policy":{"id":"33740","type":"UnionRenderers"}},"id":"33727","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"33702","type":"DataRange1d"},{"attributes":{},"id":"33734","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"33714","type":"BasicTicker"}},"id":"33717","type":"Grid"},{"attributes":{},"id":"33704","type":"LinearScale"},{"attributes":{"source":{"id":"33727","type":"ColumnDataSource"}},"id":"33731","type":"CDSView"},{"attributes":{},"id":"33706","type":"LinearScale"}],"root_ids":["33697"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"ed0044ce-fa4c-44b6-9351-1d0c4dcd8f2b","roots":{"33697":"a5d845a8-2dc0-4877-97d5-81593d8704d3"}}];
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