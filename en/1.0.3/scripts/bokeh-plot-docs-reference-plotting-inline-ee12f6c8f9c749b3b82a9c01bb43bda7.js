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
      };var element = document.getElementById("18db6649-9b45-4f71-ab29-5d10fd344017");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '18db6649-9b45-4f71-ab29-5d10fd344017' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0a9fb776-3a01-4c5d-b537-9a9cd5594090":{"roots":{"references":[{"attributes":{},"id":"34181","type":"LinearScale"},{"attributes":{"source":{"id":"34210","type":"ColumnDataSource"}},"id":"34214","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"34222","type":"Selection"},"selection_policy":{"id":"34223","type":"UnionRenderers"}},"id":"34210","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"34210","type":"ColumnDataSource"},"glyph":{"id":"34211","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34212","type":"Ray"},"selection_glyph":null,"view":{"id":"34214","type":"CDSView"}},"id":"34213","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"34219","type":"BasicTickFormatter"},"plot":{"id":"34176","subtype":"Figure","type":"Plot"},"ticker":{"id":"34186","type":"BasicTicker"}},"id":"34185","type":"LinearAxis"},{"attributes":{},"id":"34195","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"34215","type":"Title"},{"attributes":{"overlay":{"id":"34203","type":"BoxAnnotation"}},"id":"34197","type":"BoxZoomTool"},{"attributes":{},"id":"34196","type":"WheelZoomTool"},{"attributes":{},"id":"34217","type":"BasicTickFormatter"},{"attributes":{},"id":"34186","type":"BasicTicker"},{"attributes":{},"id":"34198","type":"SaveTool"},{"attributes":{},"id":"34219","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"34176","subtype":"Figure","type":"Plot"},"ticker":{"id":"34186","type":"BasicTicker"}},"id":"34189","type":"Grid"},{"attributes":{"below":[{"id":"34185","type":"LinearAxis"}],"left":[{"id":"34190","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34185","type":"LinearAxis"},{"id":"34189","type":"Grid"},{"id":"34190","type":"LinearAxis"},{"id":"34194","type":"Grid"},{"id":"34203","type":"BoxAnnotation"},{"id":"34213","type":"GlyphRenderer"}],"title":{"id":"34215","type":"Title"},"toolbar":{"id":"34201","type":"Toolbar"},"x_range":{"id":"34177","type":"DataRange1d"},"x_scale":{"id":"34181","type":"LinearScale"},"y_range":{"id":"34179","type":"DataRange1d"},"y_scale":{"id":"34183","type":"LinearScale"}},"id":"34176","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"34222","type":"Selection"},{"attributes":{},"id":"34199","type":"ResetTool"},{"attributes":{"formatter":{"id":"34217","type":"BasicTickFormatter"},"plot":{"id":"34176","subtype":"Figure","type":"Plot"},"ticker":{"id":"34191","type":"BasicTicker"}},"id":"34190","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"34212","type":"Ray"},{"attributes":{},"id":"34200","type":"HelpTool"},{"attributes":{},"id":"34223","type":"UnionRenderers"},{"attributes":{},"id":"34191","type":"BasicTicker"},{"attributes":{"callback":null},"id":"34177","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34195","type":"PanTool"},{"id":"34196","type":"WheelZoomTool"},{"id":"34197","type":"BoxZoomTool"},{"id":"34198","type":"SaveTool"},{"id":"34199","type":"ResetTool"},{"id":"34200","type":"HelpTool"}]},"id":"34201","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"34176","subtype":"Figure","type":"Plot"},"ticker":{"id":"34191","type":"BasicTicker"}},"id":"34194","type":"Grid"},{"attributes":{},"id":"34183","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34203","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"34179","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"34211","type":"Ray"}],"root_ids":["34176"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"0a9fb776-3a01-4c5d-b537-9a9cd5594090","roots":{"34176":"18db6649-9b45-4f71-ab29-5d10fd344017"}}];
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