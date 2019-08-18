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
      };var element = document.getElementById("aeefa925-3cbf-4a55-83d8-70c4b31f989d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'aeefa925-3cbf-4a55-83d8-70c4b31f989d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"493ead4a-ccc4-427d-9a2c-1e1fb1d1d20a":{"roots":{"references":[{"attributes":{},"id":"19405","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"19423","type":"CategoricalTickFormatter"},"major_label_orientation":1,"ticker":{"id":"19405","type":"CategoricalTicker"}},"id":"19404","type":"CategoricalAxis"},{"attributes":{"source":{"id":"19392","type":"ColumnDataSource"}},"id":"19419","type":"CDSView"},{"attributes":{"formatter":{"id":"19422","type":"BasicTickFormatter"},"ticker":{"id":"19409","type":"BasicTicker"}},"id":"19408","type":"LinearAxis"},{"attributes":{"below":[{"id":"19404","type":"CategoricalAxis"}],"center":[{"id":"19407","type":"Grid"},{"id":"19412","type":"Grid"}],"left":[{"id":"19408","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"19418","type":"GlyphRenderer"}],"title":{"id":"19395","type":"Title"},"toolbar":{"id":"19413","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19393","type":"FactorRange"},"x_scale":{"id":"19400","type":"CategoricalScale"},"y_range":{"id":"19398","type":"DataRange1d"},"y_scale":{"id":"19402","type":"LinearScale"}},"id":"19394","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"ticker":{"id":"19409","type":"BasicTicker"}},"id":"19412","type":"Grid"},{"attributes":{},"id":"19422","type":"BasicTickFormatter"},{"attributes":{},"id":"19423","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]},"selected":{"id":"19426","type":"Selection"},"selection_policy":{"id":"19425","type":"UnionRenderers"}},"id":"19392","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"19392","type":"ColumnDataSource"},"glyph":{"id":"19416","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19417","type":"VBar"},"selection_glyph":null,"view":{"id":"19419","type":"CDSView"}},"id":"19418","type":"GlyphRenderer"},{"attributes":{"text":"Fruit Counts by Year"},"id":"19395","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"19413","type":"Toolbar"},{"attributes":{"end":2,"factors":["2015","2016","2017"],"palette":["#c9d9d3","#718dbf","#e84d60"],"start":1},"id":"19414","type":"CategoricalColorMapper"},{"attributes":{"grid_line_color":{"value":null},"ticker":{"id":"19405","type":"CategoricalTicker"}},"id":"19407","type":"Grid"},{"attributes":{},"id":"19402","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"19417","type":"VBar"},{"attributes":{},"id":"19409","type":"BasicTicker"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"19393","type":"FactorRange"},{"attributes":{},"id":"19426","type":"Selection"},{"attributes":{"fill_color":{"field":"x","transform":{"id":"19414","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"19416","type":"VBar"},{"attributes":{},"id":"19400","type":"CategoricalScale"},{"attributes":{"callback":null,"start":0},"id":"19398","type":"DataRange1d"},{"attributes":{},"id":"19425","type":"UnionRenderers"}],"root_ids":["19394"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"493ead4a-ccc4-427d-9a2c-1e1fb1d1d20a","roots":{"19394":"aeefa925-3cbf-4a55-83d8-70c4b31f989d"}}];
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