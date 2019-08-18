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
      };var element = document.getElementById("c387a3cb-7e4b-491e-be42-5e03cac4ca81");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c387a3cb-7e4b-491e-be42-5e03cac4ca81' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"2f3fbb19-a85d-412a-ab5c-95f9601fc852":{"roots":{"references":[{"attributes":{"plot":{"id":"553f67d4-6109-4d47-a7ed-ce13eee2fd4a","subtype":"Chart","type":"Plot"}},"id":"19ab277d-08fb-4473-a688-ee7acd934c2a","type":"ResetTool"},{"attributes":{"plot":{"id":"553f67d4-6109-4d47-a7ed-ce13eee2fd4a","subtype":"Chart","type":"Plot"}},"id":"9ebb5550-6040-41c3-b42c-6d61f4de046f","type":"WheelZoomTool"},{"attributes":{"legends":[["(6.8, 8]",[{"id":"46a00236-e9eb-4f52-a4ce-a74f8e7fa8e1","type":"GlyphRenderer"}]],["(5.7, 6.8]",[{"id":"7588a0cc-824a-4cf6-b3f8-0bdb8337c5da","type":"GlyphRenderer"}]],["(4.5, 5.7]",[{"id":"ebbfc3be-4fb8-4090-b351-2f8a89b4b3fc","type":"GlyphRenderer"}]],["(3.3, 4.5]",[{"id":"139af609-57f0-40cc-ab8e-2a5e28b2a350","type":"GlyphRenderer"}]],["[1, 2.2]",[{"id":"baeff3c8-7bf4-4549-b54e-31379efe4586","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"553f67d4-6109-4d47-a7ed-ce13eee2fd4a","subtype":"Chart","type":"Plot"}},"id":"baf2e5c8-d02e-4947-9c02-9bcb5a718483","type":"Legend"},{"attributes":{"below":[{"id":"090ebdeb-4071-43dc-8690-296d25ad3ecd","type":"CategoricalAxis"}],"height":400,"left":[{"id":"eae54d87-d7a6-4cd6-a95e-0b4e8a654fb4","type":"LinearAxis"}],"renderers":[{"id":"d982c007-fc58-4246-b258-03b170289bf1","type":"BoxAnnotation"},{"id":"46a00236-e9eb-4f52-a4ce-a74f8e7fa8e1","type":"GlyphRenderer"},{"id":"7588a0cc-824a-4cf6-b3f8-0bdb8337c5da","type":"GlyphRenderer"},{"id":"ebbfc3be-4fb8-4090-b351-2f8a89b4b3fc","type":"GlyphRenderer"},{"id":"139af609-57f0-40cc-ab8e-2a5e28b2a350","type":"GlyphRenderer"},{"id":"baeff3c8-7bf4-4549-b54e-31379efe4586","type":"GlyphRenderer"},{"id":"baf2e5c8-d02e-4947-9c02-9bcb5a718483","type":"Legend"},{"id":"090ebdeb-4071-43dc-8690-296d25ad3ecd","type":"CategoricalAxis"},{"id":"eae54d87-d7a6-4cd6-a95e-0b4e8a654fb4","type":"LinearAxis"}],"title":{"id":"54e3fb6e-5958-45ab-9240-7f9245eda052","type":"Title"},"tool_events":{"id":"db090b24-fb01-4e78-8915-11307ddaf55f","type":"ToolEvents"},"toolbar":{"id":"70d53652-fbb9-4170-906a-e6c8951c6493","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"43224147-43ed-4975-a695-f1cb492bd167","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"77a6447c-d38f-4c2a-ac74-75c3f85d921e","type":"Range1d"}},"id":"553f67d4-6109-4d47-a7ed-ce13eee2fd4a","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"[1, 2.2]"},{"fruit_count":"[1, 2.2]"}],"fruit_count":["[1, 2.2]","[1, 2.2]"],"values":[1,2],"x":["bananas","bananas"],"y":[1,2]}},"id":"ade3e6a3-3d63-4905-8507-7c3f6a70e1cd","type":"ColumnDataSource"},{"attributes":{},"id":"a986d473-ea35-48dd-baca-2dabd54b954d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"553f67d4-6109-4d47-a7ed-ce13eee2fd4a","subtype":"Chart","type":"Plot"}},"id":"26818b9a-5e20-4063-8ff2-9fa34356b3d8","type":"PanTool"},{"attributes":{"data_source":{"id":"e0488905-b48e-444e-8582-ba232ae703b7","type":"ColumnDataSource"},"glyph":{"id":"e1378471-e65d-4ff3-96a3-eafa7b005310","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ebbfc3be-4fb8-4090-b351-2f8a89b4b3fc","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"26818b9a-5e20-4063-8ff2-9fa34356b3d8","type":"PanTool"},{"id":"9ebb5550-6040-41c3-b42c-6d61f4de046f","type":"WheelZoomTool"},{"id":"031be894-f06e-4183-9642-0e68a1861987","type":"BoxZoomTool"},{"id":"1954a9b4-761f-4b23-8a23-f19e7e8a6002","type":"SaveTool"},{"id":"19ab277d-08fb-4473-a688-ee7acd934c2a","type":"ResetTool"},{"id":"32488857-1fd2-4392-8460-95938a714b6c","type":"HelpTool"}]},"id":"70d53652-fbb9-4170-906a-e6c8951c6493","type":"Toolbar"},{"attributes":{},"id":"e89ab4c6-4da1-48fc-9c7f-4500f73ad04b","type":"CategoricalTicker"},{"attributes":{},"id":"d38d97e2-33ef-4e96-a274-413c91b33203","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#9ecae1"},"height":{"units":"data","value":0.95},"line_color":{"value":"#9ecae1"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"51ac9473-52ca-4cad-a80e-dff3821c2c6a","type":"Rect"},{"attributes":{"data_source":{"id":"c072b1a5-a7b4-4d93-9db5-d13070302c1f","type":"ColumnDataSource"},"glyph":{"id":"87c00a5a-36a0-487f-a099-0d88aaf39bda","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7588a0cc-824a-4cf6-b3f8-0bdb8337c5da","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(5.7, 6.8]"}],"fruit_count":["(5.7, 6.8]"],"values":[6],"x":["pears"],"y":[1]}},"id":"c072b1a5-a7b4-4d93-9db5-d13070302c1f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"16849591-2294-4612-8c54-f6c7b3e5a812","type":"ColumnDataSource"},"glyph":{"id":"51ac9473-52ca-4cad-a80e-dff3821c2c6a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"139af609-57f0-40cc-ab8e-2a5e28b2a350","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"d982c007-fc58-4246-b258-03b170289bf1","type":"BoxAnnotation"},"plot":{"id":"553f67d4-6109-4d47-a7ed-ce13eee2fd4a","subtype":"Chart","type":"Plot"}},"id":"031be894-f06e-4183-9642-0e68a1861987","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"ade3e6a3-3d63-4905-8507-7c3f6a70e1cd","type":"ColumnDataSource"},"glyph":{"id":"8c6e9005-a396-41f0-b38b-96203da80c99","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"baeff3c8-7bf4-4549-b54e-31379efe4586","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"553f67d4-6109-4d47-a7ed-ce13eee2fd4a","subtype":"Chart","type":"Plot"}},"id":"1954a9b4-761f-4b23-8a23-f19e7e8a6002","type":"SaveTool"},{"attributes":{},"id":"db090b24-fb01-4e78-8915-11307ddaf55f","type":"ToolEvents"},{"attributes":{},"id":"bc12035b-44db-489b-b143-d58718314876","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["apples","bananas","pears"]},"id":"43224147-43ed-4975-a695-f1cb492bd167","type":"FactorRange"},{"attributes":{"callback":null,"end":3.77,"start":0.22999999999999998},"id":"77a6447c-d38f-4c2a-ac74-75c3f85d921e","type":"Range1d"},{"attributes":{"plot":null,"text":"Fruits"},"id":"54e3fb6e-5958-45ab-9240-7f9245eda052","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(6.8, 8]"}],"fruit_count":["(6.8, 8]"],"values":[8],"x":["apples"],"y":[3]}},"id":"95ee74f5-0fbf-4694-ac99-20c43a04bdb3","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(4.5, 5.7]"},{"fruit_count":"(4.5, 5.7]"}],"fruit_count":["(4.5, 5.7]","(4.5, 5.7]"],"values":[5,5],"x":["apples","pears"],"y":[2,2]}},"id":"e0488905-b48e-444e-8582-ba232ae703b7","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"95ee74f5-0fbf-4694-ac99-20c43a04bdb3","type":"ColumnDataSource"},"glyph":{"id":"efe10954-177e-469c-96f4-91fac9c1907a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"46a00236-e9eb-4f52-a4ce-a74f8e7fa8e1","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#c6dbef"},"height":{"units":"data","value":0.95},"line_color":{"value":"#c6dbef"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8c6e9005-a396-41f0-b38b-96203da80c99","type":"Rect"},{"attributes":{"axis_label":"fruit","formatter":{"id":"bc12035b-44db-489b-b143-d58718314876","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"553f67d4-6109-4d47-a7ed-ce13eee2fd4a","subtype":"Chart","type":"Plot"},"ticker":{"id":"e89ab4c6-4da1-48fc-9c7f-4500f73ad04b","type":"CategoricalTicker"}},"id":"090ebdeb-4071-43dc-8690-296d25ad3ecd","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#3182bd"},"height":{"units":"data","value":0.95},"line_color":{"value":"#3182bd"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"87c00a5a-36a0-487f-a099-0d88aaf39bda","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(3.3, 4.5]"},{"fruit_count":"(3.3, 4.5]"},{"fruit_count":"(3.3, 4.5]"}],"fruit_count":["(3.3, 4.5]","(3.3, 4.5]","(3.3, 4.5]"],"values":[4,4,4],"x":["apples","bananas","pears"],"y":[1,3,3]}},"id":"16849591-2294-4612-8c54-f6c7b3e5a812","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d982c007-fc58-4246-b258-03b170289bf1","type":"BoxAnnotation"},{"attributes":{"axis_label":"sample","formatter":{"id":"a986d473-ea35-48dd-baca-2dabd54b954d","type":"BasicTickFormatter"},"plot":{"id":"553f67d4-6109-4d47-a7ed-ce13eee2fd4a","subtype":"Chart","type":"Plot"},"ticker":{"id":"d38d97e2-33ef-4e96-a274-413c91b33203","type":"BasicTicker"}},"id":"eae54d87-d7a6-4cd6-a95e-0b4e8a654fb4","type":"LinearAxis"},{"attributes":{"plot":{"id":"553f67d4-6109-4d47-a7ed-ce13eee2fd4a","subtype":"Chart","type":"Plot"}},"id":"32488857-1fd2-4392-8460-95938a714b6c","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#6baed6"},"height":{"units":"data","value":0.95},"line_color":{"value":"#6baed6"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e1378471-e65d-4ff3-96a3-eafa7b005310","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#08519c"},"height":{"units":"data","value":0.95},"line_color":{"value":"#08519c"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"efe10954-177e-469c-96f4-91fac9c1907a","type":"Rect"}],"root_ids":["553f67d4-6109-4d47-a7ed-ce13eee2fd4a"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"2f3fbb19-a85d-412a-ab5c-95f9601fc852","elementid":"c387a3cb-7e4b-491e-be42-5e03cac4ca81","modelid":"553f67d4-6109-4d47-a7ed-ce13eee2fd4a"}];
              
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