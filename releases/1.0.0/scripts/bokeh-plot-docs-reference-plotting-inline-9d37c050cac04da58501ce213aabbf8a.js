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
      };var element = document.getElementById("69a93f1c-b3c9-40c4-8626-d9e2cbd9bcb2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '69a93f1c-b3c9-40c4-8626-d9e2cbd9bcb2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"64e73041-3893-4923-bdce-d7e0c144621e":{"roots":{"references":[{"attributes":{"callback":null},"id":"32310","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32328","type":"PanTool"},{"id":"32329","type":"WheelZoomTool"},{"id":"32330","type":"BoxZoomTool"},{"id":"32331","type":"SaveTool"},{"id":"32332","type":"ResetTool"},{"id":"32333","type":"HelpTool"}]},"id":"32334","type":"Toolbar"},{"attributes":{},"id":"32351","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"32353","type":"BasicTickFormatter"},"plot":{"id":"32309","subtype":"Figure","type":"Plot"},"ticker":{"id":"32324","type":"BasicTicker"}},"id":"32323","type":"LinearAxis"},{"attributes":{"below":[{"id":"32318","type":"LinearAxis"}],"left":[{"id":"32323","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32318","type":"LinearAxis"},{"id":"32322","type":"Grid"},{"id":"32323","type":"LinearAxis"},{"id":"32327","type":"Grid"},{"id":"32336","type":"BoxAnnotation"},{"id":"32346","type":"GlyphRenderer"}],"title":{"id":"32349","type":"Title"},"toolbar":{"id":"32334","type":"Toolbar"},"x_range":{"id":"32310","type":"DataRange1d"},"x_scale":{"id":"32314","type":"LinearScale"},"y_range":{"id":"32312","type":"DataRange1d"},"y_scale":{"id":"32316","type":"LinearScale"}},"id":"32309","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"32309","subtype":"Figure","type":"Plot"},"ticker":{"id":"32319","type":"BasicTicker"}},"id":"32322","type":"Grid"},{"attributes":{},"id":"32314","type":"LinearScale"},{"attributes":{"overlay":{"id":"32336","type":"BoxAnnotation"}},"id":"32330","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"32351","type":"BasicTickFormatter"},"plot":{"id":"32309","subtype":"Figure","type":"Plot"},"ticker":{"id":"32319","type":"BasicTicker"}},"id":"32318","type":"LinearAxis"},{"attributes":{},"id":"32324","type":"BasicTicker"},{"attributes":{},"id":"32353","type":"BasicTickFormatter"},{"attributes":{},"id":"32316","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#7FC97F"},"inner_radius":{"units":"data","value":0.2},"line_color":{"value":"#7FC97F"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"32344","type":"Annulus"},{"attributes":{},"id":"32329","type":"WheelZoomTool"},{"attributes":{},"id":"32332","type":"ResetTool"},{"attributes":{"source":{"id":"32343","type":"ColumnDataSource"}},"id":"32347","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"32349","type":"Title"},{"attributes":{},"id":"32355","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32355","type":"Selection"},"selection_policy":{"id":"32356","type":"UnionRenderers"}},"id":"32343","type":"ColumnDataSource"},{"attributes":{},"id":"32328","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.2},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"32345","type":"Annulus"},{"attributes":{"callback":null},"id":"32312","type":"DataRange1d"},{"attributes":{},"id":"32331","type":"SaveTool"},{"attributes":{},"id":"32319","type":"BasicTicker"},{"attributes":{},"id":"32333","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"32309","subtype":"Figure","type":"Plot"},"ticker":{"id":"32324","type":"BasicTicker"}},"id":"32327","type":"Grid"},{"attributes":{},"id":"32356","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32336","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"32343","type":"ColumnDataSource"},"glyph":{"id":"32344","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32345","type":"Annulus"},"selection_glyph":null,"view":{"id":"32347","type":"CDSView"}},"id":"32346","type":"GlyphRenderer"}],"root_ids":["32309"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"64e73041-3893-4923-bdce-d7e0c144621e","roots":{"32309":"69a93f1c-b3c9-40c4-8626-d9e2cbd9bcb2"}}];
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