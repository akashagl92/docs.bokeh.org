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
      };var element = document.getElementById("bbb468b8-60fd-4806-9dda-96b938c8569f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bbb468b8-60fd-4806-9dda-96b938c8569f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"f6c134a9-c0ec-490f-a0d6-c8d9e3d169f0":{"roots":{"references":[{"attributes":{"plot":{"id":"73c38796-7556-4b9e-beff-d75f93b1af38","subtype":"Figure","type":"Plot"}},"id":"1bf0697c-0dfa-43ea-8520-107f7f6d642d","type":"HelpTool"},{"attributes":{"below":[{"id":"09ed057b-6087-4b1e-8785-da5270e5c59e","type":"LinearAxis"}],"left":[{"id":"46b1567d-92ec-41da-bbb7-31666897dc53","type":"LinearAxis"}],"renderers":[{"id":"09ed057b-6087-4b1e-8785-da5270e5c59e","type":"LinearAxis"},{"id":"789fe640-5771-43b3-9476-c222eaf3abea","type":"Grid"},{"id":"46b1567d-92ec-41da-bbb7-31666897dc53","type":"LinearAxis"},{"id":"eca990b7-f94c-41c1-b663-17b3c7c05b53","type":"Grid"},{"id":"57f6d4ac-d19b-41b7-8718-5ca4d54696bb","type":"BoxAnnotation"},{"id":"a2b0f2e9-9bcb-408d-8681-037bb9630596","type":"GlyphRenderer"}],"title":{"id":"273d1a31-e783-4a5a-b303-5c86cc25e874","type":"Title"},"tool_events":{"id":"966d57e7-849c-4878-a526-e34ff922410a","type":"ToolEvents"},"toolbar":{"id":"53db4366-f7c6-4020-8e06-babc181a31a0","type":"Toolbar"},"x_range":{"id":"dcf3d177-dcd9-4668-8c74-dc742b472fd7","type":"Range1d"},"y_range":{"id":"7f26dfb7-7bd5-40bc-934e-c56e7cbfb373","type":"Range1d"}},"id":"73c38796-7556-4b9e-beff-d75f93b1af38","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":800},"id":"7f26dfb7-7bd5-40bc-934e-c56e7cbfb373","type":"Range1d"},{"attributes":{"callback":null,"end":19},"id":"dcf3d177-dcd9-4668-8c74-dc742b472fd7","type":"Range1d"},{"attributes":{},"id":"22368f7c-4479-468d-a04e-9ef81cf2cab4","type":"BasicTicker"},{"attributes":{},"id":"e296065c-4135-42fb-9d5c-433a53108a7a","type":"BasicTickFormatter"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"73c38796-7556-4b9e-beff-d75f93b1af38","subtype":"Figure","type":"Plot"},"ticker":{"id":"9015659c-92bd-46f4-8fea-29db892066df","type":"BasicTicker"}},"id":"789fe640-5771-43b3-9476-c222eaf3abea","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"57f6d4ac-d19b-41b7-8718-5ca4d54696bb","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"aebcb240-6969-4815-bb5a-d9d390529caf","type":"Patches"},{"attributes":{"data_source":{"id":"f1b0350c-80b9-4e02-9547-d8f54f50aeec","type":"ColumnDataSource"},"glyph":{"id":"4f9010de-ea74-4895-8e52-62125401de2a","type":"Patches"},"hover_glyph":null,"nonselection_glyph":{"id":"aebcb240-6969-4815-bb5a-d9d390529caf","type":"Patches"},"selection_glyph":null},"id":"a2b0f2e9-9bcb-408d-8681-037bb9630596","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"4f9010de-ea74-4895-8e52-62125401de2a","type":"Patches"},{"attributes":{"plot":null,"text":null},"id":"273d1a31-e783-4a5a-b303-5c86cc25e874","type":"Title"},{"attributes":{"overlay":{"id":"57f6d4ac-d19b-41b7-8718-5ca4d54696bb","type":"BoxAnnotation"},"plot":{"id":"73c38796-7556-4b9e-beff-d75f93b1af38","subtype":"Figure","type":"Plot"}},"id":"1a184ca5-22c5-4117-a9e5-971cab819dfb","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"e296065c-4135-42fb-9d5c-433a53108a7a","type":"BasicTickFormatter"},"plot":{"id":"73c38796-7556-4b9e-beff-d75f93b1af38","subtype":"Figure","type":"Plot"},"ticker":{"id":"9015659c-92bd-46f4-8fea-29db892066df","type":"BasicTicker"}},"id":"09ed057b-6087-4b1e-8785-da5270e5c59e","type":"LinearAxis"},{"attributes":{"plot":{"id":"73c38796-7556-4b9e-beff-d75f93b1af38","subtype":"Figure","type":"Plot"}},"id":"3127ea3d-4b8b-452f-9f5d-981ab8772a2d","type":"PanTool"},{"attributes":{"plot":{"id":"73c38796-7556-4b9e-beff-d75f93b1af38","subtype":"Figure","type":"Plot"}},"id":"90cb3202-01ee-4cd1-aed9-ad4e3a2c0e3c","type":"ResetTool"},{"attributes":{"formatter":{"id":"d0b6adf1-bb0e-4f37-a4d3-b79fa91a7615","type":"BasicTickFormatter"},"plot":{"id":"73c38796-7556-4b9e-beff-d75f93b1af38","subtype":"Figure","type":"Plot"},"ticker":{"id":"22368f7c-4479-468d-a04e-9ef81cf2cab4","type":"BasicTicker"}},"id":"46b1567d-92ec-41da-bbb7-31666897dc53","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["ys","xs","fill_color"],"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,38.0,75.0,36.0,40.0,48.0,81.0,60.0,65.0,64.0,25.0,53.0,12.0,81.0,71.0,46.0,87.0,81.0,73.0,97.0,36.0],[36.0,97.0,73.0,81.0,87.0,46.0,71.0,81.0,12.0,53.0,25.0,64.0,65.0,60.0,81.0,48.0,40.0,36.0,75.0,38.0,52.0,150.0,77.0,116.0,138.0,146.0,121.0,124.0,116.0,114.0,112.0,36.0,141.0,168.0,72.0,105.0,139.0,152.0,159.0,101.0],[101.0,159.0,152.0,139.0,105.0,72.0,168.0,141.0,36.0,112.0,114.0,116.0,124.0,121.0,146.0,138.0,116.0,77.0,150.0,52.0,81.0,244.0,155.0,153.0,203.0,191.0,172.0,176.0,143.0,211.0,144.0,119.0,186.0,196.0,161.0,177.0,218.0,204.0,255.0,199.0],[199.0,255.0,204.0,218.0,177.0,161.0,196.0,186.0,119.0,144.0,211.0,143.0,176.0,172.0,191.0,203.0,153.0,155.0,244.0,81.0,171.0,276.0,189.0,216.0,262.0,275.0,231.0,238.0,200.0,304.0,182.0,169.0,243.0,269.0,184.0,232.0,256.0,299.0,310.0,272.0],[272.0,310.0,299.0,256.0,232.0,184.0,269.0,243.0,169.0,182.0,304.0,200.0,238.0,231.0,275.0,262.0,216.0,189.0,276.0,171.0,245.0,292.0,215.0,263.0,314.0,316.0,324.0,330.0,223.0,317.0,276.0,226.0,305.0,343.0,272.0,301.0,347.0,334.0,362.0,325.0],[325.0,362.0,334.0,347.0,301.0,272.0,343.0,305.0,226.0,276.0,317.0,223.0,330.0,324.0,316.0,314.0,263.0,215.0,292.0,245.0,304.0,376.0,274.0,306.0,393.0,391.0,350.0,384.0,283.0,352.0,306.0,267.0,367.0,361.0,319.0,365.0,370.0,373.0,396.0,391.0],[391.0,396.0,373.0,370.0,365.0,319.0,361.0,367.0,267.0,306.0,352.0,283.0,384.0,350.0,391.0,393.0,306.0,274.0,376.0,304.0,350.0,409.0,324.0,356.0,490.0,434.0,387.0,396.0,334.0,374.0,357.0,319.0,397.0,371.0,337.0,453.0,454.0,471.0,422.0,425.0],[425.0,422.0,471.0,454.0,453.0,337.0,371.0,397.0,319.0,357.0,374.0,334.0,396.0,387.0,434.0,490.0,356.0,324.0,409.0,350.0,396.0,476.0,355.0,420.0,513.0,445.0,431.0,427.0,423.0,428.0,448.0,411.0,409.0,388.0,393.0,482.0,524.0,487.0,439.0,481.0],[481.0,439.0,487.0,524.0,482.0,393.0,388.0,409.0,411.0,448.0,428.0,423.0,427.0,431.0,445.0,513.0,420.0,355.0,476.0,396.0,415.0,493.0,399.0,481.0,560.0,497.0,483.0,484.0,500.0,460.0,524.0,444.0,433.0,413.0,474.0,545.0,618.0,504.0,512.0,559.0],[559.0,512.0,504.0,618.0,545.0,474.0,413.0,433.0,444.0,524.0,460.0,500.0,484.0,483.0,497.0,560.0,481.0,399.0,493.0,415.0,459.0,570.0,414.0,556.0,582.0,549.0,521.0,573.0,561.0,535.0,601.0,495.0,476.0,425.0,572.0,637.0,677.0,539.0,579.0,644.0]]}},"id":"f1b0350c-80b9-4e02-9547-d8f54f50aeec","type":"ColumnDataSource"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"73c38796-7556-4b9e-beff-d75f93b1af38","subtype":"Figure","type":"Plot"},"ticker":{"id":"22368f7c-4479-468d-a04e-9ef81cf2cab4","type":"BasicTicker"}},"id":"eca990b7-f94c-41c1-b663-17b3c7c05b53","type":"Grid"},{"attributes":{},"id":"9015659c-92bd-46f4-8fea-29db892066df","type":"BasicTicker"},{"attributes":{"plot":{"id":"73c38796-7556-4b9e-beff-d75f93b1af38","subtype":"Figure","type":"Plot"}},"id":"13016670-8c9a-46e5-a6b2-fb1594af416d","type":"SaveTool"},{"attributes":{},"id":"d0b6adf1-bb0e-4f37-a4d3-b79fa91a7615","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3127ea3d-4b8b-452f-9f5d-981ab8772a2d","type":"PanTool"},{"id":"2c3881c3-1f40-43ed-8b33-7a753df160f9","type":"WheelZoomTool"},{"id":"1a184ca5-22c5-4117-a9e5-971cab819dfb","type":"BoxZoomTool"},{"id":"13016670-8c9a-46e5-a6b2-fb1594af416d","type":"SaveTool"},{"id":"90cb3202-01ee-4cd1-aed9-ad4e3a2c0e3c","type":"ResetTool"},{"id":"1bf0697c-0dfa-43ea-8520-107f7f6d642d","type":"HelpTool"}]},"id":"53db4366-f7c6-4020-8e06-babc181a31a0","type":"Toolbar"},{"attributes":{},"id":"966d57e7-849c-4878-a526-e34ff922410a","type":"ToolEvents"},{"attributes":{"plot":{"id":"73c38796-7556-4b9e-beff-d75f93b1af38","subtype":"Figure","type":"Plot"}},"id":"2c3881c3-1f40-43ed-8b33-7a753df160f9","type":"WheelZoomTool"}],"root_ids":["73c38796-7556-4b9e-beff-d75f93b1af38"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"f6c134a9-c0ec-490f-a0d6-c8d9e3d169f0","elementid":"bbb468b8-60fd-4806-9dda-96b938c8569f","modelid":"73c38796-7556-4b9e-beff-d75f93b1af38"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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