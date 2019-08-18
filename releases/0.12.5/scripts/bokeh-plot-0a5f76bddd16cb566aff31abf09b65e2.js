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
      };var element = document.getElementById("837c4e78-b81c-4470-8f49-c8224bf0c702");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '837c4e78-b81c-4470-8f49-c8224bf0c702' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"07ea28f8-00e3-4843-bb18-19e8bf564e54":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"9d5cc636-ba9b-4693-96c8-04d0aa47b20b","subtype":"Figure","type":"Plot"},"ticker":{"id":"23cc0c29-47d7-4dbe-a53a-5b7afbfedb48","type":"BasicTicker"}},"id":"04098488-a435-4682-83d4-011bdac3e274","type":"Grid"},{"attributes":{"callback":null},"id":"08b7da4e-8773-438d-a9a9-d13c955dfbbc","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"a65c46b9-839c-4c3e-b09c-63f694240178","subtype":"Figure","type":"Plot"},"ticker":{"id":"93af023a-8e3c-4df7-a29e-141563199dc5","type":"BasicTicker"}},"id":"72bcaa57-ae64-419f-bf45-603361b7aaf5","type":"Grid"},{"attributes":{"plot":{"id":"9d5cc636-ba9b-4693-96c8-04d0aa47b20b","subtype":"Figure","type":"Plot"}},"id":"a485b72c-49bb-44c1-ad80-2678dc420abb","type":"WheelZoomTool"},{"attributes":{},"id":"c0be644d-aa36-4ad0-a019-f44cc3b81ab9","type":"BasicTicker"},{"attributes":{},"id":"04735248-8205-4a50-9569-460a5f2a26ab","type":"BasicTicker"},{"attributes":{"formatter":{"id":"e43bacbc-f6ed-472b-a441-a7e431e816b1","type":"BasicTickFormatter"},"plot":{"id":"9d5cc636-ba9b-4693-96c8-04d0aa47b20b","subtype":"Figure","type":"Plot"},"ticker":{"id":"04735248-8205-4a50-9569-460a5f2a26ab","type":"BasicTicker"}},"id":"52410c76-ba66-4ec9-ada2-a724ca5c954b","type":"LinearAxis"},{"attributes":{"plot":{"id":"71128528-2c01-4d94-98e1-beb00d05470a","subtype":"Figure","type":"Plot"}},"id":"82ee8736-15b4-474e-912d-7e4ea70bf7b4","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"393c1d3a-0b65-4cc1-8299-6cf2203b943f","type":"BoxAnnotation"},"plot":{"id":"a65c46b9-839c-4c3e-b09c-63f694240178","subtype":"Figure","type":"Plot"}},"id":"13d3b5e2-cd37-4fed-92ff-05e8f3d8c7c9","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"6553d83e-a58d-4b64-8dc2-547acfe85611","type":"LinearAxis"}],"left":[{"id":"554e1759-7445-4684-84ed-b0893b263482","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"6553d83e-a58d-4b64-8dc2-547acfe85611","type":"LinearAxis"},{"id":"abd51a77-f12c-46ec-a004-9820df4fe422","type":"Grid"},{"id":"554e1759-7445-4684-84ed-b0893b263482","type":"LinearAxis"},{"id":"fa8671f5-c1d5-4a00-afec-7a29e0152dee","type":"Grid"},{"id":"8d21fe10-0502-4e8c-83a7-b07895553916","type":"BoxAnnotation"},{"id":"71c8ea4c-0a3a-492e-bd3a-39a25d776c40","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"b42ab6b4-05d0-41a5-baa5-9d7def421af2","type":"ToolEvents"},"toolbar":{"id":"5c35d1e9-6e71-4004-8612-6a3286f5e002","type":"Toolbar"},"x_range":{"id":"dce40fae-9497-4796-9853-c736d698457b","type":"DataRange1d"},"y_range":{"id":"c77c9790-0f79-4b08-94eb-14747c1f19df","type":"DataRange1d"}},"id":"71128528-2c01-4d94-98e1-beb00d05470a","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"53d8f44b-2b9c-4c33-a45a-a3f997c8cde0","type":"Triangle"},{"attributes":{"overlay":{"id":"323bac21-542b-45e9-abe8-314980353188","type":"BoxAnnotation"},"plot":{"id":"9d5cc636-ba9b-4693-96c8-04d0aa47b20b","subtype":"Figure","type":"Plot"}},"id":"3df46662-18bd-488e-9acb-802e482a3a45","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"eb2e1dde-bf65-409b-b2ae-e19bf906d168","type":"PanTool"},{"id":"a485b72c-49bb-44c1-ad80-2678dc420abb","type":"WheelZoomTool"},{"id":"3df46662-18bd-488e-9acb-802e482a3a45","type":"BoxZoomTool"},{"id":"6b807500-19e0-44f5-b4b6-30a3ed949211","type":"SaveTool"},{"id":"a7778f8d-6a0e-443d-ae50-635f9cd3fe2a","type":"ResetTool"},{"id":"c6374237-233e-4f44-a407-4843e67a9e60","type":"HelpTool"}]},"id":"60bb30fd-219c-4948-a731-81948e6019c3","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"bfb4cfb3-6079-4e5a-9b05-ba48b46b7ed5","type":"Square"},{"attributes":{"plot":{"id":"71128528-2c01-4d94-98e1-beb00d05470a","subtype":"Figure","type":"Plot"}},"id":"5693acdb-8c82-4891-b28f-9deb3ed368ec","type":"ResetTool"},{"attributes":{},"id":"768482b4-4f87-4781-830c-bfc44f8fece4","type":"BasicTickFormatter"},{"attributes":{},"id":"5deb9a02-60b3-4307-af4c-5d864f283b6e","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"0b6e1713-3651-4a90-86d8-157cd87716ab","type":"BasicTickFormatter"},"plot":{"id":"a65c46b9-839c-4c3e-b09c-63f694240178","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b7ac1f1-f8dd-4f5b-abe8-3ddcb8f8f4a2","type":"BasicTicker"}},"id":"a9f0231d-b8ed-4bde-92e6-1dabf1e00e86","type":"LinearAxis"},{"attributes":{},"id":"b42ab6b4-05d0-41a5-baa5-9d7def421af2","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"1485392c-1f21-4986-a263-293673d9fb53","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"a65c46b9-839c-4c3e-b09c-63f694240178","subtype":"Figure","type":"Plot"}},"id":"07fe7b0d-ace1-4764-953f-2ad859be7ff7","type":"PanTool"},{"attributes":{},"id":"0b6e1713-3651-4a90-86d8-157cd87716ab","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a77e8dca-3346-411f-864c-ec253eb5022d","type":"Square"},{"attributes":{"data_source":{"id":"ae2a715f-d8ff-40cb-83d6-6246cd0471f6","type":"ColumnDataSource"},"glyph":{"id":"17025d34-b434-432f-ae36-b0faf2207c0f","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53d8f44b-2b9c-4c33-a45a-a3f997c8cde0","type":"Triangle"},"selection_glyph":null},"id":"50c6d71e-ba08-4520-a182-2d1c4f98f567","type":"GlyphRenderer"},{"attributes":{},"id":"362bb8c2-40a1-4ef4-b3e9-6bffdffaac4d","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"393c1d3a-0b65-4cc1-8299-6cf2203b943f","type":"BoxAnnotation"},{"attributes":{},"id":"915fbd9f-0404-499d-91bc-5755bcf9a40a","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"07fe7b0d-ace1-4764-953f-2ad859be7ff7","type":"PanTool"},{"id":"ef53c628-e769-49f1-a539-f06cad7d9665","type":"WheelZoomTool"},{"id":"13d3b5e2-cd37-4fed-92ff-05e8f3d8c7c9","type":"BoxZoomTool"},{"id":"b5ce3be5-f0b3-4646-ad59-1e6fa2116f3f","type":"SaveTool"},{"id":"9129cdaf-7880-4244-9bac-0229c140d813","type":"ResetTool"},{"id":"d761e4d9-b5f7-46b4-afcc-2e7f94750ed8","type":"HelpTool"}]},"id":"f0c4b3fd-26c7-4cde-8ec9-a58e0e9e19d2","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"69ea2e91-640f-44bd-991f-02963678b187","type":"PanTool"},{"id":"82ee8736-15b4-474e-912d-7e4ea70bf7b4","type":"WheelZoomTool"},{"id":"345c82fb-07b9-4198-9012-135a071f84b6","type":"BoxZoomTool"},{"id":"5332067b-46a4-45ae-8cd8-4d0379991fcd","type":"SaveTool"},{"id":"5693acdb-8c82-4891-b28f-9deb3ed368ec","type":"ResetTool"},{"id":"8cdbe423-8722-465c-acfa-e2c49ed4fbc0","type":"HelpTool"}]},"id":"5c35d1e9-6e71-4004-8612-6a3286f5e002","type":"Toolbar"},{"attributes":{"callback":null},"id":"9203d307-7422-494e-bc9c-75a12b2c3645","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"9bb8648f-d7de-402e-9bf5-c65c50db9d34","type":"ColumnDataSource"},{"attributes":{},"id":"23cc0c29-47d7-4dbe-a53a-5b7afbfedb48","type":"BasicTicker"},{"attributes":{"callback":null},"id":"d848a9bd-ab86-4659-bc34-0b993079b9d4","type":"DataRange1d"},{"attributes":{"plot":{"id":"a65c46b9-839c-4c3e-b09c-63f694240178","subtype":"Figure","type":"Plot"}},"id":"ef53c628-e769-49f1-a539-f06cad7d9665","type":"WheelZoomTool"},{"attributes":{},"id":"706362ed-9676-47f9-a0b6-d722b34e155f","type":"ToolEvents"},{"attributes":{"data_source":{"id":"9bb8648f-d7de-402e-9bf5-c65c50db9d34","type":"ColumnDataSource"},"glyph":{"id":"a77e8dca-3346-411f-864c-ec253eb5022d","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bfb4cfb3-6079-4e5a-9b05-ba48b46b7ed5","type":"Square"},"selection_glyph":null},"id":"8e88b3dc-84c6-416c-84f6-b61bb303d08d","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"768482b4-4f87-4781-830c-bfc44f8fece4","type":"BasicTickFormatter"},"plot":{"id":"9d5cc636-ba9b-4693-96c8-04d0aa47b20b","subtype":"Figure","type":"Plot"},"ticker":{"id":"23cc0c29-47d7-4dbe-a53a-5b7afbfedb48","type":"BasicTicker"}},"id":"d6da07aa-c6ba-4228-8918-553a94ed828b","type":"LinearAxis"},{"attributes":{"callback":null},"id":"dce40fae-9497-4796-9853-c736d698457b","type":"DataRange1d"},{"attributes":{"formatter":{"id":"5deb9a02-60b3-4307-af4c-5d864f283b6e","type":"BasicTickFormatter"},"plot":{"id":"a65c46b9-839c-4c3e-b09c-63f694240178","subtype":"Figure","type":"Plot"},"ticker":{"id":"93af023a-8e3c-4df7-a29e-141563199dc5","type":"BasicTicker"}},"id":"702520af-03d9-42ae-9c7d-49ea681e54e1","type":"LinearAxis"},{"attributes":{"plot":{"id":"a65c46b9-839c-4c3e-b09c-63f694240178","subtype":"Figure","type":"Plot"}},"id":"9129cdaf-7880-4244-9bac-0229c140d813","type":"ResetTool"},{"attributes":{},"id":"864fea96-e89e-4454-9a5b-85bea45b4661","type":"BasicTicker"},{"attributes":{"callback":null},"id":"c77c9790-0f79-4b08-94eb-14747c1f19df","type":"DataRange1d"},{"attributes":{"children":[{"id":"71128528-2c01-4d94-98e1-beb00d05470a","subtype":"Figure","type":"Plot"},{"id":"9d5cc636-ba9b-4693-96c8-04d0aa47b20b","subtype":"Figure","type":"Plot"},{"id":"a65c46b9-839c-4c3e-b09c-63f694240178","subtype":"Figure","type":"Plot"}]},"id":"3dc4d7d6-4884-46c9-9688-3886f742a0e9","type":"Column"},{"attributes":{"plot":{"id":"9d5cc636-ba9b-4693-96c8-04d0aa47b20b","subtype":"Figure","type":"Plot"},"ticker":{"id":"04735248-8205-4a50-9569-460a5f2a26ab","type":"BasicTicker"}},"id":"1497bc03-b29a-452d-b98a-cff80f0c944a","type":"Grid"},{"attributes":{"formatter":{"id":"915fbd9f-0404-499d-91bc-5755bcf9a40a","type":"BasicTickFormatter"},"plot":{"id":"71128528-2c01-4d94-98e1-beb00d05470a","subtype":"Figure","type":"Plot"},"ticker":{"id":"c0be644d-aa36-4ad0-a019-f44cc3b81ab9","type":"BasicTicker"}},"id":"6553d83e-a58d-4b64-8dc2-547acfe85611","type":"LinearAxis"},{"attributes":{"plot":{"id":"a65c46b9-839c-4c3e-b09c-63f694240178","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b7ac1f1-f8dd-4f5b-abe8-3ddcb8f8f4a2","type":"BasicTicker"}},"id":"9de7c062-f5a8-40a5-90f5-bceac7711f9d","type":"Grid"},{"attributes":{"plot":{"id":"9d5cc636-ba9b-4693-96c8-04d0aa47b20b","subtype":"Figure","type":"Plot"}},"id":"a7778f8d-6a0e-443d-ae50-635f9cd3fe2a","type":"ResetTool"},{"attributes":{"below":[{"id":"a9f0231d-b8ed-4bde-92e6-1dabf1e00e86","type":"LinearAxis"}],"left":[{"id":"702520af-03d9-42ae-9c7d-49ea681e54e1","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"a9f0231d-b8ed-4bde-92e6-1dabf1e00e86","type":"LinearAxis"},{"id":"9de7c062-f5a8-40a5-90f5-bceac7711f9d","type":"Grid"},{"id":"702520af-03d9-42ae-9c7d-49ea681e54e1","type":"LinearAxis"},{"id":"72bcaa57-ae64-419f-bf45-603361b7aaf5","type":"Grid"},{"id":"393c1d3a-0b65-4cc1-8299-6cf2203b943f","type":"BoxAnnotation"},{"id":"8e88b3dc-84c6-416c-84f6-b61bb303d08d","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"f558d6b0-5828-437e-9190-405ee53f8b72","type":"ToolEvents"},"toolbar":{"id":"f0c4b3fd-26c7-4cde-8ec9-a58e0e9e19d2","type":"Toolbar"},"x_range":{"id":"9203d307-7422-494e-bc9c-75a12b2c3645","type":"DataRange1d"},"y_range":{"id":"d848a9bd-ab86-4659-bc34-0b993079b9d4","type":"DataRange1d"}},"id":"a65c46b9-839c-4c3e-b09c-63f694240178","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"0374d518-553c-4207-90e4-99e4413f19de","type":"DataRange1d"},{"attributes":{},"id":"93af023a-8e3c-4df7-a29e-141563199dc5","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"71128528-2c01-4d94-98e1-beb00d05470a","subtype":"Figure","type":"Plot"},"ticker":{"id":"864fea96-e89e-4454-9a5b-85bea45b4661","type":"BasicTicker"}},"id":"fa8671f5-c1d5-4a00-afec-7a29e0152dee","type":"Grid"},{"attributes":{"plot":{"id":"a65c46b9-839c-4c3e-b09c-63f694240178","subtype":"Figure","type":"Plot"}},"id":"b5ce3be5-f0b3-4646-ad59-1e6fa2116f3f","type":"SaveTool"},{"attributes":{"plot":{"id":"a65c46b9-839c-4c3e-b09c-63f694240178","subtype":"Figure","type":"Plot"}},"id":"d761e4d9-b5f7-46b4-afcc-2e7f94750ed8","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"ae2a715f-d8ff-40cb-83d6-6246cd0471f6","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"9d5cc636-ba9b-4693-96c8-04d0aa47b20b","subtype":"Figure","type":"Plot"}},"id":"c6374237-233e-4f44-a407-4843e67a9e60","type":"HelpTool"},{"attributes":{"data_source":{"id":"1485392c-1f21-4986-a263-293673d9fb53","type":"ColumnDataSource"},"glyph":{"id":"b4d31854-165f-487a-9187-6bb617bae7ed","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b9a71897-0f89-4025-91e8-fb33ab3f9f2f","type":"Circle"},"selection_glyph":null},"id":"71c8ea4c-0a3a-492e-bd3a-39a25d776c40","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17025d34-b434-432f-ae36-b0faf2207c0f","type":"Triangle"},{"attributes":{"formatter":{"id":"362bb8c2-40a1-4ef4-b3e9-6bffdffaac4d","type":"BasicTickFormatter"},"plot":{"id":"71128528-2c01-4d94-98e1-beb00d05470a","subtype":"Figure","type":"Plot"},"ticker":{"id":"864fea96-e89e-4454-9a5b-85bea45b4661","type":"BasicTicker"}},"id":"554e1759-7445-4684-84ed-b0893b263482","type":"LinearAxis"},{"attributes":{"overlay":{"id":"8d21fe10-0502-4e8c-83a7-b07895553916","type":"BoxAnnotation"},"plot":{"id":"71128528-2c01-4d94-98e1-beb00d05470a","subtype":"Figure","type":"Plot"}},"id":"345c82fb-07b9-4198-9012-135a071f84b6","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"71128528-2c01-4d94-98e1-beb00d05470a","subtype":"Figure","type":"Plot"}},"id":"8cdbe423-8722-465c-acfa-e2c49ed4fbc0","type":"HelpTool"},{"attributes":{"plot":{"id":"71128528-2c01-4d94-98e1-beb00d05470a","subtype":"Figure","type":"Plot"}},"id":"69ea2e91-640f-44bd-991f-02963678b187","type":"PanTool"},{"attributes":{},"id":"9b7ac1f1-f8dd-4f5b-abe8-3ddcb8f8f4a2","type":"BasicTicker"},{"attributes":{"plot":{"id":"9d5cc636-ba9b-4693-96c8-04d0aa47b20b","subtype":"Figure","type":"Plot"}},"id":"eb2e1dde-bf65-409b-b2ae-e19bf906d168","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b9a71897-0f89-4025-91e8-fb33ab3f9f2f","type":"Circle"},{"attributes":{},"id":"e43bacbc-f6ed-472b-a441-a7e431e816b1","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"52410c76-ba66-4ec9-ada2-a724ca5c954b","type":"LinearAxis"}],"left":[{"id":"d6da07aa-c6ba-4228-8918-553a94ed828b","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"52410c76-ba66-4ec9-ada2-a724ca5c954b","type":"LinearAxis"},{"id":"1497bc03-b29a-452d-b98a-cff80f0c944a","type":"Grid"},{"id":"d6da07aa-c6ba-4228-8918-553a94ed828b","type":"LinearAxis"},{"id":"04098488-a435-4682-83d4-011bdac3e274","type":"Grid"},{"id":"323bac21-542b-45e9-abe8-314980353188","type":"BoxAnnotation"},{"id":"50c6d71e-ba08-4520-a182-2d1c4f98f567","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"706362ed-9676-47f9-a0b6-d722b34e155f","type":"ToolEvents"},"toolbar":{"id":"60bb30fd-219c-4948-a731-81948e6019c3","type":"Toolbar"},"x_range":{"id":"08b7da4e-8773-438d-a9a9-d13c955dfbbc","type":"DataRange1d"},"y_range":{"id":"0374d518-553c-4207-90e4-99e4413f19de","type":"DataRange1d"}},"id":"9d5cc636-ba9b-4693-96c8-04d0aa47b20b","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"71128528-2c01-4d94-98e1-beb00d05470a","subtype":"Figure","type":"Plot"}},"id":"5332067b-46a4-45ae-8cd8-4d0379991fcd","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b4d31854-165f-487a-9187-6bb617bae7ed","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"323bac21-542b-45e9-abe8-314980353188","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"9d5cc636-ba9b-4693-96c8-04d0aa47b20b","subtype":"Figure","type":"Plot"}},"id":"6b807500-19e0-44f5-b4b6-30a3ed949211","type":"SaveTool"},{"attributes":{"plot":{"id":"71128528-2c01-4d94-98e1-beb00d05470a","subtype":"Figure","type":"Plot"},"ticker":{"id":"c0be644d-aa36-4ad0-a019-f44cc3b81ab9","type":"BasicTicker"}},"id":"abd51a77-f12c-46ec-a004-9820df4fe422","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8d21fe10-0502-4e8c-83a7-b07895553916","type":"BoxAnnotation"},{"attributes":{},"id":"f558d6b0-5828-437e-9190-405ee53f8b72","type":"ToolEvents"}],"root_ids":["3dc4d7d6-4884-46c9-9688-3886f742a0e9"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"07ea28f8-00e3-4843-bb18-19e8bf564e54","elementid":"837c4e78-b81c-4470-8f49-c8224bf0c702","modelid":"3dc4d7d6-4884-46c9-9688-3886f742a0e9"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
