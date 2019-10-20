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
      };var element = document.getElementById("46d2249b-56ca-49c5-a2c7-8fafa3012b3f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '46d2249b-56ca-49c5-a2c7-8fafa3012b3f' but no matching script tag was found. ")
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
                var docs_json = {"801dd7ca-4a37-41a5-8a1c-f68003a28605":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3943cb8e-c0e2-4685-b5bc-bb0dbea615bb","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"dcfb1005-47f1-4d6e-bcd5-154ec5ea52b4","type":"LinearAxis"}],"left":[{"id":"3e7fd7ef-a25a-4962-9deb-8c381b1778a7","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"dcfb1005-47f1-4d6e-bcd5-154ec5ea52b4","type":"LinearAxis"},{"id":"501b2e0a-f037-47c6-b7e4-c1b2a8ed2668","type":"Grid"},{"id":"3e7fd7ef-a25a-4962-9deb-8c381b1778a7","type":"LinearAxis"},{"id":"b44d3a1e-68ae-4d50-9e65-b0b75c69e12c","type":"Grid"},{"id":"ca81f3f3-0666-4ff8-8117-8a9ad4b6eae4","type":"BoxAnnotation"},{"id":"ef65abb5-af9e-4933-aea2-2f8407d96f40","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"881f39e9-b3fc-4a89-a2c3-4d6f047ffdf0","type":"ToolEvents"},"toolbar":{"id":"8d57ad99-b83f-45c1-aa90-48ba1e7188d7","type":"Toolbar"},"x_range":{"id":"ab45c1ae-8b64-4b2c-9183-8dd0014a9789","type":"DataRange1d"},"y_range":{"id":"8a00d693-1596-4fd0-9423-0365f47789b0","type":"DataRange1d"}},"id":"7ba6b0a6-6b9f-4f73-acc2-fe8cd7ee67d5","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"881f39e9-b3fc-4a89-a2c3-4d6f047ffdf0","type":"ToolEvents"},{"attributes":{},"id":"d05180f5-331b-42c3-97fb-84647cb92ae7","type":"BasicTicker"},{"attributes":{"below":[{"id":"c11d1b53-b621-4f41-9743-d182c4274dbb","type":"LinearAxis"}],"left":[{"id":"6fa23342-71d8-48a5-b3e7-c8cde83b21cb","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"c11d1b53-b621-4f41-9743-d182c4274dbb","type":"LinearAxis"},{"id":"2219e5ca-2012-4811-b492-3fe5a85301d7","type":"Grid"},{"id":"6fa23342-71d8-48a5-b3e7-c8cde83b21cb","type":"LinearAxis"},{"id":"1d3d883c-3f65-481e-9f80-c5bcba0ed06f","type":"Grid"},{"id":"cb7146d4-2224-407d-bf2b-7f1b2bc5ac9e","type":"BoxAnnotation"},{"id":"5f854ec9-3a6a-439e-b820-0768a5afe430","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"800f100b-6643-4d48-bc58-f4874d4018ee","type":"ToolEvents"},"toolbar":{"id":"69d321e2-6b1c-4b3c-af70-8a5afaca8b47","type":"Toolbar"},"x_range":{"id":"16fab960-0d14-49c7-a2e3-51fe1ed84799","type":"DataRange1d"},"y_range":{"id":"167e8e02-b4a6-4db3-82e6-2553a0a30954","type":"DataRange1d"}},"id":"5df1b5cd-f448-4a7c-9089-f5fa36bfed46","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"80cb3045-eccf-4199-9dd6-9c02eca63e55","type":"BasicTickFormatter"},"plot":{"id":"7ba6b0a6-6b9f-4f73-acc2-fe8cd7ee67d5","subtype":"Figure","type":"Plot"},"ticker":{"id":"4410f9f6-07fe-487c-8df0-cd9029f20429","type":"BasicTicker"}},"id":"3e7fd7ef-a25a-4962-9deb-8c381b1778a7","type":"LinearAxis"},{"attributes":{"formatter":{"id":"49866757-7f7e-4f57-99f1-2aad76ce58fd","type":"BasicTickFormatter"},"plot":{"id":"7ba6b0a6-6b9f-4f73-acc2-fe8cd7ee67d5","subtype":"Figure","type":"Plot"},"ticker":{"id":"ae0e2d1e-734a-4027-9758-a2fb308f6be1","type":"BasicTicker"}},"id":"dcfb1005-47f1-4d6e-bcd5-154ec5ea52b4","type":"LinearAxis"},{"attributes":{},"id":"4410f9f6-07fe-487c-8df0-cd9029f20429","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"384bd83c-61bd-467c-8220-987f53354884","type":"Square"},{"attributes":{"plot":{"id":"7ba6b0a6-6b9f-4f73-acc2-fe8cd7ee67d5","subtype":"Figure","type":"Plot"}},"id":"7ed2e856-cad4-4f27-b7aa-1a0af8da1da1","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"16fab960-0d14-49c7-a2e3-51fe1ed84799","type":"DataRange1d"},{"attributes":{"data_source":{"id":"c8c2cbe8-8d35-41ec-92ed-68552c559408","type":"ColumnDataSource"},"glyph":{"id":"397722c6-a185-428d-a762-e84a4b64dba5","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"df3c9507-b09b-45ce-809f-9c96f47f767c","type":"Triangle"},"selection_glyph":null},"id":"83212546-0303-4240-84cc-08cb4a47b329","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"5df1b5cd-f448-4a7c-9089-f5fa36bfed46","subtype":"Figure","type":"Plot"}},"id":"1db7e7f3-a5cd-4e29-9fe8-03669092d3e6","type":"PanTool"},{"attributes":{"plot":{"id":"7fc40ff1-db49-4881-9985-ae97ddeb5edb","subtype":"Figure","type":"Plot"}},"id":"7ef74701-9f49-48c3-a288-e433a43b38cd","type":"ResetTool"},{"attributes":{"overlay":{"id":"3943cb8e-c0e2-4685-b5bc-bb0dbea615bb","type":"BoxAnnotation"},"plot":{"id":"7fc40ff1-db49-4881-9985-ae97ddeb5edb","subtype":"Figure","type":"Plot"}},"id":"e388c274-1f39-420b-811f-f6e891a19317","type":"BoxZoomTool"},{"attributes":{},"id":"268f239f-2100-40f2-bfde-b43f3ce9cd42","type":"BasicTickFormatter"},{"attributes":{},"id":"800f100b-6643-4d48-bc58-f4874d4018ee","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"5df1b5cd-f448-4a7c-9089-f5fa36bfed46","subtype":"Figure","type":"Plot"},"ticker":{"id":"64f8f355-2853-47a7-b0e8-a971e977d1d3","type":"BasicTicker"}},"id":"1d3d883c-3f65-481e-9f80-c5bcba0ed06f","type":"Grid"},{"attributes":{"callback":null},"id":"05fe793b-f407-4de3-8262-dab5b27e4402","type":"DataRange1d"},{"attributes":{"children":[{"id":"7ba6b0a6-6b9f-4f73-acc2-fe8cd7ee67d5","subtype":"Figure","type":"Plot"},{"id":"7fc40ff1-db49-4881-9985-ae97ddeb5edb","subtype":"Figure","type":"Plot"},{"id":"5df1b5cd-f448-4a7c-9089-f5fa36bfed46","subtype":"Figure","type":"Plot"}]},"id":"0b7bf114-0060-4720-9395-53e39805b091","type":"Row"},{"attributes":{"formatter":{"id":"268f239f-2100-40f2-bfde-b43f3ce9cd42","type":"BasicTickFormatter"},"plot":{"id":"7fc40ff1-db49-4881-9985-ae97ddeb5edb","subtype":"Figure","type":"Plot"},"ticker":{"id":"d05180f5-331b-42c3-97fb-84647cb92ae7","type":"BasicTicker"}},"id":"8f2a5c1a-1688-4bc1-8d5e-deb7f6e6d175","type":"LinearAxis"},{"attributes":{"overlay":{"id":"ca81f3f3-0666-4ff8-8117-8a9ad4b6eae4","type":"BoxAnnotation"},"plot":{"id":"7ba6b0a6-6b9f-4f73-acc2-fe8cd7ee67d5","subtype":"Figure","type":"Plot"}},"id":"e12fac5c-75b8-48d6-b8a7-fd293fff8661","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ca81f3f3-0666-4ff8-8117-8a9ad4b6eae4","type":"BoxAnnotation"},{"attributes":{},"id":"ae0e2d1e-734a-4027-9758-a2fb308f6be1","type":"BasicTicker"},{"attributes":{},"id":"49866757-7f7e-4f57-99f1-2aad76ce58fd","type":"BasicTickFormatter"},{"attributes":{},"id":"2dc9cc89-6b32-4e40-be27-746b07cc928b","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"46850dce-4a76-4155-b7fa-acb6da66c1fd","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"7ba6b0a6-6b9f-4f73-acc2-fe8cd7ee67d5","subtype":"Figure","type":"Plot"}},"id":"c2946cfc-cc14-4dbc-bd72-5c68d79b2e32","type":"HelpTool"},{"attributes":{"callback":null},"id":"8a00d693-1596-4fd0-9423-0365f47789b0","type":"DataRange1d"},{"attributes":{"plot":{"id":"5df1b5cd-f448-4a7c-9089-f5fa36bfed46","subtype":"Figure","type":"Plot"}},"id":"806d0130-4232-4f78-bc57-376cb9223cf0","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1db7e7f3-a5cd-4e29-9fe8-03669092d3e6","type":"PanTool"},{"id":"053a3b84-d223-483b-96b4-57e7cd322681","type":"WheelZoomTool"},{"id":"b1e95852-4d2d-4031-a7d8-1a978a923fa6","type":"BoxZoomTool"},{"id":"806d0130-4232-4f78-bc57-376cb9223cf0","type":"SaveTool"},{"id":"f9b85ddb-2ca4-44b9-a7fb-391f71ee4d2a","type":"ResetTool"},{"id":"c94a7b1c-738f-4566-90e1-a08fdcedf767","type":"HelpTool"}]},"id":"69d321e2-6b1c-4b3c-af70-8a5afaca8b47","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"397722c6-a185-428d-a762-e84a4b64dba5","type":"Triangle"},{"attributes":{},"id":"6bf169fb-a1a5-4d43-b2cd-cc1b847509fc","type":"ToolEvents"},{"attributes":{"plot":{"id":"7fc40ff1-db49-4881-9985-ae97ddeb5edb","subtype":"Figure","type":"Plot"},"ticker":{"id":"d05180f5-331b-42c3-97fb-84647cb92ae7","type":"BasicTicker"}},"id":"c727d0c4-6887-49ab-82bd-17ed88167120","type":"Grid"},{"attributes":{"data_source":{"id":"b711a04e-8c63-4c3b-87d4-d8f264c82572","type":"ColumnDataSource"},"glyph":{"id":"9c8dd427-0057-47ec-a69a-068c7c312b29","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"384bd83c-61bd-467c-8220-987f53354884","type":"Square"},"selection_glyph":null},"id":"5f854ec9-3a6a-439e-b820-0768a5afe430","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"5df1b5cd-f448-4a7c-9089-f5fa36bfed46","subtype":"Figure","type":"Plot"}},"id":"053a3b84-d223-483b-96b4-57e7cd322681","type":"WheelZoomTool"},{"attributes":{},"id":"1a0905a9-6755-41cf-9c75-d8d833c7a16a","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9c8dd427-0057-47ec-a69a-068c7c312b29","type":"Square"},{"attributes":{"plot":{"id":"5df1b5cd-f448-4a7c-9089-f5fa36bfed46","subtype":"Figure","type":"Plot"}},"id":"f9b85ddb-2ca4-44b9-a7fb-391f71ee4d2a","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"b711a04e-8c63-4c3b-87d4-d8f264c82572","type":"ColumnDataSource"},{"attributes":{},"id":"80cb3045-eccf-4199-9dd6-9c02eca63e55","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"7fc40ff1-db49-4881-9985-ae97ddeb5edb","subtype":"Figure","type":"Plot"}},"id":"5757e1a1-d84d-4302-8b42-352ab28bb47d","type":"SaveTool"},{"attributes":{"plot":{"id":"5df1b5cd-f448-4a7c-9089-f5fa36bfed46","subtype":"Figure","type":"Plot"}},"id":"c94a7b1c-738f-4566-90e1-a08fdcedf767","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"c8c2cbe8-8d35-41ec-92ed-68552c559408","type":"ColumnDataSource"},{"attributes":{},"id":"9360b311-6432-4e78-8493-c0ec5afcfd8a","type":"BasicTicker"},{"attributes":{"callback":null},"id":"167e8e02-b4a6-4db3-82e6-2553a0a30954","type":"DataRange1d"},{"attributes":{"plot":{"id":"7ba6b0a6-6b9f-4f73-acc2-fe8cd7ee67d5","subtype":"Figure","type":"Plot"},"ticker":{"id":"ae0e2d1e-734a-4027-9758-a2fb308f6be1","type":"BasicTicker"}},"id":"501b2e0a-f037-47c6-b7e4-c1b2a8ed2668","type":"Grid"},{"attributes":{},"id":"8a1ed765-423d-46bf-a5a5-e255cd700491","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"df3c9507-b09b-45ce-809f-9c96f47f767c","type":"Triangle"},{"attributes":{"formatter":{"id":"1a0905a9-6755-41cf-9c75-d8d833c7a16a","type":"BasicTickFormatter"},"plot":{"id":"7fc40ff1-db49-4881-9985-ae97ddeb5edb","subtype":"Figure","type":"Plot"},"ticker":{"id":"9360b311-6432-4e78-8493-c0ec5afcfd8a","type":"BasicTicker"}},"id":"d054bc3a-1144-45f9-8a4d-a07bdef1fea3","type":"LinearAxis"},{"attributes":{"plot":{"id":"7fc40ff1-db49-4881-9985-ae97ddeb5edb","subtype":"Figure","type":"Plot"}},"id":"802f6aa4-ad62-405c-b827-7b01fd883eb0","type":"WheelZoomTool"},{"attributes":{},"id":"64f8f355-2853-47a7-b0e8-a971e977d1d3","type":"BasicTicker"},{"attributes":{"callback":null},"id":"be417a75-eb6b-470f-b427-f8dae8142119","type":"DataRange1d"},{"attributes":{"plot":{"id":"7ba6b0a6-6b9f-4f73-acc2-fe8cd7ee67d5","subtype":"Figure","type":"Plot"}},"id":"4e4c083e-80f1-4ba1-bc94-1c75a988523f","type":"SaveTool"},{"attributes":{"data_source":{"id":"46850dce-4a76-4155-b7fa-acb6da66c1fd","type":"ColumnDataSource"},"glyph":{"id":"7586b9fb-dd85-42b5-befd-4799a8c718db","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"531485c8-7f44-4efe-bf5b-53607b53a13c","type":"Circle"},"selection_glyph":null},"id":"ef65abb5-af9e-4933-aea2-2f8407d96f40","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7586b9fb-dd85-42b5-befd-4799a8c718db","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"7ba6b0a6-6b9f-4f73-acc2-fe8cd7ee67d5","subtype":"Figure","type":"Plot"},"ticker":{"id":"4410f9f6-07fe-487c-8df0-cd9029f20429","type":"BasicTicker"}},"id":"b44d3a1e-68ae-4d50-9e65-b0b75c69e12c","type":"Grid"},{"attributes":{"plot":{"id":"7fc40ff1-db49-4881-9985-ae97ddeb5edb","subtype":"Figure","type":"Plot"}},"id":"c984972f-d3af-47aa-b4ae-937b1b0602b1","type":"HelpTool"},{"attributes":{"formatter":{"id":"2dc9cc89-6b32-4e40-be27-746b07cc928b","type":"BasicTickFormatter"},"plot":{"id":"5df1b5cd-f448-4a7c-9089-f5fa36bfed46","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a1ed765-423d-46bf-a5a5-e255cd700491","type":"BasicTicker"}},"id":"c11d1b53-b621-4f41-9743-d182c4274dbb","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"531485c8-7f44-4efe-bf5b-53607b53a13c","type":"Circle"},{"attributes":{"plot":{"id":"5df1b5cd-f448-4a7c-9089-f5fa36bfed46","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a1ed765-423d-46bf-a5a5-e255cd700491","type":"BasicTicker"}},"id":"2219e5ca-2012-4811-b492-3fe5a85301d7","type":"Grid"},{"attributes":{"formatter":{"id":"6a2cd1b9-9fda-4224-8673-945d63c1b9ae","type":"BasicTickFormatter"},"plot":{"id":"5df1b5cd-f448-4a7c-9089-f5fa36bfed46","subtype":"Figure","type":"Plot"},"ticker":{"id":"64f8f355-2853-47a7-b0e8-a971e977d1d3","type":"BasicTicker"}},"id":"6fa23342-71d8-48a5-b3e7-c8cde83b21cb","type":"LinearAxis"},{"attributes":{"below":[{"id":"8f2a5c1a-1688-4bc1-8d5e-deb7f6e6d175","type":"LinearAxis"}],"left":[{"id":"d054bc3a-1144-45f9-8a4d-a07bdef1fea3","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"8f2a5c1a-1688-4bc1-8d5e-deb7f6e6d175","type":"LinearAxis"},{"id":"c727d0c4-6887-49ab-82bd-17ed88167120","type":"Grid"},{"id":"d054bc3a-1144-45f9-8a4d-a07bdef1fea3","type":"LinearAxis"},{"id":"25a52572-30cc-41e0-805c-28b71e684149","type":"Grid"},{"id":"3943cb8e-c0e2-4685-b5bc-bb0dbea615bb","type":"BoxAnnotation"},{"id":"83212546-0303-4240-84cc-08cb4a47b329","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"6bf169fb-a1a5-4d43-b2cd-cc1b847509fc","type":"ToolEvents"},"toolbar":{"id":"909b2964-fe25-4854-bca4-a73a8975787a","type":"Toolbar"},"x_range":{"id":"be417a75-eb6b-470f-b427-f8dae8142119","type":"DataRange1d"},"y_range":{"id":"05fe793b-f407-4de3-8262-dab5b27e4402","type":"DataRange1d"}},"id":"7fc40ff1-db49-4881-9985-ae97ddeb5edb","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"7ba6b0a6-6b9f-4f73-acc2-fe8cd7ee67d5","subtype":"Figure","type":"Plot"}},"id":"e1cb97c0-8c4c-4277-9a69-2d27011c08c6","type":"PanTool"},{"attributes":{},"id":"6a2cd1b9-9fda-4224-8673-945d63c1b9ae","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"cb7146d4-2224-407d-bf2b-7f1b2bc5ac9e","type":"BoxAnnotation"},"plot":{"id":"5df1b5cd-f448-4a7c-9089-f5fa36bfed46","subtype":"Figure","type":"Plot"}},"id":"b1e95852-4d2d-4031-a7d8-1a978a923fa6","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e1cb97c0-8c4c-4277-9a69-2d27011c08c6","type":"PanTool"},{"id":"7ed2e856-cad4-4f27-b7aa-1a0af8da1da1","type":"WheelZoomTool"},{"id":"e12fac5c-75b8-48d6-b8a7-fd293fff8661","type":"BoxZoomTool"},{"id":"4e4c083e-80f1-4ba1-bc94-1c75a988523f","type":"SaveTool"},{"id":"683c1742-3b1d-499b-9096-297d14221e73","type":"ResetTool"},{"id":"c2946cfc-cc14-4dbc-bd72-5c68d79b2e32","type":"HelpTool"}]},"id":"8d57ad99-b83f-45c1-aa90-48ba1e7188d7","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"7fc40ff1-db49-4881-9985-ae97ddeb5edb","subtype":"Figure","type":"Plot"},"ticker":{"id":"9360b311-6432-4e78-8493-c0ec5afcfd8a","type":"BasicTicker"}},"id":"25a52572-30cc-41e0-805c-28b71e684149","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7ad7812b-94ca-4641-9625-edeafec2e083","type":"PanTool"},{"id":"802f6aa4-ad62-405c-b827-7b01fd883eb0","type":"WheelZoomTool"},{"id":"e388c274-1f39-420b-811f-f6e891a19317","type":"BoxZoomTool"},{"id":"5757e1a1-d84d-4302-8b42-352ab28bb47d","type":"SaveTool"},{"id":"7ef74701-9f49-48c3-a288-e433a43b38cd","type":"ResetTool"},{"id":"c984972f-d3af-47aa-b4ae-937b1b0602b1","type":"HelpTool"}]},"id":"909b2964-fe25-4854-bca4-a73a8975787a","type":"Toolbar"},{"attributes":{"plot":{"id":"7fc40ff1-db49-4881-9985-ae97ddeb5edb","subtype":"Figure","type":"Plot"}},"id":"7ad7812b-94ca-4641-9625-edeafec2e083","type":"PanTool"},{"attributes":{"callback":null},"id":"ab45c1ae-8b64-4b2c-9183-8dd0014a9789","type":"DataRange1d"},{"attributes":{"plot":{"id":"7ba6b0a6-6b9f-4f73-acc2-fe8cd7ee67d5","subtype":"Figure","type":"Plot"}},"id":"683c1742-3b1d-499b-9096-297d14221e73","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cb7146d4-2224-407d-bf2b-7f1b2bc5ac9e","type":"BoxAnnotation"}],"root_ids":["0b7bf114-0060-4720-9395-53e39805b091"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"801dd7ca-4a37-41a5-8a1c-f68003a28605","elementid":"46d2249b-56ca-49c5-a2c7-8fafa3012b3f","modelid":"0b7bf114-0060-4720-9395-53e39805b091"}];
                
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
