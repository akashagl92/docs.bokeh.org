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
      };var element = document.getElementById("439eb1d7-e468-431d-a18c-fc59843a78d1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '439eb1d7-e468-431d-a18c-fc59843a78d1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"bc35e7c0-4fe0-4dd1-97c8-47b966038997":{"roots":{"references":[{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11418","type":"MultiPolygons"},{"attributes":{"source":{"id":"11417","type":"ColumnDataSource"}},"id":"11421","type":"CDSView"},{"attributes":{},"id":"11402","type":"PanTool"},{"attributes":{},"id":"11429","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"11410","type":"BoxAnnotation"}},"id":"11404","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"11383","subtype":"Figure","type":"Plot"},"ticker":{"id":"11398","type":"BasicTicker"}},"id":"11401","type":"Grid"},{"attributes":{"data_source":{"id":"11417","type":"ColumnDataSource"},"glyph":{"id":"11418","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11419","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"11421","type":"CDSView"}},"id":"11420","type":"GlyphRenderer"},{"attributes":{},"id":"11403","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"fill_color":["blue","red"],"line_color":["blue","red"],"xs":[[[[1,1,2,2],[1.2,1.6,1.6],[1.8,1.8,1.6]],[[3,3,4]]],[[[1,2,2,1],[1.3,1.3,1.7,1.7]]]],"ys":[[[[4,3,3,4],[3.2,3.2,3.6],[3.4,3.8,3.8]],[[1,3,1]]],[[[1,1,2,2],[1.3,1.7,1.7,1.3]]]]},"selected":{"id":"11430","type":"Selection"},"selection_policy":{"id":"11429","type":"UnionRenderers"}},"id":"11417","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"11392","type":"LinearAxis"}],"left":[{"id":"11397","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11392","type":"LinearAxis"},{"id":"11396","type":"Grid"},{"id":"11397","type":"LinearAxis"},{"id":"11401","type":"Grid"},{"id":"11410","type":"BoxAnnotation"},{"id":"11420","type":"GlyphRenderer"}],"title":{"id":"11423","type":"Title"},"toolbar":{"id":"11408","type":"Toolbar"},"x_range":{"id":"11384","type":"DataRange1d"},"x_scale":{"id":"11388","type":"LinearScale"},"y_range":{"id":"11386","type":"DataRange1d"},"y_scale":{"id":"11390","type":"LinearScale"}},"id":"11383","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11430","type":"Selection"},{"attributes":{},"id":"11388","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"11423","type":"Title"},{"attributes":{},"id":"11427","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11410","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11402","type":"PanTool"},{"id":"11403","type":"WheelZoomTool"},{"id":"11404","type":"BoxZoomTool"},{"id":"11405","type":"SaveTool"},{"id":"11406","type":"ResetTool"},{"id":"11407","type":"HelpTool"}]},"id":"11408","type":"Toolbar"},{"attributes":{"callback":null},"id":"11384","type":"DataRange1d"},{"attributes":{"plot":{"id":"11383","subtype":"Figure","type":"Plot"},"ticker":{"id":"11393","type":"BasicTicker"}},"id":"11396","type":"Grid"},{"attributes":{},"id":"11407","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11419","type":"MultiPolygons"},{"attributes":{},"id":"11398","type":"BasicTicker"},{"attributes":{},"id":"11405","type":"SaveTool"},{"attributes":{},"id":"11390","type":"LinearScale"},{"attributes":{},"id":"11425","type":"BasicTickFormatter"},{"attributes":{},"id":"11393","type":"BasicTicker"},{"attributes":{"formatter":{"id":"11427","type":"BasicTickFormatter"},"plot":{"id":"11383","subtype":"Figure","type":"Plot"},"ticker":{"id":"11398","type":"BasicTicker"}},"id":"11397","type":"LinearAxis"},{"attributes":{"callback":null},"id":"11386","type":"DataRange1d"},{"attributes":{},"id":"11406","type":"ResetTool"},{"attributes":{"formatter":{"id":"11425","type":"BasicTickFormatter"},"plot":{"id":"11383","subtype":"Figure","type":"Plot"},"ticker":{"id":"11393","type":"BasicTicker"}},"id":"11392","type":"LinearAxis"}],"root_ids":["11383"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"bc35e7c0-4fe0-4dd1-97c8-47b966038997","roots":{"11383":"439eb1d7-e468-431d-a18c-fc59843a78d1"}}];
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