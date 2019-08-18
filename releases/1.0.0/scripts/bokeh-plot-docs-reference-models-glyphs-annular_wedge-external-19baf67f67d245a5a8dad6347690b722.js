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
      };var element = document.getElementById("021f430c-a004-4036-91b4-b45e4ce62d67");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '021f430c-a004-4036-91b4-b45e4ce62d67' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"06c210e4-b06f-41df-881c-e59a11c95e35":{"roots":{"references":[{"attributes":{},"id":"27648","type":"LinearScale"},{"attributes":{},"id":"27644","type":"BasicTicker"},{"attributes":{"below":[{"id":"27640","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"27641","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"27638","type":"GlyphRenderer"},{"id":"27640","type":"LinearAxis"},{"id":"27641","type":"LinearAxis"},{"id":"27643","type":"Grid"},{"id":"27645","type":"Grid"}],"title":null,"toolbar":{"id":"27647","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"27650","type":"DataRange1d"},"x_scale":{"id":"27649","type":"LinearScale"},"y_range":{"id":"27646","type":"DataRange1d"},"y_scale":{"id":"27648","type":"LinearScale"}},"id":"27635","type":"Plot"},{"attributes":{"data_source":{"id":"27634","type":"ColumnDataSource"},"glyph":{"id":"27637","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"27639","type":"CDSView"}},"id":"27638","type":"GlyphRenderer"},{"attributes":{},"id":"27654","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"27635","type":"Plot"},"ticker":{"id":"27642","type":"BasicTicker"}},"id":"27643","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"27647","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"27635","type":"Plot"},"ticker":{"id":"27644","type":"BasicTicker"}},"id":"27645","type":"Grid"},{"attributes":{},"id":"27649","type":"LinearScale"},{"attributes":{"callback":null},"id":"27650","type":"DataRange1d"},{"attributes":{"callback":null},"id":"27646","type":"DataRange1d"},{"attributes":{},"id":"27652","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"27654","type":"BasicTickFormatter"},"plot":{"id":"27635","type":"Plot"},"ticker":{"id":"27644","type":"BasicTicker"}},"id":"27641","type":"LinearAxis"},{"attributes":{},"id":"27642","type":"BasicTicker"},{"attributes":{},"id":"27655","type":"Selection"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#8888ee"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"27637","type":"AnnularWedge"},{"attributes":{"formatter":{"id":"27652","type":"BasicTickFormatter"},"plot":{"id":"27635","type":"Plot"},"ticker":{"id":"27642","type":"BasicTicker"}},"id":"27640","type":"LinearAxis"},{"attributes":{"source":{"id":"27634","type":"ColumnDataSource"}},"id":"27639","type":"CDSView"},{"attributes":{},"id":"27656","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"r":{"__ndarray__":"393d3d3dzT+amZmZmZnRP0VERERERNQ/7+7u7u7u1j+amZmZmZnZP0VERERERNw/7+7u7u7u3j/NzMzMzMzgPyIiIiIiIuI/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"27655","type":"Selection"},"selection_policy":{"id":"27656","type":"UnionRenderers"}},"id":"27634","type":"ColumnDataSource"}],"root_ids":["27635"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"06c210e4-b06f-41df-881c-e59a11c95e35","roots":{"27635":"021f430c-a004-4036-91b4-b45e4ce62d67"}}];
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