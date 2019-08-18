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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("2dec18a5-9a02-473c-ba83-03b52d1caba1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2dec18a5-9a02-473c-ba83-03b52d1caba1' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"9340badb-366e-46f4-b722-ee00ed03462f":{"roots":{"references":[{"attributes":{},"id":"77f57061-4bdc-402d-9704-e048e0e79197","type":"StringEditor"},{"attributes":{"callback":null,"column_names":["downloads","dates"],"data":{"dates":[1393632000000.0,1393718400000.0,1393804800000.0,1393891200000.0,1393977600000.0,1394064000000.0,1394150400000.0,1394236800000.0,1394323200000.0,1394409600000.0],"downloads":[18,25,94,51,78,41,88,59,74,35]}},"id":"3262f6aa-2238-4318-8872-d9945d8dd2e6","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"5d89f82c-005d-4524-9229-c8021856a530","type":"DataTable"}]},"id":"5ac6e5d5-1526-4a04-b376-b867a302c846","type":"WidgetBox"},{"attributes":{"editor":{"id":"77f57061-4bdc-402d-9704-e048e0e79197","type":"StringEditor"},"field":"dates","formatter":{"id":"3f023bd5-54ac-4b29-814b-c2a84acd2532","type":"DateFormatter"},"title":"Date"},"id":"5cefe90d-f3b8-4580-a3cc-6ae1350d0a36","type":"TableColumn"},{"attributes":{"editor":{"id":"dc4a78ca-478d-470c-95ed-016b5a85bc32","type":"StringEditor"},"field":"downloads","formatter":{"id":"c356334b-5729-471f-912b-07288e5f2cbc","type":"StringFormatter"},"title":"Downloads"},"id":"77f4bb4b-485f-478e-aaba-c4571cdf250a","type":"TableColumn"},{"attributes":{"columns":[{"id":"5cefe90d-f3b8-4580-a3cc-6ae1350d0a36","type":"TableColumn"},{"id":"77f4bb4b-485f-478e-aaba-c4571cdf250a","type":"TableColumn"}],"height":280,"source":{"id":"3262f6aa-2238-4318-8872-d9945d8dd2e6","type":"ColumnDataSource"},"width":400},"id":"5d89f82c-005d-4524-9229-c8021856a530","type":"DataTable"},{"attributes":{},"id":"3f023bd5-54ac-4b29-814b-c2a84acd2532","type":"DateFormatter"},{"attributes":{},"id":"dc4a78ca-478d-470c-95ed-016b5a85bc32","type":"StringEditor"},{"attributes":{},"id":"c356334b-5729-471f-912b-07288e5f2cbc","type":"StringFormatter"}],"root_ids":["5ac6e5d5-1526-4a04-b376-b867a302c846"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"9340badb-366e-46f4-b722-ee00ed03462f","elementid":"2dec18a5-9a02-473c-ba83-03b52d1caba1","modelid":"5ac6e5d5-1526-4a04-b376-b867a302c846"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
