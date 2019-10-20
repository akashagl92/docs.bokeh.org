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
      };var element = document.getElementById("6547c2f4-3635-406e-ba55-3314f4d74ffc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6547c2f4-3635-406e-ba55-3314f4d74ffc' but no matching script tag was found. ")
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
                var docs_json = {"d460eca1-8015-4334-8c5d-75e54644aa4d":{"roots":{"references":[{"attributes":{},"id":"5047aa49-9644-4dc3-98ed-107b6ae6b038","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e9eb261f-586d-4950-bc62-85156de62efd","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"f32d430b-c472-49c5-93c9-949497f16a86","type":"Circle"},{"attributes":{"plot":{"id":"eff19729-ab2c-4a93-b862-dd58921efc15","subtype":"Figure","type":"Plot"}},"id":"06bbce3f-1028-4a6e-b362-42d4cb1e4b32","type":"PanTool"},{"attributes":{"plot":{"id":"eff19729-ab2c-4a93-b862-dd58921efc15","subtype":"Figure","type":"Plot"}},"id":"d59065ce-2c51-475f-af14-44cfafb29108","type":"SaveTool"},{"attributes":{},"id":"48d03578-3ebe-43d7-8bf3-62fe2d9c5d5a","type":"BasicTickFormatter"},{"attributes":{"child":{"id":"0a77b28c-fb44-4dd7-bc4f-bfb341f0c371","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"068dcfc4-8f0f-43d1-8f81-793825db6424","type":"Panel"},{"attributes":{"plot":{"id":"eff19729-ab2c-4a93-b862-dd58921efc15","subtype":"Figure","type":"Plot"}},"id":"4c9d9981-833f-444e-8187-e5c95557e385","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"9b91a278-64f1-421b-9087-dbf0ebdd7f5e","type":"Title"},{"attributes":{"formatter":{"id":"30cbd734-6550-4d95-82a5-549fa1eab256","type":"BasicTickFormatter"},"plot":{"id":"0a77b28c-fb44-4dd7-bc4f-bfb341f0c371","subtype":"Figure","type":"Plot"},"ticker":{"id":"47e762eb-d5a1-4c7e-a68a-cc9ae6b9f820","type":"BasicTicker"}},"id":"5d52b41e-6cd9-4635-a672-a8de0999cb60","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"b0a7269e-6e10-4481-8baa-c81af5ec255a","type":"Title"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"3a856522-22d4-4ec2-b878-44f0ce79d9a0","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"37a66da6-088e-4ccb-bab4-47f8e0854256","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"98df6b0a-ae12-44c6-8fea-7cffbfbae77b","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"eff19729-ab2c-4a93-b862-dd58921efc15","subtype":"Figure","type":"Plot"},"ticker":{"id":"359b2b9a-c9ca-4073-b45a-7317d391c2a8","type":"BasicTicker"}},"id":"e5ae2434-93f7-40b4-a372-8654fd98a672","type":"Grid"},{"attributes":{"plot":{"id":"0a77b28c-fb44-4dd7-bc4f-bfb341f0c371","subtype":"Figure","type":"Plot"}},"id":"38676455-166e-4000-bb4d-aac5a6b2dd06","type":"PanTool"},{"attributes":{"formatter":{"id":"48d03578-3ebe-43d7-8bf3-62fe2d9c5d5a","type":"BasicTickFormatter"},"plot":{"id":"eff19729-ab2c-4a93-b862-dd58921efc15","subtype":"Figure","type":"Plot"},"ticker":{"id":"359b2b9a-c9ca-4073-b45a-7317d391c2a8","type":"BasicTicker"}},"id":"09bf3fda-1884-4498-bc88-713c6772d2d4","type":"LinearAxis"},{"attributes":{"plot":{"id":"0a77b28c-fb44-4dd7-bc4f-bfb341f0c371","subtype":"Figure","type":"Plot"}},"id":"4454c5ac-4950-48bd-b979-43f9b121d182","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"97b9c3a6-433f-489a-8c5b-a2fb96cfa40f","type":"Line"},{"attributes":{},"id":"d99ce7d5-3bb6-46e6-a33c-8eb07c34cdae","type":"ToolEvents"},{"attributes":{"formatter":{"id":"bf64755d-8cc5-4bb1-96c5-ede495a9c848","type":"BasicTickFormatter"},"plot":{"id":"0a77b28c-fb44-4dd7-bc4f-bfb341f0c371","subtype":"Figure","type":"Plot"},"ticker":{"id":"c96075c7-ed85-4892-9934-4d8336c31221","type":"BasicTicker"}},"id":"db27773a-d3ec-41ae-bba1-c68f0999647d","type":"LinearAxis"},{"attributes":{"callback":null},"id":"2047f530-5139-40db-85e8-2fa468591f61","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"06bbce3f-1028-4a6e-b362-42d4cb1e4b32","type":"PanTool"},{"id":"3bb96a9a-7010-4e66-b39e-7ba93cd0aa9d","type":"WheelZoomTool"},{"id":"5dcffa72-ecb0-4028-b149-97a36e83ff7a","type":"BoxZoomTool"},{"id":"d59065ce-2c51-475f-af14-44cfafb29108","type":"SaveTool"},{"id":"4c9d9981-833f-444e-8187-e5c95557e385","type":"ResetTool"},{"id":"722bf766-0bb3-42ee-b40d-c43940db8aca","type":"HelpTool"}]},"id":"eb8e90c7-921d-4dee-9c4d-25642c557412","type":"Toolbar"},{"attributes":{"plot":{"id":"0a77b28c-fb44-4dd7-bc4f-bfb341f0c371","subtype":"Figure","type":"Plot"},"ticker":{"id":"47e762eb-d5a1-4c7e-a68a-cc9ae6b9f820","type":"BasicTicker"}},"id":"70927657-8730-4878-91ef-0188849464cb","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"0a77b28c-fb44-4dd7-bc4f-bfb341f0c371","subtype":"Figure","type":"Plot"},"ticker":{"id":"c96075c7-ed85-4892-9934-4d8336c31221","type":"BasicTicker"}},"id":"c79fafc2-a469-444a-815c-46a9d202778d","type":"Grid"},{"attributes":{"data_source":{"id":"35a4bf22-73bb-4691-b2e9-1dfd21ce2b52","type":"ColumnDataSource"},"glyph":{"id":"abf74b88-8349-4fb5-8c14-3b2ea39c78ee","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f32d430b-c472-49c5-93c9-949497f16a86","type":"Circle"},"selection_glyph":null},"id":"d16e961d-3793-4a63-af9a-de5a9b2935dc","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1fe6f4b8-dd00-495d-a0db-6d1f801ec18b","type":"BasicTickFormatter"},"plot":{"id":"eff19729-ab2c-4a93-b862-dd58921efc15","subtype":"Figure","type":"Plot"},"ticker":{"id":"e576d7ed-4a25-4480-8f0f-045c3c3958d0","type":"BasicTicker"}},"id":"73d03864-fc8a-4fc8-a399-b4b6e0dc0167","type":"LinearAxis"},{"attributes":{"plot":{"id":"0a77b28c-fb44-4dd7-bc4f-bfb341f0c371","subtype":"Figure","type":"Plot"}},"id":"67c56966-a834-48d8-b770-06209ec4b2b9","type":"SaveTool"},{"attributes":{"plot":{"id":"eff19729-ab2c-4a93-b862-dd58921efc15","subtype":"Figure","type":"Plot"}},"id":"3bb96a9a-7010-4e66-b39e-7ba93cd0aa9d","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"eff19729-ab2c-4a93-b862-dd58921efc15","subtype":"Figure","type":"Plot"}},"id":"722bf766-0bb3-42ee-b40d-c43940db8aca","type":"HelpTool"},{"attributes":{"below":[{"id":"73d03864-fc8a-4fc8-a399-b4b6e0dc0167","type":"LinearAxis"}],"left":[{"id":"09bf3fda-1884-4498-bc88-713c6772d2d4","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"73d03864-fc8a-4fc8-a399-b4b6e0dc0167","type":"LinearAxis"},{"id":"1458e052-2df4-4593-b486-321b520b53f0","type":"Grid"},{"id":"09bf3fda-1884-4498-bc88-713c6772d2d4","type":"LinearAxis"},{"id":"e5ae2434-93f7-40b4-a372-8654fd98a672","type":"Grid"},{"id":"e9eb261f-586d-4950-bc62-85156de62efd","type":"BoxAnnotation"},{"id":"cfc3a0a2-309b-41aa-8654-ae034d931bdf","type":"GlyphRenderer"}],"title":{"id":"b0a7269e-6e10-4481-8baa-c81af5ec255a","type":"Title"},"tool_events":{"id":"d99ce7d5-3bb6-46e6-a33c-8eb07c34cdae","type":"ToolEvents"},"toolbar":{"id":"eb8e90c7-921d-4dee-9c4d-25642c557412","type":"Toolbar"},"x_range":{"id":"e8c085b1-19b2-4e4a-874c-aefc6ed36404","type":"DataRange1d"},"y_range":{"id":"98df6b0a-ae12-44c6-8fea-7cffbfbae77b","type":"DataRange1d"}},"id":"eff19729-ab2c-4a93-b862-dd58921efc15","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"5c7576aa-947e-4756-bfe1-dd8b1cc2cd4b","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"abf74b88-8349-4fb5-8c14-3b2ea39c78ee","type":"Circle"},{"attributes":{"callback":null},"id":"e8c085b1-19b2-4e4a-874c-aefc6ed36404","type":"DataRange1d"},{"attributes":{"overlay":{"id":"37a66da6-088e-4ccb-bab4-47f8e0854256","type":"BoxAnnotation"},"plot":{"id":"0a77b28c-fb44-4dd7-bc4f-bfb341f0c371","subtype":"Figure","type":"Plot"}},"id":"226c1b47-f37d-4d41-96e3-6b5e1abe70a5","type":"BoxZoomTool"},{"attributes":{},"id":"c96075c7-ed85-4892-9934-4d8336c31221","type":"BasicTicker"},{"attributes":{"callback":null},"id":"ff645854-240d-4e3a-90e8-762b4e314ed3","type":"DataRange1d"},{"attributes":{"below":[{"id":"5d52b41e-6cd9-4635-a672-a8de0999cb60","type":"LinearAxis"}],"left":[{"id":"db27773a-d3ec-41ae-bba1-c68f0999647d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"5d52b41e-6cd9-4635-a672-a8de0999cb60","type":"LinearAxis"},{"id":"70927657-8730-4878-91ef-0188849464cb","type":"Grid"},{"id":"db27773a-d3ec-41ae-bba1-c68f0999647d","type":"LinearAxis"},{"id":"c79fafc2-a469-444a-815c-46a9d202778d","type":"Grid"},{"id":"37a66da6-088e-4ccb-bab4-47f8e0854256","type":"BoxAnnotation"},{"id":"d16e961d-3793-4a63-af9a-de5a9b2935dc","type":"GlyphRenderer"}],"title":{"id":"9b91a278-64f1-421b-9087-dbf0ebdd7f5e","type":"Title"},"tool_events":{"id":"5047aa49-9644-4dc3-98ed-107b6ae6b038","type":"ToolEvents"},"toolbar":{"id":"98df97ad-cb76-4435-92c5-251b6e9b6ede","type":"Toolbar"},"x_range":{"id":"2047f530-5139-40db-85e8-2fa468591f61","type":"DataRange1d"},"y_range":{"id":"ff645854-240d-4e3a-90e8-762b4e314ed3","type":"DataRange1d"}},"id":"0a77b28c-fb44-4dd7-bc4f-bfb341f0c371","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e576d7ed-4a25-4480-8f0f-045c3c3958d0","type":"BasicTicker"},{"attributes":{"data_source":{"id":"5c7576aa-947e-4756-bfe1-dd8b1cc2cd4b","type":"ColumnDataSource"},"glyph":{"id":"97b9c3a6-433f-489a-8c5b-a2fb96cfa40f","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3a856522-22d4-4ec2-b878-44f0ce79d9a0","type":"Line"},"selection_glyph":null},"id":"cfc3a0a2-309b-41aa-8654-ae034d931bdf","type":"GlyphRenderer"},{"attributes":{},"id":"47e762eb-d5a1-4c7e-a68a-cc9ae6b9f820","type":"BasicTicker"},{"attributes":{"overlay":{"id":"e9eb261f-586d-4950-bc62-85156de62efd","type":"BoxAnnotation"},"plot":{"id":"eff19729-ab2c-4a93-b862-dd58921efc15","subtype":"Figure","type":"Plot"}},"id":"5dcffa72-ecb0-4028-b149-97a36e83ff7a","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"0a77b28c-fb44-4dd7-bc4f-bfb341f0c371","subtype":"Figure","type":"Plot"}},"id":"59b98c9a-b5cc-45a0-96b0-50c25aa3854b","type":"HelpTool"},{"attributes":{"plot":{"id":"eff19729-ab2c-4a93-b862-dd58921efc15","subtype":"Figure","type":"Plot"},"ticker":{"id":"e576d7ed-4a25-4480-8f0f-045c3c3958d0","type":"BasicTicker"}},"id":"1458e052-2df4-4593-b486-321b520b53f0","type":"Grid"},{"attributes":{},"id":"bf64755d-8cc5-4bb1-96c5-ede495a9c848","type":"BasicTickFormatter"},{"attributes":{"callback":null,"tabs":[{"id":"068dcfc4-8f0f-43d1-8f81-793825db6424","type":"Panel"},{"id":"2f2289d9-99dd-45ca-bff7-5a062c2a8e34","type":"Panel"}]},"id":"4b4e26bc-f977-4bf8-8f66-3ed52eb7588d","type":"Tabs"},{"attributes":{},"id":"30cbd734-6550-4d95-82a5-549fa1eab256","type":"BasicTickFormatter"},{"attributes":{},"id":"359b2b9a-c9ca-4073-b45a-7317d391c2a8","type":"BasicTicker"},{"attributes":{"child":{"id":"eff19729-ab2c-4a93-b862-dd58921efc15","subtype":"Figure","type":"Plot"},"title":"line"},"id":"2f2289d9-99dd-45ca-bff7-5a062c2a8e34","type":"Panel"},{"attributes":{"plot":{"id":"0a77b28c-fb44-4dd7-bc4f-bfb341f0c371","subtype":"Figure","type":"Plot"}},"id":"fd8dd433-27b7-4fa1-ad14-51c53d836daf","type":"WheelZoomTool"},{"attributes":{},"id":"1fe6f4b8-dd00-495d-a0db-6d1f801ec18b","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"35a4bf22-73bb-4691-b2e9-1dfd21ce2b52","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"38676455-166e-4000-bb4d-aac5a6b2dd06","type":"PanTool"},{"id":"fd8dd433-27b7-4fa1-ad14-51c53d836daf","type":"WheelZoomTool"},{"id":"226c1b47-f37d-4d41-96e3-6b5e1abe70a5","type":"BoxZoomTool"},{"id":"67c56966-a834-48d8-b770-06209ec4b2b9","type":"SaveTool"},{"id":"4454c5ac-4950-48bd-b979-43f9b121d182","type":"ResetTool"},{"id":"59b98c9a-b5cc-45a0-96b0-50c25aa3854b","type":"HelpTool"}]},"id":"98df97ad-cb76-4435-92c5-251b6e9b6ede","type":"Toolbar"}],"root_ids":["4b4e26bc-f977-4bf8-8f66-3ed52eb7588d"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"d460eca1-8015-4334-8c5d-75e54644aa4d","elementid":"6547c2f4-3635-406e-ba55-3314f4d74ffc","modelid":"4b4e26bc-f977-4bf8-8f66-3ed52eb7588d"}];
                
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
