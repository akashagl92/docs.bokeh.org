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
      };var element = document.getElementById("b4781297-73aa-475f-9986-1c4b5e50c0bb");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b4781297-73aa-475f-9986-1c4b5e50c0bb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3acb673e-65d3-40d6-a055-c9deab713c21":{"roots":{"references":[{"attributes":{"dimension":1,"ticker":{"id":"28050","type":"BasicTicker"}},"id":"28053","type":"Grid"},{"attributes":{"source":{"id":"28067","type":"ColumnDataSource"}},"id":"28071","type":"CDSView"},{"attributes":{"callback":null},"id":"28038","type":"DataRange1d"},{"attributes":{},"id":"28054","type":"PanTool"},{"attributes":{},"id":"28074","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"28036","type":"DataRange1d"},{"attributes":{},"id":"28059","type":"HelpTool"},{"attributes":{},"id":"28042","type":"LinearScale"},{"attributes":{},"id":"28076","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28080","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"28076","type":"BasicTickFormatter"},"ticker":{"id":"28045","type":"BasicTicker"}},"id":"28044","type":"LinearAxis"},{"attributes":{},"id":"28079","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"28069","type":"Line"},{"attributes":{},"id":"28050","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"28068","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28054","type":"PanTool"},{"id":"28055","type":"WheelZoomTool"},{"id":"28056","type":"BoxZoomTool"},{"id":"28057","type":"SaveTool"},{"id":"28058","type":"ResetTool"},{"id":"28059","type":"HelpTool"}]},"id":"28060","type":"Toolbar"},{"attributes":{"text":""},"id":"28072","type":"Title"},{"attributes":{},"id":"28058","type":"ResetTool"},{"attributes":{},"id":"28078","type":"Selection"},{"attributes":{"ticker":{"id":"28045","type":"BasicTicker"}},"id":"28048","type":"Grid"},{"attributes":{"overlay":{"id":"28080","type":"BoxAnnotation"}},"id":"28056","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"28074","type":"BasicTickFormatter"},"ticker":{"id":"28050","type":"BasicTicker"}},"id":"28049","type":"LinearAxis"},{"attributes":{"below":[{"id":"28044","type":"LinearAxis"}],"center":[{"id":"28048","type":"Grid"},{"id":"28053","type":"Grid"}],"left":[{"id":"28049","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28070","type":"GlyphRenderer"}],"title":{"id":"28072","type":"Title"},"toolbar":{"id":"28060","type":"Toolbar"},"x_range":{"id":"28036","type":"DataRange1d"},"x_scale":{"id":"28040","type":"LinearScale"},"y_range":{"id":"28038","type":"DataRange1d"},"y_scale":{"id":"28042","type":"LinearScale"}},"id":"28035","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"28045","type":"BasicTicker"},{"attributes":{},"id":"28040","type":"LinearScale"},{"attributes":{},"id":"28057","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,"NaN",4,5],"y":[6,7,2,4,4,5]},"selected":{"id":"28078","type":"Selection"},"selection_policy":{"id":"28079","type":"UnionRenderers"}},"id":"28067","type":"ColumnDataSource"},{"attributes":{},"id":"28055","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"28067","type":"ColumnDataSource"},"glyph":{"id":"28068","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28069","type":"Line"},"selection_glyph":null,"view":{"id":"28071","type":"CDSView"}},"id":"28070","type":"GlyphRenderer"}],"root_ids":["28035"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"3acb673e-65d3-40d6-a055-c9deab713c21","roots":{"28035":"b4781297-73aa-475f-9986-1c4b5e50c0bb"}}];
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