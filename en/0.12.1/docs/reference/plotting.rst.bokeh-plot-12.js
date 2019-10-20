document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("95d9969a-02c7-403e-9e81-0f295c604cbd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '95d9969a-02c7-403e-9e81-0f295c604cbd' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"991619d5-a256-4a7d-af73-2b8a5f0b12ab":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7a153dd2-1317-4af5-a921-0ebb5d30a381","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"3666307a-f62e-4cbb-a16b-9880a21adf0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"abb73419-09c9-425f-85bf-9ce5c6a441e4","type":"BasicTicker"}},"id":"d22c0d68-b9f9-49bc-a77b-b8953e0bcc86","type":"Grid"},{"attributes":{"overlay":{"id":"7a153dd2-1317-4af5-a921-0ebb5d30a381","type":"BoxAnnotation"},"plot":{"id":"3666307a-f62e-4cbb-a16b-9880a21adf0a","subtype":"Figure","type":"Plot"}},"id":"fdc7ac67-5427-4c75-8adb-f2402b60733a","type":"BoxZoomTool"},{"attributes":{},"id":"cd1124b0-97f5-492b-baac-ba076a1ca890","type":"BasicTicker"},{"attributes":{"plot":{"id":"3666307a-f62e-4cbb-a16b-9880a21adf0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"cd1124b0-97f5-492b-baac-ba076a1ca890","type":"BasicTicker"}},"id":"b93c4050-b9fa-4dad-add3-3dd0ea34467e","type":"Grid"},{"attributes":{"plot":{"id":"3666307a-f62e-4cbb-a16b-9880a21adf0a","subtype":"Figure","type":"Plot"}},"id":"2e37fd2f-601e-4c9e-ae8d-787eeb1b2eef","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"185da819-8e65-4990-9ffd-889c45a6e435","type":"PanTool"},{"id":"ca367b01-763d-4a2e-8cf6-2c71f333dc39","type":"WheelZoomTool"},{"id":"fdc7ac67-5427-4c75-8adb-f2402b60733a","type":"BoxZoomTool"},{"id":"2e37fd2f-601e-4c9e-ae8d-787eeb1b2eef","type":"SaveTool"},{"id":"33e37e3c-e60c-4ce4-9b7f-0d55d732a163","type":"ResetTool"},{"id":"837aba85-527c-4b58-8b6e-54c47439d99e","type":"HelpTool"}]},"id":"154a2fcc-2533-41be-bc3c-ff74bd2e1df5","type":"Toolbar"},{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"a0fd3396-642f-4964-b9f7-e847fc001f54","type":"MultiLine"},{"attributes":{"callback":null},"id":"2a2904b0-277b-4197-a7a6-0f26565236e4","type":"DataRange1d"},{"attributes":{},"id":"8a7b8888-aaea-4dad-8c28-c7329be6d7f8","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color"],"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]}},"id":"96a254ce-6b3a-450c-8b4f-748e65301b0c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3666307a-f62e-4cbb-a16b-9880a21adf0a","subtype":"Figure","type":"Plot"}},"id":"33e37e3c-e60c-4ce4-9b7f-0d55d732a163","type":"ResetTool"},{"attributes":{"formatter":{"id":"d95353a5-cbaf-410a-b358-8a29044352cd","type":"BasicTickFormatter"},"plot":{"id":"3666307a-f62e-4cbb-a16b-9880a21adf0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"abb73419-09c9-425f-85bf-9ce5c6a441e4","type":"BasicTicker"}},"id":"cad4fe42-6844-4645-867b-0c5aac8fa9c3","type":"LinearAxis"},{"attributes":{"plot":{"id":"3666307a-f62e-4cbb-a16b-9880a21adf0a","subtype":"Figure","type":"Plot"}},"id":"837aba85-527c-4b58-8b6e-54c47439d99e","type":"HelpTool"},{"attributes":{"plot":null,"text":null},"id":"b046e296-5570-47c3-a779-9ef1bd72eb43","type":"Title"},{"attributes":{"plot":{"id":"3666307a-f62e-4cbb-a16b-9880a21adf0a","subtype":"Figure","type":"Plot"}},"id":"185da819-8e65-4990-9ffd-889c45a6e435","type":"PanTool"},{"attributes":{"below":[{"id":"fafad670-2144-45f1-bd7b-854688015c52","type":"LinearAxis"}],"left":[{"id":"cad4fe42-6844-4645-867b-0c5aac8fa9c3","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"fafad670-2144-45f1-bd7b-854688015c52","type":"LinearAxis"},{"id":"b93c4050-b9fa-4dad-add3-3dd0ea34467e","type":"Grid"},{"id":"cad4fe42-6844-4645-867b-0c5aac8fa9c3","type":"LinearAxis"},{"id":"d22c0d68-b9f9-49bc-a77b-b8953e0bcc86","type":"Grid"},{"id":"7a153dd2-1317-4af5-a921-0ebb5d30a381","type":"BoxAnnotation"},{"id":"82834c7e-019f-4ced-b063-676b644454f3","type":"GlyphRenderer"}],"title":{"id":"b046e296-5570-47c3-a779-9ef1bd72eb43","type":"Title"},"tool_events":{"id":"8a7b8888-aaea-4dad-8c28-c7329be6d7f8","type":"ToolEvents"},"toolbar":{"id":"154a2fcc-2533-41be-bc3c-ff74bd2e1df5","type":"Toolbar"},"x_range":{"id":"ac94712e-b234-4fe4-b715-1a4d836207b0","type":"DataRange1d"},"y_range":{"id":"2a2904b0-277b-4197-a7a6-0f26565236e4","type":"DataRange1d"}},"id":"3666307a-f62e-4cbb-a16b-9880a21adf0a","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"96a254ce-6b3a-450c-8b4f-748e65301b0c","type":"ColumnDataSource"},"glyph":{"id":"a0fd3396-642f-4964-b9f7-e847fc001f54","type":"MultiLine"},"hover_glyph":null,"nonselection_glyph":{"id":"a054b2ea-9d2a-4bb8-bb05-d553d45569ba","type":"MultiLine"},"selection_glyph":null},"id":"82834c7e-019f-4ced-b063-676b644454f3","type":"GlyphRenderer"},{"attributes":{},"id":"d95353a5-cbaf-410a-b358-8a29044352cd","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"ac94712e-b234-4fe4-b715-1a4d836207b0","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"a054b2ea-9d2a-4bb8-bb05-d553d45569ba","type":"MultiLine"},{"attributes":{},"id":"1a8db2ef-6851-4e13-b32c-2f66194aaef4","type":"BasicTickFormatter"},{"attributes":{},"id":"abb73419-09c9-425f-85bf-9ce5c6a441e4","type":"BasicTicker"},{"attributes":{"formatter":{"id":"1a8db2ef-6851-4e13-b32c-2f66194aaef4","type":"BasicTickFormatter"},"plot":{"id":"3666307a-f62e-4cbb-a16b-9880a21adf0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"cd1124b0-97f5-492b-baac-ba076a1ca890","type":"BasicTicker"}},"id":"fafad670-2144-45f1-bd7b-854688015c52","type":"LinearAxis"},{"attributes":{"plot":{"id":"3666307a-f62e-4cbb-a16b-9880a21adf0a","subtype":"Figure","type":"Plot"}},"id":"ca367b01-763d-4a2e-8cf6-2c71f333dc39","type":"WheelZoomTool"}],"root_ids":["3666307a-f62e-4cbb-a16b-9880a21adf0a"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"991619d5-a256-4a7d-af73-2b8a5f0b12ab","elementid":"95d9969a-02c7-403e-9e81-0f295c604cbd","modelid":"3666307a-f62e-4cbb-a16b-9880a21adf0a"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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
});