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
      };var element = document.getElementById("a1ca9716-3793-4f1a-8cb6-b2b1691dddb7");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a1ca9716-3793-4f1a-8cb6-b2b1691dddb7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2bcb6a72-0580-4ba3-9714-135ef5d2bfd7":{"roots":{"references":[{"attributes":{"source":{"id":"18246","type":"ColumnDataSource"}},"id":"18250","type":"CDSView"},{"attributes":{"callback":null},"id":"18217","type":"DataRange1d"},{"attributes":{"ticker":{"id":"18224","type":"BasicTicker"}},"id":"18227","type":"Grid"},{"attributes":{},"id":"18233","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"18248","type":"Circle"},{"attributes":{},"id":"18221","type":"LinearScale"},{"attributes":{},"id":"18236","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"18257","type":"Selection"},"selection_policy":{"id":"18256","type":"UnionRenderers"}},"id":"18246","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18233","type":"PanTool"},{"id":"18234","type":"WheelZoomTool"},{"id":"18235","type":"BoxZoomTool"},{"id":"18236","type":"SaveTool"},{"id":"18237","type":"ResetTool"},{"id":"18238","type":"HelpTool"}]},"id":"18239","type":"Toolbar"},{"attributes":{},"id":"18237","type":"ResetTool"},{"attributes":{"data_source":{"id":"18246","type":"ColumnDataSource"},"glyph":{"id":"18247","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18248","type":"Circle"},"selection_glyph":null,"view":{"id":"18250","type":"CDSView"}},"id":"18249","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"18229","type":"BasicTicker"}},"id":"18232","type":"Grid"},{"attributes":{},"id":"18229","type":"BasicTicker"},{"attributes":{},"id":"18224","type":"BasicTicker"},{"attributes":{"text":"Top Title with Toolbar"},"id":"18213","type":"Title"},{"attributes":{"formatter":{"id":"18252","type":"BasicTickFormatter"},"ticker":{"id":"18224","type":"BasicTicker"}},"id":"18223","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"18247","type":"Circle"},{"attributes":{"overlay":{"id":"18258","type":"BoxAnnotation"}},"id":"18235","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"18254","type":"BasicTickFormatter"},"ticker":{"id":"18229","type":"BasicTicker"}},"id":"18228","type":"LinearAxis"},{"attributes":{},"id":"18257","type":"Selection"},{"attributes":{},"id":"18234","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"18223","type":"LinearAxis"}],"center":[{"id":"18227","type":"Grid"},{"id":"18232","type":"Grid"}],"left":[{"id":"18228","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"18249","type":"GlyphRenderer"}],"title":{"id":"18213","type":"Title"},"toolbar":{"id":"18239","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"18215","type":"DataRange1d"},"x_scale":{"id":"18219","type":"LinearScale"},"y_range":{"id":"18217","type":"DataRange1d"},"y_scale":{"id":"18221","type":"LinearScale"}},"id":"18212","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18254","type":"BasicTickFormatter"},{"attributes":{},"id":"18219","type":"LinearScale"},{"attributes":{},"id":"18252","type":"BasicTickFormatter"},{"attributes":{},"id":"18256","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"18215","type":"DataRange1d"},{"attributes":{},"id":"18238","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18258","type":"BoxAnnotation"}],"root_ids":["18212"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"2bcb6a72-0580-4ba3-9714-135ef5d2bfd7","roots":{"18212":"a1ca9716-3793-4f1a-8cb6-b2b1691dddb7"}}];
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