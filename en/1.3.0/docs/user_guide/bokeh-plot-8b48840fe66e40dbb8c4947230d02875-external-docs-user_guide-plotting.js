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
      };var element = document.getElementById("2d9f6b29-7e65-4109-a5f2-e3cd7b691fb4");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2d9f6b29-7e65-4109-a5f2-e3cd7b691fb4' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"eb762806-5bae-4f35-87ee-79ab9d70a7c0":{"roots":{"references":[{"attributes":{},"id":"27661","type":"BasicTicker"},{"attributes":{},"id":"27656","type":"BasicTicker"},{"attributes":{"source":{"id":"27678","type":"ColumnDataSource"}},"id":"27682","type":"CDSView"},{"attributes":{},"id":"27668","type":"SaveTool"},{"attributes":{"dimension":1,"ticker":{"id":"27661","type":"BasicTicker"}},"id":"27664","type":"Grid"},{"attributes":{"formatter":{"id":"27688","type":"BasicTickFormatter"},"ticker":{"id":"27661","type":"BasicTicker"}},"id":"27660","type":"LinearAxis"},{"attributes":{"overlay":{"id":"27689","type":"BoxAnnotation"}},"id":"27667","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"27679","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27665","type":"PanTool"},{"id":"27666","type":"WheelZoomTool"},{"id":"27667","type":"BoxZoomTool"},{"id":"27668","type":"SaveTool"},{"id":"27669","type":"ResetTool"},{"id":"27670","type":"HelpTool"}]},"id":"27671","type":"Toolbar"},{"attributes":{},"id":"27688","type":"BasicTickFormatter"},{"attributes":{},"id":"27666","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27689","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"27647","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"27691","type":"Selection"},"selection_policy":{"id":"27690","type":"UnionRenderers"}},"id":"27678","type":"ColumnDataSource"},{"attributes":{},"id":"27686","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"27655","type":"LinearAxis"}],"center":[{"id":"27659","type":"Grid"},{"id":"27664","type":"Grid"}],"left":[{"id":"27660","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"27681","type":"GlyphRenderer"}],"title":{"id":"27684","type":"Title"},"toolbar":{"id":"27671","type":"Toolbar"},"x_range":{"id":"27647","type":"DataRange1d"},"x_scale":{"id":"27651","type":"LinearScale"},"y_range":{"id":"27649","type":"DataRange1d"},"y_scale":{"id":"27653","type":"LinearScale"}},"id":"27646","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"27649","type":"DataRange1d"},{"attributes":{},"id":"27665","type":"PanTool"},{"attributes":{},"id":"27651","type":"LinearScale"},{"attributes":{},"id":"27690","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"27656","type":"BasicTicker"}},"id":"27659","type":"Grid"},{"attributes":{},"id":"27670","type":"HelpTool"},{"attributes":{},"id":"27653","type":"LinearScale"},{"attributes":{},"id":"27691","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"27680","type":"Circle"},{"attributes":{"data_source":{"id":"27678","type":"ColumnDataSource"},"glyph":{"id":"27679","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27680","type":"Circle"},"selection_glyph":null,"view":{"id":"27682","type":"CDSView"}},"id":"27681","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"27686","type":"BasicTickFormatter"},"ticker":{"id":"27656","type":"BasicTicker"}},"id":"27655","type":"LinearAxis"},{"attributes":{},"id":"27669","type":"ResetTool"},{"attributes":{"text":""},"id":"27684","type":"Title"}],"root_ids":["27646"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"eb762806-5bae-4f35-87ee-79ab9d70a7c0","roots":{"27646":"2d9f6b29-7e65-4109-a5f2-e3cd7b691fb4"}}];
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