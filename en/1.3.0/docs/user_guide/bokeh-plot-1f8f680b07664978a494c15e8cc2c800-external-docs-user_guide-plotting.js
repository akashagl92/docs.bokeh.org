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
      };var element = document.getElementById("b94226d6-6ed1-4771-bd57-375cf8972084");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b94226d6-6ed1-4771-bd57-375cf8972084' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"214ca6d2-505d-4fc6-b633-6b30705a7b7c":{"roots":{"references":[{"attributes":{},"id":"28600","type":"ResetTool"},{"attributes":{"source":{"id":"28609","type":"ColumnDataSource"}},"id":"28613","type":"CDSView"},{"attributes":{},"id":"28621","type":"UnionRenderers"},{"attributes":{},"id":"28601","type":"HelpTool"},{"attributes":{},"id":"28622","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28596","type":"PanTool"},{"id":"28597","type":"WheelZoomTool"},{"id":"28598","type":"BoxZoomTool"},{"id":"28599","type":"SaveTool"},{"id":"28600","type":"ResetTool"},{"id":"28601","type":"HelpTool"}]},"id":"28602","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"28592","type":"BasicTicker"}},"id":"28595","type":"Grid"},{"attributes":{"callback":null},"id":"28578","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"28611","type":"Rect"},{"attributes":{},"id":"28584","type":"LinearScale"},{"attributes":{"callback":null},"id":"28580","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"28610","type":"Rect"},{"attributes":{"formatter":{"id":"28619","type":"BasicTickFormatter"},"ticker":{"id":"28592","type":"BasicTicker"}},"id":"28591","type":"LinearAxis"},{"attributes":{"below":[{"id":"28586","type":"LinearAxis"}],"center":[{"id":"28590","type":"Grid"},{"id":"28595","type":"Grid"}],"left":[{"id":"28591","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28612","type":"GlyphRenderer"}],"title":{"id":"28615","type":"Title"},"toolbar":{"id":"28602","type":"Toolbar"},"x_range":{"id":"28578","type":"DataRange1d"},"x_scale":{"id":"28582","type":"LinearScale"},"y_range":{"id":"28580","type":"DataRange1d"},"y_scale":{"id":"28584","type":"LinearScale"}},"id":"28577","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"28617","type":"BasicTickFormatter"},"ticker":{"id":"28587","type":"BasicTicker"}},"id":"28586","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"28622","type":"Selection"},"selection_policy":{"id":"28621","type":"UnionRenderers"}},"id":"28609","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"28609","type":"ColumnDataSource"},"glyph":{"id":"28610","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28611","type":"Rect"},"selection_glyph":null,"view":{"id":"28613","type":"CDSView"}},"id":"28612","type":"GlyphRenderer"},{"attributes":{"text":""},"id":"28615","type":"Title"},{"attributes":{},"id":"28596","type":"PanTool"},{"attributes":{},"id":"28617","type":"BasicTickFormatter"},{"attributes":{},"id":"28597","type":"WheelZoomTool"},{"attributes":{},"id":"28587","type":"BasicTicker"},{"attributes":{},"id":"28619","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"28620","type":"BoxAnnotation"}},"id":"28598","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"28587","type":"BasicTicker"}},"id":"28590","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28620","type":"BoxAnnotation"},{"attributes":{},"id":"28599","type":"SaveTool"},{"attributes":{},"id":"28582","type":"LinearScale"},{"attributes":{},"id":"28592","type":"BasicTicker"}],"root_ids":["28577"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"214ca6d2-505d-4fc6-b633-6b30705a7b7c","roots":{"28577":"b94226d6-6ed1-4771-bd57-375cf8972084"}}];
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