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
      };var element = document.getElementById("9d6df41e-9989-405a-9c35-d574f18b8d49");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9d6df41e-9989-405a-9c35-d574f18b8d49' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"3fa125e2-56ac-427a-a99a-e4b83130a5bf":{"roots":{"references":[{"attributes":{},"id":"29282","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"29276","type":"Toolbar"},{"attributes":{"formatter":{"id":"29280","type":"BasicTickFormatter"},"plot":{"id":"29264","type":"Plot"},"ticker":{"id":"29273","type":"BasicTicker"}},"id":"29270","type":"LinearAxis"},{"attributes":{"callback":null},"id":"29278","type":"DataRange1d"},{"attributes":{"plot":{"id":"29264","type":"Plot"},"ticker":{"id":"29271","type":"BasicTicker"}},"id":"29272","type":"Grid"},{"attributes":{},"id":"29277","type":"LinearScale"},{"attributes":{},"id":"29280","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"29269","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"29270","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"29267","type":"GlyphRenderer"},{"id":"29269","type":"LinearAxis"},{"id":"29270","type":"LinearAxis"},{"id":"29272","type":"Grid"},{"id":"29274","type":"Grid"}],"title":null,"toolbar":{"id":"29276","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29278","type":"DataRange1d"},"x_scale":{"id":"29277","type":"LinearScale"},"y_range":{"id":"29275","type":"DataRange1d"},"y_scale":{"id":"29279","type":"LinearScale"}},"id":"29264","type":"Plot"},{"attributes":{},"id":"29284","type":"Selection"},{"attributes":{},"id":"29279","type":"LinearScale"},{"attributes":{},"id":"29271","type":"BasicTicker"},{"attributes":{"callback":null},"id":"29275","type":"DataRange1d"},{"attributes":{"source":{"id":"29263","type":"ColumnDataSource"}},"id":"29268","type":"CDSView"},{"attributes":{"data_source":{"id":"29263","type":"ColumnDataSource"},"glyph":{"id":"29266","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29268","type":"CDSView"}},"id":"29267","type":"GlyphRenderer"},{"attributes":{},"id":"29273","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":-2.0},"length":{"field":"l","units":"data"},"line_color":{"value":"#fb8072"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"29266","type":"Ray"},{"attributes":{"formatter":{"id":"29282","type":"BasicTickFormatter"},"plot":{"id":"29264","type":"Plot"},"ticker":{"id":"29271","type":"BasicTicker"}},"id":"29269","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"l":{"__ndarray__":"AAAAAAAALkAAAAAAAIAxQAAAAAAAADRAAAAAAACANkAAAAAAAAA5QAAAAAAAgDtAAAAAAAAAPkAAAAAAAEBAQAAAAAAAgEFA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"29284","type":"Selection"},"selection_policy":{"id":"29285","type":"UnionRenderers"}},"id":"29263","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"29264","type":"Plot"},"ticker":{"id":"29273","type":"BasicTicker"}},"id":"29274","type":"Grid"},{"attributes":{},"id":"29285","type":"UnionRenderers"}],"root_ids":["29264"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"3fa125e2-56ac-427a-a99a-e4b83130a5bf","roots":{"29264":"9d6df41e-9989-405a-9c35-d574f18b8d49"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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