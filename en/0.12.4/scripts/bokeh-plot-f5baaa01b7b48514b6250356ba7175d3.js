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
      };var element = document.getElementById("b2d8258b-0a3b-4ac4-80da-694126f782c2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b2d8258b-0a3b-4ac4-80da-694126f782c2' but no matching script tag was found. ")
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
                var docs_json = {"746e8b0e-a77f-4fa1-a853-d8b484e841c0":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":6,"origin":2}],"color":["#df5320"],"cyl":[6],"fill_alpha":[0.8],"height":[20.1],"label":[{"cyl":6,"origin":2}],"line_alpha":[1.0],"line_color":["white"],"origin":[2],"width":[0.8],"x":["2"],"y":[38.15655737704918]}},"id":"aeba58e1-02c7-4061-b2ca-530af631b5a7","type":"ColumnDataSource"},{"attributes":{"label":{"value":"4"},"renderers":[{"id":"5e80d713-89c8-4ed4-a7d6-c0a7072023d6","type":"GlyphRenderer"}]},"id":"60b6b0cb-f54d-449a-8a9d-ae556504f736","type":"LegendItem"},{"attributes":{"data_source":{"id":"9d75b872-b2a4-4fc0-a213-2e7647a880b1","type":"ColumnDataSource"},"glyph":{"id":"32728dad-05e0-4df5-819f-6311bb7fc5e0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"584d99d7-4eb6-414b-a3f8-d62a2f5b7310","type":"GlyphRenderer"},{"attributes":{"axis_label":"Mean( Mpg )","formatter":{"id":"57ae0ef3-ffd1-4389-b9bf-417c747b7f46","type":"BasicTickFormatter"},"plot":{"id":"ceff3ce4-f59b-46a8-97a7-eb9864b1b8e8","subtype":"Chart","type":"Plot"},"ticker":{"id":"63b0a309-04f4-419d-bd3c-24dea741923b","type":"BasicTicker"}},"id":"a5f6f04d-b8eb-4316-9a43-4e7328174ea1","type":"LinearAxis"},{"attributes":{"data_source":{"id":"c5d2214d-9330-4ddd-9fd1-8c575034e866","type":"ColumnDataSource"},"glyph":{"id":"39719c2f-4e2e-4ce4-9730-1da293cd72a4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"63a199f4-fd7c-4530-9853-60b8042ae0e7","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"39719c2f-4e2e-4ce4-9730-1da293cd72a4","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7b549a13-36e1-47f3-abcf-92bb54106e3e","type":"Rect"},{"attributes":{"label":{"value":"5"},"renderers":[{"id":"706b5c19-0393-47cf-8cbd-131fc1d40095","type":"GlyphRenderer"}]},"id":"36ec0694-ffa0-4bf2-81fd-9db8235e5458","type":"LegendItem"},{"attributes":{"axis_label":"Origin","formatter":{"id":"47963edd-42dc-42d0-8023-7e8a2ae942fe","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"ceff3ce4-f59b-46a8-97a7-eb9864b1b8e8","subtype":"Chart","type":"Plot"},"ticker":{"id":"bad6544c-57da-4cfb-97e0-b5de28e9c2b3","type":"CategoricalTicker"}},"id":"fa003008-0172-4eed-99a2-65cdfce3d673","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"89f1f82b-5fa6-4a3c-a441-5abc67bc2674","type":"ColumnDataSource"},"glyph":{"id":"e3f105a9-7263-4a4a-8bc6-5621a64ab8e1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"706b5c19-0393-47cf-8cbd-131fc1d40095","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":4,"origin":2}],"color":["#5ab738"],"cyl":[4],"fill_alpha":[0.8],"height":[28.10655737704918],"label":[{"cyl":4,"origin":2}],"line_alpha":[1.0],"line_color":["white"],"origin":[2],"width":[0.8],"x":["2"],"y":[14.05327868852459]}},"id":"79f3ddd7-25ab-4c98-97ec-ed97ace59ea7","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["1","2","3"]},"id":"adb4ca3d-94ee-4fe0-b3db-a8f158f0eb7d","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":6,"origin":3}],"color":["#df5320"],"cyl":[6],"fill_alpha":[0.8],"height":[23.88333333333333],"label":[{"cyl":6,"origin":3}],"line_alpha":[1.0],"line_color":["white"],"origin":[3],"width":[0.8],"x":["3"],"y":[64.08731884057971]}},"id":"6094668c-7088-45a6-9f70-a73833c00e73","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"15e833d4-19ee-45c4-bbf1-1357ad95c261","type":"PanTool"},{"id":"0591f959-52dd-4a65-8e75-4e4ca82b068a","type":"WheelZoomTool"},{"id":"34b38b23-f1aa-480a-a054-2c3b2e6a9e4c","type":"BoxZoomTool"},{"id":"927889b9-a4b1-45dd-bbcf-a1bb2583949b","type":"SaveTool"},{"id":"e5aa3179-f7ce-4547-a36d-43d055b79d34","type":"ResetTool"},{"id":"4bbfb128-80bf-40d7-aa55-029c11c1ee69","type":"HelpTool"}]},"id":"779bb123-7860-4f7c-ad47-e9cdaf071e70","type":"Toolbar"},{"attributes":{"data_source":{"id":"79f3ddd7-25ab-4c98-97ec-ed97ace59ea7","type":"ColumnDataSource"},"glyph":{"id":"f16191af-1569-457e-abed-0bd55eb708f9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"62e55554-d9c8-4403-8d51-32b18d049efc","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"ceff3ce4-f59b-46a8-97a7-eb9864b1b8e8","subtype":"Chart","type":"Plot"},"ticker":{"id":"63b0a309-04f4-419d-bd3c-24dea741923b","type":"BasicTicker"}},"id":"3e077fb4-a310-4102-a71f-e0ab279508e5","type":"Grid"},{"attributes":{"callback":null,"end":79.83043478260869},"id":"9d9562b4-2465-45f0-be07-94dfc7e75ef9","type":"Range1d"},{"attributes":{"plot":null,"text":"Avg MPG by ORIGIN, stacked by CYL"},"id":"74196e71-5fc1-4aad-bdd0-c63dc60f9373","type":"Title"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":4,"origin":1}],"color":["#5ab738"],"cyl":[4],"fill_alpha":[0.8],"height":[28.013043478260872],"label":[{"cyl":4,"origin":1}],"line_alpha":[1.0],"line_color":["white"],"origin":[1],"width":[0.8],"x":["1"],"y":[48.61483401469899]}},"id":"9b45b55f-c77b-4055-b963-a761907fe181","type":"ColumnDataSource"},{"attributes":{"label":{"value":"3"},"renderers":[{"id":"584d99d7-4eb6-414b-a3f8-d62a2f5b7310","type":"GlyphRenderer"}]},"id":"12835ca5-9951-4261-bed0-6f008d0560e1","type":"LegendItem"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e3f105a9-7263-4a4a-8bc6-5621a64ab8e1","type":"Rect"},{"attributes":{"overlay":{"id":"011ef136-c285-4067-afa3-2b5dc6a7d43f","type":"BoxAnnotation"},"plot":{"id":"ceff3ce4-f59b-46a8-97a7-eb9864b1b8e8","subtype":"Chart","type":"Plot"}},"id":"34b38b23-f1aa-480a-a054-2c3b2e6a9e4c","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"ceff3ce4-f59b-46a8-97a7-eb9864b1b8e8","subtype":"Chart","type":"Plot"}},"id":"0591f959-52dd-4a65-8e75-4e4ca82b068a","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":4,"origin":3}],"color":["#5ab738"],"cyl":[4],"fill_alpha":[0.8],"height":[31.59565217391304],"label":[{"cyl":4,"origin":3}],"line_alpha":[1.0],"line_color":["white"],"origin":[3],"width":[0.8],"x":["3"],"y":[15.79782608695652]}},"id":"b69968b9-624e-47fd-b3ab-0050c08c23fd","type":"ColumnDataSource"},{"attributes":{},"id":"57ae0ef3-ffd1-4389-b9bf-417c747b7f46","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a7fca455-296b-4c31-895f-f3bea64c87b3","type":"Rect"},{"attributes":{"label":{"value":"8"},"renderers":[{"id":"8004270d-b038-43b2-aea9-e8291282be99","type":"GlyphRenderer"}]},"id":"90696034-f8b2-4d62-b8cd-65f5a55d2147","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":5,"origin":2}],"color":["#407ee7"],"cyl":[5],"fill_alpha":[0.8],"height":[27.366666666666664],"label":[{"cyl":5,"origin":2}],"line_alpha":[1.0],"line_color":["white"],"origin":[2],"width":[0.8],"x":["2"],"y":[61.88989071038251]}},"id":"89f1f82b-5fa6-4a3c-a441-5abc67bc2674","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"011ef136-c285-4067-afa3-2b5dc6a7d43f","type":"BoxAnnotation"},{"attributes":{},"id":"63b0a309-04f4-419d-bd3c-24dea741923b","type":"BasicTicker"},{"attributes":{"data_source":{"id":"9b45b55f-c77b-4055-b963-a761907fe181","type":"ColumnDataSource"},"glyph":{"id":"a7fca455-296b-4c31-895f-f3bea64c87b3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8bb9931b-1f9f-45dd-8347-cd6214186af9","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":3,"origin":3}],"color":["#f22c40"],"cyl":[3],"fill_alpha":[0.8],"height":[20.55],"label":[{"cyl":3,"origin":3}],"line_alpha":[1.0],"line_color":["white"],"origin":[3],"width":[0.8],"x":["3"],"y":[41.870652173913044]}},"id":"9d75b872-b2a4-4fc0-a213-2e7647a880b1","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":6,"origin":1}],"color":["#df5320"],"cyl":[6],"fill_alpha":[0.8],"height":[19.645205479452052],"label":[{"cyl":6,"origin":1}],"line_alpha":[1.0],"line_color":["white"],"origin":[1],"width":[0.8],"x":["1"],"y":[24.785709535842532]}},"id":"c5d2214d-9330-4ddd-9fd1-8c575034e866","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a9c0f555-f94f-4e0e-8123-c6c2621dec8e","type":"ColumnDataSource"},"glyph":{"id":"7b549a13-36e1-47f3-abcf-92bb54106e3e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8004270d-b038-43b2-aea9-e8291282be99","type":"GlyphRenderer"},{"attributes":{"items":[{"id":"90696034-f8b2-4d62-b8cd-65f5a55d2147","type":"LegendItem"},{"id":"60b6b0cb-f54d-449a-8a9d-ae556504f736","type":"LegendItem"},{"id":"1379be4e-1966-419f-9d57-82778602b32e","type":"LegendItem"},{"id":"12835ca5-9951-4261-bed0-6f008d0560e1","type":"LegendItem"},{"id":"36ec0694-ffa0-4bf2-81fd-9db8235e5458","type":"LegendItem"}],"plot":{"id":"ceff3ce4-f59b-46a8-97a7-eb9864b1b8e8","subtype":"Chart","type":"Plot"}},"id":"65d4d09a-4dbe-4412-962a-a2e679938698","type":"Legend"},{"attributes":{"below":[{"id":"fa003008-0172-4eed-99a2-65cdfce3d673","type":"CategoricalAxis"}],"css_classes":null,"left":[{"id":"a5f6f04d-b8eb-4316-9a43-4e7328174ea1","type":"LinearAxis"}],"renderers":[{"id":"011ef136-c285-4067-afa3-2b5dc6a7d43f","type":"BoxAnnotation"},{"id":"8004270d-b038-43b2-aea9-e8291282be99","type":"GlyphRenderer"},{"id":"5e80d713-89c8-4ed4-a7d6-c0a7072023d6","type":"GlyphRenderer"},{"id":"63a199f4-fd7c-4530-9853-60b8042ae0e7","type":"GlyphRenderer"},{"id":"62e55554-d9c8-4403-8d51-32b18d049efc","type":"GlyphRenderer"},{"id":"8bb9931b-1f9f-45dd-8347-cd6214186af9","type":"GlyphRenderer"},{"id":"584d99d7-4eb6-414b-a3f8-d62a2f5b7310","type":"GlyphRenderer"},{"id":"73d0e659-9f63-4009-a06e-89523a034954","type":"GlyphRenderer"},{"id":"f4b349d7-2183-456e-9975-e4bb2e3d3d57","type":"GlyphRenderer"},{"id":"706b5c19-0393-47cf-8cbd-131fc1d40095","type":"GlyphRenderer"},{"id":"65d4d09a-4dbe-4412-962a-a2e679938698","type":"Legend"},{"id":"fa003008-0172-4eed-99a2-65cdfce3d673","type":"CategoricalAxis"},{"id":"a5f6f04d-b8eb-4316-9a43-4e7328174ea1","type":"LinearAxis"},{"id":"3e077fb4-a310-4102-a71f-e0ab279508e5","type":"Grid"}],"title":{"id":"74196e71-5fc1-4aad-bdd0-c63dc60f9373","type":"Title"},"tool_events":{"id":"17c32e54-8c27-4f40-8498-3ea8814e6e13","type":"ToolEvents"},"toolbar":{"id":"779bb123-7860-4f7c-ad47-e9cdaf071e70","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"adb4ca3d-94ee-4fe0-b3db-a8f158f0eb7d","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"9d9562b4-2465-45f0-be07-94dfc7e75ef9","type":"Range1d"}},"id":"ceff3ce4-f59b-46a8-97a7-eb9864b1b8e8","subtype":"Chart","type":"Plot"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8331b109-9ca1-49c0-acd0-3172464ed845","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8b0b1d70-b253-4ed8-8613-9d8ae0ed7204","type":"Rect"},{"attributes":{"plot":{"id":"ceff3ce4-f59b-46a8-97a7-eb9864b1b8e8","subtype":"Chart","type":"Plot"}},"id":"4bbfb128-80bf-40d7-aa55-029c11c1ee69","type":"HelpTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0701907f-da85-4b36-a53e-6b27c150dc33","type":"Rect"},{"attributes":{"plot":{"id":"ceff3ce4-f59b-46a8-97a7-eb9864b1b8e8","subtype":"Chart","type":"Plot"}},"id":"15e833d4-19ee-45c4-bbf1-1357ad95c261","type":"PanTool"},{"attributes":{},"id":"17c32e54-8c27-4f40-8498-3ea8814e6e13","type":"ToolEvents"},{"attributes":{},"id":"bad6544c-57da-4cfb-97e0-b5de28e9c2b3","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f16191af-1569-457e-abed-0bd55eb708f9","type":"Rect"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":8,"origin":1}],"color":["#00ad9c"],"cyl":[8],"fill_alpha":[0.8],"height":[14.963106796116506],"label":[{"cyl":8,"origin":1}],"line_alpha":[1.0],"line_color":["white"],"origin":[1],"width":[0.8],"x":["1"],"y":[7.481553398058253]}},"id":"a9c0f555-f94f-4e0e-8123-c6c2621dec8e","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"32728dad-05e0-4df5-819f-6311bb7fc5e0","type":"Rect"},{"attributes":{"data_source":{"id":"6094668c-7088-45a6-9f70-a73833c00e73","type":"ColumnDataSource"},"glyph":{"id":"0701907f-da85-4b36-a53e-6b27c150dc33","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"73d0e659-9f63-4009-a06e-89523a034954","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"ceff3ce4-f59b-46a8-97a7-eb9864b1b8e8","subtype":"Chart","type":"Plot"}},"id":"e5aa3179-f7ce-4547-a36d-43d055b79d34","type":"ResetTool"},{"attributes":{"data_source":{"id":"b69968b9-624e-47fd-b3ab-0050c08c23fd","type":"ColumnDataSource"},"glyph":{"id":"8b0b1d70-b253-4ed8-8613-9d8ae0ed7204","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5e80d713-89c8-4ed4-a7d6-c0a7072023d6","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"ceff3ce4-f59b-46a8-97a7-eb9864b1b8e8","subtype":"Chart","type":"Plot"}},"id":"927889b9-a4b1-45dd-bbcf-a1bb2583949b","type":"SaveTool"},{"attributes":{"label":{"value":"6"},"renderers":[{"id":"63a199f4-fd7c-4530-9853-60b8042ae0e7","type":"GlyphRenderer"}]},"id":"1379be4e-1966-419f-9d57-82778602b32e","type":"LegendItem"},{"attributes":{},"id":"47963edd-42dc-42d0-8023-7e8a2ae942fe","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"aeba58e1-02c7-4061-b2ca-530af631b5a7","type":"ColumnDataSource"},"glyph":{"id":"8331b109-9ca1-49c0-acd0-3172464ed845","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f4b349d7-2183-456e-9975-e4bb2e3d3d57","type":"GlyphRenderer"}],"root_ids":["ceff3ce4-f59b-46a8-97a7-eb9864b1b8e8"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"746e8b0e-a77f-4fa1-a853-d8b484e841c0","elementid":"b2d8258b-0a3b-4ac4-80da-694126f782c2","modelid":"ceff3ce4-f59b-46a8-97a7-eb9864b1b8e8"}];
                
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
