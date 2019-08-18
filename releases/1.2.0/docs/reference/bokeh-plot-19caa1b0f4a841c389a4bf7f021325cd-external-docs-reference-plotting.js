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
      };var element = document.getElementById("b6372f64-6ba3-4af8-b967-4b72d4cda2a7");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b6372f64-6ba3-4af8-b967-4b72d4cda2a7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"71235605-f32f-4e1a-b06a-5b0060564344":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14881","type":"PanTool"},{"id":"14882","type":"WheelZoomTool"},{"id":"14883","type":"BoxZoomTool"},{"id":"14884","type":"SaveTool"},{"id":"14885","type":"ResetTool"},{"id":"14886","type":"HelpTool"}]},"id":"14887","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"14877","type":"BasicTicker"}},"id":"14880","type":"Grid"},{"attributes":{"data_source":{"id":"14894","type":"ColumnDataSource"},"glyph":{"id":"14895","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14896","type":"CircleCross"},"selection_glyph":null,"view":{"id":"14898","type":"CDSView"}},"id":"14897","type":"GlyphRenderer"},{"attributes":{},"id":"14869","type":"LinearScale"},{"attributes":{"callback":null},"id":"14865","type":"DataRange1d"},{"attributes":{},"id":"14886","type":"HelpTool"},{"attributes":{"source":{"id":"14894","type":"ColumnDataSource"}},"id":"14898","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"14895","type":"CircleCross"},{"attributes":{},"id":"14867","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[4,5,6]},"selected":{"id":"14905","type":"Selection"},"selection_policy":{"id":"14906","type":"UnionRenderers"}},"id":"14894","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14907","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"14903","type":"BasicTickFormatter"},"ticker":{"id":"14872","type":"BasicTicker"}},"id":"14871","type":"LinearAxis"},{"attributes":{"text":""},"id":"14899","type":"Title"},{"attributes":{},"id":"14881","type":"PanTool"},{"attributes":{},"id":"14901","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"14907","type":"BoxAnnotation"}},"id":"14883","type":"BoxZoomTool"},{"attributes":{},"id":"14882","type":"WheelZoomTool"},{"attributes":{},"id":"14872","type":"BasicTicker"},{"attributes":{},"id":"14903","type":"BasicTickFormatter"},{"attributes":{},"id":"14884","type":"SaveTool"},{"attributes":{},"id":"14885","type":"ResetTool"},{"attributes":{"ticker":{"id":"14872","type":"BasicTicker"}},"id":"14875","type":"Grid"},{"attributes":{"below":[{"id":"14871","type":"LinearAxis"}],"center":[{"id":"14875","type":"Grid"},{"id":"14880","type":"Grid"}],"left":[{"id":"14876","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"14897","type":"GlyphRenderer"}],"title":{"id":"14899","type":"Title"},"toolbar":{"id":"14887","type":"Toolbar"},"x_range":{"id":"14863","type":"DataRange1d"},"x_scale":{"id":"14867","type":"LinearScale"},"y_range":{"id":"14865","type":"DataRange1d"},"y_scale":{"id":"14869","type":"LinearScale"}},"id":"14862","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14905","type":"Selection"},{"attributes":{"formatter":{"id":"14901","type":"BasicTickFormatter"},"ticker":{"id":"14877","type":"BasicTicker"}},"id":"14876","type":"LinearAxis"},{"attributes":{},"id":"14906","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"14896","type":"CircleCross"},{"attributes":{},"id":"14877","type":"BasicTicker"},{"attributes":{"callback":null},"id":"14863","type":"DataRange1d"}],"root_ids":["14862"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"71235605-f32f-4e1a-b06a-5b0060564344","roots":{"14862":"b6372f64-6ba3-4af8-b967-4b72d4cda2a7"}}];
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