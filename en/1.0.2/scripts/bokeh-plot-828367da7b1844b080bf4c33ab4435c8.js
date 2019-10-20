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
      };var element = document.getElementById("10d4d9ca-bcce-413b-8541-2978b57731da");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '10d4d9ca-bcce-413b-8541-2978b57731da' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d424ad54-8ae3-444a-b15e-09b01e1323d8":{"roots":{"references":[{"attributes":{},"id":"17610","type":"ResetTool"},{"attributes":{},"id":"17611","type":"HelpTool"},{"attributes":{},"id":"17602","type":"BasicTicker"},{"attributes":{},"id":"17592","type":"LinearScale"},{"attributes":{"source":{"id":"17621","type":"ColumnDataSource"}},"id":"17625","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"17586","subtype":"Figure","type":"Plot"},"ticker":{"id":"17602","type":"BasicTicker"}},"id":"17605","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17622","type":"Circle"},{"attributes":{},"id":"17594","type":"LinearScale"},{"attributes":{},"id":"17630","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17614","type":"BoxAnnotation"},{"attributes":{},"id":"17628","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17606","type":"PanTool"},{"id":"17607","type":"WheelZoomTool"},{"id":"17608","type":"BoxZoomTool"},{"id":"17609","type":"SaveTool"},{"id":"17610","type":"ResetTool"},{"id":"17611","type":"HelpTool"}]},"id":"17612","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"17633","type":"Selection"},"selection_policy":{"id":"17632","type":"UnionRenderers"}},"id":"17621","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"17628","type":"BasicTickFormatter"},"plot":{"id":"17586","subtype":"Figure","type":"Plot"},"ticker":{"id":"17597","type":"BasicTicker"}},"id":"17596","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17623","type":"Circle"},{"attributes":{},"id":"17633","type":"Selection"},{"attributes":{"formatter":{"id":"17630","type":"BasicTickFormatter"},"plot":{"id":"17586","subtype":"Figure","type":"Plot"},"ticker":{"id":"17602","type":"BasicTicker"}},"id":"17601","type":"LinearAxis"},{"attributes":{},"id":"17606","type":"PanTool"},{"attributes":{"plot":{"id":"17586","subtype":"Figure","type":"Plot"},"ticker":{"id":"17597","type":"BasicTicker"}},"id":"17600","type":"Grid"},{"attributes":{},"id":"17607","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"17596","type":"LinearAxis"}],"left":[{"id":"17601","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"17596","type":"LinearAxis"},{"id":"17600","type":"Grid"},{"id":"17601","type":"LinearAxis"},{"id":"17605","type":"Grid"},{"id":"17614","type":"BoxAnnotation"},{"id":"17624","type":"GlyphRenderer"}],"title":{"id":"17585","type":"Title"},"toolbar":{"id":"17612","type":"Toolbar"},"x_range":{"id":"17588","type":"DataRange1d"},"x_scale":{"id":"17592","type":"LinearScale"},"y_range":{"id":"17590","type":"DataRange1d"},"y_scale":{"id":"17594","type":"LinearScale"}},"id":"17586","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"17621","type":"ColumnDataSource"},"glyph":{"id":"17622","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17623","type":"Circle"},"selection_glyph":null,"view":{"id":"17625","type":"CDSView"}},"id":"17624","type":"GlyphRenderer"},{"attributes":{},"id":"17632","type":"UnionRenderers"},{"attributes":{},"id":"17597","type":"BasicTicker"},{"attributes":{"overlay":{"id":"17614","type":"BoxAnnotation"}},"id":"17608","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"Some Title","text_color":{"value":"olive"},"text_font":"times","text_font_style":"italic"},"id":"17585","type":"Title"},{"attributes":{},"id":"17609","type":"SaveTool"},{"attributes":{"callback":null},"id":"17588","type":"DataRange1d"},{"attributes":{"callback":null},"id":"17590","type":"DataRange1d"}],"root_ids":["17586"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"d424ad54-8ae3-444a-b15e-09b01e1323d8","roots":{"17586":"10d4d9ca-bcce-413b-8541-2978b57731da"}}];
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