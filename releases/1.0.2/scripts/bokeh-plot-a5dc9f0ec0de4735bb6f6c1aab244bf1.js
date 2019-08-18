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
      };var element = document.getElementById("c6fb7608-7e55-48d5-be14-b6abc622bf12");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c6fb7608-7e55-48d5-be14-b6abc622bf12' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"81db1866-af3e-4535-8988-5aec82c65d73":{"roots":{"references":[{"attributes":{},"id":"14697","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14701","type":"BoxAnnotation"},{"attributes":{},"id":"14684","type":"BasicTicker"},{"attributes":{"bounds":[2,4],"plot":{"id":"14674","subtype":"Figure","type":"Plot"},"ticker":{"id":"14684","type":"BasicTicker"}},"id":"14687","type":"Grid"},{"attributes":{},"id":"14698","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"14714","type":"Title"},{"attributes":{"formatter":{"id":"14718","type":"BasicTickFormatter"},"plot":{"id":"14674","subtype":"Figure","type":"Plot"},"ticker":{"id":"14689","type":"BasicTicker"}},"id":"14688","type":"LinearAxis"},{"attributes":{},"id":"14681","type":"LinearScale"},{"attributes":{},"id":"14720","type":"UnionRenderers"},{"attributes":{},"id":"14694","type":"WheelZoomTool"},{"attributes":{"source":{"id":"14708","type":"ColumnDataSource"}},"id":"14712","type":"CDSView"},{"attributes":{"formatter":{"id":"14716","type":"BasicTickFormatter"},"plot":{"id":"14674","subtype":"Figure","type":"Plot"},"ticker":{"id":"14684","type":"BasicTicker"}},"id":"14683","type":"LinearAxis"},{"attributes":{"bounds":[2,4],"dimension":1,"plot":{"id":"14674","subtype":"Figure","type":"Plot"},"ticker":{"id":"14689","type":"BasicTicker"}},"id":"14692","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14709","type":"Circle"},{"attributes":{},"id":"14716","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"14683","type":"LinearAxis"}],"left":[{"id":"14688","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14683","type":"LinearAxis"},{"id":"14687","type":"Grid"},{"id":"14688","type":"LinearAxis"},{"id":"14692","type":"Grid"},{"id":"14701","type":"BoxAnnotation"},{"id":"14711","type":"GlyphRenderer"}],"title":{"id":"14714","type":"Title"},"toolbar":{"id":"14699","type":"Toolbar"},"x_range":{"id":"14675","type":"DataRange1d"},"x_scale":{"id":"14679","type":"LinearScale"},"y_range":{"id":"14677","type":"DataRange1d"},"y_scale":{"id":"14681","type":"LinearScale"}},"id":"14674","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14710","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14693","type":"PanTool"},{"id":"14694","type":"WheelZoomTool"},{"id":"14695","type":"BoxZoomTool"},{"id":"14696","type":"SaveTool"},{"id":"14697","type":"ResetTool"},{"id":"14698","type":"HelpTool"}]},"id":"14699","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"14721","type":"Selection"},"selection_policy":{"id":"14720","type":"UnionRenderers"}},"id":"14708","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"14675","type":"DataRange1d"},{"attributes":{},"id":"14721","type":"Selection"},{"attributes":{},"id":"14689","type":"BasicTicker"},{"attributes":{},"id":"14718","type":"BasicTickFormatter"},{"attributes":{},"id":"14693","type":"PanTool"},{"attributes":{"callback":null},"id":"14677","type":"DataRange1d"},{"attributes":{},"id":"14696","type":"SaveTool"},{"attributes":{"data_source":{"id":"14708","type":"ColumnDataSource"},"glyph":{"id":"14709","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14710","type":"Circle"},"selection_glyph":null,"view":{"id":"14712","type":"CDSView"}},"id":"14711","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"14701","type":"BoxAnnotation"}},"id":"14695","type":"BoxZoomTool"},{"attributes":{},"id":"14679","type":"LinearScale"}],"root_ids":["14674"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"81db1866-af3e-4535-8988-5aec82c65d73","roots":{"14674":"c6fb7608-7e55-48d5-be14-b6abc622bf12"}}];
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