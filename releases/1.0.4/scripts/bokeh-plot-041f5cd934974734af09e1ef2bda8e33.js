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
      };var element = document.getElementById("4de7ce74-9260-4de2-a287-b98ea9e22d87");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4de7ce74-9260-4de2-a287-b98ea9e22d87' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"aae6f818-adbd-497a-98b6-16a04636e9c8":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20604","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20605","type":"Stack"}},"y":{"field":"fruits"}},"id":"20624","type":"HBar"},{"attributes":{"data_source":{"id":"20601","type":"ColumnDataSource"},"glyph":{"id":"20623","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20624","type":"HBar"},"selection_glyph":null,"view":{"id":"20626","type":"CDSView"}},"id":"20625","type":"GlyphRenderer"},{"attributes":{},"id":"20535","type":"CategoricalTicker"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"20604","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"20605","type":"Stack"}},"y":{"field":"fruits"}},"id":"20623","type":"HBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"20523","type":"FactorRange"},{"attributes":{"source":{"id":"20601","type":"ColumnDataSource"}},"id":"20626","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20556","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20557","type":"Stack"}},"y":{"field":"fruits"}},"id":"20575","type":"HBar"},{"attributes":{},"id":"20568","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"20590","type":"GlyphRenderer"}]},"id":"20600","type":"LegendItem"},{"attributes":{"fields":["2015","2016","2017"]},"id":"20559","type":"Stack"},{"attributes":{},"id":"20635","type":"Selection"},{"attributes":{"fields":["2015"]},"id":"20556","type":"Stack"},{"attributes":{},"id":"20634","type":"UnionRenderers"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"20625","type":"GlyphRenderer"}]},"id":"20637","type":"LegendItem"},{"attributes":{"formatter":{"id":"20566","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"20519","subtype":"Figure","type":"Plot"},"ticker":{"id":"20535","type":"CategoricalTicker"}},"id":"20534","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"20553","type":"ColumnDataSource"},"glyph":{"id":"20561","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20562","type":"HBar"},"selection_glyph":null,"view":{"id":"20564","type":"CDSView"}},"id":"20563","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"20602","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"20603","type":"Stack"}},"y":{"field":"fruits"}},"id":"20609","type":"HBar"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"20606","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"20607","type":"Stack"}},"y":{"field":"fruits"}},"id":"20639","type":"HBar"},{"attributes":{"items":[{"id":"20572","type":"LegendItem"},{"id":"20586","type":"LegendItem"},{"id":"20600","type":"LegendItem"},{"id":"20621","type":"LegendItem"},{"id":"20637","type":"LegendItem"},{"id":"20653","type":"LegendItem"}],"location":"top_left","plot":{"id":"20519","subtype":"Figure","type":"Plot"}},"id":"20571","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20606","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20607","type":"Stack"}},"y":{"field":"fruits"}},"id":"20640","type":"HBar"},{"attributes":{"data_source":{"id":"20601","type":"ColumnDataSource"},"glyph":{"id":"20639","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20640","type":"HBar"},"selection_glyph":null,"view":{"id":"20642","type":"CDSView"}},"id":"20641","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"20563","type":"GlyphRenderer"}]},"id":"20572","type":"LegendItem"},{"attributes":{"source":{"id":"20553","type":"ColumnDataSource"}},"id":"20564","type":"CDSView"},{"attributes":{"plot":{"id":"20519","subtype":"Figure","type":"Plot"},"ticker":{"id":"20530","type":"BasicTicker"}},"id":"20533","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20554","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20555","type":"Stack"}},"y":{"field":"fruits"}},"id":"20562","type":"HBar"},{"attributes":{"fields":[]},"id":"20554","type":"Stack"},{"attributes":{"source":{"id":"20553","type":"ColumnDataSource"}},"id":"20591","type":"CDSView"},{"attributes":{"source":{"id":"20601","type":"ColumnDataSource"}},"id":"20642","type":"CDSView"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"20554","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"20555","type":"Stack"}},"y":{"field":"fruits"}},"id":"20561","type":"HBar"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"20558","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"20559","type":"Stack"}},"y":{"field":"fruits"}},"id":"20588","type":"HBar"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"20641","type":"GlyphRenderer"}]},"id":"20653","type":"LegendItem"},{"attributes":{"fields":["2015","2016"]},"id":"20605","type":"Stack"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"20556","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"20557","type":"Stack"}},"y":{"field":"fruits"}},"id":"20574","type":"HBar"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"20519","subtype":"Figure","type":"Plot"},"ticker":{"id":"20535","type":"CategoricalTicker"}},"id":"20537","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"20546","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"20553","type":"ColumnDataSource"},"glyph":{"id":"20574","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20575","type":"HBar"},"selection_glyph":null,"view":{"id":"20577","type":"CDSView"}},"id":"20576","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"20611","type":"GlyphRenderer"}]},"id":"20621","type":"LegendItem"},{"attributes":{"formatter":{"id":"20568","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"20519","subtype":"Figure","type":"Plot"},"ticker":{"id":"20530","type":"BasicTicker"}},"id":"20529","type":"LinearAxis"},{"attributes":{"fields":["2015","2016","2017"]},"id":"20607","type":"Stack"},{"attributes":{},"id":"20539","type":"WheelZoomTool"},{"attributes":{"source":{"id":"20601","type":"ColumnDataSource"}},"id":"20612","type":"CDSView"},{"attributes":{"source":{"id":"20553","type":"ColumnDataSource"}},"id":"20577","type":"CDSView"},{"attributes":{"overlay":{"id":"20546","type":"BoxAnnotation"}},"id":"20540","type":"BoxZoomTool"},{"attributes":{},"id":"20525","type":"LinearScale"},{"attributes":{},"id":"20566","type":"CategoricalTickFormatter"},{"attributes":{},"id":"20538","type":"PanTool"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20584","type":"Selection"},"selection_policy":{"id":"20583","type":"UnionRenderers"}},"id":"20553","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20558","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20559","type":"Stack"}},"y":{"field":"fruits"}},"id":"20589","type":"HBar"},{"attributes":{"fields":[]},"id":"20602","type":"Stack"},{"attributes":{"below":[{"id":"20529","type":"LinearAxis"}],"left":[{"id":"20534","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"20529","type":"LinearAxis"},{"id":"20533","type":"Grid"},{"id":"20534","type":"CategoricalAxis"},{"id":"20537","type":"Grid"},{"id":"20546","type":"BoxAnnotation"},{"id":"20571","type":"Legend"},{"id":"20563","type":"GlyphRenderer"},{"id":"20576","type":"GlyphRenderer"},{"id":"20590","type":"GlyphRenderer"},{"id":"20611","type":"GlyphRenderer"},{"id":"20625","type":"GlyphRenderer"},{"id":"20641","type":"GlyphRenderer"}],"title":{"id":"20518","type":"Title"},"toolbar":{"id":"20544","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20521","type":"Range1d"},"x_scale":{"id":"20525","type":"LinearScale"},"y_range":{"id":"20523","type":"FactorRange"},"y_scale":{"id":"20527","type":"CategoricalScale"}},"id":"20519","subtype":"Figure","type":"Plot"},{"attributes":{"fields":["2015"]},"id":"20555","type":"Stack"},{"attributes":{},"id":"20527","type":"CategoricalScale"},{"attributes":{},"id":"20541","type":"SaveTool"},{"attributes":{"fields":["2015","2016"]},"id":"20606","type":"Stack"},{"attributes":{"data_source":{"id":"20553","type":"ColumnDataSource"},"glyph":{"id":"20588","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20589","type":"HBar"},"selection_glyph":null,"view":{"id":"20591","type":"CDSView"}},"id":"20590","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20538","type":"PanTool"},{"id":"20539","type":"WheelZoomTool"},{"id":"20540","type":"BoxZoomTool"},{"id":"20541","type":"SaveTool"},{"id":"20542","type":"ResetTool"},{"id":"20543","type":"HelpTool"}]},"id":"20544","type":"Toolbar"},{"attributes":{},"id":"20543","type":"HelpTool"},{"attributes":{},"id":"20584","type":"Selection"},{"attributes":{"fields":["2015","2016"]},"id":"20557","type":"Stack"},{"attributes":{"data_source":{"id":"20601","type":"ColumnDataSource"},"glyph":{"id":"20609","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20610","type":"HBar"},"selection_glyph":null,"view":{"id":"20612","type":"CDSView"}},"id":"20611","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"20521","type":"Range1d"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"20518","type":"Title"},{"attributes":{},"id":"20530","type":"BasicTicker"},{"attributes":{},"id":"20583","type":"UnionRenderers"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"20576","type":"GlyphRenderer"}]},"id":"20586","type":"LegendItem"},{"attributes":{"callback":null,"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20635","type":"Selection"},"selection_policy":{"id":"20634","type":"UnionRenderers"}},"id":"20601","type":"ColumnDataSource"},{"attributes":{"fields":["2015","2016"]},"id":"20558","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20602","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20603","type":"Stack"}},"y":{"field":"fruits"}},"id":"20610","type":"HBar"},{"attributes":{},"id":"20542","type":"ResetTool"},{"attributes":{"fields":["2015"]},"id":"20603","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"20604","type":"Stack"}],"root_ids":["20519"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"aae6f818-adbd-497a-98b6-16a04636e9c8","roots":{"20519":"4de7ce74-9260-4de2-a287-b98ea9e22d87"}}];
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