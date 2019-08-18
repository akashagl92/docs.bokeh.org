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
      };var element = document.getElementById("61c78d31-d624-4782-a859-372e9df715cf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '61c78d31-d624-4782-a859-372e9df715cf' but no matching script tag was found. ")
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
                var docs_json = {"d401e34e-856e-494e-98f2-3126d8b17fc1":{"roots":{"references":[{"attributes":{"callback":null,"end":2.5,"start":-0.5},"id":"356c933b-3175-4e33-a402-151596385fb8","type":"Range1d"},{"attributes":{"plot":null,"text":""},"id":"34f3523f-d39e-4958-8244-205aa6cfad49","type":"Title"},{"attributes":{"plot":null},"id":"e95c07ce-6a79-47dc-a1d0-c0c02da4f9c8","type":"VeeHead"},{"attributes":{"plot":{"id":"411412a3-ff74-4465-9eb0-4be7563c2c53","type":"Plot"},"text":"OpenHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":0},"id":"551426f0-1a90-4e1d-9c54-63062a69038c","type":"Label"},{"attributes":{"end":{"id":"c72daf31-cd59-46c7-af5b-179f27265799","type":"OpenHead"},"plot":{"id":"411412a3-ff74-4465-9eb0-4be7563c2c53","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":0},"y_start":{"value":0}},"id":"eb1c311d-823c-4813-8f9b-b116733711f9","type":"Arrow"},{"attributes":{},"id":"98253b22-7a15-4207-a427-0bef77b884c9","type":"ToolEvents"},{"attributes":{"plot":null},"id":"3141c1ed-8da4-4439-ada5-9ba88e6cad4e","type":"NormalHead"},{"attributes":{"plot":null},"id":"c72daf31-cd59-46c7-af5b-179f27265799","type":"OpenHead"},{"attributes":{"min_border_bottom":0,"min_border_left":0,"min_border_right":0,"min_border_top":0,"outline_line_color":{"value":null},"plot_height":105,"plot_width":150,"renderers":[{"id":"eb1c311d-823c-4813-8f9b-b116733711f9","type":"Arrow"},{"id":"551426f0-1a90-4e1d-9c54-63062a69038c","type":"Label"},{"id":"85aaa084-26f4-4827-adb6-4388886b3319","type":"Arrow"},{"id":"a4a283f0-af93-4114-8a8d-d7b1f8a92898","type":"Label"},{"id":"4d06a783-5b88-4331-a0a9-36b67f4fa3e2","type":"Arrow"},{"id":"241ae88d-6a3f-4979-9709-db5b0983345f","type":"Label"}],"title":{"id":"34f3523f-d39e-4958-8244-205aa6cfad49","type":"Title"},"tool_events":{"id":"98253b22-7a15-4207-a427-0bef77b884c9","type":"ToolEvents"},"toolbar":{"id":"ed570cbb-591b-4df6-9728-f03a2ad3752b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c6dd36dc-56e1-4863-8a2e-a5ea06af1034","type":"Range1d"},"y_range":{"id":"356c933b-3175-4e33-a402-151596385fb8","type":"Range1d"}},"id":"411412a3-ff74-4465-9eb0-4be7563c2c53","type":"Plot"},{"attributes":{"end":{"id":"3141c1ed-8da4-4439-ada5-9ba88e6cad4e","type":"NormalHead"},"plot":{"id":"411412a3-ff74-4465-9eb0-4be7563c2c53","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":1},"y_start":{"value":1}},"id":"85aaa084-26f4-4827-adb6-4388886b3319","type":"Arrow"},{"attributes":{"plot":{"id":"411412a3-ff74-4465-9eb0-4be7563c2c53","type":"Plot"},"text":"VeeHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":2},"id":"241ae88d-6a3f-4979-9709-db5b0983345f","type":"Label"},{"attributes":{"end":{"id":"e95c07ce-6a79-47dc-a1d0-c0c02da4f9c8","type":"VeeHead"},"plot":{"id":"411412a3-ff74-4465-9eb0-4be7563c2c53","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":2},"y_start":{"value":2}},"id":"4d06a783-5b88-4331-a0a9-36b67f4fa3e2","type":"Arrow"},{"attributes":{"callback":null},"id":"c6dd36dc-56e1-4863-8a2e-a5ea06af1034","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ed570cbb-591b-4df6-9728-f03a2ad3752b","type":"Toolbar"},{"attributes":{"plot":{"id":"411412a3-ff74-4465-9eb0-4be7563c2c53","type":"Plot"},"text":"NormalHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":1},"id":"a4a283f0-af93-4114-8a8d-d7b1f8a92898","type":"Label"}],"root_ids":["411412a3-ff74-4465-9eb0-4be7563c2c53"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"d401e34e-856e-494e-98f2-3126d8b17fc1","elementid":"61c78d31-d624-4782-a859-372e9df715cf","modelid":"411412a3-ff74-4465-9eb0-4be7563c2c53"}];
                
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
