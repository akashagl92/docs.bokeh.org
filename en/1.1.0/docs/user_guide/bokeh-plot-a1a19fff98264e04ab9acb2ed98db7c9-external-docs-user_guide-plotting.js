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
      };var element = document.getElementById("51fbf8f1-6d1c-4607-bfcb-96cc21708467");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '51fbf8f1-6d1c-4607-bfcb-96cc21708467' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3992131a-f40e-4231-a8ac-f70cb24a0420":{"roots":{"references":[{"attributes":{"text":""},"id":"28141","type":"Title"},{"attributes":{},"id":"28123","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"28104","type":"DataRange1d"},{"attributes":{},"id":"28143","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"28148","type":"BoxAnnotation"}},"id":"28124","type":"BoxZoomTool"},{"attributes":{},"id":"28113","type":"BasicTicker"},{"attributes":{},"id":"28145","type":"BasicTickFormatter"},{"attributes":{},"id":"28125","type":"SaveTool"},{"attributes":{"callback":null},"id":"28106","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"28137","type":"MultiPolygons"},{"attributes":{},"id":"28108","type":"LinearScale"},{"attributes":{},"id":"28146","type":"UnionRenderers"},{"attributes":{},"id":"28126","type":"ResetTool"},{"attributes":{"ticker":{"id":"28113","type":"BasicTicker"}},"id":"28116","type":"Grid"},{"attributes":{},"id":"28147","type":"Selection"},{"attributes":{},"id":"28127","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28122","type":"PanTool"},{"id":"28123","type":"WheelZoomTool"},{"id":"28124","type":"BoxZoomTool"},{"id":"28125","type":"SaveTool"},{"id":"28126","type":"ResetTool"},{"id":"28127","type":"HelpTool"}]},"id":"28128","type":"Toolbar"},{"attributes":{},"id":"28122","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28148","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"28135","type":"ColumnDataSource"},"glyph":{"id":"28136","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28137","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"28139","type":"CDSView"}},"id":"28138","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"28118","type":"BasicTicker"}},"id":"28121","type":"Grid"},{"attributes":{},"id":"28110","type":"LinearScale"},{"attributes":{"below":[{"id":"28112","type":"LinearAxis"}],"center":[{"id":"28116","type":"Grid"},{"id":"28121","type":"Grid"}],"left":[{"id":"28117","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28138","type":"GlyphRenderer"}],"title":{"id":"28141","type":"Title"},"toolbar":{"id":"28128","type":"Toolbar"},"x_range":{"id":"28104","type":"DataRange1d"},"x_scale":{"id":"28108","type":"LinearScale"},"y_range":{"id":"28106","type":"DataRange1d"},"y_scale":{"id":"28110","type":"LinearScale"}},"id":"28103","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"28143","type":"BasicTickFormatter"},"ticker":{"id":"28118","type":"BasicTicker"}},"id":"28117","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"xs":[[[[1,1,2,2]]]],"ys":[[[[3,4,4,3]]]]},"selected":{"id":"28147","type":"Selection"},"selection_policy":{"id":"28146","type":"UnionRenderers"}},"id":"28135","type":"ColumnDataSource"},{"attributes":{"source":{"id":"28135","type":"ColumnDataSource"}},"id":"28139","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"28136","type":"MultiPolygons"},{"attributes":{},"id":"28118","type":"BasicTicker"},{"attributes":{"formatter":{"id":"28145","type":"BasicTickFormatter"},"ticker":{"id":"28113","type":"BasicTicker"}},"id":"28112","type":"LinearAxis"}],"root_ids":["28103"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"3992131a-f40e-4231-a8ac-f70cb24a0420","roots":{"28103":"51fbf8f1-6d1c-4607-bfcb-96cc21708467"}}];
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