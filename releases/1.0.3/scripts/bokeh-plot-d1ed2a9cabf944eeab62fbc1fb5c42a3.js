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
      };var element = document.getElementById("368f3d4b-0eb6-4561-9166-2af6c11e3f21");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '368f3d4b-0eb6-4561-9166-2af6c11e3f21' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f72eb382-c6dd-48ab-8d93-39bd683a9e9a":{"roots":{"references":[{"attributes":{"below":[{"id":"9632","type":"LinearAxis"}],"left":[{"id":"9637","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9632","type":"LinearAxis"},{"id":"9636","type":"Grid"},{"id":"9637","type":"LinearAxis"},{"id":"9641","type":"Grid"},{"id":"9650","type":"BoxAnnotation"},{"id":"9660","type":"GlyphRenderer"}],"title":{"id":"9662","type":"Title"},"toolbar":{"id":"9648","type":"Toolbar"},"x_range":{"id":"9624","type":"DataRange1d"},"x_scale":{"id":"9628","type":"LinearScale"},"y_range":{"id":"9626","type":"DataRange1d"},"y_scale":{"id":"9630","type":"LinearScale"}},"id":"9623","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9643","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"9623","subtype":"Figure","type":"Plot"},"ticker":{"id":"9633","type":"BasicTicker"}},"id":"9636","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9650","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"9664","type":"BasicTickFormatter"},"plot":{"id":"9623","subtype":"Figure","type":"Plot"},"ticker":{"id":"9638","type":"BasicTicker"}},"id":"9637","type":"LinearAxis"},{"attributes":{},"id":"9669","type":"Selection"},{"attributes":{},"id":"9646","type":"ResetTool"},{"attributes":{"data_source":{"id":"9657","type":"ColumnDataSource"},"glyph":{"id":"9658","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9659","type":"Ellipse"},"selection_glyph":null,"view":{"id":"9661","type":"CDSView"}},"id":"9660","type":"GlyphRenderer"},{"attributes":{},"id":"9645","type":"SaveTool"},{"attributes":{"callback":null,"data":{"width":[0.2,0.3,0.1],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"9669","type":"Selection"},"selection_policy":{"id":"9670","type":"UnionRenderers"}},"id":"9657","type":"ColumnDataSource"},{"attributes":{},"id":"9638","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"9662","type":"Title"},{"attributes":{"callback":null},"id":"9624","type":"DataRange1d"},{"attributes":{"callback":null},"id":"9626","type":"DataRange1d"},{"attributes":{},"id":"9664","type":"BasicTickFormatter"},{"attributes":{},"id":"9647","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"9623","subtype":"Figure","type":"Plot"},"ticker":{"id":"9638","type":"BasicTicker"}},"id":"9641","type":"Grid"},{"attributes":{"overlay":{"id":"9650","type":"BoxAnnotation"}},"id":"9644","type":"BoxZoomTool"},{"attributes":{},"id":"9670","type":"UnionRenderers"},{"attributes":{},"id":"9628","type":"LinearScale"},{"attributes":{"source":{"id":"9657","type":"ColumnDataSource"}},"id":"9661","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"9642","type":"PanTool"},{"id":"9643","type":"WheelZoomTool"},{"id":"9644","type":"BoxZoomTool"},{"id":"9645","type":"SaveTool"},{"id":"9646","type":"ResetTool"},{"id":"9647","type":"HelpTool"}]},"id":"9648","type":"Toolbar"},{"attributes":{},"id":"9630","type":"LinearScale"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.3},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9659","type":"Ellipse"},{"attributes":{},"id":"9666","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"data","value":0.3},"line_color":{"value":"#CAB2D6"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9658","type":"Ellipse"},{"attributes":{},"id":"9633","type":"BasicTicker"},{"attributes":{"formatter":{"id":"9666","type":"BasicTickFormatter"},"plot":{"id":"9623","subtype":"Figure","type":"Plot"},"ticker":{"id":"9633","type":"BasicTicker"}},"id":"9632","type":"LinearAxis"},{"attributes":{},"id":"9642","type":"PanTool"}],"root_ids":["9623"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"f72eb382-c6dd-48ab-8d93-39bd683a9e9a","roots":{"9623":"368f3d4b-0eb6-4561-9166-2af6c11e3f21"}}];
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