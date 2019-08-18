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
      };var element = document.getElementById("0fbb4ffa-4732-4a00-90ca-e09836754df6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0fbb4ffa-4732-4a00-90ca-e09836754df6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b05d6e41-9035-4e9a-922c-bd0cbd486a0a":{"roots":{"references":[{"attributes":{},"id":"34960","type":"PanTool"},{"attributes":{"formatter":{"id":"34984","type":"BasicTickFormatter"},"plot":{"id":"34941","subtype":"Figure","type":"Plot"},"ticker":{"id":"34951","type":"BasicTicker"}},"id":"34950","type":"LinearAxis"},{"attributes":{},"id":"34961","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"34980","type":"Title"},{"attributes":{},"id":"34951","type":"BasicTicker"},{"attributes":{"overlay":{"id":"34968","type":"BoxAnnotation"}},"id":"34962","type":"BoxZoomTool"},{"attributes":{},"id":"34982","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"34941","subtype":"Figure","type":"Plot"},"ticker":{"id":"34951","type":"BasicTicker"}},"id":"34954","type":"Grid"},{"attributes":{},"id":"34963","type":"SaveTool"},{"attributes":{},"id":"34984","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"34982","type":"BasicTickFormatter"},"plot":{"id":"34941","subtype":"Figure","type":"Plot"},"ticker":{"id":"34956","type":"BasicTicker"}},"id":"34955","type":"LinearAxis"},{"attributes":{},"id":"34964","type":"ResetTool"},{"attributes":{"below":[{"id":"34950","type":"LinearAxis"}],"left":[{"id":"34955","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34950","type":"LinearAxis"},{"id":"34954","type":"Grid"},{"id":"34955","type":"LinearAxis"},{"id":"34959","type":"Grid"},{"id":"34968","type":"BoxAnnotation"},{"id":"34978","type":"GlyphRenderer"}],"title":{"id":"34980","type":"Title"},"toolbar":{"id":"34966","type":"Toolbar"},"x_range":{"id":"34942","type":"DataRange1d"},"x_scale":{"id":"34946","type":"LinearScale"},"y_range":{"id":"34944","type":"DataRange1d"},"y_scale":{"id":"34948","type":"LinearScale"}},"id":"34941","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"34987","type":"Selection"},{"attributes":{},"id":"34956","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"34987","type":"Selection"},"selection_policy":{"id":"34988","type":"UnionRenderers"}},"id":"34975","type":"ColumnDataSource"},{"attributes":{},"id":"34965","type":"HelpTool"},{"attributes":{},"id":"34988","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"34941","subtype":"Figure","type":"Plot"},"ticker":{"id":"34956","type":"BasicTicker"}},"id":"34959","type":"Grid"},{"attributes":{"callback":null},"id":"34942","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34960","type":"PanTool"},{"id":"34961","type":"WheelZoomTool"},{"id":"34962","type":"BoxZoomTool"},{"id":"34963","type":"SaveTool"},{"id":"34964","type":"ResetTool"},{"id":"34965","type":"HelpTool"}]},"id":"34966","type":"Toolbar"},{"attributes":{},"id":"34948","type":"LinearScale"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"34977","type":"Wedge"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34968","type":"BoxAnnotation"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#2b8cbe"},"line_color":{"value":"#2b8cbe"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"34976","type":"Wedge"},{"attributes":{"callback":null},"id":"34944","type":"DataRange1d"},{"attributes":{"data_source":{"id":"34975","type":"ColumnDataSource"},"glyph":{"id":"34976","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34977","type":"Wedge"},"selection_glyph":null,"view":{"id":"34979","type":"CDSView"}},"id":"34978","type":"GlyphRenderer"},{"attributes":{},"id":"34946","type":"LinearScale"},{"attributes":{"source":{"id":"34975","type":"ColumnDataSource"}},"id":"34979","type":"CDSView"}],"root_ids":["34941"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"b05d6e41-9035-4e9a-922c-bd0cbd486a0a","roots":{"34941":"0fbb4ffa-4732-4a00-90ca-e09836754df6"}}];
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