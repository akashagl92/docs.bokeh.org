(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("f4eeab28-f646-484c-9125-76201992753b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f4eeab28-f646-484c-9125-76201992753b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"87e69b3c-bef7-498e-9b5c-d2470a9173c2":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"33208","type":"Title"},{"attributes":{"overlay":{"id":"33196","type":"BoxAnnotation"}},"id":"33190","type":"BoxZoomTool"},{"attributes":{},"id":"33189","type":"WheelZoomTool"},{"attributes":{},"id":"33191","type":"SaveTool"},{"attributes":{},"id":"33179","type":"BasicTicker"},{"attributes":{},"id":"33210","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"33169","subtype":"Figure","type":"Plot"},"ticker":{"id":"33179","type":"BasicTicker"}},"id":"33182","type":"Grid"},{"attributes":{"below":[{"id":"33178","type":"LinearAxis"}],"left":[{"id":"33183","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33178","type":"LinearAxis"},{"id":"33182","type":"Grid"},{"id":"33183","type":"LinearAxis"},{"id":"33187","type":"Grid"},{"id":"33196","type":"BoxAnnotation"},{"id":"33206","type":"GlyphRenderer"}],"title":{"id":"33208","type":"Title"},"toolbar":{"id":"33194","type":"Toolbar"},"x_range":{"id":"33170","type":"DataRange1d"},"x_scale":{"id":"33174","type":"LinearScale"},"y_range":{"id":"33172","type":"DataRange1d"},"y_scale":{"id":"33176","type":"LinearScale"}},"id":"33169","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33212","type":"BasicTickFormatter"},{"attributes":{},"id":"33192","type":"ResetTool"},{"attributes":{"formatter":{"id":"33210","type":"BasicTickFormatter"},"plot":{"id":"33169","subtype":"Figure","type":"Plot"},"ticker":{"id":"33184","type":"BasicTicker"}},"id":"33183","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"33205","type":"HBar"},{"attributes":{},"id":"33215","type":"Selection"},{"attributes":{},"id":"33193","type":"HelpTool"},{"attributes":{},"id":"33184","type":"BasicTicker"},{"attributes":{"callback":null},"id":"33170","type":"DataRange1d"},{"attributes":{},"id":"33216","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33188","type":"PanTool"},{"id":"33189","type":"WheelZoomTool"},{"id":"33190","type":"BoxZoomTool"},{"id":"33191","type":"SaveTool"},{"id":"33192","type":"ResetTool"},{"id":"33193","type":"HelpTool"}]},"id":"33194","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"33169","subtype":"Figure","type":"Plot"},"ticker":{"id":"33184","type":"BasicTicker"}},"id":"33187","type":"Grid"},{"attributes":{},"id":"33176","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33196","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"33172","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"value":0.5},"line_color":{"value":"#CAB2D6"},"right":{"field":"right"},"y":{"field":"y"}},"id":"33204","type":"HBar"},{"attributes":{},"id":"33174","type":"LinearScale"},{"attributes":{"source":{"id":"33203","type":"ColumnDataSource"}},"id":"33207","type":"CDSView"},{"attributes":{"callback":null,"data":{"right":[1,2,3],"y":[1,2,3]},"selected":{"id":"33215","type":"Selection"},"selection_policy":{"id":"33216","type":"UnionRenderers"}},"id":"33203","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"33203","type":"ColumnDataSource"},"glyph":{"id":"33204","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33205","type":"HBar"},"selection_glyph":null,"view":{"id":"33207","type":"CDSView"}},"id":"33206","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"33212","type":"BasicTickFormatter"},"plot":{"id":"33169","subtype":"Figure","type":"Plot"},"ticker":{"id":"33179","type":"BasicTicker"}},"id":"33178","type":"LinearAxis"},{"attributes":{},"id":"33188","type":"PanTool"}],"root_ids":["33169"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"87e69b3c-bef7-498e-9b5c-d2470a9173c2","roots":{"33169":"f4eeab28-f646-484c-9125-76201992753b"}}];
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
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();