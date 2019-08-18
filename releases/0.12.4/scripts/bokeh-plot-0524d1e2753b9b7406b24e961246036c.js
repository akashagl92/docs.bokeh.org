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
      };var element = document.getElementById("6968c741-5a9a-47ec-83a2-c1db509cf07e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6968c741-5a9a-47ec-83a2-c1db509cf07e' but no matching script tag was found. ")
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
                var docs_json = {"10c64432-0604-4c30-80bd-ced76d6c3167":{"roots":{"references":[{"attributes":{"active":0,"callback":null,"labels":["Option 1","Option 2","Option 3"]},"id":"2b73fd02-3ce2-48ea-8aa0-5a46be10e84d","type":"RadioButtonGroup"},{"attributes":{"callback":null,"end":10,"title":"Slider","value":1},"id":"9ec72464-e13e-48c9-8b8f-40d656dd431c","type":"Slider"},{"attributes":{"callback":null,"options":["foo","bar","baz","quux"],"title":"Option:","value":"foo"},"id":"7770f161-eecf-4da6-b3a5-7a9ce86f4723","type":"Select"},{"attributes":{"children":[{"id":"3dcfab15-3b1a-4ced-9a54-e1ae3722d083","type":"Button"},{"id":"9ec72464-e13e-48c9-8b8f-40d656dd431c","type":"Slider"},{"id":"2b73fd02-3ce2-48ea-8aa0-5a46be10e84d","type":"RadioButtonGroup"},{"id":"7770f161-eecf-4da6-b3a5-7a9ce86f4723","type":"Select"},{"id":"e0add933-3d1e-41a3-bd1b-911b33214cc5","type":"Button"}],"width":300},"id":"71231782-7eb3-4139-a1fc-48c9c4a8985f","type":"WidgetBox"},{"attributes":{"callback":null,"icon":null,"label":"Button 1"},"id":"3dcfab15-3b1a-4ced-9a54-e1ae3722d083","type":"Button"},{"attributes":{"callback":null,"icon":null,"label":"Button 2"},"id":"e0add933-3d1e-41a3-bd1b-911b33214cc5","type":"Button"}],"root_ids":["71231782-7eb3-4139-a1fc-48c9c4a8985f"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"10c64432-0604-4c30-80bd-ced76d6c3167","elementid":"6968c741-5a9a-47ec-83a2-c1db509cf07e","modelid":"71231782-7eb3-4139-a1fc-48c9c4a8985f"}];
                
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
