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
      };var element = document.getElementById("d2016da8-eb2d-4c80-a780-f0dc337174d7");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd2016da8-eb2d-4c80-a780-f0dc337174d7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a4a57bf4-3310-4851-b88e-ea26b9ac949f":{"roots":{"references":[{"attributes":{},"id":"29939","type":"WheelZoomTool"},{"attributes":{},"id":"29926","type":"LinearScale"},{"attributes":{},"id":"29963","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"29920","type":"DataRange1d"},{"attributes":{},"id":"29961","type":"BasicTickFormatter"},{"attributes":{},"id":"29941","type":"SaveTool"},{"attributes":{},"id":"29959","type":"BasicTickFormatter"},{"attributes":{},"id":"29942","type":"ResetTool"},{"attributes":{},"id":"29934","type":"BasicTicker"},{"attributes":{"callback":null},"id":"29922","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"29934","type":"BasicTicker"}},"id":"29937","type":"Grid"},{"attributes":{},"id":"29964","type":"Selection"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"29953","type":"Ray"},{"attributes":{"formatter":{"id":"29959","type":"BasicTickFormatter"},"ticker":{"id":"29929","type":"BasicTicker"}},"id":"29928","type":"LinearAxis"},{"attributes":{"source":{"id":"29951","type":"ColumnDataSource"}},"id":"29955","type":"CDSView"},{"attributes":{"ticker":{"id":"29929","type":"BasicTicker"}},"id":"29932","type":"Grid"},{"attributes":{},"id":"29924","type":"LinearScale"},{"attributes":{"formatter":{"id":"29961","type":"BasicTickFormatter"},"ticker":{"id":"29934","type":"BasicTicker"}},"id":"29933","type":"LinearAxis"},{"attributes":{"data_source":{"id":"29951","type":"ColumnDataSource"},"glyph":{"id":"29952","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29953","type":"Ray"},"selection_glyph":null,"view":{"id":"29955","type":"CDSView"}},"id":"29954","type":"GlyphRenderer"},{"attributes":{},"id":"29943","type":"HelpTool"},{"attributes":{"callback":null,"data":{"angle":[30,45,60],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"29964","type":"Selection"},"selection_policy":{"id":"29963","type":"UnionRenderers"}},"id":"29951","type":"ColumnDataSource"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"29952","type":"Ray"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29938","type":"PanTool"},{"id":"29939","type":"WheelZoomTool"},{"id":"29940","type":"BoxZoomTool"},{"id":"29941","type":"SaveTool"},{"id":"29942","type":"ResetTool"},{"id":"29943","type":"HelpTool"}]},"id":"29944","type":"Toolbar"},{"attributes":{"below":[{"id":"29928","type":"LinearAxis"}],"center":[{"id":"29932","type":"Grid"},{"id":"29937","type":"Grid"}],"left":[{"id":"29933","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29954","type":"GlyphRenderer"}],"title":{"id":"29957","type":"Title"},"toolbar":{"id":"29944","type":"Toolbar"},"x_range":{"id":"29920","type":"DataRange1d"},"x_scale":{"id":"29924","type":"LinearScale"},"y_range":{"id":"29922","type":"DataRange1d"},"y_scale":{"id":"29926","type":"LinearScale"}},"id":"29919","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"29929","type":"BasicTicker"},{"attributes":{"text":""},"id":"29957","type":"Title"},{"attributes":{},"id":"29938","type":"PanTool"},{"attributes":{"overlay":{"id":"29962","type":"BoxAnnotation"}},"id":"29940","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29962","type":"BoxAnnotation"}],"root_ids":["29919"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"a4a57bf4-3310-4851-b88e-ea26b9ac949f","roots":{"29919":"d2016da8-eb2d-4c80-a780-f0dc337174d7"}}];
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