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
      };var element = document.getElementById("19aa3752-f031-4db2-863f-8952acf264d9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '19aa3752-f031-4db2-863f-8952acf264d9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1decc41a-7737-456a-9a47-2fffa3cd7d8c":{"roots":{"references":[{"attributes":{"formatter":{"id":"1789","type":"BasicTickFormatter"},"plot":{"id":"1763","subtype":"Figure","type":"Plot"},"ticker":{"id":"1778","type":"BasicTicker"}},"id":"1777","type":"LinearAxis"},{"attributes":{"formatter":{"id":"1791","type":"CategoricalTickFormatter"},"plot":{"id":"1763","subtype":"Figure","type":"Plot"},"ticker":{"id":"1774","type":"CategoricalTicker"}},"id":"1773","type":"CategoricalAxis"},{"attributes":{"source":{"id":"1783","type":"ColumnDataSource"}},"id":"1787","type":"CDSView"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"1762","type":"Title"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1763","subtype":"Figure","type":"Plot"},"ticker":{"id":"1774","type":"CategoricalTicker"}},"id":"1776","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1782","type":"Toolbar"},{"attributes":{"callback":null,"start":0},"id":"1767","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1784","type":"VBar"},{"attributes":{},"id":"1794","type":"Selection"},{"attributes":{"callback":null,"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"1794","type":"Selection"},"selection_policy":{"id":"1793","type":"UnionRenderers"}},"id":"1783","type":"ColumnDataSource"},{"attributes":{},"id":"1789","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"1773","type":"CategoricalAxis"}],"left":[{"id":"1777","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"1773","type":"CategoricalAxis"},{"id":"1776","type":"Grid"},{"id":"1777","type":"LinearAxis"},{"id":"1781","type":"Grid"},{"id":"1786","type":"GlyphRenderer"}],"title":{"id":"1762","type":"Title"},"toolbar":{"id":"1782","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1765","type":"FactorRange"},"x_scale":{"id":"1769","type":"CategoricalScale"},"y_range":{"id":"1767","type":"DataRange1d"},"y_scale":{"id":"1771","type":"LinearScale"}},"id":"1763","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1785","type":"VBar"},{"attributes":{"callback":null,"factors":["Plums","Pears","Nectarines","Grapes","Apples","Strawberries"]},"id":"1765","type":"FactorRange"},{"attributes":{},"id":"1771","type":"LinearScale"},{"attributes":{},"id":"1774","type":"CategoricalTicker"},{"attributes":{},"id":"1793","type":"UnionRenderers"},{"attributes":{},"id":"1778","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1783","type":"ColumnDataSource"},"glyph":{"id":"1784","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1785","type":"VBar"},"selection_glyph":null,"view":{"id":"1787","type":"CDSView"}},"id":"1786","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"1763","subtype":"Figure","type":"Plot"},"ticker":{"id":"1778","type":"BasicTicker"}},"id":"1781","type":"Grid"},{"attributes":{},"id":"1791","type":"CategoricalTickFormatter"},{"attributes":{},"id":"1769","type":"CategoricalScale"}],"root_ids":["1763"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"1decc41a-7737-456a-9a47-2fffa3cd7d8c","roots":{"1763":"19aa3752-f031-4db2-863f-8952acf264d9"}}];
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