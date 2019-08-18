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
      };var element = document.getElementById("a0e83573-f282-49ae-8cfb-084624d41e1e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a0e83573-f282-49ae-8cfb-084624d41e1e' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
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
                    
                  var docs_json = '{"ee5a112a-4845-4391-89f9-c10e73d56ee0":{"roots":{"references":[{"attributes":{},"id":"19899","type":"BasicTickFormatter"},{"attributes":{},"id":"19903","type":"Selection"},{"attributes":{"grid_line_color":null,"ticker":{"id":"19884","type":"CategoricalTicker"}},"id":"19886","type":"Grid"},{"attributes":{},"id":"19904","type":"UnionRenderers"},{"attributes":{},"id":"19901","type":"CategoricalTickFormatter"},{"attributes":{},"id":"19881","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"19894","type":"VBar"},{"attributes":{"text":"Fruit Counts"},"id":"19873","type":"Title"},{"attributes":{"source":{"id":"19893","type":"ColumnDataSource"}},"id":"19897","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"19895","type":"VBar"},{"attributes":{"below":[{"id":"19883","type":"CategoricalAxis"}],"center":[{"id":"19886","type":"Grid"},{"id":"19891","type":"Grid"}],"left":[{"id":"19887","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"19896","type":"GlyphRenderer"}],"title":{"id":"19873","type":"Title"},"toolbar":{"id":"19892","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19875","type":"FactorRange"},"x_scale":{"id":"19879","type":"CategoricalScale"},"y_range":{"id":"19877","type":"DataRange1d"},"y_scale":{"id":"19881","type":"LinearScale"}},"id":"19872","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"19893","type":"ColumnDataSource"},"glyph":{"id":"19894","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19895","type":"VBar"},"selection_glyph":null,"view":{"id":"19897","type":"CDSView"}},"id":"19896","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Plums","Pears","Nectarines","Grapes","Apples","Strawberries"]},"id":"19875","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"19892","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"19888","type":"BasicTicker"}},"id":"19891","type":"Grid"},{"attributes":{},"id":"19879","type":"CategoricalScale"},{"attributes":{},"id":"19884","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"19899","type":"BasicTickFormatter"},"ticker":{"id":"19888","type":"BasicTicker"}},"id":"19887","type":"LinearAxis"},{"attributes":{},"id":"19888","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19903","type":"Selection"},"selection_policy":{"id":"19904","type":"UnionRenderers"}},"id":"19893","type":"ColumnDataSource"},{"attributes":{"callback":null,"start":0},"id":"19877","type":"DataRange1d"},{"attributes":{"formatter":{"id":"19901","type":"CategoricalTickFormatter"},"ticker":{"id":"19884","type":"CategoricalTicker"}},"id":"19883","type":"CategoricalAxis"}],"root_ids":["19872"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"ee5a112a-4845-4391-89f9-c10e73d56ee0","roots":{"19872":"a0e83573-f282-49ae-8cfb-084624d41e1e"}}];
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