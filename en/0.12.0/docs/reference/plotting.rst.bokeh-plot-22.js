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
      };var element = document.getElementById("501b2736-b75c-495d-ac27-85e90d58053a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '501b2736-b75c-495d-ac27-85e90d58053a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"320aadcd-e28a-4445-87a7-ea04624988dd":{"roots":{"references":[{"attributes":{"plot":{"id":"b9f0dd95-ba1c-4de6-956b-8a2db62f3129","subtype":"Figure","type":"Plot"}},"id":"1da21518-effd-4b79-89ba-bec2304807f2","type":"HelpTool"},{"attributes":{"data_source":{"id":"9aedd26b-5aad-4244-bf8a-4ba50a245b74","type":"ColumnDataSource"},"glyph":{"id":"ba851bfe-9fba-4624-9633-2ff8478a3e99","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"d45d8a34-53da-4e63-a99e-05eb01fe40d3","type":"Triangle"},"selection_glyph":null},"id":"b2a19e0f-6438-4fb6-b252-262d20018764","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b9f0dd95-ba1c-4de6-956b-8a2db62f3129","subtype":"Figure","type":"Plot"}},"id":"aa1ab895-85cf-47f8-9361-d4186183740d","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c031447f-e6b1-450d-966d-1b4ffcb3a617","type":"PanTool"},{"id":"67731741-5dc3-420e-9235-2c1703aac70b","type":"WheelZoomTool"},{"id":"1ed7e172-91de-43b8-b356-c8a53452e17c","type":"BoxZoomTool"},{"id":"aa1ab895-85cf-47f8-9361-d4186183740d","type":"SaveTool"},{"id":"274667dd-5792-4282-a8f6-302619be1339","type":"ResetTool"},{"id":"1da21518-effd-4b79-89ba-bec2304807f2","type":"HelpTool"}]},"id":"eb88a585-8787-484c-9705-e61004d8516b","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"b9f0dd95-ba1c-4de6-956b-8a2db62f3129","subtype":"Figure","type":"Plot"},"ticker":{"id":"29111c50-53a0-45e0-b512-0f8686cf59a1","type":"BasicTicker"}},"id":"66a7db02-aa41-4e92-97cf-78dac268308b","type":"Grid"},{"attributes":{"plot":null,"text":null},"id":"6f77f265-a51f-4203-a38a-5e7bf9440ef8","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"9aedd26b-5aad-4244-bf8a-4ba50a245b74","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"5ebbaf9c-02e1-4504-a287-2f3df3bcbdc4","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d45d8a34-53da-4e63-a99e-05eb01fe40d3","type":"Triangle"},{"attributes":{"callback":null},"id":"a5397e53-807a-4cb2-a806-955031abdccb","type":"DataRange1d"},{"attributes":{"plot":{"id":"b9f0dd95-ba1c-4de6-956b-8a2db62f3129","subtype":"Figure","type":"Plot"}},"id":"67731741-5dc3-420e-9235-2c1703aac70b","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"824497e1-a23b-4bdf-be00-6de8d9dad3a0","type":"LinearAxis"}],"left":[{"id":"33201e65-3cf2-4f5f-927c-7315e51ba9c7","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"824497e1-a23b-4bdf-be00-6de8d9dad3a0","type":"LinearAxis"},{"id":"85111a2b-fb8a-41bd-9791-682d0f654412","type":"Grid"},{"id":"33201e65-3cf2-4f5f-927c-7315e51ba9c7","type":"LinearAxis"},{"id":"66a7db02-aa41-4e92-97cf-78dac268308b","type":"Grid"},{"id":"0b4d0bd8-0061-4015-a4da-0692c3473147","type":"BoxAnnotation"},{"id":"b2a19e0f-6438-4fb6-b252-262d20018764","type":"GlyphRenderer"}],"title":{"id":"6f77f265-a51f-4203-a38a-5e7bf9440ef8","type":"Title"},"tool_events":{"id":"fd0208dd-2499-4d2a-be1f-7484eb8377b5","type":"ToolEvents"},"toolbar":{"id":"eb88a585-8787-484c-9705-e61004d8516b","type":"Toolbar"},"x_range":{"id":"a5397e53-807a-4cb2-a806-955031abdccb","type":"DataRange1d"},"y_range":{"id":"5ebbaf9c-02e1-4504-a287-2f3df3bcbdc4","type":"DataRange1d"}},"id":"b9f0dd95-ba1c-4de6-956b-8a2db62f3129","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"b9f0dd95-ba1c-4de6-956b-8a2db62f3129","subtype":"Figure","type":"Plot"}},"id":"c031447f-e6b1-450d-966d-1b4ffcb3a617","type":"PanTool"},{"attributes":{},"id":"a1e1b5ac-15b8-40ee-acaf-b3f60fb3d23f","type":"BasicTickFormatter"},{"attributes":{},"id":"991fedac-3390-475a-88a0-649761d0b26a","type":"BasicTicker"},{"attributes":{},"id":"922d2340-a869-4ab3-8879-cc750e329dc2","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b9f0dd95-ba1c-4de6-956b-8a2db62f3129","subtype":"Figure","type":"Plot"}},"id":"274667dd-5792-4282-a8f6-302619be1339","type":"ResetTool"},{"attributes":{"overlay":{"id":"0b4d0bd8-0061-4015-a4da-0692c3473147","type":"BoxAnnotation"},"plot":{"id":"b9f0dd95-ba1c-4de6-956b-8a2db62f3129","subtype":"Figure","type":"Plot"}},"id":"1ed7e172-91de-43b8-b356-c8a53452e17c","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ba851bfe-9fba-4624-9633-2ff8478a3e99","type":"Triangle"},{"attributes":{"formatter":{"id":"922d2340-a869-4ab3-8879-cc750e329dc2","type":"BasicTickFormatter"},"plot":{"id":"b9f0dd95-ba1c-4de6-956b-8a2db62f3129","subtype":"Figure","type":"Plot"},"ticker":{"id":"29111c50-53a0-45e0-b512-0f8686cf59a1","type":"BasicTicker"}},"id":"33201e65-3cf2-4f5f-927c-7315e51ba9c7","type":"LinearAxis"},{"attributes":{},"id":"fd0208dd-2499-4d2a-be1f-7484eb8377b5","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0b4d0bd8-0061-4015-a4da-0692c3473147","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"a1e1b5ac-15b8-40ee-acaf-b3f60fb3d23f","type":"BasicTickFormatter"},"plot":{"id":"b9f0dd95-ba1c-4de6-956b-8a2db62f3129","subtype":"Figure","type":"Plot"},"ticker":{"id":"991fedac-3390-475a-88a0-649761d0b26a","type":"BasicTicker"}},"id":"824497e1-a23b-4bdf-be00-6de8d9dad3a0","type":"LinearAxis"},{"attributes":{},"id":"29111c50-53a0-45e0-b512-0f8686cf59a1","type":"BasicTicker"},{"attributes":{"plot":{"id":"b9f0dd95-ba1c-4de6-956b-8a2db62f3129","subtype":"Figure","type":"Plot"},"ticker":{"id":"991fedac-3390-475a-88a0-649761d0b26a","type":"BasicTicker"}},"id":"85111a2b-fb8a-41bd-9791-682d0f654412","type":"Grid"}],"root_ids":["b9f0dd95-ba1c-4de6-956b-8a2db62f3129"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"320aadcd-e28a-4445-87a7-ea04624988dd","elementid":"501b2736-b75c-495d-ac27-85e90d58053a","modelid":"b9f0dd95-ba1c-4de6-956b-8a2db62f3129"}];
              
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