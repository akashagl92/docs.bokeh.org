(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("8eae78b2-569f-4c05-a941-776645842e08");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8eae78b2-569f-4c05-a941-776645842e08' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"f4f14950-fa45-4673-a21e-d4b4ab922216":{"roots":{"references":[{"attributes":{},"id":"fffd42eb-903e-43bd-b7ab-f48334b4409c","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"90a7ddcd-3b70-4977-ab73-2d127c7b8054","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"7bfc7c10-4768-4841-9a71-4758ae6f5ed2","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"05280b7a-f268-417d-842c-216d639e3762","type":"Toolbar"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"ddce10f5-c54a-4629-95aa-0847e8c33981","type":"FactorRange"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"c15fd517-63dc-47ce-89b7-7fd2794a3ffc","type":"Segment"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"02194b2d-6a85-435e-8bf0-567254b686ab","type":"FactorRange"},{"attributes":{},"id":"6d38437b-0291-47b3-aba1-0f35aa454b16","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5affda05-abd6-4ea3-bd0b-d88dc2e9131d","type":"HoverTool"}]},"id":"bf8cd553-7520-4872-a302-261b2c65e604","type":"Toolbar"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"a702e611-de1e-495e-bc86-06c05c1b70fc","type":"Title"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"f4f19c80-7e54-4e61-b98c-991a7ac48da7","type":"Rect"},{"attributes":{},"id":"ba53c54f-9a1b-4ada-ad61-42290d796f73","type":"CategoricalTicker"},{"attributes":{},"id":"26475b64-9237-4af2-89cc-c4b3fa4f9efb","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"7bfc7c10-4768-4841-9a71-4758ae6f5ed2","type":"ColumnDataSource"},"glyph":{"id":"478a40ff-fc2d-400b-b23e-97a74c9d48ad","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d4947be5-2632-4697-94c0-89c1ee62acb2","type":"Circle"},"selection_glyph":null},"id":"552d88d7-d355-4e02-a2c6-15606c77708e","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"d4947be5-2632-4697-94c0-89c1ee62acb2","type":"Circle"},{"attributes":{"plot":{"id":"4069a9dc-95c3-41f3-b95a-41c8d645b70d","subtype":"Figure","type":"Plot"},"ticker":{"id":"2dd66c59-00d3-4af1-85f6-1adc48efe68b","type":"BasicTicker"}},"id":"b2968973-578b-4992-9a1f-8fdcce4e4266","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"9ec78d83-5781-41d5-a3c3-977ada8061d6","type":"Segment"},{"attributes":{},"id":"c8cd7975-a9d7-40ea-87b0-e155b93f5a73","type":"CategoricalScale"},{"attributes":{},"id":"97fa4e02-f80a-41f6-901b-a2f6f4d0e577","type":"CategoricalScale"},{"attributes":{},"id":"cdeeafee-16a7-439f-8104-a1534873e7f6","type":"CategoricalTickFormatter"},{"attributes":{},"id":"c5a954db-5f69-4b29-bf1f-6ab809c40611","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y0","x1","y1"],"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]}},"id":"6254fb1c-527d-42b3-8f81-d4b86877e92e","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"2e5e6064-a94b-4cb5-b79b-a0622404b296","type":"CategoricalAxis"}],"left":[{"id":"ccf87912-ffa0-46a1-be38-defa61213d5c","type":"CategoricalAxis"}],"renderers":[{"id":"2e5e6064-a94b-4cb5-b79b-a0622404b296","type":"CategoricalAxis"},{"id":"fc16dc6a-25b2-4b9c-b31a-4c0131ce8987","type":"Grid"},{"id":"ccf87912-ffa0-46a1-be38-defa61213d5c","type":"CategoricalAxis"},{"id":"ce9ef433-f42e-44b6-8229-4599ddd3d4ed","type":"Grid"},{"id":"526cd77f-2b58-4e6a-8a6b-f60e908c822a","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"3f3f1f52-8e04-46f6-a2bd-905cd3252465","type":"Title"},"tool_events":{"id":"f4cf332d-b1fc-41b6-ac05-a8ba912182aa","type":"ToolEvents"},"toolbar":{"id":"bf8cd553-7520-4872-a302-261b2c65e604","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"90a7ddcd-3b70-4977-ab73-2d127c7b8054","type":"FactorRange"},"x_scale":{"id":"26475b64-9237-4af2-89cc-c4b3fa4f9efb","type":"CategoricalScale"},"y_range":{"id":"02194b2d-6a85-435e-8bf0-567254b686ab","type":"FactorRange"},"y_scale":{"id":"c8cd7975-a9d7-40ea-87b0-e155b93f5a73","type":"CategoricalScale"}},"id":"7e529d10-c668-4074-9fc5-a3203d79c98e","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"7e529d10-c668-4074-9fc5-a3203d79c98e","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d38437b-0291-47b3-aba1-0f35aa454b16","type":"CategoricalTicker"}},"id":"fc16dc6a-25b2-4b9c-b31a-4c0131ce8987","type":"Grid"},{"attributes":{"data_source":{"id":"cdef62b8-bc64-4b22-bcb5-9dd2a5f58032","type":"ColumnDataSource"},"glyph":{"id":"f4f19c80-7e54-4e61-b98c-991a7ac48da7","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b95cc8d5-3249-4d94-8425-30cb48b0a8df","type":"Rect"},"selection_glyph":null},"id":"526cd77f-2b58-4e6a-8a6b-f60e908c822a","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"fffd42eb-903e-43bd-b7ab-f48334b4409c","type":"CategoricalTickFormatter"},"plot":{"id":"7e529d10-c668-4074-9fc5-a3203d79c98e","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d38437b-0291-47b3-aba1-0f35aa454b16","type":"CategoricalTicker"}},"id":"2e5e6064-a94b-4cb5-b79b-a0622404b296","type":"CategoricalAxis"},{"attributes":{},"id":"2dd66c59-00d3-4af1-85f6-1adc48efe68b","type":"BasicTicker"},{"attributes":{"formatter":{"id":"cdeeafee-16a7-439f-8104-a1534873e7f6","type":"CategoricalTickFormatter"},"plot":{"id":"7e529d10-c668-4074-9fc5-a3203d79c98e","subtype":"Figure","type":"Plot"},"ticker":{"id":"32ee887f-d8d4-46d9-8578-cf13e14c46ea","type":"CategoricalTicker"}},"id":"ccf87912-ffa0-46a1-be38-defa61213d5c","type":"CategoricalAxis"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"478a40ff-fc2d-400b-b23e-97a74c9d48ad","type":"Circle"},{"attributes":{},"id":"6671ba3a-e58b-42c9-8384-ef06144e45c7","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"7e529d10-c668-4074-9fc5-a3203d79c98e","subtype":"Figure","type":"Plot"},{"id":"4069a9dc-95c3-41f3-b95a-41c8d645b70d","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"17e1921a-eadd-439c-ab69-fc18309cbe3c","type":"Row"},{"attributes":{"formatter":{"id":"72c4bdb2-9b9d-4507-9f2b-b874a69f536c","type":"CategoricalTickFormatter"},"plot":{"id":"4069a9dc-95c3-41f3-b95a-41c8d645b70d","subtype":"Figure","type":"Plot"},"ticker":{"id":"ba53c54f-9a1b-4ada-ad61-42290d796f73","type":"CategoricalTicker"}},"id":"cbda73c4-ceda-4f9c-8b7f-1941f1ffb707","type":"CategoricalAxis"},{"attributes":{"callback":null,"end":100},"id":"86a427b5-e0ed-46fc-b06f-7af38410ebef","type":"Range1d"},{"attributes":{"data_source":{"id":"6254fb1c-527d-42b3-8f81-d4b86877e92e","type":"ColumnDataSource"},"glyph":{"id":"c15fd517-63dc-47ce-89b7-7fd2794a3ffc","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9ec78d83-5781-41d5-a3c3-977ada8061d6","type":"Segment"},"selection_glyph":null},"id":"02c77dc1-ad0e-4c97-9df3-9a02f19a9a25","type":"GlyphRenderer"},{"attributes":{},"id":"62e4af24-7aa6-44f7-a288-9d5db64153e9","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["y","x","fill_color","line_color"],"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo","foo","foo","bar","bar","bar","baz","baz","baz"],"y":["foo","bar","baz","foo","bar","baz","foo","bar","baz"]}},"id":"cdef62b8-bc64-4b22-bcb5-9dd2a5f58032","type":"ColumnDataSource"},{"attributes":{},"id":"72c4bdb2-9b9d-4507-9f2b-b874a69f536c","type":"CategoricalTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"4069a9dc-95c3-41f3-b95a-41c8d645b70d","subtype":"Figure","type":"Plot"},"ticker":{"id":"ba53c54f-9a1b-4ada-ad61-42290d796f73","type":"CategoricalTicker"}},"id":"49833b65-5e2d-4461-b3c5-ddcccb0b7851","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"b95cc8d5-3249-4d94-8425-30cb48b0a8df","type":"Rect"},{"attributes":{"below":[{"id":"3920f895-e533-448b-b166-4a85c922661e","type":"LinearAxis"}],"left":[{"id":"cbda73c4-ceda-4f9c-8b7f-1941f1ffb707","type":"CategoricalAxis"}],"renderers":[{"id":"3920f895-e533-448b-b166-4a85c922661e","type":"LinearAxis"},{"id":"b2968973-578b-4992-9a1f-8fdcce4e4266","type":"Grid"},{"id":"cbda73c4-ceda-4f9c-8b7f-1941f1ffb707","type":"CategoricalAxis"},{"id":"49833b65-5e2d-4461-b3c5-ddcccb0b7851","type":"Grid"},{"id":"02c77dc1-ad0e-4c97-9df3-9a02f19a9a25","type":"GlyphRenderer"},{"id":"552d88d7-d355-4e02-a2c6-15606c77708e","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"a702e611-de1e-495e-bc86-06c05c1b70fc","type":"Title"},"tool_events":{"id":"c5a954db-5f69-4b29-bf1f-6ab809c40611","type":"ToolEvents"},"toolbar":{"id":"05280b7a-f268-417d-842c-216d639e3762","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"86a427b5-e0ed-46fc-b06f-7af38410ebef","type":"Range1d"},"x_scale":{"id":"62e4af24-7aa6-44f7-a288-9d5db64153e9","type":"LinearScale"},"y_range":{"id":"ddce10f5-c54a-4629-95aa-0847e8c33981","type":"FactorRange"},"y_scale":{"id":"97fa4e02-f80a-41f6-901b-a2f6f4d0e577","type":"CategoricalScale"}},"id":"4069a9dc-95c3-41f3-b95a-41c8d645b70d","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"plot":{"id":"7e529d10-c668-4074-9fc5-a3203d79c98e","subtype":"Figure","type":"Plot"}},"id":"5affda05-abd6-4ea3-bd0b-d88dc2e9131d","type":"HoverTool"},{"attributes":{},"id":"32ee887f-d8d4-46d9-8578-cf13e14c46ea","type":"CategoricalTicker"},{"attributes":{"dimension":1,"plot":{"id":"7e529d10-c668-4074-9fc5-a3203d79c98e","subtype":"Figure","type":"Plot"},"ticker":{"id":"32ee887f-d8d4-46d9-8578-cf13e14c46ea","type":"CategoricalTicker"}},"id":"ce9ef433-f42e-44b6-8229-4599ddd3d4ed","type":"Grid"},{"attributes":{"formatter":{"id":"6671ba3a-e58b-42c9-8384-ef06144e45c7","type":"BasicTickFormatter"},"plot":{"id":"4069a9dc-95c3-41f3-b95a-41c8d645b70d","subtype":"Figure","type":"Plot"},"ticker":{"id":"2dd66c59-00d3-4af1-85f6-1adc48efe68b","type":"BasicTicker"}},"id":"3920f895-e533-448b-b166-4a85c922661e","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"3f3f1f52-8e04-46f6-a2bd-905cd3252465","type":"Title"},{"attributes":{},"id":"f4cf332d-b1fc-41b6-ac05-a8ba912182aa","type":"ToolEvents"}],"root_ids":["17e1921a-eadd-439c-ab69-fc18309cbe3c"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"f4f14950-fa45-4673-a21e-d4b4ab922216","elementid":"8eae78b2-569f-4c05-a941-776645842e08","modelid":"17e1921a-eadd-439c-ab69-fc18309cbe3c"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
