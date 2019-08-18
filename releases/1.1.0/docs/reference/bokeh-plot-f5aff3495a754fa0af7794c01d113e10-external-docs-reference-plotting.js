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
      };var element = document.getElementById("fa044295-48ee-48b4-b0d1-4d6b1f735a3c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'fa044295-48ee-48b4-b0d1-4d6b1f735a3c' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js"];
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
                    
                  var docs_json = '{"77d479d9-57f7-4d49-901d-83c1f9bb54fd":{"roots":{"references":[{"attributes":{},"id":"14030","type":"BasicTicker"},{"attributes":{},"id":"14022","type":"LinearScale"},{"attributes":{},"id":"14057","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"14030","type":"BasicTicker"}},"id":"14033","type":"Grid"},{"attributes":{"text":""},"id":"14053","type":"Title"},{"attributes":{},"id":"14025","type":"BasicTicker"},{"attributes":{},"id":"14037","type":"SaveTool"},{"attributes":{"below":[{"id":"14024","type":"LinearAxis"}],"center":[{"id":"14028","type":"Grid"},{"id":"14033","type":"Grid"}],"left":[{"id":"14029","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"14050","type":"GlyphRenderer"}],"title":{"id":"14053","type":"Title"},"toolbar":{"id":"14040","type":"Toolbar"},"x_range":{"id":"14016","type":"DataRange1d"},"x_scale":{"id":"14020","type":"LinearScale"},"y_range":{"id":"14018","type":"DataRange1d"},"y_scale":{"id":"14022","type":"LinearScale"}},"id":"14015","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"14059","type":"Selection"},"selection_policy":{"id":"14058","type":"UnionRenderers"}},"id":"14047","type":"ColumnDataSource"},{"attributes":{},"id":"14055","type":"BasicTickFormatter"},{"attributes":{},"id":"14034","type":"PanTool"},{"attributes":{},"id":"14059","type":"Selection"},{"attributes":{"formatter":{"id":"14057","type":"BasicTickFormatter"},"ticker":{"id":"14025","type":"BasicTicker"}},"id":"14024","type":"LinearAxis"},{"attributes":{"callback":null},"id":"14018","type":"DataRange1d"},{"attributes":{},"id":"14035","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"14016","type":"DataRange1d"},{"attributes":{"data_source":{"id":"14047","type":"ColumnDataSource"},"glyph":{"id":"14048","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14049","type":"Annulus"},"selection_glyph":null,"view":{"id":"14051","type":"CDSView"}},"id":"14050","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"14025","type":"BasicTicker"}},"id":"14028","type":"Grid"},{"attributes":{"fill_color":{"value":"#7FC97F"},"inner_radius":{"units":"data","value":0.2},"line_color":{"value":"#7FC97F"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"14048","type":"Annulus"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14034","type":"PanTool"},{"id":"14035","type":"WheelZoomTool"},{"id":"14036","type":"BoxZoomTool"},{"id":"14037","type":"SaveTool"},{"id":"14038","type":"ResetTool"},{"id":"14039","type":"HelpTool"}]},"id":"14040","type":"Toolbar"},{"attributes":{},"id":"14039","type":"HelpTool"},{"attributes":{"source":{"id":"14047","type":"ColumnDataSource"}},"id":"14051","type":"CDSView"},{"attributes":{},"id":"14038","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.2},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"14049","type":"Annulus"},{"attributes":{"overlay":{"id":"14060","type":"BoxAnnotation"}},"id":"14036","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14060","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"14055","type":"BasicTickFormatter"},"ticker":{"id":"14030","type":"BasicTicker"}},"id":"14029","type":"LinearAxis"},{"attributes":{},"id":"14020","type":"LinearScale"},{"attributes":{},"id":"14058","type":"UnionRenderers"}],"root_ids":["14015"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"77d479d9-57f7-4d49-901d-83c1f9bb54fd","roots":{"14015":"fa044295-48ee-48b4-b0d1-4d6b1f735a3c"}}];
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