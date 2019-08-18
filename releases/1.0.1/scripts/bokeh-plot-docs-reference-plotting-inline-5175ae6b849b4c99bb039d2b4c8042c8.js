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
      };var element = document.getElementById("f2bba7cd-07a9-4c95-bbc4-b72dd0271ef9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f2bba7cd-07a9-4c95-bbc4-b72dd0271ef9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"0de7ae69-6307-4db9-8b56-a32f921e423c":{"roots":{"references":[{"attributes":{"source":{"id":"33610","type":"ColumnDataSource"}},"id":"33614","type":"CDSView"},{"attributes":{},"id":"33583","type":"LinearScale"},{"attributes":{"below":[{"id":"33585","type":"LinearAxis"}],"left":[{"id":"33590","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33585","type":"LinearAxis"},{"id":"33589","type":"Grid"},{"id":"33590","type":"LinearAxis"},{"id":"33594","type":"Grid"},{"id":"33603","type":"BoxAnnotation"},{"id":"33613","type":"GlyphRenderer"}],"title":{"id":"33574","type":"Title"},"toolbar":{"id":"33601","type":"Toolbar"},"x_range":{"id":"33577","type":"DataRange1d"},"x_scale":{"id":"33581","type":"LinearScale"},"y_range":{"id":"33579","type":"DataRange1d"},"y_scale":{"id":"33583","type":"LinearScale"}},"id":"33575","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33596","type":"WheelZoomTool"},{"attributes":{},"id":"33586","type":"BasicTicker"},{"attributes":{},"id":"33617","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"33603","type":"BoxAnnotation"}},"id":"33597","type":"BoxZoomTool"},{"attributes":{},"id":"33595","type":"PanTool"},{"attributes":{},"id":"33619","type":"BasicTickFormatter"},{"attributes":{},"id":"33598","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"33612","type":"Line"},{"attributes":{"plot":{"id":"33575","subtype":"Figure","type":"Plot"},"ticker":{"id":"33586","type":"BasicTicker"}},"id":"33589","type":"Grid"},{"attributes":{},"id":"33621","type":"Selection"},{"attributes":{},"id":"33599","type":"ResetTool"},{"attributes":{"plot":null,"text":"line"},"id":"33574","type":"Title"},{"attributes":{"formatter":{"id":"33619","type":"BasicTickFormatter"},"plot":{"id":"33575","subtype":"Figure","type":"Plot"},"ticker":{"id":"33591","type":"BasicTicker"}},"id":"33590","type":"LinearAxis"},{"attributes":{},"id":"33622","type":"UnionRenderers"},{"attributes":{},"id":"33600","type":"HelpTool"},{"attributes":{"formatter":{"id":"33617","type":"BasicTickFormatter"},"plot":{"id":"33575","subtype":"Figure","type":"Plot"},"ticker":{"id":"33586","type":"BasicTicker"}},"id":"33585","type":"LinearAxis"},{"attributes":{},"id":"33591","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33595","type":"PanTool"},{"id":"33596","type":"WheelZoomTool"},{"id":"33597","type":"BoxZoomTool"},{"id":"33598","type":"SaveTool"},{"id":"33599","type":"ResetTool"},{"id":"33600","type":"HelpTool"}]},"id":"33601","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"33575","subtype":"Figure","type":"Plot"},"ticker":{"id":"33591","type":"BasicTicker"}},"id":"33594","type":"Grid"},{"attributes":{"data_source":{"id":"33610","type":"ColumnDataSource"},"glyph":{"id":"33611","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33612","type":"Line"},"selection_glyph":null,"view":{"id":"33614","type":"CDSView"}},"id":"33613","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"33577","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33603","type":"BoxAnnotation"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"33611","type":"Line"},{"attributes":{"callback":null},"id":"33579","type":"DataRange1d"},{"attributes":{},"id":"33581","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"33621","type":"Selection"},"selection_policy":{"id":"33622","type":"UnionRenderers"}},"id":"33610","type":"ColumnDataSource"}],"root_ids":["33575"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"0de7ae69-6307-4db9-8b56-a32f921e423c","roots":{"33575":"f2bba7cd-07a9-4c95-bbc4-b72dd0271ef9"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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