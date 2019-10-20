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
      };var element = document.getElementById("ecdbb5cc-17ab-495e-b898-37279f450420");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ecdbb5cc-17ab-495e-b898-37279f450420' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1a283f67-d1db-413f-a644-8898131a873c":{"roots":{"references":[{"attributes":{"callback":null},"id":"29274","type":"DataRange1d"},{"attributes":{"plot":{"id":"29261","type":"Plot"},"ticker":{"id":"29268","type":"BasicTicker"}},"id":"29269","type":"Grid"},{"attributes":{},"id":"29273","type":"LinearScale"},{"attributes":{"formatter":{"id":"29280","type":"BasicTickFormatter"},"plot":{"id":"29261","type":"Plot"},"ticker":{"id":"29270","type":"BasicTicker"}},"id":"29267","type":"LinearAxis"},{"attributes":{"below":[{"id":"29266","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"29267","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"29264","type":"GlyphRenderer"},{"id":"29266","type":"LinearAxis"},{"id":"29267","type":"LinearAxis"},{"id":"29269","type":"Grid"},{"id":"29271","type":"Grid"}],"title":null,"toolbar":{"id":"29272","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"29275","type":"DataRange1d"},"x_scale":{"id":"29273","type":"LinearScale"},"y_range":{"id":"29274","type":"DataRange1d"},"y_scale":{"id":"29276","type":"LinearScale"}},"id":"29261","type":"Plot"},{"attributes":{},"id":"29270","type":"BasicTicker"},{"attributes":{},"id":"29278","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"29261","type":"Plot"},"ticker":{"id":"29270","type":"BasicTicker"}},"id":"29271","type":"Grid"},{"attributes":{"source":{"id":"29260","type":"ColumnDataSource"}},"id":"29265","type":"CDSView"},{"attributes":{},"id":"29268","type":"BasicTicker"},{"attributes":{},"id":"29276","type":"LinearScale"},{"attributes":{"formatter":{"id":"29278","type":"BasicTickFormatter"},"plot":{"id":"29261","type":"Plot"},"ticker":{"id":"29268","type":"BasicTicker"}},"id":"29266","type":"LinearAxis"},{"attributes":{},"id":"29281","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"29260","type":"ColumnDataSource"},"glyph":{"id":"29263","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"29265","type":"CDSView"}},"id":"29264","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"29275","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"29272","type":"Toolbar"},{"attributes":{"angle":{"units":"rad","value":-2.0},"length":{"field":"l","units":"data"},"line_color":{"value":"#fb8072"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"29263","type":"Ray"},{"attributes":{},"id":"29282","type":"Selection"},{"attributes":{},"id":"29280","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"l":{"__ndarray__":"AAAAAAAALkAAAAAAAIAxQAAAAAAAADRAAAAAAACANkAAAAAAAAA5QAAAAAAAgDtAAAAAAAAAPkAAAAAAAEBAQAAAAAAAgEFA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"29282","type":"Selection"},"selection_policy":{"id":"29281","type":"UnionRenderers"}},"id":"29260","type":"ColumnDataSource"}],"root_ids":["29261"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"1a283f67-d1db-413f-a644-8898131a873c","roots":{"29261":"ecdbb5cc-17ab-495e-b898-37279f450420"}}];
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