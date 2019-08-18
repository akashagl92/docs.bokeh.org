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
      };var element = document.getElementById("40655167-9821-4175-adc3-258f22210251");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '40655167-9821-4175-adc3-258f22210251' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"452fb7f0-6fc5-4c9c-8ae0-41318e43bdc2":{"roots":{"references":[{"attributes":{},"id":"33596","type":"BasicTicker"},{"attributes":{},"id":"33628","type":"BasicTickFormatter"},{"attributes":{},"id":"33605","type":"PanTool"},{"attributes":{"overlay":{"id":"33613","type":"BoxAnnotation"}},"id":"33607","type":"BoxZoomTool"},{"attributes":{},"id":"33631","type":"Selection"},{"attributes":{},"id":"33608","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"33631","type":"Selection"},"selection_policy":{"id":"33632","type":"UnionRenderers"}},"id":"33620","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"33620","type":"ColumnDataSource"},"glyph":{"id":"33621","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33622","type":"Line"},"selection_glyph":null,"view":{"id":"33624","type":"CDSView"}},"id":"33623","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"33585","subtype":"Figure","type":"Plot"},"ticker":{"id":"33596","type":"BasicTicker"}},"id":"33599","type":"Grid"},{"attributes":{},"id":"33632","type":"UnionRenderers"},{"attributes":{},"id":"33609","type":"ResetTool"},{"attributes":{"plot":null,"text":"line"},"id":"33584","type":"Title"},{"attributes":{"formatter":{"id":"33626","type":"BasicTickFormatter"},"plot":{"id":"33585","subtype":"Figure","type":"Plot"},"ticker":{"id":"33601","type":"BasicTicker"}},"id":"33600","type":"LinearAxis"},{"attributes":{},"id":"33610","type":"HelpTool"},{"attributes":{},"id":"33601","type":"BasicTicker"},{"attributes":{"formatter":{"id":"33628","type":"BasicTickFormatter"},"plot":{"id":"33585","subtype":"Figure","type":"Plot"},"ticker":{"id":"33596","type":"BasicTicker"}},"id":"33595","type":"LinearAxis"},{"attributes":{"source":{"id":"33620","type":"ColumnDataSource"}},"id":"33624","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33605","type":"PanTool"},{"id":"33606","type":"WheelZoomTool"},{"id":"33607","type":"BoxZoomTool"},{"id":"33608","type":"SaveTool"},{"id":"33609","type":"ResetTool"},{"id":"33610","type":"HelpTool"}]},"id":"33611","type":"Toolbar"},{"attributes":{"callback":null},"id":"33587","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"33585","subtype":"Figure","type":"Plot"},"ticker":{"id":"33601","type":"BasicTicker"}},"id":"33604","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33613","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"33589","type":"DataRange1d"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"33621","type":"Line"},{"attributes":{},"id":"33591","type":"LinearScale"},{"attributes":{},"id":"33626","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"33622","type":"Line"},{"attributes":{},"id":"33593","type":"LinearScale"},{"attributes":{"below":[{"id":"33595","type":"LinearAxis"}],"left":[{"id":"33600","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33595","type":"LinearAxis"},{"id":"33599","type":"Grid"},{"id":"33600","type":"LinearAxis"},{"id":"33604","type":"Grid"},{"id":"33613","type":"BoxAnnotation"},{"id":"33623","type":"GlyphRenderer"}],"title":{"id":"33584","type":"Title"},"toolbar":{"id":"33611","type":"Toolbar"},"x_range":{"id":"33587","type":"DataRange1d"},"x_scale":{"id":"33591","type":"LinearScale"},"y_range":{"id":"33589","type":"DataRange1d"},"y_scale":{"id":"33593","type":"LinearScale"}},"id":"33585","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33606","type":"WheelZoomTool"}],"root_ids":["33585"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"452fb7f0-6fc5-4c9c-8ae0-41318e43bdc2","roots":{"33585":"40655167-9821-4175-adc3-258f22210251"}}];
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