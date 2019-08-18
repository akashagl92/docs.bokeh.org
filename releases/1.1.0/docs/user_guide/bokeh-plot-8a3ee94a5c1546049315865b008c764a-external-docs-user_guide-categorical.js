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
      };var element = document.getElementById("f8c83287-00f2-44b4-aa30-b75d0fe58ca5");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f8c83287-00f2-44b4-aa30-b75d0fe58ca5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5f6079b1-5f4e-4531-9ecf-b977b7add20f":{"roots":{"references":[{"attributes":{"text":"Fruit Counts by Year"},"id":"19458","type":"Title"},{"attributes":{"formatter":{"id":"19487","type":"CategoricalTickFormatter"},"ticker":{"id":"19469","type":"CategoricalTicker"}},"id":"19468","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"19456","type":"ColumnDataSource"},"glyph":{"id":"19493","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19494","type":"VBar"},"selection_glyph":null,"view":{"id":"19496","type":"CDSView"}},"id":"19495","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2016"},"renderers":[{"id":"19495","type":"GlyphRenderer"}]},"id":"19504","type":"LegendItem"},{"attributes":{},"id":"19473","type":"BasicTicker"},{"attributes":{"data_source":{"id":"19456","type":"ColumnDataSource"},"glyph":{"id":"19507","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19508","type":"VBar"},"selection_glyph":null,"view":{"id":"19510","type":"CDSView"}},"id":"19509","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2015"},"renderers":[{"id":"19482","type":"GlyphRenderer"}]},"id":"19490","type":"LegendItem"},{"attributes":{"range":{"id":"19460","type":"FactorRange"},"value":0.25},"id":"19505","type":"Dodge"},{"attributes":{"below":[{"id":"19468","type":"CategoricalAxis"}],"center":[{"id":"19471","type":"Grid"},{"id":"19476","type":"Grid"},{"id":"19489","type":"Legend"}],"left":[{"id":"19472","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"19482","type":"GlyphRenderer"},{"id":"19495","type":"GlyphRenderer"},{"id":"19509","type":"GlyphRenderer"}],"title":{"id":"19458","type":"Title"},"toolbar":{"id":"19477","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19460","type":"FactorRange"},"x_scale":{"id":"19464","type":"CategoricalScale"},"y_range":{"id":"19462","type":"Range1d"},"y_scale":{"id":"19466","type":"LinearScale"}},"id":"19457","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19486","type":"BasicTickFormatter"},{"attributes":{},"id":"19503","type":"Selection"},{"attributes":{"label":{"value":"2017"},"renderers":[{"id":"19509","type":"GlyphRenderer"}]},"id":"19518","type":"LegendItem"},{"attributes":{"range":{"id":"19460","type":"FactorRange"},"value":-0.25},"id":"19478","type":"Dodge"},{"attributes":{"fill_color":{"value":"#e84d60"},"line_color":{"value":"#e84d60"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"19505","type":"Dodge"}}},"id":"19507","type":"VBar"},{"attributes":{"formatter":{"id":"19486","type":"BasicTickFormatter"},"ticker":{"id":"19473","type":"BasicTicker"}},"id":"19472","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"19477","type":"Toolbar"},{"attributes":{"callback":null,"end":10},"id":"19462","type":"Range1d"},{"attributes":{"grid_line_color":{"value":null},"ticker":{"id":"19469","type":"CategoricalTicker"}},"id":"19471","type":"Grid"},{"attributes":{"source":{"id":"19456","type":"ColumnDataSource"}},"id":"19510","type":"CDSView"},{"attributes":{},"id":"19502","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"19473","type":"BasicTicker"}},"id":"19476","type":"Grid"},{"attributes":{"source":{"id":"19456","type":"ColumnDataSource"}},"id":"19483","type":"CDSView"},{"attributes":{},"id":"19464","type":"CategoricalScale"},{"attributes":{"source":{"id":"19456","type":"ColumnDataSource"}},"id":"19496","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"19478","type":"Dodge"}}},"id":"19481","type":"VBar"},{"attributes":{},"id":"19466","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#c9d9d3"},"line_color":{"value":"#c9d9d3"},"top":{"field":"2015"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"19478","type":"Dodge"}}},"id":"19480","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2017"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"19505","type":"Dodge"}}},"id":"19508","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"19491","type":"Dodge"}}},"id":"19494","type":"VBar"},{"attributes":{"data_source":{"id":"19456","type":"ColumnDataSource"},"glyph":{"id":"19480","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19481","type":"VBar"},"selection_glyph":null,"view":{"id":"19483","type":"CDSView"}},"id":"19482","type":"GlyphRenderer"},{"attributes":{"range":{"id":"19460","type":"FactorRange"}},"id":"19491","type":"Dodge"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,3,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19503","type":"Selection"},"selection_policy":{"id":"19502","type":"UnionRenderers"}},"id":"19456","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#718dbf"},"line_color":{"value":"#718dbf"},"top":{"field":"2016"},"width":{"value":0.2},"x":{"field":"fruits","transform":{"id":"19491","type":"Dodge"}}},"id":"19493","type":"VBar"},{"attributes":{"items":[{"id":"19490","type":"LegendItem"},{"id":"19504","type":"LegendItem"},{"id":"19518","type":"LegendItem"}],"location":"top_left","orientation":"horizontal"},"id":"19489","type":"Legend"},{"attributes":{},"id":"19469","type":"CategoricalTicker"},{"attributes":{},"id":"19487","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"19460","type":"FactorRange"}],"root_ids":["19457"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"5f6079b1-5f4e-4531-9ecf-b977b7add20f","roots":{"19457":"f8c83287-00f2-44b4-aa30-b75d0fe58ca5"}}];
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