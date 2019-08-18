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
      };var element = document.getElementById("09f35faa-2314-4b0c-a3ff-df653699c197");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '09f35faa-2314-4b0c-a3ff-df653699c197' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"d417ebf9-4e94-4189-91ce-72585ceef205":{"roots":{"references":[{"attributes":{"callback":null},"id":"33160","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"33195","type":"HBar"},{"attributes":{},"id":"33183","type":"HelpTool"},{"attributes":{},"id":"33164","type":"LinearScale"},{"attributes":{},"id":"33169","type":"BasicTicker"},{"attributes":{"below":[{"id":"33168","type":"LinearAxis"}],"left":[{"id":"33173","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33168","type":"LinearAxis"},{"id":"33172","type":"Grid"},{"id":"33173","type":"LinearAxis"},{"id":"33177","type":"Grid"},{"id":"33186","type":"BoxAnnotation"},{"id":"33196","type":"GlyphRenderer"}],"title":{"id":"33199","type":"Title"},"toolbar":{"id":"33184","type":"Toolbar"},"x_range":{"id":"33160","type":"DataRange1d"},"x_scale":{"id":"33164","type":"LinearScale"},"y_range":{"id":"33162","type":"DataRange1d"},"y_scale":{"id":"33166","type":"LinearScale"}},"id":"33159","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"33186","type":"BoxAnnotation"}},"id":"33180","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"33203","type":"BasicTickFormatter"},"plot":{"id":"33159","subtype":"Figure","type":"Plot"},"ticker":{"id":"33174","type":"BasicTicker"}},"id":"33173","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"right":[1,2,3],"y":[1,2,3]},"selected":{"id":"33205","type":"Selection"},"selection_policy":{"id":"33206","type":"UnionRenderers"}},"id":"33193","type":"ColumnDataSource"},{"attributes":{},"id":"33166","type":"LinearScale"},{"attributes":{},"id":"33181","type":"SaveTool"},{"attributes":{},"id":"33205","type":"Selection"},{"attributes":{"source":{"id":"33193","type":"ColumnDataSource"}},"id":"33197","type":"CDSView"},{"attributes":{"formatter":{"id":"33201","type":"BasicTickFormatter"},"plot":{"id":"33159","subtype":"Figure","type":"Plot"},"ticker":{"id":"33169","type":"BasicTicker"}},"id":"33168","type":"LinearAxis"},{"attributes":{},"id":"33201","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"33162","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33186","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"33159","subtype":"Figure","type":"Plot"},"ticker":{"id":"33174","type":"BasicTicker"}},"id":"33177","type":"Grid"},{"attributes":{},"id":"33203","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"33199","type":"Title"},{"attributes":{},"id":"33206","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"value":0.5},"line_color":{"value":"#CAB2D6"},"right":{"field":"right"},"y":{"field":"y"}},"id":"33194","type":"HBar"},{"attributes":{"data_source":{"id":"33193","type":"ColumnDataSource"},"glyph":{"id":"33194","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33195","type":"HBar"},"selection_glyph":null,"view":{"id":"33197","type":"CDSView"}},"id":"33196","type":"GlyphRenderer"},{"attributes":{},"id":"33179","type":"WheelZoomTool"},{"attributes":{},"id":"33182","type":"ResetTool"},{"attributes":{"plot":{"id":"33159","subtype":"Figure","type":"Plot"},"ticker":{"id":"33169","type":"BasicTicker"}},"id":"33172","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33178","type":"PanTool"},{"id":"33179","type":"WheelZoomTool"},{"id":"33180","type":"BoxZoomTool"},{"id":"33181","type":"SaveTool"},{"id":"33182","type":"ResetTool"},{"id":"33183","type":"HelpTool"}]},"id":"33184","type":"Toolbar"},{"attributes":{},"id":"33174","type":"BasicTicker"},{"attributes":{},"id":"33178","type":"PanTool"}],"root_ids":["33159"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"d417ebf9-4e94-4189-91ce-72585ceef205","roots":{"33159":"09f35faa-2314-4b0c-a3ff-df653699c197"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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