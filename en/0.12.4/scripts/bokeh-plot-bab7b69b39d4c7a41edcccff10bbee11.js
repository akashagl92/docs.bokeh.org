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
      };var element = document.getElementById("e71bcc87-d848-4215-b8ea-4787d257a88f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e71bcc87-d848-4215-b8ea-4787d257a88f' but no matching script tag was found. ")
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
                var docs_json = {"370729f3-d2f6-41d1-87c3-73a7ae532536":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cc53f4e2-40b6-48f2-9de1-8c2a4735af59","type":"PanTool"},{"id":"d7d86327-0a1c-485d-b8f8-1fa34877c255","type":"WheelZoomTool"},{"id":"4b4febb1-488b-4b1a-9635-68cb34892970","type":"BoxZoomTool"},{"id":"8c54e50b-abac-40eb-b722-ff2f8e0df607","type":"SaveTool"},{"id":"a11ef00b-d698-4f73-9957-86fb794ce230","type":"ResetTool"},{"id":"5bec2570-a044-4d88-93db-e230223a247c","type":"HelpTool"}]},"id":"bf0eaddd-72da-431f-95af-d1f6883a9c41","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"36275d2d-cf1d-4dbe-800d-02c30ebaf3fd","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"2f94c1fb-6dd8-4914-976b-2ac859964865","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"b38cb28d-caa3-408b-a8dd-9abe47ef6111","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a3950e0e-1bed-45b8-bada-e62d28bb28f6","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"3c8b8b5a-02f2-4209-9323-8ffb1dc1a185","subtype":"Figure","type":"Plot"}},"id":"d7d86327-0a1c-485d-b8f8-1fa34877c255","type":"WheelZoomTool"},{"attributes":{},"id":"44628787-d041-4ed8-8bbd-526b5b697d9d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3c8b8b5a-02f2-4209-9323-8ffb1dc1a185","subtype":"Figure","type":"Plot"},"ticker":{"id":"aab4ef8f-9ad7-4ebc-bc2a-f07f4b2026a8","type":"BasicTicker"}},"id":"40eb8bf9-0e20-4ce9-b4d5-4e60a4b72cb7","type":"Grid"},{"attributes":{"plot":{"id":"3c8b8b5a-02f2-4209-9323-8ffb1dc1a185","subtype":"Figure","type":"Plot"}},"id":"5bec2570-a044-4d88-93db-e230223a247c","type":"HelpTool"},{"attributes":{"plot":{"id":"3c8b8b5a-02f2-4209-9323-8ffb1dc1a185","subtype":"Figure","type":"Plot"}},"id":"a11ef00b-d698-4f73-9957-86fb794ce230","type":"ResetTool"},{"attributes":{},"id":"586d8410-f418-41c1-81d7-0f4ec0217e76","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"a3950e0e-1bed-45b8-bada-e62d28bb28f6","type":"BoxAnnotation"},"plot":{"id":"3c8b8b5a-02f2-4209-9323-8ffb1dc1a185","subtype":"Figure","type":"Plot"}},"id":"4b4febb1-488b-4b1a-9635-68cb34892970","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"44628787-d041-4ed8-8bbd-526b5b697d9d","type":"BasicTickFormatter"},"plot":{"id":"3c8b8b5a-02f2-4209-9323-8ffb1dc1a185","subtype":"Figure","type":"Plot"},"ticker":{"id":"00b81e79-76bc-46f3-8bc5-817fe3593ab3","type":"BasicTicker"}},"id":"a04432e7-5b5c-4659-aa5d-114880a9aa5b","type":"LinearAxis"},{"attributes":{"plot":{"id":"3c8b8b5a-02f2-4209-9323-8ffb1dc1a185","subtype":"Figure","type":"Plot"}},"id":"8c54e50b-abac-40eb-b722-ff2f8e0df607","type":"SaveTool"},{"attributes":{"data_source":{"id":"36275d2d-cf1d-4dbe-800d-02c30ebaf3fd","type":"ColumnDataSource"},"glyph":{"id":"33a79711-cd5b-4cab-aaf1-707f6d23a00b","type":"Wedge"},"hover_glyph":null,"nonselection_glyph":{"id":"2a756555-e4a1-4ed8-ad2c-73f806494ae7","type":"Wedge"},"selection_glyph":null},"id":"19c76e9b-2caa-4371-b37d-52bfecef95b9","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"059d3fc0-dd7e-40e7-922a-70eb89c18bd4","type":"DataRange1d"},{"attributes":{},"id":"f5355fc9-ea6d-4e19-993d-9ff04ae47183","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"3c8b8b5a-02f2-4209-9323-8ffb1dc1a185","subtype":"Figure","type":"Plot"},"ticker":{"id":"00b81e79-76bc-46f3-8bc5-817fe3593ab3","type":"BasicTicker"}},"id":"f9c8eaaa-9166-4697-9e29-7cc71dc91ab0","type":"Grid"},{"attributes":{},"id":"00b81e79-76bc-46f3-8bc5-817fe3593ab3","type":"BasicTicker"},{"attributes":{"plot":{"id":"3c8b8b5a-02f2-4209-9323-8ffb1dc1a185","subtype":"Figure","type":"Plot"}},"id":"cc53f4e2-40b6-48f2-9de1-8c2a4735af59","type":"PanTool"},{"attributes":{"formatter":{"id":"586d8410-f418-41c1-81d7-0f4ec0217e76","type":"BasicTickFormatter"},"plot":{"id":"3c8b8b5a-02f2-4209-9323-8ffb1dc1a185","subtype":"Figure","type":"Plot"},"ticker":{"id":"aab4ef8f-9ad7-4ebc-bc2a-f07f4b2026a8","type":"BasicTicker"}},"id":"ef4e3cf0-bb09-4024-a626-750022df15f8","type":"LinearAxis"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.6},"line_color":{"value":"firebrick"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"33a79711-cd5b-4cab-aaf1-707f6d23a00b","type":"Wedge"},{"attributes":{},"id":"aab4ef8f-9ad7-4ebc-bc2a-f07f4b2026a8","type":"BasicTicker"},{"attributes":{"below":[{"id":"ef4e3cf0-bb09-4024-a626-750022df15f8","type":"LinearAxis"}],"left":[{"id":"a04432e7-5b5c-4659-aa5d-114880a9aa5b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ef4e3cf0-bb09-4024-a626-750022df15f8","type":"LinearAxis"},{"id":"40eb8bf9-0e20-4ce9-b4d5-4e60a4b72cb7","type":"Grid"},{"id":"a04432e7-5b5c-4659-aa5d-114880a9aa5b","type":"LinearAxis"},{"id":"f9c8eaaa-9166-4697-9e29-7cc71dc91ab0","type":"Grid"},{"id":"a3950e0e-1bed-45b8-bada-e62d28bb28f6","type":"BoxAnnotation"},{"id":"19c76e9b-2caa-4371-b37d-52bfecef95b9","type":"GlyphRenderer"}],"title":{"id":"b38cb28d-caa3-408b-a8dd-9abe47ef6111","type":"Title"},"tool_events":{"id":"f5355fc9-ea6d-4e19-993d-9ff04ae47183","type":"ToolEvents"},"toolbar":{"id":"bf0eaddd-72da-431f-95af-d1f6883a9c41","type":"Toolbar"},"x_range":{"id":"059d3fc0-dd7e-40e7-922a-70eb89c18bd4","type":"DataRange1d"},"y_range":{"id":"2f94c1fb-6dd8-4914-976b-2ac859964865","type":"DataRange1d"}},"id":"3c8b8b5a-02f2-4209-9323-8ffb1dc1a185","subtype":"Figure","type":"Plot"},{"attributes":{"direction":"clock","end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.2},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"2a756555-e4a1-4ed8-ad2c-73f806494ae7","type":"Wedge"}],"root_ids":["3c8b8b5a-02f2-4209-9323-8ffb1dc1a185"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"370729f3-d2f6-41d1-87c3-73a7ae532536","elementid":"e71bcc87-d848-4215-b8ea-4787d257a88f","modelid":"3c8b8b5a-02f2-4209-9323-8ffb1dc1a185"}];
                
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
