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
      };var element = document.getElementById("be2cd55e-02b9-4feb-b3c1-53221726d850");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'be2cd55e-02b9-4feb-b3c1-53221726d850' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8c757dc8-9b24-4d70-b706-e6f0c65abdd3":{"roots":{"references":[{"attributes":{},"id":"15297","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"15297","type":"Selection"},"selection_policy":{"id":"15296","type":"UnionRenderers"}},"id":"15286","type":"ColumnDataSource"},{"attributes":{"source":{"id":"15286","type":"ColumnDataSource"}},"id":"15290","type":"CDSView"},{"attributes":{},"id":"15274","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"15286","type":"ColumnDataSource"},"glyph":{"id":"15287","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15288","type":"Line"},"selection_glyph":null,"view":{"id":"15290","type":"CDSView"}},"id":"15289","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"15298","type":"BoxAnnotation"}},"id":"15275","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"15257","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"15269","type":"BasicTicker"}},"id":"15272","type":"Grid"},{"attributes":{},"id":"15277","type":"ResetTool"},{"attributes":{"below":[{"id":"15263","type":"LinearAxis"}],"center":[{"id":"15267","type":"Grid"},{"id":"15272","type":"Grid"}],"left":[{"id":"15268","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15289","type":"GlyphRenderer"}],"title":{"id":"15253","type":"Title"},"toolbar":{"id":"15279","type":"Toolbar"},"x_range":{"id":"15255","type":"DataRange1d"},"x_scale":{"id":"15259","type":"LinearScale"},"y_range":{"id":"15257","type":"DataRange1d"},"y_scale":{"id":"15261","type":"LinearScale"}},"id":"15252","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15276","type":"SaveTool"},{"attributes":{"text":"line"},"id":"15253","type":"Title"},{"attributes":{"callback":null},"id":"15255","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15298","type":"BoxAnnotation"},{"attributes":{},"id":"15259","type":"LinearScale"},{"attributes":{"ticker":{"id":"15264","type":"BasicTicker"}},"id":"15267","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15273","type":"PanTool"},{"id":"15274","type":"WheelZoomTool"},{"id":"15275","type":"BoxZoomTool"},{"id":"15276","type":"SaveTool"},{"id":"15277","type":"ResetTool"},{"id":"15278","type":"HelpTool"}]},"id":"15279","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"15288","type":"Line"},{"attributes":{"formatter":{"id":"15293","type":"BasicTickFormatter"},"ticker":{"id":"15269","type":"BasicTicker"}},"id":"15268","type":"LinearAxis"},{"attributes":{},"id":"15269","type":"BasicTicker"},{"attributes":{},"id":"15261","type":"LinearScale"},{"attributes":{},"id":"15278","type":"HelpTool"},{"attributes":{},"id":"15273","type":"PanTool"},{"attributes":{},"id":"15264","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"15287","type":"Line"},{"attributes":{},"id":"15296","type":"UnionRenderers"},{"attributes":{},"id":"15293","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"15295","type":"BasicTickFormatter"},"ticker":{"id":"15264","type":"BasicTicker"}},"id":"15263","type":"LinearAxis"},{"attributes":{},"id":"15295","type":"BasicTickFormatter"}],"root_ids":["15252"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"8c757dc8-9b24-4d70-b706-e6f0c65abdd3","roots":{"15252":"be2cd55e-02b9-4feb-b3c1-53221726d850"}}];
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