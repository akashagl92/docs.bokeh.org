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
      };var element = document.getElementById("fe08a32d-62ee-497e-8958-c91d4a3db146");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fe08a32d-62ee-497e-8958-c91d4a3db146' but no matching script tag was found. ")
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
                  var docs_json = {"58ec23bd-23ad-4050-bd3b-9e82eb8a20a1":{"roots":{"references":[{"attributes":{},"id":"a976c825-f17a-4be7-97bd-d01a54117644","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e3fdb553-5a52-492e-8dc4-2e391c032ed7","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(197.0, 240.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[44.0],"label":["(197.0, 240.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["218.5"],"y":[22.0]}},"id":"b4143af5-16ef-47f6-9e99-d2e454caacf1","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3e91e4ba-2bbf-4339-a888-35f9863aa864","subtype":"Chart","type":"Plot"}},"id":"5fb040c5-f520-413e-b883-c387d37b5522","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"613ce03f-6099-4afd-a389-dde8f2de730e","type":"ColumnDataSource"},"glyph":{"id":"47c41ba1-a341-4d47-8998-68e214bd3bc7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3c3cfeba-b9c1-4451-8bbb-7b68b73822f0","type":"GlyphRenderer"},{"attributes":{},"id":"c5746e90-892e-4dd9-b64d-aa1c85363f59","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8b349135-3c74-4eea-9be1-58bf4a15cdfb","type":"Rect"},{"attributes":{"plot":{"id":"3e91e4ba-2bbf-4339-a888-35f9863aa864","subtype":"Chart","type":"Plot"}},"id":"0eda172e-4cc6-4513-91b4-ba0100b158d2","type":"HelpTool"},{"attributes":{"callback":null,"end":468.075,"start":54.925},"id":"4683cbd4-4aec-47f1-afe2-645c56d51fc4","type":"Range1d"},{"attributes":{"axis_label":"displ","formatter":{"id":"c5746e90-892e-4dd9-b64d-aa1c85363f59","type":"BasicTickFormatter"},"plot":{"id":"3e91e4ba-2bbf-4339-a888-35f9863aa864","subtype":"Chart","type":"Plot"},"ticker":{"id":"e52f99cb-6a9f-4f60-8592-2a065fd43d06","type":"BasicTicker"}},"id":"5a48a163-88d4-4721-9f5f-715ac52ce812","type":"LinearAxis"},{"attributes":{},"id":"d64ea53d-04f4-41c2-976b-57bcf3c19436","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(412.0, 455.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[9.0],"label":["(412.0, 455.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["433.5"],"y":[4.5]}},"id":"7efb0389-706f-4d60-928b-91145dff97b0","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["[68.0, 111.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[115.0],"label":["[68.0, 111.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["89.5"],"y":[57.5]}},"id":"ac52b1e2-334f-4df5-9dad-7cde992c3ec3","type":"ColumnDataSource"},{"attributes":{},"id":"9fa8cf87-b23c-4383-aa32-a5bc792be135","type":"BasicTicker"},{"attributes":{"data_source":{"id":"bb4318b6-43e5-4108-9ac0-f5df7bd1a834","type":"ColumnDataSource"},"glyph":{"id":"053384b6-95ae-4891-9811-a3ea10b159f2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"41ebe5de-1555-425d-9519-da6c6af3cdfe","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4b16ba08-88bd-438f-8801-04cccd1c88f6","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"47c41ba1-a341-4d47-8998-68e214bd3bc7","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8ec316f7-5302-4307-a580-707658eb7b2d","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"51cfaad9-2b03-4a6e-8e5f-c4c6fa85bf00","type":"Rect"},{"attributes":{"below":[{"id":"5a48a163-88d4-4721-9f5f-715ac52ce812","type":"LinearAxis"}],"height":400,"left":[{"id":"41a03961-4954-465b-9c30-2e676b68cc27","type":"LinearAxis"}],"renderers":[{"id":"8ec316f7-5302-4307-a580-707658eb7b2d","type":"BoxAnnotation"},{"id":"be7231c3-6681-45aa-b906-5e82bdfca3d6","type":"GlyphRenderer"},{"id":"24f8682f-e957-4cef-8c71-0a0708ecacee","type":"GlyphRenderer"},{"id":"943224d4-df3f-4d8c-9394-84d8bb6fb2b7","type":"GlyphRenderer"},{"id":"7362c362-b1a7-4057-829c-42fb6a0e5d9b","type":"GlyphRenderer"},{"id":"3c3cfeba-b9c1-4451-8bbb-7b68b73822f0","type":"GlyphRenderer"},{"id":"3ed081b1-52d7-425a-946f-d60e8c0cf32a","type":"GlyphRenderer"},{"id":"41ebe5de-1555-425d-9519-da6c6af3cdfe","type":"GlyphRenderer"},{"id":"cb85403b-2124-4593-9e7b-3230212d7716","type":"GlyphRenderer"},{"id":"874174ae-1b20-4b78-961c-417aa328a8d2","type":"GlyphRenderer"},{"id":"6bec64fd-63a0-4d77-be1a-62d6ccf73775","type":"Legend"},{"id":"5a48a163-88d4-4721-9f5f-715ac52ce812","type":"LinearAxis"},{"id":"41a03961-4954-465b-9c30-2e676b68cc27","type":"LinearAxis"},{"id":"75389e64-83d8-437d-91a5-1365c43b8428","type":"Grid"}],"title":{"id":"fa1d0007-9126-43b4-ba34-dd74f1bf395d","type":"Title"},"tool_events":{"id":"d64ea53d-04f4-41c2-976b-57bcf3c19436","type":"ToolEvents"},"toolbar":{"id":"23d7928c-0256-4021-8dd4-478df3b39093","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"4683cbd4-4aec-47f1-afe2-645c56d51fc4","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"dd090942-6da6-480c-a4c6-d2957c8811cd","type":"Range1d"}},"id":"3e91e4ba-2bbf-4339-a888-35f9863aa864","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(326.0, 369.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[31.0],"label":["(326.0, 369.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["347.5"],"y":[15.5]}},"id":"bb4318b6-43e5-4108-9ac0-f5df7bd1a834","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5a0a8658-d90b-4554-b96a-9fc1beb0fc19","type":"PanTool"},{"id":"5fb040c5-f520-413e-b883-c387d37b5522","type":"WheelZoomTool"},{"id":"32a5dc9b-468e-4deb-8eef-5ff4c88d0991","type":"BoxZoomTool"},{"id":"087a139f-b06d-440e-baac-7538bf52745f","type":"SaveTool"},{"id":"78542f64-db35-4438-8985-42b0693edd1e","type":"ResetTool"},{"id":"0eda172e-4cc6-4513-91b4-ba0100b158d2","type":"HelpTool"}]},"id":"23d7928c-0256-4021-8dd4-478df3b39093","type":"Toolbar"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"bd2a64e0-183c-40d1-bfb2-71f5777c760f","type":"Rect"},{"attributes":{},"id":"e52f99cb-6a9f-4f60-8592-2a065fd43d06","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(369.0, 412.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[16.0],"label":["(369.0, 412.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["390.5"],"y":[8.0]}},"id":"d24e3549-98c7-40e3-8a8e-15a6707aceff","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b4143af5-16ef-47f6-9e99-d2e454caacf1","type":"ColumnDataSource"},"glyph":{"id":"8b349135-3c74-4eea-9be1-58bf4a15cdfb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7362c362-b1a7-4057-829c-42fb6a0e5d9b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"053384b6-95ae-4891-9811-a3ea10b159f2","type":"Rect"},{"attributes":{"data_source":{"id":"d24e3549-98c7-40e3-8a8e-15a6707aceff","type":"ColumnDataSource"},"glyph":{"id":"4b16ba08-88bd-438f-8801-04cccd1c88f6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cb85403b-2124-4593-9e7b-3230212d7716","type":"GlyphRenderer"},{"attributes":{"location":"top_left","plot":{"id":"3e91e4ba-2bbf-4339-a888-35f9863aa864","subtype":"Chart","type":"Plot"}},"id":"6bec64fd-63a0-4d77-be1a-62d6ccf73775","type":"Legend"},{"attributes":{"data_source":{"id":"0e1a5947-85ac-4856-b44b-150cd1fd2469","type":"ColumnDataSource"},"glyph":{"id":"e3fdb553-5a52-492e-8dc4-2e391c032ed7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"24f8682f-e957-4cef-8c71-0a0708ecacee","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"3e91e4ba-2bbf-4339-a888-35f9863aa864","subtype":"Chart","type":"Plot"}},"id":"78542f64-db35-4438-8985-42b0693edd1e","type":"ResetTool"},{"attributes":{"callback":null,"end":126.50000000000001},"id":"dd090942-6da6-480c-a4c6-d2957c8811cd","type":"Range1d"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0f3d6d8e-a3bf-42b6-a355-04fa1bc71906","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(240.0, 283.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[28.0],"label":["(240.0, 283.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["261.5"],"y":[14.0]}},"id":"613ce03f-6099-4afd-a389-dde8f2de730e","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"3e91e4ba-2bbf-4339-a888-35f9863aa864","subtype":"Chart","type":"Plot"},"ticker":{"id":"9fa8cf87-b23c-4383-aa32-a5bc792be135","type":"BasicTicker"}},"id":"75389e64-83d8-437d-91a5-1365c43b8428","type":"Grid"},{"attributes":{"data_source":{"id":"ebfb4adb-3599-4da8-8372-22243d827cfa","type":"ColumnDataSource"},"glyph":{"id":"0f3d6d8e-a3bf-42b6-a355-04fa1bc71906","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3ed081b1-52d7-425a-946f-d60e8c0cf32a","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"8ec316f7-5302-4307-a580-707658eb7b2d","type":"BoxAnnotation"},"plot":{"id":"3e91e4ba-2bbf-4339-a888-35f9863aa864","subtype":"Chart","type":"Plot"}},"id":"32a5dc9b-468e-4deb-8eef-5ff4c88d0991","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"ac52b1e2-334f-4df5-9dad-7cde992c3ec3","type":"ColumnDataSource"},"glyph":{"id":"ff23c716-5c54-4a62-bcf8-e2656aa67e29","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"be7231c3-6681-45aa-b906-5e82bdfca3d6","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"DISPL Distribution"},"id":"fa1d0007-9126-43b4-ba34-dd74f1bf395d","type":"Title"},{"attributes":{"plot":{"id":"3e91e4ba-2bbf-4339-a888-35f9863aa864","subtype":"Chart","type":"Plot"}},"id":"5a0a8658-d90b-4554-b96a-9fc1beb0fc19","type":"PanTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(154.0, 197.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[18.0],"label":["(154.0, 197.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["175.5"],"y":[9.0]}},"id":"12ca0694-6d0a-4fdd-a58c-14255e492a72","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff23c716-5c54-4a62-bcf8-e2656aa67e29","type":"Rect"},{"attributes":{"data_source":{"id":"12ca0694-6d0a-4fdd-a58c-14255e492a72","type":"ColumnDataSource"},"glyph":{"id":"bd2a64e0-183c-40d1-bfb2-71f5777c760f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"943224d4-df3f-4d8c-9394-84d8bb6fb2b7","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(283.0, 326.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[42.0],"label":["(283.0, 326.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["304.5"],"y":[21.0]}},"id":"ebfb4adb-3599-4da8-8372-22243d827cfa","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7efb0389-706f-4d60-928b-91145dff97b0","type":"ColumnDataSource"},"glyph":{"id":"51cfaad9-2b03-4a6e-8e5f-c4c6fa85bf00","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"874174ae-1b20-4b78-961c-417aa328a8d2","type":"GlyphRenderer"},{"attributes":{"axis_label":"Count( Displ )","formatter":{"id":"a976c825-f17a-4be7-97bd-d01a54117644","type":"BasicTickFormatter"},"plot":{"id":"3e91e4ba-2bbf-4339-a888-35f9863aa864","subtype":"Chart","type":"Plot"},"ticker":{"id":"9fa8cf87-b23c-4383-aa32-a5bc792be135","type":"BasicTicker"}},"id":"41a03961-4954-465b-9c30-2e676b68cc27","type":"LinearAxis"},{"attributes":{"plot":{"id":"3e91e4ba-2bbf-4339-a888-35f9863aa864","subtype":"Chart","type":"Plot"}},"id":"087a139f-b06d-440e-baac-7538bf52745f","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":["(111.0, 154.0]"],"color":["#f22c40"],"fill_alpha":[0.8],"height":[89.0],"label":["(111.0, 154.0]"],"line_alpha":[1.0],"line_color":["black"],"width":[43.0],"x":["132.5"],"y":[44.5]}},"id":"0e1a5947-85ac-4856-b44b-150cd1fd2469","type":"ColumnDataSource"}],"root_ids":["3e91e4ba-2bbf-4339-a888-35f9863aa864"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"58ec23bd-23ad-4050-bd3b-9e82eb8a20a1","elementid":"fe08a32d-62ee-497e-8958-c91d4a3db146","modelid":"3e91e4ba-2bbf-4339-a888-35f9863aa864"}];
                  
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