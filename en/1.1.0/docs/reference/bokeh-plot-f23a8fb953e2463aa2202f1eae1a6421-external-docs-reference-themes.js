(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("bade180b-89c3-477f-9735-a20a79ab3021");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'bade180b-89c3-477f-9735-a20a79ab3021' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"a4daa301-aafa-41a9-b66d-dad05c7363c5":{"roots":{"references":[{"attributes":{},"id":"16931","type":"LinearScale"},{"attributes":{},"id":"16945","type":"PanTool"},{"attributes":{"overlay":{"id":"16970","type":"BoxAnnotation"}},"id":"16947","type":"BoxZoomTool"},{"attributes":{},"id":"16969","type":"Selection"},{"attributes":{},"id":"16941","type":"BasicTicker"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#E0E0E0"},"axis_label_text_font":"Helvetica","axis_label_text_font_size":{"value":"1.25em"},"axis_label_text_font_style":"normal","axis_line_alpha":{"value":0},"axis_line_color":{"value":"#E0E0E0"},"formatter":{"id":"16965","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#E0E0E0"},"major_label_text_font":"Helvetica","major_label_text_font_size":{"value":"1.025em"},"major_tick_line_alpha":{"value":0},"major_tick_line_color":{"value":"#E0E0E0"},"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#E0E0E0"},"ticker":{"id":"16941","type":"BasicTicker"}},"id":"16940","type":"LinearAxis"},{"attributes":{"callback":null},"id":"16929","type":"DataRange1d"},{"attributes":{"background_fill_color":{"value":"#20262B"},"below":[{"id":"16935","type":"LinearAxis"}],"border_fill_color":{"value":"#15191C"},"center":[{"id":"16939","type":"Grid"},{"id":"16944","type":"Grid"}],"left":[{"id":"16940","type":"LinearAxis"}],"outline_line_alpha":{"value":0.25},"outline_line_color":{"value":"#E0E0E0"},"plot_height":300,"plot_width":300,"renderers":[{"id":"16961","type":"GlyphRenderer"}],"title":{"id":"16925","type":"Title"},"toolbar":{"id":"16951","type":"Toolbar"},"x_range":{"id":"16927","type":"DataRange1d"},"x_scale":{"id":"16931","type":"LinearScale"},"y_range":{"id":"16929","type":"DataRange1d"},"y_scale":{"id":"16933","type":"LinearScale"}},"id":"16924","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"16968","type":"UnionRenderers"},{"attributes":{"source":{"id":"16958","type":"ColumnDataSource"}},"id":"16962","type":"CDSView"},{"attributes":{},"id":"16936","type":"BasicTicker"},{"attributes":{},"id":"16965","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"16958","type":"ColumnDataSource"},"glyph":{"id":"16959","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16960","type":"Line"},"selection_glyph":null,"view":{"id":"16962","type":"CDSView"}},"id":"16961","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.25},"grid_line_color":{"value":"#E0E0E0"},"ticker":{"id":"16941","type":"BasicTicker"}},"id":"16944","type":"Grid"},{"attributes":{"grid_line_alpha":{"value":0.25},"grid_line_color":{"value":"#E0E0E0"},"ticker":{"id":"16936","type":"BasicTicker"}},"id":"16939","type":"Grid"},{"attributes":{},"id":"16946","type":"WheelZoomTool"},{"attributes":{},"id":"16948","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16970","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16945","type":"PanTool"},{"id":"16946","type":"WheelZoomTool"},{"id":"16947","type":"BoxZoomTool"},{"id":"16948","type":"SaveTool"},{"id":"16949","type":"ResetTool"},{"id":"16950","type":"HelpTool"}]},"id":"16951","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"16969","type":"Selection"},"selection_policy":{"id":"16968","type":"UnionRenderers"}},"id":"16958","type":"ColumnDataSource"},{"attributes":{"text":"dark_minimal","text_color":{"value":"#E0E0E0"},"text_font":"Helvetica","text_font_size":{"value":"1.15em"}},"id":"16925","type":"Title"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"16959","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"16960","type":"Line"},{"attributes":{},"id":"16967","type":"BasicTickFormatter"},{"attributes":{},"id":"16950","type":"HelpTool"},{"attributes":{},"id":"16933","type":"LinearScale"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#E0E0E0"},"axis_label_text_font":"Helvetica","axis_label_text_font_size":{"value":"1.25em"},"axis_label_text_font_style":"normal","axis_line_alpha":{"value":0},"axis_line_color":{"value":"#E0E0E0"},"formatter":{"id":"16967","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#E0E0E0"},"major_label_text_font":"Helvetica","major_label_text_font_size":{"value":"1.025em"},"major_tick_line_alpha":{"value":0},"major_tick_line_color":{"value":"#E0E0E0"},"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#E0E0E0"},"ticker":{"id":"16936","type":"BasicTicker"}},"id":"16935","type":"LinearAxis"},{"attributes":{"callback":null},"id":"16927","type":"DataRange1d"},{"attributes":{},"id":"16949","type":"ResetTool"}],"root_ids":["16924"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"a4daa301-aafa-41a9-b66d-dad05c7363c5","roots":{"16924":"bade180b-89c3-477f-9735-a20a79ab3021"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();