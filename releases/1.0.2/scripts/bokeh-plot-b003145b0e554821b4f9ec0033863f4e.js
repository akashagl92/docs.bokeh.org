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
      };var element = document.getElementById("c17a2842-291e-4261-ae18-d27da1f97bbb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c17a2842-291e-4261-ae18-d27da1f97bbb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"51add4b9-db27-4ff5-a6d1-1433f9ab2d42":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"21475","subtype":"Figure","type":"Plot"},"ticker":{"id":"21490","type":"BasicTicker"}},"id":"21493","type":"Grid"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"21498","type":"GlyphRenderer"}]},"id":"21506","type":"LegendItem"},{"attributes":{},"id":"21490","type":"BasicTicker"},{"attributes":{},"id":"21513","type":"Selection"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"21496","type":"VBar"},{"attributes":{"data_source":{"id":"21473","type":"ColumnDataSource"},"glyph":{"id":"21496","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21497","type":"VBar"},"selection_glyph":null,"view":{"id":"21499","type":"CDSView"}},"id":"21498","type":"GlyphRenderer"},{"attributes":{},"id":"21481","type":"CategoricalScale"},{"attributes":{"callback":null,"end":9},"id":"21479","type":"Range1d"},{"attributes":{},"id":"21504","type":"BasicTickFormatter"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"21475","subtype":"Figure","type":"Plot"},"ticker":{"id":"21486","type":"CategoricalTicker"}},"id":"21488","type":"Grid"},{"attributes":{"callback":null,"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"21513","type":"Selection"},"selection_policy":{"id":"21512","type":"UnionRenderers"}},"id":"21473","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"21506","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"21475","subtype":"Figure","type":"Plot"}},"id":"21505","type":"Legend"},{"attributes":{"formatter":{"id":"21502","type":"CategoricalTickFormatter"},"plot":{"id":"21475","subtype":"Figure","type":"Plot"},"ticker":{"id":"21486","type":"CategoricalTicker"}},"id":"21485","type":"CategoricalAxis"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"21474","type":"Title"},{"attributes":{"formatter":{"id":"21504","type":"BasicTickFormatter"},"plot":{"id":"21475","subtype":"Figure","type":"Plot"},"ticker":{"id":"21490","type":"BasicTicker"}},"id":"21489","type":"LinearAxis"},{"attributes":{"source":{"id":"21473","type":"ColumnDataSource"}},"id":"21499","type":"CDSView"},{"attributes":{},"id":"21483","type":"LinearScale"},{"attributes":{},"id":"21512","type":"UnionRenderers"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"21477","type":"FactorRange"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"21497","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"21494","type":"Toolbar"},{"attributes":{"below":[{"id":"21485","type":"CategoricalAxis"}],"left":[{"id":"21489","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"21485","type":"CategoricalAxis"},{"id":"21488","type":"Grid"},{"id":"21489","type":"LinearAxis"},{"id":"21493","type":"Grid"},{"id":"21505","type":"Legend"},{"id":"21498","type":"GlyphRenderer"}],"title":{"id":"21474","type":"Title"},"toolbar":{"id":"21494","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"21477","type":"FactorRange"},"x_scale":{"id":"21481","type":"CategoricalScale"},"y_range":{"id":"21479","type":"Range1d"},"y_scale":{"id":"21483","type":"LinearScale"}},"id":"21475","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21486","type":"CategoricalTicker"},{"attributes":{},"id":"21502","type":"CategoricalTickFormatter"}],"root_ids":["21475"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"51add4b9-db27-4ff5-a6d1-1433f9ab2d42","roots":{"21475":"c17a2842-291e-4261-ae18-d27da1f97bbb"}}];
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