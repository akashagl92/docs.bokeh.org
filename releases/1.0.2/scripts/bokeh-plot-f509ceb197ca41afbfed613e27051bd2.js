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
      };var element = document.getElementById("48108380-410c-4f70-b29c-4123800d24fe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '48108380-410c-4f70-b29c-4123800d24fe' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ac2386ca-c515-403f-801b-8e60f26cd4b4":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"11593","type":"Title"},{"attributes":{},"id":"11572","type":"PanTool"},{"attributes":{},"id":"11576","type":"ResetTool"},{"attributes":{"plot":{"id":"11553","subtype":"Figure","type":"Plot"},"ticker":{"id":"11563","type":"BasicTicker"}},"id":"11566","type":"Grid"},{"attributes":{"formatter":{"id":"11597","type":"BasicTickFormatter"},"plot":{"id":"11553","subtype":"Figure","type":"Plot"},"ticker":{"id":"11568","type":"BasicTicker"}},"id":"11567","type":"LinearAxis"},{"attributes":{},"id":"11595","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"11553","subtype":"Figure","type":"Plot"},"ticker":{"id":"11568","type":"BasicTicker"}},"id":"11571","type":"Grid"},{"attributes":{},"id":"11560","type":"LinearScale"},{"attributes":{},"id":"11568","type":"BasicTicker"},{"attributes":{"below":[{"id":"11562","type":"LinearAxis"}],"left":[{"id":"11567","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11562","type":"LinearAxis"},{"id":"11566","type":"Grid"},{"id":"11567","type":"LinearAxis"},{"id":"11571","type":"Grid"},{"id":"11580","type":"BoxAnnotation"},{"id":"11590","type":"GlyphRenderer"}],"title":{"id":"11593","type":"Title"},"toolbar":{"id":"11578","type":"Toolbar"},"x_range":{"id":"11554","type":"DataRange1d"},"x_scale":{"id":"11558","type":"LinearScale"},"y_range":{"id":"11556","type":"DataRange1d"},"y_scale":{"id":"11560","type":"LinearScale"}},"id":"11553","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11572","type":"PanTool"},{"id":"11573","type":"WheelZoomTool"},{"id":"11574","type":"BoxZoomTool"},{"id":"11575","type":"SaveTool"},{"id":"11576","type":"ResetTool"},{"id":"11577","type":"HelpTool"}]},"id":"11578","type":"Toolbar"},{"attributes":{},"id":"11575","type":"SaveTool"},{"attributes":{},"id":"11600","type":"Selection"},{"attributes":{"callback":null},"id":"11554","type":"DataRange1d"},{"attributes":{"data_source":{"id":"11587","type":"ColumnDataSource"},"glyph":{"id":"11588","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11589","type":"Patch"},"selection_glyph":null,"view":{"id":"11591","type":"CDSView"}},"id":"11590","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"11556","type":"DataRange1d"},{"attributes":{},"id":"11558","type":"LinearScale"},{"attributes":{"formatter":{"id":"11595","type":"BasicTickFormatter"},"plot":{"id":"11553","subtype":"Figure","type":"Plot"},"ticker":{"id":"11563","type":"BasicTicker"}},"id":"11562","type":"LinearAxis"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11589","type":"Patch"},{"attributes":{"overlay":{"id":"11580","type":"BoxAnnotation"}},"id":"11574","type":"BoxZoomTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"#1f77b4","line_alpha":0.5,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11588","type":"Patch"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11580","type":"BoxAnnotation"},{"attributes":{},"id":"11597","type":"BasicTickFormatter"},{"attributes":{},"id":"11573","type":"WheelZoomTool"},{"attributes":{},"id":"11563","type":"BasicTicker"},{"attributes":{},"id":"11599","type":"UnionRenderers"},{"attributes":{},"id":"11577","type":"HelpTool"},{"attributes":{"source":{"id":"11587","type":"ColumnDataSource"}},"id":"11591","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3,"NaN",4,5,6],"y":[6,7,5,"NaN",7,3,6]},"selected":{"id":"11600","type":"Selection"},"selection_policy":{"id":"11599","type":"UnionRenderers"}},"id":"11587","type":"ColumnDataSource"}],"root_ids":["11553"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"ac2386ca-c515-403f-801b-8e60f26cd4b4","roots":{"11553":"48108380-410c-4f70-b29c-4123800d24fe"}}];
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