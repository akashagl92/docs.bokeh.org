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
      };var element = document.getElementById("3846f467-d805-4dd6-89c1-189c05b79728");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3846f467-d805-4dd6-89c1-189c05b79728' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"dcbe570a-d0f2-455d-aeae-9f4a1e338ac4":{"roots":{"references":[{"attributes":{},"id":"35252","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"35210","type":"DataRange1d"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#5B5B5B"},"axis_label_text_font":"Calibri Light","axis_label_text_font_size":{"value":"1.15em"},"axis_label_text_font_style":"bold","axis_line_alpha":{"value":25},"axis_line_color":{"value":"#5B5B5B"},"formatter":{"id":"35250","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#5B5B5B"},"major_label_text_font":"Calibri Light","major_label_text_font_size":{"value":"0.95em"},"major_label_text_font_style":"bold","major_tick_in":0,"major_tick_line_alpha":{"value":25},"major_tick_line_color":{"value":"#5B5B5B"},"major_tick_out":3,"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#5B5B5B"},"plot":{"id":"35208","subtype":"Figure","type":"Plot"},"ticker":{"id":"35219","type":"BasicTicker"}},"id":"35218","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35236","type":"BoxAnnotation"},{"attributes":{},"id":"35231","type":"SaveTool"},{"attributes":{},"id":"35255","type":"Selection"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#5B5B5B"},"axis_label_text_font":"Calibri Light","axis_label_text_font_size":{"value":"1.15em"},"axis_label_text_font_style":"bold","axis_line_alpha":{"value":25},"axis_line_color":{"value":"#5B5B5B"},"formatter":{"id":"35252","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#5B5B5B"},"major_label_text_font":"Calibri Light","major_label_text_font_size":{"value":"0.95em"},"major_label_text_font_style":"bold","major_tick_in":0,"major_tick_line_alpha":{"value":25},"major_tick_line_color":{"value":"#5B5B5B"},"major_tick_out":3,"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#5B5B5B"},"plot":{"id":"35208","subtype":"Figure","type":"Plot"},"ticker":{"id":"35224","type":"BasicTicker"}},"id":"35223","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35228","type":"PanTool"},{"id":"35229","type":"WheelZoomTool"},{"id":"35230","type":"BoxZoomTool"},{"id":"35231","type":"SaveTool"},{"id":"35232","type":"ResetTool"},{"id":"35233","type":"HelpTool"}]},"id":"35234","type":"Toolbar"},{"attributes":{},"id":"35214","type":"LinearScale"},{"attributes":{"source":{"id":"35243","type":"ColumnDataSource"}},"id":"35247","type":"CDSView"},{"attributes":{},"id":"35216","type":"LinearScale"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35244","type":"Line"},{"attributes":{},"id":"35228","type":"PanTool"},{"attributes":{"data_source":{"id":"35243","type":"ColumnDataSource"},"glyph":{"id":"35244","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35245","type":"Line"},"selection_glyph":null,"view":{"id":"35247","type":"CDSView"}},"id":"35246","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"35245","type":"Line"},{"attributes":{},"id":"35250","type":"BasicTickFormatter"},{"attributes":{},"id":"35233","type":"HelpTool"},{"attributes":{"callback":null},"id":"35212","type":"DataRange1d"},{"attributes":{"below":[{"id":"35218","type":"LinearAxis"}],"left":[{"id":"35223","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"35218","type":"LinearAxis"},{"id":"35222","type":"Grid"},{"id":"35223","type":"LinearAxis"},{"id":"35227","type":"Grid"},{"id":"35236","type":"BoxAnnotation"},{"id":"35246","type":"GlyphRenderer"}],"title":{"id":"35207","type":"Title"},"toolbar":{"id":"35234","type":"Toolbar"},"x_range":{"id":"35210","type":"DataRange1d"},"x_scale":{"id":"35214","type":"LinearScale"},"y_range":{"id":"35212","type":"DataRange1d"},"y_scale":{"id":"35216","type":"LinearScale"}},"id":"35208","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"35208","subtype":"Figure","type":"Plot"},"ticker":{"id":"35219","type":"BasicTicker"}},"id":"35222","type":"Grid"},{"attributes":{},"id":"35254","type":"UnionRenderers"},{"attributes":{},"id":"35229","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":"caliber","text_color":{"value":"#5B5B5B"},"text_font":"Calibri Light","text_font_size":{"value":"1.25em"},"text_font_style":"bold"},"id":"35207","type":"Title"},{"attributes":{},"id":"35219","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"35208","subtype":"Figure","type":"Plot"},"ticker":{"id":"35224","type":"BasicTicker"}},"id":"35227","type":"Grid"},{"attributes":{},"id":"35224","type":"BasicTicker"},{"attributes":{},"id":"35232","type":"ResetTool"},{"attributes":{"overlay":{"id":"35236","type":"BoxAnnotation"}},"id":"35230","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"35255","type":"Selection"},"selection_policy":{"id":"35254","type":"UnionRenderers"}},"id":"35243","type":"ColumnDataSource"}],"root_ids":["35208"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"dcbe570a-d0f2-455d-aeae-9f4a1e338ac4","roots":{"35208":"3846f467-d805-4dd6-89c1-189c05b79728"}}];
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