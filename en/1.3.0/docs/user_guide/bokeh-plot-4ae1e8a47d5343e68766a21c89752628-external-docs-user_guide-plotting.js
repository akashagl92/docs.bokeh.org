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
      };var element = document.getElementById("db5b3741-58b5-4dda-8c6f-1002b58817c0");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'db5b3741-58b5-4dda-8c6f-1002b58817c0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d94796e5-1b96-448e-9e01-533ff4ace554":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"28269","type":"VBar"},{"attributes":{"ticker":{"id":"28245","type":"BasicTicker"}},"id":"28248","type":"Grid"},{"attributes":{"callback":null},"id":"28236","type":"DataRange1d"},{"attributes":{"overlay":{"id":"28278","type":"BoxAnnotation"}},"id":"28256","type":"BoxZoomTool"},{"attributes":{},"id":"28277","type":"BasicTickFormatter"},{"attributes":{},"id":"28258","type":"ResetTool"},{"attributes":{},"id":"28257","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28278","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"28277","type":"BasicTickFormatter"},"ticker":{"id":"28250","type":"BasicTicker"}},"id":"28249","type":"LinearAxis"},{"attributes":{},"id":"28259","type":"HelpTool"},{"attributes":{},"id":"28279","type":"UnionRenderers"},{"attributes":{},"id":"28250","type":"BasicTicker"},{"attributes":{},"id":"28280","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"28250","type":"BasicTicker"}},"id":"28253","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28254","type":"PanTool"},{"id":"28255","type":"WheelZoomTool"},{"id":"28256","type":"BoxZoomTool"},{"id":"28257","type":"SaveTool"},{"id":"28258","type":"ResetTool"},{"id":"28259","type":"HelpTool"}]},"id":"28260","type":"Toolbar"},{"attributes":{"callback":null},"id":"28238","type":"DataRange1d"},{"attributes":{},"id":"28240","type":"LinearScale"},{"attributes":{"source":{"id":"28267","type":"ColumnDataSource"}},"id":"28271","type":"CDSView"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"28268","type":"VBar"},{"attributes":{"below":[{"id":"28244","type":"LinearAxis"}],"center":[{"id":"28248","type":"Grid"},{"id":"28253","type":"Grid"}],"left":[{"id":"28249","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28270","type":"GlyphRenderer"}],"title":{"id":"28273","type":"Title"},"toolbar":{"id":"28260","type":"Toolbar"},"x_range":{"id":"28236","type":"DataRange1d"},"x_scale":{"id":"28240","type":"LinearScale"},"y_range":{"id":"28238","type":"DataRange1d"},"y_scale":{"id":"28242","type":"LinearScale"}},"id":"28235","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"top":[1.2,2.5,3.7],"x":[1,2,3]},"selected":{"id":"28280","type":"Selection"},"selection_policy":{"id":"28279","type":"UnionRenderers"}},"id":"28267","type":"ColumnDataSource"},{"attributes":{},"id":"28245","type":"BasicTicker"},{"attributes":{"data_source":{"id":"28267","type":"ColumnDataSource"},"glyph":{"id":"28268","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28269","type":"VBar"},"selection_glyph":null,"view":{"id":"28271","type":"CDSView"}},"id":"28270","type":"GlyphRenderer"},{"attributes":{},"id":"28242","type":"LinearScale"},{"attributes":{"text":""},"id":"28273","type":"Title"},{"attributes":{},"id":"28254","type":"PanTool"},{"attributes":{"formatter":{"id":"28275","type":"BasicTickFormatter"},"ticker":{"id":"28245","type":"BasicTicker"}},"id":"28244","type":"LinearAxis"},{"attributes":{},"id":"28275","type":"BasicTickFormatter"},{"attributes":{},"id":"28255","type":"WheelZoomTool"}],"root_ids":["28235"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"d94796e5-1b96-448e-9e01-533ff4ace554","roots":{"28235":"db5b3741-58b5-4dda-8c6f-1002b58817c0"}}];
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