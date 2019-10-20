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
      };var element = document.getElementById("fc6f90fe-a256-40c3-a43c-a19638b94551");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fc6f90fe-a256-40c3-a43c-a19638b94551' but no matching script tag was found. ")
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
                  var docs_json = {"c54ff870-5f73-4c7b-b4b8-ecf283de29ad":{"roots":{"references":[{"attributes":{"plot":{"id":"290be710-bc86-4eb6-bdfa-5d1601efbaa0","subtype":"Figure","type":"Plot"}},"id":"5cd19fa2-a8f0-41d3-9a5d-4f88a588fe6a","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"1b17aa84-b5e4-4bb7-9e98-36fe5b77af11","type":"DataRange1d"},{"attributes":{"plot":{"id":"290be710-bc86-4eb6-bdfa-5d1601efbaa0","subtype":"Figure","type":"Plot"}},"id":"32228210-45a0-4dbc-a124-d80538a930f3","type":"PanTool"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1D91C0"},"height":{"units":"data","value":0.4},"line_color":{"value":"#1D91C0"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"cdd86298-4db0-43a6-9b10-c7ce56634e14","type":"Oval"},{"attributes":{"overlay":{"id":"4f2823f7-e6f4-450d-8462-a66d70ffe2a3","type":"BoxAnnotation"},"plot":{"id":"290be710-bc86-4eb6-bdfa-5d1601efbaa0","subtype":"Figure","type":"Plot"}},"id":"334070d2-f7dd-4848-a44a-0c75e28bea5b","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"290be710-bc86-4eb6-bdfa-5d1601efbaa0","subtype":"Figure","type":"Plot"}},"id":"fc214cb4-7267-4e4b-9ce5-e9709f6a9a36","type":"SaveTool"},{"attributes":{"callback":null},"id":"28649a65-a8cb-46aa-b0b9-729c0f3c52ea","type":"DataRange1d"},{"attributes":{"plot":{"id":"290be710-bc86-4eb6-bdfa-5d1601efbaa0","subtype":"Figure","type":"Plot"}},"id":"aa0be0e2-e376-45e7-a705-100de466d2e2","type":"ResetTool"},{"attributes":{},"id":"1ac6e909-892d-47f7-8d71-afc36bffc68e","type":"ToolEvents"},{"attributes":{},"id":"2f9a0a6d-93cc-48d4-9388-357cd5903e57","type":"BasicTickFormatter"},{"attributes":{},"id":"7f9dc895-2e2a-4ca0-8f49-0b0a7e878f15","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"7f9dc895-2e2a-4ca0-8f49-0b0a7e878f15","type":"BasicTickFormatter"},"plot":{"id":"290be710-bc86-4eb6-bdfa-5d1601efbaa0","subtype":"Figure","type":"Plot"},"ticker":{"id":"17e32440-0505-42ad-9d99-65038bccdc1a","type":"BasicTicker"}},"id":"cc11f80d-0bdf-4086-a09a-0e45adcf4d10","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.4},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"1a302caa-6f3e-48f3-98ff-83c7596f1ded","type":"Oval"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4f2823f7-e6f4-450d-8462-a66d70ffe2a3","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"24a1795e-fd51-46fc-9b21-eac2018b3cc6","type":"ColumnDataSource"},"glyph":{"id":"cdd86298-4db0-43a6-9b10-c7ce56634e14","type":"Oval"},"hover_glyph":null,"nonselection_glyph":{"id":"1a302caa-6f3e-48f3-98ff-83c7596f1ded","type":"Oval"},"selection_glyph":null},"id":"217ab577-e94b-4dcc-8416-41cb4d819101","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":null},"id":"3d1e40da-355a-4131-9d41-509367856270","type":"Title"},{"attributes":{},"id":"17e32440-0505-42ad-9d99-65038bccdc1a","type":"BasicTicker"},{"attributes":{"plot":{"id":"290be710-bc86-4eb6-bdfa-5d1601efbaa0","subtype":"Figure","type":"Plot"}},"id":"7a1eaf59-3e8e-4501-9671-509857871c5b","type":"HelpTool"},{"attributes":{"plot":{"id":"290be710-bc86-4eb6-bdfa-5d1601efbaa0","subtype":"Figure","type":"Plot"},"ticker":{"id":"2940ba86-39d7-4e5f-b911-b34bb32f74db","type":"BasicTicker"}},"id":"3612c875-5805-49df-b856-9f0ce81ce9df","type":"Grid"},{"attributes":{},"id":"2940ba86-39d7-4e5f-b911-b34bb32f74db","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"24a1795e-fd51-46fc-9b21-eac2018b3cc6","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"32228210-45a0-4dbc-a124-d80538a930f3","type":"PanTool"},{"id":"5cd19fa2-a8f0-41d3-9a5d-4f88a588fe6a","type":"WheelZoomTool"},{"id":"334070d2-f7dd-4848-a44a-0c75e28bea5b","type":"BoxZoomTool"},{"id":"fc214cb4-7267-4e4b-9ce5-e9709f6a9a36","type":"SaveTool"},{"id":"aa0be0e2-e376-45e7-a705-100de466d2e2","type":"ResetTool"},{"id":"7a1eaf59-3e8e-4501-9671-509857871c5b","type":"HelpTool"}]},"id":"310e3358-12d5-464b-bd58-cacf8ec96f43","type":"Toolbar"},{"attributes":{"below":[{"id":"2a4d9d0c-aeeb-4faf-bda7-9aa3a0dc8e7e","type":"LinearAxis"}],"left":[{"id":"cc11f80d-0bdf-4086-a09a-0e45adcf4d10","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2a4d9d0c-aeeb-4faf-bda7-9aa3a0dc8e7e","type":"LinearAxis"},{"id":"3612c875-5805-49df-b856-9f0ce81ce9df","type":"Grid"},{"id":"cc11f80d-0bdf-4086-a09a-0e45adcf4d10","type":"LinearAxis"},{"id":"154472dd-103d-4eb6-bf20-49cbb8d25c9a","type":"Grid"},{"id":"4f2823f7-e6f4-450d-8462-a66d70ffe2a3","type":"BoxAnnotation"},{"id":"217ab577-e94b-4dcc-8416-41cb4d819101","type":"GlyphRenderer"}],"title":{"id":"3d1e40da-355a-4131-9d41-509367856270","type":"Title"},"tool_events":{"id":"1ac6e909-892d-47f7-8d71-afc36bffc68e","type":"ToolEvents"},"toolbar":{"id":"310e3358-12d5-464b-bd58-cacf8ec96f43","type":"Toolbar"},"x_range":{"id":"28649a65-a8cb-46aa-b0b9-729c0f3c52ea","type":"DataRange1d"},"y_range":{"id":"1b17aa84-b5e4-4bb7-9e98-36fe5b77af11","type":"DataRange1d"}},"id":"290be710-bc86-4eb6-bdfa-5d1601efbaa0","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"290be710-bc86-4eb6-bdfa-5d1601efbaa0","subtype":"Figure","type":"Plot"},"ticker":{"id":"17e32440-0505-42ad-9d99-65038bccdc1a","type":"BasicTicker"}},"id":"154472dd-103d-4eb6-bf20-49cbb8d25c9a","type":"Grid"},{"attributes":{"formatter":{"id":"2f9a0a6d-93cc-48d4-9388-357cd5903e57","type":"BasicTickFormatter"},"plot":{"id":"290be710-bc86-4eb6-bdfa-5d1601efbaa0","subtype":"Figure","type":"Plot"},"ticker":{"id":"2940ba86-39d7-4e5f-b911-b34bb32f74db","type":"BasicTicker"}},"id":"2a4d9d0c-aeeb-4faf-bda7-9aa3a0dc8e7e","type":"LinearAxis"}],"root_ids":["290be710-bc86-4eb6-bdfa-5d1601efbaa0"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"c54ff870-5f73-4c7b-b4b8-ecf283de29ad","elementid":"fc6f90fe-a256-40c3-a43c-a19638b94551","modelid":"290be710-bc86-4eb6-bdfa-5d1601efbaa0"}];
                  
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