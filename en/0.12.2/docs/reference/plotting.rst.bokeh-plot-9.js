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
      };var element = document.getElementById("ea1a1a14-d62c-41db-8bbd-f59efbb3e800");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ea1a1a14-d62c-41db-8bbd-f59efbb3e800' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"0432aacb-377e-4221-a15d-1e9977eee82a":{"roots":{"references":[{"attributes":{"below":[{"id":"637b4c4b-fc91-47e6-87eb-465230b9c473","type":"LinearAxis"}],"left":[{"id":"af5cc9d0-26a3-413c-8e57-6dc80c769866","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"637b4c4b-fc91-47e6-87eb-465230b9c473","type":"LinearAxis"},{"id":"65bd20cc-6618-4bd1-b1ef-6ac3827a7203","type":"Grid"},{"id":"af5cc9d0-26a3-413c-8e57-6dc80c769866","type":"LinearAxis"},{"id":"5dcac958-f5da-4dba-97aa-9d93242347f2","type":"Grid"},{"id":"a3d028cc-57d0-461e-95a3-73976979268a","type":"BoxAnnotation"},{"id":"afe236e5-2780-45ac-bbdd-01531dc08c30","type":"GlyphRenderer"}],"title":{"id":"33e8a4f4-1ee8-46b3-8d69-88c6b0151d5d","type":"Title"},"tool_events":{"id":"8e6a8034-13e8-4d2b-a400-d579c1c9297d","type":"ToolEvents"},"toolbar":{"id":"6c97d25a-4d1b-4968-94f7-c2f654fbfd47","type":"Toolbar"},"x_range":{"id":"cae5a782-d4ea-4993-8764-e55942d6c635","type":"DataRange1d"},"y_range":{"id":"136adcf3-fdc2-44f2-98f6-db1ba7cabb0c","type":"DataRange1d"}},"id":"c866ba6e-73f2-405d-bb12-5eb3f2524b1f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"89afc4c4-40d1-4d38-94d4-6bb53a599ae4","type":"BasicTickFormatter"},{"attributes":{},"id":"8e6a8034-13e8-4d2b-a400-d579c1c9297d","type":"ToolEvents"},{"attributes":{},"id":"dd89b699-95e4-4158-970d-7043b034581e","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":[1,2,3],"y":[1,2,3]}},"id":"f50967c6-8e93-48f8-8d67-9edb9c786b1c","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"cae5a782-d4ea-4993-8764-e55942d6c635","type":"DataRange1d"},{"attributes":{"plot":{"id":"c866ba6e-73f2-405d-bb12-5eb3f2524b1f","subtype":"Figure","type":"Plot"}},"id":"2cd6f45d-752b-490d-8f31-eb3dc18385e2","type":"HelpTool"},{"attributes":{"plot":{"id":"c866ba6e-73f2-405d-bb12-5eb3f2524b1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"dd89b699-95e4-4158-970d-7043b034581e","type":"BasicTicker"}},"id":"65bd20cc-6618-4bd1-b1ef-6ac3827a7203","type":"Grid"},{"attributes":{},"id":"6230821e-de10-40ab-ae25-05bff8632329","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"c866ba6e-73f2-405d-bb12-5eb3f2524b1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"a942b5bb-3def-45c2-bdfc-50eca04e7b7d","type":"BasicTicker"}},"id":"5dcac958-f5da-4dba-97aa-9d93242347f2","type":"Grid"},{"attributes":{"formatter":{"id":"89afc4c4-40d1-4d38-94d4-6bb53a599ae4","type":"BasicTickFormatter"},"plot":{"id":"c866ba6e-73f2-405d-bb12-5eb3f2524b1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"a942b5bb-3def-45c2-bdfc-50eca04e7b7d","type":"BasicTicker"}},"id":"af5cc9d0-26a3-413c-8e57-6dc80c769866","type":"LinearAxis"},{"attributes":{"callback":null},"id":"136adcf3-fdc2-44f2-98f6-db1ba7cabb0c","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"e021996e-42cd-4c21-be8b-43fddf0d7778","type":"HBar"},{"attributes":{"plot":{"id":"c866ba6e-73f2-405d-bb12-5eb3f2524b1f","subtype":"Figure","type":"Plot"}},"id":"08e4ef41-9c9b-49f6-963b-24d13076ded5","type":"PanTool"},{"attributes":{"plot":{"id":"c866ba6e-73f2-405d-bb12-5eb3f2524b1f","subtype":"Figure","type":"Plot"}},"id":"b21a9ee1-bde0-41e8-ac61-92e3a4db53e8","type":"SaveTool"},{"attributes":{"plot":{"id":"c866ba6e-73f2-405d-bb12-5eb3f2524b1f","subtype":"Figure","type":"Plot"}},"id":"fd9fbd5e-2e3b-4e72-8c1e-8cdf37fd35d0","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"value":0.5},"line_color":{"value":"#CAB2D6"},"right":{"field":"right"},"y":{"field":"y"}},"id":"c06e93e7-6a84-4c7f-9372-67001d026efb","type":"HBar"},{"attributes":{"plot":{"id":"c866ba6e-73f2-405d-bb12-5eb3f2524b1f","subtype":"Figure","type":"Plot"}},"id":"9f939710-49f1-470d-86e2-a91d24815c1f","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a3d028cc-57d0-461e-95a3-73976979268a","type":"BoxAnnotation"},{"attributes":{},"id":"a942b5bb-3def-45c2-bdfc-50eca04e7b7d","type":"BasicTicker"},{"attributes":{"data_source":{"id":"f50967c6-8e93-48f8-8d67-9edb9c786b1c","type":"ColumnDataSource"},"glyph":{"id":"c06e93e7-6a84-4c7f-9372-67001d026efb","type":"HBar"},"hover_glyph":null,"nonselection_glyph":{"id":"e021996e-42cd-4c21-be8b-43fddf0d7778","type":"HBar"},"selection_glyph":null},"id":"afe236e5-2780-45ac-bbdd-01531dc08c30","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":null},"id":"33e8a4f4-1ee8-46b3-8d69-88c6b0151d5d","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"08e4ef41-9c9b-49f6-963b-24d13076ded5","type":"PanTool"},{"id":"9f939710-49f1-470d-86e2-a91d24815c1f","type":"WheelZoomTool"},{"id":"77c54e2f-0920-410d-a21e-3c14b787191e","type":"BoxZoomTool"},{"id":"b21a9ee1-bde0-41e8-ac61-92e3a4db53e8","type":"SaveTool"},{"id":"fd9fbd5e-2e3b-4e72-8c1e-8cdf37fd35d0","type":"ResetTool"},{"id":"2cd6f45d-752b-490d-8f31-eb3dc18385e2","type":"HelpTool"}]},"id":"6c97d25a-4d1b-4968-94f7-c2f654fbfd47","type":"Toolbar"},{"attributes":{"formatter":{"id":"6230821e-de10-40ab-ae25-05bff8632329","type":"BasicTickFormatter"},"plot":{"id":"c866ba6e-73f2-405d-bb12-5eb3f2524b1f","subtype":"Figure","type":"Plot"},"ticker":{"id":"dd89b699-95e4-4158-970d-7043b034581e","type":"BasicTicker"}},"id":"637b4c4b-fc91-47e6-87eb-465230b9c473","type":"LinearAxis"},{"attributes":{"overlay":{"id":"a3d028cc-57d0-461e-95a3-73976979268a","type":"BoxAnnotation"},"plot":{"id":"c866ba6e-73f2-405d-bb12-5eb3f2524b1f","subtype":"Figure","type":"Plot"}},"id":"77c54e2f-0920-410d-a21e-3c14b787191e","type":"BoxZoomTool"}],"root_ids":["c866ba6e-73f2-405d-bb12-5eb3f2524b1f"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"0432aacb-377e-4221-a15d-1e9977eee82a","elementid":"ea1a1a14-d62c-41db-8bbd-f59efbb3e800","modelid":"c866ba6e-73f2-405d-bb12-5eb3f2524b1f"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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