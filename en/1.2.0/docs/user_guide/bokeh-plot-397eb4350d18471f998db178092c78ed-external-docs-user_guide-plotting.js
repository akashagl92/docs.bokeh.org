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
      };var element = document.getElementById("d483e510-3378-41f7-b09a-16bbadb673e8");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd483e510-3378-41f7-b09a-16bbadb673e8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"44661c3c-eac7-4f42-809d-4445e0a3d7aa":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30078","type":"PanTool"},{"id":"30079","type":"WheelZoomTool"},{"id":"30080","type":"BoxZoomTool"},{"id":"30081","type":"SaveTool"},{"id":"30082","type":"ResetTool"},{"id":"30083","type":"HelpTool"}]},"id":"30084","type":"Toolbar"},{"attributes":{"overlay":{"id":"30104","type":"BoxAnnotation"}},"id":"30080","type":"BoxZoomTool"},{"attributes":{},"id":"30102","type":"Selection"},{"attributes":{},"id":"30081","type":"SaveTool"},{"attributes":{},"id":"30103","type":"UnionRenderers"},{"attributes":{},"id":"30098","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"30069","type":"BasicTicker"}},"id":"30072","type":"Grid"},{"attributes":{},"id":"30069","type":"BasicTicker"},{"attributes":{},"id":"30064","type":"LinearScale"},{"attributes":{"text":""},"id":"30096","type":"Title"},{"attributes":{"formatter":{"id":"30098","type":"BasicTickFormatter"},"ticker":{"id":"30074","type":"BasicTicker"}},"id":"30073","type":"LinearAxis"},{"attributes":{},"id":"30066","type":"LinearScale"},{"attributes":{"data_source":{"id":"30091","type":"ColumnDataSource"},"glyph":{"id":"30092","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30093","type":"Wedge"},"selection_glyph":null,"view":{"id":"30095","type":"CDSView"}},"id":"30094","type":"GlyphRenderer"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.6},"line_color":{"value":"firebrick"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"30092","type":"Wedge"},{"attributes":{},"id":"30083","type":"HelpTool"},{"attributes":{"callback":null},"id":"30060","type":"DataRange1d"},{"attributes":{"formatter":{"id":"30100","type":"BasicTickFormatter"},"ticker":{"id":"30069","type":"BasicTicker"}},"id":"30068","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"30074","type":"BasicTicker"}},"id":"30077","type":"Grid"},{"attributes":{},"id":"30082","type":"ResetTool"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"30093","type":"Wedge"},{"attributes":{"callback":null},"id":"30062","type":"DataRange1d"},{"attributes":{"below":[{"id":"30068","type":"LinearAxis"}],"center":[{"id":"30072","type":"Grid"},{"id":"30077","type":"Grid"}],"left":[{"id":"30073","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"30094","type":"GlyphRenderer"}],"title":{"id":"30096","type":"Title"},"toolbar":{"id":"30084","type":"Toolbar"},"x_range":{"id":"30060","type":"DataRange1d"},"x_scale":{"id":"30064","type":"LinearScale"},"y_range":{"id":"30062","type":"DataRange1d"},"y_scale":{"id":"30066","type":"LinearScale"}},"id":"30059","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"30074","type":"BasicTicker"},{"attributes":{},"id":"30078","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30104","type":"BoxAnnotation"},{"attributes":{},"id":"30100","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"30102","type":"Selection"},"selection_policy":{"id":"30103","type":"UnionRenderers"}},"id":"30091","type":"ColumnDataSource"},{"attributes":{"source":{"id":"30091","type":"ColumnDataSource"}},"id":"30095","type":"CDSView"},{"attributes":{},"id":"30079","type":"WheelZoomTool"}],"root_ids":["30059"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"44661c3c-eac7-4f42-809d-4445e0a3d7aa","roots":{"30059":"d483e510-3378-41f7-b09a-16bbadb673e8"}}];
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