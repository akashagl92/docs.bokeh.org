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
      };var element = document.getElementById("0a573ee7-a73a-4b80-81a3-16dfb112a9ca");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '0a573ee7-a73a-4b80-81a3-16dfb112a9ca' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
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
                    
                  var docs_json = '{"100b0113-0bbc-47e8-8cf6-09776711d8be":{"roots":{"references":[{"attributes":{"data_source":{"id":"20252","type":"ColumnDataSource"},"glyph":{"id":"20260","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20261","type":"HBar"},"selection_glyph":null,"view":{"id":"20263","type":"CDSView"}},"id":"20262","type":"GlyphRenderer"},{"attributes":{"fields":["2015"]},"id":"20255","type":"Stack"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"20289","type":"GlyphRenderer"}]},"id":"20299","type":"LegendItem"},{"attributes":{},"id":"20282","type":"Selection"},{"attributes":{},"id":"20267","type":"BasicTickFormatter"},{"attributes":{},"id":"20226","type":"LinearScale"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"20324","type":"GlyphRenderer"}]},"id":"20336","type":"LegendItem"},{"attributes":{"callback":null,"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20333","type":"Selection"},"selection_policy":{"id":"20334","type":"UnionRenderers"}},"id":"20300","type":"ColumnDataSource"},{"attributes":{"source":{"id":"20252","type":"ColumnDataSource"}},"id":"20290","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20239","type":"PanTool"},{"id":"20240","type":"WheelZoomTool"},{"id":"20241","type":"BoxZoomTool"},{"id":"20242","type":"SaveTool"},{"id":"20243","type":"ResetTool"},{"id":"20244","type":"HelpTool"}]},"id":"20245","type":"Toolbar"},{"attributes":{"fields":["2015","2016"]},"id":"20304","type":"Stack"},{"attributes":{"items":[{"id":"20271","type":"LegendItem"},{"id":"20285","type":"LegendItem"},{"id":"20299","type":"LegendItem"},{"id":"20320","type":"LegendItem"},{"id":"20336","type":"LegendItem"},{"id":"20352","type":"LegendItem"}],"location":"top_left"},"id":"20270","type":"Legend"},{"attributes":{"source":{"id":"20300","type":"ColumnDataSource"}},"id":"20311","type":"CDSView"},{"attributes":{},"id":"20243","type":"ResetTool"},{"attributes":{"data_source":{"id":"20300","type":"ColumnDataSource"},"glyph":{"id":"20308","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"20309","type":"HBar"},"selection_glyph":null,"view":{"id":"20311","type":"CDSView"}},"id":"20310","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"20303","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"20304","type":"Stack"}},"y":{"field":"fruits"}},"id":"20322","type":"HBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"20269","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"20231","type":"BasicTicker"}},"id":"20234","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20253","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20254","type":"Stack"}},"y":{"field":"fruits"}},"id":"20261","type":"HBar"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"20255","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"20256","type":"Stack"}},"y":{"field":"fruits"}},"id":"20273","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20303","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20304","type":"Stack"}},"y":{"field":"fruits"}},"id":"20323","type":"HBar"},{"attributes":{},"id":"20244","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20305","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20306","type":"Stack"}},"y":{"field":"fruits"}},"id":"20339","type":"HBar"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"20275","type":"GlyphRenderer"}]},"id":"20285","type":"LegendItem"},{"attributes":{},"id":"20242","type":"SaveTool"},{"attributes":{},"id":"20283","type":"UnionRenderers"},{"attributes":{},"id":"20334","type":"UnionRenderers"},{"attributes":{"source":{"id":"20252","type":"ColumnDataSource"}},"id":"20276","type":"CDSView"},{"attributes":{"fields":[]},"id":"20253","type":"Stack"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"20305","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"20306","type":"Stack"}},"y":{"field":"fruits"}},"id":"20338","type":"HBar"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"20257","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"20258","type":"Stack"}},"y":{"field":"fruits"}},"id":"20287","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20257","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20258","type":"Stack"}},"y":{"field":"fruits"}},"id":"20288","type":"HBar"},{"attributes":{"below":[{"id":"20230","type":"LinearAxis"}],"center":[{"id":"20234","type":"Grid"},{"id":"20238","type":"Grid"},{"id":"20270","type":"Legend"}],"left":[{"id":"20235","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"20262","type":"GlyphRenderer"},{"id":"20275","type":"GlyphRenderer"},{"id":"20289","type":"GlyphRenderer"},{"id":"20310","type":"GlyphRenderer"},{"id":"20324","type":"GlyphRenderer"},{"id":"20340","type":"GlyphRenderer"}],"title":{"id":"20220","type":"Title"},"toolbar":{"id":"20245","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20222","type":"Range1d"},"x_scale":{"id":"20226","type":"LinearScale"},"y_range":{"id":"20224","type":"FactorRange"},"y_scale":{"id":"20228","type":"CategoricalScale"}},"id":"20219","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"20300","type":"ColumnDataSource"},"glyph":{"id":"20338","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20339","type":"HBar"},"selection_glyph":null,"view":{"id":"20341","type":"CDSView"}},"id":"20340","type":"GlyphRenderer"},{"attributes":{"fields":[]},"id":"20301","type":"Stack"},{"attributes":{"data_source":{"id":"20252","type":"ColumnDataSource"},"glyph":{"id":"20287","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"20288","type":"HBar"},"selection_glyph":null,"view":{"id":"20290","type":"CDSView"}},"id":"20289","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"20222","type":"Range1d"},{"attributes":{"dimension":1,"grid_line_color":null,"ticker":{"id":"20236","type":"CategoricalTicker"}},"id":"20238","type":"Grid"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"20301","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"20302","type":"Stack"}},"y":{"field":"fruits"}},"id":"20308","type":"HBar"},{"attributes":{},"id":"20333","type":"Selection"},{"attributes":{"fields":["2015","2016"]},"id":"20305","type":"Stack"},{"attributes":{"data_source":{"id":"20252","type":"ColumnDataSource"},"glyph":{"id":"20273","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20274","type":"HBar"},"selection_glyph":null,"view":{"id":"20276","type":"CDSView"}},"id":"20275","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"20267","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"20231","type":"BasicTicker"}},"id":"20230","type":"LinearAxis"},{"attributes":{"data_source":{"id":"20300","type":"ColumnDataSource"},"glyph":{"id":"20322","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"20323","type":"HBar"},"selection_glyph":null,"view":{"id":"20325","type":"CDSView"}},"id":"20324","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"20224","type":"FactorRange"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20301","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20302","type":"Stack"}},"y":{"field":"fruits"}},"id":"20309","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"20254","type":"Stack"},{"attributes":{},"id":"20239","type":"PanTool"},{"attributes":{"text":"Fruit import/export, by year"},"id":"20220","type":"Title"},{"attributes":{"source":{"id":"20300","type":"ColumnDataSource"}},"id":"20325","type":"CDSView"},{"attributes":{"fields":["2015","2016","2017"]},"id":"20306","type":"Stack"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"20310","type":"GlyphRenderer"}]},"id":"20320","type":"LegendItem"},{"attributes":{},"id":"20228","type":"CategoricalScale"},{"attributes":{"overlay":{"id":"20269","type":"BoxAnnotation"}},"id":"20241","type":"BoxZoomTool"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"20262","type":"GlyphRenderer"}]},"id":"20271","type":"LegendItem"},{"attributes":{},"id":"20265","type":"CategoricalTickFormatter"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"20253","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"20254","type":"Stack"}},"y":{"field":"fruits"}},"id":"20260","type":"HBar"},{"attributes":{"source":{"id":"20300","type":"ColumnDataSource"}},"id":"20341","type":"CDSView"},{"attributes":{"source":{"id":"20252","type":"ColumnDataSource"}},"id":"20263","type":"CDSView"},{"attributes":{"fields":["2015","2016"]},"id":"20256","type":"Stack"},{"attributes":{"formatter":{"id":"20265","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"20236","type":"CategoricalTicker"}},"id":"20235","type":"CategoricalAxis"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"20340","type":"GlyphRenderer"}]},"id":"20352","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"20255","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"20256","type":"Stack"}},"y":{"field":"fruits"}},"id":"20274","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"20303","type":"Stack"},{"attributes":{},"id":"20240","type":"WheelZoomTool"},{"attributes":{"fields":["2015","2016","2017"]},"id":"20258","type":"Stack"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20282","type":"Selection"},"selection_policy":{"id":"20283","type":"UnionRenderers"}},"id":"20252","type":"ColumnDataSource"},{"attributes":{},"id":"20231","type":"BasicTicker"},{"attributes":{"fields":["2015"]},"id":"20302","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"20257","type":"Stack"},{"attributes":{},"id":"20236","type":"CategoricalTicker"}],"root_ids":["20219"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"100b0113-0bbc-47e8-8cf6-09776711d8be","roots":{"20219":"0a573ee7-a73a-4b80-81a3-16dfb112a9ca"}}];
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