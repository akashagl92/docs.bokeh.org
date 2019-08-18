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
      };var element = document.getElementById("036d5d4f-7c1f-48ed-89f5-8a680fb97b33");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '036d5d4f-7c1f-48ed-89f5-8a680fb97b33' but no matching script tag was found. ")
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
                var docs_json = {"fbe4d800-eeeb-4451-a45b-51c9c94e6346":{"roots":{"references":[{"attributes":{"data_source":{"id":"315036f0-21e4-4268-a39a-b6d80b5a90a9","type":"ColumnDataSource"},"glyph":{"id":"8d2ff076-6f35-45d1-bd8e-b8ed7b464f0c","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"344c0dda-1345-46e8-9489-b639b104c912","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"yr":82}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[32.0],"label":[{"yr":82}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["82"],"y":[16.0],"yr":[82]}},"id":"f1bf8080-f85f-406f-ac13-171f516c949c","type":"ColumnDataSource"},{"attributes":{"label":{"value":"79"},"renderers":[{"id":"344c0dda-1345-46e8-9489-b639b104c912","type":"GlyphRenderer"}]},"id":"441b5820-cdf0-468a-b57d-9001bc623497","type":"LegendItem"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dd890787-e931-4e43-bef9-0d0bf485df6d","type":"Rect"},{"attributes":{"plot":null,"text":"Average MPG by YR"},"id":"9f587953-240c-4d2e-b02d-54f25fbae3e2","type":"Title"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c383818d-f9ca-402c-9f0e-f0dbda7f7776","type":"Rect"},{"attributes":{"overlay":{"id":"54e62f5f-d83a-4d0a-b7fe-e6de850787b2","type":"BoxAnnotation"},"plot":{"id":"6f19b909-ee3e-4ae7-8bcf-9fb70cabeeac","subtype":"Chart","type":"Plot"}},"id":"5ff71624-9f4c-4f7b-9eae-ac4c267dbfb8","type":"BoxZoomTool"},{"attributes":{"items":[{"id":"856e4dc4-db67-40ef-87e5-9190e47f8553","type":"LegendItem"},{"id":"e217e418-5d4e-4c89-973f-118ebfcb8914","type":"LegendItem"},{"id":"3b69b8db-ce18-4abe-a43b-608030282641","type":"LegendItem"},{"id":"2443705e-0c04-4310-a6f5-20dbd0f5ee0d","type":"LegendItem"},{"id":"7b77a736-db09-4086-a38d-795dcd33b0ed","type":"LegendItem"},{"id":"a596ceef-8f46-4cef-820c-6bb499911dba","type":"LegendItem"},{"id":"810707c1-1c8c-47a2-84c9-5f2fa1b16e83","type":"LegendItem"},{"id":"fc69190e-bc4e-473f-890b-0abbf9b72bfa","type":"LegendItem"},{"id":"45ae75a5-2cc6-472c-9dac-904ebc1bd95b","type":"LegendItem"},{"id":"441b5820-cdf0-468a-b57d-9001bc623497","type":"LegendItem"},{"id":"0dfbb04b-5dcd-4247-82b9-a6b4af59b29e","type":"LegendItem"},{"id":"e09e1a91-4791-4fbc-9325-2ced2eff0ecd","type":"LegendItem"},{"id":"3fdf0594-b5df-4b86-8a8d-f5dacc0e0ec6","type":"LegendItem"}],"location":"top_left","plot":{"id":"6f19b909-ee3e-4ae7-8bcf-9fb70cabeeac","subtype":"Chart","type":"Plot"}},"id":"f1351a6d-9070-4da9-979f-e0d9a5740a79","type":"Legend"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"749af328-f591-44da-bb8b-0ec88f3e8df5","type":"Rect"},{"attributes":{"axis_label":"Yr","formatter":{"id":"7a56823f-f5f6-422a-ae73-d08cdc2d0de6","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"6f19b909-ee3e-4ae7-8bcf-9fb70cabeeac","subtype":"Chart","type":"Plot"},"ticker":{"id":"3429f8ab-41bb-4fa0-8c2b-b904253771c9","type":"CategoricalTicker"}},"id":"dac164e3-8d2e-4b5c-9952-59c05a1e3670","type":"CategoricalAxis"},{"attributes":{"below":[{"id":"dac164e3-8d2e-4b5c-9952-59c05a1e3670","type":"CategoricalAxis"}],"css_classes":null,"left":[{"id":"35450c0c-c1dd-4f02-bbb4-8b185a3eb6c0","type":"LinearAxis"}],"renderers":[{"id":"54e62f5f-d83a-4d0a-b7fe-e6de850787b2","type":"BoxAnnotation"},{"id":"584f6bd0-34b9-4be1-a4cf-f4d332ce9fba","type":"GlyphRenderer"},{"id":"05b10730-3a5e-46fb-8680-f879fde16e17","type":"GlyphRenderer"},{"id":"5657fe53-f10b-4c23-bc90-89270501e642","type":"GlyphRenderer"},{"id":"05daa4cc-b698-48e2-b9bc-0c76c7e11e72","type":"GlyphRenderer"},{"id":"f5ab018c-3b30-4146-b63b-d2045238f913","type":"GlyphRenderer"},{"id":"a45d3b58-9eb0-4cac-8361-0a3e5c26d992","type":"GlyphRenderer"},{"id":"50aeb901-9d9e-4310-a7be-fb616d4da103","type":"GlyphRenderer"},{"id":"4d3e8a1b-95d0-40f2-b956-27cbb48df211","type":"GlyphRenderer"},{"id":"6a0fb12d-0449-4f33-b9ca-739a3e3b4fe8","type":"GlyphRenderer"},{"id":"344c0dda-1345-46e8-9489-b639b104c912","type":"GlyphRenderer"},{"id":"8c4c0e5d-8f24-48d5-8d5c-52416eff9e21","type":"GlyphRenderer"},{"id":"7713864f-1a5d-4f64-9844-860d7336a5a1","type":"GlyphRenderer"},{"id":"d4c5db0c-c20f-49c3-9a4b-fd622a876323","type":"GlyphRenderer"},{"id":"f1351a6d-9070-4da9-979f-e0d9a5740a79","type":"Legend"},{"id":"dac164e3-8d2e-4b5c-9952-59c05a1e3670","type":"CategoricalAxis"},{"id":"35450c0c-c1dd-4f02-bbb4-8b185a3eb6c0","type":"LinearAxis"},{"id":"a231fe78-7f22-4f8e-bbc5-529d78c2f5d1","type":"Grid"}],"title":{"id":"9f587953-240c-4d2e-b02d-54f25fbae3e2","type":"Title"},"tool_events":{"id":"b4cbfb0c-b202-401b-9a09-43d655972f2e","type":"ToolEvents"},"toolbar":{"id":"23522708-d714-457e-806f-a0862bf21597","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"d51a16fd-8449-474c-b510-16bcd6da5cb7","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"8e9e45a6-b59c-4e34-8f8d-72cbb950cd0e","type":"Range1d"}},"id":"6f19b909-ee3e-4ae7-8bcf-9fb70cabeeac","subtype":"Chart","type":"Plot"},{"attributes":{"label":{"value":"74"},"renderers":[{"id":"f5ab018c-3b30-4146-b63b-d2045238f913","type":"GlyphRenderer"}]},"id":"7b77a736-db09-4086-a38d-795dcd33b0ed","type":"LegendItem"},{"attributes":{"plot":{"id":"6f19b909-ee3e-4ae7-8bcf-9fb70cabeeac","subtype":"Chart","type":"Plot"}},"id":"92083f47-3b19-4407-be73-6129adecaaec","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"6f19b909-ee3e-4ae7-8bcf-9fb70cabeeac","subtype":"Chart","type":"Plot"}},"id":"f4fc22b4-5a64-402d-ae2c-dd78d7587798","type":"ResetTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4c577323-544f-465d-bccd-ec8acc2c5b24","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0a1fdf82-801f-440a-bf0e-555153202fa5","type":"PanTool"},{"id":"92083f47-3b19-4407-be73-6129adecaaec","type":"WheelZoomTool"},{"id":"5ff71624-9f4c-4f7b-9eae-ac4c267dbfb8","type":"BoxZoomTool"},{"id":"0f2ace31-b059-42ce-b973-fbb9233eaa6f","type":"SaveTool"},{"id":"f4fc22b4-5a64-402d-ae2c-dd78d7587798","type":"ResetTool"},{"id":"cc6876cc-8a88-4850-baae-3c044c2060a6","type":"HelpTool"}]},"id":"23522708-d714-457e-806f-a0862bf21597","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"yr":71}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[21.11111111111111],"label":[{"yr":71}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["71"],"y":[10.555555555555555],"yr":[71]}},"id":"db66c1f1-4697-4ecc-b7ed-4c9590c3cc56","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"yr":81}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[30.18571428571429],"label":[{"yr":81}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["81"],"y":[15.092857142857145],"yr":[81]}},"id":"5d5ef19e-12ca-4455-8a77-ecc7b96a03ea","type":"ColumnDataSource"},{"attributes":{"label":{"value":"72"},"renderers":[{"id":"5657fe53-f10b-4c23-bc90-89270501e642","type":"GlyphRenderer"}]},"id":"3b69b8db-ce18-4abe-a43b-608030282641","type":"LegendItem"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"51a15f7e-963d-4b6f-9151-38a9e7f685f9","type":"Rect"},{"attributes":{"data_source":{"id":"d5028fa7-74bd-4388-b362-7c249bc9674f","type":"ColumnDataSource"},"glyph":{"id":"8a7c20be-f369-4ce1-a48f-ea901f584406","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"a45d3b58-9eb0-4cac-8361-0a3e5c26d992","type":"GlyphRenderer"},{"attributes":{"axis_label":"Mean( Mpg )","formatter":{"id":"525cc6e0-5d5f-4d3c-8e00-04d58888d413","type":"BasicTickFormatter"},"plot":{"id":"6f19b909-ee3e-4ae7-8bcf-9fb70cabeeac","subtype":"Chart","type":"Plot"},"ticker":{"id":"5545d500-f1ca-4943-8ede-65d6254f422d","type":"BasicTicker"}},"id":"35450c0c-c1dd-4f02-bbb4-8b185a3eb6c0","type":"LinearAxis"},{"attributes":{"label":{"value":"73"},"renderers":[{"id":"05daa4cc-b698-48e2-b9bc-0c76c7e11e72","type":"GlyphRenderer"}]},"id":"2443705e-0c04-4310-a6f5-20dbd0f5ee0d","type":"LegendItem"},{"attributes":{"label":{"value":"81"},"renderers":[{"id":"7713864f-1a5d-4f64-9844-860d7336a5a1","type":"GlyphRenderer"}]},"id":"e09e1a91-4791-4fbc-9325-2ced2eff0ecd","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"yr":78}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[24.061111111111114],"label":[{"yr":78}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["78"],"y":[12.030555555555557],"yr":[78]}},"id":"2da7f52b-af65-409e-a78e-6a719461d078","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"299306e3-2299-4f00-a24d-ee670a1f33d0","type":"ColumnDataSource"},"glyph":{"id":"c383818d-f9ca-402c-9f0e-f0dbda7f7776","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"8c4c0e5d-8f24-48d5-8d5c-52416eff9e21","type":"GlyphRenderer"},{"attributes":{"label":{"value":"82"},"renderers":[{"id":"d4c5db0c-c20f-49c3-9a4b-fd622a876323","type":"GlyphRenderer"}]},"id":"3fdf0594-b5df-4b86-8a8d-f5dacc0e0ec6","type":"LegendItem"},{"attributes":{"data_source":{"id":"4510fe37-31ed-466f-bb27-5642c1f92719","type":"ColumnDataSource"},"glyph":{"id":"4fc75f1b-7933-463c-bfb6-103802512720","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"584f6bd0-34b9-4be1-a4cf-f4d332ce9fba","type":"GlyphRenderer"},{"attributes":{"label":{"value":"70"},"renderers":[{"id":"584f6bd0-34b9-4be1-a4cf-f4d332ce9fba","type":"GlyphRenderer"}]},"id":"856e4dc4-db67-40ef-87e5-9190e47f8553","type":"LegendItem"},{"attributes":{"label":{"value":"71"},"renderers":[{"id":"05b10730-3a5e-46fb-8680-f879fde16e17","type":"GlyphRenderer"}]},"id":"e217e418-5d4e-4c89-973f-118ebfcb8914","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"yr":73}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[17.1],"label":[{"yr":73}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["73"],"y":[8.55],"yr":[73]}},"id":"5a25ce07-20f1-4a4b-90e3-ad06487ba886","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"db66c1f1-4697-4ecc-b7ed-4c9590c3cc56","type":"ColumnDataSource"},"glyph":{"id":"51a15f7e-963d-4b6f-9151-38a9e7f685f9","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"05b10730-3a5e-46fb-8680-f879fde16e17","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2da7f52b-af65-409e-a78e-6a719461d078","type":"ColumnDataSource"},"glyph":{"id":"4c577323-544f-465d-bccd-ec8acc2c5b24","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"6a0fb12d-0449-4f33-b9ca-739a3e3b4fe8","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b6af5653-c477-4600-a501-2bed833c4e58","type":"Rect"},{"attributes":{"data_source":{"id":"f1bf8080-f85f-406f-ac13-171f516c949c","type":"ColumnDataSource"},"glyph":{"id":"da7e8a89-5d96-46b3-a0a7-26fe1e4ed732","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"d4c5db0c-c20f-49c3-9a4b-fd622a876323","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"yr":70}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[17.689655172413794],"label":[{"yr":70}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["70"],"y":[8.844827586206897],"yr":[70]}},"id":"4510fe37-31ed-466f-bb27-5642c1f92719","type":"ColumnDataSource"},{"attributes":{"label":{"value":"77"},"renderers":[{"id":"4d3e8a1b-95d0-40f2-b956-27cbb48df211","type":"GlyphRenderer"}]},"id":"fc69190e-bc4e-473f-890b-0abbf9b72bfa","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"yr":80}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[33.803703703703704],"label":[{"yr":80}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["80"],"y":[16.901851851851852],"yr":[80]}},"id":"299306e3-2299-4f00-a24d-ee670a1f33d0","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"yr":74}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[22.76923076923077],"label":[{"yr":74}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["74"],"y":[11.384615384615385],"yr":[74]}},"id":"edaf0358-0d07-4f7a-bdca-1e5e21be8bc5","type":"ColumnDataSource"},{"attributes":{},"id":"5545d500-f1ca-4943-8ede-65d6254f422d","type":"BasicTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4fc75f1b-7933-463c-bfb6-103802512720","type":"Rect"},{"attributes":{"plot":{"id":"6f19b909-ee3e-4ae7-8bcf-9fb70cabeeac","subtype":"Chart","type":"Plot"}},"id":"0f2ace31-b059-42ce-b973-fbb9233eaa6f","type":"SaveTool"},{"attributes":{},"id":"b4cbfb0c-b202-401b-9a09-43d655972f2e","type":"ToolEvents"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9175a1d9-f466-46c6-9f92-1071779d6a4b","type":"Rect"},{"attributes":{"dimension":1,"plot":{"id":"6f19b909-ee3e-4ae7-8bcf-9fb70cabeeac","subtype":"Chart","type":"Plot"},"ticker":{"id":"5545d500-f1ca-4943-8ede-65d6254f422d","type":"BasicTicker"}},"id":"a231fe78-7f22-4f8e-bbc5-529d78c2f5d1","type":"Grid"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"921dff1f-f46d-46ba-91cb-996514e60ff4","type":"Rect"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"yr":79}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[25.09310344827585],"label":[{"yr":79}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["79"],"y":[12.546551724137926],"yr":[79]}},"id":"315036f0-21e4-4268-a39a-b6d80b5a90a9","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"276be256-f346-4469-b337-9b0c5a7a1cb8","type":"ColumnDataSource"},"glyph":{"id":"921dff1f-f46d-46ba-91cb-996514e60ff4","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"5657fe53-f10b-4c23-bc90-89270501e642","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"yr":77}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[23.375],"label":[{"yr":77}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["77"],"y":[11.6875],"yr":[77]}},"id":"ed46c6fa-9f02-4b31-9baa-4aa29b5b217a","type":"ColumnDataSource"},{"attributes":{"label":{"value":"80"},"renderers":[{"id":"8c4c0e5d-8f24-48d5-8d5c-52416eff9e21","type":"GlyphRenderer"}]},"id":"0dfbb04b-5dcd-4247-82b9-a6b4af59b29e","type":"LegendItem"},{"attributes":{"label":{"value":"75"},"renderers":[{"id":"a45d3b58-9eb0-4cac-8361-0a3e5c26d992","type":"GlyphRenderer"}]},"id":"a596ceef-8f46-4cef-820c-6bb499911dba","type":"LegendItem"},{"attributes":{"data_source":{"id":"5d5ef19e-12ca-4455-8a77-ecc7b96a03ea","type":"ColumnDataSource"},"glyph":{"id":"329b8c3a-683b-444b-9f1b-5e111cffb76f","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"7713864f-1a5d-4f64-9844-860d7336a5a1","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"54e62f5f-d83a-4d0a-b7fe-e6de850787b2","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"da7e8a89-5d96-46b3-a0a7-26fe1e4ed732","type":"Rect"},{"attributes":{"label":{"value":"76"},"renderers":[{"id":"50aeb901-9d9e-4310-a7be-fb616d4da103","type":"GlyphRenderer"}]},"id":"810707c1-1c8c-47a2-84c9-5f2fa1b16e83","type":"LegendItem"},{"attributes":{"data_source":{"id":"edaf0358-0d07-4f7a-bdca-1e5e21be8bc5","type":"ColumnDataSource"},"glyph":{"id":"9175a1d9-f466-46c6-9f92-1071779d6a4b","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"f5ab018c-3b30-4146-b63b-d2045238f913","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8a7c20be-f369-4ce1-a48f-ea901f584406","type":"Rect"},{"attributes":{},"id":"7a56823f-f5f6-422a-ae73-d08cdc2d0de6","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"5a25ce07-20f1-4a4b-90e3-ad06487ba886","type":"ColumnDataSource"},"glyph":{"id":"749af328-f591-44da-bb8b-0ec88f3e8df5","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"05daa4cc-b698-48e2-b9bc-0c76c7e11e72","type":"GlyphRenderer"},{"attributes":{"label":{"value":"78"},"renderers":[{"id":"6a0fb12d-0449-4f33-b9ca-739a3e3b4fe8","type":"GlyphRenderer"}]},"id":"45ae75a5-2cc6-472c-9dac-904ebc1bd95b","type":"LegendItem"},{"attributes":{},"id":"3429f8ab-41bb-4fa0-8c2b-b904253771c9","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"6f19b909-ee3e-4ae7-8bcf-9fb70cabeeac","subtype":"Chart","type":"Plot"}},"id":"0a1fdf82-801f-440a-bf0e-555153202fa5","type":"PanTool"},{"attributes":{},"id":"525cc6e0-5d5f-4d3c-8e00-04d58888d413","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"yr":75}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[20.266666666666666],"label":[{"yr":75}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["75"],"y":[10.133333333333333],"yr":[75]}},"id":"d5028fa7-74bd-4388-b362-7c249bc9674f","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"329b8c3a-683b-444b-9f1b-5e111cffb76f","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8d2ff076-6f35-45d1-bd8e-b8ed7b464f0c","type":"Rect"},{"attributes":{"plot":{"id":"6f19b909-ee3e-4ae7-8bcf-9fb70cabeeac","subtype":"Chart","type":"Plot"}},"id":"cc6876cc-8a88-4850-baae-3c044c2060a6","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"yr":72}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[18.714285714285715],"label":[{"yr":72}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["72"],"y":[9.357142857142858],"yr":[72]}},"id":"276be256-f346-4469-b337-9b0c5a7a1cb8","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b858c2ca-d173-4f4f-ab41-1cdf65835ed2","type":"ColumnDataSource"},"glyph":{"id":"dd890787-e931-4e43-bef9-0d0bf485df6d","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"50aeb901-9d9e-4310-a7be-fb616d4da103","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["width","line_color","color","height","x","y","label","line_alpha","fill_alpha"],"data":{"chart_index":[{"yr":76}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[21.573529411764707],"label":[{"yr":76}],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["76"],"y":[10.786764705882353],"yr":[76]}},"id":"b858c2ca-d173-4f4f-ab41-1cdf65835ed2","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["70","71","72","73","74","75","76","77","78","79","80","81","82"]},"id":"d51a16fd-8449-474c-b510-16bcd6da5cb7","type":"FactorRange"},{"attributes":{"data_source":{"id":"ed46c6fa-9f02-4b31-9baa-4aa29b5b217a","type":"ColumnDataSource"},"glyph":{"id":"b6af5653-c477-4600-a501-2bed833c4e58","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"4d3e8a1b-95d0-40f2-b956-27cbb48df211","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":35.49388888888889},"id":"8e9e45a6-b59c-4e34-8f8d-72cbb950cd0e","type":"Range1d"}],"root_ids":["6f19b909-ee3e-4ae7-8bcf-9fb70cabeeac"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"fbe4d800-eeeb-4451-a45b-51c9c94e6346","elementid":"036d5d4f-7c1f-48ed-89f5-8a680fb97b33","modelid":"6f19b909-ee3e-4ae7-8bcf-9fb70cabeeac"}];
                
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
