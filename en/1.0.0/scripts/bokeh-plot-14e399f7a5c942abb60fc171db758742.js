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
      };var element = document.getElementById("3bb06015-6f38-48eb-b289-16653af31919");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3bb06015-6f38-48eb-b289-16653af31919' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2ff70d97-f5b2-4729-8546-98492191207b":{"roots":{"references":[{"attributes":{},"id":"11574","type":"SaveTool"},{"attributes":{},"id":"11594","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"11594","type":"BasicTickFormatter"},"plot":{"id":"11552","subtype":"Figure","type":"Plot"},"ticker":{"id":"11562","type":"BasicTicker"}},"id":"11561","type":"LinearAxis"},{"attributes":{},"id":"11567","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,"NaN",4,5,6],"y":[6,7,5,"NaN",7,3,6]},"selected":{"id":"11598","type":"Selection"},"selection_policy":{"id":"11599","type":"UnionRenderers"}},"id":"11586","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"11561","type":"LinearAxis"}],"left":[{"id":"11566","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11561","type":"LinearAxis"},{"id":"11565","type":"Grid"},{"id":"11566","type":"LinearAxis"},{"id":"11570","type":"Grid"},{"id":"11579","type":"BoxAnnotation"},{"id":"11589","type":"GlyphRenderer"}],"title":{"id":"11592","type":"Title"},"toolbar":{"id":"11577","type":"Toolbar"},"x_range":{"id":"11553","type":"DataRange1d"},"x_scale":{"id":"11557","type":"LinearScale"},"y_range":{"id":"11555","type":"DataRange1d"},"y_scale":{"id":"11559","type":"LinearScale"}},"id":"11552","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"11596","type":"BasicTickFormatter"},"plot":{"id":"11552","subtype":"Figure","type":"Plot"},"ticker":{"id":"11567","type":"BasicTicker"}},"id":"11566","type":"LinearAxis"},{"attributes":{},"id":"11559","type":"LinearScale"},{"attributes":{"overlay":{"id":"11579","type":"BoxAnnotation"}},"id":"11573","type":"BoxZoomTool"},{"attributes":{"source":{"id":"11586","type":"ColumnDataSource"}},"id":"11590","type":"CDSView"},{"attributes":{},"id":"11562","type":"BasicTicker"},{"attributes":{},"id":"11572","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"11586","type":"ColumnDataSource"},"glyph":{"id":"11587","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11588","type":"Patch"},"selection_glyph":null,"view":{"id":"11590","type":"CDSView"}},"id":"11589","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11571","type":"PanTool"},{"id":"11572","type":"WheelZoomTool"},{"id":"11573","type":"BoxZoomTool"},{"id":"11574","type":"SaveTool"},{"id":"11575","type":"ResetTool"},{"id":"11576","type":"HelpTool"}]},"id":"11577","type":"Toolbar"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11588","type":"Patch"},{"attributes":{},"id":"11598","type":"Selection"},{"attributes":{"callback":null},"id":"11555","type":"DataRange1d"},{"attributes":{},"id":"11571","type":"PanTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"#1f77b4","line_alpha":0.5,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11587","type":"Patch"},{"attributes":{},"id":"11599","type":"UnionRenderers"},{"attributes":{"plot":{"id":"11552","subtype":"Figure","type":"Plot"},"ticker":{"id":"11562","type":"BasicTicker"}},"id":"11565","type":"Grid"},{"attributes":{},"id":"11575","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11579","type":"BoxAnnotation"},{"attributes":{},"id":"11557","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"11592","type":"Title"},{"attributes":{},"id":"11596","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"11553","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"11552","subtype":"Figure","type":"Plot"},"ticker":{"id":"11567","type":"BasicTicker"}},"id":"11570","type":"Grid"},{"attributes":{},"id":"11576","type":"HelpTool"}],"root_ids":["11552"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"2ff70d97-f5b2-4729-8546-98492191207b","roots":{"11552":"3bb06015-6f38-48eb-b289-16653af31919"}}];
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