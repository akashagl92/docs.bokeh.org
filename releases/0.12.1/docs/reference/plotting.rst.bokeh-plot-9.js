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
      };var element = document.getElementById("0f91e1d3-2bbe-4926-94a1-4e60e1ac2c34");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0f91e1d3-2bbe-4926-94a1-4e60e1ac2c34' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"b18fee94-8bff-49b7-8026-de6791528a25":{"roots":{"references":[{"attributes":{},"id":"e3422309-106e-46b4-b9b5-803b2d9b9260","type":"ToolEvents"},{"attributes":{"plot":null,"text":null},"id":"ecf1c532-47f9-467e-8e00-5c28991ac55e","type":"Title"},{"attributes":{"callback":null},"id":"edc0b2a4-3f96-43f3-8dab-c4b2d1a2ba44","type":"DataRange1d"},{"attributes":{"below":[{"id":"19eadde7-9b4f-44f5-95d8-e70f4f08b9f2","type":"LinearAxis"}],"left":[{"id":"40a84ebe-5b9f-4644-9554-ceab2e7a1ff6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"19eadde7-9b4f-44f5-95d8-e70f4f08b9f2","type":"LinearAxis"},{"id":"16ab1477-5bec-47df-9962-37a91ccfe428","type":"Grid"},{"id":"40a84ebe-5b9f-4644-9554-ceab2e7a1ff6","type":"LinearAxis"},{"id":"5f1bed58-7f50-4d26-b916-86fd16c9ba7f","type":"Grid"},{"id":"f56ab1c1-fb4d-456c-9c5f-d79000eb38d2","type":"BoxAnnotation"},{"id":"d2c95f54-c277-4cee-915f-1599c89262d2","type":"GlyphRenderer"}],"title":{"id":"ecf1c532-47f9-467e-8e00-5c28991ac55e","type":"Title"},"tool_events":{"id":"e3422309-106e-46b4-b9b5-803b2d9b9260","type":"ToolEvents"},"toolbar":{"id":"0460aa96-1dda-4d85-8cbd-f916e370e8d3","type":"Toolbar"},"x_range":{"id":"edc0b2a4-3f96-43f3-8dab-c4b2d1a2ba44","type":"DataRange1d"},"y_range":{"id":"fbc43958-8f62-45fb-bf42-a47f67231b8f","type":"DataRange1d"}},"id":"2c380e14-46d3-488f-927e-38acaab11f54","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f56ab1c1-fb4d-456c-9c5f-d79000eb38d2","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"bbf20b66-2669-4c03-9170-70c5e7ea2c29","type":"BasicTickFormatter"},"plot":{"id":"2c380e14-46d3-488f-927e-38acaab11f54","subtype":"Figure","type":"Plot"},"ticker":{"id":"e88fc71b-5429-4045-a1ed-21b99689d086","type":"BasicTicker"}},"id":"40a84ebe-5b9f-4644-9554-ceab2e7a1ff6","type":"LinearAxis"},{"attributes":{},"id":"bbf20b66-2669-4c03-9170-70c5e7ea2c29","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"fbc43958-8f62-45fb-bf42-a47f67231b8f","type":"DataRange1d"},{"attributes":{"plot":{"id":"2c380e14-46d3-488f-927e-38acaab11f54","subtype":"Figure","type":"Plot"}},"id":"867ec141-13e1-4c82-93a8-bf01e82221e4","type":"HelpTool"},{"attributes":{"plot":{"id":"2c380e14-46d3-488f-927e-38acaab11f54","subtype":"Figure","type":"Plot"}},"id":"433fbc31-010a-4bd5-ae7b-b534dce7cc57","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"value":0.5},"line_color":{"value":"#CAB2D6"},"right":{"field":"right"},"y":{"field":"y"}},"id":"655c5308-b9b5-460b-95d6-9e0f21d8bfce","type":"HBar"},{"attributes":{"data_source":{"id":"c848fe98-9b2a-4ae0-8f08-70ac039a0015","type":"ColumnDataSource"},"glyph":{"id":"655c5308-b9b5-460b-95d6-9e0f21d8bfce","type":"HBar"},"hover_glyph":null,"nonselection_glyph":{"id":"41dfb147-fcd3-4a08-8464-4fd705cbb6be","type":"HBar"},"selection_glyph":null},"id":"d2c95f54-c277-4cee-915f-1599c89262d2","type":"GlyphRenderer"},{"attributes":{},"id":"e88fc71b-5429-4045-a1ed-21b99689d086","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"2c380e14-46d3-488f-927e-38acaab11f54","subtype":"Figure","type":"Plot"},"ticker":{"id":"e88fc71b-5429-4045-a1ed-21b99689d086","type":"BasicTicker"}},"id":"5f1bed58-7f50-4d26-b916-86fd16c9ba7f","type":"Grid"},{"attributes":{},"id":"66a2a6ce-e96b-4746-993e-bd0afb3982ff","type":"BasicTickFormatter"},{"attributes":{},"id":"a76a8635-ad64-4463-ad07-6a9211a502b7","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":[1,2,3],"y":[1,2,3]}},"id":"c848fe98-9b2a-4ae0-8f08-70ac039a0015","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"2c380e14-46d3-488f-927e-38acaab11f54","subtype":"Figure","type":"Plot"},"ticker":{"id":"a76a8635-ad64-4463-ad07-6a9211a502b7","type":"BasicTicker"}},"id":"16ab1477-5bec-47df-9962-37a91ccfe428","type":"Grid"},{"attributes":{"formatter":{"id":"66a2a6ce-e96b-4746-993e-bd0afb3982ff","type":"BasicTickFormatter"},"plot":{"id":"2c380e14-46d3-488f-927e-38acaab11f54","subtype":"Figure","type":"Plot"},"ticker":{"id":"a76a8635-ad64-4463-ad07-6a9211a502b7","type":"BasicTicker"}},"id":"19eadde7-9b4f-44f5-95d8-e70f4f08b9f2","type":"LinearAxis"},{"attributes":{"plot":{"id":"2c380e14-46d3-488f-927e-38acaab11f54","subtype":"Figure","type":"Plot"}},"id":"ccbcfe26-a588-4847-abdd-238bba58c067","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"41dfb147-fcd3-4a08-8464-4fd705cbb6be","type":"HBar"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ccbcfe26-a588-4847-abdd-238bba58c067","type":"PanTool"},{"id":"433fbc31-010a-4bd5-ae7b-b534dce7cc57","type":"WheelZoomTool"},{"id":"8fd1f2c2-9ae6-4fcc-8fcc-6569a7b00f9b","type":"BoxZoomTool"},{"id":"0c376ba7-ee22-4aa8-8136-4fdc03bd881e","type":"SaveTool"},{"id":"4219e011-4c45-4cd5-b54e-fb4f55e1eef6","type":"ResetTool"},{"id":"867ec141-13e1-4c82-93a8-bf01e82221e4","type":"HelpTool"}]},"id":"0460aa96-1dda-4d85-8cbd-f916e370e8d3","type":"Toolbar"},{"attributes":{"plot":{"id":"2c380e14-46d3-488f-927e-38acaab11f54","subtype":"Figure","type":"Plot"}},"id":"0c376ba7-ee22-4aa8-8136-4fdc03bd881e","type":"SaveTool"},{"attributes":{"overlay":{"id":"f56ab1c1-fb4d-456c-9c5f-d79000eb38d2","type":"BoxAnnotation"},"plot":{"id":"2c380e14-46d3-488f-927e-38acaab11f54","subtype":"Figure","type":"Plot"}},"id":"8fd1f2c2-9ae6-4fcc-8fcc-6569a7b00f9b","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"2c380e14-46d3-488f-927e-38acaab11f54","subtype":"Figure","type":"Plot"}},"id":"4219e011-4c45-4cd5-b54e-fb4f55e1eef6","type":"ResetTool"}],"root_ids":["2c380e14-46d3-488f-927e-38acaab11f54"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"b18fee94-8bff-49b7-8026-de6791528a25","elementid":"0f91e1d3-2bbe-4926-94a1-4e60e1ac2c34","modelid":"2c380e14-46d3-488f-927e-38acaab11f54"}];
              
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