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
      };var element = document.getElementById("9361eaa2-b1ef-42ec-8389-89d442212bda");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9361eaa2-b1ef-42ec-8389-89d442212bda' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9d0138ae-cb6e-4dcd-b288-02d675e9cf0d":{"roots":{"references":[{"attributes":{"data_source":{"id":"34030","type":"ColumnDataSource"},"glyph":{"id":"34031","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34032","type":"Patches"},"selection_glyph":null,"view":{"id":"34034","type":"CDSView"}},"id":"34033","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"34038","type":"BasicTickFormatter"},"plot":{"id":"33996","subtype":"Figure","type":"Plot"},"ticker":{"id":"34006","type":"BasicTicker"}},"id":"34005","type":"LinearAxis"},{"attributes":{},"id":"34015","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"34036","type":"Title"},{"attributes":{},"id":"34016","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34015","type":"PanTool"},{"id":"34016","type":"WheelZoomTool"},{"id":"34017","type":"BoxZoomTool"},{"id":"34018","type":"SaveTool"},{"id":"34019","type":"ResetTool"},{"id":"34020","type":"HelpTool"}]},"id":"34021","type":"Toolbar"},{"attributes":{},"id":"34038","type":"BasicTickFormatter"},{"attributes":{},"id":"34006","type":"BasicTicker"},{"attributes":{"overlay":{"id":"34023","type":"BoxAnnotation"}},"id":"34017","type":"BoxZoomTool"},{"attributes":{},"id":"34040","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"33996","subtype":"Figure","type":"Plot"},"ticker":{"id":"34006","type":"BasicTicker"}},"id":"34009","type":"Grid"},{"attributes":{},"id":"34018","type":"SaveTool"},{"attributes":{"below":[{"id":"34005","type":"LinearAxis"}],"left":[{"id":"34010","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34005","type":"LinearAxis"},{"id":"34009","type":"Grid"},{"id":"34010","type":"LinearAxis"},{"id":"34014","type":"Grid"},{"id":"34023","type":"BoxAnnotation"},{"id":"34033","type":"GlyphRenderer"}],"title":{"id":"34036","type":"Title"},"toolbar":{"id":"34021","type":"Toolbar"},"x_range":{"id":"33997","type":"DataRange1d"},"x_scale":{"id":"34001","type":"LinearScale"},"y_range":{"id":"33999","type":"DataRange1d"},"y_scale":{"id":"34003","type":"LinearScale"}},"id":"33996","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"34042","type":"Selection"},{"attributes":{"formatter":{"id":"34040","type":"BasicTickFormatter"},"plot":{"id":"33996","subtype":"Figure","type":"Plot"},"ticker":{"id":"34011","type":"BasicTicker"}},"id":"34010","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"34032","type":"Patches"},{"attributes":{},"id":"34019","type":"ResetTool"},{"attributes":{},"id":"34043","type":"UnionRenderers"},{"attributes":{},"id":"34011","type":"BasicTicker"},{"attributes":{"callback":null},"id":"33997","type":"DataRange1d"},{"attributes":{},"id":"34020","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"33996","subtype":"Figure","type":"Plot"},"ticker":{"id":"34011","type":"BasicTicker"}},"id":"34014","type":"Grid"},{"attributes":{},"id":"34003","type":"LinearScale"},{"attributes":{"callback":null},"id":"33999","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34023","type":"BoxAnnotation"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"34031","type":"Patches"},{"attributes":{},"id":"34001","type":"LinearScale"},{"attributes":{"source":{"id":"34030","type":"ColumnDataSource"}},"id":"34034","type":"CDSView"},{"attributes":{"callback":null,"data":{"fill_color":["#43a2ca","#a8ddb5"],"line_color":["#43a2ca","#a8ddb5"],"xs":[[1,2,3],[4,5,6,5]],"ys":[[1,2,1],[4,5,5,4]]},"selected":{"id":"34042","type":"Selection"},"selection_policy":{"id":"34043","type":"UnionRenderers"}},"id":"34030","type":"ColumnDataSource"}],"root_ids":["33996"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"9d0138ae-cb6e-4dcd-b288-02d675e9cf0d","roots":{"33996":"9361eaa2-b1ef-42ec-8389-89d442212bda"}}];
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