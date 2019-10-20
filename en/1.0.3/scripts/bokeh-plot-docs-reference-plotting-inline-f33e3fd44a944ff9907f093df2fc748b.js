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
      };var element = document.getElementById("283339f6-8c86-461e-ac8f-f020a45b105f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '283339f6-8c86-461e-ac8f-f020a45b105f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"534feab1-901c-4682-9f81-d79e4372d296":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33693","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"33709","type":"BasicTickFormatter"},"plot":{"id":"33666","subtype":"Figure","type":"Plot"},"ticker":{"id":"33676","type":"BasicTicker"}},"id":"33675","type":"LinearAxis"},{"attributes":{"callback":null},"id":"33667","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"33702","type":"MultiLine"},{"attributes":{},"id":"33671","type":"LinearScale"},{"attributes":{"data_source":{"id":"33700","type":"ColumnDataSource"},"glyph":{"id":"33701","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33702","type":"MultiLine"},"selection_glyph":null,"view":{"id":"33704","type":"CDSView"}},"id":"33703","type":"GlyphRenderer"},{"attributes":{"source":{"id":"33700","type":"ColumnDataSource"}},"id":"33704","type":"CDSView"},{"attributes":{},"id":"33685","type":"PanTool"},{"attributes":{},"id":"33673","type":"LinearScale"},{"attributes":{"callback":null},"id":"33669","type":"DataRange1d"},{"attributes":{},"id":"33686","type":"WheelZoomTool"},{"attributes":{},"id":"33676","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"33705","type":"Title"},{"attributes":{"overlay":{"id":"33693","type":"BoxAnnotation"}},"id":"33687","type":"BoxZoomTool"},{"attributes":{},"id":"33707","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]},"selected":{"id":"33712","type":"Selection"},"selection_policy":{"id":"33713","type":"UnionRenderers"}},"id":"33700","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"33675","type":"LinearAxis"}],"left":[{"id":"33680","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33675","type":"LinearAxis"},{"id":"33679","type":"Grid"},{"id":"33680","type":"LinearAxis"},{"id":"33684","type":"Grid"},{"id":"33693","type":"BoxAnnotation"},{"id":"33703","type":"GlyphRenderer"}],"title":{"id":"33705","type":"Title"},"toolbar":{"id":"33691","type":"Toolbar"},"x_range":{"id":"33667","type":"DataRange1d"},"x_scale":{"id":"33671","type":"LinearScale"},"y_range":{"id":"33669","type":"DataRange1d"},"y_scale":{"id":"33673","type":"LinearScale"}},"id":"33666","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33688","type":"SaveTool"},{"attributes":{"plot":{"id":"33666","subtype":"Figure","type":"Plot"},"ticker":{"id":"33676","type":"BasicTicker"}},"id":"33679","type":"Grid"},{"attributes":{},"id":"33709","type":"BasicTickFormatter"},{"attributes":{},"id":"33689","type":"ResetTool"},{"attributes":{"formatter":{"id":"33707","type":"BasicTickFormatter"},"plot":{"id":"33666","subtype":"Figure","type":"Plot"},"ticker":{"id":"33681","type":"BasicTicker"}},"id":"33680","type":"LinearAxis"},{"attributes":{},"id":"33712","type":"Selection"},{"attributes":{},"id":"33690","type":"HelpTool"},{"attributes":{},"id":"33681","type":"BasicTicker"},{"attributes":{},"id":"33713","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33685","type":"PanTool"},{"id":"33686","type":"WheelZoomTool"},{"id":"33687","type":"BoxZoomTool"},{"id":"33688","type":"SaveTool"},{"id":"33689","type":"ResetTool"},{"id":"33690","type":"HelpTool"}]},"id":"33691","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"33666","subtype":"Figure","type":"Plot"},"ticker":{"id":"33681","type":"BasicTicker"}},"id":"33684","type":"Grid"},{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"33701","type":"MultiLine"}],"root_ids":["33666"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"534feab1-901c-4682-9f81-d79e4372d296","roots":{"33666":"283339f6-8c86-461e-ac8f-f020a45b105f"}}];
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