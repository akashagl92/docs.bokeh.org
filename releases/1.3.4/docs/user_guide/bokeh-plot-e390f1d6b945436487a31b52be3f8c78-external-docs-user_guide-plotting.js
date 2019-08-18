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
      };var element = document.getElementById("a6db84c1-a4e5-4677-9b0d-e42d8cd60fd3");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a6db84c1-a4e5-4677-9b0d-e42d8cd60fd3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4782dc68-d9b8-4427-8418-8640fe9ebc13":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29690","type":"PanTool"},{"id":"29691","type":"WheelZoomTool"},{"id":"29692","type":"BoxZoomTool"},{"id":"29693","type":"SaveTool"},{"id":"29694","type":"ResetTool"},{"id":"29695","type":"HelpTool"}]},"id":"29696","type":"Toolbar"},{"attributes":{},"id":"29678","type":"LinearScale"},{"attributes":{"below":[{"id":"29680","type":"LinearAxis"}],"center":[{"id":"29684","type":"Grid"},{"id":"29689","type":"Grid"}],"left":[{"id":"29685","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29706","type":"GlyphRenderer"}],"title":{"id":"29709","type":"Title"},"toolbar":{"id":"29696","type":"Toolbar"},"x_range":{"id":"29672","type":"DataRange1d"},"x_scale":{"id":"29676","type":"LinearScale"},"y_range":{"id":"29674","type":"DataRange1d"},"y_scale":{"id":"29678","type":"LinearScale"}},"id":"29671","subtype":"Figure","type":"Plot"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"data","value":0.3},"line_color":{"value":"#CAB2D6"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"29704","type":"Ellipse"},{"attributes":{"text":""},"id":"29709","type":"Title"},{"attributes":{},"id":"29715","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"29703","type":"ColumnDataSource"},"glyph":{"id":"29704","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29705","type":"Ellipse"},"selection_glyph":null,"view":{"id":"29707","type":"CDSView"}},"id":"29706","type":"GlyphRenderer"},{"attributes":{},"id":"29681","type":"BasicTicker"},{"attributes":{},"id":"29690","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29716","type":"BoxAnnotation"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.3},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"29705","type":"Ellipse"},{"attributes":{"callback":null},"id":"29672","type":"DataRange1d"},{"attributes":{},"id":"29691","type":"WheelZoomTool"},{"attributes":{"source":{"id":"29703","type":"ColumnDataSource"}},"id":"29707","type":"CDSView"},{"attributes":{},"id":"29695","type":"HelpTool"},{"attributes":{"ticker":{"id":"29681","type":"BasicTicker"}},"id":"29684","type":"Grid"},{"attributes":{"callback":null},"id":"29674","type":"DataRange1d"},{"attributes":{"overlay":{"id":"29716","type":"BoxAnnotation"}},"id":"29692","type":"BoxZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"29686","type":"BasicTicker"}},"id":"29689","type":"Grid"},{"attributes":{},"id":"29676","type":"LinearScale"},{"attributes":{"formatter":{"id":"29711","type":"BasicTickFormatter"},"ticker":{"id":"29686","type":"BasicTicker"}},"id":"29685","type":"LinearAxis"},{"attributes":{},"id":"29693","type":"SaveTool"},{"attributes":{},"id":"29711","type":"BasicTickFormatter"},{"attributes":{},"id":"29686","type":"BasicTicker"},{"attributes":{},"id":"29694","type":"ResetTool"},{"attributes":{},"id":"29713","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"29713","type":"BasicTickFormatter"},"ticker":{"id":"29681","type":"BasicTicker"}},"id":"29680","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"width":[0.2,0.3,0.1],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"29714","type":"Selection"},"selection_policy":{"id":"29715","type":"UnionRenderers"}},"id":"29703","type":"ColumnDataSource"},{"attributes":{},"id":"29714","type":"Selection"}],"root_ids":["29671"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"4782dc68-d9b8-4427-8418-8640fe9ebc13","roots":{"29671":"a6db84c1-a4e5-4677-9b0d-e42d8cd60fd3"}}];
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