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
      };var element = document.getElementById("1679c897-2050-4781-acb4-56f6431a90d6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1679c897-2050-4781-acb4-56f6431a90d6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"752d2b57-38aa-4ad8-a2ba-def0f7ee00f1":{"roots":{"references":[{"attributes":{"formatter":{"id":"33040","type":"BasicTickFormatter"},"plot":{"id":"32999","subtype":"Figure","type":"Plot"},"ticker":{"id":"33014","type":"BasicTicker"}},"id":"33013","type":"LinearAxis"},{"attributes":{},"id":"33046","type":"UnionRenderers"},{"attributes":{},"id":"33014","type":"BasicTicker"},{"attributes":{"callback":null},"id":"33000","type":"DataRange1d"},{"attributes":{},"id":"33045","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"32999","subtype":"Figure","type":"Plot"},"ticker":{"id":"33014","type":"BasicTicker"}},"id":"33017","type":"Grid"},{"attributes":{},"id":"33042","type":"BasicTickFormatter"},{"attributes":{},"id":"33006","type":"LinearScale"},{"attributes":{"data_source":{"id":"33033","type":"ColumnDataSource"},"glyph":{"id":"33034","type":"DiamondCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33035","type":"DiamondCross"},"selection_glyph":null,"view":{"id":"33037","type":"CDSView"}},"id":"33036","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"33002","type":"DataRange1d"},{"attributes":{},"id":"33040","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"33035","type":"DiamondCross"},{"attributes":{},"id":"33004","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"33038","type":"Title"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"33034","type":"DiamondCross"},{"attributes":{"source":{"id":"33033","type":"ColumnDataSource"}},"id":"33037","type":"CDSView"},{"attributes":{"formatter":{"id":"33042","type":"BasicTickFormatter"},"plot":{"id":"32999","subtype":"Figure","type":"Plot"},"ticker":{"id":"33009","type":"BasicTicker"}},"id":"33008","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33026","type":"BoxAnnotation"},{"attributes":{},"id":"33018","type":"PanTool"},{"attributes":{},"id":"33019","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"33045","type":"Selection"},"selection_policy":{"id":"33046","type":"UnionRenderers"}},"id":"33033","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"33026","type":"BoxAnnotation"}},"id":"33020","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33018","type":"PanTool"},{"id":"33019","type":"WheelZoomTool"},{"id":"33020","type":"BoxZoomTool"},{"id":"33021","type":"SaveTool"},{"id":"33022","type":"ResetTool"},{"id":"33023","type":"HelpTool"}]},"id":"33024","type":"Toolbar"},{"attributes":{},"id":"33023","type":"HelpTool"},{"attributes":{},"id":"33009","type":"BasicTicker"},{"attributes":{},"id":"33021","type":"SaveTool"},{"attributes":{},"id":"33022","type":"ResetTool"},{"attributes":{"plot":{"id":"32999","subtype":"Figure","type":"Plot"},"ticker":{"id":"33009","type":"BasicTicker"}},"id":"33012","type":"Grid"},{"attributes":{"below":[{"id":"33008","type":"LinearAxis"}],"left":[{"id":"33013","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33008","type":"LinearAxis"},{"id":"33012","type":"Grid"},{"id":"33013","type":"LinearAxis"},{"id":"33017","type":"Grid"},{"id":"33026","type":"BoxAnnotation"},{"id":"33036","type":"GlyphRenderer"}],"title":{"id":"33038","type":"Title"},"toolbar":{"id":"33024","type":"Toolbar"},"x_range":{"id":"33000","type":"DataRange1d"},"x_scale":{"id":"33004","type":"LinearScale"},"y_range":{"id":"33002","type":"DataRange1d"},"y_scale":{"id":"33006","type":"LinearScale"}},"id":"32999","subtype":"Figure","type":"Plot"}],"root_ids":["32999"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"752d2b57-38aa-4ad8-a2ba-def0f7ee00f1","roots":{"32999":"1679c897-2050-4781-acb4-56f6431a90d6"}}];
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