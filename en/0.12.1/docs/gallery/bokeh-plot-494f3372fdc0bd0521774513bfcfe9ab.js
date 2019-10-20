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
      };var element = document.getElementById("619abb11-bd70-4b46-9559-cdc87d8d1a98");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '619abb11-bd70-4b46-9559-cdc87d8d1a98' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"f45c4630-1b39-45a0-84e5-c7e1507e89d2":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d89b081d-d0fa-4cd4-9c25-932cb5c80a43","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"d599cb3b-732a-4425-a865-133fecb758fb","type":"BasicTickFormatter"},"plot":{"id":"5f3430ae-c8f1-426a-a15a-98b28b05c057","subtype":"Figure","type":"Plot"},"ticker":{"id":"30a2684f-ef3d-4ce9-94c9-28d4430a89df","type":"BasicTicker"}},"id":"ac13cbd2-761c-4b92-b241-e111a424c9e0","type":"LinearAxis"},{"attributes":{"callback":null,"end":800},"id":"f61710a3-e20a-41bd-8d92-ead0edd8749e","type":"Range1d"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"5f3430ae-c8f1-426a-a15a-98b28b05c057","subtype":"Figure","type":"Plot"},"ticker":{"id":"338ed469-0ae1-418c-b72d-9eefda263668","type":"BasicTicker"}},"id":"3396e540-0014-48b4-adfc-9ca1f6899896","type":"Grid"},{"attributes":{"plot":null,"text":null},"id":"d8298caa-c733-45ae-803a-e4ffa804f650","type":"Title"},{"attributes":{"plot":{"id":"5f3430ae-c8f1-426a-a15a-98b28b05c057","subtype":"Figure","type":"Plot"}},"id":"8bc352b9-003f-4e8f-a627-96dc889c2b08","type":"SaveTool"},{"attributes":{"formatter":{"id":"e98fd70c-7cc4-4dfe-85ca-15e7c1e27388","type":"BasicTickFormatter"},"plot":{"id":"5f3430ae-c8f1-426a-a15a-98b28b05c057","subtype":"Figure","type":"Plot"},"ticker":{"id":"338ed469-0ae1-418c-b72d-9eefda263668","type":"BasicTicker"}},"id":"b9e6e447-304e-408f-b23b-01a9a951ec31","type":"LinearAxis"},{"attributes":{"plot":{"id":"5f3430ae-c8f1-426a-a15a-98b28b05c057","subtype":"Figure","type":"Plot"}},"id":"185805b5-eb69-42e6-92b4-15c94ba90a0d","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"587089d1-5a64-42d3-98ec-ed7fa835b2df","type":"PanTool"},{"id":"27c65216-6962-4d62-8d1b-4e91992dd67f","type":"WheelZoomTool"},{"id":"9b0c2c9b-580c-41e5-96e6-709077fd3db5","type":"BoxZoomTool"},{"id":"8bc352b9-003f-4e8f-a627-96dc889c2b08","type":"SaveTool"},{"id":"47da1c9e-15e3-42d5-8073-1b132fabdf55","type":"ResetTool"},{"id":"185805b5-eb69-42e6-92b4-15c94ba90a0d","type":"HelpTool"}]},"id":"d4f7b5d9-c648-4861-9894-6beec1abaec3","type":"Toolbar"},{"attributes":{"below":[{"id":"b9e6e447-304e-408f-b23b-01a9a951ec31","type":"LinearAxis"}],"left":[{"id":"ac13cbd2-761c-4b92-b241-e111a424c9e0","type":"LinearAxis"}],"renderers":[{"id":"b9e6e447-304e-408f-b23b-01a9a951ec31","type":"LinearAxis"},{"id":"3396e540-0014-48b4-adfc-9ca1f6899896","type":"Grid"},{"id":"ac13cbd2-761c-4b92-b241-e111a424c9e0","type":"LinearAxis"},{"id":"cc57c783-8a1d-4941-83ae-1f703ff58191","type":"Grid"},{"id":"d89b081d-d0fa-4cd4-9c25-932cb5c80a43","type":"BoxAnnotation"},{"id":"4404f6cc-a4c2-4734-9336-67fb8d9a390d","type":"GlyphRenderer"}],"title":{"id":"d8298caa-c733-45ae-803a-e4ffa804f650","type":"Title"},"tool_events":{"id":"ffaac305-4056-4286-a7f5-30636d8b0abd","type":"ToolEvents"},"toolbar":{"id":"d4f7b5d9-c648-4861-9894-6beec1abaec3","type":"Toolbar"},"x_range":{"id":"ce73597e-0358-4b0d-a791-3b69cad1ba74","type":"Range1d"},"y_range":{"id":"f61710a3-e20a-41bd-8d92-ead0edd8749e","type":"Range1d"}},"id":"5f3430ae-c8f1-426a-a15a-98b28b05c057","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"a92d572e-9e8a-4b32-9d91-ae87ee1c8b36","type":"ColumnDataSource"},"glyph":{"id":"a94a4db5-b9d5-4e51-a585-f4ff57d02820","type":"Patches"},"hover_glyph":null,"nonselection_glyph":{"id":"fd53687c-5785-4624-b5e0-4c70e58b59f3","type":"Patches"},"selection_glyph":null},"id":"4404f6cc-a4c2-4734-9336-67fb8d9a390d","type":"GlyphRenderer"},{"attributes":{},"id":"30a2684f-ef3d-4ce9-94c9-28d4430a89df","type":"BasicTicker"},{"attributes":{},"id":"ffaac305-4056-4286-a7f5-30636d8b0abd","type":"ToolEvents"},{"attributes":{},"id":"338ed469-0ae1-418c-b72d-9eefda263668","type":"BasicTicker"},{"attributes":{"plot":{"id":"5f3430ae-c8f1-426a-a15a-98b28b05c057","subtype":"Figure","type":"Plot"}},"id":"47da1c9e-15e3-42d5-8073-1b132fabdf55","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"fd53687c-5785-4624-b5e0-4c70e58b59f3","type":"Patches"},{"attributes":{"callback":null,"column_names":["ys","xs","fill_color"],"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,99.0,13.0,99.0,25.0,55.0,39.0,72.0,19.0,80.0,87.0,56.0,99.0,67.0,15.0,79.0,93.0,62.0,62.0,96.0,84.0],[84.0,96.0,62.0,62.0,93.0,79.0,15.0,67.0,99.0,56.0,87.0,80.0,19.0,72.0,39.0,55.0,25.0,99.0,13.0,99.0,186.0,56.0,167.0,46.0,152.0,85.0,148.0,34.0,159.0,99.0,132.0,192.0,113.0,26.0,126.0,181.0,86.0,91.0,142.0,130.0],[130.0,142.0,91.0,86.0,181.0,126.0,26.0,113.0,192.0,132.0,99.0,159.0,34.0,148.0,85.0,152.0,46.0,167.0,56.0,186.0,242.0,113.0,247.0,70.0,167.0,160.0,171.0,122.0,176.0,171.0,177.0,244.0,160.0,89.0,182.0,196.0,182.0,131.0,203.0,172.0],[172.0,203.0,131.0,182.0,196.0,182.0,89.0,160.0,244.0,177.0,171.0,176.0,122.0,171.0,160.0,167.0,70.0,247.0,113.0,242.0,286.0,142.0,280.0,102.0,263.0,213.0,220.0,180.0,274.0,250.0,223.0,265.0,208.0,99.0,264.0,294.0,198.0,203.0,302.0,210.0],[210.0,302.0,203.0,198.0,294.0,264.0,99.0,208.0,265.0,223.0,250.0,274.0,180.0,220.0,213.0,263.0,102.0,280.0,142.0,286.0,306.0,165.0,364.0,148.0,311.0,276.0,245.0,191.0,323.0,320.0,258.0,357.0,218.0,118.0,357.0,382.0,236.0,251.0,378.0,232.0],[232.0,378.0,251.0,236.0,382.0,357.0,118.0,218.0,357.0,258.0,320.0,323.0,191.0,245.0,276.0,311.0,148.0,364.0,165.0,306.0,323.0,256.0,407.0,182.0,370.0,335.0,263.0,247.0,419.0,361.0,343.0,414.0,231.0,151.0,367.0,462.0,305.0,348.0,441.0,307.0],[307.0,441.0,348.0,305.0,462.0,367.0,151.0,231.0,414.0,343.0,361.0,419.0,247.0,263.0,335.0,370.0,182.0,407.0,256.0,323.0,333.0,287.0,435.0,197.0,404.0,402.0,288.0,316.0,483.0,419.0,382.0,458.0,286.0,225.0,414.0,557.0,384.0,379.0,472.0,327.0],[327.0,472.0,379.0,384.0,557.0,414.0,225.0,286.0,458.0,382.0,419.0,483.0,316.0,288.0,402.0,404.0,197.0,435.0,287.0,333.0,351.0,297.0,525.0,208.0,490.0,425.0,304.0,368.0,495.0,451.0,459.0,541.0,385.0,322.0,448.0,639.0,424.0,471.0,530.0,420.0],[420.0,530.0,471.0,424.0,639.0,448.0,322.0,385.0,541.0,459.0,451.0,495.0,368.0,304.0,425.0,490.0,208.0,525.0,297.0,351.0,415.0,387.0,603.0,260.0,551.0,477.0,364.0,436.0,591.0,513.0,549.0,622.0,483.0,418.0,473.0,683.0,436.0,565.0,550.0,448.0],[448.0,550.0,565.0,436.0,683.0,473.0,418.0,483.0,622.0,549.0,513.0,591.0,436.0,364.0,477.0,551.0,260.0,603.0,387.0,415.0,428.0,424.0,692.0,345.0,599.0,508.0,403.0,469.0,622.0,599.0,560.0,707.0,515.0,482.0,511.0,701.0,523.0,579.0,590.0,489.0]]}},"id":"a92d572e-9e8a-4b32-9d91-ae87ee1c8b36","type":"ColumnDataSource"},{"attributes":{},"id":"e98fd70c-7cc4-4dfe-85ca-15e7c1e27388","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"5f3430ae-c8f1-426a-a15a-98b28b05c057","subtype":"Figure","type":"Plot"}},"id":"27c65216-6962-4d62-8d1b-4e91992dd67f","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"d89b081d-d0fa-4cd4-9c25-932cb5c80a43","type":"BoxAnnotation"},"plot":{"id":"5f3430ae-c8f1-426a-a15a-98b28b05c057","subtype":"Figure","type":"Plot"}},"id":"9b0c2c9b-580c-41e5-96e6-709077fd3db5","type":"BoxZoomTool"},{"attributes":{},"id":"d599cb3b-732a-4425-a865-133fecb758fb","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":19},"id":"ce73597e-0358-4b0d-a791-3b69cad1ba74","type":"Range1d"},{"attributes":{"plot":{"id":"5f3430ae-c8f1-426a-a15a-98b28b05c057","subtype":"Figure","type":"Plot"}},"id":"587089d1-5a64-42d3-98ec-ed7fa835b2df","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"a94a4db5-b9d5-4e51-a585-f4ff57d02820","type":"Patches"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"5f3430ae-c8f1-426a-a15a-98b28b05c057","subtype":"Figure","type":"Plot"},"ticker":{"id":"30a2684f-ef3d-4ce9-94c9-28d4430a89df","type":"BasicTicker"}},"id":"cc57c783-8a1d-4941-83ae-1f703ff58191","type":"Grid"}],"root_ids":["5f3430ae-c8f1-426a-a15a-98b28b05c057"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"f45c4630-1b39-45a0-84e5-c7e1507e89d2","elementid":"619abb11-bd70-4b46-9559-cdc87d8d1a98","modelid":"5f3430ae-c8f1-426a-a15a-98b28b05c057"}];
              
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