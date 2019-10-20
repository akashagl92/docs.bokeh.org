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
      };var element = document.getElementById("bc48deed-050a-4c88-838e-5be170fdc58d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bc48deed-050a-4c88-838e-5be170fdc58d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"d413c2f5-5bc0-4e06-a876-e094c91502d4":{"roots":{"references":[{"attributes":{"fields":[]},"id":"20598","type":"Stack"},{"attributes":{},"id":"20581","type":"UnionRenderers"},{"attributes":{"fields":["2015"]},"id":"20599","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"20600","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"20602","type":"Stack"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"20550","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"20551","type":"Stack"}},"y":{"field":"fruits"}},"id":"20557","type":"HBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"20603","type":"Stack"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"20586","type":"GlyphRenderer"}]},"id":"20596","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"20554","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"20555","type":"Stack"}},"y":{"field":"fruits"}},"id":"20584","type":"HBar"},{"attributes":{"data_source":{"id":"20549","type":"ColumnDataSource"},"glyph":{"id":"20570","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20571","type":"HBar"},"selection_glyph":null,"view":{"id":"20573","type":"CDSView"}},"id":"20572","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20550","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20551","type":"Stack"}},"y":{"field":"fruits"}},"id":"20558","type":"HBar"},{"attributes":{"fields":["2015","2016"]},"id":"20601","type":"Stack"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"20598","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"20599","type":"Stack"}},"y":{"field":"fruits"}},"id":"20605","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20598","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20599","type":"Stack"}},"y":{"field":"fruits"}},"id":"20606","type":"HBar"},{"attributes":{"data_source":{"id":"20597","type":"ColumnDataSource"},"glyph":{"id":"20605","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20606","type":"HBar"},"selection_glyph":null,"view":{"id":"20608","type":"CDSView"}},"id":"20607","type":"GlyphRenderer"},{"attributes":{"source":{"id":"20549","type":"ColumnDataSource"}},"id":"20560","type":"CDSView"},{"attributes":{"source":{"id":"20597","type":"ColumnDataSource"}},"id":"20608","type":"CDSView"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"20552","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"20553","type":"Stack"}},"y":{"field":"fruits"}},"id":"20570","type":"HBar"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"20559","type":"GlyphRenderer"}]},"id":"20568","type":"LegendItem"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"20607","type":"GlyphRenderer"}]},"id":"20617","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"20600","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"20601","type":"Stack"}},"y":{"field":"fruits"}},"id":"20619","type":"HBar"},{"attributes":{"callback":null,"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20631","type":"Selection"},"selection_policy":{"id":"20632","type":"UnionRenderers"}},"id":"20597","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20600","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20601","type":"Stack"}},"y":{"field":"fruits"}},"id":"20620","type":"HBar"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"20517","type":"Range1d"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20580","type":"Selection"},"selection_policy":{"id":"20581","type":"UnionRenderers"}},"id":"20549","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"20597","type":"ColumnDataSource"},"glyph":{"id":"20619","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20620","type":"HBar"},"selection_glyph":null,"view":{"id":"20622","type":"CDSView"}},"id":"20621","type":"GlyphRenderer"},{"attributes":{},"id":"20539","type":"HelpTool"},{"attributes":{"source":{"id":"20549","type":"ColumnDataSource"}},"id":"20587","type":"CDSView"},{"attributes":{"fields":["2015","2016"]},"id":"20553","type":"Stack"},{"attributes":{},"id":"20631","type":"Selection"},{"attributes":{"source":{"id":"20597","type":"ColumnDataSource"}},"id":"20622","type":"CDSView"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"20514","type":"Title"},{"attributes":{"fields":["2015"]},"id":"20552","type":"Stack"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20534","type":"PanTool"},{"id":"20535","type":"WheelZoomTool"},{"id":"20536","type":"BoxZoomTool"},{"id":"20537","type":"SaveTool"},{"id":"20538","type":"ResetTool"},{"id":"20539","type":"HelpTool"}]},"id":"20540","type":"Toolbar"},{"attributes":{},"id":"20632","type":"UnionRenderers"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"20621","type":"GlyphRenderer"}]},"id":"20633","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20552","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20553","type":"Stack"}},"y":{"field":"fruits"}},"id":"20571","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"20551","type":"Stack"},{"attributes":{"items":[{"id":"20568","type":"LegendItem"},{"id":"20582","type":"LegendItem"},{"id":"20596","type":"LegendItem"},{"id":"20617","type":"LegendItem"},{"id":"20633","type":"LegendItem"},{"id":"20649","type":"LegendItem"}],"location":"top_left","plot":{"id":"20515","subtype":"Figure","type":"Plot"}},"id":"20567","type":"Legend"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"20542","type":"BoxAnnotation"},{"attributes":{"fields":["2015","2016","2017"]},"id":"20555","type":"Stack"},{"attributes":{},"id":"20580","type":"Selection"},{"attributes":{},"id":"20565","type":"CategoricalTickFormatter"},{"attributes":{"fields":["2015","2016"]},"id":"20554","type":"Stack"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"20602","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"20603","type":"Stack"}},"y":{"field":"fruits"}},"id":"20635","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20554","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20555","type":"Stack"}},"y":{"field":"fruits"}},"id":"20585","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20602","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20603","type":"Stack"}},"y":{"field":"fruits"}},"id":"20636","type":"HBar"},{"attributes":{"data_source":{"id":"20597","type":"ColumnDataSource"},"glyph":{"id":"20635","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20636","type":"HBar"},"selection_glyph":null,"view":{"id":"20638","type":"CDSView"}},"id":"20637","type":"GlyphRenderer"},{"attributes":{},"id":"20538","type":"ResetTool"},{"attributes":{"source":{"id":"20597","type":"ColumnDataSource"}},"id":"20638","type":"CDSView"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"20637","type":"GlyphRenderer"}]},"id":"20649","type":"LegendItem"},{"attributes":{},"id":"20537","type":"SaveTool"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"20519","type":"FactorRange"},{"attributes":{"overlay":{"id":"20542","type":"BoxAnnotation"}},"id":"20536","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"20549","type":"ColumnDataSource"},"glyph":{"id":"20557","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20558","type":"HBar"},"selection_glyph":null,"view":{"id":"20560","type":"CDSView"}},"id":"20559","type":"GlyphRenderer"},{"attributes":{},"id":"20521","type":"LinearScale"},{"attributes":{"data_source":{"id":"20549","type":"ColumnDataSource"},"glyph":{"id":"20584","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20585","type":"HBar"},"selection_glyph":null,"view":{"id":"20587","type":"CDSView"}},"id":"20586","type":"GlyphRenderer"},{"attributes":{},"id":"20535","type":"WheelZoomTool"},{"attributes":{},"id":"20523","type":"CategoricalScale"},{"attributes":{},"id":"20534","type":"PanTool"},{"attributes":{"formatter":{"id":"20563","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"20515","subtype":"Figure","type":"Plot"},"ticker":{"id":"20526","type":"BasicTicker"}},"id":"20525","type":"LinearAxis"},{"attributes":{"source":{"id":"20549","type":"ColumnDataSource"}},"id":"20573","type":"CDSView"},{"attributes":{},"id":"20526","type":"BasicTicker"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"20572","type":"GlyphRenderer"}]},"id":"20582","type":"LegendItem"},{"attributes":{"fields":[]},"id":"20550","type":"Stack"},{"attributes":{"plot":{"id":"20515","subtype":"Figure","type":"Plot"},"ticker":{"id":"20526","type":"BasicTicker"}},"id":"20529","type":"Grid"},{"attributes":{"formatter":{"id":"20565","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"20515","subtype":"Figure","type":"Plot"},"ticker":{"id":"20531","type":"CategoricalTicker"}},"id":"20530","type":"CategoricalAxis"},{"attributes":{"below":[{"id":"20525","type":"LinearAxis"}],"left":[{"id":"20530","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"20525","type":"LinearAxis"},{"id":"20529","type":"Grid"},{"id":"20530","type":"CategoricalAxis"},{"id":"20533","type":"Grid"},{"id":"20542","type":"BoxAnnotation"},{"id":"20567","type":"Legend"},{"id":"20559","type":"GlyphRenderer"},{"id":"20572","type":"GlyphRenderer"},{"id":"20586","type":"GlyphRenderer"},{"id":"20607","type":"GlyphRenderer"},{"id":"20621","type":"GlyphRenderer"},{"id":"20637","type":"GlyphRenderer"}],"title":{"id":"20514","type":"Title"},"toolbar":{"id":"20540","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20517","type":"Range1d"},"x_scale":{"id":"20521","type":"LinearScale"},"y_range":{"id":"20519","type":"FactorRange"},"y_scale":{"id":"20523","type":"CategoricalScale"}},"id":"20515","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20563","type":"BasicTickFormatter"},{"attributes":{},"id":"20531","type":"CategoricalTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"20515","subtype":"Figure","type":"Plot"},"ticker":{"id":"20531","type":"CategoricalTicker"}},"id":"20533","type":"Grid"}],"root_ids":["20515"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"d413c2f5-5bc0-4e06-a876-e094c91502d4","roots":{"20515":"bc48deed-050a-4c88-838e-5be170fdc58d"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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