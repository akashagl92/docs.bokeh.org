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
      };var element = document.getElementById("f29195c5-0047-4795-a829-44703d809bbe");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f29195c5-0047-4795-a829-44703d809bbe' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"291df42e-4d7c-461c-ad93-2650277227b7":{"roots":{"references":[{"attributes":{},"id":"27876","type":"SaveTool"},{"attributes":{"dimension":1,"ticker":{"id":"27869","type":"BasicTicker"}},"id":"27872","type":"Grid"},{"attributes":{},"id":"27878","type":"HelpTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"27888","type":"Patch"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27873","type":"PanTool"},{"id":"27874","type":"WheelZoomTool"},{"id":"27875","type":"BoxZoomTool"},{"id":"27876","type":"SaveTool"},{"id":"27877","type":"ResetTool"},{"id":"27878","type":"HelpTool"}]},"id":"27879","type":"Toolbar"},{"attributes":{"callback":null},"id":"27855","type":"DataRange1d"},{"attributes":{"fill_alpha":0.5,"fill_color":"#1f77b4","line_alpha":0.5,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"27887","type":"Patch"},{"attributes":{},"id":"27897","type":"UnionRenderers"},{"attributes":{"source":{"id":"27886","type":"ColumnDataSource"}},"id":"27890","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]},"selected":{"id":"27898","type":"Selection"},"selection_policy":{"id":"27897","type":"UnionRenderers"}},"id":"27886","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"27857","type":"DataRange1d"},{"attributes":{"data_source":{"id":"27886","type":"ColumnDataSource"},"glyph":{"id":"27887","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27888","type":"Patch"},"selection_glyph":null,"view":{"id":"27890","type":"CDSView"}},"id":"27889","type":"GlyphRenderer"},{"attributes":{},"id":"27859","type":"LinearScale"},{"attributes":{},"id":"27877","type":"ResetTool"},{"attributes":{"below":[{"id":"27863","type":"LinearAxis"}],"center":[{"id":"27867","type":"Grid"},{"id":"27872","type":"Grid"}],"left":[{"id":"27868","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"27889","type":"GlyphRenderer"}],"title":{"id":"27892","type":"Title"},"toolbar":{"id":"27879","type":"Toolbar"},"x_range":{"id":"27855","type":"DataRange1d"},"x_scale":{"id":"27859","type":"LinearScale"},"y_range":{"id":"27857","type":"DataRange1d"},"y_scale":{"id":"27861","type":"LinearScale"}},"id":"27854","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27873","type":"PanTool"},{"attributes":{},"id":"27898","type":"Selection"},{"attributes":{"text":""},"id":"27892","type":"Title"},{"attributes":{},"id":"27874","type":"WheelZoomTool"},{"attributes":{},"id":"27864","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27899","type":"BoxAnnotation"},{"attributes":{},"id":"27861","type":"LinearScale"},{"attributes":{},"id":"27894","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"27899","type":"BoxAnnotation"}},"id":"27875","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"27894","type":"BasicTickFormatter"},"ticker":{"id":"27869","type":"BasicTicker"}},"id":"27868","type":"LinearAxis"},{"attributes":{"formatter":{"id":"27896","type":"BasicTickFormatter"},"ticker":{"id":"27864","type":"BasicTicker"}},"id":"27863","type":"LinearAxis"},{"attributes":{},"id":"27896","type":"BasicTickFormatter"},{"attributes":{},"id":"27869","type":"BasicTicker"},{"attributes":{"ticker":{"id":"27864","type":"BasicTicker"}},"id":"27867","type":"Grid"}],"root_ids":["27854"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"291df42e-4d7c-461c-ad93-2650277227b7","roots":{"27854":"f29195c5-0047-4795-a829-44703d809bbe"}}];
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