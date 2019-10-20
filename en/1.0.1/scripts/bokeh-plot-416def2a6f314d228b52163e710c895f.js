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
      };var element = document.getElementById("dd89c53b-dfbf-4ff8-afde-01523ae6da50");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dd89c53b-dfbf-4ff8-afde-01523ae6da50' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"9cba8661-42fb-4e21-bec2-cdf8eb209d33":{"roots":{"references":[{"attributes":{},"id":"21480","type":"CategoricalScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"21493","type":"Toolbar"},{"attributes":{},"id":"21482","type":"LinearScale"},{"attributes":{},"id":"21503","type":"BasicTickFormatter"},{"attributes":{},"id":"21485","type":"CategoricalTicker"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"21473","type":"Title"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"21495","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"21496","type":"VBar"},{"attributes":{},"id":"21512","type":"UnionRenderers"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"21497","type":"GlyphRenderer"}]},"id":"21505","type":"LegendItem"},{"attributes":{"dimension":1,"plot":{"id":"21474","subtype":"Figure","type":"Plot"},"ticker":{"id":"21489","type":"BasicTicker"}},"id":"21492","type":"Grid"},{"attributes":{},"id":"21501","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"21501","type":"CategoricalTickFormatter"},"plot":{"id":"21474","subtype":"Figure","type":"Plot"},"ticker":{"id":"21485","type":"CategoricalTicker"}},"id":"21484","type":"CategoricalAxis"},{"attributes":{"callback":null,"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"21511","type":"Selection"},"selection_policy":{"id":"21512","type":"UnionRenderers"}},"id":"21472","type":"ColumnDataSource"},{"attributes":{},"id":"21511","type":"Selection"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"21474","subtype":"Figure","type":"Plot"},"ticker":{"id":"21485","type":"CategoricalTicker"}},"id":"21487","type":"Grid"},{"attributes":{"formatter":{"id":"21503","type":"BasicTickFormatter"},"plot":{"id":"21474","subtype":"Figure","type":"Plot"},"ticker":{"id":"21489","type":"BasicTicker"}},"id":"21488","type":"LinearAxis"},{"attributes":{},"id":"21489","type":"BasicTicker"},{"attributes":{"below":[{"id":"21484","type":"CategoricalAxis"}],"left":[{"id":"21488","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"21484","type":"CategoricalAxis"},{"id":"21487","type":"Grid"},{"id":"21488","type":"LinearAxis"},{"id":"21492","type":"Grid"},{"id":"21504","type":"Legend"},{"id":"21497","type":"GlyphRenderer"}],"title":{"id":"21473","type":"Title"},"toolbar":{"id":"21493","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"21476","type":"FactorRange"},"x_scale":{"id":"21480","type":"CategoricalScale"},"y_range":{"id":"21478","type":"Range1d"},"y_scale":{"id":"21482","type":"LinearScale"}},"id":"21474","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"21472","type":"ColumnDataSource"}},"id":"21498","type":"CDSView"},{"attributes":{"callback":null,"end":9},"id":"21478","type":"Range1d"},{"attributes":{"data_source":{"id":"21472","type":"ColumnDataSource"},"glyph":{"id":"21495","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21496","type":"VBar"},"selection_glyph":null,"view":{"id":"21498","type":"CDSView"}},"id":"21497","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"21476","type":"FactorRange"},{"attributes":{"items":[{"id":"21505","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"21474","subtype":"Figure","type":"Plot"}},"id":"21504","type":"Legend"}],"root_ids":["21474"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"9cba8661-42fb-4e21-bec2-cdf8eb209d33","roots":{"21474":"dd89c53b-dfbf-4ff8-afde-01523ae6da50"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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