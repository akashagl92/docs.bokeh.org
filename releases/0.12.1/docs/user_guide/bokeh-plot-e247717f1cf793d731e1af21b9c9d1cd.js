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
      };var element = document.getElementById("68514faa-0b7c-463a-aa08-16af333d5252");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '68514faa-0b7c-463a-aa08-16af333d5252' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"ab911136-36cc-47b4-bcf9-d5272ac80013":{"roots":{"references":[{"attributes":{},"id":"420a08a4-1e0b-420c-90a0-d75a45c33d81","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fa766b0b-401a-45b6-b0b4-ffe2ccbffd30","type":"PanTool"},{"id":"ac5a464d-7711-422e-affc-cbf4affb11d8","type":"WheelZoomTool"},{"id":"165fe398-5d45-4135-afc1-2ee717afd01d","type":"BoxZoomTool"},{"id":"d9e1e94d-4c28-4d21-8e75-46b3bf3fd5f6","type":"SaveTool"},{"id":"dfeb80b3-3bcd-46bc-a318-0a681730a7a3","type":"ResetTool"},{"id":"3a634093-3d94-46ca-87db-b92e37e3ae14","type":"HelpTool"}]},"id":"d7c38d6a-8e89-413e-acce-e9410f015338","type":"Toolbar"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"3eef81ac-154e-473d-9710-d07ff710e816","type":"BasicTickFormatter"},"plot":{"id":"a523c295-13fa-446d-8126-7a557d548bb1","subtype":"Chart","type":"Plot"},"ticker":{"id":"5b165ca1-58ac-4d31-99ad-ca54281a853a","type":"BasicTicker"}},"id":"2921a4cd-2659-42c9-94c4-d9b56d194b10","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"x_values":[14.0,26.6,17.0,11.0,13.0,16.0,18.0,15.0,9.0,15.0,10.0,14.0,14.0,14.0,15.0,15.0,13.0,14.0,15.0,13.0,14.0,14.0,12.0,14.0,14.0,10.0,15.0,15.0,13.0,13.0,13.0,16.0,15.0,17.5,17.0,15.5,15.0,16.0,15.5,15.5,16.0,12.0,13.0,16.5,12.0,13.0,11.0,16.0,15.0,16.0,14.0,20.0,13.0,14.0,14.0,14.0,13.0,16.0,17.5,16.0,15.5,14.5,15.0,11.0,13.0,19.9,15.5,19.2,18.5,23.0,23.9,14.0,13.0,13.0,15.0,13.0,12.0,13.0,11.0,17.0,14.0,16.9,18.2,16.5,17.6,19.4,20.2,12.0,19.2,18.1,17.5,13.0,14.0,14.0,13.0,12.0,14.0,13.0,14.0,13.0,17.0,13.0,18.0],"y_values":[175,105,140,210,165,150,150,165,193,198,215,215,153,225,190,170,175,160,150,170,225,165,180,150,220,200,150,150,145,130,150,230,145,145,110,145,130,180,170,190,149,180,170,180,167,150,180,170,145,150,148,110,129,150,140,150,150,140,140,150,120,152,150,150,175,110,142,125,150,125,90,150,140,130,150,190,160,155,208,150,153,155,135,138,129,140,139,225,145,139,140,215,175,150,150,198,137,145,150,175,130,158,130]}},"id":"62bca88a-9ba8-4fdd-b46c-1926143c445b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"97316783-944c-4872-830a-9a2482c3cc39","type":"ColumnDataSource"},"glyph":{"id":"f49e7c56-de28-4507-9d6d-82cfb10f3427","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2aba65a6-7685-4563-be77-df4dc7507083","type":"GlyphRenderer"},{"attributes":{},"id":"3eef81ac-154e-473d-9710-d07ff710e816","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a523c295-13fa-446d-8126-7a557d548bb1","subtype":"Chart","type":"Plot"}},"id":"dfeb80b3-3bcd-46bc-a318-0a681730a7a3","type":"ResetTool"},{"attributes":{"data_source":{"id":"12466b70-7560-496f-be4a-9bbf3260032d","type":"ColumnDataSource"},"glyph":{"id":"e13c3219-c8e4-4207-be2e-96e5a43aeb60","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"01da09ee-bffb-4deb-b6a5-832950fc09ef","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"HP vs MPG (shaded by CYL)"},"id":"f6d5ebfb-0a92-4757-9dee-d51120d49479","type":"Title"},{"attributes":{"plot":{"id":"a523c295-13fa-446d-8126-7a557d548bb1","subtype":"Chart","type":"Plot"},"ticker":{"id":"420a08a4-1e0b-420c-90a0-d75a45c33d81","type":"BasicTicker"}},"id":"9c4437cb-931e-46ea-bf56-52aec9fc4162","type":"Grid"},{"attributes":{"below":[{"id":"1994ac09-5c64-48a6-b36d-c62716f67138","type":"LinearAxis"}],"height":400,"left":[{"id":"2921a4cd-2659-42c9-94c4-d9b56d194b10","type":"LinearAxis"}],"renderers":[{"id":"7ea18d3b-b837-4038-90cd-af74ef332ec8","type":"BoxAnnotation"},{"id":"44389049-1f91-499a-b5a1-6e832179265e","type":"GlyphRenderer"},{"id":"01da09ee-bffb-4deb-b6a5-832950fc09ef","type":"GlyphRenderer"},{"id":"2aba65a6-7685-4563-be77-df4dc7507083","type":"GlyphRenderer"},{"id":"be65e57b-f6e7-41eb-9b70-988953c178e5","type":"GlyphRenderer"},{"id":"39469bad-5b08-43f6-a8f7-4602de9b742d","type":"GlyphRenderer"},{"id":"0dd8dae0-07e0-4852-b249-b31a4c20e8dc","type":"Legend"},{"id":"1994ac09-5c64-48a6-b36d-c62716f67138","type":"LinearAxis"},{"id":"2921a4cd-2659-42c9-94c4-d9b56d194b10","type":"LinearAxis"},{"id":"9c4437cb-931e-46ea-bf56-52aec9fc4162","type":"Grid"},{"id":"94ef4fcd-402b-44f3-96ba-7cdf4717b5b6","type":"Grid"}],"title":{"id":"f6d5ebfb-0a92-4757-9dee-d51120d49479","type":"Title"},"tool_events":{"id":"1f12c5d0-8137-4da8-8afe-f16f8b9518f8","type":"ToolEvents"},"toolbar":{"id":"d7c38d6a-8e89-413e-acce-e9410f015338","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"80386e8b-e42b-4efa-8e75-b6e911451f39","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"901cdf51-dcfd-4ce7-92e8-9adc965ba96b","type":"Range1d"}},"id":"a523c295-13fa-446d-8126-7a557d548bb1","subtype":"Chart","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"f49e7c56-de28-4507-9d6d-82cfb10f3427","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#df5320"},"line_color":{"value":"#df5320"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"6dcf925b-5209-4065-89fd-e1434691a385","type":"Circle"},{"attributes":{"plot":{"id":"a523c295-13fa-446d-8126-7a557d548bb1","subtype":"Chart","type":"Plot"}},"id":"fa766b0b-401a-45b6-b0b4-ffe2ccbffd30","type":"PanTool"},{"attributes":{"callback":null,"end":50.36,"start":5.24},"id":"80386e8b-e42b-4efa-8e75-b6e911451f39","type":"Range1d"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"x_values":[30.5,33.5,30.0,30.5,21.5,30.0,43.1,36.1,32.8,39.4,36.1,25.1,25.5,29.0,27.2,30.9,34.2,27.2,27.4,35.7,34.1,31.9,27.5,22.3,31.5,21.6,23.9,23.8,23.2,21.1,29.5,26.0,24.5,29.0,28.0,33.0,25.0,22.0,23.0,23.0,25.0,29.0,25.0,24.0,23.0,23.0,29.0,31.0,24.0,25.0,26.0,27.0,33.5,25.5,36.0,30.0,31.5,19.0,20.0,26.5,28.0,32.0,29.5,33.0,28.0,24.5,29.0,34.5,31.8,28.4,26.0,24.0,27.0,29.0,31.0,34.0,27.0,36.0,28.0,31.6,32.9,32.4,33.7,33.0,29.9,28.1,34.4,37.0,38.0,32.0,44.0,27.0,27.0,36.0,32.0,31.0,26.0,32.0,38.0,34.0,36.0,36.0,36.0,38.0,34.7,34.1,37.7,46.6,32.2,37.0,31.3,29.8,34.3,27.9,24.3,28.0,37.2,32.1,38.1,41.5,33.5,26.4,40.8,44.3,43.4,37.0,32.3,35.1,39.0,39.1,30.0,25.8,26.6,27.2,32.4,35.0,29.8,33.8,44.6,30.0,37.3,24.0,31.0,24.0,32.0,26.0,31.0,22.0,28.0,26.0,24.0,24.0,19.0,20.0,24.0,29.0,25.0,27.0,25.0,24.0,26.0,19.0,25.0,26.0,25.0,28.0,27.0,22.0,21.0,20.0,26.0,23.0,27.0,18.0,26.0,31.0,30.0,22.0,28.0,31.0,35.0,21.0,27.0,24.0,25.0,23.0,20.0,21.0,32.0,28.0,26.0,26.0,26.0,29.0,26.0,22.0,28.0,30.0,23.0],"y_values":[63,83,67,78,110,68,48,66,52,70,60,88,89,70,97,75,70,71,80,80,65,71,95,88,71,115,97,85,105,95,68,75,88,78,86,53,115,98,88,95,81,70,71,96,78,83,75,67,97,92,79,83,70,96,58,80,68,88,102,72,75,70,71,53,79,60,52,70,65,90,93,92,90,84,85,88,88,74,88,74,100,75,75,74,65,80,65,68,63,84,52,86,90,84,96,68,92,67,67,70,75,88,70,67,63,68,62,65,75,92,75,90,78,105,90,90,65,70,60,76,90,88,65,48,48,65,67,60,64,58,84,92,84,84,72,88,62,67,67,67,69,97,82,75,65,80,67,72,80,75,110,95,112,91,75,49,75,88,87,90,90,85,95,113,95,90,88,94,72,88,46,86,88,112,78,52,76,76,90,65,69,87,60,95,80,54,90,86,61,75,70,67,46,83,69,86,92,70,97]}},"id":"12466b70-7560-496f-be4a-9bbf3260032d","type":"ColumnDataSource"},{"attributes":{"axis_label":"Miles Per Gallon","formatter":{"id":"afd599f2-8b21-45a4-9c03-1661265199cd","type":"BasicTickFormatter"},"plot":{"id":"a523c295-13fa-446d-8126-7a557d548bb1","subtype":"Chart","type":"Plot"},"ticker":{"id":"420a08a4-1e0b-420c-90a0-d75a45c33d81","type":"BasicTicker"}},"id":"1994ac09-5c64-48a6-b36d-c62716f67138","type":"LinearAxis"},{"attributes":{"data_source":{"id":"94745fa6-ae9c-484f-a9e8-a6d8cb7bb9a1","type":"ColumnDataSource"},"glyph":{"id":"6dcf925b-5209-4065-89fd-e1434691a385","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"be65e57b-f6e7-41eb-9b70-988953c178e5","type":"GlyphRenderer"},{"attributes":{},"id":"5b165ca1-58ac-4d31-99ad-ca54281a853a","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"a523c295-13fa-446d-8126-7a557d548bb1","subtype":"Chart","type":"Plot"},"ticker":{"id":"5b165ca1-58ac-4d31-99ad-ca54281a853a","type":"BasicTicker"}},"id":"94ef4fcd-402b-44f3-96ba-7cdf4717b5b6","type":"Grid"},{"attributes":{"overlay":{"id":"7ea18d3b-b837-4038-90cd-af74ef332ec8","type":"BoxAnnotation"},"plot":{"id":"a523c295-13fa-446d-8126-7a557d548bb1","subtype":"Chart","type":"Plot"}},"id":"165fe398-5d45-4135-afc1-2ee717afd01d","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"2dc9cbf6-86ec-4c8a-a84b-aed63d64a021","type":"ColumnDataSource"},"glyph":{"id":"b3a0ddea-c8fb-4952-b2e2-f7fa9022d24d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"44389049-1f91-499a-b5a1-6e832179265e","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a523c295-13fa-446d-8126-7a557d548bb1","subtype":"Chart","type":"Plot"}},"id":"d9e1e94d-4c28-4d21-8e75-46b3bf3fd5f6","type":"SaveTool"},{"attributes":{"data_source":{"id":"62bca88a-9ba8-4fdd-b46c-1926143c445b","type":"ColumnDataSource"},"glyph":{"id":"b0dd881f-e3cc-466c-a150-e01b68c37db4","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"39469bad-5b08-43f6-a8f7-4602de9b742d","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7ea18d3b-b837-4038-90cd-af74ef332ec8","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"a523c295-13fa-446d-8126-7a557d548bb1","subtype":"Chart","type":"Plot"}},"id":"3a634093-3d94-46ca-87db-b92e37e3ae14","type":"HelpTool"},{"attributes":{"legends":[["3",[{"id":"44389049-1f91-499a-b5a1-6e832179265e","type":"GlyphRenderer"}]],["4",[{"id":"01da09ee-bffb-4deb-b6a5-832950fc09ef","type":"GlyphRenderer"}]],["5",[{"id":"2aba65a6-7685-4563-be77-df4dc7507083","type":"GlyphRenderer"}]],["6",[{"id":"be65e57b-f6e7-41eb-9b70-988953c178e5","type":"GlyphRenderer"}]],["8",[{"id":"39469bad-5b08-43f6-a8f7-4602de9b742d","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"a523c295-13fa-446d-8126-7a557d548bb1","subtype":"Chart","type":"Plot"}},"id":"0dd8dae0-07e0-4852-b249-b31a4c20e8dc","type":"Legend"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x_values":[21.5,23.7,18.0,19.0],"y_values":[110,100,90,97]}},"id":"2dc9cbf6-86ec-4c8a-a84b-aed63d64a021","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"b3a0ddea-c8fb-4952-b2e2-f7fa9022d24d","type":"Circle"},{"attributes":{},"id":"afd599f2-8b21-45a4-9c03-1661265199cd","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],"x_values":[18.0,19.0,20.6,19.4,20.5,20.2,19.2,18.0,18.0,18.0,16.0,20.5,17.0,20.8,26.8,18.0,19.0,17.0,16.2,23.5,23.0,21.5,18.0,19.8,17.7,19.0,18.1,18.6,20.2,20.6,28.8,16.0,32.7,22.4,22.5,20.0,19.0,22.0,24.0,22.0,22.0,15.0,16.0,16.0,18.0,25.0,19.0,38.0,18.0,22.0,20.0,21.0,18.0,15.0,16.0,17.0,15.0,15.0,18.0,19.0,20.0,20.0,19.1,19.0,18.0,17.5,20.5,17.6,19.0,20.2,16.5,21.0,22.0,17.5,18.5,18.0,18.5,18.0,24.2,25.4,30.7,21.0,21.0],"y_values":[88,100,105,90,100,85,105,88,100,105,100,95,125,85,115,100,88,100,133,110,95,115,110,85,165,100,120,110,90,110,115,105,132,110,90,95,100,97,81,105,100,100,100,110,105,110,90,85,97,112,100,110,95,110,105,110,72,72,105,95,122,100,90,108,97,110,105,85,100,88,120,90,95,95,110,78,98,100,120,116,76,85,107]}},"id":"94745fa6-ae9c-484f-a9e8-a6d8cb7bb9a1","type":"ColumnDataSource"},{"attributes":{},"id":"1f12c5d0-8137-4da8-8afe-f16f8b9518f8","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5],"x_values":[36.4,20.3,25.4],"y_values":[67,103,77]}},"id":"97316783-944c-4872-830a-9a2482c3cc39","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"901cdf51-dcfd-4ce7-92e8-9adc965ba96b","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#00ad9c"},"line_color":{"value":"#00ad9c"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"b0dd881f-e3cc-466c-a150-e01b68c37db4","type":"Circle"},{"attributes":{"plot":{"id":"a523c295-13fa-446d-8126-7a557d548bb1","subtype":"Chart","type":"Plot"}},"id":"ac5a464d-7711-422e-affc-cbf4affb11d8","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"e13c3219-c8e4-4207-be2e-96e5a43aeb60","type":"Circle"}],"root_ids":["a523c295-13fa-446d-8126-7a557d548bb1"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"ab911136-36cc-47b4-bcf9-d5272ac80013","elementid":"68514faa-0b7c-463a-aa08-16af333d5252","modelid":"a523c295-13fa-446d-8126-7a557d548bb1"}];
              
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