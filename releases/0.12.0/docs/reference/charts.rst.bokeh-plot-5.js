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
      };var element = document.getElementById("c44607fd-14b7-4b66-8d11-df261d04a89e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c44607fd-14b7-4b66-8d11-df261d04a89e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"f127055e-4e18-414a-88c0-a77486e98a7f":{"roots":{"references":[{"attributes":{"data_source":{"id":"a99adbfe-60b7-418d-80bd-93e91674ca2d","type":"ColumnDataSource"},"glyph":{"id":"8390f8cb-7f07-4fd6-a0d3-e09a8fdf9480","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2e1ea8de-e6ef-4a7e-84cd-3b42a0ce90bf","type":"GlyphRenderer"},{"attributes":{},"id":"afbd1e21-579d-4731-a349-864a974ba242","type":"CategoricalTicker"},{"attributes":{},"id":"6a19f839-c2c4-46ca-8461-0785955bc523","type":"ToolEvents"},{"attributes":{"dilate":true,"fill_color":{"value":"#3182bd"},"height":{"units":"data","value":0.95},"line_color":{"value":"#3182bd"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"365eb77b-5eb1-41de-8b64-f09c75b28889","type":"Rect"},{"attributes":{"data_source":{"id":"33bf3457-7364-460d-a9be-1d626db0f637","type":"ColumnDataSource"},"glyph":{"id":"ad4078f3-6ac6-453f-9e26-05b70afd1e07","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d9ff6dc5-47ee-405b-9c8e-2715f78e5830","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"416b1928-3299-402d-af92-1fcdb0b58340","type":"CategoricalAxis"}],"height":400,"left":[{"id":"6adc85c9-cb7f-4a6d-8c98-ea19a808a49e","type":"LinearAxis"}],"renderers":[{"id":"ec781f65-0738-4b36-9e9d-3ddc115971c6","type":"BoxAnnotation"},{"id":"d9ff6dc5-47ee-405b-9c8e-2715f78e5830","type":"GlyphRenderer"},{"id":"2e52a0eb-4367-4c34-ae7c-9d790b958797","type":"GlyphRenderer"},{"id":"add0e1bf-7537-496d-a47a-707006f9ad4d","type":"GlyphRenderer"},{"id":"2e1ea8de-e6ef-4a7e-84cd-3b42a0ce90bf","type":"GlyphRenderer"},{"id":"c195518c-1e6f-4eee-b095-9b48fe07c514","type":"GlyphRenderer"},{"id":"89eaac70-8c57-46ba-8437-5115da5b23cc","type":"Legend"},{"id":"416b1928-3299-402d-af92-1fcdb0b58340","type":"CategoricalAxis"},{"id":"6adc85c9-cb7f-4a6d-8c98-ea19a808a49e","type":"LinearAxis"}],"title":{"id":"838ba4a3-ab90-4a63-bc02-0a7c78fae556","type":"Title"},"tool_events":{"id":"6a19f839-c2c4-46ca-8461-0785955bc523","type":"ToolEvents"},"toolbar":{"id":"a1a07c12-afc1-446d-a631-360cf386b898","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"c530f36d-fbb4-4a60-bd82-70f9d953f5bd","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"84f25a2b-d1d0-4ba2-84d0-8cc095fd3df5","type":"Range1d"}},"id":"5329690d-a017-4aee-ba54-9d1ae6a70494","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"5329690d-a017-4aee-ba54-9d1ae6a70494","subtype":"Chart","type":"Plot"}},"id":"e4488538-f5cf-4f38-b116-7a6731f747df","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(6.8, 8]"}],"fruit_count":["(6.8, 8]"],"values":[8],"x":["apples"],"y":[3]}},"id":"33bf3457-7364-460d-a9be-1d626db0f637","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(5.7, 6.8]"}],"fruit_count":["(5.7, 6.8]"],"values":[6],"x":["pears"],"y":[1]}},"id":"f074b003-9f8e-4509-92e4-6ffdee661acc","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#9ecae1"},"height":{"units":"data","value":0.95},"line_color":{"value":"#9ecae1"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8390f8cb-7f07-4fd6-a0d3-e09a8fdf9480","type":"Rect"},{"attributes":{"data_source":{"id":"f074b003-9f8e-4509-92e4-6ffdee661acc","type":"ColumnDataSource"},"glyph":{"id":"365eb77b-5eb1-41de-8b64-f09c75b28889","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2e52a0eb-4367-4c34-ae7c-9d790b958797","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(4.5, 5.7]"},{"fruit_count":"(4.5, 5.7]"}],"fruit_count":["(4.5, 5.7]","(4.5, 5.7]"],"values":[5,5],"x":["apples","pears"],"y":[2,2]}},"id":"58001024-92c7-4720-bb44-245b8954c912","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"ec781f65-0738-4b36-9e9d-3ddc115971c6","type":"BoxAnnotation"},"plot":{"id":"5329690d-a017-4aee-ba54-9d1ae6a70494","subtype":"Chart","type":"Plot"}},"id":"fa4694df-e929-46b5-886c-b81031e82695","type":"BoxZoomTool"},{"attributes":{"callback":null,"factors":["apples","bananas","pears"]},"id":"c530f36d-fbb4-4a60-bd82-70f9d953f5bd","type":"FactorRange"},{"attributes":{},"id":"5e44bdc7-146a-4477-b460-f4e1af813345","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"47de607a-4295-4690-ad95-c00c48f3e905","type":"ColumnDataSource"},"glyph":{"id":"e8484b23-2678-45ed-85ac-0a236180b0ec","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c195518c-1e6f-4eee-b095-9b48fe07c514","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(3.3, 4.5]"},{"fruit_count":"(3.3, 4.5]"},{"fruit_count":"(3.3, 4.5]"}],"fruit_count":["(3.3, 4.5]","(3.3, 4.5]","(3.3, 4.5]"],"values":[4,4,4],"x":["apples","bananas","pears"],"y":[1,3,3]}},"id":"a99adbfe-60b7-418d-80bd-93e91674ca2d","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"5329690d-a017-4aee-ba54-9d1ae6a70494","subtype":"Chart","type":"Plot"}},"id":"d640a8c4-3e95-4fb7-8221-7c1205b7b599","type":"SaveTool"},{"attributes":{"callback":null,"end":3.77,"start":0.22999999999999998},"id":"84f25a2b-d1d0-4ba2-84d0-8cc095fd3df5","type":"Range1d"},{"attributes":{},"id":"5903e660-3aec-487d-8833-4a099a6f3d85","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"5329690d-a017-4aee-ba54-9d1ae6a70494","subtype":"Chart","type":"Plot"}},"id":"14fb8bb0-14d2-4fcf-a70f-d3c35f2a2993","type":"WheelZoomTool"},{"attributes":{},"id":"ed860e76-ae56-4025-be04-c43417fc84d3","type":"BasicTicker"},{"attributes":{"plot":{"id":"5329690d-a017-4aee-ba54-9d1ae6a70494","subtype":"Chart","type":"Plot"}},"id":"dc70462f-18b9-4882-b9a0-6d8f111cbb5b","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ec781f65-0738-4b36-9e9d-3ddc115971c6","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"5329690d-a017-4aee-ba54-9d1ae6a70494","subtype":"Chart","type":"Plot"}},"id":"4ae65070-cacb-4c92-aad4-9f774c66ac7b","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4ae65070-cacb-4c92-aad4-9f774c66ac7b","type":"PanTool"},{"id":"14fb8bb0-14d2-4fcf-a70f-d3c35f2a2993","type":"WheelZoomTool"},{"id":"fa4694df-e929-46b5-886c-b81031e82695","type":"BoxZoomTool"},{"id":"d640a8c4-3e95-4fb7-8221-7c1205b7b599","type":"SaveTool"},{"id":"e4488538-f5cf-4f38-b116-7a6731f747df","type":"ResetTool"},{"id":"dc70462f-18b9-4882-b9a0-6d8f111cbb5b","type":"HelpTool"}]},"id":"a1a07c12-afc1-446d-a631-360cf386b898","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#c6dbef"},"height":{"units":"data","value":0.95},"line_color":{"value":"#c6dbef"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e8484b23-2678-45ed-85ac-0a236180b0ec","type":"Rect"},{"attributes":{"axis_label":"sample","formatter":{"id":"5e44bdc7-146a-4477-b460-f4e1af813345","type":"BasicTickFormatter"},"plot":{"id":"5329690d-a017-4aee-ba54-9d1ae6a70494","subtype":"Chart","type":"Plot"},"ticker":{"id":"ed860e76-ae56-4025-be04-c43417fc84d3","type":"BasicTicker"}},"id":"6adc85c9-cb7f-4a6d-8c98-ea19a808a49e","type":"LinearAxis"},{"attributes":{"axis_label":"fruit","formatter":{"id":"5903e660-3aec-487d-8833-4a099a6f3d85","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"5329690d-a017-4aee-ba54-9d1ae6a70494","subtype":"Chart","type":"Plot"},"ticker":{"id":"afbd1e21-579d-4731-a349-864a974ba242","type":"CategoricalTicker"}},"id":"416b1928-3299-402d-af92-1fcdb0b58340","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"58001024-92c7-4720-bb44-245b8954c912","type":"ColumnDataSource"},"glyph":{"id":"4aafefc2-29c8-489c-9da9-2f3aecdf60d5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"add0e1bf-7537-496d-a47a-707006f9ad4d","type":"GlyphRenderer"},{"attributes":{"legends":[["(6.8, 8]",[{"id":"d9ff6dc5-47ee-405b-9c8e-2715f78e5830","type":"GlyphRenderer"}]],["(5.7, 6.8]",[{"id":"2e52a0eb-4367-4c34-ae7c-9d790b958797","type":"GlyphRenderer"}]],["(4.5, 5.7]",[{"id":"add0e1bf-7537-496d-a47a-707006f9ad4d","type":"GlyphRenderer"}]],["(3.3, 4.5]",[{"id":"2e1ea8de-e6ef-4a7e-84cd-3b42a0ce90bf","type":"GlyphRenderer"}]],["[1, 2.2]",[{"id":"c195518c-1e6f-4eee-b095-9b48fe07c514","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"5329690d-a017-4aee-ba54-9d1ae6a70494","subtype":"Chart","type":"Plot"}},"id":"89eaac70-8c57-46ba-8437-5115da5b23cc","type":"Legend"},{"attributes":{"dilate":true,"fill_color":{"value":"#08519c"},"height":{"units":"data","value":0.95},"line_color":{"value":"#08519c"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ad4078f3-6ac6-453f-9e26-05b70afd1e07","type":"Rect"},{"attributes":{"plot":null,"text":"Fruits"},"id":"838ba4a3-ab90-4a63-bc02-0a7c78fae556","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"[1, 2.2]"},{"fruit_count":"[1, 2.2]"}],"fruit_count":["[1, 2.2]","[1, 2.2]"],"values":[1,2],"x":["bananas","bananas"],"y":[1,2]}},"id":"47de607a-4295-4690-ad95-c00c48f3e905","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#6baed6"},"height":{"units":"data","value":0.95},"line_color":{"value":"#6baed6"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4aafefc2-29c8-489c-9da9-2f3aecdf60d5","type":"Rect"}],"root_ids":["5329690d-a017-4aee-ba54-9d1ae6a70494"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"f127055e-4e18-414a-88c0-a77486e98a7f","elementid":"c44607fd-14b7-4b66-8d11-df261d04a89e","modelid":"5329690d-a017-4aee-ba54-9d1ae6a70494"}];
              
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