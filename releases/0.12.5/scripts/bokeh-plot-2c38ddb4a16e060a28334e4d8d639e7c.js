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
      };var element = document.getElementById("b55831f8-a8d4-4eb2-8b36-47b61f2bd5f1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b55831f8-a8d4-4eb2-8b36-47b61f2bd5f1' but no matching script tag was found. ")
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
                var docs_json = {"d73ce80c-f5b0-44fb-aab0-6fa5e9a0fcec":{"roots":{"references":[{"attributes":{"plot":{"id":"11c8910e-a03f-4b0e-9fae-7ae150a15bfc","subtype":"Figure","type":"Plot"}},"id":"fe6ccf41-de3e-4a70-90aa-3f7f16d7fa40","type":"ResetTool"},{"attributes":{"background_fill_alpha":{"value":0.5},"background_fill_color":{"value":"beige"},"below":[{"id":"056375c6-bf8c-44d5-a236-f843cded6f49","type":"LinearAxis"}],"left":[{"id":"eb2d3384-798d-4baf-8e4e-3bf1f2acf2df","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"056375c6-bf8c-44d5-a236-f843cded6f49","type":"LinearAxis"},{"id":"f163afef-57c1-48c8-80cb-dbd732deab06","type":"Grid"},{"id":"eb2d3384-798d-4baf-8e4e-3bf1f2acf2df","type":"LinearAxis"},{"id":"b827c64e-9648-4fbb-96b7-25b3339cc452","type":"Grid"},{"id":"6de362c9-d7fc-4a76-9c69-ec12b9b98f77","type":"BoxAnnotation"},{"id":"4dae36c6-32e0-48b4-bc0c-9a0699c6799f","type":"GlyphRenderer"}],"title":{"id":"5960a969-9675-4b2c-b713-e055e9391b4f","type":"Title"},"tool_events":{"id":"4831b3b7-f55e-497b-adc4-846a674044a6","type":"ToolEvents"},"toolbar":{"id":"b0e55e0b-5efd-48d3-a0db-b77713a32eee","type":"Toolbar"},"x_range":{"id":"a2dd3b38-3402-4b9b-b7ef-a10fe4777e0b","type":"DataRange1d"},"y_range":{"id":"c65715c5-6fae-46fb-99ce-49dc8bf45064","type":"DataRange1d"}},"id":"11c8910e-a03f-4b0e-9fae-7ae150a15bfc","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9c485aa2-d9b9-4e07-8ec9-3ce7035216de","type":"Circle"},{"attributes":{"formatter":{"id":"4c7cdc8f-6ce1-4689-b1c2-5e6dcb8d62b2","type":"BasicTickFormatter"},"plot":{"id":"11c8910e-a03f-4b0e-9fae-7ae150a15bfc","subtype":"Figure","type":"Plot"},"ticker":{"id":"7d56d864-7dc6-468c-a251-f430e8ceb813","type":"BasicTicker"}},"id":"056375c6-bf8c-44d5-a236-f843cded6f49","type":"LinearAxis"},{"attributes":{"plot":{"id":"11c8910e-a03f-4b0e-9fae-7ae150a15bfc","subtype":"Figure","type":"Plot"}},"id":"bd83dc19-1fa7-451c-b722-72ac3d5ce0c9","type":"SaveTool"},{"attributes":{"formatter":{"id":"b2e3769c-ef68-47c6-a237-0b6bc7d92098","type":"BasicTickFormatter"},"plot":{"id":"11c8910e-a03f-4b0e-9fae-7ae150a15bfc","subtype":"Figure","type":"Plot"},"ticker":{"id":"43c4f2d8-12db-4e2e-9475-af1940347e70","type":"BasicTicker"}},"id":"eb2d3384-798d-4baf-8e4e-3bf1f2acf2df","type":"LinearAxis"},{"attributes":{},"id":"43c4f2d8-12db-4e2e-9475-af1940347e70","type":"BasicTicker"},{"attributes":{},"id":"4c7cdc8f-6ce1-4689-b1c2-5e6dcb8d62b2","type":"BasicTickFormatter"},{"attributes":{},"id":"b2e3769c-ef68-47c6-a237-0b6bc7d92098","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"cb562d7e-f135-4106-9f3c-e6ad6245845f","type":"Circle"},{"attributes":{"callback":null},"id":"c65715c5-6fae-46fb-99ce-49dc8bf45064","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8609e428-ed94-435c-a46d-d10e3bb6e92f","type":"PanTool"},{"id":"852f41d4-b8df-4ca6-9d96-c04d22cf60d7","type":"WheelZoomTool"},{"id":"50f298d4-c6e4-436e-b08d-2fa145e2cc7d","type":"BoxZoomTool"},{"id":"bd83dc19-1fa7-451c-b722-72ac3d5ce0c9","type":"SaveTool"},{"id":"fe6ccf41-de3e-4a70-90aa-3f7f16d7fa40","type":"ResetTool"},{"id":"f8a6fcbb-11b7-4305-be05-f51551e50f3f","type":"HelpTool"}]},"id":"b0e55e0b-5efd-48d3-a0db-b77713a32eee","type":"Toolbar"},{"attributes":{"plot":{"id":"11c8910e-a03f-4b0e-9fae-7ae150a15bfc","subtype":"Figure","type":"Plot"}},"id":"f8a6fcbb-11b7-4305-be05-f51551e50f3f","type":"HelpTool"},{"attributes":{"plot":{"id":"11c8910e-a03f-4b0e-9fae-7ae150a15bfc","subtype":"Figure","type":"Plot"}},"id":"8609e428-ed94-435c-a46d-d10e3bb6e92f","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6de362c9-d7fc-4a76-9c69-ec12b9b98f77","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"885501fc-8470-40d0-8e9d-9c857e978723","type":"ColumnDataSource"},"glyph":{"id":"cb562d7e-f135-4106-9f3c-e6ad6245845f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9c485aa2-d9b9-4e07-8ec9-3ce7035216de","type":"Circle"},"selection_glyph":null},"id":"4dae36c6-32e0-48b4-bc0c-9a0699c6799f","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"6de362c9-d7fc-4a76-9c69-ec12b9b98f77","type":"BoxAnnotation"},"plot":{"id":"11c8910e-a03f-4b0e-9fae-7ae150a15bfc","subtype":"Figure","type":"Plot"}},"id":"50f298d4-c6e4-436e-b08d-2fa145e2cc7d","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"a2dd3b38-3402-4b9b-b7ef-a10fe4777e0b","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"11c8910e-a03f-4b0e-9fae-7ae150a15bfc","subtype":"Figure","type":"Plot"},"ticker":{"id":"43c4f2d8-12db-4e2e-9475-af1940347e70","type":"BasicTicker"}},"id":"b827c64e-9648-4fbb-96b7-25b3339cc452","type":"Grid"},{"attributes":{},"id":"7d56d864-7dc6-468c-a251-f430e8ceb813","type":"BasicTicker"},{"attributes":{},"id":"4831b3b7-f55e-497b-adc4-846a674044a6","type":"ToolEvents"},{"attributes":{"plot":{"id":"11c8910e-a03f-4b0e-9fae-7ae150a15bfc","subtype":"Figure","type":"Plot"},"ticker":{"id":"7d56d864-7dc6-468c-a251-f430e8ceb813","type":"BasicTicker"}},"id":"f163afef-57c1-48c8-80cb-dbd732deab06","type":"Grid"},{"attributes":{"plot":{"id":"11c8910e-a03f-4b0e-9fae-7ae150a15bfc","subtype":"Figure","type":"Plot"}},"id":"852f41d4-b8df-4ca6-9d96-c04d22cf60d7","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"885501fc-8470-40d0-8e9d-9c857e978723","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"5960a969-9675-4b2c-b713-e055e9391b4f","type":"Title"}],"root_ids":["11c8910e-a03f-4b0e-9fae-7ae150a15bfc"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"d73ce80c-f5b0-44fb-aab0-6fa5e9a0fcec","elementid":"b55831f8-a8d4-4eb2-8b36-47b61f2bd5f1","modelid":"11c8910e-a03f-4b0e-9fae-7ae150a15bfc"}];
                
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
