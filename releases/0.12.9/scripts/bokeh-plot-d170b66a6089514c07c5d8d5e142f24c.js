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
      };var element = document.getElementById("c044a618-2696-46ed-9415-e1c6ab35fbe3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c044a618-2696-46ed-9415-e1c6ab35fbe3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"bebc3132-9e4c-4217-aa6e-346ddcdf9133":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["dates","downloads"],"data":{"dates":[1393632000000.0,1393718400000.0,1393804800000.0,1393891200000.0,1393977600000.0,1394064000000.0,1394150400000.0,1394236800000.0,1394323200000.0,1394409600000.0],"downloads":[34,70,86,81,11,87,46,38,63,40]}},"id":"375b1f15-b486-45ee-a294-32c4d11c9178","type":"ColumnDataSource"},{"attributes":{},"id":"35a9a316-4bf0-4933-be27-9debc6aebd33","type":"StringEditor"},{"attributes":{},"id":"bd5b2831-c57a-4e90-b4be-ccecb0a4c718","type":"StringFormatter"},{"attributes":{},"id":"8feb5721-fceb-4061-ae1b-ad2cc4bfa2c4","type":"StringEditor"},{"attributes":{},"id":"c77e0ae9-0ab1-4fb6-a890-a89706f77dda","type":"DateFormatter"},{"attributes":{"editor":{"id":"8feb5721-fceb-4061-ae1b-ad2cc4bfa2c4","type":"StringEditor"},"field":"dates","formatter":{"id":"c77e0ae9-0ab1-4fb6-a890-a89706f77dda","type":"DateFormatter"},"title":"Date"},"id":"d3171e38-d9cf-40a4-8a42-b1df871306b9","type":"TableColumn"},{"attributes":{"editor":{"id":"35a9a316-4bf0-4933-be27-9debc6aebd33","type":"StringEditor"},"field":"downloads","formatter":{"id":"bd5b2831-c57a-4e90-b4be-ccecb0a4c718","type":"StringFormatter"},"title":"Downloads"},"id":"e08da8fe-d646-42b4-9dca-df0f2aae4aa9","type":"TableColumn"},{"attributes":{"source":{"id":"375b1f15-b486-45ee-a294-32c4d11c9178","type":"ColumnDataSource"}},"id":"fe816cd0-40e2-4abf-bb34-8cbc1568e493","type":"CDSView"},{"attributes":{"columns":[{"id":"d3171e38-d9cf-40a4-8a42-b1df871306b9","type":"TableColumn"},{"id":"e08da8fe-d646-42b4-9dca-df0f2aae4aa9","type":"TableColumn"}],"height":280,"source":{"id":"375b1f15-b486-45ee-a294-32c4d11c9178","type":"ColumnDataSource"},"view":{"id":"fe816cd0-40e2-4abf-bb34-8cbc1568e493","type":"CDSView"},"width":400},"id":"ee071053-5157-4f04-b145-6eb64f471f08","type":"DataTable"},{"attributes":{"children":[{"id":"ee071053-5157-4f04-b145-6eb64f471f08","type":"DataTable"}]},"id":"b5b546f2-baa4-4b2d-af73-a8d11585dee9","type":"WidgetBox"}],"root_ids":["b5b546f2-baa4-4b2d-af73-a8d11585dee9"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"bebc3132-9e4c-4217-aa6e-346ddcdf9133","elementid":"c044a618-2696-46ed-9415-e1c6ab35fbe3","modelid":"b5b546f2-baa4-4b2d-af73-a8d11585dee9"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
