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
      };var element = document.getElementById("9bb104d0-79f5-4e2b-8b60-d4005c1e37cb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9bb104d0-79f5-4e2b-8b60-d4005c1e37cb' but no matching script tag was found. ")
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
                    var docs_json = {"2f814e66-0aff-47b7-a7eb-d28c2a18c652":{"roots":{"references":[{"attributes":{"fields":["2015","2016"]},"id":"e88c742c-a8e1-4785-8954-5925c5e381c0","type":"Stack"},{"attributes":{"data_source":{"id":"a2cc49de-d1c7-4b70-ab22-8e5d2b2c7d20","type":"ColumnDataSource"},"glyph":{"id":"14ef1467-8290-40a6-a431-2af6ce976804","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d66d9255-7634-45a9-bd14-89426df40aca","type":"HBar"},"selection_glyph":null,"view":{"id":"9b1ca0d8-9a7d-40d7-9976-6816357ea5e3","type":"CDSView"}},"id":"267f998c-aa90-4067-872a-cb8b4ea44c30","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"8c9cca6e-1e8f-4dcf-9d33-c7608b84a6be","type":"GlyphRenderer"}]},"id":"86ff9816-91d9-468b-9af0-f0565d993c2a","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"a2cc49de-d1c7-4b70-ab22-8e5d2b2c7d20","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"d72c96f2-1acd-46f2-bb4c-6f1787eeed67","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"d8745375-607d-4677-8746-2600db6ebd80","type":"Stack"}},"y":{"field":"fruits"}},"id":"14e0c650-0a55-4078-b3a9-62e78e1a50c4","type":"HBar"},{"attributes":{"formatter":{"id":"bb35b9ee-46d3-4f6c-932f-e884f831519b","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"57e80152-d105-43d7-9fb9-88f92e310569","subtype":"Figure","type":"Plot"},"ticker":{"id":"54b86124-11bc-48e4-b18f-1f62610df2f4","type":"BasicTicker"}},"id":"ffc0a7ab-71bc-4b61-baed-8c9e54c676df","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"3e06d34d-3221-4142-82b9-74125f034825","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"7fa2c2f5-8531-42fd-a1fa-c9d9348bf64c","type":"Stack"}},"y":{"field":"fruits"}},"id":"14ef1467-8290-40a6-a431-2af6ce976804","type":"HBar"},{"attributes":{},"id":"c512b992-34b7-4b96-a6e1-a7990196ffb5","type":"SaveTool"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"167fa233-82e2-48bf-9038-b80cabf00a06","type":"GlyphRenderer"}]},"id":"8592fea6-8d7e-4ae1-998d-b3bae2c672c5","type":"LegendItem"},{"attributes":{"source":{"id":"a2cc49de-d1c7-4b70-ab22-8e5d2b2c7d20","type":"ColumnDataSource"}},"id":"7f2c5123-ec6e-48ee-a966-3d2d4bbbf7f2","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8e537c47-8f1e-4343-a63f-731ed34123ff","type":"PanTool"},{"id":"6267c0d8-f267-4558-b681-b8ba65db5384","type":"WheelZoomTool"},{"id":"109df012-491f-496a-a4d7-e22022c9f766","type":"BoxZoomTool"},{"id":"c512b992-34b7-4b96-a6e1-a7990196ffb5","type":"SaveTool"},{"id":"22d0398d-8b90-41ba-9791-f7936c91bfa1","type":"ResetTool"},{"id":"169c9d0e-1e70-4516-b94a-24a1b3335b97","type":"HelpTool"}]},"id":"1ca9d179-c8ca-4c0b-b54d-9864ab7b3f2d","type":"Toolbar"},{"attributes":{},"id":"ccaa3703-ffcb-492d-8ebb-9d64831b4ccf","type":"CategoricalTicker"},{"attributes":{"items":[{"id":"86ff9816-91d9-468b-9af0-f0565d993c2a","type":"LegendItem"},{"id":"7451fbc0-6d3f-4512-bd95-4029b2258217","type":"LegendItem"},{"id":"5d1431c4-3c79-4c49-a896-cf13eeefb19e","type":"LegendItem"},{"id":"612daf79-9006-4863-8a8a-8247be797b91","type":"LegendItem"},{"id":"59c1e0fd-a6cd-41df-a0fd-a678f73ffd38","type":"LegendItem"},{"id":"8592fea6-8d7e-4ae1-998d-b3bae2c672c5","type":"LegendItem"}],"location":"top_left","plot":{"id":"57e80152-d105-43d7-9fb9-88f92e310569","subtype":"Figure","type":"Plot"}},"id":"930f7bfc-398e-44fe-a0c1-d13a79a81108","type":"Legend"},{"attributes":{"fields":[]},"id":"d72c96f2-1acd-46f2-bb4c-6f1787eeed67","type":"Stack"},{"attributes":{"formatter":{"id":"581a143a-33b8-4550-9661-c2ab0078cd88","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"57e80152-d105-43d7-9fb9-88f92e310569","subtype":"Figure","type":"Plot"},"ticker":{"id":"ccaa3703-ffcb-492d-8ebb-9d64831b4ccf","type":"CategoricalTicker"}},"id":"49091c05-93ee-46f5-b607-7fae3251508d","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"a0ab2584-1a79-4b8e-b612-9d9e82f53645","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"e88c742c-a8e1-4785-8954-5925c5e381c0","type":"Stack"}},"y":{"field":"fruits"}},"id":"9e45119e-13eb-4e11-a223-7f0b69066979","type":"HBar"},{"attributes":{},"id":"47705b4c-8397-4e4a-a6b2-0ce2e1c8f19a","type":"LinearScale"},{"attributes":{"data_source":{"id":"a2cc49de-d1c7-4b70-ab22-8e5d2b2c7d20","type":"ColumnDataSource"},"glyph":{"id":"98be15d4-2c49-42fa-adb4-0c8e1162896f","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bbd95a71-642c-47d2-96ff-77fd89dd0c26","type":"HBar"},"selection_glyph":null,"view":{"id":"7f2c5123-ec6e-48ee-a966-3d2d4bbbf7f2","type":"CDSView"}},"id":"8c9cca6e-1e8f-4dcf-9d33-c7608b84a6be","type":"GlyphRenderer"},{"attributes":{"fields":["2015"]},"id":"875b9a23-f849-4e09-95c0-4eb1bb55d3b4","type":"Stack"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"a885cdbc-c3ee-42d1-8daf-da516fdbbb8b","type":"Title"},{"attributes":{"fields":["2015","2016"]},"id":"862e7bbb-8d1f-4bfa-86b8-921d6cce842b","type":"Stack"},{"attributes":{"source":{"id":"803789c6-74da-472d-ad96-538c4cdd7960","type":"ColumnDataSource"}},"id":"ce1b6245-ebc7-4eaa-b8f3-552c130fc09f","type":"CDSView"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"70bd2c20-31db-4c97-a038-01b199df0435","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"aca09b0c-5dec-48aa-a0d1-9e8da9f7b6e4","type":"Stack"}},"y":{"field":"fruits"}},"id":"8ab9dbbb-73b2-421e-8c20-c0cc3f9a5040","type":"HBar"},{"attributes":{"data_source":{"id":"803789c6-74da-472d-ad96-538c4cdd7960","type":"ColumnDataSource"},"glyph":{"id":"21056801-5420-4c7d-a4cd-fb7427d7f25b","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14e0c650-0a55-4078-b3a9-62e78e1a50c4","type":"HBar"},"selection_glyph":null,"view":{"id":"ce1b6245-ebc7-4eaa-b8f3-552c130fc09f","type":"CDSView"}},"id":"9e851b53-9593-4119-8d19-09f1f1b0602d","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"803789c6-74da-472d-ad96-538c4cdd7960","type":"ColumnDataSource"},"glyph":{"id":"8ab9dbbb-73b2-421e-8c20-c0cc3f9a5040","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e759918f-ecf0-48db-84e5-4177121ae3bb","type":"HBar"},"selection_glyph":null,"view":{"id":"93355d70-fb3e-4ad1-8bce-ba8b9d805942","type":"CDSView"}},"id":"167fa233-82e2-48bf-9038-b80cabf00a06","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"3e06d34d-3221-4142-82b9-74125f034825","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"7fa2c2f5-8531-42fd-a1fa-c9d9348bf64c","type":"Stack"}},"y":{"field":"fruits"}},"id":"d66d9255-7634-45a9-bd14-89426df40aca","type":"HBar"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"9e851b53-9593-4119-8d19-09f1f1b0602d","type":"GlyphRenderer"}]},"id":"612daf79-9006-4863-8a8a-8247be797b91","type":"LegendItem"},{"attributes":{"fields":["2015","2016","2017"]},"id":"7fa2c2f5-8531-42fd-a1fa-c9d9348bf64c","type":"Stack"},{"attributes":{},"id":"581a143a-33b8-4550-9661-c2ab0078cd88","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"803789c6-74da-472d-ad96-538c4cdd7960","type":"ColumnDataSource"}},"id":"1b038bee-2758-4175-a92e-390807977eb7","type":"CDSView"},{"attributes":{"source":{"id":"803789c6-74da-472d-ad96-538c4cdd7960","type":"ColumnDataSource"}},"id":"93355d70-fb3e-4ad1-8bce-ba8b9d805942","type":"CDSView"},{"attributes":{"fields":[]},"id":"226c81e7-3ae6-4c78-a9d0-09c537b28680","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"b5421008-2c23-4ca0-b473-31219dd12f2c","type":"Stack"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"dc59a77a-f10e-4f55-b7c6-923b0ff40464","type":"BoxAnnotation"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"06a59b56-d4b2-438a-a395-d74439e77e32","type":"GlyphRenderer"}]},"id":"59c1e0fd-a6cd-41df-a0fd-a678f73ffd38","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"226c81e7-3ae6-4c78-a9d0-09c537b28680","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"875b9a23-f849-4e09-95c0-4eb1bb55d3b4","type":"Stack"}},"y":{"field":"fruits"}},"id":"bbd95a71-642c-47d2-96ff-77fd89dd0c26","type":"HBar"},{"attributes":{},"id":"8e537c47-8f1e-4343-a63f-731ed34123ff","type":"PanTool"},{"attributes":{"data_source":{"id":"803789c6-74da-472d-ad96-538c4cdd7960","type":"ColumnDataSource"},"glyph":{"id":"4eb2bfb4-c43c-441e-ad98-cac3678cea8e","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9e45119e-13eb-4e11-a223-7f0b69066979","type":"HBar"},"selection_glyph":null,"view":{"id":"1b038bee-2758-4175-a92e-390807977eb7","type":"CDSView"}},"id":"06a59b56-d4b2-438a-a395-d74439e77e32","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"2095c5ed-9369-4bb1-8084-9448c9012380","type":"FactorRange"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"d72c96f2-1acd-46f2-bb4c-6f1787eeed67","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"d8745375-607d-4677-8746-2600db6ebd80","type":"Stack"}},"y":{"field":"fruits"}},"id":"21056801-5420-4c7d-a4cd-fb7427d7f25b","type":"HBar"},{"attributes":{},"id":"d24b1954-9c16-48f7-b23d-493f58cddd3b","type":"CategoricalScale"},{"attributes":{"overlay":{"id":"dc59a77a-f10e-4f55-b7c6-923b0ff40464","type":"BoxAnnotation"}},"id":"109df012-491f-496a-a4d7-e22022c9f766","type":"BoxZoomTool"},{"attributes":{"fields":["2015","2016"]},"id":"3e06d34d-3221-4142-82b9-74125f034825","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"a0ab2584-1a79-4b8e-b612-9d9e82f53645","type":"Stack"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"a0ab2584-1a79-4b8e-b612-9d9e82f53645","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"e88c742c-a8e1-4785-8954-5925c5e381c0","type":"Stack"}},"y":{"field":"fruits"}},"id":"4eb2bfb4-c43c-441e-ad98-cac3678cea8e","type":"HBar"},{"attributes":{"fields":["2015","2016"]},"id":"70bd2c20-31db-4c97-a038-01b199df0435","type":"Stack"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"5bc99075-aae6-404f-b149-2e906fab5e7d","type":"Range1d"},{"attributes":{},"id":"6267c0d8-f267-4558-b681-b8ba65db5384","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"b5421008-2c23-4ca0-b473-31219dd12f2c","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"862e7bbb-8d1f-4bfa-86b8-921d6cce842b","type":"Stack"}},"y":{"field":"fruits"}},"id":"9c37f9f2-e303-4673-9313-df006f20709a","type":"HBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"aca09b0c-5dec-48aa-a0d1-9e8da9f7b6e4","type":"Stack"},{"attributes":{},"id":"169c9d0e-1e70-4516-b94a-24a1b3335b97","type":"HelpTool"},{"attributes":{},"id":"54b86124-11bc-48e4-b18f-1f62610df2f4","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"226c81e7-3ae6-4c78-a9d0-09c537b28680","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"875b9a23-f849-4e09-95c0-4eb1bb55d3b4","type":"Stack"}},"y":{"field":"fruits"}},"id":"98be15d4-2c49-42fa-adb4-0c8e1162896f","type":"HBar"},{"attributes":{"below":[{"id":"ffc0a7ab-71bc-4b61-baed-8c9e54c676df","type":"LinearAxis"}],"left":[{"id":"49091c05-93ee-46f5-b607-7fae3251508d","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"ffc0a7ab-71bc-4b61-baed-8c9e54c676df","type":"LinearAxis"},{"id":"77149c99-be70-4c20-b131-becb61835c0b","type":"Grid"},{"id":"49091c05-93ee-46f5-b607-7fae3251508d","type":"CategoricalAxis"},{"id":"d3cfcccd-f9e1-4239-a22b-071fcd6a5893","type":"Grid"},{"id":"dc59a77a-f10e-4f55-b7c6-923b0ff40464","type":"BoxAnnotation"},{"id":"930f7bfc-398e-44fe-a0c1-d13a79a81108","type":"Legend"},{"id":"8c9cca6e-1e8f-4dcf-9d33-c7608b84a6be","type":"GlyphRenderer"},{"id":"62456c82-96fe-4616-8477-5c1ba24f4ad2","type":"GlyphRenderer"},{"id":"267f998c-aa90-4067-872a-cb8b4ea44c30","type":"GlyphRenderer"},{"id":"9e851b53-9593-4119-8d19-09f1f1b0602d","type":"GlyphRenderer"},{"id":"06a59b56-d4b2-438a-a395-d74439e77e32","type":"GlyphRenderer"},{"id":"167fa233-82e2-48bf-9038-b80cabf00a06","type":"GlyphRenderer"}],"title":{"id":"a885cdbc-c3ee-42d1-8daf-da516fdbbb8b","type":"Title"},"toolbar":{"id":"1ca9d179-c8ca-4c0b-b54d-9864ab7b3f2d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5bc99075-aae6-404f-b149-2e906fab5e7d","type":"Range1d"},"x_scale":{"id":"47705b4c-8397-4e4a-a6b2-0ce2e1c8f19a","type":"LinearScale"},"y_range":{"id":"2095c5ed-9369-4bb1-8084-9448c9012380","type":"FactorRange"},"y_scale":{"id":"d24b1954-9c16-48f7-b23d-493f58cddd3b","type":"CategoricalScale"}},"id":"57e80152-d105-43d7-9fb9-88f92e310569","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"57e80152-d105-43d7-9fb9-88f92e310569","subtype":"Figure","type":"Plot"},"ticker":{"id":"ccaa3703-ffcb-492d-8ebb-9d64831b4ccf","type":"CategoricalTicker"}},"id":"d3cfcccd-f9e1-4239-a22b-071fcd6a5893","type":"Grid"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"62456c82-96fe-4616-8477-5c1ba24f4ad2","type":"GlyphRenderer"}]},"id":"7451fbc0-6d3f-4512-bd95-4029b2258217","type":"LegendItem"},{"attributes":{"fields":["2015"]},"id":"d8745375-607d-4677-8746-2600db6ebd80","type":"Stack"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"267f998c-aa90-4067-872a-cb8b4ea44c30","type":"GlyphRenderer"}]},"id":"5d1431c4-3c79-4c49-a896-cf13eeefb19e","type":"LegendItem"},{"attributes":{"source":{"id":"a2cc49de-d1c7-4b70-ab22-8e5d2b2c7d20","type":"ColumnDataSource"}},"id":"9b1ca0d8-9a7d-40d7-9976-6816357ea5e3","type":"CDSView"},{"attributes":{},"id":"bb35b9ee-46d3-4f6c-932f-e884f831519b","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"b5421008-2c23-4ca0-b473-31219dd12f2c","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"862e7bbb-8d1f-4bfa-86b8-921d6cce842b","type":"Stack"}},"y":{"field":"fruits"}},"id":"5f613ea8-6abc-44a6-bf95-3d02bb3f2819","type":"HBar"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"803789c6-74da-472d-ad96-538c4cdd7960","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"57e80152-d105-43d7-9fb9-88f92e310569","subtype":"Figure","type":"Plot"},"ticker":{"id":"54b86124-11bc-48e4-b18f-1f62610df2f4","type":"BasicTicker"}},"id":"77149c99-be70-4c20-b131-becb61835c0b","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"70bd2c20-31db-4c97-a038-01b199df0435","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"aca09b0c-5dec-48aa-a0d1-9e8da9f7b6e4","type":"Stack"}},"y":{"field":"fruits"}},"id":"e759918f-ecf0-48db-84e5-4177121ae3bb","type":"HBar"},{"attributes":{},"id":"22d0398d-8b90-41ba-9791-f7936c91bfa1","type":"ResetTool"},{"attributes":{"data_source":{"id":"a2cc49de-d1c7-4b70-ab22-8e5d2b2c7d20","type":"ColumnDataSource"},"glyph":{"id":"9c37f9f2-e303-4673-9313-df006f20709a","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5f613ea8-6abc-44a6-bf95-3d02bb3f2819","type":"HBar"},"selection_glyph":null,"view":{"id":"98f4e008-11dc-425f-afe4-29c7dea8c280","type":"CDSView"}},"id":"62456c82-96fe-4616-8477-5c1ba24f4ad2","type":"GlyphRenderer"},{"attributes":{"source":{"id":"a2cc49de-d1c7-4b70-ab22-8e5d2b2c7d20","type":"ColumnDataSource"}},"id":"98f4e008-11dc-425f-afe4-29c7dea8c280","type":"CDSView"}],"root_ids":["57e80152-d105-43d7-9fb9-88f92e310569"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"2f814e66-0aff-47b7-a7eb-d28c2a18c652","elementid":"9bb104d0-79f5-4e2b-8b60-d4005c1e37cb","modelid":"57e80152-d105-43d7-9fb9-88f92e310569"}];
                
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
