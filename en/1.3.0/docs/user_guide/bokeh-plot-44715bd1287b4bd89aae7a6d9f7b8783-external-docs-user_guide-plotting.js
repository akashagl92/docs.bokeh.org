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
      };var element = document.getElementById("34ecbe86-a952-455c-87b2-bcfc6054dca6");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '34ecbe86-a952-455c-87b2-bcfc6054dca6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1c926e94-45ac-4fa5-a370-0d6df4a7c7cd":{"roots":{"references":[{"attributes":{},"id":"29851","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29855","type":"PanTool"},{"id":"29856","type":"WheelZoomTool"},{"id":"29857","type":"BoxZoomTool"},{"id":"29858","type":"SaveTool"},{"id":"29859","type":"ResetTool"},{"id":"29860","type":"HelpTool"}]},"id":"29861","type":"Toolbar"},{"attributes":{"source":{"id":"29868","type":"ColumnDataSource"}},"id":"29872","type":"CDSView"},{"attributes":{},"id":"29876","type":"BasicTickFormatter"},{"attributes":{},"id":"29881","type":"Selection"},{"attributes":{},"id":"29855","type":"PanTool"},{"attributes":{"below":[{"id":"29845","type":"LinearAxis"}],"center":[{"id":"29849","type":"Grid"},{"id":"29854","type":"Grid"}],"left":[{"id":"29850","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29871","type":"GlyphRenderer"}],"title":{"id":"29874","type":"Title"},"toolbar":{"id":"29861","type":"Toolbar"},"x_range":{"id":"29837","type":"DataRange1d"},"x_scale":{"id":"29841","type":"LinearScale"},"y_range":{"id":"29839","type":"DataRange1d"},"y_scale":{"id":"29843","type":"LinearScale"}},"id":"29836","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"29843","type":"LinearScale"},{"attributes":{"callback":null},"id":"29837","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"29870","type":"Segment"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"29869","type":"Segment"},{"attributes":{},"id":"29859","type":"ResetTool"},{"attributes":{},"id":"29841","type":"LinearScale"},{"attributes":{"ticker":{"id":"29846","type":"BasicTicker"}},"id":"29849","type":"Grid"},{"attributes":{"formatter":{"id":"29878","type":"BasicTickFormatter"},"ticker":{"id":"29851","type":"BasicTicker"}},"id":"29850","type":"LinearAxis"},{"attributes":{},"id":"29878","type":"BasicTickFormatter"},{"attributes":{},"id":"29860","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x0":[1,2,3],"x1":[1.2,2.4,3.1],"y0":[1,2,3],"y1":[1.2,2.5,3.7]},"selected":{"id":"29881","type":"Selection"},"selection_policy":{"id":"29880","type":"UnionRenderers"}},"id":"29868","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"29876","type":"BasicTickFormatter"},"ticker":{"id":"29846","type":"BasicTicker"}},"id":"29845","type":"LinearAxis"},{"attributes":{},"id":"29858","type":"SaveTool"},{"attributes":{"dimension":1,"ticker":{"id":"29851","type":"BasicTicker"}},"id":"29854","type":"Grid"},{"attributes":{"callback":null},"id":"29839","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29879","type":"BoxAnnotation"},{"attributes":{},"id":"29880","type":"UnionRenderers"},{"attributes":{},"id":"29846","type":"BasicTicker"},{"attributes":{"text":""},"id":"29874","type":"Title"},{"attributes":{"data_source":{"id":"29868","type":"ColumnDataSource"},"glyph":{"id":"29869","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29870","type":"Segment"},"selection_glyph":null,"view":{"id":"29872","type":"CDSView"}},"id":"29871","type":"GlyphRenderer"},{"attributes":{},"id":"29856","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"29879","type":"BoxAnnotation"}},"id":"29857","type":"BoxZoomTool"}],"root_ids":["29836"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"1c926e94-45ac-4fa5-a370-0d6df4a7c7cd","roots":{"29836":"34ecbe86-a952-455c-87b2-bcfc6054dca6"}}];
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