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
      };var element = document.getElementById("ba35c84b-6545-4a2e-acf1-ae2b23f6a1a0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ba35c84b-6545-4a2e-acf1-ae2b23f6a1a0' but no matching script tag was found. ")
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
                var docs_json = {"6be901e4-8a8c-4fad-bb74-8e7e248ae3cf":{"roots":{"references":[{"attributes":{},"id":"fafce41a-d000-4921-b132-10b045838e56","type":"BasicTicker"},{"attributes":{"plot":{"id":"8bd363c8-e055-444f-bd1b-6273e9754e75","subtype":"Figure","type":"Plot"}},"id":"712f9bf0-2621-47c3-a3ac-27e5f2bf3503","type":"WheelZoomTool"},{"attributes":{"items":[{"id":"531ad607-05ce-4199-ad34-32c329074156","type":"LegendItem"}],"plot":{"id":"8bd363c8-e055-444f-bd1b-6273e9754e75","subtype":"Figure","type":"Plot"}},"id":"6ca09fe3-860f-485b-9771-a4156d9c4f42","type":"Legend"},{"attributes":{"overlay":{"id":"fce9b926-8424-44a4-aa17-85a00fbea8e2","type":"BoxAnnotation"},"plot":{"id":"8bd363c8-e055-444f-bd1b-6273e9754e75","subtype":"Figure","type":"Plot"}},"id":"fae236b0-bd4a-4c9a-9a91-e14046441b6b","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"8bd363c8-e055-444f-bd1b-6273e9754e75","subtype":"Figure","type":"Plot"}},"id":"f9dae4f9-5256-4cec-ad09-c330c4c15c52","type":"ResetTool"},{"attributes":{},"id":"79afe43c-85b3-453d-9527-b9684472cb47","type":"BasicTicker"},{"attributes":{},"id":"da173ee6-cf69-4d37-88f7-0fd3c45f3419","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"eaf67dea-f329-47d8-9f84-f44cd0589024","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"8bd363c8-e055-444f-bd1b-6273e9754e75","subtype":"Figure","type":"Plot"},"ticker":{"id":"79afe43c-85b3-453d-9527-b9684472cb47","type":"BasicTicker"}},"id":"771a4006-9980-488c-b05e-fc68c1229363","type":"Grid"},{"attributes":{"label":{"value":"Temp."},"renderers":[{"id":"f7237e63-7a14-47e3-8d03-a1e708bc054a","type":"GlyphRenderer"}]},"id":"531ad607-05ce-4199-ad34-32c329074156","type":"LegendItem"},{"attributes":{"callback":null},"id":"18dde802-4345-4988-94c9-603dc66399d8","type":"DataRange1d"},{"attributes":{"below":[{"id":"bd9ddea4-3fc9-481e-81bb-9d9cf54de8d3","type":"LinearAxis"}],"left":[{"id":"8d64b3c2-d83f-4fc8-afcd-4fa7d6c7796d","type":"LinearAxis"}],"renderers":[{"id":"bd9ddea4-3fc9-481e-81bb-9d9cf54de8d3","type":"LinearAxis"},{"id":"a422e6ec-73df-4a81-ab5d-70fb3954dfcd","type":"Grid"},{"id":"8d64b3c2-d83f-4fc8-afcd-4fa7d6c7796d","type":"LinearAxis"},{"id":"771a4006-9980-488c-b05e-fc68c1229363","type":"Grid"},{"id":"fce9b926-8424-44a4-aa17-85a00fbea8e2","type":"BoxAnnotation"},{"id":"6ca09fe3-860f-485b-9771-a4156d9c4f42","type":"Legend"},{"id":"f7237e63-7a14-47e3-8d03-a1e708bc054a","type":"GlyphRenderer"}],"title":{"id":"162d2b4d-1b6b-44df-8152-761048cbe2b6","type":"Title"},"tool_events":{"id":"e67f8011-e79e-4f40-a414-d2366cc1b1a0","type":"ToolEvents"},"toolbar":{"id":"95ea3c3e-31f5-424c-b3c2-e3dcae970f8b","type":"Toolbar"},"x_range":{"id":"eaf67dea-f329-47d8-9f84-f44cd0589024","type":"DataRange1d"},"y_range":{"id":"18dde802-4345-4988-94c9-603dc66399d8","type":"DataRange1d"}},"id":"8bd363c8-e055-444f-bd1b-6273e9754e75","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3c86882d-5d19-43d5-8e44-0fb76b552c9a","type":"PanTool"},{"id":"712f9bf0-2621-47c3-a3ac-27e5f2bf3503","type":"WheelZoomTool"},{"id":"fae236b0-bd4a-4c9a-9a91-e14046441b6b","type":"BoxZoomTool"},{"id":"f31f7e6c-3863-4f47-8095-7fe0a2fdb341","type":"SaveTool"},{"id":"f9dae4f9-5256-4cec-ad09-c330c4c15c52","type":"ResetTool"},{"id":"03c9f938-c48b-4fd7-b207-b719f14695ec","type":"HelpTool"}]},"id":"95ea3c3e-31f5-424c-b3c2-e3dcae970f8b","type":"Toolbar"},{"attributes":{"axis_label":"y","formatter":{"id":"fd50db3c-1a04-401f-aaeb-5f5890ecd1cd","type":"BasicTickFormatter"},"plot":{"id":"8bd363c8-e055-444f-bd1b-6273e9754e75","subtype":"Figure","type":"Plot"},"ticker":{"id":"79afe43c-85b3-453d-9527-b9684472cb47","type":"BasicTicker"}},"id":"8d64b3c2-d83f-4fc8-afcd-4fa7d6c7796d","type":"LinearAxis"},{"attributes":{},"id":"e67f8011-e79e-4f40-a414-d2366cc1b1a0","type":"ToolEvents"},{"attributes":{"plot":{"id":"8bd363c8-e055-444f-bd1b-6273e9754e75","subtype":"Figure","type":"Plot"}},"id":"f31f7e6c-3863-4f47-8095-7fe0a2fdb341","type":"SaveTool"},{"attributes":{"plot":{"id":"8bd363c8-e055-444f-bd1b-6273e9754e75","subtype":"Figure","type":"Plot"}},"id":"03c9f938-c48b-4fd7-b207-b719f14695ec","type":"HelpTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ae1a10b3-808a-4520-9d53-a5cfba4dfefe","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fce9b926-8424-44a4-aa17-85a00fbea8e2","type":"BoxAnnotation"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"2a5afecc-a711-4cf7-8237-3c792c8598bf","type":"Line"},{"attributes":{"plot":{"id":"8bd363c8-e055-444f-bd1b-6273e9754e75","subtype":"Figure","type":"Plot"},"ticker":{"id":"fafce41a-d000-4921-b132-10b045838e56","type":"BasicTicker"}},"id":"a422e6ec-73df-4a81-ab5d-70fb3954dfcd","type":"Grid"},{"attributes":{"axis_label":"x","formatter":{"id":"da173ee6-cf69-4d37-88f7-0fd3c45f3419","type":"BasicTickFormatter"},"plot":{"id":"8bd363c8-e055-444f-bd1b-6273e9754e75","subtype":"Figure","type":"Plot"},"ticker":{"id":"fafce41a-d000-4921-b132-10b045838e56","type":"BasicTicker"}},"id":"bd9ddea4-3fc9-481e-81bb-9d9cf54de8d3","type":"LinearAxis"},{"attributes":{"plot":{"id":"8bd363c8-e055-444f-bd1b-6273e9754e75","subtype":"Figure","type":"Plot"}},"id":"3c86882d-5d19-43d5-8e44-0fb76b552c9a","type":"PanTool"},{"attributes":{"plot":null,"text":"simple line example"},"id":"162d2b4d-1b6b-44df-8152-761048cbe2b6","type":"Title"},{"attributes":{"data_source":{"id":"cc804d67-1b13-45cf-a752-af4189555566","type":"ColumnDataSource"},"glyph":{"id":"ae1a10b3-808a-4520-9d53-a5cfba4dfefe","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"2a5afecc-a711-4cf7-8237-3c792c8598bf","type":"Line"},"selection_glyph":null},"id":"f7237e63-7a14-47e3-8d03-a1e708bc054a","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"cc804d67-1b13-45cf-a752-af4189555566","type":"ColumnDataSource"},{"attributes":{},"id":"fd50db3c-1a04-401f-aaeb-5f5890ecd1cd","type":"BasicTickFormatter"}],"root_ids":["8bd363c8-e055-444f-bd1b-6273e9754e75"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"6be901e4-8a8c-4fad-bb74-8e7e248ae3cf","elementid":"ba35c84b-6545-4a2e-acf1-ae2b23f6a1a0","modelid":"8bd363c8-e055-444f-bd1b-6273e9754e75"}];
                
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
