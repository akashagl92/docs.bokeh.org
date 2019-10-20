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
      };var element = document.getElementById("7ff247a2-99de-4d82-9972-991966c01709");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7ff247a2-99de-4d82-9972-991966c01709' but no matching script tag was found. ")
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
                var docs_json = {"a34228eb-b690-4e25-b04f-4ee1ff216c1e":{"roots":{"references":[{"attributes":{"source":{"id":"6da8d692-5b93-4c5c-b671-672b14257eae","type":"ColumnDataSource"}},"id":"b45db0bb-3098-40b2-8fb9-8394c8bd30f0","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"6da8d692-5b93-4c5c-b671-672b14257eae","type":"ColumnDataSource"},{"attributes":{},"id":"8529d27b-4b4f-4fa0-9061-282be07a3c10","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"c2712a06-2f52-49ab-b6d0-e9f8a900d17f","subtype":"Figure","type":"Plot"},"ticker":{"id":"802e0de5-4163-4ac6-89b1-f420784fd690","type":"BasicTicker"}},"id":"2ee477d9-d557-4eac-a1b3-fa8c8d8f8711","type":"Grid"},{"attributes":{"formatter":{"id":"c28d4c27-732a-4f31-b622-4221a80187ce","type":"BasicTickFormatter"},"plot":{"id":"c2712a06-2f52-49ab-b6d0-e9f8a900d17f","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b162277-553e-44a1-b063-d8b07330c2bb","type":"BasicTicker"}},"id":"1c4ab3f3-7368-48b4-8200-3f4416559c2f","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7a92d110-f27f-40b5-b052-f724cc2c2978","type":"Circle"},{"attributes":{},"id":"c28d4c27-732a-4f31-b622-4221a80187ce","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"1c4ab3f3-7368-48b4-8200-3f4416559c2f","type":"LinearAxis"}],"left":[{"id":"d0a1d5c8-b8d6-4961-baa2-0ef2a698a9fc","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"1c4ab3f3-7368-48b4-8200-3f4416559c2f","type":"LinearAxis"},{"id":"00a58e1d-95d9-4ae9-827a-8627c6265e25","type":"Grid"},{"id":"d0a1d5c8-b8d6-4961-baa2-0ef2a698a9fc","type":"LinearAxis"},{"id":"2ee477d9-d557-4eac-a1b3-fa8c8d8f8711","type":"Grid"},{"id":"fd57eeb7-4a8d-4fa7-bf25-0b64bd27b671","type":"BoxAnnotation"},{"id":"c4c85a8e-7e74-4d35-834d-5e79a11d120e","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"ee556fed-e6f5-478f-afc6-27781c2dbf15","type":"Toolbar"},"toolbar_location":"below","x_range":{"id":"3e7f00a7-9d9f-439c-84c7-8adc019e5c05","type":"DataRange1d"},"x_scale":{"id":"8fe990b0-d0ec-49d0-82a8-f335e3bc933e","type":"LinearScale"},"y_range":{"id":"d31db85b-0066-498d-8e39-65ef12ada79f","type":"DataRange1d"},"y_scale":{"id":"d92025c4-812d-4b89-81c2-8b3be85bee08","type":"LinearScale"}},"id":"c2712a06-2f52-49ab-b6d0-e9f8a900d17f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"79541c49-fc9e-4e80-be04-356469c2cbc4","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0fbf65a2-3a76-41f6-82eb-832d6ef53a46","type":"Circle"},{"attributes":{"data_source":{"id":"6da8d692-5b93-4c5c-b671-672b14257eae","type":"ColumnDataSource"},"glyph":{"id":"7a92d110-f27f-40b5-b052-f724cc2c2978","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0fbf65a2-3a76-41f6-82eb-832d6ef53a46","type":"Circle"},"selection_glyph":null,"view":{"id":"b45db0bb-3098-40b2-8fb9-8394c8bd30f0","type":"CDSView"}},"id":"c4c85a8e-7e74-4d35-834d-5e79a11d120e","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5543bba5-b4f7-4c20-8b82-b67dd76f9e72","type":"PanTool"},{"id":"6bfbbee6-72b8-4708-8c04-4fe87adb1370","type":"WheelZoomTool"},{"id":"8c4c9d3d-810d-4b2c-80bc-e20241de0e61","type":"BoxZoomTool"},{"id":"79541c49-fc9e-4e80-be04-356469c2cbc4","type":"SaveTool"},{"id":"eef48dda-f05e-4899-af1c-49a50ea24564","type":"ResetTool"},{"id":"802aa943-1578-46fc-a38f-f54aec4efd32","type":"HelpTool"}]},"id":"ee556fed-e6f5-478f-afc6-27781c2dbf15","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fd57eeb7-4a8d-4fa7-bf25-0b64bd27b671","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"3e7f00a7-9d9f-439c-84c7-8adc019e5c05","type":"DataRange1d"},{"attributes":{},"id":"802e0de5-4163-4ac6-89b1-f420784fd690","type":"BasicTicker"},{"attributes":{"callback":null},"id":"d31db85b-0066-498d-8e39-65ef12ada79f","type":"DataRange1d"},{"attributes":{},"id":"5543bba5-b4f7-4c20-8b82-b67dd76f9e72","type":"PanTool"},{"attributes":{},"id":"6bfbbee6-72b8-4708-8c04-4fe87adb1370","type":"WheelZoomTool"},{"attributes":{},"id":"8fe990b0-d0ec-49d0-82a8-f335e3bc933e","type":"LinearScale"},{"attributes":{},"id":"d92025c4-812d-4b89-81c2-8b3be85bee08","type":"LinearScale"},{"attributes":{},"id":"802aa943-1578-46fc-a38f-f54aec4efd32","type":"HelpTool"},{"attributes":{"overlay":{"id":"fd57eeb7-4a8d-4fa7-bf25-0b64bd27b671","type":"BoxAnnotation"}},"id":"8c4c9d3d-810d-4b2c-80bc-e20241de0e61","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"8529d27b-4b4f-4fa0-9061-282be07a3c10","type":"BasicTickFormatter"},"plot":{"id":"c2712a06-2f52-49ab-b6d0-e9f8a900d17f","subtype":"Figure","type":"Plot"},"ticker":{"id":"802e0de5-4163-4ac6-89b1-f420784fd690","type":"BasicTicker"}},"id":"d0a1d5c8-b8d6-4961-baa2-0ef2a698a9fc","type":"LinearAxis"},{"attributes":{},"id":"eef48dda-f05e-4899-af1c-49a50ea24564","type":"ResetTool"},{"attributes":{"plot":{"id":"c2712a06-2f52-49ab-b6d0-e9f8a900d17f","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b162277-553e-44a1-b063-d8b07330c2bb","type":"BasicTicker"}},"id":"00a58e1d-95d9-4ae9-827a-8627c6265e25","type":"Grid"},{"attributes":{},"id":"1b162277-553e-44a1-b063-d8b07330c2bb","type":"BasicTicker"}],"root_ids":["c2712a06-2f52-49ab-b6d0-e9f8a900d17f"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"a34228eb-b690-4e25-b04f-4ee1ff216c1e","elementid":"7ff247a2-99de-4d82-9972-991966c01709","modelid":"c2712a06-2f52-49ab-b6d0-e9f8a900d17f"}];
                
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
