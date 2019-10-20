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
      };var element = document.getElementById("badd1e80-af65-4b82-a2ff-941dfb7db4ca");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'badd1e80-af65-4b82-a2ff-941dfb7db4ca' but no matching script tag was found. ")
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
                var docs_json = {"fe318001-809d-455e-aa28-d734fe9f30f9":{"roots":{"references":[{"attributes":{},"id":"3acefcde-aa06-4e76-a33f-f67b75758c0b","type":"BasicTickFormatter"},{"attributes":{},"id":"d956d390-c626-427e-92ab-a90390d7d9f4","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":20000000,"start":-20000000},"id":"3e6270ca-775a-451e-b808-af656d3a1849","type":"Range1d"},{"attributes":{"plot":{"id":"e70f96ff-6fd0-4391-81ca-feeb682b7f5c","subtype":"Figure","type":"Plot"}},"id":"cb23f418-4b3d-4e1f-98d2-04dfc94760cb","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"3acefcde-aa06-4e76-a33f-f67b75758c0b","type":"BasicTickFormatter"},"plot":{"id":"e70f96ff-6fd0-4391-81ca-feeb682b7f5c","subtype":"Figure","type":"Plot"},"ticker":{"id":"726cb2eb-138f-45a2-8709-2aeef2cf0cfe","type":"BasicTicker"},"visible":false},"id":"1bd14f62-31aa-43ab-b56e-f77fdbb4c026","type":"LinearAxis"},{"attributes":{"attribution":"Map tiles by <a href=\"http://stamen.com\">Stamen Design</a>, under <a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a>.Data by <a href=\"http://openstreetmap.org\">OpenStreetMap</a>, under <a href=\"http://www.openstreetmap.org/copyright\">ODbL</a>","url":"http://tile.stamen.com/toner/{Z}/{X}/{Y}.png"},"id":"af065a3f-b660-4cd4-801e-1131573f80c4","type":"WMTSTileSource"},{"attributes":{},"id":"726cb2eb-138f-45a2-8709-2aeef2cf0cfe","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"5ed09f76-90ed-4747-804e-82b78cd45c24","type":"Title"},{"attributes":{"plot":{"id":"e70f96ff-6fd0-4391-81ca-feeb682b7f5c","subtype":"Figure","type":"Plot"},"ticker":{"id":"8665524b-8c3e-4854-bca7-55cc80325ce3","type":"BasicTicker"}},"id":"100fe2ac-799c-4d8c-84d1-6a37b916b95c","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2e3e997b-21fe-4f06-bcc2-a78fcd161a81","type":"PanTool"},{"id":"cb23f418-4b3d-4e1f-98d2-04dfc94760cb","type":"WheelZoomTool"}]},"id":"3a0acfa7-7881-44e3-9d0a-ca0fd5ce5a16","type":"Toolbar"},{"attributes":{"tile_source":{"id":"af065a3f-b660-4cd4-801e-1131573f80c4","type":"WMTSTileSource"}},"id":"40c9955b-6a98-4a22-b6f5-824f35703a21","type":"TileRenderer"},{"attributes":{"plot":{"id":"e70f96ff-6fd0-4391-81ca-feeb682b7f5c","subtype":"Figure","type":"Plot"}},"id":"2e3e997b-21fe-4f06-bcc2-a78fcd161a81","type":"PanTool"},{"attributes":{"below":[{"id":"61b552c6-58f8-4b84-85c3-10af88ad163d","type":"LinearAxis"}],"left":[{"id":"1bd14f62-31aa-43ab-b56e-f77fdbb4c026","type":"LinearAxis"}],"renderers":[{"id":"61b552c6-58f8-4b84-85c3-10af88ad163d","type":"LinearAxis"},{"id":"100fe2ac-799c-4d8c-84d1-6a37b916b95c","type":"Grid"},{"id":"1bd14f62-31aa-43ab-b56e-f77fdbb4c026","type":"LinearAxis"},{"id":"e4250c97-279b-4c7d-bb9e-08784440fd03","type":"Grid"},{"id":"40c9955b-6a98-4a22-b6f5-824f35703a21","type":"TileRenderer"}],"title":{"id":"5ed09f76-90ed-4747-804e-82b78cd45c24","type":"Title"},"tool_events":{"id":"67bc4427-70f0-4f1e-a81b-aeda50c2fb79","type":"ToolEvents"},"toolbar":{"id":"3a0acfa7-7881-44e3-9d0a-ca0fd5ce5a16","type":"Toolbar"},"x_range":{"id":"d05c9a6e-150f-48ed-9908-6daae9daf73b","type":"Range1d"},"y_range":{"id":"3e6270ca-775a-451e-b808-af656d3a1849","type":"Range1d"}},"id":"e70f96ff-6fd0-4391-81ca-feeb682b7f5c","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8665524b-8c3e-4854-bca7-55cc80325ce3","type":"BasicTicker"},{"attributes":{},"id":"67bc4427-70f0-4f1e-a81b-aeda50c2fb79","type":"ToolEvents"},{"attributes":{"formatter":{"id":"d956d390-c626-427e-92ab-a90390d7d9f4","type":"BasicTickFormatter"},"plot":{"id":"e70f96ff-6fd0-4391-81ca-feeb682b7f5c","subtype":"Figure","type":"Plot"},"ticker":{"id":"8665524b-8c3e-4854-bca7-55cc80325ce3","type":"BasicTicker"},"visible":false},"id":"61b552c6-58f8-4b84-85c3-10af88ad163d","type":"LinearAxis"},{"attributes":{"callback":null,"end":20000000,"start":-20000000},"id":"d05c9a6e-150f-48ed-9908-6daae9daf73b","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"e70f96ff-6fd0-4391-81ca-feeb682b7f5c","subtype":"Figure","type":"Plot"},"ticker":{"id":"726cb2eb-138f-45a2-8709-2aeef2cf0cfe","type":"BasicTicker"}},"id":"e4250c97-279b-4c7d-bb9e-08784440fd03","type":"Grid"}],"root_ids":["e70f96ff-6fd0-4391-81ca-feeb682b7f5c"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"fe318001-809d-455e-aa28-d734fe9f30f9","elementid":"badd1e80-af65-4b82-a2ff-941dfb7db4ca","modelid":"e70f96ff-6fd0-4391-81ca-feeb682b7f5c"}];
                
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
