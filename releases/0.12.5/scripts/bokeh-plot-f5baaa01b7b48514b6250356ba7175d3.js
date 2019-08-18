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
      };var element = document.getElementById("0245e3f5-087f-4937-9026-14474910cdea");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0245e3f5-087f-4937-9026-14474910cdea' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"63e6035d-51d2-4208-8ec5-2f2f1267ec87":{"roots":{"references":[{"attributes":{"callback":null,"end":79.83043478260869},"id":"fc5495f2-860f-4366-b9cf-547c3283ede7","type":"Range1d"},{"attributes":{"label":{"value":"3"},"renderers":[{"id":"b263e491-6536-443c-97de-5301d430d6b0","type":"GlyphRenderer"}]},"id":"1f68d222-f4c7-4443-b453-8e95851bf04f","type":"LegendItem"},{"attributes":{"overlay":{"id":"26e3ca0e-07d1-4fb2-8f31-3e216a160be9","type":"BoxAnnotation"},"plot":{"id":"21faba43-bb97-4304-be9e-e1b14145e3b0","subtype":"Chart","type":"Plot"}},"id":"330f14ed-4510-4159-86f9-acef0ddb5569","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"395801a5-05b3-4115-8706-519e0324294d","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26e3ca0e-07d1-4fb2-8f31-3e216a160be9","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":6,"origin":1}],"color":["#df5320"],"cyl":[6],"fill_alpha":[0.8],"height":[19.645205479452052],"label":[{"cyl":6,"origin":1}],"line_alpha":[1.0],"line_color":["white"],"origin":[1],"width":[0.8],"x":["1"],"y":[24.785709535842532]}},"id":"cf18b79b-c82f-4a8d-a6b1-c1c848ca4ad2","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":8,"origin":1}],"color":["#00ad9c"],"cyl":[8],"fill_alpha":[0.8],"height":[14.963106796116506],"label":[{"cyl":8,"origin":1}],"line_alpha":[1.0],"line_color":["white"],"origin":[1],"width":[0.8],"x":["1"],"y":[7.481553398058253]}},"id":"2bcf6c1f-3be7-46d6-8caa-9b93880485bf","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"21faba43-bb97-4304-be9e-e1b14145e3b0","subtype":"Chart","type":"Plot"}},"id":"569b32d3-771f-465b-bc48-9480f24be4be","type":"SaveTool"},{"attributes":{"data_source":{"id":"f861b58a-24fe-4ce7-9c0d-8c7634465df2","type":"ColumnDataSource"},"glyph":{"id":"395801a5-05b3-4115-8706-519e0324294d","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"21ef87e1-affc-4bf3-b774-08c4f64c06e2","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"d4fb4ef0-c342-4310-b60d-72dd72662484","type":"ColumnDataSource"},"glyph":{"id":"910c2135-3651-47f9-afb4-8791020e4418","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"12cd73be-5161-4506-8634-4db58b791faf","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"21faba43-bb97-4304-be9e-e1b14145e3b0","subtype":"Chart","type":"Plot"}},"id":"521381fc-612d-49f9-91f6-e975e4943920","type":"ResetTool"},{"attributes":{"items":[{"id":"3cc9c8d5-57fc-408b-b8e6-9a2fdfab49bc","type":"LegendItem"},{"id":"05df0b09-0db9-400c-abc4-8f9035fdeaa1","type":"LegendItem"},{"id":"a0e5f40e-2f07-464c-b413-63b34ace552f","type":"LegendItem"},{"id":"1f68d222-f4c7-4443-b453-8e95851bf04f","type":"LegendItem"},{"id":"d70834ef-af8e-4aba-939f-8f0e719c4bd1","type":"LegendItem"}],"plot":{"id":"21faba43-bb97-4304-be9e-e1b14145e3b0","subtype":"Chart","type":"Plot"}},"id":"e4db16e4-239b-4d39-a86f-c19ea7b6b3f6","type":"Legend"},{"attributes":{"label":{"value":"5"},"renderers":[{"id":"69bea0c6-9273-4d90-b388-828971087cfd","type":"GlyphRenderer"}]},"id":"d70834ef-af8e-4aba-939f-8f0e719c4bd1","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cb26a1c3-5019-4cd6-a2e4-a171cd0626c0","type":"PanTool"},{"id":"46d17a54-50c4-4f01-8e05-b302bb8cfa1d","type":"WheelZoomTool"},{"id":"330f14ed-4510-4159-86f9-acef0ddb5569","type":"BoxZoomTool"},{"id":"569b32d3-771f-465b-bc48-9480f24be4be","type":"SaveTool"},{"id":"521381fc-612d-49f9-91f6-e975e4943920","type":"ResetTool"},{"id":"3aaa239f-0ed6-49ce-aada-1fb6d6606f15","type":"HelpTool"}]},"id":"0859472c-0a44-43e8-8b68-c22515239096","type":"Toolbar"},{"attributes":{"plot":{"id":"21faba43-bb97-4304-be9e-e1b14145e3b0","subtype":"Chart","type":"Plot"}},"id":"cb26a1c3-5019-4cd6-a2e4-a171cd0626c0","type":"PanTool"},{"attributes":{"data_source":{"id":"835bb78c-0cc2-4458-beb5-0f12516044bc","type":"ColumnDataSource"},"glyph":{"id":"c16329a5-f9cf-4739-b642-074be553a339","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"8e8bf0ef-f13f-42a5-b8f1-c62630ff34a8","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1840199c-e4da-4a58-b322-a94f87590676","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c16329a5-f9cf-4739-b642-074be553a339","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ef733f9f-f670-41ce-8d2b-0e62c26acf29","type":"Rect"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":6,"origin":3}],"color":["#df5320"],"cyl":[6],"fill_alpha":[0.8],"height":[23.88333333333333],"label":[{"cyl":6,"origin":3}],"line_alpha":[1.0],"line_color":["white"],"origin":[3],"width":[0.8],"x":["3"],"y":[64.08731884057971]}},"id":"835bb78c-0cc2-4458-beb5-0f12516044bc","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2bcf6c1f-3be7-46d6-8caa-9b93880485bf","type":"ColumnDataSource"},"glyph":{"id":"22c40a9d-628e-4bf7-9ace-2a3c01317445","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"16157e0a-9d9c-4b73-bab6-1d72505bb0bf","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":6,"origin":2}],"color":["#df5320"],"cyl":[6],"fill_alpha":[0.8],"height":[20.1],"label":[{"cyl":6,"origin":2}],"line_alpha":[1.0],"line_color":["white"],"origin":[2],"width":[0.8],"x":["2"],"y":[38.15655737704918]}},"id":"1c716440-1de3-4f7b-bfea-4fbc378bfe1a","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"21faba43-bb97-4304-be9e-e1b14145e3b0","subtype":"Chart","type":"Plot"}},"id":"3aaa239f-0ed6-49ce-aada-1fb6d6606f15","type":"HelpTool"},{"attributes":{"label":{"value":"8"},"renderers":[{"id":"16157e0a-9d9c-4b73-bab6-1d72505bb0bf","type":"GlyphRenderer"}]},"id":"3cc9c8d5-57fc-408b-b8e6-9a2fdfab49bc","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":4,"origin":3}],"color":["#5ab738"],"cyl":[4],"fill_alpha":[0.8],"height":[31.59565217391304],"label":[{"cyl":4,"origin":3}],"line_alpha":[1.0],"line_color":["white"],"origin":[3],"width":[0.8],"x":["3"],"y":[15.79782608695652]}},"id":"f861b58a-24fe-4ce7-9c0d-8c7634465df2","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["1","2","3"]},"id":"28d4093f-7ac4-4192-a8df-d585414608c8","type":"FactorRange"},{"attributes":{},"id":"05d062b5-98cf-43da-9541-991313a04dd4","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e190038-1df5-4a2a-a393-97b557bc497e","type":"Rect"},{"attributes":{"label":{"value":"6"},"renderers":[{"id":"c691dd1b-fbb9-42e8-bb07-bbbafd27591a","type":"GlyphRenderer"}]},"id":"a0e5f40e-2f07-464c-b413-63b34ace552f","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":3,"origin":3}],"color":["#f22c40"],"cyl":[3],"fill_alpha":[0.8],"height":[20.55],"label":[{"cyl":3,"origin":3}],"line_alpha":[1.0],"line_color":["white"],"origin":[3],"width":[0.8],"x":["3"],"y":[41.870652173913044]}},"id":"580ba10f-2cc3-4e21-83a2-5d0ac4a168e5","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":4,"origin":2}],"color":["#5ab738"],"cyl":[4],"fill_alpha":[0.8],"height":[28.10655737704918],"label":[{"cyl":4,"origin":2}],"line_alpha":[1.0],"line_color":["white"],"origin":[2],"width":[0.8],"x":["2"],"y":[14.05327868852459]}},"id":"8cfa2924-e34d-4532-954b-1cc019d26c90","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3bd6a78f-b27c-4073-afe3-e772dfeb5827","type":"ColumnDataSource"},"glyph":{"id":"0dc9e96a-802d-4068-b799-9f76a41437f3","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"69bea0c6-9273-4d90-b388-828971087cfd","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"580ba10f-2cc3-4e21-83a2-5d0ac4a168e5","type":"ColumnDataSource"},"glyph":{"id":"5e190038-1df5-4a2a-a393-97b557bc497e","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"b263e491-6536-443c-97de-5301d430d6b0","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"cf18b79b-c82f-4a8d-a6b1-c1c848ca4ad2","type":"ColumnDataSource"},"glyph":{"id":"1840199c-e4da-4a58-b322-a94f87590676","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"c691dd1b-fbb9-42e8-bb07-bbbafd27591a","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":5,"origin":2}],"color":["#407ee7"],"cyl":[5],"fill_alpha":[0.8],"height":[27.366666666666664],"label":[{"cyl":5,"origin":2}],"line_alpha":[1.0],"line_color":["white"],"origin":[2],"width":[0.8],"x":["2"],"y":[61.88989071038251]}},"id":"3bd6a78f-b27c-4073-afe3-e772dfeb5827","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Avg MPG by ORIGIN, stacked by CYL"},"id":"aeb708ea-2738-40d8-b5a7-7f41a99fc1cc","type":"Title"},{"attributes":{"below":[{"id":"fb8fffc9-14fe-4097-840f-d3446d05d393","type":"CategoricalAxis"}],"css_classes":null,"left":[{"id":"631b911a-2bff-4cf7-aad6-5a08906283f5","type":"LinearAxis"}],"renderers":[{"id":"26e3ca0e-07d1-4fb2-8f31-3e216a160be9","type":"BoxAnnotation"},{"id":"16157e0a-9d9c-4b73-bab6-1d72505bb0bf","type":"GlyphRenderer"},{"id":"21ef87e1-affc-4bf3-b774-08c4f64c06e2","type":"GlyphRenderer"},{"id":"c691dd1b-fbb9-42e8-bb07-bbbafd27591a","type":"GlyphRenderer"},{"id":"f12fe74d-d275-4333-95d1-2d1cceffa454","type":"GlyphRenderer"},{"id":"12cd73be-5161-4506-8634-4db58b791faf","type":"GlyphRenderer"},{"id":"b263e491-6536-443c-97de-5301d430d6b0","type":"GlyphRenderer"},{"id":"8e8bf0ef-f13f-42a5-b8f1-c62630ff34a8","type":"GlyphRenderer"},{"id":"a828c6f8-90b8-4558-be45-ba4b68d65bb3","type":"GlyphRenderer"},{"id":"69bea0c6-9273-4d90-b388-828971087cfd","type":"GlyphRenderer"},{"id":"e4db16e4-239b-4d39-a86f-c19ea7b6b3f6","type":"Legend"},{"id":"fb8fffc9-14fe-4097-840f-d3446d05d393","type":"CategoricalAxis"},{"id":"631b911a-2bff-4cf7-aad6-5a08906283f5","type":"LinearAxis"},{"id":"9d265a98-a15c-4318-9eed-d190d256eabc","type":"Grid"}],"title":{"id":"aeb708ea-2738-40d8-b5a7-7f41a99fc1cc","type":"Title"},"tool_events":{"id":"d8afc85e-eab4-46c5-bb0a-df5fc8b5e76b","type":"ToolEvents"},"toolbar":{"id":"0859472c-0a44-43e8-8b68-c22515239096","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"28d4093f-7ac4-4192-a8df-d585414608c8","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"fc5495f2-860f-4366-b9cf-547c3283ede7","type":"Range1d"}},"id":"21faba43-bb97-4304-be9e-e1b14145e3b0","subtype":"Chart","type":"Plot"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"910c2135-3651-47f9-afb4-8791020e4418","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"22c40a9d-628e-4bf7-9ace-2a3c01317445","type":"Rect"},{"attributes":{},"id":"beb94e08-5672-4fcd-9012-3a8f097dcf20","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"64cf1e76-078d-4cb3-98ed-05348ad5fc99","type":"Rect"},{"attributes":{"plot":{"id":"21faba43-bb97-4304-be9e-e1b14145e3b0","subtype":"Chart","type":"Plot"}},"id":"46d17a54-50c4-4f01-8e05-b302bb8cfa1d","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"1c716440-1de3-4f7b-bfea-4fbc378bfe1a","type":"ColumnDataSource"},"glyph":{"id":"64cf1e76-078d-4cb3-98ed-05348ad5fc99","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"a828c6f8-90b8-4558-be45-ba4b68d65bb3","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"21faba43-bb97-4304-be9e-e1b14145e3b0","subtype":"Chart","type":"Plot"},"ticker":{"id":"ac416020-662f-4940-bfbb-17615da9cf48","type":"BasicTicker"}},"id":"9d265a98-a15c-4318-9eed-d190d256eabc","type":"Grid"},{"attributes":{},"id":"ac416020-662f-4940-bfbb-17615da9cf48","type":"BasicTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0dc9e96a-802d-4068-b799-9f76a41437f3","type":"Rect"},{"attributes":{"label":{"value":"4"},"renderers":[{"id":"21ef87e1-affc-4bf3-b774-08c4f64c06e2","type":"GlyphRenderer"}]},"id":"05df0b09-0db9-400c-abc4-8f9035fdeaa1","type":"LegendItem"},{"attributes":{},"id":"d8afc85e-eab4-46c5-bb0a-df5fc8b5e76b","type":"ToolEvents"},{"attributes":{"axis_label":"Origin","formatter":{"id":"beb94e08-5672-4fcd-9012-3a8f097dcf20","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"21faba43-bb97-4304-be9e-e1b14145e3b0","subtype":"Chart","type":"Plot"},"ticker":{"id":"05d062b5-98cf-43da-9541-991313a04dd4","type":"CategoricalTicker"}},"id":"fb8fffc9-14fe-4097-840f-d3446d05d393","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"8cfa2924-e34d-4532-954b-1cc019d26c90","type":"ColumnDataSource"},"glyph":{"id":"ef733f9f-f670-41ce-8d2b-0e62c26acf29","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"f12fe74d-d275-4333-95d1-2d1cceffa454","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"cyl":4,"origin":1}],"color":["#5ab738"],"cyl":[4],"fill_alpha":[0.8],"height":[28.013043478260872],"label":[{"cyl":4,"origin":1}],"line_alpha":[1.0],"line_color":["white"],"origin":[1],"width":[0.8],"x":["1"],"y":[48.61483401469899]}},"id":"d4fb4ef0-c342-4310-b60d-72dd72662484","type":"ColumnDataSource"},{"attributes":{},"id":"1f2efb21-f07b-4bc6-b47c-8c88622d3331","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Mean( Mpg )","formatter":{"id":"1f2efb21-f07b-4bc6-b47c-8c88622d3331","type":"BasicTickFormatter"},"plot":{"id":"21faba43-bb97-4304-be9e-e1b14145e3b0","subtype":"Chart","type":"Plot"},"ticker":{"id":"ac416020-662f-4940-bfbb-17615da9cf48","type":"BasicTicker"}},"id":"631b911a-2bff-4cf7-aad6-5a08906283f5","type":"LinearAxis"}],"root_ids":["21faba43-bb97-4304-be9e-e1b14145e3b0"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"63e6035d-51d2-4208-8ec5-2f2f1267ec87","elementid":"0245e3f5-087f-4937-9026-14474910cdea","modelid":"21faba43-bb97-4304-be9e-e1b14145e3b0"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
