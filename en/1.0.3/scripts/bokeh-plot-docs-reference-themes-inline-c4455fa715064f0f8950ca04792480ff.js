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
      };var element = document.getElementById("5055ec00-9af0-4aae-b5f0-beb57e657e47");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5055ec00-9af0-4aae-b5f0-beb57e657e47' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"317a7831-3a1f-4d34-a8b5-0001b7aa00e6":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35317","type":"PanTool"},{"id":"35318","type":"WheelZoomTool"},{"id":"35319","type":"BoxZoomTool"},{"id":"35320","type":"SaveTool"},{"id":"35321","type":"ResetTool"},{"id":"35322","type":"HelpTool"}]},"id":"35323","type":"Toolbar"},{"attributes":{},"id":"35308","type":"BasicTicker"},{"attributes":{},"id":"35343","type":"Selection"},{"attributes":{"callback":null},"id":"35299","type":"DataRange1d"},{"attributes":{},"id":"35321","type":"ResetTool"},{"attributes":{"grid_line_alpha":{"value":0.25},"grid_line_color":{"value":"#E0E0E0"},"plot":{"id":"35297","subtype":"Figure","type":"Plot"},"ticker":{"id":"35308","type":"BasicTicker"}},"id":"35311","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"35343","type":"Selection"},"selection_policy":{"id":"35344","type":"UnionRenderers"}},"id":"35332","type":"ColumnDataSource"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#E0E0E0"},"axis_label_text_font":"Helvetica","axis_label_text_font_size":{"value":"1.25em"},"axis_label_text_font_style":"normal","axis_line_alpha":{"value":0},"axis_line_color":{"value":"#E0E0E0"},"formatter":{"id":"35340","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#E0E0E0"},"major_label_text_font":"Helvetica","major_label_text_font_size":{"value":"1.025em"},"major_tick_line_alpha":{"value":0},"major_tick_line_color":{"value":"#E0E0E0"},"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#E0E0E0"},"plot":{"id":"35297","subtype":"Figure","type":"Plot"},"ticker":{"id":"35308","type":"BasicTicker"}},"id":"35307","type":"LinearAxis"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.25},"grid_line_color":{"value":"#E0E0E0"},"plot":{"id":"35297","subtype":"Figure","type":"Plot"},"ticker":{"id":"35313","type":"BasicTicker"}},"id":"35316","type":"Grid"},{"attributes":{"callback":null},"id":"35301","type":"DataRange1d"},{"attributes":{},"id":"35303","type":"LinearScale"},{"attributes":{"background_fill_color":{"value":"#20262B"},"below":[{"id":"35307","type":"LinearAxis"}],"border_fill_color":{"value":"#15191C"},"left":[{"id":"35312","type":"LinearAxis"}],"outline_line_alpha":{"value":0.25},"outline_line_color":{"value":"#E0E0E0"},"plot_height":300,"plot_width":300,"renderers":[{"id":"35307","type":"LinearAxis"},{"id":"35311","type":"Grid"},{"id":"35312","type":"LinearAxis"},{"id":"35316","type":"Grid"},{"id":"35325","type":"BoxAnnotation"},{"id":"35335","type":"GlyphRenderer"}],"title":{"id":"35296","type":"Title"},"toolbar":{"id":"35323","type":"Toolbar"},"x_range":{"id":"35299","type":"DataRange1d"},"x_scale":{"id":"35303","type":"LinearScale"},"y_range":{"id":"35301","type":"DataRange1d"},"y_scale":{"id":"35305","type":"LinearScale"}},"id":"35297","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"35332","type":"ColumnDataSource"}},"id":"35336","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35334","type":"Line"},{"attributes":{},"id":"35338","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"dark_minimal","text_color":{"value":"#E0E0E0"},"text_font":"Helvetica","text_font_size":{"value":"1.15em"}},"id":"35296","type":"Title"},{"attributes":{},"id":"35317","type":"PanTool"},{"attributes":{},"id":"35344","type":"UnionRenderers"},{"attributes":{},"id":"35305","type":"LinearScale"},{"attributes":{},"id":"35322","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35325","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"35332","type":"ColumnDataSource"},"glyph":{"id":"35333","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35334","type":"Line"},"selection_glyph":null,"view":{"id":"35336","type":"CDSView"}},"id":"35335","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"35325","type":"BoxAnnotation"}},"id":"35319","type":"BoxZoomTool"},{"attributes":{},"id":"35340","type":"BasicTickFormatter"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35333","type":"Line"},{"attributes":{},"id":"35318","type":"WheelZoomTool"},{"attributes":{},"id":"35313","type":"BasicTicker"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#E0E0E0"},"axis_label_text_font":"Helvetica","axis_label_text_font_size":{"value":"1.25em"},"axis_label_text_font_style":"normal","axis_line_alpha":{"value":0},"axis_line_color":{"value":"#E0E0E0"},"formatter":{"id":"35338","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#E0E0E0"},"major_label_text_font":"Helvetica","major_label_text_font_size":{"value":"1.025em"},"major_tick_line_alpha":{"value":0},"major_tick_line_color":{"value":"#E0E0E0"},"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#E0E0E0"},"plot":{"id":"35297","subtype":"Figure","type":"Plot"},"ticker":{"id":"35313","type":"BasicTicker"}},"id":"35312","type":"LinearAxis"},{"attributes":{},"id":"35320","type":"SaveTool"}],"root_ids":["35297"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"317a7831-3a1f-4d34-a8b5-0001b7aa00e6","roots":{"35297":"5055ec00-9af0-4aae-b5f0-beb57e657e47"}}];
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