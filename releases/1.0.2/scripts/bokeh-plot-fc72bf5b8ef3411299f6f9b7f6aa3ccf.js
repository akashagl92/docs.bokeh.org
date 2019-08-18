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
      };var element = document.getElementById("554b84fd-7922-4c91-ac32-c495da5cc4ac");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '554b84fd-7922-4c91-ac32-c495da5cc4ac' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4f59ea80-4b00-4161-8ddb-effccdba8610":{"roots":{"references":[{"attributes":{},"id":"18950","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"18932","type":"BoxAnnotation"}},"id":"18926","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"18951","type":"Selection"},"selection_policy":{"id":"18950","type":"UnionRenderers"}},"id":"18939","type":"ColumnDataSource"},{"attributes":{},"id":"18946","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"18904","subtype":"Figure","type":"Plot"},"ticker":{"id":"18915","type":"BasicTicker"}},"id":"18918","type":"Grid"},{"attributes":{},"id":"18951","type":"Selection"},{"attributes":{},"id":"18927","type":"SaveTool"},{"attributes":{"formatter":{"id":"18946","type":"BasicTickFormatter"},"plot":{"id":"18904","subtype":"Figure","type":"Plot"},"ticker":{"id":"18915","type":"BasicTicker"}},"id":"18914","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"18940","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"18941","type":"Circle"},{"attributes":{"formatter":{"id":"18948","type":"BasicTickFormatter"},"plot":{"id":"18904","subtype":"Figure","type":"Plot"},"ticker":{"id":"18920","type":"BasicTicker"}},"id":"18919","type":"LinearAxis"},{"attributes":{},"id":"18929","type":"HelpTool"},{"attributes":{},"id":"18920","type":"BasicTicker"},{"attributes":{"below":[{"id":"18914","type":"LinearAxis"}],"left":[{"id":"18919","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"18914","type":"LinearAxis"},{"id":"18918","type":"Grid"},{"id":"18919","type":"LinearAxis"},{"id":"18923","type":"Grid"},{"id":"18932","type":"BoxAnnotation"},{"id":"18942","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"18930","type":"Toolbar"},"toolbar_location":"below","toolbar_sticky":false,"x_range":{"id":"18906","type":"DataRange1d"},"x_scale":{"id":"18910","type":"LinearScale"},"y_range":{"id":"18908","type":"DataRange1d"},"y_scale":{"id":"18912","type":"LinearScale"}},"id":"18904","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"18904","subtype":"Figure","type":"Plot"},"ticker":{"id":"18920","type":"BasicTicker"}},"id":"18923","type":"Grid"},{"attributes":{"callback":null},"id":"18906","type":"DataRange1d"},{"attributes":{},"id":"18928","type":"ResetTool"},{"attributes":{"callback":null},"id":"18908","type":"DataRange1d"},{"attributes":{},"id":"18910","type":"LinearScale"},{"attributes":{},"id":"18948","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18932","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18924","type":"PanTool"},{"id":"18925","type":"WheelZoomTool"},{"id":"18926","type":"BoxZoomTool"},{"id":"18927","type":"SaveTool"},{"id":"18928","type":"ResetTool"},{"id":"18929","type":"HelpTool"}]},"id":"18930","type":"Toolbar"},{"attributes":{"source":{"id":"18939","type":"ColumnDataSource"}},"id":"18943","type":"CDSView"},{"attributes":{},"id":"18915","type":"BasicTicker"},{"attributes":{},"id":"18924","type":"PanTool"},{"attributes":{},"id":"18912","type":"LinearScale"},{"attributes":{},"id":"18925","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"18939","type":"ColumnDataSource"},"glyph":{"id":"18940","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18941","type":"Circle"},"selection_glyph":null,"view":{"id":"18943","type":"CDSView"}},"id":"18942","type":"GlyphRenderer"}],"root_ids":["18904"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"4f59ea80-4b00-4161-8ddb-effccdba8610","roots":{"18904":"554b84fd-7922-4c91-ac32-c495da5cc4ac"}}];
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