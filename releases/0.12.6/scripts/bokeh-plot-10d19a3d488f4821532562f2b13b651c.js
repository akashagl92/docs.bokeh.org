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
      };var element = document.getElementById("238e3f58-04c4-4ecf-bc0d-6ce931f62422");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '238e3f58-04c4-4ecf-bc0d-6ce931f62422' but no matching script tag was found. ")
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
                var docs_json = {"6ffff2e6-4d32-4e0b-a357-5dcf87142123":{"roots":{"references":[{"attributes":{"callback":null,"end":100},"id":"55a0755c-6c62-46d3-ab68-3063ff8c1a4c","type":"Range1d"},{"attributes":{},"id":"2c196b2f-5a9e-4cf8-bf0b-cbc98ad0ee6c","type":"CategoricalScale"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"679564da-21ec-4eea-8d48-f89f17776b5f","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"436b756f-d3ce-431d-a4b1-6abf19dc3d0b","type":"LinearAxis"}],"left":[{"id":"79337cdb-0065-4d4e-a6fb-98e47c6550b9","type":"CategoricalAxis"}],"renderers":[{"id":"436b756f-d3ce-431d-a4b1-6abf19dc3d0b","type":"LinearAxis"},{"id":"f8d7d5b5-a144-40ac-b186-950d14dd43ba","type":"Grid"},{"id":"79337cdb-0065-4d4e-a6fb-98e47c6550b9","type":"CategoricalAxis"},{"id":"d3662155-b662-43fa-a9e8-7dcea52bbf03","type":"Grid"},{"id":"8dc3a868-9494-4856-b2ee-5563c4d74a3d","type":"GlyphRenderer"},{"id":"7eba5b29-3392-4ac7-b5e7-1699a0b0da43","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"0c6f923d-ebc1-4259-a04f-afb0a9d8c22e","type":"Title"},"tool_events":{"id":"4d11242a-8e46-484d-9723-f3f8b41bf94d","type":"ToolEvents"},"toolbar":{"id":"e94bdfbe-ff8e-4439-a615-99e9a0570c37","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"55a0755c-6c62-46d3-ab68-3063ff8c1a4c","type":"Range1d"},"x_scale":{"id":"0f56cfa0-f70d-4b88-877b-ecc355e47d2f","type":"LinearScale"},"y_range":{"id":"5ee18412-5185-41bf-a7e9-93a5bd9e9813","type":"FactorRange"},"y_scale":{"id":"2c196b2f-5a9e-4cf8-bf0b-cbc98ad0ee6c","type":"CategoricalScale"}},"id":"9c56965d-ae29-4519-82d7-3e61a7cb928b","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"0e110e01-ff9b-4261-aec0-ab87f38f41f4","type":"CategoricalTickFormatter"},"plot":{"id":"6ff939a9-7a41-4405-8713-72ef0e720e11","subtype":"Figure","type":"Plot"},"ticker":{"id":"6c788c1d-e2e3-4af8-8eb3-41ff437841f7","type":"CategoricalTicker"}},"id":"2ad91823-f21b-4bbb-915b-9f60eda4d36a","type":"CategoricalAxis"},{"attributes":{"dimension":1,"plot":{"id":"9c56965d-ae29-4519-82d7-3e61a7cb928b","subtype":"Figure","type":"Plot"},"ticker":{"id":"ecbfa101-4eaa-4994-9052-54a45d7d5936","type":"CategoricalTicker"}},"id":"d3662155-b662-43fa-a9e8-7dcea52bbf03","type":"Grid"},{"attributes":{"below":[{"id":"2ad91823-f21b-4bbb-915b-9f60eda4d36a","type":"CategoricalAxis"}],"left":[{"id":"a802c7fb-db51-4b73-acbd-cb518bb9dab3","type":"CategoricalAxis"}],"renderers":[{"id":"2ad91823-f21b-4bbb-915b-9f60eda4d36a","type":"CategoricalAxis"},{"id":"e5a960b3-77e9-4d28-ba6a-f44a17f783e0","type":"Grid"},{"id":"a802c7fb-db51-4b73-acbd-cb518bb9dab3","type":"CategoricalAxis"},{"id":"abe2783e-59fe-457c-9081-e2cb1c4e5d9f","type":"Grid"},{"id":"9060e708-8efa-4539-9c46-863d7144b061","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"6dcbd577-958a-4ae0-a898-66d733d917a9","type":"Title"},"tool_events":{"id":"50e0f4a1-e066-4de6-9d4e-9c4935dd192f","type":"ToolEvents"},"toolbar":{"id":"f11e6acf-0fc8-4299-98d0-c3f8396bed0a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"eff9eabe-c216-403f-b16f-6ebc0080f6e3","type":"FactorRange"},"x_scale":{"id":"f2ef1c71-0d5b-48bf-b828-b0231ee7e357","type":"CategoricalScale"},"y_range":{"id":"300f11a7-70d4-470d-a995-5118ad985872","type":"FactorRange"},"y_scale":{"id":"65d98906-8df9-48ac-9c7e-35c999c5ed51","type":"CategoricalScale"}},"id":"6ff939a9-7a41-4405-8713-72ef0e720e11","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"9ca0ca8b-9cce-4b48-a8d4-3fca1f51d66e","type":"BasicTickFormatter"},"plot":{"id":"9c56965d-ae29-4519-82d7-3e61a7cb928b","subtype":"Figure","type":"Plot"},"ticker":{"id":"9559cf3b-bd1c-47da-be31-f2c4bfd5baf8","type":"BasicTicker"}},"id":"436b756f-d3ce-431d-a4b1-6abf19dc3d0b","type":"LinearAxis"},{"attributes":{"children":[{"id":"6ff939a9-7a41-4405-8713-72ef0e720e11","subtype":"Figure","type":"Plot"},{"id":"9c56965d-ae29-4519-82d7-3e61a7cb928b","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"25a9e94b-9d76-4575-9bbb-89774fcd2ae8","type":"Row"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"212264e0-5de5-448b-b380-301343529823","type":"Circle"},{"attributes":{"callback":null,"column_names":["y","x","fill_color","line_color"],"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo","foo","foo","bar","bar","bar","baz","baz","baz"],"y":["foo","bar","baz","foo","bar","baz","foo","bar","baz"]}},"id":"a012b276-dc50-4e04-92a6-a4f564b3d8fc","type":"ColumnDataSource"},{"attributes":{},"id":"5a092b43-aa7a-426b-a812-d07c0dbed9eb","type":"CategoricalTickFormatter"},{"attributes":{},"id":"ecbfa101-4eaa-4994-9052-54a45d7d5936","type":"CategoricalTicker"},{"attributes":{},"id":"9559cf3b-bd1c-47da-be31-f2c4bfd5baf8","type":"BasicTicker"},{"attributes":{},"id":"4d11242a-8e46-484d-9723-f3f8b41bf94d","type":"ToolEvents"},{"attributes":{},"id":"6c788c1d-e2e3-4af8-8eb3-41ff437841f7","type":"CategoricalTicker"},{"attributes":{"callback":null,"plot":{"id":"6ff939a9-7a41-4405-8713-72ef0e720e11","subtype":"Figure","type":"Plot"}},"id":"a234f539-5af6-491d-bc44-0207412d1131","type":"HoverTool"},{"attributes":{},"id":"0cdf666b-429b-46ed-91a0-c1cee5628e53","type":"CategoricalTickFormatter"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"0c6f923d-ebc1-4259-a04f-afb0a9d8c22e","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a234f539-5af6-491d-bc44-0207412d1131","type":"HoverTool"}]},"id":"f11e6acf-0fc8-4299-98d0-c3f8396bed0a","type":"Toolbar"},{"attributes":{"plot":{"id":"9c56965d-ae29-4519-82d7-3e61a7cb928b","subtype":"Figure","type":"Plot"},"ticker":{"id":"9559cf3b-bd1c-47da-be31-f2c4bfd5baf8","type":"BasicTicker"}},"id":"f8d7d5b5-a144-40ac-b186-950d14dd43ba","type":"Grid"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"0f79de73-8b52-4329-a804-de513d513a62","type":"Circle"},{"attributes":{"data_source":{"id":"d917cb0b-aff2-4547-a452-4db8198a0a21","type":"ColumnDataSource"},"glyph":{"id":"d7aae424-d969-4160-a44a-dda8c01b0034","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0a4c70c2-93f4-4da5-8779-17d8e9cecfc7","type":"Segment"},"selection_glyph":null},"id":"8dc3a868-9494-4856-b2ee-5563c4d74a3d","type":"GlyphRenderer"},{"attributes":{},"id":"50e0f4a1-e066-4de6-9d4e-9c4935dd192f","type":"ToolEvents"},{"attributes":{"formatter":{"id":"0cdf666b-429b-46ed-91a0-c1cee5628e53","type":"CategoricalTickFormatter"},"plot":{"id":"6ff939a9-7a41-4405-8713-72ef0e720e11","subtype":"Figure","type":"Plot"},"ticker":{"id":"924fc91b-bc1e-44d3-8383-9fee13e0f072","type":"CategoricalTicker"}},"id":"a802c7fb-db51-4b73-acbd-cb518bb9dab3","type":"CategoricalAxis"},{"attributes":{"dimension":1,"plot":{"id":"6ff939a9-7a41-4405-8713-72ef0e720e11","subtype":"Figure","type":"Plot"},"ticker":{"id":"924fc91b-bc1e-44d3-8383-9fee13e0f072","type":"CategoricalTicker"}},"id":"abe2783e-59fe-457c-9081-e2cb1c4e5d9f","type":"Grid"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"300f11a7-70d4-470d-a995-5118ad985872","type":"FactorRange"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"6dcbd577-958a-4ae0-a898-66d733d917a9","type":"Title"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"7e1a4e66-8b18-4d1c-899b-f7b370eef2b6","type":"Rect"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"e94bdfbe-ff8e-4439-a615-99e9a0570c37","type":"Toolbar"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"5ee18412-5185-41bf-a7e9-93a5bd9e9813","type":"FactorRange"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"0a4c70c2-93f4-4da5-8779-17d8e9cecfc7","type":"Segment"},{"attributes":{"data_source":{"id":"679564da-21ec-4eea-8d48-f89f17776b5f","type":"ColumnDataSource"},"glyph":{"id":"0f79de73-8b52-4329-a804-de513d513a62","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"212264e0-5de5-448b-b380-301343529823","type":"Circle"},"selection_glyph":null},"id":"7eba5b29-3392-4ac7-b5e7-1699a0b0da43","type":"GlyphRenderer"},{"attributes":{},"id":"0e110e01-ff9b-4261-aec0-ab87f38f41f4","type":"CategoricalTickFormatter"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"d7aae424-d969-4160-a44a-dda8c01b0034","type":"Segment"},{"attributes":{},"id":"0f56cfa0-f70d-4b88-877b-ecc355e47d2f","type":"LinearScale"},{"attributes":{},"id":"65d98906-8df9-48ac-9c7e-35c999c5ed51","type":"CategoricalScale"},{"attributes":{"plot":{"id":"6ff939a9-7a41-4405-8713-72ef0e720e11","subtype":"Figure","type":"Plot"},"ticker":{"id":"6c788c1d-e2e3-4af8-8eb3-41ff437841f7","type":"CategoricalTicker"}},"id":"e5a960b3-77e9-4d28-ba6a-f44a17f783e0","type":"Grid"},{"attributes":{"data_source":{"id":"a012b276-dc50-4e04-92a6-a4f564b3d8fc","type":"ColumnDataSource"},"glyph":{"id":"7e1a4e66-8b18-4d1c-899b-f7b370eef2b6","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7fc21e09-83dc-4714-a084-cc11daab45fe","type":"Rect"},"selection_glyph":null},"id":"9060e708-8efa-4539-9c46-863d7144b061","type":"GlyphRenderer"},{"attributes":{},"id":"f2ef1c71-0d5b-48bf-b828-b0231ee7e357","type":"CategoricalScale"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"eff9eabe-c216-403f-b16f-6ebc0080f6e3","type":"FactorRange"},{"attributes":{},"id":"9ca0ca8b-9cce-4b48-a8d4-3fca1f51d66e","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y0","x1","y1"],"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]}},"id":"d917cb0b-aff2-4547-a452-4db8198a0a21","type":"ColumnDataSource"},{"attributes":{},"id":"924fc91b-bc1e-44d3-8383-9fee13e0f072","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"5a092b43-aa7a-426b-a812-d07c0dbed9eb","type":"CategoricalTickFormatter"},"plot":{"id":"9c56965d-ae29-4519-82d7-3e61a7cb928b","subtype":"Figure","type":"Plot"},"ticker":{"id":"ecbfa101-4eaa-4994-9052-54a45d7d5936","type":"CategoricalTicker"}},"id":"79337cdb-0065-4d4e-a6fb-98e47c6550b9","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"7fc21e09-83dc-4714-a084-cc11daab45fe","type":"Rect"}],"root_ids":["25a9e94b-9d76-4575-9bbb-89774fcd2ae8"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"6ffff2e6-4d32-4e0b-a357-5dcf87142123","elementid":"238e3f58-04c4-4ecf-bc0d-6ce931f62422","modelid":"25a9e94b-9d76-4575-9bbb-89774fcd2ae8"}];
                
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
