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
      };var element = document.getElementById("012865a5-bd3f-4667-a730-b69983c4677b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '012865a5-bd3f-4667-a730-b69983c4677b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e6157a91-8a42-4989-98f3-9fcdb6b9cd18":{"roots":{"references":[{"attributes":{"data_source":{"id":"11590","type":"ColumnDataSource"},"glyph":{"id":"11591","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11592","type":"Patch"},"selection_glyph":null,"view":{"id":"11594","type":"CDSView"}},"id":"11593","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2,3,"NaN",4,5,6],"y":[6,7,5,"NaN",7,3,6]},"selected":{"id":"11602","type":"Selection"},"selection_policy":{"id":"11603","type":"UnionRenderers"}},"id":"11590","type":"ColumnDataSource"},{"attributes":{},"id":"11575","type":"PanTool"},{"attributes":{},"id":"11580","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11575","type":"PanTool"},{"id":"11576","type":"WheelZoomTool"},{"id":"11577","type":"BoxZoomTool"},{"id":"11578","type":"SaveTool"},{"id":"11579","type":"ResetTool"},{"id":"11580","type":"HelpTool"}]},"id":"11581","type":"Toolbar"},{"attributes":{},"id":"11579","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"11556","subtype":"Figure","type":"Plot"},"ticker":{"id":"11571","type":"BasicTicker"}},"id":"11574","type":"Grid"},{"attributes":{},"id":"11563","type":"LinearScale"},{"attributes":{},"id":"11603","type":"UnionRenderers"},{"attributes":{},"id":"11599","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"11583","type":"BoxAnnotation"}},"id":"11577","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11583","type":"BoxAnnotation"},{"attributes":{},"id":"11571","type":"BasicTicker"},{"attributes":{},"id":"11578","type":"SaveTool"},{"attributes":{},"id":"11576","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"11557","type":"DataRange1d"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11592","type":"Patch"},{"attributes":{"source":{"id":"11590","type":"ColumnDataSource"}},"id":"11594","type":"CDSView"},{"attributes":{"formatter":{"id":"11599","type":"BasicTickFormatter"},"plot":{"id":"11556","subtype":"Figure","type":"Plot"},"ticker":{"id":"11566","type":"BasicTicker"}},"id":"11565","type":"LinearAxis"},{"attributes":{"plot":{"id":"11556","subtype":"Figure","type":"Plot"},"ticker":{"id":"11566","type":"BasicTicker"}},"id":"11569","type":"Grid"},{"attributes":{},"id":"11597","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"11559","type":"DataRange1d"},{"attributes":{},"id":"11602","type":"Selection"},{"attributes":{},"id":"11561","type":"LinearScale"},{"attributes":{"below":[{"id":"11565","type":"LinearAxis"}],"left":[{"id":"11570","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11565","type":"LinearAxis"},{"id":"11569","type":"Grid"},{"id":"11570","type":"LinearAxis"},{"id":"11574","type":"Grid"},{"id":"11583","type":"BoxAnnotation"},{"id":"11593","type":"GlyphRenderer"}],"title":{"id":"11595","type":"Title"},"toolbar":{"id":"11581","type":"Toolbar"},"x_range":{"id":"11557","type":"DataRange1d"},"x_scale":{"id":"11561","type":"LinearScale"},"y_range":{"id":"11559","type":"DataRange1d"},"y_scale":{"id":"11563","type":"LinearScale"}},"id":"11556","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"11595","type":"Title"},{"attributes":{"fill_alpha":0.5,"fill_color":"#1f77b4","line_alpha":0.5,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11591","type":"Patch"},{"attributes":{},"id":"11566","type":"BasicTicker"},{"attributes":{"formatter":{"id":"11597","type":"BasicTickFormatter"},"plot":{"id":"11556","subtype":"Figure","type":"Plot"},"ticker":{"id":"11571","type":"BasicTicker"}},"id":"11570","type":"LinearAxis"}],"root_ids":["11556"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"e6157a91-8a42-4989-98f3-9fcdb6b9cd18","roots":{"11556":"012865a5-bd3f-4667-a730-b69983c4677b"}}];
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