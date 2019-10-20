document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("084faf8e-f0ce-45af-9eb0-423a805b51d3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '084faf8e-f0ce-45af-9eb0-423a805b51d3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"453c23f9-9206-45e6-b0ef-7ad6df81aa0e":{"roots":{"references":[{"attributes":{},"id":"29dd6519-2e78-4cf6-a668-6a9938952194","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"4532a0d0-5143-4944-b38d-61c24e467ab6","type":"ColumnDataSource"},"glyph":{"id":"593a0bcf-e9c7-4c79-b4a4-583f5d8e1820","type":"InvertedTriangle"},"hover_glyph":null,"nonselection_glyph":{"id":"892c73de-dc9c-44a9-b2e9-cd5b9b9cce02","type":"InvertedTriangle"},"selection_glyph":null},"id":"04f937bd-2dd8-499f-a99c-823c5599b3e0","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"6ce672ef-9060-47cf-acd8-7efa6b2b793c","type":"BoxAnnotation"},"plot":{"id":"142c5516-30e2-48c6-bb9f-704518061c69","subtype":"Figure","type":"Plot"}},"id":"4a95b2a5-9a33-403c-9a6c-16d3eeb444a7","type":"BoxZoomTool"},{"attributes":{},"id":"5d70f539-0bb9-4f28-95a6-7985e8808771","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"4532a0d0-5143-4944-b38d-61c24e467ab6","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"5d70f539-0bb9-4f28-95a6-7985e8808771","type":"BasicTickFormatter"},"plot":{"id":"142c5516-30e2-48c6-bb9f-704518061c69","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1bf0b4b-d835-4614-b94d-cdfb67e2699d","type":"BasicTicker"}},"id":"126c7485-4713-4544-bde9-7af7019aed9d","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"41c1618e-0691-4bed-bd98-8730f582c6aa","type":"PanTool"},{"id":"8a51a7ed-d4b3-40c3-a42b-6de987d2bd8e","type":"WheelZoomTool"},{"id":"4a95b2a5-9a33-403c-9a6c-16d3eeb444a7","type":"BoxZoomTool"},{"id":"064a3f05-a4f7-4bd2-9cb4-968d8518f5eb","type":"SaveTool"},{"id":"88381564-3add-4c07-b5ec-c3f85e5c86ce","type":"ResetTool"},{"id":"1edaa2c7-a812-41c0-a12f-b9b28bdc5c44","type":"HelpTool"}]},"id":"4ba3458c-cc1f-4eeb-9f61-0d88a76d48d4","type":"Toolbar"},{"attributes":{"plot":{"id":"142c5516-30e2-48c6-bb9f-704518061c69","subtype":"Figure","type":"Plot"}},"id":"41c1618e-0691-4bed-bd98-8730f582c6aa","type":"PanTool"},{"attributes":{},"id":"552248ea-f48b-4add-837a-2533628b3d68","type":"BasicTicker"},{"attributes":{"plot":{"id":"142c5516-30e2-48c6-bb9f-704518061c69","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1bf0b4b-d835-4614-b94d-cdfb67e2699d","type":"BasicTicker"}},"id":"4ea70032-c2ff-4501-b448-d83bff430859","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"142c5516-30e2-48c6-bb9f-704518061c69","subtype":"Figure","type":"Plot"},"ticker":{"id":"552248ea-f48b-4add-837a-2533628b3d68","type":"BasicTicker"}},"id":"28c8037a-59da-4064-b814-6dc503b4e4c5","type":"Grid"},{"attributes":{"callback":null},"id":"aafbde69-9390-4100-b7c3-b2bec3420dc0","type":"DataRange1d"},{"attributes":{},"id":"0aba0f39-3f0c-4d77-9868-596174fc7958","type":"ToolEvents"},{"attributes":{"plot":{"id":"142c5516-30e2-48c6-bb9f-704518061c69","subtype":"Figure","type":"Plot"}},"id":"064a3f05-a4f7-4bd2-9cb4-968d8518f5eb","type":"SaveTool"},{"attributes":{"callback":null},"id":"681428bf-43e2-48db-8303-e3555a5d9e2a","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6ce672ef-9060-47cf-acd8-7efa6b2b793c","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"142c5516-30e2-48c6-bb9f-704518061c69","subtype":"Figure","type":"Plot"}},"id":"8a51a7ed-d4b3-40c3-a42b-6de987d2bd8e","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"142c5516-30e2-48c6-bb9f-704518061c69","subtype":"Figure","type":"Plot"}},"id":"88381564-3add-4c07-b5ec-c3f85e5c86ce","type":"ResetTool"},{"attributes":{},"id":"e1bf0b4b-d835-4614-b94d-cdfb67e2699d","type":"BasicTicker"},{"attributes":{"plot":{"id":"142c5516-30e2-48c6-bb9f-704518061c69","subtype":"Figure","type":"Plot"}},"id":"1edaa2c7-a812-41c0-a12f-b9b28bdc5c44","type":"HelpTool"},{"attributes":{"below":[{"id":"126c7485-4713-4544-bde9-7af7019aed9d","type":"LinearAxis"}],"left":[{"id":"c10872af-931f-4696-b3f7-554a2ac4abc6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"126c7485-4713-4544-bde9-7af7019aed9d","type":"LinearAxis"},{"id":"4ea70032-c2ff-4501-b448-d83bff430859","type":"Grid"},{"id":"c10872af-931f-4696-b3f7-554a2ac4abc6","type":"LinearAxis"},{"id":"28c8037a-59da-4064-b814-6dc503b4e4c5","type":"Grid"},{"id":"6ce672ef-9060-47cf-acd8-7efa6b2b793c","type":"BoxAnnotation"},{"id":"04f937bd-2dd8-499f-a99c-823c5599b3e0","type":"GlyphRenderer"}],"title":{"id":"f8f6988a-aad8-4d3c-9f85-f4eb932b7412","type":"Title"},"tool_events":{"id":"0aba0f39-3f0c-4d77-9868-596174fc7958","type":"ToolEvents"},"toolbar":{"id":"4ba3458c-cc1f-4eeb-9f61-0d88a76d48d4","type":"Toolbar"},"x_range":{"id":"aafbde69-9390-4100-b7c3-b2bec3420dc0","type":"DataRange1d"},"y_range":{"id":"681428bf-43e2-48db-8303-e3555a5d9e2a","type":"DataRange1d"}},"id":"142c5516-30e2-48c6-bb9f-704518061c69","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#DE2D26"},"line_color":{"value":"#DE2D26"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"593a0bcf-e9c7-4c79-b4a4-583f5d8e1820","type":"InvertedTriangle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"892c73de-dc9c-44a9-b2e9-cd5b9b9cce02","type":"InvertedTriangle"},{"attributes":{"plot":null,"text":null},"id":"f8f6988a-aad8-4d3c-9f85-f4eb932b7412","type":"Title"},{"attributes":{"formatter":{"id":"29dd6519-2e78-4cf6-a668-6a9938952194","type":"BasicTickFormatter"},"plot":{"id":"142c5516-30e2-48c6-bb9f-704518061c69","subtype":"Figure","type":"Plot"},"ticker":{"id":"552248ea-f48b-4add-837a-2533628b3d68","type":"BasicTicker"}},"id":"c10872af-931f-4696-b3f7-554a2ac4abc6","type":"LinearAxis"}],"root_ids":["142c5516-30e2-48c6-bb9f-704518061c69"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"453c23f9-9206-45e6-b0ef-7ad6df81aa0e","elementid":"084faf8e-f0ce-45af-9eb0-423a805b51d3","modelid":"142c5516-30e2-48c6-bb9f-704518061c69"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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
});