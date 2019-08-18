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
      };var element = document.getElementById("5cdeaf38-e2ca-429e-ac7a-a126fea7d8db");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5cdeaf38-e2ca-429e-ac7a-a126fea7d8db' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"116f7aba-46fc-4a9a-bb74-b4423da1d60e":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20603","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20604","type":"Stack"}},"y":{"field":"fruits"}},"id":"20637","type":"HBar"},{"attributes":{"data_source":{"id":"20598","type":"ColumnDataSource"},"glyph":{"id":"20636","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20637","type":"HBar"},"selection_glyph":null,"view":{"id":"20639","type":"CDSView"}},"id":"20638","type":"GlyphRenderer"},{"attributes":{"source":{"id":"20598","type":"ColumnDataSource"}},"id":"20639","type":"CDSView"},{"attributes":{"overlay":{"id":"20543","type":"BoxAnnotation"}},"id":"20537","type":"BoxZoomTool"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"20638","type":"GlyphRenderer"}]},"id":"20650","type":"LegendItem"},{"attributes":{},"id":"20538","type":"SaveTool"},{"attributes":{"fields":["2015"]},"id":"20600","type":"Stack"},{"attributes":{},"id":"20522","type":"LinearScale"},{"attributes":{"fields":["2015"]},"id":"20601","type":"Stack"},{"attributes":{"data_source":{"id":"20550","type":"ColumnDataSource"},"glyph":{"id":"20558","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20559","type":"HBar"},"selection_glyph":null,"view":{"id":"20561","type":"CDSView"}},"id":"20560","type":"GlyphRenderer"},{"attributes":{"source":{"id":"20550","type":"ColumnDataSource"}},"id":"20561","type":"CDSView"},{"attributes":{"formatter":{"id":"20564","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"20516","subtype":"Figure","type":"Plot"},"ticker":{"id":"20527","type":"BasicTicker"}},"id":"20526","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"20515","type":"Title"},{"attributes":{},"id":"20564","type":"BasicTickFormatter"},{"attributes":{},"id":"20540","type":"HelpTool"},{"attributes":{},"id":"20632","type":"UnionRenderers"},{"attributes":{},"id":"20566","type":"CategoricalTickFormatter"},{"attributes":{"items":[{"id":"20569","type":"LegendItem"},{"id":"20583","type":"LegendItem"},{"id":"20597","type":"LegendItem"},{"id":"20618","type":"LegendItem"},{"id":"20634","type":"LegendItem"},{"id":"20650","type":"LegendItem"}],"location":"top_left","plot":{"id":"20516","subtype":"Figure","type":"Plot"}},"id":"20568","type":"Legend"},{"attributes":{"below":[{"id":"20526","type":"LinearAxis"}],"left":[{"id":"20531","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"20526","type":"LinearAxis"},{"id":"20530","type":"Grid"},{"id":"20531","type":"CategoricalAxis"},{"id":"20534","type":"Grid"},{"id":"20543","type":"BoxAnnotation"},{"id":"20568","type":"Legend"},{"id":"20560","type":"GlyphRenderer"},{"id":"20573","type":"GlyphRenderer"},{"id":"20587","type":"GlyphRenderer"},{"id":"20608","type":"GlyphRenderer"},{"id":"20622","type":"GlyphRenderer"},{"id":"20638","type":"GlyphRenderer"}],"title":{"id":"20515","type":"Title"},"toolbar":{"id":"20541","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20518","type":"Range1d"},"x_scale":{"id":"20522","type":"LinearScale"},"y_range":{"id":"20520","type":"FactorRange"},"y_scale":{"id":"20524","type":"CategoricalScale"}},"id":"20516","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20551","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20552","type":"Stack"}},"y":{"field":"fruits"}},"id":"20559","type":"HBar"},{"attributes":{"data_source":{"id":"20598","type":"ColumnDataSource"},"glyph":{"id":"20620","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20621","type":"HBar"},"selection_glyph":null,"view":{"id":"20623","type":"CDSView"}},"id":"20622","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"20560","type":"GlyphRenderer"}]},"id":"20569","type":"LegendItem"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"20520","type":"FactorRange"},{"attributes":{"formatter":{"id":"20566","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"20516","subtype":"Figure","type":"Plot"},"ticker":{"id":"20532","type":"CategoricalTicker"}},"id":"20531","type":"CategoricalAxis"},{"attributes":{"fields":[]},"id":"20599","type":"Stack"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"20553","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"20554","type":"Stack"}},"y":{"field":"fruits"}},"id":"20571","type":"HBar"},{"attributes":{},"id":"20527","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"20551","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"20552","type":"Stack"}},"y":{"field":"fruits"}},"id":"20558","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20553","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20554","type":"Stack"}},"y":{"field":"fruits"}},"id":"20572","type":"HBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"20556","type":"Stack"},{"attributes":{},"id":"20633","type":"Selection"},{"attributes":{"data_source":{"id":"20550","type":"ColumnDataSource"},"glyph":{"id":"20571","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20572","type":"HBar"},"selection_glyph":null,"view":{"id":"20574","type":"CDSView"}},"id":"20573","type":"GlyphRenderer"},{"attributes":{},"id":"20535","type":"PanTool"},{"attributes":{"source":{"id":"20550","type":"ColumnDataSource"}},"id":"20574","type":"CDSView"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20582","type":"Selection"},"selection_policy":{"id":"20581","type":"UnionRenderers"}},"id":"20550","type":"ColumnDataSource"},{"attributes":{"fields":["2015","2016"]},"id":"20555","type":"Stack"},{"attributes":{},"id":"20581","type":"UnionRenderers"},{"attributes":{},"id":"20582","type":"Selection"},{"attributes":{},"id":"20532","type":"CategoricalTicker"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"20573","type":"GlyphRenderer"}]},"id":"20583","type":"LegendItem"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"20543","type":"BoxAnnotation"},{"attributes":{},"id":"20536","type":"WheelZoomTool"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"20587","type":"GlyphRenderer"}]},"id":"20597","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"20603","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"20604","type":"Stack"}},"y":{"field":"fruits"}},"id":"20636","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20601","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20602","type":"Stack"}},"y":{"field":"fruits"}},"id":"20621","type":"HBar"},{"attributes":{},"id":"20524","type":"CategoricalScale"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"20555","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"20556","type":"Stack"}},"y":{"field":"fruits"}},"id":"20585","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20555","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20556","type":"Stack"}},"y":{"field":"fruits"}},"id":"20586","type":"HBar"},{"attributes":{"fields":[]},"id":"20551","type":"Stack"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20535","type":"PanTool"},{"id":"20536","type":"WheelZoomTool"},{"id":"20537","type":"BoxZoomTool"},{"id":"20538","type":"SaveTool"},{"id":"20539","type":"ResetTool"},{"id":"20540","type":"HelpTool"}]},"id":"20541","type":"Toolbar"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"20622","type":"GlyphRenderer"}]},"id":"20634","type":"LegendItem"},{"attributes":{"source":{"id":"20550","type":"ColumnDataSource"}},"id":"20588","type":"CDSView"},{"attributes":{"fields":["2015","2016"]},"id":"20554","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"20553","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"20602","type":"Stack"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"20608","type":"GlyphRenderer"}]},"id":"20618","type":"LegendItem"},{"attributes":{"callback":null,"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20633","type":"Selection"},"selection_policy":{"id":"20632","type":"UnionRenderers"}},"id":"20598","type":"ColumnDataSource"},{"attributes":{"fields":["2015","2016"]},"id":"20603","type":"Stack"},{"attributes":{"fields":["2015","2016","2017"]},"id":"20604","type":"Stack"},{"attributes":{"plot":{"id":"20516","subtype":"Figure","type":"Plot"},"ticker":{"id":"20527","type":"BasicTicker"}},"id":"20530","type":"Grid"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"20599","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"20600","type":"Stack"}},"y":{"field":"fruits"}},"id":"20606","type":"HBar"},{"attributes":{},"id":"20539","type":"ResetTool"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"20518","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20599","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20600","type":"Stack"}},"y":{"field":"fruits"}},"id":"20607","type":"HBar"},{"attributes":{"data_source":{"id":"20598","type":"ColumnDataSource"},"glyph":{"id":"20606","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20607","type":"HBar"},"selection_glyph":null,"view":{"id":"20609","type":"CDSView"}},"id":"20608","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"20516","subtype":"Figure","type":"Plot"},"ticker":{"id":"20532","type":"CategoricalTicker"}},"id":"20534","type":"Grid"},{"attributes":{"source":{"id":"20598","type":"ColumnDataSource"}},"id":"20609","type":"CDSView"},{"attributes":{"data_source":{"id":"20550","type":"ColumnDataSource"},"glyph":{"id":"20585","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20586","type":"HBar"},"selection_glyph":null,"view":{"id":"20588","type":"CDSView"}},"id":"20587","type":"GlyphRenderer"},{"attributes":{"source":{"id":"20598","type":"ColumnDataSource"}},"id":"20623","type":"CDSView"},{"attributes":{"fields":["2015"]},"id":"20552","type":"Stack"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"20601","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"20602","type":"Stack"}},"y":{"field":"fruits"}},"id":"20620","type":"HBar"}],"root_ids":["20516"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"116f7aba-46fc-4a9a-bb74-b4423da1d60e","roots":{"20516":"5cdeaf38-e2ca-429e-ac7a-a126fea7d8db"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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