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
      };var element = document.getElementById("bf03124c-59f1-46df-a183-8a67abeb294e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bf03124c-59f1-46df-a183-8a67abeb294e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"5bf3b6b5-61fe-447f-91d0-f2a54ca949b1":{"roots":{"references":[{"attributes":{"source":{"id":"10965","type":"ColumnDataSource"}},"id":"10969","type":"CDSView"},{"attributes":{"callback":null},"id":"10932","type":"DataRange1d"},{"attributes":{"callback":null},"id":"10934","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"10958","type":"BoxAnnotation"},{"attributes":{},"id":"10936","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"10984","type":"Selection"},"selection_policy":{"id":"10983","type":"UnionRenderers"}},"id":"10970","type":"ColumnDataSource"},{"attributes":{},"id":"10938","type":"LogScale"},{"attributes":{"source":{"id":"10970","type":"ColumnDataSource"}},"id":"10974","type":"CDSView"},{"attributes":{"formatter":{"id":"10979","type":"BasicTickFormatter"},"plot":{"id":"10931","subtype":"Figure","type":"Plot"},"ticker":{"id":"10941","type":"BasicTicker"}},"id":"10940","type":"LinearAxis"},{"attributes":{},"id":"10941","type":"BasicTicker"},{"attributes":{"data_source":{"id":"10970","type":"ColumnDataSource"},"glyph":{"id":"10971","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10972","type":"Circle"},"selection_glyph":null,"view":{"id":"10974","type":"CDSView"}},"id":"10973","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"10971","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"10931","subtype":"Figure","type":"Plot"},"ticker":{"id":"10946","type":"LogTicker"}},"id":"10949","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"10972","type":"Circle"},{"attributes":{"plot":{"id":"10931","subtype":"Figure","type":"Plot"},"ticker":{"id":"10941","type":"BasicTicker"}},"id":"10944","type":"Grid"},{"attributes":{"formatter":{"id":"10977","type":"LogTickFormatter"},"plot":{"id":"10931","subtype":"Figure","type":"Plot"},"ticker":{"id":"10946","type":"LogTicker"}},"id":"10945","type":"LogAxis"},{"attributes":{"plot":null,"text":""},"id":"10975","type":"Title"},{"attributes":{"num_minor_ticks":10},"id":"10946","type":"LogTicker"},{"attributes":{"ticker":null},"id":"10977","type":"LogTickFormatter"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10966","type":"Line"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"10982","type":"Selection"},"selection_policy":{"id":"10981","type":"UnionRenderers"}},"id":"10965","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"10965","type":"ColumnDataSource"},"glyph":{"id":"10966","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10967","type":"Line"},"selection_glyph":null,"view":{"id":"10969","type":"CDSView"}},"id":"10968","type":"GlyphRenderer"},{"attributes":{},"id":"10979","type":"BasicTickFormatter"},{"attributes":{},"id":"10950","type":"PanTool"},{"attributes":{},"id":"10981","type":"UnionRenderers"},{"attributes":{},"id":"10954","type":"ResetTool"},{"attributes":{},"id":"10982","type":"Selection"},{"attributes":{},"id":"10951","type":"WheelZoomTool"},{"attributes":{},"id":"10983","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"10958","type":"BoxAnnotation"}},"id":"10952","type":"BoxZoomTool"},{"attributes":{},"id":"10984","type":"Selection"},{"attributes":{},"id":"10953","type":"SaveTool"},{"attributes":{},"id":"10955","type":"HelpTool"},{"attributes":{"below":[{"id":"10940","type":"LinearAxis"}],"left":[{"id":"10945","type":"LogAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"10940","type":"LinearAxis"},{"id":"10944","type":"Grid"},{"id":"10945","type":"LogAxis"},{"id":"10949","type":"Grid"},{"id":"10958","type":"BoxAnnotation"},{"id":"10968","type":"GlyphRenderer"},{"id":"10973","type":"GlyphRenderer"}],"title":{"id":"10975","type":"Title"},"toolbar":{"id":"10956","type":"Toolbar"},"x_range":{"id":"10932","type":"DataRange1d"},"x_scale":{"id":"10936","type":"LinearScale"},"y_range":{"id":"10934","type":"DataRange1d"},"y_scale":{"id":"10938","type":"LogScale"}},"id":"10931","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10967","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10950","type":"PanTool"},{"id":"10951","type":"WheelZoomTool"},{"id":"10952","type":"BoxZoomTool"},{"id":"10953","type":"SaveTool"},{"id":"10954","type":"ResetTool"},{"id":"10955","type":"HelpTool"}]},"id":"10956","type":"Toolbar"}],"root_ids":["10931"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"5bf3b6b5-61fe-447f-91d0-f2a54ca949b1","roots":{"10931":"bf03124c-59f1-46df-a183-8a67abeb294e"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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