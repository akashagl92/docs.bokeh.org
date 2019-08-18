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
      };var element = document.getElementById("f16e697d-9ff4-4f81-96e9-5d205d3de781");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f16e697d-9ff4-4f81-96e9-5d205d3de781' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"768cead4-dc34-489c-9709-e0ba94c08906":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"16437","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16432","type":"Circle"},{"attributes":{},"id":"16402","type":"LinearScale"},{"attributes":{"formatter":{"id":"16441","type":"BasicTickFormatter"},"plot":{"id":"16397","subtype":"Figure","type":"Plot"},"ticker":{"id":"16412","type":"BasicTicker"}},"id":"16411","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16433","type":"Circle"},{"attributes":{"overlay":{"id":"16424","type":"BoxAnnotation"}},"id":"16418","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"16406","type":"LinearAxis"}],"border_fill_color":{"value":"whitesmoke"},"left":[{"id":"16411","type":"LinearAxis"}],"min_border_left":80,"plot_height":400,"plot_width":400,"renderers":[{"id":"16406","type":"LinearAxis"},{"id":"16410","type":"Grid"},{"id":"16411","type":"LinearAxis"},{"id":"16415","type":"Grid"},{"id":"16424","type":"BoxAnnotation"},{"id":"16434","type":"GlyphRenderer"}],"title":{"id":"16437","type":"Title"},"toolbar":{"id":"16422","type":"Toolbar"},"x_range":{"id":"16398","type":"DataRange1d"},"x_scale":{"id":"16402","type":"LinearScale"},"y_range":{"id":"16400","type":"DataRange1d"},"y_scale":{"id":"16404","type":"LinearScale"}},"id":"16397","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"16443","type":"UnionRenderers"},{"attributes":{},"id":"16421","type":"HelpTool"},{"attributes":{"plot":{"id":"16397","subtype":"Figure","type":"Plot"},"ticker":{"id":"16407","type":"BasicTicker"}},"id":"16410","type":"Grid"},{"attributes":{},"id":"16407","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16424","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"16400","type":"DataRange1d"},{"attributes":{},"id":"16404","type":"LinearScale"},{"attributes":{"callback":null},"id":"16398","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"16397","subtype":"Figure","type":"Plot"},"ticker":{"id":"16412","type":"BasicTicker"}},"id":"16415","type":"Grid"},{"attributes":{"source":{"id":"16431","type":"ColumnDataSource"}},"id":"16435","type":"CDSView"},{"attributes":{},"id":"16412","type":"BasicTicker"},{"attributes":{},"id":"16444","type":"Selection"},{"attributes":{"formatter":{"id":"16439","type":"BasicTickFormatter"},"plot":{"id":"16397","subtype":"Figure","type":"Plot"},"ticker":{"id":"16407","type":"BasicTicker"}},"id":"16406","type":"LinearAxis"},{"attributes":{},"id":"16416","type":"PanTool"},{"attributes":{},"id":"16439","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"16444","type":"Selection"},"selection_policy":{"id":"16443","type":"UnionRenderers"}},"id":"16431","type":"ColumnDataSource"},{"attributes":{},"id":"16441","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"16431","type":"ColumnDataSource"},"glyph":{"id":"16432","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16433","type":"Circle"},"selection_glyph":null,"view":{"id":"16435","type":"CDSView"}},"id":"16434","type":"GlyphRenderer"},{"attributes":{},"id":"16417","type":"WheelZoomTool"},{"attributes":{},"id":"16420","type":"ResetTool"},{"attributes":{},"id":"16419","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16416","type":"PanTool"},{"id":"16417","type":"WheelZoomTool"},{"id":"16418","type":"BoxZoomTool"},{"id":"16419","type":"SaveTool"},{"id":"16420","type":"ResetTool"},{"id":"16421","type":"HelpTool"}]},"id":"16422","type":"Toolbar"}],"root_ids":["16397"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"768cead4-dc34-489c-9709-e0ba94c08906","roots":{"16397":"f16e697d-9ff4-4f81-96e9-5d205d3de781"}}];
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