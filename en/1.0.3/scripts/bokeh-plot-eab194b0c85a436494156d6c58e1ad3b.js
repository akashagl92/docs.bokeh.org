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
      };var element = document.getElementById("95efbacf-3043-4971-bc5c-1dea215e70ea");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '95efbacf-3043-4971-bc5c-1dea215e70ea' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"417fffb5-e858-4f03-8c93-e0830dcce9f6":{"roots":{"references":[{"attributes":{},"id":"12801","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12817","type":"Circle"},{"attributes":{},"id":"12789","type":"LinearScale"},{"attributes":{"below":[{"id":"12791","type":"LinearAxis"}],"left":[{"id":"12796","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"12791","type":"LinearAxis"},{"id":"12795","type":"Grid"},{"id":"12796","type":"LinearAxis"},{"id":"12800","type":"Grid"},{"id":"12809","type":"BoxAnnotation"},{"id":"12819","type":"GlyphRenderer"}],"title":{"id":"12780","type":"Title"},"toolbar":{"id":"12807","type":"Toolbar"},"x_range":{"id":"12783","type":"DataRange1d"},"x_scale":{"id":"12787","type":"LinearScale"},"y_range":{"id":"12785","type":"DataRange1d"},"y_scale":{"id":"12789","type":"LinearScale"}},"id":"12781","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12802","type":"WheelZoomTool"},{"attributes":{},"id":"12824","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12809","type":"BoxAnnotation"},{"attributes":{},"id":"12792","type":"BasicTicker"},{"attributes":{},"id":"12827","type":"Selection"},{"attributes":{"overlay":{"id":"12809","type":"BoxAnnotation"}},"id":"12803","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12818","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"12781","subtype":"Figure","type":"Plot"},"ticker":{"id":"12797","type":"BasicTicker"}},"id":"12800","type":"Grid"},{"attributes":{},"id":"12804","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"12827","type":"Selection"},"selection_policy":{"id":"12828","type":"UnionRenderers"}},"id":"12816","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"12781","subtype":"Figure","type":"Plot"},"ticker":{"id":"12792","type":"BasicTicker"}},"id":"12795","type":"Grid"},{"attributes":{},"id":"12805","type":"ResetTool"},{"attributes":{},"id":"12828","type":"UnionRenderers"},{"attributes":{"plot":null,"text":"Basic Title"},"id":"12780","type":"Title"},{"attributes":{},"id":"12822","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"12822","type":"BasicTickFormatter"},"plot":{"id":"12781","subtype":"Figure","type":"Plot"},"ticker":{"id":"12797","type":"BasicTicker"}},"id":"12796","type":"LinearAxis"},{"attributes":{},"id":"12806","type":"HelpTool"},{"attributes":{},"id":"12797","type":"BasicTicker"},{"attributes":{"formatter":{"id":"12824","type":"BasicTickFormatter"},"plot":{"id":"12781","subtype":"Figure","type":"Plot"},"ticker":{"id":"12792","type":"BasicTicker"}},"id":"12791","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12801","type":"PanTool"},{"id":"12802","type":"WheelZoomTool"},{"id":"12803","type":"BoxZoomTool"},{"id":"12804","type":"SaveTool"},{"id":"12805","type":"ResetTool"},{"id":"12806","type":"HelpTool"}]},"id":"12807","type":"Toolbar"},{"attributes":{"source":{"id":"12816","type":"ColumnDataSource"}},"id":"12820","type":"CDSView"},{"attributes":{"callback":null},"id":"12783","type":"DataRange1d"},{"attributes":{"data_source":{"id":"12816","type":"ColumnDataSource"},"glyph":{"id":"12817","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12818","type":"Circle"},"selection_glyph":null,"view":{"id":"12820","type":"CDSView"}},"id":"12819","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"12785","type":"DataRange1d"},{"attributes":{},"id":"12787","type":"LinearScale"}],"root_ids":["12781"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"417fffb5-e858-4f03-8c93-e0830dcce9f6","roots":{"12781":"95efbacf-3043-4971-bc5c-1dea215e70ea"}}];
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