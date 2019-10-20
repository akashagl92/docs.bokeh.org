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
      };var element = document.getElementById("ffade7ce-4cfa-4b22-af94-02aa7895ed34");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ffade7ce-4cfa-4b22-af94-02aa7895ed34' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"96b94f6b-84c7-41ea-9bed-7e024d503280":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5f4f0e11-dc29-4bce-848a-0c29276b1ed7","type":"Square"},{"attributes":{},"id":"d47f8475-4f72-4787-b6df-e1dfadac35e3","type":"BasicTickFormatter"},{"attributes":{},"id":"f92bf2df-9d5e-47aa-b385-695ed1cff4df","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"9c957665-30c9-4caa-8d91-358455111a5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c9a7d1bb-ef91-48d4-a4dd-5107b32772e0","type":"BasicTicker"}},"id":"1c28b409-05ba-4b92-9a9e-584124587e74","type":"Grid"},{"attributes":{"plot":{"id":"9c957665-30c9-4caa-8d91-358455111a5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"f92bf2df-9d5e-47aa-b385-695ed1cff4df","type":"BasicTicker"}},"id":"8d97cdc6-7feb-40ce-8797-db8cc8fb2b96","type":"Grid"},{"attributes":{"plot":{"id":"b302328e-346d-43c1-9e04-2f8f573a20ca","subtype":"Figure","type":"Plot"}},"id":"5fe8f719-09c8-4d5f-961e-e1f8c1d07749","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"adac53b1-b704-47d7-aa03-787559aa942c","type":"PanTool"},{"id":"76ce881a-5eeb-4b59-b316-698d6abfb6d7","type":"WheelZoomTool"},{"id":"3db164ef-4a36-4c43-bbf5-3aca80965fc1","type":"BoxZoomTool"},{"id":"4a03dce8-a1f8-4def-a64b-cde50569eacc","type":"SaveTool"},{"id":"1e544283-6a51-46f1-a72c-16e4eab87479","type":"ResetTool"},{"id":"5fe8f719-09c8-4d5f-961e-e1f8c1d07749","type":"HelpTool"}]},"id":"fb1b9ec7-4164-4723-a34e-237b7e8cbb53","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"fa7a9966-b7a6-48cf-9205-3fe1b115d4d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"0fa5efbd-0ba1-4818-9952-b5e1740b041c","type":"BasicTicker"}},"id":"0305defb-ed3c-452a-9dea-0bce344b9798","type":"Grid"},{"attributes":{"data_source":{"id":"18ced16a-cac1-4eb4-99c4-30a71b1b22e6","type":"ColumnDataSource"},"glyph":{"id":"5f4f0e11-dc29-4bce-848a-0c29276b1ed7","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d74c9a7d-c187-4c15-9c3e-0a234e970b2c","type":"Square"},"selection_glyph":null},"id":"e23a6050-b5c5-4b55-8014-bd54bb80f540","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"0fb64932-7fef-4831-a6ca-902a2fb88968","type":"LinearAxis"}],"left":[{"id":"86acf5b0-30ac-4ac6-a6c2-81ff8c1ed21f","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"0fb64932-7fef-4831-a6ca-902a2fb88968","type":"LinearAxis"},{"id":"f4859bac-0bd8-41c3-b536-995c4caf1dc9","type":"Grid"},{"id":"86acf5b0-30ac-4ac6-a6c2-81ff8c1ed21f","type":"LinearAxis"},{"id":"0305defb-ed3c-452a-9dea-0bce344b9798","type":"Grid"},{"id":"0d359fc9-5255-4f91-a29e-f06478b94291","type":"BoxAnnotation"},{"id":"e23a6050-b5c5-4b55-8014-bd54bb80f540","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"750fe151-6d88-411d-ba08-a69e57d15823","type":"ToolEvents"},"toolbar":{"id":"a7f95f36-3ea5-42fd-bf2b-c4841f340511","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"95f03129-8dd0-4e9b-b271-21b5899d30cf","type":"DataRange1d"},"y_range":{"id":"2c0bd2b0-f314-4211-b6db-74e84562e2eb","type":"DataRange1d"}},"id":"fa7a9966-b7a6-48cf-9205-3fe1b115d4d7","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"b302328e-346d-43c1-9e04-2f8f573a20ca","subtype":"Figure","type":"Plot"}},"id":"1e544283-6a51-46f1-a72c-16e4eab87479","type":"ResetTool"},{"attributes":{"callback":null},"id":"2c0bd2b0-f314-4211-b6db-74e84562e2eb","type":"DataRange1d"},{"attributes":{"plot":{"id":"b302328e-346d-43c1-9e04-2f8f573a20ca","subtype":"Figure","type":"Plot"}},"id":"76ce881a-5eeb-4b59-b316-698d6abfb6d7","type":"WheelZoomTool"},{"attributes":{},"id":"0fa5efbd-0ba1-4818-9952-b5e1740b041c","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"38e6373e-0876-423f-b056-3142e12e6ce2","type":"Triangle"},{"attributes":{"plot":{"id":"fa7a9966-b7a6-48cf-9205-3fe1b115d4d7","subtype":"Figure","type":"Plot"}},"id":"193256ef-be97-4b47-8ec2-5cfc700b5ccf","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c5e9edd3-d3ae-4bab-be9c-a3dccd428dfd","type":"Circle"},{"attributes":{},"id":"c9a7d1bb-ef91-48d4-a4dd-5107b32772e0","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4ff356ae-7ed3-4547-a617-ebe8e231b34a","type":"PanTool"},{"id":"736ca88c-6fae-41ef-b3d2-bb866c9ee05b","type":"WheelZoomTool"},{"id":"c4a7169c-9ba2-4a9f-ab80-12d4abac446e","type":"BoxZoomTool"},{"id":"193256ef-be97-4b47-8ec2-5cfc700b5ccf","type":"SaveTool"},{"id":"a14cba04-6f65-4052-9399-8b38a953c8d1","type":"ResetTool"},{"id":"102f6afd-23a2-45cd-882c-4587aab98eaa","type":"HelpTool"}]},"id":"a7f95f36-3ea5-42fd-bf2b-c4841f340511","type":"Toolbar"},{"attributes":{"plot":{"id":"9c957665-30c9-4caa-8d91-358455111a5e","subtype":"Figure","type":"Plot"}},"id":"f71a02a2-1a67-41ef-9b6a-d900ccf5a277","type":"PanTool"},{"attributes":{},"id":"e45923d8-d03a-4b39-804a-c01be677e723","type":"BasicTicker"},{"attributes":{"plot":{"id":"fa7a9966-b7a6-48cf-9205-3fe1b115d4d7","subtype":"Figure","type":"Plot"}},"id":"736ca88c-6fae-41ef-b3d2-bb866c9ee05b","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"fa7a9966-b7a6-48cf-9205-3fe1b115d4d7","subtype":"Figure","type":"Plot"}},"id":"a14cba04-6f65-4052-9399-8b38a953c8d1","type":"ResetTool"},{"attributes":{"plot":{"id":"b302328e-346d-43c1-9e04-2f8f573a20ca","subtype":"Figure","type":"Plot"}},"id":"4a03dce8-a1f8-4def-a64b-cde50569eacc","type":"SaveTool"},{"attributes":{},"id":"aa257665-9e2b-4c48-8b19-b0a068631a02","type":"BasicTickFormatter"},{"attributes":{},"id":"7d48b36c-f5ee-413f-a7aa-e910be538dfd","type":"BasicTickFormatter"},{"attributes":{},"id":"e0ed6efe-f325-46dd-81d3-e67a650dff73","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"f99c64e3-d881-482b-8bb5-260986c7e7dd","type":"LinearAxis"}],"left":[{"id":"c786a50f-fa49-4dcf-82e0-da2517d25da4","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"f99c64e3-d881-482b-8bb5-260986c7e7dd","type":"LinearAxis"},{"id":"7a9b7c35-ba06-4ba7-9d1c-23734447bdb8","type":"Grid"},{"id":"c786a50f-fa49-4dcf-82e0-da2517d25da4","type":"LinearAxis"},{"id":"a759fdee-1e25-4673-81d3-c88e339d3627","type":"Grid"},{"id":"96f0f037-cf07-4e31-9edf-5a552f58cbda","type":"BoxAnnotation"},{"id":"424c4ef2-38ab-4e15-854c-e84ebcfab0d6","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"5d5e4ff1-5d32-44bc-bdf3-30d8d0db9934","type":"ToolEvents"},"toolbar":{"id":"fb1b9ec7-4164-4723-a34e-237b7e8cbb53","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"95f03129-8dd0-4e9b-b271-21b5899d30cf","type":"DataRange1d"},"y_range":{"id":"c07b77b1-5c65-4830-b3d9-4d3625f75a4f","type":"DataRange1d"}},"id":"b302328e-346d-43c1-9e04-2f8f573a20ca","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"653b6074-ec8c-4a15-ab92-679fbbbcd36f","type":"BasicTicker"},{"attributes":{"data_source":{"id":"c6fcdf9c-bd8a-4db2-b29c-8ef9e162299d","type":"ColumnDataSource"},"glyph":{"id":"8b4c190d-4152-48ad-935c-74e259d45d5f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c5e9edd3-d3ae-4bab-be9c-a3dccd428dfd","type":"Circle"},"selection_glyph":null},"id":"315fda06-3e14-4505-a1fb-a7d7cbf8d5ad","type":"GlyphRenderer"},{"attributes":{},"id":"750fe151-6d88-411d-ba08-a69e57d15823","type":"ToolEvents"},{"attributes":{"plot":{"id":"9c957665-30c9-4caa-8d91-358455111a5e","subtype":"Figure","type":"Plot"}},"id":"59107901-670d-42ae-8477-56d268d222d2","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f71a02a2-1a67-41ef-9b6a-d900ccf5a277","type":"PanTool"},{"id":"58b7a62c-1172-48b0-8fa4-56c97a0955c8","type":"WheelZoomTool"},{"id":"c0767b73-208d-41d5-97f2-579b617ca078","type":"BoxZoomTool"},{"id":"59107901-670d-42ae-8477-56d268d222d2","type":"SaveTool"},{"id":"5ec1390a-60df-4bb9-a786-d0334b2a8618","type":"ResetTool"},{"id":"ccd23d3c-4fbe-480c-9455-c4ef2ae58f7f","type":"HelpTool"}]},"id":"492dc6dd-aaa3-4c10-ac37-4ea70ac4aadd","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"18ced16a-cac1-4eb4-99c4-30a71b1b22e6","type":"ColumnDataSource"},{"attributes":{},"id":"05a2264c-4b61-472c-8ea2-a134a653e3de","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0d359fc9-5255-4f91-a29e-f06478b94291","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"95f03129-8dd0-4e9b-b271-21b5899d30cf","type":"DataRange1d"},{"attributes":{"formatter":{"id":"7d48b36c-f5ee-413f-a7aa-e910be538dfd","type":"BasicTickFormatter"},"plot":{"id":"9c957665-30c9-4caa-8d91-358455111a5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"f92bf2df-9d5e-47aa-b385-695ed1cff4df","type":"BasicTicker"}},"id":"43c88a57-274c-4fd0-9109-446f3e5a176b","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"c5a9e221-6853-47eb-aeba-1af9b1cfc14e","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7b08f39b-3bc6-4bfc-a485-b3b7e337caf2","type":"Triangle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"94a3510c-64d4-4a75-a063-3851772aab6c","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"96f0f037-cf07-4e31-9edf-5a552f58cbda","type":"BoxAnnotation"},"plot":{"id":"b302328e-346d-43c1-9e04-2f8f573a20ca","subtype":"Figure","type":"Plot"}},"id":"3db164ef-4a36-4c43-bbf5-3aca80965fc1","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"fa7a9966-b7a6-48cf-9205-3fe1b115d4d7","subtype":"Figure","type":"Plot"}},"id":"102f6afd-23a2-45cd-882c-4587aab98eaa","type":"HelpTool"},{"attributes":{"plot":{"id":"9c957665-30c9-4caa-8d91-358455111a5e","subtype":"Figure","type":"Plot"}},"id":"ccd23d3c-4fbe-480c-9455-c4ef2ae58f7f","type":"HelpTool"},{"attributes":{},"id":"01c88304-00b5-4471-82dd-c0dc45a6de4e","type":"BasicTickFormatter"},{"attributes":{},"id":"4131f092-1a01-406b-b008-ae8c88df73c0","type":"ToolEvents"},{"attributes":{"formatter":{"id":"e0ed6efe-f325-46dd-81d3-e67a650dff73","type":"BasicTickFormatter"},"plot":{"id":"b302328e-346d-43c1-9e04-2f8f573a20ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"e45923d8-d03a-4b39-804a-c01be677e723","type":"BasicTicker"}},"id":"f99c64e3-d881-482b-8bb5-260986c7e7dd","type":"LinearAxis"},{"attributes":{"data_source":{"id":"c5a9e221-6853-47eb-aeba-1af9b1cfc14e","type":"ColumnDataSource"},"glyph":{"id":"7b08f39b-3bc6-4bfc-a485-b3b7e337caf2","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"38e6373e-0876-423f-b056-3142e12e6ce2","type":"Triangle"},"selection_glyph":null},"id":"424c4ef2-38ab-4e15-854c-e84ebcfab0d6","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"aa257665-9e2b-4c48-8b19-b0a068631a02","type":"BasicTickFormatter"},"plot":{"id":"fa7a9966-b7a6-48cf-9205-3fe1b115d4d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"0fa5efbd-0ba1-4818-9952-b5e1740b041c","type":"BasicTicker"}},"id":"86acf5b0-30ac-4ac6-a6c2-81ff8c1ed21f","type":"LinearAxis"},{"attributes":{"plot":{"id":"b302328e-346d-43c1-9e04-2f8f573a20ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"e45923d8-d03a-4b39-804a-c01be677e723","type":"BasicTicker"}},"id":"7a9b7c35-ba06-4ba7-9d1c-23734447bdb8","type":"Grid"},{"attributes":{"plot":{"id":"fa7a9966-b7a6-48cf-9205-3fe1b115d4d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"e50238fa-f2e3-4685-b541-87ad650e1c88","type":"BasicTicker"}},"id":"f4859bac-0bd8-41c3-b536-995c4caf1dc9","type":"Grid"},{"attributes":{},"id":"e50238fa-f2e3-4685-b541-87ad650e1c88","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96f0f037-cf07-4e31-9edf-5a552f58cbda","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"b302328e-346d-43c1-9e04-2f8f573a20ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"653b6074-ec8c-4a15-ab92-679fbbbcd36f","type":"BasicTicker"}},"id":"a759fdee-1e25-4673-81d3-c88e339d3627","type":"Grid"},{"attributes":{"children":[{"id":"7a11b2a3-4327-4c1f-9105-e72ee79d05fb","type":"Row"}]},"id":"fe23f27b-9009-4630-a647-d7bb1f2891a2","type":"Column"},{"attributes":{},"id":"5d5e4ff1-5d32-44bc-bdf3-30d8d0db9934","type":"ToolEvents"},{"attributes":{"formatter":{"id":"01c88304-00b5-4471-82dd-c0dc45a6de4e","type":"BasicTickFormatter"},"plot":{"id":"9c957665-30c9-4caa-8d91-358455111a5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"c9a7d1bb-ef91-48d4-a4dd-5107b32772e0","type":"BasicTicker"}},"id":"cf81e5f0-506e-4555-bc4c-fa38071f0647","type":"LinearAxis"},{"attributes":{"overlay":{"id":"0d359fc9-5255-4f91-a29e-f06478b94291","type":"BoxAnnotation"},"plot":{"id":"fa7a9966-b7a6-48cf-9205-3fe1b115d4d7","subtype":"Figure","type":"Plot"}},"id":"c4a7169c-9ba2-4a9f-ab80-12d4abac446e","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"d47f8475-4f72-4787-b6df-e1dfadac35e3","type":"BasicTickFormatter"},"plot":{"id":"b302328e-346d-43c1-9e04-2f8f573a20ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"653b6074-ec8c-4a15-ab92-679fbbbcd36f","type":"BasicTicker"}},"id":"c786a50f-fa49-4dcf-82e0-da2517d25da4","type":"LinearAxis"},{"attributes":{"children":[{"id":"9c957665-30c9-4caa-8d91-358455111a5e","subtype":"Figure","type":"Plot"},{"id":"b302328e-346d-43c1-9e04-2f8f573a20ca","subtype":"Figure","type":"Plot"},{"id":"fa7a9966-b7a6-48cf-9205-3fe1b115d4d7","subtype":"Figure","type":"Plot"}]},"id":"7a11b2a3-4327-4c1f-9105-e72ee79d05fb","type":"Row"},{"attributes":{"overlay":{"id":"94a3510c-64d4-4a75-a063-3851772aab6c","type":"BoxAnnotation"},"plot":{"id":"9c957665-30c9-4caa-8d91-358455111a5e","subtype":"Figure","type":"Plot"}},"id":"c0767b73-208d-41d5-97f2-579b617ca078","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d74c9a7d-c187-4c15-9c3e-0a234e970b2c","type":"Square"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8b4c190d-4152-48ad-935c-74e259d45d5f","type":"Circle"},{"attributes":{"plot":{"id":"9c957665-30c9-4caa-8d91-358455111a5e","subtype":"Figure","type":"Plot"}},"id":"5ec1390a-60df-4bb9-a786-d0334b2a8618","type":"ResetTool"},{"attributes":{"formatter":{"id":"05a2264c-4b61-472c-8ea2-a134a653e3de","type":"BasicTickFormatter"},"plot":{"id":"fa7a9966-b7a6-48cf-9205-3fe1b115d4d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"e50238fa-f2e3-4685-b541-87ad650e1c88","type":"BasicTicker"}},"id":"0fb64932-7fef-4831-a6ca-902a2fb88968","type":"LinearAxis"},{"attributes":{"plot":{"id":"9c957665-30c9-4caa-8d91-358455111a5e","subtype":"Figure","type":"Plot"}},"id":"58b7a62c-1172-48b0-8fa4-56c97a0955c8","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"c07b77b1-5c65-4830-b3d9-4d3625f75a4f","type":"DataRange1d"},{"attributes":{"plot":{"id":"b302328e-346d-43c1-9e04-2f8f573a20ca","subtype":"Figure","type":"Plot"}},"id":"adac53b1-b704-47d7-aa03-787559aa942c","type":"PanTool"},{"attributes":{"below":[{"id":"43c88a57-274c-4fd0-9109-446f3e5a176b","type":"LinearAxis"}],"left":[{"id":"cf81e5f0-506e-4555-bc4c-fa38071f0647","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"43c88a57-274c-4fd0-9109-446f3e5a176b","type":"LinearAxis"},{"id":"8d97cdc6-7feb-40ce-8797-db8cc8fb2b96","type":"Grid"},{"id":"cf81e5f0-506e-4555-bc4c-fa38071f0647","type":"LinearAxis"},{"id":"1c28b409-05ba-4b92-9a9e-584124587e74","type":"Grid"},{"id":"94a3510c-64d4-4a75-a063-3851772aab6c","type":"BoxAnnotation"},{"id":"315fda06-3e14-4505-a1fb-a7d7cbf8d5ad","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"4131f092-1a01-406b-b008-ae8c88df73c0","type":"ToolEvents"},"toolbar":{"id":"492dc6dd-aaa3-4c10-ac37-4ea70ac4aadd","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"95f03129-8dd0-4e9b-b271-21b5899d30cf","type":"DataRange1d"},"y_range":{"id":"c07b77b1-5c65-4830-b3d9-4d3625f75a4f","type":"DataRange1d"}},"id":"9c957665-30c9-4caa-8d91-358455111a5e","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"c6fcdf9c-bd8a-4db2-b29c-8ef9e162299d","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"fa7a9966-b7a6-48cf-9205-3fe1b115d4d7","subtype":"Figure","type":"Plot"}},"id":"4ff356ae-7ed3-4547-a617-ebe8e231b34a","type":"PanTool"}],"root_ids":["fe23f27b-9009-4630-a647-d7bb1f2891a2"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"96b94f6b-84c7-41ea-9bed-7e024d503280","elementid":"ffade7ce-4cfa-4b22-af94-02aa7895ed34","modelid":"fe23f27b-9009-4630-a647-d7bb1f2891a2"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
