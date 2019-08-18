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
      };var element = document.getElementById("66b837f6-01cf-476c-bfa5-69d144c90c6f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '66b837f6-01cf-476c-bfa5-69d144c90c6f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"84aba341-6a9b-4dfd-bae0-9efb6e4e315c":{"roots":{"references":[{"attributes":{"callback":null},"id":"16488","type":"DataRange1d"},{"attributes":{"formatter":{"id":"16528","type":"BasicTickFormatter"},"plot":{"id":"16485","subtype":"Figure","type":"Plot"},"ticker":{"id":"16495","type":"BasicTicker"}},"id":"16494","type":"LinearAxis"},{"attributes":{},"id":"16507","type":"SaveTool"},{"attributes":{},"id":"16508","type":"ResetTool"},{"attributes":{},"id":"16495","type":"BasicTicker"},{"attributes":{},"id":"16505","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"16512","type":"BoxAnnotation"}},"id":"16506","type":"BoxZoomTool"},{"attributes":{},"id":"16504","type":"PanTool"},{"attributes":{"plot":{"id":"16485","subtype":"Figure","type":"Plot"},"ticker":{"id":"16495","type":"BasicTicker"}},"id":"16498","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16521","type":"Circle"},{"attributes":{},"id":"16500","type":"BasicTicker"},{"attributes":{},"id":"16490","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"16524","type":"Title"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"16531","type":"Selection"},"selection_policy":{"id":"16530","type":"UnionRenderers"}},"id":"16519","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"16519","type":"ColumnDataSource"},"glyph":{"id":"16520","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16521","type":"Circle"},"selection_glyph":null,"view":{"id":"16523","type":"CDSView"}},"id":"16522","type":"GlyphRenderer"},{"attributes":{},"id":"16492","type":"LinearScale"},{"attributes":{},"id":"16526","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"minor_grid_line_alpha":{"value":0.1},"minor_grid_line_color":{"value":"navy"},"plot":{"id":"16485","subtype":"Figure","type":"Plot"},"ticker":{"id":"16500","type":"BasicTicker"}},"id":"16503","type":"Grid"},{"attributes":{},"id":"16509","type":"HelpTool"},{"attributes":{},"id":"16528","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16520","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16504","type":"PanTool"},{"id":"16505","type":"WheelZoomTool"},{"id":"16506","type":"BoxZoomTool"},{"id":"16507","type":"SaveTool"},{"id":"16508","type":"ResetTool"},{"id":"16509","type":"HelpTool"}]},"id":"16510","type":"Toolbar"},{"attributes":{"source":{"id":"16519","type":"ColumnDataSource"}},"id":"16523","type":"CDSView"},{"attributes":{},"id":"16530","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"16486","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16512","type":"BoxAnnotation"},{"attributes":{},"id":"16531","type":"Selection"},{"attributes":{"formatter":{"id":"16526","type":"BasicTickFormatter"},"plot":{"id":"16485","subtype":"Figure","type":"Plot"},"ticker":{"id":"16500","type":"BasicTicker"}},"id":"16499","type":"LinearAxis"},{"attributes":{"below":[{"id":"16494","type":"LinearAxis"}],"left":[{"id":"16499","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"16494","type":"LinearAxis"},{"id":"16498","type":"Grid"},{"id":"16499","type":"LinearAxis"},{"id":"16503","type":"Grid"},{"id":"16512","type":"BoxAnnotation"},{"id":"16522","type":"GlyphRenderer"}],"title":{"id":"16524","type":"Title"},"toolbar":{"id":"16510","type":"Toolbar"},"x_range":{"id":"16486","type":"DataRange1d"},"x_scale":{"id":"16490","type":"LinearScale"},"y_range":{"id":"16488","type":"DataRange1d"},"y_scale":{"id":"16492","type":"LinearScale"}},"id":"16485","subtype":"Figure","type":"Plot"}],"root_ids":["16485"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"84aba341-6a9b-4dfd-bae0-9efb6e4e315c","roots":{"16485":"66b837f6-01cf-476c-bfa5-69d144c90c6f"}}];
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