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
      };var element = document.getElementById("5d7da9d2-115d-49bb-8747-747e203f34b1");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5d7da9d2-115d-49bb-8747-747e203f34b1' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.2.min.js"];
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
                    
                  var docs_json = '{"b0480cf3-2761-4c77-a54a-897da203c9f1":{"roots":{"references":[{"attributes":{"callback":null},"id":"28147","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"expr":{"id":"28178","type":"Stack"}}},"id":"28182","type":"Line"},{"attributes":{"fields":["y1","y2"]},"id":"28179","type":"Stack"},{"attributes":{},"id":"28156","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28165","type":"PanTool"},{"id":"28166","type":"WheelZoomTool"},{"id":"28167","type":"BoxZoomTool"},{"id":"28168","type":"SaveTool"},{"id":"28169","type":"ResetTool"},{"id":"28170","type":"HelpTool"}]},"id":"28171","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28198","type":"BoxAnnotation"},{"attributes":{},"id":"28153","type":"LinearScale"},{"attributes":{"formatter":{"id":"28194","type":"BasicTickFormatter"},"ticker":{"id":"28161","type":"BasicTicker"}},"id":"28160","type":"LinearAxis"},{"attributes":{"below":[{"id":"28155","type":"LinearAxis"}],"center":[{"id":"28159","type":"Grid"},{"id":"28164","type":"Grid"}],"left":[{"id":"28160","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28183","type":"GlyphRenderer"},{"id":"28188","type":"GlyphRenderer"}],"title":{"id":"28190","type":"Title"},"toolbar":{"id":"28171","type":"Toolbar"},"x_range":{"id":"28147","type":"DataRange1d"},"x_scale":{"id":"28151","type":"LinearScale"},"y_range":{"id":"28149","type":"DataRange1d"},"y_scale":{"id":"28153","type":"LinearScale"}},"id":"28146","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"28166","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"28192","type":"BasicTickFormatter"},"ticker":{"id":"28156","type":"BasicTicker"}},"id":"28155","type":"LinearAxis"},{"attributes":{},"id":"28170","type":"HelpTool"},{"attributes":{},"id":"28151","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"28161","type":"BasicTicker"}},"id":"28164","type":"Grid"},{"attributes":{"fields":["y1"]},"id":"28178","type":"Stack"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"expr":{"id":"28179","type":"Stack"}}},"id":"28186","type":"Line"},{"attributes":{},"id":"28161","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"expr":{"id":"28178","type":"Stack"}}},"id":"28181","type":"Line"},{"attributes":{"data_source":{"id":"28145","type":"ColumnDataSource"},"glyph":{"id":"28181","type":"Line"},"hover_glyph":null,"muted_glyph":null,"name":"y1","nonselection_glyph":{"id":"28182","type":"Line"},"selection_glyph":null,"view":{"id":"28184","type":"CDSView"}},"id":"28183","type":"GlyphRenderer"},{"attributes":{},"id":"28196","type":"UnionRenderers"},{"attributes":{},"id":"28192","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"28198","type":"BoxAnnotation"}},"id":"28167","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"28156","type":"BasicTicker"}},"id":"28159","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"expr":{"id":"28179","type":"Stack"}}},"id":"28187","type":"Line"},{"attributes":{},"id":"28169","type":"ResetTool"},{"attributes":{"callback":null},"id":"28149","type":"DataRange1d"},{"attributes":{},"id":"28194","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"28145","type":"ColumnDataSource"}},"id":"28189","type":"CDSView"},{"attributes":{},"id":"28168","type":"SaveTool"},{"attributes":{"source":{"id":"28145","type":"ColumnDataSource"}},"id":"28184","type":"CDSView"},{"attributes":{},"id":"28165","type":"PanTool"},{"attributes":{"text":""},"id":"28190","type":"Title"},{"attributes":{"data_source":{"id":"28145","type":"ColumnDataSource"},"glyph":{"id":"28186","type":"Line"},"hover_glyph":null,"muted_glyph":null,"name":"y2","nonselection_glyph":{"id":"28187","type":"Line"},"selection_glyph":null,"view":{"id":"28189","type":"CDSView"}},"id":"28188","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y1":[1,2,4,3,4],"y2":[1,4,2,2,3]},"selected":{"id":"28197","type":"Selection"},"selection_policy":{"id":"28196","type":"UnionRenderers"}},"id":"28145","type":"ColumnDataSource"},{"attributes":{},"id":"28197","type":"Selection"}],"root_ids":["28146"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"b0480cf3-2761-4c77-a54a-897da203c9f1","roots":{"28146":"5d7da9d2-115d-49bb-8747-747e203f34b1"}}];
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