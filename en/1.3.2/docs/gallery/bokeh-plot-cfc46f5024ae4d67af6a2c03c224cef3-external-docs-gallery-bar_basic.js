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
      };var element = document.getElementById("a894e915-3591-440f-bd82-82060eadb5fe");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a894e915-3591-440f-bd82-82060eadb5fe' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js"];
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
                    
                  var docs_json = '{"8ee3db95-e1bd-49e5-b620-0dc728c9864f":{"roots":{"references":[{"attributes":{"source":{"id":"1371","type":"ColumnDataSource"}},"id":"1375","type":"CDSView"},{"attributes":{},"id":"1381","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"1366","type":"BasicTicker"}},"id":"1369","type":"Grid"},{"attributes":{},"id":"1377","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"1371","type":"ColumnDataSource"},"glyph":{"id":"1372","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1373","type":"VBar"},"selection_glyph":null,"view":{"id":"1375","type":"CDSView"}},"id":"1374","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"1370","type":"Toolbar"},{"attributes":{"below":[{"id":"1361","type":"CategoricalAxis"}],"center":[{"id":"1364","type":"Grid"},{"id":"1369","type":"Grid"}],"left":[{"id":"1365","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"1374","type":"GlyphRenderer"}],"title":{"id":"1351","type":"Title"},"toolbar":{"id":"1370","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1353","type":"FactorRange"},"x_scale":{"id":"1357","type":"CategoricalScale"},"y_range":{"id":"1355","type":"DataRange1d"},"y_scale":{"id":"1359","type":"LinearScale"}},"id":"1350","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1372","type":"VBar"},{"attributes":{},"id":"1362","type":"CategoricalTicker"},{"attributes":{},"id":"1379","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1377","type":"CategoricalTickFormatter"},"ticker":{"id":"1362","type":"CategoricalTicker"}},"id":"1361","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"1373","type":"VBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"1353","type":"FactorRange"},{"attributes":{},"id":"1382","type":"Selection"},{"attributes":{},"id":"1366","type":"BasicTicker"},{"attributes":{"formatter":{"id":"1379","type":"BasicTickFormatter"},"ticker":{"id":"1366","type":"BasicTicker"}},"id":"1365","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"1382","type":"Selection"},"selection_policy":{"id":"1381","type":"UnionRenderers"}},"id":"1371","type":"ColumnDataSource"},{"attributes":{"grid_line_color":null,"ticker":{"id":"1362","type":"CategoricalTicker"}},"id":"1364","type":"Grid"},{"attributes":{"text":"Fruit Counts"},"id":"1351","type":"Title"},{"attributes":{},"id":"1359","type":"LinearScale"},{"attributes":{},"id":"1357","type":"CategoricalScale"},{"attributes":{"callback":null,"start":0},"id":"1355","type":"DataRange1d"}],"root_ids":["1350"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"8ee3db95-e1bd-49e5-b620-0dc728c9864f","roots":{"1350":"a894e915-3591-440f-bd82-82060eadb5fe"}}];
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