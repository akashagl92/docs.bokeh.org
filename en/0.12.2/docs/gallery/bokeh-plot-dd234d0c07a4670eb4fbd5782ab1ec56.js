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
      };var element = document.getElementById("2abe0c9e-5faa-47b2-8d80-fa620952e8bf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2abe0c9e-5faa-47b2-8d80-fa620952e8bf' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"6b0fa7ef-59b7-4c81-b7fe-2beb1ab65623":{"roots":{"references":[{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"a7717af5-3f25-4d18-9c8c-dec97567cfd2","type":"Circle"},{"attributes":{},"id":"2b56a9c4-c491-47aa-96f9-4fe8a15a5154","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"python","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[5.0],"interpreter":["python"],"label":[{"interpreter":"python","sample":"2nd"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["python:0.666666666667"],"y":[2.5]}},"id":"63197289-3ed8-430b-94b1-6a81b8f26f35","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"pypy","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[12.0],"interpreter":["pypy"],"label":[{"interpreter":"pypy","sample":"1st"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["pypy:0.333333333333"],"y":[6.0]}},"id":"4feff07f-d84d-43f6-8245-4fe9ebb5dfb0","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"jython","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[30.0],"interpreter":["jython"],"label":[{"interpreter":"jython","sample":"2nd"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["jython:0.666666666667"],"y":[15.0]}},"id":"a9e9b73d-4334-413b-9fcb-3070d6f2c947","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"372fe59b-767c-4896-a3db-3bfa95911668","type":"Circle"},{"attributes":{"data_source":{"id":"36bbffbb-81b8-4b47-a0bf-89d1ac5a6736","type":"ColumnDataSource"},"glyph":{"id":"a7717af5-3f25-4d18-9c8c-dec97567cfd2","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"efdaecd8-ffa6-4a95-b9e5-c48ba27c7366","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"9ddce609-3216-48a8-84d6-1f01993f216f","type":"BoxAnnotation"},"plot":{"id":"677e2756-506d-4ca4-8b36-d44b7d7ee3c3","subtype":"Chart","type":"Plot"}},"id":"b19681fe-951e-4012-bad1-ec1b01a78886","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"63197289-3ed8-430b-94b1-6a81b8f26f35","type":"ColumnDataSource"},"glyph":{"id":"49a75b79-0b92-4e55-a158-d7eae0937fcd","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"71d6b623-db36-475f-813b-3cf822aeaf9f","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"1e3e8306-7b6b-44dc-841b-22d07972d257","type":"Circle"},{"attributes":{"plot":{"id":"677e2756-506d-4ca4-8b36-d44b7d7ee3c3","subtype":"Chart","type":"Plot"}},"id":"7a7ef54f-39f7-40a4-8658-5f2976a21a95","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"34bb8c71-b6a8-41b2-b5bf-0c54d5df6f8f","type":"Circle"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"6e1318a9-6edb-4093-9662-c95955037e3b","type":"Circle"},{"attributes":{"data_source":{"id":"a9e9b73d-4334-413b-9fcb-3070d6f2c947","type":"ColumnDataSource"},"glyph":{"id":"1e3e8306-7b6b-44dc-841b-22d07972d257","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b6db9dee-6287-46a8-b4d2-0c284c720140","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"677e2756-506d-4ca4-8b36-d44b7d7ee3c3","subtype":"Chart","type":"Plot"}},"id":"107053f0-59eb-457d-8779-17ee050a66c7","type":"ResetTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"49a75b79-0b92-4e55-a158-d7eae0937fcd","type":"Circle"},{"attributes":{"below":[{"id":"c180059f-6a09-426d-946f-bcfe29ebc437","type":"CategoricalAxis"}],"height":400,"left":[{"id":"ba35c0b9-c362-4a08-9f54-6bd34fa5b04d","type":"LinearAxis"}],"renderers":[{"id":"9ddce609-3216-48a8-84d6-1f01993f216f","type":"BoxAnnotation"},{"id":"efdaecd8-ffa6-4a95-b9e5-c48ba27c7366","type":"GlyphRenderer"},{"id":"71d6b623-db36-475f-813b-3cf822aeaf9f","type":"GlyphRenderer"},{"id":"cb171dd7-f236-45e3-865b-015dc81f03d1","type":"GlyphRenderer"},{"id":"7151bf3e-337f-4092-a7d8-2d1146b3fdc4","type":"GlyphRenderer"},{"id":"a070fe3c-8fe4-489a-90c6-f8601f0a2f1d","type":"GlyphRenderer"},{"id":"b6db9dee-6287-46a8-b4d2-0c284c720140","type":"GlyphRenderer"},{"id":"c238a9eb-82b9-4569-897d-64047c335dde","type":"Legend"},{"id":"c180059f-6a09-426d-946f-bcfe29ebc437","type":"CategoricalAxis"},{"id":"ba35c0b9-c362-4a08-9f54-6bd34fa5b04d","type":"LinearAxis"},{"id":"22d1574f-fe07-4b30-bf01-ba72b57d26cc","type":"Grid"}],"title":{"id":"b9671bac-e81b-4767-b99f-ea12d077a6a4","type":"Title"},"tool_events":{"id":"efe0c4c9-2c79-454d-aa95-36255521a29d","type":"ToolEvents"},"toolbar":{"id":"2204c691-a42a-4e2b-976f-67f16ecc1adc","type":"Toolbar"},"width":600,"x_mapper_type":"auto","x_range":{"id":"83630bb3-8e99-4296-9dd9-58bb8c6cacdc","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"31b059a6-1cb9-4f11-ad96-1b0369749f62","type":"Range1d"}},"id":"677e2756-506d-4ca4-8b36-d44b7d7ee3c3","subtype":"Chart","type":"Plot"},{"attributes":{"plot":null,"text":"Python Interpreter Sampling"},"id":"b9671bac-e81b-4767-b99f-ea12d077a6a4","type":"Title"},{"attributes":{"data_source":{"id":"1577bf98-a6e1-4954-b809-2cf3eb8f7f9e","type":"ColumnDataSource"},"glyph":{"id":"34bb8c71-b6a8-41b2-b5bf-0c54d5df6f8f","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a070fe3c-8fe4-489a-90c6-f8601f0a2f1d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"python","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[-2.0],"interpreter":["python"],"label":[{"interpreter":"python","sample":"1st"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["python:0.333333333333"],"y":[-1.0]}},"id":"36bbffbb-81b8-4b47-a0bf-89d1ac5a6736","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"jython","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[22.0],"interpreter":["jython"],"label":[{"interpreter":"jython","sample":"1st"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["jython:0.333333333333"],"y":[11.0]}},"id":"1577bf98-a6e1-4954-b809-2cf3eb8f7f9e","type":"ColumnDataSource"},{"attributes":{"axis_label":"Mean( Timing )","formatter":{"id":"ffbb0bfb-72e6-4f00-a8df-d0990efcc636","type":"BasicTickFormatter"},"plot":{"id":"677e2756-506d-4ca4-8b36-d44b7d7ee3c3","subtype":"Chart","type":"Plot"},"ticker":{"id":"2b56a9c4-c491-47aa-96f9-4fe8a15a5154","type":"BasicTicker"}},"id":"ba35c0b9-c362-4a08-9f54-6bd34fa5b04d","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9ddce609-3216-48a8-84d6-1f01993f216f","type":"BoxAnnotation"},{"attributes":{"axis_label":"Interpreter","formatter":{"id":"c7091458-3353-4383-944f-bdf8a74a6c58","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"677e2756-506d-4ca4-8b36-d44b7d7ee3c3","subtype":"Chart","type":"Plot"},"ticker":{"id":"7304f473-2196-4c5b-a2e6-0d53621e3ce9","type":"CategoricalTicker"}},"id":"c180059f-6a09-426d-946f-bcfe29ebc437","type":"CategoricalAxis"},{"attributes":{},"id":"efe0c4c9-2c79-454d-aa95-36255521a29d","type":"ToolEvents"},{"attributes":{"legends":[["1st",[{"id":"efdaecd8-ffa6-4a95-b9e5-c48ba27c7366","type":"GlyphRenderer"}]],["2nd",[{"id":"71d6b623-db36-475f-813b-3cf822aeaf9f","type":"GlyphRenderer"}]]],"plot":{"id":"677e2756-506d-4ca4-8b36-d44b7d7ee3c3","subtype":"Chart","type":"Plot"}},"id":"c238a9eb-82b9-4569-897d-64047c335dde","type":"Legend"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"pypy","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[40.0],"interpreter":["pypy"],"label":[{"interpreter":"pypy","sample":"2nd"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["pypy:0.666666666667"],"y":[20.0]}},"id":"2fab74a7-1f8a-4e4f-83a5-9ffc4db4be69","type":"ColumnDataSource"},{"attributes":{},"id":"c7091458-3353-4383-944f-bdf8a74a6c58","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"677e2756-506d-4ca4-8b36-d44b7d7ee3c3","subtype":"Chart","type":"Plot"}},"id":"37d48460-7518-44ed-a5df-29e253adbeee","type":"HelpTool"},{"attributes":{},"id":"ffbb0bfb-72e6-4f00-a8df-d0990efcc636","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f86600e6-7df6-4693-91ec-8b35e7050aac","type":"PanTool"},{"id":"7a7ef54f-39f7-40a4-8658-5f2976a21a95","type":"WheelZoomTool"},{"id":"b19681fe-951e-4012-bad1-ec1b01a78886","type":"BoxZoomTool"},{"id":"34cd14f2-dbb4-479d-a5b4-0aa1d2d573ab","type":"SaveTool"},{"id":"107053f0-59eb-457d-8779-17ee050a66c7","type":"ResetTool"},{"id":"37d48460-7518-44ed-a5df-29e253adbeee","type":"HelpTool"}]},"id":"2204c691-a42a-4e2b-976f-67f16ecc1adc","type":"Toolbar"},{"attributes":{"callback":null,"factors":["jython","pypy","python"]},"id":"83630bb3-8e99-4296-9dd9-58bb8c6cacdc","type":"FactorRange"},{"attributes":{"data_source":{"id":"2fab74a7-1f8a-4e4f-83a5-9ffc4db4be69","type":"ColumnDataSource"},"glyph":{"id":"372fe59b-767c-4896-a3db-3bfa95911668","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7151bf3e-337f-4092-a7d8-2d1146b3fdc4","type":"GlyphRenderer"},{"attributes":{},"id":"7304f473-2196-4c5b-a2e6-0d53621e3ce9","type":"CategoricalTicker"},{"attributes":{"dimension":1,"plot":{"id":"677e2756-506d-4ca4-8b36-d44b7d7ee3c3","subtype":"Chart","type":"Plot"},"ticker":{"id":"2b56a9c4-c491-47aa-96f9-4fe8a15a5154","type":"BasicTicker"}},"id":"22d1574f-fe07-4b30-bf01-ba72b57d26cc","type":"Grid"},{"attributes":{"data_source":{"id":"4feff07f-d84d-43f6-8245-4fe9ebb5dfb0","type":"ColumnDataSource"},"glyph":{"id":"6e1318a9-6edb-4093-9662-c95955037e3b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cb171dd7-f236-45e3-865b-015dc81f03d1","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"677e2756-506d-4ca4-8b36-d44b7d7ee3c3","subtype":"Chart","type":"Plot"}},"id":"34cd14f2-dbb4-479d-a5b4-0aa1d2d573ab","type":"SaveTool"},{"attributes":{"plot":{"id":"677e2756-506d-4ca4-8b36-d44b7d7ee3c3","subtype":"Chart","type":"Plot"}},"id":"f86600e6-7df6-4693-91ec-8b35e7050aac","type":"PanTool"},{"attributes":{"callback":null,"end":41.9,"start":-3.9000000000000004},"id":"31b059a6-1cb9-4f11-ad96-1b0369749f62","type":"Range1d"}],"root_ids":["677e2756-506d-4ca4-8b36-d44b7d7ee3c3"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"6b0fa7ef-59b7-4c81-b7fe-2beb1ab65623","elementid":"2abe0c9e-5faa-47b2-8d80-fa620952e8bf","modelid":"677e2756-506d-4ca4-8b36-d44b7d7ee3c3"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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