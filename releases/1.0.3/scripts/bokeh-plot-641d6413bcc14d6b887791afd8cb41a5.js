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
      };var element = document.getElementById("c8169309-88d2-471b-a35b-7956613ad87d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c8169309-88d2-471b-a35b-7956613ad87d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1da50809-ef28-4706-8047-45738daeaa4b":{"roots":{"references":[{"attributes":{},"id":"21506","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"21506","type":"CategoricalTickFormatter"},"plot":{"id":"21478","subtype":"Figure","type":"Plot"},"ticker":{"id":"21489","type":"CategoricalTicker"}},"id":"21488","type":"CategoricalAxis"},{"attributes":{"formatter":{"id":"21504","type":"BasicTickFormatter"},"plot":{"id":"21478","subtype":"Figure","type":"Plot"},"ticker":{"id":"21493","type":"BasicTicker"}},"id":"21492","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"21478","subtype":"Figure","type":"Plot"},"ticker":{"id":"21493","type":"BasicTicker"}},"id":"21496","type":"Grid"},{"attributes":{},"id":"21493","type":"BasicTicker"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"21501","type":"GlyphRenderer"}]},"id":"21509","type":"LegendItem"},{"attributes":{},"id":"21486","type":"LinearScale"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"21499","type":"VBar"},{"attributes":{"callback":null,"end":9},"id":"21482","type":"Range1d"},{"attributes":{"source":{"id":"21476","type":"ColumnDataSource"}},"id":"21502","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"21478","subtype":"Figure","type":"Plot"},"ticker":{"id":"21489","type":"CategoricalTicker"}},"id":"21491","type":"Grid"},{"attributes":{"data_source":{"id":"21476","type":"ColumnDataSource"},"glyph":{"id":"21499","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21500","type":"VBar"},"selection_glyph":null,"view":{"id":"21502","type":"CDSView"}},"id":"21501","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"21515","type":"Selection"},"selection_policy":{"id":"21516","type":"UnionRenderers"}},"id":"21476","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"21500","type":"VBar"},{"attributes":{},"id":"21504","type":"BasicTickFormatter"},{"attributes":{},"id":"21484","type":"CategoricalScale"},{"attributes":{"below":[{"id":"21488","type":"CategoricalAxis"}],"left":[{"id":"21492","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"21488","type":"CategoricalAxis"},{"id":"21491","type":"Grid"},{"id":"21492","type":"LinearAxis"},{"id":"21496","type":"Grid"},{"id":"21508","type":"Legend"},{"id":"21501","type":"GlyphRenderer"}],"title":{"id":"21477","type":"Title"},"toolbar":{"id":"21497","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"21480","type":"FactorRange"},"x_scale":{"id":"21484","type":"CategoricalScale"},"y_range":{"id":"21482","type":"Range1d"},"y_scale":{"id":"21486","type":"LinearScale"}},"id":"21478","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"21477","type":"Title"},{"attributes":{"items":[{"id":"21509","type":"LegendItem"}],"location":"top_center","orientation":"horizontal","plot":{"id":"21478","subtype":"Figure","type":"Plot"}},"id":"21508","type":"Legend"},{"attributes":{},"id":"21516","type":"UnionRenderers"},{"attributes":{},"id":"21489","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"21480","type":"FactorRange"},{"attributes":{},"id":"21515","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"21497","type":"Toolbar"}],"root_ids":["21478"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"1da50809-ef28-4706-8047-45738daeaa4b","roots":{"21478":"c8169309-88d2-471b-a35b-7956613ad87d"}}];
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