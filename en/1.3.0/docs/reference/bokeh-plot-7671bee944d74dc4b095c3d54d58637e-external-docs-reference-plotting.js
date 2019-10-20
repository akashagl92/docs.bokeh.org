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
      };var element = document.getElementById("36795c81-4ab8-4856-8d18-6ddebdf97e7d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '36795c81-4ab8-4856-8d18-6ddebdf97e7d' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
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
                    
                  var docs_json = '{"b39c0072-8d6c-430d-8f85-bf170cec72ee":{"roots":{"references":[{"attributes":{},"id":"15977","type":"SaveTool"},{"attributes":{},"id":"15974","type":"PanTool"},{"attributes":{"callback":null},"id":"15956","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"15989","type":"Line"},{"attributes":{"overlay":{"id":"15997","type":"BoxAnnotation"}},"id":"15976","type":"BoxZoomTool"},{"attributes":{"source":{"id":"15987","type":"ColumnDataSource"}},"id":"15991","type":"CDSView"},{"attributes":{},"id":"15975","type":"WheelZoomTool"},{"attributes":{},"id":"15994","type":"BasicTickFormatter"},{"attributes":{},"id":"15960","type":"LinearScale"},{"attributes":{},"id":"15996","type":"BasicTickFormatter"},{"attributes":{},"id":"15962","type":"LinearScale"},{"attributes":{"callback":null},"id":"15958","type":"DataRange1d"},{"attributes":{},"id":"15998","type":"UnionRenderers"},{"attributes":{},"id":"15965","type":"BasicTicker"},{"attributes":{},"id":"15999","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15997","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"15987","type":"ColumnDataSource"},"glyph":{"id":"15988","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15989","type":"Line"},"selection_glyph":null,"view":{"id":"15991","type":"CDSView"}},"id":"15990","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"15970","type":"BasicTicker"}},"id":"15973","type":"Grid"},{"attributes":{"below":[{"id":"15964","type":"LinearAxis"}],"center":[{"id":"15968","type":"Grid"},{"id":"15973","type":"Grid"}],"left":[{"id":"15969","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15990","type":"GlyphRenderer"}],"title":{"id":"15954","type":"Title"},"toolbar":{"id":"15980","type":"Toolbar"},"x_range":{"id":"15956","type":"DataRange1d"},"x_scale":{"id":"15960","type":"LinearScale"},"y_range":{"id":"15958","type":"DataRange1d"},"y_scale":{"id":"15962","type":"LinearScale"}},"id":"15953","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15974","type":"PanTool"},{"id":"15975","type":"WheelZoomTool"},{"id":"15976","type":"BoxZoomTool"},{"id":"15977","type":"SaveTool"},{"id":"15978","type":"ResetTool"},{"id":"15979","type":"HelpTool"}]},"id":"15980","type":"Toolbar"},{"attributes":{"ticker":{"id":"15965","type":"BasicTicker"}},"id":"15968","type":"Grid"},{"attributes":{},"id":"15979","type":"HelpTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"15988","type":"Line"},{"attributes":{"formatter":{"id":"15996","type":"BasicTickFormatter"},"ticker":{"id":"15970","type":"BasicTicker"}},"id":"15969","type":"LinearAxis"},{"attributes":{"text":"line"},"id":"15954","type":"Title"},{"attributes":{},"id":"15978","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"15999","type":"Selection"},"selection_policy":{"id":"15998","type":"UnionRenderers"}},"id":"15987","type":"ColumnDataSource"},{"attributes":{},"id":"15970","type":"BasicTicker"},{"attributes":{"formatter":{"id":"15994","type":"BasicTickFormatter"},"ticker":{"id":"15965","type":"BasicTicker"}},"id":"15964","type":"LinearAxis"}],"root_ids":["15953"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"b39c0072-8d6c-430d-8f85-bf170cec72ee","roots":{"15953":"36795c81-4ab8-4856-8d18-6ddebdf97e7d"}}];
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