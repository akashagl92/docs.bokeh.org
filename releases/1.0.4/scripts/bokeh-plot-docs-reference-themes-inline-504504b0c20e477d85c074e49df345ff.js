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
      };var element = document.getElementById("684c50ed-6c98-446b-ae46-0f1594c00cc6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '684c50ed-6c98-446b-ae46-0f1594c00cc6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"115b8b3c-7c32-470a-a853-f24266a9dcdc":{"roots":{"references":[{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#5B5B5B"},"axis_label_text_font":"Calibri Light","axis_label_text_font_size":{"value":"1.15em"},"axis_label_text_font_style":"bold","axis_line_alpha":{"value":25},"axis_line_color":{"value":"#5B5B5B"},"formatter":{"id":"35264","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#5B5B5B"},"major_label_text_font":"Calibri Light","major_label_text_font_size":{"value":"0.95em"},"major_label_text_font_style":"bold","major_tick_in":0,"major_tick_line_alpha":{"value":25},"major_tick_line_color":{"value":"#5B5B5B"},"major_tick_out":3,"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#5B5B5B"},"plot":{"id":"35221","subtype":"Figure","type":"Plot"},"ticker":{"id":"35232","type":"BasicTicker"}},"id":"35231","type":"LinearAxis"},{"attributes":{},"id":"35242","type":"WheelZoomTool"},{"attributes":{},"id":"35229","type":"LinearScale"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35257","type":"Line"},{"attributes":{"callback":null},"id":"35225","type":"DataRange1d"},{"attributes":{},"id":"35232","type":"BasicTicker"},{"attributes":{},"id":"35262","type":"BasicTickFormatter"},{"attributes":{},"id":"35241","type":"PanTool"},{"attributes":{},"id":"35264","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"35249","type":"BoxAnnotation"}},"id":"35243","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"35231","type":"LinearAxis"}],"left":[{"id":"35236","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"35231","type":"LinearAxis"},{"id":"35235","type":"Grid"},{"id":"35236","type":"LinearAxis"},{"id":"35240","type":"Grid"},{"id":"35249","type":"BoxAnnotation"},{"id":"35259","type":"GlyphRenderer"}],"title":{"id":"35220","type":"Title"},"toolbar":{"id":"35247","type":"Toolbar"},"x_range":{"id":"35223","type":"DataRange1d"},"x_scale":{"id":"35227","type":"LinearScale"},"y_range":{"id":"35225","type":"DataRange1d"},"y_scale":{"id":"35229","type":"LinearScale"}},"id":"35221","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"35256","type":"ColumnDataSource"},"glyph":{"id":"35257","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35258","type":"Line"},"selection_glyph":null,"view":{"id":"35260","type":"CDSView"}},"id":"35259","type":"GlyphRenderer"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#5B5B5B"},"axis_label_text_font":"Calibri Light","axis_label_text_font_size":{"value":"1.15em"},"axis_label_text_font_style":"bold","axis_line_alpha":{"value":25},"axis_line_color":{"value":"#5B5B5B"},"formatter":{"id":"35262","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#5B5B5B"},"major_label_text_font":"Calibri Light","major_label_text_font_size":{"value":"0.95em"},"major_label_text_font_style":"bold","major_tick_in":0,"major_tick_line_alpha":{"value":25},"major_tick_line_color":{"value":"#5B5B5B"},"major_tick_out":3,"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#5B5B5B"},"plot":{"id":"35221","subtype":"Figure","type":"Plot"},"ticker":{"id":"35237","type":"BasicTicker"}},"id":"35236","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35241","type":"PanTool"},{"id":"35242","type":"WheelZoomTool"},{"id":"35243","type":"BoxZoomTool"},{"id":"35244","type":"SaveTool"},{"id":"35245","type":"ResetTool"},{"id":"35246","type":"HelpTool"}]},"id":"35247","type":"Toolbar"},{"attributes":{},"id":"35227","type":"LinearScale"},{"attributes":{},"id":"35266","type":"UnionRenderers"},{"attributes":{},"id":"35244","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35258","type":"Line"},{"attributes":{},"id":"35267","type":"Selection"},{"attributes":{},"id":"35245","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"35267","type":"Selection"},"selection_policy":{"id":"35266","type":"UnionRenderers"}},"id":"35256","type":"ColumnDataSource"},{"attributes":{},"id":"35246","type":"HelpTool"},{"attributes":{"callback":null},"id":"35223","type":"DataRange1d"},{"attributes":{},"id":"35237","type":"BasicTicker"},{"attributes":{"plot":{"id":"35221","subtype":"Figure","type":"Plot"},"ticker":{"id":"35232","type":"BasicTicker"}},"id":"35235","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"35221","subtype":"Figure","type":"Plot"},"ticker":{"id":"35237","type":"BasicTicker"}},"id":"35240","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35249","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"caliber","text_color":{"value":"#5B5B5B"},"text_font":"Calibri Light","text_font_size":{"value":"1.25em"},"text_font_style":"bold"},"id":"35220","type":"Title"},{"attributes":{"source":{"id":"35256","type":"ColumnDataSource"}},"id":"35260","type":"CDSView"}],"root_ids":["35221"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"115b8b3c-7c32-470a-a853-f24266a9dcdc","roots":{"35221":"684c50ed-6c98-446b-ae46-0f1594c00cc6"}}];
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