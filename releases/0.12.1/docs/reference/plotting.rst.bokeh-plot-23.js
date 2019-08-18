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
      };var element = document.getElementById("8b67558d-bfa6-407a-9596-4eeb5e7102f2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8b67558d-bfa6-407a-9596-4eeb5e7102f2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"289bb902-4b5b-4b9b-870e-8e5551a7366e":{"roots":{"references":[{"attributes":{"callback":null},"id":"c3652b19-a41f-4cad-aff5-390f90420c3f","type":"DataRange1d"},{"attributes":{"plot":{"id":"75aa35c2-4a3b-4a92-b59e-6c49c2e55e0d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a95c4df7-35c1-4ea9-9d1f-619510531e65","type":"BasicTicker"}},"id":"09cb15c6-d904-4a36-97e8-91b060252256","type":"Grid"},{"attributes":{"plot":{"id":"75aa35c2-4a3b-4a92-b59e-6c49c2e55e0d","subtype":"Figure","type":"Plot"}},"id":"e5f0722b-5208-4af3-af1b-59cec254fbdd","type":"ResetTool"},{"attributes":{},"id":"172764c2-a701-4544-b287-a40a5604b343","type":"BasicTicker"},{"attributes":{"plot":{"id":"75aa35c2-4a3b-4a92-b59e-6c49c2e55e0d","subtype":"Figure","type":"Plot"}},"id":"8638ddf8-159d-4a20-823d-83ab5df61f63","type":"HelpTool"},{"attributes":{"below":[{"id":"f896cbae-b581-4b8b-a23c-c12e9d153bd8","type":"LinearAxis"}],"left":[{"id":"0a7865cc-668d-45d9-831f-f03ff64b83a0","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f896cbae-b581-4b8b-a23c-c12e9d153bd8","type":"LinearAxis"},{"id":"09cb15c6-d904-4a36-97e8-91b060252256","type":"Grid"},{"id":"0a7865cc-668d-45d9-831f-f03ff64b83a0","type":"LinearAxis"},{"id":"b87a6728-2972-464f-bf6c-70964f299e8a","type":"Grid"},{"id":"4d3a7a95-00d4-4209-a995-509348c42d69","type":"BoxAnnotation"},{"id":"802876dd-0115-43eb-b0d9-d92e633e9d72","type":"GlyphRenderer"}],"title":{"id":"03793adf-ac6b-4031-99a6-2fd099210e73","type":"Title"},"tool_events":{"id":"c1a7e317-e07b-440d-b46f-cca1923c6ca0","type":"ToolEvents"},"toolbar":{"id":"e012d96d-67e1-49ba-b606-eb41986f20d6","type":"Toolbar"},"x_range":{"id":"c3652b19-a41f-4cad-aff5-390f90420c3f","type":"DataRange1d"},"y_range":{"id":"db7b8475-489c-47c3-9997-ba75de7eb0ee","type":"DataRange1d"}},"id":"75aa35c2-4a3b-4a92-b59e-6c49c2e55e0d","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"75aa35c2-4a3b-4a92-b59e-6c49c2e55e0d","subtype":"Figure","type":"Plot"},"ticker":{"id":"172764c2-a701-4544-b287-a40a5604b343","type":"BasicTicker"}},"id":"b87a6728-2972-464f-bf6c-70964f299e8a","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"e759c875-1ffc-4a25-b04a-89ebcc6e6c4b","type":"ColumnDataSource"},{"attributes":{},"id":"411df865-babd-4a3c-b95a-4c061ea523b9","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"411df865-babd-4a3c-b95a-4c061ea523b9","type":"BasicTickFormatter"},"plot":{"id":"75aa35c2-4a3b-4a92-b59e-6c49c2e55e0d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a95c4df7-35c1-4ea9-9d1f-619510531e65","type":"BasicTicker"}},"id":"f896cbae-b581-4b8b-a23c-c12e9d153bd8","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"22f20fac-c9a5-4a91-a817-3125a89ec6f8","type":"Triangle"},{"attributes":{"plot":{"id":"75aa35c2-4a3b-4a92-b59e-6c49c2e55e0d","subtype":"Figure","type":"Plot"}},"id":"ef7cad82-7637-484f-9601-657020495d7f","type":"PanTool"},{"attributes":{},"id":"a95c4df7-35c1-4ea9-9d1f-619510531e65","type":"BasicTicker"},{"attributes":{},"id":"c1a7e317-e07b-440d-b46f-cca1923c6ca0","type":"ToolEvents"},{"attributes":{"callback":null},"id":"db7b8475-489c-47c3-9997-ba75de7eb0ee","type":"DataRange1d"},{"attributes":{},"id":"ec87e3b8-2076-41fa-b08b-055f5ebce161","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"ec87e3b8-2076-41fa-b08b-055f5ebce161","type":"BasicTickFormatter"},"plot":{"id":"75aa35c2-4a3b-4a92-b59e-6c49c2e55e0d","subtype":"Figure","type":"Plot"},"ticker":{"id":"172764c2-a701-4544-b287-a40a5604b343","type":"BasicTicker"}},"id":"0a7865cc-668d-45d9-831f-f03ff64b83a0","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9ac91981-71a6-4cfc-b835-6615d118fa15","type":"Triangle"},{"attributes":{"plot":{"id":"75aa35c2-4a3b-4a92-b59e-6c49c2e55e0d","subtype":"Figure","type":"Plot"}},"id":"9fdf7f18-560b-44a5-96de-2c087c757902","type":"SaveTool"},{"attributes":{"plot":{"id":"75aa35c2-4a3b-4a92-b59e-6c49c2e55e0d","subtype":"Figure","type":"Plot"}},"id":"43639a5d-b6cd-404a-99cc-40b62a1ab8d7","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4d3a7a95-00d4-4209-a995-509348c42d69","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"4d3a7a95-00d4-4209-a995-509348c42d69","type":"BoxAnnotation"},"plot":{"id":"75aa35c2-4a3b-4a92-b59e-6c49c2e55e0d","subtype":"Figure","type":"Plot"}},"id":"8f9c1a1c-3954-44bb-880f-fe3d6c7d9c41","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ef7cad82-7637-484f-9601-657020495d7f","type":"PanTool"},{"id":"43639a5d-b6cd-404a-99cc-40b62a1ab8d7","type":"WheelZoomTool"},{"id":"8f9c1a1c-3954-44bb-880f-fe3d6c7d9c41","type":"BoxZoomTool"},{"id":"9fdf7f18-560b-44a5-96de-2c087c757902","type":"SaveTool"},{"id":"e5f0722b-5208-4af3-af1b-59cec254fbdd","type":"ResetTool"},{"id":"8638ddf8-159d-4a20-823d-83ab5df61f63","type":"HelpTool"}]},"id":"e012d96d-67e1-49ba-b606-eb41986f20d6","type":"Toolbar"},{"attributes":{"data_source":{"id":"e759c875-1ffc-4a25-b04a-89ebcc6e6c4b","type":"ColumnDataSource"},"glyph":{"id":"9ac91981-71a6-4cfc-b835-6615d118fa15","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"22f20fac-c9a5-4a91-a817-3125a89ec6f8","type":"Triangle"},"selection_glyph":null},"id":"802876dd-0115-43eb-b0d9-d92e633e9d72","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":null},"id":"03793adf-ac6b-4031-99a6-2fd099210e73","type":"Title"}],"root_ids":["75aa35c2-4a3b-4a92-b59e-6c49c2e55e0d"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"289bb902-4b5b-4b9b-870e-8e5551a7366e","elementid":"8b67558d-bfa6-407a-9596-4eeb5e7102f2","modelid":"75aa35c2-4a3b-4a92-b59e-6c49c2e55e0d"}];
              
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