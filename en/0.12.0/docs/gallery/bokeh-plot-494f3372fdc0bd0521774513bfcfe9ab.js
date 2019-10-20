document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("85ee4a03-e14b-48e3-9297-a7964b642e64");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '85ee4a03-e14b-48e3-9297-a7964b642e64' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"a09df23c-2a7b-45be-aa81-c4172ca715aa":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e1c15884-bf9e-4b46-b32c-24d4ee70ba20","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"446ec797-771a-450b-b926-d71bb5b7f45a","type":"PanTool"},{"id":"45ec0f00-a518-49fc-98fa-084ae4e0ad3b","type":"WheelZoomTool"},{"id":"83d31072-105e-4e36-bf5b-a71118a8dd19","type":"BoxZoomTool"},{"id":"949f6255-27c4-49b7-825c-df3371dd7050","type":"SaveTool"},{"id":"5742bae8-e976-4a40-8a05-7d010d42343f","type":"ResetTool"},{"id":"a1e5dbc7-6504-4765-ae10-f554eb417468","type":"HelpTool"}]},"id":"b720150d-52e1-4a54-b920-fb074821d769","type":"Toolbar"},{"attributes":{"callback":null,"end":19},"id":"9f445fa0-cbc9-4d77-8daf-c7357f2284ee","type":"Range1d"},{"attributes":{},"id":"71d1e0b8-8e3a-4c7b-887c-bb0356e26364","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a0a3d6e0-af2e-412b-899b-3e462f548742","subtype":"Figure","type":"Plot"}},"id":"446ec797-771a-450b-b926-d71bb5b7f45a","type":"PanTool"},{"attributes":{"callback":null,"column_names":["ys","xs","fill_color"],"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,14.0,29.0,79.0,31.0,56.0,65.0,68.0,11.0,96.0,34.0,55.0,36.0,66.0,14.0,74.0,76.0,88.0,92.0,35.0,78.0],[78.0,35.0,92.0,88.0,76.0,74.0,14.0,66.0,36.0,55.0,34.0,96.0,11.0,68.0,65.0,56.0,31.0,79.0,29.0,14.0,88.0,52.0,134.0,110.0,124.0,91.0,128.0,30.0,119.0,57.0,112.0,102.0,96.0,92.0,114.0,115.0,142.0,178.0,123.0,104.0],[104.0,123.0,178.0,142.0,115.0,114.0,92.0,96.0,102.0,112.0,57.0,119.0,30.0,128.0,91.0,124.0,110.0,134.0,52.0,88.0,160.0,75.0,189.0,128.0,150.0,137.0,140.0,103.0,152.0,118.0,192.0,177.0,118.0,111.0,160.0,135.0,211.0,201.0,207.0,188.0],[188.0,207.0,201.0,211.0,135.0,160.0,111.0,118.0,177.0,192.0,118.0,152.0,103.0,140.0,137.0,150.0,128.0,189.0,75.0,160.0,256.0,163.0,258.0,147.0,178.0,155.0,198.0,187.0,168.0,172.0,217.0,196.0,157.0,196.0,246.0,177.0,257.0,271.0,289.0,199.0],[199.0,289.0,271.0,257.0,177.0,246.0,196.0,157.0,196.0,217.0,172.0,168.0,187.0,198.0,155.0,178.0,147.0,258.0,163.0,256.0,281.0,218.0,294.0,224.0,243.0,202.0,263.0,200.0,193.0,201.0,252.0,215.0,207.0,238.0,341.0,245.0,321.0,361.0,367.0,252.0],[252.0,367.0,361.0,321.0,245.0,341.0,238.0,207.0,215.0,252.0,201.0,193.0,200.0,263.0,202.0,243.0,224.0,294.0,218.0,281.0,315.0,284.0,315.0,236.0,312.0,268.0,278.0,270.0,285.0,229.0,335.0,293.0,255.0,307.0,363.0,324.0,368.0,458.0,385.0,321.0],[321.0,385.0,458.0,368.0,324.0,363.0,307.0,255.0,293.0,335.0,229.0,285.0,270.0,278.0,268.0,312.0,236.0,315.0,284.0,315.0,353.0,326.0,394.0,334.0,364.0,352.0,291.0,319.0,373.0,262.0,368.0,347.0,303.0,376.0,389.0,350.0,448.0,512.0,419.0,403.0],[403.0,419.0,512.0,448.0,350.0,389.0,376.0,303.0,347.0,368.0,262.0,373.0,319.0,291.0,352.0,364.0,334.0,394.0,326.0,353.0,445.0,392.0,469.0,382.0,460.0,377.0,320.0,341.0,397.0,355.0,403.0,376.0,397.0,470.0,407.0,430.0,476.0,559.0,482.0,442.0],[442.0,482.0,559.0,476.0,430.0,407.0,470.0,397.0,376.0,403.0,355.0,397.0,341.0,320.0,377.0,460.0,382.0,469.0,392.0,445.0,539.0,405.0,566.0,448.0,552.0,387.0,370.0,384.0,475.0,416.0,426.0,410.0,435.0,485.0,478.0,523.0,573.0,617.0,540.0,513.0],[513.0,540.0,617.0,573.0,523.0,478.0,485.0,435.0,410.0,426.0,416.0,475.0,384.0,370.0,387.0,552.0,448.0,566.0,405.0,539.0,613.0,469.0,650.0,540.0,603.0,458.0,409.0,421.0,517.0,514.0,492.0,439.0,473.0,522.0,548.0,534.0,644.0,666.0,626.0,545.0]]}},"id":"8b9a3aa5-2616-4193-8a6f-60895d288fbe","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"d99f1c09-e133-497e-8d7d-aa3221f0a374","type":"Patches"},{"attributes":{"overlay":{"id":"e1c15884-bf9e-4b46-b32c-24d4ee70ba20","type":"BoxAnnotation"},"plot":{"id":"a0a3d6e0-af2e-412b-899b-3e462f548742","subtype":"Figure","type":"Plot"}},"id":"83d31072-105e-4e36-bf5b-a71118a8dd19","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"a0a3d6e0-af2e-412b-899b-3e462f548742","subtype":"Figure","type":"Plot"}},"id":"5742bae8-e976-4a40-8a05-7d010d42343f","type":"ResetTool"},{"attributes":{"formatter":{"id":"984b24af-6217-4e81-8195-a3b96230d276","type":"BasicTickFormatter"},"plot":{"id":"a0a3d6e0-af2e-412b-899b-3e462f548742","subtype":"Figure","type":"Plot"},"ticker":{"id":"f6442053-593f-4f12-a01d-5f766d70f3c4","type":"BasicTicker"}},"id":"c9d6114d-aa72-454d-9894-09a3a7113d96","type":"LinearAxis"},{"attributes":{"data_source":{"id":"8b9a3aa5-2616-4193-8a6f-60895d288fbe","type":"ColumnDataSource"},"glyph":{"id":"d99f1c09-e133-497e-8d7d-aa3221f0a374","type":"Patches"},"hover_glyph":null,"nonselection_glyph":{"id":"27942b10-7dda-4f2c-bd8e-a4dc8f68524a","type":"Patches"},"selection_glyph":null},"id":"bf114aa9-e46f-48fa-8bbe-f232fabce52a","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a0a3d6e0-af2e-412b-899b-3e462f548742","subtype":"Figure","type":"Plot"}},"id":"45ec0f00-a518-49fc-98fa-084ae4e0ad3b","type":"WheelZoomTool"},{"attributes":{},"id":"984b24af-6217-4e81-8195-a3b96230d276","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":800},"id":"1cb8086d-9ec3-49dd-bfdf-33e4a228fec0","type":"Range1d"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"a0a3d6e0-af2e-412b-899b-3e462f548742","subtype":"Figure","type":"Plot"},"ticker":{"id":"f6442053-593f-4f12-a01d-5f766d70f3c4","type":"BasicTicker"}},"id":"c267c498-95ed-4233-8fef-9c6e1b9d464b","type":"Grid"},{"attributes":{"plot":{"id":"a0a3d6e0-af2e-412b-899b-3e462f548742","subtype":"Figure","type":"Plot"}},"id":"949f6255-27c4-49b7-825c-df3371dd7050","type":"SaveTool"},{"attributes":{"below":[{"id":"c9d6114d-aa72-454d-9894-09a3a7113d96","type":"LinearAxis"}],"left":[{"id":"a221b964-facb-40d0-8a12-87e25867fa2d","type":"LinearAxis"}],"renderers":[{"id":"c9d6114d-aa72-454d-9894-09a3a7113d96","type":"LinearAxis"},{"id":"c267c498-95ed-4233-8fef-9c6e1b9d464b","type":"Grid"},{"id":"a221b964-facb-40d0-8a12-87e25867fa2d","type":"LinearAxis"},{"id":"fef585a4-bbfc-4ac2-a634-1ad1e557337b","type":"Grid"},{"id":"e1c15884-bf9e-4b46-b32c-24d4ee70ba20","type":"BoxAnnotation"},{"id":"bf114aa9-e46f-48fa-8bbe-f232fabce52a","type":"GlyphRenderer"}],"title":{"id":"e06204c4-80eb-4d4b-b52e-3212c3197127","type":"Title"},"tool_events":{"id":"5fa38304-04ac-49b7-bed3-d9f53963b4e8","type":"ToolEvents"},"toolbar":{"id":"b720150d-52e1-4a54-b920-fb074821d769","type":"Toolbar"},"x_range":{"id":"9f445fa0-cbc9-4d77-8daf-c7357f2284ee","type":"Range1d"},"y_range":{"id":"1cb8086d-9ec3-49dd-bfdf-33e4a228fec0","type":"Range1d"}},"id":"a0a3d6e0-af2e-412b-899b-3e462f548742","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a27892f5-f055-460e-9cba-d6d39fbd5448","type":"BasicTicker"},{"attributes":{"formatter":{"id":"71d1e0b8-8e3a-4c7b-887c-bb0356e26364","type":"BasicTickFormatter"},"plot":{"id":"a0a3d6e0-af2e-412b-899b-3e462f548742","subtype":"Figure","type":"Plot"},"ticker":{"id":"a27892f5-f055-460e-9cba-d6d39fbd5448","type":"BasicTicker"}},"id":"a221b964-facb-40d0-8a12-87e25867fa2d","type":"LinearAxis"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"a0a3d6e0-af2e-412b-899b-3e462f548742","subtype":"Figure","type":"Plot"},"ticker":{"id":"a27892f5-f055-460e-9cba-d6d39fbd5448","type":"BasicTicker"}},"id":"fef585a4-bbfc-4ac2-a634-1ad1e557337b","type":"Grid"},{"attributes":{},"id":"5fa38304-04ac-49b7-bed3-d9f53963b4e8","type":"ToolEvents"},{"attributes":{"plot":null,"text":null},"id":"e06204c4-80eb-4d4b-b52e-3212c3197127","type":"Title"},{"attributes":{"plot":{"id":"a0a3d6e0-af2e-412b-899b-3e462f548742","subtype":"Figure","type":"Plot"}},"id":"a1e5dbc7-6504-4765-ae10-f554eb417468","type":"HelpTool"},{"attributes":{},"id":"f6442053-593f-4f12-a01d-5f766d70f3c4","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"27942b10-7dda-4f2c-bd8e-a4dc8f68524a","type":"Patches"}],"root_ids":["a0a3d6e0-af2e-412b-899b-3e462f548742"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"a09df23c-2a7b-45be-aa81-c4172ca715aa","elementid":"85ee4a03-e14b-48e3-9297-a7964b642e64","modelid":"a0a3d6e0-af2e-412b-899b-3e462f548742"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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