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
      };var element = document.getElementById("242caf61-6173-4cd8-b8ba-805c6b2dd416");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '242caf61-6173-4cd8-b8ba-805c6b2dd416' but no matching script tag was found. ")
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
                var docs_json = {"a7e24fb9-a0bc-4405-b7d8-c98c789fdb05":{"roots":{"references":[{"attributes":{"data_source":{"id":"8374d59e-fa33-4faf-953e-3b3387c49623","type":"ColumnDataSource"},"glyph":{"id":"21cf88ad-d4c5-42df-be10-e429753395c7","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"8b4b5666-097f-4c61-a41b-32ad2be76640","type":"GlyphRenderer"},{"attributes":{},"id":"5e821599-08fa-4a9d-a678-ccc980d9acaf","type":"BasicTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"21cf88ad-d4c5-42df-be10-e429753395c7","type":"Rect"},{"attributes":{"data_source":{"id":"870880a5-e043-4d4a-a5b4-9f14b6471851","type":"ColumnDataSource"},"glyph":{"id":"9a9cd828-4742-4411-827f-74446bbf7012","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"f84b0f39-b8ea-4b40-95ff-c67c43de31b7","type":"GlyphRenderer"},{"attributes":{},"id":"c0d7b61c-28f0-4b39-b381-f0e4abcb6044","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"07e47c93-0aea-43d2-bf2a-f989ba30f330","type":"Rect"},{"attributes":{"plot":{"id":"f9469777-8747-4d25-9719-4ff96193d666","subtype":"Chart","type":"Plot"}},"id":"ab040d71-1a44-4baf-bdff-f73bddde771b","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":"MPG Distribution"},"id":"51ef357f-9253-4ab2-baed-6c3b2f7dc27f","type":"Title"},{"attributes":{"data_source":{"id":"9569d523-ddb0-47f1-a3c9-f5afe1a6a38e","type":"ColumnDataSource"},"glyph":{"id":"683529e2-5fde-47ec-9d72-050f4abea4b4","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"098c609e-b75e-41dc-8ba7-74957f3de877","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4e115023-fb4d-44b4-b5f1-2f0065f42071","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7fbd5252-5f28-41cf-93c7-ddad37ff267e","type":"Rect"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(15.266667, 18.400000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[58.0],"label":["(15.266667, 18.400000]"],"line_alpha":[1.0],"line_color":["black"],"width":[3.133333333333333],"x":["16.8333335"],"y":[29.0]}},"id":"5330a999-dde7-43f7-9a66-184bbcfe1dc3","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(30.933333, 34.066667]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[37.0],"label":["(30.933333, 34.066667]"],"line_alpha":[1.0],"line_color":["black"],"width":[3.1333333333333293],"x":["32.5"],"y":[18.5]}},"id":"4cad05ae-59e2-48d3-b610-603cd015dba3","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(40.333333, 43.466667]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[4.0],"label":["(40.333333, 43.466667]"],"line_alpha":[1.0],"line_color":["black"],"width":[3.13333333333334],"x":["41.900000000000006"],"y":[2.0]}},"id":"7ff9a295-9162-4c5e-8283-1ba57cd30f45","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"f9469777-8747-4d25-9719-4ff96193d666","subtype":"Chart","type":"Plot"}},"id":"3d478151-ae6f-4638-81f6-73d3c2594051","type":"SaveTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d86dda80-7682-4c13-8e63-339b9fc1dda9","type":"Rect"},{"attributes":{"plot":{"id":"f9469777-8747-4d25-9719-4ff96193d666","subtype":"Chart","type":"Plot"}},"id":"9cf516c9-9772-4d0a-aedc-c22b821b7d8f","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(18.400000, 21.533333]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[55.0],"label":["(18.400000, 21.533333]"],"line_alpha":[1.0],"line_color":["black"],"width":[3.133333333333333],"x":["19.9666665"],"y":[27.5]}},"id":"12748de8-f3d1-47b2-8645-7bba8c75ee9a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(43.466667, 46.600000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[4.0],"label":["(43.466667, 46.600000]"],"line_alpha":[1.0],"line_color":["black"],"width":[3.133333333333333],"x":["45.0333335"],"y":[2.0]}},"id":"51206aa2-c71c-4b44-8c89-db84d3e49550","type":"ColumnDataSource"},{"attributes":{},"id":"8b3b09b6-90fb-4609-9afc-5898d52c1e39","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9a9cd828-4742-4411-827f-74446bbf7012","type":"Rect"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(37.200000, 40.333333]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[11.0],"label":["(37.200000, 40.333333]"],"line_alpha":[1.0],"line_color":["black"],"width":[3.1333333333333258],"x":["38.7666665"],"y":[5.5]}},"id":"746c3486-8a9a-4862-a59f-4201653ec3c0","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4b9f5dbe-fd23-4356-900d-bdd42a58a9b0","type":"ColumnDataSource"},"glyph":{"id":"07e47c93-0aea-43d2-bf2a-f989ba30f330","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"f8d9f7ae-92af-44c6-974c-0ead09c36f9c","type":"GlyphRenderer"},{"attributes":{"axis_label":"Count( Mpg )","formatter":{"id":"c0d7b61c-28f0-4b39-b381-f0e4abcb6044","type":"BasicTickFormatter"},"plot":{"id":"f9469777-8747-4d25-9719-4ff96193d666","subtype":"Chart","type":"Plot"},"ticker":{"id":"2cf34d00-bb93-4129-acca-8fd9cd261254","type":"BasicTicker"}},"id":"a437dfc6-8850-49ef-949e-fa8bdb711c63","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(34.066667, 37.200000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[23.0],"label":["(34.066667, 37.200000]"],"line_alpha":[1.0],"line_color":["black"],"width":[3.13333333333334],"x":["35.633333500000006"],"y":[11.5]}},"id":"6066808a-f05c-4805-941b-4be40cd7746c","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(24.666667, 27.800000]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[49.0],"label":["(24.666667, 27.800000]"],"line_alpha":[1.0],"line_color":["black"],"width":[3.1333333333333364],"x":["26.2333335"],"y":[24.5]}},"id":"870880a5-e043-4d4a-a5b4-9f14b6471851","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"bfa0ddbf-7556-44bd-9684-e02d25e76395","type":"Rect"},{"attributes":{"overlay":{"id":"4e115023-fb4d-44b4-b5f1-2f0065f42071","type":"BoxAnnotation"},"plot":{"id":"f9469777-8747-4d25-9719-4ff96193d666","subtype":"Chart","type":"Plot"}},"id":"dea00702-1ac6-4c95-956f-42496f6a6bda","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fedc711e-8d96-4ab4-9a19-de9bdfe25e19","type":"Rect"},{"attributes":{"data_source":{"id":"5330a999-dde7-43f7-9a66-184bbcfe1dc3","type":"ColumnDataSource"},"glyph":{"id":"5e980d5d-2a26-42d7-8fbc-75c64902aa53","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"c0c3c6dc-aa36-445e-9059-81cad95256b1","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"51206aa2-c71c-4b44-8c89-db84d3e49550","type":"ColumnDataSource"},"glyph":{"id":"d86dda80-7682-4c13-8e63-339b9fc1dda9","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"6b1f685c-8e03-422c-8b15-3b667e5f82ca","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":47.99000016666666,"start":7.609999833333334},"id":"820a94bb-f8fd-44da-9bdc-48d9b957c6df","type":"Range1d"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6f8041a9-e05a-4640-991d-2abb94ecf417","type":"Rect"},{"attributes":{"data_source":{"id":"7ff9a295-9162-4c5e-8283-1ba57cd30f45","type":"ColumnDataSource"},"glyph":{"id":"fc3f442f-0d10-4607-a8ea-24e8f23766ab","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"c56c5fbd-ab1f-4ed7-8683-a3e08bb4015b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e980d5d-2a26-42d7-8fbc-75c64902aa53","type":"Rect"},{"attributes":{},"id":"81e77368-b567-4fa1-99a6-74bde86fd012","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(21.533333, 24.666667]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[44.0],"label":["(21.533333, 24.666667]"],"line_alpha":[1.0],"line_color":["black"],"width":[3.133333333333333],"x":["23.1"],"y":[22.0]}},"id":"8374d59e-fa33-4faf-953e-3b3387c49623","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"683529e2-5fde-47ec-9d72-050f4abea4b4","type":"Rect"},{"attributes":{"data_source":{"id":"746c3486-8a9a-4862-a59f-4201653ec3c0","type":"ColumnDataSource"},"glyph":{"id":"bfa0ddbf-7556-44bd-9684-e02d25e76395","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"da354620-ae4b-49fa-8a26-0b842f74deef","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(27.800000, 30.933333]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[38.0],"label":["(27.800000, 30.933333]"],"line_alpha":[1.0],"line_color":["black"],"width":[3.133333333333333],"x":["29.3666665"],"y":[19.0]}},"id":"4b9f5dbe-fd23-4356-900d-bdd42a58a9b0","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"47deabde-d13f-4863-b1dc-c6395d551514","type":"ColumnDataSource"},"glyph":{"id":"fedc711e-8d96-4ab4-9a19-de9bdfe25e19","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"3cec9875-dab7-4cdb-ba79-f4503abcbd0c","type":"GlyphRenderer"},{"attributes":{"axis_label":"mpg","formatter":{"id":"8b3b09b6-90fb-4609-9afc-5898d52c1e39","type":"BasicTickFormatter"},"plot":{"id":"f9469777-8747-4d25-9719-4ff96193d666","subtype":"Chart","type":"Plot"},"ticker":{"id":"5e821599-08fa-4a9d-a678-ccc980d9acaf","type":"BasicTicker"}},"id":"c476acfd-fa81-4bec-9d35-d2e46da11b22","type":"LinearAxis"},{"attributes":{"data_source":{"id":"4cad05ae-59e2-48d3-b610-603cd015dba3","type":"ColumnDataSource"},"glyph":{"id":"f253581e-4c85-434a-9dd3-25599328b68f","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"0ff6d4d3-9bc9-423a-8b5b-a7870dcb6d59","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"f9469777-8747-4d25-9719-4ff96193d666","subtype":"Chart","type":"Plot"}},"id":"d0cbaa5b-74c9-4c99-b6a2-5d5815dced5c","type":"PanTool"},{"attributes":{"below":[{"id":"c476acfd-fa81-4bec-9d35-d2e46da11b22","type":"LinearAxis"}],"css_classes":null,"left":[{"id":"a437dfc6-8850-49ef-949e-fa8bdb711c63","type":"LinearAxis"}],"renderers":[{"id":"4e115023-fb4d-44b4-b5f1-2f0065f42071","type":"BoxAnnotation"},{"id":"098c609e-b75e-41dc-8ba7-74957f3de877","type":"GlyphRenderer"},{"id":"3cec9875-dab7-4cdb-ba79-f4503abcbd0c","type":"GlyphRenderer"},{"id":"c0c3c6dc-aa36-445e-9059-81cad95256b1","type":"GlyphRenderer"},{"id":"e3ce06ce-1891-4a1e-afdc-3a59a03c0be9","type":"GlyphRenderer"},{"id":"8b4b5666-097f-4c61-a41b-32ad2be76640","type":"GlyphRenderer"},{"id":"f84b0f39-b8ea-4b40-95ff-c67c43de31b7","type":"GlyphRenderer"},{"id":"f8d9f7ae-92af-44c6-974c-0ead09c36f9c","type":"GlyphRenderer"},{"id":"0ff6d4d3-9bc9-423a-8b5b-a7870dcb6d59","type":"GlyphRenderer"},{"id":"38efc7a1-6c35-452c-b13d-76a3016b2931","type":"GlyphRenderer"},{"id":"da354620-ae4b-49fa-8a26-0b842f74deef","type":"GlyphRenderer"},{"id":"c56c5fbd-ab1f-4ed7-8683-a3e08bb4015b","type":"GlyphRenderer"},{"id":"6b1f685c-8e03-422c-8b15-3b667e5f82ca","type":"GlyphRenderer"},{"id":"330b9d33-c2ca-4072-a448-5bb61a66975e","type":"Legend"},{"id":"c476acfd-fa81-4bec-9d35-d2e46da11b22","type":"LinearAxis"},{"id":"a437dfc6-8850-49ef-949e-fa8bdb711c63","type":"LinearAxis"},{"id":"b8ea6b83-cc54-4739-983f-6861568f36da","type":"Grid"}],"title":{"id":"51ef357f-9253-4ab2-baed-6c3b2f7dc27f","type":"Title"},"tool_events":{"id":"81e77368-b567-4fa1-99a6-74bde86fd012","type":"ToolEvents"},"toolbar":{"id":"fb339b98-8694-45d4-bced-463447b6bbf7","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"820a94bb-f8fd-44da-9bdc-48d9b957c6df","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"bc3a0e59-9dbf-4944-83d5-f60afc741008","type":"Range1d"}},"id":"f9469777-8747-4d25-9719-4ff96193d666","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"end":63.800000000000004},"id":"bc3a0e59-9dbf-4944-83d5-f60afc741008","type":"Range1d"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fc3f442f-0d10-4607-a8ea-24e8f23766ab","type":"Rect"},{"attributes":{"location":"top_left","plot":{"id":"f9469777-8747-4d25-9719-4ff96193d666","subtype":"Chart","type":"Plot"}},"id":"330b9d33-c2ca-4072-a448-5bb61a66975e","type":"Legend"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f253581e-4c85-434a-9dd3-25599328b68f","type":"Rect"},{"attributes":{"plot":{"id":"f9469777-8747-4d25-9719-4ff96193d666","subtype":"Chart","type":"Plot"}},"id":"66b9f9f6-b132-43b8-8bcc-b26088934cd7","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"f9469777-8747-4d25-9719-4ff96193d666","subtype":"Chart","type":"Plot"},"ticker":{"id":"2cf34d00-bb93-4129-acca-8fd9cd261254","type":"BasicTicker"}},"id":"b8ea6b83-cc54-4739-983f-6861568f36da","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d0cbaa5b-74c9-4c99-b6a2-5d5815dced5c","type":"PanTool"},{"id":"ab040d71-1a44-4baf-bdff-f73bddde771b","type":"WheelZoomTool"},{"id":"dea00702-1ac6-4c95-956f-42496f6a6bda","type":"BoxZoomTool"},{"id":"3d478151-ae6f-4638-81f6-73d3c2594051","type":"SaveTool"},{"id":"66b9f9f6-b132-43b8-8bcc-b26088934cd7","type":"ResetTool"},{"id":"9cf516c9-9772-4d0a-aedc-c22b821b7d8f","type":"HelpTool"}]},"id":"fb339b98-8694-45d4-bced-463447b6bbf7","type":"Toolbar"},{"attributes":{"data_source":{"id":"6066808a-f05c-4805-941b-4be40cd7746c","type":"ColumnDataSource"},"glyph":{"id":"7fbd5252-5f28-41cf-93c7-ddad37ff267e","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"38efc7a1-6c35-452c-b13d-76a3016b2931","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"12748de8-f3d1-47b2-8645-7bba8c75ee9a","type":"ColumnDataSource"},"glyph":{"id":"6f8041a9-e05a-4640-991d-2abb94ecf417","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"e3ce06ce-1891-4a1e-afdc-3a59a03c0be9","type":"GlyphRenderer"},{"attributes":{},"id":"2cf34d00-bb93-4129-acca-8fd9cd261254","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["(12.133333, 15.266667]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[56.0],"label":["(12.133333, 15.266667]"],"line_alpha":[1.0],"line_color":["black"],"width":[3.133333333333333],"x":["13.7"],"y":[28.0]}},"id":"47deabde-d13f-4863-b1dc-c6395d551514","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":["[9.000000, 12.133333]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[13.0],"label":["[9.000000, 12.133333]"],"line_alpha":[1.0],"line_color":["black"],"width":[3.133333333333333],"x":["10.5666665"],"y":[6.5]}},"id":"9569d523-ddb0-47f1-a3c9-f5afe1a6a38e","type":"ColumnDataSource"}],"root_ids":["f9469777-8747-4d25-9719-4ff96193d666"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"a7e24fb9-a0bc-4405-b7d8-c98c789fdb05","elementid":"242caf61-6173-4cd8-b8ba-805c6b2dd416","modelid":"f9469777-8747-4d25-9719-4ff96193d666"}];
                
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
