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
      };var element = document.getElementById("8cfaca7b-dd0a-4ac9-9e43-a6984e8c9b67");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8cfaca7b-dd0a-4ac9-9e43-a6984e8c9b67' but no matching script tag was found. ")
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
                var docs_json = {"68fba0f3-d482-4492-8d88-42fbfc523dba":{"roots":{"references":[{"attributes":{},"id":"d60d6875-3b11-4a01-aeed-b74c1ab1f227","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#7FC97F"},"inner_radius":{"units":"data","value":0.2},"line_color":{"value":"#7FC97F"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"73fd33c8-89ae-48de-b102-a3a8e77f4d88","type":"Annulus"},{"attributes":{"plot":{"id":"3f935c7d-f7f8-425b-9042-9bf2f211cd6d","subtype":"Figure","type":"Plot"}},"id":"c78b8c66-2104-4395-a621-4993501a0a77","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"3f935c7d-f7f8-425b-9042-9bf2f211cd6d","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb18ec0a-9622-4b91-9a05-6e7d095622d7","type":"BasicTicker"}},"id":"15025207-e6f3-42ec-ac8f-dec38442fe41","type":"Grid"},{"attributes":{"overlay":{"id":"6d5fca6d-727b-45e1-b5db-8d30ea273018","type":"BoxAnnotation"},"plot":{"id":"3f935c7d-f7f8-425b-9042-9bf2f211cd6d","subtype":"Figure","type":"Plot"}},"id":"d3ce3e82-aa1d-40b8-9803-1b84bb3e09b6","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"3fdfad9a-6c6b-4e2c-8678-1cc1a423fc91","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3f935c7d-f7f8-425b-9042-9bf2f211cd6d","subtype":"Figure","type":"Plot"}},"id":"8a7deeef-7d38-46f4-9a44-9061e1de5243","type":"SaveTool"},{"attributes":{"data_source":{"id":"3fdfad9a-6c6b-4e2c-8678-1cc1a423fc91","type":"ColumnDataSource"},"glyph":{"id":"73fd33c8-89ae-48de-b102-a3a8e77f4d88","type":"Annulus"},"hover_glyph":null,"nonselection_glyph":{"id":"4e05cd83-8e47-4792-8555-407fe428fe54","type":"Annulus"},"selection_glyph":null},"id":"95293969-c868-4ddc-a3df-4884e8b1317c","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"3f935c7d-f7f8-425b-9042-9bf2f211cd6d","subtype":"Figure","type":"Plot"},"ticker":{"id":"e98ebdaa-5a68-4af4-be03-990adb6ef8f6","type":"BasicTicker"}},"id":"9de65577-d7ae-4143-97c9-925fff63fe80","type":"Grid"},{"attributes":{"plot":{"id":"3f935c7d-f7f8-425b-9042-9bf2f211cd6d","subtype":"Figure","type":"Plot"}},"id":"b90e3969-c353-44a1-bbc5-34cf46a54590","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.2},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"4e05cd83-8e47-4792-8555-407fe428fe54","type":"Annulus"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b90e3969-c353-44a1-bbc5-34cf46a54590","type":"PanTool"},{"id":"647c212b-e91a-4b1e-94cc-dc944fe431eb","type":"WheelZoomTool"},{"id":"d3ce3e82-aa1d-40b8-9803-1b84bb3e09b6","type":"BoxZoomTool"},{"id":"8a7deeef-7d38-46f4-9a44-9061e1de5243","type":"SaveTool"},{"id":"6df8bb63-a759-4136-b3bf-4a773c48f6d5","type":"ResetTool"},{"id":"c78b8c66-2104-4395-a621-4993501a0a77","type":"HelpTool"}]},"id":"7865b7fe-b9b1-44e7-8f37-1290f212a0c0","type":"Toolbar"},{"attributes":{"callback":null},"id":"bc19b73f-cf72-4eb1-820c-c8a9306fabbe","type":"DataRange1d"},{"attributes":{"plot":{"id":"3f935c7d-f7f8-425b-9042-9bf2f211cd6d","subtype":"Figure","type":"Plot"}},"id":"647c212b-e91a-4b1e-94cc-dc944fe431eb","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"a323e96f-6251-419c-80fb-dadb90c857d1","type":"BasicTickFormatter"},"plot":{"id":"3f935c7d-f7f8-425b-9042-9bf2f211cd6d","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb18ec0a-9622-4b91-9a05-6e7d095622d7","type":"BasicTicker"}},"id":"8f5efd00-971b-4715-8a90-46628d68afb7","type":"LinearAxis"},{"attributes":{"below":[{"id":"d2ae15e0-d9bb-4437-99af-010183b3f9c7","type":"LinearAxis"}],"left":[{"id":"8f5efd00-971b-4715-8a90-46628d68afb7","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d2ae15e0-d9bb-4437-99af-010183b3f9c7","type":"LinearAxis"},{"id":"9de65577-d7ae-4143-97c9-925fff63fe80","type":"Grid"},{"id":"8f5efd00-971b-4715-8a90-46628d68afb7","type":"LinearAxis"},{"id":"15025207-e6f3-42ec-ac8f-dec38442fe41","type":"Grid"},{"id":"6d5fca6d-727b-45e1-b5db-8d30ea273018","type":"BoxAnnotation"},{"id":"95293969-c868-4ddc-a3df-4884e8b1317c","type":"GlyphRenderer"}],"title":{"id":"218cbb39-db7f-45db-830a-4c7a2d322f88","type":"Title"},"tool_events":{"id":"00c234a7-f853-4fac-b182-ce8fbeb4d381","type":"ToolEvents"},"toolbar":{"id":"7865b7fe-b9b1-44e7-8f37-1290f212a0c0","type":"Toolbar"},"x_range":{"id":"0a308130-21d5-4481-815d-968a9ad79ac3","type":"DataRange1d"},"y_range":{"id":"bc19b73f-cf72-4eb1-820c-c8a9306fabbe","type":"DataRange1d"}},"id":"3f935c7d-f7f8-425b-9042-9bf2f211cd6d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e98ebdaa-5a68-4af4-be03-990adb6ef8f6","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d60d6875-3b11-4a01-aeed-b74c1ab1f227","type":"BasicTickFormatter"},"plot":{"id":"3f935c7d-f7f8-425b-9042-9bf2f211cd6d","subtype":"Figure","type":"Plot"},"ticker":{"id":"e98ebdaa-5a68-4af4-be03-990adb6ef8f6","type":"BasicTicker"}},"id":"d2ae15e0-d9bb-4437-99af-010183b3f9c7","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6d5fca6d-727b-45e1-b5db-8d30ea273018","type":"BoxAnnotation"},{"attributes":{},"id":"a323e96f-6251-419c-80fb-dadb90c857d1","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"0a308130-21d5-4481-815d-968a9ad79ac3","type":"DataRange1d"},{"attributes":{"plot":{"id":"3f935c7d-f7f8-425b-9042-9bf2f211cd6d","subtype":"Figure","type":"Plot"}},"id":"6df8bb63-a759-4136-b3bf-4a773c48f6d5","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"218cbb39-db7f-45db-830a-4c7a2d322f88","type":"Title"},{"attributes":{},"id":"00c234a7-f853-4fac-b182-ce8fbeb4d381","type":"ToolEvents"},{"attributes":{},"id":"bb18ec0a-9622-4b91-9a05-6e7d095622d7","type":"BasicTicker"}],"root_ids":["3f935c7d-f7f8-425b-9042-9bf2f211cd6d"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"68fba0f3-d482-4492-8d88-42fbfc523dba","elementid":"8cfaca7b-dd0a-4ac9-9e43-a6984e8c9b67","modelid":"3f935c7d-f7f8-425b-9042-9bf2f211cd6d"}];
                
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
