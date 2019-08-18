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
      };var element = document.getElementById("8e787f87-760b-4bd1-b3c6-7c49dab38d55");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8e787f87-760b-4bd1-b3c6-7c49dab38d55' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"575d41cc-fbc5-4c3b-b88e-3e8544a3473c":{"roots":{"references":[{"attributes":{"ticker":{"id":"31786","type":"BasicTicker"}},"id":"31789","type":"Grid"},{"attributes":{"data_source":{"id":"31808","type":"ColumnDataSource"},"glyph":{"id":"31809","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31810","type":"Circle"},"selection_glyph":null,"view":{"id":"31812","type":"CDSView"}},"id":"31811","type":"GlyphRenderer"},{"attributes":{},"id":"31786","type":"BasicTicker"},{"attributes":{"callback":null},"id":"31777","type":"DataRange1d"},{"attributes":{},"id":"31795","type":"PanTool"},{"attributes":{},"id":"31783","type":"LinearScale"},{"attributes":{"text":""},"id":"31814","type":"Title"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"31820","type":"Selection"},"selection_policy":{"id":"31819","type":"UnionRenderers"}},"id":"31808","type":"ColumnDataSource"},{"attributes":{},"id":"31796","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"31818","type":"BasicTickFormatter"},"ticker":{"id":"31786","type":"BasicTicker"}},"id":"31785","type":"LinearAxis"},{"attributes":{},"id":"31816","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"31821","type":"BoxAnnotation"}},"id":"31797","type":"BoxZoomTool"},{"attributes":{},"id":"31791","type":"BasicTicker"},{"attributes":{},"id":"31818","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"31785","type":"LinearAxis"}],"center":[{"id":"31789","type":"Grid"},{"id":"31794","type":"Grid"}],"left":[{"id":"31790","type":"LinearAxis"}],"plot_height":300,"plot_width":700,"renderers":[{"id":"31811","type":"GlyphRenderer"}],"title":{"id":"31814","type":"Title"},"toolbar":{"id":"31801","type":"Toolbar"},"x_range":{"id":"31777","type":"DataRange1d"},"x_scale":{"id":"31781","type":"LinearScale"},"y_range":{"id":"31779","type":"DataRange1d"},"y_scale":{"id":"31783","type":"LinearScale"}},"id":"31776","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"31779","type":"DataRange1d"},{"attributes":{},"id":"31819","type":"UnionRenderers"},{"attributes":{},"id":"31799","type":"ResetTool"},{"attributes":{},"id":"31800","type":"HelpTool"},{"attributes":{"dimension":1,"ticker":{"id":"31791","type":"BasicTicker"}},"id":"31794","type":"Grid"},{"attributes":{},"id":"31820","type":"Selection"},{"attributes":{},"id":"31798","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"31821","type":"BoxAnnotation"},{"attributes":{},"id":"31781","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"31795","type":"PanTool"},{"id":"31796","type":"WheelZoomTool"},{"id":"31797","type":"BoxZoomTool"},{"id":"31798","type":"SaveTool"},{"id":"31799","type":"ResetTool"},{"id":"31800","type":"HelpTool"}]},"id":"31801","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"31810","type":"Circle"},{"attributes":{"formatter":{"id":"31816","type":"BasicTickFormatter"},"ticker":{"id":"31791","type":"BasicTicker"}},"id":"31790","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"31809","type":"Circle"},{"attributes":{"source":{"id":"31808","type":"ColumnDataSource"}},"id":"31812","type":"CDSView"}],"root_ids":["31776"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"575d41cc-fbc5-4c3b-b88e-3e8544a3473c","roots":{"31776":"8e787f87-760b-4bd1-b3c6-7c49dab38d55"}}];
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