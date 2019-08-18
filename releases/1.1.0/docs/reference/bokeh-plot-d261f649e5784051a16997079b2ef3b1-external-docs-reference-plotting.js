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
      };var element = document.getElementById("bcaad964-56c5-4f27-969b-8b252c58a6c2");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'bcaad964-56c5-4f27-969b-8b252c58a6c2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5ff3660b-4e63-4f3a-9dd2-40224966dbf9":{"roots":{"references":[{"attributes":{},"id":"14307","type":"UnionRenderers"},{"attributes":{},"id":"14286","type":"SaveTool"},{"attributes":{"formatter":{"id":"14304","type":"BasicTickFormatter"},"ticker":{"id":"14279","type":"BasicTicker"}},"id":"14278","type":"LinearAxis"},{"attributes":{},"id":"14288","type":"HelpTool"},{"attributes":{},"id":"14284","type":"WheelZoomTool"},{"attributes":{},"id":"14283","type":"PanTool"},{"attributes":{"callback":null},"id":"14265","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[4,5,6]},"selected":{"id":"14308","type":"Selection"},"selection_policy":{"id":"14307","type":"UnionRenderers"}},"id":"14296","type":"ColumnDataSource"},{"attributes":{},"id":"14287","type":"ResetTool"},{"attributes":{"callback":null},"id":"14267","type":"DataRange1d"},{"attributes":{"below":[{"id":"14273","type":"LinearAxis"}],"center":[{"id":"14277","type":"Grid"},{"id":"14282","type":"Grid"}],"left":[{"id":"14278","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"14299","type":"GlyphRenderer"}],"title":{"id":"14302","type":"Title"},"toolbar":{"id":"14289","type":"Toolbar"},"x_range":{"id":"14265","type":"DataRange1d"},"x_scale":{"id":"14269","type":"LinearScale"},"y_range":{"id":"14267","type":"DataRange1d"},"y_scale":{"id":"14271","type":"LinearScale"}},"id":"14264","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14283","type":"PanTool"},{"id":"14284","type":"WheelZoomTool"},{"id":"14285","type":"BoxZoomTool"},{"id":"14286","type":"SaveTool"},{"id":"14287","type":"ResetTool"},{"id":"14288","type":"HelpTool"}]},"id":"14289","type":"Toolbar"},{"attributes":{},"id":"14279","type":"BasicTicker"},{"attributes":{},"id":"14271","type":"LinearScale"},{"attributes":{"source":{"id":"14296","type":"ColumnDataSource"}},"id":"14300","type":"CDSView"},{"attributes":{"data_source":{"id":"14296","type":"ColumnDataSource"},"glyph":{"id":"14297","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14298","type":"CircleCross"},"selection_glyph":null,"view":{"id":"14300","type":"CDSView"}},"id":"14299","type":"GlyphRenderer"},{"attributes":{"text":""},"id":"14302","type":"Title"},{"attributes":{},"id":"14308","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14309","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"14306","type":"BasicTickFormatter"},"ticker":{"id":"14274","type":"BasicTicker"}},"id":"14273","type":"LinearAxis"},{"attributes":{},"id":"14269","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"14279","type":"BasicTicker"}},"id":"14282","type":"Grid"},{"attributes":{"overlay":{"id":"14309","type":"BoxAnnotation"}},"id":"14285","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"14298","type":"CircleCross"},{"attributes":{},"id":"14304","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"14274","type":"BasicTicker"}},"id":"14277","type":"Grid"},{"attributes":{},"id":"14274","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"14297","type":"CircleCross"},{"attributes":{},"id":"14306","type":"BasicTickFormatter"}],"root_ids":["14264"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"5ff3660b-4e63-4f3a-9dd2-40224966dbf9","roots":{"14264":"bcaad964-56c5-4f27-969b-8b252c58a6c2"}}];
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