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
      };var element = document.getElementById("dbe227bb-fec7-4662-9f1e-e068b204e0fe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dbe227bb-fec7-4662-9f1e-e068b204e0fe' but no matching script tag was found. ")
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
                  var docs_json = {"b70b3a57-6972-4684-9e80-5340a1f3f4ec":{"roots":{"references":[{"attributes":{"plot":{"id":"9fe2b4a8-dcd3-4943-8021-195db9a95666","subtype":"Figure","type":"Plot"},"ticker":{"id":"64c9b932-6399-4d5c-a1ad-9fd73ca1113b","type":"BasicTicker"}},"id":"655b9aec-8c3d-4301-aa2b-13ddcfb04f20","type":"Grid"},{"attributes":{"overlay":{"id":"37d6cb60-4261-4bf4-9529-b1473f4b3eaf","type":"BoxAnnotation"},"plot":{"id":"9fe2b4a8-dcd3-4943-8021-195db9a95666","subtype":"Figure","type":"Plot"}},"id":"ef378f23-4d17-4acf-988c-09100af00b42","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"9fe2b4a8-dcd3-4943-8021-195db9a95666","subtype":"Figure","type":"Plot"},"ticker":{"id":"f77e6974-7f84-400c-a4a9-fe1b662f1ad8","type":"BasicTicker"}},"id":"91d11706-a307-4627-855d-eb6a2ec1bbc0","type":"Grid"},{"attributes":{},"id":"8364cba4-6df1-4df0-9355-4c104f1a2bd1","type":"ToolEvents"},{"attributes":{"plot":null,"text":null},"id":"56be6f42-f293-49ca-a0e3-d08add2d2fee","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"6598bc48-2811-416e-8c3b-23f7fc1c3719","type":"Ellipse"},{"attributes":{"formatter":{"id":"5417d558-1dec-4b90-816d-897077362b65","type":"BasicTickFormatter"},"plot":{"id":"9fe2b4a8-dcd3-4943-8021-195db9a95666","subtype":"Figure","type":"Plot"},"ticker":{"id":"64c9b932-6399-4d5c-a1ad-9fd73ca1113b","type":"BasicTicker"}},"id":"e40683c6-c3da-4004-8253-10994d08bca6","type":"LinearAxis"},{"attributes":{"plot":{"id":"9fe2b4a8-dcd3-4943-8021-195db9a95666","subtype":"Figure","type":"Plot"}},"id":"a2a0b7c7-39c4-4da2-a5ee-7438e383f7eb","type":"HelpTool"},{"attributes":{"below":[{"id":"e40683c6-c3da-4004-8253-10994d08bca6","type":"LinearAxis"}],"left":[{"id":"0d1230b3-97eb-419c-972c-bf190cd3b21f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e40683c6-c3da-4004-8253-10994d08bca6","type":"LinearAxis"},{"id":"655b9aec-8c3d-4301-aa2b-13ddcfb04f20","type":"Grid"},{"id":"0d1230b3-97eb-419c-972c-bf190cd3b21f","type":"LinearAxis"},{"id":"91d11706-a307-4627-855d-eb6a2ec1bbc0","type":"Grid"},{"id":"37d6cb60-4261-4bf4-9529-b1473f4b3eaf","type":"BoxAnnotation"},{"id":"d51bd49b-b7e6-4505-b9e4-a5600629859e","type":"GlyphRenderer"}],"title":{"id":"56be6f42-f293-49ca-a0e3-d08add2d2fee","type":"Title"},"tool_events":{"id":"8364cba4-6df1-4df0-9355-4c104f1a2bd1","type":"ToolEvents"},"toolbar":{"id":"693a4559-cccf-462e-9819-187ba604a7cf","type":"Toolbar"},"x_range":{"id":"ca6221ab-3a5d-4f48-b225-c2ce504199b0","type":"DataRange1d"},"y_range":{"id":"0dc8729d-b93c-4b53-897b-d2373052e8a2","type":"DataRange1d"}},"id":"9fe2b4a8-dcd3-4943-8021-195db9a95666","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"ef12c460-f806-4c21-868e-b19bbd15de40","type":"ColumnDataSource"},"glyph":{"id":"5586c307-9a9c-46f6-b36a-167d7fc67465","type":"Ellipse"},"hover_glyph":null,"nonselection_glyph":{"id":"6598bc48-2811-416e-8c3b-23f7fc1c3719","type":"Ellipse"},"selection_glyph":null},"id":"d51bd49b-b7e6-4505-b9e4-a5600629859e","type":"GlyphRenderer"},{"attributes":{},"id":"f77e6974-7f84-400c-a4a9-fe1b662f1ad8","type":"BasicTicker"},{"attributes":{},"id":"1293b92b-f752-40c9-bd8d-c86a8d39cab0","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1293b92b-f752-40c9-bd8d-c86a8d39cab0","type":"BasicTickFormatter"},"plot":{"id":"9fe2b4a8-dcd3-4943-8021-195db9a95666","subtype":"Figure","type":"Plot"},"ticker":{"id":"f77e6974-7f84-400c-a4a9-fe1b662f1ad8","type":"BasicTicker"}},"id":"0d1230b3-97eb-419c-972c-bf190cd3b21f","type":"LinearAxis"},{"attributes":{"plot":{"id":"9fe2b4a8-dcd3-4943-8021-195db9a95666","subtype":"Figure","type":"Plot"}},"id":"7659c7d5-cb34-45f5-a318-da3abe6ffe79","type":"WheelZoomTool"},{"attributes":{},"id":"64c9b932-6399-4d5c-a1ad-9fd73ca1113b","type":"BasicTicker"},{"attributes":{"callback":null},"id":"0dc8729d-b93c-4b53-897b-d2373052e8a2","type":"DataRange1d"},{"attributes":{"callback":null},"id":"ca6221ab-3a5d-4f48-b225-c2ce504199b0","type":"DataRange1d"},{"attributes":{},"id":"5417d558-1dec-4b90-816d-897077362b65","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"9fe2b4a8-dcd3-4943-8021-195db9a95666","subtype":"Figure","type":"Plot"}},"id":"51ee415b-0129-4505-946d-9e0f8995d4ab","type":"PanTool"},{"attributes":{"plot":{"id":"9fe2b4a8-dcd3-4943-8021-195db9a95666","subtype":"Figure","type":"Plot"}},"id":"9f948ee2-6266-482f-88ca-bbd56f9bbec6","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"ef12c460-f806-4c21-868e-b19bbd15de40","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"37d6cb60-4261-4bf4-9529-b1473f4b3eaf","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":null},"height":{"units":"data","value":20},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"5586c307-9a9c-46f6-b36a-167d7fc67465","type":"Ellipse"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"51ee415b-0129-4505-946d-9e0f8995d4ab","type":"PanTool"},{"id":"7659c7d5-cb34-45f5-a318-da3abe6ffe79","type":"WheelZoomTool"},{"id":"ef378f23-4d17-4acf-988c-09100af00b42","type":"BoxZoomTool"},{"id":"2ca9e292-0453-43b1-bcd8-2596266a50f1","type":"SaveTool"},{"id":"9f948ee2-6266-482f-88ca-bbd56f9bbec6","type":"ResetTool"},{"id":"a2a0b7c7-39c4-4da2-a5ee-7438e383f7eb","type":"HelpTool"}]},"id":"693a4559-cccf-462e-9819-187ba604a7cf","type":"Toolbar"},{"attributes":{"plot":{"id":"9fe2b4a8-dcd3-4943-8021-195db9a95666","subtype":"Figure","type":"Plot"}},"id":"2ca9e292-0453-43b1-bcd8-2596266a50f1","type":"SaveTool"}],"root_ids":["9fe2b4a8-dcd3-4943-8021-195db9a95666"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"b70b3a57-6972-4684-9e80-5340a1f3f4ec","elementid":"dbe227bb-fec7-4662-9f1e-e068b204e0fe","modelid":"9fe2b4a8-dcd3-4943-8021-195db9a95666"}];
                  
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