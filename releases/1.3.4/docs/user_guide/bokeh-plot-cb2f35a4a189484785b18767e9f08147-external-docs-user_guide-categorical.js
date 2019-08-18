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
      };var element = document.getElementById("db3e74c6-8d52-474f-9108-67aa7a04891b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'db3e74c6-8d52-474f-9108-67aa7a04891b' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.4.min.js"];
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
                    
                  var docs_json = '{"4d256da2-271f-4032-9c7e-5e57d2305321":{"roots":{"references":[{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"19959","type":"FactorRange"},{"attributes":{"below":[{"id":"19967","type":"CategoricalAxis"}],"center":[{"id":"19970","type":"Grid"},{"id":"19975","type":"Grid"},{"id":"19987","type":"Legend"}],"left":[{"id":"19971","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"19980","type":"GlyphRenderer"}],"title":{"id":"19957","type":"Title"},"toolbar":{"id":"19976","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19959","type":"FactorRange"},"x_scale":{"id":"19963","type":"CategoricalScale"},"y_range":{"id":"19961","type":"Range1d"},"y_scale":{"id":"19965","type":"LinearScale"}},"id":"19956","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"ticker":{"id":"19972","type":"BasicTicker"}},"id":"19975","type":"Grid"},{"attributes":{"text":"Fruit Counts"},"id":"19957","type":"Title"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19978","type":"VBar"},{"attributes":{"formatter":{"id":"19986","type":"CategoricalTickFormatter"},"ticker":{"id":"19968","type":"CategoricalTicker"}},"id":"19967","type":"CategoricalAxis"},{"attributes":{},"id":"19984","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":9},"id":"19961","type":"Range1d"},{"attributes":{},"id":"19972","type":"BasicTicker"},{"attributes":{},"id":"19963","type":"CategoricalScale"},{"attributes":{"grid_line_color":null,"ticker":{"id":"19968","type":"CategoricalTicker"}},"id":"19970","type":"Grid"},{"attributes":{},"id":"19994","type":"Selection"},{"attributes":{},"id":"19986","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"19976","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"fruits"}},"id":"19979","type":"VBar"},{"attributes":{},"id":"19968","type":"CategoricalTicker"},{"attributes":{"callback":null,"data":{"color":["#3288bd","#99d594","#e6f598","#fee08b","#fc8d59","#d53e4f"],"counts":[5,3,4,2,4,6],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19994","type":"Selection"},"selection_policy":{"id":"19995","type":"UnionRenderers"}},"id":"19955","type":"ColumnDataSource"},{"attributes":{},"id":"19965","type":"LinearScale"},{"attributes":{"data_source":{"id":"19955","type":"ColumnDataSource"},"glyph":{"id":"19978","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19979","type":"VBar"},"selection_glyph":null,"view":{"id":"19981","type":"CDSView"}},"id":"19980","type":"GlyphRenderer"},{"attributes":{},"id":"19995","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"19984","type":"BasicTickFormatter"},"ticker":{"id":"19972","type":"BasicTicker"}},"id":"19971","type":"LinearAxis"},{"attributes":{"items":[{"id":"19988","type":"LegendItem"}],"location":"top_center","orientation":"horizontal"},"id":"19987","type":"Legend"},{"attributes":{"source":{"id":"19955","type":"ColumnDataSource"}},"id":"19981","type":"CDSView"},{"attributes":{"label":{"field":"fruits"},"renderers":[{"id":"19980","type":"GlyphRenderer"}]},"id":"19988","type":"LegendItem"}],"root_ids":["19956"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"4d256da2-271f-4032-9c7e-5e57d2305321","roots":{"19956":"db3e74c6-8d52-474f-9108-67aa7a04891b"}}];
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
        function(Bokeh) {
        
        
        }
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