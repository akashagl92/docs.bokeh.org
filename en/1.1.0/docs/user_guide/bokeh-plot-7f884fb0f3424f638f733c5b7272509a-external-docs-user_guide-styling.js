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
      };var element = document.getElementById("8ed56f15-7899-465a-9d61-9ae8e46bc692");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8ed56f15-7899-465a-9d61-9ae8e46bc692' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
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
                    
                  var docs_json = '{"db1d64bc-c4cc-4907-b748-3fc25fc046e4":{"roots":{"references":[{"attributes":{},"id":"31903","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"31871","type":"BasicTicker"}},"id":"31874","type":"Grid"},{"attributes":{},"id":"31883","type":"SaveTool"},{"attributes":{},"id":"31868","type":"LinearScale"},{"attributes":{"formatter":{"id":"31900","type":"BasicTickFormatter"},"ticker":{"id":"31876","type":"BasicTicker"}},"id":"31875","type":"LinearAxis"},{"attributes":{},"id":"31902","type":"BasicTickFormatter"},{"attributes":{},"id":"31904","type":"Selection"},{"attributes":{},"id":"31871","type":"BasicTicker"},{"attributes":{},"id":"31866","type":"LinearScale"},{"attributes":{"below":[{"id":"31870","type":"LinearAxis"}],"center":[{"id":"31874","type":"Grid"},{"id":"31879","type":"Grid"}],"left":[{"id":"31875","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"31896","type":"GlyphRenderer"}],"title":{"id":"31860","type":"Title"},"toolbar":{"id":"31886","type":"Toolbar"},"x_range":{"id":"31862","type":"DataRange1d"},"x_scale":{"id":"31866","type":"LinearScale"},"y_range":{"id":"31864","type":"DataRange1d"},"y_scale":{"id":"31868","type":"LinearScale"}},"id":"31859","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"31905","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"31876","type":"BasicTicker"}},"id":"31879","type":"Grid"},{"attributes":{},"id":"31885","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"31880","type":"PanTool"},{"id":"31881","type":"WheelZoomTool"},{"id":"31882","type":"BoxZoomTool"},{"id":"31883","type":"SaveTool"},{"id":"31884","type":"ResetTool"},{"id":"31885","type":"HelpTool"}]},"id":"31886","type":"Toolbar"},{"attributes":{},"id":"31876","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"31904","type":"Selection"},"selection_policy":{"id":"31903","type":"UnionRenderers"}},"id":"31893","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"31895","type":"Circle"},{"attributes":{"text":"Some Title","text_color":{"value":"olive"},"text_font":"times","text_font_style":"italic"},"id":"31860","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"31894","type":"Circle"},{"attributes":{"source":{"id":"31893","type":"ColumnDataSource"}},"id":"31897","type":"CDSView"},{"attributes":{"callback":null},"id":"31862","type":"DataRange1d"},{"attributes":{"data_source":{"id":"31893","type":"ColumnDataSource"},"glyph":{"id":"31894","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31895","type":"Circle"},"selection_glyph":null,"view":{"id":"31897","type":"CDSView"}},"id":"31896","type":"GlyphRenderer"},{"attributes":{},"id":"31880","type":"PanTool"},{"attributes":{"callback":null},"id":"31864","type":"DataRange1d"},{"attributes":{},"id":"31900","type":"BasicTickFormatter"},{"attributes":{},"id":"31881","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"31905","type":"BoxAnnotation"}},"id":"31882","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"31902","type":"BasicTickFormatter"},"ticker":{"id":"31871","type":"BasicTicker"}},"id":"31870","type":"LinearAxis"},{"attributes":{},"id":"31884","type":"ResetTool"}],"root_ids":["31859"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"db1d64bc-c4cc-4907-b748-3fc25fc046e4","roots":{"31859":"8ed56f15-7899-465a-9d61-9ae8e46bc692"}}];
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