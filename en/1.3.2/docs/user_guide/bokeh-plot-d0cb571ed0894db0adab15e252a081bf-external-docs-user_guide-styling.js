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
      };var element = document.getElementById("2e07ae8d-3d78-4d01-8256-34fd3c27517b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2e07ae8d-3d78-4d01-8256-34fd3c27517b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"87bfd8ff-e37a-4318-8697-b03f530a772a":{"roots":{"references":[{"attributes":{},"id":"34409","type":"SaveTool"},{"attributes":{"callback":null},"id":"34390","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34434","type":"BoxAnnotation"},{"attributes":{},"id":"34432","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"34434","type":"BoxAnnotation"}},"id":"34408","type":"BoxZoomTool"},{"attributes":{},"id":"34433","type":"Selection"},{"attributes":{},"id":"34392","type":"LinearScale"},{"attributes":{},"id":"34394","type":"LinearScale"},{"attributes":{},"id":"34406","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34420","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34406","type":"PanTool"},{"id":"34407","type":"WheelZoomTool"},{"id":"34408","type":"BoxZoomTool"},{"id":"34409","type":"SaveTool"},{"id":"34410","type":"ResetTool"},{"id":"34411","type":"HelpTool"}]},"id":"34412","type":"Toolbar"},{"attributes":{},"id":"34410","type":"ResetTool"},{"attributes":{"ticker":{"id":"34397","type":"BasicTicker"}},"id":"34400","type":"Grid"},{"attributes":{"below":[{"id":"34396","type":"LinearAxis"}],"center":[{"id":"34400","type":"Grid"},{"id":"34405","type":"Grid"}],"left":[{"id":"34401","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"34422","type":"GlyphRenderer"}],"title":{"id":"34428","type":"Title"},"toolbar":{"id":"34412","type":"Toolbar"},"x_range":{"id":"34388","type":"DataRange1d"},"x_scale":{"id":"34392","type":"LinearScale"},"y_range":{"id":"34390","type":"DataRange1d"},"y_scale":{"id":"34394","type":"LinearScale"}},"id":"34387","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"34424","type":"PrintfTickFormatter"},"ticker":{"id":"34397","type":"BasicTicker"}},"id":"34396","type":"LinearAxis"},{"attributes":{"text":""},"id":"34428","type":"Title"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"34433","type":"Selection"},"selection_policy":{"id":"34432","type":"UnionRenderers"}},"id":"34419","type":"ColumnDataSource"},{"attributes":{},"id":"34402","type":"BasicTicker"},{"attributes":{},"id":"34397","type":"BasicTicker"},{"attributes":{"source":{"id":"34419","type":"ColumnDataSource"}},"id":"34423","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34421","type":"Circle"},{"attributes":{"callback":null},"id":"34388","type":"DataRange1d"},{"attributes":{"formatter":{"id":"34426","type":"PrintfTickFormatter"},"ticker":{"id":"34402","type":"BasicTicker"}},"id":"34401","type":"LinearAxis"},{"attributes":{},"id":"34407","type":"WheelZoomTool"},{"attributes":{},"id":"34411","type":"HelpTool"},{"attributes":{"format":"%4.1e"},"id":"34424","type":"PrintfTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"34402","type":"BasicTicker"}},"id":"34405","type":"Grid"},{"attributes":{"format":"%5.3f mu"},"id":"34426","type":"PrintfTickFormatter"},{"attributes":{"data_source":{"id":"34419","type":"ColumnDataSource"},"glyph":{"id":"34420","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34421","type":"Circle"},"selection_glyph":null,"view":{"id":"34423","type":"CDSView"}},"id":"34422","type":"GlyphRenderer"}],"root_ids":["34387"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"87bfd8ff-e37a-4318-8697-b03f530a772a","roots":{"34387":"2e07ae8d-3d78-4d01-8256-34fd3c27517b"}}];
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