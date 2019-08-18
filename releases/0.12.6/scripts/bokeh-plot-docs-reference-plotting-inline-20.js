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
      };var element = document.getElementById("cb27a0e8-aec2-4fee-b68b-d7adf949f755");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cb27a0e8-aec2-4fee-b68b-d7adf949f755' but no matching script tag was found. ")
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
                var docs_json = {"cc32dbfa-0fe6-49c8-bd77-9246c0364c88":{"roots":{"references":[{"attributes":{},"id":"b45f0760-e9e8-45d6-913d-dd8d935774c4","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d34bc9e9-9842-4c10-b3d9-fcb3018d68fa","subtype":"Figure","type":"Plot"}},"id":"fc128007-5ad5-4dd4-abee-dd645ccc9aaf","type":"SaveTool"},{"attributes":{},"id":"a9b801bd-5bd3-4547-a9d6-0bcddea376a6","type":"LinearScale"},{"attributes":{"plot":{"id":"d34bc9e9-9842-4c10-b3d9-fcb3018d68fa","subtype":"Figure","type":"Plot"},"ticker":{"id":"8791b1e5-f571-4630-8ba6-9d2c76b0dc5b","type":"BasicTicker"}},"id":"d54fe328-7630-4500-a156-00813084cdcf","type":"Grid"},{"attributes":{},"id":"8791b1e5-f571-4630-8ba6-9d2c76b0dc5b","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0f137b8f-1a65-4e42-b01a-fbea1c8be44d","type":"Square"},{"attributes":{"below":[{"id":"bb269ee0-d76c-4359-9962-eb9d830f266e","type":"LinearAxis"}],"left":[{"id":"cb6549e2-f1d1-41f7-8890-d333998161eb","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"bb269ee0-d76c-4359-9962-eb9d830f266e","type":"LinearAxis"},{"id":"d54fe328-7630-4500-a156-00813084cdcf","type":"Grid"},{"id":"cb6549e2-f1d1-41f7-8890-d333998161eb","type":"LinearAxis"},{"id":"d4eb2c7a-c2bf-4f12-bb9f-c5a8d4e2dd80","type":"Grid"},{"id":"83582242-b0fb-4ee7-b76c-22c90e1f6361","type":"BoxAnnotation"},{"id":"b488cc12-b29a-4c4d-a629-657e6fbeaf0c","type":"GlyphRenderer"}],"title":{"id":"4caf6aea-bf9e-462e-a734-2106b328d136","type":"Title"},"tool_events":{"id":"375488e9-d60c-4f6c-a86d-0667e1f4a68f","type":"ToolEvents"},"toolbar":{"id":"9fda2c4a-a0ec-4e9e-9350-f1f98481cc05","type":"Toolbar"},"x_range":{"id":"c707ab23-e2b3-493b-8152-57f6fdc8e62d","type":"DataRange1d"},"x_scale":{"id":"a9b801bd-5bd3-4547-a9d6-0bcddea376a6","type":"LinearScale"},"y_range":{"id":"9039a8ae-e360-43ce-aea0-8cb7b7b1f6ed","type":"DataRange1d"},"y_scale":{"id":"9702ea8e-6b46-4902-a3f6-48eee2e2b523","type":"LinearScale"}},"id":"d34bc9e9-9842-4c10-b3d9-fcb3018d68fa","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"c2cadf55-a8de-42e2-ade1-472e294aee31","type":"ColumnDataSource"},"glyph":{"id":"893107b2-d9c8-4422-9cac-50341631d3a6","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0f137b8f-1a65-4e42-b01a-fbea1c8be44d","type":"Square"},"selection_glyph":null},"id":"b488cc12-b29a-4c4d-a629-657e6fbeaf0c","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"4caf6aea-bf9e-462e-a734-2106b328d136","type":"Title"},{"attributes":{},"id":"4a214797-cf91-45f8-887a-dbcbb74898ea","type":"BasicTicker"},{"attributes":{"plot":{"id":"d34bc9e9-9842-4c10-b3d9-fcb3018d68fa","subtype":"Figure","type":"Plot"}},"id":"1c57986d-ca2f-4818-bec6-41cd4cda0117","type":"PanTool"},{"attributes":{"formatter":{"id":"b45f0760-e9e8-45d6-913d-dd8d935774c4","type":"BasicTickFormatter"},"plot":{"id":"d34bc9e9-9842-4c10-b3d9-fcb3018d68fa","subtype":"Figure","type":"Plot"},"ticker":{"id":"8791b1e5-f571-4630-8ba6-9d2c76b0dc5b","type":"BasicTicker"}},"id":"bb269ee0-d76c-4359-9962-eb9d830f266e","type":"LinearAxis"},{"attributes":{"overlay":{"id":"83582242-b0fb-4ee7-b76c-22c90e1f6361","type":"BoxAnnotation"},"plot":{"id":"d34bc9e9-9842-4c10-b3d9-fcb3018d68fa","subtype":"Figure","type":"Plot"}},"id":"5769a718-69c6-4ea7-84ac-8e75588fec32","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"83582242-b0fb-4ee7-b76c-22c90e1f6361","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1c57986d-ca2f-4818-bec6-41cd4cda0117","type":"PanTool"},{"id":"139f80b9-d321-47ba-b608-903b680c9dd4","type":"WheelZoomTool"},{"id":"5769a718-69c6-4ea7-84ac-8e75588fec32","type":"BoxZoomTool"},{"id":"fc128007-5ad5-4dd4-abee-dd645ccc9aaf","type":"SaveTool"},{"id":"ff010eb9-6b16-482a-b841-e979c6945e6b","type":"ResetTool"},{"id":"851e47c0-bc6b-4d2e-ba00-6ebdb290720d","type":"HelpTool"}]},"id":"9fda2c4a-a0ec-4e9e-9350-f1f98481cc05","type":"Toolbar"},{"attributes":{},"id":"9702ea8e-6b46-4902-a3f6-48eee2e2b523","type":"LinearScale"},{"attributes":{},"id":"7cb75a9b-4565-4956-980e-e2984b7a4b0f","type":"BasicTickFormatter"},{"attributes":{},"id":"375488e9-d60c-4f6c-a86d-0667e1f4a68f","type":"ToolEvents"},{"attributes":{"plot":{"id":"d34bc9e9-9842-4c10-b3d9-fcb3018d68fa","subtype":"Figure","type":"Plot"}},"id":"139f80b9-d321-47ba-b608-903b680c9dd4","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"d34bc9e9-9842-4c10-b3d9-fcb3018d68fa","subtype":"Figure","type":"Plot"}},"id":"851e47c0-bc6b-4d2e-ba00-6ebdb290720d","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"893107b2-d9c8-4422-9cac-50341631d3a6","type":"Square"},{"attributes":{"callback":null},"id":"c707ab23-e2b3-493b-8152-57f6fdc8e62d","type":"DataRange1d"},{"attributes":{"plot":{"id":"d34bc9e9-9842-4c10-b3d9-fcb3018d68fa","subtype":"Figure","type":"Plot"}},"id":"ff010eb9-6b16-482a-b841-e979c6945e6b","type":"ResetTool"},{"attributes":{"callback":null},"id":"9039a8ae-e360-43ce-aea0-8cb7b7b1f6ed","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"d34bc9e9-9842-4c10-b3d9-fcb3018d68fa","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a214797-cf91-45f8-887a-dbcbb74898ea","type":"BasicTicker"}},"id":"d4eb2c7a-c2bf-4f12-bb9f-c5a8d4e2dd80","type":"Grid"},{"attributes":{"formatter":{"id":"7cb75a9b-4565-4956-980e-e2984b7a4b0f","type":"BasicTickFormatter"},"plot":{"id":"d34bc9e9-9842-4c10-b3d9-fcb3018d68fa","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a214797-cf91-45f8-887a-dbcbb74898ea","type":"BasicTicker"}},"id":"cb6549e2-f1d1-41f7-8890-d333998161eb","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","size","x"],"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]}},"id":"c2cadf55-a8de-42e2-ade1-472e294aee31","type":"ColumnDataSource"}],"root_ids":["d34bc9e9-9842-4c10-b3d9-fcb3018d68fa"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"cc32dbfa-0fe6-49c8-bd77-9246c0364c88","elementid":"cb27a0e8-aec2-4fee-b68b-d7adf949f755","modelid":"d34bc9e9-9842-4c10-b3d9-fcb3018d68fa"}];
                
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
