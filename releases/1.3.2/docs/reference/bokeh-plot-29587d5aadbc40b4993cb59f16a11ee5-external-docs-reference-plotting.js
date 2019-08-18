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
      };var element = document.getElementById("5bd892b8-73a6-49be-bd85-700741e955ef");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5bd892b8-73a6-49be-bd85-700741e955ef' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js"];
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
                    
                  var docs_json = '{"ab71cc2f-0dd1-4965-ba9e-287e11ca2fe0":{"roots":{"references":[{"attributes":{"dimension":1,"ticker":{"id":"15313","type":"BasicTicker"}},"id":"15316","type":"Grid"},{"attributes":{"data_source":{"id":"15330","type":"ColumnDataSource"},"glyph":{"id":"15331","type":"DiamondCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15332","type":"DiamondCross"},"selection_glyph":null,"view":{"id":"15334","type":"CDSView"}},"id":"15333","type":"GlyphRenderer"},{"attributes":{},"id":"15341","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"15332","type":"DiamondCross"},{"attributes":{},"id":"15303","type":"LinearScale"},{"attributes":{},"id":"15342","type":"Selection"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"15331","type":"DiamondCross"},{"attributes":{},"id":"15305","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15343","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"15337","type":"BasicTickFormatter"},"ticker":{"id":"15308","type":"BasicTicker"}},"id":"15307","type":"LinearAxis"},{"attributes":{},"id":"15317","type":"PanTool"},{"attributes":{},"id":"15318","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"15343","type":"BoxAnnotation"}},"id":"15319","type":"BoxZoomTool"},{"attributes":{},"id":"15339","type":"BasicTickFormatter"},{"attributes":{},"id":"15308","type":"BasicTicker"},{"attributes":{},"id":"15320","type":"SaveTool"},{"attributes":{"below":[{"id":"15307","type":"LinearAxis"}],"center":[{"id":"15311","type":"Grid"},{"id":"15316","type":"Grid"}],"left":[{"id":"15312","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15333","type":"GlyphRenderer"}],"title":{"id":"15335","type":"Title"},"toolbar":{"id":"15323","type":"Toolbar"},"x_range":{"id":"15299","type":"DataRange1d"},"x_scale":{"id":"15303","type":"LinearScale"},"y_range":{"id":"15301","type":"DataRange1d"},"y_scale":{"id":"15305","type":"LinearScale"}},"id":"15298","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15337","type":"BasicTickFormatter"},{"attributes":{},"id":"15321","type":"ResetTool"},{"attributes":{"ticker":{"id":"15308","type":"BasicTicker"}},"id":"15311","type":"Grid"},{"attributes":{"text":""},"id":"15335","type":"Title"},{"attributes":{"formatter":{"id":"15339","type":"BasicTickFormatter"},"ticker":{"id":"15313","type":"BasicTicker"}},"id":"15312","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"15342","type":"Selection"},"selection_policy":{"id":"15341","type":"UnionRenderers"}},"id":"15330","type":"ColumnDataSource"},{"attributes":{},"id":"15322","type":"HelpTool"},{"attributes":{"callback":null},"id":"15301","type":"DataRange1d"},{"attributes":{"callback":null},"id":"15299","type":"DataRange1d"},{"attributes":{},"id":"15313","type":"BasicTicker"},{"attributes":{"source":{"id":"15330","type":"ColumnDataSource"}},"id":"15334","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15317","type":"PanTool"},{"id":"15318","type":"WheelZoomTool"},{"id":"15319","type":"BoxZoomTool"},{"id":"15320","type":"SaveTool"},{"id":"15321","type":"ResetTool"},{"id":"15322","type":"HelpTool"}]},"id":"15323","type":"Toolbar"}],"root_ids":["15298"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"ab71cc2f-0dd1-4965-ba9e-287e11ca2fe0","roots":{"15298":"5bd892b8-73a6-49be-bd85-700741e955ef"}}];
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