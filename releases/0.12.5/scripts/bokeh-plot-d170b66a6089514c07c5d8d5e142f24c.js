(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("71e41a79-cec9-4f87-b174-97dda85cc8c7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '71e41a79-cec9-4f87-b174-97dda85cc8c7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"8d965a54-8c6e-49a3-a1ac-44452b0a7294":{"roots":{"references":[{"attributes":{"editor":{"id":"7b5f63d0-860c-4f02-adfd-b42ec21163a2","type":"StringEditor"},"field":"dates","formatter":{"id":"d0890764-5e16-4590-9b0e-82f93ece2a4f","type":"DateFormatter"},"title":"Date"},"id":"15d9c503-1d61-4315-aed9-50fb5219c1eb","type":"TableColumn"},{"attributes":{},"id":"f8b7492b-054f-41e3-bf73-82071f1ff320","type":"StringFormatter"},{"attributes":{"columns":[{"id":"15d9c503-1d61-4315-aed9-50fb5219c1eb","type":"TableColumn"},{"id":"a1f47173-b94c-4cca-98d8-b1d64302d3c7","type":"TableColumn"}],"height":280,"source":{"id":"db38211b-83a6-4fbe-8138-65d78ee3d136","type":"ColumnDataSource"},"width":400},"id":"c6772ace-08f3-4bb6-acef-794f1ab57d25","type":"DataTable"},{"attributes":{},"id":"7b5f63d0-860c-4f02-adfd-b42ec21163a2","type":"StringEditor"},{"attributes":{},"id":"750c79a2-820b-4020-b237-c3c6968093b6","type":"StringEditor"},{"attributes":{"children":[{"id":"c6772ace-08f3-4bb6-acef-794f1ab57d25","type":"DataTable"}]},"id":"dc65d29e-9fb2-40ed-9937-5532dc8fc9a6","type":"WidgetBox"},{"attributes":{"callback":null,"column_names":["dates","downloads"],"data":{"dates":[1393632000000.0,1393718400000.0,1393804800000.0,1393891200000.0,1393977600000.0,1394064000000.0,1394150400000.0,1394236800000.0,1394323200000.0,1394409600000.0],"downloads":[34,82,62,65,57,71,86,25,73,44]}},"id":"db38211b-83a6-4fbe-8138-65d78ee3d136","type":"ColumnDataSource"},{"attributes":{},"id":"d0890764-5e16-4590-9b0e-82f93ece2a4f","type":"DateFormatter"},{"attributes":{"editor":{"id":"750c79a2-820b-4020-b237-c3c6968093b6","type":"StringEditor"},"field":"downloads","formatter":{"id":"f8b7492b-054f-41e3-bf73-82071f1ff320","type":"StringFormatter"},"title":"Downloads"},"id":"a1f47173-b94c-4cca-98d8-b1d64302d3c7","type":"TableColumn"}],"root_ids":["dc65d29e-9fb2-40ed-9937-5532dc8fc9a6"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"8d965a54-8c6e-49a3-a1ac-44452b0a7294","elementid":"71e41a79-cec9-4f87-b174-97dda85cc8c7","modelid":"dc65d29e-9fb2-40ed-9937-5532dc8fc9a6"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
