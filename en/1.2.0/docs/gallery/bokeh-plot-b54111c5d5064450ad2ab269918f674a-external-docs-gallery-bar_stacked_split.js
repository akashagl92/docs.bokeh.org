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
      };var element = document.getElementById("36e159df-bc05-4ced-9f7a-7ef73b53907f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '36e159df-bc05-4ced-9f7a-7ef73b53907f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5edda5ad-f3c9-4e20-a452-6994db7579ef":{"roots":{"references":[{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"2353","type":"GlyphRenderer"}]},"id":"2365","type":"LegendItem"},{"attributes":{"source":{"id":"2265","type":"ColumnDataSource"}},"id":"2289","type":"CDSView"},{"attributes":{},"id":"2244","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"2314","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"2315","type":"Stack"}},"y":{"field":"fruits"}},"id":"2322","type":"HBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2282","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"2270","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"2271","type":"Stack"}},"y":{"field":"fruits"}},"id":"2300","type":"HBar"},{"attributes":{"text":"Fruit import/export, by year"},"id":"2233","type":"Title"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"2302","type":"GlyphRenderer"}]},"id":"2312","type":"LegendItem"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"2337","type":"GlyphRenderer"}]},"id":"2349","type":"LegendItem"},{"attributes":{"dimension":1,"grid_line_color":null,"ticker":{"id":"2249","type":"CategoricalTicker"}},"id":"2251","type":"Grid"},{"attributes":{"source":{"id":"2265","type":"ColumnDataSource"}},"id":"2276","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"2316","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"2317","type":"Stack"}},"y":{"field":"fruits"}},"id":"2336","type":"HBar"},{"attributes":{"data_source":{"id":"2313","type":"ColumnDataSource"},"glyph":{"id":"2335","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"2336","type":"HBar"},"selection_glyph":null,"view":{"id":"2338","type":"CDSView"}},"id":"2337","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2265","type":"ColumnDataSource"},"glyph":{"id":"2300","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"2301","type":"HBar"},"selection_glyph":null,"view":{"id":"2303","type":"CDSView"}},"id":"2302","type":"GlyphRenderer"},{"attributes":{},"id":"2241","type":"CategoricalScale"},{"attributes":{"source":{"id":"2265","type":"ColumnDataSource"}},"id":"2303","type":"CDSView"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"2288","type":"GlyphRenderer"}]},"id":"2298","type":"LegendItem"},{"attributes":{},"id":"2239","type":"LinearScale"},{"attributes":{},"id":"2256","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"2266","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"2267","type":"Stack"}},"y":{"field":"fruits"}},"id":"2274","type":"HBar"},{"attributes":{"fields":[]},"id":"2314","type":"Stack"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2252","type":"PanTool"},{"id":"2253","type":"WheelZoomTool"},{"id":"2254","type":"BoxZoomTool"},{"id":"2255","type":"SaveTool"},{"id":"2256","type":"ResetTool"},{"id":"2257","type":"HelpTool"}]},"id":"2258","type":"Toolbar"},{"attributes":{"source":{"id":"2313","type":"ColumnDataSource"}},"id":"2338","type":"CDSView"},{"attributes":{},"id":"2346","type":"Selection"},{"attributes":{"data_source":{"id":"2265","type":"ColumnDataSource"},"glyph":{"id":"2273","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"2274","type":"HBar"},"selection_glyph":null,"view":{"id":"2276","type":"CDSView"}},"id":"2275","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"2275","type":"GlyphRenderer"}]},"id":"2284","type":"LegendItem"},{"attributes":{"formatter":{"id":"2278","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"2249","type":"CategoricalTicker"}},"id":"2248","type":"CategoricalAxis"},{"attributes":{},"id":"2255","type":"SaveTool"},{"attributes":{"fields":["2015","2016"]},"id":"2270","type":"Stack"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"2266","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"2267","type":"Stack"}},"y":{"field":"fruits"}},"id":"2273","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"2318","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"2319","type":"Stack"}},"y":{"field":"fruits"}},"id":"2352","type":"HBar"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"2316","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"2317","type":"Stack"}},"y":{"field":"fruits"}},"id":"2335","type":"HBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"2271","type":"Stack"},{"attributes":{"ticker":{"id":"2244","type":"BasicTicker"}},"id":"2247","type":"Grid"},{"attributes":{"overlay":{"id":"2282","type":"BoxAnnotation"}},"id":"2254","type":"BoxZoomTool"},{"attributes":{},"id":"2280","type":"BasicTickFormatter"},{"attributes":{"fields":["2015","2016"]},"id":"2318","type":"Stack"},{"attributes":{"source":{"id":"2313","type":"ColumnDataSource"}},"id":"2324","type":"CDSView"},{"attributes":{},"id":"2257","type":"HelpTool"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"2295","type":"Selection"},"selection_policy":{"id":"2296","type":"UnionRenderers"}},"id":"2265","type":"ColumnDataSource"},{"attributes":{"fields":[]},"id":"2266","type":"Stack"},{"attributes":{"data_source":{"id":"2313","type":"ColumnDataSource"},"glyph":{"id":"2321","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"2322","type":"HBar"},"selection_glyph":null,"view":{"id":"2324","type":"CDSView"}},"id":"2323","type":"GlyphRenderer"},{"attributes":{"fields":["2015","2016"]},"id":"2317","type":"Stack"},{"attributes":{"fields":["2015","2016","2017"]},"id":"2319","type":"Stack"},{"attributes":{},"id":"2347","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"2268","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"2269","type":"Stack"}},"y":{"field":"fruits"}},"id":"2286","type":"HBar"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"2323","type":"GlyphRenderer"}]},"id":"2333","type":"LegendItem"},{"attributes":{},"id":"2295","type":"Selection"},{"attributes":{"items":[{"id":"2284","type":"LegendItem"},{"id":"2298","type":"LegendItem"},{"id":"2312","type":"LegendItem"},{"id":"2333","type":"LegendItem"},{"id":"2349","type":"LegendItem"},{"id":"2365","type":"LegendItem"}],"location":"top_left"},"id":"2283","type":"Legend"},{"attributes":{"fields":["2015"]},"id":"2315","type":"Stack"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"2235","type":"Range1d"},{"attributes":{"fields":["2015"]},"id":"2316","type":"Stack"},{"attributes":{"data_source":{"id":"2265","type":"ColumnDataSource"},"glyph":{"id":"2286","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"2287","type":"HBar"},"selection_glyph":null,"view":{"id":"2289","type":"CDSView"}},"id":"2288","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"2280","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"2244","type":"BasicTicker"}},"id":"2243","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"2268","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"2269","type":"Stack"}},"y":{"field":"fruits"}},"id":"2287","type":"HBar"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"2314","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"2315","type":"Stack"}},"y":{"field":"fruits"}},"id":"2321","type":"HBar"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"2318","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"2319","type":"Stack"}},"y":{"field":"fruits"}},"id":"2351","type":"HBar"},{"attributes":{},"id":"2249","type":"CategoricalTicker"},{"attributes":{"fields":["2015","2016"]},"id":"2269","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"2267","type":"Stack"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"2237","type":"FactorRange"},{"attributes":{},"id":"2278","type":"CategoricalTickFormatter"},{"attributes":{},"id":"2253","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"2243","type":"LinearAxis"}],"center":[{"id":"2247","type":"Grid"},{"id":"2251","type":"Grid"},{"id":"2283","type":"Legend"}],"left":[{"id":"2248","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"2275","type":"GlyphRenderer"},{"id":"2288","type":"GlyphRenderer"},{"id":"2302","type":"GlyphRenderer"},{"id":"2323","type":"GlyphRenderer"},{"id":"2337","type":"GlyphRenderer"},{"id":"2353","type":"GlyphRenderer"}],"title":{"id":"2233","type":"Title"},"toolbar":{"id":"2258","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2235","type":"Range1d"},"x_scale":{"id":"2239","type":"LinearScale"},"y_range":{"id":"2237","type":"FactorRange"},"y_scale":{"id":"2241","type":"CategoricalScale"}},"id":"2232","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"2270","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"2271","type":"Stack"}},"y":{"field":"fruits"}},"id":"2301","type":"HBar"},{"attributes":{},"id":"2252","type":"PanTool"},{"attributes":{"fields":["2015"]},"id":"2268","type":"Stack"},{"attributes":{"callback":null,"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"2346","type":"Selection"},"selection_policy":{"id":"2347","type":"UnionRenderers"}},"id":"2313","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2313","type":"ColumnDataSource"}},"id":"2354","type":"CDSView"},{"attributes":{"data_source":{"id":"2313","type":"ColumnDataSource"},"glyph":{"id":"2351","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"2352","type":"HBar"},"selection_glyph":null,"view":{"id":"2354","type":"CDSView"}},"id":"2353","type":"GlyphRenderer"},{"attributes":{},"id":"2296","type":"UnionRenderers"}],"root_ids":["2232"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"5edda5ad-f3c9-4e20-a452-6994db7579ef","roots":{"2232":"36e159df-bc05-4ced-9f7a-7ef73b53907f"}}];
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