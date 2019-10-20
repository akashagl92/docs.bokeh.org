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
      };var element = document.getElementById("7d6492e2-47c9-4422-8b86-484f40cbe6fc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7d6492e2-47c9-4422-8b86-484f40cbe6fc' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e449c025-c92c-41e8-96a1-c3ec0f125a15":{"roots":{"references":[{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32869","type":"Selection"},"selection_policy":{"id":"32868","type":"UnionRenderers"}},"id":"32856","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"32822","subtype":"Figure","type":"Plot"},"ticker":{"id":"32837","type":"BasicTicker"}},"id":"32840","type":"Grid"},{"attributes":{"formatter":{"id":"32864","type":"BasicTickFormatter"},"plot":{"id":"32822","subtype":"Figure","type":"Plot"},"ticker":{"id":"32832","type":"BasicTicker"}},"id":"32831","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32841","type":"PanTool"},{"id":"32842","type":"WheelZoomTool"},{"id":"32843","type":"BoxZoomTool"},{"id":"32844","type":"SaveTool"},{"id":"32845","type":"ResetTool"},{"id":"32846","type":"HelpTool"}]},"id":"32847","type":"Toolbar"},{"attributes":{"callback":null},"id":"32825","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"32858","type":"Dash"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32849","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"32857","type":"Dash"},{"attributes":{},"id":"32827","type":"LinearScale"},{"attributes":{"source":{"id":"32856","type":"ColumnDataSource"}},"id":"32860","type":"CDSView"},{"attributes":{"data_source":{"id":"32856","type":"ColumnDataSource"},"glyph":{"id":"32857","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32858","type":"Dash"},"selection_glyph":null,"view":{"id":"32860","type":"CDSView"}},"id":"32859","type":"GlyphRenderer"},{"attributes":{},"id":"32829","type":"LinearScale"},{"attributes":{},"id":"32841","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"32862","type":"Title"},{"attributes":{},"id":"32832","type":"BasicTicker"},{"attributes":{},"id":"32842","type":"WheelZoomTool"},{"attributes":{},"id":"32864","type":"BasicTickFormatter"},{"attributes":{},"id":"32844","type":"SaveTool"},{"attributes":{"overlay":{"id":"32849","type":"BoxAnnotation"}},"id":"32843","type":"BoxZoomTool"},{"attributes":{},"id":"32866","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"32822","subtype":"Figure","type":"Plot"},"ticker":{"id":"32832","type":"BasicTicker"}},"id":"32835","type":"Grid"},{"attributes":{},"id":"32845","type":"ResetTool"},{"attributes":{"below":[{"id":"32831","type":"LinearAxis"}],"left":[{"id":"32836","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32831","type":"LinearAxis"},{"id":"32835","type":"Grid"},{"id":"32836","type":"LinearAxis"},{"id":"32840","type":"Grid"},{"id":"32849","type":"BoxAnnotation"},{"id":"32859","type":"GlyphRenderer"}],"title":{"id":"32862","type":"Title"},"toolbar":{"id":"32847","type":"Toolbar"},"x_range":{"id":"32823","type":"DataRange1d"},"x_scale":{"id":"32827","type":"LinearScale"},"y_range":{"id":"32825","type":"DataRange1d"},"y_scale":{"id":"32829","type":"LinearScale"}},"id":"32822","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32868","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"32866","type":"BasicTickFormatter"},"plot":{"id":"32822","subtype":"Figure","type":"Plot"},"ticker":{"id":"32837","type":"BasicTicker"}},"id":"32836","type":"LinearAxis"},{"attributes":{},"id":"32846","type":"HelpTool"},{"attributes":{},"id":"32869","type":"Selection"},{"attributes":{},"id":"32837","type":"BasicTicker"},{"attributes":{"callback":null},"id":"32823","type":"DataRange1d"}],"root_ids":["32822"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"e449c025-c92c-41e8-96a1-c3ec0f125a15","roots":{"32822":"7d6492e2-47c9-4422-8b86-484f40cbe6fc"}}];
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