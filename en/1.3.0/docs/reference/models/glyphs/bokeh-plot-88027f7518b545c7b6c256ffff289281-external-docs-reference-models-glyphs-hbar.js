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
      };var element = document.getElementById("aefb1b80-83f9-4a41-b8f7-02e46e03b9f8");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'aefb1b80-83f9-4a41-b8f7-02e46e03b9f8' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
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
                    
                  var docs_json = '{"22e97a11-6977-4b4b-b478-d00f4d9168dc":{"roots":{"references":[{"attributes":{"formatter":{"id":"10462","type":"BasicTickFormatter"},"ticker":{"id":"10452","type":"BasicTicker"}},"id":"10450","type":"LinearAxis"},{"attributes":{},"id":"10457","type":"LinearScale"},{"attributes":{},"id":"10466","type":"Selection"},{"attributes":{},"id":"10462","type":"BasicTickFormatter"},{"attributes":{},"id":"10464","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#b3de69"},"height":{"value":0.5},"right":{"field":"right"},"y":{"field":"y"}},"id":"10447","type":"HBar"},{"attributes":{"callback":null,"data":{"right":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}},"selected":{"id":"10466","type":"Selection"},"selection_policy":{"id":"10465","type":"UnionRenderers"}},"id":"10444","type":"ColumnDataSource"},{"attributes":{},"id":"10452","type":"BasicTicker"},{"attributes":{},"id":"10465","type":"UnionRenderers"},{"attributes":{},"id":"10459","type":"LinearScale"},{"attributes":{"source":{"id":"10444","type":"ColumnDataSource"}},"id":"10449","type":"CDSView"},{"attributes":{"formatter":{"id":"10464","type":"BasicTickFormatter"},"ticker":{"id":"10454","type":"BasicTicker"}},"id":"10451","type":"LinearAxis"},{"attributes":{"callback":null},"id":"10460","type":"DataRange1d"},{"attributes":{"callback":null},"id":"10458","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"10454","type":"BasicTicker"}},"id":"10455","type":"Grid"},{"attributes":{"ticker":{"id":"10452","type":"BasicTicker"}},"id":"10453","type":"Grid"},{"attributes":{"below":[{"id":"10450","type":"LinearAxis"}],"center":[{"id":"10453","type":"Grid"},{"id":"10455","type":"Grid"}],"left":[{"id":"10451","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"10448","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"10456","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"10458","type":"DataRange1d"},"x_scale":{"id":"10457","type":"LinearScale"},"y_range":{"id":"10460","type":"DataRange1d"},"y_scale":{"id":"10459","type":"LinearScale"}},"id":"10445","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"10456","type":"Toolbar"},{"attributes":{},"id":"10454","type":"BasicTicker"},{"attributes":{"data_source":{"id":"10444","type":"ColumnDataSource"},"glyph":{"id":"10447","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"10449","type":"CDSView"}},"id":"10448","type":"GlyphRenderer"}],"root_ids":["10445"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"22e97a11-6977-4b4b-b478-d00f4d9168dc","roots":{"10445":"aefb1b80-83f9-4a41-b8f7-02e46e03b9f8"}}];
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