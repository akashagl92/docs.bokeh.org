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
      };var element = document.getElementById("fbeba9b1-bcf6-492d-9895-69a61c4c73b3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fbeba9b1-bcf6-492d-9895-69a61c4c73b3' but no matching script tag was found. ")
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
                  var docs_json = {"12ebf714-89f3-4b5e-950e-bc72f5d8297e":{"roots":{"references":[{"attributes":{"data_source":{"id":"5582d93b-216f-4f7d-bc03-dd25d0f51379","type":"ColumnDataSource"},"glyph":{"id":"4131daa9-83ba-44ca-94da-4ffc2fda1166","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"50bf6207-5177-42f6-99e0-2044155d8e3b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"34531a67-d4cc-4da2-bdbd-be8064147cb7","type":"ColumnDataSource"},"glyph":{"id":"db05f545-892b-4952-9dc3-6dd1e9d0628a","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f5f8ad3e-80aa-4ede-b5a0-13dc19e2b7c5","type":"GlyphRenderer"},{"attributes":{},"id":"5ad5a75a-9f17-4bf6-8a3b-0c9997c51410","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"virginica"},"renderers":[{"id":"f5f8ad3e-80aa-4ede-b5a0-13dc19e2b7c5","type":"GlyphRenderer"}]},"id":"b9715388-bcae-42a2-8e18-56a505fd2daf","type":"LegendItem"},{"attributes":{"axis_label":"petal_length","formatter":{"id":"9484b352-453e-43ac-a149-c8a2a25c5602","type":"BasicTickFormatter"},"plot":{"id":"64e8c314-7715-45eb-9b70-75a74461af47","subtype":"Chart","type":"Plot"},"ticker":{"id":"3b4831f8-0ad4-40f5-8115-4e08edc5c7bf","type":"BasicTicker"}},"id":"03b99f8a-0f52-4319-ac47-4f4603483f11","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"aa1f56f7-9db4-45bb-b6a9-a4f84015a8bd","type":"Circle"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"}],"species":["versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor"],"x_values":[4.7,4.5,4.9,4.0,4.6,4.5,4.7,3.3,4.6,3.9,3.5,4.2,4.0,4.7,3.6,4.4,4.5,4.1,4.5,3.9,4.8,4.0,4.9,4.7,4.3,4.4,4.8,5.0,4.5,3.5,3.8,3.7,3.9,5.1,4.5,4.5,4.7,4.4,4.1,4.0,4.4,4.6,4.0,3.3,4.2,4.2,4.2,4.3,3.0,4.1],"y_values":[1.4,1.5,1.5,1.3,1.5,1.3,1.6,1.0,1.3,1.4,1.0,1.5,1.0,1.4,1.3,1.4,1.5,1.0,1.5,1.1,1.8,1.3,1.5,1.2,1.3,1.4,1.4,1.7,1.5,1.0,1.1,1.0,1.2,1.6,1.5,1.6,1.5,1.3,1.3,1.3,1.2,1.4,1.2,1.0,1.3,1.2,1.3,1.3,1.1,1.3]}},"id":"5582d93b-216f-4f7d-bc03-dd25d0f51379","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"64e8c314-7715-45eb-9b70-75a74461af47","subtype":"Chart","type":"Plot"}},"id":"dcd79c7e-d764-45fe-b405-9999b4040f63","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"64e8c314-7715-45eb-9b70-75a74461af47","subtype":"Chart","type":"Plot"}},"id":"1d7a8107-4cfb-4020-ba54-d6203aa2604f","type":"ResetTool"},{"attributes":{"plot":null,"text":"Iris Dataset Color and Marker by Species"},"id":"a255f76c-2711-46bf-a79b-591dc19e6d72","type":"Title"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"}],"species":["virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica"],"x_values":[6.0,5.1,5.9,5.6,5.8,6.6,4.5,6.3,5.8,6.1,5.1,5.3,5.5,5.0,5.1,5.3,5.5,6.7,6.9,5.0,5.7,4.9,6.7,4.9,5.7,6.0,4.8,4.9,5.6,5.8,6.1,6.4,5.6,5.1,5.6,6.1,5.6,5.5,4.8,5.4,5.6,5.1,5.1,5.9,5.7,5.2,5.0,5.2,5.4,5.1],"y_values":[2.5,1.9,2.1,1.8,2.2,2.1,1.7,1.8,1.8,2.5,2.0,1.9,2.1,2.0,2.4,2.3,1.8,2.2,2.3,1.5,2.3,2.0,2.0,1.8,2.1,1.8,1.8,1.8,2.1,1.6,1.9,2.0,2.2,1.5,1.4,2.3,2.4,1.8,1.8,2.1,2.4,2.3,1.9,2.3,2.5,2.3,1.9,2.0,2.3,1.8]}},"id":"34531a67-d4cc-4da2-bdbd-be8064147cb7","type":"ColumnDataSource"},{"attributes":{"label":{"value":"versicolor"},"renderers":[{"id":"50bf6207-5177-42f6-99e0-2044155d8e3b","type":"GlyphRenderer"}]},"id":"8449354d-972c-4e06-bdb1-a2fee83955b0","type":"LegendItem"},{"attributes":{"overlay":{"id":"21e4ffd3-04a8-423c-ba9a-aad1d8b29009","type":"BoxAnnotation"},"plot":{"id":"64e8c314-7715-45eb-9b70-75a74461af47","subtype":"Chart","type":"Plot"}},"id":"fa80d22b-f050-49c2-a178-1d2deffae101","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"03b99f8a-0f52-4319-ac47-4f4603483f11","type":"LinearAxis"}],"height":400,"left":[{"id":"3556c1d7-de8c-4b81-bbfc-6529d32d7396","type":"LinearAxis"}],"renderers":[{"id":"21e4ffd3-04a8-423c-ba9a-aad1d8b29009","type":"BoxAnnotation"},{"id":"574c99b3-99b0-47ab-8538-67c4f34e2365","type":"GlyphRenderer"},{"id":"50bf6207-5177-42f6-99e0-2044155d8e3b","type":"GlyphRenderer"},{"id":"f5f8ad3e-80aa-4ede-b5a0-13dc19e2b7c5","type":"GlyphRenderer"},{"id":"126a4ac4-e6bd-4fb0-9d85-3a975f55d3d3","type":"Legend"},{"id":"03b99f8a-0f52-4319-ac47-4f4603483f11","type":"LinearAxis"},{"id":"3556c1d7-de8c-4b81-bbfc-6529d32d7396","type":"LinearAxis"},{"id":"fb49c178-c583-42df-a54c-871fba480233","type":"Grid"},{"id":"ea295959-685c-43ce-9686-011f34d13fa7","type":"Grid"}],"title":{"id":"a255f76c-2711-46bf-a79b-591dc19e6d72","type":"Title"},"tool_events":{"id":"cb067374-e0a8-498e-b6c5-76c136a43183","type":"ToolEvents"},"toolbar":{"id":"787f1d90-5e29-4a46-884a-f07763fb9857","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"66d40186-2122-432f-9ebd-b53d91fb0238","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"b4a78c58-b0f5-469d-96eb-74b3429aa62b","type":"Range1d"}},"id":"64e8c314-7715-45eb-9b70-75a74461af47","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"end":2.74,"start":-0.13999999999999999},"id":"b4a78c58-b0f5-469d-96eb-74b3429aa62b","type":"Range1d"},{"attributes":{"callback":null,"end":7.49,"start":0.4099999999999999},"id":"66d40186-2122-432f-9ebd-b53d91fb0238","type":"Range1d"},{"attributes":{},"id":"9484b352-453e-43ac-a149-c8a2a25c5602","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"4131daa9-83ba-44ca-94da-4ffc2fda1166","type":"Square"},{"attributes":{"plot":{"id":"64e8c314-7715-45eb-9b70-75a74461af47","subtype":"Chart","type":"Plot"}},"id":"cffc2233-9386-48d6-9b6f-82ba9ddba442","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bcac68fc-2ef2-479d-b71d-7300c9cac0fd","type":"PanTool"},{"id":"dcd79c7e-d764-45fe-b405-9999b4040f63","type":"WheelZoomTool"},{"id":"fa80d22b-f050-49c2-a178-1d2deffae101","type":"BoxZoomTool"},{"id":"cffc2233-9386-48d6-9b6f-82ba9ddba442","type":"SaveTool"},{"id":"1d7a8107-4cfb-4020-ba54-d6203aa2604f","type":"ResetTool"},{"id":"36526997-f394-4601-8edc-c50bd479301e","type":"HelpTool"}]},"id":"787f1d90-5e29-4a46-884a-f07763fb9857","type":"Toolbar"},{"attributes":{},"id":"3b4831f8-0ad4-40f5-8115-4e08edc5c7bf","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"db05f545-892b-4952-9dc3-6dd1e9d0628a","type":"Triangle"},{"attributes":{"dimension":1,"plot":{"id":"64e8c314-7715-45eb-9b70-75a74461af47","subtype":"Chart","type":"Plot"},"ticker":{"id":"2fd4c03e-13b8-45de-9a2e-a5d1f0eadd4b","type":"BasicTicker"}},"id":"ea295959-685c-43ce-9686-011f34d13fa7","type":"Grid"},{"attributes":{"axis_label":"petal_width","formatter":{"id":"5ad5a75a-9f17-4bf6-8a3b-0c9997c51410","type":"BasicTickFormatter"},"plot":{"id":"64e8c314-7715-45eb-9b70-75a74461af47","subtype":"Chart","type":"Plot"},"ticker":{"id":"2fd4c03e-13b8-45de-9a2e-a5d1f0eadd4b","type":"BasicTicker"}},"id":"3556c1d7-de8c-4b81-bbfc-6529d32d7396","type":"LinearAxis"},{"attributes":{"plot":{"id":"64e8c314-7715-45eb-9b70-75a74461af47","subtype":"Chart","type":"Plot"}},"id":"36526997-f394-4601-8edc-c50bd479301e","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"21e4ffd3-04a8-423c-ba9a-aad1d8b29009","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"}],"species":["setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa"],"x_values":[1.4,1.4,1.3,1.5,1.4,1.7,1.4,1.5,1.4,1.5,1.5,1.6,1.4,1.1,1.2,1.5,1.3,1.4,1.7,1.5,1.7,1.5,1.0,1.7,1.9,1.6,1.6,1.5,1.4,1.6,1.6,1.5,1.5,1.4,1.5,1.2,1.3,1.4,1.3,1.5,1.3,1.3,1.3,1.6,1.9,1.4,1.6,1.4,1.5,1.4],"y_values":[0.2,0.2,0.2,0.2,0.2,0.4,0.3,0.2,0.2,0.1,0.2,0.2,0.1,0.1,0.2,0.4,0.4,0.3,0.3,0.3,0.2,0.4,0.2,0.5,0.2,0.2,0.4,0.2,0.2,0.2,0.2,0.4,0.1,0.2,0.2,0.2,0.2,0.1,0.2,0.2,0.3,0.3,0.2,0.6,0.4,0.3,0.2,0.2,0.2,0.2]}},"id":"5cc0388f-128e-421a-a69c-dcbe44bcd186","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"64e8c314-7715-45eb-9b70-75a74461af47","subtype":"Chart","type":"Plot"}},"id":"bcac68fc-2ef2-479d-b71d-7300c9cac0fd","type":"PanTool"},{"attributes":{},"id":"2fd4c03e-13b8-45de-9a2e-a5d1f0eadd4b","type":"BasicTicker"},{"attributes":{"label":{"value":"setosa"},"renderers":[{"id":"574c99b3-99b0-47ab-8538-67c4f34e2365","type":"GlyphRenderer"}]},"id":"dffad79e-d149-482b-80ec-72cbf95f1b25","type":"LegendItem"},{"attributes":{"items":[{"id":"dffad79e-d149-482b-80ec-72cbf95f1b25","type":"LegendItem"},{"id":"8449354d-972c-4e06-bdb1-a2fee83955b0","type":"LegendItem"},{"id":"b9715388-bcae-42a2-8e18-56a505fd2daf","type":"LegendItem"}],"location":"top_left","plot":{"id":"64e8c314-7715-45eb-9b70-75a74461af47","subtype":"Chart","type":"Plot"}},"id":"126a4ac4-e6bd-4fb0-9d85-3a975f55d3d3","type":"Legend"},{"attributes":{},"id":"cb067374-e0a8-498e-b6c5-76c136a43183","type":"ToolEvents"},{"attributes":{"data_source":{"id":"5cc0388f-128e-421a-a69c-dcbe44bcd186","type":"ColumnDataSource"},"glyph":{"id":"aa1f56f7-9db4-45bb-b6a9-a4f84015a8bd","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"574c99b3-99b0-47ab-8538-67c4f34e2365","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"64e8c314-7715-45eb-9b70-75a74461af47","subtype":"Chart","type":"Plot"},"ticker":{"id":"3b4831f8-0ad4-40f5-8115-4e08edc5c7bf","type":"BasicTicker"}},"id":"fb49c178-c583-42df-a54c-871fba480233","type":"Grid"}],"root_ids":["64e8c314-7715-45eb-9b70-75a74461af47"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"12ebf714-89f3-4b5e-950e-bc72f5d8297e","elementid":"fbeba9b1-bcf6-492d-9895-69a61c4c73b3","modelid":"64e8c314-7715-45eb-9b70-75a74461af47"}];
                  
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