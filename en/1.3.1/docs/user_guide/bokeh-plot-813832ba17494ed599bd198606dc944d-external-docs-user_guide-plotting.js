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
      };var element = document.getElementById("730e7ba2-9f48-469f-8597-b1a1eb2057ec");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '730e7ba2-9f48-469f-8597-b1a1eb2057ec' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.1.min.js"];
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
                    
                  var docs_json = '{"bffa4ce0-f1cb-4122-ad12-faf2d61fd828":{"roots":{"references":[{"attributes":{"callback":null,"end":20},"id":"30434","type":"Range1d"},{"attributes":{},"id":"30473","type":"BasicTickFormatter"},{"attributes":{},"id":"30475","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30452","type":"PanTool"},{"id":"30453","type":"WheelZoomTool"},{"id":"30454","type":"BoxZoomTool"},{"id":"30455","type":"SaveTool"},{"id":"30456","type":"ResetTool"},{"id":"30457","type":"HelpTool"}]},"id":"30458","type":"Toolbar"},{"attributes":{},"id":"30456","type":"ResetTool"},{"attributes":{},"id":"30443","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30477","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"30475","type":"BasicTickFormatter"},"ticker":{"id":"30443","type":"BasicTicker"}},"id":"30442","type":"LinearAxis"},{"attributes":{"source":{"id":"30466","type":"ColumnDataSource"}},"id":"30470","type":"CDSView"},{"attributes":{},"id":"30440","type":"LinearScale"},{"attributes":{"data_source":{"id":"30466","type":"ColumnDataSource"},"glyph":{"id":"30467","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30468","type":"Circle"},"selection_glyph":null,"view":{"id":"30470","type":"CDSView"}},"id":"30469","type":"GlyphRenderer"},{"attributes":{},"id":"30457","type":"HelpTool"},{"attributes":{},"id":"30448","type":"BasicTicker"},{"attributes":{"formatter":{"id":"30473","type":"BasicTickFormatter"},"ticker":{"id":"30448","type":"BasicTicker"}},"id":"30447","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"30468","type":"Circle"},{"attributes":{"callback":null,"end":15},"id":"30465","type":"Range1d"},{"attributes":{"dimension":1,"ticker":{"id":"30448","type":"BasicTicker"}},"id":"30451","type":"Grid"},{"attributes":{"below":[{"id":"30442","type":"LinearAxis"}],"center":[{"id":"30446","type":"Grid"},{"id":"30451","type":"Grid"}],"left":[{"id":"30447","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"30469","type":"GlyphRenderer"}],"title":{"id":"30472","type":"Title"},"toolbar":{"id":"30458","type":"Toolbar"},"x_range":{"id":"30434","type":"Range1d"},"x_scale":{"id":"30438","type":"LinearScale"},"y_range":{"id":"30465","type":"Range1d"},"y_scale":{"id":"30440","type":"LinearScale"}},"id":"30433","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"30438","type":"LinearScale"},{"attributes":{"overlay":{"id":"30477","type":"BoxAnnotation"}},"id":"30454","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"30467","type":"Circle"},{"attributes":{},"id":"30453","type":"WheelZoomTool"},{"attributes":{"text":""},"id":"30472","type":"Title"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"30478","type":"Selection"},"selection_policy":{"id":"30479","type":"UnionRenderers"}},"id":"30466","type":"ColumnDataSource"},{"attributes":{},"id":"30478","type":"Selection"},{"attributes":{},"id":"30452","type":"PanTool"},{"attributes":{},"id":"30455","type":"SaveTool"},{"attributes":{"ticker":{"id":"30443","type":"BasicTicker"}},"id":"30446","type":"Grid"},{"attributes":{},"id":"30479","type":"UnionRenderers"}],"root_ids":["30433"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"bffa4ce0-f1cb-4122-ad12-faf2d61fd828","roots":{"30433":"730e7ba2-9f48-469f-8597-b1a1eb2057ec"}}];
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