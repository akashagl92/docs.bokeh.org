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
      };var element = document.getElementById("2995d29d-4e2d-4b1f-82f6-60f4747febce");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2995d29d-4e2d-4b1f-82f6-60f4747febce' but no matching script tag was found. ")
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
                var docs_json = {"4d5352e4-7a5f-410e-a11f-1674089b205f":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"64fda912-f0fd-48b7-afcd-62c35e794fae","type":"PanTool"},{"id":"3aea9626-758d-4d79-8fcd-dff4d1784ab1","type":"WheelZoomTool"},{"id":"1b619deb-94e8-420b-af9c-5976bd36cac0","type":"BoxZoomTool"},{"id":"7600116a-744c-4a15-ba76-7172df8adbf1","type":"SaveTool"},{"id":"cccd38af-ec41-49a9-82f4-620f2cab9400","type":"ResetTool"},{"id":"0e7ff61f-61cf-4119-b853-69ba8b33b860","type":"HelpTool"}]},"id":"50d714e6-c298-4798-b173-94dc7a1f4c78","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fe1bbc61-6acb-43b9-a68b-ac96992ce094","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"47b0f336-535e-4ca4-a191-1807a07b589e","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"3f7787e6-7fa2-4f4c-8319-ea0065c037e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"43af83a6-a71d-41cc-83b9-edec4412b6be","type":"BasicTicker"}},"id":"2f91755f-4fdf-47fc-8b3b-d42a12eb597c","type":"Grid"},{"attributes":{},"id":"857f9c50-38e6-46d8-b967-7d1b1497a152","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"07937d74-50e9-4499-8cd9-c5f769d7e639","type":"Circle"},{"attributes":{},"id":"a6bd3020-c0e0-4587-b374-7539787c9fc2","type":"LinearScale"},{"attributes":{"plot":{"id":"94b6dcc0-4362-4152-8538-def479d07f19","subtype":"Figure","type":"Plot"}},"id":"a8faa9d9-e123-468e-9aaf-d7469e75274b","type":"HelpTool"},{"attributes":{},"id":"36518fee-a740-44a2-a2dc-f070486833d1","type":"BasicTickFormatter"},{"attributes":{},"id":"ccb56a76-37e9-4448-91cf-95305083e1fe","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"20ba7db5-faf8-45a3-b6e5-a738fb99c7c7","type":"Line"},{"attributes":{"plot":{"id":"3f7787e6-7fa2-4f4c-8319-ea0065c037e4","subtype":"Figure","type":"Plot"}},"id":"0e7ff61f-61cf-4119-b853-69ba8b33b860","type":"HelpTool"},{"attributes":{"callback":null},"id":"0933951e-196a-4287-96be-2db04272cdf7","type":"DataRange1d"},{"attributes":{},"id":"fd8391a9-30da-4669-ad01-10480dcfec40","type":"LinearScale"},{"attributes":{"plot":{"id":"3f7787e6-7fa2-4f4c-8319-ea0065c037e4","subtype":"Figure","type":"Plot"}},"id":"7600116a-744c-4a15-ba76-7172df8adbf1","type":"SaveTool"},{"attributes":{"formatter":{"id":"70e10529-7b0d-4c9e-a96f-47051bb6cb84","type":"BasicTickFormatter"},"plot":{"id":"94b6dcc0-4362-4152-8538-def479d07f19","subtype":"Figure","type":"Plot"},"ticker":{"id":"28606f7f-23a2-4fec-8d65-257d5e0a2a5b","type":"BasicTicker"}},"id":"3af50e69-c346-4172-b23c-d14293918992","type":"LinearAxis"},{"attributes":{"plot":{"id":"94b6dcc0-4362-4152-8538-def479d07f19","subtype":"Figure","type":"Plot"}},"id":"efe5f1ed-60b9-423e-b0c7-49d2649829fe","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"97ee342e-a58b-4e6f-b956-f6dce7d7bd99","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"70435ce8-7dec-4825-b926-1888620c7ea5","type":"Line"},{"attributes":{"plot":{"id":"3f7787e6-7fa2-4f4c-8319-ea0065c037e4","subtype":"Figure","type":"Plot"}},"id":"3aea9626-758d-4d79-8fcd-dff4d1784ab1","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"15727549-967c-4d5a-b853-b944163ed0d9","type":"PanTool"},{"id":"13246f26-e704-4f40-9d93-6e2d9a9a98cc","type":"WheelZoomTool"},{"id":"4ea0f6fe-511d-4fd6-b2be-3cb9612ab16b","type":"BoxZoomTool"},{"id":"efe5f1ed-60b9-423e-b0c7-49d2649829fe","type":"SaveTool"},{"id":"c75615ce-3971-4f3a-a3c7-279a8212b465","type":"ResetTool"},{"id":"a8faa9d9-e123-468e-9aaf-d7469e75274b","type":"HelpTool"}]},"id":"475f82d1-e4e3-4be8-bf93-191c4944d02c","type":"Toolbar"},{"attributes":{},"id":"e6460091-de80-4090-a5f2-9cae8eb33633","type":"ToolEvents"},{"attributes":{"plot":null,"text":""},"id":"e04aecf1-403d-48c2-964a-7e5a41730685","type":"Title"},{"attributes":{"callback":null,"tabs":[{"id":"8735d111-d4ce-4e43-b690-3c86abb1bb90","type":"Panel"},{"id":"ccd38578-ca3d-49c4-8cf0-71af6d1cd256","type":"Panel"}]},"id":"7f23df17-446c-41dd-83eb-f1f6d75acbdc","type":"Tabs"},{"attributes":{"overlay":{"id":"47b0f336-535e-4ca4-a191-1807a07b589e","type":"BoxAnnotation"},"plot":{"id":"94b6dcc0-4362-4152-8538-def479d07f19","subtype":"Figure","type":"Plot"}},"id":"4ea0f6fe-511d-4fd6-b2be-3cb9612ab16b","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"916ca861-069f-4418-86b3-bfac5470ff32","type":"BasicTickFormatter"},"plot":{"id":"94b6dcc0-4362-4152-8538-def479d07f19","subtype":"Figure","type":"Plot"},"ticker":{"id":"59942266-e449-439d-bac9-9155b7878d1f","type":"BasicTicker"}},"id":"4a97f7d8-ba77-437b-8e3d-6b4a33bc2df6","type":"LinearAxis"},{"attributes":{},"id":"916ca861-069f-4418-86b3-bfac5470ff32","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3f7787e6-7fa2-4f4c-8319-ea0065c037e4","subtype":"Figure","type":"Plot"}},"id":"cccd38af-ec41-49a9-82f4-620f2cab9400","type":"ResetTool"},{"attributes":{"callback":null},"id":"69db9ea7-6f40-440b-891f-a0bd89c2e74a","type":"DataRange1d"},{"attributes":{"plot":{"id":"94b6dcc0-4362-4152-8538-def479d07f19","subtype":"Figure","type":"Plot"}},"id":"c75615ce-3971-4f3a-a3c7-279a8212b465","type":"ResetTool"},{"attributes":{"formatter":{"id":"ac90028a-39e4-4ba1-94fa-c5fb47163932","type":"BasicTickFormatter"},"plot":{"id":"3f7787e6-7fa2-4f4c-8319-ea0065c037e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"43af83a6-a71d-41cc-83b9-edec4412b6be","type":"BasicTicker"}},"id":"a307c6dc-ee13-4c8a-b394-ee883333f044","type":"LinearAxis"},{"attributes":{},"id":"28606f7f-23a2-4fec-8d65-257d5e0a2a5b","type":"BasicTicker"},{"attributes":{},"id":"854b2d2e-a175-4c36-b6cf-77eba8c4818c","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"91790e65-fafe-4883-93a0-b9e9cd6e1b7b","type":"Title"},{"attributes":{"below":[{"id":"4a97f7d8-ba77-437b-8e3d-6b4a33bc2df6","type":"LinearAxis"}],"left":[{"id":"3af50e69-c346-4172-b23c-d14293918992","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"4a97f7d8-ba77-437b-8e3d-6b4a33bc2df6","type":"LinearAxis"},{"id":"928ef58a-f108-4cbe-b598-1c363c7da13d","type":"Grid"},{"id":"3af50e69-c346-4172-b23c-d14293918992","type":"LinearAxis"},{"id":"2009872d-d745-422d-ad1a-3fb31cc6e4c1","type":"Grid"},{"id":"47b0f336-535e-4ca4-a191-1807a07b589e","type":"BoxAnnotation"},{"id":"67c522e0-63b6-4cbd-8163-731c49589923","type":"GlyphRenderer"}],"title":{"id":"91790e65-fafe-4883-93a0-b9e9cd6e1b7b","type":"Title"},"tool_events":{"id":"e6460091-de80-4090-a5f2-9cae8eb33633","type":"ToolEvents"},"toolbar":{"id":"475f82d1-e4e3-4be8-bf93-191c4944d02c","type":"Toolbar"},"x_range":{"id":"69db9ea7-6f40-440b-891f-a0bd89c2e74a","type":"DataRange1d"},"x_scale":{"id":"ccb56a76-37e9-4448-91cf-95305083e1fe","type":"LinearScale"},"y_range":{"id":"0933951e-196a-4287-96be-2db04272cdf7","type":"DataRange1d"},"y_scale":{"id":"a6bd3020-c0e0-4587-b374-7539787c9fc2","type":"LinearScale"}},"id":"94b6dcc0-4362-4152-8538-def479d07f19","subtype":"Figure","type":"Plot"},{"attributes":{"child":{"id":"3f7787e6-7fa2-4f4c-8319-ea0065c037e4","subtype":"Figure","type":"Plot"},"title":"line"},"id":"ccd38578-ca3d-49c4-8cf0-71af6d1cd256","type":"Panel"},{"attributes":{"plot":{"id":"3f7787e6-7fa2-4f4c-8319-ea0065c037e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"857f9c50-38e6-46d8-b967-7d1b1497a152","type":"BasicTicker"}},"id":"45f99ad8-c14a-4016-94ac-4af531f1ac3a","type":"Grid"},{"attributes":{"plot":{"id":"94b6dcc0-4362-4152-8538-def479d07f19","subtype":"Figure","type":"Plot"},"ticker":{"id":"59942266-e449-439d-bac9-9155b7878d1f","type":"BasicTicker"}},"id":"928ef58a-f108-4cbe-b598-1c363c7da13d","type":"Grid"},{"attributes":{"callback":null},"id":"045c0121-1919-4e71-9bdf-6c8938fafb7b","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"883fd1e5-1e46-4092-9559-ea2b78c28911","type":"Circle"},{"attributes":{},"id":"43af83a6-a71d-41cc-83b9-edec4412b6be","type":"BasicTicker"},{"attributes":{},"id":"59942266-e449-439d-bac9-9155b7878d1f","type":"BasicTicker"},{"attributes":{"plot":{"id":"94b6dcc0-4362-4152-8538-def479d07f19","subtype":"Figure","type":"Plot"}},"id":"15727549-967c-4d5a-b853-b944163ed0d9","type":"PanTool"},{"attributes":{"callback":null},"id":"638bd8f8-e5a7-41cd-b3f1-4582cfecb996","type":"DataRange1d"},{"attributes":{"data_source":{"id":"97ee342e-a58b-4e6f-b956-f6dce7d7bd99","type":"ColumnDataSource"},"glyph":{"id":"07937d74-50e9-4499-8cd9-c5f769d7e639","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"883fd1e5-1e46-4092-9559-ea2b78c28911","type":"Circle"},"selection_glyph":null},"id":"67c522e0-63b6-4cbd-8163-731c49589923","type":"GlyphRenderer"},{"attributes":{},"id":"70e10529-7b0d-4c9e-a96f-47051bb6cb84","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"94b6dcc0-4362-4152-8538-def479d07f19","subtype":"Figure","type":"Plot"},"ticker":{"id":"28606f7f-23a2-4fec-8d65-257d5e0a2a5b","type":"BasicTicker"}},"id":"2009872d-d745-422d-ad1a-3fb31cc6e4c1","type":"Grid"},{"attributes":{"plot":{"id":"3f7787e6-7fa2-4f4c-8319-ea0065c037e4","subtype":"Figure","type":"Plot"}},"id":"64fda912-f0fd-48b7-afcd-62c35e794fae","type":"PanTool"},{"attributes":{"formatter":{"id":"36518fee-a740-44a2-a2dc-f070486833d1","type":"BasicTickFormatter"},"plot":{"id":"3f7787e6-7fa2-4f4c-8319-ea0065c037e4","subtype":"Figure","type":"Plot"},"ticker":{"id":"857f9c50-38e6-46d8-b967-7d1b1497a152","type":"BasicTicker"}},"id":"072ad6d9-4064-42bd-877b-ac17cfa4b77c","type":"LinearAxis"},{"attributes":{},"id":"353ba3ec-5be2-4882-b9f3-73177d385cb2","type":"ToolEvents"},{"attributes":{"overlay":{"id":"fe1bbc61-6acb-43b9-a68b-ac96992ce094","type":"BoxAnnotation"},"plot":{"id":"3f7787e6-7fa2-4f4c-8319-ea0065c037e4","subtype":"Figure","type":"Plot"}},"id":"1b619deb-94e8-420b-af9c-5976bd36cac0","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"072ad6d9-4064-42bd-877b-ac17cfa4b77c","type":"LinearAxis"}],"left":[{"id":"a307c6dc-ee13-4c8a-b394-ee883333f044","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"072ad6d9-4064-42bd-877b-ac17cfa4b77c","type":"LinearAxis"},{"id":"45f99ad8-c14a-4016-94ac-4af531f1ac3a","type":"Grid"},{"id":"a307c6dc-ee13-4c8a-b394-ee883333f044","type":"LinearAxis"},{"id":"2f91755f-4fdf-47fc-8b3b-d42a12eb597c","type":"Grid"},{"id":"fe1bbc61-6acb-43b9-a68b-ac96992ce094","type":"BoxAnnotation"},{"id":"515914a8-5d25-4080-8eed-b94bafaaeecf","type":"GlyphRenderer"}],"title":{"id":"e04aecf1-403d-48c2-964a-7e5a41730685","type":"Title"},"tool_events":{"id":"353ba3ec-5be2-4882-b9f3-73177d385cb2","type":"ToolEvents"},"toolbar":{"id":"50d714e6-c298-4798-b173-94dc7a1f4c78","type":"Toolbar"},"x_range":{"id":"638bd8f8-e5a7-41cd-b3f1-4582cfecb996","type":"DataRange1d"},"x_scale":{"id":"fd8391a9-30da-4669-ad01-10480dcfec40","type":"LinearScale"},"y_range":{"id":"045c0121-1919-4e71-9bdf-6c8938fafb7b","type":"DataRange1d"},"y_scale":{"id":"854b2d2e-a175-4c36-b6cf-77eba8c4818c","type":"LinearScale"}},"id":"3f7787e6-7fa2-4f4c-8319-ea0065c037e4","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"a7340dd3-180c-4262-a402-05ca2299d78c","type":"ColumnDataSource"},"glyph":{"id":"20ba7db5-faf8-45a3-b6e5-a738fb99c7c7","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"70435ce8-7dec-4825-b926-1888620c7ea5","type":"Line"},"selection_glyph":null},"id":"515914a8-5d25-4080-8eed-b94bafaaeecf","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"94b6dcc0-4362-4152-8538-def479d07f19","subtype":"Figure","type":"Plot"}},"id":"13246f26-e704-4f40-9d93-6e2d9a9a98cc","type":"WheelZoomTool"},{"attributes":{"child":{"id":"94b6dcc0-4362-4152-8538-def479d07f19","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"8735d111-d4ce-4e43-b690-3c86abb1bb90","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"a7340dd3-180c-4262-a402-05ca2299d78c","type":"ColumnDataSource"},{"attributes":{},"id":"ac90028a-39e4-4ba1-94fa-c5fb47163932","type":"BasicTickFormatter"}],"root_ids":["7f23df17-446c-41dd-83eb-f1f6d75acbdc"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"4d5352e4-7a5f-410e-a11f-1674089b205f","elementid":"2995d29d-4e2d-4b1f-82f6-60f4747febce","modelid":"7f23df17-446c-41dd-83eb-f1f6d75acbdc"}];
                
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
