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
      };var element = document.getElementById("ca707edb-e84e-47ad-bb00-62570af3eb4b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'ca707edb-e84e-47ad-bb00-62570af3eb4b' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
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
                    
                  var docs_json = '{"cc8e39c1-206c-470b-ab6e-f7b24ad45f21":{"roots":{"references":[{"attributes":{"formatter":{"id":"11917","type":"BasicTickFormatter"},"ticker":{"id":"11905","type":"BasicTicker"}},"id":"11903","type":"LinearAxis"},{"attributes":{"ticker":{"id":"11905","type":"BasicTicker"}},"id":"11906","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"11912","type":"Toolbar"},{"attributes":{"source":{"id":"11891","type":"ColumnDataSource"}},"id":"11902","type":"CDSView"},{"attributes":{},"id":"11919","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"11891","type":"ColumnDataSource"},"glyph":{"id":"11897","type":"Step"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"11899","type":"CDSView"}},"id":"11898","type":"GlyphRenderer"},{"attributes":{"source":{"id":"11891","type":"ColumnDataSource"}},"id":"11896","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"11907","type":"BasicTicker"}},"id":"11908","type":"Grid"},{"attributes":{"callback":null},"id":"11910","type":"DataRange1d"},{"attributes":{"callback":null},"id":"11913","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#f46d43"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"11894","type":"Step"},{"attributes":{},"id":"11907","type":"BasicTicker"},{"attributes":{},"id":"11905","type":"BasicTicker"},{"attributes":{},"id":"11917","type":"BasicTickFormatter"},{"attributes":{},"id":"11918","type":"Selection"},{"attributes":{"data_source":{"id":"11891","type":"ColumnDataSource"},"glyph":{"id":"11894","type":"Step"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"11896","type":"CDSView"}},"id":"11895","type":"GlyphRenderer"},{"attributes":{},"id":"11909","type":"LinearScale"},{"attributes":{"data_source":{"id":"11891","type":"ColumnDataSource"},"glyph":{"id":"11900","type":"Step"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"11902","type":"CDSView"}},"id":"11901","type":"GlyphRenderer"},{"attributes":{"source":{"id":"11891","type":"ColumnDataSource"}},"id":"11899","type":"CDSView"},{"attributes":{"formatter":{"id":"11915","type":"BasicTickFormatter"},"ticker":{"id":"11907","type":"BasicTicker"}},"id":"11904","type":"LinearAxis"},{"attributes":{},"id":"11911","type":"LinearScale"},{"attributes":{"below":[{"id":"11903","type":"LinearAxis"}],"center":[{"id":"11906","type":"Grid"},{"id":"11908","type":"Grid"}],"left":[{"id":"11904","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"11895","type":"GlyphRenderer"},{"id":"11898","type":"GlyphRenderer"},{"id":"11901","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"11912","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"11913","type":"DataRange1d"},"x_scale":{"id":"11911","type":"LinearScale"},"y_range":{"id":"11910","type":"DataRange1d"},"y_scale":{"id":"11909","type":"LinearScale"}},"id":"11892","type":"Plot"},{"attributes":{"line_color":{"value":"#cab2d6"},"line_width":{"value":3},"mode":"after","x":{"field":"x"},"y":{"field":"y3"}},"id":"11900","type":"Step"},{"attributes":{"line_color":{"value":"#1d91d0"},"line_dash":[6],"mode":"center","x":{"field":"x"},"y":{"field":"y2"}},"id":"11897","type":"Step"},{"attributes":{},"id":"11915","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMCamZmZmZn5vzMzMzMzM/O/mJmZmZmZ6b+YmZmZmZnZvwAAAAAAAAAAoJmZmZmZ2T+cmZmZmZnpPzQzMzMzM/M/mpmZmZmZ+T8AAAAAAAAAQA==","dtype":"float64","shape":[11]},"y1":{"__ndarray__":"AAAAAAAAEEB8FK5H4XoEQArXo3A9Cvc/eBSuR+F65D94FK5H4XrEPwAAAAAAAAAAhRSuR+F6xD9/FK5H4XrkPwzXo3A9Cvc/fBSuR+F6BEAAAAAAAAAQQA==","dtype":"float64","shape":[11]},"y2":{"__ndarray__":"AAAAAAAAGEA+CtejcD0SQIXrUbgehQtAHoXrUbgeBUBI4XoUrkcBQAAAAAAAAABASOF6FK5HAUAghetRuB4FQIbrUbgehQtAPgrXo3A9EkAAAAAAAAAYQA==","dtype":"float64","shape":[11]},"y3":{"__ndarray__":"AAAAAAAAIEA+CtejcD0aQML1KFyPwhVAj8L1KFyPEkCkcD0K16MQQAAAAAAAABBApHA9CtejEECQwvUoXI8SQMP1KFyPwhVAPgrXo3A9GkAAAAAAAAAgQA==","dtype":"float64","shape":[11]}},"selected":{"id":"11918","type":"Selection"},"selection_policy":{"id":"11919","type":"UnionRenderers"}},"id":"11891","type":"ColumnDataSource"}],"root_ids":["11892"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"cc8e39c1-206c-470b-ab6e-f7b24ad45f21","roots":{"11892":"ca707edb-e84e-47ad-bb00-62570af3eb4b"}}];
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
        function(Bokeh) {
        
        
        }
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