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
      };var element = document.getElementById("53e201f5-5850-4c8f-b045-c8adddc838dc");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '53e201f5-5850-4c8f-b045-c8adddc838dc' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3456caee-8000-4417-8913-bc849f3a5d1c":{"roots":{"references":[{"attributes":{},"id":"29214","type":"BasicTickFormatter"},{"attributes":{},"id":"29197","type":"HelpTool"},{"attributes":{"formatter":{"id":"29212","type":"BasicTickFormatter"},"ticker":{"id":"29188","type":"BasicTicker"}},"id":"29187","type":"LinearAxis"},{"attributes":{},"id":"29188","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29216","type":"BoxAnnotation"},{"attributes":{"fill_alpha":0.5,"fill_color":"#1f77b4","line_alpha":0.5,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"29206","type":"Patch"},{"attributes":{"dimension":1,"ticker":{"id":"29188","type":"BasicTicker"}},"id":"29191","type":"Grid"},{"attributes":{"callback":null},"id":"29174","type":"DataRange1d"},{"attributes":{},"id":"29217","type":"Selection"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"29207","type":"Patch"},{"attributes":{"callback":null},"id":"29176","type":"DataRange1d"},{"attributes":{"data_source":{"id":"29205","type":"ColumnDataSource"},"glyph":{"id":"29206","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29207","type":"Patch"},"selection_glyph":null,"view":{"id":"29209","type":"CDSView"}},"id":"29208","type":"GlyphRenderer"},{"attributes":{},"id":"29218","type":"UnionRenderers"},{"attributes":{},"id":"29178","type":"LinearScale"},{"attributes":{"source":{"id":"29205","type":"ColumnDataSource"}},"id":"29209","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29192","type":"PanTool"},{"id":"29193","type":"WheelZoomTool"},{"id":"29194","type":"BoxZoomTool"},{"id":"29195","type":"SaveTool"},{"id":"29196","type":"ResetTool"},{"id":"29197","type":"HelpTool"}]},"id":"29198","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[1,2,3,"NaN",4,5,6],"y":[6,7,5,"NaN",7,3,6]},"selected":{"id":"29217","type":"Selection"},"selection_policy":{"id":"29218","type":"UnionRenderers"}},"id":"29205","type":"ColumnDataSource"},{"attributes":{},"id":"29192","type":"PanTool"},{"attributes":{"ticker":{"id":"29183","type":"BasicTicker"}},"id":"29186","type":"Grid"},{"attributes":{},"id":"29193","type":"WheelZoomTool"},{"attributes":{},"id":"29180","type":"LinearScale"},{"attributes":{"overlay":{"id":"29216","type":"BoxAnnotation"}},"id":"29194","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"29214","type":"BasicTickFormatter"},"ticker":{"id":"29183","type":"BasicTicker"}},"id":"29182","type":"LinearAxis"},{"attributes":{"text":""},"id":"29211","type":"Title"},{"attributes":{},"id":"29195","type":"SaveTool"},{"attributes":{"below":[{"id":"29182","type":"LinearAxis"}],"center":[{"id":"29186","type":"Grid"},{"id":"29191","type":"Grid"}],"left":[{"id":"29187","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29208","type":"GlyphRenderer"}],"title":{"id":"29211","type":"Title"},"toolbar":{"id":"29198","type":"Toolbar"},"x_range":{"id":"29174","type":"DataRange1d"},"x_scale":{"id":"29178","type":"LinearScale"},"y_range":{"id":"29176","type":"DataRange1d"},"y_scale":{"id":"29180","type":"LinearScale"}},"id":"29173","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"29183","type":"BasicTicker"},{"attributes":{},"id":"29212","type":"BasicTickFormatter"},{"attributes":{},"id":"29196","type":"ResetTool"}],"root_ids":["29173"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"3456caee-8000-4417-8913-bc849f3a5d1c","roots":{"29173":"53e201f5-5850-4c8f-b045-c8adddc838dc"}}];
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