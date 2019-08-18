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
      };var element = document.getElementById("e7aeb4eb-871c-408a-9aaf-ef6a63674101");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e7aeb4eb-871c-408a-9aaf-ef6a63674101' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"3bff3655-661c-42e6-ae1d-52859cf96bf1":{"roots":{"references":[{"attributes":{"plot":{"id":"c658eb07-4c9d-4bed-b4b1-f07fdcd12001","subtype":"Figure","type":"Plot"}},"id":"b8884448-9fb4-4367-a3aa-b456474d527d","type":"HelpTool"},{"attributes":{"plot":null,"text":null},"id":"8b3c8aee-52c3-4443-936d-cb4b4c544ca1","type":"Title"},{"attributes":{"below":[{"id":"a8b780ad-d143-42dc-a308-5d98067422a5","type":"LinearAxis"}],"left":[{"id":"e13de3ff-ddcb-42e8-a424-2f831c818c80","type":"LinearAxis"}],"renderers":[{"id":"a8b780ad-d143-42dc-a308-5d98067422a5","type":"LinearAxis"},{"id":"81b6988a-53e6-4df3-9d25-8846aa32a1d0","type":"Grid"},{"id":"e13de3ff-ddcb-42e8-a424-2f831c818c80","type":"LinearAxis"},{"id":"32afb3b0-830c-4fde-9a95-3012f565ff02","type":"Grid"},{"id":"aa83c99b-9b34-4df9-a19c-b58e54d537d7","type":"BoxAnnotation"},{"id":"0dc430c6-8e9e-4e52-879c-6da6c19e56ae","type":"GlyphRenderer"}],"title":{"id":"8b3c8aee-52c3-4443-936d-cb4b4c544ca1","type":"Title"},"tool_events":{"id":"05f055e4-85d8-419c-a34b-43e3f4cced89","type":"ToolEvents"},"toolbar":{"id":"2352c0d8-4fbf-4063-8306-c108237639ea","type":"Toolbar"},"x_range":{"id":"20448293-fb68-471b-bec2-435c73a3bc74","type":"Range1d"},"y_range":{"id":"8a2cde1b-556a-4b81-8bc8-53461a23bb85","type":"Range1d"}},"id":"c658eb07-4c9d-4bed-b4b1-f07fdcd12001","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"7312e6eb-94f0-4a41-994d-3d4776bb4cd8","type":"ColumnDataSource"},"glyph":{"id":"d9521909-1009-4eb9-92f9-2f08006e9472","type":"Patches"},"hover_glyph":null,"nonselection_glyph":{"id":"0e1f9cd3-5dee-4e87-9b17-aebe59dd24c3","type":"Patches"},"selection_glyph":null},"id":"0dc430c6-8e9e-4e52-879c-6da6c19e56ae","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"0e1f9cd3-5dee-4e87-9b17-aebe59dd24c3","type":"Patches"},{"attributes":{},"id":"05f055e4-85d8-419c-a34b-43e3f4cced89","type":"ToolEvents"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"c658eb07-4c9d-4bed-b4b1-f07fdcd12001","subtype":"Figure","type":"Plot"},"ticker":{"id":"750b4b2b-fc2e-4d78-b8b9-ec3b63017f30","type":"BasicTicker"}},"id":"81b6988a-53e6-4df3-9d25-8846aa32a1d0","type":"Grid"},{"attributes":{},"id":"750b4b2b-fc2e-4d78-b8b9-ec3b63017f30","type":"BasicTicker"},{"attributes":{"formatter":{"id":"c9234641-c233-47ec-8eca-58e780744203","type":"BasicTickFormatter"},"plot":{"id":"c658eb07-4c9d-4bed-b4b1-f07fdcd12001","subtype":"Figure","type":"Plot"},"ticker":{"id":"750b4b2b-fc2e-4d78-b8b9-ec3b63017f30","type":"BasicTicker"}},"id":"a8b780ad-d143-42dc-a308-5d98067422a5","type":"LinearAxis"},{"attributes":{"formatter":{"id":"efcdcec0-9600-47de-bc2a-195fd6cddd7e","type":"BasicTickFormatter"},"plot":{"id":"c658eb07-4c9d-4bed-b4b1-f07fdcd12001","subtype":"Figure","type":"Plot"},"ticker":{"id":"6044c4fe-2f69-445f-9c75-b86f8fbc3e90","type":"BasicTicker"}},"id":"e13de3ff-ddcb-42e8-a424-2f831c818c80","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"db3a4460-8dc3-40b8-909b-f81431d110d4","type":"PanTool"},{"id":"8d5b1f3c-2a6e-44b9-94d7-696eb61d206b","type":"WheelZoomTool"},{"id":"538fec73-3c1f-453f-ae7e-3c25c4e17443","type":"BoxZoomTool"},{"id":"6dc1ae3e-cc31-4003-bb46-124882c8e288","type":"SaveTool"},{"id":"eb18c995-d8ca-4a8b-a988-30340ddbb952","type":"ResetTool"},{"id":"b8884448-9fb4-4367-a3aa-b456474d527d","type":"HelpTool"}]},"id":"2352c0d8-4fbf-4063-8306-c108237639ea","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"aa83c99b-9b34-4df9-a19c-b58e54d537d7","type":"BoxAnnotation"},{"attributes":{},"id":"6044c4fe-2f69-445f-9c75-b86f8fbc3e90","type":"BasicTicker"},{"attributes":{"overlay":{"id":"aa83c99b-9b34-4df9-a19c-b58e54d537d7","type":"BoxAnnotation"},"plot":{"id":"c658eb07-4c9d-4bed-b4b1-f07fdcd12001","subtype":"Figure","type":"Plot"}},"id":"538fec73-3c1f-453f-ae7e-3c25c4e17443","type":"BoxZoomTool"},{"attributes":{},"id":"efcdcec0-9600-47de-bc2a-195fd6cddd7e","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["ys","xs","fill_color"],"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,23.0,30.0,83.0,55.0,75.0,28.0,29.0,38.0,26.0,83.0,79.0,75.0,57.0,10.0,87.0,95.0,83.0,60.0,45.0,52.0],[52.0,45.0,60.0,83.0,95.0,87.0,10.0,57.0,75.0,79.0,83.0,26.0,38.0,29.0,28.0,75.0,55.0,83.0,30.0,23.0,65.0,40.0,168.0,73.0,94.0,85.0,92.0,54.0,87.0,138.0,145.0,141.0,75.0,52.0,142.0,105.0,126.0,71.0,86.0,119.0],[119.0,86.0,71.0,126.0,105.0,142.0,52.0,75.0,141.0,145.0,138.0,87.0,54.0,92.0,85.0,94.0,73.0,168.0,40.0,65.0,90.0,118.0,267.0,93.0,182.0,117.0,154.0,105.0,136.0,183.0,237.0,174.0,171.0,106.0,222.0,193.0,174.0,122.0,176.0,208.0],[208.0,176.0,122.0,174.0,193.0,222.0,106.0,171.0,174.0,237.0,183.0,136.0,105.0,154.0,117.0,182.0,93.0,267.0,118.0,90.0,170.0,151.0,358.0,121.0,205.0,187.0,188.0,167.0,186.0,251.0,300.0,218.0,218.0,126.0,267.0,248.0,184.0,182.0,244.0,281.0],[281.0,244.0,182.0,184.0,248.0,267.0,126.0,218.0,218.0,300.0,251.0,186.0,167.0,188.0,187.0,205.0,121.0,358.0,151.0,170.0,238.0,168.0,412.0,167.0,248.0,261.0,258.0,234.0,233.0,287.0,381.0,262.0,243.0,208.0,316.0,316.0,235.0,224.0,323.0,322.0],[322.0,323.0,224.0,235.0,316.0,316.0,208.0,243.0,262.0,381.0,287.0,233.0,234.0,258.0,261.0,248.0,167.0,412.0,168.0,238.0,292.0,213.0,437.0,265.0,313.0,336.0,353.0,249.0,265.0,379.0,399.0,293.0,320.0,229.0,335.0,408.0,313.0,294.0,355.0,360.0],[360.0,355.0,294.0,313.0,408.0,335.0,229.0,320.0,293.0,399.0,379.0,265.0,249.0,353.0,336.0,313.0,265.0,437.0,213.0,292.0,346.0,241.0,467.0,354.0,324.0,364.0,408.0,309.0,293.0,397.0,439.0,386.0,403.0,288.0,345.0,454.0,403.0,359.0,398.0,421.0],[421.0,398.0,359.0,403.0,454.0,345.0,288.0,403.0,386.0,439.0,397.0,293.0,309.0,408.0,364.0,324.0,354.0,467.0,241.0,346.0,374.0,266.0,535.0,385.0,375.0,382.0,432.0,343.0,324.0,493.0,475.0,475.0,494.0,368.0,397.0,527.0,448.0,448.0,478.0,448.0],[448.0,478.0,448.0,448.0,527.0,397.0,368.0,494.0,475.0,475.0,493.0,324.0,343.0,432.0,382.0,375.0,385.0,535.0,266.0,374.0,413.0,276.0,549.0,397.0,431.0,444.0,520.0,396.0,402.0,522.0,560.0,531.0,512.0,452.0,418.0,560.0,526.0,464.0,508.0,541.0],[541.0,508.0,464.0,526.0,560.0,418.0,452.0,512.0,531.0,560.0,522.0,402.0,396.0,520.0,444.0,431.0,397.0,549.0,276.0,413.0,440.0,333.0,629.0,446.0,501.0,531.0,610.0,421.0,451.0,550.0,630.0,575.0,594.0,479.0,501.0,610.0,550.0,498.0,575.0,555.0]]}},"id":"7312e6eb-94f0-4a41-994d-3d4776bb4cd8","type":"ColumnDataSource"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"c658eb07-4c9d-4bed-b4b1-f07fdcd12001","subtype":"Figure","type":"Plot"},"ticker":{"id":"6044c4fe-2f69-445f-9c75-b86f8fbc3e90","type":"BasicTicker"}},"id":"32afb3b0-830c-4fde-9a95-3012f565ff02","type":"Grid"},{"attributes":{"plot":{"id":"c658eb07-4c9d-4bed-b4b1-f07fdcd12001","subtype":"Figure","type":"Plot"}},"id":"8d5b1f3c-2a6e-44b9-94d7-696eb61d206b","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"c658eb07-4c9d-4bed-b4b1-f07fdcd12001","subtype":"Figure","type":"Plot"}},"id":"6dc1ae3e-cc31-4003-bb46-124882c8e288","type":"SaveTool"},{"attributes":{"plot":{"id":"c658eb07-4c9d-4bed-b4b1-f07fdcd12001","subtype":"Figure","type":"Plot"}},"id":"db3a4460-8dc3-40b8-909b-f81431d110d4","type":"PanTool"},{"attributes":{"callback":null,"end":19},"id":"20448293-fb68-471b-bec2-435c73a3bc74","type":"Range1d"},{"attributes":{},"id":"c9234641-c233-47ec-8eca-58e780744203","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":800},"id":"8a2cde1b-556a-4b81-8bc8-53461a23bb85","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"d9521909-1009-4eb9-92f9-2f08006e9472","type":"Patches"},{"attributes":{"plot":{"id":"c658eb07-4c9d-4bed-b4b1-f07fdcd12001","subtype":"Figure","type":"Plot"}},"id":"eb18c995-d8ca-4a8b-a988-30340ddbb952","type":"ResetTool"}],"root_ids":["c658eb07-4c9d-4bed-b4b1-f07fdcd12001"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"3bff3655-661c-42e6-ae1d-52859cf96bf1","elementid":"e7aeb4eb-871c-408a-9aaf-ef6a63674101","modelid":"c658eb07-4c9d-4bed-b4b1-f07fdcd12001"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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