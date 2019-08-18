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
      };var element = document.getElementById("2d2c840b-ca33-4012-8e5a-00c0fc09d5c0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2d2c840b-ca33-4012-8e5a-00c0fc09d5c0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"97e24a2d-6f66-4529-a947-48abbbbd405f":{"roots":{"references":[{"attributes":{},"id":"11487","type":"WheelZoomTool"},{"attributes":{"source":{"id":"11501","type":"ColumnDataSource"}},"id":"11505","type":"CDSView"},{"attributes":{"callback":null},"id":"11468","type":"DataRange1d"},{"attributes":{},"id":"11511","type":"BasicTickFormatter"},{"attributes":{},"id":"11489","type":"SaveTool"},{"attributes":{},"id":"11490","type":"ResetTool"},{"attributes":{},"id":"11472","type":"LinearScale"},{"attributes":{},"id":"11513","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11486","type":"PanTool"},{"id":"11487","type":"WheelZoomTool"},{"id":"11488","type":"BoxZoomTool"},{"id":"11489","type":"SaveTool"},{"id":"11490","type":"ResetTool"},{"id":"11491","type":"HelpTool"}]},"id":"11492","type":"Toolbar"},{"attributes":{},"id":"11486","type":"PanTool"},{"attributes":{},"id":"11491","type":"HelpTool"},{"attributes":{},"id":"11514","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"11511","type":"BasicTickFormatter"},"plot":{"id":"11467","subtype":"Figure","type":"Plot"},"ticker":{"id":"11482","type":"BasicTicker"}},"id":"11481","type":"LinearAxis"},{"attributes":{},"id":"11477","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"11467","subtype":"Figure","type":"Plot"},"ticker":{"id":"11482","type":"BasicTicker"}},"id":"11485","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11494","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"11513","type":"Selection"},"selection_policy":{"id":"11514","type":"UnionRenderers"}},"id":"11501","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"11509","type":"BasicTickFormatter"},"plot":{"id":"11467","subtype":"Figure","type":"Plot"},"ticker":{"id":"11477","type":"BasicTicker"}},"id":"11476","type":"LinearAxis"},{"attributes":{"overlay":{"id":"11494","type":"BoxAnnotation"}},"id":"11488","type":"BoxZoomTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"11502","type":"Oval"},{"attributes":{},"id":"11474","type":"LinearScale"},{"attributes":{"callback":null},"id":"11470","type":"DataRange1d"},{"attributes":{"below":[{"id":"11476","type":"LinearAxis"}],"left":[{"id":"11481","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11476","type":"LinearAxis"},{"id":"11480","type":"Grid"},{"id":"11481","type":"LinearAxis"},{"id":"11485","type":"Grid"},{"id":"11494","type":"BoxAnnotation"},{"id":"11504","type":"GlyphRenderer"}],"title":{"id":"11507","type":"Title"},"toolbar":{"id":"11492","type":"Toolbar"},"x_range":{"id":"11468","type":"DataRange1d"},"x_scale":{"id":"11472","type":"LinearScale"},"y_range":{"id":"11470","type":"DataRange1d"},"y_scale":{"id":"11474","type":"LinearScale"}},"id":"11467","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"11467","subtype":"Figure","type":"Plot"},"ticker":{"id":"11477","type":"BasicTicker"}},"id":"11480","type":"Grid"},{"attributes":{},"id":"11482","type":"BasicTicker"},{"attributes":{"data_source":{"id":"11501","type":"ColumnDataSource"},"glyph":{"id":"11502","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11503","type":"Oval"},"selection_glyph":null,"view":{"id":"11505","type":"CDSView"}},"id":"11504","type":"GlyphRenderer"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"11503","type":"Oval"},{"attributes":{"plot":null,"text":""},"id":"11507","type":"Title"},{"attributes":{},"id":"11509","type":"BasicTickFormatter"}],"root_ids":["11467"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"97e24a2d-6f66-4529-a947-48abbbbd405f","roots":{"11467":"2d2c840b-ca33-4012-8e5a-00c0fc09d5c0"}}];
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