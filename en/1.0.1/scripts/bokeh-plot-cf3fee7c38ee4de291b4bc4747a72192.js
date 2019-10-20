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
      };var element = document.getElementById("f5bf9ecc-eebb-44e2-97c0-05fb5228f5bb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f5bf9ecc-eebb-44e2-97c0-05fb5228f5bb' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"a1a0dc64-f655-47d0-be75-286e08b963db":{"roots":{"references":[{"attributes":{},"id":"11915","type":"ResetTool"},{"attributes":{},"id":"11914","type":"SaveTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"11927","type":"Quad"},{"attributes":{"formatter":{"id":"11936","type":"BasicTickFormatter"},"plot":{"id":"11892","subtype":"Figure","type":"Plot"},"ticker":{"id":"11907","type":"BasicTicker"}},"id":"11906","type":"LinearAxis"},{"attributes":{"data_source":{"id":"11926","type":"ColumnDataSource"},"glyph":{"id":"11927","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11928","type":"Quad"},"selection_glyph":null,"view":{"id":"11930","type":"CDSView"}},"id":"11929","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"11895","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11919","type":"BoxAnnotation"},{"attributes":{},"id":"11902","type":"BasicTicker"},{"attributes":{},"id":"11934","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"11926","type":"ColumnDataSource"}},"id":"11930","type":"CDSView"},{"attributes":{"plot":{"id":"11892","subtype":"Figure","type":"Plot"},"ticker":{"id":"11902","type":"BasicTicker"}},"id":"11905","type":"Grid"},{"attributes":{},"id":"11897","type":"LinearScale"},{"attributes":{"overlay":{"id":"11919","type":"BoxAnnotation"}},"id":"11913","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"11893","type":"DataRange1d"},{"attributes":{},"id":"11912","type":"WheelZoomTool"},{"attributes":{},"id":"11911","type":"PanTool"},{"attributes":{},"id":"11939","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"11934","type":"BasicTickFormatter"},"plot":{"id":"11892","subtype":"Figure","type":"Plot"},"ticker":{"id":"11902","type":"BasicTicker"}},"id":"11901","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"11932","type":"Title"},{"attributes":{"below":[{"id":"11901","type":"LinearAxis"}],"left":[{"id":"11906","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11901","type":"LinearAxis"},{"id":"11905","type":"Grid"},{"id":"11906","type":"LinearAxis"},{"id":"11910","type":"Grid"},{"id":"11919","type":"BoxAnnotation"},{"id":"11929","type":"GlyphRenderer"}],"title":{"id":"11932","type":"Title"},"toolbar":{"id":"11917","type":"Toolbar"},"x_range":{"id":"11893","type":"DataRange1d"},"x_scale":{"id":"11897","type":"LinearScale"},"y_range":{"id":"11895","type":"DataRange1d"},"y_scale":{"id":"11899","type":"LinearScale"}},"id":"11892","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"11928","type":"Quad"},{"attributes":{},"id":"11907","type":"BasicTicker"},{"attributes":{},"id":"11938","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"11892","subtype":"Figure","type":"Plot"},"ticker":{"id":"11907","type":"BasicTicker"}},"id":"11910","type":"Grid"},{"attributes":{},"id":"11936","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]},"selected":{"id":"11938","type":"Selection"},"selection_policy":{"id":"11939","type":"UnionRenderers"}},"id":"11926","type":"ColumnDataSource"},{"attributes":{},"id":"11899","type":"LinearScale"},{"attributes":{},"id":"11916","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11911","type":"PanTool"},{"id":"11912","type":"WheelZoomTool"},{"id":"11913","type":"BoxZoomTool"},{"id":"11914","type":"SaveTool"},{"id":"11915","type":"ResetTool"},{"id":"11916","type":"HelpTool"}]},"id":"11917","type":"Toolbar"}],"root_ids":["11892"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"a1a0dc64-f655-47d0-be75-286e08b963db","roots":{"11892":"f5bf9ecc-eebb-44e2-97c0-05fb5228f5bb"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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