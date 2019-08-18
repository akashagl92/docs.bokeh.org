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
      };var element = document.getElementById("f8968a98-d2d9-4d1b-9320-e9bdc6af778a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f8968a98-d2d9-4d1b-9320-e9bdc6af778a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5434b6c1-7012-4927-bb10-64f7dd3b4e85":{"roots":{"references":[{"attributes":{},"id":"33713","type":"BasicTickFormatter"},{"attributes":{},"id":"33692","type":"WheelZoomTool"},{"attributes":{},"id":"33694","type":"SaveTool"},{"attributes":{"overlay":{"id":"33699","type":"BoxAnnotation"}},"id":"33693","type":"BoxZoomTool"},{"attributes":{},"id":"33715","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"33673","type":"DataRange1d"},{"attributes":{},"id":"33695","type":"ResetTool"},{"attributes":{"plot":{"id":"33672","subtype":"Figure","type":"Plot"},"ticker":{"id":"33682","type":"BasicTicker"}},"id":"33685","type":"Grid"},{"attributes":{},"id":"33717","type":"UnionRenderers"},{"attributes":{},"id":"33696","type":"HelpTool"},{"attributes":{"formatter":{"id":"33713","type":"BasicTickFormatter"},"plot":{"id":"33672","subtype":"Figure","type":"Plot"},"ticker":{"id":"33687","type":"BasicTicker"}},"id":"33686","type":"LinearAxis"},{"attributes":{},"id":"33718","type":"Selection"},{"attributes":{},"id":"33691","type":"PanTool"},{"attributes":{"below":[{"id":"33681","type":"LinearAxis"}],"left":[{"id":"33686","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33681","type":"LinearAxis"},{"id":"33685","type":"Grid"},{"id":"33686","type":"LinearAxis"},{"id":"33690","type":"Grid"},{"id":"33699","type":"BoxAnnotation"},{"id":"33709","type":"GlyphRenderer"}],"title":{"id":"33711","type":"Title"},"toolbar":{"id":"33697","type":"Toolbar"},"x_range":{"id":"33673","type":"DataRange1d"},"x_scale":{"id":"33677","type":"LinearScale"},"y_range":{"id":"33675","type":"DataRange1d"},"y_scale":{"id":"33679","type":"LinearScale"}},"id":"33672","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33691","type":"PanTool"},{"id":"33692","type":"WheelZoomTool"},{"id":"33693","type":"BoxZoomTool"},{"id":"33694","type":"SaveTool"},{"id":"33695","type":"ResetTool"},{"id":"33696","type":"HelpTool"}]},"id":"33697","type":"Toolbar"},{"attributes":{},"id":"33687","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"33708","type":"MultiLine"},{"attributes":{"data_source":{"id":"33706","type":"ColumnDataSource"},"glyph":{"id":"33707","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33708","type":"MultiLine"},"selection_glyph":null,"view":{"id":"33710","type":"CDSView"}},"id":"33709","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"33672","subtype":"Figure","type":"Plot"},"ticker":{"id":"33687","type":"BasicTicker"}},"id":"33690","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33699","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"33675","type":"DataRange1d"},{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"33707","type":"MultiLine"},{"attributes":{"formatter":{"id":"33715","type":"BasicTickFormatter"},"plot":{"id":"33672","subtype":"Figure","type":"Plot"},"ticker":{"id":"33682","type":"BasicTicker"}},"id":"33681","type":"LinearAxis"},{"attributes":{"source":{"id":"33706","type":"ColumnDataSource"}},"id":"33710","type":"CDSView"},{"attributes":{},"id":"33677","type":"LinearScale"},{"attributes":{"callback":null,"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]},"selected":{"id":"33718","type":"Selection"},"selection_policy":{"id":"33717","type":"UnionRenderers"}},"id":"33706","type":"ColumnDataSource"},{"attributes":{},"id":"33679","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"33711","type":"Title"},{"attributes":{},"id":"33682","type":"BasicTicker"}],"root_ids":["33672"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"5434b6c1-7012-4927-bb10-64f7dd3b4e85","roots":{"33672":"f8968a98-d2d9-4d1b-9320-e9bdc6af778a"}}];
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