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
      };var element = document.getElementById("2022a0d0-5622-401b-b04e-1521fb7f74b5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2022a0d0-5622-401b-b04e-1521fb7f74b5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"47a36317-aba7-4dd2-84c9-9015e2185e33":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"32944","type":"Title"},{"attributes":{"plot":{"id":"32904","subtype":"Figure","type":"Plot"},"ticker":{"id":"32914","type":"BasicTicker"}},"id":"32917","type":"Grid"},{"attributes":{},"id":"32927","type":"ResetTool"},{"attributes":{"source":{"id":"32938","type":"ColumnDataSource"}},"id":"32942","type":"CDSView"},{"attributes":{"formatter":{"id":"32948","type":"BasicTickFormatter"},"plot":{"id":"32904","subtype":"Figure","type":"Plot"},"ticker":{"id":"32919","type":"BasicTicker"}},"id":"32918","type":"LinearAxis"},{"attributes":{},"id":"32926","type":"SaveTool"},{"attributes":{"callback":null},"id":"32907","type":"DataRange1d"},{"attributes":{"overlay":{"id":"32931","type":"BoxAnnotation"}},"id":"32925","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"32905","type":"DataRange1d"},{"attributes":{},"id":"32909","type":"LinearScale"},{"attributes":{},"id":"32911","type":"LinearScale"},{"attributes":{},"id":"32924","type":"WheelZoomTool"},{"attributes":{},"id":"32951","type":"UnionRenderers"},{"attributes":{},"id":"32919","type":"BasicTicker"},{"attributes":{},"id":"32923","type":"PanTool"},{"attributes":{},"id":"32946","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"32913","type":"LinearAxis"}],"left":[{"id":"32918","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32913","type":"LinearAxis"},{"id":"32917","type":"Grid"},{"id":"32918","type":"LinearAxis"},{"id":"32922","type":"Grid"},{"id":"32931","type":"BoxAnnotation"},{"id":"32941","type":"GlyphRenderer"}],"title":{"id":"32944","type":"Title"},"toolbar":{"id":"32929","type":"Toolbar"},"x_range":{"id":"32905","type":"DataRange1d"},"x_scale":{"id":"32909","type":"LinearScale"},"y_range":{"id":"32907","type":"DataRange1d"},"y_scale":{"id":"32911","type":"LinearScale"}},"id":"32904","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32914","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32923","type":"PanTool"},{"id":"32924","type":"WheelZoomTool"},{"id":"32925","type":"BoxZoomTool"},{"id":"32926","type":"SaveTool"},{"id":"32927","type":"ResetTool"},{"id":"32928","type":"HelpTool"}]},"id":"32929","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"32904","subtype":"Figure","type":"Plot"},"ticker":{"id":"32919","type":"BasicTicker"}},"id":"32922","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32950","type":"Selection"},"selection_policy":{"id":"32951","type":"UnionRenderers"}},"id":"32938","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1C9099"},"line_color":{"value":"#1C9099"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32939","type":"Diamond"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32931","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"32938","type":"ColumnDataSource"},"glyph":{"id":"32939","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32940","type":"Diamond"},"selection_glyph":null,"view":{"id":"32942","type":"CDSView"}},"id":"32941","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32940","type":"Diamond"},{"attributes":{},"id":"32928","type":"HelpTool"},{"attributes":{},"id":"32948","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"32946","type":"BasicTickFormatter"},"plot":{"id":"32904","subtype":"Figure","type":"Plot"},"ticker":{"id":"32914","type":"BasicTicker"}},"id":"32913","type":"LinearAxis"},{"attributes":{},"id":"32950","type":"Selection"}],"root_ids":["32904"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"47a36317-aba7-4dd2-84c9-9015e2185e33","roots":{"32904":"2022a0d0-5622-401b-b04e-1521fb7f74b5"}}];
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