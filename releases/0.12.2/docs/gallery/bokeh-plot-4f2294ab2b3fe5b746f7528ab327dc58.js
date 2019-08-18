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
      };var element = document.getElementById("4ac03878-3775-4dab-acdd-e9739834f78d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4ac03878-3775-4dab-acdd-e9739834f78d' but no matching script tag was found. ")
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
                  var docs_json = {"63760865-33b7-4976-86d1-43be720b646c":{"roots":{"references":[{"attributes":{"axis_label":"Petal Width","formatter":{"id":"8b1a65e7-8b69-4398-a044-4b375255482d","type":"BasicTickFormatter"},"plot":{"id":"360132a2-401e-4c82-a04e-a508601e4da0","subtype":"Figure","type":"Plot"},"ticker":{"id":"14980737-4eec-4147-ad2f-af5809e38f10","type":"BasicTicker"}},"id":"7b52dd05-cea0-4d55-8156-33a5253603e2","type":"LinearAxis"},{"attributes":{},"id":"8b1a65e7-8b69-4398-a044-4b375255482d","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"44a5393f-9339-46dd-ab71-bb6649eca234","type":"BoxAnnotation"},{"attributes":{"axis_label":"Petal Length","formatter":{"id":"05941d82-aa28-42ef-a381-86ed32f93f76","type":"BasicTickFormatter"},"plot":{"id":"360132a2-401e-4c82-a04e-a508601e4da0","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e6a8fa4-7d30-4081-a158-07c908a41d37","type":"BasicTicker"}},"id":"7cd74251-e90c-45e3-8f84-c7956729d1f7","type":"LinearAxis"},{"attributes":{},"id":"1e6a8fa4-7d30-4081-a158-07c908a41d37","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0005d278-89a6-4086-b68d-b0cfaa2f86b2","type":"Circle"},{"attributes":{},"id":"05941d82-aa28-42ef-a381-86ed32f93f76","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"360132a2-401e-4c82-a04e-a508601e4da0","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e6a8fa4-7d30-4081-a158-07c908a41d37","type":"BasicTicker"}},"id":"d239e4dc-e080-4463-8af7-82d95a1e7ead","type":"Grid"},{"attributes":{"plot":{"id":"360132a2-401e-4c82-a04e-a508601e4da0","subtype":"Figure","type":"Plot"}},"id":"7a1c8a94-e9be-4a19-847f-1c730fba2f20","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"69cd1168-3ea9-4a6f-9783-741a81151274","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"360132a2-401e-4c82-a04e-a508601e4da0","subtype":"Figure","type":"Plot"},"ticker":{"id":"14980737-4eec-4147-ad2f-af5809e38f10","type":"BasicTicker"}},"id":"0b58f716-04be-4e3f-a703-8da66c887974","type":"Grid"},{"attributes":{},"id":"14980737-4eec-4147-ad2f-af5809e38f10","type":"BasicTicker"},{"attributes":{"plot":{"id":"360132a2-401e-4c82-a04e-a508601e4da0","subtype":"Figure","type":"Plot"}},"id":"bf8ce029-74ae-4239-aaa2-42d83248309b","type":"PanTool"},{"attributes":{},"id":"adffa2fb-1b54-44e3-ae34-73d15e073a34","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","line_color","fill_color"],"data":{"fill_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"line_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"x":[1.4,1.4,1.3,1.5,1.4,1.7,1.4,1.5,1.4,1.5,1.5,1.6,1.4,1.1,1.2,1.5,1.3,1.4,1.7,1.5,1.7,1.5,1.0,1.7,1.9,1.6,1.6,1.5,1.4,1.6,1.6,1.5,1.5,1.4,1.5,1.2,1.3,1.4,1.3,1.5,1.3,1.3,1.3,1.6,1.9,1.4,1.6,1.4,1.5,1.4,4.7,4.5,4.9,4.0,4.6,4.5,4.7,3.3,4.6,3.9,3.5,4.2,4.0,4.7,3.6,4.4,4.5,4.1,4.5,3.9,4.8,4.0,4.9,4.7,4.3,4.4,4.8,5.0,4.5,3.5,3.8,3.7,3.9,5.1,4.5,4.5,4.7,4.4,4.1,4.0,4.4,4.6,4.0,3.3,4.2,4.2,4.2,4.3,3.0,4.1,6.0,5.1,5.9,5.6,5.8,6.6,4.5,6.3,5.8,6.1,5.1,5.3,5.5,5.0,5.1,5.3,5.5,6.7,6.9,5.0,5.7,4.9,6.7,4.9,5.7,6.0,4.8,4.9,5.6,5.8,6.1,6.4,5.6,5.1,5.6,6.1,5.6,5.5,4.8,5.4,5.6,5.1,5.1,5.9,5.7,5.2,5.0,5.2,5.4,5.1],"y":[0.2,0.2,0.2,0.2,0.2,0.4,0.3,0.2,0.2,0.1,0.2,0.2,0.1,0.1,0.2,0.4,0.4,0.3,0.3,0.3,0.2,0.4,0.2,0.5,0.2,0.2,0.4,0.2,0.2,0.2,0.2,0.4,0.1,0.2,0.2,0.2,0.2,0.1,0.2,0.2,0.3,0.3,0.2,0.6,0.4,0.3,0.2,0.2,0.2,0.2,1.4,1.5,1.5,1.3,1.5,1.3,1.6,1.0,1.3,1.4,1.0,1.5,1.0,1.4,1.3,1.4,1.5,1.0,1.5,1.1,1.8,1.3,1.5,1.2,1.3,1.4,1.4,1.7,1.5,1.0,1.1,1.0,1.2,1.6,1.5,1.6,1.5,1.3,1.3,1.3,1.2,1.4,1.2,1.0,1.3,1.2,1.3,1.3,1.1,1.3,2.5,1.9,2.1,1.8,2.2,2.1,1.7,1.8,1.8,2.5,2.0,1.9,2.1,2.0,2.4,2.3,1.8,2.2,2.3,1.5,2.3,2.0,2.0,1.8,2.1,1.8,1.8,1.8,2.1,1.6,1.9,2.0,2.2,1.5,1.4,2.3,2.4,1.8,1.8,2.1,2.4,2.3,1.9,2.3,2.5,2.3,1.9,2.0,2.3,1.8]}},"id":"d962b450-1d60-4273-b6be-67c2c9d5bf97","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d962b450-1d60-4273-b6be-67c2c9d5bf97","type":"ColumnDataSource"},"glyph":{"id":"0005d278-89a6-4086-b68d-b0cfaa2f86b2","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"69cd1168-3ea9-4a6f-9783-741a81151274","type":"Circle"},"selection_glyph":null},"id":"e6e854cf-cb3b-43f3-ba5a-e2b142fbc39d","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bf8ce029-74ae-4239-aaa2-42d83248309b","type":"PanTool"},{"id":"7a1c8a94-e9be-4a19-847f-1c730fba2f20","type":"WheelZoomTool"},{"id":"8decd1da-4a76-412a-ac0c-88c188f04784","type":"BoxZoomTool"},{"id":"c23b5ffa-8d80-4076-91c2-f3aa36b7a7f5","type":"SaveTool"},{"id":"2e264a6e-c4b4-43c7-aadd-7cbeeb915b1d","type":"ResetTool"},{"id":"048be363-08b6-4b42-8c62-537ff541975f","type":"HelpTool"}]},"id":"b551ee1c-4160-493a-aba2-7a29c7229618","type":"Toolbar"},{"attributes":{"plot":null,"text":"Iris Morphology"},"id":"f989b6e1-4918-465f-8d3f-7f9728127f2e","type":"Title"},{"attributes":{"callback":null},"id":"186d2232-669d-462f-8b42-c8986b4e32a4","type":"DataRange1d"},{"attributes":{"plot":{"id":"360132a2-401e-4c82-a04e-a508601e4da0","subtype":"Figure","type":"Plot"}},"id":"048be363-08b6-4b42-8c62-537ff541975f","type":"HelpTool"},{"attributes":{"below":[{"id":"7cd74251-e90c-45e3-8f84-c7956729d1f7","type":"LinearAxis"}],"left":[{"id":"7b52dd05-cea0-4d55-8156-33a5253603e2","type":"LinearAxis"}],"renderers":[{"id":"7cd74251-e90c-45e3-8f84-c7956729d1f7","type":"LinearAxis"},{"id":"d239e4dc-e080-4463-8af7-82d95a1e7ead","type":"Grid"},{"id":"7b52dd05-cea0-4d55-8156-33a5253603e2","type":"LinearAxis"},{"id":"0b58f716-04be-4e3f-a703-8da66c887974","type":"Grid"},{"id":"44a5393f-9339-46dd-ab71-bb6649eca234","type":"BoxAnnotation"},{"id":"e6e854cf-cb3b-43f3-ba5a-e2b142fbc39d","type":"GlyphRenderer"}],"title":{"id":"f989b6e1-4918-465f-8d3f-7f9728127f2e","type":"Title"},"tool_events":{"id":"adffa2fb-1b54-44e3-ae34-73d15e073a34","type":"ToolEvents"},"toolbar":{"id":"b551ee1c-4160-493a-aba2-7a29c7229618","type":"Toolbar"},"x_range":{"id":"186d2232-669d-462f-8b42-c8986b4e32a4","type":"DataRange1d"},"y_range":{"id":"5ae06572-d590-44d8-9e81-62fed1fc328d","type":"DataRange1d"}},"id":"360132a2-401e-4c82-a04e-a508601e4da0","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"5ae06572-d590-44d8-9e81-62fed1fc328d","type":"DataRange1d"},{"attributes":{"overlay":{"id":"44a5393f-9339-46dd-ab71-bb6649eca234","type":"BoxAnnotation"},"plot":{"id":"360132a2-401e-4c82-a04e-a508601e4da0","subtype":"Figure","type":"Plot"}},"id":"8decd1da-4a76-412a-ac0c-88c188f04784","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"360132a2-401e-4c82-a04e-a508601e4da0","subtype":"Figure","type":"Plot"}},"id":"2e264a6e-c4b4-43c7-aadd-7cbeeb915b1d","type":"ResetTool"},{"attributes":{"plot":{"id":"360132a2-401e-4c82-a04e-a508601e4da0","subtype":"Figure","type":"Plot"}},"id":"c23b5ffa-8d80-4076-91c2-f3aa36b7a7f5","type":"SaveTool"}],"root_ids":["360132a2-401e-4c82-a04e-a508601e4da0"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"63760865-33b7-4976-86d1-43be720b646c","elementid":"4ac03878-3775-4dab-acdd-e9739834f78d","modelid":"360132a2-401e-4c82-a04e-a508601e4da0"}];
                  
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