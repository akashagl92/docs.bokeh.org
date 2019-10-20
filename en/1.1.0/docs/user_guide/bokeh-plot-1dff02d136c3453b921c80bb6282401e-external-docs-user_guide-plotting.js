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
      };var element = document.getElementById("78f4de00-6d8b-4012-a67e-b239f770c1df");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '78f4de00-6d8b-4012-a67e-b239f770c1df' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a7a79a3b-1830-4088-accf-fe7636576306":{"roots":{"references":[{"attributes":{"below":[{"id":"28361","type":"LinearAxis"}],"center":[{"id":"28365","type":"Grid"},{"id":"28370","type":"Grid"}],"left":[{"id":"28366","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28387","type":"GlyphRenderer"}],"title":{"id":"28390","type":"Title"},"toolbar":{"id":"28377","type":"Toolbar"},"x_range":{"id":"28353","type":"DataRange1d"},"x_scale":{"id":"28357","type":"LinearScale"},"y_range":{"id":"28355","type":"DataRange1d"},"y_scale":{"id":"28359","type":"LinearScale"}},"id":"28352","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"28353","type":"DataRange1d"},{"attributes":{"text":""},"id":"28390","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"28386","type":"MultiPolygons"},{"attributes":{"overlay":{"id":"28397","type":"BoxAnnotation"}},"id":"28373","type":"BoxZoomTool"},{"attributes":{},"id":"28372","type":"WheelZoomTool"},{"attributes":{},"id":"28392","type":"BasicTickFormatter"},{"attributes":{},"id":"28374","type":"SaveTool"},{"attributes":{},"id":"28394","type":"BasicTickFormatter"},{"attributes":{},"id":"28375","type":"ResetTool"},{"attributes":{},"id":"28362","type":"BasicTicker"},{"attributes":{},"id":"28395","type":"UnionRenderers"},{"attributes":{},"id":"28376","type":"HelpTool"},{"attributes":{},"id":"28367","type":"BasicTicker"},{"attributes":{},"id":"28371","type":"PanTool"},{"attributes":{},"id":"28359","type":"LinearScale"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"28385","type":"MultiPolygons"},{"attributes":{},"id":"28396","type":"Selection"},{"attributes":{"formatter":{"id":"28394","type":"BasicTickFormatter"},"ticker":{"id":"28362","type":"BasicTicker"}},"id":"28361","type":"LinearAxis"},{"attributes":{"ticker":{"id":"28362","type":"BasicTicker"}},"id":"28365","type":"Grid"},{"attributes":{"callback":null,"data":{"fill_color":["blue","red"],"line_color":["blue","red"],"xs":[[[[1,1,2,2],[1.2,1.6,1.6],[1.8,1.8,1.6]],[[3,3,4]]],[[[1,2,2,1],[1.3,1.3,1.7,1.7]]]],"ys":[[[[4,3,3,4],[3.2,3.2,3.6],[3.4,3.8,3.8]],[[1,3,1]]],[[[1,1,2,2],[1.3,1.7,1.7,1.3]]]]},"selected":{"id":"28396","type":"Selection"},"selection_policy":{"id":"28395","type":"UnionRenderers"}},"id":"28384","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28371","type":"PanTool"},{"id":"28372","type":"WheelZoomTool"},{"id":"28373","type":"BoxZoomTool"},{"id":"28374","type":"SaveTool"},{"id":"28375","type":"ResetTool"},{"id":"28376","type":"HelpTool"}]},"id":"28377","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28397","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"28355","type":"DataRange1d"},{"attributes":{"formatter":{"id":"28392","type":"BasicTickFormatter"},"ticker":{"id":"28367","type":"BasicTicker"}},"id":"28366","type":"LinearAxis"},{"attributes":{"data_source":{"id":"28384","type":"ColumnDataSource"},"glyph":{"id":"28385","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28386","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"28388","type":"CDSView"}},"id":"28387","type":"GlyphRenderer"},{"attributes":{"source":{"id":"28384","type":"ColumnDataSource"}},"id":"28388","type":"CDSView"},{"attributes":{},"id":"28357","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"28367","type":"BasicTicker"}},"id":"28370","type":"Grid"}],"root_ids":["28352"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"a7a79a3b-1830-4088-accf-fe7636576306","roots":{"28352":"78f4de00-6d8b-4012-a67e-b239f770c1df"}}];
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