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
      };var element = document.getElementById("2ddf7cb9-8f31-499a-be32-2166f019f267");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2ddf7cb9-8f31-499a-be32-2166f019f267' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"1ceaede0-f955-4c1f-8495-2aa7530e862b":{"roots":{"references":[{"attributes":{"source":{"id":"32943","type":"ColumnDataSource"}},"id":"32947","type":"CDSView"},{"attributes":{},"id":"32935","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"32944","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32930","type":"PanTool"},{"id":"32931","type":"WheelZoomTool"},{"id":"32932","type":"BoxZoomTool"},{"id":"32933","type":"SaveTool"},{"id":"32934","type":"ResetTool"},{"id":"32935","type":"HelpTool"}]},"id":"32936","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"32945","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"32955","type":"Selection"},"selection_policy":{"id":"32954","type":"UnionRenderers"}},"id":"32943","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"32956","type":"BoxAnnotation"}},"id":"32932","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"32912","type":"DataRange1d"},{"attributes":{},"id":"32930","type":"PanTool"},{"attributes":{"callback":null},"id":"32914","type":"DataRange1d"},{"attributes":{},"id":"32931","type":"WheelZoomTool"},{"attributes":{},"id":"32918","type":"LinearScale"},{"attributes":{},"id":"32953","type":"BasicTickFormatter"},{"attributes":{"bounds":[2,4],"formatter":{"id":"32953","type":"BasicTickFormatter"},"ticker":{"id":"32921","type":"BasicTicker"}},"id":"32920","type":"LinearAxis"},{"attributes":{},"id":"32916","type":"LinearScale"},{"attributes":{},"id":"32954","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"32943","type":"ColumnDataSource"},"glyph":{"id":"32944","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32945","type":"Circle"},"selection_glyph":null,"view":{"id":"32947","type":"CDSView"}},"id":"32946","type":"GlyphRenderer"},{"attributes":{},"id":"32955","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32956","type":"BoxAnnotation"},{"attributes":{},"id":"32934","type":"ResetTool"},{"attributes":{"formatter":{"id":"32951","type":"BasicTickFormatter"},"ticker":{"id":"32926","type":"BasicTicker"}},"id":"32925","type":"LinearAxis"},{"attributes":{},"id":"32951","type":"BasicTickFormatter"},{"attributes":{"text":""},"id":"32949","type":"Title"},{"attributes":{"below":[{"id":"32920","type":"LinearAxis"}],"center":[{"id":"32924","type":"Grid"},{"id":"32929","type":"Grid"}],"left":[{"id":"32925","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"32946","type":"GlyphRenderer"}],"title":{"id":"32949","type":"Title"},"toolbar":{"id":"32936","type":"Toolbar"},"x_range":{"id":"32912","type":"DataRange1d"},"x_scale":{"id":"32916","type":"LinearScale"},"y_range":{"id":"32914","type":"DataRange1d"},"y_scale":{"id":"32918","type":"LinearScale"}},"id":"32911","subtype":"Figure","type":"Plot"},{"attributes":{"ticker":{"id":"32921","type":"BasicTicker"}},"id":"32924","type":"Grid"},{"attributes":{},"id":"32926","type":"BasicTicker"},{"attributes":{},"id":"32933","type":"SaveTool"},{"attributes":{},"id":"32921","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"32926","type":"BasicTicker"}},"id":"32929","type":"Grid"}],"root_ids":["32911"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"1ceaede0-f955-4c1f-8495-2aa7530e862b","roots":{"32911":"2ddf7cb9-8f31-499a-be32-2166f019f267"}}];
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