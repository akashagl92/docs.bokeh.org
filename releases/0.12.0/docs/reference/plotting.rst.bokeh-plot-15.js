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
      };var element = document.getElementById("615d2eac-118b-4fa3-98c1-80046221cf6d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '615d2eac-118b-4fa3-98c1-80046221cf6d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"93d807b4-80f6-41f5-85ed-e838c594a405":{"roots":{"references":[{"attributes":{"formatter":{"id":"6e8237cc-270c-46ef-b1f1-6d961bd30af1","type":"BasicTickFormatter"},"plot":{"id":"19a5d7ff-d77c-4fd5-bfb8-452dc4e36d29","subtype":"Figure","type":"Plot"},"ticker":{"id":"121aee36-c01d-4976-a8b1-f8edb6a8d188","type":"BasicTicker"}},"id":"558e837b-d40d-4322-adad-feccc143418b","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"905b1c3e-c841-403f-93a6-11d5e07533f3","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f9c033c4-6a7e-4020-a2ca-696149e1b504","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["top","left","right","bottom"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"db03a221-c8a0-4257-8ccc-f009d2f7c001","type":"ColumnDataSource"},{"attributes":{},"id":"121aee36-c01d-4976-a8b1-f8edb6a8d188","type":"BasicTicker"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"81f6b631-b81e-450b-8aa4-77e817a9e48e","type":"Quad"},{"attributes":{"data_source":{"id":"db03a221-c8a0-4257-8ccc-f009d2f7c001","type":"ColumnDataSource"},"glyph":{"id":"6be3e944-05ea-4b08-8eb6-ea48dc3ae199","type":"Quad"},"hover_glyph":null,"nonselection_glyph":{"id":"81f6b631-b81e-450b-8aa4-77e817a9e48e","type":"Quad"},"selection_glyph":null},"id":"bd7e66a8-69f8-434c-b917-f26f42a20a7b","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"19a5d7ff-d77c-4fd5-bfb8-452dc4e36d29","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d734ce0-3b45-4a4d-a0d8-0ed5b071c7dd","type":"BasicTicker"}},"id":"82e62143-e0df-4f1f-83e5-728e6b6c43e7","type":"Grid"},{"attributes":{"plot":{"id":"19a5d7ff-d77c-4fd5-bfb8-452dc4e36d29","subtype":"Figure","type":"Plot"}},"id":"f2b81937-6621-4980-9607-113a6d9d16bf","type":"SaveTool"},{"attributes":{"plot":{"id":"19a5d7ff-d77c-4fd5-bfb8-452dc4e36d29","subtype":"Figure","type":"Plot"}},"id":"a1e5b976-60c5-45b4-aad2-ec40f320388d","type":"ResetTool"},{"attributes":{"callback":null},"id":"52f2c9d4-5bdd-4108-885e-6c99577d7887","type":"DataRange1d"},{"attributes":{"formatter":{"id":"2e5b58bc-05b8-484e-ab8d-9cb1bcff6a9e","type":"BasicTickFormatter"},"plot":{"id":"19a5d7ff-d77c-4fd5-bfb8-452dc4e36d29","subtype":"Figure","type":"Plot"},"ticker":{"id":"5d734ce0-3b45-4a4d-a0d8-0ed5b071c7dd","type":"BasicTicker"}},"id":"3011e7cc-74ff-4f85-870f-2d0ee1105eaa","type":"LinearAxis"},{"attributes":{"plot":{"id":"19a5d7ff-d77c-4fd5-bfb8-452dc4e36d29","subtype":"Figure","type":"Plot"},"ticker":{"id":"121aee36-c01d-4976-a8b1-f8edb6a8d188","type":"BasicTicker"}},"id":"ed4c7790-f1ce-4fd5-b9ed-794e356b8491","type":"Grid"},{"attributes":{},"id":"6e8237cc-270c-46ef-b1f1-6d961bd30af1","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"19a5d7ff-d77c-4fd5-bfb8-452dc4e36d29","subtype":"Figure","type":"Plot"}},"id":"da8b24c4-f8b6-4351-b260-d2d19218952a","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"558e837b-d40d-4322-adad-feccc143418b","type":"LinearAxis"}],"left":[{"id":"3011e7cc-74ff-4f85-870f-2d0ee1105eaa","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"558e837b-d40d-4322-adad-feccc143418b","type":"LinearAxis"},{"id":"ed4c7790-f1ce-4fd5-b9ed-794e356b8491","type":"Grid"},{"id":"3011e7cc-74ff-4f85-870f-2d0ee1105eaa","type":"LinearAxis"},{"id":"82e62143-e0df-4f1f-83e5-728e6b6c43e7","type":"Grid"},{"id":"f9c033c4-6a7e-4020-a2ca-696149e1b504","type":"BoxAnnotation"},{"id":"bd7e66a8-69f8-434c-b917-f26f42a20a7b","type":"GlyphRenderer"}],"title":{"id":"905b1c3e-c841-403f-93a6-11d5e07533f3","type":"Title"},"tool_events":{"id":"57310a99-b427-475f-9c57-6b72a4ea783f","type":"ToolEvents"},"toolbar":{"id":"6bf16bce-d3f2-41de-8052-158b34bc731e","type":"Toolbar"},"x_range":{"id":"52f2c9d4-5bdd-4108-885e-6c99577d7887","type":"DataRange1d"},"y_range":{"id":"42bd67f7-5e47-4f11-bf39-a1da43525314","type":"DataRange1d"}},"id":"19a5d7ff-d77c-4fd5-bfb8-452dc4e36d29","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"42bd67f7-5e47-4f11-bf39-a1da43525314","type":"DataRange1d"},{"attributes":{},"id":"5d734ce0-3b45-4a4d-a0d8-0ed5b071c7dd","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b32b1725-b17c-489d-b2f3-40b5fc91db72","type":"PanTool"},{"id":"da8b24c4-f8b6-4351-b260-d2d19218952a","type":"WheelZoomTool"},{"id":"11d1bb95-a9c8-45a9-92cc-798dc6dd93a5","type":"BoxZoomTool"},{"id":"f2b81937-6621-4980-9607-113a6d9d16bf","type":"SaveTool"},{"id":"a1e5b976-60c5-45b4-aad2-ec40f320388d","type":"ResetTool"},{"id":"2c9a5653-8948-4448-a827-41d8ef3f4ced","type":"HelpTool"}]},"id":"6bf16bce-d3f2-41de-8052-158b34bc731e","type":"Toolbar"},{"attributes":{"plot":{"id":"19a5d7ff-d77c-4fd5-bfb8-452dc4e36d29","subtype":"Figure","type":"Plot"}},"id":"b32b1725-b17c-489d-b2f3-40b5fc91db72","type":"PanTool"},{"attributes":{},"id":"2e5b58bc-05b8-484e-ab8d-9cb1bcff6a9e","type":"BasicTickFormatter"},{"attributes":{},"id":"57310a99-b427-475f-9c57-6b72a4ea783f","type":"ToolEvents"},{"attributes":{"overlay":{"id":"f9c033c4-6a7e-4020-a2ca-696149e1b504","type":"BoxAnnotation"},"plot":{"id":"19a5d7ff-d77c-4fd5-bfb8-452dc4e36d29","subtype":"Figure","type":"Plot"}},"id":"11d1bb95-a9c8-45a9-92cc-798dc6dd93a5","type":"BoxZoomTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"6be3e944-05ea-4b08-8eb6-ea48dc3ae199","type":"Quad"},{"attributes":{"plot":{"id":"19a5d7ff-d77c-4fd5-bfb8-452dc4e36d29","subtype":"Figure","type":"Plot"}},"id":"2c9a5653-8948-4448-a827-41d8ef3f4ced","type":"HelpTool"}],"root_ids":["19a5d7ff-d77c-4fd5-bfb8-452dc4e36d29"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"93d807b4-80f6-41f5-85ed-e838c594a405","elementid":"615d2eac-118b-4fa3-98c1-80046221cf6d","modelid":"19a5d7ff-d77c-4fd5-bfb8-452dc4e36d29"}];
              
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