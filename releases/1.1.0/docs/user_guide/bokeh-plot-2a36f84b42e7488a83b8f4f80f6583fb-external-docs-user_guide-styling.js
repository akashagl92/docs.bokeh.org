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
      };var element = document.getElementById("6fc22487-d199-4edc-9ddc-af10dd084836");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6fc22487-d199-4edc-9ddc-af10dd084836' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"fa5ccee6-1fcd-4138-8009-c09f86938caa":{"roots":{"references":[{"attributes":{},"id":"32345","type":"LinearScale"},{"attributes":{"text":"Select a circle"},"id":"32339","type":"Title"},{"attributes":{},"id":"32350","type":"BasicTicker"},{"attributes":{"formatter":{"id":"32372","type":"BasicTickFormatter"},"ticker":{"id":"32350","type":"BasicTicker"}},"id":"32349","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"32363","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32359","type":"TapTool"}]},"id":"32360","type":"Toolbar"},{"attributes":{"formatter":{"id":"32370","type":"BasicTickFormatter"},"ticker":{"id":"32355","type":"BasicTicker"}},"id":"32354","type":"LinearAxis"},{"attributes":{"callback":null},"id":"32341","type":"DataRange1d"},{"attributes":{"callback":null},"id":"32359","type":"TapTool"},{"attributes":{"ticker":{"id":"32350","type":"BasicTicker"}},"id":"32353","type":"Grid"},{"attributes":{},"id":"32370","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"32364","type":"Circle"},{"attributes":{"below":[{"id":"32349","type":"LinearAxis"}],"center":[{"id":"32353","type":"Grid"},{"id":"32358","type":"Grid"}],"left":[{"id":"32354","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"32366","type":"GlyphRenderer"}],"title":{"id":"32339","type":"Title"},"toolbar":{"id":"32360","type":"Toolbar"},"x_range":{"id":"32341","type":"DataRange1d"},"x_scale":{"id":"32345","type":"LinearScale"},"y_range":{"id":"32343","type":"DataRange1d"},"y_scale":{"id":"32347","type":"LinearScale"}},"id":"32338","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"32373","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"32355","type":"BasicTicker"}},"id":"32358","type":"Grid"},{"attributes":{},"id":"32347","type":"LinearScale"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"32365","type":"Circle"},{"attributes":{},"id":"32374","type":"Selection"},{"attributes":{},"id":"32355","type":"BasicTicker"},{"attributes":{"data_source":{"id":"32362","type":"ColumnDataSource"},"glyph":{"id":"32363","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32364","type":"Circle"},"selection_glyph":{"id":"32365","type":"Circle"},"view":{"id":"32367","type":"CDSView"}},"id":"32366","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"32343","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"32374","type":"Selection"},"selection_policy":{"id":"32373","type":"UnionRenderers"}},"id":"32362","type":"ColumnDataSource"},{"attributes":{},"id":"32372","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"32362","type":"ColumnDataSource"}},"id":"32367","type":"CDSView"}],"root_ids":["32338"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"fa5ccee6-1fcd-4138-8009-c09f86938caa","roots":{"32338":"6fc22487-d199-4edc-9ddc-af10dd084836"}}];
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