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
      };var element = document.getElementById("5afeb6e8-81a5-4c03-b3c1-bd6bccfdb9f1");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5afeb6e8-81a5-4c03-b3c1-bd6bccfdb9f1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"31b93af9-ad8e-46d1-81b1-866cb3ccb81e":{"roots":{"references":[{"attributes":{},"id":"11443","type":"BasicTickFormatter"},{"attributes":{},"id":"11445","type":"Selection"},{"attributes":{},"id":"11444","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"11443","type":"BasicTickFormatter"},"ticker":{"id":"11431","type":"BasicTicker"}},"id":"11429","type":"LinearAxis"},{"attributes":{"source":{"id":"11417","type":"ColumnDataSource"}},"id":"11422","type":"CDSView"},{"attributes":{"ticker":{"id":"11431","type":"BasicTicker"}},"id":"11432","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"11439","type":"Toolbar"},{"attributes":{},"id":"11438","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"11433","type":"BasicTicker"}},"id":"11434","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMCamZmZmZn5vzMzMzMzM/O/mJmZmZmZ6b+YmZmZmZnZvwAAAAAAAAAAoJmZmZmZ2T+cmZmZmZnpPzQzMzMzM/M/mpmZmZmZ+T8AAAAAAAAAQA==","dtype":"float64","shape":[11]},"y1":{"__ndarray__":"AAAAAAAAEEB8FK5H4XoEQArXo3A9Cvc/eBSuR+F65D94FK5H4XrEPwAAAAAAAAAAhRSuR+F6xD9/FK5H4XrkPwzXo3A9Cvc/fBSuR+F6BEAAAAAAAAAQQA==","dtype":"float64","shape":[11]},"y2":{"__ndarray__":"AAAAAAAAGEA+CtejcD0SQIXrUbgehQtAHoXrUbgeBUBI4XoUrkcBQAAAAAAAAABASOF6FK5HAUAghetRuB4FQIbrUbgehQtAPgrXo3A9EkAAAAAAAAAYQA==","dtype":"float64","shape":[11]},"y3":{"__ndarray__":"AAAAAAAAIEA+CtejcD0aQML1KFyPwhVAj8L1KFyPEkCkcD0K16MQQAAAAAAAABBApHA9CtejEECQwvUoXI8SQMP1KFyPwhVAPgrXo3A9GkAAAAAAAAAgQA==","dtype":"float64","shape":[11]}},"selected":{"id":"11445","type":"Selection"},"selection_policy":{"id":"11444","type":"UnionRenderers"}},"id":"11417","type":"ColumnDataSource"},{"attributes":{},"id":"11436","type":"LinearScale"},{"attributes":{"line_color":{"value":"#cab2d6"},"line_width":{"value":3},"mode":"after","x":{"field":"x"},"y":{"field":"y3"}},"id":"11426","type":"Step"},{"attributes":{"source":{"id":"11417","type":"ColumnDataSource"}},"id":"11428","type":"CDSView"},{"attributes":{"formatter":{"id":"11441","type":"BasicTickFormatter"},"ticker":{"id":"11433","type":"BasicTicker"}},"id":"11430","type":"LinearAxis"},{"attributes":{"data_source":{"id":"11417","type":"ColumnDataSource"},"glyph":{"id":"11426","type":"Step"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"11428","type":"CDSView"}},"id":"11427","type":"GlyphRenderer"},{"attributes":{},"id":"11441","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"11435","type":"DataRange1d"},{"attributes":{"callback":null},"id":"11437","type":"DataRange1d"},{"attributes":{},"id":"11433","type":"BasicTicker"},{"attributes":{"data_source":{"id":"11417","type":"ColumnDataSource"},"glyph":{"id":"11423","type":"Step"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"11425","type":"CDSView"}},"id":"11424","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#f46d43"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"11420","type":"Step"},{"attributes":{"source":{"id":"11417","type":"ColumnDataSource"}},"id":"11425","type":"CDSView"},{"attributes":{},"id":"11431","type":"BasicTicker"},{"attributes":{"below":[{"id":"11429","type":"LinearAxis"}],"center":[{"id":"11432","type":"Grid"},{"id":"11434","type":"Grid"}],"left":[{"id":"11430","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"11421","type":"GlyphRenderer"},{"id":"11424","type":"GlyphRenderer"},{"id":"11427","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"11439","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"11435","type":"DataRange1d"},"x_scale":{"id":"11438","type":"LinearScale"},"y_range":{"id":"11437","type":"DataRange1d"},"y_scale":{"id":"11436","type":"LinearScale"}},"id":"11418","type":"Plot"},{"attributes":{"line_color":{"value":"#1d91d0"},"line_dash":[6],"mode":"center","x":{"field":"x"},"y":{"field":"y2"}},"id":"11423","type":"Step"},{"attributes":{"data_source":{"id":"11417","type":"ColumnDataSource"},"glyph":{"id":"11420","type":"Step"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"11422","type":"CDSView"}},"id":"11421","type":"GlyphRenderer"}],"root_ids":["11418"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"31b93af9-ad8e-46d1-81b1-866cb3ccb81e","roots":{"11418":"5afeb6e8-81a5-4c03-b3c1-bd6bccfdb9f1"}}];
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