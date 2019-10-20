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
      };var element = document.getElementById("9a063ffa-a4c3-49d0-b25e-3d88b33cea1f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '9a063ffa-a4c3-49d0-b25e-3d88b33cea1f' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
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
                    
                  var docs_json = '{"5d9f604d-5b3c-4dd0-b165-97dd76b2ec41":{"roots":{"references":[{"attributes":{"formatter":{"id":"15423","type":"BasicTickFormatter"},"ticker":{"id":"15391","type":"BasicTicker"}},"id":"15390","type":"LinearAxis"},{"attributes":{},"id":"15405","type":"HelpTool"},{"attributes":{"data_source":{"id":"15413","type":"ColumnDataSource"},"glyph":{"id":"15414","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15415","type":"Ellipse"},"selection_glyph":null,"view":{"id":"15417","type":"CDSView"}},"id":"15416","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"15421","type":"BasicTickFormatter"},"ticker":{"id":"15396","type":"BasicTicker"}},"id":"15395","type":"LinearAxis"},{"attributes":{"callback":null},"id":"15382","type":"DataRange1d"},{"attributes":{"text":""},"id":"15419","type":"Title"},{"attributes":{},"id":"15425","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"15415","type":"Ellipse"},{"attributes":{},"id":"15391","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15426","type":"BoxAnnotation"},{"attributes":{},"id":"15421","type":"BasicTickFormatter"},{"attributes":{},"id":"15423","type":"BasicTickFormatter"},{"attributes":{},"id":"15404","type":"ResetTool"},{"attributes":{},"id":"15400","type":"PanTool"},{"attributes":{},"id":"15401","type":"WheelZoomTool"},{"attributes":{},"id":"15403","type":"SaveTool"},{"attributes":{},"id":"15386","type":"LinearScale"},{"attributes":{"below":[{"id":"15390","type":"LinearAxis"}],"center":[{"id":"15394","type":"Grid"},{"id":"15399","type":"Grid"}],"left":[{"id":"15395","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15416","type":"GlyphRenderer"}],"title":{"id":"15419","type":"Title"},"toolbar":{"id":"15406","type":"Toolbar"},"x_range":{"id":"15382","type":"DataRange1d"},"x_scale":{"id":"15386","type":"LinearScale"},"y_range":{"id":"15384","type":"DataRange1d"},"y_scale":{"id":"15388","type":"LinearScale"}},"id":"15381","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"15426","type":"BoxAnnotation"}},"id":"15402","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":null},"height":{"units":"data","value":20},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"15414","type":"Ellipse"},{"attributes":{"ticker":{"id":"15391","type":"BasicTicker"}},"id":"15394","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15400","type":"PanTool"},{"id":"15401","type":"WheelZoomTool"},{"id":"15402","type":"BoxZoomTool"},{"id":"15403","type":"SaveTool"},{"id":"15404","type":"ResetTool"},{"id":"15405","type":"HelpTool"}]},"id":"15406","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"15396","type":"BasicTicker"}},"id":"15399","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"15424","type":"Selection"},"selection_policy":{"id":"15425","type":"UnionRenderers"}},"id":"15413","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"15384","type":"DataRange1d"},{"attributes":{},"id":"15396","type":"BasicTicker"},{"attributes":{},"id":"15424","type":"Selection"},{"attributes":{"source":{"id":"15413","type":"ColumnDataSource"}},"id":"15417","type":"CDSView"},{"attributes":{},"id":"15388","type":"LinearScale"}],"root_ids":["15381"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"5d9f604d-5b3c-4dd0-b165-97dd76b2ec41","roots":{"15381":"9a063ffa-a4c3-49d0-b25e-3d88b33cea1f"}}];
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
        function(Bokeh) {
        
        
        }
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