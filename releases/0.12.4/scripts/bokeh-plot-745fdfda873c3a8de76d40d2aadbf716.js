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
      };var element = document.getElementById("873f3f8d-4b2c-4ffa-9d49-16d91b143fca");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '873f3f8d-4b2c-4ffa-9d49-16d91b143fca' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"b5411497-cc3a-469b-875e-18079f74eb02":{"roots":{"references":[{"attributes":{},"id":"b7ff4e8b-b2f6-48b2-9706-b32394e39957","type":"BasicTicker"},{"attributes":{"plot":{"id":"ab5d65cf-e354-4e2c-b7c2-e1ffe613ae2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"4fd1c430-7ba3-4195-9ff7-a92a55b18cbe","type":"BasicTicker"}},"id":"da1c16dc-4e56-430f-a1c3-b5ff3c3d322f","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"ab5d65cf-e354-4e2c-b7c2-e1ffe613ae2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"b7ff4e8b-b2f6-48b2-9706-b32394e39957","type":"BasicTicker"}},"id":"4b5dbb7f-1ccc-4033-92df-10599362cbb5","type":"Grid"},{"attributes":{"formatter":{"id":"1cb01684-2c5f-4b42-ab6a-cdd21c76b87b","type":"BasicTickFormatter"},"plot":{"id":"ab5d65cf-e354-4e2c-b7c2-e1ffe613ae2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"b7ff4e8b-b2f6-48b2-9706-b32394e39957","type":"BasicTicker"}},"id":"f9f8c498-28a6-48d4-8d40-342352a69f63","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0b350cd5-3483-4fe7-9c0f-012ad1982414","type":"BoxAnnotation"},{"attributes":{},"id":"1cb01684-2c5f-4b42-ab6a-cdd21c76b87b","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"ef131884-60b9-4aa4-8f7a-c2854bb01d22","type":"BasicTickFormatter"},"plot":{"id":"ab5d65cf-e354-4e2c-b7c2-e1ffe613ae2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"4fd1c430-7ba3-4195-9ff7-a92a55b18cbe","type":"BasicTicker"}},"id":"1da5ea6d-88ad-425d-bc2b-ebb8ea59dd91","type":"LinearAxis"},{"attributes":{"callback":null},"id":"e784d5bd-5896-4644-b4bc-15f0d4bdd4b0","type":"DataRange1d"},{"attributes":{"overlay":{"id":"0b350cd5-3483-4fe7-9c0f-012ad1982414","type":"BoxAnnotation"},"plot":{"id":"ab5d65cf-e354-4e2c-b7c2-e1ffe613ae2f","subtype":"Figure","type":"Plot"}},"id":"b5270acf-7cc8-4f1d-a560-5d1c14257220","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"1da5ea6d-88ad-425d-bc2b-ebb8ea59dd91","type":"LinearAxis"}],"left":[{"id":"f9f8c498-28a6-48d4-8d40-342352a69f63","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"1da5ea6d-88ad-425d-bc2b-ebb8ea59dd91","type":"LinearAxis"},{"id":"da1c16dc-4e56-430f-a1c3-b5ff3c3d322f","type":"Grid"},{"id":"f9f8c498-28a6-48d4-8d40-342352a69f63","type":"LinearAxis"},{"id":"4b5dbb7f-1ccc-4033-92df-10599362cbb5","type":"Grid"},{"id":"0b350cd5-3483-4fe7-9c0f-012ad1982414","type":"BoxAnnotation"},{"id":"d17dfc1b-cd5c-4643-be14-2e62a157dd1d","type":"BoxAnnotation"},{"id":"ca92b0da-97de-43fc-bbcf-27f634843d71","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"ff5d40f2-c7c0-4162-b51c-c12a2977c36f","type":"ToolEvents"},"toolbar":{"id":"64684c28-a0df-4cb1-9c96-cfb0e1241f85","type":"Toolbar"},"x_range":{"id":"2c127f76-f6cf-4f0b-85b4-071eea720daf","type":"DataRange1d"},"y_range":{"id":"e784d5bd-5896-4644-b4bc-15f0d4bdd4b0","type":"DataRange1d"}},"id":"ab5d65cf-e354-4e2c-b7c2-e1ffe613ae2f","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"0591c7d5-8372-4c36-afbd-13c939786bd3","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"d17dfc1b-cd5c-4643-be14-2e62a157dd1d","type":"BoxAnnotation"},"plot":{"id":"ab5d65cf-e354-4e2c-b7c2-e1ffe613ae2f","subtype":"Figure","type":"Plot"},"renderers":[{"id":"ca92b0da-97de-43fc-bbcf-27f634843d71","type":"GlyphRenderer"}]},"id":"afaeb5ee-939d-4c2d-8f6d-71b1f99a11c3","type":"BoxSelectTool"},{"attributes":{"plot":{"id":"ab5d65cf-e354-4e2c-b7c2-e1ffe613ae2f","subtype":"Figure","type":"Plot"}},"id":"17e73428-ff1f-49e2-852e-d48e60c6410b","type":"CrosshairTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b5270acf-7cc8-4f1d-a560-5d1c14257220","type":"BoxZoomTool"},{"id":"afaeb5ee-939d-4c2d-8f6d-71b1f99a11c3","type":"BoxSelectTool"},{"id":"17e73428-ff1f-49e2-852e-d48e60c6410b","type":"CrosshairTool"},{"id":"d60ddb8f-75a1-44ed-bf44-22a95eb6e1e4","type":"ResizeTool"},{"id":"81ef0026-f56b-48d0-bc95-7f4af6509a0a","type":"ResetTool"}]},"id":"64684c28-a0df-4cb1-9c96-cfb0e1241f85","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"db9fccad-b45d-4667-8253-070a1c4360a4","type":"Circle"},{"attributes":{"plot":{"id":"ab5d65cf-e354-4e2c-b7c2-e1ffe613ae2f","subtype":"Figure","type":"Plot"}},"id":"d60ddb8f-75a1-44ed-bf44-22a95eb6e1e4","type":"ResizeTool"},{"attributes":{},"id":"ef131884-60b9-4aa4-8f7a-c2854bb01d22","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ab5d65cf-e354-4e2c-b7c2-e1ffe613ae2f","subtype":"Figure","type":"Plot"}},"id":"81ef0026-f56b-48d0-bc95-7f4af6509a0a","type":"ResetTool"},{"attributes":{},"id":"ff5d40f2-c7c0-4162-b51c-c12a2977c36f","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d17dfc1b-cd5c-4643-be14-2e62a157dd1d","type":"BoxAnnotation"},{"attributes":{},"id":"4fd1c430-7ba3-4195-9ff7-a92a55b18cbe","type":"BasicTicker"},{"attributes":{"callback":null},"id":"2c127f76-f6cf-4f0b-85b4-071eea720daf","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"68b7e0b7-b46e-4821-948b-1a14ed3a02c0","type":"Circle"},{"attributes":{"data_source":{"id":"0591c7d5-8372-4c36-afbd-13c939786bd3","type":"ColumnDataSource"},"glyph":{"id":"db9fccad-b45d-4667-8253-070a1c4360a4","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"68b7e0b7-b46e-4821-948b-1a14ed3a02c0","type":"Circle"},"selection_glyph":null},"id":"ca92b0da-97de-43fc-bbcf-27f634843d71","type":"GlyphRenderer"}],"root_ids":["ab5d65cf-e354-4e2c-b7c2-e1ffe613ae2f"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"b5411497-cc3a-469b-875e-18079f74eb02","elementid":"873f3f8d-4b2c-4ffa-9d49-16d91b143fca","modelid":"ab5d65cf-e354-4e2c-b7c2-e1ffe613ae2f"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
