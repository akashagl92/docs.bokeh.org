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
      };var element = document.getElementById("4b8d73c6-0209-40a5-b329-c376486a1817");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '4b8d73c6-0209-40a5-b329-c376486a1817' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"24e639ba-1bb8-4327-a369-2c0f0dcfa8a3":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30534","type":"PanTool"},{"id":"30535","type":"WheelZoomTool"},{"id":"30536","type":"BoxZoomTool"},{"id":"30537","type":"SaveTool"},{"id":"30538","type":"ResetTool"},{"id":"30539","type":"HelpTool"}]},"id":"30540","type":"Toolbar"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"30519","type":"FactorRange"},{"attributes":{"source":{"id":"30547","type":"ColumnDataSource"}},"id":"30551","type":"CDSView"},{"attributes":{},"id":"30521","type":"LinearScale"},{"attributes":{},"id":"30535","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30558","type":"BoxAnnotation"},{"attributes":{},"id":"30537","type":"SaveTool"},{"attributes":{"below":[{"id":"30525","type":"LinearAxis"}],"center":[{"id":"30529","type":"Grid"},{"id":"30533","type":"Grid"}],"left":[{"id":"30530","type":"CategoricalAxis"}],"renderers":[{"id":"30550","type":"GlyphRenderer"}],"title":{"id":"30553","type":"Title"},"toolbar":{"id":"30540","type":"Toolbar"},"x_range":{"id":"30517","type":"DataRange1d"},"x_scale":{"id":"30521","type":"LinearScale"},"y_range":{"id":"30519","type":"FactorRange"},"y_scale":{"id":"30523","type":"CategoricalScale"}},"id":"30516","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"30548","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]},"selected":{"id":"30560","type":"Selection"},"selection_policy":{"id":"30559","type":"UnionRenderers"}},"id":"30547","type":"ColumnDataSource"},{"attributes":{},"id":"30555","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"30517","type":"DataRange1d"},{"attributes":{"ticker":{"id":"30526","type":"BasicTicker"}},"id":"30529","type":"Grid"},{"attributes":{"data_source":{"id":"30547","type":"ColumnDataSource"},"glyph":{"id":"30548","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30549","type":"Circle"},"selection_glyph":null,"view":{"id":"30551","type":"CDSView"}},"id":"30550","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"30555","type":"BasicTickFormatter"},"ticker":{"id":"30526","type":"BasicTicker"}},"id":"30525","type":"LinearAxis"},{"attributes":{},"id":"30531","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"30557","type":"CategoricalTickFormatter"},"ticker":{"id":"30531","type":"CategoricalTicker"}},"id":"30530","type":"CategoricalAxis"},{"attributes":{"overlay":{"id":"30558","type":"BoxAnnotation"}},"id":"30536","type":"BoxZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"30531","type":"CategoricalTicker"}},"id":"30533","type":"Grid"},{"attributes":{},"id":"30523","type":"CategoricalScale"},{"attributes":{},"id":"30539","type":"HelpTool"},{"attributes":{},"id":"30559","type":"UnionRenderers"},{"attributes":{"text":""},"id":"30553","type":"Title"},{"attributes":{},"id":"30560","type":"Selection"},{"attributes":{},"id":"30534","type":"PanTool"},{"attributes":{},"id":"30557","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"30549","type":"Circle"},{"attributes":{},"id":"30526","type":"BasicTicker"},{"attributes":{},"id":"30538","type":"ResetTool"}],"root_ids":["30516"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"24e639ba-1bb8-4327-a369-2c0f0dcfa8a3","roots":{"30516":"4b8d73c6-0209-40a5-b329-c376486a1817"}}];
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