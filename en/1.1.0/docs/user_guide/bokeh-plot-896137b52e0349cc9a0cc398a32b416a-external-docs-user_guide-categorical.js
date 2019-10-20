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
      };var element = document.getElementById("76fcb4a7-f293-4e21-8df9-dd683ce04095");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '76fcb4a7-f293-4e21-8df9-dd683ce04095' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0e5fd1e8-4436-4c9d-8647-4b7c0aa93acb":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"19131","type":"VBar"},{"attributes":{"grid_line_color":{"value":null},"ticker":{"id":"19120","type":"CategoricalTicker"}},"id":"19122","type":"Grid"},{"attributes":{"data_source":{"id":"19129","type":"ColumnDataSource"},"glyph":{"id":"19130","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19131","type":"VBar"},"selection_glyph":null,"view":{"id":"19133","type":"CDSView"}},"id":"19132","type":"GlyphRenderer"},{"attributes":{},"id":"19136","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"19136","type":"BasicTickFormatter"},"ticker":{"id":"19124","type":"BasicTicker"}},"id":"19123","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"19128","type":"Toolbar"},{"attributes":{"below":[{"id":"19119","type":"CategoricalAxis"}],"center":[{"id":"19122","type":"Grid"},{"id":"19127","type":"Grid"}],"left":[{"id":"19123","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"19132","type":"GlyphRenderer"}],"title":{"id":"19109","type":"Title"},"toolbar":{"id":"19128","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19111","type":"FactorRange"},"x_scale":{"id":"19115","type":"CategoricalScale"},"y_range":{"id":"19113","type":"DataRange1d"},"y_scale":{"id":"19117","type":"LinearScale"}},"id":"19108","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19120","type":"CategoricalTicker"},{"attributes":{"text":"Fruit Counts"},"id":"19109","type":"Title"},{"attributes":{},"id":"19115","type":"CategoricalScale"},{"attributes":{},"id":"19124","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"19124","type":"BasicTicker"}},"id":"19127","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"19130","type":"VBar"},{"attributes":{},"id":"19139","type":"UnionRenderers"},{"attributes":{"callback":null,"start":0},"id":"19113","type":"DataRange1d"},{"attributes":{"callback":null,"factors":["Plums","Pears","Nectarines","Grapes","Apples","Strawberries"]},"id":"19111","type":"FactorRange"},{"attributes":{},"id":"19117","type":"LinearScale"},{"attributes":{"formatter":{"id":"19137","type":"CategoricalTickFormatter"},"ticker":{"id":"19120","type":"CategoricalTicker"}},"id":"19119","type":"CategoricalAxis"},{"attributes":{"source":{"id":"19129","type":"ColumnDataSource"}},"id":"19133","type":"CDSView"},{"attributes":{},"id":"19140","type":"Selection"},{"attributes":{"callback":null,"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19140","type":"Selection"},"selection_policy":{"id":"19139","type":"UnionRenderers"}},"id":"19129","type":"ColumnDataSource"},{"attributes":{},"id":"19137","type":"CategoricalTickFormatter"}],"root_ids":["19108"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"0e5fd1e8-4436-4c9d-8647-4b7c0aa93acb","roots":{"19108":"76fcb4a7-f293-4e21-8df9-dd683ce04095"}}];
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