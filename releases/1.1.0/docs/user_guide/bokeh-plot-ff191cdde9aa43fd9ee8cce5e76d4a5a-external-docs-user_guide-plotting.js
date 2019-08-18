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
      };var element = document.getElementById("1ed7484d-dd64-46d0-97d8-0e8a184325ba");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '1ed7484d-dd64-46d0-97d8-0e8a184325ba' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9fa68331-efb0-4628-9ab1-5f708e7e40fd":{"roots":{"references":[{"attributes":{"callback":null},"id":"28934","type":"DataRange1d"},{"attributes":{},"id":"28955","type":"SaveTool"},{"attributes":{"dimension":1,"ticker":{"id":"28948","type":"BasicTicker"}},"id":"28951","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28952","type":"PanTool"},{"id":"28953","type":"WheelZoomTool"},{"id":"28954","type":"BoxZoomTool"},{"id":"28955","type":"SaveTool"},{"id":"28956","type":"ResetTool"},{"id":"28957","type":"HelpTool"}]},"id":"28958","type":"Toolbar"},{"attributes":{"data_source":{"id":"28965","type":"ColumnDataSource"},"glyph":{"id":"28966","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28967","type":"Wedge"},"selection_glyph":null,"view":{"id":"28969","type":"CDSView"}},"id":"28968","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"28973","type":"BasicTickFormatter"},"ticker":{"id":"28948","type":"BasicTicker"}},"id":"28947","type":"LinearAxis"},{"attributes":{"overlay":{"id":"28978","type":"BoxAnnotation"}},"id":"28954","type":"BoxZoomTool"},{"attributes":{"text":""},"id":"28971","type":"Title"},{"attributes":{},"id":"28976","type":"UnionRenderers"},{"attributes":{"source":{"id":"28965","type":"ColumnDataSource"}},"id":"28969","type":"CDSView"},{"attributes":{},"id":"28943","type":"BasicTicker"},{"attributes":{},"id":"28957","type":"HelpTool"},{"attributes":{},"id":"28973","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"28975","type":"BasicTickFormatter"},"ticker":{"id":"28943","type":"BasicTicker"}},"id":"28942","type":"LinearAxis"},{"attributes":{},"id":"28977","type":"Selection"},{"attributes":{},"id":"28938","type":"LinearScale"},{"attributes":{"ticker":{"id":"28943","type":"BasicTicker"}},"id":"28946","type":"Grid"},{"attributes":{},"id":"28953","type":"WheelZoomTool"},{"attributes":{},"id":"28956","type":"ResetTool"},{"attributes":{"below":[{"id":"28942","type":"LinearAxis"}],"center":[{"id":"28946","type":"Grid"},{"id":"28951","type":"Grid"}],"left":[{"id":"28947","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28968","type":"GlyphRenderer"}],"title":{"id":"28971","type":"Title"},"toolbar":{"id":"28958","type":"Toolbar"},"x_range":{"id":"28934","type":"DataRange1d"},"x_scale":{"id":"28938","type":"LinearScale"},"y_range":{"id":"28936","type":"DataRange1d"},"y_scale":{"id":"28940","type":"LinearScale"}},"id":"28933","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"28975","type":"BasicTickFormatter"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"28967","type":"Wedge"},{"attributes":{},"id":"28952","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28978","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"28936","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"28977","type":"Selection"},"selection_policy":{"id":"28976","type":"UnionRenderers"}},"id":"28965","type":"ColumnDataSource"},{"attributes":{},"id":"28948","type":"BasicTicker"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.6},"line_color":{"value":"firebrick"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"28966","type":"Wedge"},{"attributes":{},"id":"28940","type":"LinearScale"}],"root_ids":["28933"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"9fa68331-efb0-4628-9ab1-5f708e7e40fd","roots":{"28933":"1ed7484d-dd64-46d0-97d8-0e8a184325ba"}}];
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