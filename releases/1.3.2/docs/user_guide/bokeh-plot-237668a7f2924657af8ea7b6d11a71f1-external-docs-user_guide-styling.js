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
      };var element = document.getElementById("afe9448e-573c-4d92-8e56-0445b73e73a8");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'afe9448e-573c-4d92-8e56-0445b73e73a8' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.2.min.js"];
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
                    
                  var docs_json = '{"ddf25fc0-ad14-4f49-9c16-f487c2666fac":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"33047","type":"Circle"},{"attributes":{"below":[{"id":"33023","type":"LinearAxis"}],"center":[{"id":"33027","type":"Grid"},{"id":"33032","type":"Grid"}],"left":[{"id":"33028","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"33049","type":"GlyphRenderer"}],"title":{"id":"33013","type":"Title"},"toolbar":{"id":"33039","type":"Toolbar"},"x_range":{"id":"33015","type":"DataRange1d"},"x_scale":{"id":"33019","type":"LinearScale"},"y_range":{"id":"33017","type":"DataRange1d"},"y_scale":{"id":"33021","type":"LinearScale"}},"id":"33012","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"33052","type":"BasicTickFormatter"},"ticker":{"id":"33024","type":"BasicTicker"}},"id":"33023","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"33057","type":"Selection"},"selection_policy":{"id":"33056","type":"UnionRenderers"}},"id":"33046","type":"ColumnDataSource"},{"attributes":{},"id":"33052","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"33046","type":"ColumnDataSource"},"glyph":{"id":"33047","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33048","type":"Circle"},"selection_glyph":null,"view":{"id":"33050","type":"CDSView"}},"id":"33049","type":"GlyphRenderer"},{"attributes":{},"id":"33021","type":"LinearScale"},{"attributes":{},"id":"33034","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"33024","type":"BasicTicker"}},"id":"33027","type":"Grid"},{"attributes":{},"id":"33054","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"33058","type":"BoxAnnotation"}},"id":"33035","type":"BoxZoomTool"},{"attributes":{},"id":"33033","type":"PanTool"},{"attributes":{},"id":"33019","type":"LinearScale"},{"attributes":{"source":{"id":"33046","type":"ColumnDataSource"}},"id":"33050","type":"CDSView"},{"attributes":{"callback":null},"id":"33017","type":"DataRange1d"},{"attributes":{},"id":"33024","type":"BasicTicker"},{"attributes":{},"id":"33056","type":"UnionRenderers"},{"attributes":{},"id":"33036","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33033","type":"PanTool"},{"id":"33034","type":"WheelZoomTool"},{"id":"33035","type":"BoxZoomTool"},{"id":"33036","type":"SaveTool"},{"id":"33037","type":"ResetTool"},{"id":"33038","type":"HelpTool"}]},"id":"33039","type":"Toolbar"},{"attributes":{"formatter":{"id":"33054","type":"BasicTickFormatter"},"ticker":{"id":"33029","type":"BasicTicker"}},"id":"33028","type":"LinearAxis"},{"attributes":{"callback":null},"id":"33015","type":"DataRange1d"},{"attributes":{},"id":"33057","type":"Selection"},{"attributes":{},"id":"33029","type":"BasicTicker"},{"attributes":{},"id":"33037","type":"ResetTool"},{"attributes":{"text":"Some Title","text_color":{"value":"olive"},"text_font":"times","text_font_style":"italic"},"id":"33013","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33058","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"33029","type":"BasicTicker"}},"id":"33032","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"33048","type":"Circle"},{"attributes":{},"id":"33038","type":"HelpTool"}],"root_ids":["33012"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"ddf25fc0-ad14-4f49-9c16-f487c2666fac","roots":{"33012":"afe9448e-573c-4d92-8e56-0445b73e73a8"}}];
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