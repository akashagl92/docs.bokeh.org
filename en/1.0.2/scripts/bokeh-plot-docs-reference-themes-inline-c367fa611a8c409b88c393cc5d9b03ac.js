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
      };var element = document.getElementById("73cb4efd-5646-46a5-bfc3-bec374345760");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '73cb4efd-5646-46a5-bfc3-bec374345760' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b8ac0477-1c02-4a24-b583-8578d21b7e8a":{"roots":{"references":[{"attributes":{},"id":"35397","type":"HelpTool"},{"attributes":{},"id":"35383","type":"BasicTicker"},{"attributes":{},"id":"35380","type":"LinearScale"},{"attributes":{},"id":"35416","type":"BasicTickFormatter"},{"attributes":{},"id":"35388","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"35372","subtype":"Figure","type":"Plot"},"ticker":{"id":"35388","type":"BasicTicker"}},"id":"35391","type":"Grid"},{"attributes":{},"id":"35395","type":"SaveTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35408","type":"Line"},{"attributes":{"callback":null},"id":"35376","type":"DataRange1d"},{"attributes":{"source":{"id":"35407","type":"ColumnDataSource"}},"id":"35411","type":"CDSView"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#5B5B5B"},"axis_label_text_font":"Calibri Light","axis_label_text_font_size":{"value":"1.15em"},"axis_label_text_font_style":"bold","axis_line_alpha":{"value":25},"axis_line_color":{"value":"#5B5B5B"},"formatter":{"id":"35416","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#5B5B5B"},"major_label_text_font":"Calibri Light","major_label_text_font_size":{"value":"0.95em"},"major_label_text_font_style":"bold","major_tick_in":0,"major_tick_line_alpha":{"value":25},"major_tick_line_color":{"value":"#5B5B5B"},"major_tick_out":3,"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#5B5B5B"},"plot":{"id":"35372","subtype":"Figure","type":"Plot"},"ticker":{"id":"35388","type":"BasicTicker"}},"id":"35387","type":"LinearAxis"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#5B5B5B"},"axis_label_text_font":"Calibri Light","axis_label_text_font_size":{"value":"1.15em"},"axis_label_text_font_style":"bold","axis_line_alpha":{"value":25},"axis_line_color":{"value":"#5B5B5B"},"formatter":{"id":"35414","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#5B5B5B"},"major_label_text_font":"Calibri Light","major_label_text_font_size":{"value":"0.95em"},"major_label_text_font_style":"bold","major_tick_in":0,"major_tick_line_alpha":{"value":25},"major_tick_line_color":{"value":"#5B5B5B"},"major_tick_out":3,"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#5B5B5B"},"plot":{"id":"35372","subtype":"Figure","type":"Plot"},"ticker":{"id":"35383","type":"BasicTicker"}},"id":"35382","type":"LinearAxis"},{"attributes":{"plot":null,"text":"light_minimal","text_color":{"value":"#5B5B5B"},"text_font":"Calibri Light","text_font_size":{"value":"1.25em"},"text_font_style":"bold"},"id":"35371","type":"Title"},{"attributes":{"overlay":{"id":"35400","type":"BoxAnnotation"}},"id":"35394","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35392","type":"PanTool"},{"id":"35393","type":"WheelZoomTool"},{"id":"35394","type":"BoxZoomTool"},{"id":"35395","type":"SaveTool"},{"id":"35396","type":"ResetTool"},{"id":"35397","type":"HelpTool"}]},"id":"35398","type":"Toolbar"},{"attributes":{"plot":{"id":"35372","subtype":"Figure","type":"Plot"},"ticker":{"id":"35383","type":"BasicTicker"}},"id":"35386","type":"Grid"},{"attributes":{"data_source":{"id":"35407","type":"ColumnDataSource"},"glyph":{"id":"35408","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35409","type":"Line"},"selection_glyph":null,"view":{"id":"35411","type":"CDSView"}},"id":"35410","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35400","type":"BoxAnnotation"},{"attributes":{},"id":"35392","type":"PanTool"},{"attributes":{},"id":"35393","type":"WheelZoomTool"},{"attributes":{},"id":"35414","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"35382","type":"LinearAxis"}],"left":[{"id":"35387","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"35382","type":"LinearAxis"},{"id":"35386","type":"Grid"},{"id":"35387","type":"LinearAxis"},{"id":"35391","type":"Grid"},{"id":"35400","type":"BoxAnnotation"},{"id":"35410","type":"GlyphRenderer"}],"title":{"id":"35371","type":"Title"},"toolbar":{"id":"35398","type":"Toolbar"},"x_range":{"id":"35374","type":"DataRange1d"},"x_scale":{"id":"35378","type":"LinearScale"},"y_range":{"id":"35376","type":"DataRange1d"},"y_scale":{"id":"35380","type":"LinearScale"}},"id":"35372","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"35374","type":"DataRange1d"},{"attributes":{},"id":"35419","type":"Selection"},{"attributes":{},"id":"35418","type":"UnionRenderers"},{"attributes":{},"id":"35378","type":"LinearScale"},{"attributes":{},"id":"35396","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35409","type":"Line"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"35419","type":"Selection"},"selection_policy":{"id":"35418","type":"UnionRenderers"}},"id":"35407","type":"ColumnDataSource"}],"root_ids":["35372"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"b8ac0477-1c02-4a24-b583-8578d21b7e8a","roots":{"35372":"73cb4efd-5646-46a5-bfc3-bec374345760"}}];
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