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
      };var element = document.getElementById("70764c46-5e25-4d66-a325-6becaf4eef1a");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '70764c46-5e25-4d66-a325-6becaf4eef1a' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js"];
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
                    
                  var docs_json = '{"c6dea691-f493-463b-a5a8-8dbe5e25bc29":{"roots":{"references":[{"attributes":{},"id":"15966","type":"BasicTicker"},{"attributes":{},"id":"15994","type":"BasicTickFormatter"},{"attributes":{},"id":"15975","type":"PanTool"},{"attributes":{"overlay":{"id":"16000","type":"BoxAnnotation"}},"id":"15977","type":"BoxZoomTool"},{"attributes":{},"id":"15978","type":"SaveTool"},{"attributes":{"source":{"id":"15988","type":"ColumnDataSource"}},"id":"15992","type":"CDSView"},{"attributes":{"ticker":{"id":"15966","type":"BasicTicker"}},"id":"15969","type":"Grid"},{"attributes":{},"id":"15979","type":"ResetTool"},{"attributes":{"data_source":{"id":"15988","type":"ColumnDataSource"},"glyph":{"id":"15989","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15990","type":"Line"},"selection_glyph":null,"view":{"id":"15992","type":"CDSView"}},"id":"15991","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"15996","type":"BasicTickFormatter"},"ticker":{"id":"15971","type":"BasicTicker"}},"id":"15970","type":"LinearAxis"},{"attributes":{"text":"line"},"id":"15955","type":"Title"},{"attributes":{},"id":"15980","type":"HelpTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"15990","type":"Line"},{"attributes":{},"id":"15971","type":"BasicTicker"},{"attributes":{"formatter":{"id":"15994","type":"BasicTickFormatter"},"ticker":{"id":"15966","type":"BasicTicker"}},"id":"15965","type":"LinearAxis"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"15989","type":"Line"},{"attributes":{"callback":null},"id":"15957","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"15971","type":"BasicTicker"}},"id":"15974","type":"Grid"},{"attributes":{},"id":"15996","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15975","type":"PanTool"},{"id":"15976","type":"WheelZoomTool"},{"id":"15977","type":"BoxZoomTool"},{"id":"15978","type":"SaveTool"},{"id":"15979","type":"ResetTool"},{"id":"15980","type":"HelpTool"}]},"id":"15981","type":"Toolbar"},{"attributes":{"callback":null},"id":"15959","type":"DataRange1d"},{"attributes":{},"id":"15998","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"15999","type":"Selection"},"selection_policy":{"id":"15998","type":"UnionRenderers"}},"id":"15988","type":"ColumnDataSource"},{"attributes":{},"id":"15961","type":"LinearScale"},{"attributes":{"below":[{"id":"15965","type":"LinearAxis"}],"center":[{"id":"15969","type":"Grid"},{"id":"15974","type":"Grid"}],"left":[{"id":"15970","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15991","type":"GlyphRenderer"}],"title":{"id":"15955","type":"Title"},"toolbar":{"id":"15981","type":"Toolbar"},"x_range":{"id":"15957","type":"DataRange1d"},"x_scale":{"id":"15961","type":"LinearScale"},"y_range":{"id":"15959","type":"DataRange1d"},"y_scale":{"id":"15963","type":"LinearScale"}},"id":"15954","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15999","type":"Selection"},{"attributes":{},"id":"15963","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16000","type":"BoxAnnotation"},{"attributes":{},"id":"15976","type":"WheelZoomTool"}],"root_ids":["15954"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"c6dea691-f493-463b-a5a8-8dbe5e25bc29","roots":{"15954":"70764c46-5e25-4d66-a325-6becaf4eef1a"}}];
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