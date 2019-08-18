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
      };var element = document.getElementById("9603b674-9e6e-4568-8824-348572026270");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '9603b674-9e6e-4568-8824-348572026270' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1c23e710-e48f-45e9-843e-007587078e28":{"roots":{"references":[{"attributes":{},"id":"32142","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"32128","type":"Toolbar"},{"attributes":{"line_color":"blue","x":{"field":"x"},"y":{"field":"y"}},"id":"32130","type":"Line"},{"attributes":{},"id":"32144","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[2,1,2]},"selected":{"id":"32148","type":"Selection"},"selection_policy":{"id":"32147","type":"UnionRenderers"}},"id":"32134","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"32118","type":"LinearAxis"}],"center":[{"id":"32122","type":"Grid"},{"id":"32127","type":"Grid"}],"left":[{"id":"32123","type":"LinearAxis"}],"plot_height":200,"plot_width":500,"renderers":[{"id":"32132","type":"GlyphRenderer"},{"id":"32137","type":"GlyphRenderer"}],"title":{"id":"32140","type":"Title"},"toolbar":{"id":"32128","type":"Toolbar"},"x_range":{"id":"32110","type":"DataRange1d"},"x_scale":{"id":"32114","type":"LinearScale"},"y_range":{"id":"32112","type":"DataRange1d"},"y_scale":{"id":"32116","type":"LinearScale"}},"id":"32109","subtype":"Figure","type":"Plot"},{"attributes":{"ticker":{"id":"32119","type":"BasicTicker"},"visible":false},"id":"32122","type":"Grid"},{"attributes":{},"id":"32114","type":"LinearScale"},{"attributes":{"callback":null},"id":"32110","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"32124","type":"BasicTicker"}},"id":"32127","type":"Grid"},{"attributes":{},"id":"32145","type":"UnionRenderers"},{"attributes":{},"id":"32119","type":"BasicTicker"},{"attributes":{"text":""},"id":"32140","type":"Title"},{"attributes":{"formatter":{"id":"32144","type":"BasicTickFormatter"},"ticker":{"id":"32124","type":"BasicTicker"}},"id":"32123","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,1]},"selected":{"id":"32146","type":"Selection"},"selection_policy":{"id":"32145","type":"UnionRenderers"}},"id":"32129","type":"ColumnDataSource"},{"attributes":{"source":{"id":"32134","type":"ColumnDataSource"}},"id":"32138","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"32131","type":"Line"},{"attributes":{},"id":"32147","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"32129","type":"ColumnDataSource"},"glyph":{"id":"32130","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32131","type":"Line"},"selection_glyph":null,"view":{"id":"32133","type":"CDSView"}},"id":"32132","type":"GlyphRenderer"},{"attributes":{},"id":"32146","type":"Selection"},{"attributes":{"data_source":{"id":"32134","type":"ColumnDataSource"},"glyph":{"id":"32135","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32136","type":"Line"},"selection_glyph":null,"view":{"id":"32138","type":"CDSView"},"visible":false},"id":"32137","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"32136","type":"Line"},{"attributes":{"source":{"id":"32129","type":"ColumnDataSource"}},"id":"32133","type":"CDSView"},{"attributes":{},"id":"32116","type":"LinearScale"},{"attributes":{"callback":null},"id":"32112","type":"DataRange1d"},{"attributes":{},"id":"32148","type":"Selection"},{"attributes":{},"id":"32124","type":"BasicTicker"},{"attributes":{"line_color":"pink","x":{"field":"x"},"y":{"field":"y"}},"id":"32135","type":"Line"},{"attributes":{"formatter":{"id":"32142","type":"BasicTickFormatter"},"ticker":{"id":"32119","type":"BasicTicker"},"visible":false},"id":"32118","type":"LinearAxis"}],"root_ids":["32109"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"1c23e710-e48f-45e9-843e-007587078e28","roots":{"32109":"9603b674-9e6e-4568-8824-348572026270"}}];
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