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
      };var element = document.getElementById("a386a2b4-b4c9-44c2-92a4-d8a519655ec1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a386a2b4-b4c9-44c2-92a4-d8a519655ec1' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"ef2d46f0-12a5-4605-8b23-0162c84c4507":{"roots":{"references":[{"attributes":{},"id":"fd18675b-2caa-408b-b826-42918cef8f42","type":"UnionRenderers"},{"attributes":{},"id":"fd573bda-ac4c-4439-aae3-2404741d5f34","type":"StringEditor"},{"attributes":{},"id":"9ffbd798-27a4-4d05-b2c0-c89c95aafbf8","type":"StringEditor"},{"attributes":{},"id":"17c6fcd6-591f-49d9-a97e-e2cce394c13f","type":"Selection"},{"attributes":{"editor":{"id":"fd573bda-ac4c-4439-aae3-2404741d5f34","type":"StringEditor"},"field":"dates","formatter":{"id":"d2f850b4-4c12-45a1-8298-4eb088dffccd","type":"DateFormatter"},"title":"Date"},"id":"b9b26549-95e0-44a7-8dc0-1e1e3661e598","type":"TableColumn"},{"attributes":{"editor":{"id":"9ffbd798-27a4-4d05-b2c0-c89c95aafbf8","type":"StringEditor"},"field":"downloads","formatter":{"id":"8a8a2d2c-c828-4956-91c8-9622dc2da860","type":"StringFormatter"},"title":"Downloads"},"id":"1f3cdf13-98ec-46c0-9a33-a63508ac66d7","type":"TableColumn"},{"attributes":{"children":[{"id":"66888258-c349-49c9-9636-1d1efea91b90","type":"DataTable"}]},"id":"6726ce02-ab64-4900-be20-845cda332dce","type":"WidgetBox"},{"attributes":{"columns":[{"id":"b9b26549-95e0-44a7-8dc0-1e1e3661e598","type":"TableColumn"},{"id":"1f3cdf13-98ec-46c0-9a33-a63508ac66d7","type":"TableColumn"}],"height":280,"source":{"id":"2c434917-4a2f-4733-b3c4-3d1a62a35a1f","type":"ColumnDataSource"},"view":{"id":"e5a706d8-5f40-4ac4-9b67-fa8dfe4caf2c","type":"CDSView"},"width":400},"id":"66888258-c349-49c9-9636-1d1efea91b90","type":"DataTable"},{"attributes":{},"id":"8a8a2d2c-c828-4956-91c8-9622dc2da860","type":"StringFormatter"},{"attributes":{"source":{"id":"2c434917-4a2f-4733-b3c4-3d1a62a35a1f","type":"ColumnDataSource"}},"id":"e5a706d8-5f40-4ac4-9b67-fa8dfe4caf2c","type":"CDSView"},{"attributes":{},"id":"d2f850b4-4c12-45a1-8298-4eb088dffccd","type":"DateFormatter"},{"attributes":{"callback":null,"data":{"dates":[1393632000000.0,1393718400000.0,1393804800000.0,1393891200000.0,1393977600000.0,1394064000000.0,1394150400000.0,1394236800000.0,1394323200000.0,1394409600000.0],"downloads":[70,88,25,90,100,20,88,55,56,94]},"selected":{"id":"17c6fcd6-591f-49d9-a97e-e2cce394c13f","type":"Selection"},"selection_policy":{"id":"fd18675b-2caa-408b-b826-42918cef8f42","type":"UnionRenderers"}},"id":"2c434917-4a2f-4733-b3c4-3d1a62a35a1f","type":"ColumnDataSource"}],"root_ids":["6726ce02-ab64-4900-be20-845cda332dce"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"ef2d46f0-12a5-4605-8b23-0162c84c4507","roots":{"6726ce02-ab64-4900-be20-845cda332dce":"a386a2b4-b4c9-44c2-92a4-d8a519655ec1"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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