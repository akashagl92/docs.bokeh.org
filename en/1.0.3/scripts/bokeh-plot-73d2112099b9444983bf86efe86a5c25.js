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
      };var element = document.getElementById("5797f20b-8614-4f49-910c-6ce300f4621d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5797f20b-8614-4f49-910c-6ce300f4621d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c14e7a71-bbc5-42c9-9c50-6d60a4b1869c":{"roots":{"references":[{"attributes":{"overlay":{"id":"11753","type":"BoxAnnotation"}},"id":"11747","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"11769","type":"BasicTickFormatter"},"plot":{"id":"11726","subtype":"Figure","type":"Plot"},"ticker":{"id":"11736","type":"BasicTicker"}},"id":"11735","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"11765","type":"Title"},{"attributes":{},"id":"11741","type":"BasicTicker"},{"attributes":{},"id":"11736","type":"BasicTicker"},{"attributes":{},"id":"11767","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"11726","subtype":"Figure","type":"Plot"},"ticker":{"id":"11741","type":"BasicTicker"}},"id":"11744","type":"Grid"},{"attributes":{"formatter":{"id":"11767","type":"BasicTickFormatter"},"plot":{"id":"11726","subtype":"Figure","type":"Plot"},"ticker":{"id":"11741","type":"BasicTicker"}},"id":"11740","type":"LinearAxis"},{"attributes":{},"id":"11769","type":"BasicTickFormatter"},{"attributes":{},"id":"11748","type":"SaveTool"},{"attributes":{},"id":"11749","type":"ResetTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11762","type":"Patch"},{"attributes":{},"id":"11772","type":"Selection"},{"attributes":{},"id":"11750","type":"HelpTool"},{"attributes":{"callback":null},"id":"11727","type":"DataRange1d"},{"attributes":{},"id":"11773","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"#1f77b4","line_alpha":0.5,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11761","type":"Patch"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11745","type":"PanTool"},{"id":"11746","type":"WheelZoomTool"},{"id":"11747","type":"BoxZoomTool"},{"id":"11748","type":"SaveTool"},{"id":"11749","type":"ResetTool"},{"id":"11750","type":"HelpTool"}]},"id":"11751","type":"Toolbar"},{"attributes":{"callback":null},"id":"11729","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]},"selected":{"id":"11772","type":"Selection"},"selection_policy":{"id":"11773","type":"UnionRenderers"}},"id":"11760","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"11735","type":"LinearAxis"}],"left":[{"id":"11740","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11735","type":"LinearAxis"},{"id":"11739","type":"Grid"},{"id":"11740","type":"LinearAxis"},{"id":"11744","type":"Grid"},{"id":"11753","type":"BoxAnnotation"},{"id":"11763","type":"GlyphRenderer"}],"title":{"id":"11765","type":"Title"},"toolbar":{"id":"11751","type":"Toolbar"},"x_range":{"id":"11727","type":"DataRange1d"},"x_scale":{"id":"11731","type":"LinearScale"},"y_range":{"id":"11729","type":"DataRange1d"},"y_scale":{"id":"11733","type":"LinearScale"}},"id":"11726","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11731","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11753","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"11760","type":"ColumnDataSource"},"glyph":{"id":"11761","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11762","type":"Patch"},"selection_glyph":null,"view":{"id":"11764","type":"CDSView"}},"id":"11763","type":"GlyphRenderer"},{"attributes":{},"id":"11745","type":"PanTool"},{"attributes":{"plot":{"id":"11726","subtype":"Figure","type":"Plot"},"ticker":{"id":"11736","type":"BasicTicker"}},"id":"11739","type":"Grid"},{"attributes":{"source":{"id":"11760","type":"ColumnDataSource"}},"id":"11764","type":"CDSView"},{"attributes":{},"id":"11746","type":"WheelZoomTool"},{"attributes":{},"id":"11733","type":"LinearScale"}],"root_ids":["11726"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"c14e7a71-bbc5-42c9-9c50-6d60a4b1869c","roots":{"11726":"5797f20b-8614-4f49-910c-6ce300f4621d"}}];
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