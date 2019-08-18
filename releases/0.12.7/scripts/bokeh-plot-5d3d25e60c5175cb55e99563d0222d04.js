(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("7f383acd-e241-47ab-b37b-89e68a284cba");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7f383acd-e241-47ab-b37b-89e68a284cba' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"7afe051f-4541-4a6e-ad69-bc64e3e592b2":{"roots":{"references":[{"attributes":{"source":{"id":"6dd349e5-5601-4e2d-b33b-36d0a7d9e60e","type":"ColumnDataSource"}},"id":"2f26c65e-0f59-49fb-8d1f-8366159c7b3a","type":"CDSView"},{"attributes":{},"id":"6cb5039e-6afb-4f62-8fd1-c26905140dd3","type":"PanTool"},{"attributes":{"below":[{"id":"bf3dcd63-1c8d-4a12-b491-f97665f8337c","type":"LinearAxis"}],"left":[{"id":"09c6bc9d-cbb0-46ec-8628-626a0d0ac5e9","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"bf3dcd63-1c8d-4a12-b491-f97665f8337c","type":"LinearAxis"},{"id":"e73a813c-1356-44ac-aaf8-6808d3d1e5c9","type":"Grid"},{"id":"09c6bc9d-cbb0-46ec-8628-626a0d0ac5e9","type":"LinearAxis"},{"id":"b317b1ec-2763-43f5-939c-86e40ed58f90","type":"Grid"},{"id":"24841d9c-b1fb-4c20-b610-3750bd21bb39","type":"BoxAnnotation"},{"id":"3d4f195e-09a1-4402-81c3-1c0ab841e423","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"383816c9-4323-46b3-9112-6f84064426ef","type":"Toolbar"},"toolbar_location":"below","toolbar_sticky":false,"x_range":{"id":"090f5bc8-0524-4630-8022-c1e1a9b1de29","type":"DataRange1d"},"x_scale":{"id":"ef6a8eb7-fc3e-49a1-8972-b65287d329a9","type":"LinearScale"},"y_range":{"id":"df6f179a-edef-4ee1-88a0-5390619adefe","type":"DataRange1d"},"y_scale":{"id":"39480652-4975-4455-89e3-ba5ef4b27804","type":"LinearScale"}},"id":"c4d59932-3849-4dfa-bb3f-0f19af354e0a","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6cb5039e-6afb-4f62-8fd1-c26905140dd3","type":"PanTool"},{"id":"40e073a3-ebec-46a0-accf-b82920a1b25c","type":"WheelZoomTool"},{"id":"aa7c1124-a96c-419e-b1ba-2dd4f71fb595","type":"BoxZoomTool"},{"id":"10433c3d-eacf-4158-be2c-8c0737d8b8e8","type":"SaveTool"},{"id":"87dd7ddc-f1f2-4e1b-9548-1807b5f0b218","type":"ResetTool"},{"id":"84ac8065-919e-43b0-b9a3-ea81310d545d","type":"HelpTool"}]},"id":"383816c9-4323-46b3-9112-6f84064426ef","type":"Toolbar"},{"attributes":{},"id":"87dd7ddc-f1f2-4e1b-9548-1807b5f0b218","type":"ResetTool"},{"attributes":{"overlay":{"id":"24841d9c-b1fb-4c20-b610-3750bd21bb39","type":"BoxAnnotation"}},"id":"aa7c1124-a96c-419e-b1ba-2dd4f71fb595","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"090f5bc8-0524-4630-8022-c1e1a9b1de29","type":"DataRange1d"},{"attributes":{},"id":"10433c3d-eacf-4158-be2c-8c0737d8b8e8","type":"SaveTool"},{"attributes":{},"id":"eb20bada-2907-4c82-b54b-066eadd6c1a9","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"6dd349e5-5601-4e2d-b33b-36d0a7d9e60e","type":"ColumnDataSource"},"glyph":{"id":"469f4bc7-0b14-4215-af25-9e9ec8e484af","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ff6efcd7-d794-4785-b36e-6c9676d3512f","type":"Circle"},"selection_glyph":null,"view":{"id":"2f26c65e-0f59-49fb-8d1f-8366159c7b3a","type":"CDSView"}},"id":"3d4f195e-09a1-4402-81c3-1c0ab841e423","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"df6f179a-edef-4ee1-88a0-5390619adefe","type":"DataRange1d"},{"attributes":{},"id":"ef6a8eb7-fc3e-49a1-8972-b65287d329a9","type":"LinearScale"},{"attributes":{},"id":"39480652-4975-4455-89e3-ba5ef4b27804","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff6efcd7-d794-4785-b36e-6c9676d3512f","type":"Circle"},{"attributes":{},"id":"84ac8065-919e-43b0-b9a3-ea81310d545d","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"469f4bc7-0b14-4215-af25-9e9ec8e484af","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"6dd349e5-5601-4e2d-b33b-36d0a7d9e60e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c4d59932-3849-4dfa-bb3f-0f19af354e0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a3920b6-33d6-4426-b5d2-bcd4217767ae","type":"BasicTicker"}},"id":"e73a813c-1356-44ac-aaf8-6808d3d1e5c9","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"24841d9c-b1fb-4c20-b610-3750bd21bb39","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"ca2cb70a-583c-44eb-b08c-784e3f73c25f","type":"BasicTickFormatter"},"plot":{"id":"c4d59932-3849-4dfa-bb3f-0f19af354e0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"7a3920b6-33d6-4426-b5d2-bcd4217767ae","type":"BasicTicker"}},"id":"bf3dcd63-1c8d-4a12-b491-f97665f8337c","type":"LinearAxis"},{"attributes":{},"id":"7a3920b6-33d6-4426-b5d2-bcd4217767ae","type":"BasicTicker"},{"attributes":{},"id":"40e073a3-ebec-46a0-accf-b82920a1b25c","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"eb20bada-2907-4c82-b54b-066eadd6c1a9","type":"BasicTickFormatter"},"plot":{"id":"c4d59932-3849-4dfa-bb3f-0f19af354e0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a7a73f4-eb84-40b8-801d-a2d7ec2d00e9","type":"BasicTicker"}},"id":"09c6bc9d-cbb0-46ec-8628-626a0d0ac5e9","type":"LinearAxis"},{"attributes":{},"id":"ca2cb70a-583c-44eb-b08c-784e3f73c25f","type":"BasicTickFormatter"},{"attributes":{},"id":"2a7a73f4-eb84-40b8-801d-a2d7ec2d00e9","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"c4d59932-3849-4dfa-bb3f-0f19af354e0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a7a73f4-eb84-40b8-801d-a2d7ec2d00e9","type":"BasicTicker"}},"id":"b317b1ec-2763-43f5-939c-86e40ed58f90","type":"Grid"}],"root_ids":["c4d59932-3849-4dfa-bb3f-0f19af354e0a"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"7afe051f-4541-4a6e-ad69-bc64e3e592b2","elementid":"7f383acd-e241-47ab-b37b-89e68a284cba","modelid":"c4d59932-3849-4dfa-bb3f-0f19af354e0a"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
