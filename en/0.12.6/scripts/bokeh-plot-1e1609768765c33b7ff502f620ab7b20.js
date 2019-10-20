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
      };var element = document.getElementById("a9d1e56f-0644-4afd-a89d-811d1937d8c6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a9d1e56f-0644-4afd-a89d-811d1937d8c6' but no matching script tag was found. ")
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
                var docs_json = {"d324643d-454d-4ebb-9cf7-23afaffea09d":{"roots":{"references":[{"attributes":{},"id":"c2541afc-7067-4557-ba9e-c8c928d100de","type":"BasicTicker"},{"attributes":{"plot":{"id":"7c9f4278-cd44-4b2c-8f47-f31cc64997dc","subtype":"Figure","type":"Plot"}},"id":"5bcf1fa9-6943-47e8-9984-eca34ff35802","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"7c9f4278-cd44-4b2c-8f47-f31cc64997dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"be1ac5f6-c75b-4e45-bf68-e0cc4485e414","type":"BasicTicker"}},"id":"6300e062-949a-48ee-8c14-ee0dd9286275","type":"Grid"},{"attributes":{"plot":{"id":"7c9f4278-cd44-4b2c-8f47-f31cc64997dc","subtype":"Figure","type":"Plot"}},"id":"43e69a30-f922-4670-8d33-a01c01179d78","type":"SaveTool"},{"attributes":{},"id":"be1ac5f6-c75b-4e45-bf68-e0cc4485e414","type":"BasicTicker"},{"attributes":{"formatter":{"id":"2d1c57bb-6672-4534-8948-90c6545d2259","type":"BasicTickFormatter"},"plot":{"id":"7c9f4278-cd44-4b2c-8f47-f31cc64997dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2541afc-7067-4557-ba9e-c8c928d100de","type":"BasicTicker"}},"id":"98ccc9f6-e969-4714-8fb7-6246c2bbc310","type":"LinearAxis"},{"attributes":{},"id":"47437c9f-2d24-4f1d-9ba6-628d38a0b4fe","type":"ToolEvents"},{"attributes":{},"id":"2d1c57bb-6672-4534-8948-90c6545d2259","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"e80a0195-2e96-4704-b552-dbf2b8810db5","type":"DataRange1d"},{"attributes":{},"id":"e970b707-bdd3-48f7-9478-34d15a170743","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"01148656-5ae7-47a8-aee1-a8a3af93566f","type":"Circle"},{"attributes":{"data_source":{"id":"58ecc288-cd56-430e-bdad-c6c9d26f7f53","type":"ColumnDataSource"},"glyph":{"id":"770672ce-be76-4e41-86b2-c2d41ae8602e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"01148656-5ae7-47a8-aee1-a8a3af93566f","type":"Circle"},"selection_glyph":null},"id":"f54aea6b-a04c-4871-9931-36835008892d","type":"GlyphRenderer"},{"attributes":{},"id":"4f881141-3cf3-4303-96dc-f8e0ee47a37e","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2.5,3,2],"y":[2,3,1,1.5]}},"id":"58ecc288-cd56-430e-bdad-c6c9d26f7f53","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"5968b230-60f5-4834-ada7-ebf6537a9bd1","type":"Title"},{"attributes":{"plot":{"id":"7c9f4278-cd44-4b2c-8f47-f31cc64997dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"c2541afc-7067-4557-ba9e-c8c928d100de","type":"BasicTicker"}},"id":"d451cb46-c0a3-4ee3-b576-e3d9961aff2c","type":"Grid"},{"attributes":{"callback":null},"id":"3b321a8c-7cf7-4789-8dbd-25191506b00b","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"770672ce-be76-4e41-86b2-c2d41ae8602e","type":"Circle"},{"attributes":{},"id":"49c75379-6098-4650-b04c-5a7e9c7e5eff","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5bcf1fa9-6943-47e8-9984-eca34ff35802","type":"PanTool"},{"id":"e075d7dc-6228-45d7-b48d-30139a7d8739","type":"ResetTool"},{"id":"43e69a30-f922-4670-8d33-a01c01179d78","type":"SaveTool"}]},"id":"2fc37e0d-7d09-49b5-ba75-09384a46418b","type":"Toolbar"},{"attributes":{"plot":{"id":"7c9f4278-cd44-4b2c-8f47-f31cc64997dc","subtype":"Figure","type":"Plot"}},"id":"e075d7dc-6228-45d7-b48d-30139a7d8739","type":"ResetTool"},{"attributes":{"below":[{"id":"98ccc9f6-e969-4714-8fb7-6246c2bbc310","type":"LinearAxis"}],"left":[{"id":"28be4166-ae21-4749-b196-ba256097c119","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"98ccc9f6-e969-4714-8fb7-6246c2bbc310","type":"LinearAxis"},{"id":"d451cb46-c0a3-4ee3-b576-e3d9961aff2c","type":"Grid"},{"id":"28be4166-ae21-4749-b196-ba256097c119","type":"LinearAxis"},{"id":"6300e062-949a-48ee-8c14-ee0dd9286275","type":"Grid"},{"id":"f54aea6b-a04c-4871-9931-36835008892d","type":"GlyphRenderer"}],"title":{"id":"5968b230-60f5-4834-ada7-ebf6537a9bd1","type":"Title"},"tool_events":{"id":"47437c9f-2d24-4f1d-9ba6-628d38a0b4fe","type":"ToolEvents"},"toolbar":{"id":"2fc37e0d-7d09-49b5-ba75-09384a46418b","type":"Toolbar"},"x_range":{"id":"3b321a8c-7cf7-4789-8dbd-25191506b00b","type":"DataRange1d"},"x_scale":{"id":"49c75379-6098-4650-b04c-5a7e9c7e5eff","type":"LinearScale"},"y_range":{"id":"e80a0195-2e96-4704-b552-dbf2b8810db5","type":"DataRange1d"},"y_scale":{"id":"4f881141-3cf3-4303-96dc-f8e0ee47a37e","type":"LinearScale"}},"id":"7c9f4278-cd44-4b2c-8f47-f31cc64997dc","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"e970b707-bdd3-48f7-9478-34d15a170743","type":"BasicTickFormatter"},"plot":{"id":"7c9f4278-cd44-4b2c-8f47-f31cc64997dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"be1ac5f6-c75b-4e45-bf68-e0cc4485e414","type":"BasicTicker"}},"id":"28be4166-ae21-4749-b196-ba256097c119","type":"LinearAxis"}],"root_ids":["7c9f4278-cd44-4b2c-8f47-f31cc64997dc"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"d324643d-454d-4ebb-9cf7-23afaffea09d","elementid":"a9d1e56f-0644-4afd-a89d-811d1937d8c6","modelid":"7c9f4278-cd44-4b2c-8f47-f31cc64997dc"}];
                
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
