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
      };var element = document.getElementById("10afee4f-896a-4004-ba0c-03fd27b9515c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '10afee4f-896a-4004-ba0c-03fd27b9515c' but no matching script tag was found. ")
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
                  var docs_json = {"dba15891-87c8-4a16-9cbc-ccc2c5e47420":{"roots":{"references":[{"attributes":{"plot":{"id":"5be7f9b4-be19-48b4-ae20-ee4f16553a7c","subtype":"Figure","type":"Plot"}},"id":"2952eebe-da0f-4394-b30a-46a6f238a29c","type":"HelpTool"},{"attributes":{"plot":{"id":"5be7f9b4-be19-48b4-ae20-ee4f16553a7c","subtype":"Figure","type":"Plot"},"ticker":{"id":"2dc2db80-5fd5-41bd-be62-bdfe91e6e76d","type":"BasicTicker"}},"id":"9de6d9ae-d9a8-45fb-8826-ecb48e96104c","type":"Grid"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ca94df00-9256-48dd-a450-8808c7e851c6","type":"Line"},{"attributes":{"plot":{"id":"5be7f9b4-be19-48b4-ae20-ee4f16553a7c","subtype":"Figure","type":"Plot"}},"id":"23f6712c-f9fa-420b-996d-332f499c5acb","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"b38d242f-3c8a-435b-bd4c-760fe43886de","type":"Line"},{"attributes":{"plot":null,"text":"example"},"id":"749f368f-a331-41e2-a296-9c7c975bb846","type":"Title"},{"attributes":{"plot":{"id":"5be7f9b4-be19-48b4-ae20-ee4f16553a7c","subtype":"Figure","type":"Plot"}},"id":"0a4aeb5f-6f7a-4865-9e11-65abae76c316","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1818587f-60a6-41a5-bf83-4f74c884fb45","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"1818587f-60a6-41a5-bf83-4f74c884fb45","type":"BoxAnnotation"},"plot":{"id":"5be7f9b4-be19-48b4-ae20-ee4f16553a7c","subtype":"Figure","type":"Plot"}},"id":"911c71e9-6dde-4b86-a045-2ddb3fb0d868","type":"BoxZoomTool"},{"attributes":{},"id":"a357e126-4dd1-40dd-a0d5-978ce66be4ba","type":"BasicTickFormatter"},{"attributes":{},"id":"2dc2db80-5fd5-41bd-be62-bdfe91e6e76d","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"44569e5d-ffc9-4fb8-adce-8f8434156e48","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"5be7f9b4-be19-48b4-ae20-ee4f16553a7c","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b4bbdef-4deb-4924-a0fe-6b09fb5142a7","type":"BasicTicker"}},"id":"a316ce5b-76d5-42be-9bf5-515ccb9f245f","type":"Grid"},{"attributes":{"callback":null},"id":"6f425537-6b3c-4463-af27-e97cf8f9f926","type":"DataRange1d"},{"attributes":{"plot":{"id":"5be7f9b4-be19-48b4-ae20-ee4f16553a7c","subtype":"Figure","type":"Plot"}},"id":"072a70e6-4aee-4d2b-acfd-f0a8bf6d2f78","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0a4aeb5f-6f7a-4865-9e11-65abae76c316","type":"PanTool"},{"id":"23f6712c-f9fa-420b-996d-332f499c5acb","type":"WheelZoomTool"},{"id":"911c71e9-6dde-4b86-a045-2ddb3fb0d868","type":"BoxZoomTool"},{"id":"72c465ae-1af2-44a0-a274-d7b9dff5128f","type":"SaveTool"},{"id":"072a70e6-4aee-4d2b-acfd-f0a8bf6d2f78","type":"ResetTool"},{"id":"2952eebe-da0f-4394-b30a-46a6f238a29c","type":"HelpTool"}]},"id":"9c527de3-bfdf-49a1-9000-f6d200e0ad17","type":"Toolbar"},{"attributes":{"formatter":{"id":"9fa2baa6-6333-4f9a-8658-c269236a72eb","type":"BasicTickFormatter"},"plot":{"id":"5be7f9b4-be19-48b4-ae20-ee4f16553a7c","subtype":"Figure","type":"Plot"},"ticker":{"id":"9b4bbdef-4deb-4924-a0fe-6b09fb5142a7","type":"BasicTicker"}},"id":"d3e8e47d-e359-4a18-a3ff-9080d796574b","type":"LinearAxis"},{"attributes":{"callback":null},"id":"015a0248-4374-4416-af0b-46247b89e70f","type":"DataRange1d"},{"attributes":{"data_source":{"id":"2a8ed20c-98ee-4e7e-986e-2bf58031a015","type":"ColumnDataSource"},"glyph":{"id":"ca94df00-9256-48dd-a450-8808c7e851c6","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"b38d242f-3c8a-435b-bd4c-760fe43886de","type":"Line"},"selection_glyph":null},"id":"08fedd12-01f5-471a-9608-697a408e4a3a","type":"GlyphRenderer"},{"attributes":{},"id":"9b4bbdef-4deb-4924-a0fe-6b09fb5142a7","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"2a8ed20c-98ee-4e7e-986e-2bf58031a015","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"5be7f9b4-be19-48b4-ae20-ee4f16553a7c","subtype":"Figure","type":"Plot"}},"id":"72c465ae-1af2-44a0-a274-d7b9dff5128f","type":"SaveTool"},{"attributes":{},"id":"9fa2baa6-6333-4f9a-8658-c269236a72eb","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"a357e126-4dd1-40dd-a0d5-978ce66be4ba","type":"BasicTickFormatter"},"plot":{"id":"5be7f9b4-be19-48b4-ae20-ee4f16553a7c","subtype":"Figure","type":"Plot"},"ticker":{"id":"2dc2db80-5fd5-41bd-be62-bdfe91e6e76d","type":"BasicTicker"}},"id":"65b4ce55-d5c1-49c8-8507-51cbb4e39439","type":"LinearAxis"},{"attributes":{},"id":"d6852482-d024-4eb5-8166-67205cd386ec","type":"ToolEvents"},{"attributes":{"below":[{"id":"65b4ce55-d5c1-49c8-8507-51cbb4e39439","type":"LinearAxis"}],"left":[{"id":"d3e8e47d-e359-4a18-a3ff-9080d796574b","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"65b4ce55-d5c1-49c8-8507-51cbb4e39439","type":"LinearAxis"},{"id":"9de6d9ae-d9a8-45fb-8826-ecb48e96104c","type":"Grid"},{"id":"d3e8e47d-e359-4a18-a3ff-9080d796574b","type":"LinearAxis"},{"id":"a316ce5b-76d5-42be-9bf5-515ccb9f245f","type":"Grid"},{"id":"1818587f-60a6-41a5-bf83-4f74c884fb45","type":"BoxAnnotation"},{"id":"08fedd12-01f5-471a-9608-697a408e4a3a","type":"GlyphRenderer"},{"id":"522dfdc4-3a01-4467-a0d3-23bfc984d446","type":"GlyphRenderer"}],"title":{"id":"749f368f-a331-41e2-a296-9c7c975bb846","type":"Title"},"tool_events":{"id":"d6852482-d024-4eb5-8166-67205cd386ec","type":"ToolEvents"},"toolbar":{"id":"9c527de3-bfdf-49a1-9000-f6d200e0ad17","type":"Toolbar"},"x_range":{"id":"015a0248-4374-4416-af0b-46247b89e70f","type":"DataRange1d"},"y_range":{"id":"6f425537-6b3c-4463-af27-e97cf8f9f926","type":"DataRange1d"}},"id":"5be7f9b4-be19-48b4-ae20-ee4f16553a7c","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"d5e476db-30db-4074-98a4-0acb9cc38a92","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d5e476db-30db-4074-98a4-0acb9cc38a92","type":"ColumnDataSource"},"glyph":{"id":"44569e5d-ffc9-4fb8-adce-8f8434156e48","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"402d4700-0c69-40f5-b2dc-5f0e688ec6f2","type":"Circle"},"selection_glyph":null},"id":"522dfdc4-3a01-4467-a0d3-23bfc984d446","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"402d4700-0c69-40f5-b2dc-5f0e688ec6f2","type":"Circle"}],"root_ids":["5be7f9b4-be19-48b4-ae20-ee4f16553a7c"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"dba15891-87c8-4a16-9cbc-ccc2c5e47420","elementid":"10afee4f-896a-4004-ba0c-03fd27b9515c","modelid":"5be7f9b4-be19-48b4-ae20-ee4f16553a7c"}];
                  
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