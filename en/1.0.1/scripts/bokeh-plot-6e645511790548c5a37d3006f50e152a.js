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
      };var element = document.getElementById("6fa87daf-4258-43b4-8b83-184ac5e95476");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6fa87daf-4258-43b4-8b83-184ac5e95476' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"76a62f82-915a-4179-874c-1ff6055a6368":{"roots":{"references":[{"attributes":{"editor":{"id":"6220","type":"StringEditor"},"field":"downloads","formatter":{"id":"6221","type":"StringFormatter"},"title":"Downloads"},"id":"6215","type":"TableColumn"},{"attributes":{"callback":null,"data":{"dates":[1393632000000.0,1393718400000.0,1393804800000.0,1393891200000.0,1393977600000.0,1394064000000.0,1394150400000.0,1394236800000.0,1394323200000.0,1394409600000.0],"downloads":[53,18,53,42,68,69,82,76,98,80]},"selected":{"id":"6222","type":"Selection"},"selection_policy":{"id":"6223","type":"UnionRenderers"}},"id":"6211","type":"ColumnDataSource"},{"attributes":{"columns":[{"id":"6213","type":"TableColumn"},{"id":"6215","type":"TableColumn"}],"height":280,"source":{"id":"6211","type":"ColumnDataSource"},"view":{"id":"6217","type":"CDSView"},"width":400},"id":"6216","type":"DataTable"},{"attributes":{},"id":"6222","type":"Selection"},{"attributes":{},"id":"6219","type":"StringEditor"},{"attributes":{},"id":"6220","type":"StringEditor"},{"attributes":{"source":{"id":"6211","type":"ColumnDataSource"}},"id":"6217","type":"CDSView"},{"attributes":{},"id":"6223","type":"UnionRenderers"},{"attributes":{"children":[{"id":"6216","type":"DataTable"}]},"id":"6218","type":"WidgetBox"},{"attributes":{},"id":"6221","type":"StringFormatter"},{"attributes":{},"id":"6212","type":"DateFormatter"},{"attributes":{"editor":{"id":"6219","type":"StringEditor"},"field":"dates","formatter":{"id":"6212","type":"DateFormatter"},"title":"Date"},"id":"6213","type":"TableColumn"}],"root_ids":["6218"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"76a62f82-915a-4179-874c-1ff6055a6368","roots":{"6218":"6fa87daf-4258-43b4-8b83-184ac5e95476"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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