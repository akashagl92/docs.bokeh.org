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
      };var element = document.getElementById("88589187-896e-4928-9552-d2d41d4a9670");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '88589187-896e-4928-9552-d2d41d4a9670' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"452dc739-dc55-4288-ae53-e4e568702d24":{"roots":{"references":[{"attributes":{},"id":"dc2895a6-2bbf-4624-a871-9b32ee6777c3","type":"CategoricalTicker"},{"attributes":{"fields":["2015","2016"]},"id":"83ede2ce-9035-4742-9b54-8917e5f21974","type":"Stack"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"b1f522c2-de1c-460f-ba34-9dfdc98193f7","type":"GlyphRenderer"}]},"id":"f27301e4-b0a7-454e-a16a-c8e4be159a06","type":"LegendItem"},{"attributes":{"overlay":{"id":"e394d384-fee6-4b47-aa69-72850ca1bf42","type":"BoxAnnotation"}},"id":"723f4a5a-1ac2-4dcc-a179-72d7205dcf13","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"69bd2815-9a08-4cb9-9f07-40fa80240061","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"4351454b-0c18-45ff-92c3-6d163ceb1a3e","type":"Stack"}},"y":{"field":"fruits"}},"id":"105ca8a3-ce4e-4c2c-acc2-f2070fc9291b","type":"HBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"12a15300-ec4c-4891-bbd3-9432e8ad905a","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"4351454b-0c18-45ff-92c3-6d163ceb1a3e","type":"Stack"},{"attributes":{"source":{"id":"c5fad4fd-449b-4f51-be88-76626add2ba9","type":"ColumnDataSource"}},"id":"8d1d59f6-9c1f-4629-add4-dd24feec6062","type":"CDSView"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"384d42c4-8a75-46d3-b077-d0ecfae1cce8","subtype":"Figure","type":"Plot"},"ticker":{"id":"dc2895a6-2bbf-4624-a871-9b32ee6777c3","type":"CategoricalTicker"}},"id":"6f5c53e3-b05a-4302-bdca-5a16276f349a","type":"Grid"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"096916b6-b37c-4cd8-8764-52758e3fe0a6","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"af678572-ebbb-4e0c-b6ae-599ee898130b","type":"Stack"}},"y":{"field":"fruits"}},"id":"ff0ccaf3-a247-4383-b2d3-c6df48e84514","type":"HBar"},{"attributes":{"source":{"id":"3dce6bdf-c0db-4a11-b233-76e4a06b0034","type":"ColumnDataSource"}},"id":"eea0157f-3394-4160-8276-bf6a6ed8fe78","type":"CDSView"},{"attributes":{"fields":["2015","2016"]},"id":"796731e9-3d06-448f-ad7a-740999c29dce","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"796731e9-3d06-448f-ad7a-740999c29dce","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"12a15300-ec4c-4891-bbd3-9432e8ad905a","type":"Stack"}},"y":{"field":"fruits"}},"id":"7b25bd38-a6eb-4be7-bdff-61861bf75307","type":"HBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"0f1637bd-54d9-4957-b9b4-2f641afd9188","type":"Stack"},{"attributes":{"data_source":{"id":"c5fad4fd-449b-4f51-be88-76626add2ba9","type":"ColumnDataSource"},"glyph":{"id":"8fb2cc09-4b24-405d-a593-280a30123120","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"703b02e5-cc22-4586-9cfc-90f580bad6b0","type":"HBar"},"selection_glyph":null,"view":{"id":"9264b169-3405-4d8e-b308-73afa99c76cf","type":"CDSView"}},"id":"a841eee4-bea1-47bc-afe6-d082ed600f49","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"b02b0355-259f-414e-a264-f3a4e4234fab","type":"GlyphRenderer"}]},"id":"0d5a562c-d701-4432-9364-3ca28a264930","type":"LegendItem"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"fbf230e1-5d97-4068-82f5-3b7538687587","type":"GlyphRenderer"}]},"id":"0ddb5289-840f-44fe-8356-81364b5f9188","type":"LegendItem"},{"attributes":{"fields":["2015"]},"id":"7db3bb99-4c92-4bbf-9df6-8326d2ca75f2","type":"Stack"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"a841eee4-bea1-47bc-afe6-d082ed600f49","type":"GlyphRenderer"}]},"id":"867b211a-7b48-4a6b-bf7d-82016f091f80","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"69bd2815-9a08-4cb9-9f07-40fa80240061","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"4351454b-0c18-45ff-92c3-6d163ceb1a3e","type":"Stack"}},"y":{"field":"fruits"}},"id":"6d5fd7ad-59b6-4cd5-9748-2f3b9bf939dd","type":"HBar"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"7c17ce4c-f370-4994-9fb3-7f049275f0c8","type":"Range1d"},{"attributes":{"items":[{"id":"867b211a-7b48-4a6b-bf7d-82016f091f80","type":"LegendItem"},{"id":"0d5a562c-d701-4432-9364-3ca28a264930","type":"LegendItem"},{"id":"2522e79e-6b3f-4985-9c44-39bb7198b312","type":"LegendItem"},{"id":"f27301e4-b0a7-454e-a16a-c8e4be159a06","type":"LegendItem"},{"id":"0ddb5289-840f-44fe-8356-81364b5f9188","type":"LegendItem"},{"id":"b9117662-32d4-4a2c-bb6e-ec7542a50833","type":"LegendItem"}],"location":"top_left","plot":{"id":"384d42c4-8a75-46d3-b077-d0ecfae1cce8","subtype":"Figure","type":"Plot"}},"id":"fabe51c9-b74c-44ed-b2b6-7c2bd014e708","type":"Legend"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"3dce6bdf-c0db-4a11-b233-76e4a06b0034","type":"ColumnDataSource"},{"attributes":{},"id":"ed3bebc4-1825-4ace-9547-3f08d89c1fd3","type":"PanTool"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"925fdc63-d127-4b75-acc6-30545b34471d","type":"GlyphRenderer"}]},"id":"2522e79e-6b3f-4985-9c44-39bb7198b312","type":"LegendItem"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"02378e84-9bc6-4df9-94c7-aa9c194a9ef5","type":"GlyphRenderer"}]},"id":"b9117662-32d4-4a2c-bb6e-ec7542a50833","type":"LegendItem"},{"attributes":{"fields":["2015"]},"id":"69bd2815-9a08-4cb9-9f07-40fa80240061","type":"Stack"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e394d384-fee6-4b47-aa69-72850ca1bf42","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"796731e9-3d06-448f-ad7a-740999c29dce","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"12a15300-ec4c-4891-bbd3-9432e8ad905a","type":"Stack"}},"y":{"field":"fruits"}},"id":"a535f0a1-c7df-4cd1-ad8e-0396271b0527","type":"HBar"},{"attributes":{"fields":[]},"id":"502f7cf1-47fe-461d-861c-d1e79db6f821","type":"Stack"},{"attributes":{"data_source":{"id":"c5fad4fd-449b-4f51-be88-76626add2ba9","type":"ColumnDataSource"},"glyph":{"id":"356f6757-a6a6-4ace-9bfe-7d7fcb53e266","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27924bce-2940-4c02-bcc8-9367ca6ce31f","type":"HBar"},"selection_glyph":null,"view":{"id":"ada76131-c099-421f-bde5-1f63a82dbbf8","type":"CDSView"}},"id":"925fdc63-d127-4b75-acc6-30545b34471d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"c5fad4fd-449b-4f51-be88-76626add2ba9","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3dce6bdf-c0db-4a11-b233-76e4a06b0034","type":"ColumnDataSource"},"glyph":{"id":"105ca8a3-ce4e-4c2c-acc2-f2070fc9291b","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6d5fd7ad-59b6-4cd5-9748-2f3b9bf939dd","type":"HBar"},"selection_glyph":null,"view":{"id":"eea0157f-3394-4160-8276-bf6a6ed8fe78","type":"CDSView"}},"id":"fbf230e1-5d97-4068-82f5-3b7538687587","type":"GlyphRenderer"},{"attributes":{"fields":["2015"]},"id":"746e809d-ba45-4e56-879e-c869f65432c4","type":"Stack"},{"attributes":{"fields":["2015"]},"id":"af678572-ebbb-4e0c-b6ae-599ee898130b","type":"Stack"},{"attributes":{},"id":"e16735bc-9c16-459a-a0af-c6a8022ce413","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"83ede2ce-9035-4742-9b54-8917e5f21974","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"0f1637bd-54d9-4957-b9b4-2f641afd9188","type":"Stack"}},"y":{"field":"fruits"}},"id":"27924bce-2940-4c02-bcc8-9367ca6ce31f","type":"HBar"},{"attributes":{},"id":"9f0db5e2-a835-4893-b8b6-16cd72f7d1ee","type":"CategoricalScale"},{"attributes":{},"id":"b748826d-f7ba-4880-8068-b4cb42e92efd","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"3dce6bdf-c0db-4a11-b233-76e4a06b0034","type":"ColumnDataSource"}},"id":"f0aef383-29f3-4ba3-a4b1-f24fbb75cca9","type":"CDSView"},{"attributes":{"plot":{"id":"384d42c4-8a75-46d3-b077-d0ecfae1cce8","subtype":"Figure","type":"Plot"},"ticker":{"id":"ebd5c900-3a38-49ec-8ae2-a05e5e6abb87","type":"BasicTicker"}},"id":"3cc913d5-ef8f-4bb0-9316-c02fa31fc7a4","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"502f7cf1-47fe-461d-861c-d1e79db6f821","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"7db3bb99-4c92-4bbf-9df6-8326d2ca75f2","type":"Stack"}},"y":{"field":"fruits"}},"id":"703b02e5-cc22-4586-9cfc-90f580bad6b0","type":"HBar"},{"attributes":{"source":{"id":"c5fad4fd-449b-4f51-be88-76626add2ba9","type":"ColumnDataSource"}},"id":"ada76131-c099-421f-bde5-1f63a82dbbf8","type":"CDSView"},{"attributes":{"data_source":{"id":"c5fad4fd-449b-4f51-be88-76626add2ba9","type":"ColumnDataSource"},"glyph":{"id":"0e5d7be3-f2db-41d2-8659-b783d08a4f64","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"acddcdda-6576-42bd-a4d8-456fb3ab7e66","type":"HBar"},"selection_glyph":null,"view":{"id":"8d1d59f6-9c1f-4629-add4-dd24feec6062","type":"CDSView"}},"id":"b02b0355-259f-414e-a264-f3a4e4234fab","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ed3bebc4-1825-4ace-9547-3f08d89c1fd3","type":"PanTool"},{"id":"74184f51-c052-4ff7-aec6-b8e2a4def4b6","type":"WheelZoomTool"},{"id":"723f4a5a-1ac2-4dcc-a179-72d7205dcf13","type":"BoxZoomTool"},{"id":"6ddcfdc2-3601-4d01-ab2c-2feb726abc8c","type":"SaveTool"},{"id":"62b2a2ea-94a5-47d1-992b-dbc8caa0ea2c","type":"ResetTool"},{"id":"c98ce2ee-97a6-459a-852a-82b27b13fe3a","type":"HelpTool"}]},"id":"5d9dd4b1-c785-4ddf-b3d6-c9a0227af8de","type":"Toolbar"},{"attributes":{},"id":"3c3b3d1d-2ef6-4afe-aa63-757939d78eab","type":"BasicTickFormatter"},{"attributes":{},"id":"6ddcfdc2-3601-4d01-ab2c-2feb726abc8c","type":"SaveTool"},{"attributes":{},"id":"ebd5c900-3a38-49ec-8ae2-a05e5e6abb87","type":"BasicTicker"},{"attributes":{"below":[{"id":"354f8935-6566-4986-8286-6a156b5c593e","type":"LinearAxis"}],"left":[{"id":"b17468fc-09b7-40a9-bbc1-fd9203339e7e","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"354f8935-6566-4986-8286-6a156b5c593e","type":"LinearAxis"},{"id":"3cc913d5-ef8f-4bb0-9316-c02fa31fc7a4","type":"Grid"},{"id":"b17468fc-09b7-40a9-bbc1-fd9203339e7e","type":"CategoricalAxis"},{"id":"6f5c53e3-b05a-4302-bdca-5a16276f349a","type":"Grid"},{"id":"e394d384-fee6-4b47-aa69-72850ca1bf42","type":"BoxAnnotation"},{"id":"fabe51c9-b74c-44ed-b2b6-7c2bd014e708","type":"Legend"},{"id":"a841eee4-bea1-47bc-afe6-d082ed600f49","type":"GlyphRenderer"},{"id":"b02b0355-259f-414e-a264-f3a4e4234fab","type":"GlyphRenderer"},{"id":"925fdc63-d127-4b75-acc6-30545b34471d","type":"GlyphRenderer"},{"id":"b1f522c2-de1c-460f-ba34-9dfdc98193f7","type":"GlyphRenderer"},{"id":"fbf230e1-5d97-4068-82f5-3b7538687587","type":"GlyphRenderer"},{"id":"02378e84-9bc6-4df9-94c7-aa9c194a9ef5","type":"GlyphRenderer"}],"title":{"id":"7c223160-77f4-400d-a095-bee60bda9c70","type":"Title"},"toolbar":{"id":"5d9dd4b1-c785-4ddf-b3d6-c9a0227af8de","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7c17ce4c-f370-4994-9fb3-7f049275f0c8","type":"Range1d"},"x_scale":{"id":"e16735bc-9c16-459a-a0af-c6a8022ce413","type":"LinearScale"},"y_range":{"id":"722b8898-b40b-4be0-a053-1cd075ffd3c7","type":"FactorRange"},"y_scale":{"id":"9f0db5e2-a835-4893-b8b6-16cd72f7d1ee","type":"CategoricalScale"}},"id":"384d42c4-8a75-46d3-b077-d0ecfae1cce8","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"746e809d-ba45-4e56-879e-c869f65432c4","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"118838ad-4623-4b13-b312-9e4b9b4d6d58","type":"Stack"}},"y":{"field":"fruits"}},"id":"acddcdda-6576-42bd-a4d8-456fb3ab7e66","type":"HBar"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"7c223160-77f4-400d-a095-bee60bda9c70","type":"Title"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"722b8898-b40b-4be0-a053-1cd075ffd3c7","type":"FactorRange"},{"attributes":{"fields":[]},"id":"096916b6-b37c-4cd8-8764-52758e3fe0a6","type":"Stack"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"83ede2ce-9035-4742-9b54-8917e5f21974","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"0f1637bd-54d9-4957-b9b4-2f641afd9188","type":"Stack"}},"y":{"field":"fruits"}},"id":"356f6757-a6a6-4ace-9bfe-7d7fcb53e266","type":"HBar"},{"attributes":{},"id":"74184f51-c052-4ff7-aec6-b8e2a4def4b6","type":"WheelZoomTool"},{"attributes":{},"id":"62b2a2ea-94a5-47d1-992b-dbc8caa0ea2c","type":"ResetTool"},{"attributes":{"fields":["2015","2016"]},"id":"118838ad-4623-4b13-b312-9e4b9b4d6d58","type":"Stack"},{"attributes":{},"id":"c98ce2ee-97a6-459a-852a-82b27b13fe3a","type":"HelpTool"},{"attributes":{"data_source":{"id":"3dce6bdf-c0db-4a11-b233-76e4a06b0034","type":"ColumnDataSource"},"glyph":{"id":"ff0ccaf3-a247-4383-b2d3-c6df48e84514","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e3d35bd1-7cfe-4728-a87f-f9725df37b86","type":"HBar"},"selection_glyph":null,"view":{"id":"40b52bbf-0945-4f4a-9704-e958dc2c9bfe","type":"CDSView"}},"id":"b1f522c2-de1c-460f-ba34-9dfdc98193f7","type":"GlyphRenderer"},{"attributes":{"source":{"id":"3dce6bdf-c0db-4a11-b233-76e4a06b0034","type":"ColumnDataSource"}},"id":"40b52bbf-0945-4f4a-9704-e958dc2c9bfe","type":"CDSView"},{"attributes":{"formatter":{"id":"b748826d-f7ba-4880-8068-b4cb42e92efd","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"384d42c4-8a75-46d3-b077-d0ecfae1cce8","subtype":"Figure","type":"Plot"},"ticker":{"id":"dc2895a6-2bbf-4624-a871-9b32ee6777c3","type":"CategoricalTicker"}},"id":"b17468fc-09b7-40a9-bbc1-fd9203339e7e","type":"CategoricalAxis"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"746e809d-ba45-4e56-879e-c869f65432c4","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"118838ad-4623-4b13-b312-9e4b9b4d6d58","type":"Stack"}},"y":{"field":"fruits"}},"id":"0e5d7be3-f2db-41d2-8659-b783d08a4f64","type":"HBar"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"502f7cf1-47fe-461d-861c-d1e79db6f821","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"7db3bb99-4c92-4bbf-9df6-8326d2ca75f2","type":"Stack"}},"y":{"field":"fruits"}},"id":"8fb2cc09-4b24-405d-a593-280a30123120","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"096916b6-b37c-4cd8-8764-52758e3fe0a6","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"af678572-ebbb-4e0c-b6ae-599ee898130b","type":"Stack"}},"y":{"field":"fruits"}},"id":"e3d35bd1-7cfe-4728-a87f-f9725df37b86","type":"HBar"},{"attributes":{"data_source":{"id":"3dce6bdf-c0db-4a11-b233-76e4a06b0034","type":"ColumnDataSource"},"glyph":{"id":"a535f0a1-c7df-4cd1-ad8e-0396271b0527","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7b25bd38-a6eb-4be7-bdff-61861bf75307","type":"HBar"},"selection_glyph":null,"view":{"id":"f0aef383-29f3-4ba3-a4b1-f24fbb75cca9","type":"CDSView"}},"id":"02378e84-9bc6-4df9-94c7-aa9c194a9ef5","type":"GlyphRenderer"},{"attributes":{"source":{"id":"c5fad4fd-449b-4f51-be88-76626add2ba9","type":"ColumnDataSource"}},"id":"9264b169-3405-4d8e-b308-73afa99c76cf","type":"CDSView"},{"attributes":{"formatter":{"id":"3c3b3d1d-2ef6-4afe-aa63-757939d78eab","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"384d42c4-8a75-46d3-b077-d0ecfae1cce8","subtype":"Figure","type":"Plot"},"ticker":{"id":"ebd5c900-3a38-49ec-8ae2-a05e5e6abb87","type":"BasicTicker"}},"id":"354f8935-6566-4986-8286-6a156b5c593e","type":"LinearAxis"}],"root_ids":["384d42c4-8a75-46d3-b077-d0ecfae1cce8"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"452dc739-dc55-4288-ae53-e4e568702d24","elementid":"88589187-896e-4928-9552-d2d41d4a9670","modelid":"384d42c4-8a75-46d3-b077-d0ecfae1cce8"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
