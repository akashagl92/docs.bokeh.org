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
      };var element = document.getElementById("b243bd27-fa7a-4391-8a26-2b7df5bb4802");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b243bd27-fa7a-4391-8a26-2b7df5bb4802' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"3738e77d-2afe-45a3-bdbe-9a57486fda58":{"roots":{"references":[{"attributes":{"callback":null},"id":"b264724e-c3e3-4d11-be70-6ba44b200a6b","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8507a6e2-9102-4cfc-914e-5799d748aec0","type":"Line"},{"attributes":{"formatter":{"id":"ffae1653-9e85-4cf2-a7a7-36f132950a13","type":"BasicTickFormatter"},"plot":{"id":"ac554aa1-44a1-48ab-bbc2-fc24d58b45af","subtype":"Figure","type":"Plot"},"ticker":{"id":"b383e67d-dd0e-4d8c-b245-13295f999339","type":"BasicTicker"}},"id":"bf7269ec-f4d1-47d0-af87-3997b50429bf","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"97e4651e-0ebd-4a44-a410-eb521d30655f","type":"PanTool"},{"id":"597029b2-a3a1-419e-94aa-452bd9f381f8","type":"WheelZoomTool"},{"id":"ee6b1485-d2c1-40ac-be94-924061b573b8","type":"BoxZoomTool"},{"id":"285d729e-303c-4994-acc3-280473b7c905","type":"SaveTool"},{"id":"ac4d3577-09b7-489b-9a93-48ffad1dfe1d","type":"ResetTool"},{"id":"1053c523-7c22-44de-90f7-384e2fac68d3","type":"HelpTool"}]},"id":"72ca277e-29c6-42fe-9650-b806e81592bf","type":"Toolbar"},{"attributes":{},"id":"cb56b266-efe6-40ae-b4ad-cca9ff7a259d","type":"ToolEvents"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34ff7136-06f2-4aa1-b81d-ee5e986a1b01","type":"Line"},{"attributes":{},"id":"b383e67d-dd0e-4d8c-b245-13295f999339","type":"BasicTicker"},{"attributes":{"callback":null},"id":"599e3dc0-1b04-4e45-bcb3-4212d364346b","type":"DataRange1d"},{"attributes":{"plot":{"id":"ac554aa1-44a1-48ab-bbc2-fc24d58b45af","subtype":"Figure","type":"Plot"}},"id":"285d729e-303c-4994-acc3-280473b7c905","type":"SaveTool"},{"attributes":{"plot":{"id":"ac554aa1-44a1-48ab-bbc2-fc24d58b45af","subtype":"Figure","type":"Plot"}},"id":"97e4651e-0ebd-4a44-a410-eb521d30655f","type":"PanTool"},{"attributes":{},"id":"6a4993cc-ea5a-4388-b264-e3b5532a0e8c","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"54b3025c-ff5f-4686-be4e-5c247fb2de86","type":"BoxAnnotation"},"plot":{"id":"ac554aa1-44a1-48ab-bbc2-fc24d58b45af","subtype":"Figure","type":"Plot"}},"id":"ee6b1485-d2c1-40ac-be94-924061b573b8","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"bc353829-9a90-4789-adb1-448de98a57d3","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"6a4993cc-ea5a-4388-b264-e3b5532a0e8c","type":"BasicTickFormatter"},"plot":{"id":"ac554aa1-44a1-48ab-bbc2-fc24d58b45af","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8d07c50-ac2d-44b0-ab17-19e13a48bbaf","type":"BasicTicker"}},"id":"6e7cd0e7-4b6e-42ad-87d8-fcb082b4f450","type":"LinearAxis"},{"attributes":{"plot":{"id":"ac554aa1-44a1-48ab-bbc2-fc24d58b45af","subtype":"Figure","type":"Plot"}},"id":"ac4d3577-09b7-489b-9a93-48ffad1dfe1d","type":"ResetTool"},{"attributes":{"plot":{"id":"ac554aa1-44a1-48ab-bbc2-fc24d58b45af","subtype":"Figure","type":"Plot"}},"id":"597029b2-a3a1-419e-94aa-452bd9f381f8","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"bc353829-9a90-4789-adb1-448de98a57d3","type":"ColumnDataSource"},"glyph":{"id":"34ff7136-06f2-4aa1-b81d-ee5e986a1b01","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"8507a6e2-9102-4cfc-914e-5799d748aec0","type":"Line"},"selection_glyph":null},"id":"8856d6d7-8c05-4751-b67a-c2032d55daa6","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"line"},"id":"1e12cfb7-9b41-45cc-97cb-34406eb3a9b1","type":"Title"},{"attributes":{"below":[{"id":"6e7cd0e7-4b6e-42ad-87d8-fcb082b4f450","type":"LinearAxis"}],"left":[{"id":"bf7269ec-f4d1-47d0-af87-3997b50429bf","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"6e7cd0e7-4b6e-42ad-87d8-fcb082b4f450","type":"LinearAxis"},{"id":"ca6c2bdc-ab9d-49d9-81ad-4a229e3f00f9","type":"Grid"},{"id":"bf7269ec-f4d1-47d0-af87-3997b50429bf","type":"LinearAxis"},{"id":"79ed7f33-96ae-4a8f-abd4-4dd1602d784a","type":"Grid"},{"id":"54b3025c-ff5f-4686-be4e-5c247fb2de86","type":"BoxAnnotation"},{"id":"8856d6d7-8c05-4751-b67a-c2032d55daa6","type":"GlyphRenderer"}],"title":{"id":"1e12cfb7-9b41-45cc-97cb-34406eb3a9b1","type":"Title"},"tool_events":{"id":"cb56b266-efe6-40ae-b4ad-cca9ff7a259d","type":"ToolEvents"},"toolbar":{"id":"72ca277e-29c6-42fe-9650-b806e81592bf","type":"Toolbar"},"x_range":{"id":"b264724e-c3e3-4d11-be70-6ba44b200a6b","type":"DataRange1d"},"y_range":{"id":"599e3dc0-1b04-4e45-bcb3-4212d364346b","type":"DataRange1d"}},"id":"ac554aa1-44a1-48ab-bbc2-fc24d58b45af","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d8d07c50-ac2d-44b0-ab17-19e13a48bbaf","type":"BasicTicker"},{"attributes":{"plot":{"id":"ac554aa1-44a1-48ab-bbc2-fc24d58b45af","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8d07c50-ac2d-44b0-ab17-19e13a48bbaf","type":"BasicTicker"}},"id":"ca6c2bdc-ab9d-49d9-81ad-4a229e3f00f9","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"54b3025c-ff5f-4686-be4e-5c247fb2de86","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"ac554aa1-44a1-48ab-bbc2-fc24d58b45af","subtype":"Figure","type":"Plot"},"ticker":{"id":"b383e67d-dd0e-4d8c-b245-13295f999339","type":"BasicTicker"}},"id":"79ed7f33-96ae-4a8f-abd4-4dd1602d784a","type":"Grid"},{"attributes":{},"id":"ffae1653-9e85-4cf2-a7a7-36f132950a13","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ac554aa1-44a1-48ab-bbc2-fc24d58b45af","subtype":"Figure","type":"Plot"}},"id":"1053c523-7c22-44de-90f7-384e2fac68d3","type":"HelpTool"}],"root_ids":["ac554aa1-44a1-48ab-bbc2-fc24d58b45af"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"3738e77d-2afe-45a3-bdbe-9a57486fda58","elementid":"b243bd27-fa7a-4391-8a26-2b7df5bb4802","modelid":"ac554aa1-44a1-48ab-bbc2-fc24d58b45af"}];
              
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