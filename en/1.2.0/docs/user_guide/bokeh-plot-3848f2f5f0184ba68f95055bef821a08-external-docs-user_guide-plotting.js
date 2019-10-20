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
      };var element = document.getElementById("9df01f1d-6ea6-431e-83ce-05033e24a8ea");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '9df01f1d-6ea6-431e-83ce-05033e24a8ea' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
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
                    
                  var docs_json = '{"e36223bc-eda2-465f-8de9-a13ff58ac9ff":{"roots":{"references":[{"attributes":{},"id":"29151","type":"LinearScale"},{"attributes":{"callback":null},"id":"29147","type":"DataRange1d"},{"attributes":{},"id":"29165","type":"PanTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"29180","type":"Patch"},{"attributes":{"source":{"id":"29178","type":"ColumnDataSource"}},"id":"29182","type":"CDSView"},{"attributes":{},"id":"29161","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29191","type":"BoxAnnotation"},{"attributes":{},"id":"29185","type":"BasicTickFormatter"},{"attributes":{},"id":"29189","type":"Selection"},{"attributes":{"data_source":{"id":"29178","type":"ColumnDataSource"},"glyph":{"id":"29179","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29180","type":"Patch"},"selection_glyph":null,"view":{"id":"29182","type":"CDSView"}},"id":"29181","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29165","type":"PanTool"},{"id":"29166","type":"WheelZoomTool"},{"id":"29167","type":"BoxZoomTool"},{"id":"29168","type":"SaveTool"},{"id":"29169","type":"ResetTool"},{"id":"29170","type":"HelpTool"}]},"id":"29171","type":"Toolbar"},{"attributes":{"formatter":{"id":"29185","type":"BasicTickFormatter"},"ticker":{"id":"29161","type":"BasicTicker"}},"id":"29160","type":"LinearAxis"},{"attributes":{"formatter":{"id":"29187","type":"BasicTickFormatter"},"ticker":{"id":"29156","type":"BasicTicker"}},"id":"29155","type":"LinearAxis"},{"attributes":{"below":[{"id":"29155","type":"LinearAxis"}],"center":[{"id":"29159","type":"Grid"},{"id":"29164","type":"Grid"}],"left":[{"id":"29160","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29181","type":"GlyphRenderer"}],"title":{"id":"29183","type":"Title"},"toolbar":{"id":"29171","type":"Toolbar"},"x_range":{"id":"29147","type":"DataRange1d"},"x_scale":{"id":"29151","type":"LinearScale"},"y_range":{"id":"29149","type":"DataRange1d"},"y_scale":{"id":"29153","type":"LinearScale"}},"id":"29146","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"29190","type":"UnionRenderers"},{"attributes":{"text":""},"id":"29183","type":"Title"},{"attributes":{},"id":"29187","type":"BasicTickFormatter"},{"attributes":{},"id":"29156","type":"BasicTicker"},{"attributes":{"fill_alpha":0.5,"fill_color":"#1f77b4","line_alpha":0.5,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"29179","type":"Patch"},{"attributes":{"callback":null},"id":"29149","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"29161","type":"BasicTicker"}},"id":"29164","type":"Grid"},{"attributes":{},"id":"29166","type":"WheelZoomTool"},{"attributes":{},"id":"29153","type":"LinearScale"},{"attributes":{},"id":"29169","type":"ResetTool"},{"attributes":{},"id":"29170","type":"HelpTool"},{"attributes":{},"id":"29168","type":"SaveTool"},{"attributes":{"ticker":{"id":"29156","type":"BasicTicker"}},"id":"29159","type":"Grid"},{"attributes":{"overlay":{"id":"29191","type":"BoxAnnotation"}},"id":"29167","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,"NaN",4,5,6],"y":[6,7,5,"NaN",7,3,6]},"selected":{"id":"29189","type":"Selection"},"selection_policy":{"id":"29190","type":"UnionRenderers"}},"id":"29178","type":"ColumnDataSource"}],"root_ids":["29146"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"e36223bc-eda2-465f-8de9-a13ff58ac9ff","roots":{"29146":"9df01f1d-6ea6-431e-83ce-05033e24a8ea"}}];
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