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
      };var element = document.getElementById("53ec6982-ee78-4c40-96a3-5fa2eaed8196");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '53ec6982-ee78-4c40-96a3-5fa2eaed8196' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
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
                    
                  var docs_json = '{"1d50d4ac-8a8a-431f-9cbc-0551f7cbceca":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"15249","type":"Diamond"},{"attributes":{"text":""},"id":"15253","type":"Title"},{"attributes":{"formatter":{"id":"15257","type":"BasicTickFormatter"},"ticker":{"id":"15225","type":"BasicTicker"}},"id":"15224","type":"LinearAxis"},{"attributes":{},"id":"15258","type":"Selection"},{"attributes":{"callback":null},"id":"15216","type":"DataRange1d"},{"attributes":{},"id":"15230","type":"BasicTicker"},{"attributes":{"below":[{"id":"15224","type":"LinearAxis"}],"center":[{"id":"15228","type":"Grid"},{"id":"15233","type":"Grid"}],"left":[{"id":"15229","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15250","type":"GlyphRenderer"}],"title":{"id":"15253","type":"Title"},"toolbar":{"id":"15240","type":"Toolbar"},"x_range":{"id":"15216","type":"DataRange1d"},"x_scale":{"id":"15220","type":"LinearScale"},"y_range":{"id":"15218","type":"DataRange1d"},"y_scale":{"id":"15222","type":"LinearScale"}},"id":"15215","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15235","type":"WheelZoomTool"},{"attributes":{},"id":"15225","type":"BasicTicker"},{"attributes":{},"id":"15257","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"15260","type":"BoxAnnotation"}},"id":"15236","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"15225","type":"BasicTicker"}},"id":"15228","type":"Grid"},{"attributes":{},"id":"15255","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"15218","type":"DataRange1d"},{"attributes":{},"id":"15259","type":"UnionRenderers"},{"attributes":{},"id":"15220","type":"LinearScale"},{"attributes":{},"id":"15237","type":"SaveTool"},{"attributes":{"dimension":1,"ticker":{"id":"15230","type":"BasicTicker"}},"id":"15233","type":"Grid"},{"attributes":{"formatter":{"id":"15255","type":"BasicTickFormatter"},"ticker":{"id":"15230","type":"BasicTicker"}},"id":"15229","type":"LinearAxis"},{"attributes":{},"id":"15238","type":"ResetTool"},{"attributes":{"source":{"id":"15247","type":"ColumnDataSource"}},"id":"15251","type":"CDSView"},{"attributes":{},"id":"15239","type":"HelpTool"},{"attributes":{"data_source":{"id":"15247","type":"ColumnDataSource"},"glyph":{"id":"15248","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15249","type":"Diamond"},"selection_glyph":null,"view":{"id":"15251","type":"CDSView"}},"id":"15250","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15260","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"15258","type":"Selection"},"selection_policy":{"id":"15259","type":"UnionRenderers"}},"id":"15247","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15234","type":"PanTool"},{"id":"15235","type":"WheelZoomTool"},{"id":"15236","type":"BoxZoomTool"},{"id":"15237","type":"SaveTool"},{"id":"15238","type":"ResetTool"},{"id":"15239","type":"HelpTool"}]},"id":"15240","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1C9099"},"line_color":{"value":"#1C9099"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"15248","type":"Diamond"},{"attributes":{},"id":"15222","type":"LinearScale"},{"attributes":{},"id":"15234","type":"PanTool"}],"root_ids":["15215"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"1d50d4ac-8a8a-431f-9cbc-0551f7cbceca","roots":{"15215":"53ec6982-ee78-4c40-96a3-5fa2eaed8196"}}];
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
        function(Bokeh) {
        
        
        }
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