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
      };var element = document.getElementById("b2b0740e-afbd-4dc7-af5b-d9c6aa9c1aad");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b2b0740e-afbd-4dc7-af5b-d9c6aa9c1aad' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8f94fdc6-449f-466c-9746-01aeb3b09865":{"roots":{"references":[{"attributes":{"grid_line_color":{"value":null},"ticker":{"id":"19878","type":"CategoricalTicker"}},"id":"19880","type":"Grid"},{"attributes":{"fields":["2015","2016","2017"]},"id":"19894","type":"Stack"},{"attributes":{"data_source":{"id":"19895","type":"ColumnDataSource"},"glyph":{"id":"19897","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"19898","type":"VBar"},"selection_glyph":null,"view":{"id":"19900","type":"CDSView"}},"id":"19899","type":"GlyphRenderer"},{"attributes":{"bottom":{"expr":{"id":"19889","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"19890","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19898","type":"VBar"},{"attributes":{},"id":"19935","type":"UnionRenderers"},{"attributes":{},"id":"19947","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"19903","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"19882","type":"BasicTicker"}},"id":"19881","type":"LinearAxis"},{"attributes":{},"id":"19919","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"19904","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"19878","type":"CategoricalTicker"}},"id":"19877","type":"CategoricalAxis"},{"attributes":{"bottom":{"expr":{"id":"19889","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"19890","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19897","type":"VBar"},{"attributes":{"fields":["2015"]},"id":"19890","type":"Stack"},{"attributes":{"dimension":1,"ticker":{"id":"19882","type":"BasicTicker"}},"id":"19885","type":"Grid"},{"attributes":{},"id":"19920","type":"Selection"},{"attributes":{"data_source":{"id":"19908","type":"ColumnDataSource"},"glyph":{"id":"19910","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"19911","type":"VBar"},"selection_glyph":null,"view":{"id":"19913","type":"CDSView"}},"id":"19912","type":"GlyphRenderer"},{"attributes":{"fields":["2015","2016"]},"id":"19892","type":"Stack"},{"attributes":{"text":"Fruit Counts by Year"},"id":"19867","type":"Title"},{"attributes":{"callback":null,"start":0},"id":"19871","type":"DataRange1d"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"19926","type":"GlyphRenderer"}]},"id":"19937","type":"LegendItem"},{"attributes":{"source":{"id":"19895","type":"ColumnDataSource"}},"id":"19900","type":"CDSView"},{"attributes":{"bottom":{"expr":{"id":"19893","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"19894","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19925","type":"VBar"},{"attributes":{"fields":["2015","2016"]},"id":"19893","type":"Stack"},{"attributes":{},"id":"19873","type":"CategoricalScale"},{"attributes":{},"id":"19882","type":"BasicTicker"},{"attributes":{"below":[{"id":"19877","type":"CategoricalAxis"}],"center":[{"id":"19880","type":"Grid"},{"id":"19885","type":"Grid"},{"id":"19906","type":"Legend"}],"left":[{"id":"19881","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"19899","type":"GlyphRenderer"},{"id":"19912","type":"GlyphRenderer"},{"id":"19926","type":"GlyphRenderer"}],"title":{"id":"19867","type":"Title"},"toolbar":{"id":"19887","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19869","type":"FactorRange"},"x_scale":{"id":"19873","type":"CategoricalScale"},"y_range":{"id":"19871","type":"DataRange1d"},"y_scale":{"id":"19875","type":"LinearScale"}},"id":"19866","subtype":"Figure","type":"Plot"},{"attributes":{"fields":["2015"]},"id":"19891","type":"Stack"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19920","type":"Selection"},"selection_policy":{"id":"19919","type":"UnionRenderers"}},"id":"19895","type":"ColumnDataSource"},{"attributes":{},"id":"19904","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19948","type":"Selection"},"selection_policy":{"id":"19947","type":"UnionRenderers"}},"id":"19922","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"19891","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"19892","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19911","type":"VBar"},{"attributes":{"items":[{"id":"19907","type":"LegendItem"},{"id":"19921","type":"LegendItem"},{"id":"19937","type":"LegendItem"}],"location":"top_left","orientation":"horizontal"},"id":"19906","type":"Legend"},{"attributes":{"source":{"id":"19908","type":"ColumnDataSource"}},"id":"19913","type":"CDSView"},{"attributes":{},"id":"19878","type":"CategoricalTicker"},{"attributes":{},"id":"19875","type":"LinearScale"},{"attributes":{},"id":"19948","type":"Selection"},{"attributes":{"fields":[]},"id":"19889","type":"Stack"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"19869","type":"FactorRange"},{"attributes":{"data_source":{"id":"19922","type":"ColumnDataSource"},"glyph":{"id":"19924","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"19925","type":"VBar"},"selection_glyph":null,"view":{"id":"19927","type":"CDSView"}},"id":"19926","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"19912","type":"GlyphRenderer"}]},"id":"19921","type":"LegendItem"},{"attributes":{"callback":null,"tooltips":"$name @fruits: @$name"},"id":"19886","type":"HoverTool"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"19899","type":"GlyphRenderer"}]},"id":"19907","type":"LegendItem"},{"attributes":{},"id":"19936","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19886","type":"HoverTool"}]},"id":"19887","type":"Toolbar"},{"attributes":{"source":{"id":"19922","type":"ColumnDataSource"}},"id":"19927","type":"CDSView"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19936","type":"Selection"},"selection_policy":{"id":"19935","type":"UnionRenderers"}},"id":"19908","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"19893","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"19894","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19924","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"19891","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"19892","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19910","type":"VBar"},{"attributes":{},"id":"19903","type":"BasicTickFormatter"}],"root_ids":["19866"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"8f94fdc6-449f-466c-9746-01aeb3b09865","roots":{"19866":"b2b0740e-afbd-4dc7-af5b-d9c6aa9c1aad"}}];
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