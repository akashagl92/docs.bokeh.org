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
      };var element = document.getElementById("f54f17d4-7584-453c-874b-5e532fa5d192");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f54f17d4-7584-453c-874b-5e532fa5d192' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"1b92edf9-b7a2-4282-a3cf-8da328c9b6ea":{"roots":{"references":[{"attributes":{},"id":"16684","type":"LinearScale"},{"attributes":{"callback":null},"id":"16680","type":"DataRange1d"},{"attributes":{"source":{"id":"16709","type":"ColumnDataSource"}},"id":"16713","type":"CDSView"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"16710","type":"Segment"},{"attributes":{},"id":"16682","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x0":[1,2,3],"x1":[1,2,3],"y0":[1,2,3],"y1":[1.2,2.5,3.7]},"selected":{"id":"16720","type":"Selection"},"selection_policy":{"id":"16721","type":"UnionRenderers"}},"id":"16709","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"16686","type":"LinearAxis"}],"center":[{"id":"16690","type":"Grid"},{"id":"16695","type":"Grid"}],"left":[{"id":"16691","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16712","type":"GlyphRenderer"}],"title":{"id":"16714","type":"Title"},"toolbar":{"id":"16702","type":"Toolbar"},"x_range":{"id":"16678","type":"DataRange1d"},"x_scale":{"id":"16682","type":"LinearScale"},"y_range":{"id":"16680","type":"DataRange1d"},"y_scale":{"id":"16684","type":"LinearScale"}},"id":"16677","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"16709","type":"ColumnDataSource"},"glyph":{"id":"16710","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16711","type":"Segment"},"selection_glyph":null,"view":{"id":"16713","type":"CDSView"}},"id":"16712","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"16718","type":"BasicTickFormatter"},"ticker":{"id":"16687","type":"BasicTicker"}},"id":"16686","type":"LinearAxis"},{"attributes":{"text":""},"id":"16714","type":"Title"},{"attributes":{},"id":"16696","type":"PanTool"},{"attributes":{},"id":"16716","type":"BasicTickFormatter"},{"attributes":{},"id":"16697","type":"WheelZoomTool"},{"attributes":{},"id":"16701","type":"HelpTool"},{"attributes":{},"id":"16687","type":"BasicTicker"},{"attributes":{},"id":"16718","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"16722","type":"BoxAnnotation"}},"id":"16698","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"16687","type":"BasicTicker"}},"id":"16690","type":"Grid"},{"attributes":{},"id":"16720","type":"Selection"},{"attributes":{},"id":"16699","type":"SaveTool"},{"attributes":{"formatter":{"id":"16716","type":"BasicTickFormatter"},"ticker":{"id":"16692","type":"BasicTicker"}},"id":"16691","type":"LinearAxis"},{"attributes":{},"id":"16721","type":"UnionRenderers"},{"attributes":{},"id":"16700","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"16711","type":"Segment"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16722","type":"BoxAnnotation"},{"attributes":{},"id":"16692","type":"BasicTicker"},{"attributes":{"callback":null},"id":"16678","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16696","type":"PanTool"},{"id":"16697","type":"WheelZoomTool"},{"id":"16698","type":"BoxZoomTool"},{"id":"16699","type":"SaveTool"},{"id":"16700","type":"ResetTool"},{"id":"16701","type":"HelpTool"}]},"id":"16702","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"16692","type":"BasicTicker"}},"id":"16695","type":"Grid"}],"root_ids":["16677"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"1b92edf9-b7a2-4282-a3cf-8da328c9b6ea","roots":{"16677":"f54f17d4-7584-453c-874b-5e532fa5d192"}}];
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