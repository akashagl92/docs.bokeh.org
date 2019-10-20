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
      };var element = document.getElementById("9b789657-c9a1-4f16-bf31-f6fb7b2db526");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9b789657-c9a1-4f16-bf31-f6fb7b2db526' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"17127ca2-566b-4552-b558-c6209c12eb42":{"roots":{"references":[{"attributes":{},"id":"33008","type":"PanTool"},{"attributes":{},"id":"33012","type":"ResetTool"},{"attributes":{},"id":"33011","type":"SaveTool"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"33024","type":"DiamondCross"},{"attributes":{"dimension":1,"plot":{"id":"32989","subtype":"Figure","type":"Plot"},"ticker":{"id":"33004","type":"BasicTicker"}},"id":"33007","type":"Grid"},{"attributes":{},"id":"32994","type":"LinearScale"},{"attributes":{},"id":"33013","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33016","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"32990","type":"DataRange1d"},{"attributes":{"plot":{"id":"32989","subtype":"Figure","type":"Plot"},"ticker":{"id":"32999","type":"BasicTicker"}},"id":"33002","type":"Grid"},{"attributes":{"below":[{"id":"32998","type":"LinearAxis"}],"left":[{"id":"33003","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32998","type":"LinearAxis"},{"id":"33002","type":"Grid"},{"id":"33003","type":"LinearAxis"},{"id":"33007","type":"Grid"},{"id":"33016","type":"BoxAnnotation"},{"id":"33026","type":"GlyphRenderer"}],"title":{"id":"33029","type":"Title"},"toolbar":{"id":"33014","type":"Toolbar"},"x_range":{"id":"32990","type":"DataRange1d"},"x_scale":{"id":"32994","type":"LinearScale"},"y_range":{"id":"32992","type":"DataRange1d"},"y_scale":{"id":"32996","type":"LinearScale"}},"id":"32989","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33036","type":"UnionRenderers"},{"attributes":{},"id":"33035","type":"Selection"},{"attributes":{},"id":"32999","type":"BasicTicker"},{"attributes":{},"id":"33009","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"33023","type":"ColumnDataSource"},"glyph":{"id":"33024","type":"DiamondCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33025","type":"DiamondCross"},"selection_glyph":null,"view":{"id":"33027","type":"CDSView"}},"id":"33026","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33008","type":"PanTool"},{"id":"33009","type":"WheelZoomTool"},{"id":"33010","type":"BoxZoomTool"},{"id":"33011","type":"SaveTool"},{"id":"33012","type":"ResetTool"},{"id":"33013","type":"HelpTool"}]},"id":"33014","type":"Toolbar"},{"attributes":{"formatter":{"id":"33033","type":"BasicTickFormatter"},"plot":{"id":"32989","subtype":"Figure","type":"Plot"},"ticker":{"id":"33004","type":"BasicTicker"}},"id":"33003","type":"LinearAxis"},{"attributes":{"formatter":{"id":"33031","type":"BasicTickFormatter"},"plot":{"id":"32989","subtype":"Figure","type":"Plot"},"ticker":{"id":"32999","type":"BasicTicker"}},"id":"32998","type":"LinearAxis"},{"attributes":{},"id":"33033","type":"BasicTickFormatter"},{"attributes":{},"id":"33004","type":"BasicTicker"},{"attributes":{"callback":null},"id":"32992","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"33035","type":"Selection"},"selection_policy":{"id":"33036","type":"UnionRenderers"}},"id":"33023","type":"ColumnDataSource"},{"attributes":{},"id":"32996","type":"LinearScale"},{"attributes":{},"id":"33031","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"33025","type":"DiamondCross"},{"attributes":{"overlay":{"id":"33016","type":"BoxAnnotation"}},"id":"33010","type":"BoxZoomTool"},{"attributes":{"source":{"id":"33023","type":"ColumnDataSource"}},"id":"33027","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"33029","type":"Title"}],"root_ids":["32989"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"17127ca2-566b-4552-b558-c6209c12eb42","roots":{"32989":"9b789657-c9a1-4f16-bf31-f6fb7b2db526"}}];
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