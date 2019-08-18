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
      };var element = document.getElementById("57c68552-96a4-4a01-82cf-eaaee09d4c21");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '57c68552-96a4-4a01-82cf-eaaee09d4c21' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"764c20ba-48b9-4af1-a85a-46592a1306bc":{"roots":{"references":[{"attributes":{},"id":"27725","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27748","type":"BoxAnnotation"},{"attributes":{},"id":"27713","type":"BasicTicker"},{"attributes":{},"id":"27747","type":"UnionRenderers"},{"attributes":{},"id":"27718","type":"BasicTicker"},{"attributes":{},"id":"27727","type":"HelpTool"},{"attributes":{"callback":null},"id":"27706","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"27718","type":"BasicTicker"}},"id":"27721","type":"Grid"},{"attributes":{},"id":"27708","type":"LinearScale"},{"attributes":{"callback":null},"id":"27704","type":"DataRange1d"},{"attributes":{},"id":"27746","type":"Selection"},{"attributes":{"formatter":{"id":"27742","type":"BasicTickFormatter"},"ticker":{"id":"27718","type":"BasicTicker"}},"id":"27717","type":"LinearAxis"},{"attributes":{},"id":"27726","type":"ResetTool"},{"attributes":{"text":""},"id":"27740","type":"Title"},{"attributes":{},"id":"27723","type":"WheelZoomTool"},{"attributes":{},"id":"27710","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27722","type":"PanTool"},{"id":"27723","type":"WheelZoomTool"},{"id":"27724","type":"BoxZoomTool"},{"id":"27725","type":"SaveTool"},{"id":"27726","type":"ResetTool"},{"id":"27727","type":"HelpTool"}]},"id":"27728","type":"Toolbar"},{"attributes":{},"id":"27722","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"27736","type":"Square"},{"attributes":{"data_source":{"id":"27735","type":"ColumnDataSource"},"glyph":{"id":"27736","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27737","type":"Square"},"selection_glyph":null,"view":{"id":"27739","type":"CDSView"}},"id":"27738","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"27712","type":"LinearAxis"}],"center":[{"id":"27716","type":"Grid"},{"id":"27721","type":"Grid"}],"left":[{"id":"27717","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"27738","type":"GlyphRenderer"}],"title":{"id":"27740","type":"Title"},"toolbar":{"id":"27728","type":"Toolbar"},"x_range":{"id":"27704","type":"DataRange1d"},"x_scale":{"id":"27708","type":"LinearScale"},"y_range":{"id":"27706","type":"DataRange1d"},"y_scale":{"id":"27710","type":"LinearScale"}},"id":"27703","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"27737","type":"Square"},{"attributes":{"formatter":{"id":"27744","type":"BasicTickFormatter"},"ticker":{"id":"27713","type":"BasicTicker"}},"id":"27712","type":"LinearAxis"},{"attributes":{},"id":"27744","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"27748","type":"BoxAnnotation"}},"id":"27724","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"27713","type":"BasicTicker"}},"id":"27716","type":"Grid"},{"attributes":{"source":{"id":"27735","type":"ColumnDataSource"}},"id":"27739","type":"CDSView"},{"attributes":{},"id":"27742","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"27746","type":"Selection"},"selection_policy":{"id":"27747","type":"UnionRenderers"}},"id":"27735","type":"ColumnDataSource"}],"root_ids":["27703"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"764c20ba-48b9-4af1-a85a-46592a1306bc","roots":{"27703":"57c68552-96a4-4a01-82cf-eaaee09d4c21"}}];
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