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
      };var element = document.getElementById("6e8a7ff8-6bea-4e91-917d-7c1529406b39");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6e8a7ff8-6bea-4e91-917d-7c1529406b39' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"e84d6604-9ce0-47d5-9c1e-9464141f8303":{"roots":{"references":[{"attributes":{"dimension":1,"grid_line_color":{"value":null},"ticker":{"id":"19698","type":"CategoricalTicker"}},"id":"19700","type":"Grid"},{"attributes":{"fields":["2015"]},"id":"19764","type":"Stack"},{"attributes":{"data_source":{"id":"19762","type":"ColumnDataSource"},"glyph":{"id":"19784","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"19785","type":"HBar"},"selection_glyph":null,"view":{"id":"19787","type":"CDSView"}},"id":"19786","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"19765","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"19766","type":"Stack"}},"y":{"field":"fruits"}},"id":"19784","type":"HBar"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"19684","type":"Range1d"},{"attributes":{"source":{"id":"19714","type":"ColumnDataSource"}},"id":"19752","type":"CDSView"},{"attributes":{},"id":"19744","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19714","type":"ColumnDataSource"},"glyph":{"id":"19722","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"19723","type":"HBar"},"selection_glyph":null,"view":{"id":"19725","type":"CDSView"}},"id":"19724","type":"GlyphRenderer"},{"attributes":{"text":"Fruit import/export, by year"},"id":"19682","type":"Title"},{"attributes":{"fields":["2015","2016"]},"id":"19719","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"19717","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"19718","type":"Stack"}},"y":{"field":"fruits"}},"id":"19736","type":"HBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"19720","type":"Stack"},{"attributes":{},"id":"19690","type":"CategoricalScale"},{"attributes":{},"id":"19706","type":"HelpTool"},{"attributes":{"fields":["2015","2016"]},"id":"19767","type":"Stack"},{"attributes":{},"id":"19745","type":"Selection"},{"attributes":{"fields":["2015","2016","2017"]},"id":"19768","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"19763","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"19764","type":"Stack"}},"y":{"field":"fruits"}},"id":"19771","type":"HBar"},{"attributes":{"data_source":{"id":"19714","type":"ColumnDataSource"},"glyph":{"id":"19735","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"19736","type":"HBar"},"selection_glyph":null,"view":{"id":"19738","type":"CDSView"}},"id":"19737","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"19719","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"19720","type":"Stack"}},"y":{"field":"fruits"}},"id":"19750","type":"HBar"},{"attributes":{"fields":["2015","2016"]},"id":"19766","type":"Stack"},{"attributes":{"formatter":{"id":"19727","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"19698","type":"CategoricalTicker"}},"id":"19697","type":"CategoricalAxis"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"19802","type":"GlyphRenderer"}]},"id":"19814","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"19717","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"19718","type":"Stack"}},"y":{"field":"fruits"}},"id":"19735","type":"HBar"},{"attributes":{},"id":"19727","type":"CategoricalTickFormatter"},{"attributes":{"items":[{"id":"19733","type":"LegendItem"},{"id":"19747","type":"LegendItem"},{"id":"19761","type":"LegendItem"},{"id":"19782","type":"LegendItem"},{"id":"19798","type":"LegendItem"},{"id":"19814","type":"LegendItem"}],"location":"top_left"},"id":"19732","type":"Legend"},{"attributes":{"data_source":{"id":"19762","type":"ColumnDataSource"},"glyph":{"id":"19770","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"19771","type":"HBar"},"selection_glyph":null,"view":{"id":"19773","type":"CDSView"}},"id":"19772","type":"GlyphRenderer"},{"attributes":{"fields":["2015"]},"id":"19717","type":"Stack"},{"attributes":{},"id":"19705","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"19767","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"19768","type":"Stack"}},"y":{"field":"fruits"}},"id":"19801","type":"HBar"},{"attributes":{"overlay":{"id":"19731","type":"BoxAnnotation"}},"id":"19703","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19731","type":"BoxAnnotation"},{"attributes":{"fields":["2015","2016"]},"id":"19718","type":"Stack"},{"attributes":{},"id":"19702","type":"WheelZoomTool"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"19686","type":"FactorRange"},{"attributes":{"source":{"id":"19714","type":"ColumnDataSource"}},"id":"19738","type":"CDSView"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"19751","type":"GlyphRenderer"}]},"id":"19761","type":"LegendItem"},{"attributes":{},"id":"19704","type":"SaveTool"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"19772","type":"GlyphRenderer"}]},"id":"19782","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"19715","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"19716","type":"Stack"}},"y":{"field":"fruits"}},"id":"19722","type":"HBar"},{"attributes":{},"id":"19688","type":"LinearScale"},{"attributes":{"data_source":{"id":"19714","type":"ColumnDataSource"},"glyph":{"id":"19749","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"19750","type":"HBar"},"selection_glyph":null,"view":{"id":"19752","type":"CDSView"}},"id":"19751","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"19762","type":"ColumnDataSource"},"glyph":{"id":"19800","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"19801","type":"HBar"},"selection_glyph":null,"view":{"id":"19803","type":"CDSView"}},"id":"19802","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19745","type":"Selection"},"selection_policy":{"id":"19744","type":"UnionRenderers"}},"id":"19714","type":"ColumnDataSource"},{"attributes":{"fields":["2015"]},"id":"19716","type":"Stack"},{"attributes":{"source":{"id":"19714","type":"ColumnDataSource"}},"id":"19725","type":"CDSView"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"19724","type":"GlyphRenderer"}]},"id":"19733","type":"LegendItem"},{"attributes":{"ticker":{"id":"19693","type":"BasicTicker"}},"id":"19696","type":"Grid"},{"attributes":{},"id":"19730","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"19786","type":"GlyphRenderer"}]},"id":"19798","type":"LegendItem"},{"attributes":{},"id":"19698","type":"CategoricalTicker"},{"attributes":{"source":{"id":"19762","type":"ColumnDataSource"}},"id":"19773","type":"CDSView"},{"attributes":{"callback":null,"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19796","type":"Selection"},"selection_policy":{"id":"19795","type":"UnionRenderers"}},"id":"19762","type":"ColumnDataSource"},{"attributes":{"fields":["2015"]},"id":"19765","type":"Stack"},{"attributes":{"fields":[]},"id":"19715","type":"Stack"},{"attributes":{"fields":[]},"id":"19763","type":"Stack"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"19719","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"19720","type":"Stack"}},"y":{"field":"fruits"}},"id":"19749","type":"HBar"},{"attributes":{"source":{"id":"19762","type":"ColumnDataSource"}},"id":"19787","type":"CDSView"},{"attributes":{"source":{"id":"19762","type":"ColumnDataSource"}},"id":"19803","type":"CDSView"},{"attributes":{},"id":"19701","type":"PanTool"},{"attributes":{},"id":"19795","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"19730","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"19693","type":"BasicTicker"}},"id":"19692","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"19767","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"19768","type":"Stack"}},"y":{"field":"fruits"}},"id":"19800","type":"HBar"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"19737","type":"GlyphRenderer"}]},"id":"19747","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19701","type":"PanTool"},{"id":"19702","type":"WheelZoomTool"},{"id":"19703","type":"BoxZoomTool"},{"id":"19704","type":"SaveTool"},{"id":"19705","type":"ResetTool"},{"id":"19706","type":"HelpTool"}]},"id":"19707","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"19765","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"19766","type":"Stack"}},"y":{"field":"fruits"}},"id":"19785","type":"HBar"},{"attributes":{},"id":"19693","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"19715","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"19716","type":"Stack"}},"y":{"field":"fruits"}},"id":"19723","type":"HBar"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"19763","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"19764","type":"Stack"}},"y":{"field":"fruits"}},"id":"19770","type":"HBar"},{"attributes":{"below":[{"id":"19692","type":"LinearAxis"}],"center":[{"id":"19696","type":"Grid"},{"id":"19700","type":"Grid"},{"id":"19732","type":"Legend"}],"left":[{"id":"19697","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"19724","type":"GlyphRenderer"},{"id":"19737","type":"GlyphRenderer"},{"id":"19751","type":"GlyphRenderer"},{"id":"19772","type":"GlyphRenderer"},{"id":"19786","type":"GlyphRenderer"},{"id":"19802","type":"GlyphRenderer"}],"title":{"id":"19682","type":"Title"},"toolbar":{"id":"19707","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19684","type":"Range1d"},"x_scale":{"id":"19688","type":"LinearScale"},"y_range":{"id":"19686","type":"FactorRange"},"y_scale":{"id":"19690","type":"CategoricalScale"}},"id":"19681","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19796","type":"Selection"}],"root_ids":["19681"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"e84d6604-9ce0-47d5-9c1e-9464141f8303","roots":{"19681":"6e8a7ff8-6bea-4e91-917d-7c1529406b39"}}];
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