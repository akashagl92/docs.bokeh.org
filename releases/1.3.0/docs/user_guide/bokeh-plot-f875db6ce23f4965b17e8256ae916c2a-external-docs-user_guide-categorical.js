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
      };var element = document.getElementById("e7d24775-f38e-4395-8a61-1302cd5b4992");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e7d24775-f38e-4395-8a61-1302cd5b4992' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"06a04b1e-47d4-4929-a04d-97e5958d77d3":{"roots":{"references":[{"attributes":{"text":"Fruit Counts by Year"},"id":"20681","type":"Title"},{"attributes":{},"id":"20692","type":"CategoricalTicker"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"20732","type":"GlyphRenderer"}]},"id":"20741","type":"LegendItem"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"20705","type":"GlyphRenderer"}]},"id":"20713","type":"LegendItem"},{"attributes":{},"id":"20689","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"20728","type":"Dodge"}}},"id":"20731","type":"VBar"},{"attributes":{},"id":"20726","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"20696","type":"BasicTicker"}},"id":"20699","type":"Grid"},{"attributes":{"formatter":{"id":"20709","type":"CategoricalTickFormatter"},"ticker":{"id":"20692","type":"CategoricalTicker"}},"id":"20691","type":"CategoricalAxis"},{"attributes":{"source":{"id":"20679","type":"ColumnDataSource"}},"id":"20719","type":"CDSView"},{"attributes":{"data_source":{"id":"20679","type":"ColumnDataSource"},"glyph":{"id":"20716","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20717","type":"VBar"},"selection_glyph":null,"view":{"id":"20719","type":"CDSView"}},"id":"20718","type":"GlyphRenderer"},{"attributes":{"source":{"id":"20679","type":"ColumnDataSource"}},"id":"20733","type":"CDSView"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"20728","type":"Dodge"}}},"id":"20730","type":"VBar"},{"attributes":{"range":{"id":"20683","type":"FactorRange"}},"id":"20714","type":"Dodge"},{"attributes":{"grid_line_color":null,"ticker":{"id":"20692","type":"CategoricalTicker"}},"id":"20694","type":"Grid"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"20683","type":"FactorRange"},{"attributes":{"data_source":{"id":"20679","type":"ColumnDataSource"},"glyph":{"id":"20730","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20731","type":"VBar"},"selection_glyph":null,"view":{"id":"20733","type":"CDSView"}},"id":"20732","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"20726","type":"Selection"},"selection_policy":{"id":"20725","type":"UnionRenderers"}},"id":"20679","type":"ColumnDataSource"},{"attributes":{},"id":"20696","type":"BasicTicker"},{"attributes":{},"id":"20725","type":"UnionRenderers"},{"attributes":{},"id":"20709","type":"CategoricalTickFormatter"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"20714","type":"Dodge"}}},"id":"20716","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"20714","type":"Dodge"}}},"id":"20717","type":"VBar"},{"attributes":{},"id":"20687","type":"CategoricalScale"},{"attributes":{"range":{"id":"20683","type":"FactorRange"},"value":0.25},"id":"20728","type":"Dodge"},{"attributes":{"below":[{"id":"20691","type":"CategoricalAxis"}],"center":[{"id":"20694","type":"Grid"},{"id":"20699","type":"Grid"},{"id":"20712","type":"Legend"}],"left":[{"id":"20695","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"20705","type":"GlyphRenderer"},{"id":"20718","type":"GlyphRenderer"},{"id":"20732","type":"GlyphRenderer"}],"title":{"id":"20681","type":"Title"},"toolbar":{"id":"20700","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20683","type":"FactorRange"},"x_scale":{"id":"20687","type":"CategoricalScale"},"y_range":{"id":"20685","type":"Range1d"},"y_scale":{"id":"20689","type":"LinearScale"}},"id":"20680","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":10},"id":"20685","type":"Range1d"},{"attributes":{"formatter":{"id":"20711","type":"BasicTickFormatter"},"ticker":{"id":"20696","type":"BasicTicker"}},"id":"20695","type":"LinearAxis"},{"attributes":{"source":{"id":"20679","type":"ColumnDataSource"}},"id":"20706","type":"CDSView"},{"attributes":{"range":{"id":"20683","type":"FactorRange"},"value":-0.25},"id":"20701","type":"Dodge"},{"attributes":{},"id":"20711","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"20701","type":"Dodge"}}},"id":"20703","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"20700","type":"Toolbar"},{"attributes":{"items":[{"id":"20713","type":"LegendItem"},{"id":"20727","type":"LegendItem"},{"id":"20741","type":"LegendItem"}],"location":"top_left","orientation":"horizontal"},"id":"20712","type":"Legend"},{"attributes":{"data_source":{"id":"20679","type":"ColumnDataSource"},"glyph":{"id":"20703","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20704","type":"VBar"},"selection_glyph":null,"view":{"id":"20706","type":"CDSView"}},"id":"20705","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"20718","type":"GlyphRenderer"}]},"id":"20727","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"20701","type":"Dodge"}}},"id":"20704","type":"VBar"}],"root_ids":["20680"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"06a04b1e-47d4-4929-a04d-97e5958d77d3","roots":{"20680":"e7d24775-f38e-4395-8a61-1302cd5b4992"}}];
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