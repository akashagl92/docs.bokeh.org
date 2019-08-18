(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("c8b5f438-aeec-424c-a25d-002b94fcb18e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c8b5f438-aeec-424c-a25d-002b94fcb18e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"1f276dd1-e2a7-4e76-ba34-fb846b9952d9":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15f8cc1e-de5a-411c-b271-11c36efd32fa","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"15f8cc1e-de5a-411c-b271-11c36efd32fa","type":"BoxAnnotation"}},"id":"aba343b1-5345-4237-80d7-47e0d8d801c8","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"4bba272f-8438-4039-8644-2c6befae0092","type":"BoxAnnotation"}},"id":"c695249d-091f-46d9-87b0-1fa3ff4899bb","type":"BoxZoomTool"},{"attributes":{},"id":"9b5e2ffb-819c-4d37-9b0b-a676111fac28","type":"ResetTool"},{"attributes":{},"id":"2eb9f495-b417-4c5d-a3a1-1901f49316f3","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"59781330-5e4f-467c-824c-1826e3763683","type":"Circle"},{"attributes":{},"id":"05aa0128-f053-4a33-b101-f872e28fb42d","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"88764c3b-7304-4e72-bde4-4a8d1ed9b8ba","type":"Circle"},{"attributes":{},"id":"9a2d9c32-fb06-4b7e-b94f-ec5a927d8121","type":"HelpTool"},{"attributes":{},"id":"1828bcc7-8980-42cf-9f69-98a67a2cbca5","type":"BasicTickFormatter"},{"attributes":{},"id":"75b00b30-e515-4979-9c3f-c5411519cb38","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"660c8787-4e97-48a8-93ba-3da89d0555b5","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"454d5440-4aac-438f-aca2-58a090842489","type":"PanTool"},{"id":"edba25f0-90d2-4f95-a573-f8af8ec51de7","type":"WheelZoomTool"},{"id":"1d7cf931-8743-400a-a10a-b068feac323d","type":"BoxZoomTool"},{"id":"bff0fbd6-edac-4ee0-a072-5215e0af04b1","type":"SaveTool"},{"id":"9c0d4a9f-6713-4102-8511-7fde02f718fe","type":"ResetTool"},{"id":"9a2d9c32-fb06-4b7e-b94f-ec5a927d8121","type":"HelpTool"}]},"id":"26210c8b-5c42-43fe-aab7-098ff009aa58","type":"Toolbar"},{"attributes":{"plot":{"id":"62659c4a-e5ba-487d-b5a9-d2a74e5c5d2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"05aa0128-f053-4a33-b101-f872e28fb42d","type":"BasicTicker"}},"id":"112e7ac1-cacc-4d41-b4d3-32797eecdfd1","type":"Grid"},{"attributes":{},"id":"944174b5-31a7-4591-a151-d90f58fc4319","type":"BasicTicker"},{"attributes":{},"id":"6d88e1b6-b8ae-45e7-816b-1b03c046ae3e","type":"LinearScale"},{"attributes":{"callback":null},"id":"d33c8d08-a892-4b69-8c5f-c06d2a8e7042","type":"DataRange1d"},{"attributes":{"formatter":{"id":"6f950334-974f-441b-95d9-6452116a171f","type":"BasicTickFormatter"},"plot":{"id":"6ce34745-39dd-483a-8395-cdbe2fd8e6a7","subtype":"Figure","type":"Plot"},"ticker":{"id":"c79f11b5-c8bb-43e8-ac3c-273c88dc828f","type":"BasicTicker"}},"id":"1c24be8e-6000-44cf-b581-bc56eb82911d","type":"LinearAxis"},{"attributes":{"formatter":{"id":"4c05b17c-140d-45cc-b91a-5ef77530e922","type":"BasicTickFormatter"},"plot":{"id":"6ce34745-39dd-483a-8395-cdbe2fd8e6a7","subtype":"Figure","type":"Plot"},"ticker":{"id":"ff9d9876-c703-47a3-baae-fbcb0f780192","type":"BasicTicker"}},"id":"44b9eb42-9adf-46b0-b799-71d2b3a66178","type":"LinearAxis"},{"attributes":{"plot":{"id":"6ce34745-39dd-483a-8395-cdbe2fd8e6a7","subtype":"Figure","type":"Plot"},"ticker":{"id":"ff9d9876-c703-47a3-baae-fbcb0f780192","type":"BasicTicker"}},"id":"6a9ee2a4-3da6-4c05-8eb6-d2267781a057","type":"Grid"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"95eac900-e2d4-4909-8e47-822707ac4add","type":"PanTool"},{"id":"ffe58b75-bd63-49a0-9380-8a40957aaf20","type":"WheelZoomTool"},{"id":"aba343b1-5345-4237-80d7-47e0d8d801c8","type":"BoxZoomTool"},{"id":"317b54f1-64bb-4409-9ef6-6a99532e8333","type":"SaveTool"},{"id":"9b5e2ffb-819c-4d37-9b0b-a676111fac28","type":"ResetTool"},{"id":"ddc5c82e-a858-45e5-8dc9-697174a9afe7","type":"HelpTool"},{"id":"454d5440-4aac-438f-aca2-58a090842489","type":"PanTool"},{"id":"edba25f0-90d2-4f95-a573-f8af8ec51de7","type":"WheelZoomTool"},{"id":"1d7cf931-8743-400a-a10a-b068feac323d","type":"BoxZoomTool"},{"id":"bff0fbd6-edac-4ee0-a072-5215e0af04b1","type":"SaveTool"},{"id":"9c0d4a9f-6713-4102-8511-7fde02f718fe","type":"ResetTool"},{"id":"9a2d9c32-fb06-4b7e-b94f-ec5a927d8121","type":"HelpTool"},{"id":"cb9ab73e-8bb4-4ec8-a8e0-f59089de270c","type":"PanTool"},{"id":"279a6281-6d32-4a78-a5c3-8b5a226fb318","type":"WheelZoomTool"},{"id":"c695249d-091f-46d9-87b0-1fa3ff4899bb","type":"BoxZoomTool"},{"id":"b105779c-84aa-426c-a328-c2ef56cd5a46","type":"SaveTool"},{"id":"6edadf77-a2ec-4c8d-9ede-a436245ad2f1","type":"ResetTool"},{"id":"08d7c949-fcb1-42d2-a892-5254cd2649f7","type":"HelpTool"}]},"id":"816a43ff-32c4-451c-8311-9dcd9f8d1a6b","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"9d84da3f-0e62-4a92-804f-662414ce2c12","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"485135ee-baf9-4680-ba3d-afafbf65a225","type":"Triangle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"caa2b86e-9f80-4f5b-b056-b77a84964c4c","type":"ColumnDataSource"},{"attributes":{},"id":"ddc5c82e-a858-45e5-8dc9-697174a9afe7","type":"HelpTool"},{"attributes":{"data_source":{"id":"caa2b86e-9f80-4f5b-b056-b77a84964c4c","type":"ColumnDataSource"},"glyph":{"id":"713bae77-3eb1-474a-8de8-e7843f71ed35","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9b074a19-30f3-4fe6-b071-c7c4b745a6da","type":"Square"},"selection_glyph":null,"view":{"id":"ae8a9f92-01fe-47ba-bb88-2907ce708ca3","type":"CDSView"}},"id":"b409e41a-284e-4f8a-a230-da1dc08ec8e9","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"c9f8d6b7-4caf-46d4-a35f-488a0c9a8291","subtype":"Figure","type":"Plot"},{"id":"6ce34745-39dd-483a-8395-cdbe2fd8e6a7","subtype":"Figure","type":"Plot"}]},"id":"ea5357c5-6f7d-42ee-82d7-e2e46fdc0fee","type":"Row"},{"attributes":{},"id":"454d5440-4aac-438f-aca2-58a090842489","type":"PanTool"},{"attributes":{},"id":"8b4382a9-7755-4c39-ba14-8e2af0484493","type":"BasicTicker"},{"attributes":{},"id":"310e199c-287e-40ce-8f44-9267f013bd3b","type":"BasicTickFormatter"},{"attributes":{},"id":"ca441a91-cee1-408d-b886-090b3a6724fa","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"c9f8d6b7-4caf-46d4-a35f-488a0c9a8291","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b4382a9-7755-4c39-ba14-8e2af0484493","type":"BasicTicker"}},"id":"7d6b5456-72cb-4323-92af-f7508046d5d6","type":"Grid"},{"attributes":{"formatter":{"id":"1828bcc7-8980-42cf-9f69-98a67a2cbca5","type":"BasicTickFormatter"},"plot":{"id":"62659c4a-e5ba-487d-b5a9-d2a74e5c5d2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"ca441a91-cee1-408d-b886-090b3a6724fa","type":"BasicTicker"}},"id":"e4a18a45-1f19-483a-bede-4f793dce68c3","type":"LinearAxis"},{"attributes":{"source":{"id":"8c4c5abb-180a-4f88-b0e6-1135f41e15b7","type":"ColumnDataSource"}},"id":"0a4096c2-9043-4433-8cb1-c6d603217f39","type":"CDSView"},{"attributes":{},"id":"317b54f1-64bb-4409-9ef6-6a99532e8333","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"713bae77-3eb1-474a-8de8-e7843f71ed35","type":"Square"},{"attributes":{"data_source":{"id":"c4394804-49d6-436b-ae50-dfec2432abdc","type":"ColumnDataSource"},"glyph":{"id":"88764c3b-7304-4e72-bde4-4a8d1ed9b8ba","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"59781330-5e4f-467c-824c-1826e3763683","type":"Circle"},"selection_glyph":null,"view":{"id":"1fc51a70-7ad1-4cc6-94f7-8021f4c95354","type":"CDSView"}},"id":"664019ba-f747-45c5-b59a-8a1a1107760a","type":"GlyphRenderer"},{"attributes":{},"id":"6f950334-974f-441b-95d9-6452116a171f","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"c4394804-49d6-436b-ae50-dfec2432abdc","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"8c4c5abb-180a-4f88-b0e6-1135f41e15b7","type":"ColumnDataSource"},{"attributes":{},"id":"edba25f0-90d2-4f95-a573-f8af8ec51de7","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"310e199c-287e-40ce-8f44-9267f013bd3b","type":"BasicTickFormatter"},"plot":{"id":"c9f8d6b7-4caf-46d4-a35f-488a0c9a8291","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b4382a9-7755-4c39-ba14-8e2af0484493","type":"BasicTicker"}},"id":"4744bd97-f3e3-4358-afdf-221492d81e9a","type":"LinearAxis"},{"attributes":{"below":[{"id":"44b9eb42-9adf-46b0-b799-71d2b3a66178","type":"LinearAxis"}],"left":[{"id":"1c24be8e-6000-44cf-b581-bc56eb82911d","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"44b9eb42-9adf-46b0-b799-71d2b3a66178","type":"LinearAxis"},{"id":"6a9ee2a4-3da6-4c05-8eb6-d2267781a057","type":"Grid"},{"id":"1c24be8e-6000-44cf-b581-bc56eb82911d","type":"LinearAxis"},{"id":"38e29982-01c7-4809-a22b-a44ddcd3025d","type":"Grid"},{"id":"6f001991-0cfe-4462-848b-55f8cf064097","type":"BoxAnnotation"},{"id":"20f6ad17-075a-483d-9a46-e15149694da4","type":"GlyphRenderer"}],"title":{"id":"660c8787-4e97-48a8-93ba-3da89d0555b5","type":"Title"},"toolbar":{"id":"26210c8b-5c42-43fe-aab7-098ff009aa58","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e7cb7f94-358d-4e72-bacf-4ea3e5600d10","type":"DataRange1d"},"x_scale":{"id":"d3f31068-1cb2-47f0-8065-e40ae9064005","type":"LinearScale"},"y_range":{"id":"d33c8d08-a892-4b69-8c5f-c06d2a8e7042","type":"DataRange1d"},"y_scale":{"id":"2eb9f495-b417-4c5d-a3a1-1901f49316f3","type":"LinearScale"}},"id":"6ce34745-39dd-483a-8395-cdbe2fd8e6a7","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"77969c7b-d6e0-49bb-b842-37e10a189a59","type":"LinearScale"},{"attributes":{"plot":{"id":"c9f8d6b7-4caf-46d4-a35f-488a0c9a8291","subtype":"Figure","type":"Plot"},"ticker":{"id":"944174b5-31a7-4591-a151-d90f58fc4319","type":"BasicTicker"}},"id":"77a74716-d5b5-4c26-8e66-dd902dd501f9","type":"Grid"},{"attributes":{"overlay":{"id":"6f001991-0cfe-4462-848b-55f8cf064097","type":"BoxAnnotation"}},"id":"1d7cf931-8743-400a-a10a-b068feac323d","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"816a43ff-32c4-451c-8311-9dcd9f8d1a6b","type":"ToolbarBox"},{"id":"773c4967-fe65-4fd4-8e48-dde9dca73832","type":"Column"}]},"id":"2ae2aaa3-4649-44ea-93ff-ca51bb1e5e6a","type":"Column"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"95eac900-e2d4-4909-8e47-822707ac4add","type":"PanTool"},{"id":"ffe58b75-bd63-49a0-9380-8a40957aaf20","type":"WheelZoomTool"},{"id":"aba343b1-5345-4237-80d7-47e0d8d801c8","type":"BoxZoomTool"},{"id":"317b54f1-64bb-4409-9ef6-6a99532e8333","type":"SaveTool"},{"id":"9b5e2ffb-819c-4d37-9b0b-a676111fac28","type":"ResetTool"},{"id":"ddc5c82e-a858-45e5-8dc9-697174a9afe7","type":"HelpTool"}]},"id":"0023c7a6-1812-42ea-9533-ff2216592465","type":"Toolbar"},{"attributes":{},"id":"95eac900-e2d4-4909-8e47-822707ac4add","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"6ce34745-39dd-483a-8395-cdbe2fd8e6a7","subtype":"Figure","type":"Plot"},"ticker":{"id":"c79f11b5-c8bb-43e8-ac3c-273c88dc828f","type":"BasicTicker"}},"id":"38e29982-01c7-4809-a22b-a44ddcd3025d","type":"Grid"},{"attributes":{},"id":"153bf368-3c63-4f2f-ab05-02766fd50f75","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"7cda5479-4ae7-49bd-bbf3-55a96b2631d5","type":"DataRange1d"},{"attributes":{"callback":null},"id":"e7cb7f94-358d-4e72-bacf-4ea3e5600d10","type":"DataRange1d"},{"attributes":{},"id":"b105779c-84aa-426c-a328-c2ef56cd5a46","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b92123a0-0651-4fe3-a4aa-08030d20d181","type":"Triangle"},{"attributes":{"source":{"id":"c4394804-49d6-436b-ae50-dfec2432abdc","type":"ColumnDataSource"}},"id":"1fc51a70-7ad1-4cc6-94f7-8021f4c95354","type":"CDSView"},{"attributes":{},"id":"9c0d4a9f-6713-4102-8511-7fde02f718fe","type":"ResetTool"},{"attributes":{},"id":"ff9d9876-c703-47a3-baae-fbcb0f780192","type":"BasicTicker"},{"attributes":{},"id":"ffe58b75-bd63-49a0-9380-8a40957aaf20","type":"WheelZoomTool"},{"attributes":{},"id":"0bdc0e7d-cc5b-4bf7-83d5-eda9a2a51815","type":"LinearScale"},{"attributes":{},"id":"bff0fbd6-edac-4ee0-a072-5215e0af04b1","type":"SaveTool"},{"attributes":{},"id":"d1632bd9-88ec-4c1b-ab4f-a95805a39b8a","type":"LinearScale"},{"attributes":{},"id":"d3f31068-1cb2-47f0-8065-e40ae9064005","type":"LinearScale"},{"attributes":{"below":[{"id":"67d5d786-8051-4da6-bc82-259c47a7d7c2","type":"LinearAxis"}],"left":[{"id":"4744bd97-f3e3-4358-afdf-221492d81e9a","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"67d5d786-8051-4da6-bc82-259c47a7d7c2","type":"LinearAxis"},{"id":"77a74716-d5b5-4c26-8e66-dd902dd501f9","type":"Grid"},{"id":"4744bd97-f3e3-4358-afdf-221492d81e9a","type":"LinearAxis"},{"id":"7d6b5456-72cb-4323-92af-f7508046d5d6","type":"Grid"},{"id":"15f8cc1e-de5a-411c-b271-11c36efd32fa","type":"BoxAnnotation"},{"id":"664019ba-f747-45c5-b59a-8a1a1107760a","type":"GlyphRenderer"}],"title":{"id":"be1f84ef-f4bc-4b99-9f21-c02c90ec7bf9","type":"Title"},"toolbar":{"id":"0023c7a6-1812-42ea-9533-ff2216592465","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"46d065ca-20e9-4b4f-b335-d92decf4b21e","type":"DataRange1d"},"x_scale":{"id":"d1632bd9-88ec-4c1b-ab4f-a95805a39b8a","type":"LinearScale"},"y_range":{"id":"9d84da3f-0e62-4a92-804f-662414ce2c12","type":"DataRange1d"},"y_scale":{"id":"6d88e1b6-b8ae-45e7-816b-1b03c046ae3e","type":"LinearScale"}},"id":"c9f8d6b7-4caf-46d4-a35f-488a0c9a8291","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"08d7c949-fcb1-42d2-a892-5254cd2649f7","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"62659c4a-e5ba-487d-b5a9-d2a74e5c5d2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"ca441a91-cee1-408d-b886-090b3a6724fa","type":"BasicTicker"}},"id":"2d6a3177-4b2c-4398-bc2a-7ee3e92562e7","type":"Grid"},{"attributes":{"callback":null},"id":"46d065ca-20e9-4b4f-b335-d92decf4b21e","type":"DataRange1d"},{"attributes":{"children":[{"id":"62659c4a-e5ba-487d-b5a9-d2a74e5c5d2f","subtype":"Figure","type":"Plot"}]},"id":"c086f69e-0ee4-414f-882a-e7d8cd2f6013","type":"Row"},{"attributes":{"source":{"id":"caa2b86e-9f80-4f5b-b056-b77a84964c4c","type":"ColumnDataSource"}},"id":"ae8a9f92-01fe-47ba-bb88-2907ce708ca3","type":"CDSView"},{"attributes":{"formatter":{"id":"153bf368-3c63-4f2f-ab05-02766fd50f75","type":"BasicTickFormatter"},"plot":{"id":"62659c4a-e5ba-487d-b5a9-d2a74e5c5d2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"05aa0128-f053-4a33-b101-f872e28fb42d","type":"BasicTicker"}},"id":"cf24577b-ff4c-4bbf-b9bf-cada320b3091","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"a0eba9ee-dec0-4651-b54a-57b2dc37b32c","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6f001991-0cfe-4462-848b-55f8cf064097","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"d907e797-4ce0-4d64-9ce2-a9c96fbd4f07","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9b074a19-30f3-4fe6-b071-c7c4b745a6da","type":"Square"},{"attributes":{"children":[{"id":"ea5357c5-6f7d-42ee-82d7-e2e46fdc0fee","type":"Row"},{"id":"c086f69e-0ee4-414f-882a-e7d8cd2f6013","type":"Row"}]},"id":"773c4967-fe65-4fd4-8e48-dde9dca73832","type":"Column"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cb9ab73e-8bb4-4ec8-a8e0-f59089de270c","type":"PanTool"},{"id":"279a6281-6d32-4a78-a5c3-8b5a226fb318","type":"WheelZoomTool"},{"id":"c695249d-091f-46d9-87b0-1fa3ff4899bb","type":"BoxZoomTool"},{"id":"b105779c-84aa-426c-a328-c2ef56cd5a46","type":"SaveTool"},{"id":"6edadf77-a2ec-4c8d-9ede-a436245ad2f1","type":"ResetTool"},{"id":"08d7c949-fcb1-42d2-a892-5254cd2649f7","type":"HelpTool"}]},"id":"31f3d426-7586-4882-98c9-44a3ab0895e7","type":"Toolbar"},{"attributes":{},"id":"c79f11b5-c8bb-43e8-ac3c-273c88dc828f","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4bba272f-8438-4039-8644-2c6befae0092","type":"BoxAnnotation"},{"attributes":{},"id":"279a6281-6d32-4a78-a5c3-8b5a226fb318","type":"WheelZoomTool"},{"attributes":{},"id":"4c05b17c-140d-45cc-b91a-5ef77530e922","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"cf24577b-ff4c-4bbf-b9bf-cada320b3091","type":"LinearAxis"}],"left":[{"id":"e4a18a45-1f19-483a-bede-4f793dce68c3","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"cf24577b-ff4c-4bbf-b9bf-cada320b3091","type":"LinearAxis"},{"id":"112e7ac1-cacc-4d41-b4d3-32797eecdfd1","type":"Grid"},{"id":"e4a18a45-1f19-483a-bede-4f793dce68c3","type":"LinearAxis"},{"id":"2d6a3177-4b2c-4398-bc2a-7ee3e92562e7","type":"Grid"},{"id":"4bba272f-8438-4039-8644-2c6befae0092","type":"BoxAnnotation"},{"id":"b409e41a-284e-4f8a-a230-da1dc08ec8e9","type":"GlyphRenderer"}],"title":{"id":"a0eba9ee-dec0-4651-b54a-57b2dc37b32c","type":"Title"},"toolbar":{"id":"31f3d426-7586-4882-98c9-44a3ab0895e7","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7cda5479-4ae7-49bd-bbf3-55a96b2631d5","type":"DataRange1d"},"x_scale":{"id":"77969c7b-d6e0-49bb-b842-37e10a189a59","type":"LinearScale"},"y_range":{"id":"d907e797-4ce0-4d64-9ce2-a9c96fbd4f07","type":"DataRange1d"},"y_scale":{"id":"0bdc0e7d-cc5b-4bf7-83d5-eda9a2a51815","type":"LinearScale"}},"id":"62659c4a-e5ba-487d-b5a9-d2a74e5c5d2f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"cb9ab73e-8bb4-4ec8-a8e0-f59089de270c","type":"PanTool"},{"attributes":{"data_source":{"id":"8c4c5abb-180a-4f88-b0e6-1135f41e15b7","type":"ColumnDataSource"},"glyph":{"id":"b92123a0-0651-4fe3-a4aa-08030d20d181","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"485135ee-baf9-4680-ba3d-afafbf65a225","type":"Triangle"},"selection_glyph":null,"view":{"id":"0a4096c2-9043-4433-8cb1-c6d603217f39","type":"CDSView"}},"id":"20f6ad17-075a-483d-9a46-e15149694da4","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"be1f84ef-f4bc-4b99-9f21-c02c90ec7bf9","type":"Title"},{"attributes":{"formatter":{"id":"75b00b30-e515-4979-9c3f-c5411519cb38","type":"BasicTickFormatter"},"plot":{"id":"c9f8d6b7-4caf-46d4-a35f-488a0c9a8291","subtype":"Figure","type":"Plot"},"ticker":{"id":"944174b5-31a7-4591-a151-d90f58fc4319","type":"BasicTicker"}},"id":"67d5d786-8051-4da6-bc82-259c47a7d7c2","type":"LinearAxis"},{"attributes":{},"id":"6edadf77-a2ec-4c8d-9ede-a436245ad2f1","type":"ResetTool"}],"root_ids":["2ae2aaa3-4649-44ea-93ff-ca51bb1e5e6a"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"1f276dd1-e2a7-4e76-ba34-fb846b9952d9","elementid":"c8b5f438-aeec-424c-a25d-002b94fcb18e","modelid":"2ae2aaa3-4649-44ea-93ff-ca51bb1e5e6a"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
