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
      };var element = document.getElementById("75df1682-9b52-48d1-87a5-e3070bb4d415");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '75df1682-9b52-48d1-87a5-e3070bb4d415' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"bfea9f82-3a33-4d5e-885b-b0a9969e05e7":{"roots":{"references":[{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"x"},"y1":{"expr":{"id":"28948","type":"Stack"}},"y2":{"expr":{"id":"28949","type":"Stack"}}},"id":"28957","type":"VArea"},{"attributes":{},"id":"28938","type":"HelpTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"x"},"y1":{"expr":{"id":"28946","type":"Stack"}},"y2":{"expr":{"id":"28947","type":"Stack"}}},"id":"28952","type":"VArea"},{"attributes":{"formatter":{"id":"28965","type":"BasicTickFormatter"},"ticker":{"id":"28929","type":"BasicTicker"}},"id":"28928","type":"LinearAxis"},{"attributes":{"data_source":{"id":"28913","type":"ColumnDataSource"},"glyph":{"id":"28951","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y1","nonselection_glyph":{"id":"28952","type":"VArea"},"selection_glyph":null,"view":{"id":"28954","type":"CDSView"}},"id":"28953","type":"GlyphRenderer"},{"attributes":{},"id":"28929","type":"BasicTicker"},{"attributes":{"source":{"id":"28913","type":"ColumnDataSource"}},"id":"28954","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"28929","type":"BasicTicker"}},"id":"28932","type":"Grid"},{"attributes":{"below":[{"id":"28923","type":"LinearAxis"}],"center":[{"id":"28927","type":"Grid"},{"id":"28932","type":"Grid"}],"left":[{"id":"28928","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28953","type":"GlyphRenderer"},{"id":"28958","type":"GlyphRenderer"}],"title":{"id":"28961","type":"Title"},"toolbar":{"id":"28939","type":"Toolbar"},"x_range":{"id":"28915","type":"DataRange1d"},"x_scale":{"id":"28919","type":"LinearScale"},"y_range":{"id":"28917","type":"DataRange1d"},"y_scale":{"id":"28921","type":"LinearScale"}},"id":"28914","subtype":"Figure","type":"Plot"},{"attributes":{"fields":["y1"]},"id":"28947","type":"Stack"},{"attributes":{"source":{"id":"28913","type":"ColumnDataSource"}},"id":"28959","type":"CDSView"},{"attributes":{"fields":[]},"id":"28946","type":"Stack"},{"attributes":{"text":""},"id":"28961","type":"Title"},{"attributes":{},"id":"28924","type":"BasicTicker"},{"attributes":{},"id":"28933","type":"PanTool"},{"attributes":{},"id":"28934","type":"WheelZoomTool"},{"attributes":{},"id":"28963","type":"BasicTickFormatter"},{"attributes":{},"id":"28919","type":"LinearScale"},{"attributes":{"overlay":{"id":"28966","type":"BoxAnnotation"}},"id":"28935","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y1":[1,2,4,3,4],"y2":[1,4,2,2,3]},"selected":{"id":"28968","type":"Selection"},"selection_policy":{"id":"28967","type":"UnionRenderers"}},"id":"28913","type":"ColumnDataSource"},{"attributes":{},"id":"28965","type":"BasicTickFormatter"},{"attributes":{},"id":"28936","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28966","type":"BoxAnnotation"},{"attributes":{},"id":"28937","type":"ResetTool"},{"attributes":{},"id":"28967","type":"UnionRenderers"},{"attributes":{},"id":"28968","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28933","type":"PanTool"},{"id":"28934","type":"WheelZoomTool"},{"id":"28935","type":"BoxZoomTool"},{"id":"28936","type":"SaveTool"},{"id":"28937","type":"ResetTool"},{"id":"28938","type":"HelpTool"}]},"id":"28939","type":"Toolbar"},{"attributes":{"ticker":{"id":"28924","type":"BasicTicker"}},"id":"28927","type":"Grid"},{"attributes":{"fields":["y1"]},"id":"28948","type":"Stack"},{"attributes":{"fields":["y1","y2"]},"id":"28949","type":"Stack"},{"attributes":{"fill_color":"grey","x":{"field":"x"},"y1":{"expr":{"id":"28946","type":"Stack"}},"y2":{"expr":{"id":"28947","type":"Stack"}}},"id":"28951","type":"VArea"},{"attributes":{"callback":null},"id":"28917","type":"DataRange1d"},{"attributes":{"formatter":{"id":"28963","type":"BasicTickFormatter"},"ticker":{"id":"28924","type":"BasicTicker"}},"id":"28923","type":"LinearAxis"},{"attributes":{"data_source":{"id":"28913","type":"ColumnDataSource"},"glyph":{"id":"28956","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y2","nonselection_glyph":{"id":"28957","type":"VArea"},"selection_glyph":null,"view":{"id":"28959","type":"CDSView"}},"id":"28958","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"28915","type":"DataRange1d"},{"attributes":{"fill_color":"lightgrey","x":{"field":"x"},"y1":{"expr":{"id":"28948","type":"Stack"}},"y2":{"expr":{"id":"28949","type":"Stack"}}},"id":"28956","type":"VArea"},{"attributes":{},"id":"28921","type":"LinearScale"}],"root_ids":["28914"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"bfea9f82-3a33-4d5e-885b-b0a9969e05e7","roots":{"28914":"75df1682-9b52-48d1-87a5-e3070bb4d415"}}];
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