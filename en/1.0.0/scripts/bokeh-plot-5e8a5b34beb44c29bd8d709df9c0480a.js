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
      };var element = document.getElementById("417c9dc7-3482-44bf-9950-788b49b0ef74");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '417c9dc7-3482-44bf-9950-788b49b0ef74' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"17ba8a32-ec23-48ef-9f33-0fca04a9d794":{"roots":{"references":[{"attributes":{},"id":"11827","type":"WheelZoomTool"},{"attributes":{},"id":"11853","type":"Selection"},{"attributes":{"data_source":{"id":"11841","type":"ColumnDataSource"},"glyph":{"id":"11842","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11843","type":"Ray"},"selection_glyph":null,"view":{"id":"11845","type":"CDSView"}},"id":"11844","type":"GlyphRenderer"},{"attributes":{},"id":"11854","type":"UnionRenderers"},{"attributes":{},"id":"11831","type":"HelpTool"},{"attributes":{},"id":"11814","type":"LinearScale"},{"attributes":{},"id":"11830","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"11847","type":"Title"},{"attributes":{"plot":{"id":"11807","subtype":"Figure","type":"Plot"},"ticker":{"id":"11817","type":"BasicTicker"}},"id":"11820","type":"Grid"},{"attributes":{"formatter":{"id":"11851","type":"BasicTickFormatter"},"plot":{"id":"11807","subtype":"Figure","type":"Plot"},"ticker":{"id":"11822","type":"BasicTicker"}},"id":"11821","type":"LinearAxis"},{"attributes":{"source":{"id":"11841","type":"ColumnDataSource"}},"id":"11845","type":"CDSView"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"11842","type":"Ray"},{"attributes":{},"id":"11849","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11826","type":"PanTool"},{"id":"11827","type":"WheelZoomTool"},{"id":"11828","type":"BoxZoomTool"},{"id":"11829","type":"SaveTool"},{"id":"11830","type":"ResetTool"},{"id":"11831","type":"HelpTool"}]},"id":"11832","type":"Toolbar"},{"attributes":{},"id":"11817","type":"BasicTicker"},{"attributes":{"formatter":{"id":"11849","type":"BasicTickFormatter"},"plot":{"id":"11807","subtype":"Figure","type":"Plot"},"ticker":{"id":"11817","type":"BasicTicker"}},"id":"11816","type":"LinearAxis"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"11843","type":"Ray"},{"attributes":{"below":[{"id":"11816","type":"LinearAxis"}],"left":[{"id":"11821","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11816","type":"LinearAxis"},{"id":"11820","type":"Grid"},{"id":"11821","type":"LinearAxis"},{"id":"11825","type":"Grid"},{"id":"11834","type":"BoxAnnotation"},{"id":"11844","type":"GlyphRenderer"}],"title":{"id":"11847","type":"Title"},"toolbar":{"id":"11832","type":"Toolbar"},"x_range":{"id":"11808","type":"DataRange1d"},"x_scale":{"id":"11812","type":"LinearScale"},"y_range":{"id":"11810","type":"DataRange1d"},"y_scale":{"id":"11814","type":"LinearScale"}},"id":"11807","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11822","type":"BasicTicker"},{"attributes":{"overlay":{"id":"11834","type":"BoxAnnotation"}},"id":"11828","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"angle":[30,45,60],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"11853","type":"Selection"},"selection_policy":{"id":"11854","type":"UnionRenderers"}},"id":"11841","type":"ColumnDataSource"},{"attributes":{},"id":"11826","type":"PanTool"},{"attributes":{"callback":null},"id":"11808","type":"DataRange1d"},{"attributes":{},"id":"11829","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11834","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"11807","subtype":"Figure","type":"Plot"},"ticker":{"id":"11822","type":"BasicTicker"}},"id":"11825","type":"Grid"},{"attributes":{"callback":null},"id":"11810","type":"DataRange1d"},{"attributes":{},"id":"11812","type":"LinearScale"},{"attributes":{},"id":"11851","type":"BasicTickFormatter"}],"root_ids":["11807"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"17ba8a32-ec23-48ef-9f33-0fca04a9d794","roots":{"11807":"417c9dc7-3482-44bf-9950-788b49b0ef74"}}];
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