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
      };var element = document.getElementById("37a9c17c-75e5-4830-a7a4-63d89f486c0e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '37a9c17c-75e5-4830-a7a4-63d89f486c0e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"1aedd1eb-f564-4959-9a21-bae9665b690b":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1025","type":"VBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"1005","type":"FactorRange"},{"attributes":{"data_source":{"id":"1023","type":"ColumnDataSource"},"glyph":{"id":"1024","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1025","type":"VBar"},"selection_glyph":null,"view":{"id":"1027","type":"CDSView"}},"id":"1026","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1031","type":"CategoricalTickFormatter"},"plot":{"id":"1003","subtype":"Figure","type":"Plot"},"ticker":{"id":"1014","type":"CategoricalTicker"}},"id":"1013","type":"CategoricalAxis"},{"attributes":{},"id":"1014","type":"CategoricalTicker"},{"attributes":{"source":{"id":"1023","type":"ColumnDataSource"}},"id":"1027","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1003","subtype":"Figure","type":"Plot"},"ticker":{"id":"1014","type":"CategoricalTicker"}},"id":"1016","type":"Grid"},{"attributes":{"callback":null,"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"1034","type":"Selection"},"selection_policy":{"id":"1033","type":"UnionRenderers"}},"id":"1023","type":"ColumnDataSource"},{"attributes":{},"id":"1029","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"1013","type":"CategoricalAxis"}],"left":[{"id":"1017","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"1013","type":"CategoricalAxis"},{"id":"1016","type":"Grid"},{"id":"1017","type":"LinearAxis"},{"id":"1021","type":"Grid"},{"id":"1026","type":"GlyphRenderer"}],"title":{"id":"1002","type":"Title"},"toolbar":{"id":"1022","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1005","type":"FactorRange"},"x_scale":{"id":"1009","type":"CategoricalScale"},"y_range":{"id":"1007","type":"DataRange1d"},"y_scale":{"id":"1011","type":"LinearScale"}},"id":"1003","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"1029","type":"BasicTickFormatter"},"plot":{"id":"1003","subtype":"Figure","type":"Plot"},"ticker":{"id":"1018","type":"BasicTicker"}},"id":"1017","type":"LinearAxis"},{"attributes":{},"id":"1031","type":"CategoricalTickFormatter"},{"attributes":{},"id":"1018","type":"BasicTicker"},{"attributes":{},"id":"1033","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"1003","subtype":"Figure","type":"Plot"},"ticker":{"id":"1018","type":"BasicTicker"}},"id":"1021","type":"Grid"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"1002","type":"Title"},{"attributes":{},"id":"1034","type":"Selection"},{"attributes":{"callback":null,"start":0},"id":"1007","type":"DataRange1d"},{"attributes":{},"id":"1009","type":"CategoricalScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1022","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1024","type":"VBar"},{"attributes":{},"id":"1011","type":"LinearScale"}],"root_ids":["1003"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"1aedd1eb-f564-4959-9a21-bae9665b690b","roots":{"1003":"37a9c17c-75e5-4830-a7a4-63d89f486c0e"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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