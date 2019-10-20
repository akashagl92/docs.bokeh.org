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
      };var element = document.getElementById("43baf0fa-0ddf-46cc-9211-394713ed25b4");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '43baf0fa-0ddf-46cc-9211-394713ed25b4' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
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
                    
                  var docs_json = '{"37c03022-d237-4165-ad57-95184297b0e1":{"roots":{"references":[{"attributes":{"formatter":{"id":"17578","type":"BasicTickFormatter"},"ticker":{"id":"17544","type":"BasicTicker"}},"id":"17543","type":"LinearAxis"},{"attributes":{},"id":"17553","type":"PanTool"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17572","type":"Circle"},{"attributes":{},"id":"17582","type":"UnionRenderers"},{"attributes":{"source":{"id":"17571","type":"ColumnDataSource"}},"id":"17575","type":"CDSView"},{"attributes":{"below":[{"id":"17543","type":"LinearAxis"}],"center":[{"id":"17547","type":"Grid"},{"id":"17552","type":"Grid"}],"left":[{"id":"17548","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17569","type":"GlyphRenderer"},{"id":"17574","type":"GlyphRenderer"}],"title":{"id":"17533","type":"Title"},"toolbar":{"id":"17559","type":"Toolbar"},"x_range":{"id":"17535","type":"DataRange1d"},"x_scale":{"id":"17539","type":"LinearScale"},"y_range":{"id":"17537","type":"DataRange1d"},"y_scale":{"id":"17541","type":"LinearScale"}},"id":"17532","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"17568","type":"Line"},{"attributes":{},"id":"17557","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17581","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"17583","type":"Selection"},"selection_policy":{"id":"17582","type":"UnionRenderers"}},"id":"17566","type":"ColumnDataSource"},{"attributes":{},"id":"17556","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"17585","type":"Selection"},"selection_policy":{"id":"17584","type":"UnionRenderers"}},"id":"17571","type":"ColumnDataSource"},{"attributes":{"text":"example"},"id":"17533","type":"Title"},{"attributes":{},"id":"17544","type":"BasicTicker"},{"attributes":{"data_source":{"id":"17571","type":"ColumnDataSource"},"glyph":{"id":"17572","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17573","type":"Circle"},"selection_glyph":null,"view":{"id":"17575","type":"CDSView"}},"id":"17574","type":"GlyphRenderer"},{"attributes":{},"id":"17554","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"17566","type":"ColumnDataSource"},"glyph":{"id":"17567","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17568","type":"Line"},"selection_glyph":null,"view":{"id":"17570","type":"CDSView"}},"id":"17569","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17566","type":"ColumnDataSource"}},"id":"17570","type":"CDSView"},{"attributes":{"callback":null},"id":"17537","type":"DataRange1d"},{"attributes":{},"id":"17583","type":"Selection"},{"attributes":{"formatter":{"id":"17580","type":"BasicTickFormatter"},"ticker":{"id":"17549","type":"BasicTicker"}},"id":"17548","type":"LinearAxis"},{"attributes":{},"id":"17549","type":"BasicTicker"},{"attributes":{},"id":"17585","type":"Selection"},{"attributes":{},"id":"17580","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"17581","type":"BoxAnnotation"}},"id":"17555","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17553","type":"PanTool"},{"id":"17554","type":"WheelZoomTool"},{"id":"17555","type":"BoxZoomTool"},{"id":"17556","type":"SaveTool"},{"id":"17557","type":"ResetTool"},{"id":"17558","type":"HelpTool"}]},"id":"17559","type":"Toolbar"},{"attributes":{"callback":null},"id":"17535","type":"DataRange1d"},{"attributes":{"ticker":{"id":"17544","type":"BasicTicker"}},"id":"17547","type":"Grid"},{"attributes":{},"id":"17558","type":"HelpTool"},{"attributes":{},"id":"17539","type":"LinearScale"},{"attributes":{},"id":"17578","type":"BasicTickFormatter"},{"attributes":{},"id":"17541","type":"LinearScale"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"17567","type":"Line"},{"attributes":{"dimension":1,"ticker":{"id":"17549","type":"BasicTicker"}},"id":"17552","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17573","type":"Circle"},{"attributes":{},"id":"17584","type":"UnionRenderers"}],"root_ids":["17532"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"37c03022-d237-4165-ad57-95184297b0e1","roots":{"17532":"43baf0fa-0ddf-46cc-9211-394713ed25b4"}}];
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