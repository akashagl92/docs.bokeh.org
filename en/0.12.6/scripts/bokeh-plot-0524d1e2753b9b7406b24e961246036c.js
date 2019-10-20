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
      };var element = document.getElementById("941fa7b1-e43b-42df-aabc-9180e5e6556c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '941fa7b1-e43b-42df-aabc-9180e5e6556c' but no matching script tag was found. ")
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
                var docs_json = {"576fd652-dda1-4424-9c73-a2872e434db7":{"roots":{"references":[{"attributes":{"callback":null,"options":["foo","bar","baz","quux"],"title":"Option:","value":"foo"},"id":"55d1e267-1332-4192-bc09-5426cc16967b","type":"Select"},{"attributes":{"children":[{"id":"2aa3ce9a-83ad-4f4f-bb68-7d1d459f3a57","type":"Button"},{"id":"8e65c18e-dc5b-4587-acf4-5e986c8c51a8","type":"Slider"},{"id":"aed83713-0f9d-4d56-83cf-65f6e9c69120","type":"RadioButtonGroup"},{"id":"55d1e267-1332-4192-bc09-5426cc16967b","type":"Select"},{"id":"ffd6e9ea-d88a-4418-b0cc-ba7faadceae3","type":"Button"}],"width":300},"id":"4129ff7f-8520-47df-bfc5-b359aef39bc6","type":"WidgetBox"},{"attributes":{"callback":null,"icon":null,"label":"Button 2"},"id":"ffd6e9ea-d88a-4418-b0cc-ba7faadceae3","type":"Button"},{"attributes":{"callback":null,"end":10,"title":"Slider","value":1},"id":"8e65c18e-dc5b-4587-acf4-5e986c8c51a8","type":"Slider"},{"attributes":{"callback":null,"icon":null,"label":"Button 1"},"id":"2aa3ce9a-83ad-4f4f-bb68-7d1d459f3a57","type":"Button"},{"attributes":{"active":0,"callback":null,"labels":["Option 1","Option 2","Option 3"]},"id":"aed83713-0f9d-4d56-83cf-65f6e9c69120","type":"RadioButtonGroup"}],"root_ids":["4129ff7f-8520-47df-bfc5-b359aef39bc6"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"576fd652-dda1-4424-9c73-a2872e434db7","elementid":"941fa7b1-e43b-42df-aabc-9180e5e6556c","modelid":"4129ff7f-8520-47df-bfc5-b359aef39bc6"}];
                
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
