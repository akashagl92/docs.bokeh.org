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
      };var element = document.getElementById("28e818ca-4146-4642-bd91-9ee3a6901796");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '28e818ca-4146-4642-bd91-9ee3a6901796' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.1.min.js"];
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
                    
                  var docs_json = '{"036cc335-1f80-418d-8e4f-9ac50c201cdc":{"roots":{"references":[{"attributes":{},"id":"28930","type":"BasicTicker"},{"attributes":{"data_source":{"id":"28914","type":"ColumnDataSource"},"glyph":{"id":"28957","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y2","nonselection_glyph":{"id":"28958","type":"VArea"},"selection_glyph":null,"view":{"id":"28960","type":"CDSView"}},"id":"28959","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"28930","type":"BasicTicker"}},"id":"28933","type":"Grid"},{"attributes":{"source":{"id":"28914","type":"ColumnDataSource"}},"id":"28960","type":"CDSView"},{"attributes":{"data_source":{"id":"28914","type":"ColumnDataSource"},"glyph":{"id":"28952","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y1","nonselection_glyph":{"id":"28953","type":"VArea"},"selection_glyph":null,"view":{"id":"28955","type":"CDSView"}},"id":"28954","type":"GlyphRenderer"},{"attributes":{"text":""},"id":"28962","type":"Title"},{"attributes":{"fields":["y1"]},"id":"28948","type":"Stack"},{"attributes":{"fields":[]},"id":"28947","type":"Stack"},{"attributes":{},"id":"28963","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28934","type":"PanTool"},{"id":"28935","type":"WheelZoomTool"},{"id":"28936","type":"BoxZoomTool"},{"id":"28937","type":"SaveTool"},{"id":"28938","type":"ResetTool"},{"id":"28939","type":"HelpTool"}]},"id":"28940","type":"Toolbar"},{"attributes":{},"id":"28934","type":"PanTool"},{"attributes":{},"id":"28965","type":"BasicTickFormatter"},{"attributes":{},"id":"28935","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28967","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y1":[1,2,4,3,4],"y2":[1,4,2,2,3]},"selected":{"id":"28968","type":"Selection"},"selection_policy":{"id":"28969","type":"UnionRenderers"}},"id":"28914","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"28967","type":"BoxAnnotation"}},"id":"28936","type":"BoxZoomTool"},{"attributes":{},"id":"28968","type":"Selection"},{"attributes":{},"id":"28938","type":"ResetTool"},{"attributes":{"below":[{"id":"28924","type":"LinearAxis"}],"center":[{"id":"28928","type":"Grid"},{"id":"28933","type":"Grid"}],"left":[{"id":"28929","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28954","type":"GlyphRenderer"},{"id":"28959","type":"GlyphRenderer"}],"title":{"id":"28962","type":"Title"},"toolbar":{"id":"28940","type":"Toolbar"},"x_range":{"id":"28916","type":"DataRange1d"},"x_scale":{"id":"28920","type":"LinearScale"},"y_range":{"id":"28918","type":"DataRange1d"},"y_scale":{"id":"28922","type":"LinearScale"}},"id":"28915","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"28969","type":"UnionRenderers"},{"attributes":{"fields":["y1","y2"]},"id":"28950","type":"Stack"},{"attributes":{"callback":null},"id":"28916","type":"DataRange1d"},{"attributes":{},"id":"28939","type":"HelpTool"},{"attributes":{"callback":null},"id":"28918","type":"DataRange1d"},{"attributes":{},"id":"28920","type":"LinearScale"},{"attributes":{"fields":["y1"]},"id":"28949","type":"Stack"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"x"},"y1":{"expr":{"id":"28949","type":"Stack"}},"y2":{"expr":{"id":"28950","type":"Stack"}}},"id":"28958","type":"VArea"},{"attributes":{},"id":"28922","type":"LinearScale"},{"attributes":{},"id":"28937","type":"SaveTool"},{"attributes":{"formatter":{"id":"28965","type":"BasicTickFormatter"},"ticker":{"id":"28925","type":"BasicTicker"}},"id":"28924","type":"LinearAxis"},{"attributes":{"fill_color":"lightgrey","x":{"field":"x"},"y1":{"expr":{"id":"28949","type":"Stack"}},"y2":{"expr":{"id":"28950","type":"Stack"}}},"id":"28957","type":"VArea"},{"attributes":{"fill_color":"grey","x":{"field":"x"},"y1":{"expr":{"id":"28947","type":"Stack"}},"y2":{"expr":{"id":"28948","type":"Stack"}}},"id":"28952","type":"VArea"},{"attributes":{},"id":"28925","type":"BasicTicker"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"x"},"y1":{"expr":{"id":"28947","type":"Stack"}},"y2":{"expr":{"id":"28948","type":"Stack"}}},"id":"28953","type":"VArea"},{"attributes":{"ticker":{"id":"28925","type":"BasicTicker"}},"id":"28928","type":"Grid"},{"attributes":{"formatter":{"id":"28963","type":"BasicTickFormatter"},"ticker":{"id":"28930","type":"BasicTicker"}},"id":"28929","type":"LinearAxis"},{"attributes":{"source":{"id":"28914","type":"ColumnDataSource"}},"id":"28955","type":"CDSView"}],"root_ids":["28915"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"036cc335-1f80-418d-8e4f-9ac50c201cdc","roots":{"28915":"28e818ca-4146-4642-bd91-9ee3a6901796"}}];
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