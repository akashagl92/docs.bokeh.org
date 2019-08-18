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
      };var element = document.getElementById("7d2dd1fb-50ae-43ac-a8e1-855cddf83027");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7d2dd1fb-50ae-43ac-a8e1-855cddf83027' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"22a9a7d4-8bd2-4347-b2a3-bfb532f49e03":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"8814","type":"Annulus"},{"attributes":{},"id":"8825","type":"Selection"},{"attributes":{},"id":"8793","type":"BasicTicker"},{"attributes":{"callback":null},"id":"8779","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8797","type":"PanTool"},{"id":"8798","type":"WheelZoomTool"},{"id":"8799","type":"BoxZoomTool"},{"id":"8800","type":"SaveTool"},{"id":"8801","type":"ResetTool"},{"id":"8802","type":"HelpTool"}]},"id":"8803","type":"Toolbar"},{"attributes":{"data_source":{"id":"8812","type":"ColumnDataSource"},"glyph":{"id":"8813","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8814","type":"Annulus"},"selection_glyph":null,"view":{"id":"8816","type":"CDSView"}},"id":"8815","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"8778","subtype":"Figure","type":"Plot"},"ticker":{"id":"8793","type":"BasicTicker"}},"id":"8796","type":"Grid"},{"attributes":{},"id":"8785","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8805","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"8781","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"orange"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"orange"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"8813","type":"Annulus"},{"attributes":{},"id":"8783","type":"LinearScale"},{"attributes":{"source":{"id":"8812","type":"ColumnDataSource"}},"id":"8816","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"8825","type":"Selection"},"selection_policy":{"id":"8824","type":"UnionRenderers"}},"id":"8812","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"8820","type":"BasicTickFormatter"},"plot":{"id":"8778","subtype":"Figure","type":"Plot"},"ticker":{"id":"8788","type":"BasicTicker"}},"id":"8787","type":"LinearAxis"},{"attributes":{},"id":"8797","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"8818","type":"Title"},{"attributes":{},"id":"8798","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"8805","type":"BoxAnnotation"}},"id":"8799","type":"BoxZoomTool"},{"attributes":{},"id":"8820","type":"BasicTickFormatter"},{"attributes":{},"id":"8800","type":"SaveTool"},{"attributes":{},"id":"8788","type":"BasicTicker"},{"attributes":{},"id":"8822","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8778","subtype":"Figure","type":"Plot"},"ticker":{"id":"8788","type":"BasicTicker"}},"id":"8791","type":"Grid"},{"attributes":{},"id":"8801","type":"ResetTool"},{"attributes":{},"id":"8824","type":"UnionRenderers"},{"attributes":{},"id":"8802","type":"HelpTool"},{"attributes":{"formatter":{"id":"8822","type":"BasicTickFormatter"},"plot":{"id":"8778","subtype":"Figure","type":"Plot"},"ticker":{"id":"8793","type":"BasicTicker"}},"id":"8792","type":"LinearAxis"},{"attributes":{"below":[{"id":"8787","type":"LinearAxis"}],"left":[{"id":"8792","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8787","type":"LinearAxis"},{"id":"8791","type":"Grid"},{"id":"8792","type":"LinearAxis"},{"id":"8796","type":"Grid"},{"id":"8805","type":"BoxAnnotation"},{"id":"8815","type":"GlyphRenderer"}],"title":{"id":"8818","type":"Title"},"toolbar":{"id":"8803","type":"Toolbar"},"x_range":{"id":"8779","type":"DataRange1d"},"x_scale":{"id":"8783","type":"LinearScale"},"y_range":{"id":"8781","type":"DataRange1d"},"y_scale":{"id":"8785","type":"LinearScale"}},"id":"8778","subtype":"Figure","type":"Plot"}],"root_ids":["8778"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"22a9a7d4-8bd2-4347-b2a3-bfb532f49e03","roots":{"8778":"7d2dd1fb-50ae-43ac-a8e1-855cddf83027"}}];
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