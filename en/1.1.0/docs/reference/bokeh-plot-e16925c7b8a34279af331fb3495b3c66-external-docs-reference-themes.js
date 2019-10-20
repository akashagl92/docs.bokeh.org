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
      };var element = document.getElementById("d8203219-efb6-45b5-a5d7-abd36fda98cc");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd8203219-efb6-45b5-a5d7-abd36fda98cc' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ae6e180a-ae88-4864-82ad-56d65381dd40":{"roots":{"references":[{"attributes":{"data_source":{"id":"16878","type":"ColumnDataSource"},"glyph":{"id":"16879","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16880","type":"Line"},"selection_glyph":null,"view":{"id":"16882","type":"CDSView"}},"id":"16881","type":"GlyphRenderer"},{"attributes":{},"id":"16851","type":"LinearScale"},{"attributes":{"source":{"id":"16878","type":"ColumnDataSource"}},"id":"16882","type":"CDSView"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#5B5B5B"},"axis_label_text_font":"Calibri Light","axis_label_text_font_size":{"value":"1.15em"},"axis_label_text_font_style":"bold","axis_line_alpha":{"value":25},"axis_line_color":{"value":"#5B5B5B"},"formatter":{"id":"16885","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#5B5B5B"},"major_label_text_font":"Calibri Light","major_label_text_font_size":{"value":"0.95em"},"major_label_text_font_style":"bold","major_tick_in":0,"major_tick_line_alpha":{"value":25},"major_tick_line_color":{"value":"#5B5B5B"},"major_tick_out":3,"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#5B5B5B"},"ticker":{"id":"16861","type":"BasicTicker"}},"id":"16860","type":"LinearAxis"},{"attributes":{"callback":null},"id":"16847","type":"DataRange1d"},{"attributes":{"below":[{"id":"16855","type":"LinearAxis"}],"center":[{"id":"16859","type":"Grid"},{"id":"16864","type":"Grid"}],"left":[{"id":"16860","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16881","type":"GlyphRenderer"}],"title":{"id":"16845","type":"Title"},"toolbar":{"id":"16871","type":"Toolbar"},"x_range":{"id":"16847","type":"DataRange1d"},"x_scale":{"id":"16851","type":"LinearScale"},"y_range":{"id":"16849","type":"DataRange1d"},"y_scale":{"id":"16853","type":"LinearScale"}},"id":"16844","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"16865","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16890","type":"BoxAnnotation"},{"attributes":{"axis_label_standoff":10,"axis_label_text_color":{"value":"#5B5B5B"},"axis_label_text_font":"Calibri Light","axis_label_text_font_size":{"value":"1.15em"},"axis_label_text_font_style":"bold","axis_line_alpha":{"value":25},"axis_line_color":{"value":"#5B5B5B"},"formatter":{"id":"16887","type":"BasicTickFormatter"},"major_label_text_color":{"value":"#5B5B5B"},"major_label_text_font":"Calibri Light","major_label_text_font_size":{"value":"0.95em"},"major_label_text_font_style":"bold","major_tick_in":0,"major_tick_line_alpha":{"value":25},"major_tick_line_color":{"value":"#5B5B5B"},"major_tick_out":3,"minor_tick_line_alpha":{"value":0},"minor_tick_line_color":{"value":"#5B5B5B"},"ticker":{"id":"16856","type":"BasicTicker"}},"id":"16855","type":"LinearAxis"},{"attributes":{},"id":"16889","type":"Selection"},{"attributes":{},"id":"16870","type":"HelpTool"},{"attributes":{"overlay":{"id":"16890","type":"BoxAnnotation"}},"id":"16867","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"16849","type":"DataRange1d"},{"attributes":{"text":"caliber","text_color":{"value":"#5B5B5B"},"text_font":"Calibri Light","text_font_size":{"value":"1.25em"},"text_font_style":"bold"},"id":"16845","type":"Title"},{"attributes":{},"id":"16888","type":"UnionRenderers"},{"attributes":{},"id":"16868","type":"SaveTool"},{"attributes":{},"id":"16869","type":"ResetTool"},{"attributes":{},"id":"16866","type":"WheelZoomTool"},{"attributes":{},"id":"16856","type":"BasicTicker"},{"attributes":{},"id":"16861","type":"BasicTicker"},{"attributes":{},"id":"16853","type":"LinearScale"},{"attributes":{},"id":"16887","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"16880","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16865","type":"PanTool"},{"id":"16866","type":"WheelZoomTool"},{"id":"16867","type":"BoxZoomTool"},{"id":"16868","type":"SaveTool"},{"id":"16869","type":"ResetTool"},{"id":"16870","type":"HelpTool"}]},"id":"16871","type":"Toolbar"},{"attributes":{},"id":"16885","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"16861","type":"BasicTicker"}},"id":"16864","type":"Grid"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"16879","type":"Line"},{"attributes":{"ticker":{"id":"16856","type":"BasicTicker"}},"id":"16859","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"16889","type":"Selection"},"selection_policy":{"id":"16888","type":"UnionRenderers"}},"id":"16878","type":"ColumnDataSource"}],"root_ids":["16844"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"ae6e180a-ae88-4864-82ad-56d65381dd40","roots":{"16844":"d8203219-efb6-45b5-a5d7-abd36fda98cc"}}];
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