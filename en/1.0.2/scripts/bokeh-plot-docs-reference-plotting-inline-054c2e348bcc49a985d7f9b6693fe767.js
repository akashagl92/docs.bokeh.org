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
      };var element = document.getElementById("8e731e78-a48c-4fa1-bb8d-00e678a8757f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8e731e78-a48c-4fa1-bb8d-00e678a8757f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"49f58868-8fa5-4937-af49-d885ee13fd0b":{"roots":{"references":[{"attributes":{"below":[{"id":"33668","type":"LinearAxis"}],"left":[{"id":"33673","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33668","type":"LinearAxis"},{"id":"33672","type":"Grid"},{"id":"33673","type":"LinearAxis"},{"id":"33677","type":"Grid"},{"id":"33686","type":"BoxAnnotation"},{"id":"33696","type":"GlyphRenderer"}],"title":{"id":"33699","type":"Title"},"toolbar":{"id":"33684","type":"Toolbar"},"x_range":{"id":"33660","type":"DataRange1d"},"x_scale":{"id":"33664","type":"LinearScale"},"y_range":{"id":"33662","type":"DataRange1d"},"y_scale":{"id":"33666","type":"LinearScale"}},"id":"33659","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33669","type":"BasicTicker"},{"attributes":{},"id":"33683","type":"HelpTool"},{"attributes":{},"id":"33706","type":"Selection"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"33695","type":"MultiLine"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33678","type":"PanTool"},{"id":"33679","type":"WheelZoomTool"},{"id":"33680","type":"BoxZoomTool"},{"id":"33681","type":"SaveTool"},{"id":"33682","type":"ResetTool"},{"id":"33683","type":"HelpTool"}]},"id":"33684","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"33659","subtype":"Figure","type":"Plot"},"ticker":{"id":"33674","type":"BasicTicker"}},"id":"33677","type":"Grid"},{"attributes":{},"id":"33681","type":"SaveTool"},{"attributes":{"data_source":{"id":"33693","type":"ColumnDataSource"},"glyph":{"id":"33694","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33695","type":"MultiLine"},"selection_glyph":null,"view":{"id":"33697","type":"CDSView"}},"id":"33696","type":"GlyphRenderer"},{"attributes":{},"id":"33674","type":"BasicTicker"},{"attributes":{"callback":null},"id":"33660","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33686","type":"BoxAnnotation"},{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"33694","type":"MultiLine"},{"attributes":{"formatter":{"id":"33703","type":"BasicTickFormatter"},"plot":{"id":"33659","subtype":"Figure","type":"Plot"},"ticker":{"id":"33674","type":"BasicTicker"}},"id":"33673","type":"LinearAxis"},{"attributes":{},"id":"33666","type":"LinearScale"},{"attributes":{"source":{"id":"33693","type":"ColumnDataSource"}},"id":"33697","type":"CDSView"},{"attributes":{},"id":"33664","type":"LinearScale"},{"attributes":{},"id":"33678","type":"PanTool"},{"attributes":{"formatter":{"id":"33701","type":"BasicTickFormatter"},"plot":{"id":"33659","subtype":"Figure","type":"Plot"},"ticker":{"id":"33669","type":"BasicTicker"}},"id":"33668","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"33699","type":"Title"},{"attributes":{},"id":"33682","type":"ResetTool"},{"attributes":{},"id":"33679","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]},"selected":{"id":"33706","type":"Selection"},"selection_policy":{"id":"33705","type":"UnionRenderers"}},"id":"33693","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"33662","type":"DataRange1d"},{"attributes":{},"id":"33701","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"33686","type":"BoxAnnotation"}},"id":"33680","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"33659","subtype":"Figure","type":"Plot"},"ticker":{"id":"33669","type":"BasicTicker"}},"id":"33672","type":"Grid"},{"attributes":{},"id":"33703","type":"BasicTickFormatter"},{"attributes":{},"id":"33705","type":"UnionRenderers"}],"root_ids":["33659"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"49f58868-8fa5-4937-af49-d885ee13fd0b","roots":{"33659":"8e731e78-a48c-4fa1-bb8d-00e678a8757f"}}];
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