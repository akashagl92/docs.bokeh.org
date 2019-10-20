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
      };var element = document.getElementById("5d54463a-852f-48e3-a026-1b2f6f636d0c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5d54463a-852f-48e3-a026-1b2f6f636d0c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"13ff3d2d-c50e-451a-9cb0-dfc72dd19e8c":{"roots":{"references":[{"attributes":{"line_color":{"value":"#1d91d0"},"line_dash":[6],"mode":"center","x":{"field":"x"},"y":{"field":"y2"}},"id":"29563","type":"Step"},{"attributes":{"dimension":1,"plot":{"id":"29558","type":"Plot"},"ticker":{"id":"29573","type":"BasicTicker"}},"id":"29574","type":"Grid"},{"attributes":{},"id":"29578","type":"LinearScale"},{"attributes":{"line_color":{"value":"#cab2d6"},"line_width":{"value":3},"mode":"after","x":{"field":"x"},"y":{"field":"y3"}},"id":"29566","type":"Step"},{"attributes":{"data_source":{"id":"29557","type":"ColumnDataSource"},"glyph":{"id":"29560","type":"Step"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29562","type":"CDSView"}},"id":"29561","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"29558","type":"Plot"},"ticker":{"id":"29571","type":"BasicTicker"}},"id":"29572","type":"Grid"},{"attributes":{},"id":"29571","type":"BasicTicker"},{"attributes":{"callback":null},"id":"29579","type":"DataRange1d"},{"attributes":{"source":{"id":"29557","type":"ColumnDataSource"}},"id":"29568","type":"CDSView"},{"attributes":{"formatter":{"id":"29581","type":"BasicTickFormatter"},"plot":{"id":"29558","type":"Plot"},"ticker":{"id":"29571","type":"BasicTicker"}},"id":"29569","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMCamZmZmZn5vzMzMzMzM/O/mJmZmZmZ6b+YmZmZmZnZvwAAAAAAAAAAoJmZmZmZ2T+cmZmZmZnpPzQzMzMzM/M/mpmZmZmZ+T8AAAAAAAAAQA==","dtype":"float64","shape":[11]},"y1":{"__ndarray__":"AAAAAAAAEEB8FK5H4XoEQArXo3A9Cvc/eBSuR+F65D94FK5H4XrEPwAAAAAAAAAAhRSuR+F6xD9/FK5H4XrkPwzXo3A9Cvc/fBSuR+F6BEAAAAAAAAAQQA==","dtype":"float64","shape":[11]},"y2":{"__ndarray__":"AAAAAAAAGEA+CtejcD0SQIXrUbgehQtAHoXrUbgeBUBI4XoUrkcBQAAAAAAAAABASOF6FK5HAUAghetRuB4FQIbrUbgehQtAPgrXo3A9EkAAAAAAAAAYQA==","dtype":"float64","shape":[11]},"y3":{"__ndarray__":"AAAAAAAAIEA+CtejcD0aQML1KFyPwhVAj8L1KFyPEkCkcD0K16MQQAAAAAAAABBApHA9CtejEECQwvUoXI8SQMP1KFyPwhVAPgrXo3A9GkAAAAAAAAAgQA==","dtype":"float64","shape":[11]}},"selected":{"id":"29584","type":"Selection"},"selection_policy":{"id":"29585","type":"UnionRenderers"}},"id":"29557","type":"ColumnDataSource"},{"attributes":{},"id":"29584","type":"Selection"},{"attributes":{"source":{"id":"29557","type":"ColumnDataSource"}},"id":"29565","type":"CDSView"},{"attributes":{},"id":"29583","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#f46d43"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"29560","type":"Step"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"29576","type":"Toolbar"},{"attributes":{"data_source":{"id":"29557","type":"ColumnDataSource"},"glyph":{"id":"29563","type":"Step"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29565","type":"CDSView"}},"id":"29564","type":"GlyphRenderer"},{"attributes":{},"id":"29577","type":"LinearScale"},{"attributes":{},"id":"29573","type":"BasicTicker"},{"attributes":{"data_source":{"id":"29557","type":"ColumnDataSource"},"glyph":{"id":"29566","type":"Step"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29568","type":"CDSView"}},"id":"29567","type":"GlyphRenderer"},{"attributes":{},"id":"29585","type":"UnionRenderers"},{"attributes":{"source":{"id":"29557","type":"ColumnDataSource"}},"id":"29562","type":"CDSView"},{"attributes":{"formatter":{"id":"29583","type":"BasicTickFormatter"},"plot":{"id":"29558","type":"Plot"},"ticker":{"id":"29573","type":"BasicTicker"}},"id":"29570","type":"LinearAxis"},{"attributes":{"below":[{"id":"29569","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"29570","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"29561","type":"GlyphRenderer"},{"id":"29564","type":"GlyphRenderer"},{"id":"29567","type":"GlyphRenderer"},{"id":"29569","type":"LinearAxis"},{"id":"29570","type":"LinearAxis"},{"id":"29572","type":"Grid"},{"id":"29574","type":"Grid"}],"title":null,"toolbar":{"id":"29576","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29579","type":"DataRange1d"},"x_scale":{"id":"29578","type":"LinearScale"},"y_range":{"id":"29575","type":"DataRange1d"},"y_scale":{"id":"29577","type":"LinearScale"}},"id":"29558","type":"Plot"},{"attributes":{"callback":null},"id":"29575","type":"DataRange1d"},{"attributes":{},"id":"29581","type":"BasicTickFormatter"}],"root_ids":["29558"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"13ff3d2d-c50e-451a-9cb0-dfc72dd19e8c","roots":{"29558":"5d54463a-852f-48e3-a026-1b2f6f636d0c"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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