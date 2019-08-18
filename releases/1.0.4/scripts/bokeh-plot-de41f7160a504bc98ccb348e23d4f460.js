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
      };var element = document.getElementById("16223273-77eb-46c6-8ca8-81c24e43fbd1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '16223273-77eb-46c6-8ca8-81c24e43fbd1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8b834b20-42d7-4be8-af15-ffde7e355628":{"roots":{"references":[{"attributes":{"items":[{"id":"2224","type":"LegendItem"},{"id":"2238","type":"LegendItem"},{"id":"2252","type":"LegendItem"},{"id":"2273","type":"LegendItem"},{"id":"2289","type":"LegendItem"},{"id":"2305","type":"LegendItem"}],"location":"top_left","plot":{"id":"2171","subtype":"Figure","type":"Plot"}},"id":"2223","type":"Legend"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"2175","type":"FactorRange"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"2206","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"2207","type":"Stack"}},"y":{"field":"fruits"}},"id":"2213","type":"HBar"},{"attributes":{"formatter":{"id":"2218","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"2171","subtype":"Figure","type":"Plot"},"ticker":{"id":"2187","type":"CategoricalTicker"}},"id":"2186","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"2208","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"2209","type":"Stack"}},"y":{"field":"fruits"}},"id":"2227","type":"HBar"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"2208","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"2209","type":"Stack"}},"y":{"field":"fruits"}},"id":"2226","type":"HBar"},{"attributes":{"source":{"id":"2205","type":"ColumnDataSource"}},"id":"2229","type":"CDSView"},{"attributes":{"data_source":{"id":"2253","type":"ColumnDataSource"},"glyph":{"id":"2261","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"2262","type":"HBar"},"selection_glyph":null,"view":{"id":"2264","type":"CDSView"}},"id":"2263","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"2210","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"2211","type":"Stack"}},"y":{"field":"fruits"}},"id":"2241","type":"HBar"},{"attributes":{"plot":{"id":"2171","subtype":"Figure","type":"Plot"},"ticker":{"id":"2182","type":"BasicTicker"}},"id":"2185","type":"Grid"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"2228","type":"GlyphRenderer"}]},"id":"2238","type":"LegendItem"},{"attributes":{"source":{"id":"2253","type":"ColumnDataSource"}},"id":"2264","type":"CDSView"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"2263","type":"GlyphRenderer"}]},"id":"2273","type":"LegendItem"},{"attributes":{"source":{"id":"2253","type":"ColumnDataSource"}},"id":"2294","type":"CDSView"},{"attributes":{},"id":"2235","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"2256","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"2257","type":"Stack"}},"y":{"field":"fruits"}},"id":"2275","type":"HBar"},{"attributes":{},"id":"2191","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"2181","type":"LinearAxis"}],"left":[{"id":"2186","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"2181","type":"LinearAxis"},{"id":"2185","type":"Grid"},{"id":"2186","type":"CategoricalAxis"},{"id":"2189","type":"Grid"},{"id":"2198","type":"BoxAnnotation"},{"id":"2223","type":"Legend"},{"id":"2215","type":"GlyphRenderer"},{"id":"2228","type":"GlyphRenderer"},{"id":"2242","type":"GlyphRenderer"},{"id":"2263","type":"GlyphRenderer"},{"id":"2277","type":"GlyphRenderer"},{"id":"2293","type":"GlyphRenderer"}],"title":{"id":"2170","type":"Title"},"toolbar":{"id":"2196","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2173","type":"Range1d"},"x_scale":{"id":"2177","type":"LinearScale"},"y_range":{"id":"2175","type":"FactorRange"},"y_scale":{"id":"2179","type":"CategoricalScale"}},"id":"2171","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"2206","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"2207","type":"Stack"}},"y":{"field":"fruits"}},"id":"2214","type":"HBar"},{"attributes":{},"id":"2236","type":"Selection"},{"attributes":{"data_source":{"id":"2253","type":"ColumnDataSource"},"glyph":{"id":"2291","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"2292","type":"HBar"},"selection_glyph":null,"view":{"id":"2294","type":"CDSView"}},"id":"2293","type":"GlyphRenderer"},{"attributes":{"fields":["2015"]},"id":"2255","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"2256","type":"Stack"},{"attributes":{"formatter":{"id":"2220","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"2171","subtype":"Figure","type":"Plot"},"ticker":{"id":"2182","type":"BasicTicker"}},"id":"2181","type":"LinearAxis"},{"attributes":{"data_source":{"id":"2205","type":"ColumnDataSource"},"glyph":{"id":"2213","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"2214","type":"HBar"},"selection_glyph":null,"view":{"id":"2216","type":"CDSView"}},"id":"2215","type":"GlyphRenderer"},{"attributes":{"fields":["2015","2016"]},"id":"2257","type":"Stack"},{"attributes":{"data_source":{"id":"2205","type":"ColumnDataSource"},"glyph":{"id":"2226","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"2227","type":"HBar"},"selection_glyph":null,"view":{"id":"2229","type":"CDSView"}},"id":"2228","type":"GlyphRenderer"},{"attributes":{},"id":"2177","type":"LinearScale"},{"attributes":{"source":{"id":"2205","type":"ColumnDataSource"}},"id":"2216","type":"CDSView"},{"attributes":{"fields":["2015","2016"]},"id":"2258","type":"Stack"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"2293","type":"GlyphRenderer"}]},"id":"2305","type":"LegendItem"},{"attributes":{"fields":["2015","2016","2017"]},"id":"2259","type":"Stack"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"2277","type":"GlyphRenderer"}]},"id":"2289","type":"LegendItem"},{"attributes":{},"id":"2220","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"2254","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"2255","type":"Stack"}},"y":{"field":"fruits"}},"id":"2261","type":"HBar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"2171","subtype":"Figure","type":"Plot"},"ticker":{"id":"2187","type":"CategoricalTicker"}},"id":"2189","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"2254","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"2255","type":"Stack"}},"y":{"field":"fruits"}},"id":"2262","type":"HBar"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"2236","type":"Selection"},"selection_policy":{"id":"2235","type":"UnionRenderers"}},"id":"2205","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"2198","type":"BoxAnnotation"}},"id":"2192","type":"BoxZoomTool"},{"attributes":{},"id":"2190","type":"PanTool"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"2242","type":"GlyphRenderer"}]},"id":"2252","type":"LegendItem"},{"attributes":{"source":{"id":"2253","type":"ColumnDataSource"}},"id":"2278","type":"CDSView"},{"attributes":{},"id":"2193","type":"SaveTool"},{"attributes":{"data_source":{"id":"2205","type":"ColumnDataSource"},"glyph":{"id":"2240","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"2241","type":"HBar"},"selection_glyph":null,"view":{"id":"2243","type":"CDSView"}},"id":"2242","type":"GlyphRenderer"},{"attributes":{},"id":"2187","type":"CategoricalTicker"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"2258","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"2259","type":"Stack"}},"y":{"field":"fruits"}},"id":"2291","type":"HBar"},{"attributes":{},"id":"2194","type":"ResetTool"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"2170","type":"Title"},{"attributes":{},"id":"2218","type":"CategoricalTickFormatter"},{"attributes":{"fields":[]},"id":"2254","type":"Stack"},{"attributes":{},"id":"2286","type":"UnionRenderers"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"2173","type":"Range1d"},{"attributes":{"source":{"id":"2205","type":"ColumnDataSource"}},"id":"2243","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"2258","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"2259","type":"Stack"}},"y":{"field":"fruits"}},"id":"2292","type":"HBar"},{"attributes":{},"id":"2195","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2190","type":"PanTool"},{"id":"2191","type":"WheelZoomTool"},{"id":"2192","type":"BoxZoomTool"},{"id":"2193","type":"SaveTool"},{"id":"2194","type":"ResetTool"},{"id":"2195","type":"HelpTool"}]},"id":"2196","type":"Toolbar"},{"attributes":{},"id":"2182","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2198","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"2253","type":"ColumnDataSource"},"glyph":{"id":"2275","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"2276","type":"HBar"},"selection_glyph":null,"view":{"id":"2278","type":"CDSView"}},"id":"2277","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"2287","type":"Selection"},"selection_policy":{"id":"2286","type":"UnionRenderers"}},"id":"2253","type":"ColumnDataSource"},{"attributes":{"fields":["2015"]},"id":"2207","type":"Stack"},{"attributes":{"fields":[]},"id":"2206","type":"Stack"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"2215","type":"GlyphRenderer"}]},"id":"2224","type":"LegendItem"},{"attributes":{"fields":["2015"]},"id":"2208","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"2209","type":"Stack"},{"attributes":{},"id":"2179","type":"CategoricalScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"2256","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"2257","type":"Stack"}},"y":{"field":"fruits"}},"id":"2276","type":"HBar"},{"attributes":{"fields":["2015","2016"]},"id":"2210","type":"Stack"},{"attributes":{"fields":["2015","2016","2017"]},"id":"2211","type":"Stack"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"2210","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"2211","type":"Stack"}},"y":{"field":"fruits"}},"id":"2240","type":"HBar"},{"attributes":{},"id":"2287","type":"Selection"}],"root_ids":["2171"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"8b834b20-42d7-4be8-af15-ffde7e355628","roots":{"2171":"16223273-77eb-46c6-8ca8-81c24e43fbd1"}}];
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