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
      };var element = document.getElementById("a5aa1b52-b359-45dd-836e-75fec84e44a4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a5aa1b52-b359-45dd-836e-75fec84e44a4' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"62fe1ecb-a016-477d-8702-b59dd7b8fc8a":{"roots":{"references":[{"attributes":{"plot":null,"text":"Area Chart"},"id":"70621edb-83ee-4260-ab4b-1a2f1cf3a0d1","type":"Title"},{"attributes":{"plot":{"id":"b3a7f802-be5c-4d50-900f-2e2e66efa26b","subtype":"Chart","type":"Plot"}},"id":"53a9eae3-6a98-4dba-a626-467096f5dde7","type":"HelpTool"},{"attributes":{"data_source":{"id":"0228f591-88a8-4dbf-b54f-e78cd9f3e3fc","type":"ColumnDataSource"},"glyph":{"id":"23695cb0-f833-4493-a42d-0cae8b3ce586","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fb3471c9-4814-4d9d-b68e-ad9341db19a4","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"22ed6afa-bd53-4bbf-9930-8ed4f388370d","type":"PanTool"},{"id":"3d61690e-a343-4e8e-99ea-3b41f8d1a4df","type":"WheelZoomTool"},{"id":"259766c4-9003-4782-a99d-2b481fadea50","type":"BoxZoomTool"},{"id":"d371ea0b-8089-428d-9063-144f35ea21db","type":"SaveTool"},{"id":"8201e00d-56e9-4ca6-b314-86a43036d09e","type":"ResetTool"},{"id":"53a9eae3-6a98-4dba-a626-467096f5dde7","type":"HelpTool"}]},"id":"88beffcd-1c57-477c-b4a2-e29bcf936524","type":"Toolbar"},{"attributes":{"data_source":{"id":"3e977e4f-38e8-4248-b28c-21065ab60f74","type":"ColumnDataSource"},"glyph":{"id":"93d0be3c-d422-4514-bfe1-ebf296851461","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"39b769cc-7b93-4a90-9f58-69e8cd0119ed","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b3a7f802-be5c-4d50-900f-2e2e66efa26b","subtype":"Chart","type":"Plot"}},"id":"3d61690e-a343-4e8e-99ea-3b41f8d1a4df","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"jython"}],"series":["jython"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[[0.0,22.0,43.0,10.0,25.0,26.0,101.0,114.0,203.0,194.0,215.0,201.0,227.0,139.0,160.0,0.0]]}},"id":"f438d0e3-de3e-4fe1-a352-4616a0417120","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"python"}],"series":["python"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[[0.0,2.0,3.0,7.0,5.0,26.0,221.0,44.0,233.0,254.0,265.0,266.0,267.0,120.0,111.0,0.0]]}},"id":"0228f591-88a8-4dbf-b54f-e78cd9f3e3fc","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b3a7f802-be5c-4d50-900f-2e2e66efa26b","subtype":"Chart","type":"Plot"},"ticker":{"id":"edcc0178-98ee-47de-a1da-ad7100be4ca6","type":"BasicTicker"}},"id":"9b9e3baf-b30d-4c45-98c6-51d26c94d66f","type":"Grid"},{"attributes":{"overlay":{"id":"42a6dd52-b289-433b-8c44-a1983f9236a2","type":"BoxAnnotation"},"plot":{"id":"b3a7f802-be5c-4d50-900f-2e2e66efa26b","subtype":"Chart","type":"Plot"}},"id":"259766c4-9003-4782-a99d-2b481fadea50","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"42a6dd52-b289-433b-8c44-a1983f9236a2","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":293.7,"start":-26.700000000000003},"id":"c63718e3-b67f-4afc-94cb-38733e91b2a2","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"b3a7f802-be5c-4d50-900f-2e2e66efa26b","subtype":"Chart","type":"Plot"},"ticker":{"id":"ccb1667e-627f-4f1e-9540-dc76f232f149","type":"BasicTicker"}},"id":"f61e4337-3dfa-4f82-b393-9f85617a8d5e","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"93d0be3c-d422-4514-bfe1-ebf296851461","type":"Patches"},{"attributes":{},"id":"2ae152fc-82e3-4eb2-afcb-7f09266f6977","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"pypy"}],"series":["pypy"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[[0.0,12.0,33.0,47.0,15.0,126.0,121.0,144.0,233.0,254.0,225.0,226.0,267.0,110.0,130.0,0.0]]}},"id":"3e977e4f-38e8-4248-b28c-21065ab60f74","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b3a7f802-be5c-4d50-900f-2e2e66efa26b","subtype":"Chart","type":"Plot"}},"id":"22ed6afa-bd53-4bbf-9930-8ed4f388370d","type":"PanTool"},{"attributes":{"axis_label":"time","formatter":{"id":"6562e079-8ff8-4f45-b566-d12618ace407","type":"BasicTickFormatter"},"plot":{"id":"b3a7f802-be5c-4d50-900f-2e2e66efa26b","subtype":"Chart","type":"Plot"},"ticker":{"id":"edcc0178-98ee-47de-a1da-ad7100be4ca6","type":"BasicTicker"}},"id":"c27b5174-a6a7-4f36-83c3-b7a44f3400d1","type":"LinearAxis"},{"attributes":{"below":[{"id":"c27b5174-a6a7-4f36-83c3-b7a44f3400d1","type":"LinearAxis"}],"height":400,"left":[{"id":"fd56a8d1-ca79-4d14-9c08-46750f9c52d6","type":"LinearAxis"}],"renderers":[{"id":"42a6dd52-b289-433b-8c44-a1983f9236a2","type":"BoxAnnotation"},{"id":"66781f20-c9ab-4426-b1d0-122549852d5f","type":"GlyphRenderer"},{"id":"39b769cc-7b93-4a90-9f58-69e8cd0119ed","type":"GlyphRenderer"},{"id":"fb3471c9-4814-4d9d-b68e-ad9341db19a4","type":"GlyphRenderer"},{"id":"93b4cbd3-90f8-4bba-8740-58c9985fddf6","type":"Legend"},{"id":"c27b5174-a6a7-4f36-83c3-b7a44f3400d1","type":"LinearAxis"},{"id":"fd56a8d1-ca79-4d14-9c08-46750f9c52d6","type":"LinearAxis"},{"id":"9b9e3baf-b30d-4c45-98c6-51d26c94d66f","type":"Grid"},{"id":"f61e4337-3dfa-4f82-b393-9f85617a8d5e","type":"Grid"}],"title":{"id":"70621edb-83ee-4260-ab4b-1a2f1cf3a0d1","type":"Title"},"tool_events":{"id":"2ae152fc-82e3-4eb2-afcb-7f09266f6977","type":"ToolEvents"},"toolbar":{"id":"88beffcd-1c57-477c-b4a2-e29bcf936524","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"35950c77-0347-4a5f-ab99-bcb630507401","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"c63718e3-b67f-4afc-94cb-38733e91b2a2","type":"Range1d"}},"id":"b3a7f802-be5c-4d50-900f-2e2e66efa26b","subtype":"Chart","type":"Plot"},{"attributes":{"axis_label":"memory","formatter":{"id":"0e15e0ba-fc1b-45b9-97d9-56d4a44a48a4","type":"BasicTickFormatter"},"plot":{"id":"b3a7f802-be5c-4d50-900f-2e2e66efa26b","subtype":"Chart","type":"Plot"},"ticker":{"id":"ccb1667e-627f-4f1e-9540-dc76f232f149","type":"BasicTicker"}},"id":"fd56a8d1-ca79-4d14-9c08-46750f9c52d6","type":"LinearAxis"},{"attributes":{"plot":{"id":"b3a7f802-be5c-4d50-900f-2e2e66efa26b","subtype":"Chart","type":"Plot"}},"id":"d371ea0b-8089-428d-9063-144f35ea21db","type":"SaveTool"},{"attributes":{},"id":"0e15e0ba-fc1b-45b9-97d9-56d4a44a48a4","type":"BasicTickFormatter"},{"attributes":{},"id":"edcc0178-98ee-47de-a1da-ad7100be4ca6","type":"BasicTicker"},{"attributes":{"plot":{"id":"b3a7f802-be5c-4d50-900f-2e2e66efa26b","subtype":"Chart","type":"Plot"}},"id":"8201e00d-56e9-4ca6-b314-86a43036d09e","type":"ResetTool"},{"attributes":{"data_source":{"id":"f438d0e3-de3e-4fe1-a352-4616a0417120","type":"ColumnDataSource"},"glyph":{"id":"898b6ae1-981d-49ef-987b-4a666221bf52","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"66781f20-c9ab-4426-b1d0-122549852d5f","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"23695cb0-f833-4493-a42d-0cae8b3ce586","type":"Patches"},{"attributes":{"callback":null,"end":14.3,"start":-1.3},"id":"35950c77-0347-4a5f-ab99-bcb630507401","type":"Range1d"},{"attributes":{"legends":[["jython",[{"id":"66781f20-c9ab-4426-b1d0-122549852d5f","type":"GlyphRenderer"}]],["pypy",[{"id":"39b769cc-7b93-4a90-9f58-69e8cd0119ed","type":"GlyphRenderer"}]],["python",[{"id":"fb3471c9-4814-4d9d-b68e-ad9341db19a4","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"b3a7f802-be5c-4d50-900f-2e2e66efa26b","subtype":"Chart","type":"Plot"}},"id":"93b4cbd3-90f8-4bba-8740-58c9985fddf6","type":"Legend"},{"attributes":{},"id":"ccb1667e-627f-4f1e-9540-dc76f232f149","type":"BasicTicker"},{"attributes":{},"id":"6562e079-8ff8-4f45-b566-d12618ace407","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"898b6ae1-981d-49ef-987b-4a666221bf52","type":"Patches"}],"root_ids":["b3a7f802-be5c-4d50-900f-2e2e66efa26b"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"62fe1ecb-a016-477d-8702-b59dd7b8fc8a","elementid":"a5aa1b52-b359-45dd-836e-75fec84e44a4","modelid":"b3a7f802-be5c-4d50-900f-2e2e66efa26b"}];
              
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