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
      };var element = document.getElementById("eb83a368-c5cb-487e-b79b-8bb8be394e9a");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'eb83a368-c5cb-487e-b79b-8bb8be394e9a' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
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
                    
                  var docs_json = '{"05e37f5c-84ad-4467-a23e-e478c7a8f6d4":{"roots":{"references":[{"attributes":{},"id":"15420","type":"BasicTickFormatter"},{"attributes":{},"id":"15387","type":"LinearScale"},{"attributes":{"below":[{"id":"15389","type":"LinearAxis"}],"center":[{"id":"15393","type":"Grid"},{"id":"15398","type":"Grid"}],"left":[{"id":"15394","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15415","type":"GlyphRenderer"}],"title":{"id":"15418","type":"Title"},"toolbar":{"id":"15405","type":"Toolbar"},"x_range":{"id":"15381","type":"DataRange1d"},"x_scale":{"id":"15385","type":"LinearScale"},"y_range":{"id":"15383","type":"DataRange1d"},"y_scale":{"id":"15387","type":"LinearScale"}},"id":"15380","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15395","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"15414","type":"Ellipse"},{"attributes":{"dimension":1,"ticker":{"id":"15395","type":"BasicTicker"}},"id":"15398","type":"Grid"},{"attributes":{},"id":"15390","type":"BasicTicker"},{"attributes":{},"id":"15422","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"15412","type":"ColumnDataSource"},"glyph":{"id":"15413","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15414","type":"Ellipse"},"selection_glyph":null,"view":{"id":"15416","type":"CDSView"}},"id":"15415","type":"GlyphRenderer"},{"attributes":{},"id":"15425","type":"Selection"},{"attributes":{"formatter":{"id":"15422","type":"BasicTickFormatter"},"ticker":{"id":"15395","type":"BasicTicker"}},"id":"15394","type":"LinearAxis"},{"attributes":{},"id":"15404","type":"HelpTool"},{"attributes":{},"id":"15403","type":"ResetTool"},{"attributes":{},"id":"15402","type":"SaveTool"},{"attributes":{"ticker":{"id":"15390","type":"BasicTicker"}},"id":"15393","type":"Grid"},{"attributes":{"fill_color":{"value":null},"height":{"units":"data","value":20},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"15413","type":"Ellipse"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15423","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"15381","type":"DataRange1d"},{"attributes":{},"id":"15385","type":"LinearScale"},{"attributes":{"overlay":{"id":"15423","type":"BoxAnnotation"}},"id":"15401","type":"BoxZoomTool"},{"attributes":{"source":{"id":"15412","type":"ColumnDataSource"}},"id":"15416","type":"CDSView"},{"attributes":{},"id":"15399","type":"PanTool"},{"attributes":{},"id":"15400","type":"WheelZoomTool"},{"attributes":{"text":""},"id":"15418","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15399","type":"PanTool"},{"id":"15400","type":"WheelZoomTool"},{"id":"15401","type":"BoxZoomTool"},{"id":"15402","type":"SaveTool"},{"id":"15403","type":"ResetTool"},{"id":"15404","type":"HelpTool"}]},"id":"15405","type":"Toolbar"},{"attributes":{"callback":null},"id":"15383","type":"DataRange1d"},{"attributes":{},"id":"15424","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"15425","type":"Selection"},"selection_policy":{"id":"15424","type":"UnionRenderers"}},"id":"15412","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"15420","type":"BasicTickFormatter"},"ticker":{"id":"15390","type":"BasicTicker"}},"id":"15389","type":"LinearAxis"}],"root_ids":["15380"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"05e37f5c-84ad-4467-a23e-e478c7a8f6d4","roots":{"15380":"eb83a368-c5cb-487e-b79b-8bb8be394e9a"}}];
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