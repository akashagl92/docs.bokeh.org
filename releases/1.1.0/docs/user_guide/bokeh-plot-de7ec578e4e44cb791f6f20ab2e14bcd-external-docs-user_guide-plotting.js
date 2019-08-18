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
      };var element = document.getElementById("d40663f8-4ccb-4d08-b36c-eb45a79609d5");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd40663f8-4ccb-4d08-b36c-eb45a79609d5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0a8599f9-35da-48a3-98c1-f9260a9f55cb":{"roots":{"references":[{"attributes":{},"id":"29369","type":"LinearScale"},{"attributes":{},"id":"29371","type":"CategoricalScale"},{"attributes":{},"id":"29405","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29408","type":"BoxAnnotation"},{"attributes":{"source":{"id":"29395","type":"ColumnDataSource"}},"id":"29399","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]},"selected":{"id":"29407","type":"Selection"},"selection_policy":{"id":"29406","type":"UnionRenderers"}},"id":"29395","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"29402","type":"CategoricalTickFormatter"},"ticker":{"id":"29379","type":"CategoricalTicker"}},"id":"29378","type":"CategoricalAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29382","type":"PanTool"},{"id":"29383","type":"WheelZoomTool"},{"id":"29384","type":"BoxZoomTool"},{"id":"29385","type":"SaveTool"},{"id":"29386","type":"ResetTool"},{"id":"29387","type":"HelpTool"}]},"id":"29388","type":"Toolbar"},{"attributes":{},"id":"29383","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"29373","type":"LinearAxis"}],"center":[{"id":"29377","type":"Grid"},{"id":"29381","type":"Grid"}],"left":[{"id":"29378","type":"CategoricalAxis"}],"renderers":[{"id":"29398","type":"GlyphRenderer"}],"title":{"id":"29401","type":"Title"},"toolbar":{"id":"29388","type":"Toolbar"},"x_range":{"id":"29365","type":"DataRange1d"},"x_scale":{"id":"29369","type":"LinearScale"},"y_range":{"id":"29367","type":"FactorRange"},"y_scale":{"id":"29371","type":"CategoricalScale"}},"id":"29364","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"29374","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"29367","type":"FactorRange"},{"attributes":{"callback":null},"id":"29365","type":"DataRange1d"},{"attributes":{"ticker":{"id":"29374","type":"BasicTicker"}},"id":"29377","type":"Grid"},{"attributes":{"formatter":{"id":"29405","type":"BasicTickFormatter"},"ticker":{"id":"29374","type":"BasicTicker"}},"id":"29373","type":"LinearAxis"},{"attributes":{},"id":"29402","type":"CategoricalTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"29379","type":"CategoricalTicker"}},"id":"29381","type":"Grid"},{"attributes":{},"id":"29382","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"29397","type":"Circle"},{"attributes":{"overlay":{"id":"29408","type":"BoxAnnotation"}},"id":"29384","type":"BoxZoomTool"},{"attributes":{},"id":"29387","type":"HelpTool"},{"attributes":{"text":""},"id":"29401","type":"Title"},{"attributes":{},"id":"29385","type":"SaveTool"},{"attributes":{},"id":"29386","type":"ResetTool"},{"attributes":{},"id":"29407","type":"Selection"},{"attributes":{"data_source":{"id":"29395","type":"ColumnDataSource"},"glyph":{"id":"29396","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29397","type":"Circle"},"selection_glyph":null,"view":{"id":"29399","type":"CDSView"}},"id":"29398","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"29396","type":"Circle"},{"attributes":{},"id":"29406","type":"UnionRenderers"},{"attributes":{},"id":"29379","type":"CategoricalTicker"}],"root_ids":["29364"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"0a8599f9-35da-48a3-98c1-f9260a9f55cb","roots":{"29364":"d40663f8-4ccb-4d08-b36c-eb45a79609d5"}}];
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