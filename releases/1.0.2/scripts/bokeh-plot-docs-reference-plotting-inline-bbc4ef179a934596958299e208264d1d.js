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
      };var element = document.getElementById("57134244-4bd8-4a5b-8ca9-f1c94ca55ff4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '57134244-4bd8-4a5b-8ca9-f1c94ca55ff4' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c7d4b783-2698-489c-b526-a29f5b3592c7":{"roots":{"references":[{"attributes":{},"id":"34702","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[1,2,3,2,5]},"selected":{"id":"34726","type":"Selection"},"selection_policy":{"id":"34725","type":"UnionRenderers"}},"id":"34713","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"34679","subtype":"Figure","type":"Plot"},"ticker":{"id":"34694","type":"BasicTicker"}},"id":"34697","type":"Grid"},{"attributes":{},"id":"34703","type":"HelpTool"},{"attributes":{"formatter":{"id":"34723","type":"BasicTickFormatter"},"plot":{"id":"34679","subtype":"Figure","type":"Plot"},"ticker":{"id":"34694","type":"BasicTicker"}},"id":"34693","type":"LinearAxis"},{"attributes":{},"id":"34723","type":"BasicTickFormatter"},{"attributes":{},"id":"34686","type":"LinearScale"},{"attributes":{"below":[{"id":"34688","type":"LinearAxis"}],"left":[{"id":"34693","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34688","type":"LinearAxis"},{"id":"34692","type":"Grid"},{"id":"34693","type":"LinearAxis"},{"id":"34697","type":"Grid"},{"id":"34706","type":"BoxAnnotation"},{"id":"34716","type":"GlyphRenderer"}],"title":{"id":"34719","type":"Title"},"toolbar":{"id":"34704","type":"Toolbar"},"x_range":{"id":"34680","type":"DataRange1d"},"x_scale":{"id":"34684","type":"LinearScale"},"y_range":{"id":"34682","type":"DataRange1d"},"y_scale":{"id":"34686","type":"LinearScale"}},"id":"34679","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"34682","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34715","type":"Step"},{"attributes":{},"id":"34684","type":"LinearScale"},{"attributes":{},"id":"34694","type":"BasicTicker"},{"attributes":{"plot":{"id":"34679","subtype":"Figure","type":"Plot"},"ticker":{"id":"34689","type":"BasicTicker"}},"id":"34692","type":"Grid"},{"attributes":{},"id":"34725","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34706","type":"BoxAnnotation"},{"attributes":{},"id":"34721","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"34719","type":"Title"},{"attributes":{"callback":null},"id":"34680","type":"DataRange1d"},{"attributes":{},"id":"34699","type":"WheelZoomTool"},{"attributes":{},"id":"34698","type":"PanTool"},{"attributes":{"overlay":{"id":"34706","type":"BoxAnnotation"}},"id":"34700","type":"BoxZoomTool"},{"attributes":{},"id":"34726","type":"Selection"},{"attributes":{},"id":"34701","type":"SaveTool"},{"attributes":{},"id":"34689","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#FB8072"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34714","type":"Step"},{"attributes":{"data_source":{"id":"34713","type":"ColumnDataSource"},"glyph":{"id":"34714","type":"Step"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34715","type":"Step"},"selection_glyph":null,"view":{"id":"34717","type":"CDSView"}},"id":"34716","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"34721","type":"BasicTickFormatter"},"plot":{"id":"34679","subtype":"Figure","type":"Plot"},"ticker":{"id":"34689","type":"BasicTicker"}},"id":"34688","type":"LinearAxis"},{"attributes":{"source":{"id":"34713","type":"ColumnDataSource"}},"id":"34717","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34698","type":"PanTool"},{"id":"34699","type":"WheelZoomTool"},{"id":"34700","type":"BoxZoomTool"},{"id":"34701","type":"SaveTool"},{"id":"34702","type":"ResetTool"},{"id":"34703","type":"HelpTool"}]},"id":"34704","type":"Toolbar"}],"root_ids":["34679"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"c7d4b783-2698-489c-b526-a29f5b3592c7","roots":{"34679":"57134244-4bd8-4a5b-8ca9-f1c94ca55ff4"}}];
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