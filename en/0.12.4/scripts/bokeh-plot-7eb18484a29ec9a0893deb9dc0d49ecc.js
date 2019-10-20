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
      };var element = document.getElementById("1a9542e6-3b0e-4f31-a70d-bb629e8f5c12");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1a9542e6-3b0e-4f31-a70d-bb629e8f5c12' but no matching script tag was found. ")
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
                var docs_json = {"70e0efca-df8b-48a9-93cd-28a9c0f19eb6":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"a2f8fe32-b357-474f-8efb-41a13ec971e0","type":"Title"},{"attributes":{"plot":{"id":"2f154738-9026-4987-9d4f-57136200bd84","subtype":"Figure","type":"Plot"}},"id":"e76ad634-fda2-46c4-9072-c4af9439367c","type":"SaveTool"},{"attributes":{"plot":{"id":"2f154738-9026-4987-9d4f-57136200bd84","subtype":"Figure","type":"Plot"}},"id":"3c3274df-f4b7-45e0-8db1-bcd66f2ad618","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f315c531-f236-4623-9dca-d51e2abc1791","type":"Line"},{"attributes":{"below":[{"id":"3e9915f8-a6ca-4f67-8669-116636788bff","type":"LinearAxis"}],"left":[{"id":"152f6baa-f3d5-4cb7-81a7-3bf61f3c03ed","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3e9915f8-a6ca-4f67-8669-116636788bff","type":"LinearAxis"},{"id":"516577e8-191d-4a69-b56c-8f9187bfebed","type":"Grid"},{"id":"152f6baa-f3d5-4cb7-81a7-3bf61f3c03ed","type":"LinearAxis"},{"id":"f07a6385-d196-40e3-9abc-22a128c56ae1","type":"Grid"},{"id":"922eb8f1-1df5-4790-acbe-30e15ca94779","type":"BoxAnnotation"},{"id":"098f384d-7c1b-4268-9e02-0e5d4f75b0e5","type":"GlyphRenderer"},{"id":"51cce283-efaa-4895-8643-da248ee15db6","type":"GlyphRenderer"}],"title":{"id":"a2f8fe32-b357-474f-8efb-41a13ec971e0","type":"Title"},"tool_events":{"id":"d659f5e6-a715-452e-8867-c6c3e35f6cdf","type":"ToolEvents"},"toolbar":{"id":"01b3c2fa-cd40-4097-832a-9d4e012f707b","type":"Toolbar"},"x_range":{"id":"79366991-8538-4b69-b755-c507dd1a8daf","type":"DataRange1d"},"y_range":{"id":"9113bf90-5ce6-4503-8465-5d7a75e8b65a","type":"DataRange1d"}},"id":"2f154738-9026-4987-9d4f-57136200bd84","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5274b7ec-3862-45b8-8691-301af40aab0f","type":"BasicTickFormatter"},{"attributes":{},"id":"f331fb3a-8e88-49b8-b3a5-08454dd31078","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1ba83a0d-a4dc-4614-8590-575e1f80b8f9","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"da62b3ba-01ac-48cd-a926-fc4a974ddb89","type":"Circle"},{"attributes":{},"id":"1a5725c9-3593-4272-86db-759553bcf64d","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"07410b0b-7f53-45b3-a9bf-89591adff8af","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"2f154738-9026-4987-9d4f-57136200bd84","subtype":"Figure","type":"Plot"},"ticker":{"id":"7964e948-f473-432a-b5f0-f014da7107fc","type":"BasicTicker"}},"id":"f07a6385-d196-40e3-9abc-22a128c56ae1","type":"Grid"},{"attributes":{"formatter":{"id":"f331fb3a-8e88-49b8-b3a5-08454dd31078","type":"BasicTickFormatter"},"plot":{"id":"2f154738-9026-4987-9d4f-57136200bd84","subtype":"Figure","type":"Plot"},"ticker":{"id":"1a5725c9-3593-4272-86db-759553bcf64d","type":"BasicTicker"}},"id":"3e9915f8-a6ca-4f67-8669-116636788bff","type":"LinearAxis"},{"attributes":{"plot":{"id":"2f154738-9026-4987-9d4f-57136200bd84","subtype":"Figure","type":"Plot"}},"id":"9f39d0c1-428b-43d9-a918-55c8664d0813","type":"ResetTool"},{"attributes":{},"id":"7964e948-f473-432a-b5f0-f014da7107fc","type":"BasicTicker"},{"attributes":{"callback":null},"id":"79366991-8538-4b69-b755-c507dd1a8daf","type":"DataRange1d"},{"attributes":{},"id":"d659f5e6-a715-452e-8867-c6c3e35f6cdf","type":"ToolEvents"},{"attributes":{"plot":{"id":"2f154738-9026-4987-9d4f-57136200bd84","subtype":"Figure","type":"Plot"},"ticker":{"id":"1a5725c9-3593-4272-86db-759553bcf64d","type":"BasicTicker"}},"id":"516577e8-191d-4a69-b56c-8f9187bfebed","type":"Grid"},{"attributes":{"plot":{"id":"2f154738-9026-4987-9d4f-57136200bd84","subtype":"Figure","type":"Plot"}},"id":"a958107e-c77b-4089-8738-6e66cc11fee5","type":"PanTool"},{"attributes":{"plot":{"id":"2f154738-9026-4987-9d4f-57136200bd84","subtype":"Figure","type":"Plot"}},"id":"56f7e80a-ec51-4143-85fb-23a1d2d108b6","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"52faed04-d851-470f-bb10-2ec6e466ac05","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"52faed04-d851-470f-bb10-2ec6e466ac05","type":"ColumnDataSource"},"glyph":{"id":"1ba83a0d-a4dc-4614-8590-575e1f80b8f9","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"f315c531-f236-4623-9dca-d51e2abc1791","type":"Line"},"selection_glyph":null},"id":"098f384d-7c1b-4268-9e02-0e5d4f75b0e5","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"c81bfb17-11e2-48a9-b53e-9737d2d67792","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c81bfb17-11e2-48a9-b53e-9737d2d67792","type":"ColumnDataSource"},"glyph":{"id":"07410b0b-7f53-45b3-a9bf-89591adff8af","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"da62b3ba-01ac-48cd-a926-fc4a974ddb89","type":"Circle"},"selection_glyph":null},"id":"51cce283-efaa-4895-8643-da248ee15db6","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"9113bf90-5ce6-4503-8465-5d7a75e8b65a","type":"DataRange1d"},{"attributes":{"overlay":{"id":"922eb8f1-1df5-4790-acbe-30e15ca94779","type":"BoxAnnotation"},"plot":{"id":"2f154738-9026-4987-9d4f-57136200bd84","subtype":"Figure","type":"Plot"}},"id":"0382562e-802f-4615-b9c5-64d5ab16eb6c","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a958107e-c77b-4089-8738-6e66cc11fee5","type":"PanTool"},{"id":"3c3274df-f4b7-45e0-8db1-bcd66f2ad618","type":"WheelZoomTool"},{"id":"0382562e-802f-4615-b9c5-64d5ab16eb6c","type":"BoxZoomTool"},{"id":"e76ad634-fda2-46c4-9072-c4af9439367c","type":"SaveTool"},{"id":"9f39d0c1-428b-43d9-a918-55c8664d0813","type":"ResetTool"},{"id":"56f7e80a-ec51-4143-85fb-23a1d2d108b6","type":"HelpTool"}]},"id":"01b3c2fa-cd40-4097-832a-9d4e012f707b","type":"Toolbar"},{"attributes":{"formatter":{"id":"5274b7ec-3862-45b8-8691-301af40aab0f","type":"BasicTickFormatter"},"plot":{"id":"2f154738-9026-4987-9d4f-57136200bd84","subtype":"Figure","type":"Plot"},"ticker":{"id":"7964e948-f473-432a-b5f0-f014da7107fc","type":"BasicTicker"}},"id":"152f6baa-f3d5-4cb7-81a7-3bf61f3c03ed","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"922eb8f1-1df5-4790-acbe-30e15ca94779","type":"BoxAnnotation"}],"root_ids":["2f154738-9026-4987-9d4f-57136200bd84"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"70e0efca-df8b-48a9-93cd-28a9c0f19eb6","elementid":"1a9542e6-3b0e-4f31-a70d-bb629e8f5c12","modelid":"2f154738-9026-4987-9d4f-57136200bd84"}];
                
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
