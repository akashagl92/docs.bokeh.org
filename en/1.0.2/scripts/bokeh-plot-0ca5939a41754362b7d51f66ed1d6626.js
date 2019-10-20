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
      };var element = document.getElementById("1250661f-593f-4071-af2f-040091a12363");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1250661f-593f-4071-af2f-040091a12363' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f9e97133-0cc6-4ca7-8523-865ea9a49826":{"roots":{"references":[{"attributes":{},"id":"14413","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14398","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14390","type":"PanTool"},{"id":"14391","type":"WheelZoomTool"},{"id":"14392","type":"BoxZoomTool"},{"id":"14393","type":"SaveTool"},{"id":"14394","type":"ResetTool"},{"id":"14395","type":"HelpTool"}]},"id":"14396","type":"Toolbar"},{"attributes":{},"id":"14386","type":"BasicTicker"},{"attributes":{},"id":"14417","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"14371","subtype":"Figure","type":"Plot"},"ticker":{"id":"14386","type":"BasicTicker"}},"id":"14389","type":"Grid"},{"attributes":{"below":[{"id":"14380","type":"LinearAxis"}],"left":[{"id":"14385","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14380","type":"LinearAxis"},{"id":"14384","type":"Grid"},{"id":"14385","type":"LinearAxis"},{"id":"14389","type":"Grid"},{"id":"14398","type":"BoxAnnotation"},{"id":"14408","type":"GlyphRenderer"}],"title":{"id":"14411","type":"Title"},"toolbar":{"id":"14396","type":"Toolbar"},"x_range":{"id":"14372","type":"DataRange1d"},"x_scale":{"id":"14376","type":"LinearScale"},"y_range":{"id":"14374","type":"DataRange1d"},"y_scale":{"id":"14378","type":"LinearScale"}},"id":"14371","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14418","type":"Selection"},{"attributes":{},"id":"14391","type":"WheelZoomTool"},{"attributes":{},"id":"14395","type":"HelpTool"},{"attributes":{"callback":null},"id":"14372","type":"DataRange1d"},{"attributes":{"plot":{"id":"14371","subtype":"Figure","type":"Plot"},"ticker":{"id":"14381","type":"BasicTicker"}},"id":"14384","type":"Grid"},{"attributes":{"callback":null},"id":"14374","type":"DataRange1d"},{"attributes":{},"id":"14390","type":"PanTool"},{"attributes":{},"id":"14376","type":"LinearScale"},{"attributes":{"data_source":{"id":"14405","type":"ColumnDataSource"},"glyph":{"id":"14406","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14407","type":"Circle"},"selection_glyph":null,"view":{"id":"14409","type":"CDSView"}},"id":"14408","type":"GlyphRenderer"},{"attributes":{},"id":"14394","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"14411","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"14407","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"14418","type":"Selection"},"selection_policy":{"id":"14417","type":"UnionRenderers"}},"id":"14405","type":"ColumnDataSource"},{"attributes":{},"id":"14378","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"firebrick"},"line_dash":[6,3],"line_width":{"value":2},"size":{"units":"screen","value":60},"x":{"field":"x"},"y":{"field":"y"}},"id":"14406","type":"Circle"},{"attributes":{"source":{"id":"14405","type":"ColumnDataSource"}},"id":"14409","type":"CDSView"},{"attributes":{"overlay":{"id":"14398","type":"BoxAnnotation"}},"id":"14392","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"14413","type":"BasicTickFormatter"},"plot":{"id":"14371","subtype":"Figure","type":"Plot"},"ticker":{"id":"14381","type":"BasicTicker"}},"id":"14380","type":"LinearAxis"},{"attributes":{},"id":"14415","type":"BasicTickFormatter"},{"attributes":{},"id":"14393","type":"SaveTool"},{"attributes":{},"id":"14381","type":"BasicTicker"},{"attributes":{"formatter":{"id":"14415","type":"BasicTickFormatter"},"plot":{"id":"14371","subtype":"Figure","type":"Plot"},"ticker":{"id":"14386","type":"BasicTicker"}},"id":"14385","type":"LinearAxis"}],"root_ids":["14371"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"f9e97133-0cc6-4ca7-8523-865ea9a49826","roots":{"14371":"1250661f-593f-4071-af2f-040091a12363"}}];
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