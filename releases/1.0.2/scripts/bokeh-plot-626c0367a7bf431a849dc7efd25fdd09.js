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
      };var element = document.getElementById("9f512607-81fb-4dbd-ae5a-5642df10486c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9f512607-81fb-4dbd-ae5a-5642df10486c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"3ff7185f-9977-471f-9272-eb853c4ce230":{"roots":{"references":[{"attributes":{},"id":"11832","type":"HelpTool"},{"attributes":{"callback":null},"id":"11811","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11835","type":"BoxAnnotation"},{"attributes":{},"id":"11813","type":"LinearScale"},{"attributes":{},"id":"11827","type":"PanTool"},{"attributes":{},"id":"11855","type":"Selection"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"11844","type":"Ray"},{"attributes":{"source":{"id":"11842","type":"ColumnDataSource"}},"id":"11846","type":"CDSView"},{"attributes":{"callback":null},"id":"11809","type":"DataRange1d"},{"attributes":{"formatter":{"id":"11850","type":"BasicTickFormatter"},"plot":{"id":"11808","subtype":"Figure","type":"Plot"},"ticker":{"id":"11818","type":"BasicTicker"}},"id":"11817","type":"LinearAxis"},{"attributes":{},"id":"11828","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"angle":[30,45,60],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"11855","type":"Selection"},"selection_policy":{"id":"11854","type":"UnionRenderers"}},"id":"11842","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"11848","type":"Title"},{"attributes":{},"id":"11830","type":"SaveTool"},{"attributes":{"data_source":{"id":"11842","type":"ColumnDataSource"},"glyph":{"id":"11843","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11844","type":"Ray"},"selection_glyph":null,"view":{"id":"11846","type":"CDSView"}},"id":"11845","type":"GlyphRenderer"},{"attributes":{},"id":"11850","type":"BasicTickFormatter"},{"attributes":{},"id":"11818","type":"BasicTicker"},{"attributes":{"plot":{"id":"11808","subtype":"Figure","type":"Plot"},"ticker":{"id":"11818","type":"BasicTicker"}},"id":"11821","type":"Grid"},{"attributes":{},"id":"11852","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"11817","type":"LinearAxis"}],"left":[{"id":"11822","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11817","type":"LinearAxis"},{"id":"11821","type":"Grid"},{"id":"11822","type":"LinearAxis"},{"id":"11826","type":"Grid"},{"id":"11835","type":"BoxAnnotation"},{"id":"11845","type":"GlyphRenderer"}],"title":{"id":"11848","type":"Title"},"toolbar":{"id":"11833","type":"Toolbar"},"x_range":{"id":"11809","type":"DataRange1d"},"x_scale":{"id":"11813","type":"LinearScale"},"y_range":{"id":"11811","type":"DataRange1d"},"y_scale":{"id":"11815","type":"LinearScale"}},"id":"11808","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"11852","type":"BasicTickFormatter"},"plot":{"id":"11808","subtype":"Figure","type":"Plot"},"ticker":{"id":"11823","type":"BasicTicker"}},"id":"11822","type":"LinearAxis"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"11843","type":"Ray"},{"attributes":{},"id":"11854","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"11835","type":"BoxAnnotation"}},"id":"11829","type":"BoxZoomTool"},{"attributes":{},"id":"11823","type":"BasicTicker"},{"attributes":{},"id":"11815","type":"LinearScale"},{"attributes":{},"id":"11831","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"11808","subtype":"Figure","type":"Plot"},"ticker":{"id":"11823","type":"BasicTicker"}},"id":"11826","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11827","type":"PanTool"},{"id":"11828","type":"WheelZoomTool"},{"id":"11829","type":"BoxZoomTool"},{"id":"11830","type":"SaveTool"},{"id":"11831","type":"ResetTool"},{"id":"11832","type":"HelpTool"}]},"id":"11833","type":"Toolbar"}],"root_ids":["11808"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"3ff7185f-9977-471f-9272-eb853c4ce230","roots":{"11808":"9f512607-81fb-4dbd-ae5a-5642df10486c"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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