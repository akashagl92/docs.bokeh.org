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
      };var element = document.getElementById("58422c2c-91da-4bd7-9304-8e6e2ca2a070");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '58422c2c-91da-4bd7-9304-8e6e2ca2a070' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"896d84d4-9178-4c7f-b92f-48d078988e9f":{"roots":{"references":[{"attributes":{},"id":"28872","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28869","type":"PanTool"},{"id":"28870","type":"WheelZoomTool"},{"id":"28871","type":"BoxZoomTool"},{"id":"28872","type":"SaveTool"},{"id":"28873","type":"ResetTool"},{"id":"28874","type":"HelpTool"}]},"id":"28875","type":"Toolbar"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"28884","type":"Arc"},{"attributes":{},"id":"28894","type":"Selection"},{"attributes":{"formatter":{"id":"28890","type":"BasicTickFormatter"},"ticker":{"id":"28865","type":"BasicTicker"}},"id":"28864","type":"LinearAxis"},{"attributes":{},"id":"28893","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"28892","type":"BasicTickFormatter"},"ticker":{"id":"28860","type":"BasicTicker"}},"id":"28859","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28895","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"28894","type":"Selection"},"selection_policy":{"id":"28893","type":"UnionRenderers"}},"id":"28882","type":"ColumnDataSource"},{"attributes":{"source":{"id":"28882","type":"ColumnDataSource"}},"id":"28886","type":"CDSView"},{"attributes":{},"id":"28865","type":"BasicTicker"},{"attributes":{"ticker":{"id":"28860","type":"BasicTicker"}},"id":"28863","type":"Grid"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"line_color":{"value":"navy"},"radius":{"units":"data","value":0.1},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"28883","type":"Arc"},{"attributes":{"callback":null},"id":"28853","type":"DataRange1d"},{"attributes":{"below":[{"id":"28859","type":"LinearAxis"}],"center":[{"id":"28863","type":"Grid"},{"id":"28868","type":"Grid"}],"left":[{"id":"28864","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28885","type":"GlyphRenderer"}],"title":{"id":"28888","type":"Title"},"toolbar":{"id":"28875","type":"Toolbar"},"x_range":{"id":"28851","type":"DataRange1d"},"x_scale":{"id":"28855","type":"LinearScale"},"y_range":{"id":"28853","type":"DataRange1d"},"y_scale":{"id":"28857","type":"LinearScale"}},"id":"28850","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"ticker":{"id":"28865","type":"BasicTicker"}},"id":"28868","type":"Grid"},{"attributes":{"callback":null},"id":"28851","type":"DataRange1d"},{"attributes":{},"id":"28855","type":"LinearScale"},{"attributes":{"text":""},"id":"28888","type":"Title"},{"attributes":{},"id":"28870","type":"WheelZoomTool"},{"attributes":{},"id":"28890","type":"BasicTickFormatter"},{"attributes":{},"id":"28857","type":"LinearScale"},{"attributes":{},"id":"28869","type":"PanTool"},{"attributes":{"overlay":{"id":"28895","type":"BoxAnnotation"}},"id":"28871","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"28882","type":"ColumnDataSource"},"glyph":{"id":"28883","type":"Arc"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28884","type":"Arc"},"selection_glyph":null,"view":{"id":"28886","type":"CDSView"}},"id":"28885","type":"GlyphRenderer"},{"attributes":{},"id":"28892","type":"BasicTickFormatter"},{"attributes":{},"id":"28873","type":"ResetTool"},{"attributes":{},"id":"28874","type":"HelpTool"},{"attributes":{},"id":"28860","type":"BasicTicker"}],"root_ids":["28850"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"896d84d4-9178-4c7f-b92f-48d078988e9f","roots":{"28850":"58422c2c-91da-4bd7-9304-8e6e2ca2a070"}}];
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