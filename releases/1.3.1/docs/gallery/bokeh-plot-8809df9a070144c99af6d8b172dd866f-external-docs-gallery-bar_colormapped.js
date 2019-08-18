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
      };var element = document.getElementById("5b65ee93-e521-490f-816e-1e80c41beb48");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5b65ee93-e521-490f-816e-1e80c41beb48' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js"];
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
                    
                  var docs_json = '{"f41e5ede-13b0-4650-b9ba-c73a10933a97":{"roots":{"references":[{"attributes":{"callback":null,"data":{"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"1466","type":"Selection"},"selection_policy":{"id":"1467","type":"UnionRenderers"}},"id":"1412","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"1424","type":"CategoricalAxis"}],"center":[{"id":"1427","type":"Grid"},{"id":"1432","type":"Grid"},{"id":"1458","type":"Legend"}],"left":[{"id":"1428","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"1450","type":"GlyphRenderer"}],"title":{"id":"1414","type":"Title"},"toolbar":{"id":"1439","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1416","type":"FactorRange"},"x_scale":{"id":"1420","type":"CategoricalScale"},"y_range":{"id":"1418","type":"DataRange1d"},"y_scale":{"id":"1422","type":"LinearScale"}},"id":"1413","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1453","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"1457","type":"BoxAnnotation"}},"id":"1435","type":"BoxZoomTool"},{"attributes":{},"id":"1438","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"1449","type":"VBar"},{"attributes":{},"id":"1422","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1433","type":"PanTool"},{"id":"1434","type":"WheelZoomTool"},{"id":"1435","type":"BoxZoomTool"},{"id":"1436","type":"SaveTool"},{"id":"1437","type":"ResetTool"},{"id":"1438","type":"HelpTool"}]},"id":"1439","type":"Toolbar"},{"attributes":{},"id":"1425","type":"CategoricalTicker"},{"attributes":{},"id":"1434","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"1453","type":"BasicTickFormatter"},"ticker":{"id":"1429","type":"BasicTicker"}},"id":"1428","type":"LinearAxis"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"1450","type":"GlyphRenderer"}]},"id":"1459","type":"LegendItem"},{"attributes":{"fill_color":{"field":"fruits","transform":{"id":"1446","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"1448","type":"VBar"},{"attributes":{"callback":null,"end":9,"start":0},"id":"1418","type":"DataRange1d"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"1416","type":"FactorRange"},{"attributes":{"formatter":{"id":"1455","type":"CategoricalTickFormatter"},"ticker":{"id":"1425","type":"CategoricalTicker"}},"id":"1424","type":"CategoricalAxis"},{"attributes":{},"id":"1420","type":"CategoricalScale"},{"attributes":{},"id":"1437","type":"ResetTool"},{"attributes":{"data_source":{"id":"1412","type":"ColumnDataSource"},"glyph":{"id":"1448","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1449","type":"VBar"},"selection_glyph":null,"view":{"id":"1451","type":"CDSView"}},"id":"1450","type":"GlyphRenderer"},{"attributes":{"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"palette":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"]},"id":"1446","type":"CategoricalColorMapper"},{"attributes":{"grid_line_color":null,"ticker":{"id":"1425","type":"CategoricalTicker"}},"id":"1427","type":"Grid"},{"attributes":{},"id":"1467","type":"UnionRenderers"},{"attributes":{"items":[{"id":"1459","type":"LegendItem"}],"location":"top_center","orientation":"horizontal"},"id":"1458","type":"Legend"},{"attributes":{"source":{"id":"1412","type":"ColumnDataSource"}},"id":"1451","type":"CDSView"},{"attributes":{},"id":"1466","type":"Selection"},{"attributes":{},"id":"1433","type":"PanTool"},{"attributes":{},"id":"1455","type":"CategoricalTickFormatter"},{"attributes":{},"id":"1436","type":"SaveTool"},{"attributes":{},"id":"1429","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"1429","type":"BasicTicker"}},"id":"1432","type":"Grid"},{"attributes":{"text":"Fruit Counts"},"id":"1414","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1457","type":"BoxAnnotation"}],"root_ids":["1413"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"f41e5ede-13b0-4650-b9ba-c73a10933a97","roots":{"1413":"5b65ee93-e521-490f-816e-1e80c41beb48"}}];
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