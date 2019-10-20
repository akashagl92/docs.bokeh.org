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
      };var element = document.getElementById("18a9c5fd-0c06-4cd4-96af-2da63cab0074");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '18a9c5fd-0c06-4cd4-96af-2da63cab0074' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f205fd4d-c776-4db9-8313-02927d70ec05":{"roots":{"references":[{"attributes":{"source":{"id":"29620","type":"ColumnDataSource"}},"id":"29624","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29607","type":"PanTool"},{"id":"29608","type":"WheelZoomTool"},{"id":"29609","type":"BoxZoomTool"},{"id":"29610","type":"SaveTool"},{"id":"29611","type":"ResetTool"},{"id":"29612","type":"HelpTool"}]},"id":"29613","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29633","type":"BoxAnnotation"},{"attributes":{},"id":"29595","type":"LinearScale"},{"attributes":{"text":""},"id":"29626","type":"Title"},{"attributes":{"below":[{"id":"29597","type":"LinearAxis"}],"center":[{"id":"29601","type":"Grid"},{"id":"29606","type":"Grid"}],"left":[{"id":"29602","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29623","type":"GlyphRenderer"}],"title":{"id":"29626","type":"Title"},"toolbar":{"id":"29613","type":"Toolbar"},"x_range":{"id":"29589","type":"DataRange1d"},"x_scale":{"id":"29593","type":"LinearScale"},"y_range":{"id":"29591","type":"DataRange1d"},"y_scale":{"id":"29595","type":"LinearScale"}},"id":"29588","subtype":"Figure","type":"Plot"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"29621","type":"Oval"},{"attributes":{"formatter":{"id":"29630","type":"BasicTickFormatter"},"ticker":{"id":"29598","type":"BasicTicker"}},"id":"29597","type":"LinearAxis"},{"attributes":{},"id":"29607","type":"PanTool"},{"attributes":{"ticker":{"id":"29598","type":"BasicTicker"}},"id":"29601","type":"Grid"},{"attributes":{"callback":null},"id":"29589","type":"DataRange1d"},{"attributes":{},"id":"29608","type":"WheelZoomTool"},{"attributes":{},"id":"29612","type":"HelpTool"},{"attributes":{"callback":null},"id":"29591","type":"DataRange1d"},{"attributes":{"overlay":{"id":"29633","type":"BoxAnnotation"}},"id":"29609","type":"BoxZoomTool"},{"attributes":{},"id":"29630","type":"BasicTickFormatter"},{"attributes":{},"id":"29593","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"29603","type":"BasicTicker"}},"id":"29606","type":"Grid"},{"attributes":{},"id":"29631","type":"Selection"},{"attributes":{},"id":"29632","type":"UnionRenderers"},{"attributes":{},"id":"29610","type":"SaveTool"},{"attributes":{"formatter":{"id":"29628","type":"BasicTickFormatter"},"ticker":{"id":"29603","type":"BasicTicker"}},"id":"29602","type":"LinearAxis"},{"attributes":{},"id":"29611","type":"ResetTool"},{"attributes":{},"id":"29628","type":"BasicTickFormatter"},{"attributes":{},"id":"29598","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"29631","type":"Selection"},"selection_policy":{"id":"29632","type":"UnionRenderers"}},"id":"29620","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"29620","type":"ColumnDataSource"},"glyph":{"id":"29621","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29622","type":"Oval"},"selection_glyph":null,"view":{"id":"29624","type":"CDSView"}},"id":"29623","type":"GlyphRenderer"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"29622","type":"Oval"},{"attributes":{},"id":"29603","type":"BasicTicker"}],"root_ids":["29588"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"f205fd4d-c776-4db9-8313-02927d70ec05","roots":{"29588":"18a9c5fd-0c06-4cd4-96af-2da63cab0074"}}];
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