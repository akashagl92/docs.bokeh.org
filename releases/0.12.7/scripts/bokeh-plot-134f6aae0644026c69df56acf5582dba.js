(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("48ee4225-9535-4504-b316-be2e96b2358a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '48ee4225-9535-4504-b316-be2e96b2358a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"7ab61c09-418b-4dd2-afdb-7367ade50026":{"roots":{"references":[{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"31dad308-fd28-47a3-9ac6-163915049b0c","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"13017509-062d-4826-8afe-dd1111d6d8a9","type":"Circle"},{"attributes":{},"id":"e565fed1-39d0-4ace-8d79-42a1e9b013d0","type":"CategoricalScale"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"28940a9b-5b7a-4b46-a905-50928e19c996","type":"Segment"},{"attributes":{},"id":"6dd8c796-330e-439c-9a6e-ce76c8ac6381","type":"CategoricalScale"},{"attributes":{},"id":"a18cbcde-be21-4000-ad69-8d6a2d3ac02a","type":"LinearScale"},{"attributes":{"source":{"id":"bedccc53-81f4-4b58-a2b4-835ba97d6b05","type":"ColumnDataSource"}},"id":"eeccffa6-ed12-4a1c-ab25-16b0e01b3407","type":"CDSView"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"008f4ad0-3108-4de5-aafe-58599b5c84b9","type":"Rect"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo 123","foo 123","foo 123","bar:0.2","bar:0.2","bar:0.2","baz-10","baz-10","baz-10"],"y":["foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10"]}},"id":"0010e93c-1252-4a0b-98c5-6d314e591be9","type":"ColumnDataSource"},{"attributes":{},"id":"26847be0-4053-430b-bdc7-bf787a025e3c","type":"BasicTickFormatter"},{"attributes":{},"id":"86892579-eb60-4391-849c-2fe8f7f88534","type":"CategoricalTickFormatter"},{"attributes":{},"id":"6432ff70-d4e0-40f9-8deb-bd3dfb1c6015","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"26847be0-4053-430b-bdc7-bf787a025e3c","type":"BasicTickFormatter"},"plot":{"id":"c8c1258e-7971-4602-903b-c52ff0beb371","subtype":"Figure","type":"Plot"},"ticker":{"id":"634025a1-3263-48d4-8608-7783e64c7a9a","type":"BasicTicker"}},"id":"e34db515-a1a1-4d32-b10b-65778a05091f","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"ee720657-0746-4391-9491-fa54b57d23f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"a1d3d529-35d4-43b6-b0f0-d79e207665ff","type":"CategoricalTicker"}},"id":"dab26276-293a-483e-8d0c-01970c88c39e","type":"Grid"},{"attributes":{"callback":null,"column_names":["y0","x1","y1"],"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]}},"id":"bedccc53-81f4-4b58-a2b4-835ba97d6b05","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"e34db515-a1a1-4d32-b10b-65778a05091f","type":"LinearAxis"}],"left":[{"id":"c7587691-4183-44aa-af37-32d2f5cad0f2","type":"CategoricalAxis"}],"renderers":[{"id":"e34db515-a1a1-4d32-b10b-65778a05091f","type":"LinearAxis"},{"id":"3ed8781e-a996-41f9-96fb-2d38eb56dd04","type":"Grid"},{"id":"c7587691-4183-44aa-af37-32d2f5cad0f2","type":"CategoricalAxis"},{"id":"d37b10fc-9c18-4a8e-b44f-cc697df0af06","type":"Grid"},{"id":"0a1e0a55-4eac-4db4-9fca-0ea287083e9c","type":"GlyphRenderer"},{"id":"db6ec4d0-14db-4dd7-864c-3b7efe8b3f24","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"473b310a-8bce-4739-bfa0-cd00e605ac9f","type":"Title"},"toolbar":{"id":"df815ad3-f8ae-4cab-b03a-dceb9f5b2476","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"19d7fc93-0eeb-4bf6-98a4-467a392ce416","type":"Range1d"},"x_scale":{"id":"a18cbcde-be21-4000-ad69-8d6a2d3ac02a","type":"LinearScale"},"y_range":{"id":"7ae3d1ef-257a-4168-9b65-af55c764b2ed","type":"FactorRange"},"y_scale":{"id":"e565fed1-39d0-4ace-8d79-42a1e9b013d0","type":"CategoricalScale"}},"id":"c8c1258e-7971-4602-903b-c52ff0beb371","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"746b9051-5250-4f36-8c8a-688e6c950d32","type":"CategoricalTickFormatter"},"plot":{"id":"c8c1258e-7971-4602-903b-c52ff0beb371","subtype":"Figure","type":"Plot"},"ticker":{"id":"6432ff70-d4e0-40f9-8deb-bd3dfb1c6015","type":"CategoricalTicker"}},"id":"c7587691-4183-44aa-af37-32d2f5cad0f2","type":"CategoricalAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"70dedc07-9a56-42c4-9707-b71253527e0d","type":"HoverTool"}]},"id":"b10ad07b-f3fa-4394-84f1-eacbcc790c75","type":"Toolbar"},{"attributes":{"plot":{"id":"ee720657-0746-4391-9491-fa54b57d23f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"8fb51c63-4953-42d6-a889-59dd398ce4fa","type":"CategoricalTicker"}},"id":"f5a7356c-9b89-4fb1-a946-81fc56294d9b","type":"Grid"},{"attributes":{},"id":"cbb35b03-6ca7-438b-8044-8aa9e5e9950c","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"4d06bec3-e0b0-401e-813c-807f3e7cb2b4","type":"FactorRange"},{"attributes":{"callback":null},"id":"70dedc07-9a56-42c4-9707-b71253527e0d","type":"HoverTool"},{"attributes":{"dimension":1,"plot":{"id":"c8c1258e-7971-4602-903b-c52ff0beb371","subtype":"Figure","type":"Plot"},"ticker":{"id":"6432ff70-d4e0-40f9-8deb-bd3dfb1c6015","type":"CategoricalTicker"}},"id":"d37b10fc-9c18-4a8e-b44f-cc697df0af06","type":"Grid"},{"attributes":{},"id":"dbb1d8af-d098-4b57-bb21-15ce04af44c6","type":"CategoricalScale"},{"attributes":{"below":[{"id":"90164850-2c8c-4bfc-a3d7-c6039058d5dc","type":"CategoricalAxis"}],"left":[{"id":"48bca000-78bb-4290-9a4e-9a5b3a881c74","type":"CategoricalAxis"}],"renderers":[{"id":"90164850-2c8c-4bfc-a3d7-c6039058d5dc","type":"CategoricalAxis"},{"id":"f5a7356c-9b89-4fb1-a946-81fc56294d9b","type":"Grid"},{"id":"48bca000-78bb-4290-9a4e-9a5b3a881c74","type":"CategoricalAxis"},{"id":"dab26276-293a-483e-8d0c-01970c88c39e","type":"Grid"},{"id":"396ef5b8-5b8c-4064-b7b0-ba3d5a33f4f0","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"5f2b40d2-fe1e-480b-9182-a9f207f19deb","type":"Title"},"toolbar":{"id":"b10ad07b-f3fa-4394-84f1-eacbcc790c75","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4c75e4e8-3f61-4040-8945-1436e6f1f649","type":"FactorRange"},"x_scale":{"id":"dbb1d8af-d098-4b57-bb21-15ce04af44c6","type":"CategoricalScale"},"y_range":{"id":"4d06bec3-e0b0-401e-813c-807f3e7cb2b4","type":"FactorRange"},"y_scale":{"id":"6dd8c796-330e-439c-9a6e-ce76c8ac6381","type":"CategoricalScale"}},"id":"ee720657-0746-4391-9491-fa54b57d23f8","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"473b310a-8bce-4739-bfa0-cd00e605ac9f","type":"Title"},{"attributes":{},"id":"746b9051-5250-4f36-8c8a-688e6c950d32","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"0cb25bba-dc91-47cf-8481-ab6dcebc8166","type":"ColumnDataSource"}},"id":"7ba3171c-e0b7-43db-b273-5a95e57c6b7d","type":"CDSView"},{"attributes":{"formatter":{"id":"cbb35b03-6ca7-438b-8044-8aa9e5e9950c","type":"CategoricalTickFormatter"},"plot":{"id":"ee720657-0746-4391-9491-fa54b57d23f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"8fb51c63-4953-42d6-a889-59dd398ce4fa","type":"CategoricalTicker"}},"id":"90164850-2c8c-4bfc-a3d7-c6039058d5dc","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"0cb25bba-dc91-47cf-8481-ab6dcebc8166","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"bedccc53-81f4-4b58-a2b4-835ba97d6b05","type":"ColumnDataSource"},"glyph":{"id":"28940a9b-5b7a-4b46-a905-50928e19c996","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"353ef176-8e2e-4430-b729-3ae690848cad","type":"Segment"},"selection_glyph":null,"view":{"id":"eeccffa6-ed12-4a1c-ab25-16b0e01b3407","type":"CDSView"}},"id":"0a1e0a55-4eac-4db4-9fca-0ea287083e9c","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"86892579-eb60-4391-849c-2fe8f7f88534","type":"CategoricalTickFormatter"},"plot":{"id":"ee720657-0746-4391-9491-fa54b57d23f8","subtype":"Figure","type":"Plot"},"ticker":{"id":"a1d3d529-35d4-43b6-b0f0-d79e207665ff","type":"CategoricalTicker"}},"id":"48bca000-78bb-4290-9a4e-9a5b3a881c74","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"0010e93c-1252-4a0b-98c5-6d314e591be9","type":"ColumnDataSource"},"glyph":{"id":"008f4ad0-3108-4de5-aafe-58599b5c84b9","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"274dac05-3adb-411c-a182-057e626a4d8b","type":"Rect"},"selection_glyph":null,"view":{"id":"9e5706f9-bc31-4a59-9e67-221fab1e5efd","type":"CDSView"}},"id":"396ef5b8-5b8c-4064-b7b0-ba3d5a33f4f0","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"0cb25bba-dc91-47cf-8481-ab6dcebc8166","type":"ColumnDataSource"},"glyph":{"id":"31dad308-fd28-47a3-9ac6-163915049b0c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13017509-062d-4826-8afe-dd1111d6d8a9","type":"Circle"},"selection_glyph":null,"view":{"id":"7ba3171c-e0b7-43db-b273-5a95e57c6b7d","type":"CDSView"}},"id":"db6ec4d0-14db-4dd7-864c-3b7efe8b3f24","type":"GlyphRenderer"},{"attributes":{},"id":"a1d3d529-35d4-43b6-b0f0-d79e207665ff","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"7ae3d1ef-257a-4168-9b65-af55c764b2ed","type":"FactorRange"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"4c75e4e8-3f61-4040-8945-1436e6f1f649","type":"FactorRange"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"353ef176-8e2e-4430-b729-3ae690848cad","type":"Segment"},{"attributes":{"source":{"id":"0010e93c-1252-4a0b-98c5-6d314e591be9","type":"ColumnDataSource"}},"id":"9e5706f9-bc31-4a59-9e67-221fab1e5efd","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"274dac05-3adb-411c-a182-057e626a4d8b","type":"Rect"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"5f2b40d2-fe1e-480b-9182-a9f207f19deb","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"df815ad3-f8ae-4cab-b03a-dceb9f5b2476","type":"Toolbar"},{"attributes":{},"id":"634025a1-3263-48d4-8608-7783e64c7a9a","type":"BasicTicker"},{"attributes":{"callback":null,"end":100},"id":"19d7fc93-0eeb-4bf6-98a4-467a392ce416","type":"Range1d"},{"attributes":{},"id":"8fb51c63-4953-42d6-a889-59dd398ce4fa","type":"CategoricalTicker"},{"attributes":{"children":[{"id":"ee720657-0746-4391-9491-fa54b57d23f8","subtype":"Figure","type":"Plot"},{"id":"c8c1258e-7971-4602-903b-c52ff0beb371","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"11b5c8f9-34b4-431e-bb87-b4577e324463","type":"Row"},{"attributes":{"plot":{"id":"c8c1258e-7971-4602-903b-c52ff0beb371","subtype":"Figure","type":"Plot"},"ticker":{"id":"634025a1-3263-48d4-8608-7783e64c7a9a","type":"BasicTicker"}},"id":"3ed8781e-a996-41f9-96fb-2d38eb56dd04","type":"Grid"}],"root_ids":["11b5c8f9-34b4-431e-bb87-b4577e324463"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"7ab61c09-418b-4dd2-afdb-7367ade50026","elementid":"48ee4225-9535-4504-b316-be2e96b2358a","modelid":"11b5c8f9-34b4-431e-bb87-b4577e324463"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
