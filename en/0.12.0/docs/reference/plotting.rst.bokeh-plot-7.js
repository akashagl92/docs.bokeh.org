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
      };var element = document.getElementById("e67196f1-ee7e-4d60-b034-f2166c44e2a8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e67196f1-ee7e-4d60-b034-f2166c44e2a8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"582781f8-39a6-4aac-9c6a-46995e7daddf":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6286ca96-0d82-4696-8e49-6dd14126c6ce","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"ee98cce7-5e3c-43a7-aec6-8f24ea46e8ff","subtype":"Figure","type":"Plot"}},"id":"d386ed9a-833b-4800-ac60-8bc1085af52e","type":"PanTool"},{"attributes":{},"id":"8fcbfb23-c1cb-45c2-9bb4-cb281784ed14","type":"ToolEvents"},{"attributes":{"plot":null,"text":null},"id":"7a9c2f26-b0ac-472e-bfae-67a610b2c848","type":"Title"},{"attributes":{},"id":"aa8dd452-bfd2-42d1-8422-948e7c9f72cb","type":"BasicTicker"},{"attributes":{},"id":"5ec1d8fd-a22e-4815-ba2a-b3284e51be21","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ee98cce7-5e3c-43a7-aec6-8f24ea46e8ff","subtype":"Figure","type":"Plot"}},"id":"a471a204-5a0d-4619-b3e5-6a57ab0fbb9e","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"c27d2025-4449-4103-ae0d-8e9c26155fbd","type":"DiamondCross"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"990a09f1-3d4d-4da2-beb9-a95cb3f09a91","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"6286ca96-0d82-4696-8e49-6dd14126c6ce","type":"BoxAnnotation"},"plot":{"id":"ee98cce7-5e3c-43a7-aec6-8f24ea46e8ff","subtype":"Figure","type":"Plot"}},"id":"5fad980c-6113-4331-bba1-c89cd687b7f2","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"990a09f1-3d4d-4da2-beb9-a95cb3f09a91","type":"ColumnDataSource"},"glyph":{"id":"682e1fa3-9f79-48cc-873d-7d2cd21d6f0c","type":"DiamondCross"},"hover_glyph":null,"nonselection_glyph":{"id":"c27d2025-4449-4103-ae0d-8e9c26155fbd","type":"DiamondCross"},"selection_glyph":null},"id":"992d15c1-f9dc-44d4-a6eb-90a9ba0e8470","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"ee98cce7-5e3c-43a7-aec6-8f24ea46e8ff","subtype":"Figure","type":"Plot"}},"id":"1e61b00b-f7f3-4d80-8dde-a68b13b018e0","type":"SaveTool"},{"attributes":{"plot":{"id":"ee98cce7-5e3c-43a7-aec6-8f24ea46e8ff","subtype":"Figure","type":"Plot"}},"id":"579091f8-336a-4486-b9f3-6c94ac8e86e3","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"6557a01e-b339-4145-bb62-433525d9b55c","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d386ed9a-833b-4800-ac60-8bc1085af52e","type":"PanTool"},{"id":"579091f8-336a-4486-b9f3-6c94ac8e86e3","type":"WheelZoomTool"},{"id":"5fad980c-6113-4331-bba1-c89cd687b7f2","type":"BoxZoomTool"},{"id":"1e61b00b-f7f3-4d80-8dde-a68b13b018e0","type":"SaveTool"},{"id":"22928fd5-fe28-4c0d-b899-8e096f0561ed","type":"ResetTool"},{"id":"a471a204-5a0d-4619-b3e5-6a57ab0fbb9e","type":"HelpTool"}]},"id":"cb665689-5241-4615-a446-34bd4f9a1ea5","type":"Toolbar"},{"attributes":{},"id":"d70c9c62-5278-4699-988c-05e947e70a5b","type":"BasicTicker"},{"attributes":{"plot":{"id":"ee98cce7-5e3c-43a7-aec6-8f24ea46e8ff","subtype":"Figure","type":"Plot"}},"id":"22928fd5-fe28-4c0d-b899-8e096f0561ed","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"ee98cce7-5e3c-43a7-aec6-8f24ea46e8ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"aa8dd452-bfd2-42d1-8422-948e7c9f72cb","type":"BasicTicker"}},"id":"c4da495f-fb71-454b-9a28-25d1ea87d028","type":"Grid"},{"attributes":{"plot":{"id":"ee98cce7-5e3c-43a7-aec6-8f24ea46e8ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"d70c9c62-5278-4699-988c-05e947e70a5b","type":"BasicTicker"}},"id":"93ec7097-7d99-4b9c-b71e-6c333f6cd66c","type":"Grid"},{"attributes":{"formatter":{"id":"5ec1d8fd-a22e-4815-ba2a-b3284e51be21","type":"BasicTickFormatter"},"plot":{"id":"ee98cce7-5e3c-43a7-aec6-8f24ea46e8ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"d70c9c62-5278-4699-988c-05e947e70a5b","type":"BasicTicker"}},"id":"653eb10b-a50c-4708-8612-67ea4d192b1d","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"682e1fa3-9f79-48cc-873d-7d2cd21d6f0c","type":"DiamondCross"},{"attributes":{},"id":"b403df23-ef73-48aa-a2dc-4fd05d1f667f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"b403df23-ef73-48aa-a2dc-4fd05d1f667f","type":"BasicTickFormatter"},"plot":{"id":"ee98cce7-5e3c-43a7-aec6-8f24ea46e8ff","subtype":"Figure","type":"Plot"},"ticker":{"id":"aa8dd452-bfd2-42d1-8422-948e7c9f72cb","type":"BasicTicker"}},"id":"5b13116a-d5b7-468b-962e-a5f325de34c2","type":"LinearAxis"},{"attributes":{"below":[{"id":"653eb10b-a50c-4708-8612-67ea4d192b1d","type":"LinearAxis"}],"left":[{"id":"5b13116a-d5b7-468b-962e-a5f325de34c2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"653eb10b-a50c-4708-8612-67ea4d192b1d","type":"LinearAxis"},{"id":"93ec7097-7d99-4b9c-b71e-6c333f6cd66c","type":"Grid"},{"id":"5b13116a-d5b7-468b-962e-a5f325de34c2","type":"LinearAxis"},{"id":"c4da495f-fb71-454b-9a28-25d1ea87d028","type":"Grid"},{"id":"6286ca96-0d82-4696-8e49-6dd14126c6ce","type":"BoxAnnotation"},{"id":"992d15c1-f9dc-44d4-a6eb-90a9ba0e8470","type":"GlyphRenderer"}],"title":{"id":"7a9c2f26-b0ac-472e-bfae-67a610b2c848","type":"Title"},"tool_events":{"id":"8fcbfb23-c1cb-45c2-9bb4-cb281784ed14","type":"ToolEvents"},"toolbar":{"id":"cb665689-5241-4615-a446-34bd4f9a1ea5","type":"Toolbar"},"x_range":{"id":"25702598-74e2-42b9-aa8a-3d3b540a327d","type":"DataRange1d"},"y_range":{"id":"6557a01e-b339-4145-bb62-433525d9b55c","type":"DataRange1d"}},"id":"ee98cce7-5e3c-43a7-aec6-8f24ea46e8ff","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"25702598-74e2-42b9-aa8a-3d3b540a327d","type":"DataRange1d"}],"root_ids":["ee98cce7-5e3c-43a7-aec6-8f24ea46e8ff"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"582781f8-39a6-4aac-9c6a-46995e7daddf","elementid":"e67196f1-ee7e-4d60-b034-f2166c44e2a8","modelid":"ee98cce7-5e3c-43a7-aec6-8f24ea46e8ff"}];
              
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