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
      };var element = document.getElementById("88ece9ea-9af2-4ed9-be8f-30b83742bb42");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '88ece9ea-9af2-4ed9-be8f-30b83742bb42' but no matching script tag was found. ")
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
                  var docs_json = {"680dd605-0de0-45b3-89a6-b258956db076":{"roots":{"references":[{"attributes":{},"id":"a361d6db-60bc-40e8-bf29-3f6b3e78386d","type":"BasicTicker"},{"attributes":{},"id":"e0d12f9f-b4a4-4587-b9c2-3c94f1266400","type":"BasicTickFormatter"},{"attributes":{},"id":"a8661886-d155-4d3b-8ec6-65a3c04eca93","type":"ToolEvents"},{"attributes":{"plot":{"id":"b5e33b7d-ecba-47cc-b382-bfe69cc19ef6","subtype":"Figure","type":"Plot"}},"id":"2b9fd0a0-1b11-4692-83b0-a3ff6b434b84","type":"HelpTool"},{"attributes":{"below":[{"id":"793a928d-e40c-40a3-abc3-99f148d55179","type":"LinearAxis"}],"left":[{"id":"a65d343d-0149-4e5e-9034-427b3414a6a2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"793a928d-e40c-40a3-abc3-99f148d55179","type":"LinearAxis"},{"id":"b35a6264-f560-4f4d-a27b-69f8e1d5ceed","type":"Grid"},{"id":"a65d343d-0149-4e5e-9034-427b3414a6a2","type":"LinearAxis"},{"id":"2236c0ed-f83f-4d3f-8c45-f6986507396a","type":"Grid"},{"id":"968e1735-1975-48e3-8950-26c64b2a3c59","type":"BoxAnnotation"},{"id":"1d579e6b-5f6d-4e98-93ed-3dc332ef69bc","type":"GlyphRenderer"}],"title":{"id":"16d258c7-9467-49cd-8da5-eb2a2de18673","type":"Title"},"tool_events":{"id":"a8661886-d155-4d3b-8ec6-65a3c04eca93","type":"ToolEvents"},"toolbar":{"id":"f48dcebd-9e4a-4f12-add1-635af4f15835","type":"Toolbar"},"x_range":{"id":"a111b28c-41d5-4ffd-8831-d489a8036886","type":"DataRange1d"},"y_range":{"id":"a0233d76-63b4-4b22-812c-6463f60e729b","type":"DataRange1d"}},"id":"b5e33b7d-ecba-47cc-b382-bfe69cc19ef6","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"a0233d76-63b4-4b22-812c-6463f60e729b","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"968e1735-1975-48e3-8950-26c64b2a3c59","type":"BoxAnnotation"},{"attributes":{},"id":"a316cef1-b8e4-4390-ad15-96420e65a95c","type":"BasicTicker"},{"attributes":{"plot":{"id":"b5e33b7d-ecba-47cc-b382-bfe69cc19ef6","subtype":"Figure","type":"Plot"}},"id":"7627e824-a1e9-4716-8ef8-da1ce7404831","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"9b449e30-5e24-458a-90a5-4abfb986137d","type":"Circle"},{"attributes":{"plot":{"id":"b5e33b7d-ecba-47cc-b382-bfe69cc19ef6","subtype":"Figure","type":"Plot"}},"id":"a3fb165b-0962-4291-a2f9-50ace8b14d26","type":"PanTool"},{"attributes":{"plot":{"id":"b5e33b7d-ecba-47cc-b382-bfe69cc19ef6","subtype":"Figure","type":"Plot"},"ticker":{"id":"a316cef1-b8e4-4390-ad15-96420e65a95c","type":"BasicTicker"}},"id":"b35a6264-f560-4f4d-a27b-69f8e1d5ceed","type":"Grid"},{"attributes":{},"id":"24cbd4f7-a808-46cb-9d82-df5d9b60737c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b5e33b7d-ecba-47cc-b382-bfe69cc19ef6","subtype":"Figure","type":"Plot"}},"id":"5023aac5-2e04-4897-b7bf-dfd5fb87fb05","type":"ResetTool"},{"attributes":{"overlay":{"id":"968e1735-1975-48e3-8950-26c64b2a3c59","type":"BoxAnnotation"},"plot":{"id":"b5e33b7d-ecba-47cc-b382-bfe69cc19ef6","subtype":"Figure","type":"Plot"}},"id":"29a38e9e-5c2c-4097-a411-eb6785c45257","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"b5e33b7d-ecba-47cc-b382-bfe69cc19ef6","subtype":"Figure","type":"Plot"}},"id":"81bfdf7b-bf42-4a48-8371-08f5d1a4a177","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":null},"id":"16d258c7-9467-49cd-8da5-eb2a2de18673","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"b5e33b7d-ecba-47cc-b382-bfe69cc19ef6","subtype":"Figure","type":"Plot"},"ticker":{"id":"a361d6db-60bc-40e8-bf29-3f6b3e78386d","type":"BasicTicker"}},"id":"2236c0ed-f83f-4d3f-8c45-f6986507396a","type":"Grid"},{"attributes":{"formatter":{"id":"24cbd4f7-a808-46cb-9d82-df5d9b60737c","type":"BasicTickFormatter"},"plot":{"id":"b5e33b7d-ecba-47cc-b382-bfe69cc19ef6","subtype":"Figure","type":"Plot"},"ticker":{"id":"a316cef1-b8e4-4390-ad15-96420e65a95c","type":"BasicTicker"}},"id":"793a928d-e40c-40a3-abc3-99f148d55179","type":"LinearAxis"},{"attributes":{"callback":null},"id":"a111b28c-41d5-4ffd-8831-d489a8036886","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"18292451-a5fa-4e11-92b1-c6c5a2f5d869","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a3fb165b-0962-4291-a2f9-50ace8b14d26","type":"PanTool"},{"id":"81bfdf7b-bf42-4a48-8371-08f5d1a4a177","type":"WheelZoomTool"},{"id":"29a38e9e-5c2c-4097-a411-eb6785c45257","type":"BoxZoomTool"},{"id":"7627e824-a1e9-4716-8ef8-da1ce7404831","type":"SaveTool"},{"id":"5023aac5-2e04-4897-b7bf-dfd5fb87fb05","type":"ResetTool"},{"id":"2b9fd0a0-1b11-4692-83b0-a3ff6b434b84","type":"HelpTool"}]},"id":"f48dcebd-9e4a-4f12-add1-635af4f15835","type":"Toolbar"},{"attributes":{"data_source":{"id":"4744fe09-4f9a-425f-ab83-e2b30648ee6a","type":"ColumnDataSource"},"glyph":{"id":"9b449e30-5e24-458a-90a5-4abfb986137d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"18292451-a5fa-4e11-92b1-c6c5a2f5d869","type":"Circle"},"selection_glyph":null},"id":"1d579e6b-5f6d-4e98-93ed-3dc332ef69bc","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"4744fe09-4f9a-425f-ab83-e2b30648ee6a","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"e0d12f9f-b4a4-4587-b9c2-3c94f1266400","type":"BasicTickFormatter"},"plot":{"id":"b5e33b7d-ecba-47cc-b382-bfe69cc19ef6","subtype":"Figure","type":"Plot"},"ticker":{"id":"a361d6db-60bc-40e8-bf29-3f6b3e78386d","type":"BasicTicker"}},"id":"a65d343d-0149-4e5e-9034-427b3414a6a2","type":"LinearAxis"}],"root_ids":["b5e33b7d-ecba-47cc-b382-bfe69cc19ef6"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"680dd605-0de0-45b3-89a6-b258956db076","elementid":"88ece9ea-9af2-4ed9-be8f-30b83742bb42","modelid":"b5e33b7d-ecba-47cc-b382-bfe69cc19ef6"}];
                  
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