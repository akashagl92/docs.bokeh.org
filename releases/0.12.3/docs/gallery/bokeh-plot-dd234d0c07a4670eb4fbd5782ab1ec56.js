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
      };var element = document.getElementById("5a8c8ed9-ac99-4abb-8717-a3dcf5f9a187");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5a8c8ed9-ac99-4abb-8717-a3dcf5f9a187' but no matching script tag was found. ")
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
                  var docs_json = {"7554f10c-639f-4020-9f89-53fadcb1ff59":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"python","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[-2.0],"interpreter":["python"],"label":[{"interpreter":"python","sample":"1st"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["python:0.333333333333"],"y":[-1.0]}},"id":"e5b4857a-c598-4cee-a5f7-237f419269ff","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"jython","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[30.0],"interpreter":["jython"],"label":[{"interpreter":"jython","sample":"2nd"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["jython:0.666666666667"],"y":[15.0]}},"id":"17cf5950-92c3-4c86-9cb3-a3ebe0563b3e","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"pypy","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[40.0],"interpreter":["pypy"],"label":[{"interpreter":"pypy","sample":"2nd"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["pypy:0.666666666667"],"y":[20.0]}},"id":"0830fa93-3e58-48f6-8a28-7517ddbe5b17","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"fe4c8a1c-51f6-4d8c-875a-aac59ebc220c","type":"Circle"},{"attributes":{"plot":{"id":"2d258b85-59da-45d8-85f9-4a0bf06a2f34","subtype":"Chart","type":"Plot"}},"id":"7091f6c2-441f-43b9-838d-4756bd1f4446","type":"ResetTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"b0ccdd34-5e1d-4254-aa1a-4d4f1b69d24f","type":"Circle"},{"attributes":{"plot":null,"text":"Python Interpreter Sampling"},"id":"dbde3bd6-3e0d-4c3c-a0ab-9c5f8c9392e9","type":"Title"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"fcd6f57c-d52d-4ccc-907e-fda903c41c95","type":"Circle"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"7e86727c-525c-497a-b334-a5fbf4cbb3da","type":"Circle"},{"attributes":{"data_source":{"id":"0830fa93-3e58-48f6-8a28-7517ddbe5b17","type":"ColumnDataSource"},"glyph":{"id":"fcd6f57c-d52d-4ccc-907e-fda903c41c95","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e9085a5f-8f53-4606-b221-7aaee89eee33","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"e1952234-1003-42e9-83bf-6dfe13d0fe2e","type":"Circle"},{"attributes":{},"id":"76bf8134-023d-4d2c-91b7-6572b0a24e5c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"python","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[5.0],"interpreter":["python"],"label":[{"interpreter":"python","sample":"2nd"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["python:0.666666666667"],"y":[2.5]}},"id":"943a3759-ec58-4c5f-a7a4-ec5dee800b40","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"df87caed-ceda-443d-9ec1-0ab47cffb97a","type":"ColumnDataSource"},"glyph":{"id":"fe4c8a1c-51f6-4d8c-875a-aac59ebc220c","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4c4e115d-1d15-47ef-a7c8-fe4eb84f544b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"2d258b85-59da-45d8-85f9-4a0bf06a2f34","subtype":"Chart","type":"Plot"}},"id":"a1e20532-02cb-45b5-8d17-9347f628b35b","type":"PanTool"},{"attributes":{"label":{"value":"1st"},"renderers":[{"id":"0ee21b76-5fab-49bd-a202-f6146802c9d0","type":"GlyphRenderer"}]},"id":"f23fbb09-2291-464a-b71e-204117abc3c5","type":"LegendItem"},{"attributes":{"axis_label":"Interpreter","formatter":{"id":"ac7c6bb1-61bf-48e8-b6c8-b54a71666a74","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"2d258b85-59da-45d8-85f9-4a0bf06a2f34","subtype":"Chart","type":"Plot"},"ticker":{"id":"320ca9fb-dbb1-4d0f-9c1d-2c7abc461344","type":"CategoricalTicker"}},"id":"546cbb82-2568-447d-88fd-487d88260263","type":"CategoricalAxis"},{"attributes":{"callback":null,"factors":["jython","pypy","python"]},"id":"464e67df-6326-4e30-bafc-834c3734d88f","type":"FactorRange"},{"attributes":{},"id":"f0d76ba6-384a-405b-9812-cb635e61baad","type":"BasicTicker"},{"attributes":{"items":[{"id":"f23fbb09-2291-464a-b71e-204117abc3c5","type":"LegendItem"},{"id":"3cc5dc5e-9351-41d1-afc4-17114096b6f7","type":"LegendItem"}],"plot":{"id":"2d258b85-59da-45d8-85f9-4a0bf06a2f34","subtype":"Chart","type":"Plot"}},"id":"f96a7e8d-2879-45b6-8693-f2d5459cd3f5","type":"Legend"},{"attributes":{"callback":null,"end":41.9,"start":-3.9000000000000004},"id":"36d8746d-0e94-4cfc-89ec-3f85093fd265","type":"Range1d"},{"attributes":{},"id":"320ca9fb-dbb1-4d0f-9c1d-2c7abc461344","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"2d258b85-59da-45d8-85f9-4a0bf06a2f34","subtype":"Chart","type":"Plot"}},"id":"fc662aa9-26f1-467f-845e-1fbb01838624","type":"HelpTool"},{"attributes":{"data_source":{"id":"e5b4857a-c598-4cee-a5f7-237f419269ff","type":"ColumnDataSource"},"glyph":{"id":"7e86727c-525c-497a-b334-a5fbf4cbb3da","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0ee21b76-5fab-49bd-a202-f6146802c9d0","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a1e20532-02cb-45b5-8d17-9347f628b35b","type":"PanTool"},{"id":"d4247a4c-a8ce-42ca-827e-f8736fbeefa8","type":"WheelZoomTool"},{"id":"132adf06-f6f6-4291-9511-608c8c6cd0d4","type":"BoxZoomTool"},{"id":"4c437390-414b-43e8-8d53-122ab224e4c1","type":"SaveTool"},{"id":"7091f6c2-441f-43b9-838d-4756bd1f4446","type":"ResetTool"},{"id":"fc662aa9-26f1-467f-845e-1fbb01838624","type":"HelpTool"}]},"id":"f6de9e15-673b-4ef3-9072-6eb990327ba2","type":"Toolbar"},{"attributes":{"label":{"value":"2nd"},"renderers":[{"id":"8da48a6a-d678-494e-8da9-d1443aef49cf","type":"GlyphRenderer"}]},"id":"3cc5dc5e-9351-41d1-afc4-17114096b6f7","type":"LegendItem"},{"attributes":{"plot":{"id":"2d258b85-59da-45d8-85f9-4a0bf06a2f34","subtype":"Chart","type":"Plot"}},"id":"d4247a4c-a8ce-42ca-827e-f8736fbeefa8","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"2d258b85-59da-45d8-85f9-4a0bf06a2f34","subtype":"Chart","type":"Plot"},"ticker":{"id":"f0d76ba6-384a-405b-9812-cb635e61baad","type":"BasicTicker"}},"id":"12bd29bc-d0ad-467b-ba02-e17468e8f163","type":"Grid"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"jython","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[22.0],"interpreter":["jython"],"label":[{"interpreter":"jython","sample":"1st"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["jython:0.333333333333"],"y":[11.0]}},"id":"df87caed-ceda-443d-9ec1-0ab47cffb97a","type":"ColumnDataSource"},{"attributes":{},"id":"ac7c6bb1-61bf-48e8-b6c8-b54a71666a74","type":"CategoricalTickFormatter"},{"attributes":{"axis_label":"Mean( Timing )","formatter":{"id":"76bf8134-023d-4d2c-91b7-6572b0a24e5c","type":"BasicTickFormatter"},"plot":{"id":"2d258b85-59da-45d8-85f9-4a0bf06a2f34","subtype":"Chart","type":"Plot"},"ticker":{"id":"f0d76ba6-384a-405b-9812-cb635e61baad","type":"BasicTicker"}},"id":"f2a13f12-86fb-4cbf-bcfe-01614b5e3585","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2cfbbbe8-286c-4397-b7fa-bd64a6ae38a5","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"17cf5950-92c3-4c86-9cb3-a3ebe0563b3e","type":"ColumnDataSource"},"glyph":{"id":"b0ccdd34-5e1d-4254-aa1a-4d4f1b69d24f","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5f52d813-1f90-4d54-a5b1-ca957b8cb22e","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"2cfbbbe8-286c-4397-b7fa-bd64a6ae38a5","type":"BoxAnnotation"},"plot":{"id":"2d258b85-59da-45d8-85f9-4a0bf06a2f34","subtype":"Chart","type":"Plot"}},"id":"132adf06-f6f6-4291-9511-608c8c6cd0d4","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"ba73a119-2d20-4a51-9dd9-659f4edf6c2a","type":"ColumnDataSource"},"glyph":{"id":"a1c6dbf5-f2c3-419c-8433-d19316871207","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1a1788c3-7415-4561-86cc-6760fb313d6b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"2d258b85-59da-45d8-85f9-4a0bf06a2f34","subtype":"Chart","type":"Plot"}},"id":"4c437390-414b-43e8-8d53-122ab224e4c1","type":"SaveTool"},{"attributes":{},"id":"53c8418b-b5d1-4397-af41-af688fa833ee","type":"ToolEvents"},{"attributes":{"below":[{"id":"546cbb82-2568-447d-88fd-487d88260263","type":"CategoricalAxis"}],"height":400,"left":[{"id":"f2a13f12-86fb-4cbf-bcfe-01614b5e3585","type":"LinearAxis"}],"renderers":[{"id":"2cfbbbe8-286c-4397-b7fa-bd64a6ae38a5","type":"BoxAnnotation"},{"id":"0ee21b76-5fab-49bd-a202-f6146802c9d0","type":"GlyphRenderer"},{"id":"8da48a6a-d678-494e-8da9-d1443aef49cf","type":"GlyphRenderer"},{"id":"1a1788c3-7415-4561-86cc-6760fb313d6b","type":"GlyphRenderer"},{"id":"e9085a5f-8f53-4606-b221-7aaee89eee33","type":"GlyphRenderer"},{"id":"4c4e115d-1d15-47ef-a7c8-fe4eb84f544b","type":"GlyphRenderer"},{"id":"5f52d813-1f90-4d54-a5b1-ca957b8cb22e","type":"GlyphRenderer"},{"id":"f96a7e8d-2879-45b6-8693-f2d5459cd3f5","type":"Legend"},{"id":"546cbb82-2568-447d-88fd-487d88260263","type":"CategoricalAxis"},{"id":"f2a13f12-86fb-4cbf-bcfe-01614b5e3585","type":"LinearAxis"},{"id":"12bd29bc-d0ad-467b-ba02-e17468e8f163","type":"Grid"}],"title":{"id":"dbde3bd6-3e0d-4c3c-a0ab-9c5f8c9392e9","type":"Title"},"tool_events":{"id":"53c8418b-b5d1-4397-af41-af688fa833ee","type":"ToolEvents"},"toolbar":{"id":"f6de9e15-673b-4ef3-9072-6eb990327ba2","type":"Toolbar"},"width":600,"x_mapper_type":"auto","x_range":{"id":"464e67df-6326-4e30-bafc-834c3734d88f","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"36d8746d-0e94-4cfc-89ec-3f85093fd265","type":"Range1d"}},"id":"2d258b85-59da-45d8-85f9-4a0bf06a2f34","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"943a3759-ec58-4c5f-a7a4-ec5dee800b40","type":"ColumnDataSource"},"glyph":{"id":"e1952234-1003-42e9-83bf-6dfe13d0fe2e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8da48a6a-d678-494e-8da9-d1443aef49cf","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"a1c6dbf5-f2c3-419c-8433-d19316871207","type":"Circle"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"pypy","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[12.0],"interpreter":["pypy"],"label":[{"interpreter":"pypy","sample":"1st"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["pypy:0.333333333333"],"y":[6.0]}},"id":"ba73a119-2d20-4a51-9dd9-659f4edf6c2a","type":"ColumnDataSource"}],"root_ids":["2d258b85-59da-45d8-85f9-4a0bf06a2f34"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"7554f10c-639f-4020-9f89-53fadcb1ff59","elementid":"5a8c8ed9-ac99-4abb-8717-a3dcf5f9a187","modelid":"2d258b85-59da-45d8-85f9-4a0bf06a2f34"}];
                  
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