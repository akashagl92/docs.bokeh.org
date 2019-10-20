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
      };var element = document.getElementById("9f0d9cf2-aacd-40e0-a7a5-9b387d1eb055");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9f0d9cf2-aacd-40e0-a7a5-9b387d1eb055' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"abdf106f-080e-42ba-8f68-6485303f50f8":{"roots":{"references":[{"attributes":{},"id":"13074","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"13022","subtype":"Figure","type":"Plot"},"ticker":{"id":"13037","type":"BasicTicker"}},"id":"13040","type":"Grid"},{"attributes":{"callback":null},"id":"13023","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13041","type":"PanTool"},{"id":"13042","type":"WheelZoomTool"},{"id":"13043","type":"BoxZoomTool"},{"id":"13044","type":"SaveTool"},{"id":"13045","type":"ResetTool"},{"id":"13046","type":"HelpTool"}]},"id":"13047","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"13057","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"13049","type":"BoxAnnotation"},{"attributes":{},"id":"13029","type":"LinearScale"},{"attributes":{"callback":null},"id":"13025","type":"DataRange1d"},{"attributes":{"source":{"id":"13056","type":"ColumnDataSource"}},"id":"13060","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"13073","type":"Selection"},"selection_policy":{"id":"13074","type":"UnionRenderers"}},"id":"13056","type":"ColumnDataSource"},{"attributes":{},"id":"13027","type":"LinearScale"},{"attributes":{},"id":"13042","type":"WheelZoomTool"},{"attributes":{"align":"right","background_fill_color":{"value":"#aaaaee"},"plot":null,"text":"Title With Options","text_color":{"value":"orange"},"text_font_size":{"value":"25px"}},"id":"13061","type":"Title"},{"attributes":{"formatter":{"id":"13069","type":"BasicTickFormatter"},"plot":{"id":"13022","subtype":"Figure","type":"Plot"},"ticker":{"id":"13032","type":"BasicTicker"}},"id":"13031","type":"LinearAxis"},{"attributes":{},"id":"13041","type":"PanTool"},{"attributes":{},"id":"13069","type":"BasicTickFormatter"},{"attributes":{},"id":"13037","type":"BasicTicker"},{"attributes":{"overlay":{"id":"13049","type":"BoxAnnotation"}},"id":"13043","type":"BoxZoomTool"},{"attributes":{},"id":"13044","type":"SaveTool"},{"attributes":{},"id":"13045","type":"ResetTool"},{"attributes":{},"id":"13032","type":"BasicTicker"},{"attributes":{},"id":"13071","type":"BasicTickFormatter"},{"attributes":{},"id":"13073","type":"Selection"},{"attributes":{"plot":{"id":"13022","subtype":"Figure","type":"Plot"},"ticker":{"id":"13032","type":"BasicTicker"}},"id":"13035","type":"Grid"},{"attributes":{},"id":"13046","type":"HelpTool"},{"attributes":{"below":[{"id":"13031","type":"LinearAxis"}],"left":[{"id":"13036","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"13031","type":"LinearAxis"},{"id":"13035","type":"Grid"},{"id":"13036","type":"LinearAxis"},{"id":"13040","type":"Grid"},{"id":"13049","type":"BoxAnnotation"},{"id":"13059","type":"GlyphRenderer"}],"title":{"id":"13061","type":"Title"},"toolbar":{"id":"13047","type":"Toolbar"},"x_range":{"id":"13023","type":"DataRange1d"},"x_scale":{"id":"13027","type":"LinearScale"},"y_range":{"id":"13025","type":"DataRange1d"},"y_scale":{"id":"13029","type":"LinearScale"}},"id":"13022","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"13071","type":"BasicTickFormatter"},"plot":{"id":"13022","subtype":"Figure","type":"Plot"},"ticker":{"id":"13037","type":"BasicTicker"}},"id":"13036","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"13058","type":"Circle"},{"attributes":{"data_source":{"id":"13056","type":"ColumnDataSource"},"glyph":{"id":"13057","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13058","type":"Circle"},"selection_glyph":null,"view":{"id":"13060","type":"CDSView"}},"id":"13059","type":"GlyphRenderer"}],"root_ids":["13022"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"abdf106f-080e-42ba-8f68-6485303f50f8","roots":{"13022":"9f0d9cf2-aacd-40e0-a7a5-9b387d1eb055"}}];
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