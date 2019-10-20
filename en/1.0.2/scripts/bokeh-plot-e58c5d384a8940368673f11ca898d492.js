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
      };var element = document.getElementById("94761915-5f84-4d68-8725-2a89b74c6fe8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '94761915-5f84-4d68-8725-2a89b74c6fe8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b1282649-9bf2-444f-b965-ca7d1b16f467":{"roots":{"references":[{"attributes":{},"id":"11232","type":"PanTool"},{"attributes":{},"id":"11220","type":"LinearScale"},{"attributes":{},"id":"11237","type":"HelpTool"},{"attributes":{},"id":"11255","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"11213","subtype":"Figure","type":"Plot"},"ticker":{"id":"11228","type":"BasicTicker"}},"id":"11231","type":"Grid"},{"attributes":{},"id":"11228","type":"BasicTicker"},{"attributes":{},"id":"11218","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11249","type":"MultiPolygons"},{"attributes":{},"id":"11260","type":"Selection"},{"attributes":{"below":[{"id":"11222","type":"LinearAxis"}],"left":[{"id":"11227","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11222","type":"LinearAxis"},{"id":"11226","type":"Grid"},{"id":"11227","type":"LinearAxis"},{"id":"11231","type":"Grid"},{"id":"11240","type":"BoxAnnotation"},{"id":"11250","type":"GlyphRenderer"}],"title":{"id":"11253","type":"Title"},"toolbar":{"id":"11238","type":"Toolbar"},"x_range":{"id":"11214","type":"DataRange1d"},"x_scale":{"id":"11218","type":"LinearScale"},"y_range":{"id":"11216","type":"DataRange1d"},"y_scale":{"id":"11220","type":"LinearScale"}},"id":"11213","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11232","type":"PanTool"},{"id":"11233","type":"WheelZoomTool"},{"id":"11234","type":"BoxZoomTool"},{"id":"11235","type":"SaveTool"},{"id":"11236","type":"ResetTool"},{"id":"11237","type":"HelpTool"}]},"id":"11238","type":"Toolbar"},{"attributes":{},"id":"11236","type":"ResetTool"},{"attributes":{"source":{"id":"11247","type":"ColumnDataSource"}},"id":"11251","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"11253","type":"Title"},{"attributes":{"callback":null},"id":"11216","type":"DataRange1d"},{"attributes":{},"id":"11235","type":"SaveTool"},{"attributes":{},"id":"11257","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"11213","subtype":"Figure","type":"Plot"},"ticker":{"id":"11223","type":"BasicTicker"}},"id":"11226","type":"Grid"},{"attributes":{},"id":"11233","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"11247","type":"ColumnDataSource"},"glyph":{"id":"11248","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11249","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"11251","type":"CDSView"}},"id":"11250","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"11255","type":"BasicTickFormatter"},"plot":{"id":"11213","subtype":"Figure","type":"Plot"},"ticker":{"id":"11223","type":"BasicTicker"}},"id":"11222","type":"LinearAxis"},{"attributes":{},"id":"11259","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11240","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"xs":[[[[1,2,2,1],[1.2,1.6,1.6],[1.8,1.8,1.6]]]],"ys":[[[[3,3,4,4],[3.2,3.6,3.2],[3.4,3.8,3.8]]]]},"selected":{"id":"11260","type":"Selection"},"selection_policy":{"id":"11259","type":"UnionRenderers"}},"id":"11247","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"11214","type":"DataRange1d"},{"attributes":{"formatter":{"id":"11257","type":"BasicTickFormatter"},"plot":{"id":"11213","subtype":"Figure","type":"Plot"},"ticker":{"id":"11228","type":"BasicTicker"}},"id":"11227","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11248","type":"MultiPolygons"},{"attributes":{},"id":"11223","type":"BasicTicker"},{"attributes":{"overlay":{"id":"11240","type":"BoxAnnotation"}},"id":"11234","type":"BoxZoomTool"}],"root_ids":["11213"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"b1282649-9bf2-444f-b965-ca7d1b16f467","roots":{"11213":"94761915-5f84-4d68-8725-2a89b74c6fe8"}}];
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