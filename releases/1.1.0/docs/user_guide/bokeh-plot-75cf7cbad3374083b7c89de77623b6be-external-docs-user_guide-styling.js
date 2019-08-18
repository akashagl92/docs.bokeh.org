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
      };var element = document.getElementById("27d7c05d-4e99-454b-a8c2-59f3b08801f1");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '27d7c05d-4e99-454b-a8c2-59f3b08801f1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b2ff76d6-eb4a-4927-a10c-640447db8b13":{"roots":{"references":[{"attributes":{},"id":"33335","type":"HelpTool"},{"attributes":{"source":{"id":"33343","type":"ColumnDataSource"}},"id":"33347","type":"CDSView"},{"attributes":{"code":"\\n    return Math.floor(tick) + \\" + \\" + (tick % 1).toFixed(2)\\n"},"id":"33348","type":"FuncTickFormatter"},{"attributes":{},"id":"33330","type":"PanTool"},{"attributes":{},"id":"33316","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"33345","type":"Circle"},{"attributes":{"formatter":{"id":"33354","type":"BasicTickFormatter"},"ticker":{"id":"33321","type":"BasicTicker"}},"id":"33320","type":"LinearAxis"},{"attributes":{},"id":"33331","type":"WheelZoomTool"},{"attributes":{"text":""},"id":"33351","type":"Title"},{"attributes":{"overlay":{"id":"33357","type":"BoxAnnotation"}},"id":"33332","type":"BoxZoomTool"},{"attributes":{},"id":"33333","type":"SaveTool"},{"attributes":{},"id":"33326","type":"BasicTicker"},{"attributes":{},"id":"33354","type":"BasicTickFormatter"},{"attributes":{},"id":"33334","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33357","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"33321","type":"BasicTicker"}},"id":"33324","type":"Grid"},{"attributes":{},"id":"33355","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"33343","type":"ColumnDataSource"},"glyph":{"id":"33344","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33345","type":"Circle"},"selection_glyph":null,"view":{"id":"33347","type":"CDSView"}},"id":"33346","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"33320","type":"LinearAxis"}],"center":[{"id":"33324","type":"Grid"},{"id":"33329","type":"Grid"}],"left":[{"id":"33325","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"33346","type":"GlyphRenderer"}],"title":{"id":"33351","type":"Title"},"toolbar":{"id":"33336","type":"Toolbar"},"x_range":{"id":"33312","type":"DataRange1d"},"x_scale":{"id":"33316","type":"LinearScale"},"y_range":{"id":"33314","type":"DataRange1d"},"y_scale":{"id":"33318","type":"LinearScale"}},"id":"33311","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"33344","type":"Circle"},{"attributes":{},"id":"33356","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[0,2,4,6,8,10],"y":[6,2,4,10,8,0]},"selected":{"id":"33356","type":"Selection"},"selection_policy":{"id":"33355","type":"UnionRenderers"}},"id":"33343","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"33326","type":"BasicTicker"}},"id":"33329","type":"Grid"},{"attributes":{"formatter":{"id":"33348","type":"FuncTickFormatter"},"ticker":{"id":"33326","type":"BasicTicker"}},"id":"33325","type":"LinearAxis"},{"attributes":{"callback":null},"id":"33312","type":"DataRange1d"},{"attributes":{},"id":"33318","type":"LinearScale"},{"attributes":{"callback":null},"id":"33314","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33330","type":"PanTool"},{"id":"33331","type":"WheelZoomTool"},{"id":"33332","type":"BoxZoomTool"},{"id":"33333","type":"SaveTool"},{"id":"33334","type":"ResetTool"},{"id":"33335","type":"HelpTool"}]},"id":"33336","type":"Toolbar"},{"attributes":{},"id":"33321","type":"BasicTicker"}],"root_ids":["33311"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"b2ff76d6-eb4a-4927-a10c-640447db8b13","roots":{"33311":"27d7c05d-4e99-454b-a8c2-59f3b08801f1"}}];
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