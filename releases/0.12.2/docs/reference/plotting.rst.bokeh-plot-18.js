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
      };var element = document.getElementById("c9f04d28-645a-4c0b-aa58-8d8e6c7e72b8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c9f04d28-645a-4c0b-aa58-8d8e6c7e72b8' but no matching script tag was found. ")
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
                  var docs_json = {"d05a79b5-c2f1-48ed-b97b-10581cd9c16d":{"roots":{"references":[{"attributes":{"callback":null},"id":"bcb5b39b-38f9-4fa4-8796-dfe852877095","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"c606833d-dc61-4766-acb1-f2c317ce6051","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"4933d966-8de7-47f9-ac6e-46bfb27cee0c","type":"BasicTickFormatter"},"plot":{"id":"3b385690-311e-4158-9e43-9754c1d48dcf","subtype":"Figure","type":"Plot"},"ticker":{"id":"2abe5f81-2eb7-41b9-a82d-a2b38e25dbd0","type":"BasicTicker"}},"id":"e351a886-9dd7-4fe1-98c1-38bb65a45d5e","type":"LinearAxis"},{"attributes":{"plot":{"id":"3b385690-311e-4158-9e43-9754c1d48dcf","subtype":"Figure","type":"Plot"}},"id":"ef95386a-a237-4e39-b56d-b411eb99a497","type":"PanTool"},{"attributes":{},"id":"4933d966-8de7-47f9-ac6e-46bfb27cee0c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3b385690-311e-4158-9e43-9754c1d48dcf","subtype":"Figure","type":"Plot"}},"id":"825cc6aa-30c9-40b7-84cf-d329972b2081","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ef95386a-a237-4e39-b56d-b411eb99a497","type":"PanTool"},{"id":"6707610a-4765-4322-a23a-57277b67c435","type":"WheelZoomTool"},{"id":"475165b4-b94c-41ef-8792-e4a7d2714ee6","type":"BoxZoomTool"},{"id":"b36219e0-7425-427f-a556-60fd49e906b6","type":"SaveTool"},{"id":"65d1d6f5-4e29-44fd-acfa-5da70c53b01e","type":"ResetTool"},{"id":"825cc6aa-30c9-40b7-84cf-d329972b2081","type":"HelpTool"}]},"id":"9048fb69-ad1c-46e6-8870-7b8c5e411c5d","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e02508f1-6825-42e2-82d6-b56f2583e72d","type":"BoxAnnotation"},{"attributes":{},"id":"c4940498-2c29-45b3-9f06-caa2f4a31dff","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":20},"line_color":{"value":"#CAB2D6"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a6a7eb17-4b7d-4dbb-ae79-31fbc0ca6911","type":"Rect"},{"attributes":{},"id":"202f9313-6ce3-4ab0-96fe-3b7d12e14b82","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"fdae4a9a-8dd5-4899-b297-6bdffbae1586","type":"Title"},{"attributes":{"below":[{"id":"887346cc-2aa2-465c-932f-f67a15b3f72d","type":"LinearAxis"}],"left":[{"id":"e351a886-9dd7-4fe1-98c1-38bb65a45d5e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"887346cc-2aa2-465c-932f-f67a15b3f72d","type":"LinearAxis"},{"id":"4d26607d-ff8b-4a35-be8a-84af6f57a1c6","type":"Grid"},{"id":"e351a886-9dd7-4fe1-98c1-38bb65a45d5e","type":"LinearAxis"},{"id":"64ae1292-f787-4bf3-8c6f-7b65ec7429f9","type":"Grid"},{"id":"e02508f1-6825-42e2-82d6-b56f2583e72d","type":"BoxAnnotation"},{"id":"6fddffd6-96c0-4e53-8aba-8d3fcc8e83ac","type":"GlyphRenderer"}],"title":{"id":"fdae4a9a-8dd5-4899-b297-6bdffbae1586","type":"Title"},"tool_events":{"id":"c4940498-2c29-45b3-9f06-caa2f4a31dff","type":"ToolEvents"},"toolbar":{"id":"9048fb69-ad1c-46e6-8870-7b8c5e411c5d","type":"Toolbar"},"x_range":{"id":"bcb5b39b-38f9-4fa4-8796-dfe852877095","type":"DataRange1d"},"y_range":{"id":"c978f036-2217-4691-b934-be70a73b8212","type":"DataRange1d"}},"id":"3b385690-311e-4158-9e43-9754c1d48dcf","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ed49f2b7-f853-4f7c-b2f4-695cfc629644","type":"Rect"},{"attributes":{"plot":{"id":"3b385690-311e-4158-9e43-9754c1d48dcf","subtype":"Figure","type":"Plot"}},"id":"6707610a-4765-4322-a23a-57277b67c435","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"e02508f1-6825-42e2-82d6-b56f2583e72d","type":"BoxAnnotation"},"plot":{"id":"3b385690-311e-4158-9e43-9754c1d48dcf","subtype":"Figure","type":"Plot"}},"id":"475165b4-b94c-41ef-8792-e4a7d2714ee6","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"c978f036-2217-4691-b934-be70a73b8212","type":"DataRange1d"},{"attributes":{"formatter":{"id":"202f9313-6ce3-4ab0-96fe-3b7d12e14b82","type":"BasicTickFormatter"},"plot":{"id":"3b385690-311e-4158-9e43-9754c1d48dcf","subtype":"Figure","type":"Plot"},"ticker":{"id":"30d50176-dd6b-4a1a-b34f-76eab7d50966","type":"BasicTicker"}},"id":"887346cc-2aa2-465c-932f-f67a15b3f72d","type":"LinearAxis"},{"attributes":{"data_source":{"id":"c606833d-dc61-4766-acb1-f2c317ce6051","type":"ColumnDataSource"},"glyph":{"id":"a6a7eb17-4b7d-4dbb-ae79-31fbc0ca6911","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"ed49f2b7-f853-4f7c-b2f4-695cfc629644","type":"Rect"},"selection_glyph":null},"id":"6fddffd6-96c0-4e53-8aba-8d3fcc8e83ac","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"3b385690-311e-4158-9e43-9754c1d48dcf","subtype":"Figure","type":"Plot"},"ticker":{"id":"30d50176-dd6b-4a1a-b34f-76eab7d50966","type":"BasicTicker"}},"id":"4d26607d-ff8b-4a35-be8a-84af6f57a1c6","type":"Grid"},{"attributes":{},"id":"2abe5f81-2eb7-41b9-a82d-a2b38e25dbd0","type":"BasicTicker"},{"attributes":{},"id":"30d50176-dd6b-4a1a-b34f-76eab7d50966","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"3b385690-311e-4158-9e43-9754c1d48dcf","subtype":"Figure","type":"Plot"},"ticker":{"id":"2abe5f81-2eb7-41b9-a82d-a2b38e25dbd0","type":"BasicTicker"}},"id":"64ae1292-f787-4bf3-8c6f-7b65ec7429f9","type":"Grid"},{"attributes":{"plot":{"id":"3b385690-311e-4158-9e43-9754c1d48dcf","subtype":"Figure","type":"Plot"}},"id":"b36219e0-7425-427f-a556-60fd49e906b6","type":"SaveTool"},{"attributes":{"plot":{"id":"3b385690-311e-4158-9e43-9754c1d48dcf","subtype":"Figure","type":"Plot"}},"id":"65d1d6f5-4e29-44fd-acfa-5da70c53b01e","type":"ResetTool"}],"root_ids":["3b385690-311e-4158-9e43-9754c1d48dcf"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"d05a79b5-c2f1-48ed-b97b-10581cd9c16d","elementid":"c9f04d28-645a-4c0b-aa58-8d8e6c7e72b8","modelid":"3b385690-311e-4158-9e43-9754c1d48dcf"}];
                  
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