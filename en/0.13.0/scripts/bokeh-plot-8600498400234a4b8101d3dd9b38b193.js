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
      };var element = document.getElementById("dff3b747-9298-42f1-9a39-7bef06603ff2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dff3b747-9298-42f1-9a39-7bef06603ff2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"0da4bf44-50cf-439a-8782-4b33c6e7681f":{"roots":{"references":[{"attributes":{"callback":null,"icon":null,"label":"Button 2"},"id":"bce4e53b-441c-4887-b6f1-a520bbd8c46c","type":"Button"},{"attributes":{"callback":null,"end":10,"start":0,"step":0.1,"title":"Slider","value":1},"id":"3e3a1046-69a5-4b56-a2df-44a41e7c2ab8","type":"Slider"},{"attributes":{"children":[{"id":"237d8a36-3629-40ee-9732-66e05d7ccfea","type":"Button"},{"id":"3e3a1046-69a5-4b56-a2df-44a41e7c2ab8","type":"Slider"},{"id":"070cc09f-60dd-4510-9a60-9e213728d868","type":"RadioButtonGroup"},{"id":"f49c94d4-6385-48d9-a2a8-621d3bd634ba","type":"Select"},{"id":"bce4e53b-441c-4887-b6f1-a520bbd8c46c","type":"Button"}],"width":300},"id":"73f96170-9d1e-429d-a6ba-ac486b01a0a9","type":"WidgetBox"},{"attributes":{"active":0,"callback":null,"labels":["Option 1","Option 2","Option 3"]},"id":"070cc09f-60dd-4510-9a60-9e213728d868","type":"RadioButtonGroup"},{"attributes":{"callback":null,"options":["foo","bar","baz","quux"],"title":"Option:","value":"foo"},"id":"f49c94d4-6385-48d9-a2a8-621d3bd634ba","type":"Select"},{"attributes":{"callback":null,"icon":null,"label":"Button 1"},"id":"237d8a36-3629-40ee-9732-66e05d7ccfea","type":"Button"}],"root_ids":["73f96170-9d1e-429d-a6ba-ac486b01a0a9"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"0da4bf44-50cf-439a-8782-4b33c6e7681f","roots":{"73f96170-9d1e-429d-a6ba-ac486b01a0a9":"dff3b747-9298-42f1-9a39-7bef06603ff2"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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