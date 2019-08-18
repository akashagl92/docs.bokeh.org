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
      };var element = document.getElementById("07b9d064-f20c-4401-afe8-71f8660779a5");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '07b9d064-f20c-4401-afe8-71f8660779a5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"496f733e-a5b7-4f8c-851d-777a48eb23d2":{"roots":{"references":[{"attributes":{"text":""},"id":"28841","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28823","type":"PanTool"},{"id":"28824","type":"WheelZoomTool"},{"id":"28825","type":"BoxZoomTool"},{"id":"28826","type":"SaveTool"},{"id":"28827","type":"ResetTool"},{"id":"28828","type":"HelpTool"}]},"id":"28829","type":"Toolbar"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"x"},"y1":{"field":"y1"},"y2":{"field":"y2"}},"id":"28838","type":"VArea"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y1":[2,6,4,3,5],"y2":[1,4,2,2,3]},"selected":{"id":"28847","type":"Selection"},"selection_policy":{"id":"28848","type":"UnionRenderers"}},"id":"28836","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"28807","type":"DataRange1d"},{"attributes":{},"id":"28828","type":"HelpTool"},{"attributes":{"fill_color":"#1f77b4","x":{"field":"x"},"y1":{"field":"y1"},"y2":{"field":"y2"}},"id":"28837","type":"VArea"},{"attributes":{},"id":"28847","type":"Selection"},{"attributes":{},"id":"28814","type":"BasicTicker"},{"attributes":{},"id":"28845","type":"BasicTickFormatter"},{"attributes":{},"id":"28809","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28849","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"28814","type":"BasicTicker"}},"id":"28817","type":"Grid"},{"attributes":{},"id":"28827","type":"ResetTool"},{"attributes":{"source":{"id":"28836","type":"ColumnDataSource"}},"id":"28840","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"28819","type":"BasicTicker"}},"id":"28822","type":"Grid"},{"attributes":{"formatter":{"id":"28845","type":"BasicTickFormatter"},"ticker":{"id":"28814","type":"BasicTicker"}},"id":"28813","type":"LinearAxis"},{"attributes":{},"id":"28843","type":"BasicTickFormatter"},{"attributes":{},"id":"28848","type":"UnionRenderers"},{"attributes":{},"id":"28824","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"28849","type":"BoxAnnotation"}},"id":"28825","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"28805","type":"DataRange1d"},{"attributes":{"data_source":{"id":"28836","type":"ColumnDataSource"},"glyph":{"id":"28837","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28838","type":"VArea"},"selection_glyph":null,"view":{"id":"28840","type":"CDSView"}},"id":"28839","type":"GlyphRenderer"},{"attributes":{},"id":"28819","type":"BasicTicker"},{"attributes":{"formatter":{"id":"28843","type":"BasicTickFormatter"},"ticker":{"id":"28819","type":"BasicTicker"}},"id":"28818","type":"LinearAxis"},{"attributes":{},"id":"28811","type":"LinearScale"},{"attributes":{},"id":"28823","type":"PanTool"},{"attributes":{},"id":"28826","type":"SaveTool"},{"attributes":{"below":[{"id":"28813","type":"LinearAxis"}],"center":[{"id":"28817","type":"Grid"},{"id":"28822","type":"Grid"}],"left":[{"id":"28818","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28839","type":"GlyphRenderer"}],"title":{"id":"28841","type":"Title"},"toolbar":{"id":"28829","type":"Toolbar"},"x_range":{"id":"28805","type":"DataRange1d"},"x_scale":{"id":"28809","type":"LinearScale"},"y_range":{"id":"28807","type":"DataRange1d"},"y_scale":{"id":"28811","type":"LinearScale"}},"id":"28804","subtype":"Figure","type":"Plot"}],"root_ids":["28804"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"496f733e-a5b7-4f8c-851d-777a48eb23d2","roots":{"28804":"07b9d064-f20c-4401-afe8-71f8660779a5"}}];
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