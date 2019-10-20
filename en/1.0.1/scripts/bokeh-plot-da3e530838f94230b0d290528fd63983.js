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
      };var element = document.getElementById("22f33205-f82d-46a7-ba71-16dc9a5722de");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '22f33205-f82d-46a7-ba71-16dc9a5722de' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"05d2d2a8-60d4-4524-879e-899e8ccc95ea":{"roots":{"references":[{"attributes":{},"id":"11256","type":"BasicTickFormatter"},{"attributes":{},"id":"11254","type":"BasicTickFormatter"},{"attributes":{},"id":"11234","type":"SaveTool"},{"attributes":{"below":[{"id":"11221","type":"LinearAxis"}],"left":[{"id":"11226","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11221","type":"LinearAxis"},{"id":"11225","type":"Grid"},{"id":"11226","type":"LinearAxis"},{"id":"11230","type":"Grid"},{"id":"11239","type":"BoxAnnotation"},{"id":"11249","type":"GlyphRenderer"}],"title":{"id":"11252","type":"Title"},"toolbar":{"id":"11237","type":"Toolbar"},"x_range":{"id":"11213","type":"DataRange1d"},"x_scale":{"id":"11217","type":"LinearScale"},"y_range":{"id":"11215","type":"DataRange1d"},"y_scale":{"id":"11219","type":"LinearScale"}},"id":"11212","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"11256","type":"BasicTickFormatter"},"plot":{"id":"11212","subtype":"Figure","type":"Plot"},"ticker":{"id":"11227","type":"BasicTicker"}},"id":"11226","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11248","type":"MultiPolygons"},{"attributes":{},"id":"11235","type":"ResetTool"},{"attributes":{},"id":"11227","type":"BasicTicker"},{"attributes":{"callback":null},"id":"11213","type":"DataRange1d"},{"attributes":{},"id":"11236","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"11212","subtype":"Figure","type":"Plot"},"ticker":{"id":"11227","type":"BasicTicker"}},"id":"11230","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11231","type":"PanTool"},{"id":"11232","type":"WheelZoomTool"},{"id":"11233","type":"BoxZoomTool"},{"id":"11234","type":"SaveTool"},{"id":"11235","type":"ResetTool"},{"id":"11236","type":"HelpTool"}]},"id":"11237","type":"Toolbar"},{"attributes":{"callback":null},"id":"11215","type":"DataRange1d"},{"attributes":{},"id":"11217","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11247","type":"MultiPolygons"},{"attributes":{},"id":"11259","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11239","type":"BoxAnnotation"},{"attributes":{},"id":"11258","type":"Selection"},{"attributes":{"callback":null,"data":{"xs":[[[[1,2,2,1],[1.2,1.6,1.6],[1.8,1.8,1.6]]]],"ys":[[[[3,3,4,4],[3.2,3.6,3.2],[3.4,3.8,3.8]]]]},"selected":{"id":"11258","type":"Selection"},"selection_policy":{"id":"11259","type":"UnionRenderers"}},"id":"11246","type":"ColumnDataSource"},{"attributes":{},"id":"11222","type":"BasicTicker"},{"attributes":{"data_source":{"id":"11246","type":"ColumnDataSource"},"glyph":{"id":"11247","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11248","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"11250","type":"CDSView"}},"id":"11249","type":"GlyphRenderer"},{"attributes":{},"id":"11219","type":"LinearScale"},{"attributes":{"source":{"id":"11246","type":"ColumnDataSource"}},"id":"11250","type":"CDSView"},{"attributes":{},"id":"11231","type":"PanTool"},{"attributes":{"formatter":{"id":"11254","type":"BasicTickFormatter"},"plot":{"id":"11212","subtype":"Figure","type":"Plot"},"ticker":{"id":"11222","type":"BasicTicker"}},"id":"11221","type":"LinearAxis"},{"attributes":{},"id":"11232","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"11252","type":"Title"},{"attributes":{"plot":{"id":"11212","subtype":"Figure","type":"Plot"},"ticker":{"id":"11222","type":"BasicTicker"}},"id":"11225","type":"Grid"},{"attributes":{"overlay":{"id":"11239","type":"BoxAnnotation"}},"id":"11233","type":"BoxZoomTool"}],"root_ids":["11212"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"05d2d2a8-60d4-4524-879e-899e8ccc95ea","roots":{"11212":"22f33205-f82d-46a7-ba71-16dc9a5722de"}}];
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