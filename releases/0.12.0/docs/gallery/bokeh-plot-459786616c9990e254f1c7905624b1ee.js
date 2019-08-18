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
      };var element = document.getElementById("a361be96-43e4-4adc-a421-ea6b5de1df00");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a361be96-43e4-4adc-a421-ea6b5de1df00' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"b293eda8-f908-4bd0-91b2-497f6e394937":{"roots":{"references":[{"attributes":{"plot":{"id":"1c99be1b-2633-45d4-a2f8-31696a0b4b53","subtype":"Chart","type":"Plot"}},"id":"8a8559b2-7499-45a1-b19f-955b53dd000f","type":"HelpTool"},{"attributes":{},"id":"bea7d600-9bf5-427b-8e4f-7e807d0ca021","type":"BasicTickFormatter"},{"attributes":{"legends":[["stamp",[{"id":"1916ee71-8163-41ce-83b3-cbde3b3c7970","type":"GlyphRenderer"}]],["postcard",[{"id":"617d9eb7-30c7-4a3b-9209-df573e3c052c","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"1c99be1b-2633-45d4-a2f8-31696a0b4b53","subtype":"Chart","type":"Plot"}},"id":"9b245adc-88ba-49b7-ba9b-06afe319a561","type":"Legend"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"e39ac3e6-eb9a-4c94-8ec4-e0d259fabccb","type":"Line"},{"attributes":{"plot":{"id":"1c99be1b-2633-45d4-a2f8-31696a0b4b53","subtype":"Chart","type":"Plot"}},"id":"017a94a3-d306-4e1b-bcbe-ca54ea2c5bf8","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.33,0.33,0.33,0.33,0.34,0.34,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.39,0.39,0.41,0.41,0.42,0.42,0.44,0.44,0.44,0.44,0.44,0.44,0.45,0.45,0.46,0.46,0.49,0.49,0.49]}},"id":"327fca2d-69b9-45e0-9472-8d8eff9d7a02","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":0.519,"start":0.171},"id":"2eebd8e9-058c-4260-8c36-6e7f357da1fa","type":"Range1d"},{"attributes":{"overlay":{"id":"07bc1e32-585d-426c-9e2f-371c5905e011","type":"BoxAnnotation"},"plot":{"id":"1c99be1b-2633-45d4-a2f8-31696a0b4b53","subtype":"Chart","type":"Plot"}},"id":"5b0d43c6-8070-4d5b-9dac-f1421f93876d","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"1c99be1b-2633-45d4-a2f8-31696a0b4b53","subtype":"Chart","type":"Plot"}},"id":"dacf1b6f-daa8-46ae-8212-1f8a4ee20294","type":"PanTool"},{"attributes":{},"id":"3224bee6-513f-43c3-b426-e9fc3214b4c2","type":"ToolEvents"},{"attributes":{"callback":null,"end":17.6,"start":-1.6},"id":"f29bd1d6-8e08-47cb-90f1-18fd43f8aef0","type":"Range1d"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"d12ea418-e741-449c-af23-27a95337ccd4","type":"Line"},{"attributes":{"below":[{"id":"014dc467-1b62-4ffa-8948-3d4c20ba3d22","type":"LinearAxis"}],"height":400,"left":[{"id":"510f5f4c-1682-465a-bd3d-ee03898de42f","type":"LinearAxis"}],"renderers":[{"id":"07bc1e32-585d-426c-9e2f-371c5905e011","type":"BoxAnnotation"},{"id":"1916ee71-8163-41ce-83b3-cbde3b3c7970","type":"GlyphRenderer"},{"id":"617d9eb7-30c7-4a3b-9209-df573e3c052c","type":"GlyphRenderer"},{"id":"9b245adc-88ba-49b7-ba9b-06afe319a561","type":"Legend"},{"id":"014dc467-1b62-4ffa-8948-3d4c20ba3d22","type":"LinearAxis"},{"id":"510f5f4c-1682-465a-bd3d-ee03898de42f","type":"LinearAxis"},{"id":"61cf86aa-11f2-4a30-8c06-adc97dd83202","type":"Grid"},{"id":"91bd1af9-1756-47d2-8b3e-c4de9d3563b2","type":"Grid"}],"title":{"id":"8e2842d4-9008-4fd8-908c-ecd8900e4c27","type":"Title"},"tool_events":{"id":"3224bee6-513f-43c3-b426-e9fc3214b4c2","type":"ToolEvents"},"toolbar":{"id":"1d09e412-b450-400e-86c5-c5b1f473a146","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"f29bd1d6-8e08-47cb-90f1-18fd43f8aef0","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"2eebd8e9-058c-4260-8c36-6e7f357da1fa","type":"Range1d"}},"id":"1c99be1b-2633-45d4-a2f8-31696a0b4b53","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"9796b6b3-a5f6-4572-8c62-794fb31d70b2","type":"BasicTicker"},{"attributes":{"axis_label":"index","formatter":{"id":"640d58b6-ef68-48a1-9dfe-154ef56f0a4b","type":"BasicTickFormatter"},"plot":{"id":"1c99be1b-2633-45d4-a2f8-31696a0b4b53","subtype":"Chart","type":"Plot"},"ticker":{"id":"9796b6b3-a5f6-4572-8c62-794fb31d70b2","type":"BasicTicker"}},"id":"014dc467-1b62-4ffa-8948-3d4c20ba3d22","type":"LinearAxis"},{"attributes":{},"id":"2a442feb-46a2-45a5-82b4-8058c7374b3f","type":"BasicTicker"},{"attributes":{"data_source":{"id":"327fca2d-69b9-45e0-9472-8d8eff9d7a02","type":"ColumnDataSource"},"glyph":{"id":"e39ac3e6-eb9a-4c94-8ec4-e0d259fabccb","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1916ee71-8163-41ce-83b3-cbde3b3c7970","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"U.S. Postage Rates (1999-2015)"},"id":"8e2842d4-9008-4fd8-908c-ecd8900e4c27","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"1c99be1b-2633-45d4-a2f8-31696a0b4b53","subtype":"Chart","type":"Plot"},"ticker":{"id":"2a442feb-46a2-45a5-82b4-8058c7374b3f","type":"BasicTicker"}},"id":"91bd1af9-1756-47d2-8b3e-c4de9d3563b2","type":"Grid"},{"attributes":{"plot":{"id":"1c99be1b-2633-45d4-a2f8-31696a0b4b53","subtype":"Chart","type":"Plot"}},"id":"cddc00e1-6bae-4000-ab84-34c4183286dc","type":"ResetTool"},{"attributes":{},"id":"640d58b6-ef68-48a1-9dfe-154ef56f0a4b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"1c99be1b-2633-45d4-a2f8-31696a0b4b53","subtype":"Chart","type":"Plot"},"ticker":{"id":"9796b6b3-a5f6-4572-8c62-794fb31d70b2","type":"BasicTicker"}},"id":"61cf86aa-11f2-4a30-8c06-adc97dd83202","type":"Grid"},{"attributes":{"plot":{"id":"1c99be1b-2633-45d4-a2f8-31696a0b4b53","subtype":"Chart","type":"Plot"}},"id":"6a59dfb8-30d8-4242-8607-4b372b63d00f","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dacf1b6f-daa8-46ae-8212-1f8a4ee20294","type":"PanTool"},{"id":"6a59dfb8-30d8-4242-8607-4b372b63d00f","type":"WheelZoomTool"},{"id":"5b0d43c6-8070-4d5b-9dac-f1421f93876d","type":"BoxZoomTool"},{"id":"017a94a3-d306-4e1b-bcbe-ca54ea2c5bf8","type":"SaveTool"},{"id":"cddc00e1-6bae-4000-ab84-34c4183286dc","type":"ResetTool"},{"id":"8a8559b2-7499-45a1-b19f-955b53dd000f","type":"HelpTool"}]},"id":"1d09e412-b450-400e-86c5-c5b1f473a146","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.2,0.2,0.2,0.2,0.21,0.21,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.24,0.24,0.26,0.26,0.27,0.27,0.28,0.28,0.28,0.28,0.29,0.29,0.32,0.32,0.33,0.33,0.34,0.34,0.35]}},"id":"7fdb5ac4-09b7-410f-b822-83cd91abe1c7","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"07bc1e32-585d-426c-9e2f-371c5905e011","type":"BoxAnnotation"},{"attributes":{"axis_label":"Rate per ounce","formatter":{"id":"bea7d600-9bf5-427b-8e4f-7e807d0ca021","type":"BasicTickFormatter"},"plot":{"id":"1c99be1b-2633-45d4-a2f8-31696a0b4b53","subtype":"Chart","type":"Plot"},"ticker":{"id":"2a442feb-46a2-45a5-82b4-8058c7374b3f","type":"BasicTicker"}},"id":"510f5f4c-1682-465a-bd3d-ee03898de42f","type":"LinearAxis"},{"attributes":{"data_source":{"id":"7fdb5ac4-09b7-410f-b822-83cd91abe1c7","type":"ColumnDataSource"},"glyph":{"id":"d12ea418-e741-449c-af23-27a95337ccd4","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"617d9eb7-30c7-4a3b-9209-df573e3c052c","type":"GlyphRenderer"}],"root_ids":["1c99be1b-2633-45d4-a2f8-31696a0b4b53"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"b293eda8-f908-4bd0-91b2-497f6e394937","elementid":"a361be96-43e4-4adc-a421-ea6b5de1df00","modelid":"1c99be1b-2633-45d4-a2f8-31696a0b4b53"}];
              
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