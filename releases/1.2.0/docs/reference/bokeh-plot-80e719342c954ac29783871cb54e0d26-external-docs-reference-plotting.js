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
      };var element = document.getElementById("1317fff0-d2db-48c5-bf20-ab3087907796");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '1317fff0-d2db-48c5-bf20-ab3087907796' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js"];
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
                    
                  var docs_json = '{"aba8490a-e54d-47af-9023-0c36e7385a9b":{"roots":{"references":[{"attributes":{"fill_color":{"value":null},"height":{"units":"data","value":20},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"15393","type":"Ellipse"},{"attributes":{},"id":"15403","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"15403","type":"Selection"},"selection_policy":{"id":"15404","type":"UnionRenderers"}},"id":"15392","type":"ColumnDataSource"},{"attributes":{"ticker":{"id":"15370","type":"BasicTicker"}},"id":"15373","type":"Grid"},{"attributes":{},"id":"15365","type":"LinearScale"},{"attributes":{},"id":"15370","type":"BasicTicker"},{"attributes":{"callback":null},"id":"15361","type":"DataRange1d"},{"attributes":{},"id":"15401","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"15399","type":"BasicTickFormatter"},"ticker":{"id":"15375","type":"BasicTicker"}},"id":"15374","type":"LinearAxis"},{"attributes":{"source":{"id":"15392","type":"ColumnDataSource"}},"id":"15396","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15405","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"15392","type":"ColumnDataSource"},"glyph":{"id":"15393","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15394","type":"Ellipse"},"selection_glyph":null,"view":{"id":"15396","type":"CDSView"}},"id":"15395","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15379","type":"PanTool"},{"id":"15380","type":"WheelZoomTool"},{"id":"15381","type":"BoxZoomTool"},{"id":"15382","type":"SaveTool"},{"id":"15383","type":"ResetTool"},{"id":"15384","type":"HelpTool"}]},"id":"15385","type":"Toolbar"},{"attributes":{"formatter":{"id":"15401","type":"BasicTickFormatter"},"ticker":{"id":"15370","type":"BasicTicker"}},"id":"15369","type":"LinearAxis"},{"attributes":{},"id":"15375","type":"BasicTicker"},{"attributes":{"text":""},"id":"15397","type":"Title"},{"attributes":{},"id":"15383","type":"ResetTool"},{"attributes":{"below":[{"id":"15369","type":"LinearAxis"}],"center":[{"id":"15373","type":"Grid"},{"id":"15378","type":"Grid"}],"left":[{"id":"15374","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15395","type":"GlyphRenderer"}],"title":{"id":"15397","type":"Title"},"toolbar":{"id":"15385","type":"Toolbar"},"x_range":{"id":"15361","type":"DataRange1d"},"x_scale":{"id":"15365","type":"LinearScale"},"y_range":{"id":"15363","type":"DataRange1d"},"y_scale":{"id":"15367","type":"LinearScale"}},"id":"15360","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"15363","type":"DataRange1d"},{"attributes":{},"id":"15367","type":"LinearScale"},{"attributes":{},"id":"15404","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"15375","type":"BasicTicker"}},"id":"15378","type":"Grid"},{"attributes":{},"id":"15382","type":"SaveTool"},{"attributes":{},"id":"15384","type":"HelpTool"},{"attributes":{},"id":"15399","type":"BasicTickFormatter"},{"attributes":{},"id":"15379","type":"PanTool"},{"attributes":{},"id":"15380","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"15394","type":"Ellipse"},{"attributes":{"overlay":{"id":"15405","type":"BoxAnnotation"}},"id":"15381","type":"BoxZoomTool"}],"root_ids":["15360"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"aba8490a-e54d-47af-9023-0c36e7385a9b","roots":{"15360":"1317fff0-d2db-48c5-bf20-ab3087907796"}}];
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