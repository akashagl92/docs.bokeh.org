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
      };var element = document.getElementById("8623e4b8-0a58-4dbc-9db3-6c566ac732f9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8623e4b8-0a58-4dbc-9db3-6c566ac732f9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ec0fc9dd-3691-4a36-9d24-ef6b0aef7777":{"roots":{"references":[{"attributes":{},"id":"28907","type":"PanTool"},{"attributes":{"below":[{"id":"28897","type":"LinearAxis"}],"center":[{"id":"28901","type":"Grid"},{"id":"28906","type":"Grid"}],"left":[{"id":"28902","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28927","type":"GlyphRenderer"},{"id":"28932","type":"GlyphRenderer"}],"title":{"id":"28934","type":"Title"},"toolbar":{"id":"28913","type":"Toolbar"},"x_range":{"id":"28889","type":"DataRange1d"},"x_scale":{"id":"28893","type":"LinearScale"},"y_range":{"id":"28891","type":"DataRange1d"},"y_scale":{"id":"28895","type":"LinearScale"}},"id":"28888","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"28910","type":"SaveTool"},{"attributes":{"fields":["y1"]},"id":"28921","type":"Stack"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y1":[1,2,4,3,4],"y2":[1,4,2,2,3]},"selected":{"id":"28940","type":"Selection"},"selection_policy":{"id":"28941","type":"UnionRenderers"}},"id":"28887","type":"ColumnDataSource"},{"attributes":{"fill_color":"grey","x":{"field":"x"},"y1":{"expr":{"id":"28920","type":"Stack"}},"y2":{"expr":{"id":"28921","type":"Stack"}}},"id":"28925","type":"VArea"},{"attributes":{"callback":null},"id":"28889","type":"DataRange1d"},{"attributes":{"fields":["y1","y2"]},"id":"28923","type":"Stack"},{"attributes":{"callback":null},"id":"28891","type":"DataRange1d"},{"attributes":{"data_source":{"id":"28887","type":"ColumnDataSource"},"glyph":{"id":"28925","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y1","nonselection_glyph":{"id":"28926","type":"VArea"},"selection_glyph":null,"view":{"id":"28928","type":"CDSView"}},"id":"28927","type":"GlyphRenderer"},{"attributes":{},"id":"28936","type":"BasicTickFormatter"},{"attributes":{},"id":"28940","type":"Selection"},{"attributes":{"formatter":{"id":"28938","type":"BasicTickFormatter"},"ticker":{"id":"28898","type":"BasicTicker"}},"id":"28897","type":"LinearAxis"},{"attributes":{"fields":[]},"id":"28920","type":"Stack"},{"attributes":{},"id":"28895","type":"LinearScale"},{"attributes":{"source":{"id":"28887","type":"ColumnDataSource"}},"id":"28928","type":"CDSView"},{"attributes":{},"id":"28912","type":"HelpTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"x"},"y1":{"expr":{"id":"28920","type":"Stack"}},"y2":{"expr":{"id":"28921","type":"Stack"}}},"id":"28926","type":"VArea"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"x"},"y1":{"expr":{"id":"28922","type":"Stack"}},"y2":{"expr":{"id":"28923","type":"Stack"}}},"id":"28931","type":"VArea"},{"attributes":{},"id":"28941","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"28942","type":"BoxAnnotation"}},"id":"28909","type":"BoxZoomTool"},{"attributes":{},"id":"28893","type":"LinearScale"},{"attributes":{"fields":["y1"]},"id":"28922","type":"Stack"},{"attributes":{"data_source":{"id":"28887","type":"ColumnDataSource"},"glyph":{"id":"28930","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y2","nonselection_glyph":{"id":"28931","type":"VArea"},"selection_glyph":null,"view":{"id":"28933","type":"CDSView"}},"id":"28932","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"28898","type":"BasicTicker"}},"id":"28901","type":"Grid"},{"attributes":{},"id":"28911","type":"ResetTool"},{"attributes":{"dimension":1,"ticker":{"id":"28903","type":"BasicTicker"}},"id":"28906","type":"Grid"},{"attributes":{},"id":"28903","type":"BasicTicker"},{"attributes":{"formatter":{"id":"28936","type":"BasicTickFormatter"},"ticker":{"id":"28903","type":"BasicTicker"}},"id":"28902","type":"LinearAxis"},{"attributes":{},"id":"28938","type":"BasicTickFormatter"},{"attributes":{},"id":"28908","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28942","type":"BoxAnnotation"},{"attributes":{},"id":"28898","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28907","type":"PanTool"},{"id":"28908","type":"WheelZoomTool"},{"id":"28909","type":"BoxZoomTool"},{"id":"28910","type":"SaveTool"},{"id":"28911","type":"ResetTool"},{"id":"28912","type":"HelpTool"}]},"id":"28913","type":"Toolbar"},{"attributes":{"source":{"id":"28887","type":"ColumnDataSource"}},"id":"28933","type":"CDSView"},{"attributes":{"fill_color":"lightgrey","x":{"field":"x"},"y1":{"expr":{"id":"28922","type":"Stack"}},"y2":{"expr":{"id":"28923","type":"Stack"}}},"id":"28930","type":"VArea"},{"attributes":{"text":""},"id":"28934","type":"Title"}],"root_ids":["28888"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"ec0fc9dd-3691-4a36-9d24-ef6b0aef7777","roots":{"28888":"8623e4b8-0a58-4dbc-9db3-6c566ac732f9"}}];
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