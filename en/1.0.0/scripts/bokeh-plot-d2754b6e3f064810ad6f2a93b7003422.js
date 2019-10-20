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
      };var element = document.getElementById("29e290e2-4eb4-4213-93fa-3d7e5e8fb1db");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '29e290e2-4eb4-4213-93fa-3d7e5e8fb1db' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3401507d-9a0e-46c0-9999-055a81797df3":{"roots":{"references":[{"attributes":{"callback":null,"start":0},"id":"26436","type":"DataRange1d"},{"attributes":{"data_source":{"id":"26452","type":"ColumnDataSource"},"glyph":{"id":"26453","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26454","type":"VBar"},"selection_glyph":null,"view":{"id":"26456","type":"CDSView"}},"id":"26455","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"26434","type":"FactorRange"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"26453","type":"VBar"},{"attributes":{},"id":"26447","type":"BasicTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"26432","subtype":"Figure","type":"Plot"},"ticker":{"id":"26443","type":"CategoricalTicker"}},"id":"26445","type":"Grid"},{"attributes":{},"id":"26461","type":"BasicTickFormatter"},{"attributes":{},"id":"26459","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"26461","type":"BasicTickFormatter"},"plot":{"id":"26432","subtype":"Figure","type":"Plot"},"ticker":{"id":"26447","type":"BasicTicker"}},"id":"26446","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"26431","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"26432","subtype":"Figure","type":"Plot"},"ticker":{"id":"26447","type":"BasicTicker"}},"id":"26450","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"26451","type":"Toolbar"},{"attributes":{"callback":null,"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"26462","type":"Selection"},"selection_policy":{"id":"26463","type":"UnionRenderers"}},"id":"26452","type":"ColumnDataSource"},{"attributes":{"source":{"id":"26452","type":"ColumnDataSource"}},"id":"26456","type":"CDSView"},{"attributes":{"below":[{"id":"26442","type":"CategoricalAxis"}],"left":[{"id":"26446","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"26442","type":"CategoricalAxis"},{"id":"26445","type":"Grid"},{"id":"26446","type":"LinearAxis"},{"id":"26450","type":"Grid"},{"id":"26455","type":"GlyphRenderer"}],"title":{"id":"26431","type":"Title"},"toolbar":{"id":"26451","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"26434","type":"FactorRange"},"x_scale":{"id":"26438","type":"CategoricalScale"},"y_range":{"id":"26436","type":"DataRange1d"},"y_scale":{"id":"26440","type":"LinearScale"}},"id":"26432","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"26454","type":"VBar"},{"attributes":{},"id":"26438","type":"CategoricalScale"},{"attributes":{},"id":"26443","type":"CategoricalTicker"},{"attributes":{},"id":"26462","type":"Selection"},{"attributes":{"formatter":{"id":"26459","type":"CategoricalTickFormatter"},"plot":{"id":"26432","subtype":"Figure","type":"Plot"},"ticker":{"id":"26443","type":"CategoricalTicker"}},"id":"26442","type":"CategoricalAxis"},{"attributes":{},"id":"26463","type":"UnionRenderers"},{"attributes":{},"id":"26440","type":"LinearScale"}],"root_ids":["26432"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"3401507d-9a0e-46c0-9999-055a81797df3","roots":{"26432":"29e290e2-4eb4-4213-93fa-3d7e5e8fb1db"}}];
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