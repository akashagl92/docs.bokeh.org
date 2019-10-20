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
      };var element = document.getElementById("d58bb6e9-b6ea-4e7f-81e4-9c4be22f77ae");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd58bb6e9-b6ea-4e7f-81e4-9c4be22f77ae' but no matching script tag was found. ")
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
                var docs_json = {"3fa14422-d444-4383-a62b-157834af7376":{"roots":{"references":[{"attributes":{},"id":"bdca1fc2-f7c2-46c9-9928-af1251546ce4","type":"BasicTickFormatter"},{"attributes":{},"id":"4e377420-86c1-4f20-9684-e2d9ca39dd33","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"85b76ba9-d30c-4181-ab6a-d48c519deb0d","type":"PanTool"},{"id":"f3342a9c-86d5-4ce6-b8cc-c59766ffc70e","type":"WheelZoomTool"},{"id":"d74b42a0-95ea-4867-8f9d-00aa37d62c51","type":"BoxZoomTool"},{"id":"b144243d-952b-40a8-9d78-b73d51b35da4","type":"SaveTool"},{"id":"f074ecdb-b540-41e2-9f0e-25301a667af3","type":"ResetTool"},{"id":"246e2cf5-426b-43fa-8a36-fb4d960fa67f","type":"HelpTool"}]},"id":"247158ef-f313-427d-8d07-b1fa46b23588","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8f797fb2-4cf9-4975-8914-71508164abb4","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"065d9b96-f3ad-42c3-890e-d09f98427ff8","subtype":"Figure","type":"Plot"}},"id":"f3342a9c-86d5-4ce6-b8cc-c59766ffc70e","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"61e137cc-69b1-47e7-9e83-2c50acd9abea","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"065d9b96-f3ad-42c3-890e-d09f98427ff8","subtype":"Figure","type":"Plot"}},"id":"f074ecdb-b540-41e2-9f0e-25301a667af3","type":"ResetTool"},{"attributes":{"plot":{"id":"065d9b96-f3ad-42c3-890e-d09f98427ff8","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e377420-86c1-4f20-9684-e2d9ca39dd33","type":"BasicTicker"}},"id":"90acf360-4a01-4d01-8f08-b354e2b01cca","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"065d9b96-f3ad-42c3-890e-d09f98427ff8","subtype":"Figure","type":"Plot"},"ticker":{"id":"1eaec47f-da3c-40ac-bf34-6270f5aab410","type":"BasicTicker"}},"id":"c0bd7a53-65f3-4329-bd46-a2625c7c804f","type":"Grid"},{"attributes":{"callback":null},"id":"59715417-9f76-4a2c-bce6-4d56890546a0","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"38187c5f-a72d-4732-a49d-67caf99d5e4e","type":"Circle"},{"attributes":{},"id":"b683a6ad-da40-462b-8ba7-8e924b3a7ea5","type":"ToolEvents"},{"attributes":{"plot":{"id":"065d9b96-f3ad-42c3-890e-d09f98427ff8","subtype":"Figure","type":"Plot"}},"id":"85b76ba9-d30c-4181-ab6a-d48c519deb0d","type":"PanTool"},{"attributes":{"callback":null},"id":"3a850f55-134f-4559-851f-88b17e5a4ea6","type":"DataRange1d"},{"attributes":{"data_source":{"id":"61e137cc-69b1-47e7-9e83-2c50acd9abea","type":"ColumnDataSource"},"glyph":{"id":"38187c5f-a72d-4732-a49d-67caf99d5e4e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"763ddf56-8fd3-4f99-acd5-08aaaa61d7ea","type":"Circle"},"selection_glyph":null},"id":"1af264cb-22ef-43b9-a2cd-9200192da5c9","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"065d9b96-f3ad-42c3-890e-d09f98427ff8","subtype":"Figure","type":"Plot"}},"id":"246e2cf5-426b-43fa-8a36-fb4d960fa67f","type":"HelpTool"},{"attributes":{"axis_label":"Temp","axis_line_color":{"value":"red"},"axis_line_width":{"value":3},"formatter":{"id":"abc841c1-27d9-4073-9ea5-096df36ea28b","type":"BasicTickFormatter"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"065d9b96-f3ad-42c3-890e-d09f98427ff8","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e377420-86c1-4f20-9684-e2d9ca39dd33","type":"BasicTicker"}},"id":"b6e04598-b8c8-4f04-80df-800049bf9aee","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"763ddf56-8fd3-4f99-acd5-08aaaa61d7ea","type":"Circle"},{"attributes":{"axis_label":"Pressure","formatter":{"id":"bdca1fc2-f7c2-46c9-9928-af1251546ce4","type":"BasicTickFormatter"},"major_label_orientation":"vertical","major_label_text_color":{"value":"orange"},"minor_tick_in":-3,"minor_tick_out":6,"plot":{"id":"065d9b96-f3ad-42c3-890e-d09f98427ff8","subtype":"Figure","type":"Plot"},"ticker":{"id":"1eaec47f-da3c-40ac-bf34-6270f5aab410","type":"BasicTicker"}},"id":"23d07b23-7b7b-4b9f-a7e7-e02bf2e025b2","type":"LinearAxis"},{"attributes":{"overlay":{"id":"8f797fb2-4cf9-4975-8914-71508164abb4","type":"BoxAnnotation"},"plot":{"id":"065d9b96-f3ad-42c3-890e-d09f98427ff8","subtype":"Figure","type":"Plot"}},"id":"d74b42a0-95ea-4867-8f9d-00aa37d62c51","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"065d9b96-f3ad-42c3-890e-d09f98427ff8","subtype":"Figure","type":"Plot"}},"id":"b144243d-952b-40a8-9d78-b73d51b35da4","type":"SaveTool"},{"attributes":{"below":[{"id":"b6e04598-b8c8-4f04-80df-800049bf9aee","type":"LinearAxis"}],"left":[{"id":"23d07b23-7b7b-4b9f-a7e7-e02bf2e025b2","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b6e04598-b8c8-4f04-80df-800049bf9aee","type":"LinearAxis"},{"id":"90acf360-4a01-4d01-8f08-b354e2b01cca","type":"Grid"},{"id":"23d07b23-7b7b-4b9f-a7e7-e02bf2e025b2","type":"LinearAxis"},{"id":"c0bd7a53-65f3-4329-bd46-a2625c7c804f","type":"Grid"},{"id":"8f797fb2-4cf9-4975-8914-71508164abb4","type":"BoxAnnotation"},{"id":"1af264cb-22ef-43b9-a2cd-9200192da5c9","type":"GlyphRenderer"}],"title":{"id":"1156fea9-1c5d-4c1c-b261-b26549392ca2","type":"Title"},"tool_events":{"id":"b683a6ad-da40-462b-8ba7-8e924b3a7ea5","type":"ToolEvents"},"toolbar":{"id":"247158ef-f313-427d-8d07-b1fa46b23588","type":"Toolbar"},"x_range":{"id":"3a850f55-134f-4559-851f-88b17e5a4ea6","type":"DataRange1d"},"y_range":{"id":"59715417-9f76-4a2c-bce6-4d56890546a0","type":"DataRange1d"}},"id":"065d9b96-f3ad-42c3-890e-d09f98427ff8","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"abc841c1-27d9-4073-9ea5-096df36ea28b","type":"BasicTickFormatter"},{"attributes":{},"id":"1eaec47f-da3c-40ac-bf34-6270f5aab410","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"1156fea9-1c5d-4c1c-b261-b26549392ca2","type":"Title"}],"root_ids":["065d9b96-f3ad-42c3-890e-d09f98427ff8"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"3fa14422-d444-4383-a62b-157834af7376","elementid":"d58bb6e9-b6ea-4e7f-81e4-9c4be22f77ae","modelid":"065d9b96-f3ad-42c3-890e-d09f98427ff8"}];
                
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
