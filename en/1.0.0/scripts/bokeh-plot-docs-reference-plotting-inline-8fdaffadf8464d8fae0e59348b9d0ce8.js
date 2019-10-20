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
      };var element = document.getElementById("e43845c0-4048-45b6-93c7-36e06c56b7cb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e43845c0-4048-45b6-93c7-36e06c56b7cb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"fd7ba107-1f5b-4187-ae15-a9786580caf4":{"roots":{"references":[{"attributes":{},"id":"34552","type":"Selection"},{"attributes":{},"id":"34529","type":"ResetTool"},{"attributes":{"overlay":{"id":"34533","type":"BoxAnnotation"}},"id":"34527","type":"BoxZoomTool"},{"attributes":{},"id":"34553","type":"UnionRenderers"},{"attributes":{},"id":"34530","type":"HelpTool"},{"attributes":{"below":[{"id":"34515","type":"LinearAxis"}],"left":[{"id":"34520","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34515","type":"LinearAxis"},{"id":"34519","type":"Grid"},{"id":"34520","type":"LinearAxis"},{"id":"34524","type":"Grid"},{"id":"34533","type":"BoxAnnotation"},{"id":"34543","type":"GlyphRenderer"}],"title":{"id":"34546","type":"Title"},"toolbar":{"id":"34531","type":"Toolbar"},"x_range":{"id":"34507","type":"DataRange1d"},"x_scale":{"id":"34511","type":"LinearScale"},"y_range":{"id":"34509","type":"DataRange1d"},"y_scale":{"id":"34513","type":"LinearScale"}},"id":"34506","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"34526","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34542","type":"SquareCross"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34525","type":"PanTool"},{"id":"34526","type":"WheelZoomTool"},{"id":"34527","type":"BoxZoomTool"},{"id":"34528","type":"SaveTool"},{"id":"34529","type":"ResetTool"},{"id":"34530","type":"HelpTool"}]},"id":"34531","type":"Toolbar"},{"attributes":{},"id":"34525","type":"PanTool"},{"attributes":{"data_source":{"id":"34540","type":"ColumnDataSource"},"glyph":{"id":"34541","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34542","type":"SquareCross"},"selection_glyph":null,"view":{"id":"34544","type":"CDSView"}},"id":"34543","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"34507","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"34552","type":"Selection"},"selection_policy":{"id":"34553","type":"UnionRenderers"}},"id":"34540","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34533","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7FC97F"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34541","type":"SquareCross"},{"attributes":{"source":{"id":"34540","type":"ColumnDataSource"}},"id":"34544","type":"CDSView"},{"attributes":{},"id":"34513","type":"LinearScale"},{"attributes":{"callback":null},"id":"34509","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"34506","subtype":"Figure","type":"Plot"},"ticker":{"id":"34521","type":"BasicTicker"}},"id":"34524","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"34546","type":"Title"},{"attributes":{"formatter":{"id":"34548","type":"BasicTickFormatter"},"plot":{"id":"34506","subtype":"Figure","type":"Plot"},"ticker":{"id":"34516","type":"BasicTicker"}},"id":"34515","type":"LinearAxis"},{"attributes":{"formatter":{"id":"34550","type":"BasicTickFormatter"},"plot":{"id":"34506","subtype":"Figure","type":"Plot"},"ticker":{"id":"34521","type":"BasicTicker"}},"id":"34520","type":"LinearAxis"},{"attributes":{},"id":"34521","type":"BasicTicker"},{"attributes":{},"id":"34548","type":"BasicTickFormatter"},{"attributes":{},"id":"34516","type":"BasicTicker"},{"attributes":{},"id":"34528","type":"SaveTool"},{"attributes":{"plot":{"id":"34506","subtype":"Figure","type":"Plot"},"ticker":{"id":"34516","type":"BasicTicker"}},"id":"34519","type":"Grid"},{"attributes":{},"id":"34550","type":"BasicTickFormatter"},{"attributes":{},"id":"34511","type":"LinearScale"}],"root_ids":["34506"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"fd7ba107-1f5b-4187-ae15-a9786580caf4","roots":{"34506":"e43845c0-4048-45b6-93c7-36e06c56b7cb"}}];
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