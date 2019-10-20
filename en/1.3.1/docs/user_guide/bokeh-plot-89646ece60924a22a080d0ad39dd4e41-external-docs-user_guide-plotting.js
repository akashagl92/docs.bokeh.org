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
      };var element = document.getElementById("563321ee-f1df-4031-a9b8-247c2bf787ea");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '563321ee-f1df-4031-a9b8-247c2bf787ea' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.1.min.js"];
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
                    
                  var docs_json = '{"f1a7e7f9-1470-4dbb-aa91-ddd74ec402fa":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"mode":"center","x":{"field":"x"},"y":{"field":"y"}},"id":"27930","type":"Step"},{"attributes":{},"id":"27920","type":"HelpTool"},{"attributes":{"callback":null},"id":"27897","type":"DataRange1d"},{"attributes":{},"id":"27941","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"mode":"center","x":{"field":"x"},"y":{"field":"y"}},"id":"27929","type":"Step"},{"attributes":{"callback":null},"id":"27899","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"27940","type":"Selection"},"selection_policy":{"id":"27941","type":"UnionRenderers"}},"id":"27928","type":"ColumnDataSource"},{"attributes":{},"id":"27901","type":"LinearScale"},{"attributes":{"data_source":{"id":"27928","type":"ColumnDataSource"},"glyph":{"id":"27929","type":"Step"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27930","type":"Step"},"selection_glyph":null,"view":{"id":"27932","type":"CDSView"}},"id":"27931","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27915","type":"PanTool"},{"id":"27916","type":"WheelZoomTool"},{"id":"27917","type":"BoxZoomTool"},{"id":"27918","type":"SaveTool"},{"id":"27919","type":"ResetTool"},{"id":"27920","type":"HelpTool"}]},"id":"27921","type":"Toolbar"},{"attributes":{"source":{"id":"27928","type":"ColumnDataSource"}},"id":"27932","type":"CDSView"},{"attributes":{},"id":"27915","type":"PanTool"},{"attributes":{},"id":"27940","type":"Selection"},{"attributes":{"ticker":{"id":"27906","type":"BasicTicker"}},"id":"27909","type":"Grid"},{"attributes":{},"id":"27916","type":"WheelZoomTool"},{"attributes":{},"id":"27903","type":"LinearScale"},{"attributes":{"text":""},"id":"27934","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27939","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"27939","type":"BoxAnnotation"}},"id":"27917","type":"BoxZoomTool"},{"attributes":{},"id":"27935","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"27937","type":"BasicTickFormatter"},"ticker":{"id":"27906","type":"BasicTicker"}},"id":"27905","type":"LinearAxis"},{"attributes":{"below":[{"id":"27905","type":"LinearAxis"}],"center":[{"id":"27909","type":"Grid"},{"id":"27914","type":"Grid"}],"left":[{"id":"27910","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"27931","type":"GlyphRenderer"}],"title":{"id":"27934","type":"Title"},"toolbar":{"id":"27921","type":"Toolbar"},"x_range":{"id":"27897","type":"DataRange1d"},"x_scale":{"id":"27901","type":"LinearScale"},"y_range":{"id":"27899","type":"DataRange1d"},"y_scale":{"id":"27903","type":"LinearScale"}},"id":"27896","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27937","type":"BasicTickFormatter"},{"attributes":{},"id":"27911","type":"BasicTicker"},{"attributes":{},"id":"27906","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"27911","type":"BasicTicker"}},"id":"27914","type":"Grid"},{"attributes":{"formatter":{"id":"27935","type":"BasicTickFormatter"},"ticker":{"id":"27911","type":"BasicTicker"}},"id":"27910","type":"LinearAxis"},{"attributes":{},"id":"27919","type":"ResetTool"},{"attributes":{},"id":"27918","type":"SaveTool"}],"root_ids":["27896"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"f1a7e7f9-1470-4dbb-aa91-ddd74ec402fa","roots":{"27896":"563321ee-f1df-4031-a9b8-247c2bf787ea"}}];
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