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
      };var element = document.getElementById("d769350e-f466-4bfc-ac64-061a1d270a20");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd769350e-f466-4bfc-ac64-061a1d270a20' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"02a9ff68-9da1-4a0c-b0e7-08f4a9737e03":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28337","type":"PanTool"},{"id":"28338","type":"WheelZoomTool"},{"id":"28339","type":"BoxZoomTool"},{"id":"28340","type":"SaveTool"},{"id":"28341","type":"ResetTool"},{"id":"28342","type":"HelpTool"}]},"id":"28343","type":"Toolbar"},{"attributes":{},"id":"28340","type":"SaveTool"},{"attributes":{"overlay":{"id":"28361","type":"BoxAnnotation"}},"id":"28339","type":"BoxZoomTool"},{"attributes":{"source":{"id":"28350","type":"ColumnDataSource"}},"id":"28354","type":"CDSView"},{"attributes":{},"id":"28325","type":"LinearScale"},{"attributes":{},"id":"28338","type":"WheelZoomTool"},{"attributes":{},"id":"28323","type":"LinearScale"},{"attributes":{},"id":"28333","type":"BasicTicker"},{"attributes":{},"id":"28341","type":"ResetTool"},{"attributes":{"callback":null},"id":"28321","type":"DataRange1d"},{"attributes":{"text":""},"id":"28356","type":"Title"},{"attributes":{},"id":"28337","type":"PanTool"},{"attributes":{"callback":null},"id":"28319","type":"DataRange1d"},{"attributes":{},"id":"28358","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"28333","type":"BasicTicker"}},"id":"28336","type":"Grid"},{"attributes":{},"id":"28360","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"28352","type":"HBar"},{"attributes":{"data_source":{"id":"28350","type":"ColumnDataSource"},"glyph":{"id":"28351","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28352","type":"HBar"},"selection_glyph":null,"view":{"id":"28354","type":"CDSView"}},"id":"28353","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"28358","type":"BasicTickFormatter"},"ticker":{"id":"28328","type":"BasicTicker"}},"id":"28327","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"navy"},"height":{"value":0.5},"line_color":{"value":"navy"},"right":{"field":"right"},"y":{"field":"y"}},"id":"28351","type":"HBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28361","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"right":[1.2,2.5,3.7],"y":[1,2,3]},"selected":{"id":"28363","type":"Selection"},"selection_policy":{"id":"28362","type":"UnionRenderers"}},"id":"28350","type":"ColumnDataSource"},{"attributes":{},"id":"28328","type":"BasicTicker"},{"attributes":{},"id":"28362","type":"UnionRenderers"},{"attributes":{"below":[{"id":"28327","type":"LinearAxis"}],"center":[{"id":"28331","type":"Grid"},{"id":"28336","type":"Grid"}],"left":[{"id":"28332","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28353","type":"GlyphRenderer"}],"title":{"id":"28356","type":"Title"},"toolbar":{"id":"28343","type":"Toolbar"},"x_range":{"id":"28319","type":"DataRange1d"},"x_scale":{"id":"28323","type":"LinearScale"},"y_range":{"id":"28321","type":"DataRange1d"},"y_scale":{"id":"28325","type":"LinearScale"}},"id":"28318","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"28342","type":"HelpTool"},{"attributes":{"formatter":{"id":"28360","type":"BasicTickFormatter"},"ticker":{"id":"28333","type":"BasicTicker"}},"id":"28332","type":"LinearAxis"},{"attributes":{},"id":"28363","type":"Selection"},{"attributes":{"ticker":{"id":"28328","type":"BasicTicker"}},"id":"28331","type":"Grid"}],"root_ids":["28318"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"02a9ff68-9da1-4a0c-b0e7-08f4a9737e03","roots":{"28318":"d769350e-f466-4bfc-ac64-061a1d270a20"}}];
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