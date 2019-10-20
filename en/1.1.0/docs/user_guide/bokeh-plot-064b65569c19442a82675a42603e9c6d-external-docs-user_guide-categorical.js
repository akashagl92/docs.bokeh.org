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
      };var element = document.getElementById("875ffa0c-3a4d-494d-b073-981f2d8c7b36");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '875ffa0c-3a4d-494d-b073-981f2d8c7b36' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5d81d415-f3ca-4d08-981d-1ddb6981c02f":{"roots":{"references":[{"attributes":{"source":{"id":"19609","type":"ColumnDataSource"}},"id":"19614","type":"CDSView"},{"attributes":{},"id":"19564","type":"LinearScale"},{"attributes":{},"id":"19634","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19607","type":"Selection"},"selection_policy":{"id":"19606","type":"UnionRenderers"}},"id":"19582","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"19566","type":"CategoricalAxis"}],"center":[{"id":"19569","type":"Grid"},{"id":"19574","type":"Grid"},{"id":"19593","type":"Legend"}],"left":[{"id":"19570","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"19586","type":"GlyphRenderer"},{"id":"19599","type":"GlyphRenderer"},{"id":"19613","type":"GlyphRenderer"}],"title":{"id":"19556","type":"Title"},"toolbar":{"id":"19575","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19558","type":"FactorRange"},"x_scale":{"id":"19562","type":"CategoricalScale"},"y_range":{"id":"19560","type":"DataRange1d"},"y_scale":{"id":"19564","type":"LinearScale"}},"id":"19555","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19622","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19595","type":"ColumnDataSource"},"glyph":{"id":"19597","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2016","nonselection_glyph":{"id":"19598","type":"VBar"},"selection_glyph":null,"view":{"id":"19600","type":"CDSView"}},"id":"19599","type":"GlyphRenderer"},{"attributes":{"fields":["2015","2016","2017"]},"id":"19581","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"19580","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"19577","type":"Stack"},{"attributes":{},"id":"19571","type":"BasicTicker"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"19586","type":"GlyphRenderer"}]},"id":"19594","type":"LegendItem"},{"attributes":{"items":[{"id":"19594","type":"LegendItem"},{"id":"19608","type":"LegendItem"},{"id":"19624","type":"LegendItem"}],"location":"top_left","orientation":"horizontal"},"id":"19593","type":"Legend"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"19613","type":"GlyphRenderer"}]},"id":"19624","type":"LegendItem"},{"attributes":{},"id":"19623","type":"Selection"},{"attributes":{"bottom":{"expr":{"id":"19580","type":"Stack"}},"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"expr":{"id":"19581","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19611","type":"VBar"},{"attributes":{"dimension":1,"ticker":{"id":"19571","type":"BasicTicker"}},"id":"19574","type":"Grid"},{"attributes":{},"id":"19607","type":"Selection"},{"attributes":{},"id":"19635","type":"Selection"},{"attributes":{"data_source":{"id":"19609","type":"ColumnDataSource"},"glyph":{"id":"19611","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2017","nonselection_glyph":{"id":"19612","type":"VBar"},"selection_glyph":null,"view":{"id":"19614","type":"CDSView"}},"id":"19613","type":"GlyphRenderer"},{"attributes":{"callback":null,"start":0},"id":"19560","type":"DataRange1d"},{"attributes":{},"id":"19590","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19635","type":"Selection"},"selection_policy":{"id":"19634","type":"UnionRenderers"}},"id":"19609","type":"ColumnDataSource"},{"attributes":{"bottom":{"expr":{"id":"19576","type":"Stack"}},"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"expr":{"id":"19577","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19584","type":"VBar"},{"attributes":{"bottom":{"expr":{"id":"19578","type":"Stack"}},"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"expr":{"id":"19579","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19597","type":"VBar"},{"attributes":{"source":{"id":"19582","type":"ColumnDataSource"}},"id":"19587","type":"CDSView"},{"attributes":{"fields":["2015","2016"]},"id":"19579","type":"Stack"},{"attributes":{"bottom":{"expr":{"id":"19576","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"19577","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19585","type":"VBar"},{"attributes":{"data_source":{"id":"19582","type":"ColumnDataSource"},"glyph":{"id":"19584","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"2015","nonselection_glyph":{"id":"19585","type":"VBar"},"selection_glyph":null,"view":{"id":"19587","type":"CDSView"}},"id":"19586","type":"GlyphRenderer"},{"attributes":{},"id":"19591","type":"CategoricalTickFormatter"},{"attributes":{"bottom":{"expr":{"id":"19578","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"19579","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19598","type":"VBar"},{"attributes":{"source":{"id":"19595","type":"ColumnDataSource"}},"id":"19600","type":"CDSView"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"19558","type":"FactorRange"},{"attributes":{},"id":"19562","type":"CategoricalScale"},{"attributes":{},"id":"19567","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"19575","type":"Toolbar"},{"attributes":{"bottom":{"expr":{"id":"19580","type":"Stack"}},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"expr":{"id":"19581","type":"Stack"}},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19612","type":"VBar"},{"attributes":{"formatter":{"id":"19590","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"19571","type":"BasicTicker"}},"id":"19570","type":"LinearAxis"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"19599","type":"GlyphRenderer"}]},"id":"19608","type":"LegendItem"},{"attributes":{"grid_line_color":{"value":null},"ticker":{"id":"19567","type":"CategoricalTicker"}},"id":"19569","type":"Grid"},{"attributes":{"formatter":{"id":"19591","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"ticker":{"id":"19567","type":"CategoricalTicker"}},"id":"19566","type":"CategoricalAxis"},{"attributes":{"text":"Fruit Counts by Year"},"id":"19556","type":"Title"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19623","type":"Selection"},"selection_policy":{"id":"19622","type":"UnionRenderers"}},"id":"19595","type":"ColumnDataSource"},{"attributes":{"fields":[]},"id":"19576","type":"Stack"},{"attributes":{},"id":"19606","type":"UnionRenderers"},{"attributes":{"fields":["2015"]},"id":"19578","type":"Stack"}],"root_ids":["19555"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"5d81d415-f3ca-4d08-981d-1ddb6981c02f","roots":{"19555":"875ffa0c-3a4d-494d-b073-981f2d8c7b36"}}];
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