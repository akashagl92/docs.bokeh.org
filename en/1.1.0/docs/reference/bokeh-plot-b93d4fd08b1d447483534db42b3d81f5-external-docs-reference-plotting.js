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
      };var element = document.getElementById("7be8d3a6-119e-41b5-a6ff-fe9251967643");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '7be8d3a6-119e-41b5-a6ff-fe9251967643' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js"];
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
                    
                  var docs_json = '{"7511f101-099b-4825-a605-2f5ef75afcb1":{"roots":{"references":[{"attributes":{"callback":null},"id":"15750","type":"DataRange1d"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"15780","type":"Quad"},{"attributes":{},"id":"15752","type":"LinearScale"},{"attributes":{"callback":null,"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]},"selected":{"id":"15791","type":"Selection"},"selection_policy":{"id":"15790","type":"UnionRenderers"}},"id":"15779","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"15785","type":"Title"},{"attributes":{"data_source":{"id":"15779","type":"ColumnDataSource"},"glyph":{"id":"15780","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15781","type":"Quad"},"selection_glyph":null,"view":{"id":"15783","type":"CDSView"}},"id":"15782","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"15789","type":"BasicTickFormatter"},"ticker":{"id":"15757","type":"BasicTicker"}},"id":"15756","type":"LinearAxis"},{"attributes":{},"id":"15766","type":"PanTool"},{"attributes":{},"id":"15787","type":"BasicTickFormatter"},{"attributes":{},"id":"15767","type":"WheelZoomTool"},{"attributes":{},"id":"15770","type":"ResetTool"},{"attributes":{},"id":"15789","type":"BasicTickFormatter"},{"attributes":{},"id":"15757","type":"BasicTicker"},{"attributes":{"overlay":{"id":"15792","type":"BoxAnnotation"}},"id":"15768","type":"BoxZoomTool"},{"attributes":{},"id":"15790","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"15757","type":"BasicTicker"}},"id":"15760","type":"Grid"},{"attributes":{"below":[{"id":"15756","type":"LinearAxis"}],"center":[{"id":"15760","type":"Grid"},{"id":"15765","type":"Grid"}],"left":[{"id":"15761","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15782","type":"GlyphRenderer"}],"title":{"id":"15785","type":"Title"},"toolbar":{"id":"15772","type":"Toolbar"},"x_range":{"id":"15748","type":"DataRange1d"},"x_scale":{"id":"15752","type":"LinearScale"},"y_range":{"id":"15750","type":"DataRange1d"},"y_scale":{"id":"15754","type":"LinearScale"}},"id":"15747","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15769","type":"SaveTool"},{"attributes":{},"id":"15791","type":"Selection"},{"attributes":{"formatter":{"id":"15787","type":"BasicTickFormatter"},"ticker":{"id":"15762","type":"BasicTicker"}},"id":"15761","type":"LinearAxis"},{"attributes":{},"id":"15771","type":"HelpTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"15781","type":"Quad"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15792","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15766","type":"PanTool"},{"id":"15767","type":"WheelZoomTool"},{"id":"15768","type":"BoxZoomTool"},{"id":"15769","type":"SaveTool"},{"id":"15770","type":"ResetTool"},{"id":"15771","type":"HelpTool"}]},"id":"15772","type":"Toolbar"},{"attributes":{},"id":"15762","type":"BasicTicker"},{"attributes":{"callback":null},"id":"15748","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"15762","type":"BasicTicker"}},"id":"15765","type":"Grid"},{"attributes":{},"id":"15754","type":"LinearScale"},{"attributes":{"source":{"id":"15779","type":"ColumnDataSource"}},"id":"15783","type":"CDSView"}],"root_ids":["15747"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"7511f101-099b-4825-a605-2f5ef75afcb1","roots":{"15747":"7be8d3a6-119e-41b5-a6ff-fe9251967643"}}];
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