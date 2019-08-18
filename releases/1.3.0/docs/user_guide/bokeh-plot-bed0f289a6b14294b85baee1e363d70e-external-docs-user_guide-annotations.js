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
      };var element = document.getElementById("5606962d-703d-440a-9e3b-f37c678fc4be");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5606962d-703d-440a-9e3b-f37c678fc4be' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1f1d9b3a-2aff-4b17-bb63-490b07cdcf0d":{"roots":{"references":[{"attributes":{"callback":null},"id":"18216","type":"DataRange1d"},{"attributes":{},"id":"18235","type":"SaveTool"},{"attributes":{},"id":"18223","type":"BasicTicker"},{"attributes":{"data_source":{"id":"18245","type":"ColumnDataSource"},"glyph":{"id":"18246","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18247","type":"Circle"},"selection_glyph":null,"view":{"id":"18249","type":"CDSView"}},"id":"18248","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"18257","type":"Selection"},"selection_policy":{"id":"18256","type":"UnionRenderers"}},"id":"18245","type":"ColumnDataSource"},{"attributes":{},"id":"18228","type":"BasicTicker"},{"attributes":{},"id":"18256","type":"UnionRenderers"},{"attributes":{"text":"Top Title with Toolbar"},"id":"18212","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18255","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"18246","type":"Circle"},{"attributes":{"dimension":1,"ticker":{"id":"18228","type":"BasicTicker"}},"id":"18231","type":"Grid"},{"attributes":{},"id":"18257","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18232","type":"PanTool"},{"id":"18233","type":"WheelZoomTool"},{"id":"18234","type":"BoxZoomTool"},{"id":"18235","type":"SaveTool"},{"id":"18236","type":"ResetTool"},{"id":"18237","type":"HelpTool"}]},"id":"18238","type":"Toolbar"},{"attributes":{"source":{"id":"18245","type":"ColumnDataSource"}},"id":"18249","type":"CDSView"},{"attributes":{},"id":"18236","type":"ResetTool"},{"attributes":{},"id":"18220","type":"LinearScale"},{"attributes":{},"id":"18237","type":"HelpTool"},{"attributes":{"overlay":{"id":"18255","type":"BoxAnnotation"}},"id":"18234","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"18222","type":"LinearAxis"}],"center":[{"id":"18226","type":"Grid"},{"id":"18231","type":"Grid"}],"left":[{"id":"18227","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"18248","type":"GlyphRenderer"}],"title":{"id":"18212","type":"Title"},"toolbar":{"id":"18238","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"18214","type":"DataRange1d"},"x_scale":{"id":"18218","type":"LinearScale"},"y_range":{"id":"18216","type":"DataRange1d"},"y_scale":{"id":"18220","type":"LinearScale"}},"id":"18211","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18233","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"18214","type":"DataRange1d"},{"attributes":{},"id":"18252","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"18223","type":"BasicTicker"}},"id":"18226","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"18247","type":"Circle"},{"attributes":{},"id":"18232","type":"PanTool"},{"attributes":{},"id":"18254","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"18252","type":"BasicTickFormatter"},"ticker":{"id":"18223","type":"BasicTicker"}},"id":"18222","type":"LinearAxis"},{"attributes":{},"id":"18218","type":"LinearScale"},{"attributes":{"formatter":{"id":"18254","type":"BasicTickFormatter"},"ticker":{"id":"18228","type":"BasicTicker"}},"id":"18227","type":"LinearAxis"}],"root_ids":["18211"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"1f1d9b3a-2aff-4b17-bb63-490b07cdcf0d","roots":{"18211":"5606962d-703d-440a-9e3b-f37c678fc4be"}}];
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