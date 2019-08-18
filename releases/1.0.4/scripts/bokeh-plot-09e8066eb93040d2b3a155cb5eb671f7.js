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
      };var element = document.getElementById("ae7216e7-953d-4350-b9df-e66523e7d05d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ae7216e7-953d-4350-b9df-e66523e7d05d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"46949e51-2993-4159-bfe4-140c7ccba4bf":{"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1432","type":"Line"},{"attributes":{"callback":null,"start":0},"id":"1409","type":"DataRange1d"},{"attributes":{"formatter":{"id":"1439","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"1407","subtype":"Figure","type":"Plot"},"ticker":{"id":"1416","type":"CategoricalTicker"}},"id":"1415","type":"CategoricalAxis"},{"attributes":{"plot":null,"text":""},"id":"1435","type":"Title"},{"attributes":{},"id":"1413","type":"LinearScale"},{"attributes":{"below":[{"id":"1415","type":"CategoricalAxis"}],"left":[{"id":"1419","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"1415","type":"CategoricalAxis"},{"id":"1418","type":"Grid"},{"id":"1419","type":"LinearAxis"},{"id":"1423","type":"Grid"},{"id":"1428","type":"GlyphRenderer"},{"id":"1433","type":"GlyphRenderer"}],"title":{"id":"1435","type":"Title"},"toolbar":{"id":"1424","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1406","type":"FactorRange"},"x_scale":{"id":"1411","type":"CategoricalScale"},"y_range":{"id":"1409","type":"DataRange1d"},"y_scale":{"id":"1413","type":"LinearScale"}},"id":"1407","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"1430","type":"ColumnDataSource"}},"id":"1434","type":"CDSView"},{"attributes":{"formatter":{"id":"1437","type":"BasicTickFormatter"},"plot":{"id":"1407","subtype":"Figure","type":"Plot"},"ticker":{"id":"1420","type":"BasicTicker"}},"id":"1419","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]},"selected":{"id":"1444","type":"Selection"},"selection_policy":{"id":"1443","type":"UnionRenderers"}},"id":"1430","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]},"selected":{"id":"1442","type":"Selection"},"selection_policy":{"id":"1441","type":"UnionRenderers"}},"id":"1425","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1407","subtype":"Figure","type":"Plot"},"ticker":{"id":"1416","type":"CategoricalTicker"}},"id":"1418","type":"Grid"},{"attributes":{"data_source":{"id":"1425","type":"ColumnDataSource"},"glyph":{"id":"1426","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1427","type":"VBar"},"selection_glyph":null,"view":{"id":"1429","type":"CDSView"}},"id":"1428","type":"GlyphRenderer"},{"attributes":{},"id":"1441","type":"UnionRenderers"},{"attributes":{"source":{"id":"1425","type":"ColumnDataSource"}},"id":"1429","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"1407","subtype":"Figure","type":"Plot"},"ticker":{"id":"1420","type":"BasicTicker"}},"id":"1423","type":"Grid"},{"attributes":{},"id":"1416","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1427","type":"VBar"},{"attributes":{},"id":"1437","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"1406","type":"FactorRange"},{"attributes":{},"id":"1443","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1426","type":"VBar"},{"attributes":{},"id":"1420","type":"BasicTicker"},{"attributes":{},"id":"1442","type":"Selection"},{"attributes":{},"id":"1444","type":"Selection"},{"attributes":{},"id":"1411","type":"CategoricalScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1424","type":"Toolbar"},{"attributes":{"line_color":"red","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1431","type":"Line"},{"attributes":{"data_source":{"id":"1430","type":"ColumnDataSource"},"glyph":{"id":"1431","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1432","type":"Line"},"selection_glyph":null,"view":{"id":"1434","type":"CDSView"}},"id":"1433","type":"GlyphRenderer"},{"attributes":{},"id":"1439","type":"CategoricalTickFormatter"}],"root_ids":["1407"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"46949e51-2993-4159-bfe4-140c7ccba4bf","roots":{"1407":"ae7216e7-953d-4350-b9df-e66523e7d05d"}}];
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