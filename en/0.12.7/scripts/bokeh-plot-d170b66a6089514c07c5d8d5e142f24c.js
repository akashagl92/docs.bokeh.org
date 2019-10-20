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
      };var element = document.getElementById("41869b92-dfc8-4de8-ad06-3738c3e8beb0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '41869b92-dfc8-4de8-ad06-3738c3e8beb0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"4b7d189a-a423-4cf2-a921-3213d9babcf8":{"roots":{"references":[{"attributes":{"children":[{"id":"298e0654-399e-4851-8fc4-3f7a0436323c","type":"DataTable"}]},"id":"7d3afaa1-108e-42e6-875d-634596337c92","type":"WidgetBox"},{"attributes":{"columns":[{"id":"0a1ee4f6-4f3c-4705-a285-338913b15943","type":"TableColumn"},{"id":"c9646797-c625-4f48-b08b-eb7b43bdd30b","type":"TableColumn"}],"height":280,"source":{"id":"942f738a-5c8d-4463-91f7-0070bb86cfd9","type":"ColumnDataSource"},"view":{"id":"ee4c57ce-ab80-48be-99af-5dfce5d49417","type":"CDSView"},"width":400},"id":"298e0654-399e-4851-8fc4-3f7a0436323c","type":"DataTable"},{"attributes":{"callback":null,"column_names":["dates","downloads"],"data":{"dates":[1393632000000.0,1393718400000.0,1393804800000.0,1393891200000.0,1393977600000.0,1394064000000.0,1394150400000.0,1394236800000.0,1394323200000.0,1394409600000.0],"downloads":[17,83,86,75,30,63,98,79,54,5]}},"id":"942f738a-5c8d-4463-91f7-0070bb86cfd9","type":"ColumnDataSource"},{"attributes":{},"id":"f6ac30b1-6ee8-4d32-bcca-3026233df217","type":"StringFormatter"},{"attributes":{},"id":"84812f26-f274-4c48-a521-246cab0b79b2","type":"StringEditor"},{"attributes":{},"id":"5af76272-e6e4-4260-8d35-1ad7a6e2208b","type":"StringEditor"},{"attributes":{"editor":{"id":"84812f26-f274-4c48-a521-246cab0b79b2","type":"StringEditor"},"field":"downloads","formatter":{"id":"f6ac30b1-6ee8-4d32-bcca-3026233df217","type":"StringFormatter"},"title":"Downloads"},"id":"c9646797-c625-4f48-b08b-eb7b43bdd30b","type":"TableColumn"},{"attributes":{"editor":{"id":"5af76272-e6e4-4260-8d35-1ad7a6e2208b","type":"StringEditor"},"field":"dates","formatter":{"id":"377fee89-501f-4c2a-95fa-cf0a94d3ad46","type":"DateFormatter"},"title":"Date"},"id":"0a1ee4f6-4f3c-4705-a285-338913b15943","type":"TableColumn"},{"attributes":{},"id":"377fee89-501f-4c2a-95fa-cf0a94d3ad46","type":"DateFormatter"},{"attributes":{"source":{"id":"942f738a-5c8d-4463-91f7-0070bb86cfd9","type":"ColumnDataSource"}},"id":"ee4c57ce-ab80-48be-99af-5dfce5d49417","type":"CDSView"}],"root_ids":["7d3afaa1-108e-42e6-875d-634596337c92"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"4b7d189a-a423-4cf2-a921-3213d9babcf8","elementid":"41869b92-dfc8-4de8-ad06-3738c3e8beb0","modelid":"7d3afaa1-108e-42e6-875d-634596337c92"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
