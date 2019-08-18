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
      };var element = document.getElementById("78fe170c-baff-45da-8dd1-a45d8e00a050");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '78fe170c-baff-45da-8dd1-a45d8e00a050' but no matching script tag was found. ")
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
                var docs_json = {"44a67219-9946-4cd2-97d1-917c54eae5ac":{"roots":{"references":[{"attributes":{},"id":"e36537ac-0529-4796-ab0c-1edeb9971743","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26bcc663-b84e-4f81-ad59-e6bdb85ac5f1","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8],"x_values":["8:0.5","8:0.5","8:0.5"],"y_values":{"__ndarray__":"AAAAAAAAN0BmZmZmZuY3QJqZmZmZmTpA","dtype":"float64","shape":[3]}}},"id":"fba02bf3-5d9d-458d-b2f6-c02d200908d0","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"ab095462-3c69-48ac-ad13-dd977f69ae1a","type":"Segment"},{"attributes":{},"id":"e3a64248-ba36-4cf7-aa5d-639fe0842715","type":"CategoricalTickFormatter"},{"attributes":{"axis_label":"Mpg","formatter":{"id":"e36537ac-0529-4796-ab0c-1edeb9971743","type":"BasicTickFormatter"},"plot":{"id":"6e67eb56-4918-46fa-bc18-7385ff2ac1ce","subtype":"Chart","type":"Plot"},"ticker":{"id":"2f9b417d-3f94-4e72-a161-0cab57714b8a","type":"BasicTicker"}},"id":"729316da-d30c-413e-8355-c573ddcf0d44","type":"LinearAxis"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"0288c2e4-1a3e-4075-994c-42fceff760e1","type":"FactorRange"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3544f22b-f4d6-4ea2-ba4c-d317618a3082","type":"Rect"},{"attributes":{"label":{"value":"4"},"renderers":[{"id":"7daea047-3272-4260-a17d-40aa14d22e61","type":"GlyphRenderer"},{"id":"2e561d1a-4860-4726-9bf2-3334dbb418b9","type":"GlyphRenderer"},{"id":"26246e27-d9ec-4dae-a6cb-65d09855f220","type":"GlyphRenderer"},{"id":"491f8e10-a1ce-410c-91d2-bf940559497d","type":"GlyphRenderer"}]},"id":"31a3f288-0f3e-44b3-93af-380e9b18bfc1","type":"LegendItem"},{"attributes":{"below":[{"id":"1b4aaf30-1823-4c4a-b1c9-8917227743cf","type":"CategoricalAxis"}],"css_classes":null,"left":[{"id":"729316da-d30c-413e-8355-c573ddcf0d44","type":"LinearAxis"}],"renderers":[{"id":"26bcc663-b84e-4f81-ad59-e6bdb85ac5f1","type":"BoxAnnotation"},{"id":"6c95413d-17f0-4483-9566-e22ec353ca12","type":"GlyphRenderer"},{"id":"7e498f01-1dc3-4e1b-bcf7-25cb0e8cf477","type":"GlyphRenderer"},{"id":"c469ea33-d7e1-4c55-a1b3-cbfb571c5a29","type":"GlyphRenderer"},{"id":"4315ec58-06c6-4992-8dfd-fd1304955466","type":"GlyphRenderer"},{"id":"7daea047-3272-4260-a17d-40aa14d22e61","type":"GlyphRenderer"},{"id":"2e561d1a-4860-4726-9bf2-3334dbb418b9","type":"GlyphRenderer"},{"id":"26246e27-d9ec-4dae-a6cb-65d09855f220","type":"GlyphRenderer"},{"id":"491f8e10-a1ce-410c-91d2-bf940559497d","type":"GlyphRenderer"},{"id":"9743991f-7ca3-44e7-ab2d-e51095935e20","type":"GlyphRenderer"},{"id":"fb7d445d-b7b3-4fad-93c1-0d4c996aca10","type":"GlyphRenderer"},{"id":"5d3ba690-d55b-4d9b-9416-4278ed464226","type":"GlyphRenderer"},{"id":"f77d7544-61c8-407d-baaa-bc975d49a502","type":"GlyphRenderer"},{"id":"dfdb6cdc-e095-4a02-919c-c4659ea88ebb","type":"GlyphRenderer"},{"id":"523558e1-8548-4efe-8698-f9cd5ccb441c","type":"GlyphRenderer"},{"id":"92c8fbda-880e-4932-90d1-c77f7e3bf83d","type":"GlyphRenderer"},{"id":"ea6ad99b-29aa-416b-b7e6-befeeec24bea","type":"GlyphRenderer"},{"id":"599ca4be-94e1-457f-9f4e-ffc924a059c8","type":"GlyphRenderer"},{"id":"a9c32454-8419-4601-bacd-591ee3e30371","type":"GlyphRenderer"},{"id":"efa61d7a-29a7-4321-996c-e7e6520bb8d3","type":"Legend"},{"id":"1b4aaf30-1823-4c4a-b1c9-8917227743cf","type":"CategoricalAxis"},{"id":"729316da-d30c-413e-8355-c573ddcf0d44","type":"LinearAxis"},{"id":"eba54efb-1578-46ce-962f-42e825b19bde","type":"Grid"}],"title":{"id":"aa99e59c-9ff0-4992-be7d-712e8f78a964","type":"Title"},"tool_events":{"id":"99569fb9-8971-4b78-acfc-5a4b0788f502","type":"ToolEvents"},"toolbar":{"id":"13fff01a-aef7-421f-ac31-8a5350d33eec","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"0288c2e4-1a3e-4075-994c-42fceff760e1","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"a9daef1f-6601-43a9-ace2-a029e3b0d16f","type":"Range1d"}},"id":"6e67eb56-4918-46fa-bc18-7385ff2ac1ce","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"3167d572-c11c-45e3-a353-63491b847118","type":"ColumnDataSource"},"glyph":{"id":"924e2934-4685-4324-ba4d-5f08656dcc5a","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4315ec58-06c6-4992-8dfd-fd1304955466","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3e6719d4-5c4c-4616-83c0-05f19772dbe2","type":"ColumnDataSource"},"glyph":{"id":"2727f637-342d-4845-8b15-d485d843367d","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"491f8e10-a1ce-410c-91d2-bf940559497d","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2c7680c6-d937-4349-9b14-c1ee54895e57","type":"ColumnDataSource"},"glyph":{"id":"e3427fb8-8ac2-4736-a0ca-a5612102a063","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"26246e27-d9ec-4dae-a6cb-65d09855f220","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":5}],"color":["#00cccc"],"cyl":[5],"fill_alpha":[0.8],"height":[5.5],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[28.15]}},"id":"95cc36f1-b019-4fbc-a3f3-7a47878e495e","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"88349eb7-7cb1-43a6-aeb0-8c19825e420e","type":"Rect"},{"attributes":{"data_source":{"id":"a3c12353-3e75-48e7-88cb-d077e1771a35","type":"ColumnDataSource"},"glyph":{"id":"371b1f7e-6642-4680-962f-80e6a668feb8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fb7d445d-b7b3-4fad-93c1-0d4c996aca10","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ef737ddd-fe10-4cbc-964b-06d22455f072","type":"ColumnDataSource"},"glyph":{"id":"573656b5-5e08-4ddc-8c91-e703345d7ef5","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5d3ba690-d55b-4d9b-9416-4278ed464226","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"29539244-a131-4d17-aff0-d8c4e563aebf","type":"Rect"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"2727f637-342d-4845-8b15-d485d843367d","type":"Segment"},{"attributes":{"overlay":{"id":"26bcc663-b84e-4f81-ad59-e6bdb85ac5f1","type":"BoxAnnotation"},"plot":{"id":"6e67eb56-4918-46fa-bc18-7385ff2ac1ce","subtype":"Chart","type":"Plot"}},"id":"5a1ede09-f174-4f5c-915c-d18085f47a8a","type":"BoxZoomTool"},{"attributes":{"label":{"value":"6"},"renderers":[{"id":"9743991f-7ca3-44e7-ab2d-e51095935e20","type":"GlyphRenderer"},{"id":"fb7d445d-b7b3-4fad-93c1-0d4c996aca10","type":"GlyphRenderer"},{"id":"5d3ba690-d55b-4d9b-9416-4278ed464226","type":"GlyphRenderer"},{"id":"f77d7544-61c8-407d-baaa-bc975d49a502","type":"GlyphRenderer"}]},"id":"39b26db4-e683-43e0-9325-d02db63df75f","type":"LegendItem"},{"attributes":{"plot":{"id":"6e67eb56-4918-46fa-bc18-7385ff2ac1ce","subtype":"Chart","type":"Plot"}},"id":"b6d689f9-2b1d-47a2-87c1-ed29247be820","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6],"x_values":["6:0.5","6:0.5","6:0.5","6:0.5","6:0.5"],"y_values":{"__ndarray__":"zczMzMzMPEDNzMzMzMw6QJqZmZmZWUBAMzMzMzOzPkAAAAAAAABDQA==","dtype":"float64","shape":[5]}}},"id":"ef737ddd-fe10-4cbc-964b-06d22455f072","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":5}],"color":["#00cccc"],"cyl":[5],"fill_alpha":[0.8],"height":[2.549999999999997],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[24.125]}},"id":"09dcbf55-7257-4bf3-b533-f875c28e189d","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"6e67eb56-4918-46fa-bc18-7385ff2ac1ce","subtype":"Chart","type":"Plot"},"ticker":{"id":"2f9b417d-3f94-4e72-a161-0cab57714b8a","type":"BasicTicker"}},"id":"eba54efb-1578-46ce-962f-42e825b19bde","type":"Grid"},{"attributes":{"data_source":{"id":"aa74a1b1-f7e5-4737-8072-e99c7e692f0d","type":"ColumnDataSource"},"glyph":{"id":"3544f22b-f4d6-4ea2-ba4c-d317618a3082","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2e561d1a-4860-4726-9bf2-3334dbb418b9","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":49.38},"id":"a9daef1f-6601-43a9-ace2-a029e3b0d16f","type":"Range1d"},{"attributes":{"plot":null,"text":"MPG Summary (grouped by CYL)"},"id":"aa99e59c-9ff0-4992-be7d-712e8f78a964","type":"Title"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":8}],"color":["#00cccc"],"cyl":[8],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[15.0]}},"id":"1d0b4256-8e9e-4a39-90ff-eda96813c92a","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ca0dd8a3-f60d-4244-84ec-c9472fa55a2d","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"e3427fb8-8ac2-4736-a0ca-a5612102a063","type":"Circle"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"56cb9d47-5101-48d3-adae-f7f0e4eb8214","type":"Rect"},{"attributes":{"data_source":{"id":"aa7c9d75-64b2-4e81-8c0c-2fc891668ff2","type":"ColumnDataSource"},"glyph":{"id":"ab095462-3c69-48ac-ad13-dd977f69ae1a","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a9c32454-8419-4601-bacd-591ee3e30371","type":"GlyphRenderer"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"4d4918f6-7118-4c20-8956-fa061d27f362","type":"Segment"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2c10d416-a576-42f7-9e1c-d180a998db9f","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7b0a03be-8b80-48d1-aa85-b932d369cb8a","type":"Rect"},{"attributes":{"data_source":{"id":"0d9b34b6-9727-4158-8625-c20db7f8250f","type":"ColumnDataSource"},"glyph":{"id":"7b0a03be-8b80-48d1-aa85-b932d369cb8a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"523558e1-8548-4efe-8698-f9cd5ccb441c","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"b919ad0e-4618-4fcd-b13f-4ed2e461bf1a","type":"ColumnDataSource"},"glyph":{"id":"4d4918f6-7118-4c20-8956-fa061d27f362","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"92c8fbda-880e-4932-90d1-c77f7e3bf83d","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4558f4a3-0fc1-4bf6-a1f7-61fd6fac7c65","type":"ColumnDataSource"},"glyph":{"id":"98e25914-406f-439d-9fd5-ef1479cd9cc5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6c95413d-17f0-4483-9566-e22ec353ca12","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0s","x1s","y0s","y1s"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5,5],"x0s":["5:0.5","5:0.65","5:0.5","5:0.65"],"x1s":["5:0.5","5:0.35","5:0.5","5:0.35"],"y0s":[20.3,20.3,30.9,36.4],"y1s":[22.85,20.3,36.4,36.4]}},"id":"aa7c9d75-64b2-4e81-8c0c-2fc891668ff2","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":4}],"cyl":[4],"x_values":["4:0.5"],"y_values":{"__ndarray__":"zczMzMxMR0A=","dtype":"float64","shape":[1]}}},"id":"2c7680c6-d937-4349-9b14-c1ee54895e57","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x0s","x1s","y0s","y1s"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8],"x0s":["8:0.5","8:0.65","8:0.5","8:0.65"],"x1s":["8:0.5","8:0.35","8:0.5","8:0.35"],"y0s":[9.0,9.0,16.0,20.5],"y1s":[13.0,9.0,20.5,20.5]}},"id":"3167d572-c11c-45e3-a353-63491b847118","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"95cc36f1-b019-4fbc-a3f3-7a47878e495e","type":"ColumnDataSource"},"glyph":{"id":"29539244-a131-4d17-aff0-d8c4e563aebf","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"599ca4be-94e1-457f-9f4e-ffc924a059c8","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"6e67eb56-4918-46fa-bc18-7385ff2ac1ce","subtype":"Chart","type":"Plot"}},"id":"9f07e156-4f10-4efe-9951-130cf54538e0","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b7f95f8a-a968-4628-a275-09e16e2bd4fd","type":"Rect"},{"attributes":{"callback":null,"column_names":["x0s","x1s","y0s","y1s"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x0s":["3:0.5","3:0.65","3:0.5","3:0.65"],"x1s":["3:0.5","3:0.35","3:0.5","3:0.35"],"y0s":[18.0,18.0,22.05,23.7],"y1s":[18.75,18.0,23.7,23.7]}},"id":"b919ad0e-4618-4fcd-b13f-4ed2e461bf1a","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"eb54d484-2ca2-4282-8c42-a226a08974e7","type":"LegendItem"},{"id":"31a3f288-0f3e-44b3-93af-380e9b18bfc1","type":"LegendItem"},{"id":"39b26db4-e683-43e0-9325-d02db63df75f","type":"LegendItem"},{"id":"244d5292-91cc-46a0-8c4a-4084404274ae","type":"LegendItem"},{"id":"be4633c0-4ad0-4ed5-bf1f-718ab39d0c6d","type":"LegendItem"}],"location":"top_left","plot":{"id":"6e67eb56-4918-46fa-bc18-7385ff2ac1ce","subtype":"Chart","type":"Plot"}},"id":"efa61d7a-29a7-4321-996c-e7e6520bb8d3","type":"Legend"},{"attributes":{"data_source":{"id":"fba02bf3-5d9d-458d-b2f6-c02d200908d0","type":"ColumnDataSource"},"glyph":{"id":"b2d41757-6a7f-4ad1-8163-8f9d514431c9","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c469ea33-d7e1-4c55-a1b3-cbfb571c5a29","type":"GlyphRenderer"},{"attributes":{"label":{"value":"3"},"renderers":[{"id":"dfdb6cdc-e095-4a02-919c-c4659ea88ebb","type":"GlyphRenderer"},{"id":"523558e1-8548-4efe-8698-f9cd5ccb441c","type":"GlyphRenderer"},{"id":"92c8fbda-880e-4932-90d1-c77f7e3bf83d","type":"GlyphRenderer"}]},"id":"244d5292-91cc-46a0-8c4a-4084404274ae","type":"LegendItem"},{"attributes":{"label":{"value":"8"},"renderers":[{"id":"6c95413d-17f0-4483-9566-e22ec353ca12","type":"GlyphRenderer"},{"id":"7e498f01-1dc3-4e1b-bcf7-25cb0e8cf477","type":"GlyphRenderer"},{"id":"c469ea33-d7e1-4c55-a1b3-cbfb571c5a29","type":"GlyphRenderer"},{"id":"4315ec58-06c6-4992-8dfd-fd1304955466","type":"GlyphRenderer"}]},"id":"eb54d484-2ca2-4282-8c42-a226a08974e7","type":"LegendItem"},{"attributes":{"plot":{"id":"6e67eb56-4918-46fa-bc18-7385ff2ac1ce","subtype":"Chart","type":"Plot"}},"id":"3f30a822-d41b-4bbd-bb3e-da83b61e5369","type":"ResetTool"},{"attributes":{},"id":"2f9b417d-3f94-4e72-a161-0cab57714b8a","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":3}],"color":["#00cccc"],"cyl":[3],"fill_alpha":[0.8],"height":[1.8000000000000007],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[21.15]}},"id":"0d9b34b6-9727-4158-8625-c20db7f8250f","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":4}],"color":["#00cccc"],"cyl":[4],"fill_alpha":[0.8],"height":[3.3999999999999986],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[26.7]}},"id":"b7948d2a-d3ab-45dd-8a62-2b711a4f01fe","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"042a03f8-1fbc-4395-aaf2-ead2870ae83c","type":"Segment"},{"attributes":{"label":{"value":"5"},"renderers":[{"id":"ea6ad99b-29aa-416b-b7e6-befeeec24bea","type":"GlyphRenderer"},{"id":"599ca4be-94e1-457f-9f4e-ffc924a059c8","type":"GlyphRenderer"},{"id":"a9c32454-8419-4601-bacd-591ee3e30371","type":"GlyphRenderer"}]},"id":"be4633c0-4ad0-4ed5-bf1f-718ab39d0c6d","type":"LegendItem"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"924e2934-4685-4324-ba4d-5f08656dcc5a","type":"Segment"},{"attributes":{"callback":null,"column_names":["x0s","x1s","y0s","y1s"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6],"x0s":["6:0.5","6:0.65","6:0.5","6:0.65"],"x1s":["6:0.5","6:0.35","6:0.5","6:0.35"],"y0s":[15.0,15.0,21.0,25.5],"y1s":[18.0,15.0,25.5,25.5]}},"id":"ffb7f19e-591f-447c-8687-5a53888966c9","type":"ColumnDataSource"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"e3a64248-ba36-4cf7-aa5d-639fe0842715","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"6e67eb56-4918-46fa-bc18-7385ff2ac1ce","subtype":"Chart","type":"Plot"},"ticker":{"id":"ee92d600-532f-43f7-94f2-faa54f531069","type":"CategoricalTicker"}},"id":"1b4aaf30-1823-4c4a-b1c9-8917227743cf","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":6}],"color":["#00cccc"],"cyl":[6],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[20.0]}},"id":"a3c12353-3e75-48e7-88cb-d077e1771a35","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1d0b4256-8e9e-4a39-90ff-eda96813c92a","type":"ColumnDataSource"},"glyph":{"id":"2c10d416-a576-42f7-9e1c-d180a998db9f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7e498f01-1dc3-4e1b-bcf7-25cb0e8cf477","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"573656b5-5e08-4ddc-8c91-e703345d7ef5","type":"Circle"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":8}],"color":["#00cccc"],"cyl":[8],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[13.5]}},"id":"4558f4a3-0fc1-4bf6-a1f7-61fd6fac7c65","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ffb7f19e-591f-447c-8687-5a53888966c9","type":"ColumnDataSource"},"glyph":{"id":"042a03f8-1fbc-4395-aaf2-ead2870ae83c","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f77d7544-61c8-407d-baaa-bc975d49a502","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"371b1f7e-6642-4680-962f-80e6a668feb8","type":"Rect"},{"attributes":{"data_source":{"id":"b7948d2a-d3ab-45dd-8a62-2b711a4f01fe","type":"ColumnDataSource"},"glyph":{"id":"56cb9d47-5101-48d3-adae-f7f0e4eb8214","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7daea047-3272-4260-a17d-40aa14d22e61","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":6}],"color":["#00cccc"],"cyl":[6],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[18.5]}},"id":"e33e084f-d293-46ee-a1af-a31c7d526ba7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6e67eb56-4918-46fa-bc18-7385ff2ac1ce","subtype":"Chart","type":"Plot"}},"id":"4aeb663a-2eae-40ee-b0d4-8945f10b687d","type":"SaveTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"98e25914-406f-439d-9fd5-ef1479cd9cc5","type":"Rect"},{"attributes":{},"id":"99569fb9-8971-4b78-acfc-5a4b0788f502","type":"ToolEvents"},{"attributes":{"data_source":{"id":"24cbb413-627c-424d-896f-824c18ffd13a","type":"ColumnDataSource"},"glyph":{"id":"88349eb7-7cb1-43a6-aeb0-8c19825e420e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dfdb6cdc-e095-4a02-919c-c4659ea88ebb","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"6e67eb56-4918-46fa-bc18-7385ff2ac1ce","subtype":"Chart","type":"Plot"}},"id":"7e09a2df-0914-401d-9d5b-c55c93be169e","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"b2d41757-6a7f-4ad1-8163-8f9d514431c9","type":"Circle"},{"attributes":{"data_source":{"id":"e33e084f-d293-46ee-a1af-a31c7d526ba7","type":"ColumnDataSource"},"glyph":{"id":"ca0dd8a3-f60d-4244-84ec-c9472fa55a2d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9743991f-7ca3-44e7-ab2d-e51095935e20","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0s","x1s","y0s","y1s"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4],"x0s":["4:0.5","4:0.65","4:0.5","4:0.65"],"x1s":["4:0.5","4:0.35","4:0.5","4:0.35"],"y0s":[18.0,18.0,32.95,44.87500000000001],"y1s":[25.0,18.0,44.87500000000001,44.87500000000001]}},"id":"3e6719d4-5c4c-4616-83c0-05f19772dbe2","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":3}],"color":["#00cccc"],"cyl":[3],"fill_alpha":[0.8],"height":[1.5],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[19.5]}},"id":"24cbb413-627c-424d-896f-824c18ffd13a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","x","color","y","height","label","line_color","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":4}],"color":["#00cccc"],"cyl":[4],"fill_alpha":[0.8],"height":[4.550000000000004],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[30.675]}},"id":"aa74a1b1-f7e5-4737-8072-e99c7e692f0d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"09dcbf55-7257-4bf3-b533-f875c28e189d","type":"ColumnDataSource"},"glyph":{"id":"b7f95f8a-a968-4628-a275-09e16e2bd4fd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ea6ad99b-29aa-416b-b7e6-befeeec24bea","type":"GlyphRenderer"},{"attributes":{},"id":"ee92d600-532f-43f7-94f2-faa54f531069","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7e09a2df-0914-401d-9d5b-c55c93be169e","type":"PanTool"},{"id":"9f07e156-4f10-4efe-9951-130cf54538e0","type":"WheelZoomTool"},{"id":"5a1ede09-f174-4f5c-915c-d18085f47a8a","type":"BoxZoomTool"},{"id":"4aeb663a-2eae-40ee-b0d4-8945f10b687d","type":"SaveTool"},{"id":"3f30a822-d41b-4bbd-bb3e-da83b61e5369","type":"ResetTool"},{"id":"b6d689f9-2b1d-47a2-87c1-ed29247be820","type":"HelpTool"}]},"id":"13fff01a-aef7-421f-ac31-8a5350d33eec","type":"Toolbar"}],"root_ids":["6e67eb56-4918-46fa-bc18-7385ff2ac1ce"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"44a67219-9946-4cd2-97d1-917c54eae5ac","elementid":"78fe170c-baff-45da-8dd1-a45d8e00a050","modelid":"6e67eb56-4918-46fa-bc18-7385ff2ac1ce"}];
                
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
