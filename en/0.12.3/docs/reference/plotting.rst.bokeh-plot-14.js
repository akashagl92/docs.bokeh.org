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
      };var element = document.getElementById("8180b1b5-ca1e-4934-99ca-34c92457b830");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8180b1b5-ca1e-4934-99ca-34c92457b830' but no matching script tag was found. ")
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
                  var docs_json = {"781bacba-54f8-4a2f-b840-330b8e1dbee9":{"roots":{"references":[{"attributes":{"plot":{"id":"fdbd6fde-778d-4e6e-ace9-b545a064e9ee","subtype":"Figure","type":"Plot"}},"id":"c2d1fd7f-d2f9-4807-a963-1acc51416e32","type":"SaveTool"},{"attributes":{"data_source":{"id":"4bd63945-b6fd-4f89-953f-87958429eb7f","type":"ColumnDataSource"},"glyph":{"id":"592bb1b1-8e28-4623-98af-e61c2f3811d7","type":"Patch"},"hover_glyph":null,"nonselection_glyph":{"id":"4d61db90-d702-4cfe-97b6-c2fa3744c4eb","type":"Patch"},"selection_glyph":null},"id":"41ea1623-ddb6-400d-a034-2ae09c158472","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,2],"y":[6,7,2,2]}},"id":"4bd63945-b6fd-4f89-953f-87958429eb7f","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"35a312fe-fa15-401b-9706-888946c957a2","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4d61db90-d702-4cfe-97b6-c2fa3744c4eb","type":"Patch"},{"attributes":{"callback":null},"id":"2e29e081-46dc-48ad-be01-002f7e63e83a","type":"DataRange1d"},{"attributes":{},"id":"c1df7aa7-f5b6-44a3-8d1c-d8ebfbc8383f","type":"BasicTicker"},{"attributes":{"plot":{"id":"fdbd6fde-778d-4e6e-ace9-b545a064e9ee","subtype":"Figure","type":"Plot"}},"id":"4af091d3-e888-4f5f-bda6-90907f1a49b4","type":"PanTool"},{"attributes":{"plot":{"id":"fdbd6fde-778d-4e6e-ace9-b545a064e9ee","subtype":"Figure","type":"Plot"}},"id":"658b7a1e-c069-4b58-99cb-bed7b61f9aa3","type":"HelpTool"},{"attributes":{"plot":{"id":"fdbd6fde-778d-4e6e-ace9-b545a064e9ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"1adcab68-5cb9-4d3c-9ef6-39049f1f8c9d","type":"BasicTicker"}},"id":"d8db15b8-4d30-4ba5-9a3b-33457da54208","type":"Grid"},{"attributes":{},"id":"b683a5d8-a088-46fd-afdd-6cc87940867f","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"e11a2c1d-aeb2-49cb-81de-c15ced336c56","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"69b21e79-f172-49f8-b970-3ba69bc49e1c","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"fdbd6fde-778d-4e6e-ace9-b545a064e9ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"c1df7aa7-f5b6-44a3-8d1c-d8ebfbc8383f","type":"BasicTicker"}},"id":"dacba48f-529d-472f-9497-5698c79c4e6e","type":"Grid"},{"attributes":{"overlay":{"id":"69b21e79-f172-49f8-b970-3ba69bc49e1c","type":"BoxAnnotation"},"plot":{"id":"fdbd6fde-778d-4e6e-ace9-b545a064e9ee","subtype":"Figure","type":"Plot"}},"id":"f326ec80-b804-4148-831f-c12d0541a8be","type":"BoxZoomTool"},{"attributes":{},"id":"1adcab68-5cb9-4d3c-9ef6-39049f1f8c9d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"c7691331-8c43-45c7-8d50-304cd44ff791","type":"BasicTickFormatter"},"plot":{"id":"fdbd6fde-778d-4e6e-ace9-b545a064e9ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"c1df7aa7-f5b6-44a3-8d1c-d8ebfbc8383f","type":"BasicTicker"}},"id":"6d847533-7901-4b54-86c5-62180921b6ab","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4af091d3-e888-4f5f-bda6-90907f1a49b4","type":"PanTool"},{"id":"2bcef080-6af9-4c6c-8707-1a204198c635","type":"WheelZoomTool"},{"id":"f326ec80-b804-4148-831f-c12d0541a8be","type":"BoxZoomTool"},{"id":"c2d1fd7f-d2f9-4807-a963-1acc51416e32","type":"SaveTool"},{"id":"0778c14f-9a2f-41b7-ac9c-a78c4dd4547c","type":"ResetTool"},{"id":"658b7a1e-c069-4b58-99cb-bed7b61f9aa3","type":"HelpTool"}]},"id":"bd66e7da-09e1-4f6b-8d74-1511e1b4d451","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#99d8c9"},"line_color":{"value":"#99d8c9"},"x":{"field":"x"},"y":{"field":"y"}},"id":"592bb1b1-8e28-4623-98af-e61c2f3811d7","type":"Patch"},{"attributes":{"formatter":{"id":"b683a5d8-a088-46fd-afdd-6cc87940867f","type":"BasicTickFormatter"},"plot":{"id":"fdbd6fde-778d-4e6e-ace9-b545a064e9ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"1adcab68-5cb9-4d3c-9ef6-39049f1f8c9d","type":"BasicTicker"}},"id":"063cf338-a07f-4fb0-9efa-4020b2d7368f","type":"LinearAxis"},{"attributes":{"below":[{"id":"063cf338-a07f-4fb0-9efa-4020b2d7368f","type":"LinearAxis"}],"left":[{"id":"6d847533-7901-4b54-86c5-62180921b6ab","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"063cf338-a07f-4fb0-9efa-4020b2d7368f","type":"LinearAxis"},{"id":"d8db15b8-4d30-4ba5-9a3b-33457da54208","type":"Grid"},{"id":"6d847533-7901-4b54-86c5-62180921b6ab","type":"LinearAxis"},{"id":"dacba48f-529d-472f-9497-5698c79c4e6e","type":"Grid"},{"id":"69b21e79-f172-49f8-b970-3ba69bc49e1c","type":"BoxAnnotation"},{"id":"41ea1623-ddb6-400d-a034-2ae09c158472","type":"GlyphRenderer"}],"title":{"id":"e11a2c1d-aeb2-49cb-81de-c15ced336c56","type":"Title"},"tool_events":{"id":"43402e85-e85c-47f9-b2e6-f3f1d9b309e5","type":"ToolEvents"},"toolbar":{"id":"bd66e7da-09e1-4f6b-8d74-1511e1b4d451","type":"Toolbar"},"x_range":{"id":"2e29e081-46dc-48ad-be01-002f7e63e83a","type":"DataRange1d"},"y_range":{"id":"35a312fe-fa15-401b-9706-888946c957a2","type":"DataRange1d"}},"id":"fdbd6fde-778d-4e6e-ace9-b545a064e9ee","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"fdbd6fde-778d-4e6e-ace9-b545a064e9ee","subtype":"Figure","type":"Plot"}},"id":"0778c14f-9a2f-41b7-ac9c-a78c4dd4547c","type":"ResetTool"},{"attributes":{"plot":{"id":"fdbd6fde-778d-4e6e-ace9-b545a064e9ee","subtype":"Figure","type":"Plot"}},"id":"2bcef080-6af9-4c6c-8707-1a204198c635","type":"WheelZoomTool"},{"attributes":{},"id":"43402e85-e85c-47f9-b2e6-f3f1d9b309e5","type":"ToolEvents"},{"attributes":{},"id":"c7691331-8c43-45c7-8d50-304cd44ff791","type":"BasicTickFormatter"}],"root_ids":["fdbd6fde-778d-4e6e-ace9-b545a064e9ee"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"781bacba-54f8-4a2f-b840-330b8e1dbee9","elementid":"8180b1b5-ca1e-4934-99ca-34c92457b830","modelid":"fdbd6fde-778d-4e6e-ace9-b545a064e9ee"}];
                  
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