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
      };var element = document.getElementById("4d21c3cd-189d-4678-80f7-3657dadcfedc");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '4d21c3cd-189d-4678-80f7-3657dadcfedc' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js"];
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
                    
                  var docs_json = '{"9e92423e-456a-4312-ba26-3fa3dcc48ece":{"roots":{"references":[{"attributes":{},"id":"1529","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1501","type":"ColumnDataSource"},"glyph":{"id":"1524","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1525","type":"VBar"},"selection_glyph":null,"view":{"id":"1527","type":"CDSView"}},"id":"1526","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1522","type":"Toolbar"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"1524","type":"VBar"},{"attributes":{},"id":"1518","type":"BasicTicker"},{"attributes":{"below":[{"id":"1513","type":"CategoricalAxis"}],"center":[{"id":"1516","type":"Grid"},{"id":"1521","type":"Grid"},{"id":"1533","type":"Legend"}],"left":[{"id":"1517","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"1526","type":"GlyphRenderer"}],"title":{"id":"1503","type":"Title"},"toolbar":{"id":"1522","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1505","type":"FactorRange"},"x_scale":{"id":"1509","type":"CategoricalScale"},"y_range":{"id":"1507","type":"Range1d"},"y_scale":{"id":"1511","type":"LinearScale"}},"id":"1502","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"1526","type":"GlyphRenderer"}]},"id":"1534","type":"LegendItem"},{"attributes":{},"id":"1509","type":"CategoricalScale"},{"attributes":{},"id":"1541","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"1540","type":"Selection"},"selection_policy":{"id":"1541","type":"UnionRenderers"}},"id":"1501","type":"ColumnDataSource"},{"attributes":{},"id":"1531","type":"CategoricalTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"1518","type":"BasicTicker"}},"id":"1521","type":"Grid"},{"attributes":{"callback":null,"end":9},"id":"1507","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"1525","type":"VBar"},{"attributes":{},"id":"1511","type":"LinearScale"},{"attributes":{"formatter":{"id":"1529","type":"BasicTickFormatter"},"ticker":{"id":"1518","type":"BasicTicker"}},"id":"1517","type":"LinearAxis"},{"attributes":{"items":[{"id":"1534","type":"LegendItem"}],"location":"top_center","orientation":"horizontal"},"id":"1533","type":"Legend"},{"attributes":{},"id":"1514","type":"CategoricalTicker"},{"attributes":{"source":{"id":"1501","type":"ColumnDataSource"}},"id":"1527","type":"CDSView"},{"attributes":{"grid_line_color":null,"ticker":{"id":"1514","type":"CategoricalTicker"}},"id":"1516","type":"Grid"},{"attributes":{},"id":"1540","type":"Selection"},{"attributes":{"text":"Fruit Counts"},"id":"1503","type":"Title"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"1505","type":"FactorRange"},{"attributes":{"formatter":{"id":"1531","type":"CategoricalTickFormatter"},"ticker":{"id":"1514","type":"CategoricalTicker"}},"id":"1513","type":"CategoricalAxis"}],"root_ids":["1502"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"9e92423e-456a-4312-ba26-3fa3dcc48ece","roots":{"1502":"4d21c3cd-189d-4678-80f7-3657dadcfedc"}}];
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