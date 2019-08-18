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
      };var element = document.getElementById("104c9080-503d-42b3-ade0-4390a2255dd8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '104c9080-503d-42b3-ade0-4390a2255dd8' but no matching script tag was found. ")
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
                var docs_json = {"6f9f16c6-1c72-4019-afff-f247302c1c5b":{"roots":{"references":[{"attributes":{},"id":"db1d3265-3fc9-4678-aa02-bb31bb743dde","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cfa0de0a-ce84-4909-b3bd-71b7f282a612","type":"PanTool"},{"id":"67565e59-c204-4e15-8fee-0152ea0a47ae","type":"WheelZoomTool"},{"id":"c0b6c9e1-ebff-474d-9218-ce62b2f9a50c","type":"BoxZoomTool"},{"id":"779a59ba-1804-4529-bd97-f95259372d9b","type":"SaveTool"},{"id":"510a744d-3520-463b-86e5-b15e36ac570c","type":"ResetTool"},{"id":"fce3f46e-b36a-48e0-9b30-26bd640da0bb","type":"HelpTool"}]},"id":"31cf6d2f-9bfd-4b97-abb5-5b258f53c3d9","type":"Toolbar"},{"attributes":{"plot":{"id":"f88f39c0-8cd3-4c68-9d9d-8dee6da2af5c","subtype":"Figure","type":"Plot"}},"id":"67565e59-c204-4e15-8fee-0152ea0a47ae","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"b1471352-53cf-4cca-810f-fe650472d5fb","type":"BoxAnnotation"},"plot":{"id":"f88f39c0-8cd3-4c68-9d9d-8dee6da2af5c","subtype":"Figure","type":"Plot"}},"id":"c0b6c9e1-ebff-474d-9218-ce62b2f9a50c","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"f88f39c0-8cd3-4c68-9d9d-8dee6da2af5c","subtype":"Figure","type":"Plot"},"ticker":{"id":"db1d3265-3fc9-4678-aa02-bb31bb743dde","type":"BasicTicker"}},"id":"e5d7d02e-2424-41b1-814e-5b31faa00b4a","type":"Grid"},{"attributes":{},"id":"236955c0-9e4b-4ee9-a78d-498ff3653019","type":"BasicTicker"},{"attributes":{"callback":null},"id":"7a17a531-41eb-4d0a-b5e8-6dae451cdc9f","type":"DataRange1d"},{"attributes":{"plot":{"id":"f88f39c0-8cd3-4c68-9d9d-8dee6da2af5c","subtype":"Figure","type":"Plot"}},"id":"fce3f46e-b36a-48e0-9b30-26bd640da0bb","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"b709c510-3881-4960-9138-ecbf97fc2351","type":"Title"},{"attributes":{"below":[{"id":"fa4fdf17-71f3-42f9-a498-c7eb5c1c36b7","type":"LinearAxis"}],"left":[{"id":"c6c6482f-f564-4a97-beb4-23f8a115d59f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"fa4fdf17-71f3-42f9-a498-c7eb5c1c36b7","type":"LinearAxis"},{"id":"e5d7d02e-2424-41b1-814e-5b31faa00b4a","type":"Grid"},{"id":"c6c6482f-f564-4a97-beb4-23f8a115d59f","type":"LinearAxis"},{"id":"897f6389-e69c-43e4-8202-28fc4ef53606","type":"Grid"},{"id":"b1471352-53cf-4cca-810f-fe650472d5fb","type":"BoxAnnotation"},{"id":"970d3544-9e16-401a-bbf3-257e9bc6b12c","type":"GlyphRenderer"}],"title":{"id":"b709c510-3881-4960-9138-ecbf97fc2351","type":"Title"},"tool_events":{"id":"eba39252-4f21-4f68-94d2-484fec7dac16","type":"ToolEvents"},"toolbar":{"id":"31cf6d2f-9bfd-4b97-abb5-5b258f53c3d9","type":"Toolbar"},"x_range":{"id":"4072e24f-108a-4d4e-b0d0-1d4506d9109f","type":"DataRange1d"},"y_range":{"id":"7a17a531-41eb-4d0a-b5e8-6dae451cdc9f","type":"DataRange1d"}},"id":"f88f39c0-8cd3-4c68-9d9d-8dee6da2af5c","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"f88f39c0-8cd3-4c68-9d9d-8dee6da2af5c","subtype":"Figure","type":"Plot"},"ticker":{"id":"236955c0-9e4b-4ee9-a78d-498ff3653019","type":"BasicTicker"}},"id":"897f6389-e69c-43e4-8202-28fc4ef53606","type":"Grid"},{"attributes":{"plot":{"id":"f88f39c0-8cd3-4c68-9d9d-8dee6da2af5c","subtype":"Figure","type":"Plot"}},"id":"779a59ba-1804-4529-bd97-f95259372d9b","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"d430a2c8-a04b-49f1-b705-5adacf068405","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"afbf91fa-d33d-42f5-b196-a384eeb4c270","type":"BasicTickFormatter"},"plot":{"id":"f88f39c0-8cd3-4c68-9d9d-8dee6da2af5c","subtype":"Figure","type":"Plot"},"ticker":{"id":"236955c0-9e4b-4ee9-a78d-498ff3653019","type":"BasicTicker"}},"id":"c6c6482f-f564-4a97-beb4-23f8a115d59f","type":"LinearAxis"},{"attributes":{"plot":{"id":"f88f39c0-8cd3-4c68-9d9d-8dee6da2af5c","subtype":"Figure","type":"Plot"}},"id":"510a744d-3520-463b-86e5-b15e36ac570c","type":"ResetTool"},{"attributes":{},"id":"afbf91fa-d33d-42f5-b196-a384eeb4c270","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#E6550D"},"line_color":{"value":"#E6550D"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"9df7f85e-b7f8-485f-96e2-d787b795bb5e","type":"Cross"},{"attributes":{"callback":null},"id":"4072e24f-108a-4d4e-b0d0-1d4506d9109f","type":"DataRange1d"},{"attributes":{"data_source":{"id":"d430a2c8-a04b-49f1-b705-5adacf068405","type":"ColumnDataSource"},"glyph":{"id":"9df7f85e-b7f8-485f-96e2-d787b795bb5e","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"925ed261-595e-4eab-b536-81a7c1e678f2","type":"Cross"},"selection_glyph":null},"id":"970d3544-9e16-401a-bbf3-257e9bc6b12c","type":"GlyphRenderer"},{"attributes":{},"id":"26e3dff1-0544-40ff-b851-5b0d20b3e9b3","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"f88f39c0-8cd3-4c68-9d9d-8dee6da2af5c","subtype":"Figure","type":"Plot"}},"id":"cfa0de0a-ce84-4909-b3bd-71b7f282a612","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b1471352-53cf-4cca-810f-fe650472d5fb","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"26e3dff1-0544-40ff-b851-5b0d20b3e9b3","type":"BasicTickFormatter"},"plot":{"id":"f88f39c0-8cd3-4c68-9d9d-8dee6da2af5c","subtype":"Figure","type":"Plot"},"ticker":{"id":"db1d3265-3fc9-4678-aa02-bb31bb743dde","type":"BasicTicker"}},"id":"fa4fdf17-71f3-42f9-a498-c7eb5c1c36b7","type":"LinearAxis"},{"attributes":{},"id":"eba39252-4f21-4f68-94d2-484fec7dac16","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"925ed261-595e-4eab-b536-81a7c1e678f2","type":"Cross"}],"root_ids":["f88f39c0-8cd3-4c68-9d9d-8dee6da2af5c"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"6f9f16c6-1c72-4019-afff-f247302c1c5b","elementid":"104c9080-503d-42b3-ade0-4390a2255dd8","modelid":"f88f39c0-8cd3-4c68-9d9d-8dee6da2af5c"}];
                
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
