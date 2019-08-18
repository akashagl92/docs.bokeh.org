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
      };var element = document.getElementById("cb48ac91-d5bf-41bb-ac4e-aebf04e6dfb6");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'cb48ac91-d5bf-41bb-ac4e-aebf04e6dfb6' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.1.min.js"];
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
                    
                  var docs_json = '{"7e9ddbfa-52ae-44c9-8842-a52f2f3d6a62":{"roots":{"references":[{"attributes":{"source":{"id":"25253","type":"ColumnDataSource"}},"id":"25258","type":"CDSView"},{"attributes":{},"id":"25260","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25250","type":"TapTool"}]},"id":"25251","type":"Toolbar"},{"attributes":{},"id":"25241","type":"BasicTicker"},{"attributes":{},"id":"25262","type":"BasicTickFormatter"},{"attributes":{"callback":{"id":"25266","type":"OpenURL"}},"id":"25250","type":"TapTool"},{"attributes":{},"id":"25246","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"color":["navy","orange","olive","firebrick","gold"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"25264","type":"Selection"},"selection_policy":{"id":"25265","type":"UnionRenderers"}},"id":"25253","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"25262","type":"BasicTickFormatter"},"ticker":{"id":"25241","type":"BasicTicker"}},"id":"25240","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"25246","type":"BasicTicker"}},"id":"25249","type":"Grid"},{"attributes":{},"id":"25264","type":"Selection"},{"attributes":{"ticker":{"id":"25241","type":"BasicTicker"}},"id":"25244","type":"Grid"},{"attributes":{"url":"http://www.colors.commutercreative.com/@color/"},"id":"25266","type":"OpenURL"},{"attributes":{"below":[{"id":"25240","type":"LinearAxis"}],"center":[{"id":"25244","type":"Grid"},{"id":"25249","type":"Grid"}],"left":[{"id":"25245","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"25257","type":"GlyphRenderer"}],"title":{"id":"25230","type":"Title"},"toolbar":{"id":"25251","type":"Toolbar"},"x_range":{"id":"25232","type":"DataRange1d"},"x_scale":{"id":"25236","type":"LinearScale"},"y_range":{"id":"25234","type":"DataRange1d"},"y_scale":{"id":"25238","type":"LinearScale"}},"id":"25229","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"25234","type":"DataRange1d"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"25255","type":"Circle"},{"attributes":{"callback":null},"id":"25232","type":"DataRange1d"},{"attributes":{"text":"Click the Dots"},"id":"25230","type":"Title"},{"attributes":{},"id":"25236","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"25256","type":"Circle"},{"attributes":{"data_source":{"id":"25253","type":"ColumnDataSource"},"glyph":{"id":"25255","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25256","type":"Circle"},"selection_glyph":null,"view":{"id":"25258","type":"CDSView"}},"id":"25257","type":"GlyphRenderer"},{"attributes":{},"id":"25238","type":"LinearScale"},{"attributes":{},"id":"25265","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"25260","type":"BasicTickFormatter"},"ticker":{"id":"25246","type":"BasicTicker"}},"id":"25245","type":"LinearAxis"}],"root_ids":["25229"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"7e9ddbfa-52ae-44c9-8842-a52f2f3d6a62","roots":{"25229":"cb48ac91-d5bf-41bb-ac4e-aebf04e6dfb6"}}];
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