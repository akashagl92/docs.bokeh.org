(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("0fc16b1c-4a3c-4b0a-9a55-2b5dcba5fc27");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0fc16b1c-4a3c-4b0a-9a55-2b5dcba5fc27' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"20855452-554b-4911-a9ea-3fbc18fe47eb":{"roots":{"references":[{"attributes":{},"id":"29582","type":"BasicTickFormatter"},{"attributes":{},"id":"29580","type":"LinearScale"},{"attributes":{},"id":"29574","type":"BasicTicker"},{"attributes":{"data_source":{"id":"29558","type":"ColumnDataSource"},"glyph":{"id":"29567","type":"Step"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29569","type":"CDSView"}},"id":"29568","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"29559","type":"Plot"},"ticker":{"id":"29572","type":"BasicTicker"}},"id":"29573","type":"Grid"},{"attributes":{"callback":null},"id":"29578","type":"DataRange1d"},{"attributes":{},"id":"29584","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"29576","type":"Toolbar"},{"attributes":{"data_source":{"id":"29558","type":"ColumnDataSource"},"glyph":{"id":"29564","type":"Step"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29566","type":"CDSView"}},"id":"29565","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMCamZmZmZn5vzMzMzMzM/O/mJmZmZmZ6b+YmZmZmZnZvwAAAAAAAAAAoJmZmZmZ2T+cmZmZmZnpPzQzMzMzM/M/mpmZmZmZ+T8AAAAAAAAAQA==","dtype":"float64","shape":[11]},"y1":{"__ndarray__":"AAAAAAAAEEB8FK5H4XoEQArXo3A9Cvc/eBSuR+F65D94FK5H4XrEPwAAAAAAAAAAhRSuR+F6xD9/FK5H4XrkPwzXo3A9Cvc/fBSuR+F6BEAAAAAAAAAQQA==","dtype":"float64","shape":[11]},"y2":{"__ndarray__":"AAAAAAAAGEA+CtejcD0SQIXrUbgehQtAHoXrUbgeBUBI4XoUrkcBQAAAAAAAAABASOF6FK5HAUAghetRuB4FQIbrUbgehQtAPgrXo3A9EkAAAAAAAAAYQA==","dtype":"float64","shape":[11]},"y3":{"__ndarray__":"AAAAAAAAIEA+CtejcD0aQML1KFyPwhVAj8L1KFyPEkCkcD0K16MQQAAAAAAAABBApHA9CtejEECQwvUoXI8SQMP1KFyPwhVAPgrXo3A9GkAAAAAAAAAgQA==","dtype":"float64","shape":[11]}},"selected":{"id":"29586","type":"Selection"},"selection_policy":{"id":"29585","type":"UnionRenderers"}},"id":"29558","type":"ColumnDataSource"},{"attributes":{"source":{"id":"29558","type":"ColumnDataSource"}},"id":"29563","type":"CDSView"},{"attributes":{"line_color":{"value":"#1d91d0"},"line_dash":[6],"mode":"center","x":{"field":"x"},"y":{"field":"y2"}},"id":"29564","type":"Step"},{"attributes":{"dimension":1,"plot":{"id":"29559","type":"Plot"},"ticker":{"id":"29574","type":"BasicTicker"}},"id":"29575","type":"Grid"},{"attributes":{"line_color":{"value":"#cab2d6"},"line_width":{"value":3},"mode":"after","x":{"field":"x"},"y":{"field":"y3"}},"id":"29567","type":"Step"},{"attributes":{"source":{"id":"29558","type":"ColumnDataSource"}},"id":"29569","type":"CDSView"},{"attributes":{},"id":"29585","type":"UnionRenderers"},{"attributes":{"below":[{"id":"29570","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"29571","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"29562","type":"GlyphRenderer"},{"id":"29565","type":"GlyphRenderer"},{"id":"29568","type":"GlyphRenderer"},{"id":"29570","type":"LinearAxis"},{"id":"29571","type":"LinearAxis"},{"id":"29573","type":"Grid"},{"id":"29575","type":"Grid"}],"title":null,"toolbar":{"id":"29576","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29579","type":"DataRange1d"},"x_scale":{"id":"29577","type":"LinearScale"},"y_range":{"id":"29578","type":"DataRange1d"},"y_scale":{"id":"29580","type":"LinearScale"}},"id":"29559","type":"Plot"},{"attributes":{},"id":"29586","type":"Selection"},{"attributes":{"data_source":{"id":"29558","type":"ColumnDataSource"},"glyph":{"id":"29561","type":"Step"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29563","type":"CDSView"}},"id":"29562","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"29584","type":"BasicTickFormatter"},"plot":{"id":"29559","type":"Plot"},"ticker":{"id":"29574","type":"BasicTicker"}},"id":"29571","type":"LinearAxis"},{"attributes":{"formatter":{"id":"29582","type":"BasicTickFormatter"},"plot":{"id":"29559","type":"Plot"},"ticker":{"id":"29572","type":"BasicTicker"}},"id":"29570","type":"LinearAxis"},{"attributes":{},"id":"29577","type":"LinearScale"},{"attributes":{"line_color":{"value":"#f46d43"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"29561","type":"Step"},{"attributes":{"source":{"id":"29558","type":"ColumnDataSource"}},"id":"29566","type":"CDSView"},{"attributes":{},"id":"29572","type":"BasicTicker"},{"attributes":{"callback":null},"id":"29579","type":"DataRange1d"}],"root_ids":["29559"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"20855452-554b-4911-a9ea-3fbc18fe47eb","roots":{"29559":"0fc16b1c-4a3c-4b0a-9a55-2b5dcba5fc27"}}];
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
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();