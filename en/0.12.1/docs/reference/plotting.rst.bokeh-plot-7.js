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
      };var element = document.getElementById("c0ee7d07-0c61-4270-97ed-f31574b2f990");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c0ee7d07-0c61-4270-97ed-f31574b2f990' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"38db6a9a-7980-408d-931d-7801215fcdd0":{"roots":{"references":[{"attributes":{"below":[{"id":"fe247d95-cbf9-4535-a2e8-06ef19001e9f","type":"LinearAxis"}],"left":[{"id":"8cbbaebb-b23a-4089-83d8-12c49db3310c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"fe247d95-cbf9-4535-a2e8-06ef19001e9f","type":"LinearAxis"},{"id":"e0be45dd-bc55-49bc-8fa7-86133b6f2dbd","type":"Grid"},{"id":"8cbbaebb-b23a-4089-83d8-12c49db3310c","type":"LinearAxis"},{"id":"ac685e1d-c021-40f7-8f0b-73c0e2dfb3b6","type":"Grid"},{"id":"3ab98ad7-04c0-44f7-8c84-514d4d5b0a83","type":"BoxAnnotation"},{"id":"4239c602-5e7a-4e55-b036-0fe0f0d2cba3","type":"GlyphRenderer"}],"title":{"id":"66dab5a6-a42b-4a1d-85d1-fb9820c8af7e","type":"Title"},"tool_events":{"id":"fc9e4a34-1778-4d4d-96fc-c273249f40bf","type":"ToolEvents"},"toolbar":{"id":"2cf4b306-f3a1-4fcd-8b39-e79c27b6eb2d","type":"Toolbar"},"x_range":{"id":"e0852d5a-8b73-4207-a2c3-a6d22424ae12","type":"DataRange1d"},"y_range":{"id":"63c99f74-d09e-4719-b385-ec8ea5a04164","type":"DataRange1d"}},"id":"4a1e9506-cf5f-4cdc-9992-24d9f7eba1d6","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3ab98ad7-04c0-44f7-8c84-514d4d5b0a83","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ee250015-b81c-4175-8ab2-36e6ed02cb3a","type":"PanTool"},{"id":"e3a0b826-2adf-4011-9c9e-a78100f7969a","type":"WheelZoomTool"},{"id":"eca64e5a-ee41-4a6b-8eee-a48d1f68f1d3","type":"BoxZoomTool"},{"id":"fbc86406-dd84-4d13-8e86-4c9319561715","type":"SaveTool"},{"id":"857fbca8-278e-41e7-bdfc-28ce0886ff4d","type":"ResetTool"},{"id":"311fe861-6665-4e37-9e4f-6e7d2b8b5f63","type":"HelpTool"}]},"id":"2cf4b306-f3a1-4fcd-8b39-e79c27b6eb2d","type":"Toolbar"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"bda5f657-4a6b-4d92-97ae-42624128b7a2","type":"DiamondCross"},{"attributes":{"plot":{"id":"4a1e9506-cf5f-4cdc-9992-24d9f7eba1d6","subtype":"Figure","type":"Plot"}},"id":"857fbca8-278e-41e7-bdfc-28ce0886ff4d","type":"ResetTool"},{"attributes":{"plot":{"id":"4a1e9506-cf5f-4cdc-9992-24d9f7eba1d6","subtype":"Figure","type":"Plot"}},"id":"ee250015-b81c-4175-8ab2-36e6ed02cb3a","type":"PanTool"},{"attributes":{"plot":null,"text":null},"id":"66dab5a6-a42b-4a1d-85d1-fb9820c8af7e","type":"Title"},{"attributes":{"callback":null},"id":"63c99f74-d09e-4719-b385-ec8ea5a04164","type":"DataRange1d"},{"attributes":{"data_source":{"id":"916523ff-c4c1-47e0-89af-6445dd63098f","type":"ColumnDataSource"},"glyph":{"id":"bda5f657-4a6b-4d92-97ae-42624128b7a2","type":"DiamondCross"},"hover_glyph":null,"nonselection_glyph":{"id":"e2f499ed-f3ea-4a65-9293-b520ccc7d79d","type":"DiamondCross"},"selection_glyph":null},"id":"4239c602-5e7a-4e55-b036-0fe0f0d2cba3","type":"GlyphRenderer"},{"attributes":{},"id":"a2da21ff-5783-4dd8-959c-02a06ceb9d5d","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"e0852d5a-8b73-4207-a2c3-a6d22424ae12","type":"DataRange1d"},{"attributes":{"plot":{"id":"4a1e9506-cf5f-4cdc-9992-24d9f7eba1d6","subtype":"Figure","type":"Plot"}},"id":"e3a0b826-2adf-4011-9c9e-a78100f7969a","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"4a1e9506-cf5f-4cdc-9992-24d9f7eba1d6","subtype":"Figure","type":"Plot"}},"id":"fbc86406-dd84-4d13-8e86-4c9319561715","type":"SaveTool"},{"attributes":{},"id":"a9b435d4-848a-4712-a2eb-909c9f6f0d36","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"4a1e9506-cf5f-4cdc-9992-24d9f7eba1d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"fde9d96f-cfe3-4ac0-874d-aae1512e0de7","type":"BasicTicker"}},"id":"ac685e1d-c021-40f7-8f0b-73c0e2dfb3b6","type":"Grid"},{"attributes":{},"id":"505c9d16-db24-4e61-9fca-2f6c5654819c","type":"BasicTicker"},{"attributes":{"overlay":{"id":"3ab98ad7-04c0-44f7-8c84-514d4d5b0a83","type":"BoxAnnotation"},"plot":{"id":"4a1e9506-cf5f-4cdc-9992-24d9f7eba1d6","subtype":"Figure","type":"Plot"}},"id":"eca64e5a-ee41-4a6b-8eee-a48d1f68f1d3","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"4a1e9506-cf5f-4cdc-9992-24d9f7eba1d6","subtype":"Figure","type":"Plot"}},"id":"311fe861-6665-4e37-9e4f-6e7d2b8b5f63","type":"HelpTool"},{"attributes":{"formatter":{"id":"a9b435d4-848a-4712-a2eb-909c9f6f0d36","type":"BasicTickFormatter"},"plot":{"id":"4a1e9506-cf5f-4cdc-9992-24d9f7eba1d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"fde9d96f-cfe3-4ac0-874d-aae1512e0de7","type":"BasicTicker"}},"id":"8cbbaebb-b23a-4089-83d8-12c49db3310c","type":"LinearAxis"},{"attributes":{},"id":"fc9e4a34-1778-4d4d-96fc-c273249f40bf","type":"ToolEvents"},{"attributes":{"formatter":{"id":"a2da21ff-5783-4dd8-959c-02a06ceb9d5d","type":"BasicTickFormatter"},"plot":{"id":"4a1e9506-cf5f-4cdc-9992-24d9f7eba1d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"505c9d16-db24-4e61-9fca-2f6c5654819c","type":"BasicTicker"}},"id":"fe247d95-cbf9-4535-a2e8-06ef19001e9f","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"916523ff-c4c1-47e0-89af-6445dd63098f","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"4a1e9506-cf5f-4cdc-9992-24d9f7eba1d6","subtype":"Figure","type":"Plot"},"ticker":{"id":"505c9d16-db24-4e61-9fca-2f6c5654819c","type":"BasicTicker"}},"id":"e0be45dd-bc55-49bc-8fa7-86133b6f2dbd","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"e2f499ed-f3ea-4a65-9293-b520ccc7d79d","type":"DiamondCross"},{"attributes":{},"id":"fde9d96f-cfe3-4ac0-874d-aae1512e0de7","type":"BasicTicker"}],"root_ids":["4a1e9506-cf5f-4cdc-9992-24d9f7eba1d6"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"38db6a9a-7980-408d-931d-7801215fcdd0","elementid":"c0ee7d07-0c61-4270-97ed-f31574b2f990","modelid":"4a1e9506-cf5f-4cdc-9992-24d9f7eba1d6"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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