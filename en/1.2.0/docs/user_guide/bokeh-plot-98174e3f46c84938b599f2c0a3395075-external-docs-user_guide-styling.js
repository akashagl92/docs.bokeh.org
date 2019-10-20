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
      };var element = document.getElementById("ad2a722c-feed-4db9-899b-d9a65527bc9a");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'ad2a722c-feed-4db9-899b-d9a65527bc9a' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
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
                    
                  var docs_json = '{"d856c318-e3ba-4cb4-84fd-bfc67bf28b76":{"roots":{"references":[{"attributes":{"formatter":{"id":"34558","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"ticker":{"id":"34527","type":"BasicTicker"}},"id":"34526","type":"LinearAxis"},{"attributes":{"below":[{"id":"34526","type":"LinearAxis"}],"center":[{"id":"34530","type":"Grid"},{"id":"34535","type":"Grid"}],"left":[{"id":"34531","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"34552","type":"GlyphRenderer"}],"title":{"id":"34554","type":"Title"},"toolbar":{"id":"34542","type":"Toolbar"},"x_range":{"id":"34518","type":"DataRange1d"},"x_scale":{"id":"34522","type":"LinearScale"},"y_range":{"id":"34520","type":"DataRange1d"},"y_scale":{"id":"34524","type":"LinearScale"}},"id":"34517","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"34562","type":"BoxAnnotation"}},"id":"34538","type":"BoxZoomTool"},{"attributes":{},"id":"34556","type":"BasicTickFormatter"},{"attributes":{},"id":"34527","type":"BasicTicker"},{"attributes":{},"id":"34532","type":"BasicTicker"},{"attributes":{},"id":"34558","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"34556","type":"BasicTickFormatter"},"major_label_orientation":"vertical","ticker":{"id":"34532","type":"BasicTicker"}},"id":"34531","type":"LinearAxis"},{"attributes":{},"id":"34560","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34536","type":"PanTool"},{"id":"34537","type":"WheelZoomTool"},{"id":"34538","type":"BoxZoomTool"},{"id":"34539","type":"SaveTool"},{"id":"34540","type":"ResetTool"},{"id":"34541","type":"HelpTool"}]},"id":"34542","type":"Toolbar"},{"attributes":{},"id":"34539","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34551","type":"Circle"},{"attributes":{},"id":"34561","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"34532","type":"BasicTicker"}},"id":"34535","type":"Grid"},{"attributes":{},"id":"34540","type":"ResetTool"},{"attributes":{"callback":null},"id":"34518","type":"DataRange1d"},{"attributes":{},"id":"34541","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34562","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"34520","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34550","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"34560","type":"Selection"},"selection_policy":{"id":"34561","type":"UnionRenderers"}},"id":"34549","type":"ColumnDataSource"},{"attributes":{},"id":"34522","type":"LinearScale"},{"attributes":{"data_source":{"id":"34549","type":"ColumnDataSource"},"glyph":{"id":"34550","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34551","type":"Circle"},"selection_glyph":null,"view":{"id":"34553","type":"CDSView"}},"id":"34552","type":"GlyphRenderer"},{"attributes":{},"id":"34524","type":"LinearScale"},{"attributes":{"source":{"id":"34549","type":"ColumnDataSource"}},"id":"34553","type":"CDSView"},{"attributes":{},"id":"34536","type":"PanTool"},{"attributes":{"text":""},"id":"34554","type":"Title"},{"attributes":{},"id":"34537","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"34527","type":"BasicTicker"}},"id":"34530","type":"Grid"}],"root_ids":["34517"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"d856c318-e3ba-4cb4-84fd-bfc67bf28b76","roots":{"34517":"ad2a722c-feed-4db9-899b-d9a65527bc9a"}}];
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