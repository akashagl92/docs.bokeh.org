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
      };var element = document.getElementById("d2efdded-5635-40ea-9d82-ad11fcd62c6d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd2efdded-5635-40ea-9d82-ad11fcd62c6d' but no matching script tag was found. ")
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
                var docs_json = {"2e9243cf-fdf9-45c5-82e0-79ac5397375e":{"roots":{"references":[{"attributes":{},"id":"4ef6c178-af5f-4ec8-a5c5-1de59eea3d31","type":"BasicTicker"},{"attributes":{"callback":null},"id":"50498992-41e6-4c99-bbe5-9e8eecb980d1","type":"DataRange1d"},{"attributes":{},"id":"b415eb28-b05b-41f1-8714-f456ac6f5902","type":"HelpTool"},{"attributes":{},"id":"e2eaf119-d618-44ae-ab7c-e64a158aea4a","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"b4546144-cda5-4ba2-8542-05355d0526f5","type":"Diamond"},{"attributes":{},"id":"31bb58af-d2dc-4465-b8ab-9874a1d49880","type":"PanTool"},{"attributes":{"plot":{"id":"93fe01e0-fb54-47d4-8860-657172bfc42b","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ef6c178-af5f-4ec8-a5c5-1de59eea3d31","type":"BasicTicker"}},"id":"720684b9-eaf5-4576-a69b-b76de46e9ecd","type":"Grid"},{"attributes":{},"id":"c971ea3e-6cbf-4f92-9c9d-13bedc44d382","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"09edb4a4-035e-4e31-947c-1feca4685d6b","type":"ColumnDataSource"},{"attributes":{},"id":"09761532-be58-4aa9-a2f9-7ec98e43f0e1","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"31bb58af-d2dc-4465-b8ab-9874a1d49880","type":"PanTool"},{"id":"f0552c59-f2d4-4e10-be41-91ed54da3740","type":"WheelZoomTool"},{"id":"56c6ad60-8d91-4259-b162-d3a5ae7768cf","type":"BoxZoomTool"},{"id":"3230dab3-a06b-4f00-bdb2-6e6909946901","type":"SaveTool"},{"id":"09761532-be58-4aa9-a2f9-7ec98e43f0e1","type":"ResetTool"},{"id":"b415eb28-b05b-41f1-8714-f456ac6f5902","type":"HelpTool"}]},"id":"e79f2b7b-f3b3-4af3-beff-f0229cbf3a45","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"49213e5b-fb8e-4df2-b1aa-20c055062caf","type":"BoxAnnotation"},{"attributes":{"source":{"id":"09edb4a4-035e-4e31-947c-1feca4685d6b","type":"ColumnDataSource"}},"id":"de6062c8-5198-45d7-8498-6904bd3e5ef8","type":"CDSView"},{"attributes":{"callback":null},"id":"a64a2c3c-fae4-4ad5-846f-c7d9240b80c6","type":"DataRange1d"},{"attributes":{"below":[{"id":"44f77af9-6781-417f-919d-2897c4af3a4f","type":"LinearAxis"}],"left":[{"id":"38d6cecf-b359-4921-8bce-a91d4089318e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"44f77af9-6781-417f-919d-2897c4af3a4f","type":"LinearAxis"},{"id":"720684b9-eaf5-4576-a69b-b76de46e9ecd","type":"Grid"},{"id":"38d6cecf-b359-4921-8bce-a91d4089318e","type":"LinearAxis"},{"id":"123b0b8e-25e3-49f3-a762-36be94be6e9c","type":"Grid"},{"id":"49213e5b-fb8e-4df2-b1aa-20c055062caf","type":"BoxAnnotation"},{"id":"72cffaf5-fb23-48de-ae2e-c49be3a26f4f","type":"GlyphRenderer"}],"title":{"id":"cadc75ad-8c38-4ff2-94fc-6dbbb07c908e","type":"Title"},"toolbar":{"id":"e79f2b7b-f3b3-4af3-beff-f0229cbf3a45","type":"Toolbar"},"x_range":{"id":"a64a2c3c-fae4-4ad5-846f-c7d9240b80c6","type":"DataRange1d"},"x_scale":{"id":"c926aff3-4b0b-4047-89b6-c6dc6823f4e4","type":"LinearScale"},"y_range":{"id":"50498992-41e6-4c99-bbe5-9e8eecb980d1","type":"DataRange1d"},"y_scale":{"id":"e2eaf119-d618-44ae-ab7c-e64a158aea4a","type":"LinearScale"}},"id":"93fe01e0-fb54-47d4-8860-657172bfc42b","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"09edb4a4-035e-4e31-947c-1feca4685d6b","type":"ColumnDataSource"},"glyph":{"id":"c376667f-28ec-43bc-b8a4-671d988e54d1","type":"Diamond"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b4546144-cda5-4ba2-8542-05355d0526f5","type":"Diamond"},"selection_glyph":null,"view":{"id":"de6062c8-5198-45d7-8498-6904bd3e5ef8","type":"CDSView"}},"id":"72cffaf5-fb23-48de-ae2e-c49be3a26f4f","type":"GlyphRenderer"},{"attributes":{},"id":"e511f528-2ddd-4100-a2c4-9179bb5c48da","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"93fe01e0-fb54-47d4-8860-657172bfc42b","subtype":"Figure","type":"Plot"},"ticker":{"id":"22bf5e3e-42e2-40ea-bfbb-01723f41cf4e","type":"BasicTicker"}},"id":"123b0b8e-25e3-49f3-a762-36be94be6e9c","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"cadc75ad-8c38-4ff2-94fc-6dbbb07c908e","type":"Title"},{"attributes":{},"id":"22bf5e3e-42e2-40ea-bfbb-01723f41cf4e","type":"BasicTicker"},{"attributes":{"formatter":{"id":"c971ea3e-6cbf-4f92-9c9d-13bedc44d382","type":"BasicTickFormatter"},"plot":{"id":"93fe01e0-fb54-47d4-8860-657172bfc42b","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ef6c178-af5f-4ec8-a5c5-1de59eea3d31","type":"BasicTicker"}},"id":"44f77af9-6781-417f-919d-2897c4af3a4f","type":"LinearAxis"},{"attributes":{},"id":"c926aff3-4b0b-4047-89b6-c6dc6823f4e4","type":"LinearScale"},{"attributes":{},"id":"3230dab3-a06b-4f00-bdb2-6e6909946901","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1C9099"},"line_color":{"value":"#1C9099"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"c376667f-28ec-43bc-b8a4-671d988e54d1","type":"Diamond"},{"attributes":{"overlay":{"id":"49213e5b-fb8e-4df2-b1aa-20c055062caf","type":"BoxAnnotation"}},"id":"56c6ad60-8d91-4259-b162-d3a5ae7768cf","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"e511f528-2ddd-4100-a2c4-9179bb5c48da","type":"BasicTickFormatter"},"plot":{"id":"93fe01e0-fb54-47d4-8860-657172bfc42b","subtype":"Figure","type":"Plot"},"ticker":{"id":"22bf5e3e-42e2-40ea-bfbb-01723f41cf4e","type":"BasicTicker"}},"id":"38d6cecf-b359-4921-8bce-a91d4089318e","type":"LinearAxis"},{"attributes":{},"id":"f0552c59-f2d4-4e10-be41-91ed54da3740","type":"WheelZoomTool"}],"root_ids":["93fe01e0-fb54-47d4-8860-657172bfc42b"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"2e9243cf-fdf9-45c5-82e0-79ac5397375e","elementid":"d2efdded-5635-40ea-9d82-ad11fcd62c6d","modelid":"93fe01e0-fb54-47d4-8860-657172bfc42b"}];
                
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
