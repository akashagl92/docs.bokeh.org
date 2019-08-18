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
      };var element = document.getElementById("64c8db40-9305-41c9-9d58-2138102abb6f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '64c8db40-9305-41c9-9d58-2138102abb6f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"35c7016a-8c0e-49eb-ae21-5b3a38fe593f":{"roots":{"references":[{"attributes":{},"id":"32936","type":"LinearScale"},{"attributes":{},"id":"32972","type":"Selection"},{"attributes":{"overlay":{"id":"32974","type":"BoxAnnotation"}},"id":"32950","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32974","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"32969","type":"BasicTickFormatter"},"ticker":{"id":"32944","type":"BasicTicker"}},"id":"32943","type":"LinearAxis"},{"attributes":{},"id":"32949","type":"WheelZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"32944","type":"BasicTicker"}},"id":"32947","type":"Grid"},{"attributes":{"ticker":{"id":"32939","type":"BasicTicker"}},"id":"32942","type":"Grid"},{"attributes":{},"id":"32948","type":"PanTool"},{"attributes":{},"id":"32953","type":"HelpTool"},{"attributes":{},"id":"32944","type":"BasicTicker"},{"attributes":{},"id":"32973","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"32932","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"32972","type":"Selection"},"selection_policy":{"id":"32973","type":"UnionRenderers"}},"id":"32961","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"32963","type":"Circle"},{"attributes":{},"id":"32951","type":"SaveTool"},{"attributes":{"callback":null},"id":"32930","type":"DataRange1d"},{"attributes":{},"id":"32952","type":"ResetTool"},{"attributes":{},"id":"32934","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32948","type":"PanTool"},{"id":"32949","type":"WheelZoomTool"},{"id":"32950","type":"BoxZoomTool"},{"id":"32951","type":"SaveTool"},{"id":"32952","type":"ResetTool"},{"id":"32953","type":"HelpTool"}]},"id":"32954","type":"Toolbar"},{"attributes":{"formatter":{"id":"32971","type":"BasicTickFormatter"},"ticker":{"id":"32939","type":"BasicTicker"}},"id":"32938","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"32962","type":"Circle"},{"attributes":{},"id":"32969","type":"BasicTickFormatter"},{"attributes":{"text":""},"id":"32967","type":"Title"},{"attributes":{"source":{"id":"32961","type":"ColumnDataSource"}},"id":"32965","type":"CDSView"},{"attributes":{},"id":"32939","type":"BasicTicker"},{"attributes":{"data_source":{"id":"32961","type":"ColumnDataSource"},"glyph":{"id":"32962","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32963","type":"Circle"},"selection_glyph":null,"view":{"id":"32965","type":"CDSView"}},"id":"32964","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"32938","type":"LinearAxis"}],"center":[{"id":"32942","type":"Grid"},{"id":"32947","type":"Grid"}],"left":[{"id":"32943","type":"LinearAxis"}],"plot_height":300,"plot_width":700,"renderers":[{"id":"32964","type":"GlyphRenderer"}],"title":{"id":"32967","type":"Title"},"toolbar":{"id":"32954","type":"Toolbar"},"x_range":{"id":"32930","type":"DataRange1d"},"x_scale":{"id":"32934","type":"LinearScale"},"y_range":{"id":"32932","type":"DataRange1d"},"y_scale":{"id":"32936","type":"LinearScale"}},"id":"32929","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32971","type":"BasicTickFormatter"}],"root_ids":["32929"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"35c7016a-8c0e-49eb-ae21-5b3a38fe593f","roots":{"32929":"64c8db40-9305-41c9-9d58-2138102abb6f"}}];
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