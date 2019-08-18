(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
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
      };var element = document.getElementById("39276948-13c5-4108-ab58-77a5c228c06d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '39276948-13c5-4108-ab58-77a5c228c06d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"d7276cfb-f970-4f93-9eed-ec5a5436e331":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a7abfe92-f93c-4fc5-aa8b-b0e6a65c97c5","type":"PanTool"},{"id":"0a090e8a-181d-4b25-b4a9-b364ee06219b","type":"WheelZoomTool"},{"id":"d617a899-64cc-4866-9261-e918befb2698","type":"BoxZoomTool"},{"id":"bba30354-2792-4aa8-a2e3-95036da21d7c","type":"SaveTool"},{"id":"60da7f85-96e2-4b95-99bb-2463edf92a83","type":"ResetTool"},{"id":"3b050762-4b3c-441f-a247-e6cbd95a8d65","type":"HelpTool"}]},"id":"1adba334-c664-47b7-9626-991152cea10d","type":"Toolbar"},{"attributes":{"plot":{"id":"19dafc3c-787c-4836-b64b-d4e0baf82c22","subtype":"Figure","type":"Plot"}},"id":"bba30354-2792-4aa8-a2e3-95036da21d7c","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"19dafc3c-787c-4836-b64b-d4e0baf82c22","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc8aee99-31b7-46f1-a483-152440fd1e07","type":"BasicTicker"}},"id":"5f1ee0d5-9abd-4b3e-a5df-e56245ff5807","type":"Grid"},{"attributes":{},"id":"72bf0589-3d8a-4ed2-87e6-00cc2a8efa9d","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"0bc58ec8-f743-4eb9-a5fa-3adc769e2f19","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"19dafc3c-787c-4836-b64b-d4e0baf82c22","subtype":"Figure","type":"Plot"}},"id":"a7abfe92-f93c-4fc5-aa8b-b0e6a65c97c5","type":"PanTool"},{"attributes":{},"id":"e7e32d8f-0346-4755-9c0f-b4e82e92d202","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"f91970c6-e096-4700-8c60-9052767a11c6","type":"DataRange1d"},{"attributes":{"callback":null},"id":"ea6eaea4-ea46-44e7-81c6-f76914a6728d","type":"DataRange1d"},{"attributes":{"formatter":{"id":"e7e32d8f-0346-4755-9c0f-b4e82e92d202","type":"BasicTickFormatter"},"plot":{"id":"19dafc3c-787c-4836-b64b-d4e0baf82c22","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc8aee99-31b7-46f1-a483-152440fd1e07","type":"BasicTicker"}},"id":"d9e5b398-d363-4bd5-9db3-79d41b7354b9","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2b65bd2e-f753-4b8e-ac00-628c97d1dad1","type":"BoxAnnotation"},{"attributes":{},"id":"fc8aee99-31b7-46f1-a483-152440fd1e07","type":"BasicTicker"},{"attributes":{"plot":{"id":"19dafc3c-787c-4836-b64b-d4e0baf82c22","subtype":"Figure","type":"Plot"}},"id":"60da7f85-96e2-4b95-99bb-2463edf92a83","type":"ResetTool"},{"attributes":{"data_source":{"id":"0bc58ec8-f743-4eb9-a5fa-3adc769e2f19","type":"ColumnDataSource"},"glyph":{"id":"ca2887d1-2cfb-4cc1-a5e0-320ad636794f","type":"Asterisk"},"hover_glyph":null,"nonselection_glyph":{"id":"f8d4b917-32f8-45d3-b5f7-92744da42e3d","type":"Asterisk"},"selection_glyph":null},"id":"9ef75daa-17e8-454e-ade4-25407ed91b80","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"2b65bd2e-f753-4b8e-ac00-628c97d1dad1","type":"BoxAnnotation"},"plot":{"id":"19dafc3c-787c-4836-b64b-d4e0baf82c22","subtype":"Figure","type":"Plot"}},"id":"d617a899-64cc-4866-9261-e918befb2698","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"f8d4b917-32f8-45d3-b5f7-92744da42e3d","type":"Asterisk"},{"attributes":{"formatter":{"id":"29ca7128-2ced-45b2-b0be-8fb109b832fe","type":"BasicTickFormatter"},"plot":{"id":"19dafc3c-787c-4836-b64b-d4e0baf82c22","subtype":"Figure","type":"Plot"},"ticker":{"id":"72bf0589-3d8a-4ed2-87e6-00cc2a8efa9d","type":"BasicTicker"}},"id":"38e09cc9-fefa-4adf-bdfd-9a4ffcaaf1eb","type":"LinearAxis"},{"attributes":{"plot":{"id":"19dafc3c-787c-4836-b64b-d4e0baf82c22","subtype":"Figure","type":"Plot"}},"id":"0a090e8a-181d-4b25-b4a9-b364ee06219b","type":"WheelZoomTool"},{"attributes":{},"id":"2b28bfa9-898e-40e8-bb4f-27fcaad7bf27","type":"ToolEvents"},{"attributes":{"plot":{"id":"19dafc3c-787c-4836-b64b-d4e0baf82c22","subtype":"Figure","type":"Plot"},"ticker":{"id":"72bf0589-3d8a-4ed2-87e6-00cc2a8efa9d","type":"BasicTicker"}},"id":"d3a9d382-f998-4e93-b5fc-82c7fba361fb","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"78888cca-ee09-4e97-b720-131af52dc79f","type":"Title"},{"attributes":{"fill_color":{"value":"#F0027F"},"line_color":{"value":"#F0027F"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"ca2887d1-2cfb-4cc1-a5e0-320ad636794f","type":"Asterisk"},{"attributes":{"plot":{"id":"19dafc3c-787c-4836-b64b-d4e0baf82c22","subtype":"Figure","type":"Plot"}},"id":"3b050762-4b3c-441f-a247-e6cbd95a8d65","type":"HelpTool"},{"attributes":{},"id":"29ca7128-2ced-45b2-b0be-8fb109b832fe","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"38e09cc9-fefa-4adf-bdfd-9a4ffcaaf1eb","type":"LinearAxis"}],"left":[{"id":"d9e5b398-d363-4bd5-9db3-79d41b7354b9","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"38e09cc9-fefa-4adf-bdfd-9a4ffcaaf1eb","type":"LinearAxis"},{"id":"d3a9d382-f998-4e93-b5fc-82c7fba361fb","type":"Grid"},{"id":"d9e5b398-d363-4bd5-9db3-79d41b7354b9","type":"LinearAxis"},{"id":"5f1ee0d5-9abd-4b3e-a5df-e56245ff5807","type":"Grid"},{"id":"2b65bd2e-f753-4b8e-ac00-628c97d1dad1","type":"BoxAnnotation"},{"id":"9ef75daa-17e8-454e-ade4-25407ed91b80","type":"GlyphRenderer"}],"title":{"id":"78888cca-ee09-4e97-b720-131af52dc79f","type":"Title"},"tool_events":{"id":"2b28bfa9-898e-40e8-bb4f-27fcaad7bf27","type":"ToolEvents"},"toolbar":{"id":"1adba334-c664-47b7-9626-991152cea10d","type":"Toolbar"},"x_range":{"id":"f91970c6-e096-4700-8c60-9052767a11c6","type":"DataRange1d"},"y_range":{"id":"ea6eaea4-ea46-44e7-81c6-f76914a6728d","type":"DataRange1d"}},"id":"19dafc3c-787c-4836-b64b-d4e0baf82c22","subtype":"Figure","type":"Plot"}],"root_ids":["19dafc3c-787c-4836-b64b-d4e0baf82c22"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"d7276cfb-f970-4f93-9eed-ec5a5436e331","elementid":"39276948-13c5-4108-ab58-77a5c228c06d","modelid":"19dafc3c-787c-4836-b64b-d4e0baf82c22"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
