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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("80978f4b-7b86-4795-9e20-b0583c2ca6e6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '80978f4b-7b86-4795-9e20-b0583c2ca6e6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"dcdc3f44-0ba6-4e78-8f0f-d1420e6aecd7":{"roots":{"references":[{"attributes":{"formatter":{"id":"b5149329-7407-4670-80aa-02f64bfaca12","type":"BasicTickFormatter"},"plot":{"id":"8ca3dea5-f4de-49c2-88ae-af7408e76d4c","subtype":"Figure","type":"Plot"},"ticker":{"id":"c8d7c6ca-b69a-4e43-8ac1-c8f90bf7d734","type":"BasicTicker"}},"id":"a95c4322-f232-46a0-8684-d4763f805719","type":"LinearAxis"},{"attributes":{"plot":{"id":"f4112faa-1d7b-435f-bad3-211ba8a2d23e","subtype":"Figure","type":"Plot"}},"id":"358a6def-b8f9-4df8-aa51-b37b9ff404b6","type":"SaveTool"},{"attributes":{"plot":{"id":"8ca3dea5-f4de-49c2-88ae-af7408e76d4c","subtype":"Figure","type":"Plot"}},"id":"2bef96df-b2c1-4087-8985-bfe90cc6918e","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"854607ef-6b78-4ac6-bba5-22db3eee9fe4","type":"BasicTickFormatter"},"plot":{"id":"f4112faa-1d7b-435f-bad3-211ba8a2d23e","subtype":"Figure","type":"Plot"},"ticker":{"id":"185b1a9f-b1bb-4c08-abb3-b3255d4e064c","type":"BasicTicker"}},"id":"281f78e2-71b1-4e81-bb05-18c6d94c11e3","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"1b17ed24-a39c-433e-9f62-b6f60f5f1223","subtype":"Figure","type":"Plot"},"ticker":{"id":"b722c359-1a88-4e8c-ac05-183064939600","type":"BasicTicker"}},"id":"90ebf134-07ac-4aec-984c-c99f7fc11fbe","type":"Grid"},{"attributes":{},"id":"c8d7c6ca-b69a-4e43-8ac1-c8f90bf7d734","type":"BasicTicker"},{"attributes":{},"id":"b5149329-7407-4670-80aa-02f64bfaca12","type":"BasicTickFormatter"},{"attributes":{},"id":"ce3cc31a-e7f4-4656-bb62-0f66ae28d422","type":"LinearScale"},{"attributes":{"plot":{"id":"f4112faa-1d7b-435f-bad3-211ba8a2d23e","subtype":"Figure","type":"Plot"},"ticker":{"id":"185b1a9f-b1bb-4c08-abb3-b3255d4e064c","type":"BasicTicker"}},"id":"17cb1235-529f-4b98-ab4f-d7e81af573eb","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"059a9181-01a4-4619-a50c-7867271524a5","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"799e33fe-31f3-4674-a92e-0ff7e0402fde","type":"Triangle"},{"attributes":{},"id":"185b1a9f-b1bb-4c08-abb3-b3255d4e064c","type":"BasicTicker"},{"attributes":{"callback":null},"id":"b691c755-4c75-4754-bfa6-ee8c9be58ee8","type":"DataRange1d"},{"attributes":{"overlay":{"id":"f2124a3f-b1f6-49ec-9f7d-7207cfaf047f","type":"BoxAnnotation"},"plot":{"id":"f4112faa-1d7b-435f-bad3-211ba8a2d23e","subtype":"Figure","type":"Plot"}},"id":"32cda7d8-2d14-409d-8766-852d504639b0","type":"BoxZoomTool"},{"attributes":{},"id":"237d4fbd-a40c-4b93-9f8a-9493dd6c4994","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"fe4fd245-a9d3-49d0-9ad9-8cd233024a4d","type":"BasicTickFormatter"},"plot":{"id":"1b17ed24-a39c-433e-9f62-b6f60f5f1223","subtype":"Figure","type":"Plot"},"ticker":{"id":"802533fa-d71c-46a9-ac6d-79f129b06b47","type":"BasicTicker"}},"id":"80e75f7e-21b6-4d65-b756-441d3416870c","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"caeb99cf-427b-49d5-b977-558473e2f572","type":"Square"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a2a3d113-0266-4ed5-a3d2-a9d1d3b2e972","type":"Circle"},{"attributes":{},"id":"2e6ec363-bffa-4e52-846b-dbee7c194f77","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"f4112faa-1d7b-435f-bad3-211ba8a2d23e","subtype":"Figure","type":"Plot"},"ticker":{"id":"18f7c207-5bc9-4e9a-8b3f-e7d49fbd169b","type":"BasicTicker"}},"id":"033434cd-01a9-429d-9093-3484684fad68","type":"Grid"},{"attributes":{"plot":{"id":"8ca3dea5-f4de-49c2-88ae-af7408e76d4c","subtype":"Figure","type":"Plot"}},"id":"44cd3d14-d775-4594-9110-d1ee7c486f45","type":"ResetTool"},{"attributes":{"formatter":{"id":"3b0c9425-a41d-4e26-bd2d-a7266184964b","type":"BasicTickFormatter"},"plot":{"id":"1b17ed24-a39c-433e-9f62-b6f60f5f1223","subtype":"Figure","type":"Plot"},"ticker":{"id":"b722c359-1a88-4e8c-ac05-183064939600","type":"BasicTicker"}},"id":"33c4677e-050e-4b6a-ab5a-2756b8def3cc","type":"LinearAxis"},{"attributes":{"data_source":{"id":"d25f7a25-fb29-40f7-a53d-942551fabcba","type":"ColumnDataSource"},"glyph":{"id":"caeb99cf-427b-49d5-b977-558473e2f572","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6d36adbb-1140-496c-95fc-11ec9c20f489","type":"Square"},"selection_glyph":null},"id":"c8d3c758-3649-4a82-828d-f7ad4885d428","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"a623107b-9a9c-46aa-ac50-80e3579b83c2","type":"Row"}]},"id":"8d959e87-3a8c-491c-a816-69f95bd3bf45","type":"Column"},{"attributes":{"callback":null},"id":"354f579f-07ec-41ea-9a1f-2081f6b464a7","type":"DataRange1d"},{"attributes":{"callback":null},"id":"cb3ca46f-c021-486a-b06e-fd0d5d5d6c31","type":"DataRange1d"},{"attributes":{},"id":"b3c644f2-91ea-49ad-b725-ce2598fa3667","type":"LinearScale"},{"attributes":{},"id":"18f7c207-5bc9-4e9a-8b3f-e7d49fbd169b","type":"BasicTicker"},{"attributes":{"plot":{"id":"1b17ed24-a39c-433e-9f62-b6f60f5f1223","subtype":"Figure","type":"Plot"}},"id":"7551b4e5-b271-450e-9e55-a6cb821be0f1","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9e2ac97f-5c20-4f8b-ae46-18dbf557fa24","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"d25f7a25-fb29-40f7-a53d-942551fabcba","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"8ca3dea5-f4de-49c2-88ae-af7408e76d4c","subtype":"Figure","type":"Plot"}},"id":"bfa6250f-fab7-4877-8b2f-41f50fb4b8e2","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6d36adbb-1140-496c-95fc-11ec9c20f489","type":"Square"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bbb2ae18-6900-44b9-8aae-69e25409147f","type":"PanTool"},{"id":"625506fa-1d6e-4cc1-bfd4-b6c6435ba931","type":"WheelZoomTool"},{"id":"32cda7d8-2d14-409d-8766-852d504639b0","type":"BoxZoomTool"},{"id":"358a6def-b8f9-4df8-aa51-b37b9ff404b6","type":"SaveTool"},{"id":"123037c6-9d48-4c2b-82dc-2a294d25b205","type":"ResetTool"},{"id":"12b0dd3c-670d-47df-b497-fa30623869df","type":"HelpTool"}]},"id":"d3452ae4-8e89-4909-926c-60b7a06ba514","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"67589f7a-78ec-4a9c-8f2d-38fec592a0a3","type":"PanTool"},{"id":"9840ebae-6f50-49c7-a4ad-9838ddc5e897","type":"WheelZoomTool"},{"id":"f68146c0-63b6-465d-bc28-94c7e6e30881","type":"BoxZoomTool"},{"id":"b6e5d0c8-a888-4fa7-b318-54f74d01dda1","type":"SaveTool"},{"id":"7551b4e5-b271-450e-9e55-a6cb821be0f1","type":"ResetTool"},{"id":"1773090d-dcae-47bb-8bb2-9bcb467f7492","type":"HelpTool"}]},"id":"72346c57-e27c-4033-b0c7-80956c5851de","type":"Toolbar"},{"attributes":{"plot":{"id":"f4112faa-1d7b-435f-bad3-211ba8a2d23e","subtype":"Figure","type":"Plot"}},"id":"12b0dd3c-670d-47df-b497-fa30623869df","type":"HelpTool"},{"attributes":{"overlay":{"id":"93e1eab2-2666-446c-8ce1-78d2d400a62e","type":"BoxAnnotation"},"plot":{"id":"1b17ed24-a39c-433e-9f62-b6f60f5f1223","subtype":"Figure","type":"Plot"}},"id":"f68146c0-63b6-465d-bc28-94c7e6e30881","type":"BoxZoomTool"},{"attributes":{},"id":"802533fa-d71c-46a9-ac6d-79f129b06b47","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"a59efc0e-f998-4995-b243-eadc5896eadd","type":"ColumnDataSource"},{"attributes":{},"id":"b722c359-1a88-4e8c-ac05-183064939600","type":"BasicTicker"},{"attributes":{"below":[{"id":"e4ce0511-1c06-4c7a-b8a3-9db02a02d11e","type":"LinearAxis"}],"left":[{"id":"a95c4322-f232-46a0-8684-d4763f805719","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"e4ce0511-1c06-4c7a-b8a3-9db02a02d11e","type":"LinearAxis"},{"id":"37e09208-2032-4076-aebe-352001087cb4","type":"Grid"},{"id":"a95c4322-f232-46a0-8684-d4763f805719","type":"LinearAxis"},{"id":"11ba6174-00fd-4ee3-8639-97b11265dcac","type":"Grid"},{"id":"9e2ac97f-5c20-4f8b-ae46-18dbf557fa24","type":"BoxAnnotation"},{"id":"c8d3c758-3649-4a82-828d-f7ad4885d428","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"18751cb6-5e11-4ba1-b9a9-1c25cd443b60","type":"ToolEvents"},"toolbar":{"id":"32c0785d-c06f-48c5-a097-66d1605afad8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"354f579f-07ec-41ea-9a1f-2081f6b464a7","type":"DataRange1d"},"x_scale":{"id":"b3c644f2-91ea-49ad-b725-ce2598fa3667","type":"LinearScale"},"y_range":{"id":"b691c755-4c75-4754-bfa6-ee8c9be58ee8","type":"DataRange1d"},"y_scale":{"id":"ce3cc31a-e7f4-4656-bb62-0f66ae28d422","type":"LinearScale"}},"id":"8ca3dea5-f4de-49c2-88ae-af7408e76d4c","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"8ca3dea5-f4de-49c2-88ae-af7408e76d4c","subtype":"Figure","type":"Plot"}},"id":"52769dac-24ec-4d13-b9c3-ed2ab4c1bfd0","type":"PanTool"},{"attributes":{"formatter":{"id":"237d4fbd-a40c-4b93-9f8a-9493dd6c4994","type":"BasicTickFormatter"},"plot":{"id":"8ca3dea5-f4de-49c2-88ae-af7408e76d4c","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e6ec363-bffa-4e52-846b-dbee7c194f77","type":"BasicTicker"}},"id":"e4ce0511-1c06-4c7a-b8a3-9db02a02d11e","type":"LinearAxis"},{"attributes":{},"id":"fe4fd245-a9d3-49d0-9ad9-8cd233024a4d","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"1b17ed24-a39c-433e-9f62-b6f60f5f1223","subtype":"Figure","type":"Plot"},{"id":"f4112faa-1d7b-435f-bad3-211ba8a2d23e","subtype":"Figure","type":"Plot"},{"id":"8ca3dea5-f4de-49c2-88ae-af7408e76d4c","subtype":"Figure","type":"Plot"}]},"id":"a623107b-9a9c-46aa-ac50-80e3579b83c2","type":"Row"},{"attributes":{"formatter":{"id":"675561fd-d7da-4cee-836a-c3c4701ee948","type":"BasicTickFormatter"},"plot":{"id":"f4112faa-1d7b-435f-bad3-211ba8a2d23e","subtype":"Figure","type":"Plot"},"ticker":{"id":"18f7c207-5bc9-4e9a-8b3f-e7d49fbd169b","type":"BasicTicker"}},"id":"1376a5cd-4ee9-4789-b9cc-0fa9b446afc7","type":"LinearAxis"},{"attributes":{"plot":{"id":"1b17ed24-a39c-433e-9f62-b6f60f5f1223","subtype":"Figure","type":"Plot"}},"id":"9840ebae-6f50-49c7-a4ad-9838ddc5e897","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"c2e29610-5dd1-4fcd-b613-d83ca7cb28a5","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0bd1b923-a435-4c1b-b01e-cdf1c570e0f1","type":"Triangle"},{"attributes":{},"id":"675561fd-d7da-4cee-836a-c3c4701ee948","type":"BasicTickFormatter"},{"attributes":{},"id":"cce6517f-0a7a-43bf-8a3a-53a160f13d40","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"8ca3dea5-f4de-49c2-88ae-af7408e76d4c","subtype":"Figure","type":"Plot"},"ticker":{"id":"c8d7c6ca-b69a-4e43-8ac1-c8f90bf7d734","type":"BasicTicker"}},"id":"11ba6174-00fd-4ee3-8639-97b11265dcac","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93e1eab2-2666-446c-8ce1-78d2d400a62e","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"1b17ed24-a39c-433e-9f62-b6f60f5f1223","subtype":"Figure","type":"Plot"}},"id":"b6e5d0c8-a888-4fa7-b318-54f74d01dda1","type":"SaveTool"},{"attributes":{},"id":"3b0c9425-a41d-4e26-bd2d-a7266184964b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"1b17ed24-a39c-433e-9f62-b6f60f5f1223","subtype":"Figure","type":"Plot"}},"id":"67589f7a-78ec-4a9c-8f2d-38fec592a0a3","type":"PanTool"},{"attributes":{"below":[{"id":"80e75f7e-21b6-4d65-b756-441d3416870c","type":"LinearAxis"}],"left":[{"id":"33c4677e-050e-4b6a-ab5a-2756b8def3cc","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"80e75f7e-21b6-4d65-b756-441d3416870c","type":"LinearAxis"},{"id":"1e88ff17-63af-47db-bcc4-ceee53dc2d34","type":"Grid"},{"id":"33c4677e-050e-4b6a-ab5a-2756b8def3cc","type":"LinearAxis"},{"id":"90ebf134-07ac-4aec-984c-c99f7fc11fbe","type":"Grid"},{"id":"93e1eab2-2666-446c-8ce1-78d2d400a62e","type":"BoxAnnotation"},{"id":"c6a34c68-a81c-4534-8b3f-388312356a92","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"03856144-6879-4a49-a07f-a4646f295f2a","type":"ToolEvents"},"toolbar":{"id":"72346c57-e27c-4033-b0c7-80956c5851de","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"354f579f-07ec-41ea-9a1f-2081f6b464a7","type":"DataRange1d"},"x_scale":{"id":"ac4bf0dc-cd19-42d9-954c-c7a7f6da3de4","type":"LinearScale"},"y_range":{"id":"cb3ca46f-c021-486a-b06e-fd0d5d5d6c31","type":"DataRange1d"},"y_scale":{"id":"cce6517f-0a7a-43bf-8a3a-53a160f13d40","type":"LinearScale"}},"id":"1b17ed24-a39c-433e-9f62-b6f60f5f1223","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"1b17ed24-a39c-433e-9f62-b6f60f5f1223","subtype":"Figure","type":"Plot"}},"id":"1773090d-dcae-47bb-8bb2-9bcb467f7492","type":"HelpTool"},{"attributes":{"overlay":{"id":"9e2ac97f-5c20-4f8b-ae46-18dbf557fa24","type":"BoxAnnotation"},"plot":{"id":"8ca3dea5-f4de-49c2-88ae-af7408e76d4c","subtype":"Figure","type":"Plot"}},"id":"2a09fc18-cf75-4ba6-8774-39a586e21a16","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"f4112faa-1d7b-435f-bad3-211ba8a2d23e","subtype":"Figure","type":"Plot"}},"id":"625506fa-1d6e-4cc1-bfd4-b6c6435ba931","type":"WheelZoomTool"},{"attributes":{},"id":"5fd22740-264d-42cb-905e-e7e536409a02","type":"LinearScale"},{"attributes":{},"id":"64eda869-a5ca-49c0-8946-1f65e28affce","type":"ToolEvents"},{"attributes":{"plot":{"id":"1b17ed24-a39c-433e-9f62-b6f60f5f1223","subtype":"Figure","type":"Plot"},"ticker":{"id":"802533fa-d71c-46a9-ac6d-79f129b06b47","type":"BasicTicker"}},"id":"1e88ff17-63af-47db-bcc4-ceee53dc2d34","type":"Grid"},{"attributes":{"plot":{"id":"f4112faa-1d7b-435f-bad3-211ba8a2d23e","subtype":"Figure","type":"Plot"}},"id":"123037c6-9d48-4c2b-82dc-2a294d25b205","type":"ResetTool"},{"attributes":{"data_source":{"id":"a59efc0e-f998-4995-b243-eadc5896eadd","type":"ColumnDataSource"},"glyph":{"id":"a2a3d113-0266-4ed5-a3d2-a9d1d3b2e972","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"059a9181-01a4-4619-a50c-7867271524a5","type":"Circle"},"selection_glyph":null},"id":"c6a34c68-a81c-4534-8b3f-388312356a92","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"8ca3dea5-f4de-49c2-88ae-af7408e76d4c","subtype":"Figure","type":"Plot"}},"id":"c187d663-1078-4a3b-8877-68b660dc2dc8","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"52769dac-24ec-4d13-b9c3-ed2ab4c1bfd0","type":"PanTool"},{"id":"2bef96df-b2c1-4087-8985-bfe90cc6918e","type":"WheelZoomTool"},{"id":"2a09fc18-cf75-4ba6-8774-39a586e21a16","type":"BoxZoomTool"},{"id":"c187d663-1078-4a3b-8877-68b660dc2dc8","type":"SaveTool"},{"id":"44cd3d14-d775-4594-9110-d1ee7c486f45","type":"ResetTool"},{"id":"bfa6250f-fab7-4877-8b2f-41f50fb4b8e2","type":"HelpTool"}]},"id":"32c0785d-c06f-48c5-a097-66d1605afad8","type":"Toolbar"},{"attributes":{},"id":"ac4bf0dc-cd19-42d9-954c-c7a7f6da3de4","type":"LinearScale"},{"attributes":{},"id":"167d40ad-a5b0-42ec-b672-4e4434e0c75b","type":"LinearScale"},{"attributes":{},"id":"18751cb6-5e11-4ba1-b9a9-1c25cd443b60","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f2124a3f-b1f6-49ec-9f7d-7207cfaf047f","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"8ca3dea5-f4de-49c2-88ae-af7408e76d4c","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e6ec363-bffa-4e52-846b-dbee7c194f77","type":"BasicTicker"}},"id":"37e09208-2032-4076-aebe-352001087cb4","type":"Grid"},{"attributes":{"below":[{"id":"281f78e2-71b1-4e81-bb05-18c6d94c11e3","type":"LinearAxis"}],"left":[{"id":"1376a5cd-4ee9-4789-b9cc-0fa9b446afc7","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"281f78e2-71b1-4e81-bb05-18c6d94c11e3","type":"LinearAxis"},{"id":"17cb1235-529f-4b98-ab4f-d7e81af573eb","type":"Grid"},{"id":"1376a5cd-4ee9-4789-b9cc-0fa9b446afc7","type":"LinearAxis"},{"id":"033434cd-01a9-429d-9093-3484684fad68","type":"Grid"},{"id":"f2124a3f-b1f6-49ec-9f7d-7207cfaf047f","type":"BoxAnnotation"},{"id":"26e29d57-fa65-47b0-ad72-aaf639b31ca2","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"64eda869-a5ca-49c0-8946-1f65e28affce","type":"ToolEvents"},"toolbar":{"id":"d3452ae4-8e89-4909-926c-60b7a06ba514","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"354f579f-07ec-41ea-9a1f-2081f6b464a7","type":"DataRange1d"},"x_scale":{"id":"5fd22740-264d-42cb-905e-e7e536409a02","type":"LinearScale"},"y_range":{"id":"cb3ca46f-c021-486a-b06e-fd0d5d5d6c31","type":"DataRange1d"},"y_scale":{"id":"167d40ad-a5b0-42ec-b672-4e4434e0c75b","type":"LinearScale"}},"id":"f4112faa-1d7b-435f-bad3-211ba8a2d23e","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"f4112faa-1d7b-435f-bad3-211ba8a2d23e","subtype":"Figure","type":"Plot"}},"id":"bbb2ae18-6900-44b9-8aae-69e25409147f","type":"PanTool"},{"attributes":{},"id":"03856144-6879-4a49-a07f-a4646f295f2a","type":"ToolEvents"},{"attributes":{},"id":"854607ef-6b78-4ac6-bba5-22db3eee9fe4","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"c2e29610-5dd1-4fcd-b613-d83ca7cb28a5","type":"ColumnDataSource"},"glyph":{"id":"799e33fe-31f3-4674-a92e-0ff7e0402fde","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0bd1b923-a435-4c1b-b01e-cdf1c570e0f1","type":"Triangle"},"selection_glyph":null},"id":"26e29d57-fa65-47b0-ad72-aaf639b31ca2","type":"GlyphRenderer"}],"root_ids":["8d959e87-3a8c-491c-a816-69f95bd3bf45"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"dcdc3f44-0ba6-4e78-8f0f-d1420e6aecd7","elementid":"80978f4b-7b86-4795-9e20-b0583c2ca6e6","modelid":"8d959e87-3a8c-491c-a816-69f95bd3bf45"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
