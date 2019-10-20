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
      };var element = document.getElementById("842379fd-c85f-4f96-926c-2237d6119a92");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '842379fd-c85f-4f96-926c-2237d6119a92' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"681c8d2e-0193-4c47-9f8e-b6720005e9fb":{"roots":{"references":[{"attributes":{},"id":"19250","type":"LinearScale"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"19274","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19276","type":"VBar"},{"attributes":{"callback":null,"end":9,"start":0},"id":"19246","type":"DataRange1d"},{"attributes":{},"id":"19293","type":"UnionRenderers"},{"attributes":{},"id":"19282","type":"BasicTickFormatter"},{"attributes":{},"id":"19257","type":"BasicTicker"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"19278","type":"GlyphRenderer"}]},"id":"19287","type":"LegendItem"},{"attributes":{},"id":"19248","type":"CategoricalScale"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"19244","type":"FactorRange"},{"attributes":{"below":[{"id":"19252","type":"CategoricalAxis"}],"center":[{"id":"19255","type":"Grid"},{"id":"19260","type":"Grid"},{"id":"19286","type":"Legend"}],"left":[{"id":"19256","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"19278","type":"GlyphRenderer"}],"title":{"id":"19242","type":"Title"},"toolbar":{"id":"19267","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19244","type":"FactorRange"},"x_scale":{"id":"19248","type":"CategoricalScale"},"y_range":{"id":"19246","type":"DataRange1d"},"y_scale":{"id":"19250","type":"LinearScale"}},"id":"19241","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"19240","type":"ColumnDataSource"},"glyph":{"id":"19276","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19277","type":"VBar"},"selection_glyph":null,"view":{"id":"19279","type":"CDSView"}},"id":"19278","type":"GlyphRenderer"},{"attributes":{},"id":"19294","type":"Selection"},{"attributes":{"callback":null,"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19294","type":"Selection"},"selection_policy":{"id":"19293","type":"UnionRenderers"}},"id":"19240","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"19287","type":"LegendItem"}],"location":"top_center","orientation":"horizontal"},"id":"19286","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19277","type":"VBar"},{"attributes":{"dimension":1,"ticker":{"id":"19257","type":"BasicTicker"}},"id":"19260","type":"Grid"},{"attributes":{"formatter":{"id":"19283","type":"CategoricalTickFormatter"},"ticker":{"id":"19253","type":"CategoricalTicker"}},"id":"19252","type":"CategoricalAxis"},{"attributes":{"text":"Fruit Counts"},"id":"19242","type":"Title"},{"attributes":{},"id":"19262","type":"WheelZoomTool"},{"attributes":{"source":{"id":"19240","type":"ColumnDataSource"}},"id":"19279","type":"CDSView"},{"attributes":{},"id":"19253","type":"CategoricalTicker"},{"attributes":{},"id":"19264","type":"SaveTool"},{"attributes":{},"id":"19266","type":"HelpTool"},{"attributes":{},"id":"19265","type":"ResetTool"},{"attributes":{},"id":"19283","type":"CategoricalTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19285","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"19285","type":"BoxAnnotation"}},"id":"19263","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"19282","type":"BasicTickFormatter"},"ticker":{"id":"19257","type":"BasicTicker"}},"id":"19256","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19261","type":"PanTool"},{"id":"19262","type":"WheelZoomTool"},{"id":"19263","type":"BoxZoomTool"},{"id":"19264","type":"SaveTool"},{"id":"19265","type":"ResetTool"},{"id":"19266","type":"HelpTool"}]},"id":"19267","type":"Toolbar"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"19274","type":"CategoricalColorMapper"},{"attributes":{},"id":"19261","type":"PanTool"},{"attributes":{"grid_line_color":{"value":null},"ticker":{"id":"19253","type":"CategoricalTicker"}},"id":"19255","type":"Grid"}],"root_ids":["19241"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"681c8d2e-0193-4c47-9f8e-b6720005e9fb","roots":{"19241":"842379fd-c85f-4f96-926c-2237d6119a92"}}];
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