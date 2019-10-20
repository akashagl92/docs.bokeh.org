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
      };var element = document.getElementById("d0f79278-8dd2-4549-8598-25cc44879c56");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd0f79278-8dd2-4549-8598-25cc44879c56' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"33212f31-9220-4e2c-ba11-307fb86cc5b1":{"roots":{"references":[{"attributes":{"dimension":1,"ticker":{"id":"17879","type":"BasicTicker"}},"id":"17882","type":"Grid"},{"attributes":{"callback":null},"id":"17867","type":"DataRange1d"},{"attributes":{"below":[{"id":"17873","type":"LinearAxis"}],"center":[{"id":"17877","type":"Grid"},{"id":"17882","type":"Grid"}],"left":[{"id":"17878","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17899","type":"GlyphRenderer"}],"title":{"id":"17863","type":"Title"},"toolbar":{"id":"17889","type":"Toolbar"},"x_range":{"id":"17865","type":"DataRange1d"},"x_scale":{"id":"17869","type":"LinearScale"},"y_range":{"id":"17867","type":"DataRange1d"},"y_scale":{"id":"17871","type":"LinearScale"}},"id":"17862","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17884","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17898","type":"Circle"},{"attributes":{"text":"Basic Title"},"id":"17863","type":"Title"},{"attributes":{},"id":"17871","type":"LinearScale"},{"attributes":{},"id":"17869","type":"LinearScale"},{"attributes":{},"id":"17883","type":"PanTool"},{"attributes":{},"id":"17879","type":"BasicTicker"},{"attributes":{},"id":"17904","type":"BasicTickFormatter"},{"attributes":{},"id":"17874","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17883","type":"PanTool"},{"id":"17884","type":"WheelZoomTool"},{"id":"17885","type":"BoxZoomTool"},{"id":"17886","type":"SaveTool"},{"id":"17887","type":"ResetTool"},{"id":"17888","type":"HelpTool"}]},"id":"17889","type":"Toolbar"},{"attributes":{"formatter":{"id":"17902","type":"BasicTickFormatter"},"ticker":{"id":"17879","type":"BasicTicker"}},"id":"17878","type":"LinearAxis"},{"attributes":{},"id":"17888","type":"HelpTool"},{"attributes":{"callback":null},"id":"17865","type":"DataRange1d"},{"attributes":{"ticker":{"id":"17874","type":"BasicTicker"}},"id":"17877","type":"Grid"},{"attributes":{},"id":"17902","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"17904","type":"BasicTickFormatter"},"ticker":{"id":"17874","type":"BasicTicker"}},"id":"17873","type":"LinearAxis"},{"attributes":{"data_source":{"id":"17896","type":"ColumnDataSource"},"glyph":{"id":"17897","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17898","type":"Circle"},"selection_glyph":null,"view":{"id":"17900","type":"CDSView"}},"id":"17899","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17908","type":"BoxAnnotation"},{"attributes":{},"id":"17907","type":"UnionRenderers"},{"attributes":{},"id":"17886","type":"SaveTool"},{"attributes":{"overlay":{"id":"17908","type":"BoxAnnotation"}},"id":"17885","type":"BoxZoomTool"},{"attributes":{},"id":"17906","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17897","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"17906","type":"Selection"},"selection_policy":{"id":"17907","type":"UnionRenderers"}},"id":"17896","type":"ColumnDataSource"},{"attributes":{"source":{"id":"17896","type":"ColumnDataSource"}},"id":"17900","type":"CDSView"},{"attributes":{},"id":"17887","type":"ResetTool"}],"root_ids":["17862"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"33212f31-9220-4e2c-ba11-307fb86cc5b1","roots":{"17862":"d0f79278-8dd2-4549-8598-25cc44879c56"}}];
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