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
      };var element = document.getElementById("dfafcb49-ad13-4a58-b1ce-cafc3f1a3358");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dfafcb49-ad13-4a58-b1ce-cafc3f1a3358' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"df16a33f-0280-4fa9-9603-8a08b5405b70":{"roots":{"references":[{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"6b4ab409-82af-49ee-8028-25c98d2e1f5d","type":"Segment"},{"attributes":{},"id":"a00485ef-9204-49d1-a53f-093ff5ed543b","type":"ToolEvents"},{"attributes":{"plot":{"id":"dfc3c281-6ac1-4784-a36a-89afa49b5b3b","subtype":"Figure","type":"Plot"}},"id":"a409a898-f601-4861-a3f7-4ba0ecf14d7d","type":"ResetTool"},{"attributes":{},"id":"d730025e-a9d4-4b73-b0ba-280564a11356","type":"BasicTicker"},{"attributes":{},"id":"fd5b76e9-07e7-49ef-af84-b4e512062ec5","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"99721418-c0a0-41c9-a050-9b5b46a23dc5","type":"Segment"},{"attributes":{"formatter":{"id":"d6b7c0ab-99a5-4f2d-b244-9c9207fb786d","type":"BasicTickFormatter"},"plot":{"id":"dfc3c281-6ac1-4784-a36a-89afa49b5b3b","subtype":"Figure","type":"Plot"},"ticker":{"id":"9bbafff3-e80f-4d2f-9917-df5bfcaada32","type":"BasicTicker"}},"id":"d0519d87-548a-4c7f-9015-e032da8e9b02","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y1","y0","x0","x1"],"data":{"x0":[1,2,3],"x1":[1,2,3],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"7bdac633-29ee-42af-bf55-4777c2785700","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7bdac633-29ee-42af-bf55-4777c2785700","type":"ColumnDataSource"},"glyph":{"id":"6b4ab409-82af-49ee-8028-25c98d2e1f5d","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"99721418-c0a0-41c9-a050-9b5b46a23dc5","type":"Segment"},"selection_glyph":null},"id":"4bb9e065-635d-4b6b-aa1e-4396be9f2eef","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"dd47aac2-8076-4b59-a92f-8f84df5ee5da","type":"DataRange1d"},{"attributes":{"callback":null},"id":"1da25d1d-380c-4189-88a3-f3cc770267d8","type":"DataRange1d"},{"attributes":{"formatter":{"id":"fd5b76e9-07e7-49ef-af84-b4e512062ec5","type":"BasicTickFormatter"},"plot":{"id":"dfc3c281-6ac1-4784-a36a-89afa49b5b3b","subtype":"Figure","type":"Plot"},"ticker":{"id":"d730025e-a9d4-4b73-b0ba-280564a11356","type":"BasicTicker"}},"id":"c973125e-03dc-4bfd-b6ab-dc411f659ea2","type":"LinearAxis"},{"attributes":{},"id":"9bbafff3-e80f-4d2f-9917-df5bfcaada32","type":"BasicTicker"},{"attributes":{"plot":{"id":"dfc3c281-6ac1-4784-a36a-89afa49b5b3b","subtype":"Figure","type":"Plot"}},"id":"db65c907-0a33-4f72-9c8f-44648cb6cd0b","type":"PanTool"},{"attributes":{"plot":null,"text":null},"id":"910477c5-9b67-43e1-a306-25e785ec82be","type":"Title"},{"attributes":{"plot":{"id":"dfc3c281-6ac1-4784-a36a-89afa49b5b3b","subtype":"Figure","type":"Plot"}},"id":"39f69904-752e-43ab-9b4e-2fd653bbe608","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"db65c907-0a33-4f72-9c8f-44648cb6cd0b","type":"PanTool"},{"id":"ef6a4d9c-d40f-4710-afb5-b823f1784004","type":"WheelZoomTool"},{"id":"fdd18a1f-0270-409c-9c6f-6fb1fce1eb28","type":"BoxZoomTool"},{"id":"39f69904-752e-43ab-9b4e-2fd653bbe608","type":"SaveTool"},{"id":"a409a898-f601-4861-a3f7-4ba0ecf14d7d","type":"ResetTool"},{"id":"f4bf08cb-a18f-4433-9ea1-e73025f5ee1c","type":"HelpTool"}]},"id":"802875ae-b7f4-4fff-b844-879d9f7813f4","type":"Toolbar"},{"attributes":{"plot":{"id":"dfc3c281-6ac1-4784-a36a-89afa49b5b3b","subtype":"Figure","type":"Plot"},"ticker":{"id":"d730025e-a9d4-4b73-b0ba-280564a11356","type":"BasicTicker"}},"id":"c1c30e85-69df-4fbc-be96-b251e5679d6f","type":"Grid"},{"attributes":{"overlay":{"id":"a1369165-9c8d-413d-b661-456d5db3379a","type":"BoxAnnotation"},"plot":{"id":"dfc3c281-6ac1-4784-a36a-89afa49b5b3b","subtype":"Figure","type":"Plot"}},"id":"fdd18a1f-0270-409c-9c6f-6fb1fce1eb28","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a1369165-9c8d-413d-b661-456d5db3379a","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"dfc3c281-6ac1-4784-a36a-89afa49b5b3b","subtype":"Figure","type":"Plot"}},"id":"f4bf08cb-a18f-4433-9ea1-e73025f5ee1c","type":"HelpTool"},{"attributes":{},"id":"d6b7c0ab-99a5-4f2d-b244-9c9207fb786d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"dfc3c281-6ac1-4784-a36a-89afa49b5b3b","subtype":"Figure","type":"Plot"}},"id":"ef6a4d9c-d40f-4710-afb5-b823f1784004","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"c973125e-03dc-4bfd-b6ab-dc411f659ea2","type":"LinearAxis"}],"left":[{"id":"d0519d87-548a-4c7f-9015-e032da8e9b02","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c973125e-03dc-4bfd-b6ab-dc411f659ea2","type":"LinearAxis"},{"id":"c1c30e85-69df-4fbc-be96-b251e5679d6f","type":"Grid"},{"id":"d0519d87-548a-4c7f-9015-e032da8e9b02","type":"LinearAxis"},{"id":"1e78a081-2d61-4f3d-8746-0162a7cc6a09","type":"Grid"},{"id":"a1369165-9c8d-413d-b661-456d5db3379a","type":"BoxAnnotation"},{"id":"4bb9e065-635d-4b6b-aa1e-4396be9f2eef","type":"GlyphRenderer"}],"title":{"id":"910477c5-9b67-43e1-a306-25e785ec82be","type":"Title"},"tool_events":{"id":"a00485ef-9204-49d1-a53f-093ff5ed543b","type":"ToolEvents"},"toolbar":{"id":"802875ae-b7f4-4fff-b844-879d9f7813f4","type":"Toolbar"},"x_range":{"id":"dd47aac2-8076-4b59-a92f-8f84df5ee5da","type":"DataRange1d"},"y_range":{"id":"1da25d1d-380c-4189-88a3-f3cc770267d8","type":"DataRange1d"}},"id":"dfc3c281-6ac1-4784-a36a-89afa49b5b3b","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"dfc3c281-6ac1-4784-a36a-89afa49b5b3b","subtype":"Figure","type":"Plot"},"ticker":{"id":"9bbafff3-e80f-4d2f-9917-df5bfcaada32","type":"BasicTicker"}},"id":"1e78a081-2d61-4f3d-8746-0162a7cc6a09","type":"Grid"}],"root_ids":["dfc3c281-6ac1-4784-a36a-89afa49b5b3b"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"df16a33f-0280-4fa9-9603-8a08b5405b70","elementid":"dfafcb49-ad13-4a58-b1ce-cafc3f1a3358","modelid":"dfc3c281-6ac1-4784-a36a-89afa49b5b3b"}];
              
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