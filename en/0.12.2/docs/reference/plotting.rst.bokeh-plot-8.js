document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
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
      };var element = document.getElementById("bb4b9e93-0c1c-41e5-bab3-5b17b909afc4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bb4b9e93-0c1c-41e5-bab3-5b17b909afc4' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"c43d8c33-5233-47f4-a7ce-b1870e80d2c3":{"roots":{"references":[{"attributes":{"formatter":{"id":"4c72b667-197a-4ba2-b2b8-a687c6fd8727","type":"BasicTickFormatter"},"plot":{"id":"bd8d8c52-525e-4c5e-ae3d-4c32bc625e84","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac235acf-28d2-429b-8741-6d9fab7423cb","type":"BasicTicker"}},"id":"91811107-66d3-4674-b6ff-5afae7acc7f1","type":"LinearAxis"},{"attributes":{},"id":"4eeebd41-6b96-4586-b8cb-33f45b50d01a","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"4f8fa9d0-9f2c-4713-88b9-33c7f6a5f8b2","type":"Ellipse"},{"attributes":{"plot":{"id":"bd8d8c52-525e-4c5e-ae3d-4c32bc625e84","subtype":"Figure","type":"Plot"}},"id":"050d93b2-5759-436c-b64f-68bbf6b09336","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ce414b49-1a8d-4abd-bff9-980fc8f8a50c","type":"PanTool"},{"id":"c99ff3fe-ed8e-4587-aa86-e9dfd22f5c98","type":"WheelZoomTool"},{"id":"495b474c-00e9-4473-8d95-dfa88fac770e","type":"BoxZoomTool"},{"id":"050d93b2-5759-436c-b64f-68bbf6b09336","type":"SaveTool"},{"id":"64e5a24b-e541-443f-9ea3-8353dbbf8387","type":"ResetTool"},{"id":"c6d72f11-f182-4695-a8ff-9d8bb51d32ca","type":"HelpTool"}]},"id":"6f3dc848-43ef-477e-8171-c2fe73704167","type":"Toolbar"},{"attributes":{"callback":null},"id":"d5903ef6-ed30-42c1-a335-4444e915d884","type":"DataRange1d"},{"attributes":{},"id":"4c72b667-197a-4ba2-b2b8-a687c6fd8727","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"c596c089-357a-408d-905d-07f362c02a79","type":"Title"},{"attributes":{"below":[{"id":"91811107-66d3-4674-b6ff-5afae7acc7f1","type":"LinearAxis"}],"left":[{"id":"f204e011-db28-4268-8ab5-039ef7f58df5","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"91811107-66d3-4674-b6ff-5afae7acc7f1","type":"LinearAxis"},{"id":"7075660c-6cca-457f-8a4c-361b67a0fd0d","type":"Grid"},{"id":"f204e011-db28-4268-8ab5-039ef7f58df5","type":"LinearAxis"},{"id":"97b500cb-0d6d-4072-a878-76fa618a355a","type":"Grid"},{"id":"1963c3a8-5e68-4cb0-a363-4d614194b0a3","type":"BoxAnnotation"},{"id":"a885a795-dfc9-422f-9a24-52a1b9568b3e","type":"GlyphRenderer"}],"title":{"id":"c596c089-357a-408d-905d-07f362c02a79","type":"Title"},"tool_events":{"id":"4eeebd41-6b96-4586-b8cb-33f45b50d01a","type":"ToolEvents"},"toolbar":{"id":"6f3dc848-43ef-477e-8171-c2fe73704167","type":"Toolbar"},"x_range":{"id":"d5903ef6-ed30-42c1-a335-4444e915d884","type":"DataRange1d"},"y_range":{"id":"a5bb250e-055d-447e-9ada-b632dcac5bed","type":"DataRange1d"}},"id":"bd8d8c52-525e-4c5e-ae3d-4c32bc625e84","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":null},"height":{"units":"data","value":20},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"cb7d388c-8d5b-4042-838e-04bf5e1286fb","type":"Ellipse"},{"attributes":{"plot":{"id":"bd8d8c52-525e-4c5e-ae3d-4c32bc625e84","subtype":"Figure","type":"Plot"}},"id":"64e5a24b-e541-443f-9ea3-8353dbbf8387","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1963c3a8-5e68-4cb0-a363-4d614194b0a3","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"a5bb250e-055d-447e-9ada-b632dcac5bed","type":"DataRange1d"},{"attributes":{"plot":{"id":"bd8d8c52-525e-4c5e-ae3d-4c32bc625e84","subtype":"Figure","type":"Plot"}},"id":"c6d72f11-f182-4695-a8ff-9d8bb51d32ca","type":"HelpTool"},{"attributes":{"formatter":{"id":"1344704a-5fcc-4559-a409-17d5cbad4c10","type":"BasicTickFormatter"},"plot":{"id":"bd8d8c52-525e-4c5e-ae3d-4c32bc625e84","subtype":"Figure","type":"Plot"},"ticker":{"id":"88d5ab4c-b749-4c9e-bf9f-2c3803131927","type":"BasicTicker"}},"id":"f204e011-db28-4268-8ab5-039ef7f58df5","type":"LinearAxis"},{"attributes":{},"id":"1344704a-5fcc-4559-a409-17d5cbad4c10","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"bd8d8c52-525e-4c5e-ae3d-4c32bc625e84","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac235acf-28d2-429b-8741-6d9fab7423cb","type":"BasicTicker"}},"id":"7075660c-6cca-457f-8a4c-361b67a0fd0d","type":"Grid"},{"attributes":{},"id":"ac235acf-28d2-429b-8741-6d9fab7423cb","type":"BasicTicker"},{"attributes":{"plot":{"id":"bd8d8c52-525e-4c5e-ae3d-4c32bc625e84","subtype":"Figure","type":"Plot"}},"id":"ce414b49-1a8d-4abd-bff9-980fc8f8a50c","type":"PanTool"},{"attributes":{"data_source":{"id":"4be3aa71-bd79-4a62-a14b-39b4f971c21f","type":"ColumnDataSource"},"glyph":{"id":"cb7d388c-8d5b-4042-838e-04bf5e1286fb","type":"Ellipse"},"hover_glyph":null,"nonselection_glyph":{"id":"4f8fa9d0-9f2c-4713-88b9-33c7f6a5f8b2","type":"Ellipse"},"selection_glyph":null},"id":"a885a795-dfc9-422f-9a24-52a1b9568b3e","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"bd8d8c52-525e-4c5e-ae3d-4c32bc625e84","subtype":"Figure","type":"Plot"},"ticker":{"id":"88d5ab4c-b749-4c9e-bf9f-2c3803131927","type":"BasicTicker"}},"id":"97b500cb-0d6d-4072-a878-76fa618a355a","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"4be3aa71-bd79-4a62-a14b-39b4f971c21f","type":"ColumnDataSource"},{"attributes":{},"id":"88d5ab4c-b749-4c9e-bf9f-2c3803131927","type":"BasicTicker"},{"attributes":{"plot":{"id":"bd8d8c52-525e-4c5e-ae3d-4c32bc625e84","subtype":"Figure","type":"Plot"}},"id":"c99ff3fe-ed8e-4587-aa86-e9dfd22f5c98","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"1963c3a8-5e68-4cb0-a363-4d614194b0a3","type":"BoxAnnotation"},"plot":{"id":"bd8d8c52-525e-4c5e-ae3d-4c32bc625e84","subtype":"Figure","type":"Plot"}},"id":"495b474c-00e9-4473-8d95-dfa88fac770e","type":"BoxZoomTool"}],"root_ids":["bd8d8c52-525e-4c5e-ae3d-4c32bc625e84"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"c43d8c33-5233-47f4-a7ce-b1870e80d2c3","elementid":"bb4b9e93-0c1c-41e5-bab3-5b17b909afc4","modelid":"bd8d8c52-525e-4c5e-ae3d-4c32bc625e84"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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