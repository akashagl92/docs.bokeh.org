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
      };var element = document.getElementById("1859354a-7982-4542-8adf-98310ec1c626");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1859354a-7982-4542-8adf-98310ec1c626' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e7b9c663-7935-4cd2-b84e-4870d1e48e00":{"roots":{"references":[{"attributes":{},"id":"12073","type":"BasicTicker"},{"attributes":{},"id":"12107","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"12063","subtype":"Figure","type":"Plot"},"ticker":{"id":"12078","type":"BasicTicker"}},"id":"12081","type":"Grid"},{"attributes":{"formatter":{"id":"12107","type":"BasicTickFormatter"},"plot":{"id":"12063","subtype":"Figure","type":"Plot"},"ticker":{"id":"12078","type":"BasicTicker"}},"id":"12077","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12098","type":"Circle"},{"attributes":{},"id":"12087","type":"HelpTool"},{"attributes":{"below":[{"id":"12072","type":"LinearAxis"}],"left":[{"id":"12077","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"12072","type":"LinearAxis"},{"id":"12076","type":"Grid"},{"id":"12077","type":"LinearAxis"},{"id":"12081","type":"Grid"},{"id":"12090","type":"BoxAnnotation"},{"id":"12100","type":"GlyphRenderer"}],"title":{"id":"12103","type":"Title"},"toolbar":{"id":"12088","type":"Toolbar"},"x_range":{"id":"12064","type":"DataRange1d"},"x_scale":{"id":"12068","type":"LinearScale"},"y_range":{"id":"12066","type":"DataRange1d"},"y_scale":{"id":"12070","type":"LinearScale"}},"id":"12063","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12109","type":"UnionRenderers"},{"attributes":{},"id":"12110","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"12099","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12082","type":"PanTool"},{"id":"12083","type":"WheelZoomTool"},{"id":"12084","type":"BoxZoomTool"},{"id":"12085","type":"SaveTool"},{"id":"12086","type":"ResetTool"},{"id":"12087","type":"HelpTool"}]},"id":"12088","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"12110","type":"Selection"},"selection_policy":{"id":"12109","type":"UnionRenderers"}},"id":"12097","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"12064","type":"DataRange1d"},{"attributes":{"data_source":{"id":"12097","type":"ColumnDataSource"},"glyph":{"id":"12098","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12099","type":"Circle"},"selection_glyph":null,"view":{"id":"12101","type":"CDSView"}},"id":"12100","type":"GlyphRenderer"},{"attributes":{},"id":"12082","type":"PanTool"},{"attributes":{"callback":null},"id":"12066","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12090","type":"BoxAnnotation"},{"attributes":{},"id":"12068","type":"LinearScale"},{"attributes":{},"id":"12083","type":"WheelZoomTool"},{"attributes":{"source":{"id":"12097","type":"ColumnDataSource"}},"id":"12101","type":"CDSView"},{"attributes":{"overlay":{"id":"12090","type":"BoxAnnotation"}},"id":"12084","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"12063","subtype":"Figure","type":"Plot"},"ticker":{"id":"12073","type":"BasicTicker"}},"id":"12076","type":"Grid"},{"attributes":{},"id":"12070","type":"LinearScale"},{"attributes":{},"id":"12085","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"12103","type":"Title"},{"attributes":{},"id":"12086","type":"ResetTool"},{"attributes":{"formatter":{"id":"12105","type":"BasicTickFormatter"},"plot":{"id":"12063","subtype":"Figure","type":"Plot"},"ticker":{"id":"12073","type":"BasicTicker"}},"id":"12072","type":"LinearAxis"},{"attributes":{},"id":"12105","type":"BasicTickFormatter"},{"attributes":{},"id":"12078","type":"BasicTicker"}],"root_ids":["12063"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"e7b9c663-7935-4cd2-b84e-4870d1e48e00","roots":{"12063":"1859354a-7982-4542-8adf-98310ec1c626"}}];
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