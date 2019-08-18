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
      };var element = document.getElementById("1ad3aa0c-ae72-472d-a97f-093021b7b40b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1ad3aa0c-ae72-472d-a97f-093021b7b40b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a6a51a44-3b6d-40dc-a7f9-78d7189482af":{"roots":{"references":[{"attributes":{},"id":"32617","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"32617","type":"BasicTickFormatter"},"plot":{"id":"32574","subtype":"Figure","type":"Plot"},"ticker":{"id":"32584","type":"BasicTicker"}},"id":"32583","type":"LinearAxis"},{"attributes":{},"id":"32596","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32610","type":"CircleCross"},{"attributes":{"data_source":{"id":"32608","type":"ColumnDataSource"},"glyph":{"id":"32609","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32610","type":"CircleCross"},"selection_glyph":null,"view":{"id":"32612","type":"CDSView"}},"id":"32611","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"32574","subtype":"Figure","type":"Plot"},"ticker":{"id":"32589","type":"BasicTicker"}},"id":"32592","type":"Grid"},{"attributes":{},"id":"32597","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[4,5,6]},"selected":{"id":"32620","type":"Selection"},"selection_policy":{"id":"32621","type":"UnionRenderers"}},"id":"32608","type":"ColumnDataSource"},{"attributes":{},"id":"32620","type":"Selection"},{"attributes":{},"id":"32594","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"32615","type":"BasicTickFormatter"},"plot":{"id":"32574","subtype":"Figure","type":"Plot"},"ticker":{"id":"32589","type":"BasicTicker"}},"id":"32588","type":"LinearAxis"},{"attributes":{"source":{"id":"32608","type":"ColumnDataSource"}},"id":"32612","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32593","type":"PanTool"},{"id":"32594","type":"WheelZoomTool"},{"id":"32595","type":"BoxZoomTool"},{"id":"32596","type":"SaveTool"},{"id":"32597","type":"ResetTool"},{"id":"32598","type":"HelpTool"}]},"id":"32599","type":"Toolbar"},{"attributes":{"plot":{"id":"32574","subtype":"Figure","type":"Plot"},"ticker":{"id":"32584","type":"BasicTicker"}},"id":"32587","type":"Grid"},{"attributes":{"callback":null},"id":"32577","type":"DataRange1d"},{"attributes":{},"id":"32589","type":"BasicTicker"},{"attributes":{},"id":"32579","type":"LinearScale"},{"attributes":{"below":[{"id":"32583","type":"LinearAxis"}],"left":[{"id":"32588","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32583","type":"LinearAxis"},{"id":"32587","type":"Grid"},{"id":"32588","type":"LinearAxis"},{"id":"32592","type":"Grid"},{"id":"32601","type":"BoxAnnotation"},{"id":"32611","type":"GlyphRenderer"}],"title":{"id":"32613","type":"Title"},"toolbar":{"id":"32599","type":"Toolbar"},"x_range":{"id":"32575","type":"DataRange1d"},"x_scale":{"id":"32579","type":"LinearScale"},"y_range":{"id":"32577","type":"DataRange1d"},"y_scale":{"id":"32581","type":"LinearScale"}},"id":"32574","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32621","type":"UnionRenderers"},{"attributes":{},"id":"32598","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32601","type":"BoxAnnotation"},{"attributes":{},"id":"32581","type":"LinearScale"},{"attributes":{},"id":"32593","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"32613","type":"Title"},{"attributes":{"callback":null},"id":"32575","type":"DataRange1d"},{"attributes":{"overlay":{"id":"32601","type":"BoxAnnotation"}},"id":"32595","type":"BoxZoomTool"},{"attributes":{},"id":"32615","type":"BasicTickFormatter"},{"attributes":{},"id":"32584","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32609","type":"CircleCross"}],"root_ids":["32574"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"a6a51a44-3b6d-40dc-a7f9-78d7189482af","roots":{"32574":"1ad3aa0c-ae72-472d-a97f-093021b7b40b"}}];
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