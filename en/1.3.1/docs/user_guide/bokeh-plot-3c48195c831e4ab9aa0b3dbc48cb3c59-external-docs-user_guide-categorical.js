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
      };var element = document.getElementById("33495ac3-2327-4ff4-a659-90c65254294a");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '33495ac3-2327-4ff4-a659-90c65254294a' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.1.min.js"];
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
                    
                  var docs_json = '{"6894341f-9f27-488d-ab2e-e24950780539":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"20702","type":"Dodge"}}},"id":"20704","type":"VBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"20684","type":"FactorRange"},{"attributes":{},"id":"20727","type":"UnionRenderers"},{"attributes":{"items":[{"id":"20714","type":"LegendItem"},{"id":"20728","type":"LegendItem"},{"id":"20742","type":"LegendItem"}],"location":"top_left","orientation":"horizontal"},"id":"20713","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"20715","type":"Dodge"}}},"id":"20718","type":"VBar"},{"attributes":{"dimension":1,"ticker":{"id":"20697","type":"BasicTicker"}},"id":"20700","type":"Grid"},{"attributes":{},"id":"20709","type":"BasicTickFormatter"},{"attributes":{"grid_line_color":null,"ticker":{"id":"20693","type":"CategoricalTicker"}},"id":"20695","type":"Grid"},{"attributes":{"formatter":{"id":"20711","type":"CategoricalTickFormatter"},"ticker":{"id":"20693","type":"CategoricalTicker"}},"id":"20692","type":"CategoricalAxis"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"20715","type":"Dodge"}}},"id":"20717","type":"VBar"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"20733","type":"GlyphRenderer"}]},"id":"20742","type":"LegendItem"},{"attributes":{},"id":"20697","type":"BasicTicker"},{"attributes":{},"id":"20726","type":"Selection"},{"attributes":{"source":{"id":"20680","type":"ColumnDataSource"}},"id":"20734","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"20729","type":"Dodge"}}},"id":"20732","type":"VBar"},{"attributes":{"source":{"id":"20680","type":"ColumnDataSource"}},"id":"20707","type":"CDSView"},{"attributes":{"data_source":{"id":"20680","type":"ColumnDataSource"},"glyph":{"id":"20704","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20705","type":"VBar"},"selection_glyph":null,"view":{"id":"20707","type":"CDSView"}},"id":"20706","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"20680","type":"ColumnDataSource"},"glyph":{"id":"20731","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20732","type":"VBar"},"selection_glyph":null,"view":{"id":"20734","type":"CDSView"}},"id":"20733","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"20706","type":"GlyphRenderer"}]},"id":"20714","type":"LegendItem"},{"attributes":{},"id":"20688","type":"CategoricalScale"},{"attributes":{"range":{"id":"20684","type":"FactorRange"}},"id":"20715","type":"Dodge"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"20729","type":"Dodge"}}},"id":"20731","type":"VBar"},{"attributes":{"range":{"id":"20684","type":"FactorRange"},"value":0.25},"id":"20729","type":"Dodge"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20726","type":"Selection"},"selection_policy":{"id":"20727","type":"UnionRenderers"}},"id":"20680","type":"ColumnDataSource"},{"attributes":{"text":"Fruit Counts by Year"},"id":"20682","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"20701","type":"Toolbar"},{"attributes":{"data_source":{"id":"20680","type":"ColumnDataSource"},"glyph":{"id":"20717","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20718","type":"VBar"},"selection_glyph":null,"view":{"id":"20720","type":"CDSView"}},"id":"20719","type":"GlyphRenderer"},{"attributes":{},"id":"20693","type":"CategoricalTicker"},{"attributes":{},"id":"20690","type":"LinearScale"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"20719","type":"GlyphRenderer"}]},"id":"20728","type":"LegendItem"},{"attributes":{"callback":null,"end":10},"id":"20686","type":"Range1d"},{"attributes":{"range":{"id":"20684","type":"FactorRange"},"value":-0.25},"id":"20702","type":"Dodge"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"20702","type":"Dodge"}}},"id":"20705","type":"VBar"},{"attributes":{"formatter":{"id":"20709","type":"BasicTickFormatter"},"ticker":{"id":"20697","type":"BasicTicker"}},"id":"20696","type":"LinearAxis"},{"attributes":{"below":[{"id":"20692","type":"CategoricalAxis"}],"center":[{"id":"20695","type":"Grid"},{"id":"20700","type":"Grid"},{"id":"20713","type":"Legend"}],"left":[{"id":"20696","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"20706","type":"GlyphRenderer"},{"id":"20719","type":"GlyphRenderer"},{"id":"20733","type":"GlyphRenderer"}],"title":{"id":"20682","type":"Title"},"toolbar":{"id":"20701","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20684","type":"FactorRange"},"x_scale":{"id":"20688","type":"CategoricalScale"},"y_range":{"id":"20686","type":"Range1d"},"y_scale":{"id":"20690","type":"LinearScale"}},"id":"20681","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20711","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"20680","type":"ColumnDataSource"}},"id":"20720","type":"CDSView"}],"root_ids":["20681"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"6894341f-9f27-488d-ab2e-e24950780539","roots":{"20681":"33495ac3-2327-4ff4-a659-90c65254294a"}}];
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