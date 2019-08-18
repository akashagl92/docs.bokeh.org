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
      };var element = document.getElementById("c6121c2a-aa1e-4b5d-89d2-5b79e85c21d8");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c6121c2a-aa1e-4b5d-89d2-5b79e85c21d8' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js"];
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
                    
                  var docs_json = '{"5bd41cbf-3933-4f28-9b79-b4684c848dfd":{"roots":{"references":[{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17573","type":"Circle"},{"attributes":{"ticker":{"id":"17545","type":"BasicTicker"}},"id":"17548","type":"Grid"},{"attributes":{},"id":"17584","type":"UnionRenderers"},{"attributes":{},"id":"17583","type":"Selection"},{"attributes":{"data_source":{"id":"17572","type":"ColumnDataSource"},"glyph":{"id":"17573","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17574","type":"Circle"},"selection_glyph":null,"view":{"id":"17576","type":"CDSView"}},"id":"17575","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"17586","type":"BoxAnnotation"}},"id":"17556","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"17580","type":"BasicTickFormatter"},"ticker":{"id":"17550","type":"BasicTicker"}},"id":"17549","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17554","type":"PanTool"},{"id":"17555","type":"WheelZoomTool"},{"id":"17556","type":"BoxZoomTool"},{"id":"17557","type":"SaveTool"},{"id":"17558","type":"ResetTool"},{"id":"17559","type":"HelpTool"}]},"id":"17560","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17574","type":"Circle"},{"attributes":{},"id":"17555","type":"WheelZoomTool"},{"attributes":{},"id":"17559","type":"HelpTool"},{"attributes":{},"id":"17545","type":"BasicTicker"},{"attributes":{},"id":"17540","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"17550","type":"BasicTicker"}},"id":"17553","type":"Grid"},{"attributes":{},"id":"17578","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"17578","type":"BasicTickFormatter"},"ticker":{"id":"17545","type":"BasicTicker"}},"id":"17544","type":"LinearAxis"},{"attributes":{"source":{"id":"17572","type":"ColumnDataSource"}},"id":"17576","type":"CDSView"},{"attributes":{"below":[{"id":"17544","type":"LinearAxis"}],"center":[{"id":"17548","type":"Grid"},{"id":"17553","type":"Grid"}],"left":[{"id":"17549","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17570","type":"GlyphRenderer"},{"id":"17575","type":"GlyphRenderer"}],"title":{"id":"17534","type":"Title"},"toolbar":{"id":"17560","type":"Toolbar"},"x_range":{"id":"17536","type":"DataRange1d"},"x_scale":{"id":"17540","type":"LinearScale"},"y_range":{"id":"17538","type":"DataRange1d"},"y_scale":{"id":"17542","type":"LinearScale"}},"id":"17533","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"17538","type":"DataRange1d"},{"attributes":{},"id":"17580","type":"BasicTickFormatter"},{"attributes":{},"id":"17582","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"17583","type":"Selection"},"selection_policy":{"id":"17582","type":"UnionRenderers"}},"id":"17567","type":"ColumnDataSource"},{"attributes":{},"id":"17585","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17586","type":"BoxAnnotation"},{"attributes":{},"id":"17557","type":"SaveTool"},{"attributes":{"data_source":{"id":"17567","type":"ColumnDataSource"},"glyph":{"id":"17568","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17569","type":"Line"},"selection_glyph":null,"view":{"id":"17571","type":"CDSView"}},"id":"17570","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"17585","type":"Selection"},"selection_policy":{"id":"17584","type":"UnionRenderers"}},"id":"17572","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"17568","type":"Line"},{"attributes":{},"id":"17550","type":"BasicTicker"},{"attributes":{},"id":"17558","type":"ResetTool"},{"attributes":{"text":"example"},"id":"17534","type":"Title"},{"attributes":{},"id":"17554","type":"PanTool"},{"attributes":{"callback":null},"id":"17536","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"17569","type":"Line"},{"attributes":{},"id":"17542","type":"LinearScale"},{"attributes":{"source":{"id":"17567","type":"ColumnDataSource"}},"id":"17571","type":"CDSView"}],"root_ids":["17533"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"5bd41cbf-3933-4f28-9b79-b4684c848dfd","roots":{"17533":"c6121c2a-aa1e-4b5d-89d2-5b79e85c21d8"}}];
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