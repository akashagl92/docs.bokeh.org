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
      };var element = document.getElementById("9afa1be9-bd9b-418b-bfcb-2ea9fc91beb7");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '9afa1be9-bd9b-418b-bfcb-2ea9fc91beb7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"90fa903a-83e9-4748-8ca8-7cbf2ad8eedb":{"roots":{"references":[{"attributes":{"formatter":{"id":"16202","type":"BasicTickFormatter"},"ticker":{"id":"16177","type":"BasicTicker"}},"id":"16176","type":"LinearAxis"},{"attributes":{"source":{"id":"16194","type":"ColumnDataSource"}},"id":"16198","type":"CDSView"},{"attributes":{"ticker":{"id":"16172","type":"BasicTicker"}},"id":"16175","type":"Grid"},{"attributes":{"data_source":{"id":"16194","type":"ColumnDataSource"},"glyph":{"id":"16195","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16196","type":"SquareCross"},"selection_glyph":null,"view":{"id":"16198","type":"CDSView"}},"id":"16197","type":"GlyphRenderer"},{"attributes":{},"id":"16172","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16181","type":"PanTool"},{"id":"16182","type":"WheelZoomTool"},{"id":"16183","type":"BoxZoomTool"},{"id":"16184","type":"SaveTool"},{"id":"16185","type":"ResetTool"},{"id":"16186","type":"HelpTool"}]},"id":"16187","type":"Toolbar"},{"attributes":{"below":[{"id":"16171","type":"LinearAxis"}],"center":[{"id":"16175","type":"Grid"},{"id":"16180","type":"Grid"}],"left":[{"id":"16176","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16197","type":"GlyphRenderer"}],"title":{"id":"16200","type":"Title"},"toolbar":{"id":"16187","type":"Toolbar"},"x_range":{"id":"16163","type":"DataRange1d"},"x_scale":{"id":"16167","type":"LinearScale"},"y_range":{"id":"16165","type":"DataRange1d"},"y_scale":{"id":"16169","type":"LinearScale"}},"id":"16162","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"16186","type":"HelpTool"},{"attributes":{"formatter":{"id":"16204","type":"BasicTickFormatter"},"ticker":{"id":"16172","type":"BasicTicker"}},"id":"16171","type":"LinearAxis"},{"attributes":{},"id":"16169","type":"LinearScale"},{"attributes":{},"id":"16205","type":"UnionRenderers"},{"attributes":{},"id":"16167","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"16177","type":"BasicTicker"}},"id":"16180","type":"Grid"},{"attributes":{"callback":null},"id":"16163","type":"DataRange1d"},{"attributes":{},"id":"16185","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16207","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7FC97F"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"16195","type":"SquareCross"},{"attributes":{},"id":"16184","type":"SaveTool"},{"attributes":{},"id":"16204","type":"BasicTickFormatter"},{"attributes":{},"id":"16206","type":"Selection"},{"attributes":{},"id":"16181","type":"PanTool"},{"attributes":{},"id":"16202","type":"BasicTickFormatter"},{"attributes":{},"id":"16182","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"16196","type":"SquareCross"},{"attributes":{"overlay":{"id":"16207","type":"BoxAnnotation"}},"id":"16183","type":"BoxZoomTool"},{"attributes":{"text":""},"id":"16200","type":"Title"},{"attributes":{"callback":null},"id":"16165","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"16206","type":"Selection"},"selection_policy":{"id":"16205","type":"UnionRenderers"}},"id":"16194","type":"ColumnDataSource"},{"attributes":{},"id":"16177","type":"BasicTicker"}],"root_ids":["16162"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"90fa903a-83e9-4748-8ca8-7cbf2ad8eedb","roots":{"16162":"9afa1be9-bd9b-418b-bfcb-2ea9fc91beb7"}}];
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