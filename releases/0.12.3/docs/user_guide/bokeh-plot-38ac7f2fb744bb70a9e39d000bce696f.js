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
      };var element = document.getElementById("1c234507-c1ff-4184-8b50-6b256936b289");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1c234507-c1ff-4184-8b50-6b256936b289' but no matching script tag was found. ")
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
                  var docs_json = {"66f41922-5800-48af-85e3-58ce311f43b8":{"roots":{"references":[{"attributes":{"callback":null,"end":49.38},"id":"7e6aee8b-55de-45b8-b95d-a712be68daee","type":"Range1d"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6],"x_values":["6:0.5","6:0.5","6:0.5","6:0.5","6:0.5"],"y_values":[26.8,28.8,32.7,38.0,30.7]}},"id":"01a48688-6218-4008-b8e9-7b46768f956b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"8172ad01-5480-413a-9b72-9f2f70d77917","type":"ColumnDataSource"},"glyph":{"id":"b3b23775-cc55-4187-9653-5b1f89f26e25","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ec013529-dfe5-4796-91a6-0ade7f568416","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"02cf5d82-f9bc-4260-a3df-2fbe82b63e5c","type":"ColumnDataSource"},"glyph":{"id":"82788947-8a44-46a9-b840-831fe68517b8","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"31e377bb-e936-49cc-b889-170b94c994f1","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"36eae769-bce0-4755-bf5e-7842df3f54de","type":"CategoricalAxis"}],"height":400,"left":[{"id":"e81278d3-508f-4816-8f0b-9163eb98bc1e","type":"LinearAxis"}],"renderers":[{"id":"372102f2-a70d-4108-aa54-15d79f7dd865","type":"BoxAnnotation"},{"id":"c1c593be-dd69-41fd-bc8f-30b59e797a71","type":"GlyphRenderer"},{"id":"5486eec8-1cbf-431d-84ad-1dd685527c73","type":"GlyphRenderer"},{"id":"31e377bb-e936-49cc-b889-170b94c994f1","type":"GlyphRenderer"},{"id":"f89db10d-1d91-4c88-b2e5-898866b766db","type":"GlyphRenderer"},{"id":"a1554c4b-9862-4554-a891-f12a216eab1a","type":"GlyphRenderer"},{"id":"2310ca90-043f-4963-8092-33598b3c1d90","type":"GlyphRenderer"},{"id":"e2fc04a0-c7de-48ec-98a9-7d247e5e9d65","type":"GlyphRenderer"},{"id":"72631c4e-820d-450d-b54b-fad0d482b8b8","type":"GlyphRenderer"},{"id":"44d740e8-185c-46d8-ae93-b71ad702c501","type":"GlyphRenderer"},{"id":"ac0386f6-7bc1-4352-9cfa-e5ceadf7742c","type":"GlyphRenderer"},{"id":"0455a693-3cb7-4365-baa6-2cdc443e4f8b","type":"GlyphRenderer"},{"id":"e0f3c8d0-d959-44af-9c6f-d6fed8416804","type":"GlyphRenderer"},{"id":"9e8eb76a-5536-4e0a-8807-1fa97b42ce95","type":"GlyphRenderer"},{"id":"20996cd5-fbcc-4fac-9c1a-a1875c5663d7","type":"GlyphRenderer"},{"id":"cc8f1bef-36fb-439b-82f9-7ad2eec295b4","type":"GlyphRenderer"},{"id":"795f7c1f-e063-4295-b14d-40919b938293","type":"GlyphRenderer"},{"id":"0aee9f59-015c-4864-a765-fc1581605d0c","type":"GlyphRenderer"},{"id":"ec013529-dfe5-4796-91a6-0ade7f568416","type":"GlyphRenderer"},{"id":"881c9b63-1533-42a5-b827-ef312b949ca4","type":"Legend"},{"id":"36eae769-bce0-4755-bf5e-7842df3f54de","type":"CategoricalAxis"},{"id":"e81278d3-508f-4816-8f0b-9163eb98bc1e","type":"LinearAxis"},{"id":"79d88c53-eac7-4f30-852e-22135563846b","type":"Grid"}],"title":{"id":"84355df4-f3bb-453c-b099-0e391332c6de","type":"Title"},"tool_events":{"id":"a32d49bb-17a2-4889-83a2-24a38b0bf305","type":"ToolEvents"},"toolbar":{"id":"44ca1fea-ab1e-4e53-bc17-1e0040bbe5a4","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"a896decd-61f2-48e3-b90e-88e878185d64","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"7e6aee8b-55de-45b8-b95d-a712be68daee","type":"Range1d"}},"id":"3cea6c78-e6a3-4fa2-ab8d-c362cdbf6e53","subtype":"Chart","type":"Plot"},{"attributes":{"overlay":{"id":"372102f2-a70d-4108-aa54-15d79f7dd865","type":"BoxAnnotation"},"plot":{"id":"3cea6c78-e6a3-4fa2-ab8d-c362cdbf6e53","subtype":"Chart","type":"Plot"}},"id":"8d8b7616-1349-4e10-8cfb-d5b452c583af","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"3cea6c78-e6a3-4fa2-ab8d-c362cdbf6e53","subtype":"Chart","type":"Plot"}},"id":"335adcd8-fac0-4c45-9905-b2af67d20822","type":"ResetTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"09d5e528-2d9c-4143-9758-61dccf1db38f","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"372102f2-a70d-4108-aa54-15d79f7dd865","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"3cea6c78-e6a3-4fa2-ab8d-c362cdbf6e53","subtype":"Chart","type":"Plot"}},"id":"73f27aa3-8e32-4018-9737-aeb69d200666","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["DimGrey"],"cyl":[8],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[15.0]}},"id":"308554a2-d6d8-497c-bbd4-bf86857f88dd","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a92a492c-2ddc-403a-a7fe-9092bbdd8359","type":"ColumnDataSource"},"glyph":{"id":"d3fc8b02-fd2a-474e-af7d-ab09b928ae99","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"44d740e8-185c-46d8-ae93-b71ad702c501","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4],"x0s":["4:0.5","4:0.65","4:0.5","4:0.65"],"x1s":["4:0.5","4:0.35","4:0.5","4:0.35"],"y0s":[18.0,18.0,32.95,44.87500000000001],"y1s":[25.0,18.0,44.87500000000001,44.87500000000001]}},"id":"fa6b050c-5b10-4b58-ba56-9af5a407f7dc","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"d12231de-2c1f-4188-bf71-4ded986a8bc1","type":"Circle"},{"attributes":{"data_source":{"id":"b78440b1-c3af-4e76-ab38-02f4a039d5c4","type":"ColumnDataSource"},"glyph":{"id":"ccf9d7db-8fff-4be3-b997-d61404ff87d1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e0f3c8d0-d959-44af-9c6f-d6fed8416804","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"f22bad1a-7385-4cbc-9b2a-4ed202964b07","type":"ColumnDataSource"},"glyph":{"id":"09d5e528-2d9c-4143-9758-61dccf1db38f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a1554c4b-9862-4554-a891-f12a216eab1a","type":"GlyphRenderer"},{"attributes":{"items":[{"id":"1d78f453-4af6-4ba3-ab31-9955f351126e","type":"LegendItem"},{"id":"4cc8433e-270b-4919-b8ce-e0757cf8031b","type":"LegendItem"},{"id":"989c0251-3d69-4d98-a2f4-02d68882bf47","type":"LegendItem"},{"id":"8f7d1e02-50ad-4521-aa39-4506f80e3db3","type":"LegendItem"},{"id":"3191c445-6f9f-46fa-8ec6-f532249e47b6","type":"LegendItem"}],"location":"top_left","plot":{"id":"3cea6c78-e6a3-4fa2-ab8d-c362cdbf6e53","subtype":"Chart","type":"Plot"}},"id":"881c9b63-1533-42a5-b827-ef312b949ca4","type":"Legend"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["DimGrey"],"cyl":[4],"fill_alpha":[0.8],"height":[4.550000000000004],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[30.675]}},"id":"f22bad1a-7385-4cbc-9b2a-4ed202964b07","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"da204c06-e575-4dbc-af8a-55af9706d6ec","type":"Rect"},{"attributes":{"line_color":{"value":"#df5320"},"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"68d61837-76b1-4a88-a88e-0ad908f09af7","type":"Segment"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":8}],"color":["DimGrey"],"cyl":[8],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":8}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["8"],"y":[13.5]}},"id":"f1203ff7-f7e0-4ebd-b39c-989830604d94","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["DimGrey"],"cyl":[6],"fill_alpha":[0.8],"height":[2.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[20.0]}},"id":"b78440b1-c3af-4e76-ab38-02f4a039d5c4","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"751fca3a-6eae-4b44-953a-a3308079c8a4","type":"Rect"},{"attributes":{},"id":"beb5960d-91ff-4ccf-8c83-d4b9b673d0d6","type":"BasicTicker"},{"attributes":{"label":{"value":"8"},"renderers":[{"id":"cc8f1bef-36fb-439b-82f9-7ad2eec295b4","type":"GlyphRenderer"},{"id":"795f7c1f-e063-4295-b14d-40919b938293","type":"GlyphRenderer"},{"id":"0aee9f59-015c-4864-a765-fc1581605d0c","type":"GlyphRenderer"},{"id":"ec013529-dfe5-4796-91a6-0ade7f568416","type":"GlyphRenderer"}]},"id":"3191c445-6f9f-46fa-8ec6-f532249e47b6","type":"LegendItem"},{"attributes":{},"id":"a313ead7-729a-47a1-8ec5-2a75d3c73fee","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"d4e79371-b872-4a34-bded-bd93b05ea32b","type":"ColumnDataSource"},"glyph":{"id":"67d4b5fc-1c05-4081-8ba6-9642ef0efe0c","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0aee9f59-015c-4864-a765-fc1581605d0c","type":"GlyphRenderer"},{"attributes":{"label":{"value":"5"},"renderers":[{"id":"72631c4e-820d-450d-b54b-fad0d482b8b8","type":"GlyphRenderer"},{"id":"44d740e8-185c-46d8-ae93-b71ad702c501","type":"GlyphRenderer"},{"id":"ac0386f6-7bc1-4352-9cfa-e5ceadf7742c","type":"GlyphRenderer"}]},"id":"989c0251-3d69-4d98-a2f4-02d68882bf47","type":"LegendItem"},{"attributes":{"data_source":{"id":"01a48688-6218-4008-b8e9-7b46768f956b","type":"ColumnDataSource"},"glyph":{"id":"28c0b584-f1ff-4448-be0e-4db2117a83f7","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9e8eb76a-5536-4e0a-8807-1fa97b42ce95","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"308554a2-d6d8-497c-bbd4-bf86857f88dd","type":"ColumnDataSource"},"glyph":{"id":"bd99ad01-0447-4694-b087-416911c62c3b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"795f7c1f-e063-4295-b14d-40919b938293","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x0s":["3:0.5","3:0.65","3:0.5","3:0.65"],"x1s":["3:0.5","3:0.35","3:0.5","3:0.35"],"y0s":[18.0,18.0,22.05,23.7],"y1s":[18.75,18.0,23.7,23.7]}},"id":"02cf5d82-f9bc-4260-a3df-2fbe82b63e5c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3cea6c78-e6a3-4fa2-ab8d-c362cdbf6e53","subtype":"Chart","type":"Plot"}},"id":"e4d0b0dd-0582-4096-a0ed-f28ebbf7348f","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["DimGrey"],"cyl":[3],"fill_alpha":[0.8],"height":[1.5],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[19.5]}},"id":"df586140-775e-48f7-b11e-3fea45c669a1","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ccf9d7db-8fff-4be3-b997-d61404ff87d1","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":4}],"color":["DimGrey"],"cyl":[4],"fill_alpha":[0.8],"height":[3.3999999999999986],"label":[{"cyl":4}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["4"],"y":[26.7]}},"id":"4e33223d-ed96-4f70-8250-01f8c926e979","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d3fc8b02-fd2a-474e-af7d-ab09b928ae99","type":"Rect"},{"attributes":{"label":{"value":"6"},"renderers":[{"id":"0455a693-3cb7-4365-baa6-2cdc443e4f8b","type":"GlyphRenderer"},{"id":"e0f3c8d0-d959-44af-9c6f-d6fed8416804","type":"GlyphRenderer"},{"id":"9e8eb76a-5536-4e0a-8807-1fa97b42ce95","type":"GlyphRenderer"},{"id":"20996cd5-fbcc-4fac-9c1a-a1875c5663d7","type":"GlyphRenderer"}]},"id":"8f7d1e02-50ad-4521-aa39-4506f80e3db3","type":"LegendItem"},{"attributes":{"plot":{"id":"3cea6c78-e6a3-4fa2-ab8d-c362cdbf6e53","subtype":"Chart","type":"Plot"}},"id":"b18ff209-75fc-4423-b772-243e2c098a1d","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"3cea6c78-e6a3-4fa2-ab8d-c362cdbf6e53","subtype":"Chart","type":"Plot"},"ticker":{"id":"beb5960d-91ff-4ccf-8c83-d4b9b673d0d6","type":"BasicTicker"}},"id":"79d88c53-eac7-4f30-852e-22135563846b","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b18ff209-75fc-4423-b772-243e2c098a1d","type":"PanTool"},{"id":"73f27aa3-8e32-4018-9737-aeb69d200666","type":"WheelZoomTool"},{"id":"8d8b7616-1349-4e10-8cfb-d5b452c583af","type":"BoxZoomTool"},{"id":"dd08808a-2436-4ce1-9a10-a71da4289ffe","type":"SaveTool"},{"id":"335adcd8-fac0-4c45-9905-b2af67d20822","type":"ResetTool"},{"id":"e4d0b0dd-0582-4096-a0ed-f28ebbf7348f","type":"HelpTool"}]},"id":"44ca1fea-ab1e-4e53-bc17-1e0040bbe5a4","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":4}],"cyl":[4],"x_values":["4:0.5"],"y_values":[46.6]}},"id":"98ac6f84-a5df-4518-acaa-1bf763cffac3","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"bd99ad01-0447-4694-b087-416911c62c3b","type":"Rect"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8],"x0s":["8:0.5","8:0.65","8:0.5","8:0.65"],"x1s":["8:0.5","8:0.35","8:0.5","8:0.35"],"y0s":[9.0,9.0,16.0,20.5],"y1s":[13.0,9.0,20.5,20.5]}},"id":"8172ad01-5480-413a-9b72-9f2f70d77917","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"df586140-775e-48f7-b11e-3fea45c669a1","type":"ColumnDataSource"},"glyph":{"id":"d7557cd8-189f-44d6-ae35-eb03c38a122a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c1c593be-dd69-41fd-bc8f-30b59e797a71","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d7557cd8-189f-44d6-ae35-eb03c38a122a","type":"Rect"},{"attributes":{"data_source":{"id":"f1203ff7-f7e0-4ebd-b39c-989830604d94","type":"ColumnDataSource"},"glyph":{"id":"da204c06-e575-4dbc-af8a-55af9706d6ec","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cc8f1bef-36fb-439b-82f9-7ad2eec295b4","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"38a5a5d4-d2b9-4f2e-82f3-da3cd4e0196c","type":"ColumnDataSource"},"glyph":{"id":"127c1ecf-ffdd-49de-8140-e523eb6d44b5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5486eec8-1cbf-431d-84ad-1dd685527c73","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["DimGrey"],"cyl":[5],"fill_alpha":[0.8],"height":[5.5],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[28.15]}},"id":"a92a492c-2ddc-403a-a7fe-9092bbdd8359","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5,5],"x0s":["5:0.5","5:0.65","5:0.5","5:0.65"],"x1s":["5:0.5","5:0.35","5:0.5","5:0.35"],"y0s":[20.3,20.3,30.9,36.4],"y1s":[22.85,20.3,36.4,36.4]}},"id":"540e432f-357f-4a47-aacf-306b554b264c","type":"ColumnDataSource"},{"attributes":{},"id":"46d3d74f-880c-46dc-9741-35ddb86e654f","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"fa6b050c-5b10-4b58-ba56-9af5a407f7dc","type":"ColumnDataSource"},"glyph":{"id":"259ea32e-ac4e-47b7-8dec-7f918a84ac6a","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e2fc04a0-c7de-48ec-98a9-7d247e5e9d65","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"28c0b584-f1ff-4448-be0e-4db2117a83f7","type":"Circle"},{"attributes":{"data_source":{"id":"98ac6f84-a5df-4518-acaa-1bf763cffac3","type":"ColumnDataSource"},"glyph":{"id":"d12231de-2c1f-4188-bf71-4ded986a8bc1","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2310ca90-043f-4963-8092-33598b3c1d90","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"82788947-8a44-46a9-b840-831fe68517b8","type":"Segment"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"28ed3ea9-0adc-4d0c-9a53-2a60cd8d1e87","type":"Rect"},{"attributes":{"data_source":{"id":"08b0b93a-384e-4c68-b5f1-ac71fbefcf2d","type":"ColumnDataSource"},"glyph":{"id":"751fca3a-6eae-4b44-953a-a3308079c8a4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0455a693-3cb7-4365-baa6-2cdc443e4f8b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4e33223d-ed96-4f70-8250-01f8c926e979","type":"ColumnDataSource"},"glyph":{"id":"05edf758-5a2a-4de9-a1a0-ca69e0d3f798","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f89db10d-1d91-4c88-b2e5-898866b766db","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":5}],"color":["DimGrey"],"cyl":[5],"fill_alpha":[0.8],"height":[2.549999999999997],"label":[{"cyl":5}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["5"],"y":[24.125]}},"id":"29aaf883-283c-4448-8c12-a0e5e4bbdd23","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#00ad9c"},"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"b3b23775-cc55-4187-9653-5b1f89f26e25","type":"Segment"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"a896decd-61f2-48e3-b90e-88e878185d64","type":"FactorRange"},{"attributes":{"data_source":{"id":"29aaf883-283c-4448-8c12-a0e5e4bbdd23","type":"ColumnDataSource"},"glyph":{"id":"28ed3ea9-0adc-4d0c-9a53-2a60cd8d1e87","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"72631c4e-820d-450d-b54b-fad0d482b8b8","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":3}],"color":["DimGrey"],"cyl":[3],"fill_alpha":[0.8],"height":[1.8000000000000007],"label":[{"cyl":3}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["3"],"y":[21.15]}},"id":"38a5a5d4-d2b9-4f2e-82f3-da3cd4e0196c","type":"ColumnDataSource"},{"attributes":{"label":{"value":"4"},"renderers":[{"id":"f89db10d-1d91-4c88-b2e5-898866b766db","type":"GlyphRenderer"},{"id":"a1554c4b-9862-4554-a891-f12a216eab1a","type":"GlyphRenderer"},{"id":"2310ca90-043f-4963-8092-33598b3c1d90","type":"GlyphRenderer"},{"id":"e2fc04a0-c7de-48ec-98a9-7d247e5e9d65","type":"GlyphRenderer"}]},"id":"4cc8433e-270b-4919-b8ce-e0757cf8031b","type":"LegendItem"},{"attributes":{"data_source":{"id":"ea5c4ce0-ce84-40b3-bd5a-b57949b779e0","type":"ColumnDataSource"},"glyph":{"id":"68d61837-76b1-4a88-a88e-0ad908f09af7","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"20996cd5-fbcc-4fac-9c1a-a1875c5663d7","type":"GlyphRenderer"},{"attributes":{},"id":"a32d49bb-17a2-4889-83a2-24a38b0bf305","type":"ToolEvents"},{"attributes":{},"id":"ce677cfb-c4ca-4ec3-ab20-2c5632f7c660","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":5},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"67d4b5fc-1c05-4081-8ba6-9642ef0efe0c","type":"Circle"},{"attributes":{"axis_label":"Mpg","formatter":{"id":"a313ead7-729a-47a1-8ec5-2a75d3c73fee","type":"BasicTickFormatter"},"plot":{"id":"3cea6c78-e6a3-4fa2-ab8d-c362cdbf6e53","subtype":"Chart","type":"Plot"},"ticker":{"id":"beb5960d-91ff-4ccf-8c83-d4b9b673d0d6","type":"BasicTicker"}},"id":"e81278d3-508f-4816-8f0b-9163eb98bc1e","type":"LinearAxis"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"46d3d74f-880c-46dc-9741-35ddb86e654f","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"3cea6c78-e6a3-4fa2-ab8d-c362cdbf6e53","subtype":"Chart","type":"Plot"},"ticker":{"id":"ce677cfb-c4ca-4ec3-ab20-2c5632f7c660","type":"CategoricalTicker"}},"id":"36eae769-bce0-4755-bf5e-7842df3f54de","type":"CategoricalAxis"},{"attributes":{"plot":null,"text":"MPG Summary (grouped and whiskers shaded by CYL)"},"id":"84355df4-f3bb-453c-b099-0e391332c6de","type":"Title"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8],"x_values":["8:0.5","8:0.5","8:0.5"],"y_values":[26.6,23.0,23.9]}},"id":"d4e79371-b872-4a34-bded-bd93b05ea32b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"540e432f-357f-4a47-aacf-306b554b264c","type":"ColumnDataSource"},"glyph":{"id":"2479a295-159a-4d2b-8d15-abfb3666c7e9","type":"Segment"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ac0386f6-7bc1-4352-9cfa-e5ceadf7742c","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#407ee7"},"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"2479a295-159a-4d2b-8d15-abfb3666c7e9","type":"Segment"},{"attributes":{"callback":null,"column_names":["x0s","y0s","x1s","y1s"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6],"x0s":["6:0.5","6:0.65","6:0.5","6:0.65"],"x1s":["6:0.5","6:0.35","6:0.5","6:0.35"],"y0s":[15.0,15.0,21.0,25.5],"y1s":[18.0,15.0,25.5,25.5]}},"id":"ea5c4ce0-ce84-40b3-bd5a-b57949b779e0","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"cyl":6}],"color":["DimGrey"],"cyl":[6],"fill_alpha":[0.8],"height":[1.0],"label":[{"cyl":6}],"line_alpha":[1.0],"line_color":["black"],"width":[0.8],"x":["6"],"y":[18.5]}},"id":"08b0b93a-384e-4c68-b5f1-ac71fbefcf2d","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3cea6c78-e6a3-4fa2-ab8d-c362cdbf6e53","subtype":"Chart","type":"Plot"}},"id":"dd08808a-2436-4ce1-9a10-a71da4289ffe","type":"SaveTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"05edf758-5a2a-4de9-a1a0-ca69e0d3f798","type":"Rect"},{"attributes":{"line_color":{"value":"#5ab738"},"line_width":{"value":2},"x0":{"field":"x0s"},"x1":{"field":"x1s"},"y0":{"field":"y0s"},"y1":{"field":"y1s"}},"id":"259ea32e-ac4e-47b7-8dec-7f918a84ac6a","type":"Segment"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"127c1ecf-ffdd-49de-8140-e523eb6d44b5","type":"Rect"},{"attributes":{"label":{"value":"3"},"renderers":[{"id":"c1c593be-dd69-41fd-bc8f-30b59e797a71","type":"GlyphRenderer"},{"id":"5486eec8-1cbf-431d-84ad-1dd685527c73","type":"GlyphRenderer"},{"id":"31e377bb-e936-49cc-b889-170b94c994f1","type":"GlyphRenderer"}]},"id":"1d78f453-4af6-4ba3-ab31-9955f351126e","type":"LegendItem"}],"root_ids":["3cea6c78-e6a3-4fa2-ab8d-c362cdbf6e53"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"66f41922-5800-48af-85e3-58ce311f43b8","elementid":"1c234507-c1ff-4184-8b50-6b256936b289","modelid":"3cea6c78-e6a3-4fa2-ab8d-c362cdbf6e53"}];
                  
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