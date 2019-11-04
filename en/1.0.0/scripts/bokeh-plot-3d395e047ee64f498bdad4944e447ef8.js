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
      };var element = document.getElementById("ee2225db-d542-4cb6-8f61-2c9015e501a3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ee2225db-d542-4cb6-8f61-2c9015e501a3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"48590722-7ca3-4a1b-91f9-854eff484753":{"roots":{"references":[{"attributes":{},"id":"14394","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"14410","type":"Title"},{"attributes":{},"id":"14412","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"firebrick"},"line_dash":[6,3],"line_width":{"value":2},"size":{"units":"screen","value":60},"x":{"field":"x"},"y":{"field":"y"}},"id":"14405","type":"Circle"},{"attributes":{"source":{"id":"14404","type":"ColumnDataSource"}},"id":"14408","type":"CDSView"},{"attributes":{"below":[{"id":"14379","type":"LinearAxis"}],"left":[{"id":"14384","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14379","type":"LinearAxis"},{"id":"14383","type":"Grid"},{"id":"14384","type":"LinearAxis"},{"id":"14388","type":"Grid"},{"id":"14397","type":"BoxAnnotation"},{"id":"14407","type":"GlyphRenderer"}],"title":{"id":"14410","type":"Title"},"toolbar":{"id":"14395","type":"Toolbar"},"x_range":{"id":"14371","type":"DataRange1d"},"x_scale":{"id":"14375","type":"LinearScale"},"y_range":{"id":"14373","type":"DataRange1d"},"y_scale":{"id":"14377","type":"LinearScale"}},"id":"14370","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14414","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"14404","type":"ColumnDataSource"},"glyph":{"id":"14405","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14406","type":"Circle"},"selection_glyph":null,"view":{"id":"14408","type":"CDSView"}},"id":"14407","type":"GlyphRenderer"},{"attributes":{},"id":"14392","type":"SaveTool"},{"attributes":{},"id":"14393","type":"ResetTool"},{"attributes":{},"id":"14416","type":"Selection"},{"attributes":{"callback":null},"id":"14371","type":"DataRange1d"},{"attributes":{"formatter":{"id":"14414","type":"BasicTickFormatter"},"plot":{"id":"14370","subtype":"Figure","type":"Plot"},"ticker":{"id":"14385","type":"BasicTicker"}},"id":"14384","type":"LinearAxis"},{"attributes":{},"id":"14417","type":"UnionRenderers"},{"attributes":{"plot":{"id":"14370","subtype":"Figure","type":"Plot"},"ticker":{"id":"14380","type":"BasicTicker"}},"id":"14383","type":"Grid"},{"attributes":{"callback":null},"id":"14373","type":"DataRange1d"},{"attributes":{"overlay":{"id":"14397","type":"BoxAnnotation"}},"id":"14391","type":"BoxZoomTool"},{"attributes":{},"id":"14380","type":"BasicTicker"},{"attributes":{},"id":"14375","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14397","type":"BoxAnnotation"},{"attributes":{},"id":"14390","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"14406","type":"Circle"},{"attributes":{},"id":"14389","type":"PanTool"},{"attributes":{},"id":"14377","type":"LinearScale"},{"attributes":{"formatter":{"id":"14412","type":"BasicTickFormatter"},"plot":{"id":"14370","subtype":"Figure","type":"Plot"},"ticker":{"id":"14380","type":"BasicTicker"}},"id":"14379","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14389","type":"PanTool"},{"id":"14390","type":"WheelZoomTool"},{"id":"14391","type":"BoxZoomTool"},{"id":"14392","type":"SaveTool"},{"id":"14393","type":"ResetTool"},{"id":"14394","type":"HelpTool"}]},"id":"14395","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"14416","type":"Selection"},"selection_policy":{"id":"14417","type":"UnionRenderers"}},"id":"14404","type":"ColumnDataSource"},{"attributes":{},"id":"14385","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"14370","subtype":"Figure","type":"Plot"},"ticker":{"id":"14385","type":"BasicTicker"}},"id":"14388","type":"Grid"}],"root_ids":["14370"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"48590722-7ca3-4a1b-91f9-854eff484753","roots":{"14370":"ee2225db-d542-4cb6-8f61-2c9015e501a3"}}];
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