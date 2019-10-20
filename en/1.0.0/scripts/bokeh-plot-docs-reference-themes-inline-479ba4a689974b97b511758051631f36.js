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
      };var element = document.getElementById("e09a45ec-d1aa-4c64-9b4a-19e862777489");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e09a45ec-d1aa-4c64-9b4a-19e862777489' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"59de9758-3bc1-40c0-8af4-a0067a3eb32c":{"roots":{"references":[{"attributes":{},"id":"35247","type":"BasicTickFormatter"},{"attributes":{},"id":"35226","type":"WheelZoomTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35241","type":"Line"},{"attributes":{},"id":"35213","type":"LinearScale"},{"attributes":{},"id":"35252","type":"UnionRenderers"},{"attributes":{},"id":"35230","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35233","type":"BoxAnnotation"},{"attributes":{"source":{"id":"35240","type":"ColumnDataSource"}},"id":"35244","type":"CDSView"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#5B5B5B"},"axis_label_text_font":"Calibri Light","axis_label_text_font_size":{"value":"1.15em"},"axis_label_text_font_style":"bold","axis_line_alpha":{"value":25},"axis_line_color":{"value":"#5B5B5B"},"formatter":{"id":"35247","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#5B5B5B"},"major_label_text_font":"Calibri Light","major_label_text_font_size":{"value":"0.95em"},"major_label_text_font_style":"bold","major_tick_in":0,"major_tick_line_alpha":{"value":25},"major_tick_line_color":{"value":"#5B5B5B"},"major_tick_out":3,"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#5B5B5B"},"plot":{"id":"35205","subtype":"Figure","type":"Plot"},"ticker":{"id":"35216","type":"BasicTicker"}},"id":"35215","type":"LinearAxis"},{"attributes":{},"id":"35211","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"35205","subtype":"Figure","type":"Plot"},"ticker":{"id":"35221","type":"BasicTicker"}},"id":"35224","type":"Grid"},{"attributes":{"callback":null},"id":"35209","type":"DataRange1d"},{"attributes":{"below":[{"id":"35215","type":"LinearAxis"}],"left":[{"id":"35220","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"35215","type":"LinearAxis"},{"id":"35219","type":"Grid"},{"id":"35220","type":"LinearAxis"},{"id":"35224","type":"Grid"},{"id":"35233","type":"BoxAnnotation"},{"id":"35243","type":"GlyphRenderer"}],"title":{"id":"35204","type":"Title"},"toolbar":{"id":"35231","type":"Toolbar"},"x_range":{"id":"35207","type":"DataRange1d"},"x_scale":{"id":"35211","type":"LinearScale"},"y_range":{"id":"35209","type":"DataRange1d"},"y_scale":{"id":"35213","type":"LinearScale"}},"id":"35205","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"35207","type":"DataRange1d"},{"attributes":{},"id":"35249","type":"BasicTickFormatter"},{"attributes":{},"id":"35225","type":"PanTool"},{"attributes":{"plot":{"id":"35205","subtype":"Figure","type":"Plot"},"ticker":{"id":"35216","type":"BasicTicker"}},"id":"35219","type":"Grid"},{"attributes":{},"id":"35229","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35225","type":"PanTool"},{"id":"35226","type":"WheelZoomTool"},{"id":"35227","type":"BoxZoomTool"},{"id":"35228","type":"SaveTool"},{"id":"35229","type":"ResetTool"},{"id":"35230","type":"HelpTool"}]},"id":"35231","type":"Toolbar"},{"attributes":{},"id":"35221","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35242","type":"Line"},{"attributes":{},"id":"35251","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"35251","type":"Selection"},"selection_policy":{"id":"35252","type":"UnionRenderers"}},"id":"35240","type":"ColumnDataSource"},{"attributes":{},"id":"35216","type":"BasicTicker"},{"attributes":{"plot":null,"text":"caliber","text_color":{"value":"#5B5B5B"},"text_font":"Calibri Light","text_font_size":{"value":"1.25em"},"text_font_style":"bold"},"id":"35204","type":"Title"},{"attributes":{},"id":"35228","type":"SaveTool"},{"attributes":{"overlay":{"id":"35233","type":"BoxAnnotation"}},"id":"35227","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"35240","type":"ColumnDataSource"},"glyph":{"id":"35241","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35242","type":"Line"},"selection_glyph":null,"view":{"id":"35244","type":"CDSView"}},"id":"35243","type":"GlyphRenderer"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#5B5B5B"},"axis_label_text_font":"Calibri Light","axis_label_text_font_size":{"value":"1.15em"},"axis_label_text_font_style":"bold","axis_line_alpha":{"value":25},"axis_line_color":{"value":"#5B5B5B"},"formatter":{"id":"35249","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#5B5B5B"},"major_label_text_font":"Calibri Light","major_label_text_font_size":{"value":"0.95em"},"major_label_text_font_style":"bold","major_tick_in":0,"major_tick_line_alpha":{"value":25},"major_tick_line_color":{"value":"#5B5B5B"},"major_tick_out":3,"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#5B5B5B"},"plot":{"id":"35205","subtype":"Figure","type":"Plot"},"ticker":{"id":"35221","type":"BasicTicker"}},"id":"35220","type":"LinearAxis"}],"root_ids":["35205"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"59de9758-3bc1-40c0-8af4-a0067a3eb32c","roots":{"35205":"e09a45ec-d1aa-4c64-9b4a-19e862777489"}}];
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