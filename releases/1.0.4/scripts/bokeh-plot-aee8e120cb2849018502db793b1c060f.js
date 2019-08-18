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
      };var element = document.getElementById("d97ee7ce-1e74-4d4f-9216-13c83ef54339");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd97ee7ce-1e74-4d4f-9216-13c83ef54339' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7ee5a94e-24f3-4558-9c1e-a5d98931fa20":{"roots":{"references":[{"attributes":{},"id":"12722","type":"ResetTool"},{"attributes":{},"id":"12723","type":"HelpTool"},{"attributes":{"callback":null},"id":"12702","type":"DataRange1d"},{"attributes":{},"id":"12714","type":"BasicTicker"},{"attributes":{"source":{"id":"12733","type":"ColumnDataSource"}},"id":"12737","type":"CDSView"},{"attributes":{"callback":null},"id":"12700","type":"DataRange1d"},{"attributes":{"plot":{"id":"12698","subtype":"Figure","type":"Plot"},"ticker":{"id":"12709","type":"BasicTicker"}},"id":"12712","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"12745","type":"Selection"},"selection_policy":{"id":"12744","type":"UnionRenderers"}},"id":"12733","type":"ColumnDataSource"},{"attributes":{},"id":"12721","type":"SaveTool"},{"attributes":{"plot":null,"text":"Left Title"},"id":"12697","type":"Title"},{"attributes":{"data_source":{"id":"12733","type":"ColumnDataSource"},"glyph":{"id":"12734","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12735","type":"Circle"},"selection_glyph":null,"view":{"id":"12737","type":"CDSView"}},"id":"12736","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"12698","subtype":"Figure","type":"Plot"},"ticker":{"id":"12714","type":"BasicTicker"}},"id":"12717","type":"Grid"},{"attributes":{},"id":"12742","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"12726","type":"BoxAnnotation"}},"id":"12720","type":"BoxZoomTool"},{"attributes":{},"id":"12745","type":"Selection"},{"attributes":{},"id":"12719","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"12740","type":"BasicTickFormatter"},"plot":{"id":"12698","subtype":"Figure","type":"Plot"},"ticker":{"id":"12714","type":"BasicTicker"}},"id":"12713","type":"LinearAxis"},{"attributes":{"formatter":{"id":"12742","type":"BasicTickFormatter"},"plot":{"id":"12698","subtype":"Figure","type":"Plot"},"ticker":{"id":"12709","type":"BasicTicker"}},"id":"12708","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12718","type":"PanTool"},{"id":"12719","type":"WheelZoomTool"},{"id":"12720","type":"BoxZoomTool"},{"id":"12721","type":"SaveTool"},{"id":"12722","type":"ResetTool"},{"id":"12723","type":"HelpTool"}]},"id":"12724","type":"Toolbar"},{"attributes":{},"id":"12704","type":"LinearScale"},{"attributes":{"align":"center","plot":{"id":"12698","subtype":"Figure","type":"Plot"},"text":"Bottom Centered Title"},"id":"12738","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12726","type":"BoxAnnotation"},{"attributes":{},"id":"12740","type":"BasicTickFormatter"},{"attributes":{},"id":"12706","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12734","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12735","type":"Circle"},{"attributes":{},"id":"12744","type":"UnionRenderers"},{"attributes":{},"id":"12709","type":"BasicTicker"},{"attributes":{"below":[{"id":"12708","type":"LinearAxis"},{"id":"12738","type":"Title"}],"left":[{"id":"12713","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"12708","type":"LinearAxis"},{"id":"12712","type":"Grid"},{"id":"12713","type":"LinearAxis"},{"id":"12717","type":"Grid"},{"id":"12726","type":"BoxAnnotation"},{"id":"12736","type":"GlyphRenderer"},{"id":"12738","type":"Title"}],"title":{"id":"12697","type":"Title"},"title_location":"left","toolbar":{"id":"12724","type":"Toolbar"},"x_range":{"id":"12700","type":"DataRange1d"},"x_scale":{"id":"12704","type":"LinearScale"},"y_range":{"id":"12702","type":"DataRange1d"},"y_scale":{"id":"12706","type":"LinearScale"}},"id":"12698","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12718","type":"PanTool"}],"root_ids":["12698"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"7ee5a94e-24f3-4558-9c1e-a5d98931fa20","roots":{"12698":"d97ee7ce-1e74-4d4f-9216-13c83ef54339"}}];
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