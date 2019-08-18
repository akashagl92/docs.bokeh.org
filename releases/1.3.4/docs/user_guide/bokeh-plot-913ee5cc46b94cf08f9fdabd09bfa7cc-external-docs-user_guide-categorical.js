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
      };var element = document.getElementById("8e0c4d7a-bfa5-4891-9103-b0ab6bb34252");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8e0c4d7a-bfa5-4891-9103-b0ab6bb34252' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"241fe51a-4ee4-413f-b2fd-d44cccfb52a6":{"roots":{"references":[{"attributes":{"dimension":1,"ticker":{"id":"21336","type":"BasicTicker"}},"id":"21339","type":"Grid"},{"attributes":{"grid_line_color":null,"ticker":{"id":"21332","type":"CategoricalTicker"}},"id":"21334","type":"Grid"},{"attributes":{"formatter":{"id":"21348","type":"BasicTickFormatter"},"ticker":{"id":"21336","type":"BasicTicker"}},"id":"21335","type":"LinearAxis"},{"attributes":{"formatter":{"id":"21350","type":"CategoricalTickFormatter"},"ticker":{"id":"21332","type":"CategoricalTicker"}},"id":"21331","type":"CategoricalAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"21342","type":"VBar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"21340","type":"Toolbar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"21323","type":"FactorRange"},{"attributes":{"source":{"id":"21341","type":"ColumnDataSource"}},"id":"21345","type":"CDSView"},{"attributes":{},"id":"21348","type":"BasicTickFormatter"},{"attributes":{},"id":"21329","type":"LinearScale"},{"attributes":{},"id":"21332","type":"CategoricalTicker"},{"attributes":{},"id":"21351","type":"Selection"},{"attributes":{"callback":null,"start":0},"id":"21325","type":"DataRange1d"},{"attributes":{},"id":"21327","type":"CategoricalScale"},{"attributes":{},"id":"21352","type":"UnionRenderers"},{"attributes":{},"id":"21336","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"21343","type":"VBar"},{"attributes":{"data_source":{"id":"21341","type":"ColumnDataSource"},"glyph":{"id":"21342","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21343","type":"VBar"},"selection_glyph":null,"view":{"id":"21345","type":"CDSView"}},"id":"21344","type":"GlyphRenderer"},{"attributes":{"text":"Fruit Counts"},"id":"21321","type":"Title"},{"attributes":{"callback":null,"data":{"top":[5,3,4,2,4,6],"x":[["Apples",-0.5],["Pears",-0.2],["Nectarines",0.0],["Plums",0.3],["Grapes",0.1],["Strawberries",0.3]]},"selected":{"id":"21351","type":"Selection"},"selection_policy":{"id":"21352","type":"UnionRenderers"}},"id":"21341","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"21331","type":"CategoricalAxis"}],"center":[{"id":"21334","type":"Grid"},{"id":"21339","type":"Grid"}],"left":[{"id":"21335","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"21344","type":"GlyphRenderer"}],"title":{"id":"21321","type":"Title"},"toolbar":{"id":"21340","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"21323","type":"FactorRange"},"x_scale":{"id":"21327","type":"CategoricalScale"},"y_range":{"id":"21325","type":"DataRange1d"},"y_scale":{"id":"21329","type":"LinearScale"}},"id":"21320","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21350","type":"CategoricalTickFormatter"}],"root_ids":["21320"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"241fe51a-4ee4-413f-b2fd-d44cccfb52a6","roots":{"21320":"8e0c4d7a-bfa5-4891-9103-b0ab6bb34252"}}];
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