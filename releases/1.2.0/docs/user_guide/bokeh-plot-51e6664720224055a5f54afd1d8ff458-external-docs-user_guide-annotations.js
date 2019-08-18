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
      };var element = document.getElementById("475333bb-8bca-4d5c-b937-745f71acff04");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '475333bb-8bca-4d5c-b937-745f71acff04' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"67c6a0ef-6561-4379-80e3-482cc113fdb2":{"roots":{"references":[{"attributes":{},"id":"18122","type":"BasicTicker"},{"attributes":{"source":{"id":"18144","type":"ColumnDataSource"}},"id":"18148","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"18145","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18157","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"18157","type":"BoxAnnotation"}},"id":"18133","type":"BoxZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"18127","type":"BasicTicker"}},"id":"18130","type":"Grid"},{"attributes":{},"id":"18119","type":"LinearScale"},{"attributes":{"text":"Left Title"},"id":"18111","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18131","type":"PanTool"},{"id":"18132","type":"WheelZoomTool"},{"id":"18133","type":"BoxZoomTool"},{"id":"18134","type":"SaveTool"},{"id":"18135","type":"ResetTool"},{"id":"18136","type":"HelpTool"}]},"id":"18137","type":"Toolbar"},{"attributes":{"callback":null},"id":"18115","type":"DataRange1d"},{"attributes":{},"id":"18117","type":"LinearScale"},{"attributes":{},"id":"18132","type":"WheelZoomTool"},{"attributes":{},"id":"18151","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"18122","type":"BasicTicker"}},"id":"18125","type":"Grid"},{"attributes":{},"id":"18127","type":"BasicTicker"},{"attributes":{},"id":"18153","type":"BasicTickFormatter"},{"attributes":{},"id":"18131","type":"PanTool"},{"attributes":{"callback":null},"id":"18113","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"18155","type":"Selection"},"selection_policy":{"id":"18156","type":"UnionRenderers"}},"id":"18144","type":"ColumnDataSource"},{"attributes":{},"id":"18155","type":"Selection"},{"attributes":{"align":"center","text":"Bottom Centered Title"},"id":"18149","type":"Title"},{"attributes":{"formatter":{"id":"18153","type":"BasicTickFormatter"},"ticker":{"id":"18122","type":"BasicTicker"}},"id":"18121","type":"LinearAxis"},{"attributes":{"below":[{"id":"18121","type":"LinearAxis"},{"id":"18149","type":"Title"}],"center":[{"id":"18125","type":"Grid"},{"id":"18130","type":"Grid"}],"left":[{"id":"18126","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"18147","type":"GlyphRenderer"}],"title":{"id":"18111","type":"Title"},"title_location":"left","toolbar":{"id":"18137","type":"Toolbar"},"x_range":{"id":"18113","type":"DataRange1d"},"x_scale":{"id":"18117","type":"LinearScale"},"y_range":{"id":"18115","type":"DataRange1d"},"y_scale":{"id":"18119","type":"LinearScale"}},"id":"18110","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"18146","type":"Circle"},{"attributes":{"data_source":{"id":"18144","type":"ColumnDataSource"},"glyph":{"id":"18145","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18146","type":"Circle"},"selection_glyph":null,"view":{"id":"18148","type":"CDSView"}},"id":"18147","type":"GlyphRenderer"},{"attributes":{},"id":"18134","type":"SaveTool"},{"attributes":{"formatter":{"id":"18151","type":"BasicTickFormatter"},"ticker":{"id":"18127","type":"BasicTicker"}},"id":"18126","type":"LinearAxis"},{"attributes":{},"id":"18136","type":"HelpTool"},{"attributes":{},"id":"18156","type":"UnionRenderers"},{"attributes":{},"id":"18135","type":"ResetTool"}],"root_ids":["18110"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"67c6a0ef-6561-4379-80e3-482cc113fdb2","roots":{"18110":"475333bb-8bca-4d5c-b937-745f71acff04"}}];
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