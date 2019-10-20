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
      };var element = document.getElementById("a8884c41-a929-4f25-a8a4-0aa014742e24");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a8884c41-a929-4f25-a8a4-0aa014742e24' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2f3958d5-0085-44cb-b29f-f33b484a9bdc":{"roots":{"references":[{"attributes":{"formatter":{"id":"36685","type":"BasicTickFormatter"},"ticker":{"id":"36655","type":"BasicTicker"}},"id":"36654","type":"LinearAxis"},{"attributes":{},"id":"36667","type":"SaveTool"},{"attributes":{},"id":"36660","type":"BasicTicker"},{"attributes":{"data_source":{"id":"36677","type":"ColumnDataSource"},"glyph":{"id":"36678","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"36679","type":"Circle"},"selection_glyph":null,"view":{"id":"36681","type":"CDSView"}},"id":"36680","type":"GlyphRenderer"},{"attributes":{},"id":"36685","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"36678","type":"Circle"},{"attributes":{"overlay":{"id":"36689","type":"BoxAnnotation"}},"id":"36666","type":"BoxZoomTool"},{"attributes":{},"id":"36668","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"36687","type":"Selection"},"selection_policy":{"id":"36688","type":"UnionRenderers"}},"id":"36677","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"36660","type":"BasicTicker"}},"id":"36663","type":"Grid"},{"attributes":{"source":{"id":"36677","type":"ColumnDataSource"}},"id":"36681","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"36664","type":"PanTool"},{"id":"36665","type":"WheelZoomTool"},{"id":"36666","type":"BoxZoomTool"},{"id":"36667","type":"SaveTool"},{"id":"36668","type":"ResetTool"},{"id":"36669","type":"HelpTool"}]},"id":"36670","type":"Toolbar"},{"attributes":{"callback":null},"id":"36646","type":"DataRange1d"},{"attributes":{},"id":"36688","type":"UnionRenderers"},{"attributes":{},"id":"36669","type":"HelpTool"},{"attributes":{},"id":"36650","type":"LinearScale"},{"attributes":{},"id":"36683","type":"BasicTickFormatter"},{"attributes":{},"id":"36665","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"36648","type":"DataRange1d"},{"attributes":{},"id":"36652","type":"LinearScale"},{"attributes":{},"id":"36687","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"36689","type":"BoxAnnotation"},{"attributes":{},"id":"36655","type":"BasicTicker"},{"attributes":{"below":[{"id":"36654","type":"LinearAxis"}],"center":[{"id":"36658","type":"Grid"},{"id":"36663","type":"Grid"}],"left":[{"id":"36659","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"36680","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"36670","type":"Toolbar"},"toolbar_location":"below","x_range":{"id":"36646","type":"DataRange1d"},"x_scale":{"id":"36650","type":"LinearScale"},"y_range":{"id":"36648","type":"DataRange1d"},"y_scale":{"id":"36652","type":"LinearScale"}},"id":"36644","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"36664","type":"PanTool"},{"attributes":{"formatter":{"id":"36683","type":"BasicTickFormatter"},"ticker":{"id":"36660","type":"BasicTicker"}},"id":"36659","type":"LinearAxis"},{"attributes":{"ticker":{"id":"36655","type":"BasicTicker"}},"id":"36658","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"36679","type":"Circle"}],"root_ids":["36644"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"2f3958d5-0085-44cb-b29f-f33b484a9bdc","roots":{"36644":"a8884c41-a929-4f25-a8a4-0aa014742e24"}}];
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