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
      };var element = document.getElementById("65c26c50-6bc2-4a08-bd34-b1366aad9d02");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '65c26c50-6bc2-4a08-bd34-b1366aad9d02' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1239e677-c51f-4c34-be76-7bcb9a3cd872":{"roots":{"references":[{"attributes":{},"id":"12241","type":"LinearScale"},{"attributes":{},"id":"12283","type":"UnionRenderers"},{"attributes":{"below":[{"id":"12245","type":"LinearAxis"}],"left":[{"id":"12250","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"12245","type":"LinearAxis"},{"id":"12249","type":"Grid"},{"id":"12250","type":"LinearAxis"},{"id":"12254","type":"Grid"},{"id":"12263","type":"BoxAnnotation"},{"id":"12273","type":"GlyphRenderer"}],"title":{"id":"12275","type":"Title"},"toolbar":{"id":"12261","type":"Toolbar"},"x_range":{"id":"12237","type":"DataRange1d"},"x_scale":{"id":"12241","type":"LinearScale"},"y_range":{"id":"12239","type":"DataRange1d"},"y_scale":{"id":"12243","type":"LinearScale"}},"id":"12236","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12255","type":"PanTool"},{"attributes":{"formatter":{"id":"12279","type":"BasicTickFormatter"},"plot":{"id":"12236","subtype":"Figure","type":"Plot"},"ticker":{"id":"12246","type":"BasicTicker"}},"id":"12245","type":"LinearAxis"},{"attributes":{},"id":"12256","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"12270","type":"ColumnDataSource"},"glyph":{"id":"12271","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12272","type":"Segment"},"selection_glyph":null,"view":{"id":"12274","type":"CDSView"}},"id":"12273","type":"GlyphRenderer"},{"attributes":{"source":{"id":"12270","type":"ColumnDataSource"}},"id":"12274","type":"CDSView"},{"attributes":{},"id":"12260","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x0":[1,2,3],"x1":[1.2,2.4,3.1],"y0":[1,2,3],"y1":[1.2,2.5,3.7]},"selected":{"id":"12282","type":"Selection"},"selection_policy":{"id":"12283","type":"UnionRenderers"}},"id":"12270","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"12263","type":"BoxAnnotation"}},"id":"12257","type":"BoxZoomTool"},{"attributes":{},"id":"12246","type":"BasicTicker"},{"attributes":{},"id":"12258","type":"SaveTool"},{"attributes":{},"id":"12279","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"12236","subtype":"Figure","type":"Plot"},"ticker":{"id":"12246","type":"BasicTicker"}},"id":"12249","type":"Grid"},{"attributes":{},"id":"12282","type":"Selection"},{"attributes":{},"id":"12259","type":"ResetTool"},{"attributes":{},"id":"12277","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"12272","type":"Segment"},{"attributes":{"formatter":{"id":"12277","type":"BasicTickFormatter"},"plot":{"id":"12236","subtype":"Figure","type":"Plot"},"ticker":{"id":"12251","type":"BasicTicker"}},"id":"12250","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12255","type":"PanTool"},{"id":"12256","type":"WheelZoomTool"},{"id":"12257","type":"BoxZoomTool"},{"id":"12258","type":"SaveTool"},{"id":"12259","type":"ResetTool"},{"id":"12260","type":"HelpTool"}]},"id":"12261","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"12275","type":"Title"},{"attributes":{"callback":null},"id":"12237","type":"DataRange1d"},{"attributes":{},"id":"12251","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"12236","subtype":"Figure","type":"Plot"},"ticker":{"id":"12251","type":"BasicTicker"}},"id":"12254","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12263","type":"BoxAnnotation"},{"attributes":{},"id":"12243","type":"LinearScale"},{"attributes":{"callback":null},"id":"12239","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"12271","type":"Segment"}],"root_ids":["12236"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"1239e677-c51f-4c34-be76-7bcb9a3cd872","roots":{"12236":"65c26c50-6bc2-4a08-bd34-b1366aad9d02"}}];
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