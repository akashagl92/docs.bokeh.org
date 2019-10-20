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
      };var element = document.getElementById("114aadaf-4b44-4262-8676-fcadc6988813");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '114aadaf-4b44-4262-8676-fcadc6988813' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"47b48d9b-9b4d-44a0-9e40-63728939b391":{"roots":{"references":[{"attributes":{},"id":"34202","type":"WheelZoomTool"},{"attributes":{},"id":"34192","type":"BasicTicker"},{"attributes":{},"id":"34223","type":"BasicTickFormatter"},{"attributes":{},"id":"34204","type":"SaveTool"},{"attributes":{"plot":{"id":"34182","subtype":"Figure","type":"Plot"},"ticker":{"id":"34192","type":"BasicTicker"}},"id":"34195","type":"Grid"},{"attributes":{"below":[{"id":"34191","type":"LinearAxis"}],"left":[{"id":"34196","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34191","type":"LinearAxis"},{"id":"34195","type":"Grid"},{"id":"34196","type":"LinearAxis"},{"id":"34200","type":"Grid"},{"id":"34209","type":"BoxAnnotation"},{"id":"34219","type":"GlyphRenderer"}],"title":{"id":"34221","type":"Title"},"toolbar":{"id":"34207","type":"Toolbar"},"x_range":{"id":"34183","type":"DataRange1d"},"x_scale":{"id":"34187","type":"LinearScale"},"y_range":{"id":"34185","type":"DataRange1d"},"y_scale":{"id":"34189","type":"LinearScale"}},"id":"34182","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"34225","type":"BasicTickFormatter"},{"attributes":{},"id":"34205","type":"ResetTool"},{"attributes":{"formatter":{"id":"34223","type":"BasicTickFormatter"},"plot":{"id":"34182","subtype":"Figure","type":"Plot"},"ticker":{"id":"34197","type":"BasicTicker"}},"id":"34196","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"34218","type":"Ray"},{"attributes":{},"id":"34227","type":"UnionRenderers"},{"attributes":{},"id":"34206","type":"HelpTool"},{"attributes":{},"id":"34197","type":"BasicTicker"},{"attributes":{"callback":null},"id":"34183","type":"DataRange1d"},{"attributes":{},"id":"34228","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34201","type":"PanTool"},{"id":"34202","type":"WheelZoomTool"},{"id":"34203","type":"BoxZoomTool"},{"id":"34204","type":"SaveTool"},{"id":"34205","type":"ResetTool"},{"id":"34206","type":"HelpTool"}]},"id":"34207","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"34182","subtype":"Figure","type":"Plot"},"ticker":{"id":"34197","type":"BasicTicker"}},"id":"34200","type":"Grid"},{"attributes":{},"id":"34189","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34209","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"34185","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"34217","type":"Ray"},{"attributes":{},"id":"34187","type":"LinearScale"},{"attributes":{"source":{"id":"34216","type":"ColumnDataSource"}},"id":"34220","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"34228","type":"Selection"},"selection_policy":{"id":"34227","type":"UnionRenderers"}},"id":"34216","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"34216","type":"ColumnDataSource"},"glyph":{"id":"34217","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34218","type":"Ray"},"selection_glyph":null,"view":{"id":"34220","type":"CDSView"}},"id":"34219","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"34225","type":"BasicTickFormatter"},"plot":{"id":"34182","subtype":"Figure","type":"Plot"},"ticker":{"id":"34192","type":"BasicTicker"}},"id":"34191","type":"LinearAxis"},{"attributes":{},"id":"34201","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"34221","type":"Title"},{"attributes":{"overlay":{"id":"34209","type":"BoxAnnotation"}},"id":"34203","type":"BoxZoomTool"}],"root_ids":["34182"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"47b48d9b-9b4d-44a0-9e40-63728939b391","roots":{"34182":"114aadaf-4b44-4262-8676-fcadc6988813"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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