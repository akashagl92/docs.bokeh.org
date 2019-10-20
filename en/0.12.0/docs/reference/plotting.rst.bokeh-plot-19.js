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
      };var element = document.getElementById("80fe2283-48ee-4532-84f6-8c81d1ad8c38");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '80fe2283-48ee-4532-84f6-8c81d1ad8c38' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"00811452-4780-42c4-ba38-41defc4ed23c":{"roots":{"references":[{"attributes":{"plot":{"id":"1dad7725-cd31-4acb-b0e0-a5e3088cf604","subtype":"Figure","type":"Plot"}},"id":"3d399759-641a-4b20-a129-44bdd6acaf2c","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":null},"id":"f3feea0b-0237-4e74-b00f-61445db24f96","type":"Title"},{"attributes":{"callback":null},"id":"9a01359a-4477-4102-aced-96906406e7c5","type":"DataRange1d"},{"attributes":{"formatter":{"id":"b3999403-48e3-4c81-8007-e7e93aae2320","type":"BasicTickFormatter"},"plot":{"id":"1dad7725-cd31-4acb-b0e0-a5e3088cf604","subtype":"Figure","type":"Plot"},"ticker":{"id":"26b76ad3-7ec0-48b1-b779-523b0ff86f4d","type":"BasicTicker"}},"id":"297e84be-6d57-4254-9c19-d30341a0bfd7","type":"LinearAxis"},{"attributes":{"data_source":{"id":"2f7c0789-82b6-4ead-93b1-0f192a6cad5d","type":"ColumnDataSource"},"glyph":{"id":"4ee8fce9-8ab2-4f4b-bf89-8d934e5c2909","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"2a3fe545-64cc-484d-8164-fb4575f8c842","type":"Square"},"selection_glyph":null},"id":"a05c8315-1223-457d-8164-7940c449fa53","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c84ff789-86ca-4d11-98f9-7bd8d9b5db81","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"1dad7725-cd31-4acb-b0e0-a5e3088cf604","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac7ee640-45bb-4e29-bda3-aa2b15545818","type":"BasicTicker"}},"id":"55965b2b-f395-49dc-aad4-659553197c11","type":"Grid"},{"attributes":{"callback":null},"id":"52db7cba-8f00-4ab0-a96f-1023e6c0fbd5","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a7c4fdbb-f067-4086-a170-1fba2b0f4cd8","type":"PanTool"},{"id":"3d399759-641a-4b20-a129-44bdd6acaf2c","type":"WheelZoomTool"},{"id":"b342b77a-0210-4213-aa90-833ffaac7985","type":"BoxZoomTool"},{"id":"b0eda807-eca1-41c0-ad88-e24dcc410ced","type":"SaveTool"},{"id":"0b201974-f602-4bb8-b028-027c6e69a182","type":"ResetTool"},{"id":"f1fbca77-b99c-40b3-81b3-bed9df1e5e1b","type":"HelpTool"}]},"id":"112ea387-0ec5-43f5-8d67-9e990b81cae1","type":"Toolbar"},{"attributes":{},"id":"ac7ee640-45bb-4e29-bda3-aa2b15545818","type":"BasicTicker"},{"attributes":{"plot":{"id":"1dad7725-cd31-4acb-b0e0-a5e3088cf604","subtype":"Figure","type":"Plot"}},"id":"b0eda807-eca1-41c0-ad88-e24dcc410ced","type":"SaveTool"},{"attributes":{"plot":{"id":"1dad7725-cd31-4acb-b0e0-a5e3088cf604","subtype":"Figure","type":"Plot"}},"id":"a7c4fdbb-f067-4086-a170-1fba2b0f4cd8","type":"PanTool"},{"attributes":{},"id":"26b76ad3-7ec0-48b1-b779-523b0ff86f4d","type":"BasicTicker"},{"attributes":{},"id":"0c81e7bb-eee1-4299-bf16-f2b16927cf68","type":"ToolEvents"},{"attributes":{},"id":"b3999403-48e3-4c81-8007-e7e93aae2320","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4ee8fce9-8ab2-4f4b-bf89-8d934e5c2909","type":"Square"},{"attributes":{"dimension":1,"plot":{"id":"1dad7725-cd31-4acb-b0e0-a5e3088cf604","subtype":"Figure","type":"Plot"},"ticker":{"id":"26b76ad3-7ec0-48b1-b779-523b0ff86f4d","type":"BasicTicker"}},"id":"65ba49b9-938f-438b-bbb6-fe31775dada7","type":"Grid"},{"attributes":{},"id":"fc2eafd9-de96-416a-b960-e3da9ffeeffa","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]}},"id":"2f7c0789-82b6-4ead-93b1-0f192a6cad5d","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2a3fe545-64cc-484d-8164-fb4575f8c842","type":"Square"},{"attributes":{"plot":{"id":"1dad7725-cd31-4acb-b0e0-a5e3088cf604","subtype":"Figure","type":"Plot"}},"id":"f1fbca77-b99c-40b3-81b3-bed9df1e5e1b","type":"HelpTool"},{"attributes":{"below":[{"id":"afa18603-c70e-483d-a05c-31d2f36bf8b9","type":"LinearAxis"}],"left":[{"id":"297e84be-6d57-4254-9c19-d30341a0bfd7","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"afa18603-c70e-483d-a05c-31d2f36bf8b9","type":"LinearAxis"},{"id":"55965b2b-f395-49dc-aad4-659553197c11","type":"Grid"},{"id":"297e84be-6d57-4254-9c19-d30341a0bfd7","type":"LinearAxis"},{"id":"65ba49b9-938f-438b-bbb6-fe31775dada7","type":"Grid"},{"id":"c84ff789-86ca-4d11-98f9-7bd8d9b5db81","type":"BoxAnnotation"},{"id":"a05c8315-1223-457d-8164-7940c449fa53","type":"GlyphRenderer"}],"title":{"id":"f3feea0b-0237-4e74-b00f-61445db24f96","type":"Title"},"tool_events":{"id":"0c81e7bb-eee1-4299-bf16-f2b16927cf68","type":"ToolEvents"},"toolbar":{"id":"112ea387-0ec5-43f5-8d67-9e990b81cae1","type":"Toolbar"},"x_range":{"id":"9a01359a-4477-4102-aced-96906406e7c5","type":"DataRange1d"},"y_range":{"id":"52db7cba-8f00-4ab0-a96f-1023e6c0fbd5","type":"DataRange1d"}},"id":"1dad7725-cd31-4acb-b0e0-a5e3088cf604","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"fc2eafd9-de96-416a-b960-e3da9ffeeffa","type":"BasicTickFormatter"},"plot":{"id":"1dad7725-cd31-4acb-b0e0-a5e3088cf604","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac7ee640-45bb-4e29-bda3-aa2b15545818","type":"BasicTicker"}},"id":"afa18603-c70e-483d-a05c-31d2f36bf8b9","type":"LinearAxis"},{"attributes":{"overlay":{"id":"c84ff789-86ca-4d11-98f9-7bd8d9b5db81","type":"BoxAnnotation"},"plot":{"id":"1dad7725-cd31-4acb-b0e0-a5e3088cf604","subtype":"Figure","type":"Plot"}},"id":"b342b77a-0210-4213-aa90-833ffaac7985","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"1dad7725-cd31-4acb-b0e0-a5e3088cf604","subtype":"Figure","type":"Plot"}},"id":"0b201974-f602-4bb8-b028-027c6e69a182","type":"ResetTool"}],"root_ids":["1dad7725-cd31-4acb-b0e0-a5e3088cf604"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"00811452-4780-42c4-ba38-41defc4ed23c","elementid":"80fe2283-48ee-4532-84f6-8c81d1ad8c38","modelid":"1dad7725-cd31-4acb-b0e0-a5e3088cf604"}];
              
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