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
      };var element = document.getElementById("c36c4670-44fa-46e9-b13c-184adc3f18d1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c36c4670-44fa-46e9-b13c-184adc3f18d1' but no matching script tag was found. ")
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
                  var docs_json = {"cb369331-925c-42ab-850b-8bd3a6c2c83b":{"roots":{"references":[{"attributes":{"callback":null,"end":0.519,"start":0.171},"id":"e828ebb6-9d05-4b01-b7c8-c489374dcbe3","type":"Range1d"},{"attributes":{"data_source":{"id":"07481a67-29cb-4c73-97c3-7764c7006f38","type":"ColumnDataSource"},"glyph":{"id":"258e4814-b15d-4fe2-889a-13381c249127","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"747d2bf4-3fc5-4913-b8a9-81d36bfc2d12","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.2,0.2,0.2,0.2,0.21,0.21,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.24,0.24,0.26,0.26,0.27,0.27,0.28,0.28,0.28,0.28,0.29,0.29,0.32,0.32,0.33,0.33,0.34,0.34,0.35]}},"id":"07481a67-29cb-4c73-97c3-7764c7006f38","type":"ColumnDataSource"},{"attributes":{"label":{"value":"stamp"},"renderers":[{"id":"4e1714e0-c2d8-4a82-9444-b7d2e1feba95","type":"GlyphRenderer"}]},"id":"521f9d1c-68a5-4a6b-a0d8-f9b3f6e627ac","type":"LegendItem"},{"attributes":{"plot":{"id":"844404b1-74da-49b2-870e-f04dc7cac243","subtype":"Chart","type":"Plot"}},"id":"751555a6-1c96-4c0a-839e-3a4e6791cac3","type":"ResetTool"},{"attributes":{"plot":null,"text":"U.S. Postage Rates (1999-2015)"},"id":"a4b7d862-3d73-46d1-b9e2-d9979db0bb15","type":"Title"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"20487486-747d-4451-8490-bbeae9f350b8","type":"Line"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"258e4814-b15d-4fe2-889a-13381c249127","type":"Line"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.33,0.33,0.33,0.33,0.34,0.34,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.39,0.39,0.41,0.41,0.42,0.42,0.44,0.44,0.44,0.44,0.44,0.44,0.45,0.45,0.46,0.46,0.49,0.49,0.49]}},"id":"91cd5481-c826-46f1-9869-7c749bed1e7c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"844404b1-74da-49b2-870e-f04dc7cac243","subtype":"Chart","type":"Plot"},"ticker":{"id":"2714ef66-c097-4678-9953-efed3646328d","type":"BasicTicker"}},"id":"dcfbabe2-576d-4a06-992b-efd97a485905","type":"Grid"},{"attributes":{},"id":"0c51c9d4-9361-4203-b9c3-f7ee84a8db80","type":"BasicTicker"},{"attributes":{},"id":"2714ef66-c097-4678-9953-efed3646328d","type":"BasicTicker"},{"attributes":{"axis_label":"Rate per ounce","formatter":{"id":"0d760ec4-fa25-4376-a262-98333feac527","type":"BasicTickFormatter"},"plot":{"id":"844404b1-74da-49b2-870e-f04dc7cac243","subtype":"Chart","type":"Plot"},"ticker":{"id":"0c51c9d4-9361-4203-b9c3-f7ee84a8db80","type":"BasicTicker"}},"id":"0518d26c-8eba-4124-99ca-39372662f21a","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"844404b1-74da-49b2-870e-f04dc7cac243","subtype":"Chart","type":"Plot"},"ticker":{"id":"0c51c9d4-9361-4203-b9c3-f7ee84a8db80","type":"BasicTicker"}},"id":"b33c74a9-de5a-4afa-b4b8-bfff37ab002e","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6faa3965-154d-4b5e-9990-aa44293ff546","type":"PanTool"},{"id":"90fb4faa-fbbc-4dcb-97c1-4169e12b966f","type":"WheelZoomTool"},{"id":"712439c4-7479-4855-a565-b83e5db46793","type":"BoxZoomTool"},{"id":"94383d36-4a87-4fe5-a24c-e7267131052c","type":"SaveTool"},{"id":"751555a6-1c96-4c0a-839e-3a4e6791cac3","type":"ResetTool"},{"id":"cf328960-1bef-4586-a9c9-3f4393dfa50c","type":"HelpTool"}]},"id":"ac4e22d8-19e0-47f5-9aac-053e60cbbba4","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f827fc17-45f1-477a-a474-6775ff11829f","type":"BoxAnnotation"},{"attributes":{},"id":"c43855dc-571c-45cc-805a-7b01bdff2e2e","type":"ToolEvents"},{"attributes":{},"id":"4bb5dc3d-18e9-4bb8-8eaa-a3b70f06816c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"844404b1-74da-49b2-870e-f04dc7cac243","subtype":"Chart","type":"Plot"}},"id":"6faa3965-154d-4b5e-9990-aa44293ff546","type":"PanTool"},{"attributes":{"plot":{"id":"844404b1-74da-49b2-870e-f04dc7cac243","subtype":"Chart","type":"Plot"}},"id":"cf328960-1bef-4586-a9c9-3f4393dfa50c","type":"HelpTool"},{"attributes":{"plot":{"id":"844404b1-74da-49b2-870e-f04dc7cac243","subtype":"Chart","type":"Plot"}},"id":"94383d36-4a87-4fe5-a24c-e7267131052c","type":"SaveTool"},{"attributes":{"callback":null,"end":17.6,"start":-1.6},"id":"34bae589-78a5-45b3-a18a-b6ea0b83f60b","type":"Range1d"},{"attributes":{"axis_label":"index","formatter":{"id":"4bb5dc3d-18e9-4bb8-8eaa-a3b70f06816c","type":"BasicTickFormatter"},"plot":{"id":"844404b1-74da-49b2-870e-f04dc7cac243","subtype":"Chart","type":"Plot"},"ticker":{"id":"2714ef66-c097-4678-9953-efed3646328d","type":"BasicTicker"}},"id":"7ec04fc9-deae-4b20-a8d8-b04dc8654540","type":"LinearAxis"},{"attributes":{"items":[{"id":"521f9d1c-68a5-4a6b-a0d8-f9b3f6e627ac","type":"LegendItem"},{"id":"ab3ad879-282b-43b5-9b54-5c22dc608e0e","type":"LegendItem"}],"location":"top_left","plot":{"id":"844404b1-74da-49b2-870e-f04dc7cac243","subtype":"Chart","type":"Plot"}},"id":"4a0fe917-1e8b-41e7-91bb-f81c1d5acb85","type":"Legend"},{"attributes":{"below":[{"id":"7ec04fc9-deae-4b20-a8d8-b04dc8654540","type":"LinearAxis"}],"height":400,"left":[{"id":"0518d26c-8eba-4124-99ca-39372662f21a","type":"LinearAxis"}],"renderers":[{"id":"f827fc17-45f1-477a-a474-6775ff11829f","type":"BoxAnnotation"},{"id":"4e1714e0-c2d8-4a82-9444-b7d2e1feba95","type":"GlyphRenderer"},{"id":"747d2bf4-3fc5-4913-b8a9-81d36bfc2d12","type":"GlyphRenderer"},{"id":"4a0fe917-1e8b-41e7-91bb-f81c1d5acb85","type":"Legend"},{"id":"7ec04fc9-deae-4b20-a8d8-b04dc8654540","type":"LinearAxis"},{"id":"0518d26c-8eba-4124-99ca-39372662f21a","type":"LinearAxis"},{"id":"dcfbabe2-576d-4a06-992b-efd97a485905","type":"Grid"},{"id":"b33c74a9-de5a-4afa-b4b8-bfff37ab002e","type":"Grid"}],"title":{"id":"a4b7d862-3d73-46d1-b9e2-d9979db0bb15","type":"Title"},"tool_events":{"id":"c43855dc-571c-45cc-805a-7b01bdff2e2e","type":"ToolEvents"},"toolbar":{"id":"ac4e22d8-19e0-47f5-9aac-053e60cbbba4","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"34bae589-78a5-45b3-a18a-b6ea0b83f60b","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"e828ebb6-9d05-4b01-b7c8-c489374dcbe3","type":"Range1d"}},"id":"844404b1-74da-49b2-870e-f04dc7cac243","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"0d760ec4-fa25-4376-a262-98333feac527","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"postcard"},"renderers":[{"id":"747d2bf4-3fc5-4913-b8a9-81d36bfc2d12","type":"GlyphRenderer"}]},"id":"ab3ad879-282b-43b5-9b54-5c22dc608e0e","type":"LegendItem"},{"attributes":{"plot":{"id":"844404b1-74da-49b2-870e-f04dc7cac243","subtype":"Chart","type":"Plot"}},"id":"90fb4faa-fbbc-4dcb-97c1-4169e12b966f","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"91cd5481-c826-46f1-9869-7c749bed1e7c","type":"ColumnDataSource"},"glyph":{"id":"20487486-747d-4451-8490-bbeae9f350b8","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4e1714e0-c2d8-4a82-9444-b7d2e1feba95","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"f827fc17-45f1-477a-a474-6775ff11829f","type":"BoxAnnotation"},"plot":{"id":"844404b1-74da-49b2-870e-f04dc7cac243","subtype":"Chart","type":"Plot"}},"id":"712439c4-7479-4855-a565-b83e5db46793","type":"BoxZoomTool"}],"root_ids":["844404b1-74da-49b2-870e-f04dc7cac243"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"cb369331-925c-42ab-850b-8bd3a6c2c83b","elementid":"c36c4670-44fa-46e9-b13c-184adc3f18d1","modelid":"844404b1-74da-49b2-870e-f04dc7cac243"}];
                  
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