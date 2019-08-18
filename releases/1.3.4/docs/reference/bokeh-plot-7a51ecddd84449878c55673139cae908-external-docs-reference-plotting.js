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
      };var element = document.getElementById("0ef04eda-e986-46f5-9ee1-c26355120715");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '0ef04eda-e986-46f5-9ee1-c26355120715' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
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
                    
                  var docs_json = '{"5ecfa1da-7b44-4d18-8509-3297939646bc":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16302","type":"PanTool"},{"id":"16303","type":"WheelZoomTool"},{"id":"16304","type":"BoxZoomTool"},{"id":"16305","type":"SaveTool"},{"id":"16306","type":"ResetTool"},{"id":"16307","type":"HelpTool"}]},"id":"16308","type":"Toolbar"},{"attributes":{},"id":"16305","type":"SaveTool"},{"attributes":{"text":""},"id":"16321","type":"Title"},{"attributes":{},"id":"16306","type":"ResetTool"},{"attributes":{"data_source":{"id":"16315","type":"ColumnDataSource"},"glyph":{"id":"16316","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16317","type":"Patch"},"selection_glyph":null,"view":{"id":"16319","type":"CDSView"}},"id":"16318","type":"GlyphRenderer"},{"attributes":{},"id":"16303","type":"WheelZoomTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"16317","type":"Patch"},{"attributes":{},"id":"16288","type":"LinearScale"},{"attributes":{"callback":null},"id":"16284","type":"DataRange1d"},{"attributes":{},"id":"16307","type":"HelpTool"},{"attributes":{},"id":"16293","type":"BasicTicker"},{"attributes":{"overlay":{"id":"16328","type":"BoxAnnotation"}},"id":"16304","type":"BoxZoomTool"},{"attributes":{},"id":"16302","type":"PanTool"},{"attributes":{"source":{"id":"16315","type":"ColumnDataSource"}},"id":"16319","type":"CDSView"},{"attributes":{},"id":"16327","type":"UnionRenderers"},{"attributes":{},"id":"16325","type":"BasicTickFormatter"},{"attributes":{},"id":"16298","type":"BasicTicker"},{"attributes":{},"id":"16290","type":"LinearScale"},{"attributes":{"formatter":{"id":"16323","type":"BasicTickFormatter"},"ticker":{"id":"16298","type":"BasicTicker"}},"id":"16297","type":"LinearAxis"},{"attributes":{"below":[{"id":"16292","type":"LinearAxis"}],"center":[{"id":"16296","type":"Grid"},{"id":"16301","type":"Grid"}],"left":[{"id":"16297","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16318","type":"GlyphRenderer"}],"title":{"id":"16321","type":"Title"},"toolbar":{"id":"16308","type":"Toolbar"},"x_range":{"id":"16284","type":"DataRange1d"},"x_scale":{"id":"16288","type":"LinearScale"},"y_range":{"id":"16286","type":"DataRange1d"},"y_scale":{"id":"16290","type":"LinearScale"}},"id":"16283","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"16325","type":"BasicTickFormatter"},"ticker":{"id":"16293","type":"BasicTicker"}},"id":"16292","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,2],"y":[6,7,2,2]},"selected":{"id":"16326","type":"Selection"},"selection_policy":{"id":"16327","type":"UnionRenderers"}},"id":"16315","type":"ColumnDataSource"},{"attributes":{},"id":"16326","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"16298","type":"BasicTicker"}},"id":"16301","type":"Grid"},{"attributes":{"fill_color":"#99d8c9","line_color":"#99d8c9","x":{"field":"x"},"y":{"field":"y"}},"id":"16316","type":"Patch"},{"attributes":{},"id":"16323","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"16286","type":"DataRange1d"},{"attributes":{"ticker":{"id":"16293","type":"BasicTicker"}},"id":"16296","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16328","type":"BoxAnnotation"}],"root_ids":["16283"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"5ecfa1da-7b44-4d18-8509-3297939646bc","roots":{"16283":"0ef04eda-e986-46f5-9ee1-c26355120715"}}];
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