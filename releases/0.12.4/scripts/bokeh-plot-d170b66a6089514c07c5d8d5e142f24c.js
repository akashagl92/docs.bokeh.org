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
      };var element = document.getElementById("6ae3e6a5-b749-40a7-b970-776d10efef36");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6ae3e6a5-b749-40a7-b970-776d10efef36' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"bb18c6f8-7108-40ab-a674-5dc67ff9b60f":{"roots":{"references":[{"attributes":{"children":[{"id":"ae4611fb-7d26-475a-a83a-c6d732189c61","type":"DataTable"}]},"id":"bb4888d5-b1d7-4685-8720-33422e51423c","type":"WidgetBox"},{"attributes":{"callback":null,"column_names":["dates","downloads"],"data":{"dates":[1393632000000.0,1393718400000.0,1393804800000.0,1393891200000.0,1393977600000.0,1394064000000.0,1394150400000.0,1394236800000.0,1394323200000.0,1394409600000.0],"downloads":[57,66,30,95,89,33,14,3,84,64]}},"id":"b1e77d61-e899-46fd-af2b-d0b85613b4be","type":"ColumnDataSource"},{"attributes":{"editor":{"id":"d01ab3e0-d8a5-41b5-8f24-a5e4c3b31cc5","type":"StringEditor"},"field":"downloads","formatter":{"id":"8ab1ada5-b8e7-4579-a75b-12b21e69052d","type":"StringFormatter"},"title":"Downloads"},"id":"513322cf-afc3-495a-a923-c5bf0d3d4c78","type":"TableColumn"},{"attributes":{"editor":{"id":"2becef0a-6013-474e-9e95-dc927c1794a4","type":"StringEditor"},"field":"dates","formatter":{"id":"5f8a2863-de5b-4331-b21e-8057fdb03ab7","type":"DateFormatter"},"title":"Date"},"id":"946927b5-7f6a-406b-84e7-371748a98196","type":"TableColumn"},{"attributes":{},"id":"d01ab3e0-d8a5-41b5-8f24-a5e4c3b31cc5","type":"StringEditor"},{"attributes":{"columns":[{"id":"946927b5-7f6a-406b-84e7-371748a98196","type":"TableColumn"},{"id":"513322cf-afc3-495a-a923-c5bf0d3d4c78","type":"TableColumn"}],"height":280,"source":{"id":"b1e77d61-e899-46fd-af2b-d0b85613b4be","type":"ColumnDataSource"},"width":400},"id":"ae4611fb-7d26-475a-a83a-c6d732189c61","type":"DataTable"},{"attributes":{},"id":"5f8a2863-de5b-4331-b21e-8057fdb03ab7","type":"DateFormatter"},{"attributes":{},"id":"2becef0a-6013-474e-9e95-dc927c1794a4","type":"StringEditor"},{"attributes":{},"id":"8ab1ada5-b8e7-4579-a75b-12b21e69052d","type":"StringFormatter"}],"root_ids":["bb4888d5-b1d7-4685-8720-33422e51423c"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"bb18c6f8-7108-40ab-a674-5dc67ff9b60f","elementid":"6ae3e6a5-b749-40a7-b970-776d10efef36","modelid":"bb4888d5-b1d7-4685-8720-33422e51423c"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
