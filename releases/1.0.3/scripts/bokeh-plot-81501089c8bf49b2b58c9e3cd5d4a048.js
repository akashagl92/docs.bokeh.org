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
      };var element = document.getElementById("ea67a887-45fa-4cba-9e39-e9839494859a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ea67a887-45fa-4cba-9e39-e9839494859a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d2928e8c-08b5-488a-9fe1-0637620e6f11":{"roots":{"references":[{"attributes":{},"id":"1836","type":"CategoricalTicker"},{"attributes":{"bottom":{"expr":{"id":"1849","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"1850","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"1880","type":"VBar"},{"attributes":{},"id":"1833","type":"LinearScale"},{"attributes":{"bottom":{"expr":{"id":"1845","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"1846","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"1854","type":"VBar"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"1855","type":"GlyphRenderer"}]},"id":"1863","type":"LegendItem"},{"attributes":{"bottom":{"expr":{"id":"1845","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"1846","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"1853","type":"VBar"},{"attributes":{"fields":[]},"id":"1845","type":"Stack"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"1868","type":"GlyphRenderer"}]},"id":"1877","type":"LegendItem"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"1891","type":"Selection"},"selection_policy":{"id":"1892","type":"UnionRenderers"}},"id":"1864","type":"ColumnDataSource"},{"attributes":{},"id":"1831","type":"CategoricalScale"},{"attributes":{},"id":"1892","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1878","type":"ColumnDataSource"},"glyph":{"id":"1880","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"1881","type":"VBar"},"selection_glyph":null,"view":{"id":"1883","type":"CDSView"}},"id":"1882","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1864","type":"ColumnDataSource"}},"id":"1869","type":"CDSView"},{"attributes":{"fields":["2015"]},"id":"1847","type":"Stack"},{"attributes":{},"id":"1875","type":"Selection"},{"attributes":{},"id":"1860","type":"CategoricalTickFormatter"},{"attributes":{"fields":["2015","2016"]},"id":"1848","type":"Stack"},{"attributes":{"callback":null,"start":0},"id":"1829","type":"DataRange1d"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1825","subtype":"Figure","type":"Plot"},"ticker":{"id":"1836","type":"CategoricalTicker"}},"id":"1838","type":"Grid"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"1882","type":"GlyphRenderer"}]},"id":"1893","type":"LegendItem"},{"attributes":{"source":{"id":"1878","type":"ColumnDataSource"}},"id":"1883","type":"CDSView"},{"attributes":{"below":[{"id":"1835","type":"CategoricalAxis"}],"left":[{"id":"1839","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"1835","type":"CategoricalAxis"},{"id":"1838","type":"Grid"},{"id":"1839","type":"LinearAxis"},{"id":"1843","type":"Grid"},{"id":"1862","type":"Legend"},{"id":"1855","type":"GlyphRenderer"},{"id":"1868","type":"GlyphRenderer"},{"id":"1882","type":"GlyphRenderer"}],"title":{"id":"1824","type":"Title"},"toolbar":{"id":"1844","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1827","type":"FactorRange"},"x_scale":{"id":"1831","type":"CategoricalScale"},"y_range":{"id":"1829","type":"DataRange1d"},"y_scale":{"id":"1833","type":"LinearScale"}},"id":"1825","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1903","type":"Selection"},{"attributes":{"fields":["2015","2016"]},"id":"1849","type":"Stack"},{"attributes":{},"id":"1904","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"1825","subtype":"Figure","type":"Plot"},"ticker":{"id":"1840","type":"BasicTicker"}},"id":"1843","type":"Grid"},{"attributes":{"fields":["2015"]},"id":"1846","type":"Stack"},{"attributes":{},"id":"1840","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"1824","type":"Title"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"1827","type":"FactorRange"},{"attributes":{},"id":"1858","type":"BasicTickFormatter"},{"attributes":{"fields":["2015","2016","2017"]},"id":"1850","type":"Stack"},{"attributes":{"data_source":{"id":"1864","type":"ColumnDataSource"},"glyph":{"id":"1866","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"1867","type":"VBar"},"selection_glyph":null,"view":{"id":"1869","type":"CDSView"}},"id":"1868","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1851","type":"ColumnDataSource"}},"id":"1856","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"1847","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"1848","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"1866","type":"VBar"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"1903","type":"Selection"},"selection_policy":{"id":"1904","type":"UnionRenderers"}},"id":"1878","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"1863","type":"LegendItem"},{"id":"1877","type":"LegendItem"},{"id":"1893","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"1825","subtype":"Figure","type":"Plot"}},"id":"1862","type":"Legend"},{"attributes":{"formatter":{"id":"1860","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"1825","subtype":"Figure","type":"Plot"},"ticker":{"id":"1836","type":"CategoricalTicker"}},"id":"1835","type":"CategoricalAxis"},{"attributes":{},"id":"1891","type":"Selection"},{"attributes":{"data_source":{"id":"1851","type":"ColumnDataSource"},"glyph":{"id":"1853","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"1854","type":"VBar"},"selection_glyph":null,"view":{"id":"1856","type":"CDSView"}},"id":"1855","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1844","type":"Toolbar"},{"attributes":{"formatter":{"id":"1858","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"1825","subtype":"Figure","type":"Plot"},"ticker":{"id":"1840","type":"BasicTicker"}},"id":"1839","type":"LinearAxis"},{"attributes":{},"id":"1876","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"1875","type":"Selection"},"selection_policy":{"id":"1876","type":"UnionRenderers"}},"id":"1851","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"1849","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"1850","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"1881","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"1847","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"1848","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"1867","type":"VBar"}],"root_ids":["1825"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"d2928e8c-08b5-488a-9fe1-0637620e6f11","roots":{"1825":"ea67a887-45fa-4cba-9e39-e9839494859a"}}];
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