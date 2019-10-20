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
      };var element = document.getElementById("286093d5-cfca-4017-90f1-7023f992d38e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '286093d5-cfca-4017-90f1-7023f992d38e' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"360a9a9a-b464-4dfd-b4eb-80d236e49aa8":{"roots":{"references":[{"attributes":{},"id":"17835","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17825","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17833","type":"BoxAnnotation"},{"attributes":{},"id":"17811","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"17801","type":"BasicTicker"}},"id":"17804","type":"Grid"},{"attributes":{},"id":"17813","type":"SaveTool"},{"attributes":{"callback":null},"id":"17792","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"17806","type":"BasicTicker"}},"id":"17809","type":"Grid"},{"attributes":{},"id":"17796","type":"LinearScale"},{"attributes":{"source":{"id":"17823","type":"ColumnDataSource"}},"id":"17827","type":"CDSView"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17824","type":"Line"},{"attributes":{"text":"light_minimal","text_color":{"value":"#5B5B5B"},"text_font":"Calibri Light","text_font_size":{"value":"1.25em"},"text_font_style":"bold"},"id":"17790","type":"Title"},{"attributes":{},"id":"17810","type":"PanTool"},{"attributes":{},"id":"17798","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17810","type":"PanTool"},{"id":"17811","type":"WheelZoomTool"},{"id":"17812","type":"BoxZoomTool"},{"id":"17813","type":"SaveTool"},{"id":"17814","type":"ResetTool"},{"id":"17815","type":"HelpTool"}]},"id":"17816","type":"Toolbar"},{"attributes":{},"id":"17815","type":"HelpTool"},{"attributes":{"overlay":{"id":"17833","type":"BoxAnnotation"}},"id":"17812","type":"BoxZoomTool"},{"attributes":{},"id":"17801","type":"BasicTicker"},{"attributes":{"below":[{"id":"17800","type":"LinearAxis"}],"center":[{"id":"17804","type":"Grid"},{"id":"17809","type":"Grid"}],"left":[{"id":"17805","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17826","type":"GlyphRenderer"}],"title":{"id":"17790","type":"Title"},"toolbar":{"id":"17816","type":"Toolbar"},"x_range":{"id":"17792","type":"DataRange1d"},"x_scale":{"id":"17796","type":"LinearScale"},"y_range":{"id":"17794","type":"DataRange1d"},"y_scale":{"id":"17798","type":"LinearScale"}},"id":"17789","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17814","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"17834","type":"Selection"},"selection_policy":{"id":"17835","type":"UnionRenderers"}},"id":"17823","type":"ColumnDataSource"},{"attributes":{},"id":"17834","type":"Selection"},{"attributes":{},"id":"17829","type":"BasicTickFormatter"},{"attributes":{},"id":"17831","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"17823","type":"ColumnDataSource"},"glyph":{"id":"17824","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17825","type":"Line"},"selection_glyph":null,"view":{"id":"17827","type":"CDSView"}},"id":"17826","type":"GlyphRenderer"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#5B5B5B"},"axis_label_text_font":"Calibri Light","axis_label_text_font_size":{"value":"1.15em"},"axis_label_text_font_style":"bold","axis_line_alpha":{"value":25},"axis_line_color":{"value":"#5B5B5B"},"formatter":{"id":"17829","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#5B5B5B"},"major_label_text_font":"Calibri Light","major_label_text_font_size":{"value":"0.95em"},"major_label_text_font_style":"bold","major_tick_in":0,"major_tick_line_alpha":{"value":25},"major_tick_line_color":{"value":"#5B5B5B"},"major_tick_out":3,"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#5B5B5B"},"ticker":{"id":"17806","type":"BasicTicker"}},"id":"17805","type":"LinearAxis"},{"attributes":{"callback":null},"id":"17794","type":"DataRange1d"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#5B5B5B"},"axis_label_text_font":"Calibri Light","axis_label_text_font_size":{"value":"1.15em"},"axis_label_text_font_style":"bold","axis_line_alpha":{"value":25},"axis_line_color":{"value":"#5B5B5B"},"formatter":{"id":"17831","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#5B5B5B"},"major_label_text_font":"Calibri Light","major_label_text_font_size":{"value":"0.95em"},"major_label_text_font_style":"bold","major_tick_in":0,"major_tick_line_alpha":{"value":25},"major_tick_line_color":{"value":"#5B5B5B"},"major_tick_out":3,"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#5B5B5B"},"ticker":{"id":"17801","type":"BasicTicker"}},"id":"17800","type":"LinearAxis"},{"attributes":{},"id":"17806","type":"BasicTicker"}],"root_ids":["17789"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"360a9a9a-b464-4dfd-b4eb-80d236e49aa8","roots":{"17789":"286093d5-cfca-4017-90f1-7023f992d38e"}}];
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