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
      };var element = document.getElementById("2ddd31a1-0159-4c9e-883a-627f49803962");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2ddd31a1-0159-4c9e-883a-627f49803962' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3d392328-9fd1-4cbf-82a9-5b15061ef5c7":{"roots":{"references":[{"attributes":{"callback":null},"id":"27730","type":"DataRange1d"},{"attributes":{"source":{"id":"27761","type":"ColumnDataSource"}},"id":"27765","type":"CDSView"},{"attributes":{},"id":"27774","type":"Selection"},{"attributes":{"callback":null},"id":"27732","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"27762","type":"Square"},{"attributes":{},"id":"27734","type":"LinearScale"},{"attributes":{"data_source":{"id":"27761","type":"ColumnDataSource"},"glyph":{"id":"27762","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27763","type":"Square"},"selection_glyph":null,"view":{"id":"27765","type":"CDSView"}},"id":"27764","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"27744","type":"BasicTicker"}},"id":"27747","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27748","type":"PanTool"},{"id":"27749","type":"WheelZoomTool"},{"id":"27750","type":"BoxZoomTool"},{"id":"27751","type":"SaveTool"},{"id":"27752","type":"ResetTool"},{"id":"27753","type":"HelpTool"}]},"id":"27754","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"27763","type":"Square"},{"attributes":{},"id":"27749","type":"WheelZoomTool"},{"attributes":{},"id":"27753","type":"HelpTool"},{"attributes":{},"id":"27736","type":"LinearScale"},{"attributes":{},"id":"27739","type":"BasicTicker"},{"attributes":{},"id":"27752","type":"ResetTool"},{"attributes":{},"id":"27748","type":"PanTool"},{"attributes":{"ticker":{"id":"27739","type":"BasicTicker"}},"id":"27742","type":"Grid"},{"attributes":{"below":[{"id":"27738","type":"LinearAxis"}],"center":[{"id":"27742","type":"Grid"},{"id":"27747","type":"Grid"}],"left":[{"id":"27743","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"27764","type":"GlyphRenderer"}],"title":{"id":"27767","type":"Title"},"toolbar":{"id":"27754","type":"Toolbar"},"x_range":{"id":"27730","type":"DataRange1d"},"x_scale":{"id":"27734","type":"LinearScale"},"y_range":{"id":"27732","type":"DataRange1d"},"y_scale":{"id":"27736","type":"LinearScale"}},"id":"27729","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"27769","type":"BasicTickFormatter"},"ticker":{"id":"27739","type":"BasicTicker"}},"id":"27738","type":"LinearAxis"},{"attributes":{},"id":"27751","type":"SaveTool"},{"attributes":{},"id":"27769","type":"BasicTickFormatter"},{"attributes":{},"id":"27744","type":"BasicTicker"},{"attributes":{},"id":"27771","type":"BasicTickFormatter"},{"attributes":{"text":""},"id":"27767","type":"Title"},{"attributes":{"formatter":{"id":"27771","type":"BasicTickFormatter"},"ticker":{"id":"27744","type":"BasicTicker"}},"id":"27743","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"27774","type":"Selection"},"selection_policy":{"id":"27773","type":"UnionRenderers"}},"id":"27761","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27772","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"27772","type":"BoxAnnotation"}},"id":"27750","type":"BoxZoomTool"},{"attributes":{},"id":"27773","type":"UnionRenderers"}],"root_ids":["27729"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"3d392328-9fd1-4cbf-82a9-5b15061ef5c7","roots":{"27729":"2ddd31a1-0159-4c9e-883a-627f49803962"}}];
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