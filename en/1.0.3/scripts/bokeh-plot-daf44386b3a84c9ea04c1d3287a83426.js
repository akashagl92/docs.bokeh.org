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
      };var element = document.getElementById("691ae773-4402-45a4-aab3-2e2796f90237");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '691ae773-4402-45a4-aab3-2e2796f90237' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e7d3dbfa-ba89-4b58-9902-694e7ba3f9f8":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"17549","type":"Selection"},"selection_policy":{"id":"17550","type":"UnionRenderers"}},"id":"17537","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"17537","type":"ColumnDataSource"},"glyph":{"id":"17538","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17539","type":"Circle"},"selection_glyph":null,"view":{"id":"17541","type":"CDSView"}},"id":"17540","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"17503","subtype":"Figure","type":"Plot"},"ticker":{"id":"17513","type":"BasicTicker"}},"id":"17516","type":"Grid"},{"attributes":{},"id":"17522","type":"PanTool"},{"attributes":{},"id":"17510","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"17542","type":"Title"},{"attributes":{},"id":"17523","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"17546","type":"BasicTickFormatter"},"major_tick_line_color":{"value":"firebrick"},"major_tick_line_width":{"value":3},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":"orange"},"minor_tick_out":8,"plot":{"id":"17503","subtype":"Figure","type":"Plot"},"ticker":{"id":"17513","type":"BasicTicker"}},"id":"17512","type":"LinearAxis"},{"attributes":{},"id":"17546","type":"BasicTickFormatter"},{"attributes":{},"id":"17518","type":"BasicTicker"},{"attributes":{},"id":"17513","type":"BasicTicker"},{"attributes":{},"id":"17525","type":"SaveTool"},{"attributes":{"below":[{"id":"17512","type":"LinearAxis"}],"left":[{"id":"17517","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"17512","type":"LinearAxis"},{"id":"17516","type":"Grid"},{"id":"17517","type":"LinearAxis"},{"id":"17521","type":"Grid"},{"id":"17530","type":"BoxAnnotation"},{"id":"17540","type":"GlyphRenderer"}],"title":{"id":"17542","type":"Title"},"toolbar":{"id":"17528","type":"Toolbar"},"x_range":{"id":"17504","type":"DataRange1d"},"x_scale":{"id":"17508","type":"LinearScale"},"y_range":{"id":"17506","type":"DataRange1d"},"y_scale":{"id":"17510","type":"LinearScale"}},"id":"17503","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"17537","type":"ColumnDataSource"}},"id":"17541","type":"CDSView"},{"attributes":{},"id":"17526","type":"ResetTool"},{"attributes":{},"id":"17544","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"17544","type":"BasicTickFormatter"},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":null},"minor_tick_out":8,"plot":{"id":"17503","subtype":"Figure","type":"Plot"},"ticker":{"id":"17518","type":"BasicTicker"}},"id":"17517","type":"LinearAxis"},{"attributes":{},"id":"17549","type":"Selection"},{"attributes":{"overlay":{"id":"17530","type":"BoxAnnotation"}},"id":"17524","type":"BoxZoomTool"},{"attributes":{},"id":"17550","type":"UnionRenderers"},{"attributes":{},"id":"17527","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17539","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"17503","subtype":"Figure","type":"Plot"},"ticker":{"id":"17518","type":"BasicTicker"}},"id":"17521","type":"Grid"},{"attributes":{"callback":null},"id":"17504","type":"DataRange1d"},{"attributes":{"callback":null},"id":"17506","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17530","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17538","type":"Circle"},{"attributes":{},"id":"17508","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17522","type":"PanTool"},{"id":"17523","type":"WheelZoomTool"},{"id":"17524","type":"BoxZoomTool"},{"id":"17525","type":"SaveTool"},{"id":"17526","type":"ResetTool"},{"id":"17527","type":"HelpTool"}]},"id":"17528","type":"Toolbar"}],"root_ids":["17503"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"e7d3dbfa-ba89-4b58-9902-694e7ba3f9f8","roots":{"17503":"691ae773-4402-45a4-aab3-2e2796f90237"}}];
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