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
      };var element = document.getElementById("a070d905-c25c-48e9-b9da-467553477c7e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a070d905-c25c-48e9-b9da-467553477c7e' but no matching script tag was found. ")
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
                var docs_json = {"bd0c58cd-212c-4688-8cb3-7ab7eefa894d":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"8b95837e-73cd-46ab-8019-e8f8ca016a78","subtype":"Figure","type":"Plot"},"ticker":{"id":"d280b139-2c6c-4afb-bb62-f3434ef99ea4","type":"BasicTicker"}},"id":"11d143cb-64b0-48e8-8098-ae76b8fa2a2c","type":"Grid"},{"attributes":{"plot":{"id":"8b95837e-73cd-46ab-8019-e8f8ca016a78","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0b4e4ca-5841-46cb-af7f-0e8ca07152ae","type":"BasicTicker"}},"id":"ffab40b4-ebcd-4c90-89b0-856568fa87d7","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"b67c6791-f9c8-4f58-85ea-4a0f5f5a8012","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"a1a7d154-d7f0-4ed7-8799-aff0d97370fa","subtype":"Figure","type":"Plot"},{"id":"8b95837e-73cd-46ab-8019-e8f8ca016a78","subtype":"Figure","type":"Plot"}]},"id":"3ba80a5e-773a-42cc-a9e4-d84eebb632db","type":"Row"},{"attributes":{"plot":{"id":"8b95837e-73cd-46ab-8019-e8f8ca016a78","subtype":"Figure","type":"Plot"}},"id":"7794f501-218e-4355-a986-97b8a83142cd","type":"ResetTool"},{"attributes":{"plot":{"id":"8b95837e-73cd-46ab-8019-e8f8ca016a78","subtype":"Figure","type":"Plot"}},"id":"827fe84c-bd02-4086-87a2-ef14437ad07b","type":"HelpTool"},{"attributes":{"data_source":{"id":"059b9ac6-12f2-42e9-b172-9834a63ade24","type":"ColumnDataSource"},"glyph":{"id":"18382e13-6d17-441c-85f9-7446f549e1db","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"905c886c-0c0a-49a8-9c76-577a0a4adafb","type":"Triangle"},"selection_glyph":null},"id":"8af56bc9-70c4-450d-8ff1-24863607a788","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a1a7d154-d7f0-4ed7-8799-aff0d97370fa","subtype":"Figure","type":"Plot"}},"id":"04e8146f-456d-479c-978f-41149725ae9d","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6542d4ea-4189-4753-ba16-9969b6aa1fbf","type":"Circle"},{"attributes":{"overlay":{"id":"4017de19-307e-4de9-b142-134398726588","type":"BoxAnnotation"},"plot":{"id":"a1a7d154-d7f0-4ed7-8799-aff0d97370fa","subtype":"Figure","type":"Plot"}},"id":"883b2a15-7e44-4fd0-bc34-fc933c22fcc8","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"964cc2a8-c7ef-43a9-8490-a112fc2700ca","type":"DataRange1d"},{"attributes":{"plot":{"id":"de564ac4-57fb-441b-92b5-8d4585cdf0da","subtype":"Figure","type":"Plot"}},"id":"882f3f56-c218-4e30-93a4-968376be923d","type":"PanTool"},{"attributes":{"callback":null},"id":"04bde4e2-e92d-470b-b163-ac8881f1264c","type":"DataRange1d"},{"attributes":{},"id":"d755d380-0ab6-4584-8f90-c7d75087a04f","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"dd24a59e-1bc4-4cc3-8e67-05bf32284fca","type":"LinearAxis"}],"left":[{"id":"5c5cbd44-6375-430e-8860-c58feaf7ba7d","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"dd24a59e-1bc4-4cc3-8e67-05bf32284fca","type":"LinearAxis"},{"id":"ffab40b4-ebcd-4c90-89b0-856568fa87d7","type":"Grid"},{"id":"5c5cbd44-6375-430e-8860-c58feaf7ba7d","type":"LinearAxis"},{"id":"11d143cb-64b0-48e8-8098-ae76b8fa2a2c","type":"Grid"},{"id":"f58b1d33-ca60-4fb6-9e3f-2cae17e05192","type":"BoxAnnotation"},{"id":"8af56bc9-70c4-450d-8ff1-24863607a788","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"e8e23b81-2e6e-4f5b-b015-81f8f2377c79","type":"ToolEvents"},"toolbar":{"id":"f825ef0d-442b-4775-85fe-ea57aa24cc65","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7cc8e708-4128-444f-9110-858c3234a0fc","type":"DataRange1d"},"y_range":{"id":"964cc2a8-c7ef-43a9-8490-a112fc2700ca","type":"DataRange1d"}},"id":"8b95837e-73cd-46ab-8019-e8f8ca016a78","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"a1a7d154-d7f0-4ed7-8799-aff0d97370fa","subtype":"Figure","type":"Plot"}},"id":"508e5767-8de9-436a-a8ca-1f267f4308be","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"de564ac4-57fb-441b-92b5-8d4585cdf0da","subtype":"Figure","type":"Plot"},"ticker":{"id":"8cdc3d36-5843-4e19-8000-900e2cd38cf2","type":"BasicTicker"}},"id":"5f30f7fd-e445-4927-ab79-905a1b754560","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"a1a7d154-d7f0-4ed7-8799-aff0d97370fa","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0f0fa26-096d-46b9-a77f-894b521f530e","type":"BasicTicker"}},"id":"f65fe572-e2d9-4eb2-87bc-fdb25e671234","type":"Grid"},{"attributes":{},"id":"276d62fa-7b7b-4c2a-8076-a1aa4e8c0038","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"bc3b9902-8ca6-4b4c-8c2d-968d36984562","type":"Spacer"},{"id":"de564ac4-57fb-441b-92b5-8d4585cdf0da","subtype":"Figure","type":"Plot"}]},"id":"524a580c-8a12-433f-9c98-f3dc3fd06607","type":"Row"},{"attributes":{"formatter":{"id":"276d62fa-7b7b-4c2a-8076-a1aa4e8c0038","type":"BasicTickFormatter"},"plot":{"id":"8b95837e-73cd-46ab-8019-e8f8ca016a78","subtype":"Figure","type":"Plot"},"ticker":{"id":"d280b139-2c6c-4afb-bb62-f3434ef99ea4","type":"BasicTicker"}},"id":"5c5cbd44-6375-430e-8860-c58feaf7ba7d","type":"LinearAxis"},{"attributes":{},"id":"7897cf32-d27c-4fc3-93c5-db0b9201f382","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8b95837e-73cd-46ab-8019-e8f8ca016a78","subtype":"Figure","type":"Plot"}},"id":"e94d0499-31de-4644-b44c-1849db6828b4","type":"SaveTool"},{"attributes":{"plot":{"id":"de564ac4-57fb-441b-92b5-8d4585cdf0da","subtype":"Figure","type":"Plot"}},"id":"33af3766-6bf4-4f87-abe7-33e03de14fcc","type":"ResetTool"},{"attributes":{},"id":"d280b139-2c6c-4afb-bb62-f3434ef99ea4","type":"BasicTicker"},{"attributes":{},"id":"070206f7-baee-4831-9da3-e6e649f0568a","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"97ea1b87-315b-41db-820c-17ad4a8e4f55","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"905c886c-0c0a-49a8-9c76-577a0a4adafb","type":"Triangle"},{"attributes":{},"id":"d0f0fa26-096d-46b9-a77f-894b521f530e","type":"BasicTicker"},{"attributes":{"overlay":{"id":"f58b1d33-ca60-4fb6-9e3f-2cae17e05192","type":"BoxAnnotation"},"plot":{"id":"8b95837e-73cd-46ab-8019-e8f8ca016a78","subtype":"Figure","type":"Plot"}},"id":"3e3a3afd-4f04-49b6-8fe3-dd4c094ef957","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f5c4585b-1ec3-412d-aecf-7202f4eacdb1","type":"Circle"},{"attributes":{"plot":{"id":"8b95837e-73cd-46ab-8019-e8f8ca016a78","subtype":"Figure","type":"Plot"}},"id":"0be2c7ac-4308-4864-8abd-26153b4e0c4f","type":"PanTool"},{"attributes":{},"id":"5f023d4a-448a-42db-9cf8-8559c136e7c9","type":"ToolEvents"},{"attributes":{"data_source":{"id":"ba9aed82-6a43-4ded-924d-f8fbd0caaef9","type":"ColumnDataSource"},"glyph":{"id":"1be40f20-008d-41d8-b295-89ef6e81738d","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"e5617931-dd28-410f-a711-9462642a076d","type":"Square"},"selection_glyph":null},"id":"d917fb85-f238-4606-9960-77450e796740","type":"GlyphRenderer"},{"attributes":{},"id":"0c9e9ef1-c51b-43a8-9316-be968b38a4cf","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"ef8c3fe1-0ae5-41c4-b3be-5387f93cafd1","type":"BoxAnnotation"},"plot":{"id":"de564ac4-57fb-441b-92b5-8d4585cdf0da","subtype":"Figure","type":"Plot"}},"id":"99edbf9f-d220-4cf7-945b-be020f06fb6e","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ef8c3fe1-0ae5-41c4-b3be-5387f93cafd1","type":"BoxAnnotation"},{"attributes":{},"id":"8cdc3d36-5843-4e19-8000-900e2cd38cf2","type":"BasicTicker"},{"attributes":{"formatter":{"id":"0c9e9ef1-c51b-43a8-9316-be968b38a4cf","type":"BasicTickFormatter"},"plot":{"id":"a1a7d154-d7f0-4ed7-8799-aff0d97370fa","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0f0fa26-096d-46b9-a77f-894b521f530e","type":"BasicTicker"}},"id":"6d3ece2f-e662-4401-97ee-1b966dda6d60","type":"LinearAxis"},{"attributes":{"formatter":{"id":"d755d380-0ab6-4584-8f90-c7d75087a04f","type":"BasicTickFormatter"},"plot":{"id":"de564ac4-57fb-441b-92b5-8d4585cdf0da","subtype":"Figure","type":"Plot"},"ticker":{"id":"8cdc3d36-5843-4e19-8000-900e2cd38cf2","type":"BasicTicker"}},"id":"370097ce-bb84-4a7a-937d-d02315995546","type":"LinearAxis"},{"attributes":{"plot":{"id":"a1a7d154-d7f0-4ed7-8799-aff0d97370fa","subtype":"Figure","type":"Plot"}},"id":"6089c226-5335-4743-84e8-93d7f4ddcaf4","type":"ResetTool"},{"attributes":{"callback":null},"id":"7cc8e708-4128-444f-9110-858c3234a0fc","type":"DataRange1d"},{"attributes":{"plot":{"id":"8b95837e-73cd-46ab-8019-e8f8ca016a78","subtype":"Figure","type":"Plot"}},"id":"f7e2b580-1887-4ecf-8fe5-669b70402c37","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"7897cf32-d27c-4fc3-93c5-db0b9201f382","type":"BasicTickFormatter"},"plot":{"id":"a1a7d154-d7f0-4ed7-8799-aff0d97370fa","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2081075-e01d-41a5-9b91-4c3b6a4925ca","type":"BasicTicker"}},"id":"ec40e1bb-6d15-4693-9f2f-44f34e58e435","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0be2c7ac-4308-4864-8abd-26153b4e0c4f","type":"PanTool"},{"id":"f7e2b580-1887-4ecf-8fe5-669b70402c37","type":"WheelZoomTool"},{"id":"3e3a3afd-4f04-49b6-8fe3-dd4c094ef957","type":"BoxZoomTool"},{"id":"e94d0499-31de-4644-b44c-1849db6828b4","type":"SaveTool"},{"id":"7794f501-218e-4355-a986-97b8a83142cd","type":"ResetTool"},{"id":"827fe84c-bd02-4086-87a2-ef14437ad07b","type":"HelpTool"}]},"id":"f825ef0d-442b-4775-85fe-ea57aa24cc65","type":"Toolbar"},{"attributes":{},"id":"d55257da-3c8f-470c-9d8f-fddeba51129c","type":"ToolEvents"},{"attributes":{},"id":"c2081075-e01d-41a5-9b91-4c3b6a4925ca","type":"BasicTicker"},{"attributes":{"callback":null},"id":"c48a7621-3578-4993-a1bc-32d824600fbd","type":"DataRange1d"},{"attributes":{"height":250,"width":250},"id":"bc3b9902-8ca6-4b4c-8c2d-968d36984562","type":"Spacer"},{"attributes":{"plot":{"id":"de564ac4-57fb-441b-92b5-8d4585cdf0da","subtype":"Figure","type":"Plot"}},"id":"c4a84c25-26bc-4ba9-8468-ccf7cfb738f4","type":"HelpTool"},{"attributes":{"plot":{"id":"de564ac4-57fb-441b-92b5-8d4585cdf0da","subtype":"Figure","type":"Plot"}},"id":"9cd5c8bd-9629-4ce1-a6ba-aadfb72fb30f","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e811a9b6-4145-4eff-84b2-28615534ed47","type":"PanTool"},{"id":"508e5767-8de9-436a-a8ca-1f267f4308be","type":"WheelZoomTool"},{"id":"883b2a15-7e44-4fd0-bc34-fc933c22fcc8","type":"BoxZoomTool"},{"id":"04e8146f-456d-479c-978f-41149725ae9d","type":"SaveTool"},{"id":"6089c226-5335-4743-84e8-93d7f4ddcaf4","type":"ResetTool"},{"id":"4f1a4d2d-13db-4e9c-8b9b-886dcfb0fda2","type":"HelpTool"}]},"id":"a1e9268f-9f4f-4c28-bb06-488ded4a7099","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1be40f20-008d-41d8-b295-89ef6e81738d","type":"Square"},{"attributes":{"formatter":{"id":"8f469ebb-4dca-4b81-838b-2ce023eb2227","type":"BasicTickFormatter"},"plot":{"id":"8b95837e-73cd-46ab-8019-e8f8ca016a78","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0b4e4ca-5841-46cb-af7f-0e8ca07152ae","type":"BasicTicker"}},"id":"dd24a59e-1bc4-4cc3-8e67-05bf32284fca","type":"LinearAxis"},{"attributes":{"below":[{"id":"370097ce-bb84-4a7a-937d-d02315995546","type":"LinearAxis"}],"left":[{"id":"3a95fafc-50de-41ba-b3d1-caf879fa7cbd","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"370097ce-bb84-4a7a-937d-d02315995546","type":"LinearAxis"},{"id":"5f30f7fd-e445-4927-ab79-905a1b754560","type":"Grid"},{"id":"3a95fafc-50de-41ba-b3d1-caf879fa7cbd","type":"LinearAxis"},{"id":"2e14d642-00b7-4927-8a08-d5921af5a2ba","type":"Grid"},{"id":"ef8c3fe1-0ae5-41c4-b3be-5387f93cafd1","type":"BoxAnnotation"},{"id":"d917fb85-f238-4606-9960-77450e796740","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"d55257da-3c8f-470c-9d8f-fddeba51129c","type":"ToolEvents"},"toolbar":{"id":"2adff0fd-3cc3-4c66-bb0c-74930914fb09","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c48a7621-3578-4993-a1bc-32d824600fbd","type":"DataRange1d"},"y_range":{"id":"97ea1b87-315b-41db-820c-17ad4a8e4f55","type":"DataRange1d"}},"id":"de564ac4-57fb-441b-92b5-8d4585cdf0da","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"de564ac4-57fb-441b-92b5-8d4585cdf0da","subtype":"Figure","type":"Plot"},"ticker":{"id":"4fdcb81b-8856-4b1e-bb6d-624d28d3dc72","type":"BasicTicker"}},"id":"2e14d642-00b7-4927-8a08-d5921af5a2ba","type":"Grid"},{"attributes":{},"id":"8f469ebb-4dca-4b81-838b-2ce023eb2227","type":"BasicTickFormatter"},{"attributes":{},"id":"e8e23b81-2e6e-4f5b-b015-81f8f2377c79","type":"ToolEvents"},{"attributes":{"plot":{"id":"a1a7d154-d7f0-4ed7-8799-aff0d97370fa","subtype":"Figure","type":"Plot"}},"id":"4f1a4d2d-13db-4e9c-8b9b-886dcfb0fda2","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4017de19-307e-4de9-b142-134398726588","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"a1a7d154-d7f0-4ed7-8799-aff0d97370fa","subtype":"Figure","type":"Plot"}},"id":"e811a9b6-4145-4eff-84b2-28615534ed47","type":"PanTool"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"18382e13-6d17-441c-85f9-7446f549e1db","type":"Triangle"},{"attributes":{"children":[{"id":"3ba80a5e-773a-42cc-a9e4-d84eebb632db","type":"Row"},{"id":"524a580c-8a12-433f-9c98-f3dc3fd06607","type":"Row"}]},"id":"61b71843-4760-478c-9ff3-a34f2b41bbfb","type":"Column"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"059b9ac6-12f2-42e9-b172-9834a63ade24","type":"ColumnDataSource"},{"attributes":{},"id":"d0b4e4ca-5841-46cb-af7f-0e8ca07152ae","type":"BasicTicker"},{"attributes":{"plot":{"id":"a1a7d154-d7f0-4ed7-8799-aff0d97370fa","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2081075-e01d-41a5-9b91-4c3b6a4925ca","type":"BasicTicker"}},"id":"88481832-0a33-44ad-ae0e-27006b03ad19","type":"Grid"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"e811a9b6-4145-4eff-84b2-28615534ed47","type":"PanTool"},{"id":"508e5767-8de9-436a-a8ca-1f267f4308be","type":"WheelZoomTool"},{"id":"883b2a15-7e44-4fd0-bc34-fc933c22fcc8","type":"BoxZoomTool"},{"id":"04e8146f-456d-479c-978f-41149725ae9d","type":"SaveTool"},{"id":"6089c226-5335-4743-84e8-93d7f4ddcaf4","type":"ResetTool"},{"id":"4f1a4d2d-13db-4e9c-8b9b-886dcfb0fda2","type":"HelpTool"},{"id":"0be2c7ac-4308-4864-8abd-26153b4e0c4f","type":"PanTool"},{"id":"f7e2b580-1887-4ecf-8fe5-669b70402c37","type":"WheelZoomTool"},{"id":"3e3a3afd-4f04-49b6-8fe3-dd4c094ef957","type":"BoxZoomTool"},{"id":"e94d0499-31de-4644-b44c-1849db6828b4","type":"SaveTool"},{"id":"7794f501-218e-4355-a986-97b8a83142cd","type":"ResetTool"},{"id":"827fe84c-bd02-4086-87a2-ef14437ad07b","type":"HelpTool"},{"id":"882f3f56-c218-4e30-93a4-968376be923d","type":"PanTool"},{"id":"9cd5c8bd-9629-4ce1-a6ba-aadfb72fb30f","type":"WheelZoomTool"},{"id":"99edbf9f-d220-4cf7-945b-be020f06fb6e","type":"BoxZoomTool"},{"id":"cc46da39-f89f-43dd-9bfe-eca778eec6c2","type":"SaveTool"},{"id":"33af3766-6bf4-4f87-abe7-33e03de14fcc","type":"ResetTool"},{"id":"c4a84c25-26bc-4ba9-8468-ccf7cfb738f4","type":"HelpTool"}]},"id":"cd2712e3-f3f1-47c7-bbe1-d4462fb3b225","type":"ToolbarBox"},{"attributes":{},"id":"4fdcb81b-8856-4b1e-bb6d-624d28d3dc72","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"882f3f56-c218-4e30-93a4-968376be923d","type":"PanTool"},{"id":"9cd5c8bd-9629-4ce1-a6ba-aadfb72fb30f","type":"WheelZoomTool"},{"id":"99edbf9f-d220-4cf7-945b-be020f06fb6e","type":"BoxZoomTool"},{"id":"cc46da39-f89f-43dd-9bfe-eca778eec6c2","type":"SaveTool"},{"id":"33af3766-6bf4-4f87-abe7-33e03de14fcc","type":"ResetTool"},{"id":"c4a84c25-26bc-4ba9-8468-ccf7cfb738f4","type":"HelpTool"}]},"id":"2adff0fd-3cc3-4c66-bb0c-74930914fb09","type":"Toolbar"},{"attributes":{"data_source":{"id":"b67c6791-f9c8-4f58-85ea-4a0f5f5a8012","type":"ColumnDataSource"},"glyph":{"id":"f5c4585b-1ec3-412d-aecf-7202f4eacdb1","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"6542d4ea-4189-4753-ba16-9969b6aa1fbf","type":"Circle"},"selection_glyph":null},"id":"b73e6c06-e38d-4557-b0f7-86151f8e7d5e","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"ec40e1bb-6d15-4693-9f2f-44f34e58e435","type":"LinearAxis"}],"left":[{"id":"6d3ece2f-e662-4401-97ee-1b966dda6d60","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"ec40e1bb-6d15-4693-9f2f-44f34e58e435","type":"LinearAxis"},{"id":"88481832-0a33-44ad-ae0e-27006b03ad19","type":"Grid"},{"id":"6d3ece2f-e662-4401-97ee-1b966dda6d60","type":"LinearAxis"},{"id":"f65fe572-e2d9-4eb2-87bc-fdb25e671234","type":"Grid"},{"id":"4017de19-307e-4de9-b142-134398726588","type":"BoxAnnotation"},{"id":"b73e6c06-e38d-4557-b0f7-86151f8e7d5e","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"5f023d4a-448a-42db-9cf8-8559c136e7c9","type":"ToolEvents"},"toolbar":{"id":"a1e9268f-9f4f-4c28-bb06-488ded4a7099","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"59640e97-3dd4-42cb-b672-c916322e8e45","type":"DataRange1d"},"y_range":{"id":"04bde4e2-e92d-470b-b163-ac8881f1264c","type":"DataRange1d"}},"id":"a1a7d154-d7f0-4ed7-8799-aff0d97370fa","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"cd2712e3-f3f1-47c7-bbe1-d4462fb3b225","type":"ToolbarBox"},{"id":"61b71843-4760-478c-9ff3-a34f2b41bbfb","type":"Column"}]},"id":"20a41b26-0761-4516-bbb0-2175a5ceb66a","type":"Column"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"ba9aed82-6a43-4ded-924d-f8fbd0caaef9","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e5617931-dd28-410f-a711-9462642a076d","type":"Square"},{"attributes":{"callback":null},"id":"59640e97-3dd4-42cb-b672-c916322e8e45","type":"DataRange1d"},{"attributes":{"formatter":{"id":"070206f7-baee-4831-9da3-e6e649f0568a","type":"BasicTickFormatter"},"plot":{"id":"de564ac4-57fb-441b-92b5-8d4585cdf0da","subtype":"Figure","type":"Plot"},"ticker":{"id":"4fdcb81b-8856-4b1e-bb6d-624d28d3dc72","type":"BasicTicker"}},"id":"3a95fafc-50de-41ba-b3d1-caf879fa7cbd","type":"LinearAxis"},{"attributes":{"plot":{"id":"de564ac4-57fb-441b-92b5-8d4585cdf0da","subtype":"Figure","type":"Plot"}},"id":"cc46da39-f89f-43dd-9bfe-eca778eec6c2","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f58b1d33-ca60-4fb6-9e3f-2cae17e05192","type":"BoxAnnotation"}],"root_ids":["20a41b26-0761-4516-bbb0-2175a5ceb66a"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"bd0c58cd-212c-4688-8cb3-7ab7eefa894d","elementid":"a070d905-c25c-48e9-b9da-467553477c7e","modelid":"20a41b26-0761-4516-bbb0-2175a5ceb66a"}];
                
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
