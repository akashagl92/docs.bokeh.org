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
      };var element = document.getElementById("48c2726c-8f08-44d3-ae28-052a0e5476e9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '48c2726c-8f08-44d3-ae28-052a0e5476e9' but no matching script tag was found. ")
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
                var docs_json = {"d4e48baf-cc1d-41d6-a642-0d264529b7cd":{"roots":{"references":[{"attributes":{"data_source":{"id":"6309213d-cce3-4089-86d2-6cc47b84e455","type":"ColumnDataSource"},"glyph":{"id":"21681530-48f2-42e1-898f-39f8c283e271","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d86de2a3-994c-4bf5-bf71-e1a3ee990f6c","type":"Patch"},"selection_glyph":null,"view":{"id":"a73ae1e8-b969-411f-8ea2-a356ed6c266f","type":"CDSView"}},"id":"23f79e8e-50f5-497b-9a94-bb92a6bdc475","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"983b73e6-8dbf-49ec-bb2f-5960088be543","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"df697f94-3847-465b-97ea-464b50525767","type":"LinearAxis"}],"left":[{"id":"674e3855-0b4f-4de3-b0a3-39dd5d711fa1","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"df697f94-3847-465b-97ea-464b50525767","type":"LinearAxis"},{"id":"c4b49339-492a-426f-b68c-2a19f6985c53","type":"Grid"},{"id":"674e3855-0b4f-4de3-b0a3-39dd5d711fa1","type":"LinearAxis"},{"id":"95f8b852-f959-45b6-ade5-2177c3ce591f","type":"Grid"},{"id":"983b73e6-8dbf-49ec-bb2f-5960088be543","type":"BoxAnnotation"},{"id":"23f79e8e-50f5-497b-9a94-bb92a6bdc475","type":"GlyphRenderer"}],"title":{"id":"e67c5164-04fe-49ab-89df-4b57c22acd57","type":"Title"},"toolbar":{"id":"2c915a1b-de65-4900-b703-370f6824b1b8","type":"Toolbar"},"x_range":{"id":"06c48bde-70e0-430e-893b-aae2301ca7af","type":"DataRange1d"},"x_scale":{"id":"52ab603b-8650-48b3-8022-1fe0e4aee0b6","type":"LinearScale"},"y_range":{"id":"b47bcb6d-7ae7-4a28-aa15-382b39999d25","type":"DataRange1d"},"y_scale":{"id":"06d46439-fa28-4950-a76c-8b132a56e4e2","type":"LinearScale"}},"id":"21c2a48b-a39e-4acf-8d04-3e526cab9191","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"82195890-b0d0-43fe-8dce-d6580f610692","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"82195890-b0d0-43fe-8dce-d6580f610692","type":"PanTool"},{"id":"b7a0e663-64da-439e-9e84-07ae40ff134f","type":"WheelZoomTool"},{"id":"c4cd013c-6f3a-41de-aead-f985716c9793","type":"BoxZoomTool"},{"id":"3a1807c5-1500-44cf-8ca1-6c2fec76e4da","type":"SaveTool"},{"id":"3bc987de-4b77-40aa-9591-c1f466a13386","type":"ResetTool"},{"id":"c33f94e6-e38a-4a0a-bb2d-eb75f3e85b5c","type":"HelpTool"}]},"id":"2c915a1b-de65-4900-b703-370f6824b1b8","type":"Toolbar"},{"attributes":{"source":{"id":"6309213d-cce3-4089-86d2-6cc47b84e455","type":"ColumnDataSource"}},"id":"a73ae1e8-b969-411f-8ea2-a356ed6c266f","type":"CDSView"},{"attributes":{"formatter":{"id":"fa850739-ce71-49a3-bc25-61cb20392e07","type":"BasicTickFormatter"},"plot":{"id":"21c2a48b-a39e-4acf-8d04-3e526cab9191","subtype":"Figure","type":"Plot"},"ticker":{"id":"9351ee91-34c6-4894-b852-64f0d6073ab6","type":"BasicTicker"}},"id":"df697f94-3847-465b-97ea-464b50525767","type":"LinearAxis"},{"attributes":{},"id":"b7a0e663-64da-439e-9e84-07ae40ff134f","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"06c48bde-70e0-430e-893b-aae2301ca7af","type":"DataRange1d"},{"attributes":{"overlay":{"id":"983b73e6-8dbf-49ec-bb2f-5960088be543","type":"BoxAnnotation"}},"id":"c4cd013c-6f3a-41de-aead-f985716c9793","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"21c2a48b-a39e-4acf-8d04-3e526cab9191","subtype":"Figure","type":"Plot"},"ticker":{"id":"9351ee91-34c6-4894-b852-64f0d6073ab6","type":"BasicTicker"}},"id":"c4b49339-492a-426f-b68c-2a19f6985c53","type":"Grid"},{"attributes":{},"id":"3a1807c5-1500-44cf-8ca1-6c2fec76e4da","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#99d8c9"},"line_color":{"value":"#99d8c9"},"x":{"field":"x"},"y":{"field":"y"}},"id":"21681530-48f2-42e1-898f-39f8c283e271","type":"Patch"},{"attributes":{},"id":"3bc987de-4b77-40aa-9591-c1f466a13386","type":"ResetTool"},{"attributes":{"callback":null},"id":"b47bcb6d-7ae7-4a28-aa15-382b39999d25","type":"DataRange1d"},{"attributes":{},"id":"c33f94e6-e38a-4a0a-bb2d-eb75f3e85b5c","type":"HelpTool"},{"attributes":{},"id":"52ab603b-8650-48b3-8022-1fe0e4aee0b6","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"e67c5164-04fe-49ab-89df-4b57c22acd57","type":"Title"},{"attributes":{},"id":"06d46439-fa28-4950-a76c-8b132a56e4e2","type":"LinearScale"},{"attributes":{},"id":"9351ee91-34c6-4894-b852-64f0d6073ab6","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d7b55337-b5f6-4e03-84af-3e6a733c4fbe","type":"BasicTickFormatter"},"plot":{"id":"21c2a48b-a39e-4acf-8d04-3e526cab9191","subtype":"Figure","type":"Plot"},"ticker":{"id":"40edd878-a9af-4a8d-97f0-675f1099497a","type":"BasicTicker"}},"id":"674e3855-0b4f-4de3-b0a3-39dd5d711fa1","type":"LinearAxis"},{"attributes":{},"id":"d7b55337-b5f6-4e03-84af-3e6a733c4fbe","type":"BasicTickFormatter"},{"attributes":{},"id":"40edd878-a9af-4a8d-97f0-675f1099497a","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"21c2a48b-a39e-4acf-8d04-3e526cab9191","subtype":"Figure","type":"Plot"},"ticker":{"id":"40edd878-a9af-4a8d-97f0-675f1099497a","type":"BasicTicker"}},"id":"95f8b852-f959-45b6-ade5-2177c3ce591f","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d86de2a3-994c-4bf5-bf71-e1a3ee990f6c","type":"Patch"},{"attributes":{},"id":"fa850739-ce71-49a3-bc25-61cb20392e07","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,2],"y":[6,7,2,2]}},"id":"6309213d-cce3-4089-86d2-6cc47b84e455","type":"ColumnDataSource"}],"root_ids":["21c2a48b-a39e-4acf-8d04-3e526cab9191"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"d4e48baf-cc1d-41d6-a642-0d264529b7cd","elementid":"48c2726c-8f08-44d3-ae28-052a0e5476e9","modelid":"21c2a48b-a39e-4acf-8d04-3e526cab9191"}];
                
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
