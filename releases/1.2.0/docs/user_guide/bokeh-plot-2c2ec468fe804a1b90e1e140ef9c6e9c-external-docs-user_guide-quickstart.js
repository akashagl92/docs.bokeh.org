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
      };var element = document.getElementById("ca3202f7-584e-45b9-a725-4b076352bed7");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'ca3202f7-584e-45b9-a725-4b076352bed7' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"0d6b5490-48d2-4ad2-9142-d804609474c6":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30967","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"30967","type":"BoxAnnotation"}},"id":"30946","type":"BoxZoomTool"},{"attributes":{},"id":"30935","type":"BasicTicker"},{"attributes":{"below":[{"id":"30934","type":"LinearAxis"}],"center":[{"id":"30938","type":"Grid"},{"id":"30943","type":"Grid"},{"id":"30968","type":"Legend"}],"left":[{"id":"30939","type":"LinearAxis"}],"renderers":[{"id":"30960","type":"GlyphRenderer"}],"title":{"id":"30924","type":"Title"},"toolbar":{"id":"30950","type":"Toolbar"},"x_range":{"id":"30926","type":"DataRange1d"},"x_scale":{"id":"30930","type":"LinearScale"},"y_range":{"id":"30928","type":"DataRange1d"},"y_scale":{"id":"30932","type":"LinearScale"}},"id":"30923","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30944","type":"PanTool"},{"id":"30945","type":"WheelZoomTool"},{"id":"30946","type":"BoxZoomTool"},{"id":"30947","type":"SaveTool"},{"id":"30948","type":"ResetTool"},{"id":"30949","type":"HelpTool"}]},"id":"30950","type":"Toolbar"},{"attributes":{"items":[{"id":"30969","type":"LegendItem"}]},"id":"30968","type":"Legend"},{"attributes":{"ticker":{"id":"30935","type":"BasicTicker"}},"id":"30938","type":"Grid"},{"attributes":{"label":{"value":"Temp."},"renderers":[{"id":"30960","type":"GlyphRenderer"}]},"id":"30969","type":"LegendItem"},{"attributes":{},"id":"30949","type":"HelpTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30959","type":"Line"},{"attributes":{},"id":"30940","type":"BasicTicker"},{"attributes":{"text":"simple line example"},"id":"30924","type":"Title"},{"attributes":{},"id":"30947","type":"SaveTool"},{"attributes":{"dimension":1,"ticker":{"id":"30940","type":"BasicTicker"}},"id":"30943","type":"Grid"},{"attributes":{},"id":"30976","type":"UnionRenderers"},{"attributes":{},"id":"30932","type":"LinearScale"},{"attributes":{},"id":"30948","type":"ResetTool"},{"attributes":{"callback":null},"id":"30926","type":"DataRange1d"},{"attributes":{},"id":"30963","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"30928","type":"DataRange1d"},{"attributes":{"source":{"id":"30957","type":"ColumnDataSource"}},"id":"30961","type":"CDSView"},{"attributes":{},"id":"30945","type":"WheelZoomTool"},{"attributes":{},"id":"30975","type":"Selection"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"30958","type":"Line"},{"attributes":{},"id":"30930","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"30975","type":"Selection"},"selection_policy":{"id":"30976","type":"UnionRenderers"}},"id":"30957","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"30957","type":"ColumnDataSource"},"glyph":{"id":"30958","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30959","type":"Line"},"selection_glyph":null,"view":{"id":"30961","type":"CDSView"}},"id":"30960","type":"GlyphRenderer"},{"attributes":{"axis_label":"y","formatter":{"id":"30963","type":"BasicTickFormatter"},"ticker":{"id":"30940","type":"BasicTicker"}},"id":"30939","type":"LinearAxis"},{"attributes":{},"id":"30965","type":"BasicTickFormatter"},{"attributes":{},"id":"30944","type":"PanTool"},{"attributes":{"axis_label":"x","formatter":{"id":"30965","type":"BasicTickFormatter"},"ticker":{"id":"30935","type":"BasicTicker"}},"id":"30934","type":"LinearAxis"}],"root_ids":["30923"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"0d6b5490-48d2-4ad2-9142-d804609474c6","roots":{"30923":"ca3202f7-584e-45b9-a725-4b076352bed7"}}];
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