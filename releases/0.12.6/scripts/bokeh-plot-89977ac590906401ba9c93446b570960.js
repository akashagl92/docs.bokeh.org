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
      };var element = document.getElementById("36f39d19-d1e6-4588-9c84-669b16ea1019");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '36f39d19-d1e6-4588-9c84-669b16ea1019' but no matching script tag was found. ")
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
                var docs_json = {"7046dd4b-15b4-42d2-8921-73d915530320":{"roots":{"references":[{"attributes":{},"id":"fe068594-45d7-412a-ac82-cdec242f0adb","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"68b69e5e-5b34-4b18-bfbc-f7bf5fef247a","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"6412cf00-c4b0-4d83-8fa4-3f28e16d84e9","subtype":"Figure","type":"Plot"}},"id":"b131659c-e8c5-45f4-88ec-a916f1ddbe4c","type":"WheelZoomTool"},{"attributes":{"axis_label":"Temp","axis_line_color":{"value":"red"},"axis_line_width":{"value":3},"formatter":{"id":"3eb8821a-fe92-4f74-8d80-8864118bdda1","type":"BasicTickFormatter"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"6412cf00-c4b0-4d83-8fa4-3f28e16d84e9","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe068594-45d7-412a-ac82-cdec242f0adb","type":"BasicTicker"}},"id":"afb3a90a-4495-458a-a1d5-71f9012f9587","type":"LinearAxis"},{"attributes":{"axis_label":"Pressure","formatter":{"id":"f608977b-eb26-4449-9aaa-bb2672685d0a","type":"BasicTickFormatter"},"major_label_orientation":"vertical","major_label_text_color":{"value":"orange"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"6412cf00-c4b0-4d83-8fa4-3f28e16d84e9","subtype":"Figure","type":"Plot"},"ticker":{"id":"0f06f435-6948-4bf9-ab63-ec7e3fdc3663","type":"BasicTicker"}},"id":"4f441b0c-24f6-48b9-b5d8-aa000aca4e00","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5a03acd3-d79e-4966-9d5a-5976440c8a48","type":"Circle"},{"attributes":{"callback":null},"id":"657262fa-d94f-4602-8780-92ea700340b3","type":"DataRange1d"},{"attributes":{"plot":{"id":"6412cf00-c4b0-4d83-8fa4-3f28e16d84e9","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe068594-45d7-412a-ac82-cdec242f0adb","type":"BasicTicker"}},"id":"5fbcaebf-927b-4fff-969a-33e439987736","type":"Grid"},{"attributes":{},"id":"0f06f435-6948-4bf9-ab63-ec7e3fdc3663","type":"BasicTicker"},{"attributes":{"plot":{"id":"6412cf00-c4b0-4d83-8fa4-3f28e16d84e9","subtype":"Figure","type":"Plot"}},"id":"174e8e23-a4d1-4de0-9728-509e835cd3de","type":"HelpTool"},{"attributes":{"overlay":{"id":"68b69e5e-5b34-4b18-bfbc-f7bf5fef247a","type":"BoxAnnotation"},"plot":{"id":"6412cf00-c4b0-4d83-8fa4-3f28e16d84e9","subtype":"Figure","type":"Plot"}},"id":"149848b1-1bee-4b4f-b5f5-d3513419abfa","type":"BoxZoomTool"},{"attributes":{},"id":"3eb8821a-fe92-4f74-8d80-8864118bdda1","type":"BasicTickFormatter"},{"attributes":{},"id":"6107cf63-ef5f-4d10-ba47-0f37c652e3be","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"db6fbc2b-2887-4a14-9b28-81935323c725","type":"PanTool"},{"id":"b131659c-e8c5-45f4-88ec-a916f1ddbe4c","type":"WheelZoomTool"},{"id":"149848b1-1bee-4b4f-b5f5-d3513419abfa","type":"BoxZoomTool"},{"id":"bb109002-629f-47e6-83c4-0abd089c2bb8","type":"SaveTool"},{"id":"ce1ca8d6-503c-4fb8-b433-eab912c76db7","type":"ResetTool"},{"id":"174e8e23-a4d1-4de0-9728-509e835cd3de","type":"HelpTool"}]},"id":"3c1f2517-5252-4111-ba8c-a5c4922d71af","type":"Toolbar"},{"attributes":{},"id":"0a78f07a-5126-4ab8-a0ef-89fc3fbebc4f","type":"LinearScale"},{"attributes":{"plot":{"id":"6412cf00-c4b0-4d83-8fa4-3f28e16d84e9","subtype":"Figure","type":"Plot"}},"id":"db6fbc2b-2887-4a14-9b28-81935323c725","type":"PanTool"},{"attributes":{"below":[{"id":"afb3a90a-4495-458a-a1d5-71f9012f9587","type":"LinearAxis"}],"left":[{"id":"4f441b0c-24f6-48b9-b5d8-aa000aca4e00","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"afb3a90a-4495-458a-a1d5-71f9012f9587","type":"LinearAxis"},{"id":"5fbcaebf-927b-4fff-969a-33e439987736","type":"Grid"},{"id":"4f441b0c-24f6-48b9-b5d8-aa000aca4e00","type":"LinearAxis"},{"id":"586496e3-3814-4eb0-ab9b-a275a0722672","type":"Grid"},{"id":"68b69e5e-5b34-4b18-bfbc-f7bf5fef247a","type":"BoxAnnotation"},{"id":"7a45d236-4800-492c-a421-aa3894783eca","type":"GlyphRenderer"}],"title":{"id":"1aa74de0-e9a9-4d79-b23a-7dba1938ac5b","type":"Title"},"tool_events":{"id":"1d9cbf7a-daad-4050-99b6-09024062845d","type":"ToolEvents"},"toolbar":{"id":"3c1f2517-5252-4111-ba8c-a5c4922d71af","type":"Toolbar"},"x_range":{"id":"94948286-6d13-4bd5-8455-7a53d147103b","type":"DataRange1d"},"x_scale":{"id":"6107cf63-ef5f-4d10-ba47-0f37c652e3be","type":"LinearScale"},"y_range":{"id":"657262fa-d94f-4602-8780-92ea700340b3","type":"DataRange1d"},"y_scale":{"id":"0a78f07a-5126-4ab8-a0ef-89fc3fbebc4f","type":"LinearScale"}},"id":"6412cf00-c4b0-4d83-8fa4-3f28e16d84e9","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"1aa74de0-e9a9-4d79-b23a-7dba1938ac5b","type":"Title"},{"attributes":{"callback":null},"id":"94948286-6d13-4bd5-8455-7a53d147103b","type":"DataRange1d"},{"attributes":{"data_source":{"id":"9497e511-86b0-4a5c-aed0-fe544a5e818b","type":"ColumnDataSource"},"glyph":{"id":"5a03acd3-d79e-4966-9d5a-5976440c8a48","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e6934e33-99a9-437a-8f23-f0f5dc9b9e47","type":"Circle"},"selection_glyph":null},"id":"7a45d236-4800-492c-a421-aa3894783eca","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"6412cf00-c4b0-4d83-8fa4-3f28e16d84e9","subtype":"Figure","type":"Plot"}},"id":"ce1ca8d6-503c-4fb8-b433-eab912c76db7","type":"ResetTool"},{"attributes":{"plot":{"id":"6412cf00-c4b0-4d83-8fa4-3f28e16d84e9","subtype":"Figure","type":"Plot"}},"id":"bb109002-629f-47e6-83c4-0abd089c2bb8","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"9497e511-86b0-4a5c-aed0-fe544a5e818b","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"6412cf00-c4b0-4d83-8fa4-3f28e16d84e9","subtype":"Figure","type":"Plot"},"ticker":{"id":"0f06f435-6948-4bf9-ab63-ec7e3fdc3663","type":"BasicTicker"}},"id":"586496e3-3814-4eb0-ab9b-a275a0722672","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e6934e33-99a9-437a-8f23-f0f5dc9b9e47","type":"Circle"},{"attributes":{},"id":"f608977b-eb26-4449-9aaa-bb2672685d0a","type":"BasicTickFormatter"},{"attributes":{},"id":"1d9cbf7a-daad-4050-99b6-09024062845d","type":"ToolEvents"}],"root_ids":["6412cf00-c4b0-4d83-8fa4-3f28e16d84e9"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"7046dd4b-15b4-42d2-8921-73d915530320","elementid":"36f39d19-d1e6-4588-9c84-669b16ea1019","modelid":"6412cf00-c4b0-4d83-8fa4-3f28e16d84e9"}];
                
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
