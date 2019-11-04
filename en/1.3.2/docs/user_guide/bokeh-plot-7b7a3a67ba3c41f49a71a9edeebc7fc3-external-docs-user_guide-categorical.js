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
      };var element = document.getElementById("b245e188-f8b9-4e16-8549-665a3c27a664");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b245e188-f8b9-4e16-8549-665a3c27a664' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.2.min.js"];
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
                    
                  var docs_json = '{"11a043fd-e8f3-43de-9335-1b4495c4d88d":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"19913","type":"Toolbar"},{"attributes":{"formatter":{"id":"19920","type":"CategoricalTickFormatter"},"ticker":{"id":"19905","type":"CategoricalTicker"}},"id":"19904","type":"CategoricalAxis"},{"attributes":{},"id":"19925","type":"Selection"},{"attributes":{"grid_line_color":null,"ticker":{"id":"19905","type":"CategoricalTicker"}},"id":"19907","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"19915","type":"VBar"},{"attributes":{"text":"Fruit Counts"},"id":"19894","type":"Title"},{"attributes":{"dimension":1,"ticker":{"id":"19909","type":"BasicTicker"}},"id":"19912","type":"Grid"},{"attributes":{"callback":null,"start":0},"id":"19898","type":"DataRange1d"},{"attributes":{},"id":"19924","type":"UnionRenderers"},{"attributes":{"below":[{"id":"19904","type":"CategoricalAxis"}],"center":[{"id":"19907","type":"Grid"},{"id":"19912","type":"Grid"}],"left":[{"id":"19908","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"19917","type":"GlyphRenderer"}],"title":{"id":"19894","type":"Title"},"toolbar":{"id":"19913","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19896","type":"FactorRange"},"x_scale":{"id":"19900","type":"CategoricalScale"},"y_range":{"id":"19898","type":"DataRange1d"},"y_scale":{"id":"19902","type":"LinearScale"}},"id":"19893","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19920","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"19925","type":"Selection"},"selection_policy":{"id":"19924","type":"UnionRenderers"}},"id":"19914","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"19914","type":"ColumnDataSource"},"glyph":{"id":"19915","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19916","type":"VBar"},"selection_glyph":null,"view":{"id":"19918","type":"CDSView"}},"id":"19917","type":"GlyphRenderer"},{"attributes":{},"id":"19900","type":"CategoricalScale"},{"attributes":{},"id":"19922","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"19916","type":"VBar"},{"attributes":{"callback":null,"factors":["Plums","Pears","Nectarines","Grapes","Apples","Strawberries"]},"id":"19896","type":"FactorRange"},{"attributes":{"formatter":{"id":"19922","type":"BasicTickFormatter"},"ticker":{"id":"19909","type":"BasicTicker"}},"id":"19908","type":"LinearAxis"},{"attributes":{"source":{"id":"19914","type":"ColumnDataSource"}},"id":"19918","type":"CDSView"},{"attributes":{},"id":"19902","type":"LinearScale"},{"attributes":{},"id":"19905","type":"CategoricalTicker"},{"attributes":{},"id":"19909","type":"BasicTicker"}],"root_ids":["19893"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"11a043fd-e8f3-43de-9335-1b4495c4d88d","roots":{"19893":"b245e188-f8b9-4e16-8549-665a3c27a664"}}];
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