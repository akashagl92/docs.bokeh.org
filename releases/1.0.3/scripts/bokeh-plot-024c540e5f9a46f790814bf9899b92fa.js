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
      };var element = document.getElementById("ffcd586a-5da2-4f7f-9b61-a1758a5cdf8a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ffcd586a-5da2-4f7f-9b61-a1758a5cdf8a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e4f61356-b3aa-4a76-bd23-a8c0e5274595":{"roots":{"references":[{"attributes":{"callback":null},"id":"8784","type":"DataRange1d"},{"attributes":{},"id":"8824","type":"BasicTickFormatter"},{"attributes":{},"id":"8791","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"8817","type":"Annulus"},{"attributes":{},"id":"8803","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"8781","subtype":"Figure","type":"Plot"},"ticker":{"id":"8796","type":"BasicTicker"}},"id":"8799","type":"Grid"},{"attributes":{"overlay":{"id":"8808","type":"BoxAnnotation"}},"id":"8802","type":"BoxZoomTool"},{"attributes":{},"id":"8796","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8815","type":"ColumnDataSource"},"glyph":{"id":"8816","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8817","type":"Annulus"},"selection_glyph":null,"view":{"id":"8819","type":"CDSView"}},"id":"8818","type":"GlyphRenderer"},{"attributes":{},"id":"8800","type":"PanTool"},{"attributes":{"plot":{"id":"8781","subtype":"Figure","type":"Plot"},"ticker":{"id":"8791","type":"BasicTicker"}},"id":"8794","type":"Grid"},{"attributes":{},"id":"8828","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"8822","type":"BasicTickFormatter"},"plot":{"id":"8781","subtype":"Figure","type":"Plot"},"ticker":{"id":"8796","type":"BasicTicker"}},"id":"8795","type":"LinearAxis"},{"attributes":{},"id":"8805","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"8827","type":"Selection"},"selection_policy":{"id":"8828","type":"UnionRenderers"}},"id":"8815","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"8820","type":"Title"},{"attributes":{"source":{"id":"8815","type":"ColumnDataSource"}},"id":"8819","type":"CDSView"},{"attributes":{},"id":"8801","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"8782","type":"DataRange1d"},{"attributes":{},"id":"8827","type":"Selection"},{"attributes":{},"id":"8804","type":"ResetTool"},{"attributes":{"below":[{"id":"8790","type":"LinearAxis"}],"left":[{"id":"8795","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8790","type":"LinearAxis"},{"id":"8794","type":"Grid"},{"id":"8795","type":"LinearAxis"},{"id":"8799","type":"Grid"},{"id":"8808","type":"BoxAnnotation"},{"id":"8818","type":"GlyphRenderer"}],"title":{"id":"8820","type":"Title"},"toolbar":{"id":"8806","type":"Toolbar"},"x_range":{"id":"8782","type":"DataRange1d"},"x_scale":{"id":"8786","type":"LinearScale"},"y_range":{"id":"8784","type":"DataRange1d"},"y_scale":{"id":"8788","type":"LinearScale"}},"id":"8781","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8788","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8808","type":"BoxAnnotation"},{"attributes":{},"id":"8786","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8800","type":"PanTool"},{"id":"8801","type":"WheelZoomTool"},{"id":"8802","type":"BoxZoomTool"},{"id":"8803","type":"SaveTool"},{"id":"8804","type":"ResetTool"},{"id":"8805","type":"HelpTool"}]},"id":"8806","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"orange"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"orange"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"8816","type":"Annulus"},{"attributes":{},"id":"8822","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"8824","type":"BasicTickFormatter"},"plot":{"id":"8781","subtype":"Figure","type":"Plot"},"ticker":{"id":"8791","type":"BasicTicker"}},"id":"8790","type":"LinearAxis"}],"root_ids":["8781"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"e4f61356-b3aa-4a76-bd23-a8c0e5274595","roots":{"8781":"ffcd586a-5da2-4f7f-9b61-a1758a5cdf8a"}}];
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