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
      };var element = document.getElementById("24867d5b-7e6f-41b6-8414-063bab8275bb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '24867d5b-7e6f-41b6-8414-063bab8275bb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"79013275-51de-419b-be23-862a55cdf611":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"9748","type":"Title"},{"attributes":{},"id":"9715","type":"LinearScale"},{"attributes":{"overlay":{"id":"9735","type":"BoxAnnotation"}},"id":"9729","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"9752","type":"BasicTickFormatter"},"plot":{"id":"9708","subtype":"Figure","type":"Plot"},"ticker":{"id":"9718","type":"BasicTicker"}},"id":"9717","type":"LinearAxis"},{"attributes":{},"id":"9732","type":"HelpTool"},{"attributes":{},"id":"9750","type":"BasicTickFormatter"},{"attributes":{},"id":"9727","type":"PanTool"},{"attributes":{},"id":"9728","type":"WheelZoomTool"},{"attributes":{},"id":"9731","type":"ResetTool"},{"attributes":{},"id":"9752","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"9708","subtype":"Figure","type":"Plot"},"ticker":{"id":"9723","type":"BasicTicker"}},"id":"9726","type":"Grid"},{"attributes":{"below":[{"id":"9717","type":"LinearAxis"}],"left":[{"id":"9722","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9717","type":"LinearAxis"},{"id":"9721","type":"Grid"},{"id":"9722","type":"LinearAxis"},{"id":"9726","type":"Grid"},{"id":"9735","type":"BoxAnnotation"},{"id":"9746","type":"GlyphRenderer"}],"title":{"id":"9748","type":"Title"},"toolbar":{"id":"9733","type":"Toolbar"},"x_range":{"id":"9709","type":"Range1d"},"x_scale":{"id":"9713","type":"LinearScale"},"y_range":{"id":"9742","type":"Range1d"},"y_scale":{"id":"9715","type":"LinearScale"}},"id":"9708","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9718","type":"BasicTicker"},{"attributes":{},"id":"9730","type":"SaveTool"},{"attributes":{},"id":"9756","type":"UnionRenderers"},{"attributes":{"plot":{"id":"9708","subtype":"Figure","type":"Plot"},"ticker":{"id":"9718","type":"BasicTicker"}},"id":"9721","type":"Grid"},{"attributes":{"formatter":{"id":"9750","type":"BasicTickFormatter"},"plot":{"id":"9708","subtype":"Figure","type":"Plot"},"ticker":{"id":"9723","type":"BasicTicker"}},"id":"9722","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9745","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9735","type":"BoxAnnotation"},{"attributes":{},"id":"9723","type":"BasicTicker"},{"attributes":{"callback":null,"end":20},"id":"9709","type":"Range1d"},{"attributes":{"data_source":{"id":"9743","type":"ColumnDataSource"},"glyph":{"id":"9744","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9745","type":"Circle"},"selection_glyph":null,"view":{"id":"9747","type":"CDSView"}},"id":"9746","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"9727","type":"PanTool"},{"id":"9728","type":"WheelZoomTool"},{"id":"9729","type":"BoxZoomTool"},{"id":"9730","type":"SaveTool"},{"id":"9731","type":"ResetTool"},{"id":"9732","type":"HelpTool"}]},"id":"9733","type":"Toolbar"},{"attributes":{"source":{"id":"9743","type":"ColumnDataSource"}},"id":"9747","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9744","type":"Circle"},{"attributes":{"callback":null,"end":15},"id":"9742","type":"Range1d"},{"attributes":{},"id":"9713","type":"LinearScale"},{"attributes":{},"id":"9755","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"9755","type":"Selection"},"selection_policy":{"id":"9756","type":"UnionRenderers"}},"id":"9743","type":"ColumnDataSource"}],"root_ids":["9708"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"79013275-51de-419b-be23-862a55cdf611","roots":{"9708":"24867d5b-7e6f-41b6-8414-063bab8275bb"}}];
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