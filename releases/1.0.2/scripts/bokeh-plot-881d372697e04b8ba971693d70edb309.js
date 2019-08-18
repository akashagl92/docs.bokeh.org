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
      };var element = document.getElementById("3b9de46b-63c5-49dc-b989-1f36c8599d5e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3b9de46b-63c5-49dc-b989-1f36c8599d5e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"05438b2c-9165-4cc8-9557-230e823adb91":{"roots":{"references":[{"attributes":{},"id":"10947","type":"PanTool"},{"attributes":{"ticker":null},"id":"10977","type":"LogTickFormatter"},{"attributes":{},"id":"10952","type":"HelpTool"},{"attributes":{},"id":"10948","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"10980","type":"Selection"},"selection_policy":{"id":"10979","type":"UnionRenderers"}},"id":"10962","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"10955","type":"BoxAnnotation"}},"id":"10949","type":"BoxZoomTool"},{"attributes":{},"id":"10980","type":"Selection"},{"attributes":{},"id":"10950","type":"SaveTool"},{"attributes":{},"id":"10951","type":"ResetTool"},{"attributes":{"below":[{"id":"10937","type":"LinearAxis"}],"left":[{"id":"10942","type":"LogAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"10937","type":"LinearAxis"},{"id":"10941","type":"Grid"},{"id":"10942","type":"LogAxis"},{"id":"10946","type":"Grid"},{"id":"10955","type":"BoxAnnotation"},{"id":"10965","type":"GlyphRenderer"},{"id":"10970","type":"GlyphRenderer"}],"title":{"id":"10973","type":"Title"},"toolbar":{"id":"10953","type":"Toolbar"},"x_range":{"id":"10929","type":"DataRange1d"},"x_scale":{"id":"10933","type":"LinearScale"},"y_range":{"id":"10931","type":"DataRange1d"},"y_scale":{"id":"10935","type":"LogScale"}},"id":"10928","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10964","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10947","type":"PanTool"},{"id":"10948","type":"WheelZoomTool"},{"id":"10949","type":"BoxZoomTool"},{"id":"10950","type":"SaveTool"},{"id":"10951","type":"ResetTool"},{"id":"10952","type":"HelpTool"}]},"id":"10953","type":"Toolbar"},{"attributes":{"callback":null},"id":"10929","type":"DataRange1d"},{"attributes":{},"id":"10938","type":"BasicTicker"},{"attributes":{"source":{"id":"10962","type":"ColumnDataSource"}},"id":"10966","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"10955","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"10931","type":"DataRange1d"},{"attributes":{},"id":"10982","type":"Selection"},{"attributes":{"data_source":{"id":"10962","type":"ColumnDataSource"},"glyph":{"id":"10963","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10964","type":"Line"},"selection_glyph":null,"view":{"id":"10966","type":"CDSView"}},"id":"10965","type":"GlyphRenderer"},{"attributes":{},"id":"10933","type":"LinearScale"},{"attributes":{},"id":"10935","type":"LogScale"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"10982","type":"Selection"},"selection_policy":{"id":"10981","type":"UnionRenderers"}},"id":"10967","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"10975","type":"BasicTickFormatter"},"plot":{"id":"10928","subtype":"Figure","type":"Plot"},"ticker":{"id":"10938","type":"BasicTicker"}},"id":"10937","type":"LinearAxis"},{"attributes":{"source":{"id":"10967","type":"ColumnDataSource"}},"id":"10971","type":"CDSView"},{"attributes":{},"id":"10981","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"10967","type":"ColumnDataSource"},"glyph":{"id":"10968","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10969","type":"Circle"},"selection_glyph":null,"view":{"id":"10971","type":"CDSView"}},"id":"10970","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"10928","subtype":"Figure","type":"Plot"},"ticker":{"id":"10938","type":"BasicTicker"}},"id":"10941","type":"Grid"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"10968","type":"Circle"},{"attributes":{"num_minor_ticks":10},"id":"10943","type":"LogTicker"},{"attributes":{"dimension":1,"plot":{"id":"10928","subtype":"Figure","type":"Plot"},"ticker":{"id":"10943","type":"LogTicker"}},"id":"10946","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"10969","type":"Circle"},{"attributes":{"formatter":{"id":"10977","type":"LogTickFormatter"},"plot":{"id":"10928","subtype":"Figure","type":"Plot"},"ticker":{"id":"10943","type":"LogTicker"}},"id":"10942","type":"LogAxis"},{"attributes":{"plot":null,"text":""},"id":"10973","type":"Title"},{"attributes":{},"id":"10979","type":"UnionRenderers"},{"attributes":{},"id":"10975","type":"BasicTickFormatter"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10963","type":"Line"}],"root_ids":["10928"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"05438b2c-9165-4cc8-9557-230e823adb91","roots":{"10928":"3b9de46b-63c5-49dc-b989-1f36c8599d5e"}}];
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