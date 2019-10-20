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
      };var element = document.getElementById("0b7efe5f-1d94-421a-9698-8869824a2bbb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0b7efe5f-1d94-421a-9698-8869824a2bbb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"70beb0c4-9559-4f5c-8aea-8478d5dadc41":{"roots":{"references":[{"attributes":{"formatter":{"id":"34727","type":"BasicTickFormatter"},"plot":{"id":"34686","subtype":"Figure","type":"Plot"},"ticker":{"id":"34701","type":"BasicTicker"}},"id":"34700","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34722","type":"Step"},{"attributes":{},"id":"34710","type":"HelpTool"},{"attributes":{},"id":"34701","type":"BasicTicker"},{"attributes":{"callback":null},"id":"34687","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34705","type":"PanTool"},{"id":"34706","type":"WheelZoomTool"},{"id":"34707","type":"BoxZoomTool"},{"id":"34708","type":"SaveTool"},{"id":"34709","type":"ResetTool"},{"id":"34710","type":"HelpTool"}]},"id":"34711","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"34686","subtype":"Figure","type":"Plot"},"ticker":{"id":"34701","type":"BasicTicker"}},"id":"34704","type":"Grid"},{"attributes":{},"id":"34693","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34713","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"34689","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#FB8072"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34721","type":"Step"},{"attributes":{},"id":"34691","type":"LinearScale"},{"attributes":{"source":{"id":"34720","type":"ColumnDataSource"}},"id":"34724","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[1,2,3,2,5]},"selected":{"id":"34732","type":"Selection"},"selection_policy":{"id":"34733","type":"UnionRenderers"}},"id":"34720","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"34720","type":"ColumnDataSource"},"glyph":{"id":"34721","type":"Step"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34722","type":"Step"},"selection_glyph":null,"view":{"id":"34724","type":"CDSView"}},"id":"34723","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"34729","type":"BasicTickFormatter"},"plot":{"id":"34686","subtype":"Figure","type":"Plot"},"ticker":{"id":"34696","type":"BasicTicker"}},"id":"34695","type":"LinearAxis"},{"attributes":{},"id":"34705","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"34725","type":"Title"},{"attributes":{},"id":"34733","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"34713","type":"BoxAnnotation"}},"id":"34707","type":"BoxZoomTool"},{"attributes":{},"id":"34706","type":"WheelZoomTool"},{"attributes":{},"id":"34727","type":"BasicTickFormatter"},{"attributes":{},"id":"34708","type":"SaveTool"},{"attributes":{},"id":"34696","type":"BasicTicker"},{"attributes":{},"id":"34732","type":"Selection"},{"attributes":{"plot":{"id":"34686","subtype":"Figure","type":"Plot"},"ticker":{"id":"34696","type":"BasicTicker"}},"id":"34699","type":"Grid"},{"attributes":{"below":[{"id":"34695","type":"LinearAxis"}],"left":[{"id":"34700","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34695","type":"LinearAxis"},{"id":"34699","type":"Grid"},{"id":"34700","type":"LinearAxis"},{"id":"34704","type":"Grid"},{"id":"34713","type":"BoxAnnotation"},{"id":"34723","type":"GlyphRenderer"}],"title":{"id":"34725","type":"Title"},"toolbar":{"id":"34711","type":"Toolbar"},"x_range":{"id":"34687","type":"DataRange1d"},"x_scale":{"id":"34691","type":"LinearScale"},"y_range":{"id":"34689","type":"DataRange1d"},"y_scale":{"id":"34693","type":"LinearScale"}},"id":"34686","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"34729","type":"BasicTickFormatter"},{"attributes":{},"id":"34709","type":"ResetTool"}],"root_ids":["34686"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"70beb0c4-9559-4f5c-8aea-8478d5dadc41","roots":{"34686":"0b7efe5f-1d94-421a-9698-8869824a2bbb"}}];
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