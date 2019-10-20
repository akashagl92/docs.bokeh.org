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
      };var element = document.getElementById("f1c1ba8e-2620-4764-aa37-eb1ddd632a75");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f1c1ba8e-2620-4764-aa37-eb1ddd632a75' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c6f396ec-f25e-474c-8b6a-974a30f91e47":{"roots":{"references":[{"attributes":{"callback":null},"id":"34510","type":"DataRange1d"},{"attributes":{"formatter":{"id":"34551","type":"BasicTickFormatter"},"plot":{"id":"34509","subtype":"Figure","type":"Plot"},"ticker":{"id":"34519","type":"BasicTicker"}},"id":"34518","type":"LinearAxis"},{"attributes":{},"id":"34514","type":"LinearScale"},{"attributes":{"data_source":{"id":"34543","type":"ColumnDataSource"},"glyph":{"id":"34544","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34545","type":"SquareCross"},"selection_glyph":null,"view":{"id":"34547","type":"CDSView"}},"id":"34546","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34545","type":"SquareCross"},{"attributes":{},"id":"34516","type":"LinearScale"},{"attributes":{},"id":"34519","type":"BasicTicker"},{"attributes":{},"id":"34528","type":"PanTool"},{"attributes":{"source":{"id":"34543","type":"ColumnDataSource"}},"id":"34547","type":"CDSView"},{"attributes":{"below":[{"id":"34518","type":"LinearAxis"}],"left":[{"id":"34523","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34518","type":"LinearAxis"},{"id":"34522","type":"Grid"},{"id":"34523","type":"LinearAxis"},{"id":"34527","type":"Grid"},{"id":"34536","type":"BoxAnnotation"},{"id":"34546","type":"GlyphRenderer"}],"title":{"id":"34549","type":"Title"},"toolbar":{"id":"34534","type":"Toolbar"},"x_range":{"id":"34510","type":"DataRange1d"},"x_scale":{"id":"34514","type":"LinearScale"},"y_range":{"id":"34512","type":"DataRange1d"},"y_scale":{"id":"34516","type":"LinearScale"}},"id":"34509","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"34529","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"34549","type":"Title"},{"attributes":{"overlay":{"id":"34536","type":"BoxAnnotation"}},"id":"34530","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"34556","type":"Selection"},"selection_policy":{"id":"34555","type":"UnionRenderers"}},"id":"34543","type":"ColumnDataSource"},{"attributes":{},"id":"34551","type":"BasicTickFormatter"},{"attributes":{},"id":"34531","type":"SaveTool"},{"attributes":{"plot":{"id":"34509","subtype":"Figure","type":"Plot"},"ticker":{"id":"34519","type":"BasicTicker"}},"id":"34522","type":"Grid"},{"attributes":{},"id":"34553","type":"BasicTickFormatter"},{"attributes":{},"id":"34532","type":"ResetTool"},{"attributes":{"formatter":{"id":"34553","type":"BasicTickFormatter"},"plot":{"id":"34509","subtype":"Figure","type":"Plot"},"ticker":{"id":"34524","type":"BasicTicker"}},"id":"34523","type":"LinearAxis"},{"attributes":{},"id":"34555","type":"UnionRenderers"},{"attributes":{},"id":"34533","type":"HelpTool"},{"attributes":{},"id":"34524","type":"BasicTicker"},{"attributes":{},"id":"34556","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34528","type":"PanTool"},{"id":"34529","type":"WheelZoomTool"},{"id":"34530","type":"BoxZoomTool"},{"id":"34531","type":"SaveTool"},{"id":"34532","type":"ResetTool"},{"id":"34533","type":"HelpTool"}]},"id":"34534","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"34509","subtype":"Figure","type":"Plot"},"ticker":{"id":"34524","type":"BasicTicker"}},"id":"34527","type":"Grid"},{"attributes":{"callback":null},"id":"34512","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34536","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7FC97F"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34544","type":"SquareCross"}],"root_ids":["34509"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"c6f396ec-f25e-474c-8b6a-974a30f91e47","roots":{"34509":"f1c1ba8e-2620-4764-aa37-eb1ddd632a75"}}];
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