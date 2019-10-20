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
      };var element = document.getElementById("9f5efd0b-9e31-4d04-a2f0-4553bce87e53");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '9f5efd0b-9e31-4d04-a2f0-4553bce87e53' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.4.min.js"];
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
                    
                  var docs_json = '{"7a8c1617-aade-4d1b-a102-5891f92bcc4a":{"roots":{"references":[{"attributes":{},"id":"34108","type":"UnionRenderers"},{"attributes":{},"id":"34079","type":"BasicTicker"},{"attributes":{"source":{"id":"34096","type":"ColumnDataSource"}},"id":"34100","type":"CDSView"},{"attributes":{"formatter":{"id":"34104","type":"BasicTickFormatter"},"ticker":{"id":"34079","type":"BasicTicker"}},"id":"34078","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34109","type":"BoxAnnotation"},{"attributes":{},"id":"34083","type":"PanTool"},{"attributes":{"below":[{"id":"34073","type":"LinearAxis"}],"center":[{"id":"34077","type":"Grid"},{"id":"34082","type":"Grid"}],"left":[{"id":"34078","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"34099","type":"GlyphRenderer"}],"title":{"id":"34102","type":"Title"},"toolbar":{"id":"34089","type":"Toolbar"},"x_range":{"id":"34065","type":"DataRange1d"},"x_scale":{"id":"34069","type":"LinearScale"},"y_range":{"id":"34067","type":"DataRange1d"},"y_scale":{"id":"34071","type":"LinearScale"}},"id":"34064","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"34107","type":"Selection"},"selection_policy":{"id":"34108","type":"UnionRenderers"}},"id":"34096","type":"ColumnDataSource"},{"attributes":{},"id":"34084","type":"WheelZoomTool"},{"attributes":{"bounds":[2,4],"formatter":{"id":"34106","type":"BasicTickFormatter"},"ticker":{"id":"34074","type":"BasicTicker"}},"id":"34073","type":"LinearAxis"},{"attributes":{},"id":"34071","type":"LinearScale"},{"attributes":{},"id":"34107","type":"Selection"},{"attributes":{"callback":null},"id":"34065","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34083","type":"PanTool"},{"id":"34084","type":"WheelZoomTool"},{"id":"34085","type":"BoxZoomTool"},{"id":"34086","type":"SaveTool"},{"id":"34087","type":"ResetTool"},{"id":"34088","type":"HelpTool"}]},"id":"34089","type":"Toolbar"},{"attributes":{},"id":"34104","type":"BasicTickFormatter"},{"attributes":{},"id":"34086","type":"SaveTool"},{"attributes":{},"id":"34087","type":"ResetTool"},{"attributes":{"dimension":1,"ticker":{"id":"34079","type":"BasicTicker"}},"id":"34082","type":"Grid"},{"attributes":{},"id":"34106","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"34074","type":"BasicTicker"}},"id":"34077","type":"Grid"},{"attributes":{"callback":null},"id":"34067","type":"DataRange1d"},{"attributes":{},"id":"34069","type":"LinearScale"},{"attributes":{},"id":"34088","type":"HelpTool"},{"attributes":{"data_source":{"id":"34096","type":"ColumnDataSource"},"glyph":{"id":"34097","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34098","type":"Circle"},"selection_glyph":null,"view":{"id":"34100","type":"CDSView"}},"id":"34099","type":"GlyphRenderer"},{"attributes":{},"id":"34074","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34098","type":"Circle"},{"attributes":{"text":""},"id":"34102","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34097","type":"Circle"},{"attributes":{"overlay":{"id":"34109","type":"BoxAnnotation"}},"id":"34085","type":"BoxZoomTool"}],"root_ids":["34064"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"7a8c1617-aade-4d1b-a102-5891f92bcc4a","roots":{"34064":"9f5efd0b-9e31-4d04-a2f0-4553bce87e53"}}];
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