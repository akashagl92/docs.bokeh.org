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
      };var element = document.getElementById("da275451-7531-4fe1-b44a-a4dc3893bbcd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'da275451-7531-4fe1-b44a-a4dc3893bbcd' but no matching script tag was found. ")
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
                var docs_json = {"234f1618-4a7d-4e6d-b4a5-61accb8ff45a":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"305d1c99-4f73-4f9b-b37d-498262d4d244","type":"PanTool"},{"id":"08c2aefb-a079-43b0-8d7a-bef1501bdd8e","type":"WheelZoomTool"},{"id":"514f93fd-f11d-4835-a776-93ed92d0666b","type":"BoxZoomTool"},{"id":"27ed9663-4de6-4baa-9148-f6669a2c3425","type":"SaveTool"},{"id":"42353100-981b-46b9-8288-cd536ab977b9","type":"ResetTool"},{"id":"f98e18c8-a4c9-40eb-96f4-efe0a082509e","type":"HelpTool"}]},"id":"ece916e3-cc36-43b2-80c4-1a5deddf0bff","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fc32e927-43aa-47e3-baab-499aad0479bc","type":"BoxAnnotation"},{"attributes":{},"id":"f98e18c8-a4c9-40eb-96f4-efe0a082509e","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3b80e31a-822d-4592-92a2-d1b97e679307","type":"Circle"},{"attributes":{},"id":"42353100-981b-46b9-8288-cd536ab977b9","type":"ResetTool"},{"attributes":{},"id":"08c2aefb-a079-43b0-8d7a-bef1501bdd8e","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"82ab61de-cb13-4858-bf16-ee56779f99b6","type":"ColumnDataSource"},"glyph":{"id":"29dd8f12-07c0-40f2-b231-0f1dd29657ee","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3b80e31a-822d-4592-92a2-d1b97e679307","type":"Circle"},"selection_glyph":null,"view":{"id":"12400541-0b1d-46ff-9a05-2e13428fd8a1","type":"CDSView"}},"id":"68967fee-9526-4a34-8937-d61119b0783c","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"23efc861-b4d9-44da-9ae1-a30b263e7d10","type":"BasicTickFormatter"},"plot":{"id":"99e7b4b4-c8b6-49be-824c-220c94ac07dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"bf2daa72-4401-4632-abde-b0aca08bac9c","type":"BasicTicker"}},"id":"240c6581-e877-4dc0-a30e-4cf4f3b26490","type":"LinearAxis"},{"attributes":{"callback":null},"id":"a41a24e4-bd8d-4f37-8bcc-9f1e1525c0d8","type":"DataRange1d"},{"attributes":{"source":{"id":"82ab61de-cb13-4858-bf16-ee56779f99b6","type":"ColumnDataSource"}},"id":"12400541-0b1d-46ff-9a05-2e13428fd8a1","type":"CDSView"},{"attributes":{},"id":"bf2daa72-4401-4632-abde-b0aca08bac9c","type":"BasicTicker"},{"attributes":{},"id":"23efc861-b4d9-44da-9ae1-a30b263e7d10","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"82ab61de-cb13-4858-bf16-ee56779f99b6","type":"ColumnDataSource"},{"attributes":{},"id":"4ccb9b3d-69ca-4514-839e-71081b921d12","type":"LinearScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"99e7b4b4-c8b6-49be-824c-220c94ac07dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"bf2daa72-4401-4632-abde-b0aca08bac9c","type":"BasicTicker"}},"id":"29ded2c5-60b2-451d-962b-6736ec575c8b","type":"Grid"},{"attributes":{},"id":"a89edc4b-c97e-458f-b211-9bfd604c3271","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"91920501-927a-4e6e-872e-97367c16dcc3","type":"Title"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"29dd8f12-07c0-40f2-b231-0f1dd29657ee","type":"Circle"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.5},"grid_line_dash":[6,4],"plot":{"id":"99e7b4b4-c8b6-49be-824c-220c94ac07dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"a89edc4b-c97e-458f-b211-9bfd604c3271","type":"BasicTicker"}},"id":"27f2222e-8014-424d-8e06-f6cdf16c2299","type":"Grid"},{"attributes":{"formatter":{"id":"7a6b231f-993f-4206-b007-38f71a0eff24","type":"BasicTickFormatter"},"plot":{"id":"99e7b4b4-c8b6-49be-824c-220c94ac07dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"a89edc4b-c97e-458f-b211-9bfd604c3271","type":"BasicTicker"}},"id":"cede116f-308c-4b62-a786-8520d6490a1a","type":"LinearAxis"},{"attributes":{},"id":"305d1c99-4f73-4f9b-b37d-498262d4d244","type":"PanTool"},{"attributes":{"callback":null},"id":"a68e7cf2-0b7d-45b0-8a94-d0fdc8273933","type":"DataRange1d"},{"attributes":{},"id":"1ea08c30-2854-4ec7-a864-8a7cba6f971e","type":"LinearScale"},{"attributes":{"overlay":{"id":"fc32e927-43aa-47e3-baab-499aad0479bc","type":"BoxAnnotation"}},"id":"514f93fd-f11d-4835-a776-93ed92d0666b","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"240c6581-e877-4dc0-a30e-4cf4f3b26490","type":"LinearAxis"}],"left":[{"id":"cede116f-308c-4b62-a786-8520d6490a1a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"240c6581-e877-4dc0-a30e-4cf4f3b26490","type":"LinearAxis"},{"id":"29ded2c5-60b2-451d-962b-6736ec575c8b","type":"Grid"},{"id":"cede116f-308c-4b62-a786-8520d6490a1a","type":"LinearAxis"},{"id":"27f2222e-8014-424d-8e06-f6cdf16c2299","type":"Grid"},{"id":"fc32e927-43aa-47e3-baab-499aad0479bc","type":"BoxAnnotation"},{"id":"68967fee-9526-4a34-8937-d61119b0783c","type":"GlyphRenderer"}],"title":{"id":"91920501-927a-4e6e-872e-97367c16dcc3","type":"Title"},"toolbar":{"id":"ece916e3-cc36-43b2-80c4-1a5deddf0bff","type":"Toolbar"},"x_range":{"id":"a68e7cf2-0b7d-45b0-8a94-d0fdc8273933","type":"DataRange1d"},"x_scale":{"id":"4ccb9b3d-69ca-4514-839e-71081b921d12","type":"LinearScale"},"y_range":{"id":"a41a24e4-bd8d-4f37-8bcc-9f1e1525c0d8","type":"DataRange1d"},"y_scale":{"id":"1ea08c30-2854-4ec7-a864-8a7cba6f971e","type":"LinearScale"}},"id":"99e7b4b4-c8b6-49be-824c-220c94ac07dc","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"27ed9663-4de6-4baa-9148-f6669a2c3425","type":"SaveTool"},{"attributes":{},"id":"7a6b231f-993f-4206-b007-38f71a0eff24","type":"BasicTickFormatter"}],"root_ids":["99e7b4b4-c8b6-49be-824c-220c94ac07dc"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"234f1618-4a7d-4e6d-b4a5-61accb8ff45a","elementid":"da275451-7531-4fe1-b44a-a4dc3893bbcd","modelid":"99e7b4b4-c8b6-49be-824c-220c94ac07dc"}];
                
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
