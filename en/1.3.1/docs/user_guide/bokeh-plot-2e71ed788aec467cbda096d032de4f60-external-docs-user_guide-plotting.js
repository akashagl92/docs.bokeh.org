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
      };var element = document.getElementById("0fedff6c-3356-466f-8ab5-b4be878c1b0b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '0fedff6c-3356-466f-8ab5-b4be878c1b0b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3b4d7938-13db-4d9d-a83a-1d1f4fbfcda3":{"roots":{"references":[{"attributes":{"callback":null},"id":"30089","type":"DataRange1d"},{"attributes":{},"id":"30105","type":"PanTool"},{"attributes":{},"id":"30106","type":"WheelZoomTool"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"30120","type":"Wedge"},{"attributes":{"below":[{"id":"30095","type":"LinearAxis"}],"center":[{"id":"30099","type":"Grid"},{"id":"30104","type":"Grid"}],"left":[{"id":"30100","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"30121","type":"GlyphRenderer"}],"title":{"id":"30124","type":"Title"},"toolbar":{"id":"30111","type":"Toolbar"},"x_range":{"id":"30087","type":"DataRange1d"},"x_scale":{"id":"30091","type":"LinearScale"},"y_range":{"id":"30089","type":"DataRange1d"},"y_scale":{"id":"30093","type":"LinearScale"}},"id":"30086","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"30109","type":"ResetTool"},{"attributes":{},"id":"30101","type":"BasicTicker"},{"attributes":{},"id":"30130","type":"Selection"},{"attributes":{"callback":null},"id":"30087","type":"DataRange1d"},{"attributes":{},"id":"30131","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"30127","type":"BasicTickFormatter"},"ticker":{"id":"30096","type":"BasicTicker"}},"id":"30095","type":"LinearAxis"},{"attributes":{"ticker":{"id":"30096","type":"BasicTicker"}},"id":"30099","type":"Grid"},{"attributes":{"text":""},"id":"30124","type":"Title"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"30130","type":"Selection"},"selection_policy":{"id":"30131","type":"UnionRenderers"}},"id":"30118","type":"ColumnDataSource"},{"attributes":{},"id":"30093","type":"LinearScale"},{"attributes":{},"id":"30091","type":"LinearScale"},{"attributes":{},"id":"30110","type":"HelpTool"},{"attributes":{},"id":"30127","type":"BasicTickFormatter"},{"attributes":{},"id":"30096","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30129","type":"BoxAnnotation"},{"attributes":{},"id":"30108","type":"SaveTool"},{"attributes":{"dimension":1,"ticker":{"id":"30101","type":"BasicTicker"}},"id":"30104","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30105","type":"PanTool"},{"id":"30106","type":"WheelZoomTool"},{"id":"30107","type":"BoxZoomTool"},{"id":"30108","type":"SaveTool"},{"id":"30109","type":"ResetTool"},{"id":"30110","type":"HelpTool"}]},"id":"30111","type":"Toolbar"},{"attributes":{"data_source":{"id":"30118","type":"ColumnDataSource"},"glyph":{"id":"30119","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30120","type":"Wedge"},"selection_glyph":null,"view":{"id":"30122","type":"CDSView"}},"id":"30121","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"30129","type":"BoxAnnotation"}},"id":"30107","type":"BoxZoomTool"},{"attributes":{},"id":"30125","type":"BasicTickFormatter"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.6},"line_color":{"value":"firebrick"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"30119","type":"Wedge"},{"attributes":{"source":{"id":"30118","type":"ColumnDataSource"}},"id":"30122","type":"CDSView"},{"attributes":{"formatter":{"id":"30125","type":"BasicTickFormatter"},"ticker":{"id":"30101","type":"BasicTicker"}},"id":"30100","type":"LinearAxis"}],"root_ids":["30086"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"3b4d7938-13db-4d9d-a83a-1d1f4fbfcda3","roots":{"30086":"0fedff6c-3356-466f-8ab5-b4be878c1b0b"}}];
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