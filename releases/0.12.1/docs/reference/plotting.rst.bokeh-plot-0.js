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
      };var element = document.getElementById("36fefd7c-9fb8-4ea3-80c4-1a126fc1e088");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '36fefd7c-9fb8-4ea3-80c4-1a126fc1e088' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"d60ee6ba-373e-43f5-b948-9c155cb2f9a5":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.2},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"35e80be9-b91b-498c-8b71-ebc8b5befef7","type":"Annulus"},{"attributes":{},"id":"396168ef-8247-439c-989a-0bbfd9f718c7","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"261a76af-35ad-43b1-a742-362998463a95","type":"PanTool"},{"id":"b15ef323-fc82-4edf-90c4-f0367e9ac574","type":"WheelZoomTool"},{"id":"1825ffd9-7168-4c90-9ce3-5b54c242417d","type":"BoxZoomTool"},{"id":"ca5e546b-832a-4e85-a723-980ca8ee3d6a","type":"SaveTool"},{"id":"c3b7521e-6e92-40e9-b168-b9ebf85f0fbb","type":"ResetTool"},{"id":"f0b483c0-ad80-49f6-b010-7a28d214a548","type":"HelpTool"}]},"id":"b8bf21b3-eb05-48ac-8cff-f6292ea05d50","type":"Toolbar"},{"attributes":{"overlay":{"id":"29faba82-6332-4dce-a29e-e32cbeedec60","type":"BoxAnnotation"},"plot":{"id":"b88e6642-d174-48d4-bc84-da1740f67368","subtype":"Figure","type":"Plot"}},"id":"1825ffd9-7168-4c90-9ce3-5b54c242417d","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"c3ee928f-0179-4d84-8bfe-1bf90f2a4625","type":"LinearAxis"}],"left":[{"id":"3b0ec862-8ce5-49cf-959a-6d23eba41b0b","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c3ee928f-0179-4d84-8bfe-1bf90f2a4625","type":"LinearAxis"},{"id":"314437e4-6e37-4c32-b22f-f01bcb3ac9ac","type":"Grid"},{"id":"3b0ec862-8ce5-49cf-959a-6d23eba41b0b","type":"LinearAxis"},{"id":"1de26e3f-cebb-41f0-bfbe-551513b86848","type":"Grid"},{"id":"29faba82-6332-4dce-a29e-e32cbeedec60","type":"BoxAnnotation"},{"id":"ff40188f-a5ca-4b64-9f71-648f2f1a3cd5","type":"GlyphRenderer"}],"title":{"id":"b0ce8071-6b51-4d47-9a3a-af3a6f902b39","type":"Title"},"tool_events":{"id":"396168ef-8247-439c-989a-0bbfd9f718c7","type":"ToolEvents"},"toolbar":{"id":"b8bf21b3-eb05-48ac-8cff-f6292ea05d50","type":"Toolbar"},"x_range":{"id":"472db80b-81a6-4c04-98c8-7dd957ce085f","type":"DataRange1d"},"y_range":{"id":"ba65b0c9-61b4-4057-84fb-cdfde6418c93","type":"DataRange1d"}},"id":"b88e6642-d174-48d4-bc84-da1740f67368","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"b88e6642-d174-48d4-bc84-da1740f67368","subtype":"Figure","type":"Plot"}},"id":"c3b7521e-6e92-40e9-b168-b9ebf85f0fbb","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"b88e6642-d174-48d4-bc84-da1740f67368","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e6d4767-d73b-4cc3-a4bc-e3b600ca152e","type":"BasicTicker"}},"id":"1de26e3f-cebb-41f0-bfbe-551513b86848","type":"Grid"},{"attributes":{"plot":{"id":"b88e6642-d174-48d4-bc84-da1740f67368","subtype":"Figure","type":"Plot"}},"id":"f0b483c0-ad80-49f6-b010-7a28d214a548","type":"HelpTool"},{"attributes":{"plot":{"id":"b88e6642-d174-48d4-bc84-da1740f67368","subtype":"Figure","type":"Plot"}},"id":"ca5e546b-832a-4e85-a723-980ca8ee3d6a","type":"SaveTool"},{"attributes":{"plot":{"id":"b88e6642-d174-48d4-bc84-da1740f67368","subtype":"Figure","type":"Plot"}},"id":"261a76af-35ad-43b1-a742-362998463a95","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"7eeef3ff-adf3-4ca0-9bd8-f6debb242851","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#7FC97F"},"inner_radius":{"units":"data","value":0.2},"line_color":{"value":"#7FC97F"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"246c0036-d905-456c-8eef-b2650a74e2c4","type":"Annulus"},{"attributes":{"plot":null,"text":null},"id":"b0ce8071-6b51-4d47-9a3a-af3a6f902b39","type":"Title"},{"attributes":{"formatter":{"id":"61ea7769-ab2e-4ee9-bc9d-dda63ba21484","type":"BasicTickFormatter"},"plot":{"id":"b88e6642-d174-48d4-bc84-da1740f67368","subtype":"Figure","type":"Plot"},"ticker":{"id":"80506385-a3ad-4a92-a36a-04f9fdfe8658","type":"BasicTicker"}},"id":"c3ee928f-0179-4d84-8bfe-1bf90f2a4625","type":"LinearAxis"},{"attributes":{"callback":null},"id":"ba65b0c9-61b4-4057-84fb-cdfde6418c93","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29faba82-6332-4dce-a29e-e32cbeedec60","type":"BoxAnnotation"},{"attributes":{},"id":"c69be25d-042e-4c50-b5b6-121f6e807710","type":"BasicTickFormatter"},{"attributes":{},"id":"80506385-a3ad-4a92-a36a-04f9fdfe8658","type":"BasicTicker"},{"attributes":{},"id":"9e6d4767-d73b-4cc3-a4bc-e3b600ca152e","type":"BasicTicker"},{"attributes":{"plot":{"id":"b88e6642-d174-48d4-bc84-da1740f67368","subtype":"Figure","type":"Plot"},"ticker":{"id":"80506385-a3ad-4a92-a36a-04f9fdfe8658","type":"BasicTicker"}},"id":"314437e4-6e37-4c32-b22f-f01bcb3ac9ac","type":"Grid"},{"attributes":{"formatter":{"id":"c69be25d-042e-4c50-b5b6-121f6e807710","type":"BasicTickFormatter"},"plot":{"id":"b88e6642-d174-48d4-bc84-da1740f67368","subtype":"Figure","type":"Plot"},"ticker":{"id":"9e6d4767-d73b-4cc3-a4bc-e3b600ca152e","type":"BasicTicker"}},"id":"3b0ec862-8ce5-49cf-959a-6d23eba41b0b","type":"LinearAxis"},{"attributes":{"data_source":{"id":"7eeef3ff-adf3-4ca0-9bd8-f6debb242851","type":"ColumnDataSource"},"glyph":{"id":"246c0036-d905-456c-8eef-b2650a74e2c4","type":"Annulus"},"hover_glyph":null,"nonselection_glyph":{"id":"35e80be9-b91b-498c-8b71-ebc8b5befef7","type":"Annulus"},"selection_glyph":null},"id":"ff40188f-a5ca-4b64-9f71-648f2f1a3cd5","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"472db80b-81a6-4c04-98c8-7dd957ce085f","type":"DataRange1d"},{"attributes":{"plot":{"id":"b88e6642-d174-48d4-bc84-da1740f67368","subtype":"Figure","type":"Plot"}},"id":"b15ef323-fc82-4edf-90c4-f0367e9ac574","type":"WheelZoomTool"},{"attributes":{},"id":"61ea7769-ab2e-4ee9-bc9d-dda63ba21484","type":"BasicTickFormatter"}],"root_ids":["b88e6642-d174-48d4-bc84-da1740f67368"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"d60ee6ba-373e-43f5-b948-9c155cb2f9a5","elementid":"36fefd7c-9fb8-4ea3-80c4-1a126fc1e088","modelid":"b88e6642-d174-48d4-bc84-da1740f67368"}];
              
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