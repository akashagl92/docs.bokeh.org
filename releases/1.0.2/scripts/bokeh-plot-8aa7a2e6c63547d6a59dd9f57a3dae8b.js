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
      };var element = document.getElementById("d5da46be-8e71-42e4-b19c-347b973e2a62");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd5da46be-8e71-42e4-b19c-347b973e2a62' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1225180c-b309-4c10-8417-8fb5da0fd4d4":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17451","type":"Circle"},{"attributes":{"formatter":{"id":"17457","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"17415","subtype":"Figure","type":"Plot"},"ticker":{"id":"17425","type":"BasicTicker"}},"id":"17424","type":"LinearAxis"},{"attributes":{"formatter":{"id":"17459","type":"BasicTickFormatter"},"major_label_orientation":"vertical","plot":{"id":"17415","subtype":"Figure","type":"Plot"},"ticker":{"id":"17430","type":"BasicTicker"}},"id":"17429","type":"LinearAxis"},{"attributes":{},"id":"17459","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17450","type":"Circle"},{"attributes":{},"id":"17434","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"17415","subtype":"Figure","type":"Plot"},"ticker":{"id":"17430","type":"BasicTicker"}},"id":"17433","type":"Grid"},{"attributes":{},"id":"17425","type":"BasicTicker"},{"attributes":{},"id":"17422","type":"LinearScale"},{"attributes":{},"id":"17420","type":"LinearScale"},{"attributes":{},"id":"17438","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17434","type":"PanTool"},{"id":"17435","type":"WheelZoomTool"},{"id":"17436","type":"BoxZoomTool"},{"id":"17437","type":"SaveTool"},{"id":"17438","type":"ResetTool"},{"id":"17439","type":"HelpTool"}]},"id":"17440","type":"Toolbar"},{"attributes":{"plot":{"id":"17415","subtype":"Figure","type":"Plot"},"ticker":{"id":"17425","type":"BasicTicker"}},"id":"17428","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"17462","type":"Selection"},"selection_policy":{"id":"17461","type":"UnionRenderers"}},"id":"17449","type":"ColumnDataSource"},{"attributes":{},"id":"17435","type":"WheelZoomTool"},{"attributes":{},"id":"17461","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"17442","type":"BoxAnnotation"}},"id":"17436","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"17416","type":"DataRange1d"},{"attributes":{},"id":"17439","type":"HelpTool"},{"attributes":{},"id":"17462","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17442","type":"BoxAnnotation"},{"attributes":{},"id":"17457","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"17424","type":"LinearAxis"}],"left":[{"id":"17429","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"17424","type":"LinearAxis"},{"id":"17428","type":"Grid"},{"id":"17429","type":"LinearAxis"},{"id":"17433","type":"Grid"},{"id":"17442","type":"BoxAnnotation"},{"id":"17452","type":"GlyphRenderer"}],"title":{"id":"17455","type":"Title"},"toolbar":{"id":"17440","type":"Toolbar"},"x_range":{"id":"17416","type":"DataRange1d"},"x_scale":{"id":"17420","type":"LinearScale"},"y_range":{"id":"17418","type":"DataRange1d"},"y_scale":{"id":"17422","type":"LinearScale"}},"id":"17415","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"17449","type":"ColumnDataSource"},"glyph":{"id":"17450","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17451","type":"Circle"},"selection_glyph":null,"view":{"id":"17453","type":"CDSView"}},"id":"17452","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17449","type":"ColumnDataSource"}},"id":"17453","type":"CDSView"},{"attributes":{},"id":"17430","type":"BasicTicker"},{"attributes":{"callback":null},"id":"17418","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"17455","type":"Title"},{"attributes":{},"id":"17437","type":"SaveTool"}],"root_ids":["17415"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"1225180c-b309-4c10-8417-8fb5da0fd4d4","roots":{"17415":"d5da46be-8e71-42e4-b19c-347b973e2a62"}}];
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