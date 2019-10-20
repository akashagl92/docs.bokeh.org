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
      };var element = document.getElementById("627981f1-435f-4f27-8752-31fd0bf67dea");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '627981f1-435f-4f27-8752-31fd0bf67dea' but no matching script tag was found. ")
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
                var docs_json = {"3973ab4c-7161-49f7-bbac-3503f609ca41":{"roots":{"references":[{"attributes":{},"id":"3aa04888-599d-4b9e-9bab-3fd147517f7f","type":"ToolEvents"},{"attributes":{"min_border_bottom":0,"min_border_left":0,"min_border_right":0,"min_border_top":0,"outline_line_color":{"value":null},"plot_height":105,"plot_width":150,"renderers":[{"id":"cfc0520c-755f-41bb-bb74-fd568e729b55","type":"Arrow"},{"id":"b36dfe78-bc9e-4d60-8f35-7d2266a86f66","type":"Label"},{"id":"b7770796-d43a-45ff-840f-59ee4e0842d4","type":"Arrow"},{"id":"3c651d86-8307-486b-a68b-c5999b377e05","type":"Label"},{"id":"477b82d1-1526-49e6-8388-0a79f2e0deed","type":"Arrow"},{"id":"dccfe5f4-5f92-4978-bf2a-6aaaf42fcac8","type":"Label"}],"title":{"id":"caa14f06-146c-4f86-a355-d778a067a85f","type":"Title"},"tool_events":{"id":"3aa04888-599d-4b9e-9bab-3fd147517f7f","type":"ToolEvents"},"toolbar":{"id":"534349d1-8255-48d5-bf90-5e3af46fe7ef","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c9a933aa-8dc2-46d5-bbd1-55d5e4968936","type":"Range1d"},"x_scale":{"id":"043dd71c-9375-4f09-8e01-6c5154590f9a","type":"LinearScale"},"y_range":{"id":"cfcbb540-d464-456a-bc60-4366f1af66a1","type":"Range1d"},"y_scale":{"id":"edf63570-e3d9-4694-bbae-acdbc8149097","type":"LinearScale"}},"id":"849499b1-7538-4eab-afd5-3f48c2d87c12","type":"Plot"},{"attributes":{"end":{"id":"e7869610-6bbb-4535-aadd-79974f4b9f74","type":"VeeHead"},"plot":{"id":"849499b1-7538-4eab-afd5-3f48c2d87c12","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":2},"y_start":{"value":2}},"id":"477b82d1-1526-49e6-8388-0a79f2e0deed","type":"Arrow"},{"attributes":{"plot":null},"id":"e7869610-6bbb-4535-aadd-79974f4b9f74","type":"VeeHead"},{"attributes":{"plot":null},"id":"fc0edf74-f1a7-45fc-a0f3-adfa0d0c3325","type":"OpenHead"},{"attributes":{"end":{"id":"614797a1-4fdd-423b-a965-6b7290a1ca6a","type":"NormalHead"},"plot":{"id":"849499b1-7538-4eab-afd5-3f48c2d87c12","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":1},"y_start":{"value":1}},"id":"b7770796-d43a-45ff-840f-59ee4e0842d4","type":"Arrow"},{"attributes":{"plot":null,"text":""},"id":"caa14f06-146c-4f86-a355-d778a067a85f","type":"Title"},{"attributes":{"plot":{"id":"849499b1-7538-4eab-afd5-3f48c2d87c12","type":"Plot"},"text":"NormalHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":1},"id":"3c651d86-8307-486b-a68b-c5999b377e05","type":"Label"},{"attributes":{"plot":{"id":"849499b1-7538-4eab-afd5-3f48c2d87c12","type":"Plot"},"text":"VeeHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":2},"id":"dccfe5f4-5f92-4978-bf2a-6aaaf42fcac8","type":"Label"},{"attributes":{"plot":null},"id":"614797a1-4fdd-423b-a965-6b7290a1ca6a","type":"NormalHead"},{"attributes":{"callback":null,"end":2.5,"start":-0.5},"id":"cfcbb540-d464-456a-bc60-4366f1af66a1","type":"Range1d"},{"attributes":{"end":{"id":"fc0edf74-f1a7-45fc-a0f3-adfa0d0c3325","type":"OpenHead"},"plot":{"id":"849499b1-7538-4eab-afd5-3f48c2d87c12","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":0},"y_start":{"value":0}},"id":"cfc0520c-755f-41bb-bb74-fd568e729b55","type":"Arrow"},{"attributes":{},"id":"043dd71c-9375-4f09-8e01-6c5154590f9a","type":"LinearScale"},{"attributes":{"callback":null},"id":"c9a933aa-8dc2-46d5-bbd1-55d5e4968936","type":"Range1d"},{"attributes":{},"id":"edf63570-e3d9-4694-bbae-acdbc8149097","type":"LinearScale"},{"attributes":{"plot":{"id":"849499b1-7538-4eab-afd5-3f48c2d87c12","type":"Plot"},"text":"OpenHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":0},"id":"b36dfe78-bc9e-4d60-8f35-7d2266a86f66","type":"Label"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"534349d1-8255-48d5-bf90-5e3af46fe7ef","type":"Toolbar"}],"root_ids":["849499b1-7538-4eab-afd5-3f48c2d87c12"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"3973ab4c-7161-49f7-bbac-3503f609ca41","elementid":"627981f1-435f-4f27-8752-31fd0bf67dea","modelid":"849499b1-7538-4eab-afd5-3f48c2d87c12"}];
                
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
