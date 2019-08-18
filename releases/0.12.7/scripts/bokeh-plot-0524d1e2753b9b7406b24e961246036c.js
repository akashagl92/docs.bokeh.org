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
      };var element = document.getElementById("ad2d3176-43a5-44ea-ba4f-414222edac76");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ad2d3176-43a5-44ea-ba4f-414222edac76' but no matching script tag was found. ")
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
                var docs_json = {"f9c5bad5-d005-435a-9c40-f9a2d539d3ed":{"roots":{"references":[{"attributes":{"active":0,"callback":null,"labels":["Option 1","Option 2","Option 3"]},"id":"609775d6-9277-460c-9bb8-4f8ae0a877e8","type":"RadioButtonGroup"},{"attributes":{"callback":null,"icon":null,"label":"Button 2"},"id":"a843174e-b006-498b-9c5f-9eb2cdd77ad8","type":"Button"},{"attributes":{"callback":null,"end":10,"start":0,"step":0.1,"title":"Slider","value":1},"id":"de6fe7d1-a086-4f42-b6a6-e57555d694d9","type":"Slider"},{"attributes":{"children":[{"id":"1991cbcb-b1c3-44da-9d5b-18bc96643f3b","type":"Button"},{"id":"de6fe7d1-a086-4f42-b6a6-e57555d694d9","type":"Slider"},{"id":"609775d6-9277-460c-9bb8-4f8ae0a877e8","type":"RadioButtonGroup"},{"id":"b0559d73-2b9d-4cfb-aaf3-5d1d84d9d227","type":"Select"},{"id":"a843174e-b006-498b-9c5f-9eb2cdd77ad8","type":"Button"}],"width":300},"id":"cfcf97a7-4652-4c3b-a34f-c6969d60142b","type":"WidgetBox"},{"attributes":{"callback":null,"icon":null,"label":"Button 1"},"id":"1991cbcb-b1c3-44da-9d5b-18bc96643f3b","type":"Button"},{"attributes":{"callback":null,"options":["foo","bar","baz","quux"],"title":"Option:","value":"foo"},"id":"b0559d73-2b9d-4cfb-aaf3-5d1d84d9d227","type":"Select"}],"root_ids":["cfcf97a7-4652-4c3b-a34f-c6969d60142b"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"f9c5bad5-d005-435a-9c40-f9a2d539d3ed","elementid":"ad2d3176-43a5-44ea-ba4f-414222edac76","modelid":"cfcf97a7-4652-4c3b-a34f-c6969d60142b"}];
                
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
