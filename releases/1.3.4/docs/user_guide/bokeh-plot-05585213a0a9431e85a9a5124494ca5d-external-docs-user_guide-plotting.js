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
      };var element = document.getElementById("0d1912a9-66a2-442e-999d-f1d390131ec4");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '0d1912a9-66a2-442e-999d-f1d390131ec4' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f3cacd5f-a6e4-4782-955f-a82debf9c1ac":{"roots":{"references":[{"attributes":{},"id":"28002","type":"ResetTool"},{"attributes":{},"id":"27986","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28024","type":"BoxAnnotation"},{"attributes":{},"id":"28019","type":"BasicTickFormatter"},{"attributes":{},"id":"27984","type":"LinearScale"},{"attributes":{},"id":"28003","type":"HelpTool"},{"attributes":{"formatter":{"id":"28021","type":"BasicTickFormatter"},"ticker":{"id":"27989","type":"BasicTicker"}},"id":"27988","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"28013","type":"MultiLine"},{"attributes":{"source":{"id":"28011","type":"ColumnDataSource"}},"id":"28015","type":"CDSView"},{"attributes":{"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"28012","type":"MultiLine"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27998","type":"PanTool"},{"id":"27999","type":"WheelZoomTool"},{"id":"28000","type":"BoxZoomTool"},{"id":"28001","type":"SaveTool"},{"id":"28002","type":"ResetTool"},{"id":"28003","type":"HelpTool"}]},"id":"28004","type":"Toolbar"},{"attributes":{"callback":null},"id":"27980","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]},"selected":{"id":"28022","type":"Selection"},"selection_policy":{"id":"28023","type":"UnionRenderers"}},"id":"28011","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"27982","type":"DataRange1d"},{"attributes":{"text":""},"id":"28017","type":"Title"},{"attributes":{"formatter":{"id":"28019","type":"BasicTickFormatter"},"ticker":{"id":"27994","type":"BasicTicker"}},"id":"27993","type":"LinearAxis"},{"attributes":{},"id":"27994","type":"BasicTicker"},{"attributes":{},"id":"28022","type":"Selection"},{"attributes":{"below":[{"id":"27988","type":"LinearAxis"}],"center":[{"id":"27992","type":"Grid"},{"id":"27997","type":"Grid"}],"left":[{"id":"27993","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28014","type":"GlyphRenderer"}],"title":{"id":"28017","type":"Title"},"toolbar":{"id":"28004","type":"Toolbar"},"x_range":{"id":"27980","type":"DataRange1d"},"x_scale":{"id":"27984","type":"LinearScale"},"y_range":{"id":"27982","type":"DataRange1d"},"y_scale":{"id":"27986","type":"LinearScale"}},"id":"27979","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27998","type":"PanTool"},{"attributes":{},"id":"27989","type":"BasicTicker"},{"attributes":{},"id":"28021","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"28011","type":"ColumnDataSource"},"glyph":{"id":"28012","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28013","type":"MultiLine"},"selection_glyph":null,"view":{"id":"28015","type":"CDSView"}},"id":"28014","type":"GlyphRenderer"},{"attributes":{},"id":"27999","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"27989","type":"BasicTicker"}},"id":"27992","type":"Grid"},{"attributes":{"overlay":{"id":"28024","type":"BoxAnnotation"}},"id":"28000","type":"BoxZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"27994","type":"BasicTicker"}},"id":"27997","type":"Grid"},{"attributes":{},"id":"28001","type":"SaveTool"},{"attributes":{},"id":"28023","type":"UnionRenderers"}],"root_ids":["27979"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"f3cacd5f-a6e4-4782-955f-a82debf9c1ac","roots":{"27979":"0d1912a9-66a2-442e-999d-f1d390131ec4"}}];
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