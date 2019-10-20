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
      };var element = document.getElementById("b5649fa8-a6de-4955-8563-28253d74bcbb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b5649fa8-a6de-4955-8563-28253d74bcbb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3f686d59-8dcf-4618-a33b-4d141a268cbe":{"roots":{"references":[{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"2102","type":"GlyphRenderer"}]},"id":"2113","type":"LegendItem"},{"attributes":{"source":{"id":"2084","type":"ColumnDataSource"}},"id":"2089","type":"CDSView"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"2042","type":"Title"},{"attributes":{},"id":"2123","type":"Selection"},{"attributes":{},"id":"2096","type":"UnionRenderers"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"2045","type":"FactorRange"},{"attributes":{},"id":"2111","type":"Selection"},{"attributes":{},"id":"2124","type":"UnionRenderers"},{"attributes":{},"id":"2079","type":"CategoricalTickFormatter"},{"attributes":{"below":[{"id":"2053","type":"CategoricalAxis"}],"left":[{"id":"2057","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"2053","type":"CategoricalAxis"},{"id":"2056","type":"Grid"},{"id":"2057","type":"LinearAxis"},{"id":"2061","type":"Grid"},{"id":"2082","type":"Legend"},{"id":"2075","type":"GlyphRenderer"},{"id":"2088","type":"GlyphRenderer"},{"id":"2102","type":"GlyphRenderer"}],"title":{"id":"2042","type":"Title"},"toolbar":{"id":"2063","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2045","type":"FactorRange"},"x_scale":{"id":"2049","type":"CategoricalScale"},"y_range":{"id":"2047","type":"DataRange1d"},"y_scale":{"id":"2051","type":"LinearScale"}},"id":"2043","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2081","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"2098","type":"ColumnDataSource"}},"id":"2103","type":"CDSView"},{"attributes":{"items":[{"id":"2083","type":"LegendItem"},{"id":"2097","type":"LegendItem"},{"id":"2113","type":"LegendItem"}],"location":"top_left","orientation":"horizontal","plot":{"id":"2043","subtype":"Figure","type":"Plot"}},"id":"2082","type":"Legend"},{"attributes":{"bottom":{"expr":{"id":"2067","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"2068","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"2086","type":"VBar"},{"attributes":{},"id":"2112","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2098","type":"ColumnDataSource"},"glyph":{"id":"2100","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"2101","type":"VBar"},"selection_glyph":null,"view":{"id":"2103","type":"CDSView"}},"id":"2102","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2062","type":"HoverTool"}]},"id":"2063","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"2043","subtype":"Figure","type":"Plot"},"ticker":{"id":"2058","type":"BasicTicker"}},"id":"2061","type":"Grid"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"2123","type":"Selection"},"selection_policy":{"id":"2124","type":"UnionRenderers"}},"id":"2098","type":"ColumnDataSource"},{"attributes":{"fields":["2015","2016","2017"]},"id":"2070","type":"Stack"},{"attributes":{},"id":"2095","type":"Selection"},{"attributes":{"bottom":{"expr":{"id":"2069","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"2070","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"2100","type":"VBar"},{"attributes":{"data_source":{"id":"2071","type":"ColumnDataSource"},"glyph":{"id":"2073","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"2074","type":"VBar"},"selection_glyph":null,"view":{"id":"2076","type":"CDSView"}},"id":"2075","type":"GlyphRenderer"},{"attributes":{},"id":"2058","type":"BasicTicker"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"2075","type":"GlyphRenderer"}]},"id":"2083","type":"LegendItem"},{"attributes":{"fields":["2015","2016"]},"id":"2069","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"2065","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"2066","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"2073","type":"VBar"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"2095","type":"Selection"},"selection_policy":{"id":"2096","type":"UnionRenderers"}},"id":"2071","type":"ColumnDataSource"},{"attributes":{"fields":["2015","2016"]},"id":"2068","type":"Stack"},{"attributes":{"data_source":{"id":"2084","type":"ColumnDataSource"},"glyph":{"id":"2086","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"2087","type":"VBar"},"selection_glyph":null,"view":{"id":"2089","type":"CDSView"}},"id":"2088","type":"GlyphRenderer"},{"attributes":{"callback":null,"start":0},"id":"2047","type":"DataRange1d"},{"attributes":{"formatter":{"id":"2081","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"2043","subtype":"Figure","type":"Plot"},"ticker":{"id":"2058","type":"BasicTicker"}},"id":"2057","type":"LinearAxis"},{"attributes":{"bottom":{"expr":{"id":"2067","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"2068","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"2087","type":"VBar"},{"attributes":{},"id":"2054","type":"CategoricalTicker"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"2111","type":"Selection"},"selection_policy":{"id":"2112","type":"UnionRenderers"}},"id":"2084","type":"ColumnDataSource"},{"attributes":{},"id":"2049","type":"CategoricalScale"},{"attributes":{"source":{"id":"2071","type":"ColumnDataSource"}},"id":"2076","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"2069","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"2070","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"2101","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"2065","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"2066","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"2074","type":"VBar"},{"attributes":{"fields":[]},"id":"2065","type":"Stack"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"2088","type":"GlyphRenderer"}]},"id":"2097","type":"LegendItem"},{"attributes":{},"id":"2051","type":"LinearScale"},{"attributes":{"fields":["2015"]},"id":"2067","type":"Stack"},{"attributes":{"formatter":{"id":"2079","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"2043","subtype":"Figure","type":"Plot"},"ticker":{"id":"2054","type":"CategoricalTicker"}},"id":"2053","type":"CategoricalAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"2043","subtype":"Figure","type":"Plot"},"ticker":{"id":"2054","type":"CategoricalTicker"}},"id":"2056","type":"Grid"},{"attributes":{"callback":null,"renderers":"auto","tooltips":"$name @fruits: @$name"},"id":"2062","type":"HoverTool"},{"attributes":{"fields":["2015"]},"id":"2066","type":"Stack"}],"root_ids":["2043"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"3f686d59-8dcf-4618-a33b-4d141a268cbe","roots":{"2043":"b5649fa8-a6de-4955-8563-28253d74bcbb"}}];
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