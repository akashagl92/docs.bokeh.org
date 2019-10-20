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
      };var element = document.getElementById("4db1ae1c-2d7e-4c35-9081-5897c9261845");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '4db1ae1c-2d7e-4c35-9081-5897c9261845' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5d819261-0661-43a2-b7da-5908906671c1":{"roots":{"references":[{"attributes":{},"id":"35819","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35804","type":"Scatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":{"id":"35813","type":"PointDrawTool"},"tools":[{"id":"35813","type":"PointDrawTool"}]},"id":"35801","type":"Toolbar"},{"attributes":{},"id":"35821","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35805","type":"Scatter"},{"attributes":{"dimension":1,"ticker":{"id":"35797","type":"BasicTicker"}},"id":"35800","type":"Grid"},{"attributes":{},"id":"35822","type":"UnionRenderers"},{"attributes":{},"id":"35797","type":"BasicTicker"},{"attributes":{},"id":"35823","type":"Selection"},{"attributes":{"formatter":{"id":"35819","type":"BasicTickFormatter"},"ticker":{"id":"35797","type":"BasicTicker"}},"id":"35796","type":"LinearAxis"},{"attributes":{},"id":"35824","type":"StringEditor"},{"attributes":{"editor":{"id":"35828","type":"StringEditor"},"field":"color","formatter":{"id":"35829","type":"StringFormatter"},"title":"color"},"id":"35810","type":"TableColumn"},{"attributes":{},"id":"35825","type":"StringFormatter"},{"attributes":{"ticker":{"id":"35792","type":"BasicTicker"}},"id":"35795","type":"Grid"},{"attributes":{},"id":"35826","type":"StringEditor"},{"attributes":{"editor":{"id":"35826","type":"StringEditor"},"field":"y","formatter":{"id":"35827","type":"StringFormatter"},"title":"y"},"id":"35809","type":"TableColumn"},{"attributes":{"editor":{"id":"35824","type":"StringEditor"},"field":"x","formatter":{"id":"35825","type":"StringFormatter"},"title":"x"},"id":"35808","type":"TableColumn"},{"attributes":{},"id":"35827","type":"StringFormatter"},{"attributes":{},"id":"35828","type":"StringEditor"},{"attributes":{},"id":"35829","type":"StringFormatter"},{"attributes":{},"id":"35789","type":"LinearScale"},{"attributes":{"formatter":{"id":"35821","type":"BasicTickFormatter"},"ticker":{"id":"35792","type":"BasicTicker"}},"id":"35791","type":"LinearAxis"},{"attributes":{"data_source":{"id":"35802","type":"ColumnDataSource"},"glyph":{"id":"35804","type":"Scatter"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35805","type":"Scatter"},"selection_glyph":null,"view":{"id":"35807","type":"CDSView"}},"id":"35806","type":"GlyphRenderer"},{"attributes":{},"id":"35792","type":"BasicTicker"},{"attributes":{"source":{"id":"35802","type":"ColumnDataSource"}},"id":"35807","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"lightgrey"},"below":[{"id":"35791","type":"LinearAxis"}],"center":[{"id":"35795","type":"Grid"},{"id":"35800","type":"Grid"}],"left":[{"id":"35796","type":"LinearAxis"}],"renderers":[{"id":"35806","type":"GlyphRenderer"}],"title":{"id":"35781","type":"Title"},"toolbar":{"id":"35801","type":"Toolbar"},"x_range":{"id":"35783","type":"Range1d"},"x_scale":{"id":"35787","type":"LinearScale"},"y_range":{"id":"35785","type":"Range1d"},"y_scale":{"id":"35789","type":"LinearScale"}},"id":"35780","subtype":"Figure","type":"Plot"},{"attributes":{"columns":[{"id":"35808","type":"TableColumn"},{"id":"35809","type":"TableColumn"},{"id":"35810","type":"TableColumn"}],"editable":true,"height":200,"source":{"id":"35802","type":"ColumnDataSource"},"view":{"id":"35812","type":"CDSView"}},"id":"35811","type":"DataTable"},{"attributes":{"source":{"id":"35802","type":"ColumnDataSource"}},"id":"35812","type":"CDSView"},{"attributes":{"callback":null,"data":{"color":["red","green","yellow"],"x":[1,5,9],"y":[1,5,9]},"selected":{"id":"35823","type":"Selection"},"selection_policy":{"id":"35822","type":"UnionRenderers"}},"id":"35802","type":"ColumnDataSource"},{"attributes":{"text":"Point Draw Tool"},"id":"35781","type":"Title"},{"attributes":{"empty_value":"black","renderers":[{"id":"35806","type":"GlyphRenderer"}]},"id":"35813","type":"PointDrawTool"},{"attributes":{"callback":null,"end":10},"id":"35783","type":"Range1d"},{"attributes":{},"id":"35787","type":"LinearScale"},{"attributes":{"callback":null,"end":10},"id":"35785","type":"Range1d"},{"attributes":{"children":[{"id":"35780","subtype":"Figure","type":"Plot"},{"id":"35811","type":"DataTable"}]},"id":"35816","type":"Column"}],"root_ids":["35816"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"5d819261-0661-43a2-b7da-5908906671c1","roots":{"35816":"4db1ae1c-2d7e-4c35-9081-5897c9261845"}}];
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