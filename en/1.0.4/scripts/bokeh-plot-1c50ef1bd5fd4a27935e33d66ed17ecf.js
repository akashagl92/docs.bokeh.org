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
      };var element = document.getElementById("4a43b0fb-9b02-42b2-85e3-33ae788298d3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4a43b0fb-9b02-42b2-85e3-33ae788298d3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"bb1e52ed-12ea-4d89-bac7-88256c2872b7":{"roots":{"references":[{"attributes":{},"id":"2546","type":"LinearScale"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"2537","type":"Title"},{"attributes":{"callback":null,"start":0},"id":"2542","type":"DataRange1d"},{"attributes":{"source":{"id":"2558","type":"ColumnDataSource"}},"id":"2562","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"2557","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"2538","subtype":"Figure","type":"Plot"},"ticker":{"id":"2553","type":"BasicTicker"}},"id":"2556","type":"Grid"},{"attributes":{},"id":"2564","type":"BasicTickFormatter"},{"attributes":{},"id":"2566","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"2564","type":"BasicTickFormatter"},"plot":{"id":"2538","subtype":"Figure","type":"Plot"},"ticker":{"id":"2553","type":"BasicTicker"}},"id":"2552","type":"LinearAxis"},{"attributes":{},"id":"2553","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"2560","type":"VBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"2540","type":"FactorRange"},{"attributes":{"formatter":{"id":"2566","type":"CategoricalTickFormatter"},"plot":{"id":"2538","subtype":"Figure","type":"Plot"},"ticker":{"id":"2549","type":"CategoricalTicker"}},"id":"2548","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"2558","type":"ColumnDataSource"},"glyph":{"id":"2559","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2560","type":"VBar"},"selection_glyph":null,"view":{"id":"2562","type":"CDSView"}},"id":"2561","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"2538","subtype":"Figure","type":"Plot"},"ticker":{"id":"2549","type":"CategoricalTicker"}},"id":"2551","type":"Grid"},{"attributes":{"callback":null,"data":{"top":[5,3,4,2,4,6],"x":[["Apples",-0.5],["Pears",-0.2],["Nectarines",0.0],["Plums",0.3],["Grapes",0.1],["Strawberries",0.3]]},"selected":{"id":"2569","type":"Selection"},"selection_policy":{"id":"2568","type":"UnionRenderers"}},"id":"2558","type":"ColumnDataSource"},{"attributes":{},"id":"2569","type":"Selection"},{"attributes":{},"id":"2549","type":"CategoricalTicker"},{"attributes":{},"id":"2568","type":"UnionRenderers"},{"attributes":{"below":[{"id":"2548","type":"CategoricalAxis"}],"left":[{"id":"2552","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"2548","type":"CategoricalAxis"},{"id":"2551","type":"Grid"},{"id":"2552","type":"LinearAxis"},{"id":"2556","type":"Grid"},{"id":"2561","type":"GlyphRenderer"}],"title":{"id":"2537","type":"Title"},"toolbar":{"id":"2557","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2540","type":"FactorRange"},"x_scale":{"id":"2544","type":"CategoricalScale"},"y_range":{"id":"2542","type":"DataRange1d"},"y_scale":{"id":"2546","type":"LinearScale"}},"id":"2538","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2544","type":"CategoricalScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"2559","type":"VBar"}],"root_ids":["2538"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"bb1e52ed-12ea-4d89-bac7-88256c2872b7","roots":{"2538":"4a43b0fb-9b02-42b2-85e3-33ae788298d3"}}];
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