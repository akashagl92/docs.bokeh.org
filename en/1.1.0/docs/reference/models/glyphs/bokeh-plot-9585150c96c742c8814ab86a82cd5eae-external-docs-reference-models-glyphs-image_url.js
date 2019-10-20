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
      };var element = document.getElementById("3bb565c3-42b6-42f2-a824-09628dcb75d7");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3bb565c3-42b6-42f2-a824-09628dcb75d7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4bec3751-a069-4f0c-8db2-3701ad1132bd":{"roots":{"references":[{"attributes":{},"id":"10268","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"10242","type":"Range1d"},{"attributes":{},"id":"10260","type":"BasicTicker"},{"attributes":{"formatter":{"id":"10266","type":"BasicTickFormatter"},"ticker":{"id":"10260","type":"BasicTicker"}},"id":"10257","type":"LinearAxis"},{"attributes":{"formatter":{"id":"10268","type":"BasicTickFormatter"},"ticker":{"id":"10258","type":"BasicTicker"}},"id":"10256","type":"LinearAxis"},{"attributes":{"source":{"id":"10240","type":"ColumnDataSource"}},"id":"10255","type":"CDSView"},{"attributes":{},"id":"10262","type":"LinearScale"},{"attributes":{},"id":"10270","type":"Selection"},{"attributes":{"data_source":{"id":"10240","type":"ColumnDataSource"},"glyph":{"id":"10250","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"10252","type":"CDSView"}},"id":"10251","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"10240","type":"ColumnDataSource"},"glyph":{"id":"10247","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"10249","type":"CDSView"}},"id":"10248","type":"GlyphRenderer"},{"attributes":{"anchor":"center","h":{"field":"h1","units":"data"},"url":{"field":"url"},"w":{"field":"w1","units":"data"},"x":{"field":"x1"},"y":{"field":"y1"}},"id":"10247","type":"ImageURL"},{"attributes":{"source":{"id":"10240","type":"ColumnDataSource"}},"id":"10252","type":"CDSView"},{"attributes":{"h":{"units":"data","value":20},"url":{"field":"url"},"w":{"units":"data","value":20},"x":{"field":"x2"},"y":{"field":"y2"}},"id":"10250","type":"ImageURL"},{"attributes":{"below":[{"id":"10256","type":"LinearAxis"}],"center":[{"id":"10259","type":"Grid"},{"id":"10261","type":"Grid"}],"left":[{"id":"10257","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"10248","type":"GlyphRenderer"},{"id":"10251","type":"GlyphRenderer"},{"id":"10254","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"10264","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"10241","type":"Range1d"},"x_scale":{"id":"10263","type":"LinearScale"},"y_range":{"id":"10242","type":"Range1d"},"y_scale":{"id":"10262","type":"LinearScale"}},"id":"10243","type":"Plot"},{"attributes":{},"id":"10266","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"10260","type":"BasicTicker"}},"id":"10261","type":"Grid"},{"attributes":{"callback":null,"data":{"h1":{"__ndarray__":"AAAAAAAAJEAAAAAAAAA0QAAAAAAAAD5AAAAAAAAAREAAAAAAAABJQA==","dtype":"float64","shape":[5]},"url":["https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png","https://bokeh.pydata.org/en/latest/_static/images/logo.png"],"w1":{"__ndarray__":"AAAAAAAAJEAAAAAAAAA0QAAAAAAAAD5AAAAAAAAAREAAAAAAAABJQA==","dtype":"float64","shape":[5]},"x1":{"__ndarray__":"AAAAAAAAAAAAAAAAAMBCQAAAAAAAwFJAAAAAAAAgXEAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"x2":{"__ndarray__":"AAAAAAAAScAAAAAAAAAAAAAAAAAAAElAAAAAAAAAWUAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"y1":{"__ndarray__":"AAAAAAAAAAAAAAAAAMBCQAAAAAAAwFJAAAAAAAAgXEAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"y2":{"__ndarray__":"AAAAAAAAAAAAAAAAAABJQAAAAAAAAFlAAAAAAADAYkAAAAAAAABpQA==","dtype":"float64","shape":[5]}},"selected":{"id":"10270","type":"Selection"},"selection_policy":{"id":"10269","type":"UnionRenderers"}},"id":"10240","type":"ColumnDataSource"},{"attributes":{"anchor":"bottom_right","url":{"value":"https://bokeh.pydata.org/en/latest/_static/images/logo.png"},"x":{"value":200},"y":{"value":-100}},"id":"10253","type":"ImageURL"},{"attributes":{},"id":"10269","type":"UnionRenderers"},{"attributes":{"source":{"id":"10240","type":"ColumnDataSource"}},"id":"10249","type":"CDSView"},{"attributes":{"ticker":{"id":"10258","type":"BasicTicker"}},"id":"10259","type":"Grid"},{"attributes":{},"id":"10263","type":"LinearScale"},{"attributes":{"callback":null,"end":200,"start":-100},"id":"10241","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"10264","type":"Toolbar"},{"attributes":{"data_source":{"id":"10240","type":"ColumnDataSource"},"glyph":{"id":"10253","type":"ImageURL"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"10255","type":"CDSView"}},"id":"10254","type":"GlyphRenderer"},{"attributes":{},"id":"10258","type":"BasicTicker"}],"root_ids":["10243"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"4bec3751-a069-4f0c-8db2-3701ad1132bd","roots":{"10243":"3bb565c3-42b6-42f2-a824-09628dcb75d7"}}];
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