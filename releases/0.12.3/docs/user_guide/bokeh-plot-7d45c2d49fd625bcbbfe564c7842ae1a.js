document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("ab728bde-56cb-4d74-a5bd-d02d03b7a84c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ab728bde-56cb-4d74-a5bd-d02d03b7a84c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"4c02a348-ead7-4344-845d-4f35cb9bf573":{"roots":{"references":[{"attributes":{"axis_label":"Mpg","formatter":{"id":"6d6c2dd8-9971-466d-80b9-151847de0cec","type":"BasicTickFormatter"},"plot":{"id":"8790b329-426f-4b22-bc06-a1f0085a1a23","subtype":"Chart","type":"Plot"},"ticker":{"id":"1f6bab87-c29c-47b7-bae5-edd745909642","type":"BasicTicker"}},"id":"810a7e1b-6710-4c29-b1f0-3cb14fc56572","type":"LinearAxis"},{"attributes":{"data_source":{"id":"a3d35320-abad-4789-aa1d-1586cbf66bae","type":"ColumnDataSource"},"glyph":{"id":"35381b69-d99c-47f2-b386-b11d59e57708","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d20974a9-debc-41d1-9603-36fc5652c7fe","type":"GlyphRenderer"},{"attributes":{"label":{"value":"5"},"renderers":[{"id":"c2d61fa1-20b2-45a3-91f6-f4c5123bc21e","type":"GlyphRenderer"},{"id":"fe7ffd0e-bbb0-4816-968b-38bf486df6b0","type":"GlyphRenderer"},{"id":"f8556c27-17d8-4747-a9a7-ec9e62d7ac0d","type":"GlyphRenderer"}]},"id":"03174c9b-2113-403e-9e8b-fef9fcc7b77b","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["#00cccc"],"cyl":[8],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[15.0]}},"id":"872f75c6-0058-46cc-9de4-62782b94f645","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":4}],"cyl":[4],"x_values":["4:0.5"],"y_values":[46.6]}},"id":"39e59822-9e27-4a92-8bfd-e5c0bd490aaa","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"872f75c6-0058-46cc-9de4-62782b94f645","type":"ColumnDataSource"},"glyph":{"id":"075f1ba1-b7d4-4602-962b-18a84e9dfaa3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6550320d-312a-4664-98d2-395ee11fac27","type":"GlyphRenderer"},{"attributes":{},"id":"10ed5f3c-77a3-4d4d-9a5b-8fd9c8a0ff26","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6],"x_values":["6:0.5","6:0.5","6:0.5","6:0.5","6:0.5"],"y_values":[26.8,28.8,32.7,38.0,30.7]}},"id":"3596a61a-9619-4ec1-9290-e02eb82e8f70","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f136c838-195e-4eeb-a511-f387fff8ca88","type":"PanTool"},{"id":"45e3fec3-3540-4695-b5a3-87c975e7617b","type":"WheelZoomTool"},{"id":"d44022f5-fea6-46a3-988d-81504b929d13","type":"BoxZoomTool"},{"id":"fb614934-dc97-46e3-89a2-2fc683ee2381","type":"SaveTool"},{"id":"8fb85072-68ca-4fde-be7d-fc6d3eacb132","type":"ResetTool"},{"id":"ddbb3664-5f7a-4628-947c-514fbc2aae08","type":"HelpTool"}]},"id":"3ab0cd13-7e86-429e-86f0-8f765c0ab127","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x0s":["3:0.5","3:0.65","3:0.5","3:0.65"],"x1s":["3:0.5","3:0.35","3:0.5","3:0.35"],"y0s":[18.0,18.0,22.05,23.7],"y1s":[18.75,18.0,23.7,23.7]}},"id":"aa77631e-6dc6-4463-ad17-7c1abd22c85a","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"38bbc949-6eba-43f1-8fd4-cfd994514e2d","type":"CategoricalAxis"}],"height":400,"left":[{"id":"810a7e1b-6710-4c29-b1f0-3cb14fc56572","type":"LinearAxis"}],"renderers":[{"id":"5e0c05de-40e8-41b8-af58-f54e7a65f3fd","type":"BoxAnnotation"},{"id":"817e6fbf-74eb-4a75-a252-92bfaca3bb7d","type":"GlyphRenderer"},{"id":"d96dc8bd-94e7-47fc-9baf-9f2157598f9a","type":"GlyphRenderer"},{"id":"949b02a2-9f99-4a96-b91e-d4f57eb07226","type":"GlyphRenderer"},{"id":"33fbd8aa-cea8-4720-bcbe-85b6c92887ca","type":"GlyphRenderer"},{"id":"8c4c8df0-31d9-4421-833b-a48219af5d8a","type":"GlyphRenderer"},{"id":"cda7ba01-b9f9-4852-899d-333f470b5e54","type":"GlyphRenderer"},{"id":"c6385247-136a-4300-b88b-d42b02df5613","type":"GlyphRenderer"},{"id":"c2d61fa1-20b2-45a3-91f6-f4c5123bc21e","type":"GlyphRenderer"},{"id":"fe7ffd0e-bbb0-4816-968b-38bf486df6b0","type":"GlyphRenderer"},{"id":"f8556c27-17d8-4747-a9a7-ec9e62d7ac0d","type":"GlyphRenderer"},{"id":"4f1a8efc-82aa-4a4e-b0f2-48b466f8efa1","type":"GlyphRenderer"},{"id":"845b0825-8be8-4ba3-8493-134aceda6877","type":"GlyphRenderer"},{"id":"6c7d7884-9470-4102-a2ef-279c640bccfc","type":"GlyphRenderer"},{"id":"9b4cac59-3f77-4e54-82b6-445f42166321","type":"GlyphRenderer"},{"id":"d20974a9-debc-41d1-9603-36fc5652c7fe","type":"GlyphRenderer"},{"id":"6550320d-312a-4664-98d2-395ee11fac27","type":"GlyphRenderer"},{"id":"8be28132-6c3f-4e5c-9099-daf32c186bfe","type":"GlyphRenderer"},{"id":"f9ba84fc-c8e0-4568-831d-4084f9ee2266","type":"GlyphRenderer"},{"id":"5198951b-5f44-4af0-8ee7-3bd7290e31d0","type":"Legend"},{"id":"38bbc949-6eba-43f1-8fd4-cfd994514e2d","type":"CategoricalAxis"},{"id":"810a7e1b-6710-4c29-b1f0-3cb14fc56572","type":"LinearAxis"},{"id":"efc4f52c-7100-4a5c-b317-0923097ca305","type":"Grid"}],"title":{"id":"afe506a8-6005-4c36-b73f-a6c726152b76","type":"Title"},"tool_events":{"id":"8e88048c-75e4-439d-ba44-cc9bb80ad3fa","type":"ToolEvents"},"toolbar":{"id":"3ab0cd13-7e86-429e-86f0-8f765c0ab127","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"8aa71a30-4770-4c2e-9df6-6de083674a3e","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"6f43b78f-4e1c-4c4b-a303-06c36621ab31","type":"Range1d"}},"id":"8790b329-426f-4b22-bc06-a1f0085a1a23","subtype":"Chart","type":"Plot"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"246750ac-a224-4c0e-9c0a-c997e527f759","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"90d4cc1b-4b6a-45c9-bfa2-741a25112fa7","type":"Rect"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5,5],"x0s":["5:0.5","5:0.65","5:0.5","5:0.65"],"x1s":["5:0.5","5:0.35","5:0.5","5:0.35"],"y0s":[20.3,20.3,30.9,36.4],"y1s":[22.85,20.3,36.4,36.4]}},"id":"352b6055-40f6-420f-a48c-f0dc0800ef3e","type":"ColumnDataSource"},{"attributes":{"label":{"value":"6"},"renderers":[{"id":"4f1a8efc-82aa-4a4e-b0f2-48b466f8efa1","type":"GlyphRenderer"},{"id":"845b0825-8be8-4ba3-8493-134aceda6877","type":"GlyphRenderer"},{"id":"6c7d7884-9470-4102-a2ef-279c640bccfc","type":"GlyphRenderer"},{"id":"9b4cac59-3f77-4e54-82b6-445f42166321","type":"GlyphRenderer"}]},"id":"0738293a-b1a0-4666-a859-2627e4803f0d","type":"LegendItem"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d1e3338a-c9e2-4313-9a5b-ab62a1a797c4","type":"Rect"},{"attributes":{"data_source":{"id":"7e6f60e0-8f5a-49f6-9a39-762921614214","type":"ColumnDataSource"},"glyph":{"id":"d1e3338a-c9e2-4313-9a5b-ab62a1a797c4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"817e6fbf-74eb-4a75-a252-92bfaca3bb7d","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"8aa71a30-4770-4c2e-9df6-6de083674a3e","type":"FactorRange"},{"attributes":{"data_source":{"id":"e6483166-f1b4-4ab3-950d-dd381409fdfa","type":"ColumnDataSource"},"glyph":{"id":"ba8a89fa-4289-40ad-a1de-4218efc46ba7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"33fbd8aa-cea8-4720-bcbe-85b6c92887ca","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["#00cccc"],"cyl":[4],"fill_alpha":[0.8],"height":[4.550000000000004],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[30.675]}},"id":"5e0b38bc-1b74-4613-bf3b-88df6a6655ce","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7bd2c65b-8368-49a7-912d-b8ce91e51e8b","type":"ColumnDataSource"},"glyph":{"id":"6f79d6c2-e43b-40bb-a787-607f1ab042ab","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4f1a8efc-82aa-4a4e-b0f2-48b466f8efa1","type":"GlyphRenderer"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"10ed5f3c-77a3-4d4d-9a5b-8fd9c8a0ff26","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"8790b329-426f-4b22-bc06-a1f0085a1a23","subtype":"Chart","type":"Plot"},"ticker":{"id":"8fb66054-17fa-4b85-bc72-38fdb8a60468","type":"CategoricalTicker"}},"id":"38bbc949-6eba-43f1-8fd4-cfd994514e2d","type":"CategoricalAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5e0c05de-40e8-41b8-af58-f54e7a65f3fd","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ba8a89fa-4289-40ad-a1de-4218efc46ba7","type":"Rect"},{"attributes":{"data_source":{"id":"30181203-ad84-4ba1-9f16-06d9fab6013e","type":"ColumnDataSource"},"glyph":{"id":"950678fd-4f90-45bd-9f18-b6a61db97447","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fe7ffd0e-bbb0-4816-968b-38bf486df6b0","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["#00cccc"],"cyl":[6],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[18.5]}},"id":"7bd2c65b-8368-49a7-912d-b8ce91e51e8b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"39da1833-da78-43b5-8a44-4b17dbc4f124","type":"ColumnDataSource"},"glyph":{"id":"90d4cc1b-4b6a-45c9-bfa2-741a25112fa7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c2d61fa1-20b2-45a3-91f6-f4c5123bc21e","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"8e68f57b-fa4d-4267-b8e1-001262faea02","type":"ColumnDataSource"},"glyph":{"id":"551f0d8e-1388-4635-b5ad-e771d2355d18","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9b4cac59-3f77-4e54-82b6-445f42166321","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"fb0706eb-f6cf-4055-9fe4-9c454639b95a","type":"ColumnDataSource"},"glyph":{"id":"5ba8cf0f-05cc-4446-aeb3-a2ff61091447","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8be28132-6c3f-4e5c-9099-daf32c186bfe","type":"GlyphRenderer"},{"attributes":{},"id":"8fb66054-17fa-4b85-bc72-38fdb8a60468","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"235b9c13-8bd2-41ed-aa4e-da87fbd4686d","type":"Rect"},{"attributes":{"plot":{"id":"8790b329-426f-4b22-bc06-a1f0085a1a23","subtype":"Chart","type":"Plot"}},"id":"45e3fec3-3540-4695-b5a3-87c975e7617b","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"352b6055-40f6-420f-a48c-f0dc0800ef3e","type":"ColumnDataSource"},"glyph":{"id":"d5e361ea-ea00-415b-ad01-d7e44354d78e","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f8556c27-17d8-4747-a9a7-ec9e62d7ac0d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8],"x0s":["8:0.5","8:0.65","8:0.5","8:0.65"],"x1s":["8:0.5","8:0.35","8:0.5","8:0.35"],"y0s":[9.0,9.0,16.0,20.5],"y1s":[13.0,9.0,20.5,20.5]}},"id":"bb205d72-8233-4cc4-ae4a-fefa82513c96","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"5ba8cf0f-05cc-4446-aeb3-a2ff61091447","type":"Circle"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"075f1ba1-b7d4-4602-962b-18a84e9dfaa3","type":"Rect"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"1d3fdf07-a8b4-4bef-8b08-07d380f5dcca","type":"Segment"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"950678fd-4f90-45bd-9f18-b6a61db97447","type":"Rect"},{"attributes":{"items":[{"id":"7b1d4231-5b5b-47ef-a40d-3959290eea03","type":"LegendItem"},{"id":"5867c3a7-aac8-4050-a673-c917358d6060","type":"LegendItem"},{"id":"03174c9b-2113-403e-9e8b-fef9fcc7b77b","type":"LegendItem"},{"id":"0738293a-b1a0-4666-a859-2627e4803f0d","type":"LegendItem"},{"id":"3b49e853-4582-471f-b253-0cadd4c63e06","type":"LegendItem"}],"location":"top_left","plot":{"id":"8790b329-426f-4b22-bc06-a1f0085a1a23","subtype":"Chart","type":"Plot"}},"id":"5198951b-5f44-4af0-8ee7-3bd7290e31d0","type":"Legend"},{"attributes":{"data_source":{"id":"5e0b38bc-1b74-4613-bf3b-88df6a6655ce","type":"ColumnDataSource"},"glyph":{"id":"246750ac-a224-4c0e-9c0a-c997e527f759","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8c4c8df0-31d9-4421-833b-a48219af5d8a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3596a61a-9619-4ec1-9290-e02eb82e8f70","type":"ColumnDataSource"},"glyph":{"id":"7de06c6e-b2e2-444d-9b0e-fd79d82bd480","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6c7d7884-9470-4102-a2ef-279c640bccfc","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"MPG Summary (grouped by CYL)"},"id":"afe506a8-6005-4c36-b73f-a6c726152b76","type":"Title"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["#00cccc"],"cyl":[6],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[20.0]}},"id":"7cb43fa2-68da-46ce-b7f9-c821561da4a4","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"551f0d8e-1388-4635-b5ad-e771d2355d18","type":"Segment"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"d5e361ea-ea00-415b-ad01-d7e44354d78e","type":"Segment"},{"attributes":{"data_source":{"id":"6542f234-0537-48fd-b5ec-9b1da758e6fc","type":"ColumnDataSource"},"glyph":{"id":"1d3fdf07-a8b4-4bef-8b08-07d380f5dcca","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c6385247-136a-4300-b88b-d42b02df5613","type":"GlyphRenderer"},{"attributes":{"label":{"value":"3"},"renderers":[{"id":"817e6fbf-74eb-4a75-a252-92bfaca3bb7d","type":"GlyphRenderer"},{"id":"d96dc8bd-94e7-47fc-9baf-9f2157598f9a","type":"GlyphRenderer"},{"id":"949b02a2-9f99-4a96-b91e-d4f57eb07226","type":"GlyphRenderer"}]},"id":"7b1d4231-5b5b-47ef-a40d-3959290eea03","type":"LegendItem"},{"attributes":{},"id":"8e88048c-75e4-439d-ba44-cc9bb80ad3fa","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["#00cccc"],"cyl":[3],"fill_alpha":[0.8],"height":[1.8000000000000007],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[21.15]}},"id":"e28905e3-12f9-4a51-be60-fe977730ca94","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"8790b329-426f-4b22-bc06-a1f0085a1a23","subtype":"Chart","type":"Plot"}},"id":"8fb85072-68ca-4fde-be7d-fc6d3eacb132","type":"ResetTool"},{"attributes":{"data_source":{"id":"39e59822-9e27-4a92-8bfd-e5c0bd490aaa","type":"ColumnDataSource"},"glyph":{"id":"2de9f824-97dc-456f-8737-9f33adfd47f1","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cda7ba01-b9f9-4852-899d-333f470b5e54","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"e28905e3-12f9-4a51-be60-fe977730ca94","type":"ColumnDataSource"},"glyph":{"id":"235b9c13-8bd2-41ed-aa4e-da87fbd4686d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d96dc8bd-94e7-47fc-9baf-9f2157598f9a","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["#00cccc"],"cyl":[5],"fill_alpha":[0.8],"height":[5.5],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[28.15]}},"id":"30181203-ad84-4ba1-9f16-06d9fab6013e","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35381b69-d99c-47f2-b386-b11d59e57708","type":"Rect"},{"attributes":{"label":{"value":"4"},"renderers":[{"id":"33fbd8aa-cea8-4720-bcbe-85b6c92887ca","type":"GlyphRenderer"},{"id":"8c4c8df0-31d9-4421-833b-a48219af5d8a","type":"GlyphRenderer"},{"id":"cda7ba01-b9f9-4852-899d-333f470b5e54","type":"GlyphRenderer"},{"id":"c6385247-136a-4300-b88b-d42b02df5613","type":"GlyphRenderer"}]},"id":"5867c3a7-aac8-4050-a673-c917358d6060","type":"LegendItem"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"def9ed5e-4933-4ecf-8df9-030c72154282","type":"Rect"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6],"x0s":["6:0.5","6:0.65","6:0.5","6:0.65"],"x1s":["6:0.5","6:0.35","6:0.5","6:0.35"],"y0s":[15.0,15.0,21.0,25.5],"y1s":[18.0,15.0,25.5,25.5]}},"id":"8e68f57b-fa4d-4267-b8e1-001262faea02","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":49.38},"id":"6f43b78f-4e1c-4c4b-a303-06c36621ab31","type":"Range1d"},{"attributes":{"data_source":{"id":"aa77631e-6dc6-4463-ad17-7c1abd22c85a","type":"ColumnDataSource"},"glyph":{"id":"2efebe99-c58b-4d30-8a1f-c21f5e3931e6","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"949b02a2-9f99-4a96-b91e-d4f57eb07226","type":"GlyphRenderer"},{"attributes":{},"id":"6d6c2dd8-9971-466d-80b9-151847de0cec","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"8790b329-426f-4b22-bc06-a1f0085a1a23","subtype":"Chart","type":"Plot"},"ticker":{"id":"1f6bab87-c29c-47b7-bae5-edd745909642","type":"BasicTicker"}},"id":"efc4f52c-7100-4a5c-b317-0923097ca305","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"7de06c6e-b2e2-444d-9b0e-fd79d82bd480","type":"Circle"},{"attributes":{"label":{"value":"8"},"renderers":[{"id":"d20974a9-debc-41d1-9603-36fc5652c7fe","type":"GlyphRenderer"},{"id":"6550320d-312a-4664-98d2-395ee11fac27","type":"GlyphRenderer"},{"id":"8be28132-6c3f-4e5c-9099-daf32c186bfe","type":"GlyphRenderer"},{"id":"f9ba84fc-c8e0-4568-831d-4084f9ee2266","type":"GlyphRenderer"}]},"id":"3b49e853-4582-471f-b253-0cadd4c63e06","type":"LegendItem"},{"attributes":{"plot":{"id":"8790b329-426f-4b22-bc06-a1f0085a1a23","subtype":"Chart","type":"Plot"}},"id":"ddbb3664-5f7a-4628-947c-514fbc2aae08","type":"HelpTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6f79d6c2-e43b-40bb-a787-607f1ab042ab","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["#00cccc"],"cyl":[8],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[13.5]}},"id":"a3d35320-abad-4789-aa1d-1586cbf66bae","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"2de9f824-97dc-456f-8737-9f33adfd47f1","type":"Circle"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4],"x0s":["4:0.5","4:0.65","4:0.5","4:0.65"],"x1s":["4:0.5","4:0.35","4:0.5","4:0.35"],"y0s":[18.0,18.0,32.95,44.87500000000001],"y1s":[25.0,18.0,44.87500000000001,44.87500000000001]}},"id":"6542f234-0537-48fd-b5ec-9b1da758e6fc","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"8790b329-426f-4b22-bc06-a1f0085a1a23","subtype":"Chart","type":"Plot"}},"id":"f136c838-195e-4eeb-a511-f387fff8ca88","type":"PanTool"},{"attributes":{"data_source":{"id":"bb205d72-8233-4cc4-ae4a-fefa82513c96","type":"ColumnDataSource"},"glyph":{"id":"14dff88b-1e7b-4cff-a0d8-8c30222b7ccc","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f9ba84fc-c8e0-4568-831d-4084f9ee2266","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["#00cccc"],"cyl":[4],"fill_alpha":[0.8],"height":[3.3999999999999986],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[26.7]}},"id":"e6483166-f1b4-4ab3-950d-dd381409fdfa","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7cb43fa2-68da-46ce-b7f9-c821561da4a4","type":"ColumnDataSource"},"glyph":{"id":"def9ed5e-4933-4ecf-8df9-030c72154282","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"845b0825-8be8-4ba3-8493-134aceda6877","type":"GlyphRenderer"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"2efebe99-c58b-4d30-8a1f-c21f5e3931e6","type":"Segment"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"14dff88b-1e7b-4cff-a0d8-8c30222b7ccc","type":"Segment"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8],"x_values":["8:0.5","8:0.5","8:0.5"],"y_values":[26.6,23.0,23.9]}},"id":"fb0706eb-f6cf-4055-9fe4-9c454639b95a","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"5e0c05de-40e8-41b8-af58-f54e7a65f3fd","type":"BoxAnnotation"},"plot":{"id":"8790b329-426f-4b22-bc06-a1f0085a1a23","subtype":"Chart","type":"Plot"}},"id":"d44022f5-fea6-46a3-988d-81504b929d13","type":"BoxZoomTool"},{"attributes":{},"id":"1f6bab87-c29c-47b7-bae5-edd745909642","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["#00cccc"],"cyl":[5],"fill_alpha":[0.8],"height":[2.549999999999997],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[24.125]}},"id":"39da1833-da78-43b5-8a44-4b17dbc4f124","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"8790b329-426f-4b22-bc06-a1f0085a1a23","subtype":"Chart","type":"Plot"}},"id":"fb614934-dc97-46e3-89a2-2fc683ee2381","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["#00cccc"],"cyl":[3],"fill_alpha":[0.8],"height":[1.5],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[19.5]}},"id":"7e6f60e0-8f5a-49f6-9a39-762921614214","type":"ColumnDataSource"}],"root_ids":["8790b329-426f-4b22-bc06-a1f0085a1a23"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"4c02a348-ead7-4344-845d-4f35cb9bf573","elementid":"ab728bde-56cb-4d74-a5bd-d02d03b7a84c","modelid":"8790b329-426f-4b22-bc06-a1f0085a1a23"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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
});