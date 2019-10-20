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
      };var element = document.getElementById("6eb4f93a-3481-4a46-824f-0dfc5f9923a9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6eb4f93a-3481-4a46-824f-0dfc5f9923a9' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js"];
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
                    
                  var docs_json = '{"ddee972e-5676-434c-8ec8-cfe8d8c38953":{"roots":{"references":[{"attributes":{},"id":"17715","type":"LinearScale"},{"attributes":{"data_source":{"id":"17709","type":"ColumnDataSource"},"glyph":{"id":"17733","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17734","type":"Circle"},"selection_glyph":null,"view":{"id":"17736","type":"CDSView"}},"id":"17735","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"17719","type":"LinearAxis"}],"center":[{"id":"17723","type":"Grid"},{"id":"17728","type":"Grid"},{"id":"17743","type":"Legend"}],"left":[{"id":"17724","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"17735","type":"GlyphRenderer"}],"title":{"id":"17738","type":"Title"},"toolbar":{"id":"17730","type":"Toolbar"},"x_range":{"id":"17711","type":"Range1d"},"x_scale":{"id":"17715","type":"LinearScale"},"y_range":{"id":"17713","type":"Range1d"},"y_scale":{"id":"17717","type":"LinearScale"}},"id":"17710","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17751","type":"UnionRenderers"},{"attributes":{},"id":"17720","type":"BasicTicker"},{"attributes":{"callback":null,"end":3},"id":"17713","type":"Range1d"},{"attributes":{},"id":"17752","type":"Selection"},{"attributes":{"items":[{"id":"17744","type":"LegendItem"}]},"id":"17743","type":"Legend"},{"attributes":{"source":{"id":"17709","type":"ColumnDataSource"}},"id":"17736","type":"CDSView"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"17733","type":"Circle"},{"attributes":{},"id":"17742","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"17742","type":"BasicTickFormatter"},"ticker":{"id":"17720","type":"BasicTicker"}},"id":"17719","type":"LinearAxis"},{"attributes":{},"id":"17717","type":"LinearScale"},{"attributes":{},"id":"17725","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17729","type":"SaveTool"}]},"id":"17730","type":"Toolbar"},{"attributes":{"label":{"field":"label"},"renderers":[{"id":"17735","type":"GlyphRenderer"}]},"id":"17744","type":"LegendItem"},{"attributes":{},"id":"17740","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"17720","type":"BasicTicker"}},"id":"17723","type":"Grid"},{"attributes":{"text":""},"id":"17738","type":"Title"},{"attributes":{"callback":null,"data":{"color":["#ef8a62","#67a9cf","#ef8a62","#67a9cf","#ef8a62","#67a9cf"],"label":["hi","lo","hi","lo","hi","lo"],"x":[1,2,3,4,5,6],"y":[2,1,2,1,2,1]},"selected":{"id":"17752","type":"Selection"},"selection_policy":{"id":"17751","type":"UnionRenderers"}},"id":"17709","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"17740","type":"BasicTickFormatter"},"ticker":{"id":"17725","type":"BasicTicker"}},"id":"17724","type":"LinearAxis"},{"attributes":{},"id":"17729","type":"SaveTool"},{"attributes":{"callback":null,"end":7},"id":"17711","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"17734","type":"Circle"},{"attributes":{"dimension":1,"ticker":{"id":"17725","type":"BasicTicker"}},"id":"17728","type":"Grid"}],"root_ids":["17710"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"ddee972e-5676-434c-8ec8-cfe8d8c38953","roots":{"17710":"6eb4f93a-3481-4a46-824f-0dfc5f9923a9"}}];
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