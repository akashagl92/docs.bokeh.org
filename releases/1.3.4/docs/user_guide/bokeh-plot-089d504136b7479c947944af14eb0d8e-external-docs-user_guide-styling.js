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
      };var element = document.getElementById("d7188f29-bd0f-4ac6-9856-11902ffe9d0d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd7188f29-bd0f-4ac6-9856-11902ffe9d0d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7cab94db-46a8-42e1-a042-64ec2b1b2cdf":{"roots":{"references":[{"attributes":{"text":""},"id":"34978","type":"Title"},{"attributes":{},"id":"34945","type":"LinearScale"},{"attributes":{},"id":"34960","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"34943","type":"DataRange1d"},{"attributes":{},"id":"34964","type":"HelpTool"},{"attributes":{"data_source":{"id":"34972","type":"ColumnDataSource"},"glyph":{"id":"34973","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34974","type":"Circle"},"selection_glyph":null,"view":{"id":"34976","type":"CDSView"}},"id":"34975","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34974","type":"Circle"},{"attributes":{},"id":"34980","type":"BasicTickFormatter"},{"attributes":{},"id":"34963","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"34983","type":"Selection"},"selection_policy":{"id":"34984","type":"UnionRenderers"}},"id":"34972","type":"ColumnDataSource"},{"attributes":{"source":{"id":"34972","type":"ColumnDataSource"}},"id":"34976","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34985","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34959","type":"PanTool"},{"id":"34960","type":"WheelZoomTool"},{"id":"34961","type":"BoxZoomTool"},{"id":"34962","type":"SaveTool"},{"id":"34963","type":"ResetTool"},{"id":"34964","type":"HelpTool"}]},"id":"34965","type":"Toolbar"},{"attributes":{"formatter":{"id":"34982","type":"BasicTickFormatter"},"ticker":{"id":"34950","type":"BasicTicker"}},"id":"34949","type":"LinearAxis"},{"attributes":{"below":[{"id":"34949","type":"LinearAxis"}],"center":[{"id":"34953","type":"Grid"},{"id":"34958","type":"Grid"}],"left":[{"id":"34954","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"34975","type":"GlyphRenderer"}],"title":{"id":"34978","type":"Title"},"toolbar":{"id":"34965","type":"Toolbar"},"x_range":{"id":"34941","type":"DataRange1d"},"x_scale":{"id":"34945","type":"LinearScale"},"y_range":{"id":"34943","type":"DataRange1d"},"y_scale":{"id":"34947","type":"LinearScale"}},"id":"34940","subtype":"Figure","type":"Plot"},{"attributes":{"bounds":[2,4],"ticker":{"id":"34950","type":"BasicTicker"}},"id":"34953","type":"Grid"},{"attributes":{},"id":"34950","type":"BasicTicker"},{"attributes":{"bounds":[2,4],"dimension":1,"ticker":{"id":"34955","type":"BasicTicker"}},"id":"34958","type":"Grid"},{"attributes":{"formatter":{"id":"34980","type":"BasicTickFormatter"},"ticker":{"id":"34955","type":"BasicTicker"}},"id":"34954","type":"LinearAxis"},{"attributes":{},"id":"34962","type":"SaveTool"},{"attributes":{},"id":"34955","type":"BasicTicker"},{"attributes":{},"id":"34982","type":"BasicTickFormatter"},{"attributes":{},"id":"34947","type":"LinearScale"},{"attributes":{"callback":null},"id":"34941","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34973","type":"Circle"},{"attributes":{"overlay":{"id":"34985","type":"BoxAnnotation"}},"id":"34961","type":"BoxZoomTool"},{"attributes":{},"id":"34983","type":"Selection"},{"attributes":{},"id":"34984","type":"UnionRenderers"},{"attributes":{},"id":"34959","type":"PanTool"}],"root_ids":["34940"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"7cab94db-46a8-42e1-a042-64ec2b1b2cdf","roots":{"34940":"d7188f29-bd0f-4ac6-9856-11902ffe9d0d"}}];
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