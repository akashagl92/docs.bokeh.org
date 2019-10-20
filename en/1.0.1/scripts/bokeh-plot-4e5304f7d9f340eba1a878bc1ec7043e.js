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
      };var element = document.getElementById("6f697963-aee1-4627-aebb-7cec999229fb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6f697963-aee1-4627-aebb-7cec999229fb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2f54ca0d-6bcd-4c33-a351-b470da22adf9":{"roots":{"references":[{"attributes":{"callback":null},"id":"18434","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"18430","subtype":"Figure","type":"Plot"},"ticker":{"id":"18446","type":"BasicTicker"}},"id":"18449","type":"Grid"},{"attributes":{"overlay":{"id":"18459","type":"BoxAnnotation"}},"id":"18452","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"18468","type":"Circle"},{"attributes":{},"id":"18436","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18459","type":"BoxAnnotation"},{"attributes":{"source":{"id":"18428","type":"ColumnDataSource"}},"id":"18471","type":"CDSView"},{"attributes":{},"id":"18451","type":"WheelZoomTool"},{"attributes":{},"id":"18479","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18450","type":"PanTool"},{"id":"18451","type":"WheelZoomTool"},{"id":"18452","type":"BoxZoomTool"},{"id":"18453","type":"SaveTool"},{"id":"18454","type":"ResetTool"},{"id":"18455","type":"HelpTool"},{"id":"18456","type":"HoverTool"}]},"id":"18457","type":"Toolbar"},{"attributes":{},"id":"18438","type":"LinearScale"},{"attributes":{},"id":"18450","type":"PanTool"},{"attributes":{"formatter":{"id":"18474","type":"BasicTickFormatter"},"plot":{"id":"18430","subtype":"Figure","type":"Plot"},"ticker":{"id":"18441","type":"BasicTicker"}},"id":"18440","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"desc":["A","b","C","d","E"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"18478","type":"Selection"},"selection_policy":{"id":"18479","type":"UnionRenderers"}},"id":"18428","type":"ColumnDataSource"},{"attributes":{},"id":"18474","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"18428","type":"ColumnDataSource"},"glyph":{"id":"18468","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18469","type":"Circle"},"selection_glyph":null,"view":{"id":"18471","type":"CDSView"}},"id":"18470","type":"GlyphRenderer"},{"attributes":{},"id":"18441","type":"BasicTicker"},{"attributes":{"below":[{"id":"18440","type":"LinearAxis"}],"left":[{"id":"18445","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"18440","type":"LinearAxis"},{"id":"18444","type":"Grid"},{"id":"18445","type":"LinearAxis"},{"id":"18449","type":"Grid"},{"id":"18459","type":"BoxAnnotation"},{"id":"18470","type":"GlyphRenderer"}],"title":{"id":"18429","type":"Title"},"toolbar":{"id":"18457","type":"Toolbar"},"x_range":{"id":"18432","type":"DataRange1d"},"x_scale":{"id":"18436","type":"LinearScale"},"y_range":{"id":"18434","type":"DataRange1d"},"y_scale":{"id":"18438","type":"LinearScale"}},"id":"18430","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18476","type":"BasicTickFormatter"},{"attributes":{},"id":"18453","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"18469","type":"Circle"},{"attributes":{"plot":{"id":"18430","subtype":"Figure","type":"Plot"},"ticker":{"id":"18441","type":"BasicTicker"}},"id":"18444","type":"Grid"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"18429","type":"Title"},{"attributes":{},"id":"18478","type":"Selection"},{"attributes":{},"id":"18454","type":"ResetTool"},{"attributes":{},"id":"18455","type":"HelpTool"},{"attributes":{"formatter":{"id":"18476","type":"BasicTickFormatter"},"plot":{"id":"18430","subtype":"Figure","type":"Plot"},"ticker":{"id":"18446","type":"BasicTicker"}},"id":"18445","type":"LinearAxis"},{"attributes":{"callback":null,"renderers":"auto","tooltips":[["index","$index"],["(x,y)","($x, $y)"],["desc","@desc"]]},"id":"18456","type":"HoverTool"},{"attributes":{},"id":"18446","type":"BasicTicker"},{"attributes":{"callback":null},"id":"18432","type":"DataRange1d"}],"root_ids":["18430"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"2f54ca0d-6bcd-4c33-a351-b470da22adf9","roots":{"18430":"6f697963-aee1-4627-aebb-7cec999229fb"}}];
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