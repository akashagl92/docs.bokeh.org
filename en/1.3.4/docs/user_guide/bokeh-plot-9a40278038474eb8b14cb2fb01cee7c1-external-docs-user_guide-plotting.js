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
      };var element = document.getElementById("1fe2e97d-64f0-4f07-93ad-ca76e4b0f0f3");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '1fe2e97d-64f0-4f07-93ad-ca76e4b0f0f3' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.4.min.js"];
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
                    
                  var docs_json = '{"02967051-0753-4ace-a4bc-c6e0e80900ee":{"roots":{"references":[{"attributes":{},"id":"27833","type":"WheelZoomTool"},{"attributes":{"text":""},"id":"27851","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"27847","type":"Line"},{"attributes":{},"id":"27832","type":"PanTool"},{"attributes":{"overlay":{"id":"27858","type":"BoxAnnotation"}},"id":"27834","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"27823","type":"BasicTicker"}},"id":"27826","type":"Grid"},{"attributes":{"source":{"id":"27845","type":"ColumnDataSource"}},"id":"27849","type":"CDSView"},{"attributes":{"callback":null},"id":"27814","type":"DataRange1d"},{"attributes":{"data_source":{"id":"27845","type":"ColumnDataSource"},"glyph":{"id":"27846","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27847","type":"Line"},"selection_glyph":null,"view":{"id":"27849","type":"CDSView"}},"id":"27848","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"27816","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"27828","type":"BasicTicker"}},"id":"27831","type":"Grid"},{"attributes":{},"id":"27855","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27858","type":"BoxAnnotation"},{"attributes":{},"id":"27835","type":"SaveTool"},{"attributes":{"formatter":{"id":"27853","type":"BasicTickFormatter"},"ticker":{"id":"27828","type":"BasicTicker"}},"id":"27827","type":"LinearAxis"},{"attributes":{},"id":"27856","type":"Selection"},{"attributes":{},"id":"27818","type":"LinearScale"},{"attributes":{},"id":"27836","type":"ResetTool"},{"attributes":{},"id":"27853","type":"BasicTickFormatter"},{"attributes":{},"id":"27820","type":"LinearScale"},{"attributes":{},"id":"27837","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"27856","type":"Selection"},"selection_policy":{"id":"27857","type":"UnionRenderers"}},"id":"27845","type":"ColumnDataSource"},{"attributes":{},"id":"27857","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27832","type":"PanTool"},{"id":"27833","type":"WheelZoomTool"},{"id":"27834","type":"BoxZoomTool"},{"id":"27835","type":"SaveTool"},{"id":"27836","type":"ResetTool"},{"id":"27837","type":"HelpTool"}]},"id":"27838","type":"Toolbar"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"27846","type":"Line"},{"attributes":{"formatter":{"id":"27855","type":"BasicTickFormatter"},"ticker":{"id":"27823","type":"BasicTicker"}},"id":"27822","type":"LinearAxis"},{"attributes":{"below":[{"id":"27822","type":"LinearAxis"}],"center":[{"id":"27826","type":"Grid"},{"id":"27831","type":"Grid"}],"left":[{"id":"27827","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"27848","type":"GlyphRenderer"}],"title":{"id":"27851","type":"Title"},"toolbar":{"id":"27838","type":"Toolbar"},"x_range":{"id":"27814","type":"DataRange1d"},"x_scale":{"id":"27818","type":"LinearScale"},"y_range":{"id":"27816","type":"DataRange1d"},"y_scale":{"id":"27820","type":"LinearScale"}},"id":"27813","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27823","type":"BasicTicker"},{"attributes":{},"id":"27828","type":"BasicTicker"}],"root_ids":["27813"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"02967051-0753-4ace-a4bc-c6e0e80900ee","roots":{"27813":"1fe2e97d-64f0-4f07-93ad-ca76e4b0f0f3"}}];
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
        function(Bokeh) {
        
        
        }
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