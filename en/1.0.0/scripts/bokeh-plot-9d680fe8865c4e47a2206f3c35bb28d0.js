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
      };var element = document.getElementById("2bb22dd9-4b62-470c-b6b4-0a9be04f9608");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2bb22dd9-4b62-470c-b6b4-0a9be04f9608' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"450ac6d9-9749-43f3-a1a0-96bd548aba28":{"roots":{"references":[{"attributes":{},"id":"9634","type":"BasicTicker"},{"attributes":{"callback":null},"id":"9622","type":"DataRange1d"},{"attributes":{},"id":"9629","type":"BasicTicker"},{"attributes":{"data_source":{"id":"9653","type":"ColumnDataSource"},"glyph":{"id":"9654","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9655","type":"Ellipse"},"selection_glyph":null,"view":{"id":"9657","type":"CDSView"}},"id":"9656","type":"GlyphRenderer"},{"attributes":{},"id":"9666","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"9619","subtype":"Figure","type":"Plot"},"ticker":{"id":"9634","type":"BasicTicker"}},"id":"9637","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"9659","type":"Title"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"data","value":0.3},"line_color":{"value":"#CAB2D6"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9654","type":"Ellipse"},{"attributes":{"callback":null},"id":"9620","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"width":[0.2,0.3,0.1],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"9665","type":"Selection"},"selection_policy":{"id":"9666","type":"UnionRenderers"}},"id":"9653","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.3},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9655","type":"Ellipse"},{"attributes":{},"id":"9663","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"9628","type":"LinearAxis"}],"left":[{"id":"9633","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9628","type":"LinearAxis"},{"id":"9632","type":"Grid"},{"id":"9633","type":"LinearAxis"},{"id":"9637","type":"Grid"},{"id":"9646","type":"BoxAnnotation"},{"id":"9656","type":"GlyphRenderer"}],"title":{"id":"9659","type":"Title"},"toolbar":{"id":"9644","type":"Toolbar"},"x_range":{"id":"9620","type":"DataRange1d"},"x_scale":{"id":"9624","type":"LinearScale"},"y_range":{"id":"9622","type":"DataRange1d"},"y_scale":{"id":"9626","type":"LinearScale"}},"id":"9619","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9641","type":"SaveTool"},{"attributes":{},"id":"9639","type":"WheelZoomTool"},{"attributes":{},"id":"9643","type":"HelpTool"},{"attributes":{"formatter":{"id":"9663","type":"BasicTickFormatter"},"plot":{"id":"9619","subtype":"Figure","type":"Plot"},"ticker":{"id":"9634","type":"BasicTicker"}},"id":"9633","type":"LinearAxis"},{"attributes":{"source":{"id":"9653","type":"ColumnDataSource"}},"id":"9657","type":"CDSView"},{"attributes":{"plot":{"id":"9619","subtype":"Figure","type":"Plot"},"ticker":{"id":"9629","type":"BasicTicker"}},"id":"9632","type":"Grid"},{"attributes":{},"id":"9624","type":"LinearScale"},{"attributes":{},"id":"9665","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"9638","type":"PanTool"},{"id":"9639","type":"WheelZoomTool"},{"id":"9640","type":"BoxZoomTool"},{"id":"9641","type":"SaveTool"},{"id":"9642","type":"ResetTool"},{"id":"9643","type":"HelpTool"}]},"id":"9644","type":"Toolbar"},{"attributes":{},"id":"9626","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9646","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"9661","type":"BasicTickFormatter"},"plot":{"id":"9619","subtype":"Figure","type":"Plot"},"ticker":{"id":"9629","type":"BasicTicker"}},"id":"9628","type":"LinearAxis"},{"attributes":{},"id":"9661","type":"BasicTickFormatter"},{"attributes":{},"id":"9638","type":"PanTool"},{"attributes":{"overlay":{"id":"9646","type":"BoxAnnotation"}},"id":"9640","type":"BoxZoomTool"},{"attributes":{},"id":"9642","type":"ResetTool"}],"root_ids":["9619"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"450ac6d9-9749-43f3-a1a0-96bd548aba28","roots":{"9619":"2bb22dd9-4b62-470c-b6b4-0a9be04f9608"}}];
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