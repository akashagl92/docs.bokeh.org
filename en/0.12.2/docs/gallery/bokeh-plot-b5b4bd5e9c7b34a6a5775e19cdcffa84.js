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
      };var element = document.getElementById("ad4a1035-fb8f-4c36-9356-b2956331a979");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ad4a1035-fb8f-4c36-9356-b2956331a979' but no matching script tag was found. ")
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
                  var docs_json = {"279f767c-5231-4b3d-990e-19e2ad0d3ed4":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[0.0,1.0,1.0,2.0,2.0,3.0,3.0,4.0,4.0,5.0,5.0,6.0,6.0,7.0,7.0,8.0,8.0,9.0,9.0,10.0,10.0,11.0,11.0,12.0,12.0,13.0,13.0,14.0,14.0,15.0,15.0,16.0,16.0,17.0,17.0,18.0,18.0,19.0,19.0,20.0,20.0,21.0,21.0,22.0,22.0,23.0,23.0,24.0,24.0,25.0,25.0,26.0,26.0,27.0,27.0,28.0,28.0,29.0,29.0,30.0,30.0,31.0,31.0,32.0,32.0,33.0,33.0,34.0,34.0,35.0,35.0,36.0,36.0,37.0,37.0,38.0,38.0,39.0,39.0,40.0,40.0,41.0,41.0,42.0,42.0,43.0,43.0,44.0,44.0,45.0,45.0,46.0,46.0,47.0,47.0,48.0,48.0,49.0,49.0,50.0,50.0,51.0,51.0,52.0,52.0,53.0,53.0,54.0,54.0,55.0,55.0,56.0,56.0,57.0,57.0,58.0,58.0,59.0,59.0,60.0,60.0,61.0,61.0,62.0,62.0,63.0,63.0,64.0,64.0,65.0,65.0,66.0,66.0,67.0,67.0,68.0,68.0,69.0,69.0,70.0,70.0,71.0,71.0,72.0,72.0,73.0,73.0,74.0,74.0,75.0,75.0,76.0,76.0,77.0,77.0,78.0,78.0,79.0,79.0,80.0,80.0,81.0,81.0,82.0,82.0,83.0,83.0,84.0,84.0,85.0,85.0,86.0,86.0,87.0,87.0,88.0,88.0,89.0,89.0,90.0,90.0,91.0,91.0,92.0,92.0,93.0,93.0,94.0,94.0,95.0,95.0,96.0,96.0,97.0,97.0,98.0,98.0,99.0],"Series 1":[-1.0,-1.0,0.0,0.0,-1.0,-1.0,0.0,0.0,-1.0,-1.0,-2.0,-2.0,-3.0,-3.0,-2.0,-2.0,-1.0,-1.0,-2.0,-2.0,-1.0,-1.0,0.0,0.0,-1.0,-1.0,0.0,0.0,1.0,1.0,0.0,0.0,1.0,1.0,0.0,0.0,1.0,1.0,0.0,0.0,-1.0,-1.0,-2.0,-2.0,-1.0,-1.0,-2.0,-2.0,-3.0,-3.0,-4.0,-4.0,-5.0,-5.0,-4.0,-4.0,-5.0,-5.0,-4.0,-4.0,-5.0,-5.0,-6.0,-6.0,-7.0,-7.0,-8.0,-8.0,-7.0,-7.0,-6.0,-6.0,-5.0,-5.0,-6.0,-6.0,-5.0,-5.0,-6.0,-6.0,-7.0,-7.0,-6.0,-6.0,-7.0,-7.0,-6.0,-6.0,-7.0,-7.0,-6.0,-6.0,-7.0,-7.0,-8.0,-8.0,-9.0,-9.0,-10.0,-10.0,-9.0,-9.0,-10.0,-10.0,-11.0,-11.0,-12.0,-12.0,-11.0,-11.0,-10.0,-10.0,-9.0,-9.0,-8.0,-8.0,-7.0,-7.0,-8.0,-8.0,-9.0,-9.0,-8.0,-8.0,-9.0,-9.0,-10.0,-10.0,-11.0,-11.0,-12.0,-12.0,-13.0,-13.0,-12.0,-12.0,-11.0,-11.0,-12.0,-12.0,-13.0,-13.0,-14.0,-14.0,-13.0,-13.0,-12.0,-12.0,-13.0,-13.0,-14.0,-14.0,-15.0,-15.0,-16.0,-16.0,-17.0,-17.0,-16.0,-16.0,-17.0,-17.0,-16.0,-16.0,-17.0,-17.0,-16.0,-16.0,-17.0,-17.0,-18.0,-18.0,-19.0,-19.0,-18.0,-18.0,-19.0,-19.0,-18.0,-18.0,-17.0,-17.0,-18.0,-18.0,-19.0,-19.0,-20.0,-20.0,-19.0,-19.0,-18.0,-18.0,-17.0,-17.0,-18.0,-18.0,-17.0,-17.0]}},"id":"11aaa28c-2e4f-4b5d-b363-19d92035645b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"cb43cf68-3fde-44de-b1b4-99de03e1766d","type":"Plot"}},"id":"a848de3d-f08a-4441-bb6d-524110f7a3cf","type":"SaveTool"},{"attributes":{},"id":"56249757-eaae-4302-b568-f59b13085758","type":"ToolEvents"},{"attributes":{},"id":"16b3f756-c42d-4fb6-9646-1a6057a388e1","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"67dd9aaf-f642-4411-81d2-4b40b1d75ebf","type":"PanTool"},{"id":"ffbd9f33-583b-4772-9f00-e3ec7e68898e","type":"WheelZoomTool"},{"id":"01eeea81-22c2-4466-a894-6c5233307fb2","type":"BoxZoomTool"},{"id":"a848de3d-f08a-4441-bb6d-524110f7a3cf","type":"SaveTool"},{"id":"fc67f0ee-323c-4d69-bcaf-3fa20ed4b650","type":"ResetTool"},{"id":"d103fcf6-63ea-43ec-a180-922075d7fcd5","type":"HelpTool"}]},"id":"42391152-fb91-4a72-beba-bce1fd39d051","type":"Toolbar"},{"attributes":{},"id":"9bb54665-4989-47d5-9c36-68ec36122fa8","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Step ggplot-based plot in Bokeh."},"id":"5f1bcf51-cc23-40b1-81db-2ef668e6a1c1","type":"Title"},{"attributes":{"axis_label_text_font":"sans-serif","axis_label_text_font_size":{"value":"14.400000pt"},"axis_label_text_font_style":"normal","formatter":{"id":"4f7f2ede-b19c-4f99-a232-32ce22a9e321","type":"BasicTickFormatter"},"major_label_text_font":"sans-serif","major_label_text_font_size":{"value":"12.000000pt"},"plot":{"id":"cb43cf68-3fde-44de-b1b4-99de03e1766d","type":"Plot"},"ticker":{"id":"16b3f756-c42d-4fb6-9646-1a6057a388e1","type":"BasicTicker"}},"id":"108bfd3d-e57f-4349-97c3-c4d5ebe704b9","type":"LinearAxis"},{"attributes":{"data_source":{"id":"11aaa28c-2e4f-4b5d-b363-19d92035645b","type":"ColumnDataSource"},"glyph":{"id":"1379f2c7-2c32-4c33-9fac-4fde4aaec606","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"32a0fad3-1793-460d-8c77-8471e91858f1","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"cb43cf68-3fde-44de-b1b4-99de03e1766d","type":"Plot"}},"id":"d103fcf6-63ea-43ec-a180-922075d7fcd5","type":"HelpTool"},{"attributes":{},"id":"f4215eb2-841d-433f-be82-2efc03a891d1","type":"BasicTickFormatter"},{"attributes":{"axis_label_text_font":"sans-serif","axis_label_text_font_size":{"value":"14.400000pt"},"axis_label_text_font_style":"normal","formatter":{"id":"f4215eb2-841d-433f-be82-2efc03a891d1","type":"BasicTickFormatter"},"major_label_text_font":"sans-serif","major_label_text_font_size":{"value":"12.000000pt"},"plot":{"id":"cb43cf68-3fde-44de-b1b4-99de03e1766d","type":"Plot"},"ticker":{"id":"9bb54665-4989-47d5-9c36-68ec36122fa8","type":"BasicTicker"}},"id":"24798a1d-5f55-403d-a6f5-4ab9e1c1e012","type":"LinearAxis"},{"attributes":{},"id":"4f7f2ede-b19c-4f99-a232-32ce22a9e321","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"24f6888e-bd8a-48e8-aa39-79d08aa8538c","type":"BoxAnnotation"},"plot":{"id":"cb43cf68-3fde-44de-b1b4-99de03e1766d","type":"Plot"}},"id":"01eeea81-22c2-4466-a894-6c5233307fb2","type":"BoxZoomTool"},{"attributes":{"line_color":{"value":"#000000"},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"1379f2c7-2c32-4c33-9fac-4fde4aaec606","type":"Line"},{"attributes":{"plot":{"id":"cb43cf68-3fde-44de-b1b4-99de03e1766d","type":"Plot"}},"id":"d6f8eecd-b01f-4e3c-9b5f-40ed5d886278","type":"Legend"},{"attributes":{"plot":{"id":"cb43cf68-3fde-44de-b1b4-99de03e1766d","type":"Plot"}},"id":"fc67f0ee-323c-4d69-bcaf-3fa20ed4b650","type":"ResetTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":1.4},"plot":{"id":"cb43cf68-3fde-44de-b1b4-99de03e1766d","type":"Plot"},"ticker":{"id":"9bb54665-4989-47d5-9c36-68ec36122fa8","type":"BasicTicker"}},"id":"511b78f1-db85-4d4b-81d8-b51a13956f99","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#E5E5E5"},"below":[{"id":"108bfd3d-e57f-4349-97c3-c4d5ebe704b9","type":"LinearAxis"}],"left":[{"id":"24798a1d-5f55-403d-a6f5-4ab9e1c1e012","type":"LinearAxis"}],"plot_height":640,"plot_width":880,"renderers":[{"id":"108bfd3d-e57f-4349-97c3-c4d5ebe704b9","type":"LinearAxis"},{"id":"f21d184a-2abe-431b-9eec-b384ae4bc357","type":"Grid"},{"id":"24798a1d-5f55-403d-a6f5-4ab9e1c1e012","type":"LinearAxis"},{"id":"511b78f1-db85-4d4b-81d8-b51a13956f99","type":"Grid"},{"id":"d6f8eecd-b01f-4e3c-9b5f-40ed5d886278","type":"Legend"},{"id":"24f6888e-bd8a-48e8-aa39-79d08aa8538c","type":"BoxAnnotation"},{"id":"32a0fad3-1793-460d-8c77-8471e91858f1","type":"GlyphRenderer"}],"title":{"id":"5f1bcf51-cc23-40b1-81db-2ef668e6a1c1","type":"Title"},"tool_events":{"id":"56249757-eaae-4302-b568-f59b13085758","type":"ToolEvents"},"toolbar":{"id":"42391152-fb91-4a72-beba-bce1fd39d051","type":"Toolbar"},"x_range":{"id":"aeab477b-0f8b-429e-a303-a0be125cdf4e","type":"DataRange1d"},"y_range":{"id":"55511c8f-30e4-4b9d-9b53-57cf6f4de65a","type":"DataRange1d"}},"id":"cb43cf68-3fde-44de-b1b4-99de03e1766d","type":"Plot"},{"attributes":{"callback":null},"id":"aeab477b-0f8b-429e-a303-a0be125cdf4e","type":"DataRange1d"},{"attributes":{"plot":{"id":"cb43cf68-3fde-44de-b1b4-99de03e1766d","type":"Plot"}},"id":"ffbd9f33-583b-4772-9f00-e3ec7e68898e","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"55511c8f-30e4-4b9d-9b53-57cf6f4de65a","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"24f6888e-bd8a-48e8-aa39-79d08aa8538c","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"cb43cf68-3fde-44de-b1b4-99de03e1766d","type":"Plot"}},"id":"67dd9aaf-f642-4411-81d2-4b40b1d75ebf","type":"PanTool"},{"attributes":{"grid_line_color":{"value":"white"},"grid_line_width":{"value":1.4},"plot":{"id":"cb43cf68-3fde-44de-b1b4-99de03e1766d","type":"Plot"},"ticker":{"id":"16b3f756-c42d-4fb6-9646-1a6057a388e1","type":"BasicTicker"}},"id":"f21d184a-2abe-431b-9eec-b384ae4bc357","type":"Grid"}],"root_ids":["cb43cf68-3fde-44de-b1b4-99de03e1766d"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"279f767c-5231-4b3d-990e-19e2ad0d3ed4","elementid":"ad4a1035-fb8f-4c36-9356-b2956331a979","modelid":"cb43cf68-3fde-44de-b1b4-99de03e1766d"}];
                  
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