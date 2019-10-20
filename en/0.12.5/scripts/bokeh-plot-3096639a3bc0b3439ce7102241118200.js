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
      };var element = document.getElementById("f8221278-7729-4386-af9e-eb2d5069f1e3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f8221278-7729-4386-af9e-eb2d5069f1e3' but no matching script tag was found. ")
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
                var docs_json = {"d0fc4176-e7aa-48a5-be0b-a6795645da0a":{"roots":{"references":[{"attributes":{"end":{"id":"c32f0f97-4a21-47c1-a086-c703dd0a47e7","type":"VeeHead"},"plot":{"id":"30a644e0-ab37-4f08-b461-47162b1deb35","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":2},"y_start":{"value":2}},"id":"e0d7c513-8b6f-41b7-a377-0f621760c839","type":"Arrow"},{"attributes":{"plot":null},"id":"575241b6-2402-4238-9332-1ae3e068abd5","type":"OpenHead"},{"attributes":{"end":{"id":"575241b6-2402-4238-9332-1ae3e068abd5","type":"OpenHead"},"plot":{"id":"30a644e0-ab37-4f08-b461-47162b1deb35","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":0},"y_start":{"value":0}},"id":"761f0835-0049-445e-addc-32929487a093","type":"Arrow"},{"attributes":{},"id":"198a80c7-07a4-470c-a4d8-c2f68b0c0d91","type":"ToolEvents"},{"attributes":{"callback":null},"id":"2d5644b6-9d97-4bf9-a85a-595369716b7f","type":"Range1d"},{"attributes":{"plot":null},"id":"c32f0f97-4a21-47c1-a086-c703dd0a47e7","type":"VeeHead"},{"attributes":{"plot":{"id":"30a644e0-ab37-4f08-b461-47162b1deb35","type":"Plot"},"text":"VeeHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":2},"id":"145e5354-9014-49c0-acf5-c6c607431db4","type":"Label"},{"attributes":{"min_border_bottom":0,"min_border_left":0,"min_border_right":0,"min_border_top":0,"outline_line_color":{"value":null},"plot_height":105,"plot_width":150,"renderers":[{"id":"761f0835-0049-445e-addc-32929487a093","type":"Arrow"},{"id":"c825505b-382d-49f1-9ccd-3559b666ed15","type":"Label"},{"id":"55618b95-aaf0-4e30-9629-fca1c67998b5","type":"Arrow"},{"id":"1fbf5613-f4ca-4205-b7c0-89da0ce3f1a4","type":"Label"},{"id":"e0d7c513-8b6f-41b7-a377-0f621760c839","type":"Arrow"},{"id":"145e5354-9014-49c0-acf5-c6c607431db4","type":"Label"}],"title":{"id":"5cdff6ad-fce3-4964-99bb-7ff15b4d4216","type":"Title"},"tool_events":{"id":"198a80c7-07a4-470c-a4d8-c2f68b0c0d91","type":"ToolEvents"},"toolbar":{"id":"3b7683a9-66cf-4da1-9af4-4fa146c50f58","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2d5644b6-9d97-4bf9-a85a-595369716b7f","type":"Range1d"},"y_range":{"id":"262eb658-70a6-4a6e-9a41-709466f94eb9","type":"Range1d"}},"id":"30a644e0-ab37-4f08-b461-47162b1deb35","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"5cdff6ad-fce3-4964-99bb-7ff15b4d4216","type":"Title"},{"attributes":{"end":{"id":"35101366-50e4-4e8f-a6cb-4c86783d2e44","type":"NormalHead"},"plot":{"id":"30a644e0-ab37-4f08-b461-47162b1deb35","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":1},"y_start":{"value":1}},"id":"55618b95-aaf0-4e30-9629-fca1c67998b5","type":"Arrow"},{"attributes":{"plot":{"id":"30a644e0-ab37-4f08-b461-47162b1deb35","type":"Plot"},"text":"NormalHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":1},"id":"1fbf5613-f4ca-4205-b7c0-89da0ce3f1a4","type":"Label"},{"attributes":{"plot":{"id":"30a644e0-ab37-4f08-b461-47162b1deb35","type":"Plot"},"text":"OpenHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":0},"id":"c825505b-382d-49f1-9ccd-3559b666ed15","type":"Label"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"3b7683a9-66cf-4da1-9af4-4fa146c50f58","type":"Toolbar"},{"attributes":{"callback":null,"end":2.5,"start":-0.5},"id":"262eb658-70a6-4a6e-9a41-709466f94eb9","type":"Range1d"},{"attributes":{"plot":null},"id":"35101366-50e4-4e8f-a6cb-4c86783d2e44","type":"NormalHead"}],"root_ids":["30a644e0-ab37-4f08-b461-47162b1deb35"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"d0fc4176-e7aa-48a5-be0b-a6795645da0a","elementid":"f8221278-7729-4386-af9e-eb2d5069f1e3","modelid":"30a644e0-ab37-4f08-b461-47162b1deb35"}];
                
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
