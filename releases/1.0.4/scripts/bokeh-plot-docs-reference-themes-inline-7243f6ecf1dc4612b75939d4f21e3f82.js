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
      };var element = document.getElementById("b253f5c9-6150-4a9a-97fd-7a6528455552");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b253f5c9-6150-4a9a-97fd-7a6528455552' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b7f2acb9-77aa-4143-bece-df42ab835f16":{"roots":{"references":[{"attributes":{"grid_line_alpha":{"value":0.25},"grid_line_color":{"value":"#E0E0E0"},"plot":{"id":"35303","subtype":"Figure","type":"Plot"},"ticker":{"id":"35314","type":"BasicTicker"}},"id":"35317","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35323","type":"PanTool"},{"id":"35324","type":"WheelZoomTool"},{"id":"35325","type":"BoxZoomTool"},{"id":"35326","type":"SaveTool"},{"id":"35327","type":"ResetTool"},{"id":"35328","type":"HelpTool"}]},"id":"35329","type":"Toolbar"},{"attributes":{},"id":"35319","type":"BasicTicker"},{"attributes":{},"id":"35309","type":"LinearScale"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35339","type":"Line"},{"attributes":{},"id":"35314","type":"BasicTicker"},{"attributes":{"background_fill_color":{"value":"#20262B"},"below":[{"id":"35313","type":"LinearAxis"}],"border_fill_color":{"value":"#15191C"},"left":[{"id":"35318","type":"LinearAxis"}],"outline_line_alpha":{"value":0.25},"outline_line_color":{"value":"#E0E0E0"},"plot_height":300,"plot_width":300,"renderers":[{"id":"35313","type":"LinearAxis"},{"id":"35317","type":"Grid"},{"id":"35318","type":"LinearAxis"},{"id":"35322","type":"Grid"},{"id":"35331","type":"BoxAnnotation"},{"id":"35341","type":"GlyphRenderer"}],"title":{"id":"35302","type":"Title"},"toolbar":{"id":"35329","type":"Toolbar"},"x_range":{"id":"35305","type":"DataRange1d"},"x_scale":{"id":"35309","type":"LinearScale"},"y_range":{"id":"35307","type":"DataRange1d"},"y_scale":{"id":"35311","type":"LinearScale"}},"id":"35303","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"35338","type":"ColumnDataSource"}},"id":"35342","type":"CDSView"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.25},"grid_line_color":{"value":"#E0E0E0"},"plot":{"id":"35303","subtype":"Figure","type":"Plot"},"ticker":{"id":"35319","type":"BasicTicker"}},"id":"35322","type":"Grid"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#E0E0E0"},"axis_label_text_font":"Helvetica","axis_label_text_font_size":{"value":"1.25em"},"axis_label_text_font_style":"normal","axis_line_alpha":{"value":0},"axis_line_color":{"value":"#E0E0E0"},"formatter":{"id":"35346","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#E0E0E0"},"major_label_text_font":"Helvetica","major_label_text_font_size":{"value":"1.025em"},"major_tick_line_alpha":{"value":0},"major_tick_line_color":{"value":"#E0E0E0"},"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#E0E0E0"},"plot":{"id":"35303","subtype":"Figure","type":"Plot"},"ticker":{"id":"35314","type":"BasicTicker"}},"id":"35313","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35331","type":"BoxAnnotation"},{"attributes":{},"id":"35324","type":"WheelZoomTool"},{"attributes":{},"id":"35311","type":"LinearScale"},{"attributes":{},"id":"35344","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"35307","type":"DataRange1d"},{"attributes":{"data_source":{"id":"35338","type":"ColumnDataSource"},"glyph":{"id":"35339","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35340","type":"Line"},"selection_glyph":null,"view":{"id":"35342","type":"CDSView"}},"id":"35341","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"35331","type":"BoxAnnotation"}},"id":"35325","type":"BoxZoomTool"},{"attributes":{},"id":"35346","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"35305","type":"DataRange1d"},{"attributes":{},"id":"35323","type":"PanTool"},{"attributes":{},"id":"35327","type":"ResetTool"},{"attributes":{},"id":"35348","type":"UnionRenderers"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#E0E0E0"},"axis_label_text_font":"Helvetica","axis_label_text_font_size":{"value":"1.25em"},"axis_label_text_font_style":"normal","axis_line_alpha":{"value":0},"axis_line_color":{"value":"#E0E0E0"},"formatter":{"id":"35344","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#E0E0E0"},"major_label_text_font":"Helvetica","major_label_text_font_size":{"value":"1.025em"},"major_tick_line_alpha":{"value":0},"major_tick_line_color":{"value":"#E0E0E0"},"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#E0E0E0"},"plot":{"id":"35303","subtype":"Figure","type":"Plot"},"ticker":{"id":"35319","type":"BasicTicker"}},"id":"35318","type":"LinearAxis"},{"attributes":{},"id":"35328","type":"HelpTool"},{"attributes":{},"id":"35326","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35340","type":"Line"},{"attributes":{"plot":null,"text":"dark_minimal","text_color":{"value":"#E0E0E0"},"text_font":"Helvetica","text_font_size":{"value":"1.15em"}},"id":"35302","type":"Title"},{"attributes":{},"id":"35349","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"35349","type":"Selection"},"selection_policy":{"id":"35348","type":"UnionRenderers"}},"id":"35338","type":"ColumnDataSource"}],"root_ids":["35303"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"b7f2acb9-77aa-4143-bece-df42ab835f16","roots":{"35303":"b253f5c9-6150-4a9a-97fd-7a6528455552"}}];
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