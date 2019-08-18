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
      };var element = document.getElementById("a9258402-ba06-4ca5-904f-e93d4b8a4cb0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a9258402-ba06-4ca5-904f-e93d4b8a4cb0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a87637ae-05e2-474d-8035-a543d64353ad":{"roots":{"references":[{"attributes":{},"id":"10974","type":"BasicTickFormatter"},{"attributes":{"ticker":null},"id":"10976","type":"LogTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10963","type":"Line"},{"attributes":{},"id":"10978","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"10927","subtype":"Figure","type":"Plot"},"ticker":{"id":"10942","type":"LogTicker"}},"id":"10945","type":"Grid"},{"attributes":{},"id":"10979","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10962","type":"Line"},{"attributes":{"data_source":{"id":"10961","type":"ColumnDataSource"},"glyph":{"id":"10962","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10963","type":"Line"},"selection_glyph":null,"view":{"id":"10965","type":"CDSView"}},"id":"10964","type":"GlyphRenderer"},{"attributes":{},"id":"10980","type":"Selection"},{"attributes":{},"id":"10946","type":"PanTool"},{"attributes":{},"id":"10981","type":"UnionRenderers"},{"attributes":{},"id":"10950","type":"ResetTool"},{"attributes":{},"id":"10947","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"10972","type":"Title"},{"attributes":{"num_minor_ticks":10},"id":"10942","type":"LogTicker"},{"attributes":{"overlay":{"id":"10954","type":"BoxAnnotation"}},"id":"10948","type":"BoxZoomTool"},{"attributes":{},"id":"10949","type":"SaveTool"},{"attributes":{"below":[{"id":"10936","type":"LinearAxis"}],"left":[{"id":"10941","type":"LogAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"10936","type":"LinearAxis"},{"id":"10940","type":"Grid"},{"id":"10941","type":"LogAxis"},{"id":"10945","type":"Grid"},{"id":"10954","type":"BoxAnnotation"},{"id":"10964","type":"GlyphRenderer"},{"id":"10969","type":"GlyphRenderer"}],"title":{"id":"10972","type":"Title"},"toolbar":{"id":"10952","type":"Toolbar"},"x_range":{"id":"10928","type":"DataRange1d"},"x_scale":{"id":"10932","type":"LinearScale"},"y_range":{"id":"10930","type":"DataRange1d"},"y_scale":{"id":"10934","type":"LogScale"}},"id":"10927","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10951","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"10978","type":"Selection"},"selection_policy":{"id":"10979","type":"UnionRenderers"}},"id":"10961","type":"ColumnDataSource"},{"attributes":{"source":{"id":"10966","type":"ColumnDataSource"}},"id":"10970","type":"CDSView"},{"attributes":{"callback":null},"id":"10928","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"10954","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"10930","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10946","type":"PanTool"},{"id":"10947","type":"WheelZoomTool"},{"id":"10948","type":"BoxZoomTool"},{"id":"10949","type":"SaveTool"},{"id":"10950","type":"ResetTool"},{"id":"10951","type":"HelpTool"}]},"id":"10952","type":"Toolbar"},{"attributes":{},"id":"10932","type":"LinearScale"},{"attributes":{"source":{"id":"10961","type":"ColumnDataSource"}},"id":"10965","type":"CDSView"},{"attributes":{},"id":"10934","type":"LogScale"},{"attributes":{"data_source":{"id":"10966","type":"ColumnDataSource"},"glyph":{"id":"10967","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10968","type":"Circle"},"selection_glyph":null,"view":{"id":"10970","type":"CDSView"}},"id":"10969","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"10974","type":"BasicTickFormatter"},"plot":{"id":"10927","subtype":"Figure","type":"Plot"},"ticker":{"id":"10937","type":"BasicTicker"}},"id":"10936","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"10968","type":"Circle"},{"attributes":{},"id":"10937","type":"BasicTicker"},{"attributes":{"formatter":{"id":"10976","type":"LogTickFormatter"},"plot":{"id":"10927","subtype":"Figure","type":"Plot"},"ticker":{"id":"10942","type":"LogTicker"}},"id":"10941","type":"LogAxis"},{"attributes":{"callback":null,"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]},"selected":{"id":"10980","type":"Selection"},"selection_policy":{"id":"10981","type":"UnionRenderers"}},"id":"10966","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"10927","subtype":"Figure","type":"Plot"},"ticker":{"id":"10937","type":"BasicTicker"}},"id":"10940","type":"Grid"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"10967","type":"Circle"}],"root_ids":["10927"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"a87637ae-05e2-474d-8035-a543d64353ad","roots":{"10927":"a9258402-ba06-4ca5-904f-e93d4b8a4cb0"}}];
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