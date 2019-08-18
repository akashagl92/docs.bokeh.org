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
      };var element = document.getElementById("d0b4c016-d7dd-42ab-b0b8-7b9cb9694a0d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd0b4c016-d7dd-42ab-b0b8-7b9cb9694a0d' but no matching script tag was found. ")
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
                  var docs_json = {"71d6be67-792c-4312-b5e7-a2cdf05684cc":{"roots":{"references":[{"attributes":{"callback":null,"end":50.36,"start":5.24},"id":"22f76bed-3740-47ee-80e1-72857bf16f3a","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#df5320"},"line_color":{"value":"#df5320"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"db944109-7efd-4dae-9b35-4e2d22360625","type":"Circle"},{"attributes":{},"id":"9016445a-a0b7-4f11-801d-0b15c345c35f","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"4443f740-ac45-46f8-bade-63c7b57fbfe6","type":"BasicTickFormatter"},"plot":{"id":"2f490d9f-a9a1-43b6-b9d3-6df3c2eab129","subtype":"Chart","type":"Plot"},"ticker":{"id":"2c63ad52-ecec-404e-abb3-fbf26eca2fe8","type":"BasicTicker"}},"id":"d9238e33-8791-4d1a-9a57-376b1a106750","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"a5437849-e136-4c52-9060-f02b923c6e51","type":"Circle"},{"attributes":{"data_source":{"id":"d1d63a0d-6f2e-48c7-a511-c341ede64368","type":"ColumnDataSource"},"glyph":{"id":"50da1eca-7e83-438a-a907-bbbc120d7b93","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a7a16bff-0d8c-4418-89fd-c27a45639195","type":"GlyphRenderer"},{"attributes":{"axis_label":"Miles Per Gallon","formatter":{"id":"9016445a-a0b7-4f11-801d-0b15c345c35f","type":"BasicTickFormatter"},"plot":{"id":"2f490d9f-a9a1-43b6-b9d3-6df3c2eab129","subtype":"Chart","type":"Plot"},"ticker":{"id":"bffb732d-7c08-4927-92b7-22eaf67eac5a","type":"BasicTicker"}},"id":"cc275460-479c-4ace-927e-c3dd342025da","type":"LinearAxis"},{"attributes":{},"id":"4443f740-ac45-46f8-bade-63c7b57fbfe6","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"x_values":[14.0,26.6,17.0,11.0,13.0,16.0,18.0,15.0,9.0,15.0,10.0,14.0,14.0,14.0,15.0,15.0,13.0,14.0,15.0,13.0,14.0,14.0,12.0,14.0,14.0,10.0,15.0,15.0,13.0,13.0,13.0,16.0,15.0,17.5,17.0,15.5,15.0,16.0,15.5,15.5,16.0,12.0,13.0,16.5,12.0,13.0,11.0,16.0,15.0,16.0,14.0,20.0,13.0,14.0,14.0,14.0,13.0,16.0,17.5,16.0,15.5,14.5,15.0,11.0,13.0,19.9,15.5,19.2,18.5,23.0,23.9,14.0,13.0,13.0,15.0,13.0,12.0,13.0,11.0,17.0,14.0,16.9,18.2,16.5,17.6,19.4,20.2,12.0,19.2,18.1,17.5,13.0,14.0,14.0,13.0,12.0,14.0,13.0,14.0,13.0,17.0,13.0,18.0],"y_values":[175,105,140,210,165,150,150,165,193,198,215,215,153,225,190,170,175,160,150,170,225,165,180,150,220,200,150,150,145,130,150,230,145,145,110,145,130,180,170,190,149,180,170,180,167,150,180,170,145,150,148,110,129,150,140,150,150,140,140,150,120,152,150,150,175,110,142,125,150,125,90,150,140,130,150,190,160,155,208,150,153,155,135,138,129,140,139,225,145,139,140,215,175,150,150,198,137,145,150,175,130,158,130]}},"id":"076c19b0-5f55-48be-9db3-a1faedccfba0","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f1b5a703-8fe6-4f6f-bb20-79178305ce26","type":"ColumnDataSource"},"glyph":{"id":"a5437849-e136-4c52-9060-f02b923c6e51","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0045d77e-53df-4aaa-97c6-caa380b2ad28","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"b8a5f52e-cc11-4e6d-998d-0ed8769eedaa","type":"Circle"},{"attributes":{"plot":null,"text":"MPG vs HP (colored by CYL)"},"id":"faf05410-e822-4cd6-918a-e8de1cd52dc9","type":"Title"},{"attributes":{},"id":"7639f254-2525-4843-bb58-15191a3b6773","type":"ToolEvents"},{"attributes":{"data_source":{"id":"5f8a8245-284a-437b-a173-0b0acfc1e6bb","type":"ColumnDataSource"},"glyph":{"id":"b8a5f52e-cc11-4e6d-998d-0ed8769eedaa","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9aa62440-dc3e-4356-a386-4562cd2ddaa1","type":"GlyphRenderer"},{"attributes":{"items":[{"id":"0db84137-ca86-4f69-b63b-a86b6b74c706","type":"LegendItem"},{"id":"d6278e1e-3fdb-4f40-ac0d-3178b9aa651c","type":"LegendItem"},{"id":"cb33325d-cb81-472c-8272-e87c56d309cc","type":"LegendItem"},{"id":"e4244f14-032d-4633-85fe-321842876789","type":"LegendItem"},{"id":"e5a6ef58-c537-4bee-a009-f2e3fe1469ba","type":"LegendItem"}],"plot":{"id":"2f490d9f-a9a1-43b6-b9d3-6df3c2eab129","subtype":"Chart","type":"Plot"}},"id":"61ec4b84-2d60-4e4e-b13e-ead811bf80db","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"50da1eca-7e83-438a-a907-bbbc120d7b93","type":"Circle"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"x_values":[30.5,33.5,30.0,30.5,21.5,30.0,43.1,36.1,32.8,39.4,36.1,25.1,25.5,29.0,27.2,30.9,34.2,27.2,27.4,35.7,34.1,31.9,27.5,22.3,31.5,21.6,23.9,23.8,23.2,21.1,29.5,26.0,24.5,29.0,28.0,33.0,25.0,22.0,23.0,23.0,25.0,29.0,25.0,24.0,23.0,23.0,29.0,31.0,24.0,25.0,26.0,27.0,33.5,25.5,36.0,30.0,31.5,19.0,20.0,26.5,28.0,32.0,29.5,33.0,28.0,24.5,29.0,34.5,31.8,28.4,26.0,24.0,27.0,29.0,31.0,34.0,27.0,36.0,28.0,31.6,32.9,32.4,33.7,33.0,29.9,28.1,34.4,37.0,38.0,32.0,44.0,27.0,27.0,36.0,32.0,31.0,26.0,32.0,38.0,34.0,36.0,36.0,36.0,38.0,34.7,34.1,37.7,46.6,32.2,37.0,31.3,29.8,34.3,27.9,24.3,28.0,37.2,32.1,38.1,41.5,33.5,26.4,40.8,44.3,43.4,37.0,32.3,35.1,39.0,39.1,30.0,25.8,26.6,27.2,32.4,35.0,29.8,33.8,44.6,30.0,37.3,24.0,31.0,24.0,32.0,26.0,31.0,22.0,28.0,26.0,24.0,24.0,19.0,20.0,24.0,29.0,25.0,27.0,25.0,24.0,26.0,19.0,25.0,26.0,25.0,28.0,27.0,22.0,21.0,20.0,26.0,23.0,27.0,18.0,26.0,31.0,30.0,22.0,28.0,31.0,35.0,21.0,27.0,24.0,25.0,23.0,20.0,21.0,32.0,28.0,26.0,26.0,26.0,29.0,26.0,22.0,28.0,30.0,23.0],"y_values":[63,83,67,78,110,68,48,66,52,70,60,88,89,70,97,75,70,71,80,80,65,71,95,88,71,115,97,85,105,95,68,75,88,78,86,53,115,98,88,95,81,70,71,96,78,83,75,67,97,92,79,83,70,96,58,80,68,88,102,72,75,70,71,53,79,60,52,70,65,90,93,92,90,84,85,88,88,74,88,74,100,75,75,74,65,80,65,68,63,84,52,86,90,84,96,68,92,67,67,70,75,88,70,67,63,68,62,65,75,92,75,90,78,105,90,90,65,70,60,76,90,88,65,48,48,65,67,60,64,58,84,92,84,84,72,88,62,67,67,67,69,97,82,75,65,80,67,72,80,75,110,95,112,91,75,49,75,88,87,90,90,85,95,113,95,90,88,94,72,88,46,86,88,112,78,52,76,76,90,65,69,87,60,95,80,54,90,86,61,75,70,67,46,83,69,86,92,70,97]}},"id":"f1b5a703-8fe6-4f6f-bb20-79178305ce26","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b66473c4-2837-4001-a0a1-f98cd1cb15d8","type":"ColumnDataSource"},"glyph":{"id":"db944109-7efd-4dae-9b35-4e2d22360625","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7abc7102-a245-4fc7-b102-19f4e574cfb2","type":"GlyphRenderer"},{"attributes":{"label":{"value":"8"},"renderers":[{"id":"71742c61-3188-4951-8193-c00095184bfa","type":"GlyphRenderer"}]},"id":"e5a6ef58-c537-4bee-a009-f2e3fe1469ba","type":"LegendItem"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"ee86042b-425e-4df1-8246-b7c82794e6fa","type":"Range1d"},{"attributes":{"plot":{"id":"2f490d9f-a9a1-43b6-b9d3-6df3c2eab129","subtype":"Chart","type":"Plot"},"ticker":{"id":"bffb732d-7c08-4927-92b7-22eaf67eac5a","type":"BasicTicker"}},"id":"9b2f639a-12e9-4089-818d-d86fa4165895","type":"Grid"},{"attributes":{"plot":{"id":"2f490d9f-a9a1-43b6-b9d3-6df3c2eab129","subtype":"Chart","type":"Plot"}},"id":"033a3df5-8733-4093-a6c1-38bcebd4e83b","type":"HelpTool"},{"attributes":{"below":[{"id":"cc275460-479c-4ace-927e-c3dd342025da","type":"LinearAxis"}],"height":400,"left":[{"id":"d9238e33-8791-4d1a-9a57-376b1a106750","type":"LinearAxis"}],"renderers":[{"id":"61f44afe-8379-40e5-bf44-31c39e437084","type":"BoxAnnotation"},{"id":"9aa62440-dc3e-4356-a386-4562cd2ddaa1","type":"GlyphRenderer"},{"id":"0045d77e-53df-4aaa-97c6-caa380b2ad28","type":"GlyphRenderer"},{"id":"a7a16bff-0d8c-4418-89fd-c27a45639195","type":"GlyphRenderer"},{"id":"7abc7102-a245-4fc7-b102-19f4e574cfb2","type":"GlyphRenderer"},{"id":"71742c61-3188-4951-8193-c00095184bfa","type":"GlyphRenderer"},{"id":"61ec4b84-2d60-4e4e-b13e-ead811bf80db","type":"Legend"},{"id":"cc275460-479c-4ace-927e-c3dd342025da","type":"LinearAxis"},{"id":"d9238e33-8791-4d1a-9a57-376b1a106750","type":"LinearAxis"},{"id":"9b2f639a-12e9-4089-818d-d86fa4165895","type":"Grid"},{"id":"2ec0b583-bf32-49d7-b970-34a5992db8e7","type":"Grid"}],"title":{"id":"faf05410-e822-4cd6-918a-e8de1cd52dc9","type":"Title"},"tool_events":{"id":"7639f254-2525-4843-bb58-15191a3b6773","type":"ToolEvents"},"toolbar":{"id":"07490592-8352-4ba1-bb39-126c4d251453","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"22f76bed-3740-47ee-80e1-72857bf16f3a","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"ee86042b-425e-4df1-8246-b7c82794e6fa","type":"Range1d"}},"id":"2f490d9f-a9a1-43b6-b9d3-6df3c2eab129","subtype":"Chart","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"61f44afe-8379-40e5-bf44-31c39e437084","type":"BoxAnnotation"},{"attributes":{"label":{"value":"5"},"renderers":[{"id":"a7a16bff-0d8c-4418-89fd-c27a45639195","type":"GlyphRenderer"}]},"id":"cb33325d-cb81-472c-8272-e87c56d309cc","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5],"x_values":[36.4,20.3,25.4],"y_values":[67,103,77]}},"id":"d1d63a0d-6f2e-48c7-a511-c341ede64368","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"2f490d9f-a9a1-43b6-b9d3-6df3c2eab129","subtype":"Chart","type":"Plot"}},"id":"dfa0bd5e-a396-4024-bfb2-c86693945728","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"2f490d9f-a9a1-43b6-b9d3-6df3c2eab129","subtype":"Chart","type":"Plot"}},"id":"0b87bada-60e4-49ed-8415-a34c912f6ce0","type":"ResetTool"},{"attributes":{"label":{"value":"6"},"renderers":[{"id":"7abc7102-a245-4fc7-b102-19f4e574cfb2","type":"GlyphRenderer"}]},"id":"e4244f14-032d-4633-85fe-321842876789","type":"LegendItem"},{"attributes":{"plot":{"id":"2f490d9f-a9a1-43b6-b9d3-6df3c2eab129","subtype":"Chart","type":"Plot"}},"id":"3e72df4a-39ab-4270-8470-597c60a2d0e6","type":"PanTool"},{"attributes":{},"id":"2c63ad52-ecec-404e-abb3-fbf26eca2fe8","type":"BasicTicker"},{"attributes":{"overlay":{"id":"61f44afe-8379-40e5-bf44-31c39e437084","type":"BoxAnnotation"},"plot":{"id":"2f490d9f-a9a1-43b6-b9d3-6df3c2eab129","subtype":"Chart","type":"Plot"}},"id":"52ce5875-9a34-4043-9b23-4a82a32ea6d3","type":"BoxZoomTool"},{"attributes":{},"id":"bffb732d-7c08-4927-92b7-22eaf67eac5a","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],"x_values":[18.0,19.0,20.6,19.4,20.5,20.2,19.2,18.0,18.0,18.0,16.0,20.5,17.0,20.8,26.8,18.0,19.0,17.0,16.2,23.5,23.0,21.5,18.0,19.8,17.7,19.0,18.1,18.6,20.2,20.6,28.8,16.0,32.7,22.4,22.5,20.0,19.0,22.0,24.0,22.0,22.0,15.0,16.0,16.0,18.0,25.0,19.0,38.0,18.0,22.0,20.0,21.0,18.0,15.0,16.0,17.0,15.0,15.0,18.0,19.0,20.0,20.0,19.1,19.0,18.0,17.5,20.5,17.6,19.0,20.2,16.5,21.0,22.0,17.5,18.5,18.0,18.5,18.0,24.2,25.4,30.7,21.0,21.0],"y_values":[88,100,105,90,100,85,105,88,100,105,100,95,125,85,115,100,88,100,133,110,95,115,110,85,165,100,120,110,90,110,115,105,132,110,90,95,100,97,81,105,100,100,100,110,105,110,90,85,97,112,100,110,95,110,105,110,72,72,105,95,122,100,90,108,97,110,105,85,100,88,120,90,95,95,110,78,98,100,120,116,76,85,107]}},"id":"b66473c4-2837-4001-a0a1-f98cd1cb15d8","type":"ColumnDataSource"},{"attributes":{"label":{"value":"4"},"renderers":[{"id":"0045d77e-53df-4aaa-97c6-caa380b2ad28","type":"GlyphRenderer"}]},"id":"d6278e1e-3fdb-4f40-ac0d-3178b9aa651c","type":"LegendItem"},{"attributes":{"plot":{"id":"2f490d9f-a9a1-43b6-b9d3-6df3c2eab129","subtype":"Chart","type":"Plot"}},"id":"919118af-8b6d-4393-88bc-d06c9efa2a74","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#00ad9c"},"line_color":{"value":"#00ad9c"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"09011300-1082-4686-96e3-788da147185a","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"2f490d9f-a9a1-43b6-b9d3-6df3c2eab129","subtype":"Chart","type":"Plot"},"ticker":{"id":"2c63ad52-ecec-404e-abb3-fbf26eca2fe8","type":"BasicTicker"}},"id":"2ec0b583-bf32-49d7-b970-34a5992db8e7","type":"Grid"},{"attributes":{"label":{"value":"3"},"renderers":[{"id":"9aa62440-dc3e-4356-a386-4562cd2ddaa1","type":"GlyphRenderer"}]},"id":"0db84137-ca86-4f69-b63b-a86b6b74c706","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3e72df4a-39ab-4270-8470-597c60a2d0e6","type":"PanTool"},{"id":"dfa0bd5e-a396-4024-bfb2-c86693945728","type":"WheelZoomTool"},{"id":"52ce5875-9a34-4043-9b23-4a82a32ea6d3","type":"BoxZoomTool"},{"id":"919118af-8b6d-4393-88bc-d06c9efa2a74","type":"SaveTool"},{"id":"0b87bada-60e4-49ed-8415-a34c912f6ce0","type":"ResetTool"},{"id":"033a3df5-8733-4093-a6c1-38bcebd4e83b","type":"HelpTool"}]},"id":"07490592-8352-4ba1-bb39-126c4d251453","type":"Toolbar"},{"attributes":{"data_source":{"id":"076c19b0-5f55-48be-9db3-a1faedccfba0","type":"ColumnDataSource"},"glyph":{"id":"09011300-1082-4686-96e3-788da147185a","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"71742c61-3188-4951-8193-c00095184bfa","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x_values":[21.5,23.7,18.0,19.0],"y_values":[110,100,90,97]}},"id":"5f8a8245-284a-437b-a173-0b0acfc1e6bb","type":"ColumnDataSource"}],"root_ids":["2f490d9f-a9a1-43b6-b9d3-6df3c2eab129"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"71d6be67-792c-4312-b5e7-a2cdf05684cc","elementid":"d0b4c016-d7dd-42ab-b0b8-7b9cb9694a0d","modelid":"2f490d9f-a9a1-43b6-b9d3-6df3c2eab129"}];
                  
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