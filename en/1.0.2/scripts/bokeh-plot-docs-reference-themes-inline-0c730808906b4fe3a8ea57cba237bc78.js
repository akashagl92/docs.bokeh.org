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
      };var element = document.getElementById("1d799747-e5ec-4279-b018-de53f9bff6bb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1d799747-e5ec-4279-b018-de53f9bff6bb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d036eace-c36a-448c-b193-de7aee88ad90":{"roots":{"references":[{"attributes":{"callback":null},"id":"35294","type":"DataRange1d"},{"attributes":{},"id":"35310","type":"PanTool"},{"attributes":{},"id":"35334","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"35325","type":"ColumnDataSource"},"glyph":{"id":"35326","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35327","type":"Line"},"selection_glyph":null,"view":{"id":"35329","type":"CDSView"}},"id":"35328","type":"GlyphRenderer"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#E0E0E0"},"axis_label_text_font":"Helvetica","axis_label_text_font_size":{"value":"1.25em"},"axis_label_text_font_style":"normal","axis_line_alpha":{"value":0},"axis_line_color":{"value":"#E0E0E0"},"formatter":{"id":"35334","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#E0E0E0"},"major_label_text_font":"Helvetica","major_label_text_font_size":{"value":"1.025em"},"major_tick_line_alpha":{"value":0},"major_tick_line_color":{"value":"#E0E0E0"},"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#E0E0E0"},"plot":{"id":"35290","subtype":"Figure","type":"Plot"},"ticker":{"id":"35306","type":"BasicTicker"}},"id":"35305","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"35337","type":"Selection"},"selection_policy":{"id":"35336","type":"UnionRenderers"}},"id":"35325","type":"ColumnDataSource"},{"attributes":{},"id":"35301","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35327","type":"Line"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.25},"grid_line_color":{"value":"#E0E0E0"},"plot":{"id":"35290","subtype":"Figure","type":"Plot"},"ticker":{"id":"35306","type":"BasicTicker"}},"id":"35309","type":"Grid"},{"attributes":{"overlay":{"id":"35318","type":"BoxAnnotation"}},"id":"35312","type":"BoxZoomTool"},{"attributes":{},"id":"35336","type":"UnionRenderers"},{"attributes":{"source":{"id":"35325","type":"ColumnDataSource"}},"id":"35329","type":"CDSView"},{"attributes":{"plot":null,"text":"dark_minimal","text_color":{"value":"#E0E0E0"},"text_font":"Helvetica","text_font_size":{"value":"1.15em"}},"id":"35289","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35318","type":"BoxAnnotation"},{"attributes":{},"id":"35306","type":"BasicTicker"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#E0E0E0"},"axis_label_text_font":"Helvetica","axis_label_text_font_size":{"value":"1.25em"},"axis_label_text_font_style":"normal","axis_line_alpha":{"value":0},"axis_line_color":{"value":"#E0E0E0"},"formatter":{"id":"35332","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#E0E0E0"},"major_label_text_font":"Helvetica","major_label_text_font_size":{"value":"1.025em"},"major_tick_line_alpha":{"value":0},"major_tick_line_color":{"value":"#E0E0E0"},"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#E0E0E0"},"plot":{"id":"35290","subtype":"Figure","type":"Plot"},"ticker":{"id":"35301","type":"BasicTicker"}},"id":"35300","type":"LinearAxis"},{"attributes":{},"id":"35315","type":"HelpTool"},{"attributes":{},"id":"35296","type":"LinearScale"},{"attributes":{},"id":"35313","type":"SaveTool"},{"attributes":{"grid_line_alpha":{"value":0.25},"grid_line_color":{"value":"#E0E0E0"},"plot":{"id":"35290","subtype":"Figure","type":"Plot"},"ticker":{"id":"35301","type":"BasicTicker"}},"id":"35304","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35310","type":"PanTool"},{"id":"35311","type":"WheelZoomTool"},{"id":"35312","type":"BoxZoomTool"},{"id":"35313","type":"SaveTool"},{"id":"35314","type":"ResetTool"},{"id":"35315","type":"HelpTool"}]},"id":"35316","type":"Toolbar"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35326","type":"Line"},{"attributes":{},"id":"35311","type":"WheelZoomTool"},{"attributes":{},"id":"35337","type":"Selection"},{"attributes":{},"id":"35298","type":"LinearScale"},{"attributes":{},"id":"35332","type":"BasicTickFormatter"},{"attributes":{},"id":"35314","type":"ResetTool"},{"attributes":{"callback":null},"id":"35292","type":"DataRange1d"},{"attributes":{"background_fill_color":{"value":"#20262B"},"below":[{"id":"35300","type":"LinearAxis"}],"border_fill_color":{"value":"#15191C"},"left":[{"id":"35305","type":"LinearAxis"}],"outline_line_alpha":{"value":0.25},"outline_line_color":{"value":"#E0E0E0"},"plot_height":300,"plot_width":300,"renderers":[{"id":"35300","type":"LinearAxis"},{"id":"35304","type":"Grid"},{"id":"35305","type":"LinearAxis"},{"id":"35309","type":"Grid"},{"id":"35318","type":"BoxAnnotation"},{"id":"35328","type":"GlyphRenderer"}],"title":{"id":"35289","type":"Title"},"toolbar":{"id":"35316","type":"Toolbar"},"x_range":{"id":"35292","type":"DataRange1d"},"x_scale":{"id":"35296","type":"LinearScale"},"y_range":{"id":"35294","type":"DataRange1d"},"y_scale":{"id":"35298","type":"LinearScale"}},"id":"35290","subtype":"Figure","type":"Plot"}],"root_ids":["35290"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"d036eace-c36a-448c-b193-de7aee88ad90","roots":{"35290":"1d799747-e5ec-4279-b018-de53f9bff6bb"}}];
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