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
      };var element = document.getElementById("5d6bb173-f00f-4cb6-b5c6-44a2bc66c0f3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5d6bb173-f00f-4cb6-b5c6-44a2bc66c0f3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3cc97229-7e32-4433-b8ee-7ba7c0d15e32":{"roots":{"references":[{"attributes":{},"id":"11857","type":"Selection"},{"attributes":{"callback":null,"data":{"angle":[30,45,60],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"11857","type":"Selection"},"selection_policy":{"id":"11858","type":"UnionRenderers"}},"id":"11845","type":"ColumnDataSource"},{"attributes":{},"id":"11854","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"11812","type":"DataRange1d"},{"attributes":{"formatter":{"id":"11852","type":"BasicTickFormatter"},"plot":{"id":"11811","subtype":"Figure","type":"Plot"},"ticker":{"id":"11826","type":"BasicTicker"}},"id":"11825","type":"LinearAxis"},{"attributes":{},"id":"11833","type":"SaveTool"},{"attributes":{},"id":"11831","type":"WheelZoomTool"},{"attributes":{},"id":"11818","type":"LinearScale"},{"attributes":{"plot":{"id":"11811","subtype":"Figure","type":"Plot"},"ticker":{"id":"11821","type":"BasicTicker"}},"id":"11824","type":"Grid"},{"attributes":{},"id":"11834","type":"ResetTool"},{"attributes":{"overlay":{"id":"11838","type":"BoxAnnotation"}},"id":"11832","type":"BoxZoomTool"},{"attributes":{},"id":"11852","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"11814","type":"DataRange1d"},{"attributes":{},"id":"11835","type":"HelpTool"},{"attributes":{},"id":"11816","type":"LinearScale"},{"attributes":{},"id":"11826","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11830","type":"PanTool"},{"id":"11831","type":"WheelZoomTool"},{"id":"11832","type":"BoxZoomTool"},{"id":"11833","type":"SaveTool"},{"id":"11834","type":"ResetTool"},{"id":"11835","type":"HelpTool"}]},"id":"11836","type":"Toolbar"},{"attributes":{},"id":"11830","type":"PanTool"},{"attributes":{"formatter":{"id":"11854","type":"BasicTickFormatter"},"plot":{"id":"11811","subtype":"Figure","type":"Plot"},"ticker":{"id":"11821","type":"BasicTicker"}},"id":"11820","type":"LinearAxis"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"11847","type":"Ray"},{"attributes":{"plot":null,"text":""},"id":"11850","type":"Title"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"11846","type":"Ray"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11838","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"11820","type":"LinearAxis"}],"left":[{"id":"11825","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11820","type":"LinearAxis"},{"id":"11824","type":"Grid"},{"id":"11825","type":"LinearAxis"},{"id":"11829","type":"Grid"},{"id":"11838","type":"BoxAnnotation"},{"id":"11848","type":"GlyphRenderer"}],"title":{"id":"11850","type":"Title"},"toolbar":{"id":"11836","type":"Toolbar"},"x_range":{"id":"11812","type":"DataRange1d"},"x_scale":{"id":"11816","type":"LinearScale"},"y_range":{"id":"11814","type":"DataRange1d"},"y_scale":{"id":"11818","type":"LinearScale"}},"id":"11811","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"11811","subtype":"Figure","type":"Plot"},"ticker":{"id":"11826","type":"BasicTicker"}},"id":"11829","type":"Grid"},{"attributes":{"data_source":{"id":"11845","type":"ColumnDataSource"},"glyph":{"id":"11846","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11847","type":"Ray"},"selection_glyph":null,"view":{"id":"11849","type":"CDSView"}},"id":"11848","type":"GlyphRenderer"},{"attributes":{},"id":"11821","type":"BasicTicker"},{"attributes":{"source":{"id":"11845","type":"ColumnDataSource"}},"id":"11849","type":"CDSView"},{"attributes":{},"id":"11858","type":"UnionRenderers"}],"root_ids":["11811"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"3cc97229-7e32-4433-b8ee-7ba7c0d15e32","roots":{"11811":"5d6bb173-f00f-4cb6-b5c6-44a2bc66c0f3"}}];
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