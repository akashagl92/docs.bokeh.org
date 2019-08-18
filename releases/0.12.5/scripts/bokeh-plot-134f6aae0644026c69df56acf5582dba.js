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
      };var element = document.getElementById("dd0a4e4c-9eb8-4eae-a388-6a54ff026df0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dd0a4e4c-9eb8-4eae-a388-6a54ff026df0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"6d9fc065-2b1a-4931-86a9-c646b9654986":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"16474187-8517-4801-baaf-24eff4dabb0d","type":"Circle"},{"attributes":{},"id":"bf244325-41d3-4363-a2e2-aa3f956e68e6","type":"ToolEvents"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"292fde76-a648-4f16-a433-ccb9a09b3468","type":"FactorRange"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"dd32c05e-6844-4854-80c6-037617b55040","type":"Circle"},{"attributes":{"formatter":{"id":"c66e6206-a71f-4b66-8964-ca9ae3424041","type":"BasicTickFormatter"},"plot":{"id":"f876173c-ce7e-43bf-b234-45b36729f875","subtype":"Figure","type":"Plot"},"ticker":{"id":"703e3818-b5a5-4166-915a-313ef1b8d89a","type":"BasicTicker"}},"id":"b98c4c53-f3d1-4a97-a246-9a0d73dbd689","type":"LinearAxis"},{"attributes":{"below":[{"id":"824d3fc8-ff05-4780-a856-6ea616766543","type":"CategoricalAxis"}],"left":[{"id":"a1bceedf-6312-4d35-9037-6f7eb158b2af","type":"CategoricalAxis"}],"renderers":[{"id":"824d3fc8-ff05-4780-a856-6ea616766543","type":"CategoricalAxis"},{"id":"1e22e99a-4027-46fb-a619-3d525d21e5bb","type":"Grid"},{"id":"a1bceedf-6312-4d35-9037-6f7eb158b2af","type":"CategoricalAxis"},{"id":"537f3a20-6ced-4ce2-9b74-b6dc4876e3c2","type":"Grid"},{"id":"b6967523-cc42-4f8f-bfa7-01f8285a1615","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"1dde04fc-ebd3-4fa3-9dd0-7a5f879a356a","type":"Title"},"tool_events":{"id":"bf244325-41d3-4363-a2e2-aa3f956e68e6","type":"ToolEvents"},"toolbar":{"id":"0b22416a-dc69-4ab4-bde4-bd374f9b36bb","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"292fde76-a648-4f16-a433-ccb9a09b3468","type":"FactorRange"},"y_range":{"id":"9d01476e-4150-4612-92ec-41e40bcdf460","type":"FactorRange"}},"id":"1e11d2cc-1774-4e09-9a70-bf58edab7378","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff718892-fc62-431e-936d-2fab70228c48","type":"Rect"},{"attributes":{"formatter":{"id":"f6686fb5-5703-4b0c-8346-ed6f39ef1247","type":"CategoricalTickFormatter"},"plot":{"id":"1e11d2cc-1774-4e09-9a70-bf58edab7378","subtype":"Figure","type":"Plot"},"ticker":{"id":"a431b99a-7e0a-4017-a071-57f9ea9e4784","type":"CategoricalTicker"}},"id":"a1bceedf-6312-4d35-9037-6f7eb158b2af","type":"CategoricalAxis"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"3b71cd7d-a708-431e-ab8a-059b9d8272ca","type":"Segment"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"ba87d516-9592-4fee-bcd6-903cc0d38d03","type":"Title"},{"attributes":{"below":[{"id":"b98c4c53-f3d1-4a97-a246-9a0d73dbd689","type":"LinearAxis"}],"left":[{"id":"ecf60a48-c4e0-425b-9028-9ff264debcf4","type":"CategoricalAxis"}],"renderers":[{"id":"b98c4c53-f3d1-4a97-a246-9a0d73dbd689","type":"LinearAxis"},{"id":"2eb9185c-8e30-44cd-9c32-1ffe2a67ea82","type":"Grid"},{"id":"ecf60a48-c4e0-425b-9028-9ff264debcf4","type":"CategoricalAxis"},{"id":"d7eaa17d-13b8-4e60-a0c3-e02d0399dec8","type":"Grid"},{"id":"86661c2a-2c9e-4961-aea0-628c84e1b7f4","type":"GlyphRenderer"},{"id":"150e2bf0-6287-4bef-889c-51202f29b1f8","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"ba87d516-9592-4fee-bcd6-903cc0d38d03","type":"Title"},"tool_events":{"id":"c57a0f28-e84f-4c75-8bee-ed448a1d493f","type":"ToolEvents"},"toolbar":{"id":"ff1365b7-13e7-4aa5-a792-48db0b7b2428","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b215233a-bcaa-43d8-9e64-3230bb5bbacf","type":"Range1d"},"y_range":{"id":"347597b1-e458-4e12-a049-8d1a1ad7b8b2","type":"FactorRange"}},"id":"f876173c-ce7e-43bf-b234-45b36729f875","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"1e11d2cc-1774-4e09-9a70-bf58edab7378","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ef19c19-bdf4-4f36-958f-9f0554795a08","type":"CategoricalTicker"}},"id":"1e22e99a-4027-46fb-a619-3d525d21e5bb","type":"Grid"},{"attributes":{"children":[{"id":"1e11d2cc-1774-4e09-9a70-bf58edab7378","subtype":"Figure","type":"Plot"},{"id":"f876173c-ce7e-43bf-b234-45b36729f875","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"6bdb5896-5dfe-40d8-9a02-7ae021017850","type":"Row"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"7047af79-9765-47aa-ab92-4cc8dbf077cc","type":"Segment"},{"attributes":{},"id":"c57a0f28-e84f-4c75-8bee-ed448a1d493f","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["x1","y1","y0"],"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]}},"id":"4bf646cd-9429-4466-a4c7-6da7af185bab","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a6a21d09-5c2d-4867-854b-eef7ec5ed138","type":"ColumnDataSource"},"glyph":{"id":"dd32c05e-6844-4854-80c6-037617b55040","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16474187-8517-4801-baaf-24eff4dabb0d","type":"Circle"},"selection_glyph":null},"id":"150e2bf0-6287-4bef-889c-51202f29b1f8","type":"GlyphRenderer"},{"attributes":{},"id":"f6686fb5-5703-4b0c-8346-ed6f39ef1247","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"end":100},"id":"b215233a-bcaa-43d8-9e64-3230bb5bbacf","type":"Range1d"},{"attributes":{},"id":"703e3818-b5a5-4166-915a-313ef1b8d89a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"f38c0d4a-acb3-4bce-92f8-d614679f30f2","type":"CategoricalTickFormatter"},"plot":{"id":"1e11d2cc-1774-4e09-9a70-bf58edab7378","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ef19c19-bdf4-4f36-958f-9f0554795a08","type":"CategoricalTicker"}},"id":"824d3fc8-ff05-4780-a856-6ea616766543","type":"CategoricalAxis"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"9d01476e-4150-4612-92ec-41e40bcdf460","type":"FactorRange"},{"attributes":{},"id":"a431b99a-7e0a-4017-a071-57f9ea9e4784","type":"CategoricalTicker"},{"attributes":{"dimension":1,"plot":{"id":"f876173c-ce7e-43bf-b234-45b36729f875","subtype":"Figure","type":"Plot"},"ticker":{"id":"f68e25f8-eeed-4933-8893-966d815af5bf","type":"CategoricalTicker"}},"id":"d7eaa17d-13b8-4e60-a0c3-e02d0399dec8","type":"Grid"},{"attributes":{"data_source":{"id":"404d3b39-4ffd-495a-bd40-f14690331137","type":"ColumnDataSource"},"glyph":{"id":"ff718892-fc62-431e-936d-2fab70228c48","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"36c6b9cc-8c50-4ae2-a009-23188bba868e","type":"Rect"},"selection_glyph":null},"id":"b6967523-cc42-4f8f-bfa7-01f8285a1615","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"1dde04fc-ebd3-4fa3-9dd0-7a5f879a356a","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"1e11d2cc-1774-4e09-9a70-bf58edab7378","subtype":"Figure","type":"Plot"},"ticker":{"id":"a431b99a-7e0a-4017-a071-57f9ea9e4784","type":"CategoricalTicker"}},"id":"537f3a20-6ced-4ce2-9b74-b6dc4876e3c2","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ff1365b7-13e7-4aa5-a792-48db0b7b2428","type":"Toolbar"},{"attributes":{"plot":{"id":"f876173c-ce7e-43bf-b234-45b36729f875","subtype":"Figure","type":"Plot"},"ticker":{"id":"703e3818-b5a5-4166-915a-313ef1b8d89a","type":"BasicTicker"}},"id":"2eb9185c-8e30-44cd-9c32-1ffe2a67ea82","type":"Grid"},{"attributes":{},"id":"3dd920dc-c930-437c-ad27-40cafc5f9d35","type":"CategoricalTickFormatter"},{"attributes":{},"id":"9ef19c19-bdf4-4f36-958f-9f0554795a08","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"4bf646cd-9429-4466-a4c7-6da7af185bab","type":"ColumnDataSource"},"glyph":{"id":"3b71cd7d-a708-431e-ab8a-059b9d8272ca","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7047af79-9765-47aa-ab92-4cc8dbf077cc","type":"Segment"},"selection_glyph":null},"id":"86661c2a-2c9e-4961-aea0-628c84e1b7f4","type":"GlyphRenderer"},{"attributes":{},"id":"c66e6206-a71f-4b66-8964-ca9ae3424041","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo","foo","foo","bar","bar","bar","baz","baz","baz"],"y":["foo","bar","baz","foo","bar","baz","foo","bar","baz"]}},"id":"404d3b39-4ffd-495a-bd40-f14690331137","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"36c6b9cc-8c50-4ae2-a009-23188bba868e","type":"Rect"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"a6a21d09-5c2d-4867-854b-eef7ec5ed138","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"347597b1-e458-4e12-a049-8d1a1ad7b8b2","type":"FactorRange"},{"attributes":{},"id":"f38c0d4a-acb3-4bce-92f8-d614679f30f2","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"plot":{"id":"1e11d2cc-1774-4e09-9a70-bf58edab7378","subtype":"Figure","type":"Plot"}},"id":"c22aba86-396d-409b-b572-4581f4425ef3","type":"HoverTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c22aba86-396d-409b-b572-4581f4425ef3","type":"HoverTool"}]},"id":"0b22416a-dc69-4ab4-bde4-bd374f9b36bb","type":"Toolbar"},{"attributes":{},"id":"f68e25f8-eeed-4933-8893-966d815af5bf","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"3dd920dc-c930-437c-ad27-40cafc5f9d35","type":"CategoricalTickFormatter"},"plot":{"id":"f876173c-ce7e-43bf-b234-45b36729f875","subtype":"Figure","type":"Plot"},"ticker":{"id":"f68e25f8-eeed-4933-8893-966d815af5bf","type":"CategoricalTicker"}},"id":"ecf60a48-c4e0-425b-9028-9ff264debcf4","type":"CategoricalAxis"}],"root_ids":["6bdb5896-5dfe-40d8-9a02-7ae021017850"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"6d9fc065-2b1a-4931-86a9-c646b9654986","elementid":"dd0a4e4c-9eb8-4eae-a388-6a54ff026df0","modelid":"6bdb5896-5dfe-40d8-9a02-7ae021017850"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
