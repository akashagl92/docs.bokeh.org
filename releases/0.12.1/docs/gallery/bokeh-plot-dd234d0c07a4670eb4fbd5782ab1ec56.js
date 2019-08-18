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
      };var element = document.getElementById("d869eafe-272a-4e6b-8b80-d7d4e8da7bd0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd869eafe-272a-4e6b-8b80-d7d4e8da7bd0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"7cc5b83c-707d-4b37-8fef-ab714a2babaa":{"roots":{"references":[{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"1c35b3c1-4d8b-43df-ae59-f7d383388bf2","type":"Circle"},{"attributes":{"data_source":{"id":"d311c20d-07af-4201-9668-4b2b535f480c","type":"ColumnDataSource"},"glyph":{"id":"088d63d4-9e5a-415e-aa01-fef8cae9940e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b1477d26-d9ea-4239-9bd9-08719ae060e4","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"c74a82c9-f59a-48fc-8f08-45de94b87430","type":"BoxAnnotation"},"plot":{"id":"09e0df59-eb6d-4182-965a-e97f545510fc","subtype":"Chart","type":"Plot"}},"id":"58ef0776-33d8-4c1f-9c75-ba08d4cfd7b0","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"jython","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[30.0],"interpreter":["jython"],"label":[{"interpreter":"jython","sample":"2nd"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["jython:0.666666666667"],"y":[15.0]}},"id":"7555b7a6-b9ee-449c-9f86-004a83283f99","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"python","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[5.0],"interpreter":["python"],"label":[{"interpreter":"python","sample":"2nd"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["python:0.666666666667"],"y":[2.5]}},"id":"6baffb95-7b3e-46da-8422-9d8deff7a8ec","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c74a82c9-f59a-48fc-8f08-45de94b87430","type":"BoxAnnotation"},{"attributes":{},"id":"7366646c-4c04-47b9-9994-9bbe79fd03d3","type":"BasicTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"51b665a4-7267-4688-acfd-97cf98613743","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"30fd4dd7-5e03-4d7c-b75e-4c74c4744ea6","type":"PanTool"},{"id":"81914b29-f235-4d44-a542-2d355a66cfe1","type":"WheelZoomTool"},{"id":"58ef0776-33d8-4c1f-9c75-ba08d4cfd7b0","type":"BoxZoomTool"},{"id":"579fe13c-4a4d-4941-a917-df9d558c17f3","type":"SaveTool"},{"id":"6815ba80-a78e-4555-9bf7-ac14ccd32d55","type":"ResetTool"},{"id":"13591741-764c-42db-b2dc-c02b936fc4ca","type":"HelpTool"}]},"id":"73b3bc4e-4815-4193-ad9d-e41bffd35f88","type":"Toolbar"},{"attributes":{"axis_label":"Interpreter","formatter":{"id":"58e9346f-9191-4437-9017-4042e48c7083","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"09e0df59-eb6d-4182-965a-e97f545510fc","subtype":"Chart","type":"Plot"},"ticker":{"id":"eeee48fc-8659-4033-b0d2-3d3e2f0f57a7","type":"CategoricalTicker"}},"id":"bc14ba76-1d7b-45e8-84cc-93b5dd086e1d","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"c89c3ae9-cd10-4525-947d-3fd325550c96","type":"ColumnDataSource"},"glyph":{"id":"1c35b3c1-4d8b-43df-ae59-f7d383388bf2","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1e8e1ffe-35fb-471b-8d89-a0a12aaafa4a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7555b7a6-b9ee-449c-9f86-004a83283f99","type":"ColumnDataSource"},"glyph":{"id":"51b665a4-7267-4688-acfd-97cf98613743","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ae6a191d-e391-47e2-b807-104f99eb2999","type":"GlyphRenderer"},{"attributes":{},"id":"eeee48fc-8659-4033-b0d2-3d3e2f0f57a7","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"pypy","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[12.0],"interpreter":["pypy"],"label":[{"interpreter":"pypy","sample":"1st"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["pypy:0.333333333333"],"y":[6.0]}},"id":"c89c3ae9-cd10-4525-947d-3fd325550c96","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"09e0df59-eb6d-4182-965a-e97f545510fc","subtype":"Chart","type":"Plot"}},"id":"30fd4dd7-5e03-4d7c-b75e-4c74c4744ea6","type":"PanTool"},{"attributes":{"below":[{"id":"bc14ba76-1d7b-45e8-84cc-93b5dd086e1d","type":"CategoricalAxis"}],"height":400,"left":[{"id":"84ebb1d3-430c-4986-99a2-28886b4d58fb","type":"LinearAxis"}],"renderers":[{"id":"c74a82c9-f59a-48fc-8f08-45de94b87430","type":"BoxAnnotation"},{"id":"b1477d26-d9ea-4239-9bd9-08719ae060e4","type":"GlyphRenderer"},{"id":"b3e29db5-f84b-4127-b8b0-5de1892b4dc7","type":"GlyphRenderer"},{"id":"1e8e1ffe-35fb-471b-8d89-a0a12aaafa4a","type":"GlyphRenderer"},{"id":"e732b624-1a19-4614-9cb0-329706b80546","type":"GlyphRenderer"},{"id":"3e4c32b2-67e4-4f67-a043-98faca6e51e0","type":"GlyphRenderer"},{"id":"ae6a191d-e391-47e2-b807-104f99eb2999","type":"GlyphRenderer"},{"id":"ef1b4b14-0158-4ad0-a941-15653a5005b7","type":"Legend"},{"id":"bc14ba76-1d7b-45e8-84cc-93b5dd086e1d","type":"CategoricalAxis"},{"id":"84ebb1d3-430c-4986-99a2-28886b4d58fb","type":"LinearAxis"},{"id":"287a952e-7579-45c3-8fa7-a9d13fd09d79","type":"Grid"}],"title":{"id":"74a62ee8-73be-4581-a62f-58b0db803386","type":"Title"},"tool_events":{"id":"7174601d-67d8-4766-872a-25a022bfeceb","type":"ToolEvents"},"toolbar":{"id":"73b3bc4e-4815-4193-ad9d-e41bffd35f88","type":"Toolbar"},"width":600,"x_mapper_type":"auto","x_range":{"id":"7a23376f-2141-4348-89bb-8fcea39fd285","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"b32e9f3d-b8cb-46c4-99d1-4101c30cf4dd","type":"Range1d"}},"id":"09e0df59-eb6d-4182-965a-e97f545510fc","subtype":"Chart","type":"Plot"},{"attributes":{"legends":[["1st",[{"id":"b1477d26-d9ea-4239-9bd9-08719ae060e4","type":"GlyphRenderer"}]],["2nd",[{"id":"b3e29db5-f84b-4127-b8b0-5de1892b4dc7","type":"GlyphRenderer"}]]],"plot":{"id":"09e0df59-eb6d-4182-965a-e97f545510fc","subtype":"Chart","type":"Plot"}},"id":"ef1b4b14-0158-4ad0-a941-15653a5005b7","type":"Legend"},{"attributes":{},"id":"e4a19a9f-9766-4dab-b91a-5c05deee0f6a","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":41.9,"start":-3.9000000000000004},"id":"b32e9f3d-b8cb-46c4-99d1-4101c30cf4dd","type":"Range1d"},{"attributes":{},"id":"7174601d-67d8-4766-872a-25a022bfeceb","type":"ToolEvents"},{"attributes":{"data_source":{"id":"6baffb95-7b3e-46da-8422-9d8deff7a8ec","type":"ColumnDataSource"},"glyph":{"id":"4509c5e1-6463-42b9-977a-063e964e2f7e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b3e29db5-f84b-4127-b8b0-5de1892b4dc7","type":"GlyphRenderer"},{"attributes":{},"id":"58e9346f-9191-4437-9017-4042e48c7083","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"9e597823-e6e1-4b34-801b-f7e6bb406089","type":"ColumnDataSource"},"glyph":{"id":"a2292ae6-4a8f-4df2-9e63-67e3b1022da3","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e732b624-1a19-4614-9cb0-329706b80546","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4612ea1d-9557-45b6-b5e8-a1b75b8728db","type":"ColumnDataSource"},"glyph":{"id":"e0d63881-f784-4bdd-bf59-8723425c6884","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3e4c32b2-67e4-4f67-a043-98faca6e51e0","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"4509c5e1-6463-42b9-977a-063e964e2f7e","type":"Circle"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"e0d63881-f784-4bdd-bf59-8723425c6884","type":"Circle"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"pypy","sample":"2nd"}],"color":["#5ab738"],"fill_alpha":[0.8],"height":[40.0],"interpreter":["pypy"],"label":[{"interpreter":"pypy","sample":"2nd"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["2nd"],"width":[0.2],"x":["pypy:0.666666666667"],"y":[20.0]}},"id":"9e597823-e6e1-4b34-801b-f7e6bb406089","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#f22c40"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"088d63d4-9e5a-415e-aa01-fef8cae9940e","type":"Circle"},{"attributes":{"plot":null,"text":"Python Interpreter Sampling"},"id":"74a62ee8-73be-4581-a62f-58b0db803386","type":"Title"},{"attributes":{"callback":null,"factors":["jython","pypy","python"]},"id":"7a23376f-2141-4348-89bb-8fcea39fd285","type":"FactorRange"},{"attributes":{"plot":{"id":"09e0df59-eb6d-4182-965a-e97f545510fc","subtype":"Chart","type":"Plot"}},"id":"13591741-764c-42db-b2dc-c02b936fc4ca","type":"HelpTool"},{"attributes":{"plot":{"id":"09e0df59-eb6d-4182-965a-e97f545510fc","subtype":"Chart","type":"Plot"}},"id":"81914b29-f235-4d44-a542-2d355a66cfe1","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"09e0df59-eb6d-4182-965a-e97f545510fc","subtype":"Chart","type":"Plot"}},"id":"579fe13c-4a4d-4941-a917-df9d558c17f3","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"python","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[-2.0],"interpreter":["python"],"label":[{"interpreter":"python","sample":"1st"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["python:0.333333333333"],"y":[-1.0]}},"id":"d311c20d-07af-4201-9668-4b2b535f480c","type":"ColumnDataSource"},{"attributes":{"axis_label":"Mean( Timing )","formatter":{"id":"e4a19a9f-9766-4dab-b91a-5c05deee0f6a","type":"BasicTickFormatter"},"plot":{"id":"09e0df59-eb6d-4182-965a-e97f545510fc","subtype":"Chart","type":"Plot"},"ticker":{"id":"7366646c-4c04-47b9-9994-9bbe79fd03d3","type":"BasicTicker"}},"id":"84ebb1d3-430c-4986-99a2-28886b4d58fb","type":"LinearAxis"},{"attributes":{"plot":{"id":"09e0df59-eb6d-4182-965a-e97f545510fc","subtype":"Chart","type":"Plot"}},"id":"6815ba80-a78e-4555-9bf7-ac14ccd32d55","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"09e0df59-eb6d-4182-965a-e97f545510fc","subtype":"Chart","type":"Plot"},"ticker":{"id":"7366646c-4c04-47b9-9994-9bbe79fd03d3","type":"BasicTicker"}},"id":"287a952e-7579-45c3-8fa7-a9d13fd09d79","type":"Grid"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"interpreter":"jython","sample":"1st"}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[22.0],"interpreter":["jython"],"label":[{"interpreter":"jython","sample":"1st"}],"line_alpha":[1.0],"line_color":["#f22c40"],"sample":["1st"],"width":[0.2],"x":["jython:0.333333333333"],"y":[11.0]}},"id":"4612ea1d-9557-45b6-b5e8-a1b75b8728db","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"value":"#5ab738"},"line_alpha":{"field":"line_alpha"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"height"}},"id":"a2292ae6-4a8f-4df2-9e63-67e3b1022da3","type":"Circle"}],"root_ids":["09e0df59-eb6d-4182-965a-e97f545510fc"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"7cc5b83c-707d-4b37-8fef-ab714a2babaa","elementid":"d869eafe-272a-4e6b-8b80-d7d4e8da7bd0","modelid":"09e0df59-eb6d-4182-965a-e97f545510fc"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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