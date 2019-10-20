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
      };var element = document.getElementById("b301baf7-7c7f-41e1-ba52-62878f332889");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b301baf7-7c7f-41e1-ba52-62878f332889' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e5e608e9-1c50-4f7a-865c-b4939e455602":{"roots":{"references":[{"attributes":{},"id":"13918","type":"ResetTool"},{"attributes":{},"id":"13915","type":"WheelZoomTool"},{"attributes":{},"id":"13939","type":"BasicTickFormatter"},{"attributes":{},"id":"13919","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"13930","type":"Circle"},{"attributes":{},"id":"13914","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"13941","type":"Selection"},"selection_policy":{"id":"13942","type":"UnionRenderers"}},"id":"13929","type":"ColumnDataSource"},{"attributes":{},"id":"13900","type":"LinearScale"},{"attributes":{"below":[{"id":"13904","type":"LinearAxis"}],"left":[{"id":"13909","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"13904","type":"LinearAxis"},{"id":"13908","type":"Grid"},{"id":"13909","type":"LinearAxis"},{"id":"13913","type":"Grid"},{"id":"13922","type":"BoxAnnotation"},{"id":"13932","type":"GlyphRenderer"}],"title":{"id":"13935","type":"Title"},"toolbar":{"id":"13920","type":"Toolbar"},"x_range":{"id":"13896","type":"DataRange1d"},"x_scale":{"id":"13900","type":"LinearScale"},"y_range":{"id":"13898","type":"DataRange1d"},"y_scale":{"id":"13902","type":"LinearScale"}},"id":"13895","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"13902","type":"LinearScale"},{"attributes":{"bounds":[2,4],"formatter":{"id":"13937","type":"BasicTickFormatter"},"plot":{"id":"13895","subtype":"Figure","type":"Plot"},"ticker":{"id":"13905","type":"BasicTicker"}},"id":"13904","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"13935","type":"Title"},{"attributes":{"data_source":{"id":"13929","type":"ColumnDataSource"},"glyph":{"id":"13930","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13931","type":"Circle"},"selection_glyph":null,"view":{"id":"13933","type":"CDSView"}},"id":"13932","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"13939","type":"BasicTickFormatter"},"plot":{"id":"13895","subtype":"Figure","type":"Plot"},"ticker":{"id":"13910","type":"BasicTicker"}},"id":"13909","type":"LinearAxis"},{"attributes":{},"id":"13905","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13914","type":"PanTool"},{"id":"13915","type":"WheelZoomTool"},{"id":"13916","type":"BoxZoomTool"},{"id":"13917","type":"SaveTool"},{"id":"13918","type":"ResetTool"},{"id":"13919","type":"HelpTool"}]},"id":"13920","type":"Toolbar"},{"attributes":{},"id":"13917","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"13931","type":"Circle"},{"attributes":{"plot":{"id":"13895","subtype":"Figure","type":"Plot"},"ticker":{"id":"13905","type":"BasicTicker"}},"id":"13908","type":"Grid"},{"attributes":{"callback":null},"id":"13896","type":"DataRange1d"},{"attributes":{},"id":"13937","type":"BasicTickFormatter"},{"attributes":{},"id":"13910","type":"BasicTicker"},{"attributes":{"callback":null},"id":"13898","type":"DataRange1d"},{"attributes":{"overlay":{"id":"13922","type":"BoxAnnotation"}},"id":"13916","type":"BoxZoomTool"},{"attributes":{},"id":"13941","type":"Selection"},{"attributes":{"source":{"id":"13929","type":"ColumnDataSource"}},"id":"13933","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"13922","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"13895","subtype":"Figure","type":"Plot"},"ticker":{"id":"13910","type":"BasicTicker"}},"id":"13913","type":"Grid"},{"attributes":{},"id":"13942","type":"UnionRenderers"}],"root_ids":["13895"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"e5e608e9-1c50-4f7a-865c-b4939e455602","roots":{"13895":"b301baf7-7c7f-41e1-ba52-62878f332889"}}];
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