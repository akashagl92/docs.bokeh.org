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
      };var element = document.getElementById("ab883487-7766-4489-b6dd-4d26d282179f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ab883487-7766-4489-b6dd-4d26d282179f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8b309ebd-969f-4d24-b0d5-d93fad24abab":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11660","type":"PanTool"},{"id":"11661","type":"WheelZoomTool"},{"id":"11662","type":"BoxZoomTool"},{"id":"11663","type":"SaveTool"},{"id":"11664","type":"ResetTool"},{"id":"11665","type":"HelpTool"}]},"id":"11666","type":"Toolbar"},{"attributes":{"callback":null},"id":"11644","type":"DataRange1d"},{"attributes":{},"id":"11646","type":"LinearScale"},{"attributes":{},"id":"11687","type":"Selection"},{"attributes":{},"id":"11663","type":"SaveTool"},{"attributes":{},"id":"11651","type":"BasicTicker"},{"attributes":{},"id":"11682","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11668","type":"BoxAnnotation"},{"attributes":{},"id":"11648","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"11641","subtype":"Figure","type":"Plot"},"ticker":{"id":"11656","type":"BasicTicker"}},"id":"11659","type":"Grid"},{"attributes":{},"id":"11665","type":"HelpTool"},{"attributes":{},"id":"11686","type":"UnionRenderers"},{"attributes":{"source":{"id":"11675","type":"ColumnDataSource"}},"id":"11679","type":"CDSView"},{"attributes":{"data_source":{"id":"11675","type":"ColumnDataSource"},"glyph":{"id":"11676","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11677","type":"Patches"},"selection_glyph":null,"view":{"id":"11679","type":"CDSView"}},"id":"11678","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"11684","type":"BasicTickFormatter"},"plot":{"id":"11641","subtype":"Figure","type":"Plot"},"ticker":{"id":"11651","type":"BasicTicker"}},"id":"11650","type":"LinearAxis"},{"attributes":{"formatter":{"id":"11682","type":"BasicTickFormatter"},"plot":{"id":"11641","subtype":"Figure","type":"Plot"},"ticker":{"id":"11656","type":"BasicTicker"}},"id":"11655","type":"LinearAxis"},{"attributes":{},"id":"11661","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"11641","subtype":"Figure","type":"Plot"},"ticker":{"id":"11651","type":"BasicTicker"}},"id":"11654","type":"Grid"},{"attributes":{},"id":"11660","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"11680","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11677","type":"Patches"},{"attributes":{"below":[{"id":"11650","type":"LinearAxis"}],"left":[{"id":"11655","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11650","type":"LinearAxis"},{"id":"11654","type":"Grid"},{"id":"11655","type":"LinearAxis"},{"id":"11659","type":"Grid"},{"id":"11668","type":"BoxAnnotation"},{"id":"11678","type":"GlyphRenderer"}],"title":{"id":"11680","type":"Title"},"toolbar":{"id":"11666","type":"Toolbar"},"x_range":{"id":"11642","type":"DataRange1d"},"x_scale":{"id":"11646","type":"LinearScale"},"y_range":{"id":"11644","type":"DataRange1d"},"y_scale":{"id":"11648","type":"LinearScale"}},"id":"11641","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"fill_alpha":[0.8,0.3],"fill_color":["firebrick","navy"],"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]},"selected":{"id":"11687","type":"Selection"},"selection_policy":{"id":"11686","type":"UnionRenderers"}},"id":"11675","type":"ColumnDataSource"},{"attributes":{},"id":"11664","type":"ResetTool"},{"attributes":{},"id":"11656","type":"BasicTicker"},{"attributes":{"callback":null},"id":"11642","type":"DataRange1d"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"fill_color"},"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"11676","type":"Patches"},{"attributes":{},"id":"11684","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"11668","type":"BoxAnnotation"}},"id":"11662","type":"BoxZoomTool"}],"root_ids":["11641"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"8b309ebd-969f-4d24-b0d5-d93fad24abab","roots":{"11641":"ab883487-7766-4489-b6dd-4d26d282179f"}}];
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