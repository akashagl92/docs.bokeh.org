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
      };var element = document.getElementById("1baf03d8-4f23-4bb2-8401-57dc21173686");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1baf03d8-4f23-4bb2-8401-57dc21173686' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ce15fc4d-fa08-491c-9ec9-d9e19e37e5cf":{"roots":{"references":[{"attributes":{},"id":"33962","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33948","type":"BoxAnnotation"},{"attributes":{},"id":"33936","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"33960","type":"Title"},{"attributes":{"below":[{"id":"33930","type":"LinearAxis"}],"left":[{"id":"33935","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33930","type":"LinearAxis"},{"id":"33934","type":"Grid"},{"id":"33935","type":"LinearAxis"},{"id":"33939","type":"Grid"},{"id":"33948","type":"BoxAnnotation"},{"id":"33958","type":"GlyphRenderer"}],"title":{"id":"33960","type":"Title"},"toolbar":{"id":"33946","type":"Toolbar"},"x_range":{"id":"33922","type":"DataRange1d"},"x_scale":{"id":"33926","type":"LinearScale"},"y_range":{"id":"33924","type":"DataRange1d"},"y_scale":{"id":"33928","type":"LinearScale"}},"id":"33921","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33943","type":"SaveTool"},{"attributes":{"formatter":{"id":"33962","type":"BasicTickFormatter"},"plot":{"id":"33921","subtype":"Figure","type":"Plot"},"ticker":{"id":"33936","type":"BasicTicker"}},"id":"33935","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33940","type":"PanTool"},{"id":"33941","type":"WheelZoomTool"},{"id":"33942","type":"BoxZoomTool"},{"id":"33943","type":"SaveTool"},{"id":"33944","type":"ResetTool"},{"id":"33945","type":"HelpTool"}]},"id":"33946","type":"Toolbar"},{"attributes":{"callback":null},"id":"33924","type":"DataRange1d"},{"attributes":{"source":{"id":"33955","type":"ColumnDataSource"}},"id":"33959","type":"CDSView"},{"attributes":{"formatter":{"id":"33964","type":"BasicTickFormatter"},"plot":{"id":"33921","subtype":"Figure","type":"Plot"},"ticker":{"id":"33931","type":"BasicTicker"}},"id":"33930","type":"LinearAxis"},{"attributes":{"plot":{"id":"33921","subtype":"Figure","type":"Plot"},"ticker":{"id":"33931","type":"BasicTicker"}},"id":"33934","type":"Grid"},{"attributes":{},"id":"33945","type":"HelpTool"},{"attributes":{},"id":"33967","type":"Selection"},{"attributes":{},"id":"33926","type":"LinearScale"},{"attributes":{},"id":"33931","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,2],"y":[6,7,2,2]},"selected":{"id":"33967","type":"Selection"},"selection_policy":{"id":"33968","type":"UnionRenderers"}},"id":"33955","type":"ColumnDataSource"},{"attributes":{},"id":"33968","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"33921","subtype":"Figure","type":"Plot"},"ticker":{"id":"33936","type":"BasicTicker"}},"id":"33939","type":"Grid"},{"attributes":{"data_source":{"id":"33955","type":"ColumnDataSource"},"glyph":{"id":"33956","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33957","type":"Patch"},"selection_glyph":null,"view":{"id":"33959","type":"CDSView"}},"id":"33958","type":"GlyphRenderer"},{"attributes":{},"id":"33940","type":"PanTool"},{"attributes":{},"id":"33941","type":"WheelZoomTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"33957","type":"Patch"},{"attributes":{"callback":null},"id":"33922","type":"DataRange1d"},{"attributes":{"fill_color":"#99d8c9","line_color":"#99d8c9","x":{"field":"x"},"y":{"field":"y"}},"id":"33956","type":"Patch"},{"attributes":{},"id":"33944","type":"ResetTool"},{"attributes":{"overlay":{"id":"33948","type":"BoxAnnotation"}},"id":"33942","type":"BoxZoomTool"},{"attributes":{},"id":"33928","type":"LinearScale"},{"attributes":{},"id":"33964","type":"BasicTickFormatter"}],"root_ids":["33921"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"ce15fc4d-fa08-491c-9ec9-d9e19e37e5cf","roots":{"33921":"1baf03d8-4f23-4bb2-8401-57dc21173686"}}];
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