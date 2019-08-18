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
      };var element = document.getElementById("aa140167-4c09-4fa1-a805-52fdb7b84422");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aa140167-4c09-4fa1-a805-52fdb7b84422' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3e52e560-36aa-4aac-addd-235d8cab7ad6":{"roots":{"references":[{"attributes":{"overlay":{"id":"34033","type":"BoxAnnotation"}},"id":"34027","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34033","type":"BoxAnnotation"},{"attributes":{},"id":"34013","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"34045","type":"Title"},{"attributes":{},"id":"34047","type":"BasicTickFormatter"},{"attributes":{},"id":"34028","type":"SaveTool"},{"attributes":{"callback":null},"id":"34009","type":"DataRange1d"},{"attributes":{},"id":"34029","type":"ResetTool"},{"attributes":{},"id":"34049","type":"BasicTickFormatter"},{"attributes":{},"id":"34011","type":"LinearScale"},{"attributes":{"source":{"id":"34040","type":"ColumnDataSource"}},"id":"34044","type":"CDSView"},{"attributes":{},"id":"34030","type":"HelpTool"},{"attributes":{},"id":"34052","type":"Selection"},{"attributes":{"formatter":{"id":"34049","type":"BasicTickFormatter"},"plot":{"id":"34006","subtype":"Figure","type":"Plot"},"ticker":{"id":"34016","type":"BasicTicker"}},"id":"34015","type":"LinearAxis"},{"attributes":{},"id":"34026","type":"WheelZoomTool"},{"attributes":{},"id":"34053","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34025","type":"PanTool"},{"id":"34026","type":"WheelZoomTool"},{"id":"34027","type":"BoxZoomTool"},{"id":"34028","type":"SaveTool"},{"id":"34029","type":"ResetTool"},{"id":"34030","type":"HelpTool"}]},"id":"34031","type":"Toolbar"},{"attributes":{"data_source":{"id":"34040","type":"ColumnDataSource"},"glyph":{"id":"34041","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34042","type":"Patches"},"selection_glyph":null,"view":{"id":"34044","type":"CDSView"}},"id":"34043","type":"GlyphRenderer"},{"attributes":{},"id":"34025","type":"PanTool"},{"attributes":{},"id":"34016","type":"BasicTicker"},{"attributes":{"plot":{"id":"34006","subtype":"Figure","type":"Plot"},"ticker":{"id":"34016","type":"BasicTicker"}},"id":"34019","type":"Grid"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"34041","type":"Patches"},{"attributes":{"below":[{"id":"34015","type":"LinearAxis"}],"left":[{"id":"34020","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34015","type":"LinearAxis"},{"id":"34019","type":"Grid"},{"id":"34020","type":"LinearAxis"},{"id":"34024","type":"Grid"},{"id":"34033","type":"BoxAnnotation"},{"id":"34043","type":"GlyphRenderer"}],"title":{"id":"34045","type":"Title"},"toolbar":{"id":"34031","type":"Toolbar"},"x_range":{"id":"34007","type":"DataRange1d"},"x_scale":{"id":"34011","type":"LinearScale"},"y_range":{"id":"34009","type":"DataRange1d"},"y_scale":{"id":"34013","type":"LinearScale"}},"id":"34006","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"34047","type":"BasicTickFormatter"},"plot":{"id":"34006","subtype":"Figure","type":"Plot"},"ticker":{"id":"34021","type":"BasicTicker"}},"id":"34020","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"fill_color":["#43a2ca","#a8ddb5"],"line_color":["#43a2ca","#a8ddb5"],"xs":[[1,2,3],[4,5,6,5]],"ys":[[1,2,1],[4,5,5,4]]},"selected":{"id":"34052","type":"Selection"},"selection_policy":{"id":"34053","type":"UnionRenderers"}},"id":"34040","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"34042","type":"Patches"},{"attributes":{},"id":"34021","type":"BasicTicker"},{"attributes":{"callback":null},"id":"34007","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"34006","subtype":"Figure","type":"Plot"},"ticker":{"id":"34021","type":"BasicTicker"}},"id":"34024","type":"Grid"}],"root_ids":["34006"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"3e52e560-36aa-4aac-addd-235d8cab7ad6","roots":{"34006":"aa140167-4c09-4fa1-a805-52fdb7b84422"}}];
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