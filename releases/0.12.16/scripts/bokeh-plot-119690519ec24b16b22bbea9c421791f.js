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
      };var element = document.getElementById("9dd3cea1-afe7-4cec-a2e3-e3eb5a2b2201");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9dd3cea1-afe7-4cec-a2e3-e3eb5a2b2201' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.16.min.js"];
    
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
                    
                  var docs_json = '{"cbd5bf6b-453e-4134-8883-23cd26fb7384":{"roots":{"references":[{"attributes":{"data_source":{"id":"e70b91ee-2b89-400c-8f0b-2daa45f335fc","type":"ColumnDataSource"},"glyph":{"id":"59edab8e-310b-411c-931a-55f8aefc8e99","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"aa81eac6-b06e-48b8-ae2b-f9da0b6f521f","type":"HBar"},"selection_glyph":null,"view":{"id":"893f78be-6908-487b-977d-8533af64c845","type":"CDSView"}},"id":"20ea31e4-7b59-4289-8987-448e70f355a2","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"07812159-f71c-4a8c-81df-0a15139d2246","type":"PanTool"},{"id":"f3b1ea3e-5407-4fda-bec9-91251b5ee7cd","type":"WheelZoomTool"},{"id":"6739005d-e0c5-4f34-b68e-6d56ecbf5544","type":"BoxZoomTool"},{"id":"35067c66-7f5d-4ebb-891e-8819419d9c6e","type":"SaveTool"},{"id":"76189a14-4a57-4254-b1a1-55928510ce63","type":"ResetTool"},{"id":"6a46a7d7-cdbc-425b-9e10-269b39cbd41d","type":"HelpTool"}]},"id":"9de75669-59fe-4d64-b749-820db38a190e","type":"Toolbar"},{"attributes":{"source":{"id":"a5b736dd-76fd-4eb1-b94b-25c7e22e8e4b","type":"ColumnDataSource"}},"id":"5db1615d-4c6f-4cfc-a1fe-c9956b762880","type":"CDSView"},{"attributes":{"fill_color":{"value":"#fdbb84"},"height":{"value":0.9},"left":{"expr":{"id":"62b048ac-b2a2-47f7-aede-36332000a3bf","type":"Stack"}},"line_color":{"value":"#fdbb84"},"right":{"expr":{"id":"d355b171-c8e6-4cc6-9a2b-5432bbd63ce3","type":"Stack"}},"y":{"field":"fruits"}},"id":"ea6966ed-ed76-4809-be15-99072925fdc2","type":"HBar"},{"attributes":{"formatter":{"id":"fb8c16ee-0400-4389-9277-5c36ae9fd8cd","type":"BasicTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"6f37913d-83f6-4a51-9110-2fcd68c83e0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"219a3d91-2550-46b2-8065-858a99022aaf","type":"BasicTicker"}},"id":"164b7f4a-aa2b-467e-b865-a490e1afc166","type":"LinearAxis"},{"attributes":{"data_source":{"id":"a5b736dd-76fd-4eb1-b94b-25c7e22e8e4b","type":"ColumnDataSource"},"glyph":{"id":"85a2029f-1ea6-4aee-aa6b-8440ad905a97","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"317087a5-df24-4d81-aacc-808131da72d4","type":"HBar"},"selection_glyph":null,"view":{"id":"6078de44-36e7-4867-9e7c-ca55d12e1570","type":"CDSView"}},"id":"06826f84-3305-4230-8c46-20a95459f8f3","type":"GlyphRenderer"},{"attributes":{"fields":["2015"]},"id":"3058d52b-938f-4d35-af90-09e1542c4349","type":"Stack"},{"attributes":{"formatter":{"id":"e4d6f0c6-1f13-4a05-a0ba-2b22c3c7d691","type":"CategoricalTickFormatter"},"minor_tick_line_color":{"value":null},"plot":{"id":"6f37913d-83f6-4a51-9110-2fcd68c83e0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"02a6daef-d37b-4c04-885b-8f85c76becf5","type":"CategoricalTicker"}},"id":"3c85a770-3479-41d3-b4d0-08ec2d5c3c2c","type":"CategoricalAxis"},{"attributes":{"fill_color":{"value":"#43a2ca"},"height":{"value":0.9},"left":{"expr":{"id":"64949d36-4d76-42a9-a3ce-bcafadcc1f3a","type":"Stack"}},"line_color":{"value":"#43a2ca"},"right":{"expr":{"id":"817f6187-ed0c-4377-8d8f-3b3dfa02d542","type":"Stack"}},"y":{"field":"fruits"}},"id":"b33f2c80-212f-43d8-9fd1-b2aef4520f9f","type":"HBar"},{"attributes":{"fields":["2015","2016","2017"]},"id":"175f8d6e-9735-4de1-b29a-39bd436d7e0b","type":"Stack"},{"attributes":{"fields":["2015","2016","2017"]},"id":"4b323b8b-f075-457e-b7a4-0c0493ef85d2","type":"Stack"},{"attributes":{},"id":"6a46a7d7-cdbc-425b-9e10-269b39cbd41d","type":"HelpTool"},{"attributes":{"label":{"value":"2015 imports"},"renderers":[{"id":"06826f84-3305-4230-8c46-20a95459f8f3","type":"GlyphRenderer"}]},"id":"81364bd5-51b0-422e-afa0-e8687cd90f33","type":"LegendItem"},{"attributes":{},"id":"f3b1ea3e-5407-4fda-bec9-91251b5ee7cd","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"a5b736dd-76fd-4eb1-b94b-25c7e22e8e4b","type":"ColumnDataSource"},"glyph":{"id":"ea6966ed-ed76-4809-be15-99072925fdc2","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14ba75d5-d357-481d-88b1-31a9522fd559","type":"HBar"},"selection_glyph":null,"view":{"id":"b64b754f-bee6-4e5f-b551-3e5a86f32ff8","type":"CDSView"}},"id":"838fc1f0-595c-4ef0-882f-b307ba060b52","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"6f37913d-83f6-4a51-9110-2fcd68c83e0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"219a3d91-2550-46b2-8065-858a99022aaf","type":"BasicTicker"}},"id":"8ae6ef81-a28f-4705-aea3-7c04d9148a30","type":"Grid"},{"attributes":{"below":[{"id":"164b7f4a-aa2b-467e-b865-a490e1afc166","type":"LinearAxis"}],"left":[{"id":"3c85a770-3479-41d3-b4d0-08ec2d5c3c2c","type":"CategoricalAxis"}],"outline_line_color":{"value":null},"plot_height":250,"renderers":[{"id":"164b7f4a-aa2b-467e-b865-a490e1afc166","type":"LinearAxis"},{"id":"8ae6ef81-a28f-4705-aea3-7c04d9148a30","type":"Grid"},{"id":"3c85a770-3479-41d3-b4d0-08ec2d5c3c2c","type":"CategoricalAxis"},{"id":"886df757-54cd-40aa-8420-673954f4a9de","type":"Grid"},{"id":"1ca57cb6-f2ad-494e-86f4-79dc8d423f69","type":"BoxAnnotation"},{"id":"093d19e0-1d55-4976-b652-0b8b8ca183f3","type":"Legend"},{"id":"1f421578-111d-41f2-86c9-643b32563b82","type":"GlyphRenderer"},{"id":"20ea31e4-7b59-4289-8987-448e70f355a2","type":"GlyphRenderer"},{"id":"8d46f568-2a7a-458b-84ea-263884758066","type":"GlyphRenderer"},{"id":"06826f84-3305-4230-8c46-20a95459f8f3","type":"GlyphRenderer"},{"id":"838fc1f0-595c-4ef0-882f-b307ba060b52","type":"GlyphRenderer"},{"id":"1c138fca-b31e-4e61-96cb-3c104b101cc5","type":"GlyphRenderer"}],"title":{"id":"8c396235-ee59-4522-a7c6-d3be967d57e1","type":"Title"},"toolbar":{"id":"9de75669-59fe-4d64-b749-820db38a190e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"65b1cf26-891c-42fe-a1a9-727b7c2a90a3","type":"Range1d"},"x_scale":{"id":"c0ef236f-0451-4513-8d46-a3a3c491ba13","type":"LinearScale"},"y_range":{"id":"6265f013-1a90-4290-aa75-d52ab00d0718","type":"FactorRange"},"y_scale":{"id":"4916b7e4-745c-4e2f-b838-be109a377bc7","type":"CategoricalScale"}},"id":"6f37913d-83f6-4a51-9110-2fcd68c83e0e","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"2017 imports"},"renderers":[{"id":"1c138fca-b31e-4e61-96cb-3c104b101cc5","type":"GlyphRenderer"}]},"id":"88786d92-de79-4b28-aff6-1b1f321b9ad0","type":"LegendItem"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1ca57cb6-f2ad-494e-86f4-79dc8d423f69","type":"BoxAnnotation"},{"attributes":{},"id":"d8d93520-8cce-416f-8b3e-88cd92763ed6","type":"UnionRenderers"},{"attributes":{"source":{"id":"a5b736dd-76fd-4eb1-b94b-25c7e22e8e4b","type":"ColumnDataSource"}},"id":"b64b754f-bee6-4e5f-b551-3e5a86f32ff8","type":"CDSView"},{"attributes":{"data_source":{"id":"a5b736dd-76fd-4eb1-b94b-25c7e22e8e4b","type":"ColumnDataSource"},"glyph":{"id":"aa5ac32f-311d-40fd-9599-c21c8f9aa2d9","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"252c2f8e-fe96-44cb-9bca-3e113189f5ce","type":"HBar"},"selection_glyph":null,"view":{"id":"5db1615d-4c6f-4cfc-a1fe-c9956b762880","type":"CDSView"}},"id":"1c138fca-b31e-4e61-96cb-3c104b101cc5","type":"GlyphRenderer"},{"attributes":{},"id":"76189a14-4a57-4254-b1a1-55928510ce63","type":"ResetTool"},{"attributes":{"callback":null,"end":16,"start":-16},"id":"65b1cf26-891c-42fe-a1a9-727b7c2a90a3","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"c892c048-c13b-45ee-90c6-54d280fb1729","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"8e5d2019-b9ef-417c-9b8f-d41f388c02c4","type":"Stack"}},"y":{"field":"fruits"}},"id":"317087a5-df24-4d81-aacc-808131da72d4","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"6fde36eb-ae39-4eda-8048-2ecfb98f70b0","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"4b323b8b-f075-457e-b7a4-0c0493ef85d2","type":"Stack"}},"y":{"field":"fruits"}},"id":"252c2f8e-fe96-44cb-9bca-3e113189f5ce","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"3058d52b-938f-4d35-af90-09e1542c4349","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"e3fec4ae-af25-49e2-bb9e-3d9982602bfd","type":"Stack"}},"y":{"field":"fruits"}},"id":"aa81eac6-b06e-48b8-ae2b-f9da0b6f521f","type":"HBar"},{"attributes":{"label":{"value":"2017 exports"},"renderers":[{"id":"8d46f568-2a7a-458b-84ea-263884758066","type":"GlyphRenderer"}]},"id":"25d24e58-ee00-404e-9954-98d45ace2837","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#e0f3db"},"height":{"value":0.9},"left":{"expr":{"id":"c0945def-2fc3-4dc6-80e0-0af697b529fa","type":"Stack"}},"line_color":{"value":"#e0f3db"},"right":{"expr":{"id":"175f8d6e-9735-4de1-b29a-39bd436d7e0b","type":"Stack"}},"y":{"field":"fruits"}},"id":"8208d77a-c5d7-4221-85ed-7cd2da04fa23","type":"HBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"c0945def-2fc3-4dc6-80e0-0af697b529fa","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"175f8d6e-9735-4de1-b29a-39bd436d7e0b","type":"Stack"}},"y":{"field":"fruits"}},"id":"1bffbcb8-f3f2-4ab5-84e9-eaa3fc3f2ea0","type":"HBar"},{"attributes":{"overlay":{"id":"1ca57cb6-f2ad-494e-86f4-79dc8d423f69","type":"BoxAnnotation"}},"id":"6739005d-e0c5-4f34-b68e-6d56ecbf5544","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#a8ddb5"},"height":{"value":0.9},"left":{"expr":{"id":"3058d52b-938f-4d35-af90-09e1542c4349","type":"Stack"}},"line_color":{"value":"#a8ddb5"},"right":{"expr":{"id":"e3fec4ae-af25-49e2-bb9e-3d9982602bfd","type":"Stack"}},"y":{"field":"fruits"}},"id":"59edab8e-310b-411c-931a-55f8aefc8e99","type":"HBar"},{"attributes":{},"id":"35067c66-7f5d-4ebb-891e-8819419d9c6e","type":"SaveTool"},{"attributes":{"fields":["2015","2016"]},"id":"e3fec4ae-af25-49e2-bb9e-3d9982602bfd","type":"Stack"},{"attributes":{"plot":null,"text":"Fruit import/export, by year"},"id":"8c396235-ee59-4522-a7c6-d3be967d57e1","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"62b048ac-b2a2-47f7-aede-36332000a3bf","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"d355b171-c8e6-4cc6-9a2b-5432bbd63ce3","type":"Stack"}},"y":{"field":"fruits"}},"id":"14ba75d5-d357-481d-88b1-31a9522fd559","type":"HBar"},{"attributes":{"fields":["2015"]},"id":"817f6187-ed0c-4377-8d8f-3b3dfa02d542","type":"Stack"},{"attributes":{"fields":["2015","2016"]},"id":"6fde36eb-ae39-4eda-8048-2ecfb98f70b0","type":"Stack"},{"attributes":{"data_source":{"id":"e70b91ee-2b89-400c-8f0b-2daa45f335fc","type":"ColumnDataSource"},"glyph":{"id":"b33f2c80-212f-43d8-9fd1-b2aef4520f9f","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1c2fee30-09fc-4772-ba42-a2f74f7646e6","type":"HBar"},"selection_glyph":null,"view":{"id":"ff53ee7b-412e-4301-aa42-5836b24edb8e","type":"CDSView"}},"id":"1f421578-111d-41f2-86c9-643b32563b82","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"2015":[2,1,4,3,2,4],"2016":[5,3,4,2,4,6],"2017":[3,2,4,4,5,3],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"a663d3f1-b982-4904-a8b6-fee83f5d56b5","type":"Selection"},"selection_policy":{"id":"3cc589c8-7ffc-4607-a59c-72ff01211ab5","type":"UnionRenderers"}},"id":"e70b91ee-2b89-400c-8f0b-2daa45f335fc","type":"ColumnDataSource"},{"attributes":{},"id":"219a3d91-2550-46b2-8065-858a99022aaf","type":"BasicTicker"},{"attributes":{"source":{"id":"e70b91ee-2b89-400c-8f0b-2daa45f335fc","type":"ColumnDataSource"}},"id":"2a48a494-290a-49f1-9c45-3814e26ba19f","type":"CDSView"},{"attributes":{"label":{"value":"2016 exports"},"renderers":[{"id":"20ea31e4-7b59-4289-8987-448e70f355a2","type":"GlyphRenderer"}]},"id":"e7e1e421-4f89-462e-a238-586a4200f011","type":"LegendItem"},{"attributes":{"items":[{"id":"861522a4-8020-4234-896f-1a77980594b9","type":"LegendItem"},{"id":"e7e1e421-4f89-462e-a238-586a4200f011","type":"LegendItem"},{"id":"25d24e58-ee00-404e-9954-98d45ace2837","type":"LegendItem"},{"id":"81364bd5-51b0-422e-afa0-e8687cd90f33","type":"LegendItem"},{"id":"555a986e-1134-48ed-9f89-98a2da44b16d","type":"LegendItem"},{"id":"88786d92-de79-4b28-aff6-1b1f321b9ad0","type":"LegendItem"}],"location":"top_left","plot":{"id":"6f37913d-83f6-4a51-9110-2fcd68c83e0e","subtype":"Figure","type":"Plot"}},"id":"093d19e0-1d55-4976-b652-0b8b8ca183f3","type":"Legend"},{"attributes":{},"id":"fb8c16ee-0400-4389-9277-5c36ae9fd8cd","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"e70b91ee-2b89-400c-8f0b-2daa45f335fc","type":"ColumnDataSource"},"glyph":{"id":"8208d77a-c5d7-4221-85ed-7cd2da04fa23","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1bffbcb8-f3f2-4ab5-84e9-eaa3fc3f2ea0","type":"HBar"},"selection_glyph":null,"view":{"id":"2a48a494-290a-49f1-9c45-3814e26ba19f","type":"CDSView"}},"id":"8d46f568-2a7a-458b-84ea-263884758066","type":"GlyphRenderer"},{"attributes":{"fields":[]},"id":"64949d36-4d76-42a9-a3ce-bcafadcc1f3a","type":"Stack"},{"attributes":{},"id":"c0ef236f-0451-4513-8d46-a3a3c491ba13","type":"LinearScale"},{"attributes":{"source":{"id":"e70b91ee-2b89-400c-8f0b-2daa45f335fc","type":"ColumnDataSource"}},"id":"893f78be-6908-487b-977d-8533af64c845","type":"CDSView"},{"attributes":{"source":{"id":"a5b736dd-76fd-4eb1-b94b-25c7e22e8e4b","type":"ColumnDataSource"}},"id":"6078de44-36e7-4867-9e7c-ca55d12e1570","type":"CDSView"},{"attributes":{},"id":"e4d6f0c6-1f13-4a05-a0ba-2b22c3c7d691","type":"CategoricalTickFormatter"},{"attributes":{"label":{"value":"2016 imports"},"renderers":[{"id":"838fc1f0-595c-4ef0-882f-b307ba060b52","type":"GlyphRenderer"}]},"id":"555a986e-1134-48ed-9f89-98a2da44b16d","type":"LegendItem"},{"attributes":{"callback":null,"data":{"2015":[-1,0,-1,-3,-2,-1],"2016":[-2,-1,-3,-1,-2,-2],"2017":[-1,-2,-1,0,-2,-2],"fruits":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":{"id":"fb066b5b-757e-4dd2-ba7e-a6423d37ea25","type":"Selection"},"selection_policy":{"id":"d8d93520-8cce-416f-8b3e-88cd92763ed6","type":"UnionRenderers"}},"id":"a5b736dd-76fd-4eb1-b94b-25c7e22e8e4b","type":"ColumnDataSource"},{"attributes":{"source":{"id":"e70b91ee-2b89-400c-8f0b-2daa45f335fc","type":"ColumnDataSource"}},"id":"ff53ee7b-412e-4301-aa42-5836b24edb8e","type":"CDSView"},{"attributes":{"fill_color":{"value":"#e34a33"},"height":{"value":0.9},"left":{"expr":{"id":"c892c048-c13b-45ee-90c6-54d280fb1729","type":"Stack"}},"line_color":{"value":"#e34a33"},"right":{"expr":{"id":"8e5d2019-b9ef-417c-9b8f-d41f388c02c4","type":"Stack"}},"y":{"field":"fruits"}},"id":"85a2029f-1ea6-4aee-aa6b-8440ad905a97","type":"HBar"},{"attributes":{},"id":"02a6daef-d37b-4c04-885b-8f85c76becf5","type":"CategoricalTicker"},{"attributes":{"fields":["2015"]},"id":"8e5d2019-b9ef-417c-9b8f-d41f388c02c4","type":"Stack"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"6f37913d-83f6-4a51-9110-2fcd68c83e0e","subtype":"Figure","type":"Plot"},"ticker":{"id":"02a6daef-d37b-4c04-885b-8f85c76becf5","type":"CategoricalTicker"}},"id":"886df757-54cd-40aa-8420-673954f4a9de","type":"Grid"},{"attributes":{"fill_color":{"value":"#fee8c8"},"height":{"value":0.9},"left":{"expr":{"id":"6fde36eb-ae39-4eda-8048-2ecfb98f70b0","type":"Stack"}},"line_color":{"value":"#fee8c8"},"right":{"expr":{"id":"4b323b8b-f075-457e-b7a4-0c0493ef85d2","type":"Stack"}},"y":{"field":"fruits"}},"id":"aa5ac32f-311d-40fd-9599-c21c8f9aa2d9","type":"HBar"},{"attributes":{"fields":[]},"id":"c892c048-c13b-45ee-90c6-54d280fb1729","type":"Stack"},{"attributes":{"label":{"value":"2015 exports"},"renderers":[{"id":"1f421578-111d-41f2-86c9-643b32563b82","type":"GlyphRenderer"}]},"id":"861522a4-8020-4234-896f-1a77980594b9","type":"LegendItem"},{"attributes":{"fields":["2015","2016"]},"id":"c0945def-2fc3-4dc6-80e0-0af697b529fa","type":"Stack"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.9},"left":{"expr":{"id":"64949d36-4d76-42a9-a3ce-bcafadcc1f3a","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"817f6187-ed0c-4377-8d8f-3b3dfa02d542","type":"Stack"}},"y":{"field":"fruits"}},"id":"1c2fee30-09fc-4772-ba42-a2f74f7646e6","type":"HBar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"],"range_padding":0.1},"id":"6265f013-1a90-4290-aa75-d52ab00d0718","type":"FactorRange"},{"attributes":{},"id":"fb066b5b-757e-4dd2-ba7e-a6423d37ea25","type":"Selection"},{"attributes":{},"id":"07812159-f71c-4a8c-81df-0a15139d2246","type":"PanTool"},{"attributes":{"fields":["2015","2016"]},"id":"d355b171-c8e6-4cc6-9a2b-5432bbd63ce3","type":"Stack"},{"attributes":{},"id":"4916b7e4-745c-4e2f-b838-be109a377bc7","type":"CategoricalScale"},{"attributes":{"fields":["2015"]},"id":"62b048ac-b2a2-47f7-aede-36332000a3bf","type":"Stack"},{"attributes":{},"id":"3cc589c8-7ffc-4607-a59c-72ff01211ab5","type":"UnionRenderers"},{"attributes":{},"id":"a663d3f1-b982-4904-a8b6-fee83f5d56b5","type":"Selection"}],"root_ids":["6f37913d-83f6-4a51-9110-2fcd68c83e0e"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"cbd5bf6b-453e-4134-8883-23cd26fb7384","elementid":"9dd3cea1-afe7-4cec-a2e3-e3eb5a2b2201","modelid":"6f37913d-83f6-4a51-9110-2fcd68c83e0e"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
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