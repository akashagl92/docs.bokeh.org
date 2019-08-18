(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("12705aff-a369-4dff-89cf-02a07b7676e6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '12705aff-a369-4dff-89cf-02a07b7676e6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"aef8b7ce-44fa-4d03-8a2d-9427b5f27efe":{"roots":{"references":[{"attributes":{"children":[{"id":"6217","type":"DataTable"}]},"id":"6219","type":"WidgetBox"},{"attributes":{"editor":{"id":"6222","type":"StringEditor"},"field":"downloads","formatter":{"id":"6221","type":"StringFormatter"},"title":"Downloads"},"id":"6216","type":"TableColumn"},{"attributes":{},"id":"6221","type":"StringFormatter"},{"attributes":{"callback":null,"data":{"dates":[1393632000000.0,1393718400000.0,1393804800000.0,1393891200000.0,1393977600000.0,1394064000000.0,1394150400000.0,1394236800000.0,1394323200000.0,1394409600000.0],"downloads":[73,89,38,7,58,3,38,85,63,12]},"selected":{"id":"6224","type":"Selection"},"selection_policy":{"id":"6223","type":"UnionRenderers"}},"id":"6212","type":"ColumnDataSource"},{"attributes":{"source":{"id":"6212","type":"ColumnDataSource"}},"id":"6218","type":"CDSView"},{"attributes":{"editor":{"id":"6220","type":"StringEditor"},"field":"dates","formatter":{"id":"6213","type":"DateFormatter"},"title":"Date"},"id":"6214","type":"TableColumn"},{"attributes":{},"id":"6220","type":"StringEditor"},{"attributes":{"columns":[{"id":"6214","type":"TableColumn"},{"id":"6216","type":"TableColumn"}],"height":280,"source":{"id":"6212","type":"ColumnDataSource"},"view":{"id":"6218","type":"CDSView"},"width":400},"id":"6217","type":"DataTable"},{"attributes":{},"id":"6224","type":"Selection"},{"attributes":{},"id":"6222","type":"StringEditor"},{"attributes":{},"id":"6223","type":"UnionRenderers"},{"attributes":{},"id":"6213","type":"DateFormatter"}],"root_ids":["6219"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"aef8b7ce-44fa-4d03-8a2d-9427b5f27efe","roots":{"6219":"12705aff-a369-4dff-89cf-02a07b7676e6"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();