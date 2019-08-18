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
      };var element = document.getElementById("3a175ee0-8cc0-42fc-8067-e54688c735ff");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3a175ee0-8cc0-42fc-8067-e54688c735ff' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d982175e-5565-417c-9780-2bfe7d6f2af4":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"14629","type":"Title"},{"attributes":{"source":{"id":"14623","type":"ColumnDataSource"}},"id":"14627","type":"CDSView"},{"attributes":{"formatter":{"id":"14631","type":"BasicTickFormatter"},"plot":{"id":"14589","subtype":"Figure","type":"Plot"},"ticker":{"id":"14599","type":"BasicTicker"}},"id":"14598","type":"LinearAxis"},{"attributes":{},"id":"14611","type":"SaveTool"},{"attributes":{},"id":"14631","type":"BasicTickFormatter"},{"attributes":{},"id":"14599","type":"BasicTicker"},{"attributes":{},"id":"14633","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"14616","type":"BoxAnnotation"}},"id":"14610","type":"BoxZoomTool"},{"attributes":{},"id":"14609","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"14633","type":"BasicTickFormatter"},"plot":{"id":"14589","subtype":"Figure","type":"Plot"},"ticker":{"id":"14604","type":"BasicTicker"}},"id":"14603","type":"LinearAxis"},{"attributes":{},"id":"14608","type":"PanTool"},{"attributes":{},"id":"14613","type":"HelpTool"},{"attributes":{"below":[{"id":"14598","type":"LinearAxis"}],"left":[{"id":"14603","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14598","type":"LinearAxis"},{"id":"14602","type":"Grid"},{"id":"14603","type":"LinearAxis"},{"id":"14607","type":"Grid"},{"id":"14616","type":"BoxAnnotation"},{"id":"14626","type":"GlyphRenderer"}],"title":{"id":"14629","type":"Title"},"toolbar":{"id":"14614","type":"Toolbar"},"x_range":{"id":"14590","type":"DataRange1d"},"x_scale":{"id":"14594","type":"LinearScale"},"y_range":{"id":"14592","type":"DataRange1d"},"y_scale":{"id":"14596","type":"LinearScale"}},"id":"14589","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14635","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14625","type":"Circle"},{"attributes":{},"id":"14612","type":"ResetTool"},{"attributes":{},"id":"14604","type":"BasicTicker"},{"attributes":{"callback":null},"id":"14590","type":"DataRange1d"},{"attributes":{},"id":"14636","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14608","type":"PanTool"},{"id":"14609","type":"WheelZoomTool"},{"id":"14610","type":"BoxZoomTool"},{"id":"14611","type":"SaveTool"},{"id":"14612","type":"ResetTool"},{"id":"14613","type":"HelpTool"}]},"id":"14614","type":"Toolbar"},{"attributes":{"band_fill_alpha":{"value":0.1},"band_fill_color":{"value":"navy"},"dimension":1,"plot":{"id":"14589","subtype":"Figure","type":"Plot"},"ticker":{"id":"14604","type":"BasicTicker"}},"id":"14607","type":"Grid"},{"attributes":{"callback":null},"id":"14592","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14616","type":"BoxAnnotation"},{"attributes":{},"id":"14594","type":"LinearScale"},{"attributes":{"data_source":{"id":"14623","type":"ColumnDataSource"},"glyph":{"id":"14624","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14625","type":"Circle"},"selection_glyph":null,"view":{"id":"14627","type":"CDSView"}},"id":"14626","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14624","type":"Circle"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"14589","subtype":"Figure","type":"Plot"},"ticker":{"id":"14599","type":"BasicTicker"}},"id":"14602","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"14636","type":"Selection"},"selection_policy":{"id":"14635","type":"UnionRenderers"}},"id":"14623","type":"ColumnDataSource"},{"attributes":{},"id":"14596","type":"LinearScale"}],"root_ids":["14589"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"d982175e-5565-417c-9780-2bfe7d6f2af4","roots":{"14589":"3a175ee0-8cc0-42fc-8067-e54688c735ff"}}];
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