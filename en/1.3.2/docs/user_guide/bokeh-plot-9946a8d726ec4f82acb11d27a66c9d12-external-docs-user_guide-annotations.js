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
      };var element = document.getElementById("710c3d57-be15-43c4-869d-edd40cb34f59");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '710c3d57-be15-43c4-869d-edd40cb34f59' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"354c7084-abc4-44a6-816f-664c05691775":{"roots":{"references":[{"attributes":{},"id":"18087","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"18044","type":"DataRange1d"},{"attributes":{},"id":"18062","type":"PanTool"},{"attributes":{},"id":"18065","type":"SaveTool"},{"attributes":{},"id":"18058","type":"BasicTicker"},{"attributes":{},"id":"18053","type":"BasicTicker"},{"attributes":{},"id":"18048","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"18077","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18093","type":"BoxAnnotation"},{"attributes":{},"id":"18063","type":"WheelZoomTool"},{"attributes":{"ticker":{"id":"18053","type":"BasicTicker"}},"id":"18056","type":"Grid"},{"attributes":{"data_source":{"id":"18075","type":"ColumnDataSource"},"glyph":{"id":"18076","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18077","type":"Circle"},"selection_glyph":null,"view":{"id":"18079","type":"CDSView"}},"id":"18078","type":"GlyphRenderer"},{"attributes":{},"id":"18066","type":"ResetTool"},{"attributes":{"overlay":{"id":"18093","type":"BoxAnnotation"}},"id":"18064","type":"BoxZoomTool"},{"attributes":{"align":"right","background_fill_color":{"value":"#aaaaee"},"text":"Title With Options","text_color":{"value":"orange"},"text_font_size":{"value":"25px"}},"id":"18080","type":"Title"},{"attributes":{"callback":null},"id":"18046","type":"DataRange1d"},{"attributes":{"below":[{"id":"18052","type":"LinearAxis"}],"center":[{"id":"18056","type":"Grid"},{"id":"18061","type":"Grid"}],"left":[{"id":"18057","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"18078","type":"GlyphRenderer"}],"title":{"id":"18080","type":"Title"},"toolbar":{"id":"18068","type":"Toolbar"},"x_range":{"id":"18044","type":"DataRange1d"},"x_scale":{"id":"18048","type":"LinearScale"},"y_range":{"id":"18046","type":"DataRange1d"},"y_scale":{"id":"18050","type":"LinearScale"}},"id":"18043","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18092","type":"Selection"},{"attributes":{"source":{"id":"18075","type":"ColumnDataSource"}},"id":"18079","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"18076","type":"Circle"},{"attributes":{},"id":"18067","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"18092","type":"Selection"},"selection_policy":{"id":"18091","type":"UnionRenderers"}},"id":"18075","type":"ColumnDataSource"},{"attributes":{},"id":"18089","type":"BasicTickFormatter"},{"attributes":{},"id":"18091","type":"UnionRenderers"},{"attributes":{},"id":"18050","type":"LinearScale"},{"attributes":{"formatter":{"id":"18087","type":"BasicTickFormatter"},"ticker":{"id":"18053","type":"BasicTicker"}},"id":"18052","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18062","type":"PanTool"},{"id":"18063","type":"WheelZoomTool"},{"id":"18064","type":"BoxZoomTool"},{"id":"18065","type":"SaveTool"},{"id":"18066","type":"ResetTool"},{"id":"18067","type":"HelpTool"}]},"id":"18068","type":"Toolbar"},{"attributes":{"formatter":{"id":"18089","type":"BasicTickFormatter"},"ticker":{"id":"18058","type":"BasicTicker"}},"id":"18057","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"18058","type":"BasicTicker"}},"id":"18061","type":"Grid"}],"root_ids":["18043"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"354c7084-abc4-44a6-816f-664c05691775","roots":{"18043":"710c3d57-be15-43c4-869d-edd40cb34f59"}}];
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