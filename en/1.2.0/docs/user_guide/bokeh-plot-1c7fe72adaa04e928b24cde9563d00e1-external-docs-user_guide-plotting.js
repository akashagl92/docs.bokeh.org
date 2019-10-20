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
      };var element = document.getElementById("16d4f88e-76ac-4d8e-9c54-56bfc60e8a71");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '16d4f88e-76ac-4d8e-9c54-56bfc60e8a71' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"06dec1ed-87f0-4785-ac45-05d0a8b421a4":{"roots":{"references":[{"attributes":{"callback":null},"id":"29481","type":"DataRange1d"},{"attributes":{},"id":"29500","type":"SaveTool"},{"attributes":{"text":""},"id":"29515","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29497","type":"PanTool"},{"id":"29498","type":"WheelZoomTool"},{"id":"29499","type":"BoxZoomTool"},{"id":"29500","type":"SaveTool"},{"id":"29501","type":"ResetTool"},{"id":"29502","type":"HelpTool"}]},"id":"29503","type":"Toolbar"},{"attributes":{},"id":"29493","type":"BasicTicker"},{"attributes":{},"id":"29498","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"29519","type":"BasicTickFormatter"},"ticker":{"id":"29488","type":"BasicTicker"}},"id":"29487","type":"LinearAxis"},{"attributes":{},"id":"29522","type":"UnionRenderers"},{"attributes":{},"id":"29519","type":"BasicTickFormatter"},{"attributes":{},"id":"29501","type":"ResetTool"},{"attributes":{"overlay":{"id":"29523","type":"BoxAnnotation"}},"id":"29499","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29523","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"29493","type":"BasicTicker"}},"id":"29496","type":"Grid"},{"attributes":{"below":[{"id":"29487","type":"LinearAxis"}],"center":[{"id":"29491","type":"Grid"},{"id":"29496","type":"Grid"}],"left":[{"id":"29492","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29513","type":"GlyphRenderer"}],"title":{"id":"29515","type":"Title"},"toolbar":{"id":"29503","type":"Toolbar"},"x_range":{"id":"29479","type":"DataRange1d"},"x_scale":{"id":"29483","type":"LinearScale"},"y_range":{"id":"29481","type":"DataRange1d"},"y_scale":{"id":"29485","type":"LinearScale"}},"id":"29478","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"29485","type":"LinearScale"},{"attributes":{},"id":"29483","type":"LinearScale"},{"attributes":{},"id":"29488","type":"BasicTicker"},{"attributes":{"formatter":{"id":"29517","type":"BasicTickFormatter"},"ticker":{"id":"29493","type":"BasicTicker"}},"id":"29492","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"29512","type":"MultiPolygons"},{"attributes":{"source":{"id":"29510","type":"ColumnDataSource"}},"id":"29514","type":"CDSView"},{"attributes":{"data_source":{"id":"29510","type":"ColumnDataSource"},"glyph":{"id":"29511","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29512","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"29514","type":"CDSView"}},"id":"29513","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"29488","type":"BasicTicker"}},"id":"29491","type":"Grid"},{"attributes":{"callback":null,"data":{"fill_color":["blue","red"],"line_color":["blue","red"],"xs":[[[[1,1,2,2],[1.2,1.6,1.6],[1.8,1.8,1.6]],[[3,3,4]]],[[[1,2,2,1],[1.3,1.3,1.7,1.7]]]],"ys":[[[[4,3,3,4],[3.2,3.2,3.6],[3.4,3.8,3.8]],[[1,3,1]]],[[[1,1,2,2],[1.3,1.7,1.7,1.3]]]]},"selected":{"id":"29521","type":"Selection"},"selection_policy":{"id":"29522","type":"UnionRenderers"}},"id":"29510","type":"ColumnDataSource"},{"attributes":{},"id":"29502","type":"HelpTool"},{"attributes":{"callback":null},"id":"29479","type":"DataRange1d"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"29511","type":"MultiPolygons"},{"attributes":{},"id":"29497","type":"PanTool"},{"attributes":{},"id":"29517","type":"BasicTickFormatter"},{"attributes":{},"id":"29521","type":"Selection"}],"root_ids":["29478"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"06dec1ed-87f0-4785-ac45-05d0a8b421a4","roots":{"29478":"16d4f88e-76ac-4d8e-9c54-56bfc60e8a71"}}];
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