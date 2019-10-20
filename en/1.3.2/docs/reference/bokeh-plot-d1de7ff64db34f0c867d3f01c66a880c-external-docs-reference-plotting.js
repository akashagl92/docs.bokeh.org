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
      };var element = document.getElementById("b23fb3f2-d57f-4050-bd7c-408c55440ab4");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b23fb3f2-d57f-4050-bd7c-408c55440ab4' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1e9f085e-62c0-45d1-a4b0-83a1c29f1670":{"roots":{"references":[{"attributes":{"overlay":{"id":"16245","type":"BoxAnnotation"}},"id":"16221","type":"BoxZoomTool"},{"attributes":{},"id":"16220","type":"WheelZoomTool"},{"attributes":{},"id":"16241","type":"BasicTickFormatter"},{"attributes":{},"id":"16210","type":"BasicTicker"},{"attributes":{},"id":"16222","type":"SaveTool"},{"attributes":{},"id":"16243","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"16210","type":"BasicTicker"}},"id":"16213","type":"Grid"},{"attributes":{},"id":"16244","type":"Selection"},{"attributes":{},"id":"16223","type":"ResetTool"},{"attributes":{"formatter":{"id":"16241","type":"BasicTickFormatter"},"ticker":{"id":"16215","type":"BasicTicker"}},"id":"16214","type":"LinearAxis"},{"attributes":{},"id":"16224","type":"HelpTool"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.4},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"16234","type":"Oval"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16245","type":"BoxAnnotation"},{"attributes":{},"id":"16215","type":"BasicTicker"},{"attributes":{"callback":null},"id":"16201","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16219","type":"PanTool"},{"id":"16220","type":"WheelZoomTool"},{"id":"16221","type":"BoxZoomTool"},{"id":"16222","type":"SaveTool"},{"id":"16223","type":"ResetTool"},{"id":"16224","type":"HelpTool"}]},"id":"16225","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"16215","type":"BasicTicker"}},"id":"16218","type":"Grid"},{"attributes":{},"id":"16207","type":"LinearScale"},{"attributes":{"source":{"id":"16232","type":"ColumnDataSource"}},"id":"16236","type":"CDSView"},{"attributes":{"callback":null},"id":"16203","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1D91C0"},"height":{"units":"data","value":0.4},"line_color":{"value":"#1D91C0"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"16233","type":"Oval"},{"attributes":{},"id":"16205","type":"LinearScale"},{"attributes":{"below":[{"id":"16209","type":"LinearAxis"}],"center":[{"id":"16213","type":"Grid"},{"id":"16218","type":"Grid"}],"left":[{"id":"16214","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16235","type":"GlyphRenderer"}],"title":{"id":"16237","type":"Title"},"toolbar":{"id":"16225","type":"Toolbar"},"x_range":{"id":"16201","type":"DataRange1d"},"x_scale":{"id":"16205","type":"LinearScale"},"y_range":{"id":"16203","type":"DataRange1d"},"y_scale":{"id":"16207","type":"LinearScale"}},"id":"16200","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"16244","type":"Selection"},"selection_policy":{"id":"16243","type":"UnionRenderers"}},"id":"16232","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"16237","type":"Title"},{"attributes":{"data_source":{"id":"16232","type":"ColumnDataSource"},"glyph":{"id":"16233","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16234","type":"Oval"},"selection_glyph":null,"view":{"id":"16236","type":"CDSView"}},"id":"16235","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"16239","type":"BasicTickFormatter"},"ticker":{"id":"16210","type":"BasicTicker"}},"id":"16209","type":"LinearAxis"},{"attributes":{},"id":"16219","type":"PanTool"},{"attributes":{},"id":"16239","type":"BasicTickFormatter"}],"root_ids":["16200"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"1e9f085e-62c0-45d1-a4b0-83a1c29f1670","roots":{"16200":"b23fb3f2-d57f-4050-bd7c-408c55440ab4"}}];
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