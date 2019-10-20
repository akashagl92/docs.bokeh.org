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
      };var element = document.getElementById("ac8a2ece-aa42-4358-a164-752efe686c2a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ac8a2ece-aa42-4358-a164-752efe686c2a' but no matching script tag was found. ")
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
                var docs_json = {"e5b82044-20dd-4089-8468-cdc8fe9ead0a":{"roots":{"references":[{"attributes":{},"id":"c7a51b3d-7f78-4b86-a360-0048da269546","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"2f5809b0-6299-49f6-8525-c1266bfb5e1c","type":"DataRange1d"},{"attributes":{"plot":{"id":"d7e4d4af-bfd6-4eec-9ebf-118b843f3f37","subtype":"Figure","type":"Plot"}},"id":"8ef68ce9-1573-4246-98b5-9ce14875709d","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"47e0d1e5-7bb4-4ef0-95ba-0ce7d8b99c7a","type":"PanTool"},{"id":"2dd54650-aa38-4985-9abf-44964b6b4d2e","type":"WheelZoomTool"},{"id":"043938bd-522d-474c-8256-f6b8a8bfb030","type":"BoxZoomTool"},{"id":"d181e96c-342b-44ee-b9d8-8529604fb282","type":"SaveTool"},{"id":"3839262f-6549-44ff-8019-16aa3722fe80","type":"ResetTool"},{"id":"8ef68ce9-1573-4246-98b5-9ce14875709d","type":"HelpTool"}]},"id":"a72cfc3b-e0a0-4dbd-953c-87086e3daf6b","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"eb465327-41fe-48e6-af95-eac5da1f5a65","type":"Circle"},{"attributes":{"plot":{"id":"d7e4d4af-bfd6-4eec-9ebf-118b843f3f37","subtype":"Figure","type":"Plot"},"ticker":{"id":"6640119c-a7c6-44ba-ad0d-6aeb79d9a19c","type":"BasicTicker"}},"id":"205ac0df-1399-43f3-9ecf-a913682e6a6a","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"07af6973-4377-4d00-b5ab-8c8cdf60e735","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"d7e4d4af-bfd6-4eec-9ebf-118b843f3f37","subtype":"Figure","type":"Plot"},"ticker":{"id":"2315c52c-755d-4bb1-8c27-304fbe474050","type":"BasicTicker"}},"id":"621740e1-5cf7-41fb-9bc4-62d68aafbf82","type":"Grid"},{"attributes":{"plot":{"id":"d7e4d4af-bfd6-4eec-9ebf-118b843f3f37","subtype":"Figure","type":"Plot"}},"id":"2dd54650-aa38-4985-9abf-44964b6b4d2e","type":"WheelZoomTool"},{"attributes":{},"id":"c538d877-b507-494d-8838-d75693c12ee1","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"109808cd-2bb9-4e81-8cc6-96a394f4589f","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"d22eeb67-5d94-44c5-81d6-430a7e6eabc2","type":"ColumnDataSource"},"glyph":{"id":"07af6973-4377-4d00-b5ab-8c8cdf60e735","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"eb465327-41fe-48e6-af95-eac5da1f5a65","type":"Circle"},"selection_glyph":null},"id":"8e61dbe0-3ad1-4c26-bfaf-043eb84b466b","type":"GlyphRenderer"},{"attributes":{},"id":"f30f782e-e3f8-49f2-97fc-1586dcd1752d","type":"LinearScale"},{"attributes":{"plot":{"id":"d7e4d4af-bfd6-4eec-9ebf-118b843f3f37","subtype":"Figure","type":"Plot"}},"id":"3839262f-6549-44ff-8019-16aa3722fe80","type":"ResetTool"},{"attributes":{"formatter":{"id":"c7a51b3d-7f78-4b86-a360-0048da269546","type":"BasicTickFormatter"},"plot":{"id":"d7e4d4af-bfd6-4eec-9ebf-118b843f3f37","subtype":"Figure","type":"Plot"},"ticker":{"id":"2315c52c-755d-4bb1-8c27-304fbe474050","type":"BasicTicker"}},"id":"0e145a1b-7e4d-4fdf-b213-6c6189aa6548","type":"LinearAxis"},{"attributes":{},"id":"2315c52c-755d-4bb1-8c27-304fbe474050","type":"BasicTicker"},{"attributes":{"formatter":{"id":"c538d877-b507-494d-8838-d75693c12ee1","type":"BasicTickFormatter"},"plot":{"id":"d7e4d4af-bfd6-4eec-9ebf-118b843f3f37","subtype":"Figure","type":"Plot"},"ticker":{"id":"6640119c-a7c6-44ba-ad0d-6aeb79d9a19c","type":"BasicTicker"}},"id":"b3762aaa-86cd-4aa3-bbd9-5004ea078598","type":"LinearAxis"},{"attributes":{"callback":null},"id":"4394c07f-7c2a-491c-8e63-cd86b33fbfed","type":"DataRange1d"},{"attributes":{"plot":{"id":"d7e4d4af-bfd6-4eec-9ebf-118b843f3f37","subtype":"Figure","type":"Plot"}},"id":"d181e96c-342b-44ee-b9d8-8529604fb282","type":"SaveTool"},{"attributes":{},"id":"6640119c-a7c6-44ba-ad0d-6aeb79d9a19c","type":"BasicTicker"},{"attributes":{"plot":{"id":"d7e4d4af-bfd6-4eec-9ebf-118b843f3f37","subtype":"Figure","type":"Plot"}},"id":"47e0d1e5-7bb4-4ef0-95ba-0ce7d8b99c7a","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"d22eeb67-5d94-44c5-81d6-430a7e6eabc2","type":"ColumnDataSource"},{"attributes":{},"id":"fb474bd6-96ab-45b5-9349-868c0e2a88e5","type":"ToolEvents"},{"attributes":{},"id":"ce592bbb-554e-424b-ac16-b9de118806e8","type":"LinearScale"},{"attributes":{"plot":null,"text":"Some Title","text_color":{"value":"olive"},"text_font":"times","text_font_style":"italic"},"id":"bee26274-9504-4396-b881-f4d9049c8ede","type":"Title"},{"attributes":{"overlay":{"id":"109808cd-2bb9-4e81-8cc6-96a394f4589f","type":"BoxAnnotation"},"plot":{"id":"d7e4d4af-bfd6-4eec-9ebf-118b843f3f37","subtype":"Figure","type":"Plot"}},"id":"043938bd-522d-474c-8256-f6b8a8bfb030","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"b3762aaa-86cd-4aa3-bbd9-5004ea078598","type":"LinearAxis"}],"left":[{"id":"0e145a1b-7e4d-4fdf-b213-6c6189aa6548","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b3762aaa-86cd-4aa3-bbd9-5004ea078598","type":"LinearAxis"},{"id":"205ac0df-1399-43f3-9ecf-a913682e6a6a","type":"Grid"},{"id":"0e145a1b-7e4d-4fdf-b213-6c6189aa6548","type":"LinearAxis"},{"id":"621740e1-5cf7-41fb-9bc4-62d68aafbf82","type":"Grid"},{"id":"109808cd-2bb9-4e81-8cc6-96a394f4589f","type":"BoxAnnotation"},{"id":"8e61dbe0-3ad1-4c26-bfaf-043eb84b466b","type":"GlyphRenderer"}],"title":{"id":"bee26274-9504-4396-b881-f4d9049c8ede","type":"Title"},"tool_events":{"id":"fb474bd6-96ab-45b5-9349-868c0e2a88e5","type":"ToolEvents"},"toolbar":{"id":"a72cfc3b-e0a0-4dbd-953c-87086e3daf6b","type":"Toolbar"},"x_range":{"id":"2f5809b0-6299-49f6-8525-c1266bfb5e1c","type":"DataRange1d"},"x_scale":{"id":"f30f782e-e3f8-49f2-97fc-1586dcd1752d","type":"LinearScale"},"y_range":{"id":"4394c07f-7c2a-491c-8e63-cd86b33fbfed","type":"DataRange1d"},"y_scale":{"id":"ce592bbb-554e-424b-ac16-b9de118806e8","type":"LinearScale"}},"id":"d7e4d4af-bfd6-4eec-9ebf-118b843f3f37","subtype":"Figure","type":"Plot"}],"root_ids":["d7e4d4af-bfd6-4eec-9ebf-118b843f3f37"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"e5b82044-20dd-4089-8468-cdc8fe9ead0a","elementid":"ac8a2ece-aa42-4358-a164-752efe686c2a","modelid":"d7e4d4af-bfd6-4eec-9ebf-118b843f3f37"}];
                
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
