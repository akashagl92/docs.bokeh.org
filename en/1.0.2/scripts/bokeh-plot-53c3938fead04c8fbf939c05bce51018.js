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
      };var element = document.getElementById("9d60638f-31fe-447d-95bc-c521919db2a8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9d60638f-31fe-447d-95bc-c521919db2a8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a3ae922d-5807-4b63-aa2f-dcb79183b723":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"12989","type":"Selection"},"selection_policy":{"id":"12988","type":"UnionRenderers"}},"id":"12977","type":"ColumnDataSource"},{"attributes":{},"id":"12986","type":"BasicTickFormatter"},{"attributes":{},"id":"12958","type":"BasicTicker"},{"attributes":{},"id":"12988","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"12942","subtype":"Figure","type":"Plot"},"ticker":{"id":"12958","type":"BasicTicker"}},"id":"12961","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12970","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"12944","type":"DataRange1d"},{"attributes":{},"id":"12953","type":"BasicTicker"},{"attributes":{},"id":"12989","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12962","type":"PanTool"},{"id":"12963","type":"WheelZoomTool"},{"id":"12964","type":"BoxZoomTool"},{"id":"12965","type":"SaveTool"},{"id":"12966","type":"ResetTool"},{"id":"12967","type":"HelpTool"}]},"id":"12968","type":"Toolbar"},{"attributes":{"callback":null},"id":"12946","type":"DataRange1d"},{"attributes":{},"id":"12967","type":"HelpTool"},{"attributes":{},"id":"12962","type":"PanTool"},{"attributes":{},"id":"12966","type":"ResetTool"},{"attributes":{"plot":null,"text":"Top Title with Toolbar"},"id":"12941","type":"Title"},{"attributes":{},"id":"12948","type":"LinearScale"},{"attributes":{},"id":"12950","type":"LinearScale"},{"attributes":{},"id":"12963","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"12970","type":"BoxAnnotation"}},"id":"12964","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"12984","type":"BasicTickFormatter"},"plot":{"id":"12942","subtype":"Figure","type":"Plot"},"ticker":{"id":"12953","type":"BasicTicker"}},"id":"12952","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12978","type":"Circle"},{"attributes":{"plot":{"id":"12942","subtype":"Figure","type":"Plot"},"ticker":{"id":"12953","type":"BasicTicker"}},"id":"12956","type":"Grid"},{"attributes":{"source":{"id":"12977","type":"ColumnDataSource"}},"id":"12981","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"12979","type":"Circle"},{"attributes":{},"id":"12965","type":"SaveTool"},{"attributes":{"data_source":{"id":"12977","type":"ColumnDataSource"},"glyph":{"id":"12978","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12979","type":"Circle"},"selection_glyph":null,"view":{"id":"12981","type":"CDSView"}},"id":"12980","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"12952","type":"LinearAxis"}],"left":[{"id":"12957","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"12952","type":"LinearAxis"},{"id":"12956","type":"Grid"},{"id":"12957","type":"LinearAxis"},{"id":"12961","type":"Grid"},{"id":"12970","type":"BoxAnnotation"},{"id":"12980","type":"GlyphRenderer"}],"title":{"id":"12941","type":"Title"},"toolbar":{"id":"12968","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"12944","type":"DataRange1d"},"x_scale":{"id":"12948","type":"LinearScale"},"y_range":{"id":"12946","type":"DataRange1d"},"y_scale":{"id":"12950","type":"LinearScale"}},"id":"12942","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12984","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"12986","type":"BasicTickFormatter"},"plot":{"id":"12942","subtype":"Figure","type":"Plot"},"ticker":{"id":"12958","type":"BasicTicker"}},"id":"12957","type":"LinearAxis"}],"root_ids":["12942"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"a3ae922d-5807-4b63-aa2f-dcb79183b723","roots":{"12942":"9d60638f-31fe-447d-95bc-c521919db2a8"}}];
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