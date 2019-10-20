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
      };var element = document.getElementById("008e4862-5737-4c7d-8535-1077e855d5c0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '008e4862-5737-4c7d-8535-1077e855d5c0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"47f2148e-a3be-4662-a423-6c884f39d7c9":{"roots":{"references":[{"attributes":{},"id":"0a0ca7a4-b372-479e-a534-0c0a6d1aeff1","type":"ToolEvents"},{"attributes":{"formatter":{"id":"1b46d3e6-e47b-44d9-a750-aceec6544c02","type":"BasicTickFormatter"},"plot":{"id":"562e8b45-b077-458e-a3d2-eb6fde79325c","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee794c36-3c7c-4256-802f-aa1c81c22c6b","type":"BasicTicker"}},"id":"fbea6e1b-42dd-4229-a7b4-de184f6128f0","type":"LinearAxis"},{"attributes":{"plot":{"id":"562e8b45-b077-458e-a3d2-eb6fde79325c","subtype":"Figure","type":"Plot"}},"id":"c4acd145-f6c1-4876-b1c1-afd2c6987eec","type":"HelpTool"},{"attributes":{"plot":{"id":"562e8b45-b077-458e-a3d2-eb6fde79325c","subtype":"Figure","type":"Plot"}},"id":"ab789dfe-6ecc-4e41-b4bf-6788c178894a","type":"ResetTool"},{"attributes":{},"id":"ee794c36-3c7c-4256-802f-aa1c81c22c6b","type":"BasicTicker"},{"attributes":{"plot":{"id":"562e8b45-b077-458e-a3d2-eb6fde79325c","subtype":"Figure","type":"Plot"}},"id":"4065fd26-d794-4ae9-84e6-b209f4837fc3","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d3d5f6e3-51ce-4f9e-8e8c-b2801bc404e7","type":"Circle"},{"attributes":{"plot":{"id":"562e8b45-b077-458e-a3d2-eb6fde79325c","subtype":"Figure","type":"Plot"}},"id":"f421e98e-f6ec-4765-af30-46995991067d","type":"PanTool"},{"attributes":{"formatter":{"id":"6d6de684-6ab1-457c-bd2d-cac15c4b4430","type":"BasicTickFormatter"},"plot":{"id":"562e8b45-b077-458e-a3d2-eb6fde79325c","subtype":"Figure","type":"Plot"},"ticker":{"id":"1d42b454-3bb8-453d-b2ed-d16633ff9708","type":"BasicTicker"}},"id":"a59d7d5d-9e53-428f-b0ff-89350b1614ef","type":"LinearAxis"},{"attributes":{},"id":"6d6de684-6ab1-457c-bd2d-cac15c4b4430","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"03f6836e-b7c4-4a04-bb47-d8f3f0abd6e3","type":"BoxAnnotation"},"plot":{"id":"562e8b45-b077-458e-a3d2-eb6fde79325c","subtype":"Figure","type":"Plot"}},"id":"0015617a-9a85-4341-b578-cb85fb322bde","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e8935cc-151a-45d4-9402-075c298752b7","type":"Circle"},{"attributes":{"callback":null},"id":"d708173b-249e-4a28-b912-add71584e31a","type":"DataRange1d"},{"attributes":{"below":[{"id":"a59d7d5d-9e53-428f-b0ff-89350b1614ef","type":"LinearAxis"}],"left":[{"id":"fbea6e1b-42dd-4229-a7b4-de184f6128f0","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"a59d7d5d-9e53-428f-b0ff-89350b1614ef","type":"LinearAxis"},{"id":"bc0398d6-c58e-4c6f-a959-c9d0a88d45b5","type":"Grid"},{"id":"fbea6e1b-42dd-4229-a7b4-de184f6128f0","type":"LinearAxis"},{"id":"a251e3c8-39bf-49fa-b4ef-14577633b71f","type":"Grid"},{"id":"03f6836e-b7c4-4a04-bb47-d8f3f0abd6e3","type":"BoxAnnotation"},{"id":"6f3f9bf8-6487-4c4f-93b9-d0c5d184c31f","type":"GlyphRenderer"}],"title":{"id":"c12047c6-036b-4272-8c11-e622aa9232a2","type":"Title"},"title_location":"left","tool_events":{"id":"0a0ca7a4-b372-479e-a534-0c0a6d1aeff1","type":"ToolEvents"},"toolbar":{"id":"a9516e5d-df07-46ae-aa48-977e825863c0","type":"Toolbar"},"x_range":{"id":"d708173b-249e-4a28-b912-add71584e31a","type":"DataRange1d"},"y_range":{"id":"d3df4865-bb28-485f-95ac-2b5a3e7d5252","type":"DataRange1d"}},"id":"562e8b45-b077-458e-a3d2-eb6fde79325c","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"562e8b45-b077-458e-a3d2-eb6fde79325c","subtype":"Figure","type":"Plot"},"ticker":{"id":"1d42b454-3bb8-453d-b2ed-d16633ff9708","type":"BasicTicker"}},"id":"bc0398d6-c58e-4c6f-a959-c9d0a88d45b5","type":"Grid"},{"attributes":{"plot":{"id":"562e8b45-b077-458e-a3d2-eb6fde79325c","subtype":"Figure","type":"Plot"}},"id":"5cb8995c-a515-4fe9-b772-74cb4651d6c3","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"65a5b454-28ee-4b7e-bdf1-5e5bf5c04cf6","type":"ColumnDataSource"},"glyph":{"id":"d3d5f6e3-51ce-4f9e-8e8c-b2801bc404e7","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"9e8935cc-151a-45d4-9402-075c298752b7","type":"Circle"},"selection_glyph":null},"id":"6f3f9bf8-6487-4c4f-93b9-d0c5d184c31f","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"562e8b45-b077-458e-a3d2-eb6fde79325c","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee794c36-3c7c-4256-802f-aa1c81c22c6b","type":"BasicTicker"}},"id":"a251e3c8-39bf-49fa-b4ef-14577633b71f","type":"Grid"},{"attributes":{},"id":"1b46d3e6-e47b-44d9-a750-aceec6544c02","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"03f6836e-b7c4-4a04-bb47-d8f3f0abd6e3","type":"BoxAnnotation"},{"attributes":{},"id":"1d42b454-3bb8-453d-b2ed-d16633ff9708","type":"BasicTicker"},{"attributes":{"callback":null},"id":"d3df4865-bb28-485f-95ac-2b5a3e7d5252","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f421e98e-f6ec-4765-af30-46995991067d","type":"PanTool"},{"id":"5cb8995c-a515-4fe9-b772-74cb4651d6c3","type":"WheelZoomTool"},{"id":"0015617a-9a85-4341-b578-cb85fb322bde","type":"BoxZoomTool"},{"id":"4065fd26-d794-4ae9-84e6-b209f4837fc3","type":"SaveTool"},{"id":"ab789dfe-6ecc-4e41-b4bf-6788c178894a","type":"ResetTool"},{"id":"c4acd145-f6c1-4876-b1c1-afd2c6987eec","type":"HelpTool"}]},"id":"a9516e5d-df07-46ae-aa48-977e825863c0","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"65a5b454-28ee-4b7e-bdf1-5e5bf5c04cf6","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Left Title"},"id":"c12047c6-036b-4272-8c11-e622aa9232a2","type":"Title"}],"root_ids":["562e8b45-b077-458e-a3d2-eb6fde79325c"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"47f2148e-a3be-4662-a423-6c884f39d7c9","elementid":"008e4862-5737-4c7d-8535-1077e855d5c0","modelid":"562e8b45-b077-458e-a3d2-eb6fde79325c"}];
              
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