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
      };var element = document.getElementById("66759e5c-aabe-4b66-beae-72757e11efae");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '66759e5c-aabe-4b66-beae-72757e11efae' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4fd6c393-8d4d-460e-a8da-d8fc8f68cd72":{"roots":{"references":[{"attributes":{},"id":"34208","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"34193","type":"BoxAnnotation"}},"id":"34187","type":"BoxZoomTool"},{"attributes":{},"id":"34176","type":"BasicTicker"},{"attributes":{},"id":"34210","type":"BasicTickFormatter"},{"attributes":{},"id":"34188","type":"SaveTool"},{"attributes":{"plot":{"id":"34166","subtype":"Figure","type":"Plot"},"ticker":{"id":"34176","type":"BasicTicker"}},"id":"34179","type":"Grid"},{"attributes":{},"id":"34212","type":"Selection"},{"attributes":{},"id":"34189","type":"ResetTool"},{"attributes":{"formatter":{"id":"34210","type":"BasicTickFormatter"},"plot":{"id":"34166","subtype":"Figure","type":"Plot"},"ticker":{"id":"34181","type":"BasicTicker"}},"id":"34180","type":"LinearAxis"},{"attributes":{"data_source":{"id":"34200","type":"ColumnDataSource"},"glyph":{"id":"34201","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34202","type":"Ray"},"selection_glyph":null,"view":{"id":"34204","type":"CDSView"}},"id":"34203","type":"GlyphRenderer"},{"attributes":{},"id":"34190","type":"HelpTool"},{"attributes":{},"id":"34213","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"34167","type":"DataRange1d"},{"attributes":{},"id":"34181","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34185","type":"PanTool"},{"id":"34186","type":"WheelZoomTool"},{"id":"34187","type":"BoxZoomTool"},{"id":"34188","type":"SaveTool"},{"id":"34189","type":"ResetTool"},{"id":"34190","type":"HelpTool"}]},"id":"34191","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"34166","subtype":"Figure","type":"Plot"},"ticker":{"id":"34181","type":"BasicTicker"}},"id":"34184","type":"Grid"},{"attributes":{},"id":"34173","type":"LinearScale"},{"attributes":{"callback":null},"id":"34169","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34193","type":"BoxAnnotation"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"34201","type":"Ray"},{"attributes":{},"id":"34171","type":"LinearScale"},{"attributes":{"source":{"id":"34200","type":"ColumnDataSource"}},"id":"34204","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"34212","type":"Selection"},"selection_policy":{"id":"34213","type":"UnionRenderers"}},"id":"34200","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"34208","type":"BasicTickFormatter"},"plot":{"id":"34166","subtype":"Figure","type":"Plot"},"ticker":{"id":"34176","type":"BasicTicker"}},"id":"34175","type":"LinearAxis"},{"attributes":{},"id":"34185","type":"PanTool"},{"attributes":{"below":[{"id":"34175","type":"LinearAxis"}],"left":[{"id":"34180","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34175","type":"LinearAxis"},{"id":"34179","type":"Grid"},{"id":"34180","type":"LinearAxis"},{"id":"34184","type":"Grid"},{"id":"34193","type":"BoxAnnotation"},{"id":"34203","type":"GlyphRenderer"}],"title":{"id":"34206","type":"Title"},"toolbar":{"id":"34191","type":"Toolbar"},"x_range":{"id":"34167","type":"DataRange1d"},"x_scale":{"id":"34171","type":"LinearScale"},"y_range":{"id":"34169","type":"DataRange1d"},"y_scale":{"id":"34173","type":"LinearScale"}},"id":"34166","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"34206","type":"Title"},{"attributes":{},"id":"34186","type":"WheelZoomTool"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"34202","type":"Ray"}],"root_ids":["34166"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"4fd6c393-8d4d-460e-a8da-d8fc8f68cd72","roots":{"34166":"66759e5c-aabe-4b66-beae-72757e11efae"}}];
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