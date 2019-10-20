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
      };var element = document.getElementById("52f2152e-0d35-44d4-9f11-b58d9a14f793");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '52f2152e-0d35-44d4-9f11-b58d9a14f793' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5bfbdd91-2276-4550-886a-dd64e280da59":{"roots":{"references":[{"attributes":{},"id":"11392","type":"BasicTicker"},{"attributes":{},"id":"11424","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11418","type":"MultiPolygons"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11417","type":"MultiPolygons"},{"attributes":{},"id":"11405","type":"ResetTool"},{"attributes":{},"id":"11426","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"11385","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"11422","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"11382","subtype":"Figure","type":"Plot"},"ticker":{"id":"11397","type":"BasicTicker"}},"id":"11400","type":"Grid"},{"attributes":{"formatter":{"id":"11426","type":"BasicTickFormatter"},"plot":{"id":"11382","subtype":"Figure","type":"Plot"},"ticker":{"id":"11397","type":"BasicTicker"}},"id":"11396","type":"LinearAxis"},{"attributes":{},"id":"11387","type":"LinearScale"},{"attributes":{"source":{"id":"11416","type":"ColumnDataSource"}},"id":"11420","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11401","type":"PanTool"},{"id":"11402","type":"WheelZoomTool"},{"id":"11403","type":"BoxZoomTool"},{"id":"11404","type":"SaveTool"},{"id":"11405","type":"ResetTool"},{"id":"11406","type":"HelpTool"}]},"id":"11407","type":"Toolbar"},{"attributes":{"callback":null},"id":"11383","type":"DataRange1d"},{"attributes":{"plot":{"id":"11382","subtype":"Figure","type":"Plot"},"ticker":{"id":"11392","type":"BasicTicker"}},"id":"11395","type":"Grid"},{"attributes":{"callback":null,"data":{"fill_color":["blue","red"],"line_color":["blue","red"],"xs":[[[[1,1,2,2],[1.2,1.6,1.6],[1.8,1.8,1.6]],[[3,3,4]]],[[[1,2,2,1],[1.3,1.3,1.7,1.7]]]],"ys":[[[[4,3,3,4],[3.2,3.2,3.6],[3.4,3.8,3.8]],[[1,3,1]]],[[[1,1,2,2],[1.3,1.7,1.7,1.3]]]]},"selected":{"id":"11428","type":"Selection"},"selection_policy":{"id":"11429","type":"UnionRenderers"}},"id":"11416","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"11416","type":"ColumnDataSource"},"glyph":{"id":"11417","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11418","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"11420","type":"CDSView"}},"id":"11419","type":"GlyphRenderer"},{"attributes":{},"id":"11429","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"11409","type":"BoxAnnotation"}},"id":"11403","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"11391","type":"LinearAxis"}],"left":[{"id":"11396","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11391","type":"LinearAxis"},{"id":"11395","type":"Grid"},{"id":"11396","type":"LinearAxis"},{"id":"11400","type":"Grid"},{"id":"11409","type":"BoxAnnotation"},{"id":"11419","type":"GlyphRenderer"}],"title":{"id":"11422","type":"Title"},"toolbar":{"id":"11407","type":"Toolbar"},"x_range":{"id":"11383","type":"DataRange1d"},"x_scale":{"id":"11387","type":"LinearScale"},"y_range":{"id":"11385","type":"DataRange1d"},"y_scale":{"id":"11389","type":"LinearScale"}},"id":"11382","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11401","type":"PanTool"},{"attributes":{},"id":"11389","type":"LinearScale"},{"attributes":{},"id":"11404","type":"SaveTool"},{"attributes":{},"id":"11397","type":"BasicTicker"},{"attributes":{},"id":"11406","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11409","type":"BoxAnnotation"},{"attributes":{},"id":"11402","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"11424","type":"BasicTickFormatter"},"plot":{"id":"11382","subtype":"Figure","type":"Plot"},"ticker":{"id":"11392","type":"BasicTicker"}},"id":"11391","type":"LinearAxis"},{"attributes":{},"id":"11428","type":"Selection"}],"root_ids":["11382"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"5bfbdd91-2276-4550-886a-dd64e280da59","roots":{"11382":"52f2152e-0d35-44d4-9f11-b58d9a14f793"}}];
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