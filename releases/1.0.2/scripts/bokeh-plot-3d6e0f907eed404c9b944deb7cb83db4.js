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
      };var element = document.getElementById("8af81a8e-e60e-4b21-a05b-6ca62843db31");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8af81a8e-e60e-4b21-a05b-6ca62843db31' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"964b3016-3b36-447f-be14-34ef42849a45":{"roots":{"references":[{"attributes":{"below":[{"id":"13905","type":"LinearAxis"}],"left":[{"id":"13910","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"13905","type":"LinearAxis"},{"id":"13909","type":"Grid"},{"id":"13910","type":"LinearAxis"},{"id":"13914","type":"Grid"},{"id":"13923","type":"BoxAnnotation"},{"id":"13933","type":"GlyphRenderer"}],"title":{"id":"13936","type":"Title"},"toolbar":{"id":"13921","type":"Toolbar"},"x_range":{"id":"13897","type":"DataRange1d"},"x_scale":{"id":"13901","type":"LinearScale"},"y_range":{"id":"13899","type":"DataRange1d"},"y_scale":{"id":"13903","type":"LinearScale"}},"id":"13896","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"13940","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"13896","subtype":"Figure","type":"Plot"},"ticker":{"id":"13911","type":"BasicTicker"}},"id":"13914","type":"Grid"},{"attributes":{"callback":null},"id":"13897","type":"DataRange1d"},{"attributes":{"data_source":{"id":"13930","type":"ColumnDataSource"},"glyph":{"id":"13931","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13932","type":"Circle"},"selection_glyph":null,"view":{"id":"13934","type":"CDSView"}},"id":"13933","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"13899","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"13931","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"13923","type":"BoxAnnotation"},{"attributes":{},"id":"13901","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"13932","type":"Circle"},{"attributes":{"plot":{"id":"13896","subtype":"Figure","type":"Plot"},"ticker":{"id":"13906","type":"BasicTicker"}},"id":"13909","type":"Grid"},{"attributes":{"source":{"id":"13930","type":"ColumnDataSource"}},"id":"13934","type":"CDSView"},{"attributes":{},"id":"13915","type":"PanTool"},{"attributes":{},"id":"13903","type":"LinearScale"},{"attributes":{},"id":"13919","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"13936","type":"Title"},{"attributes":{},"id":"13916","type":"WheelZoomTool"},{"attributes":{},"id":"13942","type":"UnionRenderers"},{"attributes":{"bounds":[2,4],"formatter":{"id":"13938","type":"BasicTickFormatter"},"plot":{"id":"13896","subtype":"Figure","type":"Plot"},"ticker":{"id":"13906","type":"BasicTicker"}},"id":"13905","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"13943","type":"Selection"},"selection_policy":{"id":"13942","type":"UnionRenderers"}},"id":"13930","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13915","type":"PanTool"},{"id":"13916","type":"WheelZoomTool"},{"id":"13917","type":"BoxZoomTool"},{"id":"13918","type":"SaveTool"},{"id":"13919","type":"ResetTool"},{"id":"13920","type":"HelpTool"}]},"id":"13921","type":"Toolbar"},{"attributes":{},"id":"13943","type":"Selection"},{"attributes":{},"id":"13911","type":"BasicTicker"},{"attributes":{},"id":"13906","type":"BasicTicker"},{"attributes":{},"id":"13920","type":"HelpTool"},{"attributes":{},"id":"13918","type":"SaveTool"},{"attributes":{"formatter":{"id":"13940","type":"BasicTickFormatter"},"plot":{"id":"13896","subtype":"Figure","type":"Plot"},"ticker":{"id":"13911","type":"BasicTicker"}},"id":"13910","type":"LinearAxis"},{"attributes":{},"id":"13938","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"13923","type":"BoxAnnotation"}},"id":"13917","type":"BoxZoomTool"}],"root_ids":["13896"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"964b3016-3b36-447f-be14-34ef42849a45","roots":{"13896":"8af81a8e-e60e-4b21-a05b-6ca62843db31"}}];
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