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
      };var element = document.getElementById("39556706-1337-421a-90c6-c00586ffe379");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '39556706-1337-421a-90c6-c00586ffe379' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e69449d7-70e3-45a8-a59f-720dbfc4e19f":{"roots":{"references":[{"attributes":{},"id":"35256","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"35219","type":"DataRange1d"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#5B5B5B"},"axis_label_text_font":"Calibri Light","axis_label_text_font_size":{"value":"1.15em"},"axis_label_text_font_style":"bold","axis_line_alpha":{"value":25},"axis_line_color":{"value":"#5B5B5B"},"formatter":{"id":"35258","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#5B5B5B"},"major_label_text_font":"Calibri Light","major_label_text_font_size":{"value":"0.95em"},"major_label_text_font_style":"bold","major_tick_in":0,"major_tick_line_alpha":{"value":25},"major_tick_line_color":{"value":"#5B5B5B"},"major_tick_out":3,"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#5B5B5B"},"plot":{"id":"35215","subtype":"Figure","type":"Plot"},"ticker":{"id":"35226","type":"BasicTicker"}},"id":"35225","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"35215","subtype":"Figure","type":"Plot"},"ticker":{"id":"35231","type":"BasicTicker"}},"id":"35234","type":"Grid"},{"attributes":{},"id":"35261","type":"Selection"},{"attributes":{"below":[{"id":"35225","type":"LinearAxis"}],"left":[{"id":"35230","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"35225","type":"LinearAxis"},{"id":"35229","type":"Grid"},{"id":"35230","type":"LinearAxis"},{"id":"35234","type":"Grid"},{"id":"35243","type":"BoxAnnotation"},{"id":"35253","type":"GlyphRenderer"}],"title":{"id":"35214","type":"Title"},"toolbar":{"id":"35241","type":"Toolbar"},"x_range":{"id":"35217","type":"DataRange1d"},"x_scale":{"id":"35221","type":"LinearScale"},"y_range":{"id":"35219","type":"DataRange1d"},"y_scale":{"id":"35223","type":"LinearScale"}},"id":"35215","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35236","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"35217","type":"DataRange1d"},{"attributes":{"plot":{"id":"35215","subtype":"Figure","type":"Plot"},"ticker":{"id":"35226","type":"BasicTicker"}},"id":"35229","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"35261","type":"Selection"},"selection_policy":{"id":"35262","type":"UnionRenderers"}},"id":"35250","type":"ColumnDataSource"},{"attributes":{},"id":"35240","type":"HelpTool"},{"attributes":{"overlay":{"id":"35243","type":"BoxAnnotation"}},"id":"35237","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"caliber","text_color":{"value":"#5B5B5B"},"text_font":"Calibri Light","text_font_size":{"value":"1.25em"},"text_font_style":"bold"},"id":"35214","type":"Title"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35251","type":"Line"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#5B5B5B"},"axis_label_text_font":"Calibri Light","axis_label_text_font_size":{"value":"1.15em"},"axis_label_text_font_style":"bold","axis_line_alpha":{"value":25},"axis_line_color":{"value":"#5B5B5B"},"formatter":{"id":"35256","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#5B5B5B"},"major_label_text_font":"Calibri Light","major_label_text_font_size":{"value":"0.95em"},"major_label_text_font_style":"bold","major_tick_in":0,"major_tick_line_alpha":{"value":25},"major_tick_line_color":{"value":"#5B5B5B"},"major_tick_out":3,"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#5B5B5B"},"plot":{"id":"35215","subtype":"Figure","type":"Plot"},"ticker":{"id":"35231","type":"BasicTicker"}},"id":"35230","type":"LinearAxis"},{"attributes":{},"id":"35239","type":"ResetTool"},{"attributes":{},"id":"35258","type":"BasicTickFormatter"},{"attributes":{},"id":"35221","type":"LinearScale"},{"attributes":{},"id":"35238","type":"SaveTool"},{"attributes":{},"id":"35262","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35252","type":"Line"},{"attributes":{},"id":"35223","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35243","type":"BoxAnnotation"},{"attributes":{},"id":"35231","type":"BasicTicker"},{"attributes":{},"id":"35226","type":"BasicTicker"},{"attributes":{},"id":"35235","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35235","type":"PanTool"},{"id":"35236","type":"WheelZoomTool"},{"id":"35237","type":"BoxZoomTool"},{"id":"35238","type":"SaveTool"},{"id":"35239","type":"ResetTool"},{"id":"35240","type":"HelpTool"}]},"id":"35241","type":"Toolbar"},{"attributes":{"data_source":{"id":"35250","type":"ColumnDataSource"},"glyph":{"id":"35251","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35252","type":"Line"},"selection_glyph":null,"view":{"id":"35254","type":"CDSView"}},"id":"35253","type":"GlyphRenderer"},{"attributes":{"source":{"id":"35250","type":"ColumnDataSource"}},"id":"35254","type":"CDSView"}],"root_ids":["35215"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"e69449d7-70e3-45a8-a59f-720dbfc4e19f","roots":{"35215":"39556706-1337-421a-90c6-c00586ffe379"}}];
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