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
      };var element = document.getElementById("cf7cb09d-a94e-40c0-a5a6-9e9cf3108afc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cf7cb09d-a94e-40c0-a5a6-9e9cf3108afc' but no matching script tag was found. ")
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
                var docs_json = {"1bd2b38a-48d1-4bf1-9eec-5e8813747b6a":{"roots":{"references":[{"attributes":{},"id":"289ee385-05a8-41b0-b065-12841dd5db25","type":"BasicTickFormatter"},{"attributes":{},"id":"dad51b59-757d-448b-bc1f-9f1d1ac2bb05","type":"ToolEvents"},{"attributes":{"plot":{"id":"662fd5e3-6a80-4d69-b508-c4f0439b00d3","subtype":"Figure","type":"Plot"}},"id":"25244518-1839-4803-b380-94da19042dd3","type":"PanTool"},{"attributes":{"attribution":"Map tiles by <a href=\"http://stamen.com\">Stamen Design</a>, under <a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a>.Data by <a href=\"http://openstreetmap.org\">OpenStreetMap</a>, under <a href=\"http://www.openstreetmap.org/copyright\">ODbL</a>","url":"http://tile.stamen.com/toner/{Z}/{X}/{Y}.png"},"id":"44b67bdf-4f83-451a-a281-84456beb85ca","type":"WMTSTileSource"},{"attributes":{"callback":null,"end":20000000,"start":-20000000},"id":"692db39e-5758-4f41-9839-210272b4b2b2","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"25244518-1839-4803-b380-94da19042dd3","type":"PanTool"},{"id":"94d87503-6eef-482a-8141-3ff8f1f70360","type":"WheelZoomTool"}]},"id":"01b4a508-4414-4f6d-abf4-a4579b7c7746","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"7f02c686-b9e0-468a-89c2-12eefecdc6e5","type":"Title"},{"attributes":{"formatter":{"id":"3ab83b23-ef7b-4132-b2f0-fbb754baba96","type":"BasicTickFormatter"},"plot":{"id":"662fd5e3-6a80-4d69-b508-c4f0439b00d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"6a626e0a-1f3d-4462-9965-45481e022062","type":"BasicTicker"},"visible":false},"id":"e766269c-dc03-47de-99fc-6c782784f19a","type":"LinearAxis"},{"attributes":{},"id":"3ab83b23-ef7b-4132-b2f0-fbb754baba96","type":"BasicTickFormatter"},{"attributes":{},"id":"bb1caa1b-7f11-4b91-a3fc-569dca487290","type":"BasicTicker"},{"attributes":{"formatter":{"id":"289ee385-05a8-41b0-b065-12841dd5db25","type":"BasicTickFormatter"},"plot":{"id":"662fd5e3-6a80-4d69-b508-c4f0439b00d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb1caa1b-7f11-4b91-a3fc-569dca487290","type":"BasicTicker"},"visible":false},"id":"193ef843-0233-4612-bfdf-1c330e82c9bf","type":"LinearAxis"},{"attributes":{"plot":{"id":"662fd5e3-6a80-4d69-b508-c4f0439b00d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb1caa1b-7f11-4b91-a3fc-569dca487290","type":"BasicTicker"}},"id":"c24f8e6e-0d2f-41fb-9db4-a1d7d87db9e8","type":"Grid"},{"attributes":{"tile_source":{"id":"44b67bdf-4f83-451a-a281-84456beb85ca","type":"WMTSTileSource"}},"id":"606a28d2-917c-4c9b-91af-79846b048a38","type":"TileRenderer"},{"attributes":{"callback":null,"end":20000000,"start":-20000000},"id":"eff4bf31-2875-4b0d-be78-2bdddca6a225","type":"Range1d"},{"attributes":{"below":[{"id":"193ef843-0233-4612-bfdf-1c330e82c9bf","type":"LinearAxis"}],"left":[{"id":"e766269c-dc03-47de-99fc-6c782784f19a","type":"LinearAxis"}],"renderers":[{"id":"193ef843-0233-4612-bfdf-1c330e82c9bf","type":"LinearAxis"},{"id":"c24f8e6e-0d2f-41fb-9db4-a1d7d87db9e8","type":"Grid"},{"id":"e766269c-dc03-47de-99fc-6c782784f19a","type":"LinearAxis"},{"id":"edf7670c-85f9-40c0-9fe3-994e70bc74f7","type":"Grid"},{"id":"606a28d2-917c-4c9b-91af-79846b048a38","type":"TileRenderer"}],"title":{"id":"7f02c686-b9e0-468a-89c2-12eefecdc6e5","type":"Title"},"tool_events":{"id":"dad51b59-757d-448b-bc1f-9f1d1ac2bb05","type":"ToolEvents"},"toolbar":{"id":"01b4a508-4414-4f6d-abf4-a4579b7c7746","type":"Toolbar"},"x_range":{"id":"692db39e-5758-4f41-9839-210272b4b2b2","type":"Range1d"},"y_range":{"id":"eff4bf31-2875-4b0d-be78-2bdddca6a225","type":"Range1d"}},"id":"662fd5e3-6a80-4d69-b508-c4f0439b00d3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6a626e0a-1f3d-4462-9965-45481e022062","type":"BasicTicker"},{"attributes":{"plot":{"id":"662fd5e3-6a80-4d69-b508-c4f0439b00d3","subtype":"Figure","type":"Plot"}},"id":"94d87503-6eef-482a-8141-3ff8f1f70360","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"662fd5e3-6a80-4d69-b508-c4f0439b00d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"6a626e0a-1f3d-4462-9965-45481e022062","type":"BasicTicker"}},"id":"edf7670c-85f9-40c0-9fe3-994e70bc74f7","type":"Grid"}],"root_ids":["662fd5e3-6a80-4d69-b508-c4f0439b00d3"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"1bd2b38a-48d1-4bf1-9eec-5e8813747b6a","elementid":"cf7cb09d-a94e-40c0-a5a6-9e9cf3108afc","modelid":"662fd5e3-6a80-4d69-b508-c4f0439b00d3"}];
                
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
