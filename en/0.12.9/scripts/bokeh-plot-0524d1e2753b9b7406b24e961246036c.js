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
      };var element = document.getElementById("50b52dad-7ad1-44b5-8df3-4392e970ce2b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '50b52dad-7ad1-44b5-8df3-4392e970ce2b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"2c45c781-9523-4c54-b3f3-e729d1a2337a":{"roots":{"references":[{"attributes":{"callback":null,"end":10,"start":0,"step":0.1,"title":"Slider","value":1},"id":"6c4ad898-590f-4a69-8b47-9ca95fcc4c72","type":"Slider"},{"attributes":{"active":0,"callback":null,"labels":["Option 1","Option 2","Option 3"]},"id":"2f7a0c2d-ab28-4880-8ee2-901183657db1","type":"RadioButtonGroup"},{"attributes":{"callback":null,"icon":null,"label":"Button 2"},"id":"91b525a8-04ec-4326-9bdc-d014126e002d","type":"Button"},{"attributes":{"callback":null,"icon":null,"label":"Button 1"},"id":"198c6a42-6281-41b0-9c9a-d2ac1bfa87dc","type":"Button"},{"attributes":{"children":[{"id":"198c6a42-6281-41b0-9c9a-d2ac1bfa87dc","type":"Button"},{"id":"6c4ad898-590f-4a69-8b47-9ca95fcc4c72","type":"Slider"},{"id":"2f7a0c2d-ab28-4880-8ee2-901183657db1","type":"RadioButtonGroup"},{"id":"84fe2fde-9a95-479e-a48f-ad051a1a5aeb","type":"Select"},{"id":"91b525a8-04ec-4326-9bdc-d014126e002d","type":"Button"}],"width":300},"id":"f6e373c9-ab6d-4cc0-bd9b-bf30733d3ecc","type":"WidgetBox"},{"attributes":{"callback":null,"options":["foo","bar","baz","quux"],"title":"Option:","value":"foo"},"id":"84fe2fde-9a95-479e-a48f-ad051a1a5aeb","type":"Select"}],"root_ids":["f6e373c9-ab6d-4cc0-bd9b-bf30733d3ecc"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"2c45c781-9523-4c54-b3f3-e729d1a2337a","elementid":"50b52dad-7ad1-44b5-8df3-4392e970ce2b","modelid":"f6e373c9-ab6d-4cc0-bd9b-bf30733d3ecc"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
