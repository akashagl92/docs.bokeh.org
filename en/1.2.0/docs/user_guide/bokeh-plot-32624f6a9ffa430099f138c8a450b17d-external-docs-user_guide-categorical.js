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
      };var element = document.getElementById("3cfd9c3f-c49e-45c1-910e-a4d30cda06f7");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3cfd9c3f-c49e-45c1-910e-a4d30cda06f7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8ea5d4c7-7f79-4b0c-a072-2db82475ce7f":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"20556","type":"VBar"},{"attributes":{},"id":"20545","type":"CategoricalTicker"},{"attributes":{"callback":null,"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]},"selected":{"id":"20564","type":"Selection"},"selection_policy":{"id":"20565","type":"UnionRenderers"}},"id":"20532","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"20562","type":"CategoricalTickFormatter"},"major_label_orientation":1,"ticker":{"id":"20545","type":"CategoricalTicker"}},"id":"20544","type":"CategoricalAxis"},{"attributes":{},"id":"20540","type":"CategoricalScale"},{"attributes":{},"id":"20565","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"20532","type":"ColumnDataSource"},"glyph":{"id":"20555","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20556","type":"VBar"},"selection_glyph":null,"view":{"id":"20558","type":"CDSView"}},"id":"20557","type":"GlyphRenderer"},{"attributes":{"callback":null,"start":0},"id":"20538","type":"DataRange1d"},{"attributes":{},"id":"20549","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"20549","type":"BasicTicker"}},"id":"20552","type":"Grid"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"20533","type":"FactorRange"},{"attributes":{},"id":"20542","type":"LinearScale"},{"attributes":{"formatter":{"id":"20560","type":"BasicTickFormatter"},"ticker":{"id":"20549","type":"BasicTicker"}},"id":"20548","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"20555","type":"VBar"},{"attributes":{"below":[{"id":"20544","type":"CategoricalAxis"}],"center":[{"id":"20547","type":"Grid"},{"id":"20552","type":"Grid"}],"left":[{"id":"20548","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"20557","type":"GlyphRenderer"}],"title":{"id":"20535","type":"Title"},"toolbar":{"id":"20553","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20533","type":"FactorRange"},"x_scale":{"id":"20540","type":"CategoricalScale"},"y_range":{"id":"20538","type":"DataRange1d"},"y_scale":{"id":"20542","type":"LinearScale"}},"id":"20534","subtype":"Figure","type":"Plot"},{"attributes":{"grid_line_color":null,"ticker":{"id":"20545","type":"CategoricalTicker"}},"id":"20547","type":"Grid"},{"attributes":{},"id":"20562","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"20553","type":"Toolbar"},{"attributes":{"text":"Fruit Counts by Year"},"id":"20535","type":"Title"},{"attributes":{},"id":"20560","type":"BasicTickFormatter"},{"attributes":{},"id":"20564","type":"Selection"},{"attributes":{"source":{"id":"20532","type":"ColumnDataSource"}},"id":"20558","type":"CDSView"}],"root_ids":["20534"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"8ea5d4c7-7f79-4b0c-a072-2db82475ce7f","roots":{"20534":"3cfd9c3f-c49e-45c1-910e-a4d30cda06f7"}}];
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