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
      };var element = document.getElementById("b545e50c-68f3-48b8-96c0-2375f86bfa2f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b545e50c-68f3-48b8-96c0-2375f86bfa2f' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.2.min.js"];
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
                    
                  var docs_json = '{"69d9aff9-363a-4d7a-955f-511d03b79edc":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20324","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20325","type":"Stack"}},"y":{"field":"fruits"}},"id":"20344","type":"HBar"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"20361","type":"GlyphRenderer"}]},"id":"20373","type":"LegendItem"},{"attributes":{"fields":["2015","2016"]},"id":"20326","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20322","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20323","type":"Stack"}},"y":{"field":"fruits"}},"id":"20330","type":"HBar"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"20296","type":"GlyphRenderer"}]},"id":"20306","type":"LegendItem"},{"attributes":{"callback":null,"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20355","type":"Selection"},"selection_policy":{"id":"20354","type":"UnionRenderers"}},"id":"20321","type":"ColumnDataSource"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"20310","type":"GlyphRenderer"}]},"id":"20320","type":"LegendItem"},{"attributes":{},"id":"20261","type":"WheelZoomTool"},{"attributes":{},"id":"20288","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"20243","type":"Range1d"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"20324","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"20325","type":"Stack"}},"y":{"field":"fruits"}},"id":"20343","type":"HBar"},{"attributes":{},"id":"20303","type":"UnionRenderers"},{"attributes":{},"id":"20265","type":"HelpTool"},{"attributes":{"fields":["2015"]},"id":"20323","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20278","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20279","type":"Stack"}},"y":{"field":"fruits"}},"id":"20309","type":"HBar"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"20276","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"20277","type":"Stack"}},"y":{"field":"fruits"}},"id":"20294","type":"HBar"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"20283","type":"GlyphRenderer"}]},"id":"20292","type":"LegendItem"},{"attributes":{"fields":["2015","2016","2017"]},"id":"20279","type":"Stack"},{"attributes":{},"id":"20355","type":"Selection"},{"attributes":{},"id":"20252","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"20290","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"20321","type":"ColumnDataSource"},"glyph":{"id":"20343","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20344","type":"HBar"},"selection_glyph":null,"view":{"id":"20346","type":"CDSView"}},"id":"20345","type":"GlyphRenderer"},{"attributes":{"source":{"id":"20321","type":"ColumnDataSource"}},"id":"20362","type":"CDSView"},{"attributes":{},"id":"20247","type":"LinearScale"},{"attributes":{"data_source":{"id":"20273","type":"ColumnDataSource"},"glyph":{"id":"20308","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20309","type":"HBar"},"selection_glyph":null,"view":{"id":"20311","type":"CDSView"}},"id":"20310","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"20290","type":"BoxAnnotation"}},"id":"20262","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"20288","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"20257","type":"CategoricalTicker"}},"id":"20256","type":"CategoricalAxis"},{"attributes":{},"id":"20304","type":"Selection"},{"attributes":{"data_source":{"id":"20273","type":"ColumnDataSource"},"glyph":{"id":"20281","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20282","type":"HBar"},"selection_glyph":null,"view":{"id":"20284","type":"CDSView"}},"id":"20283","type":"GlyphRenderer"},{"attributes":{},"id":"20286","type":"BasicTickFormatter"},{"attributes":{},"id":"20257","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"20321","type":"ColumnDataSource"},"glyph":{"id":"20359","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20360","type":"HBar"},"selection_glyph":null,"view":{"id":"20362","type":"CDSView"}},"id":"20361","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"20251","type":"LinearAxis"}],"center":[{"id":"20255","type":"Grid"},{"id":"20259","type":"Grid"},{"id":"20291","type":"Legend"}],"left":[{"id":"20256","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"20283","type":"GlyphRenderer"},{"id":"20296","type":"GlyphRenderer"},{"id":"20310","type":"GlyphRenderer"},{"id":"20331","type":"GlyphRenderer"},{"id":"20345","type":"GlyphRenderer"},{"id":"20361","type":"GlyphRenderer"}],"title":{"id":"20241","type":"Title"},"toolbar":{"id":"20266","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20243","type":"Range1d"},"x_scale":{"id":"20247","type":"LinearScale"},"y_range":{"id":"20245","type":"FactorRange"},"y_scale":{"id":"20249","type":"CategoricalScale"}},"id":"20240","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20276","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20277","type":"Stack"}},"y":{"field":"fruits"}},"id":"20295","type":"HBar"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"20322","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"20323","type":"Stack"}},"y":{"field":"fruits"}},"id":"20329","type":"HBar"},{"attributes":{},"id":"20249","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"20273","type":"ColumnDataSource"},"glyph":{"id":"20294","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20295","type":"HBar"},"selection_glyph":null,"view":{"id":"20297","type":"CDSView"}},"id":"20296","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_color":null,"ticker":{"id":"20257","type":"CategoricalTicker"}},"id":"20259","type":"Grid"},{"attributes":{"fields":[]},"id":"20274","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"20278","type":"Stack"},{"attributes":{},"id":"20354","type":"UnionRenderers"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"20245","type":"FactorRange"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"20278","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"20279","type":"Stack"}},"y":{"field":"fruits"}},"id":"20308","type":"HBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20260","type":"PanTool"},{"id":"20261","type":"WheelZoomTool"},{"id":"20262","type":"BoxZoomTool"},{"id":"20263","type":"SaveTool"},{"id":"20264","type":"ResetTool"},{"id":"20265","type":"HelpTool"}]},"id":"20266","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20274","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20275","type":"Stack"}},"y":{"field":"fruits"}},"id":"20282","type":"HBar"},{"attributes":{},"id":"20263","type":"SaveTool"},{"attributes":{"source":{"id":"20273","type":"ColumnDataSource"}},"id":"20297","type":"CDSView"},{"attributes":{"text":"Fruit import/export, by year"},"id":"20241","type":"Title"},{"attributes":{"fields":["2015"]},"id":"20324","type":"Stack"},{"attributes":{},"id":"20264","type":"ResetTool"},{"attributes":{"source":{"id":"20273","type":"ColumnDataSource"}},"id":"20311","type":"CDSView"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"20331","type":"GlyphRenderer"}]},"id":"20341","type":"LegendItem"},{"attributes":{"ticker":{"id":"20252","type":"BasicTicker"}},"id":"20255","type":"Grid"},{"attributes":{"source":{"id":"20273","type":"ColumnDataSource"}},"id":"20284","type":"CDSView"},{"attributes":{"data_source":{"id":"20321","type":"ColumnDataSource"},"glyph":{"id":"20329","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20330","type":"HBar"},"selection_glyph":null,"view":{"id":"20332","type":"CDSView"}},"id":"20331","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"20326","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"20327","type":"Stack"}},"y":{"field":"fruits"}},"id":"20359","type":"HBar"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"20345","type":"GlyphRenderer"}]},"id":"20357","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"20274","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"20275","type":"Stack"}},"y":{"field":"fruits"}},"id":"20281","type":"HBar"},{"attributes":{"source":{"id":"20321","type":"ColumnDataSource"}},"id":"20332","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20326","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20327","type":"Stack"}},"y":{"field":"fruits"}},"id":"20360","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"20275","type":"Stack"},{"attributes":{},"id":"20260","type":"PanTool"},{"attributes":{"fields":["2015","2016","2017"]},"id":"20327","type":"Stack"},{"attributes":{"fields":[]},"id":"20322","type":"Stack"},{"attributes":{"source":{"id":"20321","type":"ColumnDataSource"}},"id":"20346","type":"CDSView"},{"attributes":{"fields":["2015","2016"]},"id":"20277","type":"Stack"},{"attributes":{"items":[{"id":"20292","type":"LegendItem"},{"id":"20306","type":"LegendItem"},{"id":"20320","type":"LegendItem"},{"id":"20341","type":"LegendItem"},{"id":"20357","type":"LegendItem"},{"id":"20373","type":"LegendItem"}],"location":"top_left"},"id":"20291","type":"Legend"},{"attributes":{"formatter":{"id":"20286","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"20252","type":"BasicTicker"}},"id":"20251","type":"LinearAxis"},{"attributes":{"fields":["2015","2016"]},"id":"20325","type":"Stack"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20304","type":"Selection"},"selection_policy":{"id":"20303","type":"UnionRenderers"}},"id":"20273","type":"ColumnDataSource"},{"attributes":{"fields":["2015"]},"id":"20276","type":"Stack"}],"root_ids":["20240"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"69d9aff9-363a-4d7a-955f-511d03b79edc","roots":{"20240":"b545e50c-68f3-48b8-96c0-2375f86bfa2f"}}];
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