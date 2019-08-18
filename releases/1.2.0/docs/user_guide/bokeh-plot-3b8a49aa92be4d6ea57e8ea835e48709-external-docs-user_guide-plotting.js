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
      };var element = document.getElementById("fdcd8138-1b35-490a-a882-5d5d696e4b9c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'fdcd8138-1b35-490a-a882-5d5d696e4b9c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8bcd3af2-01a1-4d20-ba56-392e4244236d":{"roots":{"references":[{"attributes":{"callback":null},"id":"29896","type":"DataRange1d"},{"attributes":{},"id":"29903","type":"BasicTicker"},{"attributes":{},"id":"29932","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"29925","type":"ColumnDataSource"},"glyph":{"id":"29926","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29927","type":"Ray"},"selection_glyph":null,"view":{"id":"29929","type":"CDSView"}},"id":"29928","type":"GlyphRenderer"},{"attributes":{"source":{"id":"29925","type":"ColumnDataSource"}},"id":"29929","type":"CDSView"},{"attributes":{},"id":"29917","type":"HelpTool"},{"attributes":{},"id":"29908","type":"BasicTicker"},{"attributes":{},"id":"29898","type":"LinearScale"},{"attributes":{},"id":"29934","type":"BasicTickFormatter"},{"attributes":{},"id":"29913","type":"WheelZoomTool"},{"attributes":{"text":""},"id":"29930","type":"Title"},{"attributes":{},"id":"29915","type":"SaveTool"},{"attributes":{},"id":"29900","type":"LinearScale"},{"attributes":{"below":[{"id":"29902","type":"LinearAxis"}],"center":[{"id":"29906","type":"Grid"},{"id":"29911","type":"Grid"}],"left":[{"id":"29907","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29928","type":"GlyphRenderer"}],"title":{"id":"29930","type":"Title"},"toolbar":{"id":"29918","type":"Toolbar"},"x_range":{"id":"29894","type":"DataRange1d"},"x_scale":{"id":"29898","type":"LinearScale"},"y_range":{"id":"29896","type":"DataRange1d"},"y_scale":{"id":"29900","type":"LinearScale"}},"id":"29893","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"ticker":{"id":"29908","type":"BasicTicker"}},"id":"29911","type":"Grid"},{"attributes":{"formatter":{"id":"29932","type":"BasicTickFormatter"},"ticker":{"id":"29908","type":"BasicTicker"}},"id":"29907","type":"LinearAxis"},{"attributes":{},"id":"29936","type":"Selection"},{"attributes":{"callback":null,"data":{"angle":[30,45,60],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"29936","type":"Selection"},"selection_policy":{"id":"29937","type":"UnionRenderers"}},"id":"29925","type":"ColumnDataSource"},{"attributes":{"ticker":{"id":"29903","type":"BasicTicker"}},"id":"29906","type":"Grid"},{"attributes":{"formatter":{"id":"29934","type":"BasicTickFormatter"},"ticker":{"id":"29903","type":"BasicTicker"}},"id":"29902","type":"LinearAxis"},{"attributes":{"callback":null},"id":"29894","type":"DataRange1d"},{"attributes":{"overlay":{"id":"29938","type":"BoxAnnotation"}},"id":"29914","type":"BoxZoomTool"},{"attributes":{},"id":"29916","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29938","type":"BoxAnnotation"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"29927","type":"Ray"},{"attributes":{},"id":"29912","type":"PanTool"},{"attributes":{},"id":"29937","type":"UnionRenderers"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"29926","type":"Ray"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29912","type":"PanTool"},{"id":"29913","type":"WheelZoomTool"},{"id":"29914","type":"BoxZoomTool"},{"id":"29915","type":"SaveTool"},{"id":"29916","type":"ResetTool"},{"id":"29917","type":"HelpTool"}]},"id":"29918","type":"Toolbar"}],"root_ids":["29893"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"8bcd3af2-01a1-4d20-ba56-392e4244236d","roots":{"29893":"fdcd8138-1b35-490a-a882-5d5d696e4b9c"}}];
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