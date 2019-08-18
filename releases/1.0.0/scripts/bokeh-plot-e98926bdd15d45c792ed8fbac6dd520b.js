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
      };var element = document.getElementById("ff8987b7-f076-4c29-aa8b-31e7a2581cb9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ff8987b7-f076-4c29-aa8b-31e7a2581cb9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8905b940-b0f5-49d1-868d-0943b4c41280":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"8823","type":"Selection"},"selection_policy":{"id":"8824","type":"UnionRenderers"}},"id":"8811","type":"ColumnDataSource"},{"attributes":{},"id":"8801","type":"HelpTool"},{"attributes":{},"id":"8824","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"8777","subtype":"Figure","type":"Plot"},"ticker":{"id":"8792","type":"BasicTicker"}},"id":"8795","type":"Grid"},{"attributes":{},"id":"8784","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8796","type":"PanTool"},{"id":"8797","type":"WheelZoomTool"},{"id":"8798","type":"BoxZoomTool"},{"id":"8799","type":"SaveTool"},{"id":"8800","type":"ResetTool"},{"id":"8801","type":"HelpTool"}]},"id":"8802","type":"Toolbar"},{"attributes":{"callback":null},"id":"8778","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"8813","type":"Annulus"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8804","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"orange"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"orange"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"8812","type":"Annulus"},{"attributes":{"callback":null},"id":"8780","type":"DataRange1d"},{"attributes":{"data_source":{"id":"8811","type":"ColumnDataSource"},"glyph":{"id":"8812","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8813","type":"Annulus"},"selection_glyph":null,"view":{"id":"8815","type":"CDSView"}},"id":"8814","type":"GlyphRenderer"},{"attributes":{},"id":"8782","type":"LinearScale"},{"attributes":{"source":{"id":"8811","type":"ColumnDataSource"}},"id":"8815","type":"CDSView"},{"attributes":{},"id":"8796","type":"PanTool"},{"attributes":{"formatter":{"id":"8819","type":"BasicTickFormatter"},"plot":{"id":"8777","subtype":"Figure","type":"Plot"},"ticker":{"id":"8787","type":"BasicTicker"}},"id":"8786","type":"LinearAxis"},{"attributes":{},"id":"8797","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"8817","type":"Title"},{"attributes":{},"id":"8792","type":"BasicTicker"},{"attributes":{"overlay":{"id":"8804","type":"BoxAnnotation"}},"id":"8798","type":"BoxZoomTool"},{"attributes":{},"id":"8819","type":"BasicTickFormatter"},{"attributes":{},"id":"8787","type":"BasicTicker"},{"attributes":{"formatter":{"id":"8821","type":"BasicTickFormatter"},"plot":{"id":"8777","subtype":"Figure","type":"Plot"},"ticker":{"id":"8792","type":"BasicTicker"}},"id":"8791","type":"LinearAxis"},{"attributes":{},"id":"8799","type":"SaveTool"},{"attributes":{},"id":"8821","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8777","subtype":"Figure","type":"Plot"},"ticker":{"id":"8787","type":"BasicTicker"}},"id":"8790","type":"Grid"},{"attributes":{},"id":"8800","type":"ResetTool"},{"attributes":{"below":[{"id":"8786","type":"LinearAxis"}],"left":[{"id":"8791","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8786","type":"LinearAxis"},{"id":"8790","type":"Grid"},{"id":"8791","type":"LinearAxis"},{"id":"8795","type":"Grid"},{"id":"8804","type":"BoxAnnotation"},{"id":"8814","type":"GlyphRenderer"}],"title":{"id":"8817","type":"Title"},"toolbar":{"id":"8802","type":"Toolbar"},"x_range":{"id":"8778","type":"DataRange1d"},"x_scale":{"id":"8782","type":"LinearScale"},"y_range":{"id":"8780","type":"DataRange1d"},"y_scale":{"id":"8784","type":"LinearScale"}},"id":"8777","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8823","type":"Selection"}],"root_ids":["8777"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"8905b940-b0f5-49d1-868d-0943b4c41280","roots":{"8777":"ff8987b7-f076-4c29-aa8b-31e7a2581cb9"}}];
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