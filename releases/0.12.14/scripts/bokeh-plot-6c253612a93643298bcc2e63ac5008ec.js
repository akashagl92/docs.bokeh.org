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
      };var element = document.getElementById("dde467c3-4d82-4a49-99a8-9f0a1d2ffc5a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dde467c3-4d82-4a49-99a8-9f0a1d2ffc5a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.14.min.js"];
    
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
                    
                  var docs_json = '{"a1bc3582-6340-4516-8566-cc6f95a834ef":{"roots":{"references":[{"attributes":{},"id":"78cfe735-8787-464a-aad3-260ed7549806","type":"BasicTicker"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"7b4ee5f3-c68e-4e72-9e0e-82f40af455fc","type":"GlyphRenderer"}]},"id":"c97b19bd-d0a4-4c57-a70d-3f7cc0b80b66","type":"LegendItem"},{"attributes":{},"id":"908518c0-dbf6-4a07-aa19-7e3a985040cd","type":"WheelZoomTool"},{"attributes":{"source":{"id":"478ed4b7-9453-4953-9ac4-bb252ccdef53","type":"ColumnDataSource"}},"id":"f29fc2a5-ad5f-4206-b542-9b85429fa455","type":"CDSView"},{"attributes":{},"id":"f6252c07-fe32-4774-b791-ebbdafa70e83","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"d16cfcbc-957e-4f5a-92dc-9d20eefacd70","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"cc133d29-0f06-4a13-87af-dadfb38eaf73","type":"Stack"}},"y":{"field":"fruits"}},"id":"08c0aa0f-62b6-4a0a-a48d-db0ef2733fad","type":"HBar"},{"attributes":{"overlay":{"id":"0bba6ea0-2bd7-4986-9330-899862a069ee","type":"BoxAnnotation"}},"id":"2021b10d-1730-4e10-a7f8-7392e7cd0f59","type":"BoxZoomTool"},{"attributes":{"source":{"id":"319afb39-797b-4483-a393-f38b6291745e","type":"ColumnDataSource"}},"id":"f9d724fd-8e7c-4817-8950-2387ae0bea97","type":"CDSView"},{"attributes":{"fields":["2015","2016"]},"id":"e0b04fd0-ff73-424c-addd-3198796f78f4","type":"Stack"},{"attributes":{},"id":"17a23258-28f1-4f35-af41-b2941eb15fd4","type":"CategoricalTickFormatter"},{"attributes":{"fields":["2015","2016","2017"]},"id":"14b24b49-5239-4ca6-b26e-0361982064d4","type":"Stack"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"2e54c7c3-abfc-484b-8b37-0332a3b0146c","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"14b24b49-5239-4ca6-b26e-0361982064d4","type":"Stack"}},"y":{"field":"fruits"}},"id":"5d2af861-d7e8-449e-be66-5a617efaf8de","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"2e54c7c3-abfc-484b-8b37-0332a3b0146c","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"14b24b49-5239-4ca6-b26e-0361982064d4","type":"Stack"}},"y":{"field":"fruits"}},"id":"395b8122-9ec0-4334-9c8f-74427a1688d4","type":"HBar"},{"attributes":{},"id":"00addd6f-5664-44ce-9bef-e4664b9b41be","type":"SaveTool"},{"attributes":{},"id":"d358f149-3546-4407-ae24-f49743240877","type":"PanTool"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"d16cfcbc-957e-4f5a-92dc-9d20eefacd70","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"cc133d29-0f06-4a13-87af-dadfb38eaf73","type":"Stack"}},"y":{"field":"fruits"}},"id":"d69c9e35-439e-4f72-b18f-1d9ffee76bdf","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"8d851848-4113-4f42-a2ed-f6d9a1db39f0","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"0467e0ae-cf95-4390-ac03-56d3bf162b72","type":"Stack"},{"attributes":{},"id":"07644078-da60-4487-a389-153be07e8fd7","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"9c3a2f15-e751-4164-aca0-f7ece83b4a19","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"ff309517-2f3c-4797-8b81-2556233f7a72","type":"Stack"}},"y":{"field":"fruits"}},"id":"841cc6f9-9ef7-4237-b407-633a1222c734","type":"HBar"},{"attributes":{"source":{"id":"319afb39-797b-4483-a393-f38b6291745e","type":"ColumnDataSource"}},"id":"632a218e-b3f1-4f74-bafa-ae4c2d9af064","type":"CDSView"},{"attributes":{"fields":["2015"]},"id":"cc133d29-0f06-4a13-87af-dadfb38eaf73","type":"Stack"},{"attributes":{"source":{"id":"478ed4b7-9453-4953-9ac4-bb252ccdef53","type":"ColumnDataSource"}},"id":"1c5b81cb-ff5a-4234-a299-175ba0bff367","type":"CDSView"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"319afb39-797b-4483-a393-f38b6291745e","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"e1c8c2ca-6027-4ef0-a62f-bc837c7f76ca","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"0467e0ae-cf95-4390-ac03-56d3bf162b72","type":"Stack"}},"y":{"field":"fruits"}},"id":"6981760c-73be-49ed-abae-a47900b5bfd2","type":"HBar"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"ca762991-6d2d-48a3-b618-48b4e0be8490","type":"Title"},{"attributes":{"data_source":{"id":"478ed4b7-9453-4953-9ac4-bb252ccdef53","type":"ColumnDataSource"},"glyph":{"id":"caf24364-d5ae-434d-ae4c-a9d52c144c88","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bb8a0c4e-1c3e-4b05-9d16-216fa36554eb","type":"HBar"},"selection_glyph":null,"view":{"id":"f29fc2a5-ad5f-4206-b542-9b85429fa455","type":"CDSView"}},"id":"1f1ffaf8-4aeb-4fb6-962c-f99576ef93f6","type":"GlyphRenderer"},{"attributes":{"fields":["2015","2016"]},"id":"47a318df-dcc0-4a39-8fd6-44b1f2046296","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"47a318df-dcc0-4a39-8fd6-44b1f2046296","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"5f24285e-7a75-4776-826a-d2c51f37446b","type":"Stack"}},"y":{"field":"fruits"}},"id":"a8f7974c-cecb-4c98-9b48-9ef9d05f1159","type":"HBar"},{"attributes":{"source":{"id":"319afb39-797b-4483-a393-f38b6291745e","type":"ColumnDataSource"}},"id":"f9a62145-5e1a-491d-b05f-0e43a5b22dc0","type":"CDSView"},{"attributes":{"data_source":{"id":"478ed4b7-9453-4953-9ac4-bb252ccdef53","type":"ColumnDataSource"},"glyph":{"id":"d69c9e35-439e-4f72-b18f-1d9ffee76bdf","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"08c0aa0f-62b6-4a0a-a48d-db0ef2733fad","type":"HBar"},"selection_glyph":null,"view":{"id":"1c5b81cb-ff5a-4234-a299-175ba0bff367","type":"CDSView"}},"id":"308e35f3-eb0e-49c9-87b2-128596f0ad43","type":"GlyphRenderer"},{"attributes":{"source":{"id":"478ed4b7-9453-4953-9ac4-bb252ccdef53","type":"ColumnDataSource"}},"id":"fada3c5f-fc3b-46e7-b25f-6ae1ab05b9a7","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"9c3a2f15-e751-4164-aca0-f7ece83b4a19","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"ff309517-2f3c-4797-8b81-2556233f7a72","type":"Stack"}},"y":{"field":"fruits"}},"id":"836076b5-05cf-45d0-a626-5d65a78dbc7c","type":"HBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"5f24285e-7a75-4776-826a-d2c51f37446b","type":"Stack"},{"attributes":{"below":[{"id":"99fac3a5-8cfb-45fa-b612-0ea580c4bc96","type":"LinearAxis"}],"left":[{"id":"5d55b75f-6319-495d-be0e-00ac480aedc6","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"99fac3a5-8cfb-45fa-b612-0ea580c4bc96","type":"LinearAxis"},{"id":"9d0679b3-2d32-42c8-93a3-6cb9d54f7719","type":"Grid"},{"id":"5d55b75f-6319-495d-be0e-00ac480aedc6","type":"CategoricalAxis"},{"id":"e078ddd3-b3c1-47f5-ad54-30db43c88107","type":"Grid"},{"id":"0bba6ea0-2bd7-4986-9330-899862a069ee","type":"BoxAnnotation"},{"id":"fa5216cf-4aba-41a2-808c-8a51dc76b859","type":"Legend"},{"id":"308e35f3-eb0e-49c9-87b2-128596f0ad43","type":"GlyphRenderer"},{"id":"1f1ffaf8-4aeb-4fb6-962c-f99576ef93f6","type":"GlyphRenderer"},{"id":"7b4ee5f3-c68e-4e72-9e0e-82f40af455fc","type":"GlyphRenderer"},{"id":"0e9b46d3-ef6f-46be-95a6-20df359e9e8b","type":"GlyphRenderer"},{"id":"f834372e-0980-45ae-8676-7f952f30dfbb","type":"GlyphRenderer"},{"id":"4c8dc25b-aff2-4f05-bc82-778096847b0e","type":"GlyphRenderer"}],"title":{"id":"ca762991-6d2d-48a3-b618-48b4e0be8490","type":"Title"},"toolbar":{"id":"f95c498d-2201-4bee-9691-b9be7e5d829a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6a5bd482-1fa8-4917-a973-565804f1f3be","type":"Range1d"},"x_scale":{"id":"5f5fbc42-99b7-4dfa-afba-3e08606a9d23","type":"LinearScale"},"y_range":{"id":"ead15513-1808-4f0d-8556-4a1fc0c394d2","type":"FactorRange"},"y_scale":{"id":"1335a026-20cc-4278-aabf-b46ff4876f0f","type":"CategoricalScale"}},"id":"be1902fc-a248-42d8-b5eb-c97d38dc9c72","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"4c8dc25b-aff2-4f05-bc82-778096847b0e","type":"GlyphRenderer"}]},"id":"d4808125-8263-46fa-8827-9bab98d78037","type":"LegendItem"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"308e35f3-eb0e-49c9-87b2-128596f0ad43","type":"GlyphRenderer"}]},"id":"f0754a97-6848-4681-bd76-05bfa5250898","type":"LegendItem"},{"attributes":{},"id":"1335a026-20cc-4278-aabf-b46ff4876f0f","type":"CategoricalScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0bba6ea0-2bd7-4986-9330-899862a069ee","type":"BoxAnnotation"},{"attributes":{"fields":["2015"]},"id":"e1c8c2ca-6027-4ef0-a62f-bc837c7f76ca","type":"Stack"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"1f1ffaf8-4aeb-4fb6-962c-f99576ef93f6","type":"GlyphRenderer"}]},"id":"a30529ac-19d8-4b0b-939c-0cee262b142d","type":"LegendItem"},{"attributes":{"data_source":{"id":"319afb39-797b-4483-a393-f38b6291745e","type":"ColumnDataSource"},"glyph":{"id":"841cc6f9-9ef7-4237-b407-633a1222c734","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"836076b5-05cf-45d0-a626-5d65a78dbc7c","type":"HBar"},"selection_glyph":null,"view":{"id":"f9a62145-5e1a-491d-b05f-0e43a5b22dc0","type":"CDSView"}},"id":"0e9b46d3-ef6f-46be-95a6-20df359e9e8b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"478ed4b7-9453-4953-9ac4-bb252ccdef53","type":"ColumnDataSource"},"glyph":{"id":"edd069c1-fa8a-44ee-ac7e-ad870588830a","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a8f7974c-cecb-4c98-9b48-9ef9d05f1159","type":"HBar"},"selection_glyph":null,"view":{"id":"fada3c5f-fc3b-46e7-b25f-6ae1ab05b9a7","type":"CDSView"}},"id":"7b4ee5f3-c68e-4e72-9e0e-82f40af455fc","type":"GlyphRenderer"},{"attributes":{},"id":"63efdd58-3402-49c6-95a4-b53caa923b1d","type":"HelpTool"},{"attributes":{},"id":"5f5fbc42-99b7-4dfa-afba-3e08606a9d23","type":"LinearScale"},{"attributes":{"fields":[]},"id":"9c3a2f15-e751-4164-aca0-f7ece83b4a19","type":"Stack"},{"attributes":{"data_source":{"id":"319afb39-797b-4483-a393-f38b6291745e","type":"ColumnDataSource"},"glyph":{"id":"8c19a865-a82d-48d4-8156-4db379963b53","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6981760c-73be-49ed-abae-a47900b5bfd2","type":"HBar"},"selection_glyph":null,"view":{"id":"632a218e-b3f1-4f74-bafa-ae4c2d9af064","type":"CDSView"}},"id":"f834372e-0980-45ae-8676-7f952f30dfbb","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"8d851848-4113-4f42-a2ed-f6d9a1db39f0","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"e0b04fd0-ff73-424c-addd-3198796f78f4","type":"Stack"}},"y":{"field":"fruits"}},"id":"caf24364-d5ae-434d-ae4c-a9d52c144c88","type":"HBar"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"47a318df-dcc0-4a39-8fd6-44b1f2046296","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"5f24285e-7a75-4776-826a-d2c51f37446b","type":"Stack"}},"y":{"field":"fruits"}},"id":"edd069c1-fa8a-44ee-ac7e-ad870588830a","type":"HBar"},{"attributes":{},"id":"3b50d4bb-0e32-43ea-8df6-be86640984e8","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"6a5bd482-1fa8-4917-a973-565804f1f3be","type":"Range1d"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"be1902fc-a248-42d8-b5eb-c97d38dc9c72","subtype":"Figure","type":"Plot"},"ticker":{"id":"f6252c07-fe32-4774-b791-ebbdafa70e83","type":"CategoricalTicker"}},"id":"e078ddd3-b3c1-47f5-ad54-30db43c88107","type":"Grid"},{"attributes":{"data_source":{"id":"319afb39-797b-4483-a393-f38b6291745e","type":"ColumnDataSource"},"glyph":{"id":"5d2af861-d7e8-449e-be66-5a617efaf8de","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"395b8122-9ec0-4334-9c8f-74427a1688d4","type":"HBar"},"selection_glyph":null,"view":{"id":"f9d724fd-8e7c-4817-8950-2387ae0bea97","type":"CDSView"}},"id":"4c8dc25b-aff2-4f05-bc82-778096847b0e","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"e1c8c2ca-6027-4ef0-a62f-bc837c7f76ca","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"0467e0ae-cf95-4390-ac03-56d3bf162b72","type":"Stack"}},"y":{"field":"fruits"}},"id":"8c19a865-a82d-48d4-8156-4db379963b53","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"ff309517-2f3c-4797-8b81-2556233f7a72","type":"Stack"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d358f149-3546-4407-ae24-f49743240877","type":"PanTool"},{"id":"908518c0-dbf6-4a07-aa19-7e3a985040cd","type":"WheelZoomTool"},{"id":"2021b10d-1730-4e10-a7f8-7392e7cd0f59","type":"BoxZoomTool"},{"id":"00addd6f-5664-44ce-9bef-e4664b9b41be","type":"SaveTool"},{"id":"07644078-da60-4487-a389-153be07e8fd7","type":"ResetTool"},{"id":"63efdd58-3402-49c6-95a4-b53caa923b1d","type":"HelpTool"}]},"id":"f95c498d-2201-4bee-9691-b9be7e5d829a","type":"Toolbar"},{"attributes":{"formatter":{"id":"17a23258-28f1-4f35-af41-b2941eb15fd4","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"be1902fc-a248-42d8-b5eb-c97d38dc9c72","subtype":"Figure","type":"Plot"},"ticker":{"id":"f6252c07-fe32-4774-b791-ebbdafa70e83","type":"CategoricalTicker"}},"id":"5d55b75f-6319-495d-be0e-00ac480aedc6","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"be1902fc-a248-42d8-b5eb-c97d38dc9c72","subtype":"Figure","type":"Plot"},"ticker":{"id":"78cfe735-8787-464a-aad3-260ed7549806","type":"BasicTicker"}},"id":"9d0679b3-2d32-42c8-93a3-6cb9d54f7719","type":"Grid"},{"attributes":{"formatter":{"id":"3b50d4bb-0e32-43ea-8df6-be86640984e8","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"be1902fc-a248-42d8-b5eb-c97d38dc9c72","subtype":"Figure","type":"Plot"},"ticker":{"id":"78cfe735-8787-464a-aad3-260ed7549806","type":"BasicTicker"}},"id":"99fac3a5-8cfb-45fa-b612-0ea580c4bc96","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"8d851848-4113-4f42-a2ed-f6d9a1db39f0","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"e0b04fd0-ff73-424c-addd-3198796f78f4","type":"Stack"}},"y":{"field":"fruits"}},"id":"bb8a0c4e-1c3e-4b05-9d16-216fa36554eb","type":"HBar"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"0e9b46d3-ef6f-46be-95a6-20df359e9e8b","type":"GlyphRenderer"}]},"id":"ecac89c3-defc-4053-88a3-52a35c482e13","type":"LegendItem"},{"attributes":{"fields":["2015","2016"]},"id":"2e54c7c3-abfc-484b-8b37-0332a3b0146c","type":"Stack"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"ead15513-1808-4f0d-8556-4a1fc0c394d2","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["fruits","2015","2016","2017"],"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"478ed4b7-9453-4953-9ac4-bb252ccdef53","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"f0754a97-6848-4681-bd76-05bfa5250898","type":"LegendItem"},{"id":"a30529ac-19d8-4b0b-939c-0cee262b142d","type":"LegendItem"},{"id":"c97b19bd-d0a4-4c57-a70d-3f7cc0b80b66","type":"LegendItem"},{"id":"ecac89c3-defc-4053-88a3-52a35c482e13","type":"LegendItem"},{"id":"d0cb1473-363b-4771-9271-6781917c8d51","type":"LegendItem"},{"id":"d4808125-8263-46fa-8827-9bab98d78037","type":"LegendItem"}],"location":"top_left","plot":{"id":"be1902fc-a248-42d8-b5eb-c97d38dc9c72","subtype":"Figure","type":"Plot"}},"id":"fa5216cf-4aba-41a2-808c-8a51dc76b859","type":"Legend"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"f834372e-0980-45ae-8676-7f952f30dfbb","type":"GlyphRenderer"}]},"id":"d0cb1473-363b-4771-9271-6781917c8d51","type":"LegendItem"},{"attributes":{"fields":[]},"id":"d16cfcbc-957e-4f5a-92dc-9d20eefacd70","type":"Stack"}],"root_ids":["be1902fc-a248-42d8-b5eb-c97d38dc9c72"]},"title":"Bokeh Application","version":"0.12.14"}}';
                  var render_items = [{"docid":"a1bc3582-6340-4516-8566-cc6f95a834ef","elementid":"dde467c3-4d82-4a49-99a8-9f0a1d2ffc5a","modelid":"be1902fc-a248-42d8-b5eb-c97d38dc9c72"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.14.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.14.min.css");
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