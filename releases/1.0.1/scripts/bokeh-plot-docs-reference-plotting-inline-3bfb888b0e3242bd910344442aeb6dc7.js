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
      };var element = document.getElementById("997b7bfc-6a3a-4435-a16d-7534fb9a777f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '997b7bfc-6a3a-4435-a16d-7534fb9a777f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"fe152808-feab-4bc6-ada7-a91aab5502ee":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"33529","type":"Title"},{"attributes":{"overlay":{"id":"33516","type":"BoxAnnotation"}},"id":"33510","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"33523","type":"ColumnDataSource"},"glyph":{"id":"33524","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33525","type":"InvertedTriangle"},"selection_glyph":null,"view":{"id":"33527","type":"CDSView"}},"id":"33526","type":"GlyphRenderer"},{"attributes":{},"id":"33508","type":"PanTool"},{"attributes":{},"id":"33531","type":"BasicTickFormatter"},{"attributes":{},"id":"33499","type":"BasicTicker"},{"attributes":{},"id":"33511","type":"SaveTool"},{"attributes":{},"id":"33533","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"33489","subtype":"Figure","type":"Plot"},"ticker":{"id":"33499","type":"BasicTicker"}},"id":"33502","type":"Grid"},{"attributes":{"callback":null},"id":"33490","type":"DataRange1d"},{"attributes":{},"id":"33512","type":"ResetTool"},{"attributes":{},"id":"33535","type":"Selection"},{"attributes":{"formatter":{"id":"33533","type":"BasicTickFormatter"},"plot":{"id":"33489","subtype":"Figure","type":"Plot"},"ticker":{"id":"33504","type":"BasicTicker"}},"id":"33503","type":"LinearAxis"},{"attributes":{},"id":"33513","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"33535","type":"Selection"},"selection_policy":{"id":"33536","type":"UnionRenderers"}},"id":"33523","type":"ColumnDataSource"},{"attributes":{},"id":"33536","type":"UnionRenderers"},{"attributes":{},"id":"33504","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33508","type":"PanTool"},{"id":"33509","type":"WheelZoomTool"},{"id":"33510","type":"BoxZoomTool"},{"id":"33511","type":"SaveTool"},{"id":"33512","type":"ResetTool"},{"id":"33513","type":"HelpTool"}]},"id":"33514","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"33489","subtype":"Figure","type":"Plot"},"ticker":{"id":"33504","type":"BasicTicker"}},"id":"33507","type":"Grid"},{"attributes":{},"id":"33496","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33516","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"33525","type":"InvertedTriangle"},{"attributes":{"callback":null},"id":"33492","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#DE2D26"},"line_color":{"value":"#DE2D26"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"33524","type":"InvertedTriangle"},{"attributes":{},"id":"33494","type":"LinearScale"},{"attributes":{"source":{"id":"33523","type":"ColumnDataSource"}},"id":"33527","type":"CDSView"},{"attributes":{"below":[{"id":"33498","type":"LinearAxis"}],"left":[{"id":"33503","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33498","type":"LinearAxis"},{"id":"33502","type":"Grid"},{"id":"33503","type":"LinearAxis"},{"id":"33507","type":"Grid"},{"id":"33516","type":"BoxAnnotation"},{"id":"33526","type":"GlyphRenderer"}],"title":{"id":"33529","type":"Title"},"toolbar":{"id":"33514","type":"Toolbar"},"x_range":{"id":"33490","type":"DataRange1d"},"x_scale":{"id":"33494","type":"LinearScale"},"y_range":{"id":"33492","type":"DataRange1d"},"y_scale":{"id":"33496","type":"LinearScale"}},"id":"33489","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"33531","type":"BasicTickFormatter"},"plot":{"id":"33489","subtype":"Figure","type":"Plot"},"ticker":{"id":"33499","type":"BasicTicker"}},"id":"33498","type":"LinearAxis"},{"attributes":{},"id":"33509","type":"WheelZoomTool"}],"root_ids":["33489"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"fe152808-feab-4bc6-ada7-a91aab5502ee","roots":{"33489":"997b7bfc-6a3a-4435-a16d-7534fb9a777f"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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