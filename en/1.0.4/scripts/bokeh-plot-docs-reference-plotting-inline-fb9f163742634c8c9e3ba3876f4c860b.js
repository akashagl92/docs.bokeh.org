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
      };var element = document.getElementById("5e0fbf93-e710-41d1-96b0-b815fbc9ca29");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5e0fbf93-e710-41d1-96b0-b815fbc9ca29' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"74f6011a-524e-4065-b5b0-eab45ec724b6":{"roots":{"references":[{"attributes":{"formatter":{"id":"34395","type":"BasicTickFormatter"},"plot":{"id":"34352","subtype":"Figure","type":"Plot"},"ticker":{"id":"34362","type":"BasicTicker"}},"id":"34361","type":"LinearAxis"},{"attributes":{},"id":"34374","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34379","type":"BoxAnnotation"},{"attributes":{},"id":"34397","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"34387","type":"Segment"},{"attributes":{},"id":"34398","type":"Selection"},{"attributes":{"below":[{"id":"34361","type":"LinearAxis"}],"left":[{"id":"34366","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34361","type":"LinearAxis"},{"id":"34365","type":"Grid"},{"id":"34366","type":"LinearAxis"},{"id":"34370","type":"Grid"},{"id":"34379","type":"BoxAnnotation"},{"id":"34389","type":"GlyphRenderer"}],"title":{"id":"34391","type":"Title"},"toolbar":{"id":"34377","type":"Toolbar"},"x_range":{"id":"34353","type":"DataRange1d"},"x_scale":{"id":"34357","type":"LinearScale"},"y_range":{"id":"34355","type":"DataRange1d"},"y_scale":{"id":"34359","type":"LinearScale"}},"id":"34352","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34371","type":"PanTool"},{"id":"34372","type":"WheelZoomTool"},{"id":"34373","type":"BoxZoomTool"},{"id":"34374","type":"SaveTool"},{"id":"34375","type":"ResetTool"},{"id":"34376","type":"HelpTool"}]},"id":"34377","type":"Toolbar"},{"attributes":{},"id":"34371","type":"PanTool"},{"attributes":{"formatter":{"id":"34393","type":"BasicTickFormatter"},"plot":{"id":"34352","subtype":"Figure","type":"Plot"},"ticker":{"id":"34367","type":"BasicTicker"}},"id":"34366","type":"LinearAxis"},{"attributes":{},"id":"34393","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"34355","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x0":[1,2,3],"x1":[1,2,3],"y0":[1,2,3],"y1":[1.2,2.5,3.7]},"selected":{"id":"34398","type":"Selection"},"selection_policy":{"id":"34397","type":"UnionRenderers"}},"id":"34386","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"34353","type":"DataRange1d"},{"attributes":{"data_source":{"id":"34386","type":"ColumnDataSource"},"glyph":{"id":"34387","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34388","type":"Segment"},"selection_glyph":null,"view":{"id":"34390","type":"CDSView"}},"id":"34389","type":"GlyphRenderer"},{"attributes":{},"id":"34362","type":"BasicTicker"},{"attributes":{"source":{"id":"34386","type":"ColumnDataSource"}},"id":"34390","type":"CDSView"},{"attributes":{"plot":{"id":"34352","subtype":"Figure","type":"Plot"},"ticker":{"id":"34362","type":"BasicTicker"}},"id":"34365","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"34388","type":"Segment"},{"attributes":{},"id":"34372","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"34391","type":"Title"},{"attributes":{},"id":"34376","type":"HelpTool"},{"attributes":{},"id":"34359","type":"LinearScale"},{"attributes":{},"id":"34367","type":"BasicTicker"},{"attributes":{},"id":"34357","type":"LinearScale"},{"attributes":{"overlay":{"id":"34379","type":"BoxAnnotation"}},"id":"34373","type":"BoxZoomTool"},{"attributes":{},"id":"34375","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"34352","subtype":"Figure","type":"Plot"},"ticker":{"id":"34367","type":"BasicTicker"}},"id":"34370","type":"Grid"},{"attributes":{},"id":"34395","type":"BasicTickFormatter"}],"root_ids":["34352"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"74f6011a-524e-4065-b5b0-eab45ec724b6","roots":{"34352":"5e0fbf93-e710-41d1-96b0-b815fbc9ca29"}}];
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