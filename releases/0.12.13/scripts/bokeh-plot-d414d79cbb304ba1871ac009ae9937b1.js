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
      };var element = document.getElementById("72bc70c3-0f67-45c2-b50e-ab937e12e0ad");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '72bc70c3-0f67-45c2-b50e-ab937e12e0ad' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.13.min.js"];
    
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
                    
                  var docs_json = '{"ec8af7c3-83e6-4b20-9965-fed7b5b09414":{"roots":{"references":[{"attributes":{"fields":["2015"]},"id":"8f109963-e34f-47e0-b1ee-e4a3d1b4e193","type":"Stack"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"1a7f9d9c-0470-4ace-a28e-d73e629ea95f","type":"Range1d"},{"attributes":{"source":{"id":"d40382e5-127e-47ab-8917-b02abc14574b","type":"ColumnDataSource"}},"id":"e6577227-ca67-411a-a414-bf161738ee64","type":"CDSView"},{"attributes":{"source":{"id":"7d2dbc10-7ba7-46b4-92a2-01bcb5e47681","type":"ColumnDataSource"}},"id":"d7513554-17a6-4fd6-8d2d-ba66c42fa18d","type":"CDSView"},{"attributes":{"data_source":{"id":"d40382e5-127e-47ab-8917-b02abc14574b","type":"ColumnDataSource"},"glyph":{"id":"99bb2ea4-1c06-48de-acd5-9a2d3cd0d377","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"76dc1054-daae-4947-92fc-17b0f2edb9e4","type":"HBar"},"selection_glyph":null,"view":{"id":"e6577227-ca67-411a-a414-bf161738ee64","type":"CDSView"}},"id":"77a090a1-6813-4b4a-bea4-7fe6e1c63a8e","type":"GlyphRenderer"},{"attributes":{"source":{"id":"7d2dbc10-7ba7-46b4-92a2-01bcb5e47681","type":"ColumnDataSource"}},"id":"aa7c2f79-a911-4129-95c1-80485685cf13","type":"CDSView"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"8512f8c0-cd44-4cd5-9970-cce8dfcdcbd1","subtype":"Figure","type":"Plot"},"ticker":{"id":"bc0b95a5-44c2-49f8-bc10-99563e7495ae","type":"CategoricalTicker"}},"id":"98f6bbf6-f26b-40f3-a2ab-d5df57b17370","type":"Grid"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"af00c699-15c5-49c2-bed9-569e690ece5e","type":"GlyphRenderer"}]},"id":"143abc55-56c9-4636-9d76-f924dfe6dece","type":"LegendItem"},{"attributes":{},"id":"5a7c8ad2-e2f1-4b85-91cf-f5da63759f7b","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9d654083-2b7e-4bd1-850a-5dce3ba299a5","type":"PanTool"},{"id":"ccbe06d3-90cc-49b8-b497-51cfbaee397a","type":"WheelZoomTool"},{"id":"92ab2ea2-ae82-42aa-922f-d6f9b0e1c006","type":"BoxZoomTool"},{"id":"6e78816e-7c43-4643-baa1-cb2a8c48fbc0","type":"SaveTool"},{"id":"5a7c8ad2-e2f1-4b85-91cf-f5da63759f7b","type":"ResetTool"},{"id":"0ab6df88-005d-4ab1-8e6f-23c317ecaaac","type":"HelpTool"}]},"id":"10968a92-5fba-4b7f-b624-6e811f610b24","type":"Toolbar"},{"attributes":{},"id":"690969f6-07bc-4491-8482-be2c009e309d","type":"LinearScale"},{"attributes":{"source":{"id":"7d2dbc10-7ba7-46b4-92a2-01bcb5e47681","type":"ColumnDataSource"}},"id":"421e36c3-910b-4445-b811-73021966df60","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"7d3b8afe-253d-4839-97dc-c37bdc26b8c3","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"f51acfb7-2544-4293-9664-4a91b36972f0","type":"Stack"}},"y":{"field":"fruits"}},"id":"9149b06e-0efa-4388-8a09-39f690120b84","type":"HBar"},{"attributes":{},"id":"5f0fe038-2774-460b-a77f-7932f0d44457","type":"CategoricalScale"},{"attributes":{"fields":["2015","2016"]},"id":"7d3b8afe-253d-4839-97dc-c37bdc26b8c3","type":"Stack"},{"attributes":{"source":{"id":"d40382e5-127e-47ab-8917-b02abc14574b","type":"ColumnDataSource"}},"id":"1c83da40-d46d-4c4b-9b5b-3b4a21ab44b2","type":"CDSView"},{"attributes":{"data_source":{"id":"7d2dbc10-7ba7-46b4-92a2-01bcb5e47681","type":"ColumnDataSource"},"glyph":{"id":"fe6b1af4-6ffe-4480-9d6b-6afd705a27d6","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9d041538-2435-4365-8ba5-2cbfbb95dd58","type":"HBar"},"selection_glyph":null,"view":{"id":"d7513554-17a6-4fd6-8d2d-ba66c42fa18d","type":"CDSView"}},"id":"ec539a76-74a1-4220-8127-60d5b468d89a","type":"GlyphRenderer"},{"attributes":{},"id":"9d654083-2b7e-4bd1-850a-5dce3ba299a5","type":"PanTool"},{"attributes":{"items":[{"id":"bc37a423-5532-428f-9cd7-924261ec32a0","type":"LegendItem"},{"id":"081a9671-7ffa-4309-8bd9-94d300d2cceb","type":"LegendItem"},{"id":"262c06fd-a0fd-40a0-9980-ddf97c06ae76","type":"LegendItem"},{"id":"a837c615-12b4-4b8e-bc81-ed2c51bdd17f","type":"LegendItem"},{"id":"ea672256-220b-4b14-99fc-b3500df60489","type":"LegendItem"},{"id":"143abc55-56c9-4636-9d76-f924dfe6dece","type":"LegendItem"}],"location":"top_left","plot":{"id":"8512f8c0-cd44-4cd5-9970-cce8dfcdcbd1","subtype":"Figure","type":"Plot"}},"id":"c5bd9532-edfa-4eb7-919c-07f4a6038551","type":"Legend"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"65148d33-9af6-428e-b27a-a0a060d185bc","type":"GlyphRenderer"}]},"id":"262c06fd-a0fd-40a0-9980-ddf97c06ae76","type":"LegendItem"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"dcc1e6d2-dde1-4ff4-9156-f742c3f50228","type":"FactorRange"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"7e9d065d-953b-40d3-ac28-8c44901e28c0","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"15b305e2-fb31-43ff-bc21-65c4c4d8b960","type":"Stack"}},"y":{"field":"fruits"}},"id":"76dc1054-daae-4947-92fc-17b0f2edb9e4","type":"HBar"},{"attributes":{"data_source":{"id":"7d2dbc10-7ba7-46b4-92a2-01bcb5e47681","type":"ColumnDataSource"},"glyph":{"id":"90be2da9-f376-431b-9ea2-60682b4f55b0","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6512ea31-d6e3-4f11-be1e-ec092b4867c0","type":"HBar"},"selection_glyph":null,"view":{"id":"421e36c3-910b-4445-b811-73021966df60","type":"CDSView"}},"id":"59c34de8-291e-4c8d-96fc-7b0c6ca23fb4","type":"GlyphRenderer"},{"attributes":{},"id":"456c2553-fa43-4643-a088-7c6cce4cf091","type":"CategoricalTickFormatter"},{"attributes":{"fields":["2015"]},"id":"f778aa59-5168-4e84-8102-4e6bf04e963e","type":"Stack"},{"attributes":{"data_source":{"id":"7d2dbc10-7ba7-46b4-92a2-01bcb5e47681","type":"ColumnDataSource"},"glyph":{"id":"7b45c233-8842-4d42-862d-bbeecb9d8ca5","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9149b06e-0efa-4388-8a09-39f690120b84","type":"HBar"},"selection_glyph":null,"view":{"id":"aa7c2f79-a911-4129-95c1-80485685cf13","type":"CDSView"}},"id":"af00c699-15c5-49c2-bed9-569e690ece5e","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"7d3b8afe-253d-4839-97dc-c37bdc26b8c3","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"f51acfb7-2544-4293-9664-4a91b36972f0","type":"Stack"}},"y":{"field":"fruits"}},"id":"7b45c233-8842-4d42-862d-bbeecb9d8ca5","type":"HBar"},{"attributes":{"fields":[]},"id":"06880ce6-93f9-4c67-8ce7-a841cd97cca1","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"74fd7ccc-8104-4375-a14a-2b785d982d01","type":"Stack"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"93e357b6-32d1-4fc8-8993-4377fdf4c18c","type":"GlyphRenderer"}]},"id":"081a9671-7ffa-4309-8bd9-94d300d2cceb","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"74fd7ccc-8104-4375-a14a-2b785d982d01","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"4ef951e5-8fe6-4107-a0ca-1aef40670f07","type":"Stack"}},"y":{"field":"fruits"}},"id":"30b57f1c-3435-45d9-ad4e-50349ee8a91c","type":"HBar"},{"attributes":{},"id":"e2598ad0-8595-4c49-b13d-577cdc1c9b95","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"06880ce6-93f9-4c67-8ce7-a841cd97cca1","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"f778aa59-5168-4e84-8102-4e6bf04e963e","type":"Stack"}},"y":{"field":"fruits"}},"id":"6512ea31-d6e3-4f11-be1e-ec092b4867c0","type":"HBar"},{"attributes":{},"id":"ccbe06d3-90cc-49b8-b497-51cfbaee397a","type":"WheelZoomTool"},{"attributes":{},"id":"1a3d3692-efdf-4dea-81e8-bd2cbd4f22d8","type":"BasicTickFormatter"},{"attributes":{"fields":["2015"]},"id":"15b305e2-fb31-43ff-bc21-65c4c4d8b960","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"05ca46ea-1993-4584-bca7-940d04fb2783","type":"Stack"},{"attributes":{"data_source":{"id":"d40382e5-127e-47ab-8917-b02abc14574b","type":"ColumnDataSource"},"glyph":{"id":"51538699-031f-48a2-a071-5a627d8ac54a","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8cb8080d-7bda-4abe-8877-c4570d17f7f2","type":"HBar"},"selection_glyph":null,"view":{"id":"1c83da40-d46d-4c4b-9b5b-3b4a21ab44b2","type":"CDSView"}},"id":"65148d33-9af6-428e-b27a-a0a060d185bc","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"ec539a76-74a1-4220-8127-60d5b468d89a","type":"GlyphRenderer"}]},"id":"ea672256-220b-4b14-99fc-b3500df60489","type":"LegendItem"},{"attributes":{"formatter":{"id":"456c2553-fa43-4643-a088-7c6cce4cf091","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"8512f8c0-cd44-4cd5-9970-cce8dfcdcbd1","subtype":"Figure","type":"Plot"},"ticker":{"id":"bc0b95a5-44c2-49f8-bc10-99563e7495ae","type":"CategoricalTicker"}},"id":"14c2b2bd-403e-4819-badd-6cddd031077c","type":"CategoricalAxis"},{"attributes":{"fields":["2015","2016"]},"id":"ae31fcc8-6e27-4e73-ad24-19074d70ad99","type":"Stack"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"7e9d065d-953b-40d3-ac28-8c44901e28c0","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"15b305e2-fb31-43ff-bc21-65c4c4d8b960","type":"Stack"}},"y":{"field":"fruits"}},"id":"99bb2ea4-1c06-48de-acd5-9a2d3cd0d377","type":"HBar"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"77a090a1-6813-4b4a-bea4-7fe6e1c63a8e","type":"GlyphRenderer"}]},"id":"bc37a423-5532-428f-9cd7-924261ec32a0","type":"LegendItem"},{"attributes":{"fields":["2015","2016","2017"]},"id":"181f6b3f-a44d-4225-95bf-5b4c0400e031","type":"Stack"},{"attributes":{},"id":"6e78816e-7c43-4643-baa1-cb2a8c48fbc0","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"74fd7ccc-8104-4375-a14a-2b785d982d01","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"4ef951e5-8fe6-4107-a0ca-1aef40670f07","type":"Stack"}},"y":{"field":"fruits"}},"id":"f96537d3-c798-4365-8845-8188c79af51a","type":"HBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"f51acfb7-2544-4293-9664-4a91b36972f0","type":"Stack"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"59c34de8-291e-4c8d-96fc-7b0c6ca23fb4","type":"GlyphRenderer"}]},"id":"a837c615-12b4-4b8e-bc81-ed2c51bdd17f","type":"LegendItem"},{"attributes":{"overlay":{"id":"a2926fc6-4008-4434-b1da-bb84bc6cc9c3","type":"BoxAnnotation"}},"id":"92ab2ea2-ae82-42aa-922f-d6f9b0e1c006","type":"BoxZoomTool"},{"attributes":{},"id":"bc0b95a5-44c2-49f8-bc10-99563e7495ae","type":"CategoricalTicker"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"05ca46ea-1993-4584-bca7-940d04fb2783","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"181f6b3f-a44d-4225-95bf-5b4c0400e031","type":"Stack"}},"y":{"field":"fruits"}},"id":"51538699-031f-48a2-a071-5a627d8ac54a","type":"HBar"},{"attributes":{"plot":{"id":"8512f8c0-cd44-4cd5-9970-cce8dfcdcbd1","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2598ad0-8595-4c49-b13d-577cdc1c9b95","type":"BasicTicker"}},"id":"4c5b8406-17ce-48f3-a96d-4953fe8aa661","type":"Grid"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"d40382e5-127e-47ab-8917-b02abc14574b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"7d2dbc10-7ba7-46b4-92a2-01bcb5e47681","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"8f109963-e34f-47e0-b1ee-e4a3d1b4e193","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"ae31fcc8-6e27-4e73-ad24-19074d70ad99","type":"Stack"}},"y":{"field":"fruits"}},"id":"fe6b1af4-6ffe-4480-9d6b-6afd705a27d6","type":"HBar"},{"attributes":{"formatter":{"id":"1a3d3692-efdf-4dea-81e8-bd2cbd4f22d8","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"8512f8c0-cd44-4cd5-9970-cce8dfcdcbd1","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2598ad0-8595-4c49-b13d-577cdc1c9b95","type":"BasicTicker"}},"id":"a4c6a678-66c0-4287-84de-f661d8d095e6","type":"LinearAxis"},{"attributes":{"data_source":{"id":"d40382e5-127e-47ab-8917-b02abc14574b","type":"ColumnDataSource"},"glyph":{"id":"30b57f1c-3435-45d9-ad4e-50349ee8a91c","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f96537d3-c798-4365-8845-8188c79af51a","type":"HBar"},"selection_glyph":null,"view":{"id":"e3bdf415-1717-41fc-b748-7ec4e968afca","type":"CDSView"}},"id":"93e357b6-32d1-4fc8-8993-4377fdf4c18c","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a2926fc6-4008-4434-b1da-bb84bc6cc9c3","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"8f109963-e34f-47e0-b1ee-e4a3d1b4e193","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"ae31fcc8-6e27-4e73-ad24-19074d70ad99","type":"Stack"}},"y":{"field":"fruits"}},"id":"9d041538-2435-4365-8ba5-2cbfbb95dd58","type":"HBar"},{"attributes":{"fields":["2015","2016"]},"id":"4ef951e5-8fe6-4107-a0ca-1aef40670f07","type":"Stack"},{"attributes":{"below":[{"id":"a4c6a678-66c0-4287-84de-f661d8d095e6","type":"LinearAxis"}],"left":[{"id":"14c2b2bd-403e-4819-badd-6cddd031077c","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"a4c6a678-66c0-4287-84de-f661d8d095e6","type":"LinearAxis"},{"id":"4c5b8406-17ce-48f3-a96d-4953fe8aa661","type":"Grid"},{"id":"14c2b2bd-403e-4819-badd-6cddd031077c","type":"CategoricalAxis"},{"id":"98f6bbf6-f26b-40f3-a2ab-d5df57b17370","type":"Grid"},{"id":"a2926fc6-4008-4434-b1da-bb84bc6cc9c3","type":"BoxAnnotation"},{"id":"c5bd9532-edfa-4eb7-919c-07f4a6038551","type":"Legend"},{"id":"77a090a1-6813-4b4a-bea4-7fe6e1c63a8e","type":"GlyphRenderer"},{"id":"93e357b6-32d1-4fc8-8993-4377fdf4c18c","type":"GlyphRenderer"},{"id":"65148d33-9af6-428e-b27a-a0a060d185bc","type":"GlyphRenderer"},{"id":"59c34de8-291e-4c8d-96fc-7b0c6ca23fb4","type":"GlyphRenderer"},{"id":"ec539a76-74a1-4220-8127-60d5b468d89a","type":"GlyphRenderer"},{"id":"af00c699-15c5-49c2-bed9-569e690ece5e","type":"GlyphRenderer"}],"title":{"id":"f609d40d-6c0b-4fb3-8a7b-e814aa6f235c","type":"Title"},"toolbar":{"id":"10968a92-5fba-4b7f-b624-6e811f610b24","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1a7f9d9c-0470-4ace-a28e-d73e629ea95f","type":"Range1d"},"x_scale":{"id":"690969f6-07bc-4491-8482-be2c009e309d","type":"LinearScale"},"y_range":{"id":"dcc1e6d2-dde1-4ff4-9156-f742c3f50228","type":"FactorRange"},"y_scale":{"id":"5f0fe038-2774-460b-a77f-7932f0d44457","type":"CategoricalScale"}},"id":"8512f8c0-cd44-4cd5-9970-cce8dfcdcbd1","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"f609d40d-6c0b-4fb3-8a7b-e814aa6f235c","type":"Title"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"06880ce6-93f9-4c67-8ce7-a841cd97cca1","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"f778aa59-5168-4e84-8102-4e6bf04e963e","type":"Stack"}},"y":{"field":"fruits"}},"id":"90be2da9-f376-431b-9ea2-60682b4f55b0","type":"HBar"},{"attributes":{},"id":"0ab6df88-005d-4ab1-8e6f-23c317ecaaac","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"05ca46ea-1993-4584-bca7-940d04fb2783","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"181f6b3f-a44d-4225-95bf-5b4c0400e031","type":"Stack"}},"y":{"field":"fruits"}},"id":"8cb8080d-7bda-4abe-8877-c4570d17f7f2","type":"HBar"},{"attributes":{"source":{"id":"d40382e5-127e-47ab-8917-b02abc14574b","type":"ColumnDataSource"}},"id":"e3bdf415-1717-41fc-b748-7ec4e968afca","type":"CDSView"},{"attributes":{"fields":[]},"id":"7e9d065d-953b-40d3-ac28-8c44901e28c0","type":"Stack"}],"root_ids":["8512f8c0-cd44-4cd5-9970-cce8dfcdcbd1"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"ec8af7c3-83e6-4b20-9965-fed7b5b09414","elementid":"72bc70c3-0f67-45c2-b50e-ab937e12e0ad","modelid":"8512f8c0-cd44-4cd5-9970-cce8dfcdcbd1"}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
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