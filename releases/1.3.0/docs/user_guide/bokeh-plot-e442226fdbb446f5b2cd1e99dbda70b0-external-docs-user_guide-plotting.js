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
      };var element = document.getElementById("181888a7-48c4-43b7-9777-31449bd5644e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '181888a7-48c4-43b7-9777-31449bd5644e' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"be0632f6-0db2-4d79-a4bb-33cb596b0220":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29606","type":"PanTool"},{"id":"29607","type":"WheelZoomTool"},{"id":"29608","type":"BoxZoomTool"},{"id":"29609","type":"SaveTool"},{"id":"29610","type":"ResetTool"},{"id":"29611","type":"HelpTool"}]},"id":"29612","type":"Toolbar"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"29621","type":"Oval"},{"attributes":{},"id":"29609","type":"SaveTool"},{"attributes":{},"id":"29629","type":"BasicTickFormatter"},{"attributes":{},"id":"29602","type":"BasicTicker"},{"attributes":{},"id":"29610","type":"ResetTool"},{"attributes":{"below":[{"id":"29596","type":"LinearAxis"}],"center":[{"id":"29600","type":"Grid"},{"id":"29605","type":"Grid"}],"left":[{"id":"29601","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29622","type":"GlyphRenderer"}],"title":{"id":"29625","type":"Title"},"toolbar":{"id":"29612","type":"Toolbar"},"x_range":{"id":"29588","type":"DataRange1d"},"x_scale":{"id":"29592","type":"LinearScale"},"y_range":{"id":"29590","type":"DataRange1d"},"y_scale":{"id":"29594","type":"LinearScale"}},"id":"29587","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"ticker":{"id":"29602","type":"BasicTicker"}},"id":"29605","type":"Grid"},{"attributes":{"formatter":{"id":"29629","type":"BasicTickFormatter"},"ticker":{"id":"29602","type":"BasicTicker"}},"id":"29601","type":"LinearAxis"},{"attributes":{"data_source":{"id":"29619","type":"ColumnDataSource"},"glyph":{"id":"29620","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29621","type":"Oval"},"selection_glyph":null,"view":{"id":"29623","type":"CDSView"}},"id":"29622","type":"GlyphRenderer"},{"attributes":{},"id":"29631","type":"UnionRenderers"},{"attributes":{},"id":"29607","type":"WheelZoomTool"},{"attributes":{},"id":"29611","type":"HelpTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"29620","type":"Oval"},{"attributes":{},"id":"29597","type":"BasicTicker"},{"attributes":{"callback":null},"id":"29590","type":"DataRange1d"},{"attributes":{},"id":"29627","type":"BasicTickFormatter"},{"attributes":{},"id":"29594","type":"LinearScale"},{"attributes":{"formatter":{"id":"29627","type":"BasicTickFormatter"},"ticker":{"id":"29597","type":"BasicTicker"}},"id":"29596","type":"LinearAxis"},{"attributes":{"callback":null},"id":"29588","type":"DataRange1d"},{"attributes":{"overlay":{"id":"29630","type":"BoxAnnotation"}},"id":"29608","type":"BoxZoomTool"},{"attributes":{"text":""},"id":"29625","type":"Title"},{"attributes":{},"id":"29632","type":"Selection"},{"attributes":{},"id":"29592","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29630","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"29597","type":"BasicTicker"}},"id":"29600","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"29632","type":"Selection"},"selection_policy":{"id":"29631","type":"UnionRenderers"}},"id":"29619","type":"ColumnDataSource"},{"attributes":{"source":{"id":"29619","type":"ColumnDataSource"}},"id":"29623","type":"CDSView"},{"attributes":{},"id":"29606","type":"PanTool"}],"root_ids":["29587"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"be0632f6-0db2-4d79-a4bb-33cb596b0220","roots":{"29587":"181888a7-48c4-43b7-9777-31449bd5644e"}}];
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