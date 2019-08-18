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
      };var element = document.getElementById("896bf1f2-729b-4c94-959a-3744161ff1b0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '896bf1f2-729b-4c94-959a-3744161ff1b0' but no matching script tag was found. ")
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
                var docs_json = {"1bb090e5-50d1-4a21-8b63-50fbe17d7063":{"roots":{"references":[{"attributes":{"callback":null,"icon":null,"label":"Button 1"},"id":"9017ba30-2c76-4bd0-a02a-49506f22aabb","type":"Button"},{"attributes":{"children":[{"id":"9017ba30-2c76-4bd0-a02a-49506f22aabb","type":"Button"},{"id":"4c15bd71-e4c1-4a8d-b5b2-aee09bea9dcb","type":"Slider"},{"id":"98d1776b-a228-46b3-b4bb-33afc3364bd6","type":"RadioButtonGroup"},{"id":"581017ac-9472-4045-ae6e-cb56806c6579","type":"Select"},{"id":"51f6fe9b-00fb-4115-b959-09e93c92c87b","type":"Button"}],"width":300},"id":"479f9527-1ee0-4273-8a2c-9e7e65504577","type":"WidgetBox"},{"attributes":{"callback":null,"icon":null,"label":"Button 2"},"id":"51f6fe9b-00fb-4115-b959-09e93c92c87b","type":"Button"},{"attributes":{"callback":null,"end":10,"title":"Slider","value":1},"id":"4c15bd71-e4c1-4a8d-b5b2-aee09bea9dcb","type":"Slider"},{"attributes":{"active":0,"callback":null,"labels":["Option 1","Option 2","Option 3"]},"id":"98d1776b-a228-46b3-b4bb-33afc3364bd6","type":"RadioButtonGroup"},{"attributes":{"callback":null,"options":["foo","bar","baz","quux"],"title":"Option:","value":"foo"},"id":"581017ac-9472-4045-ae6e-cb56806c6579","type":"Select"}],"root_ids":["479f9527-1ee0-4273-8a2c-9e7e65504577"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"1bb090e5-50d1-4a21-8b63-50fbe17d7063","elementid":"896bf1f2-729b-4c94-959a-3744161ff1b0","modelid":"479f9527-1ee0-4273-8a2c-9e7e65504577"}];
                
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
