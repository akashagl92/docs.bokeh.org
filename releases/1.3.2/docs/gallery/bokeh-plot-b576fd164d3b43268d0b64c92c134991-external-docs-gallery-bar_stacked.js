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
      };var element = document.getElementById("51450700-8218-4d99-9924-b6ad669ef156");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '51450700-8218-4d99-9924-b6ad669ef156' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js"];
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
                    
                  var docs_json = '{"15d932fb-a8e7-42b3-8ad7-c1dfff0d09da":{"roots":{"references":[{"attributes":{},"id":"2142","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"2142","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"2120","type":"BasicTicker"}},"id":"2119","type":"LinearAxis"},{"attributes":{},"id":"2113","type":"LinearScale"},{"attributes":{"items":[{"id":"2145","type":"LegendItem"},{"id":"2159","type":"LegendItem"},{"id":"2175","type":"LegendItem"}],"location":"top_left","orientation":"horizontal"},"id":"2144","type":"Legend"},{"attributes":{"callback":null,"tooltips":"$name @fruits: @$name"},"id":"2124","type":"HoverTool"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"2137","type":"GlyphRenderer"}]},"id":"2145","type":"LegendItem"},{"attributes":{"below":[{"id":"2115","type":"CategoricalAxis"}],"center":[{"id":"2118","type":"Grid"},{"id":"2123","type":"Grid"},{"id":"2144","type":"Legend"}],"left":[{"id":"2119","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"2137","type":"GlyphRenderer"},{"id":"2150","type":"GlyphRenderer"},{"id":"2164","type":"GlyphRenderer"}],"title":{"id":"2105","type":"Title"},"toolbar":{"id":"2125","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2107","type":"FactorRange"},"x_scale":{"id":"2111","type":"CategoricalScale"},"y_range":{"id":"2109","type":"DataRange1d"},"y_scale":{"id":"2113","type":"LinearScale"}},"id":"2104","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"2174","type":"Selection"},"selection_policy":{"id":"2173","type":"UnionRenderers"}},"id":"2146","type":"ColumnDataSource"},{"attributes":{},"id":"2186","type":"Selection"},{"attributes":{"fields":[]},"id":"2127","type":"Stack"},{"attributes":{"dimension":1,"ticker":{"id":"2120","type":"BasicTicker"}},"id":"2123","type":"Grid"},{"attributes":{"fields":["2015","2016"]},"id":"2131","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"2129","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"2130","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"2148","type":"VBar"},{"attributes":{"fields":["2015"]},"id":"2128","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"2129","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"2130","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"2149","type":"VBar"},{"attributes":{},"id":"2111","type":"CategoricalScale"},{"attributes":{"source":{"id":"2160","type":"ColumnDataSource"}},"id":"2165","type":"CDSView"},{"attributes":{"fields":["2015","2016"]},"id":"2130","type":"Stack"},{"attributes":{"fields":["2015","2016","2017"]},"id":"2132","type":"Stack"},{"attributes":{},"id":"2158","type":"Selection"},{"attributes":{},"id":"2140","type":"CategoricalTickFormatter"},{"attributes":{"fields":["2015"]},"id":"2129","type":"Stack"},{"attributes":{},"id":"2173","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"2158","type":"Selection"},"selection_policy":{"id":"2157","type":"UnionRenderers"}},"id":"2133","type":"ColumnDataSource"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"2150","type":"GlyphRenderer"}]},"id":"2159","type":"LegendItem"},{"attributes":{"text":"Fruit Counts by Year"},"id":"2105","type":"Title"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"2186","type":"Selection"},"selection_policy":{"id":"2185","type":"UnionRenderers"}},"id":"2160","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"2127","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"2128","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"2135","type":"VBar"},{"attributes":{},"id":"2116","type":"CategoricalTicker"},{"attributes":{},"id":"2157","type":"UnionRenderers"},{"attributes":{},"id":"2174","type":"Selection"},{"attributes":{"grid_line_color":null,"ticker":{"id":"2116","type":"CategoricalTicker"}},"id":"2118","type":"Grid"},{"attributes":{"formatter":{"id":"2140","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"2116","type":"CategoricalTicker"}},"id":"2115","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"2146","type":"ColumnDataSource"},"glyph":{"id":"2148","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"2149","type":"VBar"},"selection_glyph":null,"view":{"id":"2151","type":"CDSView"}},"id":"2150","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"2131","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"2132","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"2162","type":"VBar"},{"attributes":{"source":{"id":"2146","type":"ColumnDataSource"}},"id":"2151","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"2131","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"2132","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"2163","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"2127","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"2128","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"2136","type":"VBar"},{"attributes":{"data_source":{"id":"2160","type":"ColumnDataSource"},"glyph":{"id":"2162","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"2163","type":"VBar"},"selection_glyph":null,"view":{"id":"2165","type":"CDSView"}},"id":"2164","type":"GlyphRenderer"},{"attributes":{},"id":"2185","type":"UnionRenderers"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"2164","type":"GlyphRenderer"}]},"id":"2175","type":"LegendItem"},{"attributes":{"callback":null,"start":0},"id":"2109","type":"DataRange1d"},{"attributes":{"data_source":{"id":"2133","type":"ColumnDataSource"},"glyph":{"id":"2135","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"2136","type":"VBar"},"selection_glyph":null,"view":{"id":"2138","type":"CDSView"}},"id":"2137","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"2107","type":"FactorRange"},{"attributes":{},"id":"2120","type":"BasicTicker"},{"attributes":{"source":{"id":"2133","type":"ColumnDataSource"}},"id":"2138","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2124","type":"HoverTool"}]},"id":"2125","type":"Toolbar"}],"root_ids":["2104"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"15d932fb-a8e7-42b3-8ad7-c1dfff0d09da","roots":{"2104":"51450700-8218-4d99-9924-b6ad669ef156"}}];
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