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
      };var element = document.getElementById("920021fa-3ab8-4ede-8110-b372127c55da");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '920021fa-3ab8-4ede-8110-b372127c55da' but no matching script tag was found. ")
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
                var docs_json = {"f6ad0a9e-f831-48e0-9647-6ae5989c55c5":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5],"x_values":{"__ndarray__":"AAAAAABgYEAAAAAAAOBmQAAAAAAAQF5A","dtype":"float64","shape":[3]},"y_values":[103,77,67]}},"id":"75ca695d-a346-4ebe-9b72-aa9e6564a89f","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4908f126-02a3-41cb-adef-ec8bad5b518b","type":"BoxAnnotation"},{"attributes":{},"id":"7327516e-f864-4b1f-a8af-c9b609f731d1","type":"ToolEvents"},{"attributes":{},"id":"6d00012f-6d1e-4da3-b886-a28be185a2a8","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"6"},"renderers":[{"id":"39dac48a-138c-4148-98e1-c6531a346a7d","type":"GlyphRenderer"}]},"id":"5baeb2ab-eaa7-4ea6-84fe-2354428a24c6","type":"LegendItem"},{"attributes":{"label":{"value":"8"},"renderers":[{"id":"8572f95d-e4cd-46af-adf1-40d699f79594","type":"GlyphRenderer"}]},"id":"100c5fe2-f043-41b0-a5dc-91ec03e29a01","type":"LegendItem"},{"attributes":{"plot":null,"text":"HP vs DISPL (marked by CYL)"},"id":"8352e7cf-b0ed-4eea-bf0d-d432500bb193","type":"Title"},{"attributes":{"plot":{"id":"e44f61a6-c03b-47ae-bd47-de8fcf659711","subtype":"Chart","type":"Plot"}},"id":"97e7abf7-c687-4a5c-bf38-ebfe16df0361","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"05f6ae1d-42b5-47d1-9b78-18d147acc8ab","type":"ColumnDataSource"},"glyph":{"id":"793f0cdb-6825-4c2e-b995-da84e48adbe4","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"37fd7c36-2ef1-41e9-bf1a-2077924c6fed","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#df5320"},"line_color":{"value":"#df5320"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"75d38f98-8d15-4c22-b055-400d3e48c4c9","type":"Diamond"},{"attributes":{"plot":{"id":"e44f61a6-c03b-47ae-bd47-de8fcf659711","subtype":"Chart","type":"Plot"}},"id":"50241717-9cb0-45de-ab4f-677f0a9de22f","type":"SaveTool"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"ba868220-2ea7-43b9-a074-158627c27b80","type":"Range1d"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"6d00012f-6d1e-4da3-b886-a28be185a2a8","type":"BasicTickFormatter"},"plot":{"id":"e44f61a6-c03b-47ae-bd47-de8fcf659711","subtype":"Chart","type":"Plot"},"ticker":{"id":"d559fa2e-4574-4fa3-bdd9-f1063ef20c5c","type":"BasicTicker"}},"id":"4b12f2fd-5afc-48f6-867e-a2efe7506d88","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],"x_values":{"__ndarray__":"AAAAAADAaEAAAAAAAOBoQAAAAAAAAGlAAAAAAADgaEAAAAAAAABtQAAAAAAAIGxAAAAAAABAb0AAAAAAAEBvQAAAAAAAAG1AAAAAAAAgcEAAAAAAAEBvQAAAAAAAQG9AAAAAAAAgbEAAAAAAAEBvQAAAAAAAAG1AAAAAAABAb0AAAAAAAMBoQAAAAAAAAG1AAAAAAABgY0AAAAAAAIBjQAAAAAAAwGhAAAAAAAAAbUAAAAAAAEBvQAAAAAAAQG9AAAAAAAAgcEAAAAAAACBsQAAAAAAAIGxAAAAAAABAb0AAAAAAAEBvQAAAAAAAQG9AAAAAAADgbEAAAAAAAEBvQAAAAAAAIHBAAAAAAAAgbEAAAAAAAOBsQAAAAAAAAG1AAAAAAABgZUAAAAAAAABtQAAAAAAAIGxAAAAAAABAb0AAAAAAAABpQAAAAAAAAG1AAAAAAAAgbEAAAAAAAEBvQAAAAAAAQG9AAAAAAAAgcEAAAAAAAIBjQAAAAAAAAGVAAAAAAABAb0AAAAAAAOBsQAAAAAAAIGxAAAAAAABAb0AAAAAAAEBiQAAAAAAA4GxAAAAAAAAAaUAAAAAAAABpQAAAAAAAIGxAAAAAAAAAbUAAAAAAAOBsQAAAAAAAAGlAAAAAAAAgbEAAAAAAACBwQAAAAAAA4GxAAAAAAABgZEAAAAAAAGBkQAAAAAAA4GxAAAAAAAAAaUAAAAAAAABtQAAAAAAAIGxAAAAAAACgZUAAAAAAAKBlQAAAAAAAIGxAAAAAAAAAZUAAAAAAAKBlQAAAAAAAIGJAAAAAAAAAZUAAAAAAAEBiQAAAAAAA4GxAAAAAAAAAaUAAAAAAACBsQAAAAAAAoGZAAAAAAABgcEAAAAAAAABtQA==","dtype":"float64","shape":[83]},"y_values":[95,97,85,90,100,105,100,88,100,110,100,88,105,100,100,88,95,100,107,122,95,100,100,100,110,105,95,105,72,72,110,105,110,95,110,100,97,90,100,105,81,90,100,78,110,95,108,120,110,105,100,98,97,105,95,85,100,90,105,85,110,120,165,125,133,115,85,90,110,115,115,90,132,110,76,116,120,110,88,85,110,85,112]}},"id":"0b1e9732-8d68-4d72-8eb5-d2c02ca18816","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"e44f61a6-c03b-47ae-bd47-de8fcf659711","subtype":"Chart","type":"Plot"}},"id":"6fa42cfd-baa7-475b-9b8f-ee522916aa89","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"x_values":{"__ndarray__":"AAAAAAAwc0AAAAAAAOB1QAAAAAAA4HNAAAAAAAAAc0AAAAAAAOByQAAAAAAA0HpAAAAAAABgfEAAAAAAAIB7QAAAAAAAcHxAAAAAAABgeEAAAAAAAPB3QAAAAAAAQHVAAAAAAAAAeUAAAAAAAHB8QAAAAAAAgHZAAAAAAAAwc0AAAAAAAOBzQAAAAAAAAHNAAAAAAADgdUAAAAAAAAB5QAAAAAAA8HVAAAAAAADgc0AAAAAAAPB3QAAAAAAAAHlAAAAAAAAAeUAAAAAAAOB1QAAAAAAAAHlAAAAAAADgc0AAAAAAAPB1QAAAAAAAAHNAAAAAAADQekAAAAAAAOB1QAAAAAAA4HVAAAAAAAAAeUAAAAAAAABzQAAAAAAAMHNAAAAAAADgckAAAAAAAOBzQAAAAAAA4HVAAAAAAAAAc0AAAAAAAOB1QAAAAAAA4HJAAAAAAADgc0AAAAAAANB6QAAAAAAAAHlAAAAAAADwdUAAAAAAAOBzQAAAAAAAgHtAAAAAAABwfEAAAAAAAIB2QAAAAAAAAHlAAAAAAAAAeUAAAAAAAIB2QAAAAAAA4HVAAAAAAADgdUAAAAAAAAB5QAAAAAAA4HNAAAAAAADgdUAAAAAAAOByQAAAAAAA4HVAAAAAAADgc0AAAAAAAOByQAAAAAAAAHNAAAAAAAAAeUAAAAAAAOB1QAAAAAAA4HNAAAAAAADwdUAAAAAAAGBwQAAAAAAA4HJAAAAAAAAQc0AAAAAAAOBzQAAAAAAAAHNAAAAAAADwdUAAAAAAAOBzQAAAAAAA4HVAAAAAAADgdUAAAAAAAOByQAAAAAAA4HNAAAAAAAAQc0AAAAAAAEBwQAAAAAAA4HNAAAAAAADgckAAAAAAAAB5QAAAAAAA4HVAAAAAAAAAeUAAAAAAAPB1QAAAAAAAQHBAAAAAAADgc0AAAAAAAOByQAAAAAAAEHNAAAAAAADgckAAAAAAAOBzQAAAAAAAEHNAAAAAAADgckAAAAAAAPB1QAAAAAAA4HNAAAAAAADgdUAAAAAAAPB1QAAAAAAAsHBAAAAAAACAdkAAAAAAAOB1QAAAAAAAQHBAAAAAAADgdUA=","dtype":"float64","shape":[103]},"y_values":[130,165,150,150,140,198,220,215,225,190,170,160,150,225,215,200,210,193,165,175,153,150,180,170,175,165,175,150,153,150,208,155,160,190,150,130,140,150,175,150,145,137,150,198,150,158,150,215,225,175,150,167,170,180,145,230,150,180,140,150,150,140,150,170,145,150,148,110,129,140,150,120,152,150,180,145,130,150,145,110,145,130,180,170,190,149,110,140,139,145,139,140,130,129,138,135,155,142,125,150,125,90,105]}},"id":"07324634-635f-4c08-86a7-28407ea4c7a0","type":"ColumnDataSource"},{"attributes":{},"id":"182537c1-c008-4f40-b392-c8e18d8e051c","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"02eb66b2-95e1-4af0-b7f3-7c40c2ddbf32","type":"PanTool"},{"id":"97e7abf7-c687-4a5c-bf38-ebfe16df0361","type":"WheelZoomTool"},{"id":"cc221af1-9c67-4ed1-bc79-cd43e1528a89","type":"BoxZoomTool"},{"id":"50241717-9cb0-45de-ab4f-677f0a9de22f","type":"SaveTool"},{"id":"6fa42cfd-baa7-475b-9b8f-ee522916aa89","type":"ResetTool"},{"id":"a4bfdef9-3c5b-4ba4-aa36-c7eebd1f8c5a","type":"HelpTool"}]},"id":"bf5cc85f-7e17-4902-835e-4c0aeef2b7e0","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"cd94d172-1f68-4e76-a67a-26328d90eb42","type":"Triangle"},{"attributes":{"label":{"value":"3"},"renderers":[{"id":"d2ae02e9-71d4-4734-bde9-0b2c955ca1c4","type":"GlyphRenderer"}]},"id":"4d022774-1c53-4b2f-82de-af29af6f67a9","type":"LegendItem"},{"attributes":{"plot":{"id":"e44f61a6-c03b-47ae-bd47-de8fcf659711","subtype":"Chart","type":"Plot"},"ticker":{"id":"e7db5693-08b4-46a0-9803-ac410233665c","type":"BasicTicker"}},"id":"9a82209e-5e69-4964-84eb-35d8e0cf7f7c","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#00ad9c"},"line_color":{"value":"#00ad9c"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"d3f562fe-88ca-4013-ba57-ead2967994e2","type":"InvertedTriangle"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"793f0cdb-6825-4c2e-b995-da84e48adbe4","type":"Square"},{"attributes":{"items":[{"id":"100c5fe2-f043-41b0-a5dc-91ec03e29a01","type":"LegendItem"},{"id":"c8c32e13-d281-41fd-8c91-2a9db9ff7e18","type":"LegendItem"},{"id":"5baeb2ab-eaa7-4ea6-84fe-2354428a24c6","type":"LegendItem"},{"id":"4d022774-1c53-4b2f-82de-af29af6f67a9","type":"LegendItem"},{"id":"4f1a036d-29ef-4f80-9e8a-701adf50cd0f","type":"LegendItem"}],"location":"top_left","plot":{"id":"e44f61a6-c03b-47ae-bd47-de8fcf659711","subtype":"Chart","type":"Plot"}},"id":"cfc4a611-6fe9-46c8-95c5-e82b6bb491e0","type":"Legend"},{"attributes":{"callback":null,"end":493.7,"start":29.299999999999997},"id":"542d4764-52bb-4376-b2bd-9a5ccc7f736d","type":"Range1d"},{"attributes":{"below":[{"id":"55628066-c372-4aa2-a111-0aaa6c6e2914","type":"LinearAxis"}],"css_classes":null,"left":[{"id":"4b12f2fd-5afc-48f6-867e-a2efe7506d88","type":"LinearAxis"}],"renderers":[{"id":"4908f126-02a3-41cb-adef-ec8bad5b518b","type":"BoxAnnotation"},{"id":"8572f95d-e4cd-46af-adf1-40d699f79594","type":"GlyphRenderer"},{"id":"37fd7c36-2ef1-41e9-bf1a-2077924c6fed","type":"GlyphRenderer"},{"id":"39dac48a-138c-4148-98e1-c6531a346a7d","type":"GlyphRenderer"},{"id":"d2ae02e9-71d4-4734-bde9-0b2c955ca1c4","type":"GlyphRenderer"},{"id":"02eb8381-3e7c-4217-93a1-880ec0bbaad1","type":"GlyphRenderer"},{"id":"cfc4a611-6fe9-46c8-95c5-e82b6bb491e0","type":"Legend"},{"id":"55628066-c372-4aa2-a111-0aaa6c6e2914","type":"LinearAxis"},{"id":"4b12f2fd-5afc-48f6-867e-a2efe7506d88","type":"LinearAxis"},{"id":"9a82209e-5e69-4964-84eb-35d8e0cf7f7c","type":"Grid"},{"id":"8a875739-d327-47d3-8c2e-51e70aa01c45","type":"Grid"}],"title":{"id":"8352e7cf-b0ed-4eea-bf0d-d432500bb193","type":"Title"},"tool_events":{"id":"7327516e-f864-4b1f-a8af-c9b609f731d1","type":"ToolEvents"},"toolbar":{"id":"bf5cc85f-7e17-4902-835e-4c0aeef2b7e0","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"542d4764-52bb-4376-b2bd-9a5ccc7f736d","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"ba868220-2ea7-43b9-a074-158627c27b80","type":"Range1d"}},"id":"e44f61a6-c03b-47ae-bd47-de8fcf659711","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"e7db5693-08b4-46a0-9803-ac410233665c","type":"BasicTicker"},{"attributes":{"label":{"value":"5"},"renderers":[{"id":"02eb8381-3e7c-4217-93a1-880ec0bbaad1","type":"GlyphRenderer"}]},"id":"4f1a036d-29ef-4f80-9e8a-701adf50cd0f","type":"LegendItem"},{"attributes":{"plot":{"id":"e44f61a6-c03b-47ae-bd47-de8fcf659711","subtype":"Chart","type":"Plot"}},"id":"a4bfdef9-3c5b-4ba4-aa36-c7eebd1f8c5a","type":"HelpTool"},{"attributes":{},"id":"d559fa2e-4574-4fa3-bdd9-f1063ef20c5c","type":"BasicTicker"},{"attributes":{"data_source":{"id":"07324634-635f-4c08-86a7-28407ea4c7a0","type":"ColumnDataSource"},"glyph":{"id":"d3f562fe-88ca-4013-ba57-ead2967994e2","type":"InvertedTriangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8572f95d-e4cd-46af-adf1-40d699f79594","type":"GlyphRenderer"},{"attributes":{"axis_label":"Displacement","formatter":{"id":"182537c1-c008-4f40-b392-c8e18d8e051c","type":"BasicTickFormatter"},"plot":{"id":"e44f61a6-c03b-47ae-bd47-de8fcf659711","subtype":"Chart","type":"Plot"},"ticker":{"id":"e7db5693-08b4-46a0-9803-ac410233665c","type":"BasicTicker"}},"id":"55628066-c372-4aa2-a111-0aaa6c6e2914","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"e44f61a6-c03b-47ae-bd47-de8fcf659711","subtype":"Chart","type":"Plot"},"ticker":{"id":"d559fa2e-4574-4fa3-bdd9-f1063ef20c5c","type":"BasicTicker"}},"id":"8a875739-d327-47d3-8c2e-51e70aa01c45","type":"Grid"},{"attributes":{"data_source":{"id":"75ca695d-a346-4ebe-9b72-aa9e6564a89f","type":"ColumnDataSource"},"glyph":{"id":"cd94d172-1f68-4e76-a67a-26328d90eb42","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"02eb8381-3e7c-4217-93a1-880ec0bbaad1","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x_values":{"__ndarray__":"AAAAAACAUUAAAAAAAIBRQAAAAAAAAFRAAAAAAACAUUA=","dtype":"float64","shape":[4]},"y_values":[97,90,110,100]}},"id":"d27e5f17-2f22-4bd8-89cb-983d0a39fef5","type":"ColumnDataSource"},{"attributes":{"label":{"value":"4"},"renderers":[{"id":"37fd7c36-2ef1-41e9-bf1a-2077924c6fed","type":"GlyphRenderer"}]},"id":"c8c32e13-d281-41fd-8c91-2a9db9ff7e18","type":"LegendItem"},{"attributes":{"data_source":{"id":"d27e5f17-2f22-4bd8-89cb-983d0a39fef5","type":"ColumnDataSource"},"glyph":{"id":"954fc787-d377-4170-b01d-0ff3f53edf28","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d2ae02e9-71d4-4734-bde9-0b2c955ca1c4","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"954fc787-d377-4170-b01d-0ff3f53edf28","type":"Circle"},{"attributes":{"plot":{"id":"e44f61a6-c03b-47ae-bd47-de8fcf659711","subtype":"Chart","type":"Plot"}},"id":"02eb66b2-95e1-4af0-b7f3-7c40c2ddbf32","type":"PanTool"},{"attributes":{"overlay":{"id":"4908f126-02a3-41cb-adef-ec8bad5b518b","type":"BoxAnnotation"},"plot":{"id":"e44f61a6-c03b-47ae-bd47-de8fcf659711","subtype":"Chart","type":"Plot"}},"id":"cc221af1-9c67-4ed1-bc79-cd43e1528a89","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"x_values":{"__ndarray__":"AAAAAABAXEAAAAAAAEBYQAAAAAAAQFhAAAAAAACAW0AAAAAAAMBaQAAAAAAAAFpAAAAAAABAXkAAAAAAAEBYQAAAAAAAgGFAAAAAAABAXEAAAAAAAIBhQAAAAAAAgF5AAAAAAAAAXUAAAAAAAMBTQAAAAAAAAFZAAAAAAADAUUAAAAAAAABSQAAAAAAAQFhAAAAAAADAVkAAAAAAAEBcQAAAAAAAYFhAAAAAAABAWEAAAAAAAIBhQAAAAAAAgF5AAAAAAABAXkAAAAAAAEBeQAAAAAAAAF5AAAAAAAAAWEAAAAAAAIBeQAAAAAAAQFhAAAAAAAAAXkAAAAAAAIBYQAAAAAAAQFhAAAAAAABAWEAAAAAAAEBYQAAAAAAAgGFAAAAAAAAAW0AAAAAAAIBeQAAAAAAAgFhAAAAAAAAAUUAAAAAAAABdQAAAAAAAgFxAAAAAAABAXkAAAAAAAEBeQAAAAAAAwFNAAAAAAACAXkAAAAAAAMBRQAAAAAAAgGFAAAAAAACAWEAAAAAAAMBTQAAAAAAAQFhAAAAAAAAAU0AAAAAAAMBUQAAAAAAAgFZAAAAAAACAVkAAAAAAAABdQAAAAAAAAF5AAAAAAAAAW0AAAAAAAMBTQAAAAAAAQFhAAAAAAACAYUAAAAAAAIBhQAAAAAAAwGBAAAAAAACAVkAAAAAAAMBdQAAAAAAAgFZAAAAAAADAXEAAAAAAAABeQAAAAAAAQF5AAAAAAABAXkAAAAAAAMBWQAAAAAAAwFpAAAAAAAAAXUAAAAAAAIBhQAAAAAAAgFhAAAAAAABAWUAAAAAAAEBVQAAAAAAAgFhAAAAAAACAVkAAAAAAAMBWQAAAAAAAQFhAAAAAAABAVUAAAAAAAEBYQAAAAAAAgGFAAAAAAABAYEAAAAAAAABeQAAAAAAAgFhAAAAAAADAW0AAAAAAAMBTQAAAAAAAgF5AAAAAAABAVUAAAAAAAEBYQAAAAAAA4GJAAAAAAABAWEAAAAAAAIBhQAAAAAAAgFhAAAAAAACAWEAAAAAAAEBYQAAAAAAAQFhAAAAAAABAXkAAAAAAAIBWQAAAAAAAgFhAAAAAAACAU0AAAAAAAEBVQAAAAAAAwFZAAAAAAACAYUAAAAAAAIBYQAAAAAAAwGBAAAAAAADAXUAAAAAAAEBaQAAAAAAAwGBAAAAAAACAY0AAAAAAAOBiQAAAAAAAwF1AAAAAAABAXkAAAAAAAEBWQAAAAAAAgFhAAAAAAACAYUAAAAAAAEBWQAAAAAAAgFVAAAAAAACAWEAAAAAAAEBeQAAAAAAAoGFAAAAAAABAWkAAAAAAAEBaQAAAAAAAQFVAAAAAAADAVkAAAAAAAOBiQAAAAAAA4GJAAAAAAACAWEAAAAAAAEBWQAAAAAAAgFhAAAAAAACAVUAAAAAAAOBiQAAAAAAAgGFAAAAAAADgYkAAAAAAAEBYQAAAAAAAwGBAAAAAAAAAXkAAAAAAAMBdQAAAAAAAAFtAAAAAAACAVUAAAAAAAIBjQAAAAAAAQFVAAAAAAACAVkAAAAAAAIBWQAAAAAAAQGJAAAAAAADAVkAAAAAAAEBYQAAAAAAAQFZAAAAAAACAXkAAAAAAAMBaQAAAAAAA4GBAAAAAAADgYkAAAAAAAIBjQAAAAAAA4GBAAAAAAADAU0AAAAAAAIBVQAAAAAAAQFRAAAAAAABAWEAAAAAAAEBVQAAAAAAAQFZAAAAAAADAVkAAAAAAAEBaQAAAAAAAgFhAAAAAAACAWEAAAAAAAEBaQAAAAAAAwFpAAAAAAAAAW0AAAAAAAMBdQAAAAAAAAF5AAAAAAACgYUAAAAAAAABcQAAAAAAAAFxAAAAAAAAAXEAAAAAAAABcQAAAAAAA4GBAAAAAAADgYkAAAAAAAIBhQAAAAAAAQFpAAAAAAADAVkAAAAAAAMBWQAAAAAAAQFpAAAAAAACAWEAAAAAAAABeQAAAAAAAwFpAAAAAAAAAW0AAAAAAAMBWQAAAAAAAwFZAAAAAAADAVkAAAAAAAIBjQAAAAAAAAGJAAAAAAADgYEAAAAAAAOBiQAAAAAAAgGFAAAAAAABAWEAAAAAAAOBgQAAAAAAAAF5AAAAAAADAXUA=","dtype":"float64","shape":[199]},"y_values":[95,88,46,87,90,95,113,88,90,95,72,86,90,70,76,65,69,60,70,95,80,54,90,86,112,76,87,69,86,92,97,80,88,46,88,72,94,85,90,49,75,91,112,110,67,80,65,75,83,67,78,52,61,75,75,75,97,93,67,75,83,78,96,71,97,70,95,88,98,115,53,86,81,92,79,83,52,60,70,53,71,70,75,72,102,88,68,80,58,96,70,78,88,75,89,63,83,67,78,110,48,66,52,70,60,88,68,95,97,75,95,105,85,97,115,71,68,88,71,65,80,80,71,70,70,65,69,90,90,76,60,70,65,90,88,90,78,90,75,92,75,65,105,65,48,48,67,67,67,62,88,72,84,84,92,84,58,64,60,67,65,62,68,63,65,65,74,75,75,100,74,80,88,88,88,85,84,90,92,74,68,68,63,70,88,75,70,67,67,67,92,96,84,90,86,52,84,79,82]}},"id":"05f6ae1d-42b5-47d1-9b78-18d147acc8ab","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0b1e9732-8d68-4d72-8eb5-d2c02ca18816","type":"ColumnDataSource"},"glyph":{"id":"75d38f98-8d15-4c22-b055-400d3e48c4c9","type":"Diamond"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"39dac48a-138c-4148-98e1-c6531a346a7d","type":"GlyphRenderer"}],"root_ids":["e44f61a6-c03b-47ae-bd47-de8fcf659711"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"f6ad0a9e-f831-48e0-9647-6ae5989c55c5","elementid":"920021fa-3ab8-4ede-8110-b372127c55da","modelid":"e44f61a6-c03b-47ae-bd47-de8fcf659711"}];
                
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