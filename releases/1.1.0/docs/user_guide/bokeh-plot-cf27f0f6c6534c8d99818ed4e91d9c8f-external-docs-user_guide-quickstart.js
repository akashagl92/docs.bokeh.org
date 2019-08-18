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
      };var element = document.getElementById("1f039c9c-7d9c-43aa-8f34-2427cc2a739a");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '1f039c9c-7d9c-43aa-8f34-2427cc2a739a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b7c057f6-9c4e-4d0e-a447-5bc1c653e5e1":{"roots":{"references":[{"attributes":{},"id":"29822","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29841","type":"BoxAnnotation"},{"attributes":{"text":"simple line example"},"id":"29798","type":"Title"},{"attributes":{"callback":null},"id":"29802","type":"DataRange1d"},{"attributes":{},"id":"29818","type":"PanTool"},{"attributes":{"overlay":{"id":"29841","type":"BoxAnnotation"}},"id":"29820","type":"BoxZoomTool"},{"attributes":{"axis_label":"x","formatter":{"id":"29840","type":"BasicTickFormatter"},"ticker":{"id":"29809","type":"BasicTicker"}},"id":"29808","type":"LinearAxis"},{"attributes":{"label":{"value":"Temp."},"renderers":[{"id":"29834","type":"GlyphRenderer"}]},"id":"29843","type":"LegendItem"},{"attributes":{},"id":"29823","type":"HelpTool"},{"attributes":{"below":[{"id":"29808","type":"LinearAxis"}],"center":[{"id":"29812","type":"Grid"},{"id":"29817","type":"Grid"},{"id":"29842","type":"Legend"}],"left":[{"id":"29813","type":"LinearAxis"}],"renderers":[{"id":"29834","type":"GlyphRenderer"}],"title":{"id":"29798","type":"Title"},"toolbar":{"id":"29824","type":"Toolbar"},"x_range":{"id":"29800","type":"DataRange1d"},"x_scale":{"id":"29804","type":"LinearScale"},"y_range":{"id":"29802","type":"DataRange1d"},"y_scale":{"id":"29806","type":"LinearScale"}},"id":"29797","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"29819","type":"WheelZoomTool"},{"attributes":{},"id":"29838","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"29850","type":"Selection"},"selection_policy":{"id":"29849","type":"UnionRenderers"}},"id":"29831","type":"ColumnDataSource"},{"attributes":{"source":{"id":"29831","type":"ColumnDataSource"}},"id":"29835","type":"CDSView"},{"attributes":{},"id":"29849","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"29809","type":"BasicTicker"}},"id":"29812","type":"Grid"},{"attributes":{"data_source":{"id":"29831","type":"ColumnDataSource"},"glyph":{"id":"29832","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29833","type":"Line"},"selection_glyph":null,"view":{"id":"29835","type":"CDSView"}},"id":"29834","type":"GlyphRenderer"},{"attributes":{"items":[{"id":"29843","type":"LegendItem"}]},"id":"29842","type":"Legend"},{"attributes":{"axis_label":"y","formatter":{"id":"29838","type":"BasicTickFormatter"},"ticker":{"id":"29814","type":"BasicTicker"}},"id":"29813","type":"LinearAxis"},{"attributes":{},"id":"29806","type":"LinearScale"},{"attributes":{},"id":"29821","type":"SaveTool"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"29832","type":"Line"},{"attributes":{},"id":"29850","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"29833","type":"Line"},{"attributes":{"callback":null},"id":"29800","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"29814","type":"BasicTicker"}},"id":"29817","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29818","type":"PanTool"},{"id":"29819","type":"WheelZoomTool"},{"id":"29820","type":"BoxZoomTool"},{"id":"29821","type":"SaveTool"},{"id":"29822","type":"ResetTool"},{"id":"29823","type":"HelpTool"}]},"id":"29824","type":"Toolbar"},{"attributes":{},"id":"29840","type":"BasicTickFormatter"},{"attributes":{},"id":"29809","type":"BasicTicker"},{"attributes":{},"id":"29814","type":"BasicTicker"},{"attributes":{},"id":"29804","type":"LinearScale"}],"root_ids":["29797"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"b7c057f6-9c4e-4d0e-a447-5bc1c653e5e1","roots":{"29797":"1f039c9c-7d9c-43aa-8f34-2427cc2a739a"}}];
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