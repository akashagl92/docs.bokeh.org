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
      };var element = document.getElementById("6e0c5344-0f3e-4206-8283-bac88b0c2647");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6e0c5344-0f3e-4206-8283-bac88b0c2647' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js"];
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
                    
                  var docs_json = '{"834cfe19-676d-4af1-9a3f-11da78d60965":{"roots":{"references":[{"attributes":{"dimension":1,"ticker":{"id":"15562","type":"BasicTicker"}},"id":"15565","type":"Grid"},{"attributes":{},"id":"15588","type":"BasicTickFormatter"},{"attributes":{},"id":"15566","type":"PanTool"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"value":0.5},"line_color":{"value":"#CAB2D6"},"right":{"field":"right"},"y":{"field":"y"}},"id":"15580","type":"HBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15566","type":"PanTool"},{"id":"15567","type":"WheelZoomTool"},{"id":"15568","type":"BoxZoomTool"},{"id":"15569","type":"SaveTool"},{"id":"15570","type":"ResetTool"},{"id":"15571","type":"HelpTool"}]},"id":"15572","type":"Toolbar"},{"attributes":{"source":{"id":"15579","type":"ColumnDataSource"}},"id":"15583","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"15581","type":"HBar"},{"attributes":{},"id":"15554","type":"LinearScale"},{"attributes":{},"id":"15567","type":"WheelZoomTool"},{"attributes":{"text":""},"id":"15585","type":"Title"},{"attributes":{"below":[{"id":"15556","type":"LinearAxis"}],"center":[{"id":"15560","type":"Grid"},{"id":"15565","type":"Grid"}],"left":[{"id":"15561","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15582","type":"GlyphRenderer"}],"title":{"id":"15585","type":"Title"},"toolbar":{"id":"15572","type":"Toolbar"},"x_range":{"id":"15548","type":"DataRange1d"},"x_scale":{"id":"15552","type":"LinearScale"},"y_range":{"id":"15550","type":"DataRange1d"},"y_scale":{"id":"15554","type":"LinearScale"}},"id":"15547","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"15550","type":"DataRange1d"},{"attributes":{"overlay":{"id":"15590","type":"BoxAnnotation"}},"id":"15568","type":"BoxZoomTool"},{"attributes":{},"id":"15562","type":"BasicTicker"},{"attributes":{},"id":"15569","type":"SaveTool"},{"attributes":{"formatter":{"id":"15586","type":"BasicTickFormatter"},"ticker":{"id":"15562","type":"BasicTicker"}},"id":"15561","type":"LinearAxis"},{"attributes":{"callback":null},"id":"15548","type":"DataRange1d"},{"attributes":{},"id":"15591","type":"Selection"},{"attributes":{"formatter":{"id":"15588","type":"BasicTickFormatter"},"ticker":{"id":"15557","type":"BasicTicker"}},"id":"15556","type":"LinearAxis"},{"attributes":{},"id":"15586","type":"BasicTickFormatter"},{"attributes":{},"id":"15570","type":"ResetTool"},{"attributes":{},"id":"15557","type":"BasicTicker"},{"attributes":{"ticker":{"id":"15557","type":"BasicTicker"}},"id":"15560","type":"Grid"},{"attributes":{"data_source":{"id":"15579","type":"ColumnDataSource"},"glyph":{"id":"15580","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15581","type":"HBar"},"selection_glyph":null,"view":{"id":"15583","type":"CDSView"}},"id":"15582","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"right":[1,2,3],"y":[1,2,3]},"selected":{"id":"15591","type":"Selection"},"selection_policy":{"id":"15592","type":"UnionRenderers"}},"id":"15579","type":"ColumnDataSource"},{"attributes":{},"id":"15571","type":"HelpTool"},{"attributes":{},"id":"15552","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15590","type":"BoxAnnotation"},{"attributes":{},"id":"15592","type":"UnionRenderers"}],"root_ids":["15547"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"834cfe19-676d-4af1-9a3f-11da78d60965","roots":{"15547":"6e0c5344-0f3e-4206-8283-bac88b0c2647"}}];
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