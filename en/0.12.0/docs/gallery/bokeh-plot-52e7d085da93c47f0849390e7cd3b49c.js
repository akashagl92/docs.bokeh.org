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
      };var element = document.getElementById("0a35343d-eb8f-4230-a80e-543ba03cb4f9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0a35343d-eb8f-4230-a80e-543ba03cb4f9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"d7f87421-b9bc-4db2-90bb-af604a4ea4b1":{"roots":{"references":[{"attributes":{},"id":"d2933c43-11fe-412b-ae6e-860e7d05c457","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":14.3,"start":-1.3},"id":"f6863450-0f29-464d-9aed-a05f51bc53b1","type":"Range1d"},{"attributes":{"data_source":{"id":"d665f01f-3664-4ddd-8291-f238914fbf6e","type":"ColumnDataSource"},"glyph":{"id":"fa54e54e-18ee-42ba-97ee-42c1cb158e24","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3c381231-014d-4ec8-ab2c-49ba2ec7e498","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"1471824a-2325-46fb-bd07-a11d3fe90eba","subtype":"Chart","type":"Plot"}},"id":"c1e941e3-ca5a-497b-abd0-60b81f97864e","type":"WheelZoomTool"},{"attributes":{},"id":"677c699c-3100-456a-b8af-3df204cb0b58","type":"BasicTicker"},{"attributes":{"overlay":{"id":"ba6f2eb9-7413-4f0d-987f-a4ac9b946e35","type":"BoxAnnotation"},"plot":{"id":"1471824a-2325-46fb-bd07-a11d3fe90eba","subtype":"Chart","type":"Plot"}},"id":"683b686f-62d7-440a-a589-4493505409da","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"1471824a-2325-46fb-bd07-a11d3fe90eba","subtype":"Chart","type":"Plot"}},"id":"de0d04bf-b6b1-4516-ab60-6f914e105b85","type":"SaveTool"},{"attributes":{"callback":null,"end":293.5,"start":-24.5},"id":"4d7de360-0185-4546-8f04-daf832b842b7","type":"Range1d"},{"attributes":{"plot":null,"text":"Interpreter Sample Data"},"id":"e89c4cf4-984f-4626-9d41-2e8506e90f12","type":"Title"},{"attributes":{"plot":{"id":"1471824a-2325-46fb-bd07-a11d3fe90eba","subtype":"Chart","type":"Plot"}},"id":"cf23a3f2-4dbd-4a44-95e2-40f9bdd6e79c","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"},{"series":"python"}],"series":["python","python","python","python","python","python","python","python","python","python","python","python","python","python"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[2,3,7,5,26,221,44,233,254,265,266,267,120,111]}},"id":"d665f01f-3664-4ddd-8291-f238914fbf6e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"1471824a-2325-46fb-bd07-a11d3fe90eba","subtype":"Chart","type":"Plot"}},"id":"a92f43c1-cc93-4069-af4d-ec620998ad60","type":"PanTool"},{"attributes":{},"id":"b2b75703-180c-4045-9303-cb6585565be9","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"76c14875-4aa2-41e8-90cb-a0066012b485","type":"LinearAxis"}],"height":400,"left":[{"id":"78ce46b5-4e69-46eb-9941-766abbe6ce4c","type":"LinearAxis"}],"renderers":[{"id":"ba6f2eb9-7413-4f0d-987f-a4ac9b946e35","type":"BoxAnnotation"},{"id":"3c381231-014d-4ec8-ab2c-49ba2ec7e498","type":"GlyphRenderer"},{"id":"85582076-fa90-435f-96af-ee8388f853dc","type":"GlyphRenderer"},{"id":"65a93830-ba83-4d8e-a72f-2df197910a30","type":"GlyphRenderer"},{"id":"bb3f6741-746c-440d-9987-2354725ad747","type":"Legend"},{"id":"76c14875-4aa2-41e8-90cb-a0066012b485","type":"LinearAxis"},{"id":"78ce46b5-4e69-46eb-9941-766abbe6ce4c","type":"LinearAxis"},{"id":"8358d333-9d37-40b3-9ce2-0c257af78d94","type":"Grid"},{"id":"67098bba-3b31-405c-a7cd-cfb49ef76aec","type":"Grid"}],"title":{"id":"e89c4cf4-984f-4626-9d41-2e8506e90f12","type":"Title"},"tool_events":{"id":"3119da89-cfb4-4b67-b5ce-002148520a45","type":"ToolEvents"},"toolbar":{"id":"9172d376-41c3-4eb2-8bf6-fe2f952cc253","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"f6863450-0f29-464d-9aed-a05f51bc53b1","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"4d7de360-0185-4546-8f04-daf832b842b7","type":"Range1d"}},"id":"1471824a-2325-46fb-bd07-a11d3fe90eba","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"4f0d3de4-f04a-4f87-915c-d5bfb0e274bb","type":"ColumnDataSource"},"glyph":{"id":"d8ef0f23-b530-4ee3-9023-32ad2ae54222","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"65a93830-ba83-4d8e-a72f-2df197910a30","type":"GlyphRenderer"},{"attributes":{},"id":"3119da89-cfb4-4b67-b5ce-002148520a45","type":"ToolEvents"},{"attributes":{"axis_label":"Duration","formatter":{"id":"b2b75703-180c-4045-9303-cb6585565be9","type":"BasicTickFormatter"},"plot":{"id":"1471824a-2325-46fb-bd07-a11d3fe90eba","subtype":"Chart","type":"Plot"},"ticker":{"id":"1e4d57fa-532f-40b4-aa12-c8f3efc75601","type":"BasicTicker"}},"id":"78ce46b5-4e69-46eb-9941-766abbe6ce4c","type":"LinearAxis"},{"attributes":{"data_source":{"id":"654ca181-88ce-488f-8344-8080abf93089","type":"ColumnDataSource"},"glyph":{"id":"98d71b97-6115-46b9-bbba-c33d5cfc2cb2","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"85582076-fa90-435f-96af-ee8388f853dc","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ba6f2eb9-7413-4f0d-987f-a4ac9b946e35","type":"BoxAnnotation"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"98d71b97-6115-46b9-bbba-c33d5cfc2cb2","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"1471824a-2325-46fb-bd07-a11d3fe90eba","subtype":"Chart","type":"Plot"},"ticker":{"id":"1e4d57fa-532f-40b4-aa12-c8f3efc75601","type":"BasicTicker"}},"id":"67098bba-3b31-405c-a7cd-cfb49ef76aec","type":"Grid"},{"attributes":{"axis_label":"index","formatter":{"id":"d2933c43-11fe-412b-ae6e-860e7d05c457","type":"BasicTickFormatter"},"plot":{"id":"1471824a-2325-46fb-bd07-a11d3fe90eba","subtype":"Chart","type":"Plot"},"ticker":{"id":"677c699c-3100-456a-b8af-3df204cb0b58","type":"BasicTicker"}},"id":"76c14875-4aa2-41e8-90cb-a0066012b485","type":"LinearAxis"},{"attributes":{"plot":{"id":"1471824a-2325-46fb-bd07-a11d3fe90eba","subtype":"Chart","type":"Plot"}},"id":"4cf02c12-98c2-47f0-ad82-af3a152d5642","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a92f43c1-cc93-4069-af4d-ec620998ad60","type":"PanTool"},{"id":"c1e941e3-ca5a-497b-abd0-60b81f97864e","type":"WheelZoomTool"},{"id":"683b686f-62d7-440a-a589-4493505409da","type":"BoxZoomTool"},{"id":"de0d04bf-b6b1-4516-ab60-6f914e105b85","type":"SaveTool"},{"id":"4cf02c12-98c2-47f0-ad82-af3a152d5642","type":"ResetTool"},{"id":"cf23a3f2-4dbd-4a44-95e2-40f9bdd6e79c","type":"HelpTool"}]},"id":"9172d376-41c3-4eb2-8bf6-fe2f952cc253","type":"Toolbar"},{"attributes":{},"id":"1e4d57fa-532f-40b4-aa12-c8f3efc75601","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"},{"series":"pypy"}],"series":["pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy","pypy"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[12,33,47,15,126,121,144,233,254,225,226,267,110,130]}},"id":"654ca181-88ce-488f-8344-8080abf93089","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#407ee7"},"line_dash":[2,4],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"fa54e54e-18ee-42ba-97ee-42c1cb158e24","type":"Line"},{"attributes":{"plot":{"id":"1471824a-2325-46fb-bd07-a11d3fe90eba","subtype":"Chart","type":"Plot"},"ticker":{"id":"677c699c-3100-456a-b8af-3df204cb0b58","type":"BasicTicker"}},"id":"8358d333-9d37-40b3-9ce2-0c257af78d94","type":"Grid"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"},{"series":"jython"}],"series":["jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython","jython"],"x_values":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"y_values":[22,43,10,25,26,101,114,203,194,215,201,227,139,160]}},"id":"4f0d3de4-f04a-4f87-915c-d5bfb0e274bb","type":"ColumnDataSource"},{"attributes":{"legends":[["jython",[{"id":"65a93830-ba83-4d8e-a72f-2df197910a30","type":"GlyphRenderer"}]],["pypy",[{"id":"85582076-fa90-435f-96af-ee8388f853dc","type":"GlyphRenderer"}]],["python",[{"id":"3c381231-014d-4ec8-ab2c-49ba2ec7e498","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"1471824a-2325-46fb-bd07-a11d3fe90eba","subtype":"Chart","type":"Plot"}},"id":"bb3f6741-746c-440d-9987-2354725ad747","type":"Legend"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"d8ef0f23-b530-4ee3-9023-32ad2ae54222","type":"Line"}],"root_ids":["1471824a-2325-46fb-bd07-a11d3fe90eba"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"d7f87421-b9bc-4db2-90bb-af604a4ea4b1","elementid":"0a35343d-eb8f-4230-a80e-543ba03cb4f9","modelid":"1471824a-2325-46fb-bd07-a11d3fe90eba"}];
              
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