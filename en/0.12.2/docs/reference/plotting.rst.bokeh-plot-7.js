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
      };var element = document.getElementById("8404930b-2093-499c-b61c-777222eafdaf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8404930b-2093-499c-b61c-777222eafdaf' but no matching script tag was found. ")
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
                  var docs_json = {"2f0c79b9-23a1-4f08-a62b-6285ea7ffa46":{"roots":{"references":[{"attributes":{},"id":"751ba719-3ef7-4f77-8479-0307cdf6fdac","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"46334897-5424-4eec-b573-f531e4c5ba87","type":"ColumnDataSource"},{"attributes":{},"id":"a5cf2e19-abb2-4b25-a53a-742e65234e3e","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"586eb3d9-f033-4eef-8160-0a12eac6cbb0","type":"Title"},{"attributes":{},"id":"ea7a503c-5482-4412-8e6b-855697a33b6a","type":"BasicTicker"},{"attributes":{"overlay":{"id":"a93197bc-8e0b-40a1-916a-66d0894570f1","type":"BoxAnnotation"},"plot":{"id":"28773ef2-bd60-4cfe-b7d6-48265efc241d","subtype":"Figure","type":"Plot"}},"id":"6d77bc90-feb4-4ea7-adf4-13f380173c50","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"28773ef2-bd60-4cfe-b7d6-48265efc241d","subtype":"Figure","type":"Plot"},"ticker":{"id":"751ba719-3ef7-4f77-8479-0307cdf6fdac","type":"BasicTicker"}},"id":"b3caa059-9219-4da4-bb2a-64efe1b4391f","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a93197bc-8e0b-40a1-916a-66d0894570f1","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"28773ef2-bd60-4cfe-b7d6-48265efc241d","subtype":"Figure","type":"Plot"}},"id":"e8e5f9e6-bf28-40f8-9523-2acfad4c9bcd","type":"PanTool"},{"attributes":{"plot":{"id":"28773ef2-bd60-4cfe-b7d6-48265efc241d","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea7a503c-5482-4412-8e6b-855697a33b6a","type":"BasicTicker"}},"id":"41071210-6a7c-48b4-b7c3-87fb67b7c310","type":"Grid"},{"attributes":{"formatter":{"id":"c7dcdda3-2951-4350-94d7-b78238f82566","type":"BasicTickFormatter"},"plot":{"id":"28773ef2-bd60-4cfe-b7d6-48265efc241d","subtype":"Figure","type":"Plot"},"ticker":{"id":"751ba719-3ef7-4f77-8479-0307cdf6fdac","type":"BasicTicker"}},"id":"f2777a0e-ed54-4e4c-8625-48b36047b6fe","type":"LinearAxis"},{"attributes":{"formatter":{"id":"a5cf2e19-abb2-4b25-a53a-742e65234e3e","type":"BasicTickFormatter"},"plot":{"id":"28773ef2-bd60-4cfe-b7d6-48265efc241d","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea7a503c-5482-4412-8e6b-855697a33b6a","type":"BasicTicker"}},"id":"35789d79-ceb4-453a-b560-f8c1479d5881","type":"LinearAxis"},{"attributes":{},"id":"b7dadc41-c2e7-4e04-be77-e6d30db72a0c","type":"ToolEvents"},{"attributes":{"callback":null},"id":"6866a8b3-97d9-4029-a6be-659565331a55","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"ac4e79e3-bd8d-48aa-aad3-4c3e82dadceb","type":"DiamondCross"},{"attributes":{"plot":{"id":"28773ef2-bd60-4cfe-b7d6-48265efc241d","subtype":"Figure","type":"Plot"}},"id":"47c58913-2982-4df4-b32f-e2d18b46f68f","type":"SaveTool"},{"attributes":{"callback":null},"id":"8e72175f-dab3-4856-9d97-ad2cc6523012","type":"DataRange1d"},{"attributes":{"plot":{"id":"28773ef2-bd60-4cfe-b7d6-48265efc241d","subtype":"Figure","type":"Plot"}},"id":"4e16a77f-fe56-42a9-964c-893633645bc8","type":"ResetTool"},{"attributes":{"below":[{"id":"35789d79-ceb4-453a-b560-f8c1479d5881","type":"LinearAxis"}],"left":[{"id":"f2777a0e-ed54-4e4c-8625-48b36047b6fe","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"35789d79-ceb4-453a-b560-f8c1479d5881","type":"LinearAxis"},{"id":"41071210-6a7c-48b4-b7c3-87fb67b7c310","type":"Grid"},{"id":"f2777a0e-ed54-4e4c-8625-48b36047b6fe","type":"LinearAxis"},{"id":"b3caa059-9219-4da4-bb2a-64efe1b4391f","type":"Grid"},{"id":"a93197bc-8e0b-40a1-916a-66d0894570f1","type":"BoxAnnotation"},{"id":"df6bd27c-b0c6-45d4-af9f-0f9e48fd87d7","type":"GlyphRenderer"}],"title":{"id":"586eb3d9-f033-4eef-8160-0a12eac6cbb0","type":"Title"},"tool_events":{"id":"b7dadc41-c2e7-4e04-be77-e6d30db72a0c","type":"ToolEvents"},"toolbar":{"id":"64fc4cbc-72ba-49c0-991f-1913eaddb42e","type":"Toolbar"},"x_range":{"id":"8e72175f-dab3-4856-9d97-ad2cc6523012","type":"DataRange1d"},"y_range":{"id":"6866a8b3-97d9-4029-a6be-659565331a55","type":"DataRange1d"}},"id":"28773ef2-bd60-4cfe-b7d6-48265efc241d","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"28773ef2-bd60-4cfe-b7d6-48265efc241d","subtype":"Figure","type":"Plot"}},"id":"472df6ad-ee7b-4c5e-9a52-cf5c308d4475","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e8e5f9e6-bf28-40f8-9523-2acfad4c9bcd","type":"PanTool"},{"id":"a8bce5d8-ed9f-4a55-8059-33777908f663","type":"WheelZoomTool"},{"id":"6d77bc90-feb4-4ea7-adf4-13f380173c50","type":"BoxZoomTool"},{"id":"47c58913-2982-4df4-b32f-e2d18b46f68f","type":"SaveTool"},{"id":"4e16a77f-fe56-42a9-964c-893633645bc8","type":"ResetTool"},{"id":"472df6ad-ee7b-4c5e-9a52-cf5c308d4475","type":"HelpTool"}]},"id":"64fc4cbc-72ba-49c0-991f-1913eaddb42e","type":"Toolbar"},{"attributes":{"plot":{"id":"28773ef2-bd60-4cfe-b7d6-48265efc241d","subtype":"Figure","type":"Plot"}},"id":"a8bce5d8-ed9f-4a55-8059-33777908f663","type":"WheelZoomTool"},{"attributes":{},"id":"c7dcdda3-2951-4350-94d7-b78238f82566","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"9cd2cd89-1253-498d-b929-e1f69d2467f2","type":"DiamondCross"},{"attributes":{"data_source":{"id":"46334897-5424-4eec-b573-f531e4c5ba87","type":"ColumnDataSource"},"glyph":{"id":"ac4e79e3-bd8d-48aa-aad3-4c3e82dadceb","type":"DiamondCross"},"hover_glyph":null,"nonselection_glyph":{"id":"9cd2cd89-1253-498d-b929-e1f69d2467f2","type":"DiamondCross"},"selection_glyph":null},"id":"df6bd27c-b0c6-45d4-af9f-0f9e48fd87d7","type":"GlyphRenderer"}],"root_ids":["28773ef2-bd60-4cfe-b7d6-48265efc241d"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"2f0c79b9-23a1-4f08-a62b-6285ea7ffa46","elementid":"8404930b-2093-499c-b61c-777222eafdaf","modelid":"28773ef2-bd60-4cfe-b7d6-48265efc241d"}];
                  
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