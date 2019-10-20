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
      };var element = document.getElementById("8cb2aab8-c0f5-457f-b645-01e575ad6c9b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8cb2aab8-c0f5-457f-b645-01e575ad6c9b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"23ce5b71-e7e5-4662-bac0-056a6a2fbfee":{"roots":{"references":[{"attributes":{"callback":null,"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"1194","type":"Selection"},"selection_policy":{"id":"1195","type":"UnionRenderers"}},"id":"1155","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"1184","type":"CategoricalTickFormatter"},"plot":{"id":"1157","subtype":"Figure","type":"Plot"},"ticker":{"id":"1168","type":"CategoricalTicker"}},"id":"1167","type":"CategoricalAxis"},{"attributes":{"callback":null,"end":9},"id":"1161","type":"Range1d"},{"attributes":{},"id":"1168","type":"CategoricalTicker"},{"attributes":{"below":[{"id":"1167","type":"CategoricalAxis"}],"left":[{"id":"1171","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"1167","type":"CategoricalAxis"},{"id":"1170","type":"Grid"},{"id":"1171","type":"LinearAxis"},{"id":"1175","type":"Grid"},{"id":"1187","type":"Legend"},{"id":"1180","type":"GlyphRenderer"}],"title":{"id":"1156","type":"Title"},"toolbar":{"id":"1176","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1159","type":"FactorRange"},"x_scale":{"id":"1163","type":"CategoricalScale"},"y_range":{"id":"1161","type":"Range1d"},"y_scale":{"id":"1165","type":"LinearScale"}},"id":"1157","subtype":"Figure","type":"Plot"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1157","subtype":"Figure","type":"Plot"},"ticker":{"id":"1168","type":"CategoricalTicker"}},"id":"1170","type":"Grid"},{"attributes":{},"id":"1195","type":"UnionRenderers"},{"attributes":{"items":[{"id":"1188","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"1157","subtype":"Figure","type":"Plot"}},"id":"1187","type":"Legend"},{"attributes":{},"id":"1186","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1186","type":"BasicTickFormatter"},"plot":{"id":"1157","subtype":"Figure","type":"Plot"},"ticker":{"id":"1172","type":"BasicTicker"}},"id":"1171","type":"LinearAxis"},{"attributes":{},"id":"1194","type":"Selection"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"1178","type":"VBar"},{"attributes":{},"id":"1172","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1155","type":"ColumnDataSource"},"glyph":{"id":"1178","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1179","type":"VBar"},"selection_glyph":null,"view":{"id":"1181","type":"CDSView"}},"id":"1180","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"1157","subtype":"Figure","type":"Plot"},"ticker":{"id":"1172","type":"BasicTicker"}},"id":"1175","type":"Grid"},{"attributes":{"source":{"id":"1155","type":"ColumnDataSource"}},"id":"1181","type":"CDSView"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"1180","type":"GlyphRenderer"}]},"id":"1188","type":"LegendItem"},{"attributes":{},"id":"1184","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1176","type":"Toolbar"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"1156","type":"Title"},{"attributes":{},"id":"1163","type":"CategoricalScale"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"1159","type":"FactorRange"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"1179","type":"VBar"},{"attributes":{},"id":"1165","type":"LinearScale"}],"root_ids":["1157"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"23ce5b71-e7e5-4662-bac0-056a6a2fbfee","roots":{"1157":"8cb2aab8-c0f5-457f-b645-01e575ad6c9b"}}];
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