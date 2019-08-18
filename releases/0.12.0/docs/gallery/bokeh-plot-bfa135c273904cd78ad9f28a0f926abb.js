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
      };var element = document.getElementById("aa0e7139-a631-4f81-ba9d-3066a09b361b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aa0e7139-a631-4f81-ba9d-3066a09b361b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"583a3311-d121-4be5-9a1e-78b90ac2a9eb":{"roots":{"references":[{"attributes":{},"id":"426b964b-2299-4791-a8c0-c22f5dbce33e","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"e00f8803-a19e-4526-8549-78499829f1e9","type":"ColumnDataSource"},"glyph":{"id":"196aa941-fe16-42a6-adc3-78e0eb6151c5","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"35613c58-3839-4165-acf6-aa7bcf5acf1c","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"40478bae-7e27-4e13-9e3b-39beaaf2d5f5","type":"Patches"},{"attributes":{"plot":{"id":"b3e9194a-5a77-4b63-86a2-2674b9d4e3d0","subtype":"Chart","type":"Plot"}},"id":"50b012e1-87dc-476a-81f0-cd526f2f38f5","type":"ResetTool"},{"attributes":{"data_source":{"id":"2fd31e2d-aba8-4ee0-b98e-abc32a74f631","type":"ColumnDataSource"},"glyph":{"id":"40478bae-7e27-4e13-9e3b-39beaaf2d5f5","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c07b3fbd-42f4-4320-8c22-549b614ec05b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"854aeb5a-3b7f-46b8-b4bc-992b9408a248","type":"ColumnDataSource"},"glyph":{"id":"236a83d2-6ece-40bb-ade5-a6a60d8fce2e","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3e74e10a-c3c1-4ed6-a759-14ed96900458","type":"GlyphRenderer"},{"attributes":{},"id":"38a1b074-3d86-44d4-b70c-e4bd9b17be5d","type":"BasicTicker"},{"attributes":{"plot":{"id":"b3e9194a-5a77-4b63-86a2-2674b9d4e3d0","subtype":"Chart","type":"Plot"},"ticker":{"id":"38a1b074-3d86-44d4-b70c-e4bd9b17be5d","type":"BasicTicker"}},"id":"7c5355a3-4f3d-48a6-b0af-a7529e9edf0b","type":"Grid"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"python"}],"series":["python"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[[0.0,2.0,3.0,7.0,5.0,26.0,221.0,44.0,233.0,254.0,265.0,266.0,267.0,120.0,111.0,0.0]]}},"id":"b1008942-9a02-4272-a58b-32ae943b1b3e","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Area Chart"},"id":"69ca26d2-8989-4e26-8dee-e2c35ba4a7d5","type":"Title"},{"attributes":{},"id":"f7901417-2405-416e-87dd-6326494ed4c0","type":"BasicTicker"},{"attributes":{"legends":[["jython",[{"id":"3e74e10a-c3c1-4ed6-a759-14ed96900458","type":"GlyphRenderer"}]],["pypy",[{"id":"c07b3fbd-42f4-4320-8c22-549b614ec05b","type":"GlyphRenderer"}]],["python",[{"id":"35613c58-3839-4165-acf6-aa7bcf5acf1c","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"b3e9194a-5a77-4b63-86a2-2674b9d4e3d0","subtype":"Chart","type":"Plot"}},"id":"2c335d87-af2b-45f2-9800-353efc6a7ae7","type":"Legend"},{"attributes":{"overlay":{"id":"065df44f-d77f-4f73-86de-6bd7ef8525fb","type":"BoxAnnotation"},"plot":{"id":"b3e9194a-5a77-4b63-86a2-2674b9d4e3d0","subtype":"Chart","type":"Plot"}},"id":"01999580-aeef-4a45-b0f5-71861470d520","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"fb5263b6-319a-4876-a201-7206e990e4c6","subtype":"Chart","type":"Plot"}},"id":"c40cbb98-7abd-4928-8599-ef45038617df","type":"SaveTool"},{"attributes":{},"id":"76bae6b3-5bd9-4e90-af59-2b588ff91e60","type":"BasicTicker"},{"attributes":{},"id":"b0355f7c-0e72-405d-b961-71a9c8bab966","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"236a83d2-6ece-40bb-ade5-a6a60d8fce2e","type":"Patches"},{"attributes":{"dimension":1,"plot":{"id":"b3e9194a-5a77-4b63-86a2-2674b9d4e3d0","subtype":"Chart","type":"Plot"},"ticker":{"id":"b0355f7c-0e72-405d-b961-71a9c8bab966","type":"BasicTicker"}},"id":"e40a3adc-09f7-479b-bf45-a4b25787b480","type":"Grid"},{"attributes":{"axis_label":"time","formatter":{"id":"cbd74139-f854-470f-b9fa-26aa22575477","type":"BasicTickFormatter"},"plot":{"id":"fb5263b6-319a-4876-a201-7206e990e4c6","subtype":"Chart","type":"Plot"},"ticker":{"id":"76bae6b3-5bd9-4e90-af59-2b588ff91e60","type":"BasicTicker"}},"id":"fb104ade-b14d-4543-8d50-0a6ca1f7181e","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"82731f58-a155-44c5-aac0-e14c6f9919ca","type":"PanTool"},{"id":"c63eb15b-5d6e-47fe-b2eb-5a784b73dcc4","type":"WheelZoomTool"},{"id":"9c8d2100-2648-4356-bdc1-ce72f78f1a45","type":"BoxZoomTool"},{"id":"c40cbb98-7abd-4928-8599-ef45038617df","type":"SaveTool"},{"id":"fa166682-6d2b-4362-88f7-3a8847cc872a","type":"ResetTool"},{"id":"c167c4cf-9b2c-4ac4-8dae-cd8e849faa18","type":"HelpTool"}]},"id":"f740b846-78e5-4ba3-b35a-7ff3540e05cc","type":"Toolbar"},{"attributes":{"axis_label":"time","formatter":{"id":"426b964b-2299-4791-a8c0-c22f5dbce33e","type":"BasicTickFormatter"},"plot":{"id":"b3e9194a-5a77-4b63-86a2-2674b9d4e3d0","subtype":"Chart","type":"Plot"},"ticker":{"id":"38a1b074-3d86-44d4-b70c-e4bd9b17be5d","type":"BasicTicker"}},"id":"07b28d95-000e-47ac-8a7f-46e5b3352a35","type":"LinearAxis"},{"attributes":{"legends":[["jython",[{"id":"9b0e89b8-2314-41f6-88b7-043c58b31b89","type":"GlyphRenderer"}]],["pypy",[{"id":"61b2bcb6-3a62-4ec3-b3e8-fc0a6f6c2685","type":"GlyphRenderer"}]],["python",[{"id":"43af2fdd-4f02-496b-93ad-5995d76f99f5","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"fb5263b6-319a-4876-a201-7206e990e4c6","subtype":"Chart","type":"Plot"}},"id":"75c9e1ec-8b8f-407e-9c02-670e53dd7dd7","type":"Legend"},{"attributes":{},"id":"24224054-31f7-434d-bc81-216be9916f91","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"91db7339-80b1-41cc-94c7-04f40de27807","type":"Patches"},{"attributes":{"plot":{"id":"b3e9194a-5a77-4b63-86a2-2674b9d4e3d0","subtype":"Chart","type":"Plot"}},"id":"79fc3d1c-ff1c-4382-9785-9d89c351611b","type":"SaveTool"},{"attributes":{"plot":{"id":"fb5263b6-319a-4876-a201-7206e990e4c6","subtype":"Chart","type":"Plot"}},"id":"c63eb15b-5d6e-47fe-b2eb-5a784b73dcc4","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":837.1,"start":-76.10000000000001},"id":"1d934f22-e334-4e1e-8e30-2b022b4f223e","type":"Range1d"},{"attributes":{"data_source":{"id":"1221051e-846e-4498-b103-f12f265d2263","type":"ColumnDataSource"},"glyph":{"id":"91db7339-80b1-41cc-94c7-04f40de27807","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"61b2bcb6-3a62-4ec3-b3e8-fc0a6f6c2685","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"f8b13089-a556-4b24-bbeb-68db5f9ae2dc","type":"BoxAnnotation"},"plot":{"id":"fb5263b6-319a-4876-a201-7206e990e4c6","subtype":"Chart","type":"Plot"}},"id":"9c8d2100-2648-4356-bdc1-ce72f78f1a45","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"065df44f-d77f-4f73-86de-6bd7ef8525fb","type":"BoxAnnotation"},{"attributes":{"axis_label":"memory","formatter":{"id":"c37b0016-a747-421e-b601-ab567e8f3826","type":"BasicTickFormatter"},"plot":{"id":"fb5263b6-319a-4876-a201-7206e990e4c6","subtype":"Chart","type":"Plot"},"ticker":{"id":"f7901417-2405-416e-87dd-6326494ed4c0","type":"BasicTicker"}},"id":"cda9ef7a-2600-4269-9bd8-ea7ffc048d65","type":"LinearAxis"},{"attributes":{"plot":{"id":"fb5263b6-319a-4876-a201-7206e990e4c6","subtype":"Chart","type":"Plot"},"ticker":{"id":"76bae6b3-5bd9-4e90-af59-2b588ff91e60","type":"BasicTicker"}},"id":"776fb8df-d341-497c-a29f-0713e98bbf3f","type":"Grid"},{"attributes":{},"id":"cbd74139-f854-470f-b9fa-26aa22575477","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"pypy"}],"series":["pypy"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[[0.0,12.0,33.0,47.0,15.0,126.0,121.0,144.0,233.0,254.0,225.0,226.0,267.0,110.0,130.0,0.0]]}},"id":"1221051e-846e-4498-b103-f12f265d2263","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b3e9194a-5a77-4b63-86a2-2674b9d4e3d0","subtype":"Chart","type":"Plot"}},"id":"90488c2b-c529-4f59-b16e-22cb98f62d61","type":"HelpTool"},{"attributes":{"callback":null,"end":14.3,"start":-1.3},"id":"b6a69e9f-eb75-49ef-9e18-a506a5d8aa03","type":"Range1d"},{"attributes":{},"id":"e415c147-5a94-478c-b030-6d415f5123ed","type":"ToolEvents"},{"attributes":{"plot":{"id":"fb5263b6-319a-4876-a201-7206e990e4c6","subtype":"Chart","type":"Plot"}},"id":"fa166682-6d2b-4362-88f7-3a8847cc872a","type":"ResetTool"},{"attributes":{"data_source":{"id":"b1008942-9a02-4272-a58b-32ae943b1b3e","type":"ColumnDataSource"},"glyph":{"id":"91a0d738-25ae-49ef-88e2-99921693f032","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"43af2fdd-4f02-496b-93ad-5995d76f99f5","type":"GlyphRenderer"},{"attributes":{},"id":"c37b0016-a747-421e-b601-ab567e8f3826","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Stacked Area Chart"},"id":"423ba892-3035-43d3-8a2b-a8ac1c98a16b","type":"Title"},{"attributes":{"axis_label":"memory","formatter":{"id":"52422b82-576c-4fc2-acac-b352a1644c82","type":"BasicTickFormatter"},"plot":{"id":"b3e9194a-5a77-4b63-86a2-2674b9d4e3d0","subtype":"Chart","type":"Plot"},"ticker":{"id":"b0355f7c-0e72-405d-b961-71a9c8bab966","type":"BasicTicker"}},"id":"86caf492-bfe0-4106-83cf-407c5eadd29e","type":"LinearAxis"},{"attributes":{"plot":{"id":"b3e9194a-5a77-4b63-86a2-2674b9d4e3d0","subtype":"Chart","type":"Plot"}},"id":"41f0f60f-9165-4586-a866-d8b51d788e07","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"python"}],"series":["python"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13,13,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0]],"y_values":[[0.0,36.0,79.0,64.0,45.0,178.0,443.0,302.0,669.0,702.0,705.0,693.0,761.0,369.0,401.0,0.0,0.0,290.0,249.0,494.0,427.0,440.0,448.0,436.0,258.0,222.0,152.0,40.0,57.0,76.0,34.0,0.0]]}},"id":"e00f8803-a19e-4526-8549-78499829f1e9","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"fb5263b6-319a-4876-a201-7206e990e4c6","subtype":"Chart","type":"Plot"}},"id":"c167c4cf-9b2c-4ac4-8dae-cd8e849faa18","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f8b13089-a556-4b24-bbeb-68db5f9ae2dc","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":14.3,"start":-1.3},"id":"2ca22799-dabe-4272-ad5a-705bef8bb213","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"fb5263b6-319a-4876-a201-7206e990e4c6","subtype":"Chart","type":"Plot"},"ticker":{"id":"f7901417-2405-416e-87dd-6326494ed4c0","type":"BasicTicker"}},"id":"8c00dc63-2ce9-4aaf-80fa-3846fe65e1ce","type":"Grid"},{"attributes":{"children":[{"id":"fb5263b6-319a-4876-a201-7206e990e4c6","subtype":"Chart","type":"Plot"},{"id":"b3e9194a-5a77-4b63-86a2-2674b9d4e3d0","subtype":"Chart","type":"Plot"}]},"id":"3ae21380-b8ba-4605-a621-a187bebe644c","type":"Row"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"pypy"}],"series":["pypy"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13,13,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0]],"y_values":[[0.0,34.0,76.0,57.0,40.0,152.0,222.0,258.0,436.0,448.0,440.0,427.0,494.0,249.0,290.0,0.0,0.0,160.0,139.0,227.0,201.0,215.0,194.0,203.0,114.0,101.0,26.0,25.0,10.0,43.0,22.0,0.0]]}},"id":"2fd31e2d-aba8-4ee0-b98e-abc32a74f631","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":293.7,"start":-26.700000000000003},"id":"059b716a-e087-4a5d-ac90-25356fc48b0e","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"196aa941-fe16-42a6-adc3-78e0eb6151c5","type":"Patches"},{"attributes":{"below":[{"id":"07b28d95-000e-47ac-8a7f-46e5b3352a35","type":"LinearAxis"}],"height":400,"left":[{"id":"86caf492-bfe0-4106-83cf-407c5eadd29e","type":"LinearAxis"}],"renderers":[{"id":"065df44f-d77f-4f73-86de-6bd7ef8525fb","type":"BoxAnnotation"},{"id":"3e74e10a-c3c1-4ed6-a759-14ed96900458","type":"GlyphRenderer"},{"id":"c07b3fbd-42f4-4320-8c22-549b614ec05b","type":"GlyphRenderer"},{"id":"35613c58-3839-4165-acf6-aa7bcf5acf1c","type":"GlyphRenderer"},{"id":"2c335d87-af2b-45f2-9800-353efc6a7ae7","type":"Legend"},{"id":"07b28d95-000e-47ac-8a7f-46e5b3352a35","type":"LinearAxis"},{"id":"86caf492-bfe0-4106-83cf-407c5eadd29e","type":"LinearAxis"},{"id":"7c5355a3-4f3d-48a6-b0af-a7529e9edf0b","type":"Grid"},{"id":"e40a3adc-09f7-479b-bf45-a4b25787b480","type":"Grid"}],"title":{"id":"423ba892-3035-43d3-8a2b-a8ac1c98a16b","type":"Title"},"tool_events":{"id":"e415c147-5a94-478c-b030-6d415f5123ed","type":"ToolEvents"},"toolbar":{"id":"d91eb1b9-f8ca-4a85-b996-b1bb48180313","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"b6a69e9f-eb75-49ef-9e18-a506a5d8aa03","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"1d934f22-e334-4e1e-8e30-2b022b4f223e","type":"Range1d"}},"id":"b3e9194a-5a77-4b63-86a2-2674b9d4e3d0","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"jython"}],"series":["jython"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[[0.0,22.0,43.0,10.0,25.0,26.0,101.0,114.0,203.0,194.0,215.0,201.0,227.0,139.0,160.0,0.0]]}},"id":"2f6393d5-f3b3-42f3-a0f9-a1052149c964","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"1feed9fc-3e0b-49e7-ad46-cb5223415646","type":"Patches"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"jython"}],"series":["jython"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13,13,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0]],"y_values":[[0.0,22.0,43.0,10.0,25.0,26.0,101.0,114.0,203.0,194.0,215.0,201.0,227.0,139.0,160.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]]}},"id":"854aeb5a-3b7f-46b8-b4bc-992b9408a248","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"fb5263b6-319a-4876-a201-7206e990e4c6","subtype":"Chart","type":"Plot"}},"id":"82731f58-a155-44c5-aac0-e14c6f9919ca","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"41f0f60f-9165-4586-a866-d8b51d788e07","type":"PanTool"},{"id":"e1071fb3-8b6e-4996-888e-3f6273aae65e","type":"WheelZoomTool"},{"id":"01999580-aeef-4a45-b0f5-71861470d520","type":"BoxZoomTool"},{"id":"79fc3d1c-ff1c-4382-9785-9d89c351611b","type":"SaveTool"},{"id":"50b012e1-87dc-476a-81f0-cd526f2f38f5","type":"ResetTool"},{"id":"90488c2b-c529-4f59-b16e-22cb98f62d61","type":"HelpTool"}]},"id":"d91eb1b9-f8ca-4a85-b996-b1bb48180313","type":"Toolbar"},{"attributes":{"below":[{"id":"fb104ade-b14d-4543-8d50-0a6ca1f7181e","type":"LinearAxis"}],"height":400,"left":[{"id":"cda9ef7a-2600-4269-9bd8-ea7ffc048d65","type":"LinearAxis"}],"renderers":[{"id":"f8b13089-a556-4b24-bbeb-68db5f9ae2dc","type":"BoxAnnotation"},{"id":"9b0e89b8-2314-41f6-88b7-043c58b31b89","type":"GlyphRenderer"},{"id":"61b2bcb6-3a62-4ec3-b3e8-fc0a6f6c2685","type":"GlyphRenderer"},{"id":"43af2fdd-4f02-496b-93ad-5995d76f99f5","type":"GlyphRenderer"},{"id":"75c9e1ec-8b8f-407e-9c02-670e53dd7dd7","type":"Legend"},{"id":"fb104ade-b14d-4543-8d50-0a6ca1f7181e","type":"LinearAxis"},{"id":"cda9ef7a-2600-4269-9bd8-ea7ffc048d65","type":"LinearAxis"},{"id":"776fb8df-d341-497c-a29f-0713e98bbf3f","type":"Grid"},{"id":"8c00dc63-2ce9-4aaf-80fa-3846fe65e1ce","type":"Grid"}],"title":{"id":"69ca26d2-8989-4e26-8dee-e2c35ba4a7d5","type":"Title"},"tool_events":{"id":"24224054-31f7-434d-bc81-216be9916f91","type":"ToolEvents"},"toolbar":{"id":"f740b846-78e5-4ba3-b35a-7ff3540e05cc","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"2ca22799-dabe-4272-ad5a-705bef8bb213","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"059b716a-e087-4a5d-ac90-25356fc48b0e","type":"Range1d"}},"id":"fb5263b6-319a-4876-a201-7206e990e4c6","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"2f6393d5-f3b3-42f3-a0f9-a1052149c964","type":"ColumnDataSource"},"glyph":{"id":"1feed9fc-3e0b-49e7-ad46-cb5223415646","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9b0e89b8-2314-41f6-88b7-043c58b31b89","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"91a0d738-25ae-49ef-88e2-99921693f032","type":"Patches"},{"attributes":{},"id":"52422b82-576c-4fc2-acac-b352a1644c82","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b3e9194a-5a77-4b63-86a2-2674b9d4e3d0","subtype":"Chart","type":"Plot"}},"id":"e1071fb3-8b6e-4996-888e-3f6273aae65e","type":"WheelZoomTool"}],"root_ids":["3ae21380-b8ba-4605-a621-a187bebe644c"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"583a3311-d121-4be5-9a1e-78b90ac2a9eb","elementid":"aa0e7139-a631-4f81-ba9d-3066a09b361b","modelid":"3ae21380-b8ba-4605-a621-a187bebe644c"}];
              
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