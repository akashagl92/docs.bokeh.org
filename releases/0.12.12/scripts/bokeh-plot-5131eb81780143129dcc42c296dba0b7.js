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
      };var element = document.getElementById("58b7512a-18ca-46b5-a0f3-78aabc3e205b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '58b7512a-18ca-46b5-a0f3-78aabc3e205b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.12.min.js"];
    
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
                    
                  var docs_json = '{"f4770214-664c-49ca-972e-2d3ae314eb3b":{"roots":{"references":[{"attributes":{},"id":"dabf9134-7dfe-4974-80e6-90535ca02a75","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8520f7e6-1440-49c9-94a9-01edf37366b7","type":"PanTool"},{"id":"dabf9134-7dfe-4974-80e6-90535ca02a75","type":"WheelZoomTool"},{"id":"abdd362d-b594-41ae-bab4-5724d4d523cc","type":"BoxZoomTool"},{"id":"f797a27b-93f0-4562-bdfb-8d55e99a14d8","type":"SaveTool"},{"id":"3d437990-1c06-47d6-be99-a5a155950d5e","type":"ResetTool"},{"id":"64b3d7dd-b86b-47f7-8e6b-e1cc109b1ebc","type":"HelpTool"}]},"id":"6b367f8a-7ff0-4e6d-b2c7-11f99b475756","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"008b2e17-1816-4265-8014-6660a382ca47","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"21eb9024-c767-46f8-ad82-32740aec8b83","type":"Stack"}},"y":{"field":"fruits"}},"id":"88fa7336-b126-43b5-9cc4-f7980438bbb5","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"5f829a92-328b-4256-bacc-d4f5964fbdef","type":"Stack"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"49c01e75-8113-4367-9842-7da871eb9220","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"dad03ad2-0548-47a8-8c62-17e02467419c","type":"Stack"}},"y":{"field":"fruits"}},"id":"c4f89915-4e47-4804-85ce-b8aefda4929c","type":"HBar"},{"attributes":{"items":[{"id":"aa9786d6-0ca7-4a35-af35-3ea2eab72d90","type":"LegendItem"},{"id":"5a01b7e8-e58c-4afc-a7ed-7091cde5e181","type":"LegendItem"},{"id":"ff918896-491d-4b35-a019-3b999ef2efb4","type":"LegendItem"},{"id":"2b6ac2b4-0183-46ba-bd31-2128015ae57b","type":"LegendItem"},{"id":"db8ee928-8284-485c-ae35-13d2d6ff1f0b","type":"LegendItem"},{"id":"7d4122d9-4871-48c0-8d80-1e288daf9d75","type":"LegendItem"}],"location":"top_left","plot":{"id":"ab6b23ad-4749-4999-bc2b-41dec653a780","subtype":"Figure","type":"Plot"}},"id":"d6082848-97f1-4d75-a99f-1caeba4df229","type":"Legend"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"49bd1292-52b8-490c-9d4d-6e393ce5085d","type":"GlyphRenderer"}]},"id":"7d4122d9-4871-48c0-8d80-1e288daf9d75","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"d65c7ec1-162b-4962-a7e3-1fa9bf538a4d","type":"ColumnDataSource"},{"attributes":{},"id":"d9ffe0d5-431b-48d1-978f-c9ff98fa6643","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"48208291-a96e-4573-85d7-657a6838253d","type":"ColumnDataSource"}},"id":"0d4a7707-36ce-4596-a977-fe33a8e2a28f","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"70860c14-02f1-4489-9270-025cf1f39a3e","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"330e50e9-8226-416d-996d-01c075cde862","type":"Stack"}},"y":{"field":"fruits"}},"id":"108fae65-9642-4a60-8fae-9052565bddef","type":"HBar"},{"attributes":{},"id":"8520f7e6-1440-49c9-94a9-01edf37366b7","type":"PanTool"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"45680834-bcf1-485c-9f6c-937aa6535d81","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"cb6c40e3-73d3-4a99-a16d-0b4f6b6cc1d6","type":"Stack"}},"y":{"field":"fruits"}},"id":"7b5e4c51-554d-4798-bee7-90bfe6b79c6b","type":"HBar"},{"attributes":{"below":[{"id":"d18bdc4b-bd7b-497d-948c-c53b4ebd97f2","type":"LinearAxis"}],"left":[{"id":"c7908821-19e5-48ac-8b40-e65a7f79db99","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"d18bdc4b-bd7b-497d-948c-c53b4ebd97f2","type":"LinearAxis"},{"id":"87ac5f39-b7a0-4bd1-8ff6-500749d05736","type":"Grid"},{"id":"c7908821-19e5-48ac-8b40-e65a7f79db99","type":"CategoricalAxis"},{"id":"651aac8f-ade8-46f7-bb84-c7f1edee6838","type":"Grid"},{"id":"917ba45a-4efd-4271-b9e3-78acec0c4aa6","type":"BoxAnnotation"},{"id":"d6082848-97f1-4d75-a99f-1caeba4df229","type":"Legend"},{"id":"b2c5ec48-9eeb-4f82-9943-99b57d716219","type":"GlyphRenderer"},{"id":"ff21187f-b13b-41f5-8702-ded912120487","type":"GlyphRenderer"},{"id":"c90212b1-f20a-4e12-89c4-4e0331444e2d","type":"GlyphRenderer"},{"id":"9791960f-59f7-4e6a-be45-67f794933858","type":"GlyphRenderer"},{"id":"b614104a-f7c5-419d-9050-c2603da35c8c","type":"GlyphRenderer"},{"id":"49bd1292-52b8-490c-9d4d-6e393ce5085d","type":"GlyphRenderer"}],"title":{"id":"b91ec689-4da2-44b9-b22b-a12d2eb2b7ed","type":"Title"},"toolbar":{"id":"6b367f8a-7ff0-4e6d-b2c7-11f99b475756","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5a4de18f-ff3c-4dcb-b1dd-83cad8be15d2","type":"Range1d"},"x_scale":{"id":"6f85cc3b-e5cd-42ec-8307-4670f1755755","type":"LinearScale"},"y_range":{"id":"15825dcc-da96-4da1-9b35-595684fcaa8a","type":"FactorRange"},"y_scale":{"id":"05fc5f11-aaf5-4799-9b3a-6b2029475463","type":"CategoricalScale"}},"id":"ab6b23ad-4749-4999-bc2b-41dec653a780","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"70860c14-02f1-4489-9270-025cf1f39a3e","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"330e50e9-8226-416d-996d-01c075cde862","type":"Stack"}},"y":{"field":"fruits"}},"id":"9b6ee524-60cd-429e-9707-cd15dee3cd1c","type":"HBar"},{"attributes":{"data_source":{"id":"d65c7ec1-162b-4962-a7e3-1fa9bf538a4d","type":"ColumnDataSource"},"glyph":{"id":"88fa7336-b126-43b5-9cc4-f7980438bbb5","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e317fead-01e8-4b09-9b7e-e24f15f32f4a","type":"HBar"},"selection_glyph":null,"view":{"id":"25e7db9e-9f6b-46ac-b31c-9671224a84e3","type":"CDSView"}},"id":"b614104a-f7c5-419d-9050-c2603da35c8c","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"45680834-bcf1-485c-9f6c-937aa6535d81","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"cb6c40e3-73d3-4a99-a16d-0b4f6b6cc1d6","type":"Stack"}},"y":{"field":"fruits"}},"id":"2a7226a2-446e-4f52-8848-5fd6f630e7e6","type":"HBar"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"5a4de18f-ff3c-4dcb-b1dd-83cad8be15d2","type":"Range1d"},{"attributes":{},"id":"73544a73-f42f-4740-952c-85b6e2e3ee28","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"d65c7ec1-162b-4962-a7e3-1fa9bf538a4d","type":"ColumnDataSource"},"glyph":{"id":"9b6ee524-60cd-429e-9707-cd15dee3cd1c","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"108fae65-9642-4a60-8fae-9052565bddef","type":"HBar"},"selection_glyph":null,"view":{"id":"d1ae6a85-05fb-46a3-9abc-24445636b6cc","type":"CDSView"}},"id":"49bd1292-52b8-490c-9d4d-6e393ce5085d","type":"GlyphRenderer"},{"attributes":{"fields":["2015"]},"id":"734315fc-a98b-482e-9c80-ba287d3fe1d8","type":"Stack"},{"attributes":{"fields":["2015","2016","2017"]},"id":"330e50e9-8226-416d-996d-01c075cde862","type":"Stack"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"ff21187f-b13b-41f5-8702-ded912120487","type":"GlyphRenderer"}]},"id":"5a01b7e8-e58c-4afc-a7ed-7091cde5e181","type":"LegendItem"},{"attributes":{},"id":"05fc5f11-aaf5-4799-9b3a-6b2029475463","type":"CategoricalScale"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"b91ec689-4da2-44b9-b22b-a12d2eb2b7ed","type":"Title"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"c90212b1-f20a-4e12-89c4-4e0331444e2d","type":"GlyphRenderer"}]},"id":"ff918896-491d-4b35-a019-3b999ef2efb4","type":"LegendItem"},{"attributes":{},"id":"3d437990-1c06-47d6-be99-a5a155950d5e","type":"ResetTool"},{"attributes":{},"id":"6f85cc3b-e5cd-42ec-8307-4670f1755755","type":"LinearScale"},{"attributes":{"fields":[]},"id":"d2f5a348-c8d1-4b0a-b79a-649e765b7a7f","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"21eb9024-c767-46f8-ad82-32740aec8b83","type":"Stack"},{"attributes":{"data_source":{"id":"48208291-a96e-4573-85d7-657a6838253d","type":"ColumnDataSource"},"glyph":{"id":"a9b69154-b2af-4011-96bf-bf0510094c3d","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e35acc2b-2532-471a-9f52-1298542149ef","type":"HBar"},"selection_glyph":null,"view":{"id":"3be17407-7fc1-4525-b241-c627aa6226ae","type":"CDSView"}},"id":"b2c5ec48-9eeb-4f82-9943-99b57d716219","type":"GlyphRenderer"},{"attributes":{"source":{"id":"d65c7ec1-162b-4962-a7e3-1fa9bf538a4d","type":"ColumnDataSource"}},"id":"d1ae6a85-05fb-46a3-9abc-24445636b6cc","type":"CDSView"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"734315fc-a98b-482e-9c80-ba287d3fe1d8","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"3b01c359-9452-4067-8d93-a76815549036","type":"Stack"}},"y":{"field":"fruits"}},"id":"9d85fa7d-b38f-4f30-934d-df8da473c496","type":"HBar"},{"attributes":{"fields":["2015","2016"]},"id":"3b01c359-9452-4067-8d93-a76815549036","type":"Stack"},{"attributes":{"source":{"id":"48208291-a96e-4573-85d7-657a6838253d","type":"ColumnDataSource"}},"id":"536584aa-e30d-4614-9d99-8bba8d73f5db","type":"CDSView"},{"attributes":{"plot":{"id":"ab6b23ad-4749-4999-bc2b-41dec653a780","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c14e1eb-14ae-4235-8d00-8d8ec31f5261","type":"BasicTicker"}},"id":"87ac5f39-b7a0-4bd1-8ff6-500749d05736","type":"Grid"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"48208291-a96e-4573-85d7-657a6838253d","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"49c01e75-8113-4367-9842-7da871eb9220","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"dad03ad2-0548-47a8-8c62-17e02467419c","type":"Stack"}},"y":{"field":"fruits"}},"id":"50fb0e1c-2aa5-4936-8d86-e7f38840b3c2","type":"HBar"},{"attributes":{"source":{"id":"d65c7ec1-162b-4962-a7e3-1fa9bf538a4d","type":"ColumnDataSource"}},"id":"25e7db9e-9f6b-46ac-b31c-9671224a84e3","type":"CDSView"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"b2c5ec48-9eeb-4f82-9943-99b57d716219","type":"GlyphRenderer"}]},"id":"aa9786d6-0ca7-4a35-af35-3ea2eab72d90","type":"LegendItem"},{"attributes":{"source":{"id":"d65c7ec1-162b-4962-a7e3-1fa9bf538a4d","type":"ColumnDataSource"}},"id":"7e7b76f3-95e0-4fe6-b3f3-7533868b0b1c","type":"CDSView"},{"attributes":{"fields":["2015","2016"]},"id":"45680834-bcf1-485c-9f6c-937aa6535d81","type":"Stack"},{"attributes":{},"id":"0c14e1eb-14ae-4235-8d00-8d8ec31f5261","type":"BasicTicker"},{"attributes":{"fields":[]},"id":"49c01e75-8113-4367-9842-7da871eb9220","type":"Stack"},{"attributes":{"formatter":{"id":"4b3ca92a-ebab-4cd6-bb5c-56a4cb467675","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"ab6b23ad-4749-4999-bc2b-41dec653a780","subtype":"Figure","type":"Plot"},"ticker":{"id":"73544a73-f42f-4740-952c-85b6e2e3ee28","type":"CategoricalTicker"}},"id":"c7908821-19e5-48ac-8b40-e65a7f79db99","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"d2f5a348-c8d1-4b0a-b79a-649e765b7a7f","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"5f829a92-328b-4256-bacc-d4f5964fbdef","type":"Stack"}},"y":{"field":"fruits"}},"id":"e35acc2b-2532-471a-9f52-1298542149ef","type":"HBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"917ba45a-4efd-4271-b9e3-78acec0c4aa6","type":"BoxAnnotation"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"b614104a-f7c5-419d-9050-c2603da35c8c","type":"GlyphRenderer"}]},"id":"db8ee928-8284-485c-ae35-13d2d6ff1f0b","type":"LegendItem"},{"attributes":{"overlay":{"id":"917ba45a-4efd-4271-b9e3-78acec0c4aa6","type":"BoxAnnotation"}},"id":"abdd362d-b594-41ae-bab4-5724d4d523cc","type":"BoxZoomTool"},{"attributes":{"fields":["2015","2016"]},"id":"70860c14-02f1-4489-9270-025cf1f39a3e","type":"Stack"},{"attributes":{"source":{"id":"48208291-a96e-4573-85d7-657a6838253d","type":"ColumnDataSource"}},"id":"3be17407-7fc1-4525-b241-c627aa6226ae","type":"CDSView"},{"attributes":{},"id":"f797a27b-93f0-4562-bdfb-8d55e99a14d8","type":"SaveTool"},{"attributes":{"fields":["2015"]},"id":"dad03ad2-0548-47a8-8c62-17e02467419c","type":"Stack"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"ab6b23ad-4749-4999-bc2b-41dec653a780","subtype":"Figure","type":"Plot"},"ticker":{"id":"73544a73-f42f-4740-952c-85b6e2e3ee28","type":"CategoricalTicker"}},"id":"651aac8f-ade8-46f7-bb84-c7f1edee6838","type":"Grid"},{"attributes":{"fields":["2015","2016","2017"]},"id":"cb6c40e3-73d3-4a99-a16d-0b4f6b6cc1d6","type":"Stack"},{"attributes":{"data_source":{"id":"d65c7ec1-162b-4962-a7e3-1fa9bf538a4d","type":"ColumnDataSource"},"glyph":{"id":"c4f89915-4e47-4804-85ce-b8aefda4929c","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50fb0e1c-2aa5-4936-8d86-e7f38840b3c2","type":"HBar"},"selection_glyph":null,"view":{"id":"7e7b76f3-95e0-4fe6-b3f3-7533868b0b1c","type":"CDSView"}},"id":"9791960f-59f7-4e6a-be45-67f794933858","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"48208291-a96e-4573-85d7-657a6838253d","type":"ColumnDataSource"},"glyph":{"id":"7b5e4c51-554d-4798-bee7-90bfe6b79c6b","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2a7226a2-446e-4f52-8848-5fd6f630e7e6","type":"HBar"},"selection_glyph":null,"view":{"id":"0d4a7707-36ce-4596-a977-fe33a8e2a28f","type":"CDSView"}},"id":"c90212b1-f20a-4e12-89c4-4e0331444e2d","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"734315fc-a98b-482e-9c80-ba287d3fe1d8","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"3b01c359-9452-4067-8d93-a76815549036","type":"Stack"}},"y":{"field":"fruits"}},"id":"0560d25c-c7a4-4279-bbf8-7183cdb924b1","type":"HBar"},{"attributes":{"data_source":{"id":"48208291-a96e-4573-85d7-657a6838253d","type":"ColumnDataSource"},"glyph":{"id":"9d85fa7d-b38f-4f30-934d-df8da473c496","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0560d25c-c7a4-4279-bbf8-7183cdb924b1","type":"HBar"},"selection_glyph":null,"view":{"id":"536584aa-e30d-4614-9d99-8bba8d73f5db","type":"CDSView"}},"id":"ff21187f-b13b-41f5-8702-ded912120487","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"d2f5a348-c8d1-4b0a-b79a-649e765b7a7f","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"5f829a92-328b-4256-bacc-d4f5964fbdef","type":"Stack"}},"y":{"field":"fruits"}},"id":"a9b69154-b2af-4011-96bf-bf0510094c3d","type":"HBar"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"9791960f-59f7-4e6a-be45-67f794933858","type":"GlyphRenderer"}]},"id":"2b6ac2b4-0183-46ba-bd31-2128015ae57b","type":"LegendItem"},{"attributes":{"formatter":{"id":"d9ffe0d5-431b-48d1-978f-c9ff98fa6643","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"ab6b23ad-4749-4999-bc2b-41dec653a780","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c14e1eb-14ae-4235-8d00-8d8ec31f5261","type":"BasicTicker"}},"id":"d18bdc4b-bd7b-497d-948c-c53b4ebd97f2","type":"LinearAxis"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"15825dcc-da96-4da1-9b35-595684fcaa8a","type":"FactorRange"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"008b2e17-1816-4265-8014-6660a382ca47","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"21eb9024-c767-46f8-ad82-32740aec8b83","type":"Stack"}},"y":{"field":"fruits"}},"id":"e317fead-01e8-4b09-9b7e-e24f15f32f4a","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"008b2e17-1816-4265-8014-6660a382ca47","type":"Stack"},{"attributes":{},"id":"64b3d7dd-b86b-47f7-8e6b-e1cc109b1ebc","type":"HelpTool"},{"attributes":{},"id":"4b3ca92a-ebab-4cd6-bb5c-56a4cb467675","type":"CategoricalTickFormatter"}],"root_ids":["ab6b23ad-4749-4999-bc2b-41dec653a780"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"f4770214-664c-49ca-972e-2d3ae314eb3b","elementid":"58b7512a-18ca-46b5-a0f3-78aabc3e205b","modelid":"ab6b23ad-4749-4999-bc2b-41dec653a780"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
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