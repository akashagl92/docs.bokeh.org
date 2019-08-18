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
      };var element = document.getElementById("29362209-3484-4fd0-999e-89dfa7b36f67");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '29362209-3484-4fd0-999e-89dfa7b36f67' but no matching script tag was found. ")
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
                var docs_json = {"90ce41ff-6821-492f-bfb1-e0e76e5a4354":{"roots":{"references":[{"attributes":{},"id":"a84598ec-45a9-418a-8d64-8ba69514312c","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"52808239-2763-4704-9b48-dfde9523fbca","type":"LinearAxis"}],"left":[{"id":"98272ae2-a8f5-4ac9-8927-b3fd40a114dc","type":"LinearAxis"}],"plot_height":200,"renderers":[{"id":"52808239-2763-4704-9b48-dfde9523fbca","type":"LinearAxis"},{"id":"ce634dac-0305-4246-9124-ffb3d2ab9f87","type":"Grid"},{"id":"98272ae2-a8f5-4ac9-8927-b3fd40a114dc","type":"LinearAxis"},{"id":"5f1461e5-0bee-498b-a13d-494143cb4fda","type":"Grid"},{"id":"8e6ff44f-854e-4eac-acc6-6cb4560fd572","type":"GlyphRenderer"},{"id":"90289abe-8b62-45f9-a3cf-17a0d0c091d6","type":"GlyphRenderer"},{"id":"abecb685-5a2d-4a0e-8f98-f0987dd2ff9a","type":"BoxAnnotation"}],"title":{"id":"ef3a456f-6102-4d6d-bfc1-46287c16de4f","type":"Title"},"tool_events":{"id":"4332574a-ae56-45cd-b0ec-7795bf4259dc","type":"ToolEvents"},"toolbar":{"id":"2cf6cd96-eb30-4c0d-af25-52f7fc01f488","type":"Toolbar"},"x_range":{"id":"070d4c5c-212c-4dcd-bc39-0c8c89558634","type":"DataRange1d"},"y_range":{"id":"448d2662-6fe7-42fb-b71d-ea166e308f45","type":"DataRange1d"}},"id":"1d634cea-db30-4ea9-888e-23a0078bf82e","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dcb9fb3c-db32-4676-a836-c7c35b4c7318","type":"Line"},{"attributes":{},"id":"e8cae2c1-f5eb-497f-9a73-0d42f3d97f35","type":"BasicTicker"},{"attributes":{},"id":"d3e7cb34-a508-4a20-bd06-fd2c32cb13f6","type":"BasicTicker"},{"attributes":{},"id":"4332574a-ae56-45cd-b0ec-7795bf4259dc","type":"ToolEvents"},{"attributes":{"button_type":"success","callback":{"id":"88612f4c-6727-4a34-a2a2-231a384acc46","type":"CustomJS"},"icon":null,"label":"Pink Line"},"id":"1f478ea7-4884-4008-a777-31e37e37ac51","type":"Toggle"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8bc9536c-5a07-4c09-8f46-8b7ecb961d2c","type":"Line"},{"attributes":{"children":[{"id":"52d0d67a-3f78-4e5d-91e3-dfc91e9935eb","type":"Toggle"}]},"id":"3fcdfc5f-8545-4e74-a9ba-d4242801307c","type":"WidgetBox"},{"attributes":{"plot":null,"text":""},"id":"ef3a456f-6102-4d6d-bfc1-46287c16de4f","type":"Title"},{"attributes":{"line_color":{"value":"pink"},"x":{"field":"x"},"y":{"field":"y"}},"id":"168061bf-d446-487a-96b1-b3a585204003","type":"Line"},{"attributes":{},"id":"4697f183-d595-4201-b30c-06a19961f06d","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"a4c83f74-b9e2-4393-a697-20172bae6ad0","type":"Row"},{"id":"31f53287-36b9-4c53-9ed4-f0fdbe171181","type":"Row"}]},"id":"a1ba2432-8156-44d2-8af5-519eab6d6a89","type":"Column"},{"attributes":{"children":[{"id":"1f478ea7-4884-4008-a777-31e37e37ac51","type":"Toggle"}]},"id":"9357c5c9-88e0-4bb7-9ff4-edcb7c979455","type":"WidgetBox"},{"attributes":{"formatter":{"id":"a84598ec-45a9-418a-8d64-8ba69514312c","type":"BasicTickFormatter"},"plot":{"id":"1d634cea-db30-4ea9-888e-23a0078bf82e","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8cae2c1-f5eb-497f-9a73-0d42f3d97f35","type":"BasicTicker"}},"id":"52808239-2763-4704-9b48-dfde9523fbca","type":"LinearAxis"},{"attributes":{"button_type":"success","callback":{"id":"b926feb1-d088-4d7e-bc8e-4c7239d08bc2","type":"CustomJS"},"icon":null,"label":"Green Box"},"id":"52d0d67a-3f78-4e5d-91e3-dfc91e9935eb","type":"Toggle"},{"attributes":{"data_source":{"id":"dbbf4a42-2d85-4b85-8d49-44b134895eba","type":"ColumnDataSource"},"glyph":{"id":"dcb9fb3c-db32-4676-a836-c7c35b4c7318","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"86350d42-70ce-47f2-bb4b-5fbec48a4c66","type":"Line"},"selection_glyph":null},"id":"8e6ff44f-854e-4eac-acc6-6cb4560fd572","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"1d634cea-db30-4ea9-888e-23a0078bf82e","subtype":"Figure","type":"Plot"},"ticker":{"id":"d3e7cb34-a508-4a20-bd06-fd2c32cb13f6","type":"BasicTicker"}},"id":"5f1461e5-0bee-498b-a13d-494143cb4fda","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"86350d42-70ce-47f2-bb4b-5fbec48a4c66","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"green"},"left":1.5,"plot":{"id":"1d634cea-db30-4ea9-888e-23a0078bf82e","subtype":"Figure","type":"Plot"},"right":2.5},"id":"abecb685-5a2d-4a0e-8f98-f0987dd2ff9a","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"448d2662-6fe7-42fb-b71d-ea166e308f45","type":"DataRange1d"},{"attributes":{"args":{"object":{"id":"abecb685-5a2d-4a0e-8f98-f0987dd2ff9a","type":"BoxAnnotation"},"toggle":{"id":"52d0d67a-3f78-4e5d-91e3-dfc91e9935eb","type":"Toggle"}},"code":"\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nobject.visible = toggle.active;\n"},"id":"b926feb1-d088-4d7e-bc8e-4c7239d08bc2","type":"CustomJS"},{"attributes":{"children":[{"id":"1d634cea-db30-4ea9-888e-23a0078bf82e","subtype":"Figure","type":"Plot"}]},"id":"a4c83f74-b9e2-4393-a697-20172bae6ad0","type":"Row"},{"attributes":{"plot":{"id":"1d634cea-db30-4ea9-888e-23a0078bf82e","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8cae2c1-f5eb-497f-9a73-0d42f3d97f35","type":"BasicTicker"}},"id":"ce634dac-0305-4246-9124-ffb3d2ab9f87","type":"Grid"},{"attributes":{"data_source":{"id":"c710d4c8-fc6b-4f16-a940-9ad9e4fe3533","type":"ColumnDataSource"},"glyph":{"id":"168061bf-d446-487a-96b1-b3a585204003","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8bc9536c-5a07-4c09-8f46-8b7ecb961d2c","type":"Line"},"selection_glyph":null},"id":"90289abe-8b62-45f9-a3cf-17a0d0c091d6","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"2cf6cd96-eb30-4c0d-af25-52f7fc01f488","type":"Toolbar"},{"attributes":{"args":{"object":{"id":"90289abe-8b62-45f9-a3cf-17a0d0c091d6","type":"GlyphRenderer"},"toggle":{"id":"1f478ea7-4884-4008-a777-31e37e37ac51","type":"Toggle"}},"code":"\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nobject.visible = toggle.active;\n"},"id":"88612f4c-6727-4a34-a2a2-231a384acc46","type":"CustomJS"},{"attributes":{"children":[{"id":"3fcdfc5f-8545-4e74-a9ba-d4242801307c","type":"WidgetBox"},{"id":"9357c5c9-88e0-4bb7-9ff4-edcb7c979455","type":"WidgetBox"}]},"id":"31f53287-36b9-4c53-9ed4-f0fdbe171181","type":"Row"},{"attributes":{"callback":null},"id":"070d4c5c-212c-4dcd-bc39-0c8c89558634","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,1]}},"id":"dbbf4a42-2d85-4b85-8d49-44b134895eba","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"4697f183-d595-4201-b30c-06a19961f06d","type":"BasicTickFormatter"},"plot":{"id":"1d634cea-db30-4ea9-888e-23a0078bf82e","subtype":"Figure","type":"Plot"},"ticker":{"id":"d3e7cb34-a508-4a20-bd06-fd2c32cb13f6","type":"BasicTicker"}},"id":"98272ae2-a8f5-4ac9-8927-b3fd40a114dc","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[2,1,2]}},"id":"c710d4c8-fc6b-4f16-a940-9ad9e4fe3533","type":"ColumnDataSource"}],"root_ids":["a1ba2432-8156-44d2-8af5-519eab6d6a89"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"90ce41ff-6821-492f-bfb1-e0e76e5a4354","elementid":"29362209-3484-4fd0-999e-89dfa7b36f67","modelid":"a1ba2432-8156-44d2-8af5-519eab6d6a89"}];
                
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
