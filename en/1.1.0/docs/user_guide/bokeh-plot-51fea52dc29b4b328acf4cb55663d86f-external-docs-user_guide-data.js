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
      };var element = document.getElementById("9fbc3651-1ef3-4783-ae56-27c5abd7e80c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '9fbc3651-1ef3-4783-ae56-27c5abd7e80c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"38d511b5-48bf-4d78-a849-95b6c1e4000e":{"roots":{"references":[{"attributes":{"text":""},"id":"21441","type":"Title"},{"attributes":{"text":""},"id":"21431","type":"Title"},{"attributes":{"callback":null},"id":"21419","type":"HoverTool"},{"attributes":{},"id":"21433","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"21364","type":"ColumnDataSource"},"glyph":{"id":"21426","type":"Circle"},"hover_glyph":{"id":"21428","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"21427","type":"Circle"},"selection_glyph":null,"view":{"id":"21366","type":"CDSView"}},"id":"21429","type":"GlyphRenderer"},{"attributes":{},"id":"21372","type":"LinearScale"},{"attributes":{"children":[[{"id":"21367","subtype":"Figure","type":"Plot"},0,0],[{"id":"21399","subtype":"Figure","type":"Plot"},0,1]]},"id":"21450","type":"GridBox"},{"attributes":{},"id":"21436","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"21364","type":"ColumnDataSource"},"glyph":{"id":"21394","type":"Circle"},"hover_glyph":{"id":"21396","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"21395","type":"Circle"},"selection_glyph":null,"view":{"id":"21398","type":"CDSView"}},"id":"21397","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"21438","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"21418","type":"BoxSelectTool"},{"id":"21419","type":"HoverTool"},{"id":"21420","type":"ResetTool"}]},"id":"21421","type":"Toolbar"},{"attributes":{"below":[{"id":"21376","type":"LinearAxis"}],"center":[{"id":"21380","type":"Grid"},{"id":"21385","type":"Grid"}],"left":[{"id":"21381","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"21397","type":"GlyphRenderer"}],"title":{"id":"21431","type":"Title"},"toolbar":{"id":"21389","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"21368","type":"DataRange1d"},"x_scale":{"id":"21372","type":"LinearScale"},"y_range":{"id":"21370","type":"DataRange1d"},"y_scale":{"id":"21374","type":"LinearScale"}},"id":"21367","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"21368","type":"DataRange1d"},{"attributes":{"ticker":{"id":"21377","type":"BasicTicker"}},"id":"21380","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"21414","type":"BasicTicker"}},"id":"21417","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"21448","type":"BoxAnnotation"}},"id":"21418","type":"BoxSelectTool"},{"attributes":{"children":[{"id":"21452","type":"ToolbarBox"},{"id":"21450","type":"GridBox"}]},"id":"21453","type":"Column"},{"attributes":{},"id":"21382","type":"BasicTicker"},{"attributes":{},"id":"21437","type":"Selection"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"21396","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"21438","type":"BoxAnnotation"}},"id":"21386","type":"BoxSelectTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]},"selected":{"id":"21437","type":"Selection"},"selection_policy":{"id":"21436","type":"UnionRenderers"}},"id":"21364","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"21370","type":"DataRange1d"},{"attributes":{},"id":"21409","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"21427","type":"Circle"},{"attributes":{"indices":[0,2,4]},"id":"21365","type":"IndexFilter"},{"attributes":{},"id":"21388","type":"ResetTool"},{"attributes":{"callback":null},"id":"21402","type":"DataRange1d"},{"attributes":{"formatter":{"id":"21445","type":"BasicTickFormatter"},"ticker":{"id":"21409","type":"BasicTicker"}},"id":"21408","type":"LinearAxis"},{"attributes":{"formatter":{"id":"21435","type":"BasicTickFormatter"},"ticker":{"id":"21377","type":"BasicTicker"}},"id":"21376","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"21448","type":"BoxAnnotation"},{"attributes":{},"id":"21435","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"21443","type":"BasicTickFormatter"},"ticker":{"id":"21414","type":"BasicTicker"}},"id":"21413","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"21395","type":"Circle"},{"attributes":{},"id":"21443","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"21408","type":"LinearAxis"}],"center":[{"id":"21412","type":"Grid"},{"id":"21417","type":"Grid"}],"left":[{"id":"21413","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"21429","type":"GlyphRenderer"}],"title":{"id":"21441","type":"Title"},"toolbar":{"id":"21421","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"21400","type":"DataRange1d"},"x_scale":{"id":"21404","type":"LinearScale"},"y_range":{"id":"21402","type":"DataRange1d"},"y_scale":{"id":"21406","type":"LinearScale"}},"id":"21399","subtype":"Figure","type":"Plot"},{"attributes":{"filters":[{"id":"21365","type":"IndexFilter"}],"source":{"id":"21364","type":"ColumnDataSource"}},"id":"21366","type":"CDSView"},{"attributes":{"source":{"id":"21364","type":"ColumnDataSource"}},"id":"21398","type":"CDSView"},{"attributes":{},"id":"21420","type":"ResetTool"},{"attributes":{},"id":"21404","type":"LinearScale"},{"attributes":{"ticker":{"id":"21409","type":"BasicTicker"}},"id":"21412","type":"Grid"},{"attributes":{},"id":"21445","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"21426","type":"Circle"},{"attributes":{},"id":"21374","type":"LinearScale"},{"attributes":{"formatter":{"id":"21433","type":"BasicTickFormatter"},"ticker":{"id":"21382","type":"BasicTicker"}},"id":"21381","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"21451","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"21452","type":"ToolbarBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"21386","type":"BoxSelectTool"},{"id":"21387","type":"HoverTool"},{"id":"21388","type":"ResetTool"}]},"id":"21389","type":"Toolbar"},{"attributes":{},"id":"21406","type":"LinearScale"},{"attributes":{},"id":"21414","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"21394","type":"Circle"},{"attributes":{"dimension":1,"ticker":{"id":"21382","type":"BasicTicker"}},"id":"21385","type":"Grid"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"21428","type":"Circle"},{"attributes":{"tools":[{"id":"21386","type":"BoxSelectTool"},{"id":"21387","type":"HoverTool"},{"id":"21388","type":"ResetTool"},{"id":"21418","type":"BoxSelectTool"},{"id":"21419","type":"HoverTool"},{"id":"21420","type":"ResetTool"}]},"id":"21451","type":"ProxyToolbar"},{"attributes":{},"id":"21377","type":"BasicTicker"},{"attributes":{"callback":null},"id":"21387","type":"HoverTool"},{"attributes":{"callback":null},"id":"21400","type":"DataRange1d"}],"root_ids":["21453"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"38d511b5-48bf-4d78-a849-95b6c1e4000e","roots":{"21453":"9fbc3651-1ef3-4783-ae56-27c5abd7e80c"}}];
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