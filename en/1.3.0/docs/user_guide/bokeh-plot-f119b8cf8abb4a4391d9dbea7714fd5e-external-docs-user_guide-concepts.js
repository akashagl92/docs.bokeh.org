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
      };var element = document.getElementById("9c05ca00-3022-402d-b0ee-fb7eb42d7c88");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '9c05ca00-3022-402d-b0ee-fb7eb42d7c88' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"413c9a72-4f91-4441-b850-8bca38ce7da0":{"roots":{"references":[{"attributes":{"data_source":{"id":"21744","type":"ColumnDataSource"},"glyph":{"id":"21745","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21746","type":"Circle"},"selection_glyph":null,"view":{"id":"21748","type":"CDSView"}},"id":"21747","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"21719","type":"DataRange1d"},{"attributes":{},"id":"21739","type":"SaveTool"},{"attributes":{"source":{"id":"21744","type":"ColumnDataSource"}},"id":"21748","type":"CDSView"},{"attributes":{},"id":"21733","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"21733","type":"BasicTicker"}},"id":"21736","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2.5,3,2],"y":[2,3,1,1.5]},"selected":{"id":"21756","type":"Selection"},"selection_policy":{"id":"21755","type":"UnionRenderers"}},"id":"21744","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"21737","type":"PanTool"},{"id":"21738","type":"ResetTool"},{"id":"21739","type":"SaveTool"}]},"id":"21740","type":"Toolbar"},{"attributes":{},"id":"21723","type":"LinearScale"},{"attributes":{"text":""},"id":"21750","type":"Title"},{"attributes":{"below":[{"id":"21727","type":"LinearAxis"}],"center":[{"id":"21731","type":"Grid"},{"id":"21736","type":"Grid"}],"left":[{"id":"21732","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"21747","type":"GlyphRenderer"}],"title":{"id":"21750","type":"Title"},"toolbar":{"id":"21740","type":"Toolbar"},"x_range":{"id":"21719","type":"DataRange1d"},"x_scale":{"id":"21723","type":"LinearScale"},"y_range":{"id":"21721","type":"DataRange1d"},"y_scale":{"id":"21725","type":"LinearScale"}},"id":"21718","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21756","type":"Selection"},{"attributes":{"ticker":{"id":"21728","type":"BasicTicker"}},"id":"21731","type":"Grid"},{"attributes":{},"id":"21725","type":"LinearScale"},{"attributes":{},"id":"21754","type":"BasicTickFormatter"},{"attributes":{},"id":"21752","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"21754","type":"BasicTickFormatter"},"ticker":{"id":"21733","type":"BasicTicker"}},"id":"21732","type":"LinearAxis"},{"attributes":{},"id":"21737","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"21745","type":"Circle"},{"attributes":{},"id":"21755","type":"UnionRenderers"},{"attributes":{},"id":"21738","type":"ResetTool"},{"attributes":{"callback":null},"id":"21721","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"21746","type":"Circle"},{"attributes":{"formatter":{"id":"21752","type":"BasicTickFormatter"},"ticker":{"id":"21728","type":"BasicTicker"}},"id":"21727","type":"LinearAxis"},{"attributes":{},"id":"21728","type":"BasicTicker"}],"root_ids":["21718"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"413c9a72-4f91-4441-b850-8bca38ce7da0","roots":{"21718":"9c05ca00-3022-402d-b0ee-fb7eb42d7c88"}}];
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