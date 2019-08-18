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
      };var element = document.getElementById("8d008488-0f3d-43ca-8be8-c208818f5cb3");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8d008488-0f3d-43ca-8be8-c208818f5cb3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"28ee1efb-2a15-493a-acc5-e853117fc8c0":{"roots":{"references":[{"attributes":{},"id":"14850","type":"LinearScale"},{"attributes":{"data_source":{"id":"14877","type":"ColumnDataSource"},"glyph":{"id":"14878","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14879","type":"HBar"},"selection_glyph":null,"view":{"id":"14881","type":"CDSView"}},"id":"14880","type":"GlyphRenderer"},{"attributes":{},"id":"14888","type":"UnionRenderers"},{"attributes":{},"id":"14864","type":"PanTool"},{"attributes":{"formatter":{"id":"14887","type":"BasicTickFormatter"},"ticker":{"id":"14855","type":"BasicTicker"}},"id":"14854","type":"LinearAxis"},{"attributes":{"text":""},"id":"14883","type":"Title"},{"attributes":{},"id":"14865","type":"WheelZoomTool"},{"attributes":{},"id":"14885","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"right":[1,2,3],"y":[1,2,3]},"selected":{"id":"14889","type":"Selection"},"selection_policy":{"id":"14888","type":"UnionRenderers"}},"id":"14877","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"14890","type":"BoxAnnotation"}},"id":"14866","type":"BoxZoomTool"},{"attributes":{},"id":"14855","type":"BasicTicker"},{"attributes":{},"id":"14887","type":"BasicTickFormatter"},{"attributes":{},"id":"14867","type":"SaveTool"},{"attributes":{"below":[{"id":"14854","type":"LinearAxis"}],"center":[{"id":"14858","type":"Grid"},{"id":"14863","type":"Grid"}],"left":[{"id":"14859","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"14880","type":"GlyphRenderer"}],"title":{"id":"14883","type":"Title"},"toolbar":{"id":"14870","type":"Toolbar"},"x_range":{"id":"14846","type":"DataRange1d"},"x_scale":{"id":"14850","type":"LinearScale"},"y_range":{"id":"14848","type":"DataRange1d"},"y_scale":{"id":"14852","type":"LinearScale"}},"id":"14845","subtype":"Figure","type":"Plot"},{"attributes":{"ticker":{"id":"14855","type":"BasicTicker"}},"id":"14858","type":"Grid"},{"attributes":{},"id":"14868","type":"ResetTool"},{"attributes":{"formatter":{"id":"14885","type":"BasicTickFormatter"},"ticker":{"id":"14860","type":"BasicTicker"}},"id":"14859","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"14879","type":"HBar"},{"attributes":{},"id":"14869","type":"HelpTool"},{"attributes":{"callback":null},"id":"14846","type":"DataRange1d"},{"attributes":{},"id":"14860","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14864","type":"PanTool"},{"id":"14865","type":"WheelZoomTool"},{"id":"14866","type":"BoxZoomTool"},{"id":"14867","type":"SaveTool"},{"id":"14868","type":"ResetTool"},{"id":"14869","type":"HelpTool"}]},"id":"14870","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"14860","type":"BasicTicker"}},"id":"14863","type":"Grid"},{"attributes":{},"id":"14852","type":"LinearScale"},{"attributes":{"callback":null},"id":"14848","type":"DataRange1d"},{"attributes":{"source":{"id":"14877","type":"ColumnDataSource"}},"id":"14881","type":"CDSView"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"value":0.5},"line_color":{"value":"#CAB2D6"},"right":{"field":"right"},"y":{"field":"y"}},"id":"14878","type":"HBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14890","type":"BoxAnnotation"},{"attributes":{},"id":"14889","type":"Selection"}],"root_ids":["14845"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"28ee1efb-2a15-493a-acc5-e853117fc8c0","roots":{"14845":"8d008488-0f3d-43ca-8be8-c208818f5cb3"}}];
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