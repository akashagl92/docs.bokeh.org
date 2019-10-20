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
      };var element = document.getElementById("b2ad6360-1f06-4aff-8a1e-0f76b8bb2917");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b2ad6360-1f06-4aff-8a1e-0f76b8bb2917' but no matching script tag was found. ")
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
                var docs_json = {"4103f044-b818-4288-9002-3f07800d6406":{"roots":{"references":[{"attributes":{"formatter":{"id":"4047b27d-3cb0-47f9-8d45-d6f91be310f1","type":"BasicTickFormatter"},"plot":{"id":"98615459-dd6b-4b6b-a3eb-0a916bea4aff","subtype":"Figure","type":"Plot"},"ticker":{"id":"1a679bc3-a722-4102-86c7-814df0b395a5","type":"BasicTicker"}},"id":"96ac1aa0-37e8-41fb-b310-dc75afb25031","type":"LinearAxis"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"508f67c2-d1cd-4f34-b066-844fd5f8e200","type":"Wedge"},{"attributes":{"formatter":{"id":"6935cc45-49ef-4259-9c01-c99209a36e12","type":"BasicTickFormatter"},"plot":{"id":"98615459-dd6b-4b6b-a3eb-0a916bea4aff","subtype":"Figure","type":"Plot"},"ticker":{"id":"e7230abf-0d72-4250-9469-41986b0ddc48","type":"BasicTicker"}},"id":"4caf4415-b740-40be-9757-fbe362a19ee6","type":"LinearAxis"},{"attributes":{"plot":{"id":"98615459-dd6b-4b6b-a3eb-0a916bea4aff","subtype":"Figure","type":"Plot"}},"id":"4c931d9b-7a4b-4460-9ca9-49dbf8e9a556","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"98615459-dd6b-4b6b-a3eb-0a916bea4aff","subtype":"Figure","type":"Plot"}},"id":"a8d941b4-712e-4fb7-aadd-161b4e0ac67a","type":"ResetTool"},{"attributes":{},"id":"1a679bc3-a722-4102-86c7-814df0b395a5","type":"BasicTicker"},{"attributes":{},"id":"227d755d-bfc8-41ca-ad16-16d3596c0495","type":"LinearScale"},{"attributes":{"below":[{"id":"96ac1aa0-37e8-41fb-b310-dc75afb25031","type":"LinearAxis"}],"left":[{"id":"4caf4415-b740-40be-9757-fbe362a19ee6","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"96ac1aa0-37e8-41fb-b310-dc75afb25031","type":"LinearAxis"},{"id":"5fa9111a-33b7-4646-98e0-3b8e7e247ad4","type":"Grid"},{"id":"4caf4415-b740-40be-9757-fbe362a19ee6","type":"LinearAxis"},{"id":"6bf9ab5c-c248-45eb-9a60-8c256096ad67","type":"Grid"},{"id":"56c899a6-a294-45bf-a6d8-c98d2d5530a6","type":"BoxAnnotation"},{"id":"767711bd-63b0-4225-8123-e90f86d50c1f","type":"GlyphRenderer"}],"title":{"id":"f38be275-2c92-484a-a2ec-29ad257d4a64","type":"Title"},"tool_events":{"id":"6709f266-b7b0-4e65-80ea-eff5282e26e4","type":"ToolEvents"},"toolbar":{"id":"f497e213-410e-4d0d-baf5-94671efa9e94","type":"Toolbar"},"x_range":{"id":"12fa3470-e3d9-46df-bb03-72e033ea7921","type":"DataRange1d"},"x_scale":{"id":"227d755d-bfc8-41ca-ad16-16d3596c0495","type":"LinearScale"},"y_range":{"id":"35cc620e-14f0-4e35-9361-83409a17ab93","type":"DataRange1d"},"y_scale":{"id":"68eb7c42-94f6-478d-8967-7890ab2f5a1e","type":"LinearScale"}},"id":"98615459-dd6b-4b6b-a3eb-0a916bea4aff","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"35cc620e-14f0-4e35-9361-83409a17ab93","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"f38be275-2c92-484a-a2ec-29ad257d4a64","type":"Title"},{"attributes":{"plot":{"id":"98615459-dd6b-4b6b-a3eb-0a916bea4aff","subtype":"Figure","type":"Plot"}},"id":"a56e9abc-f495-45d0-842a-8c615779d658","type":"PanTool"},{"attributes":{"overlay":{"id":"56c899a6-a294-45bf-a6d8-c98d2d5530a6","type":"BoxAnnotation"},"plot":{"id":"98615459-dd6b-4b6b-a3eb-0a916bea4aff","subtype":"Figure","type":"Plot"}},"id":"e38a3820-ebda-45a0-afae-00e8ed5e2ade","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"98615459-dd6b-4b6b-a3eb-0a916bea4aff","subtype":"Figure","type":"Plot"}},"id":"4f44658f-0187-4fdf-81b9-fddf5c3ff573","type":"SaveTool"},{"attributes":{"plot":{"id":"98615459-dd6b-4b6b-a3eb-0a916bea4aff","subtype":"Figure","type":"Plot"},"ticker":{"id":"1a679bc3-a722-4102-86c7-814df0b395a5","type":"BasicTicker"}},"id":"5fa9111a-33b7-4646-98e0-3b8e7e247ad4","type":"Grid"},{"attributes":{"plot":{"id":"98615459-dd6b-4b6b-a3eb-0a916bea4aff","subtype":"Figure","type":"Plot"}},"id":"6057ad51-4c1d-4430-a9a3-0b8ad3a43e55","type":"HelpTool"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.6},"line_color":{"value":"firebrick"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"1ac76c10-8526-44c6-8878-d856ae9e103c","type":"Wedge"},{"attributes":{"data_source":{"id":"d4349994-922c-44c7-8d52-c76048dce4d6","type":"ColumnDataSource"},"glyph":{"id":"1ac76c10-8526-44c6-8878-d856ae9e103c","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"508f67c2-d1cd-4f34-b066-844fd5f8e200","type":"Wedge"},"selection_glyph":null},"id":"767711bd-63b0-4225-8123-e90f86d50c1f","type":"GlyphRenderer"},{"attributes":{},"id":"68eb7c42-94f6-478d-8967-7890ab2f5a1e","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56c899a6-a294-45bf-a6d8-c98d2d5530a6","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"d4349994-922c-44c7-8d52-c76048dce4d6","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"98615459-dd6b-4b6b-a3eb-0a916bea4aff","subtype":"Figure","type":"Plot"},"ticker":{"id":"e7230abf-0d72-4250-9469-41986b0ddc48","type":"BasicTicker"}},"id":"6bf9ab5c-c248-45eb-9a60-8c256096ad67","type":"Grid"},{"attributes":{},"id":"4047b27d-3cb0-47f9-8d45-d6f91be310f1","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a56e9abc-f495-45d0-842a-8c615779d658","type":"PanTool"},{"id":"4c931d9b-7a4b-4460-9ca9-49dbf8e9a556","type":"WheelZoomTool"},{"id":"e38a3820-ebda-45a0-afae-00e8ed5e2ade","type":"BoxZoomTool"},{"id":"4f44658f-0187-4fdf-81b9-fddf5c3ff573","type":"SaveTool"},{"id":"a8d941b4-712e-4fb7-aadd-161b4e0ac67a","type":"ResetTool"},{"id":"6057ad51-4c1d-4430-a9a3-0b8ad3a43e55","type":"HelpTool"}]},"id":"f497e213-410e-4d0d-baf5-94671efa9e94","type":"Toolbar"},{"attributes":{},"id":"e7230abf-0d72-4250-9469-41986b0ddc48","type":"BasicTicker"},{"attributes":{},"id":"6709f266-b7b0-4e65-80ea-eff5282e26e4","type":"ToolEvents"},{"attributes":{"callback":null},"id":"12fa3470-e3d9-46df-bb03-72e033ea7921","type":"DataRange1d"},{"attributes":{},"id":"6935cc45-49ef-4259-9c01-c99209a36e12","type":"BasicTickFormatter"}],"root_ids":["98615459-dd6b-4b6b-a3eb-0a916bea4aff"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"4103f044-b818-4288-9002-3f07800d6406","elementid":"b2ad6360-1f06-4aff-8a1e-0f76b8bb2917","modelid":"98615459-dd6b-4b6b-a3eb-0a916bea4aff"}];
                
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
