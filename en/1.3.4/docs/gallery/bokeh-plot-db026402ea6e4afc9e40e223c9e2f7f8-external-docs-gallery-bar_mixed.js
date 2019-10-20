(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("3c8aed6d-8e3c-4782-9a45-c9ef86fe3e57");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3c8aed6d-8e3c-4782-9a45-c9ef86fe3e57' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"a85cc5d8-922a-4e46-bd69-e40aec7d5c07":{"roots":{"references":[{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"1750","type":"FactorRange"},{"attributes":{"source":{"id":"1769","type":"ColumnDataSource"}},"id":"1773","type":"CDSView"},{"attributes":{"callback":null,"start":0},"id":"1753","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1770","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1771","type":"VBar"},{"attributes":{"dimension":1,"ticker":{"id":"1764","type":"BasicTicker"}},"id":"1767","type":"Grid"},{"attributes":{"text":""},"id":"1780","type":"Title"},{"attributes":{},"id":"1755","type":"CategoricalScale"},{"attributes":{},"id":"1757","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1768","type":"Toolbar"},{"attributes":{},"id":"1764","type":"BasicTicker"},{"attributes":{"formatter":{"id":"1784","type":"CategoricalTickFormatter"},"major_label_orientation":1,"ticker":{"id":"1760","type":"CategoricalTicker"}},"id":"1759","type":"CategoricalAxis"},{"attributes":{"below":[{"id":"1759","type":"CategoricalAxis"}],"center":[{"id":"1762","type":"Grid"},{"id":"1767","type":"Grid"}],"left":[{"id":"1763","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"1772","type":"GlyphRenderer"},{"id":"1777","type":"GlyphRenderer"}],"title":{"id":"1780","type":"Title"},"toolbar":{"id":"1768","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1750","type":"FactorRange"},"x_scale":{"id":"1755","type":"CategoricalScale"},"y_range":{"id":"1753","type":"DataRange1d"},"y_scale":{"id":"1757","type":"LinearScale"}},"id":"1751","subtype":"Figure","type":"Plot"},{"attributes":{"grid_line_color":null,"ticker":{"id":"1760","type":"CategoricalTicker"}},"id":"1762","type":"Grid"},{"attributes":{},"id":"1782","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]},"selected":{"id":"1787","type":"Selection"},"selection_policy":{"id":"1788","type":"UnionRenderers"}},"id":"1774","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1776","type":"Line"},{"attributes":{"data_source":{"id":"1774","type":"ColumnDataSource"},"glyph":{"id":"1775","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1776","type":"Line"},"selection_glyph":null,"view":{"id":"1778","type":"CDSView"}},"id":"1777","type":"GlyphRenderer"},{"attributes":{"line_color":"red","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1775","type":"Line"},{"attributes":{},"id":"1784","type":"CategoricalTickFormatter"},{"attributes":{},"id":"1788","type":"UnionRenderers"},{"attributes":{},"id":"1785","type":"Selection"},{"attributes":{},"id":"1787","type":"Selection"},{"attributes":{"source":{"id":"1774","type":"ColumnDataSource"}},"id":"1778","type":"CDSView"},{"attributes":{},"id":"1786","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]},"selected":{"id":"1785","type":"Selection"},"selection_policy":{"id":"1786","type":"UnionRenderers"}},"id":"1769","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"1782","type":"BasicTickFormatter"},"ticker":{"id":"1764","type":"BasicTicker"}},"id":"1763","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1769","type":"ColumnDataSource"},"glyph":{"id":"1770","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1771","type":"VBar"},"selection_glyph":null,"view":{"id":"1773","type":"CDSView"}},"id":"1772","type":"GlyphRenderer"},{"attributes":{},"id":"1760","type":"CategoricalTicker"}],"root_ids":["1751"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"a85cc5d8-922a-4e46-bd69-e40aec7d5c07","roots":{"1751":"3c8aed6d-8e3c-4782-9a45-c9ef86fe3e57"}}];
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
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();