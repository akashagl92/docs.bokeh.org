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
      };var element = document.getElementById("3c5eb311-4689-4933-aa6b-972ffd1c1ba6");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3c5eb311-4689-4933-aa6b-972ffd1c1ba6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"75eb6a70-3adb-4c0f-8333-63d3fc6e9e83":{"roots":{"references":[{"attributes":{},"id":"27835","type":"ResetTool"},{"attributes":{},"id":"27856","type":"UnionRenderers"},{"attributes":{},"id":"27827","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"27857","type":"Selection"},"selection_policy":{"id":"27856","type":"UnionRenderers"}},"id":"27844","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"27854","type":"BasicTickFormatter"},"ticker":{"id":"27827","type":"BasicTicker"}},"id":"27826","type":"LinearAxis"},{"attributes":{},"id":"27836","type":"HelpTool"},{"attributes":{"callback":null},"id":"27813","type":"DataRange1d"},{"attributes":{},"id":"27857","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"27827","type":"BasicTicker"}},"id":"27830","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27831","type":"PanTool"},{"id":"27832","type":"WheelZoomTool"},{"id":"27833","type":"BoxZoomTool"},{"id":"27834","type":"SaveTool"},{"id":"27835","type":"ResetTool"},{"id":"27836","type":"HelpTool"}]},"id":"27837","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"27846","type":"Line"},{"attributes":{"callback":null},"id":"27815","type":"DataRange1d"},{"attributes":{},"id":"27817","type":"LinearScale"},{"attributes":{"source":{"id":"27844","type":"ColumnDataSource"}},"id":"27848","type":"CDSView"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"27845","type":"Line"},{"attributes":{"data_source":{"id":"27844","type":"ColumnDataSource"},"glyph":{"id":"27845","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27846","type":"Line"},"selection_glyph":null,"view":{"id":"27848","type":"CDSView"}},"id":"27847","type":"GlyphRenderer"},{"attributes":{},"id":"27822","type":"BasicTicker"},{"attributes":{},"id":"27831","type":"PanTool"},{"attributes":{},"id":"27819","type":"LinearScale"},{"attributes":{"text":""},"id":"27850","type":"Title"},{"attributes":{},"id":"27832","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"27821","type":"LinearAxis"}],"center":[{"id":"27825","type":"Grid"},{"id":"27830","type":"Grid"}],"left":[{"id":"27826","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"27847","type":"GlyphRenderer"}],"title":{"id":"27850","type":"Title"},"toolbar":{"id":"27837","type":"Toolbar"},"x_range":{"id":"27813","type":"DataRange1d"},"x_scale":{"id":"27817","type":"LinearScale"},"y_range":{"id":"27815","type":"DataRange1d"},"y_scale":{"id":"27819","type":"LinearScale"}},"id":"27812","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"27852","type":"BasicTickFormatter"},"ticker":{"id":"27822","type":"BasicTicker"}},"id":"27821","type":"LinearAxis"},{"attributes":{},"id":"27852","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"27855","type":"BoxAnnotation"}},"id":"27833","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"27822","type":"BasicTicker"}},"id":"27825","type":"Grid"},{"attributes":{},"id":"27854","type":"BasicTickFormatter"},{"attributes":{},"id":"27834","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27855","type":"BoxAnnotation"}],"root_ids":["27812"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"75eb6a70-3adb-4c0f-8333-63d3fc6e9e83","roots":{"27812":"3c5eb311-4689-4933-aa6b-972ffd1c1ba6"}}];
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