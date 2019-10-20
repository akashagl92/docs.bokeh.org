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
      };var element = document.getElementById("3ffe062e-b281-4959-a1b5-4d84c84cedf6");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3ffe062e-b281-4959-a1b5-4d84c84cedf6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"97276fbb-c89e-4f1c-86a6-828f48490cce":{"roots":{"references":[{"attributes":{},"id":"32028","type":"LinearScale"},{"attributes":{"color_mapper":{"id":"32017","type":"LinearColorMapper"},"formatter":{"id":"32060","type":"BasicTickFormatter"},"location":[0,0],"ticker":{"id":"32061","type":"BasicTicker"},"width":8},"id":"32058","type":"ColorBar"},{"attributes":{"formatter":{"id":"32062","type":"BasicTickFormatter"},"ticker":{"id":"32031","type":"BasicTicker"}},"id":"32030","type":"LinearAxis"},{"attributes":{},"id":"32060","type":"BasicTickFormatter"},{"attributes":{},"id":"32031","type":"BasicTicker"},{"attributes":{},"id":"32061","type":"BasicTicker"},{"attributes":{"ticker":{"id":"32031","type":"BasicTicker"}},"id":"32034","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32068","type":"BoxAnnotation"},{"attributes":{},"id":"32062","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"32064","type":"BasicTickFormatter"},"ticker":{"id":"32036","type":"BasicTicker"}},"id":"32035","type":"LinearAxis"},{"attributes":{},"id":"32067","type":"Selection"},{"attributes":{},"id":"32064","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"32068","type":"BoxAnnotation"}},"id":"32042","type":"BoxZoomTool"},{"attributes":{},"id":"32036","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"32036","type":"BasicTicker"}},"id":"32039","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":12},"x":{"field":"x"},"y":{"field":"y"}},"id":"32055","type":"Circle"},{"attributes":{"fill_color":{"field":"y","transform":{"id":"32017","type":"LinearColorMapper"}},"line_color":{"field":"y","transform":{"id":"32017","type":"LinearColorMapper"}},"size":{"units":"screen","value":12},"x":{"field":"x"},"y":{"field":"y"}},"id":"32054","type":"Circle"},{"attributes":{"data_source":{"id":"32018","type":"ColumnDataSource"},"glyph":{"id":"32054","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32055","type":"Circle"},"selection_glyph":null,"view":{"id":"32057","type":"CDSView"}},"id":"32056","type":"GlyphRenderer"},{"attributes":{"high":10,"low":1,"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"32017","type":"LinearColorMapper"},{"attributes":{},"id":"32040","type":"PanTool"},{"attributes":{},"id":"32041","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5,7,8,9,10],"y":[1,2,3,4,5,7,8,9,10]},"selected":{"id":"32067","type":"Selection"},"selection_policy":{"id":"32066","type":"UnionRenderers"}},"id":"32018","type":"ColumnDataSource"},{"attributes":{},"id":"32043","type":"SaveTool"},{"attributes":{"below":[{"id":"32030","type":"LinearAxis"}],"center":[{"id":"32034","type":"Grid"},{"id":"32039","type":"Grid"}],"left":[{"id":"32035","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32056","type":"GlyphRenderer"}],"right":[{"id":"32058","type":"ColorBar"}],"title":{"id":"32020","type":"Title"},"toolbar":{"id":"32046","type":"Toolbar"},"x_range":{"id":"32022","type":"DataRange1d"},"x_scale":{"id":"32026","type":"LinearScale"},"y_range":{"id":"32024","type":"DataRange1d"},"y_scale":{"id":"32028","type":"LinearScale"}},"id":"32019","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32045","type":"HelpTool"},{"attributes":{},"id":"32066","type":"UnionRenderers"},{"attributes":{"text":"Linear Color Map Based on Y"},"id":"32020","type":"Title"},{"attributes":{},"id":"32044","type":"ResetTool"},{"attributes":{},"id":"32026","type":"LinearScale"},{"attributes":{"callback":null},"id":"32022","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32040","type":"PanTool"},{"id":"32041","type":"WheelZoomTool"},{"id":"32042","type":"BoxZoomTool"},{"id":"32043","type":"SaveTool"},{"id":"32044","type":"ResetTool"},{"id":"32045","type":"HelpTool"}]},"id":"32046","type":"Toolbar"},{"attributes":{"callback":null},"id":"32024","type":"DataRange1d"},{"attributes":{"source":{"id":"32018","type":"ColumnDataSource"}},"id":"32057","type":"CDSView"}],"root_ids":["32019"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"97276fbb-c89e-4f1c-86a6-828f48490cce","roots":{"32019":"3ffe062e-b281-4959-a1b5-4d84c84cedf6"}}];
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