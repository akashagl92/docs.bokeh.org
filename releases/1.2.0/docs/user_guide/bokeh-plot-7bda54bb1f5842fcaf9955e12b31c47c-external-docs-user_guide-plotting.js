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
      };var element = document.getElementById("5271fb40-ac87-43e0-9164-7d69f34efe92");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5271fb40-ac87-43e0-9164-7d69f34efe92' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"572ec79f-163b-4f2c-8dbb-0fc8a3b7ccb0":{"roots":{"references":[{"attributes":{},"id":"28314","type":"SaveTool"},{"attributes":{"data_source":{"id":"28324","type":"ColumnDataSource"},"glyph":{"id":"28325","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28326","type":"HBar"},"selection_glyph":null,"view":{"id":"28328","type":"CDSView"}},"id":"28327","type":"GlyphRenderer"},{"attributes":{},"id":"28316","type":"HelpTool"},{"attributes":{"below":[{"id":"28301","type":"LinearAxis"}],"center":[{"id":"28305","type":"Grid"},{"id":"28310","type":"Grid"}],"left":[{"id":"28306","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28327","type":"GlyphRenderer"}],"title":{"id":"28329","type":"Title"},"toolbar":{"id":"28317","type":"Toolbar"},"x_range":{"id":"28293","type":"DataRange1d"},"x_scale":{"id":"28297","type":"LinearScale"},"y_range":{"id":"28295","type":"DataRange1d"},"y_scale":{"id":"28299","type":"LinearScale"}},"id":"28292","subtype":"Figure","type":"Plot"},{"attributes":{"ticker":{"id":"28302","type":"BasicTicker"}},"id":"28305","type":"Grid"},{"attributes":{"formatter":{"id":"28331","type":"BasicTickFormatter"},"ticker":{"id":"28307","type":"BasicTicker"}},"id":"28306","type":"LinearAxis"},{"attributes":{},"id":"28311","type":"PanTool"},{"attributes":{},"id":"28315","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28311","type":"PanTool"},{"id":"28312","type":"WheelZoomTool"},{"id":"28313","type":"BoxZoomTool"},{"id":"28314","type":"SaveTool"},{"id":"28315","type":"ResetTool"},{"id":"28316","type":"HelpTool"}]},"id":"28317","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28337","type":"BoxAnnotation"},{"attributes":{},"id":"28297","type":"LinearScale"},{"attributes":{"formatter":{"id":"28333","type":"BasicTickFormatter"},"ticker":{"id":"28302","type":"BasicTicker"}},"id":"28301","type":"LinearAxis"},{"attributes":{},"id":"28302","type":"BasicTicker"},{"attributes":{},"id":"28331","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"28326","type":"HBar"},{"attributes":{"fill_color":{"value":"navy"},"height":{"value":0.5},"line_color":{"value":"navy"},"right":{"field":"right"},"y":{"field":"y"}},"id":"28325","type":"HBar"},{"attributes":{"dimension":1,"ticker":{"id":"28307","type":"BasicTicker"}},"id":"28310","type":"Grid"},{"attributes":{"text":""},"id":"28329","type":"Title"},{"attributes":{},"id":"28335","type":"Selection"},{"attributes":{},"id":"28336","type":"UnionRenderers"},{"attributes":{},"id":"28312","type":"WheelZoomTool"},{"attributes":{"source":{"id":"28324","type":"ColumnDataSource"}},"id":"28328","type":"CDSView"},{"attributes":{},"id":"28333","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"28293","type":"DataRange1d"},{"attributes":{"overlay":{"id":"28337","type":"BoxAnnotation"}},"id":"28313","type":"BoxZoomTool"},{"attributes":{},"id":"28307","type":"BasicTicker"},{"attributes":{"callback":null},"id":"28295","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"right":[1.2,2.5,3.7],"y":[1,2,3]},"selected":{"id":"28335","type":"Selection"},"selection_policy":{"id":"28336","type":"UnionRenderers"}},"id":"28324","type":"ColumnDataSource"},{"attributes":{},"id":"28299","type":"LinearScale"}],"root_ids":["28292"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"572ec79f-163b-4f2c-8dbb-0fc8a3b7ccb0","roots":{"28292":"5271fb40-ac87-43e0-9164-7d69f34efe92"}}];
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