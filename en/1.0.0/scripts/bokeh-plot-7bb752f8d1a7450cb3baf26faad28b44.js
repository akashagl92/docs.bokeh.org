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
      };var element = document.getElementById("eded4531-753f-4712-9f2c-b5626b2e1899");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'eded4531-753f-4712-9f2c-b5626b2e1899' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"60afcc82-a42f-4450-94df-22c00648397b":{"roots":{"references":[{"attributes":{"plot":{"id":"8862","subtype":"Figure","type":"Plot"},"ticker":{"id":"8872","type":"BasicTicker"}},"id":"8875","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"8902","type":"Title"},{"attributes":{"formatter":{"id":"8906","type":"BasicTickFormatter"},"plot":{"id":"8862","subtype":"Figure","type":"Plot"},"ticker":{"id":"8877","type":"BasicTicker"}},"id":"8876","type":"LinearAxis"},{"attributes":{},"id":"8886","type":"HelpTool"},{"attributes":{},"id":"8877","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8896","type":"ColumnDataSource"},"glyph":{"id":"8897","type":"Arc"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8898","type":"Arc"},"selection_glyph":null,"view":{"id":"8900","type":"CDSView"}},"id":"8899","type":"GlyphRenderer"},{"attributes":{},"id":"8867","type":"LinearScale"},{"attributes":{"below":[{"id":"8871","type":"LinearAxis"}],"left":[{"id":"8876","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8871","type":"LinearAxis"},{"id":"8875","type":"Grid"},{"id":"8876","type":"LinearAxis"},{"id":"8880","type":"Grid"},{"id":"8889","type":"BoxAnnotation"},{"id":"8899","type":"GlyphRenderer"}],"title":{"id":"8902","type":"Title"},"toolbar":{"id":"8887","type":"Toolbar"},"x_range":{"id":"8863","type":"DataRange1d"},"x_scale":{"id":"8867","type":"LinearScale"},"y_range":{"id":"8865","type":"DataRange1d"},"y_scale":{"id":"8869","type":"LinearScale"}},"id":"8862","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"8862","subtype":"Figure","type":"Plot"},"ticker":{"id":"8877","type":"BasicTicker"}},"id":"8880","type":"Grid"},{"attributes":{},"id":"8904","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"8904","type":"BasicTickFormatter"},"plot":{"id":"8862","subtype":"Figure","type":"Plot"},"ticker":{"id":"8872","type":"BasicTicker"}},"id":"8871","type":"LinearAxis"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_color":{"value":"navy"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"8897","type":"Arc"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8881","type":"PanTool"},{"id":"8882","type":"WheelZoomTool"},{"id":"8883","type":"BoxZoomTool"},{"id":"8884","type":"SaveTool"},{"id":"8885","type":"ResetTool"},{"id":"8886","type":"HelpTool"}]},"id":"8887","type":"Toolbar"},{"attributes":{},"id":"8869","type":"LinearScale"},{"attributes":{"callback":null},"id":"8863","type":"DataRange1d"},{"attributes":{},"id":"8909","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"8908","type":"Selection"},"selection_policy":{"id":"8909","type":"UnionRenderers"}},"id":"8896","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"8889","type":"BoxAnnotation"}},"id":"8883","type":"BoxZoomTool"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"8898","type":"Arc"},{"attributes":{"callback":null},"id":"8865","type":"DataRange1d"},{"attributes":{},"id":"8881","type":"PanTool"},{"attributes":{},"id":"8885","type":"ResetTool"},{"attributes":{},"id":"8908","type":"Selection"},{"attributes":{},"id":"8882","type":"WheelZoomTool"},{"attributes":{"source":{"id":"8896","type":"ColumnDataSource"}},"id":"8900","type":"CDSView"},{"attributes":{},"id":"8872","type":"BasicTicker"},{"attributes":{},"id":"8884","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8889","type":"BoxAnnotation"},{"attributes":{},"id":"8906","type":"BasicTickFormatter"}],"root_ids":["8862"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"60afcc82-a42f-4450-94df-22c00648397b","roots":{"8862":"eded4531-753f-4712-9f2c-b5626b2e1899"}}];
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