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
      };var element = document.getElementById("56d9d232-9ba6-44a2-9c2d-1c5db1ce6244");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '56d9d232-9ba6-44a2-9c2d-1c5db1ce6244' but no matching script tag was found. ")
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
                  var docs_json = {"2e815cbf-e107-4a8f-9f70-b803412e58be":{"roots":{"references":[{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"3081c439-5ec8-46d4-8c10-661f04de28e5","type":"Range1d"},{"attributes":{"label":{"value":"3"},"renderers":[{"id":"d3a57a81-2fe8-43ed-b2ea-cf3fcf6b8a23","type":"GlyphRenderer"}]},"id":"3a8e68eb-9c3a-4de9-9ed9-e9d61fd275ee","type":"LegendItem"},{"attributes":{},"id":"c67ff9ed-b6f8-4a13-a55f-e807c35e3427","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"x_values":[98.0,98.0,97.0,97.0,121.0,98.0,90.0,98.0,78.0,85.0,91.0,140.0,140.0,90.0,119.0,105.0,105.0,141.0,121.0,98.0,86.0,89.0,134.0,140.0,89.0,121.0,119.0,151.0,156.0,134.0,98.0,97.0,151.0,97.0,107.0,91.0,121.0,121.0,120.0,115.0,116.0,90.0,90.0,134.0,140.0,140.0,97.0,79.0,119.0,140.0,98.0,101.0,85.0,122.0,79.0,111.0,98.0,120.0,130.0,140.0,97.0,85.0,97.0,91.0,120.0,98.0,85.0,105.0,85.0,151.0,108.0,140.0,151.0,135.0,112.0,112.0,112.0,105.0,112.0,120.0,119.0,108.0,107.0,105.0,98.0,141.0,98.0,91.0,105.0,135.0,97.0,140.0,151.0,135.0,144.0,91.0,156.0,91.0,91.0,108.0,107.0,120.0,98.0,91.0,105.0,91.0,89.0,86.0,108.0,119.0,120.0,134.0,97.0,156.0,151.0,151.0,86.0,98.0,89.0,98.0,151.0,140.0,85.0,90.0,90.0,85.0,97.0,81.0,86.0,79.0,135.0,156.0,151.0,135.0,107.0,122.0,89.0,97.0,91.0,146.0,91.0,120.0,119.0,90.0,71.0,122.0,79.0,140.0,98.0,116.0,121.0,113.0,121.0,114.0,116.0,68.0,140.0,97.0,110.0,107.0,98.0,122.0,104.0,121.0,113.0,140.0,97.0,108.0,140.0,97.0,97.0,122.0,97.0,121.0,97.0,76.0,88.0,121.0,116.0,71.0,72.0,120.0,97.0,113.0,97.5,97.0,140.0,122.0,83.0,90.0,91.0,79.0,97.0,98.0,96.0,122.0,97.0,79.0,120.0],"y_values":[63,83,67,78,110,68,48,66,52,70,60,88,89,70,97,75,70,71,80,80,65,71,95,88,71,115,97,85,105,95,68,75,88,78,86,53,115,98,88,95,81,70,71,96,78,83,75,67,97,92,79,83,70,96,58,80,68,88,102,72,75,70,71,53,79,60,52,70,65,90,93,92,90,84,85,88,88,74,88,74,100,75,75,74,65,80,65,68,63,84,52,86,90,84,96,68,92,67,67,70,75,88,70,67,63,68,62,65,75,92,75,90,78,105,90,90,65,70,60,76,90,88,65,48,48,65,67,60,64,58,84,92,84,84,72,88,62,67,67,67,69,97,82,75,65,80,67,72,80,75,110,95,112,91,75,49,75,88,87,90,90,85,95,113,95,90,88,94,72,88,46,86,88,112,78,52,76,76,90,65,69,87,60,95,80,54,90,86,61,75,70,67,46,83,69,86,92,70,97]}},"id":"e790a6bd-c16f-43a4-93f2-5fc2fe4fe3e9","type":"ColumnDataSource"},{"attributes":{},"id":"9c4e9a15-37f3-49b9-bf20-8a73dfa1fa8b","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"4"},"renderers":[{"id":"1f44ab09-6777-43dc-8730-38122c546036","type":"GlyphRenderer"}]},"id":"dadc17d8-ef7f-49d6-93e0-0910a0e28f7b","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"x_values":[400.0,350.0,302.0,318.0,350.0,304.0,318.0,350.0,304.0,429.0,360.0,440.0,351.0,455.0,390.0,383.0,400.0,340.0,400.0,400.0,455.0,350.0,383.0,318.0,454.0,307.0,318.0,318.0,350.0,302.0,318.0,400.0,350.0,305.0,260.0,318.0,302.0,400.0,350.0,400.0,351.0,350.0,360.0,350.0,400.0,318.0,350.0,400.0,350.0,318.0,351.0,262.0,302.0,304.0,302.0,318.0,350.0,302.0,305.0,318.0,304.0,351.0,318.0,400.0,360.0,260.0,351.0,267.0,360.0,350.0,260.0,318.0,302.0,307.0,304.0,400.0,350.0,350.0,429.0,304.0,351.0,350.0,318.0,351.0,302.0,318.0,302.0,455.0,305.0,302.0,318.0,440.0,400.0,318.0,400.0,429.0,302.0,350.0,304.0,350.0,305.0,351.0,307.0],"y_values":[175,105,140,210,165,150,150,165,193,198,215,215,153,225,190,170,175,160,150,170,225,165,180,150,220,200,150,150,145,130,150,230,145,145,110,145,130,180,170,190,149,180,170,180,167,150,180,170,145,150,148,110,129,150,140,150,150,140,140,150,120,152,150,150,175,110,142,125,150,125,90,150,140,130,150,190,160,155,208,150,153,155,135,138,129,140,139,225,145,139,140,215,175,150,150,198,137,145,150,175,130,158,130]}},"id":"c7cc24ff-04f7-465d-bcd8-b5a946d85180","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"HP vs DISPL (marked by CYL)"},"id":"01be43b7-5cbd-4f0e-b3e9-124f158dedda","type":"Title"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x_values":[80.0,70.0,70.0,70.0],"y_values":[110,100,90,97]}},"id":"7a8dcc22-3ba7-4643-875d-0a40a8b62eb1","type":"ColumnDataSource"},{"attributes":{},"id":"aa71a4da-8489-46d2-9b16-522a27ed7168","type":"ToolEvents"},{"attributes":{"overlay":{"id":"c762674d-7fa8-4c1c-9195-2da4f04b4e16","type":"BoxAnnotation"},"plot":{"id":"ae9f7e5b-c2dd-42d5-88e4-0bccc5df8f1c","subtype":"Chart","type":"Plot"}},"id":"26a36a52-055a-48fb-9bd6-e3e15945c4a5","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"2c80fe4f-aa12-4657-b1d4-17bf5a7bb54b","type":"LinearAxis"}],"height":400,"left":[{"id":"020f9cc5-1fc2-47de-998b-e0a6e39265e4","type":"LinearAxis"}],"renderers":[{"id":"c762674d-7fa8-4c1c-9195-2da4f04b4e16","type":"BoxAnnotation"},{"id":"d3a57a81-2fe8-43ed-b2ea-cf3fcf6b8a23","type":"GlyphRenderer"},{"id":"1f44ab09-6777-43dc-8730-38122c546036","type":"GlyphRenderer"},{"id":"d98ab9f8-0f68-4f0c-b6a1-eb66fb62de42","type":"GlyphRenderer"},{"id":"219860e4-b92e-4e8b-9af1-2a2fe7fc3992","type":"GlyphRenderer"},{"id":"8bda85e2-0706-4c4a-9fa9-dbc54b8c6815","type":"GlyphRenderer"},{"id":"7be12f2e-6661-47aa-a6af-f73419f5afb6","type":"Legend"},{"id":"2c80fe4f-aa12-4657-b1d4-17bf5a7bb54b","type":"LinearAxis"},{"id":"020f9cc5-1fc2-47de-998b-e0a6e39265e4","type":"LinearAxis"},{"id":"a90c8e8c-50e4-4b03-94b5-6b6d86d60a7b","type":"Grid"},{"id":"2a527f51-c5c7-49b6-bc4a-f0efe471c47b","type":"Grid"}],"title":{"id":"01be43b7-5cbd-4f0e-b3e9-124f158dedda","type":"Title"},"tool_events":{"id":"aa71a4da-8489-46d2-9b16-522a27ed7168","type":"ToolEvents"},"toolbar":{"id":"567ffbe6-0b06-4333-9269-d59f2cb3a874","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"3a2ff22e-e915-4afd-994a-c766e07fef12","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"3081c439-5ec8-46d4-8c10-661f04de28e5","type":"Range1d"}},"id":"ae9f7e5b-c2dd-42d5-88e4-0bccc5df8f1c","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"e790a6bd-c16f-43a4-93f2-5fc2fe4fe3e9","type":"ColumnDataSource"},"glyph":{"id":"eb1639b4-3398-4946-8efa-b70c6b59c8fa","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1f44ab09-6777-43dc-8730-38122c546036","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"aa3b5bb7-56fc-47e8-bf3b-2ef2ed22e4bf","type":"Circle"},{"attributes":{"axis_label":"Displacement","formatter":{"id":"9c4e9a15-37f3-49b9-bf20-8a73dfa1fa8b","type":"BasicTickFormatter"},"plot":{"id":"ae9f7e5b-c2dd-42d5-88e4-0bccc5df8f1c","subtype":"Chart","type":"Plot"},"ticker":{"id":"f4cf1435-b0a6-48bf-8ce5-a939d003fcde","type":"BasicTicker"}},"id":"2c80fe4f-aa12-4657-b1d4-17bf5a7bb54b","type":"LinearAxis"},{"attributes":{"data_source":{"id":"7a8dcc22-3ba7-4643-875d-0a40a8b62eb1","type":"ColumnDataSource"},"glyph":{"id":"aa3b5bb7-56fc-47e8-bf3b-2ef2ed22e4bf","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d3a57a81-2fe8-43ed-b2ea-cf3fcf6b8a23","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5],"x_values":[121.0,131.0,183.0],"y_values":[67,103,77]}},"id":"cead0f61-1426-4f25-ba92-428cee3aa32d","type":"ColumnDataSource"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"c67ff9ed-b6f8-4a13-a55f-e807c35e3427","type":"BasicTickFormatter"},"plot":{"id":"ae9f7e5b-c2dd-42d5-88e4-0bccc5df8f1c","subtype":"Chart","type":"Plot"},"ticker":{"id":"1fd6fd0a-5cdc-4349-8f25-66c8be6aa77a","type":"BasicTicker"}},"id":"020f9cc5-1fc2-47de-998b-e0a6e39265e4","type":"LinearAxis"},{"attributes":{"label":{"value":"5"},"renderers":[{"id":"d98ab9f8-0f68-4f0c-b6a1-eb66fb62de42","type":"GlyphRenderer"}]},"id":"39b15352-8e41-4ee4-a016-93435fbd797f","type":"LegendItem"},{"attributes":{"plot":{"id":"ae9f7e5b-c2dd-42d5-88e4-0bccc5df8f1c","subtype":"Chart","type":"Plot"}},"id":"c3b67604-3942-43ce-8b24-475f7c1b915d","type":"SaveTool"},{"attributes":{"label":{"value":"6"},"renderers":[{"id":"219860e4-b92e-4e8b-9af1-2a2fe7fc3992","type":"GlyphRenderer"}]},"id":"61057c6f-735a-4290-baf3-e828e7293a50","type":"LegendItem"},{"attributes":{"plot":{"id":"ae9f7e5b-c2dd-42d5-88e4-0bccc5df8f1c","subtype":"Chart","type":"Plot"},"ticker":{"id":"f4cf1435-b0a6-48bf-8ce5-a939d003fcde","type":"BasicTicker"}},"id":"a90c8e8c-50e4-4b03-94b5-6b6d86d60a7b","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#00ad9c"},"line_color":{"value":"#00ad9c"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"e061d22b-3345-405a-82ca-e6ef75977987","type":"InvertedTriangle"},{"attributes":{"data_source":{"id":"a17d5ffd-3802-4ee3-ae1d-31bee932b0de","type":"ColumnDataSource"},"glyph":{"id":"5e5c11b3-71c7-4943-8e11-e09eaeb72329","type":"Diamond"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"219860e4-b92e-4e8b-9af1-2a2fe7fc3992","type":"GlyphRenderer"},{"attributes":{},"id":"f4cf1435-b0a6-48bf-8ce5-a939d003fcde","type":"BasicTicker"},{"attributes":{"items":[{"id":"3a8e68eb-9c3a-4de9-9ed9-e9d61fd275ee","type":"LegendItem"},{"id":"dadc17d8-ef7f-49d6-93e0-0910a0e28f7b","type":"LegendItem"},{"id":"39b15352-8e41-4ee4-a016-93435fbd797f","type":"LegendItem"},{"id":"61057c6f-735a-4290-baf3-e828e7293a50","type":"LegendItem"},{"id":"13dee6e9-739d-4757-b61c-62aea4a37c13","type":"LegendItem"}],"location":"top_left","plot":{"id":"ae9f7e5b-c2dd-42d5-88e4-0bccc5df8f1c","subtype":"Chart","type":"Plot"}},"id":"7be12f2e-6661-47aa-a6af-f73419f5afb6","type":"Legend"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c762674d-7fa8-4c1c-9195-2da4f04b4e16","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"ae9f7e5b-c2dd-42d5-88e4-0bccc5df8f1c","subtype":"Chart","type":"Plot"},"ticker":{"id":"1fd6fd0a-5cdc-4349-8f25-66c8be6aa77a","type":"BasicTicker"}},"id":"2a527f51-c5c7-49b6-bc4a-f0efe471c47b","type":"Grid"},{"attributes":{"plot":{"id":"ae9f7e5b-c2dd-42d5-88e4-0bccc5df8f1c","subtype":"Chart","type":"Plot"}},"id":"6413e01d-ef42-4905-8072-9e2e1c1d1bbf","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"eb1639b4-3398-4946-8efa-b70c6b59c8fa","type":"Square"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#df5320"},"line_color":{"value":"#df5320"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"5e5c11b3-71c7-4943-8e11-e09eaeb72329","type":"Diamond"},{"attributes":{"plot":{"id":"ae9f7e5b-c2dd-42d5-88e4-0bccc5df8f1c","subtype":"Chart","type":"Plot"}},"id":"0b29c008-437b-41d1-ba08-c734edc66805","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6413e01d-ef42-4905-8072-9e2e1c1d1bbf","type":"PanTool"},{"id":"4fb65358-9283-4553-929b-93699077caba","type":"WheelZoomTool"},{"id":"26a36a52-055a-48fb-9bd6-e3e15945c4a5","type":"BoxZoomTool"},{"id":"c3b67604-3942-43ce-8b24-475f7c1b915d","type":"SaveTool"},{"id":"56b21fb0-995f-41fe-bc11-540b8f7b8389","type":"ResetTool"},{"id":"0b29c008-437b-41d1-ba08-c734edc66805","type":"HelpTool"}]},"id":"567ffbe6-0b06-4333-9269-d59f2cb3a874","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],"x_values":[250.0,250.0,231.0,232.0,225.0,200.0,231.0,250.0,232.0,225.0,250.0,200.0,163.0,200.0,173.0,232.0,250.0,250.0,163.0,173.0,198.0,231.0,258.0,200.0,231.0,232.0,258.0,225.0,232.0,225.0,173.0,225.0,168.0,231.0,232.0,198.0,232.0,146.0,200.0,250.0,225.0,250.0,250.0,258.0,225.0,181.0,232.0,262.0,171.0,232.0,232.0,231.0,225.0,258.0,250.0,231.0,250.0,250.0,250.0,225.0,156.0,225.0,225.0,156.0,199.0,250.0,231.0,225.0,225.0,200.0,168.0,199.0,198.0,258.0,250.0,250.0,250.0,232.0,146.0,168.0,145.0,200.0,155.0],"y_values":[88,100,105,90,100,85,105,88,100,105,100,95,125,85,115,100,88,100,133,110,95,115,110,85,165,100,120,110,90,110,115,105,132,110,90,95,100,97,81,105,100,100,100,110,105,110,90,85,97,112,100,110,95,110,105,110,72,72,105,95,122,100,90,108,97,110,105,85,100,88,120,90,95,95,110,78,98,100,120,116,76,85,107]}},"id":"a17d5ffd-3802-4ee3-ae1d-31bee932b0de","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"17b5cb55-19b6-4d24-9e47-7af8bc35e6c1","type":"Triangle"},{"attributes":{"label":{"value":"8"},"renderers":[{"id":"8bda85e2-0706-4c4a-9fa9-dbc54b8c6815","type":"GlyphRenderer"}]},"id":"13dee6e9-739d-4757-b61c-62aea4a37c13","type":"LegendItem"},{"attributes":{"callback":null,"end":493.7,"start":29.299999999999997},"id":"3a2ff22e-e915-4afd-994a-c766e07fef12","type":"Range1d"},{"attributes":{"data_source":{"id":"cead0f61-1426-4f25-ba92-428cee3aa32d","type":"ColumnDataSource"},"glyph":{"id":"17b5cb55-19b6-4d24-9e47-7af8bc35e6c1","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d98ab9f8-0f68-4f0c-b6a1-eb66fb62de42","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"ae9f7e5b-c2dd-42d5-88e4-0bccc5df8f1c","subtype":"Chart","type":"Plot"}},"id":"56b21fb0-995f-41fe-bc11-540b8f7b8389","type":"ResetTool"},{"attributes":{},"id":"1fd6fd0a-5cdc-4349-8f25-66c8be6aa77a","type":"BasicTicker"},{"attributes":{"plot":{"id":"ae9f7e5b-c2dd-42d5-88e4-0bccc5df8f1c","subtype":"Chart","type":"Plot"}},"id":"4fb65358-9283-4553-929b-93699077caba","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"c7cc24ff-04f7-465d-bcd8-b5a946d85180","type":"ColumnDataSource"},"glyph":{"id":"e061d22b-3345-405a-82ca-e6ef75977987","type":"InvertedTriangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8bda85e2-0706-4c4a-9fa9-dbc54b8c6815","type":"GlyphRenderer"}],"root_ids":["ae9f7e5b-c2dd-42d5-88e4-0bccc5df8f1c"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"2e815cbf-e107-4a8f-9f70-b803412e58be","elementid":"56d9d232-9ba6-44a2-9c2d-1c5db1ce6244","modelid":"ae9f7e5b-c2dd-42d5-88e4-0bccc5df8f1c"}];
                  
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