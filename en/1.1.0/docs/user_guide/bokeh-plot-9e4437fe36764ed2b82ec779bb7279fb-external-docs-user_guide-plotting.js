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
      };var element = document.getElementById("977b6c69-da4d-4b59-93d3-a620856b29e6");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '977b6c69-da4d-4b59-93d3-a620856b29e6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7fc9b919-37b9-4ee8-a5bd-0e005e4feec3":{"roots":{"references":[{"attributes":{"data_source":{"id":"27969","type":"ColumnDataSource"},"glyph":{"id":"27970","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27971","type":"Patches"},"selection_glyph":null,"view":{"id":"27973","type":"CDSView"}},"id":"27972","type":"GlyphRenderer"},{"attributes":{},"id":"27979","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"27979","type":"BasicTickFormatter"},"ticker":{"id":"27947","type":"BasicTicker"}},"id":"27946","type":"LinearAxis"},{"attributes":{"below":[{"id":"27946","type":"LinearAxis"}],"center":[{"id":"27950","type":"Grid"},{"id":"27955","type":"Grid"}],"left":[{"id":"27951","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"27972","type":"GlyphRenderer"}],"title":{"id":"27975","type":"Title"},"toolbar":{"id":"27962","type":"Toolbar"},"x_range":{"id":"27938","type":"DataRange1d"},"x_scale":{"id":"27942","type":"LinearScale"},"y_range":{"id":"27940","type":"DataRange1d"},"y_scale":{"id":"27944","type":"LinearScale"}},"id":"27937","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27956","type":"PanTool"},{"id":"27957","type":"WheelZoomTool"},{"id":"27958","type":"BoxZoomTool"},{"id":"27959","type":"SaveTool"},{"id":"27960","type":"ResetTool"},{"id":"27961","type":"HelpTool"}]},"id":"27962","type":"Toolbar"},{"attributes":{},"id":"27947","type":"BasicTicker"},{"attributes":{},"id":"27977","type":"BasicTickFormatter"},{"attributes":{},"id":"27980","type":"UnionRenderers"},{"attributes":{"source":{"id":"27969","type":"ColumnDataSource"}},"id":"27973","type":"CDSView"},{"attributes":{"formatter":{"id":"27977","type":"BasicTickFormatter"},"ticker":{"id":"27952","type":"BasicTicker"}},"id":"27951","type":"LinearAxis"},{"attributes":{},"id":"27981","type":"Selection"},{"attributes":{},"id":"27956","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"27971","type":"Patches"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"27982","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"27938","type":"DataRange1d"},{"attributes":{},"id":"27957","type":"WheelZoomTool"},{"attributes":{},"id":"27952","type":"BasicTicker"},{"attributes":{"callback":null},"id":"27940","type":"DataRange1d"},{"attributes":{"overlay":{"id":"27982","type":"BoxAnnotation"}},"id":"27958","type":"BoxZoomTool"},{"attributes":{},"id":"27942","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"27952","type":"BasicTicker"}},"id":"27955","type":"Grid"},{"attributes":{},"id":"27959","type":"SaveTool"},{"attributes":{"text":""},"id":"27975","type":"Title"},{"attributes":{"ticker":{"id":"27947","type":"BasicTicker"}},"id":"27950","type":"Grid"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"fill_color"},"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"27970","type":"Patches"},{"attributes":{},"id":"27960","type":"ResetTool"},{"attributes":{},"id":"27944","type":"LinearScale"},{"attributes":{"callback":null,"data":{"fill_alpha":[0.8,0.3],"fill_color":["firebrick","navy"],"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]},"selected":{"id":"27981","type":"Selection"},"selection_policy":{"id":"27980","type":"UnionRenderers"}},"id":"27969","type":"ColumnDataSource"},{"attributes":{},"id":"27961","type":"HelpTool"}],"root_ids":["27937"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"7fc9b919-37b9-4ee8-a5bd-0e005e4feec3","roots":{"27937":"977b6c69-da4d-4b59-93d3-a620856b29e6"}}];
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