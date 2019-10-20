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
      };var element = document.getElementById("b7cf57f3-1980-4e81-bffc-bf47ba7f6105");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b7cf57f3-1980-4e81-bffc-bf47ba7f6105' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"98cc589a-54b9-4d0d-b92b-fa57bae908d8":{"roots":{"references":[{"attributes":{},"id":"35260","type":"LinearScale"},{"attributes":{"formatter":{"id":"35294","type":"BasicTickFormatter"},"ticker":{"id":"35263","type":"BasicTicker"}},"id":"35262","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35272","type":"PanTool"},{"id":"35273","type":"WheelZoomTool"},{"id":"35274","type":"BoxZoomTool"},{"id":"35275","type":"SaveTool"},{"id":"35276","type":"ResetTool"},{"id":"35277","type":"HelpTool"}]},"id":"35278","type":"Toolbar"},{"attributes":{},"id":"35292","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"35296","type":"Selection"},"selection_policy":{"id":"35295","type":"UnionRenderers"}},"id":"35285","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"35285","type":"ColumnDataSource"},"glyph":{"id":"35286","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35287","type":"Circle"},"selection_glyph":null,"view":{"id":"35289","type":"CDSView"}},"id":"35288","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"35262","type":"LinearAxis"}],"center":[{"id":"35266","type":"Grid"},{"id":"35271","type":"Grid"}],"left":[{"id":"35267","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"35288","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"35278","type":"Toolbar"},"toolbar_location":"below","toolbar_sticky":false,"x_range":{"id":"35254","type":"DataRange1d"},"x_scale":{"id":"35258","type":"LinearScale"},"y_range":{"id":"35256","type":"DataRange1d"},"y_scale":{"id":"35260","type":"LinearScale"}},"id":"35252","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"35297","type":"BoxAnnotation"}},"id":"35274","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"35263","type":"BasicTicker"}},"id":"35266","type":"Grid"},{"attributes":{},"id":"35272","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35297","type":"BoxAnnotation"},{"attributes":{},"id":"35294","type":"BasicTickFormatter"},{"attributes":{},"id":"35295","type":"UnionRenderers"},{"attributes":{},"id":"35275","type":"SaveTool"},{"attributes":{},"id":"35273","type":"WheelZoomTool"},{"attributes":{},"id":"35277","type":"HelpTool"},{"attributes":{},"id":"35263","type":"BasicTicker"},{"attributes":{},"id":"35258","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35286","type":"Circle"},{"attributes":{"formatter":{"id":"35292","type":"BasicTickFormatter"},"ticker":{"id":"35268","type":"BasicTicker"}},"id":"35267","type":"LinearAxis"},{"attributes":{"callback":null},"id":"35256","type":"DataRange1d"},{"attributes":{},"id":"35276","type":"ResetTool"},{"attributes":{},"id":"35296","type":"Selection"},{"attributes":{"source":{"id":"35285","type":"ColumnDataSource"}},"id":"35289","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35287","type":"Circle"},{"attributes":{"callback":null},"id":"35254","type":"DataRange1d"},{"attributes":{},"id":"35268","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"35268","type":"BasicTicker"}},"id":"35271","type":"Grid"}],"root_ids":["35252"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"98cc589a-54b9-4d0d-b92b-fa57bae908d8","roots":{"35252":"b7cf57f3-1980-4e81-bffc-bf47ba7f6105"}}];
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