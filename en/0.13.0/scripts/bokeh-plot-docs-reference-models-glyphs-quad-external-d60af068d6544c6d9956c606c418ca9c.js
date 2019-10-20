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
      };var element = document.getElementById("2ad4734f-7a5c-4d15-b989-6b5568201478");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2ad4734f-7a5c-4d15-b989-6b5568201478' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4232ce34-81e9-4756-9fa9-b4d0236b98dd":{"roots":{"references":[{"attributes":{"formatter":{"id":"eda2d9df-2977-4e30-846e-e8403248e810","type":"BasicTickFormatter"},"plot":{"id":"d1633f92-4a0d-40dd-a2c0-afc35fe7dc22","type":"Plot"},"ticker":{"id":"91fb50e5-6a24-4f54-8711-2a5efd7646ca","type":"BasicTicker"}},"id":"f7b14b9d-a6f4-4f57-b3f9-a7936e752a76","type":"LinearAxis"},{"attributes":{},"id":"f09865df-9fd6-48b6-9e76-cdcad8bfdc6d","type":"LinearScale"},{"attributes":{"formatter":{"id":"2ee92cbd-a1c4-40a2-b0e8-dc3227ddae43","type":"BasicTickFormatter"},"plot":{"id":"d1633f92-4a0d-40dd-a2c0-afc35fe7dc22","type":"Plot"},"ticker":{"id":"9c0d929b-a221-473e-a10c-1722231ee729","type":"BasicTicker"}},"id":"093fb08b-10df-44ca-a0ae-39db5cac665f","type":"LinearAxis"},{"attributes":{},"id":"9c0d929b-a221-473e-a10c-1722231ee729","type":"BasicTicker"},{"attributes":{"below":[{"id":"f7b14b9d-a6f4-4f57-b3f9-a7936e752a76","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"093fb08b-10df-44ca-a0ae-39db5cac665f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e231386c-17a6-46f2-88dc-9a1d63aeb4ed","type":"GlyphRenderer"},{"id":"f7b14b9d-a6f4-4f57-b3f9-a7936e752a76","type":"LinearAxis"},{"id":"093fb08b-10df-44ca-a0ae-39db5cac665f","type":"LinearAxis"},{"id":"cf849268-8723-42eb-a52e-a661f54d91c6","type":"Grid"},{"id":"02ba4a46-b7db-4ffe-a5b9-1ad95e0c021a","type":"Grid"}],"title":null,"toolbar":{"id":"8f9b0a60-5ca8-4876-a961-6f1b6ebc9389","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ba4c914a-f0b6-475d-bd07-dd5b8539a47c","type":"DataRange1d"},"x_scale":{"id":"f09865df-9fd6-48b6-9e76-cdcad8bfdc6d","type":"LinearScale"},"y_range":{"id":"a93130aa-4593-49a7-bff3-5381b031dab9","type":"DataRange1d"},"y_scale":{"id":"b88beb67-273d-4648-bca8-6499dfdf3799","type":"LinearScale"}},"id":"d1633f92-4a0d-40dd-a2c0-afc35fe7dc22","type":"Plot"},{"attributes":{"callback":null},"id":"a93130aa-4593-49a7-bff3-5381b031dab9","type":"DataRange1d"},{"attributes":{"plot":{"id":"d1633f92-4a0d-40dd-a2c0-afc35fe7dc22","type":"Plot"},"ticker":{"id":"91fb50e5-6a24-4f54-8711-2a5efd7646ca","type":"BasicTicker"}},"id":"cf849268-8723-42eb-a52e-a661f54d91c6","type":"Grid"},{"attributes":{},"id":"54454dd1-fe8f-4b32-a5cf-6ef01d0ad8c2","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"8f9b0a60-5ca8-4876-a961-6f1b6ebc9389","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"d1633f92-4a0d-40dd-a2c0-afc35fe7dc22","type":"Plot"},"ticker":{"id":"9c0d929b-a221-473e-a10c-1722231ee729","type":"BasicTicker"}},"id":"02ba4a46-b7db-4ffe-a5b9-1ad95e0c021a","type":"Grid"},{"attributes":{"source":{"id":"e5f568da-ed7e-48de-9e40-0c99c62eab17","type":"ColumnDataSource"}},"id":"e28f5668-b280-4fa1-a270-f1c22979c21d","type":"CDSView"},{"attributes":{"callback":null,"data":{"bottom":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]},"left":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"right":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"top":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"e0167249-f2e0-4faf-b2f2-081fb25e0c13","type":"Selection"},"selection_policy":{"id":"54454dd1-fe8f-4b32-a5cf-6ef01d0ad8c2","type":"UnionRenderers"}},"id":"e5f568da-ed7e-48de-9e40-0c99c62eab17","type":"ColumnDataSource"},{"attributes":{},"id":"91fb50e5-6a24-4f54-8711-2a5efd7646ca","type":"BasicTicker"},{"attributes":{},"id":"e0167249-f2e0-4faf-b2f2-081fb25e0c13","type":"Selection"},{"attributes":{"callback":null},"id":"ba4c914a-f0b6-475d-bd07-dd5b8539a47c","type":"DataRange1d"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#b3de69"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"83e3d658-da58-46d2-8ef3-7d1b38b8c87a","type":"Quad"},{"attributes":{},"id":"b88beb67-273d-4648-bca8-6499dfdf3799","type":"LinearScale"},{"attributes":{},"id":"eda2d9df-2977-4e30-846e-e8403248e810","type":"BasicTickFormatter"},{"attributes":{},"id":"2ee92cbd-a1c4-40a2-b0e8-dc3227ddae43","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"e5f568da-ed7e-48de-9e40-0c99c62eab17","type":"ColumnDataSource"},"glyph":{"id":"83e3d658-da58-46d2-8ef3-7d1b38b8c87a","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"e28f5668-b280-4fa1-a270-f1c22979c21d","type":"CDSView"}},"id":"e231386c-17a6-46f2-88dc-9a1d63aeb4ed","type":"GlyphRenderer"}],"root_ids":["d1633f92-4a0d-40dd-a2c0-afc35fe7dc22"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"4232ce34-81e9-4756-9fa9-b4d0236b98dd","roots":{"d1633f92-4a0d-40dd-a2c0-afc35fe7dc22":"2ad4734f-7a5c-4d15-b989-6b5568201478"}}];
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