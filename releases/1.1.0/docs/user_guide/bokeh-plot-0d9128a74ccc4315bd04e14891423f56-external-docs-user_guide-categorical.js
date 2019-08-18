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
      };var element = document.getElementById("451cfef3-35d6-4350-8ef2-7499b4333c4c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '451cfef3-35d6-4350-8ef2-7499b4333c4c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a63e3301-657d-4624-9e01-5c94659fd98d":{"roots":{"references":[{"attributes":{"formatter":{"id":"19075","type":"CategoricalTickFormatter"},"ticker":{"id":"19058","type":"CategoricalTicker"}},"id":"19057","type":"CategoricalAxis"},{"attributes":{},"id":"19074","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"19069","type":"VBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"19049","type":"FactorRange"},{"attributes":{"data_source":{"id":"19067","type":"ColumnDataSource"},"glyph":{"id":"19068","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19069","type":"VBar"},"selection_glyph":null,"view":{"id":"19071","type":"CDSView"}},"id":"19070","type":"GlyphRenderer"},{"attributes":{"callback":null,"start":0},"id":"19051","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"19062","type":"BasicTicker"}},"id":"19065","type":"Grid"},{"attributes":{"callback":null,"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19078","type":"Selection"},"selection_policy":{"id":"19077","type":"UnionRenderers"}},"id":"19067","type":"ColumnDataSource"},{"attributes":{},"id":"19077","type":"UnionRenderers"},{"attributes":{"below":[{"id":"19057","type":"CategoricalAxis"}],"center":[{"id":"19060","type":"Grid"},{"id":"19065","type":"Grid"}],"left":[{"id":"19061","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"19070","type":"GlyphRenderer"}],"title":{"id":"19047","type":"Title"},"toolbar":{"id":"19066","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19049","type":"FactorRange"},"x_scale":{"id":"19053","type":"CategoricalScale"},"y_range":{"id":"19051","type":"DataRange1d"},"y_scale":{"id":"19055","type":"LinearScale"}},"id":"19046","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"19067","type":"ColumnDataSource"}},"id":"19071","type":"CDSView"},{"attributes":{},"id":"19053","type":"CategoricalScale"},{"attributes":{},"id":"19055","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"19066","type":"Toolbar"},{"attributes":{},"id":"19062","type":"BasicTicker"},{"attributes":{"formatter":{"id":"19074","type":"BasicTickFormatter"},"ticker":{"id":"19062","type":"BasicTicker"}},"id":"19061","type":"LinearAxis"},{"attributes":{},"id":"19075","type":"CategoricalTickFormatter"},{"attributes":{},"id":"19058","type":"CategoricalTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"19068","type":"VBar"},{"attributes":{"grid_line_color":{"value":null},"ticker":{"id":"19058","type":"CategoricalTicker"}},"id":"19060","type":"Grid"},{"attributes":{},"id":"19078","type":"Selection"},{"attributes":{"text":"Fruit Counts"},"id":"19047","type":"Title"}],"root_ids":["19046"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"a63e3301-657d-4624-9e01-5c94659fd98d","roots":{"19046":"451cfef3-35d6-4350-8ef2-7499b4333c4c"}}];
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