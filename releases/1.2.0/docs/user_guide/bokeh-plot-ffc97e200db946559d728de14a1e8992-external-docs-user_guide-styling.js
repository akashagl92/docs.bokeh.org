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
      };var element = document.getElementById("560a16d8-8a87-4972-abd3-d5fdab52b257");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '560a16d8-8a87-4972-abd3-d5fdab52b257' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"27f82689-55a3-4c2a-b719-016723bbef53":{"roots":{"references":[{"attributes":{"callback":null},"id":"32084","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"32098","type":"BasicTicker"}},"id":"32101","type":"Grid"},{"attributes":{"data_source":{"id":"32108","type":"ColumnDataSource"},"glyph":{"id":"32109","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32110","type":"Line"},"selection_glyph":null,"view":{"id":"32112","type":"CDSView"},"visible":false},"id":"32111","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"32086","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"32102","type":"Toolbar"},{"attributes":{"source":{"id":"32108","type":"ColumnDataSource"}},"id":"32112","type":"CDSView"},{"attributes":{"ticker":{"id":"32093","type":"BasicTicker"},"visible":false},"id":"32096","type":"Grid"},{"attributes":{},"id":"32088","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[2,1,2]},"selected":{"id":"32121","type":"Selection"},"selection_policy":{"id":"32122","type":"UnionRenderers"}},"id":"32108","type":"ColumnDataSource"},{"attributes":{"line_color":"blue","x":{"field":"x"},"y":{"field":"y"}},"id":"32104","type":"Line"},{"attributes":{},"id":"32090","type":"LinearScale"},{"attributes":{},"id":"32117","type":"BasicTickFormatter"},{"attributes":{},"id":"32098","type":"BasicTicker"},{"attributes":{},"id":"32115","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"32117","type":"BasicTickFormatter"},"ticker":{"id":"32093","type":"BasicTicker"},"visible":false},"id":"32092","type":"LinearAxis"},{"attributes":{"below":[{"id":"32092","type":"LinearAxis"}],"center":[{"id":"32096","type":"Grid"},{"id":"32101","type":"Grid"}],"left":[{"id":"32097","type":"LinearAxis"}],"plot_height":200,"plot_width":500,"renderers":[{"id":"32106","type":"GlyphRenderer"},{"id":"32111","type":"GlyphRenderer"}],"title":{"id":"32113","type":"Title"},"toolbar":{"id":"32102","type":"Toolbar"},"x_range":{"id":"32084","type":"DataRange1d"},"x_scale":{"id":"32088","type":"LinearScale"},"y_range":{"id":"32086","type":"DataRange1d"},"y_scale":{"id":"32090","type":"LinearScale"}},"id":"32083","subtype":"Figure","type":"Plot"},{"attributes":{"text":""},"id":"32113","type":"Title"},{"attributes":{"source":{"id":"32103","type":"ColumnDataSource"}},"id":"32107","type":"CDSView"},{"attributes":{},"id":"32093","type":"BasicTicker"},{"attributes":{},"id":"32120","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"32103","type":"ColumnDataSource"},"glyph":{"id":"32104","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32105","type":"Line"},"selection_glyph":null,"view":{"id":"32107","type":"CDSView"}},"id":"32106","type":"GlyphRenderer"},{"attributes":{},"id":"32119","type":"Selection"},{"attributes":{"formatter":{"id":"32115","type":"BasicTickFormatter"},"ticker":{"id":"32098","type":"BasicTicker"}},"id":"32097","type":"LinearAxis"},{"attributes":{},"id":"32121","type":"Selection"},{"attributes":{"line_color":"pink","x":{"field":"x"},"y":{"field":"y"}},"id":"32109","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"32105","type":"Line"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,1]},"selected":{"id":"32119","type":"Selection"},"selection_policy":{"id":"32120","type":"UnionRenderers"}},"id":"32103","type":"ColumnDataSource"},{"attributes":{},"id":"32122","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"32110","type":"Line"}],"root_ids":["32083"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"27f82689-55a3-4c2a-b719-016723bbef53","roots":{"32083":"560a16d8-8a87-4972-abd3-d5fdab52b257"}}];
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