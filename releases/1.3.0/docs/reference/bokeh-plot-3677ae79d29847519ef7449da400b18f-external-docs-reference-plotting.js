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
      };var element = document.getElementById("4dae9223-ff2b-43dc-87b9-35a400e8a6ee");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '4dae9223-ff2b-43dc-87b9-35a400e8a6ee' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
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
                    
                  var docs_json = '{"4ef6e77d-d8e5-4d59-b66f-f7a18241cb72":{"roots":{"references":[{"attributes":{"dimension":1,"ticker":{"id":"16712","type":"BasicTicker"}},"id":"16715","type":"Grid"},{"attributes":{"below":[{"id":"16706","type":"LinearAxis"}],"center":[{"id":"16710","type":"Grid"},{"id":"16715","type":"Grid"}],"left":[{"id":"16711","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16732","type":"GlyphRenderer"}],"title":{"id":"16735","type":"Title"},"toolbar":{"id":"16722","type":"Toolbar"},"x_range":{"id":"16698","type":"DataRange1d"},"x_scale":{"id":"16702","type":"LinearScale"},"y_range":{"id":"16700","type":"DataRange1d"},"y_scale":{"id":"16704","type":"LinearScale"}},"id":"16697","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16716","type":"PanTool"},{"id":"16717","type":"WheelZoomTool"},{"id":"16718","type":"BoxZoomTool"},{"id":"16719","type":"SaveTool"},{"id":"16720","type":"ResetTool"},{"id":"16721","type":"HelpTool"}]},"id":"16722","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"16731","type":"Segment"},{"attributes":{"callback":null},"id":"16698","type":"DataRange1d"},{"attributes":{},"id":"16721","type":"HelpTool"},{"attributes":{"source":{"id":"16729","type":"ColumnDataSource"}},"id":"16733","type":"CDSView"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"16730","type":"Segment"},{"attributes":{"callback":null,"data":{"x0":[1,2,3],"x1":[1,2,3],"y0":[1,2,3],"y1":[1.2,2.5,3.7]},"selected":{"id":"16742","type":"Selection"},"selection_policy":{"id":"16741","type":"UnionRenderers"}},"id":"16729","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"16729","type":"ColumnDataSource"},"glyph":{"id":"16730","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16731","type":"Segment"},"selection_glyph":null,"view":{"id":"16733","type":"CDSView"}},"id":"16732","type":"GlyphRenderer"},{"attributes":{"text":""},"id":"16735","type":"Title"},{"attributes":{},"id":"16716","type":"PanTool"},{"attributes":{},"id":"16702","type":"LinearScale"},{"attributes":{},"id":"16737","type":"BasicTickFormatter"},{"attributes":{},"id":"16717","type":"WheelZoomTool"},{"attributes":{},"id":"16707","type":"BasicTicker"},{"attributes":{},"id":"16739","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"16740","type":"BoxAnnotation"}},"id":"16718","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"16707","type":"BasicTicker"}},"id":"16710","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16740","type":"BoxAnnotation"},{"attributes":{},"id":"16719","type":"SaveTool"},{"attributes":{"formatter":{"id":"16737","type":"BasicTickFormatter"},"ticker":{"id":"16707","type":"BasicTicker"}},"id":"16706","type":"LinearAxis"},{"attributes":{"formatter":{"id":"16739","type":"BasicTickFormatter"},"ticker":{"id":"16712","type":"BasicTicker"}},"id":"16711","type":"LinearAxis"},{"attributes":{},"id":"16704","type":"LinearScale"},{"attributes":{},"id":"16741","type":"UnionRenderers"},{"attributes":{},"id":"16720","type":"ResetTool"},{"attributes":{},"id":"16712","type":"BasicTicker"},{"attributes":{},"id":"16742","type":"Selection"},{"attributes":{"callback":null},"id":"16700","type":"DataRange1d"}],"root_ids":["16697"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"4ef6e77d-d8e5-4d59-b66f-f7a18241cb72","roots":{"16697":"4dae9223-ff2b-43dc-87b9-35a400e8a6ee"}}];
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