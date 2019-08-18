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
      };var element = document.getElementById("ce60a634-ac50-4bb1-bc5f-f3a26327340a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ce60a634-ac50-4bb1-bc5f-f3a26327340a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"367f6e67-d97b-4d62-9d15-b6de02597227":{"roots":{"references":[{"attributes":{"source":{"id":"7828fc4c-3769-4ecb-bc3e-aa37d600b48e","type":"ColumnDataSource"}},"id":"3a4b21c2-b5ed-49ad-b409-bf32f23e6f08","type":"CDSView"},{"attributes":{"editor":{"id":"e13f4b41-d67d-4652-b80f-159df0dec0da","type":"StringEditor"},"field":"downloads","formatter":{"id":"f72102ac-052d-4108-91ff-358609895965","type":"StringFormatter"},"title":"Downloads"},"id":"2db1d521-88f6-49fb-9857-b9fdae8eabd1","type":"TableColumn"},{"attributes":{},"id":"19d87119-9218-49cc-bc81-fbdf7a1fac5d","type":"StringEditor"},{"attributes":{"callback":null,"column_names":["dates","downloads"],"data":{"dates":[1393632000000.0,1393718400000.0,1393804800000.0,1393891200000.0,1393977600000.0,1394064000000.0,1394150400000.0,1394236800000.0,1394323200000.0,1394409600000.0],"downloads":[16,84,65,39,86,65,16,36,42,21]}},"id":"7828fc4c-3769-4ecb-bc3e-aa37d600b48e","type":"ColumnDataSource"},{"attributes":{},"id":"e13f4b41-d67d-4652-b80f-159df0dec0da","type":"StringEditor"},{"attributes":{"columns":[{"id":"ba6baa81-6388-43d3-b055-5f1a7ca30235","type":"TableColumn"},{"id":"2db1d521-88f6-49fb-9857-b9fdae8eabd1","type":"TableColumn"}],"height":280,"source":{"id":"7828fc4c-3769-4ecb-bc3e-aa37d600b48e","type":"ColumnDataSource"},"view":{"id":"3a4b21c2-b5ed-49ad-b409-bf32f23e6f08","type":"CDSView"},"width":400},"id":"95bf35b2-95c2-4fca-a0ab-68e8b8e2f239","type":"DataTable"},{"attributes":{},"id":"f72102ac-052d-4108-91ff-358609895965","type":"StringFormatter"},{"attributes":{},"id":"06b1e181-e4db-47ff-8f87-acbf566e4993","type":"DateFormatter"},{"attributes":{"editor":{"id":"19d87119-9218-49cc-bc81-fbdf7a1fac5d","type":"StringEditor"},"field":"dates","formatter":{"id":"06b1e181-e4db-47ff-8f87-acbf566e4993","type":"DateFormatter"},"title":"Date"},"id":"ba6baa81-6388-43d3-b055-5f1a7ca30235","type":"TableColumn"},{"attributes":{"children":[{"id":"95bf35b2-95c2-4fca-a0ab-68e8b8e2f239","type":"DataTable"}]},"id":"98803bff-efbf-4475-92fe-258d06514776","type":"WidgetBox"}],"root_ids":["98803bff-efbf-4475-92fe-258d06514776"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"367f6e67-d97b-4d62-9d15-b6de02597227","elementid":"ce60a634-ac50-4bb1-bc5f-f3a26327340a","modelid":"98803bff-efbf-4475-92fe-258d06514776"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
