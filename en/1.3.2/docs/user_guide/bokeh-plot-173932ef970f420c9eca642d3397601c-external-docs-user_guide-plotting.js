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
      };var element = document.getElementById("8f44e393-9c56-4351-ac9b-32f6d1b98fc4");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8f44e393-9c56-4351-ac9b-32f6d1b98fc4' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"48794e16-5550-4fd5-b284-bdaa9092cfcd":{"roots":{"references":[{"attributes":{"below":[{"id":"29265","type":"LinearAxis"}],"center":[{"id":"29269","type":"Grid"},{"id":"29274","type":"Grid"}],"left":[{"id":"29270","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29291","type":"GlyphRenderer"}],"title":{"id":"29293","type":"Title"},"toolbar":{"id":"29281","type":"Toolbar"},"x_range":{"id":"29257","type":"DataRange1d"},"x_scale":{"id":"29261","type":"LinearScale"},"y_range":{"id":"29259","type":"DataRange1d"},"y_scale":{"id":"29263","type":"LinearScale"}},"id":"29256","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"29288","type":"ColumnDataSource"}},"id":"29292","type":"CDSView"},{"attributes":{},"id":"29278","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29301","type":"BoxAnnotation"},{"attributes":{},"id":"29295","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"29301","type":"BoxAnnotation"}},"id":"29277","type":"BoxZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"29271","type":"BasicTicker"}},"id":"29274","type":"Grid"},{"attributes":{"ticker":{"id":"29266","type":"BasicTicker"}},"id":"29269","type":"Grid"},{"attributes":{},"id":"29266","type":"BasicTicker"},{"attributes":{},"id":"29263","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29275","type":"PanTool"},{"id":"29276","type":"WheelZoomTool"},{"id":"29277","type":"BoxZoomTool"},{"id":"29278","type":"SaveTool"},{"id":"29279","type":"ResetTool"},{"id":"29280","type":"HelpTool"}]},"id":"29281","type":"Toolbar"},{"attributes":{},"id":"29300","type":"Selection"},{"attributes":{"callback":null},"id":"29257","type":"DataRange1d"},{"attributes":{},"id":"29261","type":"LinearScale"},{"attributes":{"data_source":{"id":"29288","type":"ColumnDataSource"},"glyph":{"id":"29289","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29290","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"29292","type":"CDSView"}},"id":"29291","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"29295","type":"BasicTickFormatter"},"ticker":{"id":"29266","type":"BasicTicker"}},"id":"29265","type":"LinearAxis"},{"attributes":{},"id":"29280","type":"HelpTool"},{"attributes":{},"id":"29299","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"xs":[[[[1,1,2,2]]]],"ys":[[[[3,4,4,3]]]]},"selected":{"id":"29300","type":"Selection"},"selection_policy":{"id":"29299","type":"UnionRenderers"}},"id":"29288","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"29297","type":"BasicTickFormatter"},"ticker":{"id":"29271","type":"BasicTicker"}},"id":"29270","type":"LinearAxis"},{"attributes":{},"id":"29297","type":"BasicTickFormatter"},{"attributes":{},"id":"29279","type":"ResetTool"},{"attributes":{},"id":"29271","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"29290","type":"MultiPolygons"},{"attributes":{"callback":null},"id":"29259","type":"DataRange1d"},{"attributes":{},"id":"29276","type":"WheelZoomTool"},{"attributes":{"text":""},"id":"29293","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"29289","type":"MultiPolygons"},{"attributes":{},"id":"29275","type":"PanTool"}],"root_ids":["29256"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"48794e16-5550-4fd5-b284-bdaa9092cfcd","roots":{"29256":"8f44e393-9c56-4351-ac9b-32f6d1b98fc4"}}];
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