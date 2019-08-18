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
      };var element = document.getElementById("ba4f3dce-df86-4d25-9a56-586317eec4e2");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'ba4f3dce-df86-4d25-9a56-586317eec4e2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9de9cc1b-2610-45c6-b80e-81735edbb5bf":{"roots":{"references":[{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"28501","type":"Quad"},{"attributes":{},"id":"28491","type":"ResetTool"},{"attributes":{"callback":null},"id":"28469","type":"DataRange1d"},{"attributes":{},"id":"28488","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]},"selected":{"id":"28511","type":"Selection"},"selection_policy":{"id":"28512","type":"UnionRenderers"}},"id":"28500","type":"ColumnDataSource"},{"attributes":{},"id":"28512","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"28507","type":"BasicTickFormatter"},"ticker":{"id":"28483","type":"BasicTicker"}},"id":"28482","type":"LinearAxis"},{"attributes":{},"id":"28483","type":"BasicTicker"},{"attributes":{},"id":"28492","type":"HelpTool"},{"attributes":{"ticker":{"id":"28478","type":"BasicTicker"}},"id":"28481","type":"Grid"},{"attributes":{},"id":"28507","type":"BasicTickFormatter"},{"attributes":{},"id":"28473","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28487","type":"PanTool"},{"id":"28488","type":"WheelZoomTool"},{"id":"28489","type":"BoxZoomTool"},{"id":"28490","type":"SaveTool"},{"id":"28491","type":"ResetTool"},{"id":"28492","type":"HelpTool"}]},"id":"28493","type":"Toolbar"},{"attributes":{},"id":"28511","type":"Selection"},{"attributes":{"callback":null},"id":"28471","type":"DataRange1d"},{"attributes":{},"id":"28487","type":"PanTool"},{"attributes":{"formatter":{"id":"28509","type":"BasicTickFormatter"},"ticker":{"id":"28478","type":"BasicTicker"}},"id":"28477","type":"LinearAxis"},{"attributes":{},"id":"28509","type":"BasicTickFormatter"},{"attributes":{},"id":"28490","type":"SaveTool"},{"attributes":{"data_source":{"id":"28500","type":"ColumnDataSource"},"glyph":{"id":"28501","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28502","type":"Quad"},"selection_glyph":null,"view":{"id":"28504","type":"CDSView"}},"id":"28503","type":"GlyphRenderer"},{"attributes":{},"id":"28475","type":"LinearScale"},{"attributes":{},"id":"28478","type":"BasicTicker"},{"attributes":{"below":[{"id":"28477","type":"LinearAxis"}],"center":[{"id":"28481","type":"Grid"},{"id":"28486","type":"Grid"}],"left":[{"id":"28482","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28503","type":"GlyphRenderer"}],"title":{"id":"28505","type":"Title"},"toolbar":{"id":"28493","type":"Toolbar"},"x_range":{"id":"28469","type":"DataRange1d"},"x_scale":{"id":"28473","type":"LinearScale"},"y_range":{"id":"28471","type":"DataRange1d"},"y_scale":{"id":"28475","type":"LinearScale"}},"id":"28468","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"28500","type":"ColumnDataSource"}},"id":"28504","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28513","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"28483","type":"BasicTicker"}},"id":"28486","type":"Grid"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"28502","type":"Quad"},{"attributes":{"text":""},"id":"28505","type":"Title"},{"attributes":{"overlay":{"id":"28513","type":"BoxAnnotation"}},"id":"28489","type":"BoxZoomTool"}],"root_ids":["28468"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"9de9cc1b-2610-45c6-b80e-81735edbb5bf","roots":{"28468":"ba4f3dce-df86-4d25-9a56-586317eec4e2"}}];
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