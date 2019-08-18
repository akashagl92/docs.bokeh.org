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
      };var element = document.getElementById("354543cc-2672-461b-8773-b14edda5f0d8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '354543cc-2672-461b-8773-b14edda5f0d8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2c29af3e-abcd-4c5e-950d-24da169c0a2b":{"roots":{"references":[{"attributes":{"formatter":{"id":"34043","type":"BasicTickFormatter"},"plot":{"id":"33999","subtype":"Figure","type":"Plot"},"ticker":{"id":"34014","type":"BasicTicker"}},"id":"34013","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"fill_color":["#43a2ca","#a8ddb5"],"line_color":["#43a2ca","#a8ddb5"],"xs":[[1,2,3],[4,5,6,5]],"ys":[[1,2,1],[4,5,5,4]]},"selected":{"id":"34046","type":"Selection"},"selection_policy":{"id":"34045","type":"UnionRenderers"}},"id":"34033","type":"ColumnDataSource"},{"attributes":{},"id":"34023","type":"HelpTool"},{"attributes":{"plot":{"id":"33999","subtype":"Figure","type":"Plot"},"ticker":{"id":"34009","type":"BasicTicker"}},"id":"34012","type":"Grid"},{"attributes":{},"id":"34043","type":"BasicTickFormatter"},{"attributes":{},"id":"34022","type":"ResetTool"},{"attributes":{"below":[{"id":"34008","type":"LinearAxis"}],"left":[{"id":"34013","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34008","type":"LinearAxis"},{"id":"34012","type":"Grid"},{"id":"34013","type":"LinearAxis"},{"id":"34017","type":"Grid"},{"id":"34026","type":"BoxAnnotation"},{"id":"34036","type":"GlyphRenderer"}],"title":{"id":"34039","type":"Title"},"toolbar":{"id":"34024","type":"Toolbar"},"x_range":{"id":"34000","type":"DataRange1d"},"x_scale":{"id":"34004","type":"LinearScale"},"y_range":{"id":"34002","type":"DataRange1d"},"y_scale":{"id":"34006","type":"LinearScale"}},"id":"33999","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"34009","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"34035","type":"Patches"},{"attributes":{"overlay":{"id":"34026","type":"BoxAnnotation"}},"id":"34020","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"34041","type":"BasicTickFormatter"},"plot":{"id":"33999","subtype":"Figure","type":"Plot"},"ticker":{"id":"34009","type":"BasicTicker"}},"id":"34008","type":"LinearAxis"},{"attributes":{},"id":"34041","type":"BasicTickFormatter"},{"attributes":{},"id":"34019","type":"WheelZoomTool"},{"attributes":{},"id":"34006","type":"LinearScale"},{"attributes":{},"id":"34021","type":"SaveTool"},{"attributes":{"source":{"id":"34033","type":"ColumnDataSource"}},"id":"34037","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34018","type":"PanTool"},{"id":"34019","type":"WheelZoomTool"},{"id":"34020","type":"BoxZoomTool"},{"id":"34021","type":"SaveTool"},{"id":"34022","type":"ResetTool"},{"id":"34023","type":"HelpTool"}]},"id":"34024","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"34039","type":"Title"},{"attributes":{},"id":"34045","type":"UnionRenderers"},{"attributes":{},"id":"34018","type":"PanTool"},{"attributes":{"callback":null},"id":"34002","type":"DataRange1d"},{"attributes":{"data_source":{"id":"34033","type":"ColumnDataSource"},"glyph":{"id":"34034","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34035","type":"Patches"},"selection_glyph":null,"view":{"id":"34037","type":"CDSView"}},"id":"34036","type":"GlyphRenderer"},{"attributes":{},"id":"34004","type":"LinearScale"},{"attributes":{"callback":null},"id":"34000","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"33999","subtype":"Figure","type":"Plot"},"ticker":{"id":"34014","type":"BasicTicker"}},"id":"34017","type":"Grid"},{"attributes":{},"id":"34046","type":"Selection"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"34034","type":"Patches"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34026","type":"BoxAnnotation"},{"attributes":{},"id":"34014","type":"BasicTicker"}],"root_ids":["33999"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"2c29af3e-abcd-4c5e-950d-24da169c0a2b","roots":{"33999":"354543cc-2672-461b-8773-b14edda5f0d8"}}];
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