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
      };var element = document.getElementById("bec30377-bebf-4d2b-ae53-b866183c06f1");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'bec30377-bebf-4d2b-ae53-b866183c06f1' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"30cf7bc8-d639-4e06-a934-1cc9450703e3":{"roots":{"references":[{"attributes":{"fields":["2015","2016"]},"id":"20325","type":"Stack"},{"attributes":{"fields":["2015","2016","2017"]},"id":"20278","type":"Stack"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"20295","type":"GlyphRenderer"}]},"id":"20305","type":"LegendItem"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"20242","type":"Range1d"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"20277","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"20278","type":"Stack"}},"y":{"field":"fruits"}},"id":"20307","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20275","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20276","type":"Stack"}},"y":{"field":"fruits"}},"id":"20294","type":"HBar"},{"attributes":{"source":{"id":"20272","type":"ColumnDataSource"}},"id":"20310","type":"CDSView"},{"attributes":{"data_source":{"id":"20320","type":"ColumnDataSource"},"glyph":{"id":"20358","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20359","type":"HBar"},"selection_glyph":null,"view":{"id":"20361","type":"CDSView"}},"id":"20360","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"20330","type":"GlyphRenderer"}]},"id":"20340","type":"LegendItem"},{"attributes":{"fields":["2015"]},"id":"20274","type":"Stack"},{"attributes":{"fields":[]},"id":"20321","type":"Stack"},{"attributes":{"source":{"id":"20320","type":"ColumnDataSource"}},"id":"20331","type":"CDSView"},{"attributes":{},"id":"20251","type":"BasicTicker"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"20282","type":"GlyphRenderer"}]},"id":"20291","type":"LegendItem"},{"attributes":{"data_source":{"id":"20272","type":"ColumnDataSource"},"glyph":{"id":"20307","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20308","type":"HBar"},"selection_glyph":null,"view":{"id":"20310","type":"CDSView"}},"id":"20309","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20325","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20326","type":"Stack"}},"y":{"field":"fruits"}},"id":"20359","type":"HBar"},{"attributes":{},"id":"20355","type":"Selection"},{"attributes":{"fields":["2015","2016","2017"]},"id":"20326","type":"Stack"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"20344","type":"GlyphRenderer"}]},"id":"20356","type":"LegendItem"},{"attributes":{"dimension":1,"grid_line_color":null,"ticker":{"id":"20256","type":"CategoricalTicker"}},"id":"20258","type":"Grid"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"20275","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"20276","type":"Stack"}},"y":{"field":"fruits"}},"id":"20293","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"20275","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"20322","type":"Stack"},{"attributes":{},"id":"20262","type":"SaveTool"},{"attributes":{"formatter":{"id":"20288","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"20256","type":"CategoricalTicker"}},"id":"20255","type":"CategoricalAxis"},{"attributes":{},"id":"20303","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"20286","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"20251","type":"BasicTicker"}},"id":"20250","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20323","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20324","type":"Stack"}},"y":{"field":"fruits"}},"id":"20343","type":"HBar"},{"attributes":{},"id":"20288","type":"CategoricalTickFormatter"},{"attributes":{},"id":"20264","type":"HelpTool"},{"attributes":{},"id":"20259","type":"PanTool"},{"attributes":{"fields":["2015","2016"]},"id":"20324","type":"Stack"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20304","type":"Selection"},"selection_policy":{"id":"20303","type":"UnionRenderers"}},"id":"20272","type":"ColumnDataSource"},{"attributes":{},"id":"20304","type":"Selection"},{"attributes":{"fields":[]},"id":"20273","type":"Stack"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"20323","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"20324","type":"Stack"}},"y":{"field":"fruits"}},"id":"20342","type":"HBar"},{"attributes":{"data_source":{"id":"20320","type":"ColumnDataSource"},"glyph":{"id":"20328","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20329","type":"HBar"},"selection_glyph":null,"view":{"id":"20331","type":"CDSView"}},"id":"20330","type":"GlyphRenderer"},{"attributes":{},"id":"20248","type":"CategoricalScale"},{"attributes":{"overlay":{"id":"20289","type":"BoxAnnotation"}},"id":"20261","type":"BoxZoomTool"},{"attributes":{},"id":"20256","type":"CategoricalTicker"},{"attributes":{"source":{"id":"20320","type":"ColumnDataSource"}},"id":"20361","type":"CDSView"},{"attributes":{},"id":"20263","type":"ResetTool"},{"attributes":{"fields":["2015"]},"id":"20323","type":"Stack"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"20325","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"20326","type":"Stack"}},"y":{"field":"fruits"}},"id":"20358","type":"HBar"},{"attributes":{"source":{"id":"20272","type":"ColumnDataSource"}},"id":"20296","type":"CDSView"},{"attributes":{},"id":"20354","type":"UnionRenderers"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"20360","type":"GlyphRenderer"}]},"id":"20372","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"20321","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"20322","type":"Stack"}},"y":{"field":"fruits"}},"id":"20328","type":"HBar"},{"attributes":{"callback":null,"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20355","type":"Selection"},"selection_policy":{"id":"20354","type":"UnionRenderers"}},"id":"20320","type":"ColumnDataSource"},{"attributes":{"ticker":{"id":"20251","type":"BasicTicker"}},"id":"20254","type":"Grid"},{"attributes":{"items":[{"id":"20291","type":"LegendItem"},{"id":"20305","type":"LegendItem"},{"id":"20319","type":"LegendItem"},{"id":"20340","type":"LegendItem"},{"id":"20356","type":"LegendItem"},{"id":"20372","type":"LegendItem"}],"location":"top_left"},"id":"20290","type":"Legend"},{"attributes":{},"id":"20260","type":"WheelZoomTool"},{"attributes":{"fields":["2015","2016"]},"id":"20276","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"20277","type":"Stack"},{"attributes":{"text":"Fruit import/export, by year"},"id":"20240","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20259","type":"PanTool"},{"id":"20260","type":"WheelZoomTool"},{"id":"20261","type":"BoxZoomTool"},{"id":"20262","type":"SaveTool"},{"id":"20263","type":"ResetTool"},{"id":"20264","type":"HelpTool"}]},"id":"20265","type":"Toolbar"},{"attributes":{"data_source":{"id":"20320","type":"ColumnDataSource"},"glyph":{"id":"20342","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20343","type":"HBar"},"selection_glyph":null,"view":{"id":"20345","type":"CDSView"}},"id":"20344","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"20309","type":"GlyphRenderer"}]},"id":"20319","type":"LegendItem"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"20289","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"20272","type":"ColumnDataSource"},"glyph":{"id":"20293","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20294","type":"HBar"},"selection_glyph":null,"view":{"id":"20296","type":"CDSView"}},"id":"20295","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20273","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20274","type":"Stack"}},"y":{"field":"fruits"}},"id":"20281","type":"HBar"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"20273","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"20274","type":"Stack"}},"y":{"field":"fruits"}},"id":"20280","type":"HBar"},{"attributes":{},"id":"20286","type":"BasicTickFormatter"},{"attributes":{},"id":"20246","type":"LinearScale"},{"attributes":{"source":{"id":"20272","type":"ColumnDataSource"}},"id":"20283","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20277","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20278","type":"Stack"}},"y":{"field":"fruits"}},"id":"20308","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20321","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20322","type":"Stack"}},"y":{"field":"fruits"}},"id":"20329","type":"HBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"20244","type":"FactorRange"},{"attributes":{"data_source":{"id":"20272","type":"ColumnDataSource"},"glyph":{"id":"20280","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20281","type":"HBar"},"selection_glyph":null,"view":{"id":"20283","type":"CDSView"}},"id":"20282","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"20250","type":"LinearAxis"}],"center":[{"id":"20254","type":"Grid"},{"id":"20258","type":"Grid"},{"id":"20290","type":"Legend"}],"left":[{"id":"20255","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"20282","type":"GlyphRenderer"},{"id":"20295","type":"GlyphRenderer"},{"id":"20309","type":"GlyphRenderer"},{"id":"20330","type":"GlyphRenderer"},{"id":"20344","type":"GlyphRenderer"},{"id":"20360","type":"GlyphRenderer"}],"title":{"id":"20240","type":"Title"},"toolbar":{"id":"20265","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20242","type":"Range1d"},"x_scale":{"id":"20246","type":"LinearScale"},"y_range":{"id":"20244","type":"FactorRange"},"y_scale":{"id":"20248","type":"CategoricalScale"}},"id":"20239","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"20320","type":"ColumnDataSource"}},"id":"20345","type":"CDSView"}],"root_ids":["20239"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"30cf7bc8-d639-4e06-a934-1cc9450703e3","roots":{"20239":"bec30377-bebf-4d2b-ae53-b866183c06f1"}}];
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