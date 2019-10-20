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
      };var element = document.getElementById("62802904-c8e4-405c-9bf2-532910cab605");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '62802904-c8e4-405c-9bf2-532910cab605' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1fd58ed3-36ad-4a92-a004-ba1b3f2ec13d":{"roots":{"references":[{"attributes":{"text":"light_minimal","text_color":{"value":"#5B5B5B"},"text_font":"Calibri Light","text_font_size":{"value":"1.25em"},"text_font_style":"bold"},"id":"17005","type":"Title"},{"attributes":{},"id":"17049","type":"Selection"},{"attributes":{},"id":"17025","type":"PanTool"},{"attributes":{},"id":"17026","type":"WheelZoomTool"},{"attributes":{},"id":"17013","type":"LinearScale"},{"attributes":{"source":{"id":"17038","type":"ColumnDataSource"}},"id":"17042","type":"CDSView"},{"attributes":{"data_source":{"id":"17038","type":"ColumnDataSource"},"glyph":{"id":"17039","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17040","type":"Line"},"selection_glyph":null,"view":{"id":"17042","type":"CDSView"}},"id":"17041","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17039","type":"Line"},{"attributes":{},"id":"17016","type":"BasicTicker"},{"attributes":{"ticker":{"id":"17016","type":"BasicTicker"}},"id":"17019","type":"Grid"},{"attributes":{"callback":null},"id":"17009","type":"DataRange1d"},{"attributes":{},"id":"17029","type":"ResetTool"},{"attributes":{},"id":"17030","type":"HelpTool"},{"attributes":{},"id":"17028","type":"SaveTool"},{"attributes":{},"id":"17047","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"17015","type":"LinearAxis"}],"center":[{"id":"17019","type":"Grid"},{"id":"17024","type":"Grid"}],"left":[{"id":"17020","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17041","type":"GlyphRenderer"}],"title":{"id":"17005","type":"Title"},"toolbar":{"id":"17031","type":"Toolbar"},"x_range":{"id":"17007","type":"DataRange1d"},"x_scale":{"id":"17011","type":"LinearScale"},"y_range":{"id":"17009","type":"DataRange1d"},"y_scale":{"id":"17013","type":"LinearScale"}},"id":"17004","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17048","type":"UnionRenderers"},{"attributes":{},"id":"17045","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"17050","type":"BoxAnnotation"}},"id":"17027","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17040","type":"Line"},{"attributes":{},"id":"17011","type":"LinearScale"},{"attributes":{},"id":"17021","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17025","type":"PanTool"},{"id":"17026","type":"WheelZoomTool"},{"id":"17027","type":"BoxZoomTool"},{"id":"17028","type":"SaveTool"},{"id":"17029","type":"ResetTool"},{"id":"17030","type":"HelpTool"}]},"id":"17031","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17050","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"17007","type":"DataRange1d"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#5B5B5B"},"axis_label_text_font":"Calibri Light","axis_label_text_font_size":{"value":"1.15em"},"axis_label_text_font_style":"bold","axis_line_alpha":{"value":25},"axis_line_color":{"value":"#5B5B5B"},"formatter":{"id":"17047","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#5B5B5B"},"major_label_text_font":"Calibri Light","major_label_text_font_size":{"value":"0.95em"},"major_label_text_font_style":"bold","major_tick_in":0,"major_tick_line_alpha":{"value":25},"major_tick_line_color":{"value":"#5B5B5B"},"major_tick_out":3,"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#5B5B5B"},"ticker":{"id":"17016","type":"BasicTicker"}},"id":"17015","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"17049","type":"Selection"},"selection_policy":{"id":"17048","type":"UnionRenderers"}},"id":"17038","type":"ColumnDataSource"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#5B5B5B"},"axis_label_text_font":"Calibri Light","axis_label_text_font_size":{"value":"1.15em"},"axis_label_text_font_style":"bold","axis_line_alpha":{"value":25},"axis_line_color":{"value":"#5B5B5B"},"formatter":{"id":"17045","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#5B5B5B"},"major_label_text_font":"Calibri Light","major_label_text_font_size":{"value":"0.95em"},"major_label_text_font_style":"bold","major_tick_in":0,"major_tick_line_alpha":{"value":25},"major_tick_line_color":{"value":"#5B5B5B"},"major_tick_out":3,"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#5B5B5B"},"ticker":{"id":"17021","type":"BasicTicker"}},"id":"17020","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"17021","type":"BasicTicker"}},"id":"17024","type":"Grid"}],"root_ids":["17004"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"1fd58ed3-36ad-4a92-a004-ba1b3f2ec13d","roots":{"17004":"62802904-c8e4-405c-9bf2-532910cab605"}}];
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