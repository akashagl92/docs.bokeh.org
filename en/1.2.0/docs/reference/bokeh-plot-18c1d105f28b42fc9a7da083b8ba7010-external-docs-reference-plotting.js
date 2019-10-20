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
      };var element = document.getElementById("c6e60d87-3cba-4b3f-8826-69c11f4c1d20");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c6e60d87-3cba-4b3f-8826-69c11f4c1d20' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"efb5936c-f4b6-4c91-872a-7340a286b515":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":[1,2,3],"y1":[0,0,0],"y2":[1,4,2]},"selected":{"id":"17218","type":"Selection"},"selection_policy":{"id":"17219","type":"UnionRenderers"}},"id":"17207","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"17216","type":"BasicTickFormatter"},"ticker":{"id":"17185","type":"BasicTicker"}},"id":"17184","type":"LinearAxis"},{"attributes":{"overlay":{"id":"17220","type":"BoxAnnotation"}},"id":"17196","type":"BoxZoomTool"},{"attributes":{"fill_color":"#99D594","x":{"field":"x"},"y1":{"field":"y1"},"y2":{"field":"y2"}},"id":"17208","type":"VArea"},{"attributes":{},"id":"17194","type":"PanTool"},{"attributes":{},"id":"17190","type":"BasicTicker"},{"attributes":{},"id":"17214","type":"BasicTickFormatter"},{"attributes":{},"id":"17185","type":"BasicTicker"},{"attributes":{"callback":null},"id":"17176","type":"DataRange1d"},{"attributes":{"below":[{"id":"17184","type":"LinearAxis"}],"center":[{"id":"17188","type":"Grid"},{"id":"17193","type":"Grid"}],"left":[{"id":"17189","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17210","type":"GlyphRenderer"}],"title":{"id":"17212","type":"Title"},"toolbar":{"id":"17200","type":"Toolbar"},"x_range":{"id":"17176","type":"DataRange1d"},"x_scale":{"id":"17180","type":"LinearScale"},"y_range":{"id":"17178","type":"DataRange1d"},"y_scale":{"id":"17182","type":"LinearScale"}},"id":"17175","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17216","type":"BasicTickFormatter"},{"attributes":{},"id":"17218","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17194","type":"PanTool"},{"id":"17195","type":"WheelZoomTool"},{"id":"17196","type":"BoxZoomTool"},{"id":"17197","type":"SaveTool"},{"id":"17198","type":"ResetTool"},{"id":"17199","type":"HelpTool"}]},"id":"17200","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17220","type":"BoxAnnotation"},{"attributes":{},"id":"17197","type":"SaveTool"},{"attributes":{},"id":"17198","type":"ResetTool"},{"attributes":{"callback":null},"id":"17178","type":"DataRange1d"},{"attributes":{"data_source":{"id":"17207","type":"ColumnDataSource"},"glyph":{"id":"17208","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17209","type":"VArea"},"selection_glyph":null,"view":{"id":"17211","type":"CDSView"}},"id":"17210","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17207","type":"ColumnDataSource"}},"id":"17211","type":"CDSView"},{"attributes":{},"id":"17180","type":"LinearScale"},{"attributes":{},"id":"17195","type":"WheelZoomTool"},{"attributes":{"text":""},"id":"17212","type":"Title"},{"attributes":{"ticker":{"id":"17185","type":"BasicTicker"}},"id":"17188","type":"Grid"},{"attributes":{},"id":"17182","type":"LinearScale"},{"attributes":{"formatter":{"id":"17214","type":"BasicTickFormatter"},"ticker":{"id":"17190","type":"BasicTicker"}},"id":"17189","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"17190","type":"BasicTicker"}},"id":"17193","type":"Grid"},{"attributes":{},"id":"17219","type":"UnionRenderers"},{"attributes":{},"id":"17199","type":"HelpTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"x"},"y1":{"field":"y1"},"y2":{"field":"y2"}},"id":"17209","type":"VArea"}],"root_ids":["17175"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"efb5936c-f4b6-4c91-872a-7340a286b515","roots":{"17175":"c6e60d87-3cba-4b3f-8826-69c11f4c1d20"}}];
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