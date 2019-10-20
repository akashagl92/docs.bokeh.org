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
      };var element = document.getElementById("a3d93bf1-b888-4099-8f09-1bccff521ab7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a3d93bf1-b888-4099-8f09-1bccff521ab7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"53d1457f-e1c3-4c49-a278-f33be1b60b63":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32616","type":"CircleCross"},{"attributes":{"data_source":{"id":"32614","type":"ColumnDataSource"},"glyph":{"id":"32615","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32616","type":"CircleCross"},"selection_glyph":null,"view":{"id":"32618","type":"CDSView"}},"id":"32617","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"32580","subtype":"Figure","type":"Plot"},"ticker":{"id":"32590","type":"BasicTicker"}},"id":"32593","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"32580","subtype":"Figure","type":"Plot"},"ticker":{"id":"32595","type":"BasicTicker"}},"id":"32598","type":"Grid"},{"attributes":{},"id":"32595","type":"BasicTicker"},{"attributes":{"below":[{"id":"32589","type":"LinearAxis"}],"left":[{"id":"32594","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32589","type":"LinearAxis"},{"id":"32593","type":"Grid"},{"id":"32594","type":"LinearAxis"},{"id":"32598","type":"Grid"},{"id":"32607","type":"BoxAnnotation"},{"id":"32617","type":"GlyphRenderer"}],"title":{"id":"32619","type":"Title"},"toolbar":{"id":"32605","type":"Toolbar"},"x_range":{"id":"32581","type":"DataRange1d"},"x_scale":{"id":"32585","type":"LinearScale"},"y_range":{"id":"32583","type":"DataRange1d"},"y_scale":{"id":"32587","type":"LinearScale"}},"id":"32580","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32599","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"32619","type":"Title"},{"attributes":{"callback":null},"id":"32581","type":"DataRange1d"},{"attributes":{},"id":"32625","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32607","type":"BoxAnnotation"},{"attributes":{},"id":"32621","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"32621","type":"BasicTickFormatter"},"plot":{"id":"32580","subtype":"Figure","type":"Plot"},"ticker":{"id":"32595","type":"BasicTicker"}},"id":"32594","type":"LinearAxis"},{"attributes":{},"id":"32623","type":"BasicTickFormatter"},{"attributes":{},"id":"32604","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[4,5,6]},"selected":{"id":"32626","type":"Selection"},"selection_policy":{"id":"32625","type":"UnionRenderers"}},"id":"32614","type":"ColumnDataSource"},{"attributes":{},"id":"32603","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32599","type":"PanTool"},{"id":"32600","type":"WheelZoomTool"},{"id":"32601","type":"BoxZoomTool"},{"id":"32602","type":"SaveTool"},{"id":"32603","type":"ResetTool"},{"id":"32604","type":"HelpTool"}]},"id":"32605","type":"Toolbar"},{"attributes":{},"id":"32587","type":"LinearScale"},{"attributes":{"overlay":{"id":"32607","type":"BoxAnnotation"}},"id":"32601","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"32623","type":"BasicTickFormatter"},"plot":{"id":"32580","subtype":"Figure","type":"Plot"},"ticker":{"id":"32590","type":"BasicTicker"}},"id":"32589","type":"LinearAxis"},{"attributes":{},"id":"32600","type":"WheelZoomTool"},{"attributes":{"source":{"id":"32614","type":"ColumnDataSource"}},"id":"32618","type":"CDSView"},{"attributes":{},"id":"32626","type":"Selection"},{"attributes":{},"id":"32590","type":"BasicTicker"},{"attributes":{},"id":"32602","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32615","type":"CircleCross"},{"attributes":{"callback":null},"id":"32583","type":"DataRange1d"},{"attributes":{},"id":"32585","type":"LinearScale"}],"root_ids":["32580"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"53d1457f-e1c3-4c49-a278-f33be1b60b63","roots":{"32580":"a3d93bf1-b888-4099-8f09-1bccff521ab7"}}];
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