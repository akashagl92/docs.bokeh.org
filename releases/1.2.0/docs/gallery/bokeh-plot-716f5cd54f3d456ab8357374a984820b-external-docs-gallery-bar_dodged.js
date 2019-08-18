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
      };var element = document.getElementById("44c39ad0-385f-4189-9cfd-22abcbe268e5");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '44c39ad0-385f-4189-9cfd-22abcbe268e5' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"d0490540-7c4a-43e3-af8c-c0637be99376":{"roots":{"references":[{"attributes":{},"id":"1584","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"1571","type":"ColumnDataSource"},"glyph":{"id":"1622","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1623","type":"VBar"},"selection_glyph":null,"view":{"id":"1625","type":"CDSView"}},"id":"1624","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1571","type":"ColumnDataSource"}},"id":"1625","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"1588","type":"BasicTicker"}},"id":"1591","type":"Grid"},{"attributes":{"formatter":{"id":"1600","type":"BasicTickFormatter"},"ticker":{"id":"1588","type":"BasicTicker"}},"id":"1587","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"1620","type":"Dodge"}}},"id":"1623","type":"VBar"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"1624","type":"GlyphRenderer"}]},"id":"1633","type":"LegendItem"},{"attributes":{},"id":"1588","type":"BasicTicker"},{"attributes":{"range":{"id":"1575","type":"FactorRange"},"value":0.25},"id":"1620","type":"Dodge"},{"attributes":{"below":[{"id":"1583","type":"CategoricalAxis"}],"center":[{"id":"1586","type":"Grid"},{"id":"1591","type":"Grid"},{"id":"1604","type":"Legend"}],"left":[{"id":"1587","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"1597","type":"GlyphRenderer"},{"id":"1610","type":"GlyphRenderer"},{"id":"1624","type":"GlyphRenderer"}],"title":{"id":"1573","type":"Title"},"toolbar":{"id":"1592","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1575","type":"FactorRange"},"x_scale":{"id":"1579","type":"CategoricalScale"},"y_range":{"id":"1577","type":"Range1d"},"y_scale":{"id":"1581","type":"LinearScale"}},"id":"1572","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"1606","type":"Dodge"}}},"id":"1608","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1592","type":"Toolbar"},{"attributes":{"range":{"id":"1575","type":"FactorRange"}},"id":"1606","type":"Dodge"},{"attributes":{},"id":"1618","type":"UnionRenderers"},{"attributes":{},"id":"1617","type":"Selection"},{"attributes":{"source":{"id":"1571","type":"ColumnDataSource"}},"id":"1611","type":"CDSView"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"1610","type":"GlyphRenderer"}]},"id":"1619","type":"LegendItem"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"1617","type":"Selection"},"selection_policy":{"id":"1618","type":"UnionRenderers"}},"id":"1571","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1571","type":"ColumnDataSource"},"glyph":{"id":"1608","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1609","type":"VBar"},"selection_glyph":null,"view":{"id":"1611","type":"CDSView"}},"id":"1610","type":"GlyphRenderer"},{"attributes":{"items":[{"id":"1605","type":"LegendItem"},{"id":"1619","type":"LegendItem"},{"id":"1633","type":"LegendItem"}],"location":"top_left","orientation":"horizontal"},"id":"1604","type":"Legend"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"1593","type":"Dodge"}}},"id":"1595","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"1593","type":"Dodge"}}},"id":"1596","type":"VBar"},{"attributes":{"range":{"id":"1575","type":"FactorRange"},"value":-0.25},"id":"1593","type":"Dodge"},{"attributes":{"text":"Fruit Counts by Year"},"id":"1573","type":"Title"},{"attributes":{"data_source":{"id":"1571","type":"ColumnDataSource"},"glyph":{"id":"1595","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1596","type":"VBar"},"selection_glyph":null,"view":{"id":"1598","type":"CDSView"}},"id":"1597","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"1575","type":"FactorRange"},{"attributes":{"source":{"id":"1571","type":"ColumnDataSource"}},"id":"1598","type":"CDSView"},{"attributes":{},"id":"1600","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":10},"id":"1577","type":"Range1d"},{"attributes":{},"id":"1579","type":"CategoricalScale"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"1620","type":"Dodge"}}},"id":"1622","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"1606","type":"Dodge"}}},"id":"1609","type":"VBar"},{"attributes":{},"id":"1602","type":"CategoricalTickFormatter"},{"attributes":{"grid_line_color":null,"ticker":{"id":"1584","type":"CategoricalTicker"}},"id":"1586","type":"Grid"},{"attributes":{},"id":"1581","type":"LinearScale"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"1597","type":"GlyphRenderer"}]},"id":"1605","type":"LegendItem"},{"attributes":{"formatter":{"id":"1602","type":"CategoricalTickFormatter"},"ticker":{"id":"1584","type":"CategoricalTicker"}},"id":"1583","type":"CategoricalAxis"}],"root_ids":["1572"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"d0490540-7c4a-43e3-af8c-c0637be99376","roots":{"1572":"44c39ad0-385f-4189-9cfd-22abcbe268e5"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
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