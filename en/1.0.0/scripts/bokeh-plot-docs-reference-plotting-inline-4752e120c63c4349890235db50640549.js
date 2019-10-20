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
      };var element = document.getElementById("abe4f1a1-8238-4978-aea6-2dd8de353ff0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'abe4f1a1-8238-4978-aea6-2dd8de353ff0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"47372a80-291c-4a91-bde0-6d0cebb8e44d":{"roots":{"references":[{"attributes":{"source":{"id":"33690","type":"ColumnDataSource"}},"id":"33694","type":"CDSView"},{"attributes":{"plot":{"id":"33656","subtype":"Figure","type":"Plot"},"ticker":{"id":"33666","type":"BasicTicker"}},"id":"33669","type":"Grid"},{"attributes":{"below":[{"id":"33665","type":"LinearAxis"}],"left":[{"id":"33670","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"33665","type":"LinearAxis"},{"id":"33669","type":"Grid"},{"id":"33670","type":"LinearAxis"},{"id":"33674","type":"Grid"},{"id":"33683","type":"BoxAnnotation"},{"id":"33693","type":"GlyphRenderer"}],"title":{"id":"33696","type":"Title"},"toolbar":{"id":"33681","type":"Toolbar"},"x_range":{"id":"33657","type":"DataRange1d"},"x_scale":{"id":"33661","type":"LinearScale"},"y_range":{"id":"33659","type":"DataRange1d"},"y_scale":{"id":"33663","type":"LinearScale"}},"id":"33656","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"33700","type":"BasicTickFormatter"},"plot":{"id":"33656","subtype":"Figure","type":"Plot"},"ticker":{"id":"33671","type":"BasicTicker"}},"id":"33670","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33683","type":"BoxAnnotation"},{"attributes":{},"id":"33675","type":"PanTool"},{"attributes":{"callback":null},"id":"33657","type":"DataRange1d"},{"attributes":{},"id":"33678","type":"SaveTool"},{"attributes":{"data_source":{"id":"33690","type":"ColumnDataSource"},"glyph":{"id":"33691","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33692","type":"MultiLine"},"selection_glyph":null,"view":{"id":"33694","type":"CDSView"}},"id":"33693","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"33692","type":"MultiLine"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33675","type":"PanTool"},{"id":"33676","type":"WheelZoomTool"},{"id":"33677","type":"BoxZoomTool"},{"id":"33678","type":"SaveTool"},{"id":"33679","type":"ResetTool"},{"id":"33680","type":"HelpTool"}]},"id":"33681","type":"Toolbar"},{"attributes":{},"id":"33698","type":"BasicTickFormatter"},{"attributes":{},"id":"33671","type":"BasicTicker"},{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"33691","type":"MultiLine"},{"attributes":{"callback":null,"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]},"selected":{"id":"33702","type":"Selection"},"selection_policy":{"id":"33703","type":"UnionRenderers"}},"id":"33690","type":"ColumnDataSource"},{"attributes":{},"id":"33663","type":"LinearScale"},{"attributes":{},"id":"33680","type":"HelpTool"},{"attributes":{},"id":"33700","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"33659","type":"DataRange1d"},{"attributes":{},"id":"33679","type":"ResetTool"},{"attributes":{},"id":"33702","type":"Selection"},{"attributes":{},"id":"33661","type":"LinearScale"},{"attributes":{},"id":"33703","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"33698","type":"BasicTickFormatter"},"plot":{"id":"33656","subtype":"Figure","type":"Plot"},"ticker":{"id":"33666","type":"BasicTicker"}},"id":"33665","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"33656","subtype":"Figure","type":"Plot"},"ticker":{"id":"33671","type":"BasicTicker"}},"id":"33674","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"33696","type":"Title"},{"attributes":{"overlay":{"id":"33683","type":"BoxAnnotation"}},"id":"33677","type":"BoxZoomTool"},{"attributes":{},"id":"33666","type":"BasicTicker"},{"attributes":{},"id":"33676","type":"WheelZoomTool"}],"root_ids":["33656"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"47372a80-291c-4a91-bde0-6d0cebb8e44d","roots":{"33656":"abe4f1a1-8238-4978-aea6-2dd8de353ff0"}}];
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