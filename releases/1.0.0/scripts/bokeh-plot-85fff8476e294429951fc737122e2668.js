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
      };var element = document.getElementById("156d16b4-7959-4baf-ac2e-28179aaa03c3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '156d16b4-7959-4baf-ac2e-28179aaa03c3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"eb676850-336d-4602-9655-b1536b7a41ef":{"roots":{"references":[{"attributes":{"overlay":{"id":"9817","type":"BoxAnnotation"}},"id":"9811","type":"BoxZoomTool"},{"attributes":{},"id":"9809","type":"PanTool"},{"attributes":{},"id":"9810","type":"WheelZoomTool"},{"attributes":{},"id":"9795","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"9790","subtype":"Figure","type":"Plot"},"ticker":{"id":"9805","type":"BasicTicker"}},"id":"9808","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"9809","type":"PanTool"},{"id":"9810","type":"WheelZoomTool"},{"id":"9811","type":"BoxZoomTool"},{"id":"9812","type":"SaveTool"},{"id":"9813","type":"ResetTool"},{"id":"9814","type":"HelpTool"}]},"id":"9815","type":"Toolbar"},{"attributes":{"formatter":{"id":"9834","type":"BasicTickFormatter"},"plot":{"id":"9790","subtype":"Figure","type":"Plot"},"ticker":{"id":"9805","type":"BasicTicker"}},"id":"9804","type":"LinearAxis"},{"attributes":{"plot":{"id":"9790","subtype":"Figure","type":"Plot"},"ticker":{"id":"9800","type":"BasicTicker"}},"id":"9803","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9817","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"navy"},"height":{"value":0.5},"line_color":{"value":"navy"},"right":{"field":"right"},"y":{"field":"y"}},"id":"9825","type":"HBar"},{"attributes":{"callback":null,"data":{"right":[1.2,2.5,3.7],"y":[1,2,3]},"selected":{"id":"9836","type":"Selection"},"selection_policy":{"id":"9837","type":"UnionRenderers"}},"id":"9824","type":"ColumnDataSource"},{"attributes":{},"id":"9805","type":"BasicTicker"},{"attributes":{},"id":"9797","type":"LinearScale"},{"attributes":{},"id":"9836","type":"Selection"},{"attributes":{},"id":"9814","type":"HelpTool"},{"attributes":{},"id":"9837","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"9791","type":"DataRange1d"},{"attributes":{},"id":"9834","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"9824","type":"ColumnDataSource"},"glyph":{"id":"9825","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9826","type":"HBar"},"selection_glyph":null,"view":{"id":"9828","type":"CDSView"}},"id":"9827","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"9793","type":"DataRange1d"},{"attributes":{},"id":"9813","type":"ResetTool"},{"attributes":{},"id":"9832","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"9826","type":"HBar"},{"attributes":{},"id":"9812","type":"SaveTool"},{"attributes":{},"id":"9800","type":"BasicTicker"},{"attributes":{"below":[{"id":"9799","type":"LinearAxis"}],"left":[{"id":"9804","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9799","type":"LinearAxis"},{"id":"9803","type":"Grid"},{"id":"9804","type":"LinearAxis"},{"id":"9808","type":"Grid"},{"id":"9817","type":"BoxAnnotation"},{"id":"9827","type":"GlyphRenderer"}],"title":{"id":"9830","type":"Title"},"toolbar":{"id":"9815","type":"Toolbar"},"x_range":{"id":"9791","type":"DataRange1d"},"x_scale":{"id":"9795","type":"LinearScale"},"y_range":{"id":"9793","type":"DataRange1d"},"y_scale":{"id":"9797","type":"LinearScale"}},"id":"9790","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"9832","type":"BasicTickFormatter"},"plot":{"id":"9790","subtype":"Figure","type":"Plot"},"ticker":{"id":"9800","type":"BasicTicker"}},"id":"9799","type":"LinearAxis"},{"attributes":{"source":{"id":"9824","type":"ColumnDataSource"}},"id":"9828","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"9830","type":"Title"}],"root_ids":["9790"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"eb676850-336d-4602-9655-b1536b7a41ef","roots":{"9790":"156d16b4-7959-4baf-ac2e-28179aaa03c3"}}];
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