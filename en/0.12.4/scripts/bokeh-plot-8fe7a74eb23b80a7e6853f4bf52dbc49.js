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
      };var element = document.getElementById("a5f7f90f-46ba-4d7c-b311-97d89a32b258");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a5f7f90f-46ba-4d7c-b311-97d89a32b258' but no matching script tag was found. ")
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
                var docs_json = {"1b82ecb0-4623-4cce-8618-394796230f44":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"739982f3-1550-4182-98eb-44bba03b4b5c","type":"Square"},{"attributes":{"plot":{"id":"7469f28b-9393-4b13-bef1-67ee897c7887","subtype":"Figure","type":"Plot"}},"id":"1224c1f6-7c9a-4dba-ad10-313ff2834a82","type":"ResetTool"},{"attributes":{"plot":{"id":"7469f28b-9393-4b13-bef1-67ee897c7887","subtype":"Figure","type":"Plot"},"ticker":{"id":"98f2d5c7-cfa8-40e9-b70f-63b29556f075","type":"BasicTicker"}},"id":"527c66ec-ac30-442f-9466-0da56881d81a","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7c38ddc5-e936-4d07-abb5-926d271c411f","type":"Square"},{"attributes":{"plot":{"id":"7469f28b-9393-4b13-bef1-67ee897c7887","subtype":"Figure","type":"Plot"}},"id":"eebd8e3f-5337-4e76-a328-27eecc88ce6a","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"7469f28b-9393-4b13-bef1-67ee897c7887","subtype":"Figure","type":"Plot"}},"id":"986ae6bc-2c9b-4ee7-8d86-366a6a533897","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"7d5de5a5-f8a3-4abd-b5a5-b2e1d36c6875","type":"Title"},{"attributes":{"below":[{"id":"eebba66a-5fad-4c35-bc61-3a961ef447b8","type":"LinearAxis"}],"left":[{"id":"e0383a7e-38ca-4a27-9d32-73d45e0ffa1c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"eebba66a-5fad-4c35-bc61-3a961ef447b8","type":"LinearAxis"},{"id":"527c66ec-ac30-442f-9466-0da56881d81a","type":"Grid"},{"id":"e0383a7e-38ca-4a27-9d32-73d45e0ffa1c","type":"LinearAxis"},{"id":"383b1e40-06e1-4438-93ae-fc55b9919ebe","type":"Grid"},{"id":"de462903-6fe0-4310-8d7b-852f4a977e26","type":"BoxAnnotation"},{"id":"4d7541a4-41a7-48a6-969e-1bc8beebe1e5","type":"GlyphRenderer"}],"title":{"id":"7d5de5a5-f8a3-4abd-b5a5-b2e1d36c6875","type":"Title"},"tool_events":{"id":"fa5f6239-afd4-4648-aaa2-36caa501a006","type":"ToolEvents"},"toolbar":{"id":"41d7feb1-0691-4476-92cb-3cae734c4111","type":"Toolbar"},"x_range":{"id":"4c2bac66-a9f0-4359-becc-a417df03d17a","type":"DataRange1d"},"y_range":{"id":"1c0eb4f0-de9a-425d-98d2-f712aa1bb919","type":"DataRange1d"}},"id":"7469f28b-9393-4b13-bef1-67ee897c7887","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"de462903-6fe0-4310-8d7b-852f4a977e26","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9a2a496b-0108-4808-b1ae-80be41397f66","type":"PanTool"},{"id":"eebd8e3f-5337-4e76-a328-27eecc88ce6a","type":"WheelZoomTool"},{"id":"7f889278-fe76-4c76-b8f8-bf9cd755672b","type":"BoxZoomTool"},{"id":"e9142787-5fcb-4dd6-9a15-06c96ad8e3f5","type":"SaveTool"},{"id":"1224c1f6-7c9a-4dba-ad10-313ff2834a82","type":"ResetTool"},{"id":"986ae6bc-2c9b-4ee7-8d86-366a6a533897","type":"HelpTool"}]},"id":"41d7feb1-0691-4476-92cb-3cae734c4111","type":"Toolbar"},{"attributes":{"callback":null},"id":"1c0eb4f0-de9a-425d-98d2-f712aa1bb919","type":"DataRange1d"},{"attributes":{"data_source":{"id":"9620d655-7388-4335-bca0-f7d9f35d309a","type":"ColumnDataSource"},"glyph":{"id":"739982f3-1550-4182-98eb-44bba03b4b5c","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"7c38ddc5-e936-4d07-abb5-926d271c411f","type":"Square"},"selection_glyph":null},"id":"4d7541a4-41a7-48a6-969e-1bc8beebe1e5","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7469f28b-9393-4b13-bef1-67ee897c7887","subtype":"Figure","type":"Plot"}},"id":"e9142787-5fcb-4dd6-9a15-06c96ad8e3f5","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"9620d655-7388-4335-bca0-f7d9f35d309a","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"de462903-6fe0-4310-8d7b-852f4a977e26","type":"BoxAnnotation"},"plot":{"id":"7469f28b-9393-4b13-bef1-67ee897c7887","subtype":"Figure","type":"Plot"}},"id":"7f889278-fe76-4c76-b8f8-bf9cd755672b","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"4c2bac66-a9f0-4359-becc-a417df03d17a","type":"DataRange1d"},{"attributes":{},"id":"fa5f6239-afd4-4648-aaa2-36caa501a006","type":"ToolEvents"},{"attributes":{},"id":"98f2d5c7-cfa8-40e9-b70f-63b29556f075","type":"BasicTicker"},{"attributes":{"formatter":{"id":"265b5451-bae1-4f5f-a278-53ae5a2a5711","type":"BasicTickFormatter"},"plot":{"id":"7469f28b-9393-4b13-bef1-67ee897c7887","subtype":"Figure","type":"Plot"},"ticker":{"id":"98f2d5c7-cfa8-40e9-b70f-63b29556f075","type":"BasicTicker"}},"id":"eebba66a-5fad-4c35-bc61-3a961ef447b8","type":"LinearAxis"},{"attributes":{},"id":"265b5451-bae1-4f5f-a278-53ae5a2a5711","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"7469f28b-9393-4b13-bef1-67ee897c7887","subtype":"Figure","type":"Plot"},"ticker":{"id":"efd02a5f-ee20-4aa7-a292-7a097237a694","type":"BasicTicker"}},"id":"383b1e40-06e1-4438-93ae-fc55b9919ebe","type":"Grid"},{"attributes":{"plot":{"id":"7469f28b-9393-4b13-bef1-67ee897c7887","subtype":"Figure","type":"Plot"}},"id":"9a2a496b-0108-4808-b1ae-80be41397f66","type":"PanTool"},{"attributes":{},"id":"efd02a5f-ee20-4aa7-a292-7a097237a694","type":"BasicTicker"},{"attributes":{"formatter":{"id":"36dfbde3-dd8b-4143-acf6-e1fbedbef472","type":"BasicTickFormatter"},"plot":{"id":"7469f28b-9393-4b13-bef1-67ee897c7887","subtype":"Figure","type":"Plot"},"ticker":{"id":"efd02a5f-ee20-4aa7-a292-7a097237a694","type":"BasicTicker"}},"id":"e0383a7e-38ca-4a27-9d32-73d45e0ffa1c","type":"LinearAxis"},{"attributes":{},"id":"36dfbde3-dd8b-4143-acf6-e1fbedbef472","type":"BasicTickFormatter"}],"root_ids":["7469f28b-9393-4b13-bef1-67ee897c7887"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"1b82ecb0-4623-4cce-8618-394796230f44","elementid":"a5f7f90f-46ba-4d7c-b311-97d89a32b258","modelid":"7469f28b-9393-4b13-bef1-67ee897c7887"}];
                
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
