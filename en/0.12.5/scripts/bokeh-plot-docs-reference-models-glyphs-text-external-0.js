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
      };var element = document.getElementById("23f94882-203f-4e9b-bcf4-e80b9efc6af8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '23f94882-203f-4e9b-bcf4-e80b9efc6af8' but no matching script tag was found. ")
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
                var docs_json = {"cd36bce7-6f1c-4c00-87d7-46dd4b07fff5":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"19a72158-358c-4013-9346-d7903d045e00","type":"Toolbar"},{"attributes":{"callback":null},"id":"34b83a29-7345-4d8e-8199-b82b30466f7f","type":"DataRange1d"},{"attributes":{"formatter":{"id":"c5c835c2-8449-4e2c-a71d-2c4b5030aac8","type":"BasicTickFormatter"},"plot":{"id":"28984b99-10f5-4641-9b82-ddfba9890a8a","type":"Plot"},"ticker":{"id":"9fe41915-dcf7-4f5e-8a81-5dcd780cd721","type":"BasicTicker"}},"id":"958552f0-1b1c-4ba8-a0a4-08ace3aa0b5a","type":"LinearAxis"},{"attributes":{"data_source":{"id":"382dce08-51bf-4816-9431-5c7a13c87662","type":"ColumnDataSource"},"glyph":{"id":"272573dd-bd7a-4f3a-94cc-f47007061130","type":"Text"},"hover_glyph":null,"muted_glyph":null},"id":"598e717c-a169-4aa2-9140-65f934de0e29","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"7cb9a605-fe25-45da-a10f-a47c3ec800e3","type":"BasicTickFormatter"},"plot":{"id":"28984b99-10f5-4641-9b82-ddfba9890a8a","type":"Plot"},"ticker":{"id":"01af366a-2166-479d-bed0-38e6d7ffc4cd","type":"BasicTicker"}},"id":"9094415e-b298-446e-99f0-6dc0b50ceaa6","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":0.3},"text_color":{"value":"#96deb3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"272573dd-bd7a-4f3a-94cc-f47007061130","type":"Text"},{"attributes":{},"id":"01af366a-2166-479d-bed0-38e6d7ffc4cd","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["text","x","y"],"data":{"text":["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"],"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"382dce08-51bf-4816-9431-5c7a13c87662","type":"ColumnDataSource"},{"attributes":{},"id":"c5c835c2-8449-4e2c-a71d-2c4b5030aac8","type":"BasicTickFormatter"},{"attributes":{},"id":"9fe41915-dcf7-4f5e-8a81-5dcd780cd721","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"28984b99-10f5-4641-9b82-ddfba9890a8a","type":"Plot"},"ticker":{"id":"01af366a-2166-479d-bed0-38e6d7ffc4cd","type":"BasicTicker"}},"id":"d6937ba5-142d-49ac-b85c-bc5f65c2a8ab","type":"Grid"},{"attributes":{"plot":{"id":"28984b99-10f5-4641-9b82-ddfba9890a8a","type":"Plot"},"ticker":{"id":"9fe41915-dcf7-4f5e-8a81-5dcd780cd721","type":"BasicTicker"}},"id":"8ecf9072-a2a4-4443-a5ef-3af3b632c9b8","type":"Grid"},{"attributes":{"callback":null},"id":"eb951809-f5d7-4f23-9aad-dab0dca7f712","type":"DataRange1d"},{"attributes":{"below":[{"id":"958552f0-1b1c-4ba8-a0a4-08ace3aa0b5a","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"9094415e-b298-446e-99f0-6dc0b50ceaa6","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"598e717c-a169-4aa2-9140-65f934de0e29","type":"GlyphRenderer"},{"id":"958552f0-1b1c-4ba8-a0a4-08ace3aa0b5a","type":"LinearAxis"},{"id":"9094415e-b298-446e-99f0-6dc0b50ceaa6","type":"LinearAxis"},{"id":"8ecf9072-a2a4-4443-a5ef-3af3b632c9b8","type":"Grid"},{"id":"d6937ba5-142d-49ac-b85c-bc5f65c2a8ab","type":"Grid"}],"title":null,"tool_events":{"id":"182e4ad5-d203-4804-a83d-120b8ae6d96d","type":"ToolEvents"},"toolbar":{"id":"19a72158-358c-4013-9346-d7903d045e00","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"34b83a29-7345-4d8e-8199-b82b30466f7f","type":"DataRange1d"},"y_range":{"id":"eb951809-f5d7-4f23-9aad-dab0dca7f712","type":"DataRange1d"}},"id":"28984b99-10f5-4641-9b82-ddfba9890a8a","type":"Plot"},{"attributes":{},"id":"182e4ad5-d203-4804-a83d-120b8ae6d96d","type":"ToolEvents"},{"attributes":{},"id":"7cb9a605-fe25-45da-a10f-a47c3ec800e3","type":"BasicTickFormatter"}],"root_ids":["28984b99-10f5-4641-9b82-ddfba9890a8a"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"cd36bce7-6f1c-4c00-87d7-46dd4b07fff5","elementid":"23f94882-203f-4e9b-bcf4-e80b9efc6af8","modelid":"28984b99-10f5-4641-9b82-ddfba9890a8a"}];
                
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
