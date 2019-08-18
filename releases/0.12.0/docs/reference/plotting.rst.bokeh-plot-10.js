document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("be10e962-b095-4381-8ab1-0035acde4219");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'be10e962-b095-4381-8ab1-0035acde4219' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"d2cce8d2-d9d3-498b-8075-ed2f1ff7b065":{"roots":{"references":[{"attributes":{"plot":{"id":"bf70af39-441c-4b42-8843-5926c1b32a17","subtype":"Figure","type":"Plot"},"ticker":{"id":"d38bd290-7e6d-48ec-a308-45897a92eb7a","type":"BasicTicker"}},"id":"6d946517-b22e-42f2-a854-71a7d9c93e8b","type":"Grid"},{"attributes":{"formatter":{"id":"9ab7c6f9-42da-4128-983d-33b8b1182b60","type":"BasicTickFormatter"},"plot":{"id":"bf70af39-441c-4b42-8843-5926c1b32a17","subtype":"Figure","type":"Plot"},"ticker":{"id":"deb203de-534a-4cee-9693-ed6673a64976","type":"BasicTicker"}},"id":"9e3d56b4-e6e4-4ae7-89cf-1f9da0643588","type":"LinearAxis"},{"attributes":{},"id":"deb203de-534a-4cee-9693-ed6673a64976","type":"BasicTicker"},{"attributes":{"overlay":{"id":"8a0f93bd-157f-4621-ab39-2f52ed216ed7","type":"BoxAnnotation"},"plot":{"id":"bf70af39-441c-4b42-8843-5926c1b32a17","subtype":"Figure","type":"Plot"}},"id":"9c913d2c-90c5-4fdb-9a0a-6dd84a3e6932","type":"BoxZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8f0c1f24-71c9-4287-89b7-6a6ae35305f9","type":"Line"},{"attributes":{"plot":{"id":"bf70af39-441c-4b42-8843-5926c1b32a17","subtype":"Figure","type":"Plot"}},"id":"0db86522-7d14-4ce1-91a2-801c75663306","type":"ResetTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"527a06e4-e8c1-4fca-956f-5971593bcf06","type":"Line"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"25c87cb9-7670-458a-a777-814a9fce3f98","type":"PanTool"},{"id":"23ce90c4-52d9-4d88-b944-1e51c1a0228d","type":"WheelZoomTool"},{"id":"9c913d2c-90c5-4fdb-9a0a-6dd84a3e6932","type":"BoxZoomTool"},{"id":"609342a8-968b-4592-aa93-f8fcdc79d5da","type":"SaveTool"},{"id":"0db86522-7d14-4ce1-91a2-801c75663306","type":"ResetTool"},{"id":"f6f1b941-2beb-4fbb-93ff-82fe19681ce7","type":"HelpTool"}]},"id":"071d9e09-3dd9-460a-b6c0-846d3d69c425","type":"Toolbar"},{"attributes":{"plot":null,"text":"line"},"id":"a62582d0-42f8-4201-87af-80f2eb37535f","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8a0f93bd-157f-4621-ab39-2f52ed216ed7","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"13bd699f-5758-4e2a-b9b9-db5026e64523","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"bf70af39-441c-4b42-8843-5926c1b32a17","subtype":"Figure","type":"Plot"},"ticker":{"id":"deb203de-534a-4cee-9693-ed6673a64976","type":"BasicTicker"}},"id":"8ee8612b-e2ab-44bb-858f-20cb26c6396c","type":"Grid"},{"attributes":{"formatter":{"id":"eac1466c-ddbb-491a-888c-d40fb5bd683b","type":"BasicTickFormatter"},"plot":{"id":"bf70af39-441c-4b42-8843-5926c1b32a17","subtype":"Figure","type":"Plot"},"ticker":{"id":"d38bd290-7e6d-48ec-a308-45897a92eb7a","type":"BasicTicker"}},"id":"78032998-0dcc-40c8-b662-9ca65607c48b","type":"LinearAxis"},{"attributes":{},"id":"eac1466c-ddbb-491a-888c-d40fb5bd683b","type":"BasicTickFormatter"},{"attributes":{},"id":"9ab7c6f9-42da-4128-983d-33b8b1182b60","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"44c55941-4fb2-40e4-8ce5-cbaa8d05fff7","type":"ColumnDataSource"},"glyph":{"id":"527a06e4-e8c1-4fca-956f-5971593bcf06","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"8f0c1f24-71c9-4287-89b7-6a6ae35305f9","type":"Line"},"selection_glyph":null},"id":"147c15fe-d5a7-44bb-9ef8-8ceb10f1d8c3","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"44c55941-4fb2-40e4-8ce5-cbaa8d05fff7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"bf70af39-441c-4b42-8843-5926c1b32a17","subtype":"Figure","type":"Plot"}},"id":"25c87cb9-7670-458a-a777-814a9fce3f98","type":"PanTool"},{"attributes":{"plot":{"id":"bf70af39-441c-4b42-8843-5926c1b32a17","subtype":"Figure","type":"Plot"}},"id":"609342a8-968b-4592-aa93-f8fcdc79d5da","type":"SaveTool"},{"attributes":{"plot":{"id":"bf70af39-441c-4b42-8843-5926c1b32a17","subtype":"Figure","type":"Plot"}},"id":"23ce90c4-52d9-4d88-b944-1e51c1a0228d","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"d5255674-8340-46ba-9465-d706e4c7772d","type":"DataRange1d"},{"attributes":{},"id":"15cd1383-be58-4d32-a404-59aba47e08d0","type":"ToolEvents"},{"attributes":{},"id":"d38bd290-7e6d-48ec-a308-45897a92eb7a","type":"BasicTicker"},{"attributes":{"plot":{"id":"bf70af39-441c-4b42-8843-5926c1b32a17","subtype":"Figure","type":"Plot"}},"id":"f6f1b941-2beb-4fbb-93ff-82fe19681ce7","type":"HelpTool"},{"attributes":{"below":[{"id":"78032998-0dcc-40c8-b662-9ca65607c48b","type":"LinearAxis"}],"left":[{"id":"9e3d56b4-e6e4-4ae7-89cf-1f9da0643588","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"78032998-0dcc-40c8-b662-9ca65607c48b","type":"LinearAxis"},{"id":"6d946517-b22e-42f2-a854-71a7d9c93e8b","type":"Grid"},{"id":"9e3d56b4-e6e4-4ae7-89cf-1f9da0643588","type":"LinearAxis"},{"id":"8ee8612b-e2ab-44bb-858f-20cb26c6396c","type":"Grid"},{"id":"8a0f93bd-157f-4621-ab39-2f52ed216ed7","type":"BoxAnnotation"},{"id":"147c15fe-d5a7-44bb-9ef8-8ceb10f1d8c3","type":"GlyphRenderer"}],"title":{"id":"a62582d0-42f8-4201-87af-80f2eb37535f","type":"Title"},"tool_events":{"id":"15cd1383-be58-4d32-a404-59aba47e08d0","type":"ToolEvents"},"toolbar":{"id":"071d9e09-3dd9-460a-b6c0-846d3d69c425","type":"Toolbar"},"x_range":{"id":"d5255674-8340-46ba-9465-d706e4c7772d","type":"DataRange1d"},"y_range":{"id":"13bd699f-5758-4e2a-b9b9-db5026e64523","type":"DataRange1d"}},"id":"bf70af39-441c-4b42-8843-5926c1b32a17","subtype":"Figure","type":"Plot"}],"root_ids":["bf70af39-441c-4b42-8843-5926c1b32a17"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"d2cce8d2-d9d3-498b-8075-ed2f1ff7b065","elementid":"be10e962-b095-4381-8ab1-0035acde4219","modelid":"bf70af39-441c-4b42-8843-5926c1b32a17"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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