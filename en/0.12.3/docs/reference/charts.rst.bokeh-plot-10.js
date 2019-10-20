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
      };var element = document.getElementById("447da748-78ec-4694-bba1-256239ff3f55");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '447da748-78ec-4694-bba1-256239ff3f55' but no matching script tag was found. ")
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
                  var docs_json = {"35a7b07e-1dd6-44e6-b36a-bf25061dc660":{"roots":{"references":[{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"df62130d-a726-4db5-a9b7-a3d701f24107","type":"Line"},{"attributes":{},"id":"0a764370-f392-417a-a4c1-19886d5f0c8a","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"b596d7ee-4e9a-4ee8-9ecd-372cc4439407","type":"Line"},{"attributes":{},"id":"90bfc90d-eb1e-400f-8578-5ec620791a94","type":"BasicTickFormatter"},{"attributes":{},"id":"fc550c30-d43b-49ef-9d23-bfb263769a07","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"75d5f969-aa56-496d-a8ca-62b59dac6ba3","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"035c3081-c562-40ca-bf65-c56535c9b922","type":"LinearAxis"}],"height":400,"left":[{"id":"9d8c5dd1-be3f-4c6b-be17-66357712083a","type":"LinearAxis"}],"renderers":[{"id":"75d5f969-aa56-496d-a8ca-62b59dac6ba3","type":"BoxAnnotation"},{"id":"15332128-4859-4035-b0c2-3fcb33b207cb","type":"GlyphRenderer"},{"id":"1de6772b-e97b-4b0f-99b6-16a2cafe340d","type":"GlyphRenderer"},{"id":"3eaaf0a3-b7d7-42c0-99f4-1ff1a98811d9","type":"Legend"},{"id":"035c3081-c562-40ca-bf65-c56535c9b922","type":"LinearAxis"},{"id":"9d8c5dd1-be3f-4c6b-be17-66357712083a","type":"LinearAxis"},{"id":"57d14538-5192-4c98-884b-89128cc230fb","type":"Grid"},{"id":"8d28a72f-acae-4c47-acac-c2a194827910","type":"Grid"}],"title":{"id":"40d3e0fa-a67b-4a77-86eb-7513b8a70b21","type":"Title"},"tool_events":{"id":"fc550c30-d43b-49ef-9d23-bfb263769a07","type":"ToolEvents"},"toolbar":{"id":"9d6bbbb9-d8da-44e0-81c4-20acfb31154b","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"e76ec72f-40f1-44f3-9d7c-8aa6eef001a8","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"40ca71a6-0c2f-4806-95ba-7bb94ec9228b","type":"Range1d"}},"id":"c0dd3d9b-c019-4e6c-873c-a1243f8f5224","subtype":"Chart","type":"Plot"},{"attributes":{"items":[{"id":"3063bca5-ca8c-42a4-8f53-c4ef4f9253f0","type":"LegendItem"},{"id":"7e88d9dd-a103-42fe-be05-78591155306c","type":"LegendItem"}],"location":"top_left","plot":{"id":"c0dd3d9b-c019-4e6c-873c-a1243f8f5224","subtype":"Chart","type":"Plot"}},"id":"3eaaf0a3-b7d7-42c0-99f4-1ff1a98811d9","type":"Legend"},{"attributes":{"overlay":{"id":"75d5f969-aa56-496d-a8ca-62b59dac6ba3","type":"BoxAnnotation"},"plot":{"id":"c0dd3d9b-c019-4e6c-873c-a1243f8f5224","subtype":"Chart","type":"Plot"}},"id":"3d0fef6a-f9c5-4638-a304-b797c04a8b4d","type":"BoxZoomTool"},{"attributes":{"label":{"value":"stamp"},"renderers":[{"id":"15332128-4859-4035-b0c2-3fcb33b207cb","type":"GlyphRenderer"}]},"id":"3063bca5-ca8c-42a4-8f53-c4ef4f9253f0","type":"LegendItem"},{"attributes":{"plot":{"id":"c0dd3d9b-c019-4e6c-873c-a1243f8f5224","subtype":"Chart","type":"Plot"}},"id":"bbb3e563-6dac-422b-9d7f-87afea6ef956","type":"PanTool"},{"attributes":{"label":{"value":"postcard"},"renderers":[{"id":"1de6772b-e97b-4b0f-99b6-16a2cafe340d","type":"GlyphRenderer"}]},"id":"7e88d9dd-a103-42fe-be05-78591155306c","type":"LegendItem"},{"attributes":{"plot":{"id":"c0dd3d9b-c019-4e6c-873c-a1243f8f5224","subtype":"Chart","type":"Plot"}},"id":"3ae34402-080c-499e-8bde-8e39e26626da","type":"ResetTool"},{"attributes":{"data_source":{"id":"817cba6f-9f8c-4f58-b702-10030dc1290d","type":"ColumnDataSource"},"glyph":{"id":"b596d7ee-4e9a-4ee8-9ecd-372cc4439407","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1de6772b-e97b-4b0f-99b6-16a2cafe340d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"c0dd3d9b-c019-4e6c-873c-a1243f8f5224","subtype":"Chart","type":"Plot"}},"id":"db27708a-d2db-482d-b234-e93277a384ec","type":"SaveTool"},{"attributes":{"data_source":{"id":"5c53a92b-97d2-43d6-a511-378a15f9a23b","type":"ColumnDataSource"},"glyph":{"id":"df62130d-a726-4db5-a9b7-a3d701f24107","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"15332128-4859-4035-b0c2-3fcb33b207cb","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"U.S. Postage Rates (1999-2015)"},"id":"40d3e0fa-a67b-4a77-86eb-7513b8a70b21","type":"Title"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.33,0.33,0.33,0.33,0.34,0.34,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.39,0.39,0.41,0.41,0.42,0.42,0.44,0.44,0.44,0.44,0.44,0.44,0.45,0.45,0.46,0.46,0.49,0.49,0.49]}},"id":"5c53a92b-97d2-43d6-a511-378a15f9a23b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c0dd3d9b-c019-4e6c-873c-a1243f8f5224","subtype":"Chart","type":"Plot"},"ticker":{"id":"1491804f-8fe8-4965-a8e4-959319fb80bc","type":"BasicTicker"}},"id":"57d14538-5192-4c98-884b-89128cc230fb","type":"Grid"},{"attributes":{"plot":{"id":"c0dd3d9b-c019-4e6c-873c-a1243f8f5224","subtype":"Chart","type":"Plot"}},"id":"9fc3ae4c-e5fa-4390-be8a-16be82707e6e","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.2,0.2,0.2,0.2,0.21,0.21,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.24,0.24,0.26,0.26,0.27,0.27,0.28,0.28,0.28,0.28,0.29,0.29,0.32,0.32,0.33,0.33,0.34,0.34,0.35]}},"id":"817cba6f-9f8c-4f58-b702-10030dc1290d","type":"ColumnDataSource"},{"attributes":{"axis_label":"index","formatter":{"id":"90bfc90d-eb1e-400f-8578-5ec620791a94","type":"BasicTickFormatter"},"plot":{"id":"c0dd3d9b-c019-4e6c-873c-a1243f8f5224","subtype":"Chart","type":"Plot"},"ticker":{"id":"1491804f-8fe8-4965-a8e4-959319fb80bc","type":"BasicTicker"}},"id":"035c3081-c562-40ca-bf65-c56535c9b922","type":"LinearAxis"},{"attributes":{},"id":"47783f04-84a8-46d9-9ebe-e752a56caf09","type":"BasicTickFormatter"},{"attributes":{},"id":"1491804f-8fe8-4965-a8e4-959319fb80bc","type":"BasicTicker"},{"attributes":{"callback":null,"end":17.6,"start":-1.6},"id":"e76ec72f-40f1-44f3-9d7c-8aa6eef001a8","type":"Range1d"},{"attributes":{"axis_label":"Rate per ounce","formatter":{"id":"47783f04-84a8-46d9-9ebe-e752a56caf09","type":"BasicTickFormatter"},"plot":{"id":"c0dd3d9b-c019-4e6c-873c-a1243f8f5224","subtype":"Chart","type":"Plot"},"ticker":{"id":"0a764370-f392-417a-a4c1-19886d5f0c8a","type":"BasicTicker"}},"id":"9d8c5dd1-be3f-4c6b-be17-66357712083a","type":"LinearAxis"},{"attributes":{"plot":{"id":"c0dd3d9b-c019-4e6c-873c-a1243f8f5224","subtype":"Chart","type":"Plot"}},"id":"77870f43-0b3b-47bf-9ba2-ea5d8b86de6b","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bbb3e563-6dac-422b-9d7f-87afea6ef956","type":"PanTool"},{"id":"9fc3ae4c-e5fa-4390-be8a-16be82707e6e","type":"WheelZoomTool"},{"id":"3d0fef6a-f9c5-4638-a304-b797c04a8b4d","type":"BoxZoomTool"},{"id":"db27708a-d2db-482d-b234-e93277a384ec","type":"SaveTool"},{"id":"3ae34402-080c-499e-8bde-8e39e26626da","type":"ResetTool"},{"id":"77870f43-0b3b-47bf-9ba2-ea5d8b86de6b","type":"HelpTool"}]},"id":"9d6bbbb9-d8da-44e0-81c4-20acfb31154b","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"c0dd3d9b-c019-4e6c-873c-a1243f8f5224","subtype":"Chart","type":"Plot"},"ticker":{"id":"0a764370-f392-417a-a4c1-19886d5f0c8a","type":"BasicTicker"}},"id":"8d28a72f-acae-4c47-acac-c2a194827910","type":"Grid"},{"attributes":{"callback":null,"end":0.519,"start":0.171},"id":"40ca71a6-0c2f-4806-95ba-7bb94ec9228b","type":"Range1d"}],"root_ids":["c0dd3d9b-c019-4e6c-873c-a1243f8f5224"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"35a7b07e-1dd6-44e6-b36a-bf25061dc660","elementid":"447da748-78ec-4694-bba1-256239ff3f55","modelid":"c0dd3d9b-c019-4e6c-873c-a1243f8f5224"}];
                  
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