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
      };var element = document.getElementById("a6b1536b-9f64-420c-9235-090263d4c4e8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a6b1536b-9f64-420c-9235-090263d4c4e8' but no matching script tag was found. ")
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
                    var docs_json = {"130d759b-c4ae-4be4-a342-a8bf84f3dc2d":{"roots":{"references":[{"attributes":{},"id":"3047d3ea-da4c-40b0-965c-e3744d13378e","type":"ResetTool"},{"attributes":{},"id":"6c3832ad-1013-42f0-8e3e-7a7c2e8b5e58","type":"WheelZoomTool"},{"attributes":{"source":{"id":"ad132ad7-927a-492e-bfed-2ac088e21be4","type":"ColumnDataSource"}},"id":"9ddfaf31-38b8-4a53-bf99-1b981fc6e9ba","type":"CDSView"},{"attributes":{},"id":"eec16a5d-5b98-418b-a46b-b0af27599e3b","type":"HelpTool"},{"attributes":{"fields":["2015","2016"]},"id":"01890015-92b6-439e-8e9a-a53a9f9d8317","type":"Stack"},{"attributes":{},"id":"d03b02c7-383d-4cb9-9156-c71a6269a118","type":"SaveTool"},{"attributes":{"fields":["2015"]},"id":"331aba10-863e-4baa-b324-c64ace6064d9","type":"Stack"},{"attributes":{"fields":[]},"id":"f5c012d2-9fee-46d4-adce-82c18b553ed6","type":"Stack"},{"attributes":{"fields":["2015","2016","2017"]},"id":"f1d7706a-f455-4516-a9e5-46d8c5309d4f","type":"Stack"},{"attributes":{"overlay":{"id":"e50bb899-b572-4fc3-96fa-6d40cf775ae4","type":"BoxAnnotation"}},"id":"68ede158-dddc-4204-891c-9c2bda9a3b45","type":"BoxZoomTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"31538fa3-8bbd-4c6d-9c32-e333bd3e074d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0bdd1372-3755-4958-8558-567cb2fd3762","type":"CategoricalTicker"}},"id":"bd3240b1-92bf-4c7f-979a-0ab872ca9802","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2d65dd5c-7683-4d6c-ad0a-fa5b7416f56d","type":"PanTool"},{"id":"6c3832ad-1013-42f0-8e3e-7a7c2e8b5e58","type":"WheelZoomTool"},{"id":"68ede158-dddc-4204-891c-9c2bda9a3b45","type":"BoxZoomTool"},{"id":"d03b02c7-383d-4cb9-9156-c71a6269a118","type":"SaveTool"},{"id":"3047d3ea-da4c-40b0-965c-e3744d13378e","type":"ResetTool"},{"id":"eec16a5d-5b98-418b-a46b-b0af27599e3b","type":"HelpTool"}]},"id":"4cc65be0-a628-4d9c-a930-93e8187f3452","type":"Toolbar"},{"attributes":{"source":{"id":"ad132ad7-927a-492e-bfed-2ac088e21be4","type":"ColumnDataSource"}},"id":"cb895976-9909-4c46-b725-a809ba0d9f67","type":"CDSView"},{"attributes":{},"id":"2d65dd5c-7683-4d6c-ad0a-fa5b7416f56d","type":"PanTool"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"f7bfa8ac-1d7b-48d3-b137-74e67d9e796f","type":"Range1d"},{"attributes":{"items":[{"id":"ef9fa7cb-a9c3-4c4e-9592-a7fb4f26b9d8","type":"LegendItem"},{"id":"4737402a-e6fa-4c08-a7a6-44764a5acb3f","type":"LegendItem"},{"id":"0ad5c6a9-02af-4cec-a7e2-cbf75020d9e5","type":"LegendItem"},{"id":"04368d34-5e69-42ad-b5f4-7a3a4e28074b","type":"LegendItem"},{"id":"b58718ec-d3b6-4f4b-81ad-e310e2ccf977","type":"LegendItem"},{"id":"c52fd46d-2f01-4bfd-9726-74325134b1a5","type":"LegendItem"}],"location":"top_left","plot":{"id":"31538fa3-8bbd-4c6d-9c32-e333bd3e074d","subtype":"Figure","type":"Plot"}},"id":"08daee53-111c-4aef-a107-5f0dbce05fa1","type":"Legend"},{"attributes":{"data_source":{"id":"ad132ad7-927a-492e-bfed-2ac088e21be4","type":"ColumnDataSource"},"glyph":{"id":"f535cbb2-3711-43ac-a098-b392cdfb20a7","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"306e1175-7d4a-429f-9fd5-0015fc5c4d7c","type":"HBar"},"selection_glyph":null,"view":{"id":"cb895976-9909-4c46-b725-a809ba0d9f67","type":"CDSView"}},"id":"7434ba71-cc4d-4379-9549-6c9229e778ee","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"c60deb87-5d11-41ac-93d9-5ca2423ea341","type":"ColumnDataSource"},{"attributes":{},"id":"0bdd1372-3755-4958-8558-567cb2fd3762","type":"CategoricalTicker"},{"attributes":{"fields":["2015"]},"id":"aff97642-92d7-4ea5-b908-ef79b3c1230f","type":"Stack"},{"attributes":{"fields":[]},"id":"d97488b3-20a3-429a-af5e-a7c21d8d7f55","type":"Stack"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"71db35f0-7a0e-4d65-822c-7e2e5d6d01cb","type":"GlyphRenderer"}]},"id":"b58718ec-d3b6-4f4b-81ad-e310e2ccf977","type":"LegendItem"},{"attributes":{},"id":"d8c94047-87d3-475d-b5ef-653edf5212fa","type":"CategoricalScale"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"60bd1823-8244-49a9-a17a-90b0047a0043","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"a566b65b-6720-4bcf-aea7-24398d43f85b","type":"Stack"}},"y":{"field":"fruits"}},"id":"f5929ba9-3aef-4ef3-90a6-7c9f4c0c4026","type":"HBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"eb435c7b-af47-4113-816c-4095520cc190","type":"FactorRange"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"2c23c375-dfa6-47f1-9c8f-ea8ede9625d4","type":"GlyphRenderer"}]},"id":"04368d34-5e69-42ad-b5f4-7a3a4e28074b","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"9ef408d6-9614-44b6-a1b6-4455fd1d1010","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"173d0a76-6e29-4688-b2d5-807348c78e00","type":"Stack"}},"y":{"field":"fruits"}},"id":"a551eee5-13e1-444e-a06e-792f7b89e10b","type":"HBar"},{"attributes":{"source":{"id":"ad132ad7-927a-492e-bfed-2ac088e21be4","type":"ColumnDataSource"}},"id":"aa55a721-91ad-42e8-b875-eaa2a70d93c6","type":"CDSView"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"ae9c2858-2da6-4d0d-9d21-a9eb30471625","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"f1d7706a-f455-4516-a9e5-46d8c5309d4f","type":"Stack"}},"y":{"field":"fruits"}},"id":"afd384fa-4371-4251-84f2-9beabb73af70","type":"HBar"},{"attributes":{"source":{"id":"c60deb87-5d11-41ac-93d9-5ca2423ea341","type":"ColumnDataSource"}},"id":"bbc45576-4a10-4b63-adcb-0826670bb610","type":"CDSView"},{"attributes":{"formatter":{"id":"6f7d341e-746d-4a6c-947c-76903bdbf97d","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"31538fa3-8bbd-4c6d-9c32-e333bd3e074d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0bdd1372-3755-4958-8558-567cb2fd3762","type":"CategoricalTicker"}},"id":"2aaa6725-8088-4d47-938b-97dee89b8b2c","type":"CategoricalAxis"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"79a5fc02-0737-4b25-9d32-1b9f808c49ed","type":"GlyphRenderer"}]},"id":"c52fd46d-2f01-4bfd-9726-74325134b1a5","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"ae9c2858-2da6-4d0d-9d21-a9eb30471625","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"f1d7706a-f455-4516-a9e5-46d8c5309d4f","type":"Stack"}},"y":{"field":"fruits"}},"id":"826be74c-ede6-4622-b000-5c98a99cccbe","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"9ef408d6-9614-44b6-a1b6-4455fd1d1010","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"173d0a76-6e29-4688-b2d5-807348c78e00","type":"Stack"}},"y":{"field":"fruits"}},"id":"127471f9-5a7c-4330-bed8-72b88d8da7f3","type":"HBar"},{"attributes":{},"id":"919242be-4b26-4724-a50c-5490a04358af","type":"BasicTicker"},{"attributes":{"data_source":{"id":"ad132ad7-927a-492e-bfed-2ac088e21be4","type":"ColumnDataSource"},"glyph":{"id":"91e3fbd8-83ea-4177-a168-17921182cd87","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67b109c0-e561-4c08-af1b-79d92ae06b13","type":"HBar"},"selection_glyph":null,"view":{"id":"aa55a721-91ad-42e8-b875-eaa2a70d93c6","type":"CDSView"}},"id":"574070c0-c0e4-40d0-a12a-9dad1485d3a9","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e50bb899-b572-4fc3-96fa-6d40cf775ae4","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"c60deb87-5d11-41ac-93d9-5ca2423ea341","type":"ColumnDataSource"},"glyph":{"id":"a551eee5-13e1-444e-a06e-792f7b89e10b","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"127471f9-5a7c-4330-bed8-72b88d8da7f3","type":"HBar"},"selection_glyph":null,"view":{"id":"833a86bb-5861-4f0f-b1bb-e9913471aef2","type":"CDSView"}},"id":"71db35f0-7a0e-4d65-822c-7e2e5d6d01cb","type":"GlyphRenderer"},{"attributes":{},"id":"8fa5f8be-1e33-4dcc-b385-1baa4358b88c","type":"LinearScale"},{"attributes":{},"id":"894774ac-2033-4cec-a0ee-84e4505b9059","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"c60deb87-5d11-41ac-93d9-5ca2423ea341","type":"ColumnDataSource"}},"id":"833a86bb-5861-4f0f-b1bb-e9913471aef2","type":"CDSView"},{"attributes":{"fields":["2015"]},"id":"667f4ace-f2fc-435a-990e-a35e1c3b55e9","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"60bd1823-8244-49a9-a17a-90b0047a0043","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"a566b65b-6720-4bcf-aea7-24398d43f85b","type":"Stack"}},"y":{"field":"fruits"}},"id":"ee9cfb4b-60bf-4795-892e-e7eac939e8b4","type":"HBar"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"d97488b3-20a3-429a-af5e-a7c21d8d7f55","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"aff97642-92d7-4ea5-b908-ef79b3c1230f","type":"Stack"}},"y":{"field":"fruits"}},"id":"51da6b5f-2fd0-42ba-930f-7da4c22b1821","type":"HBar"},{"attributes":{"data_source":{"id":"c60deb87-5d11-41ac-93d9-5ca2423ea341","type":"ColumnDataSource"},"glyph":{"id":"f5929ba9-3aef-4ef3-90a6-7c9f4c0c4026","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ee9cfb4b-60bf-4795-892e-e7eac939e8b4","type":"HBar"},"selection_glyph":null,"view":{"id":"c20b93d4-77db-4636-b057-967b51adfdee","type":"CDSView"}},"id":"79a5fc02-0737-4b25-9d32-1b9f808c49ed","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"f5c012d2-9fee-46d4-adce-82c18b553ed6","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"667f4ace-f2fc-435a-990e-a35e1c3b55e9","type":"Stack"}},"y":{"field":"fruits"}},"id":"f535cbb2-3711-43ac-a098-b392cdfb20a7","type":"HBar"},{"attributes":{"source":{"id":"c60deb87-5d11-41ac-93d9-5ca2423ea341","type":"ColumnDataSource"}},"id":"c20b93d4-77db-4636-b057-967b51adfdee","type":"CDSView"},{"attributes":{"formatter":{"id":"894774ac-2033-4cec-a0ee-84e4505b9059","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"31538fa3-8bbd-4c6d-9c32-e333bd3e074d","subtype":"Figure","type":"Plot"},"ticker":{"id":"919242be-4b26-4724-a50c-5490a04358af","type":"BasicTicker"}},"id":"7ea9a252-871d-4bc2-9807-1eadd11be190","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"ad132ad7-927a-492e-bfed-2ac088e21be4","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"331aba10-863e-4baa-b324-c64ace6064d9","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"01890015-92b6-439e-8e9a-a53a9f9d8317","type":"Stack"}},"y":{"field":"fruits"}},"id":"91e3fbd8-83ea-4177-a168-17921182cd87","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"9ef408d6-9614-44b6-a1b6-4455fd1d1010","type":"Stack"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"574070c0-c0e4-40d0-a12a-9dad1485d3a9","type":"GlyphRenderer"}]},"id":"4737402a-e6fa-4c08-a7a6-44764a5acb3f","type":"LegendItem"},{"attributes":{"data_source":{"id":"ad132ad7-927a-492e-bfed-2ac088e21be4","type":"ColumnDataSource"},"glyph":{"id":"afd384fa-4371-4251-84f2-9beabb73af70","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"826be74c-ede6-4622-b000-5c98a99cccbe","type":"HBar"},"selection_glyph":null,"view":{"id":"9ddfaf31-38b8-4a53-bf99-1b981fc6e9ba","type":"CDSView"}},"id":"03a6af41-aa20-42e8-8a8d-42217b619f6c","type":"GlyphRenderer"},{"attributes":{},"id":"6f7d341e-746d-4a6c-947c-76903bdbf97d","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"331aba10-863e-4baa-b324-c64ace6064d9","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"01890015-92b6-439e-8e9a-a53a9f9d8317","type":"Stack"}},"y":{"field":"fruits"}},"id":"67b109c0-e561-4c08-af1b-79d92ae06b13","type":"HBar"},{"attributes":{"fields":["2015","2016"]},"id":"ae9c2858-2da6-4d0d-9d21-a9eb30471625","type":"Stack"},{"attributes":{"fields":["2015","2016","2017"]},"id":"a566b65b-6720-4bcf-aea7-24398d43f85b","type":"Stack"},{"attributes":{"below":[{"id":"7ea9a252-871d-4bc2-9807-1eadd11be190","type":"LinearAxis"}],"left":[{"id":"2aaa6725-8088-4d47-938b-97dee89b8b2c","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"7ea9a252-871d-4bc2-9807-1eadd11be190","type":"LinearAxis"},{"id":"9871c4fd-c362-4b17-b2cd-e3afadcc6ff6","type":"Grid"},{"id":"2aaa6725-8088-4d47-938b-97dee89b8b2c","type":"CategoricalAxis"},{"id":"bd3240b1-92bf-4c7f-979a-0ab872ca9802","type":"Grid"},{"id":"e50bb899-b572-4fc3-96fa-6d40cf775ae4","type":"BoxAnnotation"},{"id":"08daee53-111c-4aef-a107-5f0dbce05fa1","type":"Legend"},{"id":"7434ba71-cc4d-4379-9549-6c9229e778ee","type":"GlyphRenderer"},{"id":"574070c0-c0e4-40d0-a12a-9dad1485d3a9","type":"GlyphRenderer"},{"id":"03a6af41-aa20-42e8-8a8d-42217b619f6c","type":"GlyphRenderer"},{"id":"2c23c375-dfa6-47f1-9c8f-ea8ede9625d4","type":"GlyphRenderer"},{"id":"71db35f0-7a0e-4d65-822c-7e2e5d6d01cb","type":"GlyphRenderer"},{"id":"79a5fc02-0737-4b25-9d32-1b9f808c49ed","type":"GlyphRenderer"}],"title":{"id":"25043d42-3edf-41bc-9dee-df5149e0b312","type":"Title"},"toolbar":{"id":"4cc65be0-a628-4d9c-a930-93e8187f3452","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f7bfa8ac-1d7b-48d3-b137-74e67d9e796f","type":"Range1d"},"x_scale":{"id":"8fa5f8be-1e33-4dcc-b385-1baa4358b88c","type":"LinearScale"},"y_range":{"id":"eb435c7b-af47-4113-816c-4095520cc190","type":"FactorRange"},"y_scale":{"id":"d8c94047-87d3-475d-b5ef-653edf5212fa","type":"CategoricalScale"}},"id":"31538fa3-8bbd-4c6d-9c32-e333bd3e074d","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"d97488b3-20a3-429a-af5e-a7c21d8d7f55","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"aff97642-92d7-4ea5-b908-ef79b3c1230f","type":"Stack"}},"y":{"field":"fruits"}},"id":"355a9b69-e262-4565-aff6-d7a78e98ea2d","type":"HBar"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"25043d42-3edf-41bc-9dee-df5149e0b312","type":"Title"},{"attributes":{"fields":["2015","2016"]},"id":"173d0a76-6e29-4688-b2d5-807348c78e00","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"f5c012d2-9fee-46d4-adce-82c18b553ed6","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"667f4ace-f2fc-435a-990e-a35e1c3b55e9","type":"Stack"}},"y":{"field":"fruits"}},"id":"306e1175-7d4a-429f-9fd5-0015fc5c4d7c","type":"HBar"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"03a6af41-aa20-42e8-8a8d-42217b619f6c","type":"GlyphRenderer"}]},"id":"0ad5c6a9-02af-4cec-a7e2-cbf75020d9e5","type":"LegendItem"},{"attributes":{"fields":["2015","2016"]},"id":"60bd1823-8244-49a9-a17a-90b0047a0043","type":"Stack"},{"attributes":{"data_source":{"id":"c60deb87-5d11-41ac-93d9-5ca2423ea341","type":"ColumnDataSource"},"glyph":{"id":"51da6b5f-2fd0-42ba-930f-7da4c22b1821","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"355a9b69-e262-4565-aff6-d7a78e98ea2d","type":"HBar"},"selection_glyph":null,"view":{"id":"bbc45576-4a10-4b63-adcb-0826670bb610","type":"CDSView"}},"id":"2c23c375-dfa6-47f1-9c8f-ea8ede9625d4","type":"GlyphRenderer"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"7434ba71-cc4d-4379-9549-6c9229e778ee","type":"GlyphRenderer"}]},"id":"ef9fa7cb-a9c3-4c4e-9592-a7fb4f26b9d8","type":"LegendItem"},{"attributes":{"plot":{"id":"31538fa3-8bbd-4c6d-9c32-e333bd3e074d","subtype":"Figure","type":"Plot"},"ticker":{"id":"919242be-4b26-4724-a50c-5490a04358af","type":"BasicTicker"}},"id":"9871c4fd-c362-4b17-b2cd-e3afadcc6ff6","type":"Grid"}],"root_ids":["31538fa3-8bbd-4c6d-9c32-e333bd3e074d"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"130d759b-c4ae-4be4-a342-a8bf84f3dc2d","elementid":"a6b1536b-9f64-420c-9235-090263d4c4e8","modelid":"31538fa3-8bbd-4c6d-9c32-e333bd3e074d"}];
                
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
