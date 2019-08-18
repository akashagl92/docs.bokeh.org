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
      };var element = document.getElementById("bf6c2e4c-b909-434c-a799-c1c16866fea6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bf6c2e4c-b909-434c-a799-c1c16866fea6' but no matching script tag was found. ")
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
                  var docs_json = {"0182501f-9842-414f-b2ad-b8bb557b1271":{"roots":{"references":[{"attributes":{"formatter":{"id":"e65fdcbc-2b4d-453b-9c04-7a889ef6b422","type":"BasicTickFormatter"},"plot":{"id":"9bbc52e6-ff54-4860-85dd-9f9bf51e4365","subtype":"Figure","type":"Plot"},"ticker":{"id":"71e2d310-e18a-4107-aa95-0e7048772eea","type":"BasicTicker"}},"id":"a8b746be-f64b-447e-b4cc-5605af5f84d5","type":"LinearAxis"},{"attributes":{},"id":"b4b4074b-17b3-4a49-a75b-316d6b170989","type":"ToolEvents"},{"attributes":{"plot":{"id":"9bbc52e6-ff54-4860-85dd-9f9bf51e4365","subtype":"Figure","type":"Plot"}},"id":"f608889c-c038-4d2f-a0be-176e389520f9","type":"ResetTool"},{"attributes":{"data_source":{"id":"d329a47d-b813-4427-adec-7f7aac2b4af5","type":"ColumnDataSource"},"glyph":{"id":"bb72d54c-ab9f-4521-b39b-61b06ba2242e","type":"Patch"},"hover_glyph":null,"nonselection_glyph":{"id":"060e585e-f0d8-4561-b9dc-416a18c731ff","type":"Patch"},"selection_glyph":null},"id":"6c9b0b41-e118-4849-bb35-edabcf3228e9","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,2],"y":[6,7,2,2]}},"id":"d329a47d-b813-4427-adec-7f7aac2b4af5","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"e617050d-315d-4cde-b844-a2553bb29a39","type":"BasicTickFormatter"},"plot":{"id":"9bbc52e6-ff54-4860-85dd-9f9bf51e4365","subtype":"Figure","type":"Plot"},"ticker":{"id":"f6ad011d-48b4-4e4b-afd2-7bae52057f2b","type":"BasicTicker"}},"id":"487ffcad-a62a-44f5-b240-806e36d4d353","type":"LinearAxis"},{"attributes":{"plot":{"id":"9bbc52e6-ff54-4860-85dd-9f9bf51e4365","subtype":"Figure","type":"Plot"}},"id":"4808b6ac-8670-4095-9252-5675149d1dc9","type":"SaveTool"},{"attributes":{"plot":null,"text":null},"id":"62b23b17-ed86-4b50-9ec8-9b680945be98","type":"Title"},{"attributes":{},"id":"e65fdcbc-2b4d-453b-9c04-7a889ef6b422","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11f2a7d1-1851-4958-9694-ae13747b33bf","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"106a22b6-7795-4a0f-9da9-9fbedf272599","type":"PanTool"},{"id":"4a35bda0-f378-4189-b0df-9f6ac035d6dc","type":"WheelZoomTool"},{"id":"b1013ff0-0b1a-484e-9fa6-c352a5149b32","type":"BoxZoomTool"},{"id":"4808b6ac-8670-4095-9252-5675149d1dc9","type":"SaveTool"},{"id":"f608889c-c038-4d2f-a0be-176e389520f9","type":"ResetTool"},{"id":"0185f3ce-e41c-4f8b-8ae2-013e710e2020","type":"HelpTool"}]},"id":"dc619d8a-9ad6-42c9-a4f5-631d4f46405b","type":"Toolbar"},{"attributes":{"plot":{"id":"9bbc52e6-ff54-4860-85dd-9f9bf51e4365","subtype":"Figure","type":"Plot"}},"id":"0185f3ce-e41c-4f8b-8ae2-013e710e2020","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"060e585e-f0d8-4561-b9dc-416a18c731ff","type":"Patch"},{"attributes":{"plot":{"id":"9bbc52e6-ff54-4860-85dd-9f9bf51e4365","subtype":"Figure","type":"Plot"}},"id":"4a35bda0-f378-4189-b0df-9f6ac035d6dc","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"9bbc52e6-ff54-4860-85dd-9f9bf51e4365","subtype":"Figure","type":"Plot"}},"id":"106a22b6-7795-4a0f-9da9-9fbedf272599","type":"PanTool"},{"attributes":{},"id":"f6ad011d-48b4-4e4b-afd2-7bae52057f2b","type":"BasicTicker"},{"attributes":{"callback":null},"id":"1963255b-9112-45aa-a62f-0347eb7eaedc","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#99d8c9"},"line_color":{"value":"#99d8c9"},"x":{"field":"x"},"y":{"field":"y"}},"id":"bb72d54c-ab9f-4521-b39b-61b06ba2242e","type":"Patch"},{"attributes":{},"id":"e617050d-315d-4cde-b844-a2553bb29a39","type":"BasicTickFormatter"},{"attributes":{},"id":"71e2d310-e18a-4107-aa95-0e7048772eea","type":"BasicTicker"},{"attributes":{"overlay":{"id":"11f2a7d1-1851-4958-9694-ae13747b33bf","type":"BoxAnnotation"},"plot":{"id":"9bbc52e6-ff54-4860-85dd-9f9bf51e4365","subtype":"Figure","type":"Plot"}},"id":"b1013ff0-0b1a-484e-9fa6-c352a5149b32","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"12ae91b7-ec6a-403c-a23c-541424d0c046","type":"DataRange1d"},{"attributes":{"plot":{"id":"9bbc52e6-ff54-4860-85dd-9f9bf51e4365","subtype":"Figure","type":"Plot"},"ticker":{"id":"f6ad011d-48b4-4e4b-afd2-7bae52057f2b","type":"BasicTicker"}},"id":"c70021b0-ab53-48dc-ab69-5668af1623a5","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"9bbc52e6-ff54-4860-85dd-9f9bf51e4365","subtype":"Figure","type":"Plot"},"ticker":{"id":"71e2d310-e18a-4107-aa95-0e7048772eea","type":"BasicTicker"}},"id":"02586535-d871-49da-877b-b3765b8f2bf2","type":"Grid"},{"attributes":{"below":[{"id":"487ffcad-a62a-44f5-b240-806e36d4d353","type":"LinearAxis"}],"left":[{"id":"a8b746be-f64b-447e-b4cc-5605af5f84d5","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"487ffcad-a62a-44f5-b240-806e36d4d353","type":"LinearAxis"},{"id":"c70021b0-ab53-48dc-ab69-5668af1623a5","type":"Grid"},{"id":"a8b746be-f64b-447e-b4cc-5605af5f84d5","type":"LinearAxis"},{"id":"02586535-d871-49da-877b-b3765b8f2bf2","type":"Grid"},{"id":"11f2a7d1-1851-4958-9694-ae13747b33bf","type":"BoxAnnotation"},{"id":"6c9b0b41-e118-4849-bb35-edabcf3228e9","type":"GlyphRenderer"}],"title":{"id":"62b23b17-ed86-4b50-9ec8-9b680945be98","type":"Title"},"tool_events":{"id":"b4b4074b-17b3-4a49-a75b-316d6b170989","type":"ToolEvents"},"toolbar":{"id":"dc619d8a-9ad6-42c9-a4f5-631d4f46405b","type":"Toolbar"},"x_range":{"id":"12ae91b7-ec6a-403c-a23c-541424d0c046","type":"DataRange1d"},"y_range":{"id":"1963255b-9112-45aa-a62f-0347eb7eaedc","type":"DataRange1d"}},"id":"9bbc52e6-ff54-4860-85dd-9f9bf51e4365","subtype":"Figure","type":"Plot"}],"root_ids":["9bbc52e6-ff54-4860-85dd-9f9bf51e4365"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"0182501f-9842-414f-b2ad-b8bb557b1271","elementid":"bf6c2e4c-b909-434c-a799-c1c16866fea6","modelid":"9bbc52e6-ff54-4860-85dd-9f9bf51e4365"}];
                  
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