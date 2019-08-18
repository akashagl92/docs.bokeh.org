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
      };var element = document.getElementById("44f80bd1-2035-49f6-a231-026063522c85");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '44f80bd1-2035-49f6-a231-026063522c85' but no matching script tag was found. ")
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
                var docs_json = {"f6a81034-f02e-484a-8dac-63ac3a1b8da1":{"roots":{"references":[{"attributes":{"data_source":{"id":"0f434502-a19f-447a-b6ef-489d7962f0e0","type":"ColumnDataSource"},"glyph":{"id":"9a77146d-16be-48dc-8259-f0282c525dd1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2b592ddc-148f-4b11-bed6-9a4d406a74b3","type":"Circle"},"selection_glyph":null},"id":"7f9ac29e-73b1-4653-9490-0875510b9923","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"617a221d-105b-48ce-bb99-fe31c6b218c4","type":"Rect"},{"attributes":{"background_fill_color":{"value":"#EFE8E2"},"below":[{"id":"d8fb5509-97b0-4c0b-b953-36ecf6e0aa0e","type":"CategoricalAxis"}],"left":[{"id":"e23ca87f-7365-4700-8e32-8a8927aeab53","type":"LinearAxis"}],"renderers":[{"id":"d8fb5509-97b0-4c0b-b953-36ecf6e0aa0e","type":"CategoricalAxis"},{"id":"3486db28-128e-43d7-8296-ac9cfbb1a6ac","type":"Grid"},{"id":"e23ca87f-7365-4700-8e32-8a8927aeab53","type":"LinearAxis"},{"id":"91da86a1-c684-41d9-9bf0-2dfa8249c8ef","type":"Grid"},{"id":"f2697e29-9e27-47a0-8387-bbc7e4172ab6","type":"GlyphRenderer"},{"id":"d6a07aac-c3df-4edf-a6e5-6e45a4af1c94","type":"GlyphRenderer"},{"id":"05cb985a-e56e-46e3-92ba-99c5895db6af","type":"GlyphRenderer"},{"id":"8f500e43-d270-49c3-8a0d-0cc6ddd31a94","type":"GlyphRenderer"},{"id":"253f020c-6a10-436a-bdf2-1b07a49f3e78","type":"GlyphRenderer"},{"id":"e86536a1-210a-4f36-8a8b-edf397272491","type":"GlyphRenderer"},{"id":"7f9ac29e-73b1-4653-9490-0875510b9923","type":"GlyphRenderer"}],"title":{"id":"e029b537-252d-4c6c-aa45-154698baed6a","type":"Title"},"tool_events":{"id":"788d552e-1c24-4aee-8a03-20a71e7ed03a","type":"ToolEvents"},"toolbar":{"id":"b2276f44-cc73-472c-bdd3-d024f7f44938","type":"Toolbar"},"x_range":{"id":"0be62127-8816-4539-856c-45ecf98b10cc","type":"FactorRange"},"x_scale":{"id":"17883228-cc31-489f-be67-79b39a2aaf42","type":"CategoricalScale"},"y_range":{"id":"684ef854-e782-41a6-8fde-36d08ad327bd","type":"DataRange1d"},"y_scale":{"id":"8870a7a0-1cc8-4750-85f8-09e459e246a0","type":"LinearScale"}},"id":"a4965ebc-ebcc-4a0d-b340-6fb750c60f45","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":["a","a","b","b","b","b","c","c","c","d","d","f"],"y":[2.779723084969508,3.0746884549817257,4.00074506462664,3.122544929209122,2.592083245285922,-2.991511429430305,3.7348739143937695,3.7634117890724226,4.218352638363002,4.592140973987238,-1.8918045479632029,-0.8666245637346419]}},"id":"0f434502-a19f-447a-b6ef-489d7962f0e0","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#E08E79"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"b9a3bf85-c8f4-4882-9137-f849ab9ebfe3","type":"VBar"},{"attributes":{"data_source":{"id":"c7fddaa9-d723-4875-ab0e-366136f73c82","type":"ColumnDataSource"},"glyph":{"id":"06efaf86-a6bb-45ea-8602-637578e90179","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"81597721-b649-41d0-9c0f-c3cba3f8b20b","type":"Segment"},"selection_glyph":null},"id":"f2697e29-9e27-47a0-8387-bbc7e4172ab6","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"ouRMEQtJBEC69CMa39ACQIw5zxecpgxABbp3DFuSDkDmbdW/k+QSQFKoh8YMqBFA","dtype":"float64","shape":[6]}}},"id":"c55b0d04-958f-4a9c-91dc-969ab006101f","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"717e474e-5dcf-4f11-87bd-2718aac5b73e","type":"VBar"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"0be62127-8816-4539-856c-45ecf98b10cc","type":"FactorRange"},{"attributes":{"data_source":{"id":"27f7b6db-d357-4a73-8566-0554971f4905","type":"ColumnDataSource"},"glyph":{"id":"c53cc548-e2eb-4724-ac80-14cb8cd38fbb","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"717e474e-5dcf-4f11-87bd-2718aac5b73e","type":"VBar"},"selection_glyph":null},"id":"8f500e43-d270-49c3-8a0d-0cc6ddd31a94","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"a4965ebc-ebcc-4a0d-b340-6fb750c60f45","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d36afec-4722-4c00-93b2-2be119cf7c97","type":"BasicTicker"}},"id":"91da86a1-c684-41d9-9bf0-2dfa8249c8ef","type":"Grid"},{"attributes":{"data_source":{"id":"c11b71ec-e2d8-4861-b245-57f6fc800565","type":"ColumnDataSource"},"glyph":{"id":"8c5ebc7b-3ee1-4874-ae6a-00d5bb7e393f","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6991b70a-86dc-4a71-ad65-4a90b210c831","type":"Segment"},"selection_glyph":null},"id":"d6a07aac-c3df-4edf-a6e5-6e45a4af1c94","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"9a77146d-16be-48dc-8259-f0282c525dd1","type":"Circle"},{"attributes":{"plot":{"id":"a4965ebc-ebcc-4a0d-b340-6fb750c60f45","subtype":"Figure","type":"Plot"}},"id":"b8299a62-d924-4e6a-9e6c-5701d187ce49","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"e029b537-252d-4c6c-aa45-154698baed6a","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b8299a62-d924-4e6a-9e6c-5701d187ce49","type":"SaveTool"}]},"id":"b2276f44-cc73-472c-bdd3-d024f7f44938","type":"Toolbar"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"6a5fe5c7-fabf-46cd-a4ba-d864ce74aa05","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"2b592ddc-148f-4b11-bed6-9a4d406a74b3","type":"Circle"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"06efaf86-a6bb-45ea-8602-637578e90179","type":"Segment"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"3eb2be45-2d9a-4ee1-9e8d-f1b9efdc3ba2","type":"Rect"},{"attributes":{},"id":"edacfe6d-6dde-4b29-90ed-f4fc04e980f8","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"4b49fafb-6872-48da-a3e9-bfd36b5fe871","type":"Rect"},{"attributes":{},"id":"8870a7a0-1cc8-4750-85f8-09e459e246a0","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x0","x1","y0","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"ouRMEQtJBEC69CMa39ACQIw5zxecpgxABbp3DFuSDkDmbdW/k+QSQFKoh8YMqBFA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"k5Xz979B4j84TM+NbTjgP0UWSNLP1Po/otJyM2hs+z8eHnZLypAFQGyWOILd3ARA","dtype":"float64","shape":[6]}}},"id":"c7fddaa9-d723-4875-ab0e-366136f73c82","type":"ColumnDataSource"},{"attributes":{},"id":"b0edb9aa-b187-46af-a754-44dc994db3c2","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"5f279aae-84f4-4847-a279-c9334c4f99ec","type":"ColumnDataSource"},"glyph":{"id":"3eb2be45-2d9a-4ee1-9e8d-f1b9efdc3ba2","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c6294bb6-52fb-4a2d-a789-63b6a5aad33d","type":"Rect"},"selection_glyph":null},"id":"253f020c-6a10-436a-bdf2-1b07a49f3e78","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["top","bottom","x"],"data":{"bottom":{"__ndarray__":"k5Xz979B4j84TM+NbTjgP0UWSNLP1Po/otJyM2hs+z8eHnZLypAFQGyWOILd3ARA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"ye84cNMBtb8gku7iMMu0vyvEWp9UB/E/GMIJD2Jh7z+a129uck/+P6g7G4tmKv4/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"185fdfc6-4076-4758-b1f3-4e6f149b4c7d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c55b0d04-958f-4a9c-91dc-969ab006101f","type":"ColumnDataSource"},"glyph":{"id":"617a221d-105b-48ce-bb99-fe31c6b218c4","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4b49fafb-6872-48da-a3e9-bfd36b5fe871","type":"Rect"},"selection_glyph":null},"id":"e86536a1-210a-4f36-8a8b-edf397272491","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"185fdfc6-4076-4758-b1f3-4e6f149b4c7d","type":"ColumnDataSource"},"glyph":{"id":"b9a3bf85-c8f4-4882-9137-f849ab9ebfe3","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6a5fe5c7-fabf-46cd-a4ba-d864ce74aa05","type":"VBar"},"selection_glyph":null},"id":"05cb985a-e56e-46e3-92ba-99c5895db6af","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"81597721-b649-41d0-9c0f-c3cba3f8b20b","type":"Segment"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c6294bb6-52fb-4a2d-a789-63b6a5aad33d","type":"Rect"},{"attributes":{},"id":"8e990c98-751e-44f5-bc71-1974f7a44773","type":"CategoricalTicker"},{"attributes":{},"id":"3d36afec-4722-4c00-93b2-2be119cf7c97","type":"BasicTicker"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"a4965ebc-ebcc-4a0d-b340-6fb750c60f45","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e990c98-751e-44f5-bc71-1974f7a44773","type":"CategoricalTicker"}},"id":"3486db28-128e-43d7-8296-ac9cfbb1a6ac","type":"Grid"},{"attributes":{"formatter":{"id":"b0edb9aa-b187-46af-a754-44dc994db3c2","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"a4965ebc-ebcc-4a0d-b340-6fb750c60f45","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e990c98-751e-44f5-bc71-1974f7a44773","type":"CategoricalTicker"}},"id":"d8fb5509-97b0-4c0b-b953-36ecf6e0aa0e","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["top","bottom","x"],"data":{"bottom":{"__ndarray__":"ye84cNMBtb8gku7iMMu0vyvEWp9UB/E/GMIJD2Jh7z+a129uck/+P6g7G4tmKv4/","dtype":"float64","shape":[6]},"top":{"__ndarray__":"ZmiMO4iq57/oYgYERyTnv+G25PooEto/xkbUaSbG0z8MRppb09rzPwMYOouIaPU/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"27f7b6db-d357-4a73-8566-0554971f4905","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"jbQXgzhOBcBmurF31YsEwJwC0ziBIfe/to8HS8TG/L9oR6IFmonev3oOMVWGIuK/","dtype":"float64","shape":[6]}}},"id":"5f279aae-84f4-4847-a279-c9334c4f99ec","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"edacfe6d-6dde-4b29-90ed-f4fc04e980f8","type":"BasicTickFormatter"},"plot":{"id":"a4965ebc-ebcc-4a0d-b340-6fb750c60f45","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d36afec-4722-4c00-93b2-2be119cf7c97","type":"BasicTicker"}},"id":"e23ca87f-7365-4700-8e32-8a8927aeab53","type":"LinearAxis"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"8c5ebc7b-3ee1-4874-ae6a-00d5bb7e393f","type":"Segment"},{"attributes":{},"id":"788d552e-1c24-4aee-8a03-20a71e7ed03a","type":"ToolEvents"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#3B8686"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"c53cc548-e2eb-4724-ac80-14cb8cd38fbb","type":"VBar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"6991b70a-86dc-4a71-ad65-4a90b210c831","type":"Segment"},{"attributes":{},"id":"17883228-cc31-489f-be67-79b39a2aaf42","type":"CategoricalScale"},{"attributes":{"callback":null},"id":"684ef854-e782-41a6-8fde-36d08ad327bd","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x0","x1","y0","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"jbQXgzhOBcBmurF31YsEwJwC0ziBIfe/to8HS8TG/L9oR6IFmonev3oOMVWGIuK/","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"ZmiMO4iq57/oYgYERyTnv+G25PooEto/xkbUaSbG0z8MRppb09rzPwMYOouIaPU/","dtype":"float64","shape":[6]}}},"id":"c11b71ec-e2d8-4861-b245-57f6fc800565","type":"ColumnDataSource"}],"root_ids":["a4965ebc-ebcc-4a0d-b340-6fb750c60f45"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"f6a81034-f02e-484a-8dac-63ac3a1b8da1","elementid":"44f80bd1-2035-49f6-a231-026063522c85","modelid":"a4965ebc-ebcc-4a0d-b340-6fb750c60f45"}];
                
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
