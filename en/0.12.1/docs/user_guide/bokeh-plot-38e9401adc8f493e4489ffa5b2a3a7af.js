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
      };var element = document.getElementById("50b1b9a2-2a29-4b52-ac48-573bdb772ea7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '50b1b9a2-2a29-4b52-ac48-573bdb772ea7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"de0e43ee-9cbc-49ce-bc53-59cf1596f9d7":{"roots":{"references":[{"attributes":{"data_source":{"id":"eb92ddc7-8e19-4a52-9c33-e528bd6c0823","type":"ColumnDataSource"},"glyph":{"id":"ff666105-dc7a-491d-b295-5757d6e48405","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"635b663b-e9e5-4509-967a-c34a7740777d","type":"GlyphRenderer"},{"attributes":{"location":"top_left","plot":{"id":"6a572414-54ee-40b5-b0af-9dfbbb2d2bd4","subtype":"Chart","type":"Plot"}},"id":"fc61f972-dfba-42ae-97f9-d840a43889dd","type":"Legend"},{"attributes":{"plot":{"id":"6a572414-54ee-40b5-b0af-9dfbbb2d2bd4","subtype":"Chart","type":"Plot"}},"id":"83a945ca-69d8-4790-9078-576f3fb54b4e","type":"HelpTool"},{"attributes":{"plot":null,"text":"DISPL Distribution"},"id":"bafa17c3-70bf-4b2f-acf1-44c88d678121","type":"Title"},{"attributes":{},"id":"25e61891-1a8a-42f1-b5ca-f7150e6b0b8c","type":"BasicTicker"},{"attributes":{"data_source":{"id":"b819cdea-f18a-4c9e-a98f-26952d6fc9e4","type":"ColumnDataSource"},"glyph":{"id":"f6db4b4d-6593-4d50-a2b6-040c52782b8c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"477c6d7e-2cc9-4542-b5f1-94e8003ead85","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(412.0, 455.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[9.0],"label":["(412.0, 455.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["433.5"],"y":[4.5]}},"id":"1bf6dfa2-12c1-417b-a1a9-5d2d70b24a9f","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":468.075,"start":54.925},"id":"a0c6a43f-dd51-4685-9eaa-d1c1bf378fdd","type":"Range1d"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f6db4b4d-6593-4d50-a2b6-040c52782b8c","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"efc36319-cdb2-40da-b511-0c4295f21386","type":"Rect"},{"attributes":{},"id":"87968cb8-ddf2-44c7-b6b9-cf7d7891e209","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fd50219d-34d0-44b8-8db7-4b0ba52b783c","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"6a572414-54ee-40b5-b0af-9dfbbb2d2bd4","subtype":"Chart","type":"Plot"}},"id":"7c3c7bd1-ab11-492d-af1e-783993792b83","type":"PanTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"16dbc73c-8517-4992-9be7-bf20f221c557","type":"Rect"},{"attributes":{"callback":null,"end":126.50000000000001},"id":"b599d987-b4fc-483a-add2-d05b032fcf1f","type":"Range1d"},{"attributes":{"plot":{"id":"6a572414-54ee-40b5-b0af-9dfbbb2d2bd4","subtype":"Chart","type":"Plot"}},"id":"eae82db6-063b-4976-a383-3485bdc7508e","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(283.0, 326.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[42.0],"label":["(283.0, 326.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["304.5"],"y":[21.0]}},"id":"d31be853-926e-4d87-b6da-b85b5ad6ea6c","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff666105-dc7a-491d-b295-5757d6e48405","type":"Rect"},{"attributes":{"data_source":{"id":"c76c0be9-a85e-41ae-9060-98f65e9c6194","type":"ColumnDataSource"},"glyph":{"id":"efc36319-cdb2-40da-b511-0c4295f21386","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"398b2b12-9553-4625-b32f-7db98d092fb1","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"db8c1760-62f8-4717-9d38-7dfac84a6c0d","type":"ColumnDataSource"},"glyph":{"id":"00de4409-5a69-479d-8bac-0e52ed4ed0f4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1c2150b4-8ee0-4cff-bb26-4c052e2f254e","type":"GlyphRenderer"},{"attributes":{},"id":"68d74669-f96c-4fe3-95c2-584336110237","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"23dec124-2659-4916-87e9-5671377d2054","type":"LinearAxis"}],"height":400,"left":[{"id":"58dc0ebb-09a6-490f-92aa-83f6ecf1ee98","type":"LinearAxis"}],"renderers":[{"id":"fd50219d-34d0-44b8-8db7-4b0ba52b783c","type":"BoxAnnotation"},{"id":"544a9bb6-4872-464f-8fb3-1e36fef1e087","type":"GlyphRenderer"},{"id":"88196a28-99ae-4eb9-afdc-6483451e40af","type":"GlyphRenderer"},{"id":"e7263391-b88f-4cac-8a04-7068c49a3eba","type":"GlyphRenderer"},{"id":"635b663b-e9e5-4509-967a-c34a7740777d","type":"GlyphRenderer"},{"id":"477c6d7e-2cc9-4542-b5f1-94e8003ead85","type":"GlyphRenderer"},{"id":"e01ef52e-be64-486c-b647-9ea6856f1a6e","type":"GlyphRenderer"},{"id":"1c2150b4-8ee0-4cff-bb26-4c052e2f254e","type":"GlyphRenderer"},{"id":"398b2b12-9553-4625-b32f-7db98d092fb1","type":"GlyphRenderer"},{"id":"ab03c536-0e18-48a2-8c03-7bf1cbba8708","type":"GlyphRenderer"},{"id":"fc61f972-dfba-42ae-97f9-d840a43889dd","type":"Legend"},{"id":"23dec124-2659-4916-87e9-5671377d2054","type":"LinearAxis"},{"id":"58dc0ebb-09a6-490f-92aa-83f6ecf1ee98","type":"LinearAxis"},{"id":"b0cb2b36-6535-4e69-83fc-bc2dc9fc56eb","type":"Grid"}],"title":{"id":"bafa17c3-70bf-4b2f-acf1-44c88d678121","type":"Title"},"tool_events":{"id":"e077ba72-6fa9-4cbc-a05a-890f0d245090","type":"ToolEvents"},"toolbar":{"id":"c6db1533-9f91-4037-aa3a-582239e0044e","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"a0c6a43f-dd51-4685-9eaa-d1c1bf378fdd","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"b599d987-b4fc-483a-add2-d05b032fcf1f","type":"Range1d"}},"id":"6a572414-54ee-40b5-b0af-9dfbbb2d2bd4","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(197.0, 240.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[44.0],"label":["(197.0, 240.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["218.5"],"y":[22.0]}},"id":"eb92ddc7-8e19-4a52-9c33-e528bd6c0823","type":"ColumnDataSource"},{"attributes":{"axis_label":"displ","formatter":{"id":"87968cb8-ddf2-44c7-b6b9-cf7d7891e209","type":"BasicTickFormatter"},"plot":{"id":"6a572414-54ee-40b5-b0af-9dfbbb2d2bd4","subtype":"Chart","type":"Plot"},"ticker":{"id":"25e61891-1a8a-42f1-b5ca-f7150e6b0b8c","type":"BasicTicker"}},"id":"23dec124-2659-4916-87e9-5671377d2054","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(326.0, 369.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[31.0],"label":["(326.0, 369.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["347.5"],"y":[15.5]}},"id":"db8c1760-62f8-4717-9d38-7dfac84a6c0d","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"fd50219d-34d0-44b8-8db7-4b0ba52b783c","type":"BoxAnnotation"},"plot":{"id":"6a572414-54ee-40b5-b0af-9dfbbb2d2bd4","subtype":"Chart","type":"Plot"}},"id":"e4d8f452-63d5-4d09-b0b1-abbf742fd88b","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"6185f48c-cd1f-4230-8013-72bd5777352f","type":"ColumnDataSource"},"glyph":{"id":"4061634a-f4c0-409d-8a35-624f59f75db9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e7263391-b88f-4cac-8a04-7068c49a3eba","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b55fc050-90c3-414c-94a3-6ed14cc49b17","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(111.0, 154.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[89.0],"label":["(111.0, 154.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["132.5"],"y":[44.5]}},"id":"25eb9b5e-11af-4e6a-930a-c67a215ac8a7","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3e948fe7-d8e6-4797-8099-a4229a55ccc4","type":"ColumnDataSource"},"glyph":{"id":"b55fc050-90c3-414c-94a3-6ed14cc49b17","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"544a9bb6-4872-464f-8fb3-1e36fef1e087","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4061634a-f4c0-409d-8a35-624f59f75db9","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["[68.0, 111.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[115.0],"label":["[68.0, 111.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["89.5"],"y":[57.5]}},"id":"3e948fe7-d8e6-4797-8099-a4229a55ccc4","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(369.0, 412.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[16.0],"label":["(369.0, 412.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["390.5"],"y":[8.0]}},"id":"c76c0be9-a85e-41ae-9060-98f65e9c6194","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6a572414-54ee-40b5-b0af-9dfbbb2d2bd4","subtype":"Chart","type":"Plot"}},"id":"61f17ea9-2a8e-41a5-ba64-07e2ceee35eb","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7c3c7bd1-ab11-492d-af1e-783993792b83","type":"PanTool"},{"id":"61f17ea9-2a8e-41a5-ba64-07e2ceee35eb","type":"WheelZoomTool"},{"id":"e4d8f452-63d5-4d09-b0b1-abbf742fd88b","type":"BoxZoomTool"},{"id":"805462c0-dcf1-41e6-9533-2ea9f7dcf06e","type":"SaveTool"},{"id":"eae82db6-063b-4976-a383-3485bdc7508e","type":"ResetTool"},{"id":"83a945ca-69d8-4790-9078-576f3fb54b4e","type":"HelpTool"}]},"id":"c6db1533-9f91-4037-aa3a-582239e0044e","type":"Toolbar"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"00de4409-5a69-479d-8bac-0e52ed4ed0f4","type":"Rect"},{"attributes":{"data_source":{"id":"25eb9b5e-11af-4e6a-930a-c67a215ac8a7","type":"ColumnDataSource"},"glyph":{"id":"16dbc73c-8517-4992-9be7-bf20f221c557","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"88196a28-99ae-4eb9-afdc-6483451e40af","type":"GlyphRenderer"},{"attributes":{"axis_label":"Count( Displ )","formatter":{"id":"68d74669-f96c-4fe3-95c2-584336110237","type":"BasicTickFormatter"},"plot":{"id":"6a572414-54ee-40b5-b0af-9dfbbb2d2bd4","subtype":"Chart","type":"Plot"},"ticker":{"id":"21c76dfa-c8ed-4f55-9ba1-7cfb94279dbd","type":"BasicTicker"}},"id":"58dc0ebb-09a6-490f-92aa-83f6ecf1ee98","type":"LinearAxis"},{"attributes":{"data_source":{"id":"d31be853-926e-4d87-b6da-b85b5ad6ea6c","type":"ColumnDataSource"},"glyph":{"id":"67a44e38-2bf9-46c1-b017-d99df52fb56a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e01ef52e-be64-486c-b647-9ea6856f1a6e","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"67a44e38-2bf9-46c1-b017-d99df52fb56a","type":"Rect"},{"attributes":{"plot":{"id":"6a572414-54ee-40b5-b0af-9dfbbb2d2bd4","subtype":"Chart","type":"Plot"}},"id":"805462c0-dcf1-41e6-9533-2ea9f7dcf06e","type":"SaveTool"},{"attributes":{"data_source":{"id":"1bf6dfa2-12c1-417b-a1a9-5d2d70b24a9f","type":"ColumnDataSource"},"glyph":{"id":"cd788fda-6d22-433e-b269-7bd1cf546e83","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ab03c536-0e18-48a2-8c03-7bf1cbba8708","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(154.0, 197.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[18.0],"label":["(154.0, 197.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["175.5"],"y":[9.0]}},"id":"6185f48c-cd1f-4230-8013-72bd5777352f","type":"ColumnDataSource"},{"attributes":{},"id":"21c76dfa-c8ed-4f55-9ba1-7cfb94279dbd","type":"BasicTicker"},{"attributes":{},"id":"e077ba72-6fa9-4cbc-a05a-890f0d245090","type":"ToolEvents"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cd788fda-6d22-433e-b269-7bd1cf546e83","type":"Rect"},{"attributes":{"dimension":1,"plot":{"id":"6a572414-54ee-40b5-b0af-9dfbbb2d2bd4","subtype":"Chart","type":"Plot"},"ticker":{"id":"21c76dfa-c8ed-4f55-9ba1-7cfb94279dbd","type":"BasicTicker"}},"id":"b0cb2b36-6535-4e69-83fc-bc2dc9fc56eb","type":"Grid"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(240.0, 283.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[28.0],"label":["(240.0, 283.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["261.5"],"y":[14.0]}},"id":"b819cdea-f18a-4c9e-a98f-26952d6fc9e4","type":"ColumnDataSource"}],"root_ids":["6a572414-54ee-40b5-b0af-9dfbbb2d2bd4"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"de0e43ee-9cbc-49ce-bc53-59cf1596f9d7","elementid":"50b1b9a2-2a29-4b52-ac48-573bdb772ea7","modelid":"6a572414-54ee-40b5-b0af-9dfbbb2d2bd4"}];
              
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