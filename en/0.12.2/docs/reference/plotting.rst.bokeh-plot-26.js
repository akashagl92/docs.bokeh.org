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
      };var element = document.getElementById("8390ed8e-373c-4f31-8126-5728d5cfba93");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8390ed8e-373c-4f31-8126-5728d5cfba93' but no matching script tag was found. ")
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
                  var docs_json = {"f3a4ca19-30e6-4c48-ab43-a4025750f18f":{"roots":{"references":[{"attributes":{},"id":"882f6f73-c715-4037-91f9-6c2da66b322b","type":"ToolEvents"},{"attributes":{"below":[{"id":"07700e71-2631-4c62-8a9c-4d267baca615","type":"LinearAxis"}],"left":[{"id":"6ee5003a-4254-4ab8-894c-562c165ba430","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"07700e71-2631-4c62-8a9c-4d267baca615","type":"LinearAxis"},{"id":"ef84c357-5bae-4f2b-96f6-8b32b83c2266","type":"Grid"},{"id":"6ee5003a-4254-4ab8-894c-562c165ba430","type":"LinearAxis"},{"id":"82e35c83-3627-4eba-bddd-345494901283","type":"Grid"},{"id":"dcee1d42-132d-4c77-94f6-2dc5760d717a","type":"BoxAnnotation"},{"id":"aada75b3-a110-4272-b932-b46e7871dfdf","type":"GlyphRenderer"}],"title":{"id":"104cc86d-0028-4cc9-8f87-8e9abc8181c5","type":"Title"},"tool_events":{"id":"882f6f73-c715-4037-91f9-6c2da66b322b","type":"ToolEvents"},"toolbar":{"id":"afec9ca0-3b42-48ba-9c56-6e116b3b130f","type":"Toolbar"},"x_range":{"id":"517ca3e7-17ef-43fe-8c2d-6b9a3f07f61f","type":"DataRange1d"},"y_range":{"id":"eb268240-3d09-4c8d-be1f-b38a83a3f44c","type":"DataRange1d"}},"id":"7ca55f9b-3394-4ac9-a5e8-5e338cd7aaed","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"7ca55f9b-3394-4ac9-a5e8-5e338cd7aaed","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd49b05e-9057-48ce-86b8-6b03fffad129","type":"BasicTicker"}},"id":"ef84c357-5bae-4f2b-96f6-8b32b83c2266","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"7ca55f9b-3394-4ac9-a5e8-5e338cd7aaed","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc52cbba-7d1c-4aa7-9269-c2ca1a590214","type":"BasicTicker"}},"id":"82e35c83-3627-4eba-bddd-345494901283","type":"Grid"},{"attributes":{"callback":null},"id":"517ca3e7-17ef-43fe-8c2d-6b9a3f07f61f","type":"DataRange1d"},{"attributes":{"callback":null},"id":"eb268240-3d09-4c8d-be1f-b38a83a3f44c","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f2c7937b-6f75-45bf-9e3b-17060a71ad4b","type":"X"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1936a241-4b35-4bb5-881e-1cbdbbdab995","type":"PanTool"},{"id":"c978d447-5d80-46a0-99f5-c273cd025539","type":"WheelZoomTool"},{"id":"2ec9ada1-23f7-418f-bc4f-b6abc6b9b8c7","type":"BoxZoomTool"},{"id":"95514ddb-68fc-44e8-ab86-41687aceeabe","type":"SaveTool"},{"id":"05ea0777-7852-4090-bcb3-32ca50197292","type":"ResetTool"},{"id":"79719e33-81b1-4589-b0d2-716c195ebeb6","type":"HelpTool"}]},"id":"afec9ca0-3b42-48ba-9c56-6e116b3b130f","type":"Toolbar"},{"attributes":{"plot":{"id":"7ca55f9b-3394-4ac9-a5e8-5e338cd7aaed","subtype":"Figure","type":"Plot"}},"id":"95514ddb-68fc-44e8-ab86-41687aceeabe","type":"SaveTool"},{"attributes":{"plot":null,"text":null},"id":"104cc86d-0028-4cc9-8f87-8e9abc8181c5","type":"Title"},{"attributes":{"plot":{"id":"7ca55f9b-3394-4ac9-a5e8-5e338cd7aaed","subtype":"Figure","type":"Plot"}},"id":"1936a241-4b35-4bb5-881e-1cbdbbdab995","type":"PanTool"},{"attributes":{"plot":{"id":"7ca55f9b-3394-4ac9-a5e8-5e338cd7aaed","subtype":"Figure","type":"Plot"}},"id":"79719e33-81b1-4589-b0d2-716c195ebeb6","type":"HelpTool"},{"attributes":{"formatter":{"id":"734c1250-45b7-49a9-94c1-a8acd69aa46b","type":"BasicTickFormatter"},"plot":{"id":"7ca55f9b-3394-4ac9-a5e8-5e338cd7aaed","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc52cbba-7d1c-4aa7-9269-c2ca1a590214","type":"BasicTicker"}},"id":"6ee5003a-4254-4ab8-894c-562c165ba430","type":"LinearAxis"},{"attributes":{"formatter":{"id":"afe0f8cc-f9bf-4f20-95ec-a0deaf10cc00","type":"BasicTickFormatter"},"plot":{"id":"7ca55f9b-3394-4ac9-a5e8-5e338cd7aaed","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd49b05e-9057-48ce-86b8-6b03fffad129","type":"BasicTicker"}},"id":"07700e71-2631-4c62-8a9c-4d267baca615","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"15a37e3a-df07-42b7-941e-d441b10eeb05","type":"ColumnDataSource"},{"attributes":{},"id":"fc52cbba-7d1c-4aa7-9269-c2ca1a590214","type":"BasicTicker"},{"attributes":{"data_source":{"id":"15a37e3a-df07-42b7-941e-d441b10eeb05","type":"ColumnDataSource"},"glyph":{"id":"a5a1ae61-6985-422c-b152-70ec36d2241f","type":"X"},"hover_glyph":null,"nonselection_glyph":{"id":"f2c7937b-6f75-45bf-9e3b-17060a71ad4b","type":"X"},"selection_glyph":null},"id":"aada75b3-a110-4272-b932-b46e7871dfdf","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"dcee1d42-132d-4c77-94f6-2dc5760d717a","type":"BoxAnnotation"},"plot":{"id":"7ca55f9b-3394-4ac9-a5e8-5e338cd7aaed","subtype":"Figure","type":"Plot"}},"id":"2ec9ada1-23f7-418f-bc4f-b6abc6b9b8c7","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"dcee1d42-132d-4c77-94f6-2dc5760d717a","type":"BoxAnnotation"},{"attributes":{},"id":"afe0f8cc-f9bf-4f20-95ec-a0deaf10cc00","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"7ca55f9b-3394-4ac9-a5e8-5e338cd7aaed","subtype":"Figure","type":"Plot"}},"id":"c978d447-5d80-46a0-99f5-c273cd025539","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"7ca55f9b-3394-4ac9-a5e8-5e338cd7aaed","subtype":"Figure","type":"Plot"}},"id":"05ea0777-7852-4090-bcb3-32ca50197292","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#fa9fb5"},"line_color":{"value":"#fa9fb5"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a5a1ae61-6985-422c-b152-70ec36d2241f","type":"X"},{"attributes":{},"id":"fd49b05e-9057-48ce-86b8-6b03fffad129","type":"BasicTicker"},{"attributes":{},"id":"734c1250-45b7-49a9-94c1-a8acd69aa46b","type":"BasicTickFormatter"}],"root_ids":["7ca55f9b-3394-4ac9-a5e8-5e338cd7aaed"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"f3a4ca19-30e6-4c48-ab43-a4025750f18f","elementid":"8390ed8e-373c-4f31-8126-5728d5cfba93","modelid":"7ca55f9b-3394-4ac9-a5e8-5e338cd7aaed"}];
                  
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