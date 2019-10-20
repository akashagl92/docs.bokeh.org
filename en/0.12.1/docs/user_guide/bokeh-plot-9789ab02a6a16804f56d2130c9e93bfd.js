document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("fd08111d-ef64-4a37-a0a5-f4658dd2e074");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fd08111d-ef64-4a37-a0a5-f4658dd2e074' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"6a64b49f-e218-4497-ac57-b78e4a931efd":{"roots":{"references":[{"attributes":{"data_source":{"id":"df178da8-f566-4c73-a0ad-04c066a6d731","type":"ColumnDataSource"},"glyph":{"id":"b7e0a080-61ca-44bf-a62e-64d8d723d237","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"392a9b9b-81b0-4b66-b2b0-1c1b09925e52","type":"Circle"},"selection_glyph":null},"id":"6e814af3-f696-4f4b-8f98-6b3490571194","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b7e0a080-61ca-44bf-a62e-64d8d723d237","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"aae5be55-47ec-4a9a-8c0f-bd717729b3a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"d4bd9f13-6765-4e37-b28f-8bbe7b8b0ba0","type":"BasicTicker"}},"id":"e8467700-c211-4169-b078-ce2a417d94a3","type":"Grid"},{"attributes":{},"id":"cb98e595-c184-460e-8e24-0bb8cbabe9d2","type":"ToolEvents"},{"attributes":{"plot":{"id":"aae5be55-47ec-4a9a-8c0f-bd717729b3a4","subtype":"Figure","type":"Plot"}},"id":"f4065544-13dd-40a6-a1bc-dc7c86e13d33","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9f8b4f4c-d7ee-432a-87f9-31383ba3089e","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"aae5be55-47ec-4a9a-8c0f-bd717729b3a4","subtype":"Figure","type":"Plot"}},"id":"558402e8-3ad4-4888-a597-713a87d67c85","type":"WheelZoomTool"},{"attributes":{},"id":"ea6e9774-ac3b-4be9-8054-2af7cc9578a3","type":"BasicTicker"},{"attributes":{"formatter":{"id":"cff30c0b-e06b-4a62-83f8-1628c7e7150c","type":"BasicTickFormatter"},"plot":{"id":"aae5be55-47ec-4a9a-8c0f-bd717729b3a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"d4bd9f13-6765-4e37-b28f-8bbe7b8b0ba0","type":"BasicTicker"}},"id":"339c46d7-075c-4ee2-bfe7-17b776b813db","type":"LinearAxis"},{"attributes":{"plot":{"id":"aae5be55-47ec-4a9a-8c0f-bd717729b3a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea6e9774-ac3b-4be9-8054-2af7cc9578a3","type":"BasicTicker"}},"id":"4313aec6-10c8-40fe-9d04-66e681d21176","type":"Grid"},{"attributes":{"plot":{"id":"aae5be55-47ec-4a9a-8c0f-bd717729b3a4","subtype":"Figure","type":"Plot"}},"id":"8d3d40e1-d6f4-4032-9e13-5646b5fd6e28","type":"SaveTool"},{"attributes":{"callback":null},"id":"740e19f0-070d-436e-b6ed-1b1f2fe83db4","type":"DataRange1d"},{"attributes":{},"id":"d4bd9f13-6765-4e37-b28f-8bbe7b8b0ba0","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"392a9b9b-81b0-4b66-b2b0-1c1b09925e52","type":"Circle"},{"attributes":{"plot":{"id":"aae5be55-47ec-4a9a-8c0f-bd717729b3a4","subtype":"Figure","type":"Plot"}},"id":"774544d9-f0d6-4988-91a9-301d10677026","type":"PanTool"},{"attributes":{},"id":"65babb0d-c001-463b-a2eb-d14502255d93","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"774544d9-f0d6-4988-91a9-301d10677026","type":"PanTool"},{"id":"558402e8-3ad4-4888-a597-713a87d67c85","type":"WheelZoomTool"},{"id":"74880db7-3d3d-4bd9-9d2d-de096ad08e4d","type":"BoxZoomTool"},{"id":"8d3d40e1-d6f4-4032-9e13-5646b5fd6e28","type":"SaveTool"},{"id":"f4065544-13dd-40a6-a1bc-dc7c86e13d33","type":"ResetTool"},{"id":"02aa773c-c134-4b7c-91d2-f25d5e1a4f90","type":"HelpTool"}]},"id":"119c15b7-1be0-452e-ad28-1000a269f3ac","type":"Toolbar"},{"attributes":{"plot":{"id":"aae5be55-47ec-4a9a-8c0f-bd717729b3a4","subtype":"Figure","type":"Plot"}},"id":"02aa773c-c134-4b7c-91d2-f25d5e1a4f90","type":"HelpTool"},{"attributes":{"plot":null,"text":"Top Title with Toolbar"},"id":"8bcdd9fe-857d-46c7-9849-55f2bb04d8b0","type":"Title"},{"attributes":{},"id":"cff30c0b-e06b-4a62-83f8-1628c7e7150c","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"65babb0d-c001-463b-a2eb-d14502255d93","type":"BasicTickFormatter"},"plot":{"id":"aae5be55-47ec-4a9a-8c0f-bd717729b3a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea6e9774-ac3b-4be9-8054-2af7cc9578a3","type":"BasicTicker"}},"id":"3ae2ed16-791a-4624-b3ef-b06518a1b766","type":"LinearAxis"},{"attributes":{"below":[{"id":"3ae2ed16-791a-4624-b3ef-b06518a1b766","type":"LinearAxis"}],"left":[{"id":"339c46d7-075c-4ee2-bfe7-17b776b813db","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"3ae2ed16-791a-4624-b3ef-b06518a1b766","type":"LinearAxis"},{"id":"4313aec6-10c8-40fe-9d04-66e681d21176","type":"Grid"},{"id":"339c46d7-075c-4ee2-bfe7-17b776b813db","type":"LinearAxis"},{"id":"e8467700-c211-4169-b078-ce2a417d94a3","type":"Grid"},{"id":"9f8b4f4c-d7ee-432a-87f9-31383ba3089e","type":"BoxAnnotation"},{"id":"6e814af3-f696-4f4b-8f98-6b3490571194","type":"GlyphRenderer"}],"title":{"id":"8bcdd9fe-857d-46c7-9849-55f2bb04d8b0","type":"Title"},"tool_events":{"id":"cb98e595-c184-460e-8e24-0bb8cbabe9d2","type":"ToolEvents"},"toolbar":{"id":"119c15b7-1be0-452e-ad28-1000a269f3ac","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"a465343e-42ac-4e0d-ace2-ab4b32d01207","type":"DataRange1d"},"y_range":{"id":"740e19f0-070d-436e-b6ed-1b1f2fe83db4","type":"DataRange1d"}},"id":"aae5be55-47ec-4a9a-8c0f-bd717729b3a4","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"9f8b4f4c-d7ee-432a-87f9-31383ba3089e","type":"BoxAnnotation"},"plot":{"id":"aae5be55-47ec-4a9a-8c0f-bd717729b3a4","subtype":"Figure","type":"Plot"}},"id":"74880db7-3d3d-4bd9-9d2d-de096ad08e4d","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"df178da8-f566-4c73-a0ad-04c066a6d731","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"a465343e-42ac-4e0d-ace2-ab4b32d01207","type":"DataRange1d"}],"root_ids":["aae5be55-47ec-4a9a-8c0f-bd717729b3a4"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"6a64b49f-e218-4497-ac57-b78e4a931efd","elementid":"fd08111d-ef64-4a37-a0a5-f4658dd2e074","modelid":"aae5be55-47ec-4a9a-8c0f-bd717729b3a4"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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
});