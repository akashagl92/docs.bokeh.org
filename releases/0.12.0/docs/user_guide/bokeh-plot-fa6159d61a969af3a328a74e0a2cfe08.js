document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("5d56d092-1dff-4f09-890a-10b69f181141");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5d56d092-1dff-4f09-890a-10b69f181141' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"b6ed75dd-4982-48fd-bc7c-1b95c2d85d94":{"roots":{"references":[{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8abbe61b-d76c-46ca-9fd3-6d1ad4bd1208","type":"Rect"},{"attributes":{"legends":[["3",[{"id":"f38c0317-16ad-479d-a0a4-6bf260fa27d3","type":"GlyphRenderer"},{"id":"667b9257-3fb8-4f20-a577-c3384d7bf785","type":"GlyphRenderer"},{"id":"40418d85-2d82-4e02-a79d-f4bdd92961e2","type":"GlyphRenderer"}]],["4",[{"id":"8b64e450-c98e-469c-9604-08b523e35e11","type":"GlyphRenderer"},{"id":"ab40daf4-35ab-42ad-9e2f-6f0285ec870e","type":"GlyphRenderer"},{"id":"dca7b02d-9fc0-4cf7-9e1a-d73fef68f69b","type":"GlyphRenderer"},{"id":"fad7959d-6588-4666-ba54-ab97542b70d2","type":"GlyphRenderer"}]],["5",[{"id":"fe35dfa3-3b2a-4c65-9e9f-b90865a13867","type":"GlyphRenderer"},{"id":"069883f2-2ede-4848-9f94-10269928e248","type":"GlyphRenderer"},{"id":"9db45754-1a07-4d19-954a-cd03c6e92ece","type":"GlyphRenderer"}]],["6",[{"id":"f4192705-40c1-4878-93de-222a000175c7","type":"GlyphRenderer"},{"id":"d761d83b-4d72-471e-80ab-077d0b9b87d2","type":"GlyphRenderer"},{"id":"9f289e5b-1e88-42d5-afd0-c3499b3fd7b8","type":"GlyphRenderer"},{"id":"726135ec-d25c-46f2-a249-bf00ee740716","type":"GlyphRenderer"}]],["8",[{"id":"753dbfbc-a109-490e-9597-76bfb46a30b9","type":"GlyphRenderer"},{"id":"6cdb90b7-0d13-4671-a622-67f763a3f9e8","type":"GlyphRenderer"},{"id":"44340a75-dc59-4322-80e9-c0c342398a37","type":"GlyphRenderer"},{"id":"a91e9c72-42dc-4932-b060-6e39cc386514","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"ae895203-ee92-47a8-a429-04cb32c046b2","subtype":"Chart","type":"Plot"}},"id":"d98b6770-55ec-4aa1-902a-2f38f452390b","type":"Legend"},{"attributes":{"data_source":{"id":"458edc84-3e93-4da0-ac60-9b84282096a2","type":"ColumnDataSource"},"glyph":{"id":"6dd33c51-9afd-4b84-bcc3-fa8ccf3811e7","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dca7b02d-9fc0-4cf7-9e1a-d73fef68f69b","type":"GlyphRenderer"},{"attributes":{},"id":"477fea33-4777-4647-91a3-786342937b5e","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3c7e9bda-023b-4ec1-852d-fae8f662b5ae","type":"ColumnDataSource"},"glyph":{"id":"5f3a2742-74d6-4259-9c2f-53a22e5a32cc","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a91e9c72-42dc-4932-b060-6e39cc386514","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"ae895203-ee92-47a8-a429-04cb32c046b2","subtype":"Chart","type":"Plot"}},"id":"711b7c15-9fb3-44d8-bcf0-61bddf242f01","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6],"x_values":["6:0.5","6:0.5","6:0.5","6:0.5","6:0.5"],"y_values":[26.8,28.8,32.7,38.0,30.7]}},"id":"77f16c5d-796a-4b60-91ba-242505e58808","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"ae895203-ee92-47a8-a429-04cb32c046b2","subtype":"Chart","type":"Plot"}},"id":"1de89345-c337-480f-8303-53bcacf01e1c","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"ae895203-ee92-47a8-a429-04cb32c046b2","subtype":"Chart","type":"Plot"}},"id":"f506902d-2f5f-4d71-ab53-e2465b5576c7","type":"PanTool"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"37e0d0c6-cc21-4912-b3f9-faa346473b57","type":"Segment"},{"attributes":{"plot":null,"text":"MPG Summary (grouped by CYL)"},"id":"b6542117-e336-43fd-a504-9dc4463cb2ec","type":"Title"},{"attributes":{"plot":{"id":"ae895203-ee92-47a8-a429-04cb32c046b2","subtype":"Chart","type":"Plot"}},"id":"7d01be6a-99b4-4be0-8178-748e76a3da27","type":"SaveTool"},{"attributes":{"plot":{"id":"ae895203-ee92-47a8-a429-04cb32c046b2","subtype":"Chart","type":"Plot"}},"id":"944b9ea2-70a1-42f3-822b-13d4d47ba3f0","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["DimGrey"],"cyl":[5],"fill_alpha":[0.8],"height":[5.5],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[28.15]}},"id":"a49f0626-91c6-4c46-a81a-7243b493344c","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"a6888a0e-6f54-4716-9a8b-1d1151a9be3b","type":"Circle"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c69fc61a-4383-4c9e-bee4-8c1ac9ff0610","type":"Rect"},{"attributes":{},"id":"bb8ef8e6-250d-4ec0-8fc8-7b0bb938d4cf","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["DimGrey"],"cyl":[8],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[13.5]}},"id":"8748e144-9619-4bc7-b933-a510e06d96b0","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b5cdeddb-9a8c-403f-a4cb-1126bb78880a","type":"ColumnDataSource"},"glyph":{"id":"8abbe61b-d76c-46ca-9fd3-6d1ad4bd1208","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f38c0317-16ad-479d-a0a4-6bf260fa27d3","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["DimGrey"],"cyl":[8],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[15.0]}},"id":"04c93f83-2ed7-4ff7-91bf-699f281a03f7","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"b071d404-95f2-42d7-8434-be87dda5eaba","type":"Segment"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["DimGrey"],"cyl":[5],"fill_alpha":[0.8],"height":[2.549999999999997],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[24.125]}},"id":"46956474-fd90-4ff3-bef3-c07f0185a205","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9ee95d34-aae9-4fba-bd1c-80e454f0c855","type":"Rect"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"5f3a2742-74d6-4259-9c2f-53a22e5a32cc","type":"Segment"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"6093bc9e-5b1b-4f6c-a0e8-164b2984ed0d","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"ae895203-ee92-47a8-a429-04cb32c046b2","subtype":"Chart","type":"Plot"},"ticker":{"id":"1aec33f5-b022-4441-a0d8-b00f3443d8c9","type":"CategoricalTicker"}},"id":"7f91da1e-c9bf-46af-a562-39ff877a6312","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"34234e0f-8731-4452-af95-80a6f9f61af2","type":"ColumnDataSource"},"glyph":{"id":"b071d404-95f2-42d7-8434-be87dda5eaba","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"726135ec-d25c-46f2-a249-bf00ee740716","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a7581766-1667-43b2-b88d-cefcb9c1ce2d","type":"ColumnDataSource"},"glyph":{"id":"37e0d0c6-cc21-4912-b3f9-faa346473b57","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9db45754-1a07-4d19-954a-cd03c6e92ece","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["DimGrey"],"cyl":[4],"fill_alpha":[0.8],"height":[3.3999999999999986],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[26.7]}},"id":"a8da2a72-1a2b-411f-83a0-221d5bf45ad7","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a49f0626-91c6-4c46-a81a-7243b493344c","type":"ColumnDataSource"},"glyph":{"id":"3da6efd3-429f-439d-8d4f-7f18c59942ba","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"069883f2-2ede-4848-9f94-10269928e248","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3199dbee-96e2-4905-bfa6-b2333ccc3881","type":"ColumnDataSource"},"glyph":{"id":"35e98877-78da-4641-9327-dbd3c883759a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"667b9257-3fb8-4f20-a577-c3384d7bf785","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"dcbdf876-63b9-4d9d-bbe3-5465149d330b","type":"ColumnDataSource"},"glyph":{"id":"c0a56c89-10a3-4767-9d99-0273a5fe0fec","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fad7959d-6588-4666-ba54-ab97542b70d2","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2b2ee863-6bd5-4289-b569-9f58ac8a0c1b","type":"ColumnDataSource"},"glyph":{"id":"8a135aa9-2fae-4413-b976-5432502f9e70","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"44340a75-dc59-4322-80e9-c0c342398a37","type":"GlyphRenderer"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"474080e1-631e-461a-bb04-6ca4308f74c6","type":"Segment"},{"attributes":{"data_source":{"id":"a8da2a72-1a2b-411f-83a0-221d5bf45ad7","type":"ColumnDataSource"},"glyph":{"id":"2cad4c6a-f255-4f4c-a5bf-481eb7b2e691","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8b64e450-c98e-469c-9604-08b523e35e11","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0dbfd8f0-2964-4b78-b2e2-a9f8f36ea153","type":"Rect"},{"attributes":{"data_source":{"id":"46956474-fd90-4ff3-bef3-c07f0185a205","type":"ColumnDataSource"},"glyph":{"id":"640e2ceb-47fc-4a17-a85d-27539d978f36","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fe35dfa3-3b2a-4c65-9e9f-b90865a13867","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"7f91da1e-c9bf-46af-a562-39ff877a6312","type":"CategoricalAxis"}],"height":400,"left":[{"id":"48c01f9f-aadb-4754-9650-5bdd86d37280","type":"LinearAxis"}],"renderers":[{"id":"af546186-b9c0-4019-aa2d-de67a6c2f133","type":"BoxAnnotation"},{"id":"f38c0317-16ad-479d-a0a4-6bf260fa27d3","type":"GlyphRenderer"},{"id":"667b9257-3fb8-4f20-a577-c3384d7bf785","type":"GlyphRenderer"},{"id":"40418d85-2d82-4e02-a79d-f4bdd92961e2","type":"GlyphRenderer"},{"id":"8b64e450-c98e-469c-9604-08b523e35e11","type":"GlyphRenderer"},{"id":"ab40daf4-35ab-42ad-9e2f-6f0285ec870e","type":"GlyphRenderer"},{"id":"dca7b02d-9fc0-4cf7-9e1a-d73fef68f69b","type":"GlyphRenderer"},{"id":"fad7959d-6588-4666-ba54-ab97542b70d2","type":"GlyphRenderer"},{"id":"fe35dfa3-3b2a-4c65-9e9f-b90865a13867","type":"GlyphRenderer"},{"id":"069883f2-2ede-4848-9f94-10269928e248","type":"GlyphRenderer"},{"id":"9db45754-1a07-4d19-954a-cd03c6e92ece","type":"GlyphRenderer"},{"id":"f4192705-40c1-4878-93de-222a000175c7","type":"GlyphRenderer"},{"id":"d761d83b-4d72-471e-80ab-077d0b9b87d2","type":"GlyphRenderer"},{"id":"9f289e5b-1e88-42d5-afd0-c3499b3fd7b8","type":"GlyphRenderer"},{"id":"726135ec-d25c-46f2-a249-bf00ee740716","type":"GlyphRenderer"},{"id":"753dbfbc-a109-490e-9597-76bfb46a30b9","type":"GlyphRenderer"},{"id":"6cdb90b7-0d13-4671-a622-67f763a3f9e8","type":"GlyphRenderer"},{"id":"44340a75-dc59-4322-80e9-c0c342398a37","type":"GlyphRenderer"},{"id":"a91e9c72-42dc-4932-b060-6e39cc386514","type":"GlyphRenderer"},{"id":"d98b6770-55ec-4aa1-902a-2f38f452390b","type":"Legend"},{"id":"7f91da1e-c9bf-46af-a562-39ff877a6312","type":"CategoricalAxis"},{"id":"48c01f9f-aadb-4754-9650-5bdd86d37280","type":"LinearAxis"},{"id":"89d4bb06-fd2a-4ec6-89c3-a7001311f047","type":"Grid"}],"title":{"id":"b6542117-e336-43fd-a504-9dc4463cb2ec","type":"Title"},"tool_events":{"id":"32bf2137-6d9e-4638-b54f-87b088631864","type":"ToolEvents"},"toolbar":{"id":"d1ccdbe5-a002-4b6f-af7a-c65a4746dc39","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"502292aa-4cd3-4b05-8e1e-f1684345f5a5","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"fa71c558-97d9-41d2-9316-c9d159b55eba","type":"Range1d"}},"id":"ae895203-ee92-47a8-a429-04cb32c046b2","subtype":"Chart","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f506902d-2f5f-4d71-ab53-e2465b5576c7","type":"PanTool"},{"id":"1de89345-c337-480f-8303-53bcacf01e1c","type":"WheelZoomTool"},{"id":"a685327d-4010-4721-983a-f60f5462547c","type":"BoxZoomTool"},{"id":"7d01be6a-99b4-4be0-8178-748e76a3da27","type":"SaveTool"},{"id":"944b9ea2-70a1-42f3-822b-13d4d47ba3f0","type":"ResetTool"},{"id":"711b7c15-9fb3-44d8-bcf0-61bddf242f01","type":"HelpTool"}]},"id":"d1ccdbe5-a002-4b6f-af7a-c65a4746dc39","type":"Toolbar"},{"attributes":{"data_source":{"id":"77f16c5d-796a-4b60-91ba-242505e58808","type":"ColumnDataSource"},"glyph":{"id":"a6888a0e-6f54-4716-9a8b-1d1151a9be3b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9f289e5b-1e88-42d5-afd0-c3499b3fd7b8","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"04c93f83-2ed7-4ff7-91bf-699f281a03f7","type":"ColumnDataSource"},"glyph":{"id":"9ee95d34-aae9-4fba-bd1c-80e454f0c855","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6cdb90b7-0d13-4671-a622-67f763a3f9e8","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"af546186-b9c0-4019-aa2d-de67a6c2f133","type":"BoxAnnotation"},"plot":{"id":"ae895203-ee92-47a8-a429-04cb32c046b2","subtype":"Chart","type":"Plot"}},"id":"a685327d-4010-4721-983a-f60f5462547c","type":"BoxZoomTool"},{"attributes":{},"id":"32bf2137-6d9e-4638-b54f-87b088631864","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"ae895203-ee92-47a8-a429-04cb32c046b2","subtype":"Chart","type":"Plot"},"ticker":{"id":"bb8ef8e6-250d-4ec0-8fc8-7b0bb938d4cf","type":"BasicTicker"}},"id":"89d4bb06-fd2a-4ec6-89c3-a7001311f047","type":"Grid"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["DimGrey"],"cyl":[6],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[18.5]}},"id":"ee543a49-e7c1-43c8-b48b-3b5996166e5b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["DimGrey"],"cyl":[3],"fill_alpha":[0.8],"height":[1.8000000000000007],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[21.15]}},"id":"3199dbee-96e2-4905-bfa6-b2333ccc3881","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8],"x0s":["8:0.5","8:0.65","8:0.5","8:0.65"],"x1s":["8:0.5","8:0.35","8:0.5","8:0.35"],"y0s":[9.0,9.0,16.0,20.5],"y1s":[13.0,9.0,20.5,20.5]}},"id":"3c7e9bda-023b-4ec1-852d-fae8f662b5ae","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"629036cf-c21f-4c62-b56b-f7986338857b","type":"ColumnDataSource"},"glyph":{"id":"0dbfd8f0-2964-4b78-b2e2-a9f8f36ea153","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ab40daf4-35ab-42ad-9e2f-6f0285ec870e","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["DimGrey"],"cyl":[4],"fill_alpha":[0.8],"height":[4.550000000000004],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[30.675]}},"id":"629036cf-c21f-4c62-b56b-f7986338857b","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"8a135aa9-2fae-4413-b976-5432502f9e70","type":"Circle"},{"attributes":{"axis_label":"Mpg","formatter":{"id":"477fea33-4777-4647-91a3-786342937b5e","type":"BasicTickFormatter"},"plot":{"id":"ae895203-ee92-47a8-a429-04cb32c046b2","subtype":"Chart","type":"Plot"},"ticker":{"id":"bb8ef8e6-250d-4ec0-8fc8-7b0bb938d4cf","type":"BasicTicker"}},"id":"48c01f9f-aadb-4754-9650-5bdd86d37280","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5,5],"x0s":["5:0.5","5:0.65","5:0.5","5:0.65"],"x1s":["5:0.5","5:0.35","5:0.5","5:0.35"],"y0s":[20.3,20.3,30.9,36.4],"y1s":[22.85,20.3,36.4,36.4]}},"id":"a7581766-1667-43b2-b88d-cefcb9c1ce2d","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"c0a56c89-10a3-4767-9d99-0273a5fe0fec","type":"Segment"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3da6efd3-429f-439d-8d4f-7f18c59942ba","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["DimGrey"],"cyl":[3],"fill_alpha":[0.8],"height":[1.5],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[19.5]}},"id":"b5cdeddb-9a8c-403f-a4cb-1126bb78880a","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2d538a70-fbcc-4abe-bf62-e093dfa0ab7b","type":"Rect"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":4}],"cyl":[4],"x_values":["4:0.5"],"y_values":[46.6]}},"id":"458edc84-3e93-4da0-ac60-9b84282096a2","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"502292aa-4cd3-4b05-8e1e-f1684345f5a5","type":"FactorRange"},{"attributes":{"data_source":{"id":"ee543a49-e7c1-43c8-b48b-3b5996166e5b","type":"ColumnDataSource"},"glyph":{"id":"d12dc583-dcd7-4ffd-a252-116a24d3f44d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f4192705-40c1-4878-93de-222a000175c7","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d12dc583-dcd7-4ffd-a252-116a24d3f44d","type":"Rect"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8],"x_values":["8:0.5","8:0.5","8:0.5"],"y_values":[26.6,23.0,23.9]}},"id":"2b2ee863-6bd5-4289-b569-9f58ac8a0c1b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4],"x0s":["4:0.5","4:0.65","4:0.5","4:0.65"],"x1s":["4:0.5","4:0.35","4:0.5","4:0.35"],"y0s":[18.0,18.0,32.95,44.87500000000001],"y1s":[25.0,18.0,44.87500000000001,44.87500000000001]}},"id":"dcbdf876-63b9-4d9d-bbe3-5465149d330b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"8748e144-9619-4bc7-b933-a510e06d96b0","type":"ColumnDataSource"},"glyph":{"id":"c69fc61a-4383-4c9e-bee4-8c1ac9ff0610","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"753dbfbc-a109-490e-9597-76bfb46a30b9","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2cad4c6a-f255-4f4c-a5bf-481eb7b2e691","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"6dd33c51-9afd-4b84-bcc3-fa8ccf3811e7","type":"Circle"},{"attributes":{"callback":null,"end":49.38},"id":"fa71c558-97d9-41d2-9316-c9d159b55eba","type":"Range1d"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["DimGrey"],"cyl":[6],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[20.0]}},"id":"deb55d54-8c74-42e4-b6c0-3c4faf92faf0","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6],"x0s":["6:0.5","6:0.65","6:0.5","6:0.65"],"x1s":["6:0.5","6:0.35","6:0.5","6:0.35"],"y0s":[15.0,15.0,21.0,25.5],"y1s":[18.0,15.0,25.5,25.5]}},"id":"34234e0f-8731-4452-af95-80a6f9f61af2","type":"ColumnDataSource"},{"attributes":{},"id":"6093bc9e-5b1b-4f6c-a0e8-164b2984ed0d","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"640e2ceb-47fc-4a17-a85d-27539d978f36","type":"Rect"},{"attributes":{"data_source":{"id":"deb55d54-8c74-42e4-b6c0-3c4faf92faf0","type":"ColumnDataSource"},"glyph":{"id":"2d538a70-fbcc-4abe-bf62-e093dfa0ab7b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d761d83b-4d72-471e-80ab-077d0b9b87d2","type":"GlyphRenderer"},{"attributes":{},"id":"1aec33f5-b022-4441-a0d8-b00f3443d8c9","type":"CategoricalTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"af546186-b9c0-4019-aa2d-de67a6c2f133","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35e98877-78da-4641-9327-dbd3c883759a","type":"Rect"},{"attributes":{"data_source":{"id":"18c442bb-50d6-4c83-8dd1-1215c45b680b","type":"ColumnDataSource"},"glyph":{"id":"474080e1-631e-461a-bb04-6ca4308f74c6","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"40418d85-2d82-4e02-a79d-f4bdd92961e2","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x0s":["3:0.5","3:0.65","3:0.5","3:0.65"],"x1s":["3:0.5","3:0.35","3:0.5","3:0.35"],"y0s":[18.0,18.0,22.05,23.7],"y1s":[18.75,18.0,23.7,23.7]}},"id":"18c442bb-50d6-4c83-8dd1-1215c45b680b","type":"ColumnDataSource"}],"root_ids":["ae895203-ee92-47a8-a429-04cb32c046b2"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"b6ed75dd-4982-48fd-bc7c-1b95c2d85d94","elementid":"5d56d092-1dff-4f09-890a-10b69f181141","modelid":"ae895203-ee92-47a8-a429-04cb32c046b2"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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