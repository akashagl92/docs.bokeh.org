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
      };var element = document.getElementById("8202c403-6570-4981-a0ec-77694d48def7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8202c403-6570-4981-a0ec-77694d48def7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"a9bd5922-672c-4e4d-86d3-daf2b05ff219":{"roots":{"references":[{"attributes":{},"id":"bb635b39-e639-4343-8806-dbd1f2be7e10","type":"BasicTickFormatter"},{"attributes":{"fields":["2015","2016"]},"id":"0700375e-5ec5-4533-b219-661cb298a748","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"62e96f00-d6b5-4989-aa88-53dac209b0bd","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"3655c24e-69cb-4396-8a6b-bb6e6d0492ac","type":"Stack"}},"y":{"field":"fruits"}},"id":"d0f37936-3695-484e-bebf-b42c3acd0179","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"a539c338-1128-4c4d-9ac5-d983c8d9ce25","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"c16b051a-37dd-4dd9-b34d-fd1dc054fdd5","type":"Stack"}},"y":{"field":"fruits"}},"id":"197721ec-653f-43a9-995b-87ba6b3c7a1b","type":"HBar"},{"attributes":{"plot":{"id":"482540f0-a253-4de4-a090-6b992410b91b","subtype":"Figure","type":"Plot"},"ticker":{"id":"935aa587-c566-443e-9fab-fdc43cae0b8c","type":"BasicTicker"}},"id":"76247d8c-f1b0-45d2-834a-b5b4edc32caf","type":"Grid"},{"attributes":{"source":{"id":"18a7eef6-3d71-4821-a4e1-e66acaa86061","type":"ColumnDataSource"}},"id":"1cf9e506-fb5d-4cde-807a-868adf7ee373","type":"CDSView"},{"attributes":{"fields":["2015","2016","2017"]},"id":"b37bdedb-4e71-4abf-93f2-7ad817ff44b2","type":"Stack"},{"attributes":{},"id":"a6cbf4c9-9a6d-4bf9-841c-b523afc07bcd","type":"CategoricalScale"},{"attributes":{},"id":"8a79aa69-1a4a-40f9-9aa6-892cd8d175b4","type":"CategoricalTickFormatter"},{"attributes":{},"id":"08b36b3f-0815-4ab0-8830-4d1f681c8479","type":"PanTool"},{"attributes":{"formatter":{"id":"bb635b39-e639-4343-8806-dbd1f2be7e10","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"482540f0-a253-4de4-a090-6b992410b91b","subtype":"Figure","type":"Plot"},"ticker":{"id":"935aa587-c566-443e-9fab-fdc43cae0b8c","type":"BasicTicker"}},"id":"fc13c477-e68f-498e-bd0a-374f3d5f9eaa","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"1a68f38b-66eb-40cd-ad67-2073d763dfef","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"1fdfb047-bfb3-4ca4-9b9e-2299649d9eef","type":"Stack"}},"y":{"field":"fruits"}},"id":"fa275370-afb6-4bca-a760-277333d52ce3","type":"HBar"},{"attributes":{"fields":["2015","2016"]},"id":"16f4c8fc-fde6-494e-a09c-6ed4f0a25b1c","type":"Stack"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"377f891a-2a9b-4bf1-af4b-a6bb39d416cf","type":"GlyphRenderer"}]},"id":"88c26cd0-f904-473e-be05-9b403273eb0a","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"6cae0ca9-87b6-40ca-a0e7-b4b8e1998eb1","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"72d2a4c9-e0f6-4b2d-9587-558b8ce00664","type":"Stack"}},"y":{"field":"fruits"}},"id":"eddb2112-77ab-4bc6-97d3-84091857a1a4","type":"HBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"488d557e-fbae-4ebd-b444-9c413fc4baab","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"6cae0ca9-87b6-40ca-a0e7-b4b8e1998eb1","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"72d2a4c9-e0f6-4b2d-9587-558b8ce00664","type":"Stack"}},"y":{"field":"fruits"}},"id":"0dd43a93-63cb-4df2-afd9-2862a7203527","type":"HBar"},{"attributes":{"fields":[]},"id":"a539c338-1128-4c4d-9ac5-d983c8d9ce25","type":"Stack"},{"attributes":{"source":{"id":"18a7eef6-3d71-4821-a4e1-e66acaa86061","type":"ColumnDataSource"}},"id":"0c6499d4-3d60-4c01-b812-67c06619ae78","type":"CDSView"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"eedf36db-5ac3-4254-ab16-5b88e8ab0ab6","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"488d557e-fbae-4ebd-b444-9c413fc4baab","type":"BoxAnnotation"}},"id":"c7c24dab-61b5-419e-8f5f-3ed71c1d956f","type":"BoxZoomTool"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"37cc7718-d48e-485a-8748-b3d3922cbf97","type":"GlyphRenderer"}]},"id":"30443524-da38-4fb5-89b8-b9ca7d3c94ba","type":"LegendItem"},{"attributes":{},"id":"935aa587-c566-443e-9fab-fdc43cae0b8c","type":"BasicTicker"},{"attributes":{"data_source":{"id":"eedf36db-5ac3-4254-ab16-5b88e8ab0ab6","type":"ColumnDataSource"},"glyph":{"id":"a6511487-0baa-4c84-97ce-f2bce00a3044","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fa275370-afb6-4bca-a760-277333d52ce3","type":"HBar"},"selection_glyph":null,"view":{"id":"0fcc0776-f430-431e-b702-89c76f3d465c","type":"CDSView"}},"id":"37cc7718-d48e-485a-8748-b3d3922cbf97","type":"GlyphRenderer"},{"attributes":{"fields":["2015","2016"]},"id":"72d2a4c9-e0f6-4b2d-9587-558b8ce00664","type":"Stack"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"cae8d642-097c-43d1-a87d-8bc7a0e03d60","type":"GlyphRenderer"}]},"id":"5d18bab9-3371-43a0-92d8-92a49ae2d9c6","type":"LegendItem"},{"attributes":{"fields":["2015"]},"id":"3655c24e-69cb-4396-8a6b-bb6e6d0492ac","type":"Stack"},{"attributes":{},"id":"14525aac-1571-4da7-bffc-c0910b262401","type":"HelpTool"},{"attributes":{"source":{"id":"18a7eef6-3d71-4821-a4e1-e66acaa86061","type":"ColumnDataSource"}},"id":"a7d8828c-b2a4-4da3-bd1f-0efc87caf2c8","type":"CDSView"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"a539c338-1128-4c4d-9ac5-d983c8d9ce25","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"c16b051a-37dd-4dd9-b34d-fd1dc054fdd5","type":"Stack"}},"y":{"field":"fruits"}},"id":"1764831a-56b3-45e0-8cc9-f72a08ed9024","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"6cae0ca9-87b6-40ca-a0e7-b4b8e1998eb1","type":"Stack"},{"attributes":{"fields":[]},"id":"62e96f00-d6b5-4989-aa88-53dac209b0bd","type":"Stack"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"08b36b3f-0815-4ab0-8830-4d1f681c8479","type":"PanTool"},{"id":"805c177a-5c3f-4ec5-85b9-d74e6781b0e8","type":"WheelZoomTool"},{"id":"c7c24dab-61b5-419e-8f5f-3ed71c1d956f","type":"BoxZoomTool"},{"id":"2ccebe21-f1ff-4df6-9337-fd9e1a92c223","type":"SaveTool"},{"id":"a3f09de5-514d-4b13-bdf7-de909206072f","type":"ResetTool"},{"id":"14525aac-1571-4da7-bffc-c0910b262401","type":"HelpTool"}]},"id":"f37624f5-04ae-4703-ade9-8f06f5289c90","type":"Toolbar"},{"attributes":{"fields":["2015"]},"id":"c16b051a-37dd-4dd9-b34d-fd1dc054fdd5","type":"Stack"},{"attributes":{},"id":"805c177a-5c3f-4ec5-85b9-d74e6781b0e8","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"16f4c8fc-fde6-494e-a09c-6ed4f0a25b1c","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"b37bdedb-4e71-4abf-93f2-7ad817ff44b2","type":"Stack"}},"y":{"field":"fruits"}},"id":"babb0894-61a9-4906-972e-483a66b34801","type":"HBar"},{"attributes":{"formatter":{"id":"8a79aa69-1a4a-40f9-9aa6-892cd8d175b4","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"482540f0-a253-4de4-a090-6b992410b91b","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e91f3dc-ca3e-4181-aa1e-50b79013d765","type":"CategoricalTicker"}},"id":"f06b7317-4a65-482d-b276-40b5259386f1","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"0700375e-5ec5-4533-b219-661cb298a748","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"a102470f-36bf-4d35-b37b-d2765ae62437","type":"Stack"}},"y":{"field":"fruits"}},"id":"2b46d33b-aa13-4886-9910-cfd41c0883d2","type":"HBar"},{"attributes":{},"id":"743f3e06-7ec2-41d0-b90e-0f29cb308124","type":"LinearScale"},{"attributes":{"source":{"id":"eedf36db-5ac3-4254-ab16-5b88e8ab0ab6","type":"ColumnDataSource"}},"id":"62d2ee61-016b-4d21-b90f-1de874b0ef30","type":"CDSView"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"7cb0aa94-f11a-48f7-91cc-05f5e9412f5d","type":"GlyphRenderer"}]},"id":"4d0da25a-c054-4f74-87b2-7a0fd1e9f9ea","type":"LegendItem"},{"attributes":{"source":{"id":"eedf36db-5ac3-4254-ab16-5b88e8ab0ab6","type":"ColumnDataSource"}},"id":"cc83ca41-5f2f-4ccd-8e49-cc77133baa30","type":"CDSView"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"0700375e-5ec5-4533-b219-661cb298a748","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"a102470f-36bf-4d35-b37b-d2765ae62437","type":"Stack"}},"y":{"field":"fruits"}},"id":"e31b4985-4763-4dd7-8560-be16934c6c16","type":"HBar"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"d60a6fb2-a4ee-47ef-8304-e89f357b6a1b","type":"GlyphRenderer"}]},"id":"be446e9b-affc-4862-9d56-64a26492e9e7","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"1a68f38b-66eb-40cd-ad67-2073d763dfef","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"1fdfb047-bfb3-4ca4-9b9e-2299649d9eef","type":"Stack"}},"y":{"field":"fruits"}},"id":"a6511487-0baa-4c84-97ce-f2bce00a3044","type":"HBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"a102470f-36bf-4d35-b37b-d2765ae62437","type":"Stack"},{"attributes":{"data_source":{"id":"eedf36db-5ac3-4254-ab16-5b88e8ab0ab6","type":"ColumnDataSource"},"glyph":{"id":"e31b4985-4763-4dd7-8560-be16934c6c16","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2b46d33b-aa13-4886-9910-cfd41c0883d2","type":"HBar"},"selection_glyph":null,"view":{"id":"cc83ca41-5f2f-4ccd-8e49-cc77133baa30","type":"CDSView"}},"id":"377f891a-2a9b-4bf1-af4b-a6bb39d416cf","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"1099d147-592b-4c0f-96f3-2abf7b2060ee","type":"GlyphRenderer"}]},"id":"3944b9f3-1247-45b9-ba20-5ea92bd0e66c","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"18a7eef6-3d71-4821-a4e1-e66acaa86061","type":"ColumnDataSource"},{"attributes":{"source":{"id":"eedf36db-5ac3-4254-ab16-5b88e8ab0ab6","type":"ColumnDataSource"}},"id":"0fcc0776-f430-431e-b702-89c76f3d465c","type":"CDSView"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"17f7fc4f-c4dd-4fbb-a360-53e8553e891d","type":"FactorRange"},{"attributes":{"items":[{"id":"be446e9b-affc-4862-9d56-64a26492e9e7","type":"LegendItem"},{"id":"5d18bab9-3371-43a0-92d8-92a49ae2d9c6","type":"LegendItem"},{"id":"4d0da25a-c054-4f74-87b2-7a0fd1e9f9ea","type":"LegendItem"},{"id":"3944b9f3-1247-45b9-ba20-5ea92bd0e66c","type":"LegendItem"},{"id":"30443524-da38-4fb5-89b8-b9ca7d3c94ba","type":"LegendItem"},{"id":"88c26cd0-f904-473e-be05-9b403273eb0a","type":"LegendItem"}],"location":"top_left","plot":{"id":"482540f0-a253-4de4-a090-6b992410b91b","subtype":"Figure","type":"Plot"}},"id":"ff1f97f9-97d0-4f7e-8c1f-ed0bb6a25415","type":"Legend"},{"attributes":{"fields":["2015","2016"]},"id":"1fdfb047-bfb3-4ca4-9b9e-2299649d9eef","type":"Stack"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"e632275a-00aa-41a0-a69c-ce3ff2197b03","type":"Title"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"16f4c8fc-fde6-494e-a09c-6ed4f0a25b1c","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"b37bdedb-4e71-4abf-93f2-7ad817ff44b2","type":"Stack"}},"y":{"field":"fruits"}},"id":"0b1adcf6-f361-4f7e-933c-bc7d8de4298b","type":"HBar"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"62e96f00-d6b5-4989-aa88-53dac209b0bd","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"3655c24e-69cb-4396-8a6b-bb6e6d0492ac","type":"Stack"}},"y":{"field":"fruits"}},"id":"8f07f8d5-0f71-4ce4-b22b-c4d8c4eaf7f9","type":"HBar"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"6d327325-c7cc-4eec-aa80-1d5a951a041b","type":"Range1d"},{"attributes":{"fields":["2015"]},"id":"1a68f38b-66eb-40cd-ad67-2073d763dfef","type":"Stack"},{"attributes":{"below":[{"id":"fc13c477-e68f-498e-bd0a-374f3d5f9eaa","type":"LinearAxis"}],"left":[{"id":"f06b7317-4a65-482d-b276-40b5259386f1","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"fc13c477-e68f-498e-bd0a-374f3d5f9eaa","type":"LinearAxis"},{"id":"76247d8c-f1b0-45d2-834a-b5b4edc32caf","type":"Grid"},{"id":"f06b7317-4a65-482d-b276-40b5259386f1","type":"CategoricalAxis"},{"id":"22fd5dd7-000b-4ac1-ae3f-31ac46d13414","type":"Grid"},{"id":"488d557e-fbae-4ebd-b444-9c413fc4baab","type":"BoxAnnotation"},{"id":"ff1f97f9-97d0-4f7e-8c1f-ed0bb6a25415","type":"Legend"},{"id":"d60a6fb2-a4ee-47ef-8304-e89f357b6a1b","type":"GlyphRenderer"},{"id":"cae8d642-097c-43d1-a87d-8bc7a0e03d60","type":"GlyphRenderer"},{"id":"7cb0aa94-f11a-48f7-91cc-05f5e9412f5d","type":"GlyphRenderer"},{"id":"1099d147-592b-4c0f-96f3-2abf7b2060ee","type":"GlyphRenderer"},{"id":"37cc7718-d48e-485a-8748-b3d3922cbf97","type":"GlyphRenderer"},{"id":"377f891a-2a9b-4bf1-af4b-a6bb39d416cf","type":"GlyphRenderer"}],"title":{"id":"e632275a-00aa-41a0-a69c-ce3ff2197b03","type":"Title"},"toolbar":{"id":"f37624f5-04ae-4703-ade9-8f06f5289c90","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6d327325-c7cc-4eec-aa80-1d5a951a041b","type":"Range1d"},"x_scale":{"id":"743f3e06-7ec2-41d0-b90e-0f29cb308124","type":"LinearScale"},"y_range":{"id":"17f7fc4f-c4dd-4fbb-a360-53e8553e891d","type":"FactorRange"},"y_scale":{"id":"a6cbf4c9-9a6d-4bf9-841c-b523afc07bcd","type":"CategoricalScale"}},"id":"482540f0-a253-4de4-a090-6b992410b91b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2ccebe21-f1ff-4df6-9337-fd9e1a92c223","type":"SaveTool"},{"attributes":{"data_source":{"id":"eedf36db-5ac3-4254-ab16-5b88e8ab0ab6","type":"ColumnDataSource"},"glyph":{"id":"1764831a-56b3-45e0-8cc9-f72a08ed9024","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"197721ec-653f-43a9-995b-87ba6b3c7a1b","type":"HBar"},"selection_glyph":null,"view":{"id":"62d2ee61-016b-4d21-b90f-1de874b0ef30","type":"CDSView"}},"id":"1099d147-592b-4c0f-96f3-2abf7b2060ee","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"482540f0-a253-4de4-a090-6b992410b91b","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e91f3dc-ca3e-4181-aa1e-50b79013d765","type":"CategoricalTicker"}},"id":"22fd5dd7-000b-4ac1-ae3f-31ac46d13414","type":"Grid"},{"attributes":{"data_source":{"id":"18a7eef6-3d71-4821-a4e1-e66acaa86061","type":"ColumnDataSource"},"glyph":{"id":"0b1adcf6-f361-4f7e-933c-bc7d8de4298b","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"babb0894-61a9-4906-972e-483a66b34801","type":"HBar"},"selection_glyph":null,"view":{"id":"a7d8828c-b2a4-4da3-bd1f-0efc87caf2c8","type":"CDSView"}},"id":"7cb0aa94-f11a-48f7-91cc-05f5e9412f5d","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18a7eef6-3d71-4821-a4e1-e66acaa86061","type":"ColumnDataSource"},"glyph":{"id":"8f07f8d5-0f71-4ce4-b22b-c4d8c4eaf7f9","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d0f37936-3695-484e-bebf-b42c3acd0179","type":"HBar"},"selection_glyph":null,"view":{"id":"1cf9e506-fb5d-4cde-807a-868adf7ee373","type":"CDSView"}},"id":"d60a6fb2-a4ee-47ef-8304-e89f357b6a1b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18a7eef6-3d71-4821-a4e1-e66acaa86061","type":"ColumnDataSource"},"glyph":{"id":"0dd43a93-63cb-4df2-afd9-2862a7203527","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eddb2112-77ab-4bc6-97d3-84091857a1a4","type":"HBar"},"selection_glyph":null,"view":{"id":"0c6499d4-3d60-4c01-b812-67c06619ae78","type":"CDSView"}},"id":"cae8d642-097c-43d1-a87d-8bc7a0e03d60","type":"GlyphRenderer"},{"attributes":{},"id":"a3f09de5-514d-4b13-bdf7-de909206072f","type":"ResetTool"},{"attributes":{},"id":"6e91f3dc-ca3e-4181-aa1e-50b79013d765","type":"CategoricalTicker"}],"root_ids":["482540f0-a253-4de4-a090-6b992410b91b"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"a9bd5922-672c-4e4d-86d3-daf2b05ff219","elementid":"8202c403-6570-4981-a0ec-77694d48def7","modelid":"482540f0-a253-4de4-a090-6b992410b91b"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
