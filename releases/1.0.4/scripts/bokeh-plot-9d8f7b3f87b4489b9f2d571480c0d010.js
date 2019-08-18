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
      };var element = document.getElementById("51512617-1f6f-4d4d-b8d2-b267d324f2c3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '51512617-1f6f-4d4d-b8d2-b267d324f2c3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b56c4633-118b-4f9f-abb5-dae450b8d4c7":{"roots":{"references":[{"attributes":{},"id":"11406","type":"WheelZoomTool"},{"attributes":{"source":{"id":"11420","type":"ColumnDataSource"}},"id":"11424","type":"CDSView"},{"attributes":{"formatter":{"id":"11427","type":"BasicTickFormatter"},"plot":{"id":"11386","subtype":"Figure","type":"Plot"},"ticker":{"id":"11401","type":"BasicTicker"}},"id":"11400","type":"LinearAxis"},{"attributes":{"overlay":{"id":"11413","type":"BoxAnnotation"}},"id":"11407","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"11386","subtype":"Figure","type":"Plot"},"ticker":{"id":"11396","type":"BasicTicker"}},"id":"11399","type":"Grid"},{"attributes":{},"id":"11391","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"11425","type":"Title"},{"attributes":{},"id":"11408","type":"SaveTool"},{"attributes":{},"id":"11427","type":"BasicTickFormatter"},{"attributes":{},"id":"11409","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11413","type":"BoxAnnotation"},{"attributes":{},"id":"11432","type":"Selection"},{"attributes":{},"id":"11429","type":"BasicTickFormatter"},{"attributes":{},"id":"11410","type":"HelpTool"},{"attributes":{},"id":"11396","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11405","type":"PanTool"},{"id":"11406","type":"WheelZoomTool"},{"id":"11407","type":"BoxZoomTool"},{"id":"11408","type":"SaveTool"},{"id":"11409","type":"ResetTool"},{"id":"11410","type":"HelpTool"}]},"id":"11411","type":"Toolbar"},{"attributes":{},"id":"11401","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11422","type":"MultiPolygons"},{"attributes":{"dimension":1,"plot":{"id":"11386","subtype":"Figure","type":"Plot"},"ticker":{"id":"11401","type":"BasicTicker"}},"id":"11404","type":"Grid"},{"attributes":{"callback":null},"id":"11387","type":"DataRange1d"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11421","type":"MultiPolygons"},{"attributes":{"callback":null},"id":"11389","type":"DataRange1d"},{"attributes":{},"id":"11431","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"11420","type":"ColumnDataSource"},"glyph":{"id":"11421","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11422","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"11424","type":"CDSView"}},"id":"11423","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"fill_color":["blue","red"],"line_color":["blue","red"],"xs":[[[[1,1,2,2],[1.2,1.6,1.6],[1.8,1.8,1.6]],[[3,3,4]]],[[[1,2,2,1],[1.3,1.3,1.7,1.7]]]],"ys":[[[[4,3,3,4],[3.2,3.2,3.6],[3.4,3.8,3.8]],[[1,3,1]]],[[[1,1,2,2],[1.3,1.7,1.7,1.3]]]]},"selected":{"id":"11432","type":"Selection"},"selection_policy":{"id":"11431","type":"UnionRenderers"}},"id":"11420","type":"ColumnDataSource"},{"attributes":{},"id":"11393","type":"LinearScale"},{"attributes":{},"id":"11405","type":"PanTool"},{"attributes":{"formatter":{"id":"11429","type":"BasicTickFormatter"},"plot":{"id":"11386","subtype":"Figure","type":"Plot"},"ticker":{"id":"11396","type":"BasicTicker"}},"id":"11395","type":"LinearAxis"},{"attributes":{"below":[{"id":"11395","type":"LinearAxis"}],"left":[{"id":"11400","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11395","type":"LinearAxis"},{"id":"11399","type":"Grid"},{"id":"11400","type":"LinearAxis"},{"id":"11404","type":"Grid"},{"id":"11413","type":"BoxAnnotation"},{"id":"11423","type":"GlyphRenderer"}],"title":{"id":"11425","type":"Title"},"toolbar":{"id":"11411","type":"Toolbar"},"x_range":{"id":"11387","type":"DataRange1d"},"x_scale":{"id":"11391","type":"LinearScale"},"y_range":{"id":"11389","type":"DataRange1d"},"y_scale":{"id":"11393","type":"LinearScale"}},"id":"11386","subtype":"Figure","type":"Plot"}],"root_ids":["11386"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"b56c4633-118b-4f9f-abb5-dae450b8d4c7","roots":{"11386":"51512617-1f6f-4d4d-b8d2-b267d324f2c3"}}];
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